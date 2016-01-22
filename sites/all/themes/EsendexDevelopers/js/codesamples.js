$().ready(function()
{
    /*$("[id^=codetab-]").click(function(){alert()});*/
    $('a[data-toggle="tab"]').on('shown', function(e) {
        var language = $(e.target).attr('href').substr(1).split('-');
        $.cookie('codelanguage',language[1]);
    });

    var selectedLanguage = $.cookie('codelanguage');
    if (selectedLanguage != null) {
        $('a[id^=codetab-'+selectedLanguage+']').tab('show');
    }
    else
    {
    	$('ul[id^=codeblock] a:first').tab('show');
    }
});