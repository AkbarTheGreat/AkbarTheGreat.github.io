
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
	console.log( 'ready!' );
	$('#go_button').click(function()
	{
//		$('#worx_origin').hide();
//		getData($('#worx_origin #form4 input'));
		innerDoc = $('#worx_origin')[0].contentDocument;
		getData($('#form4', innerDoc));
	});
});

