
var oldSite = 'http://www.worxnc.com/players/login1.php';
var ping    = 'http://akbar.duckdns.org/worx/ping';
var newSite = 'http://akbar.duckdns.org/worx/ping';

var newSiteOnline

function loadOldSite()
{
	alert("Failure!");
//	window.location.replace(oldSite);
}

function loadNewSite()
{
	alert("Success!");
//	window.location.replace(newSite);
}

$(function(){
//	try
	{
		$.ajax({
		    url: ping,
		    data: {},
		    type: 'GET',
		    crossDomain: true,
		    dataType: 'jsonp',
		    success: function() { loadNewSite(); },
		    error: function()   { loadOldSite(); },
		});
	}
//	catch(e)
//	{
//		alert("Unexpected Failure!");
//	}
});
