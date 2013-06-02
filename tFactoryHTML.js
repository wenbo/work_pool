tFilterFactoryCont1Obj = $('#prdlist_cont1_filter_factory');
tFactoryHTML = tFilterFactoryCont1Obj.html();

<div class="rela_box" style="{$-plugin-string-1}">
<a class="a1" href="http://home.panasonic.cn/%7B$-category-product-folder%7D" notclickable="{$notclickable}" onmouseover="if ($(this).attr('notclickable') == '1') { $(this).css('cursor', 'default'); $(this).attr('href', '###'); }">
<div class="img"><img src="./LED_files/property-{$property_topid}-list.{$property_topid_filetype}" alt="{$topic}"><span class="icon{$state}"></span></div>
<h4>{$topic}</h4>
<div class="dscp">{$subtopic}</div>
</a>
<a class="btn_prd" href="http://home.panasonic.cn/%7B$-category-product-folder%7D" notclickable="{$notclickable}" onmouseover="if ($(this).attr('notclickable') == '1') { $(this).css('cursor', 'default'); $(this).attr('href', '###'); }">{$-notclickable-text}</a>
</div>

tDataListArray = filterfactor.datalist.tGetArray();
ti = 11;
tFactoryHTML = tFactoryHTML.replace(/%7B/g, '{');
tFactoryHTML = tFactoryHTML.replace(/%7D/g, '}');
tFactoryHTML = tFactoryHTML.replace(/\{\$\-category\-product\-folder\}/g, tDataListArray[ti]['-category-product-folder']);
tFactoryHTML = tFactoryHTML.replace(/\{\$\-category\-product\-abs\-folder\}/g, tDataListArray[ti]['-category-product-abs-folder']);
tFactoryHTML = tFactoryHTML.replace(/\{\$notclickable\}/g, tDataListArray[ti]['notclickable']);
tFactoryHTML = tFactoryHTML.replace(/\{\$\-notclickable\-text\}/g, tDataListArray[ti]['-notclickable-text']);
tFactoryHTML = tFactoryHTML.replace(/\{\$property_topid\}/g, tDataListArray[ti]['property_topid']);
tFactoryHTML = tFactoryHTML.replace(/\{\$property_topid_filetype\}/g, tDataListArray[ti]['property_topid_filetype']);
tFactoryHTML = tFactoryHTML.replace(/\{\$topic\}/g, tDataListArray[ti]['topic']);
tFactoryHTML = tFactoryHTML.replace(/\{\$subtopic\}/g, tDataListArray[ti]['subtopic']);
tFactoryHTML = tFactoryHTML.replace(/\{\$state\}/g, tDataListArray[ti]['state']);

if (tCurrentIndexK % 3 != 0) tFactoryHTML = tFactoryHTML.replace(/\{\$\-plugin\-string\-1\}/g, '');
else
{
  tFactoryHTML = tFactoryHTML.replace(/\{\$\-plugin\-string\-1\}/g, 'margin-right:0px');
  tFactoryHTML = tFactoryHTML + '<div class="clear"></div>';
};
tFilterListCont1Obj.append($(tFactoryHTML));
