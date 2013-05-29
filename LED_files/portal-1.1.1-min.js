// jQuery Plugin Portal Switcher
// By Zhang Yang

var SET_DELAY = 3000;
var SET_BEFORE = 1500;

(function(a){a.fn.portal=function(d,c,b,e){this.each(function(){list.push(new Portal(this,d,c,b,e))});if(started==false){setTimeout(function(){startSwitcher()},SET_BEFORE);started=true}}})(jQuery);if(!list){var list=new Array()}if(!idNum){var idNum=0}if(!started){var started=false}function Portal(h,e,b,a,g){this.n="portal_"+idNum.toString()+new Date().getTime().toString()+Math.round((Math.random()*1000));this.p=a;this.w=e;this.h=b;this.f=g;this.c=0;var c=(this.f=="vertical"?this.w:this.w*(this.p.length+1));idNum++;$(h).append("<div style='height:"+this.h+"px; width:"+this.w+"px; overflow:hidden; cursor:pointer;'><div id='"+this.n+"' style='width:"+c+"px; height:"+this.h+"px;'>");if(this.f=="vertical"){for(var d in this.p){$("#"+this.n).append("<div style='float:none; margin:0px; padding:0px;'><img src='../common/js/"+this.p[d].src+"' /></div>")}$("#"+this.n).append("<div style='float:none; margin:0px; padding:0px;'><img src='../common/js/"+this.p[0].src+"' /></div>")}else{for(var d in this.p){$("#"+this.n).append("<div style='float:left; margin:0px; padding:0px;'><img src='../common/js/"+this.p[d].src+"' /></div>")}$("#"+this.n).append("<div style='float:left; margin:0px; padding:0px;'><img src='../common/js/"+this.p[0].src+"' /></div>")}$(h).append("</div></div>");var f=this.n;$("#"+f).click(function(){getURL(f)})}function startSwitcher(){var b=0;a();function a(){var d=list[b];if(d.f=="vertical"){var c="-="+d.h.toString()+"px";$("#"+d.n).animate({marginTop:c},function(){d.c++;if(d.c>=d.p.length){d.c=0;$("#"+d.n).css("margin-top","0px")}b++;if(list.length>b){a()}else{setTimeout(function(){startSwitcher()},SET_DELAY)}})}else{var c="-="+d.w.toString()+"px";$("#"+d.n).animate({marginLeft:c},function(){d.c++;if(d.c>=d.p.length){d.c=0;$("#"+d.n).css("margin-left","0px")}b++;if(list.length>b){a()}else{setTimeout(function(){startSwitcher()},SET_DELAY)}})}}}function getURL(c){var b;for(var a in list){if(list[a].n==c){b=list[a];break}}window.open(b.p[b.c].url)};