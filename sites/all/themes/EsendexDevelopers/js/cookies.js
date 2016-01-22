$(document).bind('ready', function()
{
	$('#cookies_popup').delay(2000).slideDown('slow').delay(20000).slideUp('slow');
	$('#close').click(function(){$('#cookies_popup').stop().slideUp('slow');});
});