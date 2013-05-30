filterfactor.tGetCheckboxsValue: 
function (_strname)
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
}
