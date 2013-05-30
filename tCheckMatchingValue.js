tq = 19; /* 19 or 20 */
tCurrentFilterValue = filterfactor.tCurrentFilterArray[tq];

tDataListArray = filterfactor.datalist.tGetArray();
ti = 12;
tstrers = tCurrentFilterFactor = tDataListArray[ti]['filterfactor'];
tstrersArray = tstrers.split(filterfactor.tCurrentParameterSpString);
filterfactor.tCheckMatchingValue(tq, tCurrentFilterValue, tstrersArray);

tbool = true;
tMatchBool = false;
for (var tq in filterfactor.tCurrentFilterArray)
{
  var tCurrentFilterValue = filterfactor.tCurrentFilterArray[tq];
  if (tCurrentFilterValue) tMatchBool = true;
  if (!filterfactor.tCheckMatchingValue(tq, tCurrentFilterValue, tstrersArray)) tbool = false;
};



tq = 19;
tCurrentFilterValue = "60,55"; 
tstrersArray = ["19_____VALUES_____55,47", "20_____VALUES_____1,2,3"];
filterfactor.tCheckMatchingValue(tq, tCurrentFilterValue, tstrersArray); 

tCurrentStrersArray = ["19", "55,47"]  # ["20", "1,2,3"]

tstr1 = tq
tstr2 = tCurrentFilterValue
tstrArray = tstrersArray
tbool = true
tftype = $('#filterfactor').find('.bar2_cont_ul_' + tstr1).attr('ftype');
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
      tCurrentStrersArray = tCurrentStrers.split(filterfactor.tCurrentValueSpString);
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



filterfactor.tCheckMatchingValue:
function (_str1, _str2, _strArray)
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
}
