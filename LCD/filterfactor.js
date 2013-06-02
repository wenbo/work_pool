filterfactor = {
  tCurrentPage: 1,
  tCurrentPageSize: 12,
  tCurrentFilterArray: [],
  tCurrentParameterSpString: '_____PARAMETERS_____',
  tCurrentValueSpString: '_____VALUES_____',
  tGetCheckboxsValue: function(_strname)
  {
    var tname = _strname;
    var tmpvalue = '';
    var tobjs = document.getElementsByName(tname);
    if (tobjs)
    {
      for (ti = 0; ti < tobjs.length; ti ++)
      {
        if (tobjs[ti].checked) tmpvalue += ',' + tobjs[ti].value;
      };
    };
    if (tmpvalue != '') tmpvalue = tmpvalue.substr(1);
    return tmpvalue;
  },
  tClick: function(_obj)
  {
    var tobj = _obj;
    this.tCurrentFilterArray[tobj.getAttribute('rsid')] = this.tGetCheckboxsValue(tobj.getAttribute('name'));
    this.tChangeFilterDataListPage(1);
  },
  tCheckMatching: function(_strers)
  {
    var tbool = true;
    var tstrers = _strers;
    if (!tstrers) tbool = false;
    else
    {
      var tMatchBool = false;
      var tstrersArray = tstrers.split(this.tCurrentParameterSpString);
      for (var tq in this.tCurrentFilterArray)
      {
        var tCurrentFilterValue = this.tCurrentFilterArray[tq];
        if (tCurrentFilterValue) tMatchBool = true;
        if (!this.tCheckMatchingValue(tq, tCurrentFilterValue, tstrersArray)) tbool = false;
      };
      if (!tMatchBool) tbool = true;
    };
    return tbool;
  },
  tCheckMatchingValue: function(_str1, _str2, _strArray)
  {
    var tbool = true;
    var tstr1 = _str1;
    var tstr2 = _str2;
    var tstrArray = _strArray;
    var tftype = $('#filterfactor').find('.bar2_cont_ul_' + tstr1).attr('ftype');
    if (tstr1 && tstr2)
    {
      var tb = false;
      var tstr2Array = tstr2.split(',');
      for (var ti = 0; ti < tstr2Array.length; ti ++)
      {
        var tbb = false;
        var tCurrentStr2 = tstr2Array[ti];
        for (var tk = 0; tk < tstrArray.length; tk ++)
        {
          var tCurrentStrers = tstrArray[tk];
          if (tCurrentStrers != '')
          {
            tCurrentStrersArray = tCurrentStrers.split(this.tCurrentValueSpString);
            if (tCurrentStrersArray.length == 2)
            {
              if (tCurrentStrersArray[0] == tstr1)
              {
                var tCurrentStr1s = tCurrentStrersArray[1];
                if (tCurrentStr1s != '')
                {
                  var tCurrentStr1sArray = tCurrentStr1s.split(',');
                  for (var tq = 0; tq < tCurrentStr1sArray.length; tq ++)
                  {
                    var tCurrentStr1 = tCurrentStr1sArray[tq];
                    if (tCurrentStr1 == tCurrentStr2)
                    {
                      tb = true;
                      tbb = true;
                    };
                  };
                };
              };
            };
          };
        };
        if (tftype == '1' && tbb == false)
        {
          tb = false;
          break;
        };
      };
      if (!tb) tbool = false;
    };
    return tbool;
  },
  tChangeFilterDataListPage: function(_number)
  {
    var tnumber = _number;
    this.tCurrentPage = tnumber;
    this.tLoadFilterDataList();
  },
  tLoadFilterDataList: function()
  {
    var tmpstr = '';
    var tOriListObj = $('#prdlist_cont');
    var tFilterListObj = $('#prdlist_cont_filter');
    var tFilterListCont1Obj = $('#prdlist_cont1_filter');
    var tFilterFactoryCont1Obj = $('#prdlist_cont1_filter_factory');
    tFilterListCont1Obj.html('');
    $('#prdlist_cont_filter_start_number').html(0);
    $('#prdlist_cont_filter_end_number').html(0);
    $('#prdlist_cont_filter_totalcount').html(0);
    var tDataListArray = filterfactor.datalist.tGetArray();
    var tDataListArrayLength = tDataListArray.length;
    if (tDataListArrayLength >= 1)
    {
      var tCurrentIndex = 0;
      var tCurrentIndexK = 0;
      var tCurrentIndexBool = false;
      for (var ti = 0; ti < tDataListArrayLength; ti ++)
      {
        var tCurrentFilterFactor = tDataListArray[ti]['filterfactor'];
        if (this.tCheckMatching(tCurrentFilterFactor))
        {
          if (tCurrentIndex >= (this.tCurrentPage - 1) * this.tCurrentPageSize && tCurrentIndex < this.tCurrentPage * this.tCurrentPageSize)
          {
            tCurrentIndexBool = true;
            tCurrentIndexK = tCurrentIndexK + 1;
            var tFactoryHTML = tFilterFactoryCont1Obj.html();
            if (tFactoryHTML)
            {
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
            };
          };
          tCurrentIndex = tCurrentIndex + 1;
        };
      };
      tFilterListCont1Obj.append($('<div class="clear"></div>'));
      //************************************************************//
      var tStartNumber = 0;
      var tEndNumber = 0;
      if (tCurrentIndexBool)
      {
        tStartNumber = (this.tCurrentPage - 1) * this.tCurrentPageSize;
        tEndNumber = this.tCurrentPage * this.tCurrentPageSize;
        if (tEndNumber > tCurrentIndex) tEndNumber = tCurrentIndex;
        $('#prdlist_cont_filter_start_number').html(tStartNumber + 1);
        $('#prdlist_cont_filter_end_number').html(tEndNumber);
        $('#prdlist_cont_filter_totalcount').html(tCurrentIndex);
      };
      //************************************************************//
      tFilterListObj.find('.pager').find('.pager_cont').remove();
      if (tCurrentIndex >= 1)
      {
        var tAllPageNum = Math.ceil(tCurrentIndex / this.tCurrentPageSize);
        var tNewPagerContObj = $('<div class="pager_cont"><ul></ul></div>');
        var tFirstPageNum = this.tCurrentPage - 2;
        if (tFirstPageNum < 1) tFirstPageNum = 1;
        var tLastPageNum = tFirstPageNum + 4;
        if (tLastPageNum > tAllPageNum)
        {
          tFirstPageNum = tFirstPageNum - (tLastPageNum - tAllPageNum);
          tLastPageNum = tAllPageNum;
          if (tFirstPageNum < 1) tFirstPageNum = 1;
        };
        var tPrevPageObj = $('<li class="page_prev"><a href="###" class="cur">' + tFilterListObj.attr('prevpagetext') + '</a></li>');
        if (this.tCurrentPage > 1)
        {
          tPrevPageObj.find('a').removeClass('cur');
          tPrevPageObj.find('a').attr('href', 'javascript:filterfactor.tChangeFilterDataListPage(' + (this.tCurrentPage - 1) + ');');
        };
        tNewPagerContObj.find('ul').append(tPrevPageObj);
        for (var tx = tFirstPageNum; tx <= tLastPageNum; tx ++)
        {
          var tCurrentNumberPageObj = $('<li class="num"><a href="javascript:filterfactor.tChangeFilterDataListPage(' + tx + ');">' + tx + '</a></li>');
          if (this.tCurrentPage == tx) tCurrentNumberPageObj.find('a').addClass('cur');
          tNewPagerContObj.find('ul').append(tCurrentNumberPageObj);
        };
        var tNextPageObj = $('<li class="page_next"><a href="###" class="cur">' + tFilterListObj.attr('nextpagetext') + '</a></li>');
        if (this.tCurrentPage < tAllPageNum)
        {
          tNextPageObj.find('a').removeClass('cur');
          tNextPageObj.find('a').attr('href', 'javascript:filterfactor.tChangeFilterDataListPage(' + (this.tCurrentPage + 1) + ');');
        };
        tNewPagerContObj.find('ul').append(tNextPageObj);
        tFilterListObj.find('.pager').append(tNewPagerContObj);
      };
    };
    tOriListObj.hide();
    tFilterListObj.show();
    try
    {
      filterfactorCallback();
    }
    catch(e){};
  },
  tEmpty: function()
  {
    this.tCurrentFilterArray = [];
    $('#prdlist_cont').show();
    $('#prdlist_cont_filter').hide();
    $('#filterfactor').find('[type=\'checkbox\']').attr('checked', false);
  },
  tInit: function()
  {
    var tthis = this;
    $('#filterfactor').find('[type=\'checkbox\']').each(function(i) {
      if (this.checked) tthis.tClick(this);
    });
  }
};
