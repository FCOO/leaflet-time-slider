if (window.moment){
	if (lang is danish){
		window.moment.locale('en', {
			months				: ['januar','februar','marts','april','maj','juni','juli','august','september','oktober','november','december'],
			monthsShort		: ['jan','feb','mar','apr','maj','jun','jul','aug','sep','okt','nov','dec'],
			weekdays			: ['søndag','mandag','tirsdag','onsdag','torsdag','fredag','lørdag'],
			weekdaysShort	: ['søn','man','tir','ons','tor','fre','lør'],
			weekdaysMin		: ['sø','ma','ti','on','to','fr','lø']
		});			
	} 
	else {
		window.moment.locale('en', {
			months				: ['January','February','March','April','May','June','July','August','September','October','November','December'],
			monthsShort		: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
			weekdays			: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
			weekdaysShort	: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
			weekdaysMin		: ['Su','Mo','Tu','We','Th','Fr','Sa']
		});			
	}
}



