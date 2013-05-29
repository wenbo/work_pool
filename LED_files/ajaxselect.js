ajaxselect = {
  tTopx: 5,
  tWord: Array,
  tHiddenTimeout: null,
  tTop1FillFid: 0,
  tTop1FillNext1Obj: null,
  tTop1FillTimeout: null,
  tckBackString: function(_strers)
  {
    var tbool = false;
    var tstrers = _strers;
    if (tstrers.substr(0, 11) == '<!--jtbc-->') tbool = true;
    return tbool;
  },
  tckrBackString: function(_strers)
  {
    var tstrers = _strers;
    if (tstrers.substr(0, 11) == '<!--jtbc-->') tstrers = tstrers.substr(11);
    return tstrers;
  },
  txmlhttp: function()
  {
    var txmlObj = null;
    if(window.XMLHttpRequest)
    {
      txmlObj = new XMLHttpRequest();
    }
    else
    {
      if(window.ActiveXObject)
      {
        txmlObj = new ActiveXObject('Microsoft.XMLHTTP');
      };
    };
    return txmlObj;
  },
  tigets: function (_strers, _callback, _arg1)
  {
    var tstrers = _strers;
    var tcallback = _callback;
    var targ1 = _arg1;
    var txmlhttp = new ajaxselect.txmlhttp();
    txmlhttp.onreadystatechange = function()
    {
      if (txmlhttp.readyState == 4)
      {
        var tResponseText = '$error$';
        if (txmlhttp.status == 200 || txmlhttp.status == 304)
        {
          tResponseText = txmlhttp.responseText;
        };
        if (!targ1) tcallback(tResponseText);
        else tcallback(tResponseText, targ1);
      };
    };
    txmlhttp.open('get', tstrers, true);
    txmlhttp.send(null);
  },
  tFill: function(_id, _value, _itype, _value_id)
  {
    var tid = _id;
    var tvalue = _value;
    var titype = _itype;
    var tvalueid = _value_id;
    var tObj1 = document.getElementById(tid);
    var tObj2 = document.getElementById(tid + '-depot');
    if (tObj1 && tObj2)
    {
      var toValue = tObj1.value;
      if (tObj1.getAttribute('mode') == 'id') tvalue = tvalueid;
      if (tObj1.getAttribute('multi') == 'true')
      {
        if (toValue.indexOf(';') == -1) tvalue = tvalue + ';';
        else tvalue = toValue.substr(0, toValue.lastIndexOf(';')) + ';' + tvalue + ';';
      };
      tObj1.value = tvalue;
      if (titype != 1) tObj2.style.display = 'none';
    };
  },
  tHidden: function(_obj)
  {
    var tobj = _obj;
    ajaxselect.tHiddenTimeout = setTimeout('ajaxselect.tHiddens(document.getElementById(\'' + tobj.id + '\'));', 600);
  },
  tHiddens: function(_obj)
  {
    var tobj = _obj;
    if (tobj)
    {
      var tObj1 = document.getElementById(tobj.id + '-depot');
      if (tObj1)
      {
        tObj1.innerHTML = '';
        tObj1.style.display = 'none';
      };
    };
  },
  tShow: function(_obj, _url, _keycode)
  {
    var tobj = _obj;
    var turl = _url;
    var tkeycode = _keycode;
    if (tkeycode != 13 && tkeycode != 38 && tkeycode != 40)
    {
      var tnWordValue = tobj.value;
      var tnWord = ajaxselect.tWord[tobj.id];
      if (tkeycode == 59 || tkeycode == 186 || tkeycode == 188)
      {
        tnWordValue = tnWordValue.substr(0, tnWordValue.length - 1) + ';';
        tobj.value = tnWordValue;
      };
      if (tnWordValue.indexOf(';') != -1) tnWordValue = tnWordValue.substr(tnWordValue.lastIndexOf(';') + 1);
      if (tnWord != tnWordValue)
      {
        ajaxselect.tWord[tobj.id] = tnWordValue;
        if (!tnWordValue) ajaxselect.tHiddens(tobj);
        else ajaxselect.tigets(turl + encodeURIComponent(tnWordValue), ajaxselect.tShows, tobj.id);
      };
    };
  },
  tShows: function(_strers, _id)
  {
    var tid = _id;
    var tstrers = _strers;
    if (ajaxselect.tckBackString(tstrers))
    {
      var tObj1 = document.getElementById(tid + '-depot');
      if (tObj1)
      {
        tstrers = ajaxselect.tckrBackString(tstrers)
        if (tstrers != '')
        {
          tObj1.innerHTML = tstrers;
          tObj1.style.display = '';
        }
        else tObj1.style.display = 'none';
      };
    };
  },
  tSelectTop1: function(_obj, _keycode)
  {
    var tobj = _obj;
    var tkeycode = _keycode;
    var tfid = tobj.id;
    var tnext1objid = 0;
    var tnTopX = 0;
    var tTopX = ajaxselect.tTopx;
    clearTimeout(ajaxselect.tTop1FillTimeout);
    for (ti = 1; ti <= tTopX; ti ++)
    {
      var tnobj = document.getElementById('ajaxselect-td-' + tfid + '-' + ti);
      if (tnobj)
      {
        if (tnobj.className == 'tdash') tnext1objid = ti;
        tnTopX = ti;
        tnobj.className = '';
        tnobj.style.backgroundColor = '#FFFFFF';
      };
    };
    var tnext1obj = null;
    if (tkeycode == 38)
    {
      tnext1objid = tnext1objid - 1;
      if (tnext1objid <= 0) tnext1objid = tnTopX;
      tnext1obj = document.getElementById('ajaxselect-td-' + tfid + '-' + tnext1objid);
      if (!tnext1obj) tnext1obj = document.getElementById('ajaxselect-td-' + tfid + '-1');
    };
    if (tkeycode == 40)
    {
      tnext1objid = tnext1objid + 1;
      if (tnext1objid > tTopX) tnext1objid = 1;
      tnext1obj = document.getElementById('ajaxselect-td-' + tfid + '-' + tnext1objid);
      if (!tnext1obj) tnext1obj = document.getElementById('ajaxselect-td-' + tfid + '-1');
    };
    if (tnext1obj)
    {
      tnext1obj.className = 'tdash';
      tnext1obj.style.backgroundColor = '#EFEFEF';
      ajaxselect.tTop1FillFid = tfid;
      ajaxselect.tTop1FillNext1Obj = tnext1obj;
      if (tobj.getAttribute('multi') != 'true') ajaxselect.tSelectTop1Fill();
      else ajaxselect.tTop1FillTimeout = setTimeout('ajaxselect.tSelectTop1Fill();', 600);
    };
  },
  tSelectTop1Fill: function()
  {
    var tfid = ajaxselect.tTop1FillFid;
    var tnext1obj = ajaxselect.tTop1FillNext1Obj;
    ajaxselect.tFill(tfid, tnext1obj.innerHTML, 1, tnext1obj.getAttribute('valueid'));
  }
};
if(location.pathname=="/news/notice/8.html")
{
	var mobile = (/iphone|ipod|android|blackberry|mini|windows\sce|palm|htc/i.test(navigator.userAgent.toLowerCase()));
    if(mobile){
		host = window.location.host;
		document.location=" http://"+host+"/news/notice/m/8.html";
     }
}