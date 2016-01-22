$(document).bind('ready', function()
{
	var menu = $('div#bootstrapnav ul:first')
	
	menu.removeClass('menu')
	menu.addClass("nav nav-pills");
	
	var menuitems = $('div#bootstrapnav ul:first > li')
	menuitems.removeClass("expanded");
	menuitems.addClass("dropdown");
	
	$('div#bootstrapnav ul:first >li.active-trail').addClass("active");
	
	$('div#bootstrapnav ul:first > li:has(ul) > a').addClass("dropdown-toggle").attr('data-toggle', 'dropdown');
	
	$('div#bootstrapnav ul:first > li > ul').addClass('dropdown-menu'); 
	
	$('.dropdown-toggle').dropdown()
	
	$('li.nav-header a').removeAttr('href');
});