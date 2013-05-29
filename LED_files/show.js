function showon(){
	document.getElementById('dropmenu').style.display = 'block';
	document.getElementById("icon_home").className="icon_home_cur"
	if(document.getElementById("play"))
	document.getElementById("play").style.zIndex="-1";
}
function showoff(){
	document.getElementById('dropmenu').style.display = 'none';
	document.getElementById("icon_home").className="icon_home"
	if(document.getElementById("play"))
	document.getElementById("play").style.zIndex="1";

}


function shareon(){
	document.getElementById('sharemenu').style.display = 'block';
	document.getElementById("share_show").className="share_show_on"

}
function shareoff(){
	document.getElementById('sharemenu').style.display = 'none';
	document.getElementById("share_show").className="share_show"
}

function addEvent(obj, type, listener) {
  if(window.addEventListener) window.addEventListener('load',listener,false);
  else {
    var prev  = obj[type];
    obj[type] = (prev) ? function() { prev(); listener(); } : listener;
  }
}

window.addOnload = function(listener){
  addEvent(window, 'onload', listener);
}

