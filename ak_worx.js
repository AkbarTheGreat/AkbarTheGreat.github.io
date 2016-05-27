
function getWorxDocument()
{
	var htmlString = $('#worx_origin').html();
	return $('#worx_origin')[0].contentDocument;
}

function getData(children)
{
	children.each(function(idx, val)
	{
		console.log("thing");
		console.log( val.val() );
	});
}

$(function()
{
	   var script = document.createElement('script');
	    script.setAttribute('type', 'text/javascript');
	    script.setAttribute('src', 'http://www.worxnc.com/players/login1.php');

	console.log( 'ready!' );
	$('#go_button').click(function()
	{
//		$('#worx_origin').hide();
//		getData($('#worx_origin #form4 input'));
		innerDoc = getWorxDocument();
		getData($('#form4', innerDoc));
	});
});

