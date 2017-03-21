# leaflet-time-slider
>
[jquery-time-slider]:https://github.com/FCOO/leaflet-time-slider
[leaflet-control-box]:https://github.com/FCOO/leaflet-control-box


## Description
Creates a [jquery-time-slider] in a [leaflet-control-box] 

## Installation
### bower
`bower install https://github.com/FCOO/leaflet-time-slider.git --save`

## Demo
http://FCOO.github.io/leaflet-time-slider/demo/ 

## Usage

	var myTimeSliderControl = new L.Control.TimeSlider({
		  lang: lang,
		  position: 'topright',
		  defaultMinimized: false,
		  displayAsLocal	: false,

		  minMoment	: moment().add(-1, 'd'), 
		  maxMoment	: moment().add(2, 'd'), 
		  fromMoment: moment(),
		  step			: 1,

		  callback: function( result ){ console.log(result); } 
		}).addTo(map);


### options
<table>
<tr>
<th>Id</th>
<th>Type</th> 
<th>Default</th>
<th>Description</th>
</tr>

<tr>
	<td>lang</td>
	<td>string</td>
	<td>"da"</td>
	<td>Language-code "da" or "en"</td>
</tr>

<tr>
	<td>position</td>
	<td>string</td>
	<td></td>
	<td>[http://leafletjs.com/reference.html#control-positions](Leaflet control-position)</td>
</tr>

<tr>
	<td>defaultMinimized</td>
	<td>boolean</td>
	<td>false</td>
	<td>If true the control is closed/hidden on load</td>
</tr>

<tr>
	<td>displayAsLocal</td>
	<td>boolean</td>
	<td>false</td>
	<td>If true the time is displayed in local time on load</td>
</tr>

<tr>
	<td>minMoment</td>
	<td>moment</td>
	<td></td>
	<td>The minimum moment/time on the scale</td>
</tr>
<tr>
	<td>maxMoment</td>
	<td>moment</td>
	<td></td>
	<td>The maximum moment/time on the scale</td>
</tr>
<tr>
	<td>fromMoment</td>
	<td>moment</td>
	<td></td>
	<td>The selected moment</td>
</tr>

<tr>
	<td>callback</td>
	<td><code>function(&nbsp;result&nbsp;)</code></td>
	<td></td>
	<td>The callback-function.<br> 
<code>result</code><br>
<code>&nbsp;&nbsp;.minMoment</code><br>
<code>&nbsp;&nbsp;.min</code> minMoment as relative hours (ex. -24)<br>
<code>&nbsp;&nbsp;.maxMoment</code><br>
<code>&nbsp;&nbsp;.max</code> maxMoment as relative hours (ex. +48)<br>
<code>&nbsp;&nbsp;.fromMoment</code><br>
<code>&nbsp;&nbsp;.from</code> fromMoment as relative hours (ex. +2)
	</td>
</tr>
<tr>
	<td>callbackLocal</td>
	<td><code>function(&nbsp;displayAsLocal&nbsp;)</code></td>
	<td></td>
	<td>The callback-function when the checkbox <code>[x] Use local time</code> is clicked. `displayAsLocal` is boolean
	</td>
</tr>
</table>


To step > 1 hour: See [jquery-time-slider] on how to use `options.step`, `options.step_offset`, and `options.step_offset_moment`
 

### Methods

All methods in [leaflet-control-box] is avaiable.

`.trimeSlider` contains the TimeSlider-object with as in [jquery-time-slider]



## Copyright and License
This plugin is licensed under the [MIT license](https://github.com/FCOO/leaflet-time-slider/LICENSE).

Copyright (c) 2015 [FCOO](https://github.com/FCOO)

## Contact information

Niels Holt nho@fcoo.dk


