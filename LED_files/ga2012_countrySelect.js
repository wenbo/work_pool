// ----------------------------------------------------------------------------
// Country Select
// ----------------------------------------------------------------------------
var selectorData = [
	{
		"areaId" : "asia",
		"area" : "Asia &amp; Oceania",
		"countries" : [
			{"name" : "India (English)", "url" : "http://panasonic.co.in/", "ga" : "/virtual_PV/outbound_0a/Asia&Oceania/India"},
			{"name" : "Indonesia (English)", "url" : "http://panasonic.co.id/", "ga" : "/virtual_PV/outbound_0a/Asia&Oceania/Indonesia"},
			{"name" : "Malaysia (English)", "url" : "http://panasonic.com.my/", "ga" : "/virtual_PV/outbound_0a/Asia&Oceania/Malaysia"},
			{"name" : "Philippines (English)", "url" : "http://panasonic.com.ph/", "ga" : "/virtual_PV/outbound_0a/Asia&Oceania/Philippines"},
			{"name" : "Singapore (English)", "url" : "http://panasonic.com.sg/", "ga" : "/virtual_PV/outbound_0a/Asia&Oceania/Singapore"},
			{"name" : "Thailand (Thai)", "url" : "http://panasonic.co.th/", "ga" : "/virtual_PV/outbound_0a/Asia&Oceania/Thailand"},
			{"name" : "Viet Nam (Vietnamese)", "url" : "http://panasonic.com.vn/", "ga" : "/virtual_PV/outbound_0a/Asia&Oceania/VietNam_Vietnamese"},
			{"name" : "Viet Nam (English)", "url" : "http://www.panasonic.com.vn/wps/portal/home?prefLang=en_US", "ga" : "/virtual_PV/outbound_0a/Asia&Oceania/VietNam_English"},
			{"name" : "Australia (English)", "url" : "http://panasonic.com.au/", "ga" : "/virtual_PV/outbound_0a/Asia&Oceania/Australia"},
			{"name" : "New Zealand (English)", "url" : "http://panasonic.co.nz/", "ga" : "/virtual_PV/outbound_0a/Asia&Oceania/NewZealand"}
		]
	},
	{
		"areaId" : "china",
		"area" : "China &amp; Northeast Asia",
		"countries" : [
			{"name" : "Japan (Japanese)", "url" : "http://panasonic.co.jp/", "ga" : "/virtual_PV/outbound_0a/China&NortheastAsia/Japan"},
			{"name" : "China (Simplified Chinese)", "url" : "http://panasonic.cn/", "ga" : "/virtual_PV/outbound_0a/China&NortheastAsia/China"},
			{"name" : "Korea (Korean)", "url" : "http://panasonic.co.kr/", "ga" : "/virtual_PV/outbound_0a/China&NortheastAsia/Korea"},
			{"name" : "Hong Kong (Traditional Chinese)", "url" : "http://www.panasonic.hk/", "ga" : "/virtual_PV/outbound_0a/China&NortheastAsia/HongKong_TraditionalChinese"},
			{"name" : "Hong Kong (English)", "url" : "http://www.panasonic.hk/english/", "ga" : "/virtual_PV/outbound_0a/China&NortheastAsia/HongKong_English"},
			{"name" : "Mongolia (Russian)", "url" : "http://www.globalelectronics.mn", "ga" : "/virtual_PV/outbound_0a/China&NortheastAsia/Mongolia"},
			{"name" : "Taiwan (Traditional) Chinese", "url" : "http://panasonic.com.tw/", "ga" : "/virtual_PV/outbound_0a/China&NortheastAsia/Taiwan"}
		]
	},
	{
		"areaId" : "cis",
		"area" : "CIS,Middle East and Africa",
		"countries" : [
			{"name" : "Middle East (English)", "url" : "http://www.panasonic.ae/", "ga" : "/virtual_PV/outbound_0a/CIS&MiddleEastandAfrica/MiddleEast_English"},
			{"name" : "Middle East (Arabic)", "url" : "http://www.panasonic.ae/ar/", "ga" : "/virtual_PV/outbound_0a/CIS&MiddleEastandAfrica/MiddleEast_Arabic"},
			{"name" : "Middle East (Persian)", "url" : "http://www.panasonic.ae/PR/", "ga" : "/virtual_PV/outbound_0a/CIS&MiddleEastandAfrica/MiddleEast_Persian"},
			{"name" : "Russia (Russian)", "url" : "http://panasonic.ru/", "ga" : "/virtual_PV/outbound_0a/CIS&MiddleEastandAfrica/Russia"},
			{"name" : "Africa (English)", "url" : "http://africa.panasonic.net/", "ga" : "/virtual_PV/outbound_0a/CIS&MiddleEastandAfrica/Africa"},
			{"name" : "Ukraine (Russian)", "url" : "http://www.panasonic.ua/", "ga" : "/virtual_PV/outbound_0a/CIS&MiddleEastandAfrica/Ukraine"},
			{"name" : "South Africa (English)", "url" : "http://panasonic.co.za/", "ga" : "/virtual_PV/outbound_0a/CIS&MiddleEastandAfrica/SouthAfrica"}
		]
	},
	{
		"areaId" : "europe",
		"area" : "Europe",
		"countries" : [
			{"name" : "Austria (German)", "url" : "http://www.panasonic.de/", "ga" : "/virtual_PV/outbound_0a/Europe/Austria"},
			{"name" : "Belgium (Dutch)", "url" : "http://www.panasonic.be/", "ga" : "/virtual_PV/outbound_0a/Europe/Belgium_Dutch"},
			{"name" : "Belgium (French)", "url" : "http://www.panasonic.be/html/fr_BE/index_BE/index.html", "ga" : "/virtual_PV/outbound_0a/Europe/Belgium_French"},
			{"name" : "Bosnia &amp; Herzegovina (Dutch)", "url" : "http://www.panasonic.ba/", "ga" : "/virtual_PV/outbound_0a/Europe/Bosnia"},
			{"name" : "Bulgaria (Bulgarian)", "url" : "http://www.panasonic.bg/", "ga" : "/virtual_PV/outbound_0a/Europe/Bulgaria"},
			{"name" : "Croatia (Croatian)", "url" : "http://www.panasonic.hr/", "ga" : "/virtual_PV/outbound_0a/Europe/Croatia"},
			{"name" : "Czech Republic (Czech)", "url" : "http://www.panasonic.cz/", "ga" : "/virtual_PV/outbound_0a/Europe/CzechRepublic"},
			{"name" : "Denmark (Danish)", "url" : "http://www.panasonic.dk/", "ga" : "/virtual_PV/outbound_0a/Europe/Denmark"},
			{"name" : "Estonia (Estonian)", "url" : "http://www.panasonic.ee/", "ga" : "/virtual_PV/outbound_0a/Europe/Estonia"},
			{"name" : "Finland (Finnish)", "url" : "http://www.panasonic.fi/", "ga" : "/virtual_PV/outbound_0a/Europe/Finland"},
			{"name" : "France (French)", "url" : "http://www.panasonic.fr/", "ga" : "/virtual_PV/outbound_0a/Europe/France"},
			{"name" : "Germany (German)", "url" : "http://www.panasonic.de/", "ga" : "/virtual_PV/outbound_0a/Europe/Germany"},
			{"name" : "Hungary (Hungarian)", "url" : "http://www.panasonic.hu/", "ga" : "/virtual_PV/outbound_0a/Europe/Hungary"},
			{"name" : "Ireland (English)", "url" : "http://www.panasonic.co.uk/", "ga" : "/virtual_PV/outbound_0a/Europe/Ireland"},
			{"name" : "Italy (Italian)", "url" : "http://www.panasonic.it/", "ga" : "/virtual_PV/outbound_0a/Europe/Italy"},
			{"name" : "Latvia (Latvian)", "url" : "http://www.panasonic.lv/", "ga" : "/virtual_PV/outbound_0a/Europe/Latvia"},
			{"name" : "Lithuania (Lithuanian)", "url" : "http://www.panasonic.lt/", "ga" : "/virtual_PV/outbound_0a/Europe/Lithuania"},
			{"name" : "Nederland (Dutch)", "url" : "http://www.panasonic.nl/", "ga" : "/virtual_PV/outbound_0a/Europe/Nederland"},
			{"name" : "Norway (Norwegian)", "url" : "http://www.panasonic.no/", "ga" : "/virtual_PV/outbound_0a/Europe/Norway"},
			{"name" : "Luxemburg (Dutch)", "url" : "http://www.panasonic.be/", "ga" : "/virtual_PV/outbound_0a/Europe/Luxemburg"},
			{"name" : "Luxemburg (French)", "url" : "http://www.panasonic.be/html/fr_BE/index_BE/index.html", "ga" : "/virtual_PV/outbound_0a/Europe/Luxemburg"},
			{"name" : "Poland (Polish)", "url" : "http://www.panasonic.com.pl/", "ga" : "/virtual_PV/outbound_0a/Europe/Poland"},
			{"name" : "Romania (Romanian)", "url" : "http://www.panasonic.ro/", "ga" : "/virtual_PV/outbound_0a/Europe/Romania"},
			{"name" : "Serbia &amp; Montenegro (Serbian)", "url" : "http://www.panasonic.rs/", "ga" : "/virtual_PV/outbound_0a/Europe/Serbia"},
			{"name" : "Slovakia (Slovak)", "url" : "http://www.panasonic.sk/", "ga" : "/virtual_PV/outbound_0a/Europe/Slovakia_Slovak"},
			{"name" : "Slovenia (Serbian)", "url" : "http://www.panasonic.si/", "ga" : "/virtual_PV/outbound_0a/Europe/Slovenia_Serbian"},
			{"name" : "Spain (Spanish)", "url" : "http://www.panasonic.es/", "ga" : "/virtual_PV/outbound_0a/Europe/Spain"},
			{"name" : "Sweden (Swedish)", "url" : "http://www.panasonic.se/", "ga" : "/virtual_PV/outbound_0a/Europe/Sweden"},
			{"name" : "United kingdom (English)", "url" : "http://www.panasonic.co.uk/", "ga" : "/virtual_PV/outbound_0a/Europe/Unitedkingdom"}
		]
	},
	{
		"areaId" : "lAmerica",
		"area" : "Latain America",
		"countries" : [
			{"name" : "Argentina (Spanish)", "url" : "http://www.panasonic.com.ar/", "ga" : "/virtual_PV/outbound_0a/LatainAmerica/Argentina"},
			{"name" : "Brazil (Portuguese)", "url" : "http://www.panasonic.com.br/", "ga" : "/virtual_PV/outbound_0a/LatainAmerica/Brazil"},
			{"name" : "Chile (Spanish)", "url" : "http://www.panasonic.cl/", "ga" : "/virtual_PV/outbound_0a/LatainAmerica/Chile"},
			{"name" : "Colombia (Spanish)", "url" : "http://www.panasonic.com.co/", "ga" : "/virtual_PV/outbound_0a/LatainAmerica/Colombia"},
			{"name" : "Costa Rica (Spanish)", "url" : "http://www.panasonic.co.cr/", "ga" : "/virtual_PV/outbound_0a/LatainAmerica/CostaRica"},
			{"name" : "El Salvador (Spanish)", "url" : "http://www.panasonic.com.sv/", "ga" : "/virtual_PV/outbound_0a/LatainAmerica/ElSalvador"},
			{"name" : "Guatemala (Spanish)", "url" : "http://www.panasonic.com.gt/", "ga" : "/virtual_PV/outbound_0a/LatainAmerica/Guatemala"},
			{"name" : "Mexico (Spanish)", "url" : "http://www.panasonic.com.mx/", "ga" : "/virtual_PV/outbound_0a/LatainAmerica/Mexico"},
			{"name" : "Panama (Spanish)", "url" : "http://www.panasonic.com.pa/", "ga" : "/virtual_PV/outbound_0a/LatainAmerica/Panama"},
			{"name" : "Peru (Spanish)", "url" : "http://www.panasonic.com.pe/", "ga" : "/virtual_PV/outbound_0a/LatainAmerica/Peru"},
			{"name" : "Venezuela (Spanish)", "url" : "http://www.panasonic.com.ve/", "ga" : "/virtual_PV/outbound_0a/LatainAmerica/Venezuela"}
		]
	},
	{
		"areaId" : "nAmerica",
		"area" : "North America",
		"countries" : [
			{"name" : "Canada (English)", "url" : "https://panasonic.ca/english/homepage.asp", "ga" : "/virtual_PV/outbound_0a/NorthAmerica/Canada_English"},
			{"name" : "Canada (French)", "url" : "https://panasonic.ca/french/homepage.asp", "ga" : "/virtual_PV/outbound_0a/NorthAmerica/Canada_French"},
			{"name" : "USA (English)", "url" : "http://panasonic.com/", "ga" : "/virtual_PV/outbound_0a/NorthAmerica/USA"}
		]
	}
];
jQuery(document).ready(function($){
	var html = "";
	html += '<ul id="tab" class="cSelecterTab">';
	$.each(selectorData, function(i) {
		html += '<li class="' + selectorData[i].areaId + '"><a href="#' + selectorData[i].areaId + '">' + selectorData[i].area + '</a></li>';
	});
	html += '<!--end #tab--></ul>';
	
	html += '<div id="cSelecterTabCont">';
	$.each(selectorData, function(i) {
		html += '<div id="' + selectorData[i].areaId + '" class="hide">';
		html +='<p style="height:10px;"></p>'
		$.each(selectorData[i].countries, function(j) {
			var countryName = selectorData[i].countries[j].name;
			countryName = countryName.replace(/(^[a-zA-Z&; ]+)/, "<em>$1</em>");
			html += '<span><a href="' + selectorData[i].countries[j].url + '" onclick="_gaq.push([\'_trackPageview\',\''+ selectorData[i].countries[j].ga +'\']);">' + countryName + '</a></span>';
		});
		html += '</div>';
	});
	html += '<!--end #cSelecterTabCont--></div>';
	html += '<p class="globalHome"><a href="http://panasonic.net/"><em>Global Home</em></a></p>';
	html += '<p class="close"><a href="javascript:void(0);" class="close"><img src="/images/ga2012_country_selector_close.gif" width="11" height="11" alt="Close"></a></p>';
	$(".cSelecterBox").html(html);
});

