input60 = $("#para19-1");
$("#para19-1")[0].getAttribute('rsid');
$("#para19-1")[0].getAttribute('name');


filterfactor.tCurrentFilterArray;

************************************
filterfactor.tCurrentFilterArray[$("#para19-1")[0].getAttribute('rsid')] = filterfactor.tGetCheckboxsValue($("#para19-1")[0].getAttribute('name'));
************************************

filterfactor.tChangeFilterDataListPage(1);


tDataListArray = filterfactor.datalist.tGetArray();
ti = 11;
tCurrentFilterFactor = tDataListArray[ti]['filterfactor'];
filterfactor.tCheckMatching(tCurrentFilterFactor)

_strers = tCurrentFilterFactor;
 tbool = true;
tstrers = _strers;
tMatchBool = false;
tstrersArray = tstrers.split(filterfactor.tCurrentParameterSpString);
for (var tq in filterfactor.tCurrentFilterArray)
{
  var tCurrentFilterValue = filterfactor.tCurrentFilterArray[tq];
  if (tCurrentFilterValue) tMatchBool = true;
  if (!filterfactor.tCheckMatchingValue(tq, tCurrentFilterValue, tstrersArray)) tbool = false;
};

for (var tq in filterfactor.tCurrentFilterArray) alert(tq);
for (var tq in [1, "a", 2, "b"]) alert(tq);

filterfactor.tCheckMatchingValue(tq, tCurrentFilterValue, tstrersArray);

filterfactor.tCheckMatching : 
function (_strers)
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
}
