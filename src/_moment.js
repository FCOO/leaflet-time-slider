if (window.moment){
	if (lang is danish){
		window.moment.locale('en', {
			months				: ['januar','februar','marts','april','maj','juni','juli','august','september','oktober','november','december'],
			monthsShort		: ['jan','feb','mar','apr','maj','jun','jul','aug','sep','okt','nov','dec'],
			weekdays			: ['s�ndag','mandag','tirsdag','onsdag','torsdag','fredag','l�rdag'],
			weekdaysShort	: ['s�n','man','tir','ons','tor','fre','l�r'],
			weekdaysMin		: ['s�','ma','ti','on','to','fr','l�']
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