// ----------------------------------------------------------------------------
// Country Selecter
// ----------------------------------------------------------------------------
jQuery(document).ready(function($){
	var Selector = $("p.cSelecter a.selector");
	var SelectorActive = "active";
	var SelectorContents = $("div.cSelecterBox");
	var SelectorClose = $(".copyright a.close");
	$(SelectorContents).hide();
	$(Selector).toggle(function() {
		$(SelectorContents).fadeIn(250);
		$(Selector).hide();
		$(Selector).fadeIn(250);
		$(Selector).show();
		$(SelectorContents).show();
		$(Selector).addClass(SelectorActive);
	},function(){
		$(SelectorContents).fadeOut(250, function() {
			$(SelectorContents).hide();
		});
		$(Selector).removeClass(SelectorActive);
	});
	$(SelectorClose).click(function() {
		$(Selector).trigger('click');
	});
});


// ----------------------------------------------------------------------------
// tab Setting
// ----------------------------------------------------------------------------
jQuery(document).ready(function($){
	var Tabs = $("div.copyright ul#tab li a");
	var TabActive = "active";
	var TabContents = $("div#cSelecterTabCont");
	$("div" , TabContents).hide();

	$(Tabs).click(function(e){
		e.preventDefault();
		$("div", TabContents).hide();
		var TabId = $(this).attr("hash") || $(this).attr("href");
		$(TabId).fadeIn(250);
		$(Tabs).removeClass(TabActive);
		$(this).addClass(TabActive);
		$.cookie("countryselector", TabId , {expires: 365});
	});

	// Cookie
	var CookieName = $.cookie("countryselector");
	if (CookieName != null) {
		$(Tabs).removeClass(TabActive);
		$("a[href$="+CookieName+"]").addClass(TabActive);
		$(CookieName).fadeIn(300);
	} else {
		try{
		if (ga2012Country.settings.id != "") {
			$("a[href$="+ga2012Country.settings.id+"]").addClass(TabActive);
		}
		}catch(e){}
		$("div:first", TabContents).fadeIn(300);
	}
});


/**
 * jQuery Cookie plugin
 *
 * Copyright (c) 2010 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */
jQuery.cookie = function (key, value, options) {

    // key and at least value given, set cookie...
    if (arguments.length > 1 && String(value) !== "[object Object]") {
        options = jQuery.extend({}, options);

        if (value === null || value === undefined) {
            options.expires = -1;
        }

        if (typeof options.expires === 'number') {
            var days = options.expires, t = options.expires = new Date();
            t.setDate(t.getDate() + days);
        }

        value = String(value);

        return (document.cookie = [
            encodeURIComponent(key), '=',
            options.raw ? value : encodeURIComponent(value),
            options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
            options.path ? '; path=' + options.path : '',
            options.domain ? '; domain=' + options.domain : '',
            options.secure ? '; secure' : ''
        ].join(''));
    }

    // key and possibly options given, get cookie...
    options = value || {};
    var result, decode = options.raw ? function (s) { return s; } : decodeURIComponent;
    return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null;
};
