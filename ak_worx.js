
$(function() {
    console.log( "ready!" );
    $.get(
       "http://www.worxnc.com/players/login1.php",
       {},
       function(data)
       {
        alert('page content: ' + data);
       });
});

