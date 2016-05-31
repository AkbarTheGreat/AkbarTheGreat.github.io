
var oldSite = 'http://www.worxnc.com/players/login1.php';
var ping    = 'http://akbar.duckdns.org/worx/ping';
var newSite = 'http://akbar.duckdns.org/worx/signups';

function loadOldSite()
{
	alert("New site down, loading original site.");
	window.location.replace(oldSite);
}

function loadNewSite()
{
	window.location.replace(newSite);
}

$(function()
	{
		$.get(ping, {}, function() { loadNewSite(); }).fail(function() { loadOldSite(); });
	});
