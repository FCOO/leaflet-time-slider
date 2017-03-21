/****************************************************************************
    leaflet-time-slider.js, 

    (c) 2015, FCOO

    https://github.com/FCOO/leaflet-time-slider
    https://github.com/FCOO

****************************************************************************/
(function ($, L/*, window, document, undefined*/) {
    "use strict";

    //Extend base leaflet class
    L.Control.TimeSlider = L.Control.Box.extend({

        
    //Default options    
        options: {
            VERSION       : "{VERSION}",
            toggleDisplay : true,
            iconClassName : 'fa-clock-o',
            lang          : 'da',
            displayAsLocal: true,
            step          : 1,
            step_offset   : 0,
            hideText      : '',
            width         : 300,        
            height        : 154
        },

        //initialize
        initialize: function(options) {
            L.Control.Box.prototype.initialize.call(this, options );
        },

        //addTo
        addTo: function (map) { 
            L.Control.Box.prototype.addTo.call(this, map); 
            this._create();
            return this;
        },

        onAdd: function (map) { 
            var result = L.Control.Box.prototype.onAdd.call(this, map );
            return result;
        },

        //_create - time-slider need to be created on a DOM-object.
        _create: function() {

            var langDa = (this.options.lang == 'da');
            
            //Adjust the container
//            var $container = $(this.userContainer);
            var $container = $(this.contentContainer);

            //$container.css('padding','44px');

            //Append the div with current time
            $container.append(
                '<div style="text-align:center; border:1px solid black; padding:0px; margin:0 10px; width:90%; background-color:#DDDDDD;">' +
                    '<span id="currentMomentLocal" class="only_local"></span><span class="only_local">&nbsp;('+(langDa ? 'lokal' : 'local')+')</span>' +
                    '<span id="currentMomentUTC" class="only_utc"></span><span class="only_utc">&nbsp;('+(langDa ? 'UTC' : 'UTC')+')</span>' +
                '</div>');

            //Append buttons
            var $buttonContainer = $('<div style="text-align:center; margin:0; width:100%;"></div>').appendTo($container),
                    buttonClass = 'btn'; //'btn btn-default btn-lg';

            $buttonContainer.append([
                '<button id="tsFirst" class="'+buttonClass+'"><i class="fa fa-fast-backward"></i></button>',
                '<button id="tsPrev"  class="'+buttonClass+'"><i class="fa fa-step-backward"></i></button>',
                '<button id="tsNow"   class="'+buttonClass+'"><span class="fa">' + (langDa ? 'Nu' : 'Now') + '</span></button>',
                '<button id="tsNext"  class="'+buttonClass+'"><i class="fa fa-step-forward"></i></button>',
                '<button id="tsLast"  class="'+buttonClass+'"><i class="fa fa-fast-forward"></i></button>'
            ]);

            //Create the time-slider
            var $sliderContainer = $('<div style="width:100%; height:80px"></div>').appendTo( $container ),
                $sliderInput     = $('<input/>').appendTo( $sliderContainer );

            //
            var timeSliderOptions = {
                    type   : 'single',        
                    slider : 'small',
                    display: { from: { tzElement: ('#currentMomentLocal'), utcElement: $('#currentMomentUTC') } },
                    buttons: { from: { firstBtn:'tsFirst', previousBtn:'tsPrev', nowBtn:'tsNow', nextBtn:'tsNext', lastBtn:'tsLast'} },

                    minMoment : this.options.minMoment,
                    maxMoment : this.options.maxMoment,
                    fromMoment: this.options.fromMoment,
            
                    min : this.options.min,
                    max : this.options.max,
                    from: this.options.from,

                    step              : this.options.step,
                    step_offset       : this.options.step_offset,
                    step_offset_moment: this.options.step_offset_moment,

                    callback_on_dragging: false,    
                    hide_bar_color      : true,

                    format: {date: 'DMY', time: '24', showRelative: false, timezone: 'local', showUTC: false },

                    callback: this.options.callback
                };

            this.timeSlider = $sliderInput.timeSlider( timeSliderOptions ).data('timeSlider');

            var $localCheckboxContainer = $('<div style="text-align:left; margin:0; width:100%;"></div>').appendTo($container),
                $localCheckbox = $('<input id="tsLocal" type="checkbox" class="input-check" '+(this.options.displayAsLocal?'checked':'')+'/>'),
                onChange = function(){ 
                    var controlBox = $(this).data('controlbox'),
                        timeSlider = controlBox.timeSlider;

                    if (this.checked){
                        $('.only_local').show(); $('.only_utc').hide();
                        moment.sfSetFormat({ timezone: 'local' });
                        timeSlider.setFormat();
                    }    
                    else {
                        $('.only_local').hide(); $('.only_utc').show();
                        moment.sfSetFormat({ timezone: 'utc' });
                        timeSlider.setFormat();
                    }
                    if (controlBox.options.callbackLocal)
                        controlBox.options.callbackLocal( this.checked );                          
                };

            $localCheckbox.data('controlbox', this );
            //$localCheckbox.data('timeslider', this.timeSlider );
            $localCheckbox.on('change', onChange );

            //Create label for the checkbox
            var utcOffset = moment().utcOffset(),
                utcOffsetMin = Math.abs(utcOffset) % 60,
                utcOffsetHour = (Math.abs(utcOffset) - utcOffsetMin) / 60,
                utcOffsetStr = 'UTC' + (utcOffset < 0 ? '-' : '+') + (utcOffsetHour < 10 ? '0' :'') + utcOffsetHour + ':' + ( utcOffsetMin ? utcOffsetMin : '00');

            $localCheckboxContainer.append([
                $localCheckbox,
                $('<label for="tsLocal">' + (langDa ? 'Brug lokal tid' : 'Use local time') +' (' + utcOffsetStr + ')' + '</label>')
            ]);

            //Update time-slider
            onChange.call( $localCheckbox.get(0) ); 
        }
    });

}(jQuery, L, this, document));
