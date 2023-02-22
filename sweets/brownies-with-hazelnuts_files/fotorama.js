/* Fotorama 1.3 (v1194) http://fotoramajs.com/ */
window.Modernizr=function(b,f,e){function W(a,b){var d=a.charAt(0).toUpperCase()+a.substr(1),d=(a+" "+Ka.join(d+" ")+d).split(" ");return X(d,b)}function X(b,d){for(var f in b)if(a[b[f]]!==e)return"pfx"==d?b[f]:!0;return!1}var r={},O=f.documentElement;f.head||f.getElementsByTagName("head");var d=f.createElement("modernizr"),a=d.style,b=" -webkit- -moz- -o- -ms- -khtml- ".split(" "),Ka="Webkit Moz O ms Khtml".split(" "),d={},ja=[],K=function(a,b,d,r){var I,v,e=f.createElement("div");if(parseInt(d,
10))for(;d--;)v=f.createElement("div"),v.id=r?r[d]:"modernizr"+(d+1),e.appendChild(v);I=["&shy;<style>",a,"</style>"].join("");e.id="modernizr";e.innerHTML+=I;O.appendChild(e);a=b(e,a);e.parentNode.removeChild(e);return!!a},D,Y={}.hasOwnProperty,P;typeof Y!==e&&typeof Y.call!==e?P=function(a,b){return Y.call(a,b)}:P=function(a,b){return b in a&&typeof a.constructor.prototype[b]===e};(function(a,b){var d=a.join(""),e=b.length;K(d,function(a){for(var a=a.childNodes,b={};e--;)b[a[e].id]=a[e];r.csstransforms3d=
9===b.csstransforms3d.offsetLeft},e,b)})([,["@media (",b.join("transform-3d),("),"modernizr){#csstransforms3d{left:9px;position:absolute}}"].join("")],[,"csstransforms3d"]);d.canvas=function(){var a=f.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")};d.csstransforms3d=function(){var a=!!X(["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"]);a&&"webkitPerspective"in O.style&&(a=r.csstransforms3d);return a};d.csstransitions=function(){return W("transitionProperty")};
for(var Q in d)P(d,Q)&&(D=Q.toLowerCase(),r[D]=d[Q](),ja.push((r[D]?"":"no-")+D));a.cssText="";d=null;r._version="2.0.6";r._prefixes=b;r._domPrefixes=Ka;r.testProp=function(a){return X([a])};r.testAllProps=W;r.testStyles=K;return r}(this,this.document);var touchFLAG="ontouchstart"in document,csstrFLAG=Modernizr.csstransforms3d&&Modernizr.csstransitions;
(function(b){function f(d,a){function f(){E.css({backgroundPosition:"24px "+(24-56*la)+"px"});la++;7<la&&(la=0)}function ja(){R||(R=1E3*(m/h));a.thumbs&&!B&&(B=a.vertical?w.width():w.height());if(a.resize){var c=r.height();m=d.width()-(a.vertical&&B?B:0);h=Math.round(1E3*(m/R));if(h>c-40-(!a.vertical&&B?B:0))h=c-40-(!a.vertical&&B?B:0),m=Math.round(h*R/1E3)}}function K(c,L){if(m&&h&&(!ma||c))L||ja(),a.vertical?(s=h,wa=m):(s=m,wa=h),n.add(p).css({width:m,height:h}),a.vertical&&a.thumbs&&(a.verticalThumbsRight?
w.css({left:m}):n.css({left:B})),a.touchStyle?(a.vertical?(na=m,oa=(h+a.margin)*q-a.margin):(na=(m+a.margin)*q-a.margin,oa=h),t.css({width:na,height:oa})):t.css({width:m,height:h}),a.thumbs&&((a.thumbsPreview||!a.vertical)&&w.css(x,s),w.css({visibility:"visible"})),e&&!a.vertical&&(a.arrows&&ca.add(da).css({top:h/2}),E.css(pa,wa/2)),P(),y&&I(y,!1,!1,!0),ma=!0;if(c){var F=p.index(y);Q(y,F);var j=0;b(xa).each(function(){clearTimeout(this)});xa=[];p.each(function(a){if(a!=F){var c=b(this),L=setTimeout(function(){Q(c,
a)},50*j+50);xa.push(L);j++}})}}function D(c,b,F){function j(){ma&&(a.touchStyle||(b=0),E.css(M,b*(s+a.margin)+s/2),La=setTimeout(function(){E.stop().show().fadeTo(0,1)},F))}clearTimeout(La);switch(c){case "loading":j();d.addClass("fotorama_loading").removeClass("fotorama_error");clearInterval(qa);BASE64Flag?(E.css({backgroundImage:"url("+_SPINNER+")"}),qa=setInterval(f,100)):E.html("<span>&middot;&middot;&middot;</span>");break;case "error":j();d.addClass("fotorama_error").removeClass("fotorama_loading");
clearInterval(qa);BASE64Flag?E.css({backgroundImage:"url("+_ERROR+")",backgroundPosition:"24px 24px"}):E.text("?");break;case "loaded":d.removeClass("fotorama_loading fotorama_error"),E.stop().fadeTo(F,0,function(){E.hide()}),clearInterval(qa)}Ma=c}function Y(c,b){if(C){var F=N.position()[M],j=N.data()[x];if(j){S.show();if(C>s){var g=F+j/2,d=s/2,e=A.index(N),h=e-Na;void 0==Z&&(Z=G.position()[M]);if(b&&(0<h&&b>0.75*d||0>h&&b<1.25*d)){var l;l=0<h?e+1:e-1;0>l?l=0:l>q-1&&(l=q-1);e!=l&&(g=A.eq(l),g=g.position()[M]+
g.data()[x]/2,d=b)}var e=-(C-s),k=Math.round(-(g-d)+a.thumbMargin);if(0<h&&k>Z||0>h&&k<Z)k=Z;k<=e?(k=e,a.shadows&&w.removeClass("fotorama__thumbs_shadow_no-left").addClass("fotorama__thumbs_shadow_no-right")):k>=a.thumbMargin?(k=a.thumbMargin,a.shadows&&w.removeClass("fotorama__thumbs_shadow_no-right").addClass("fotorama__thumbs_shadow_no-left")):a.shadows&&w.removeClass("fotorama__thumbs_shadow_no-left fotorama__thumbs_shadow_no-right");Z=k;csstrFLAG?(G.css(getDuration(c)),setTimeout(function(){G.css(getTranslate(k,
a.vertical))},1)):G.stop().animate(getTranslate(k,a.vertical),c)}else csstrFLAG&&G.css(getDuration(0)),G.css(getTranslate(s/2-C/2,a.vertical));var o=j-(X?0:2*a.thumbBorderWidth);csstrFLAG?(S.css(getDuration(c)),setTimeout(function(){S.css(getTranslate(F,a.vertical)).css(x,o)},1)):a.vertical?S.stop().animate({top:F,height:o},c):S.stop().animate({left:F,width:o},c)}else S.hide()}}function P(){a.shadows&&C>s&&w.addClass("fotorama__thumbs_shadow");Y(0,!1)}function Q(c,b){b||(b=p.index(c));var d=c.data("img");
if(d){var j=c.data("imgWidth"),g=c.data("imgHeight"),e=c.data("imgRatio"),f=0;a.touchStyle&&(a.vertical?c.css({top:b*(h+a.margin)}):c.css({left:b*(m+a.margin)}));if(j!=m||g!=h){var n=0;if(Math.round(e)!=Math.round(R)||a.alwaysPadding)n=2*a.minPadding;e>=R?(j=Math.round(m-n)<j||a.zoomToFit?Math.round(m-n):j,g=Math.round(1E3*(j/e))):(g=Math.round(h-n)<g||a.zoomToFit?Math.round(h-n):g,j=Math.round(g*e/1E3))}d.attr({width:j,height:g}).css({width:j,height:g,visibility:"visible"});g<h&&(f=Math.round((h-
g)/2));d.css({top:f})}}function Ja(c,L,d,j){function g(c){function b(){n.attr({src:c}).css({visibility:"hidden"});0==o&&(n.appendTo(L),"thumb"==j&&(C+=u+a.thumbMargin,G.css(x,C),L.css(x,u).data(x,u),P()))}function l(){$[c]="loaded";L.trigger("fotoramaLoad").data({state:"loaded"});setTimeout(function(){d(h)},100)}function f(a){$[c]="error";n.unbind("error load");o<k.length&&a?(g(k[o]),o++):L.trigger("fotoramaError").data({state:"error"})}if($[c]){var m=function(){"error"==$[c]?f(!1):"loaded"==$[c]?
l():setTimeout(m,100)};b();m()}else $[c]="loading",e.data({loading:!0}),n.unbind("error load").error(function(){f(!0)}).load(l),b()}var e=p.eq(c),h=new Image,n=b(h),l=T.eq(c),k=[],o=0,f=ea[c].imgHref,m=ea[c].imgSrc,c=ea[c].thumbSrc;"img"==j?(f&&(k.push(f),k.push(f+"?"+aa)),m&&(k.push(m),k.push(m+"?"+aa)),c&&(k.push(c),k.push(c+"?"+aa))):(c&&(k.push(c),k.push(c+"?"+aa)),m&&(k.push(m),k.push(m+"?"+aa)),f&&(k.push(f),k.push(f+"?"+aa)));a.caption&&e.data({caption:l.attr("alt")||l.children().attr("alt")||
l[0].caption});g(k[o]);o++}function va(c,d){d||(d=p.index(c));c.data("wraped")?a.detachSiblings&&c.data("detached")&&c.data({detached:!1}).appendTo(t):(t.append(c),c.data({wraped:!0}),Ja(d,c,function(a){var a=b(a),j=a.width(),g=a.height(),e=1E3*(j/g);a.addClass("fotorama__img");c.data({img:a,imgWidth:j,imgHeight:g,imgRatio:e});if((!m||!h)&&!ma)m=j,h=g,ja();c.css({visibility:"visible"});Q(c,d);K()},"img"))}function Ya(c,d){d||(d=p.index(c));var e=0,j=!1,g=[];for(i=0;i<2*a.preload+1;i++){var h=d-a.preload+
i;if(0<=h&&h<q){if(!p.eq(h).data("wraped")||p.eq(h).data("detached"))e++,g.push(h)}else j=!0}if(e>=a.preload||j)b(g).each(function(a){setTimeout(function(){va(p.eq(g[a]),g[a])},50*a)}),a.detachSiblings&&(e=d-a.preload,0>e&&(e=0),j=d+a.preload+1,j>q-1&&(j=q-1),p.slice(0,e).add(p.slice(j,q-1)).data({detached:!0}).detach())}function Za(){var a=p.index(y);0==a||2>q?ca.addClass("fotorama__arr_disabled").data("disabled",!0):ca.removeClass("fotorama__arr_disabled").data("disabled",!1);a==q-1||2>q?da.addClass("fotorama__arr_disabled").data("disabled",
!0):da.removeClass("fotorama__arr_disabled").data("disabled",!1)}function I(c,d,e,j){function g(){a.caption&&((q=c.data("caption"))?ya.html(q).show():ya.html("").hide())}var f,n,q,l,k=p.index(c);p.each(function(){b(this).unbind("fotoramaLoad fotoramaError")});var o=0;if(!j)o=a.transitionDuration,d&&d.altKey&&(o*=10);var r=c.data("detached");clearTimeout(Oa);Oa=setTimeout(function(){!r&&k!=a.startImg&&va(c,k);Ya(c,k)},o+10);(r||k==a.startImg)&&va(c,k);d=c.data("state");"loading"==d||!d?(D("loading",
k,o),c.bind("fotoramaLoad",function(){D("loaded",k,o);g()}),c.bind("fotoramaError",function(){D("error",k,o);g()})):"error"==d?D("error",k,o):d!=Ma&&D("loaded",k,0);g();y?(l=p.index(y),f=y,a.thumbs&&(n=N)):(f=p.not(c),a.thumbs&&(n=A.not(A.eq(k))));a.thumbs&&(N=A.eq(k),l&&(Na=l),n.removeClass("fotorama__thumb_selected").data("disabled",!1),N.addClass("fotorama__thumb_selected").data("disabled",!0),a.thumbsPreview&&!touchFLAG&&(n.children().stop().fadeTo(o,a.thumbOpacity),N.children().stop().fadeTo(o,
a.thumbOpacityActive)));a.shadows&&(f.removeClass("fotorama__frame_active"),c.addClass("fotorama__frame_active"));a.thumbs&&a.thumbsPreview&&l!=k&&Y(o,e);if(a.touchStyle){var s;s=a.vertical?-k*(h+a.margin):-k*(m+a.margin);csstrFLAG?(t.css(getDuration(o)),setTimeout(function(){t.css(getTranslate(s,a.vertical))},1)):t.stop().animate(getTranslate(s,a.vertical),o)}else csstrFLAG?(y||c.css({opacity:0}),f.add(c).css(getDuration(o)),setTimeout(function(){f.css({opacity:0});c.css({opacity:1})},1)):(y||c.stop().fadeTo(0,
0),f.stop().fadeTo(o,0),c.stop().fadeTo(o,1));y=c;a.arrows&&Za();if(a.onShowImg)a.onShowImg({index:k,img:y,thumb:N,caption:q})}function v(a,b,d){b.stopPropagation();b.preventDefault();a=p.index(y)+a;0>a&&(a=d?q-1:0);a>q-1&&(a=d?0:q-1);I(p.eq(a),b,!1)}function ka(){za||(d.css({overflow:"hidden"}),za=!0);clearTimeout(Aa);Aa=setTimeout(function(){K(!0);d.css({overflow:"visible"});za=!1},100)}function Pa(){a.resize?(r.bind("resize",ka),touchFLAG&&window.addEventListener("onorientationchange",ka,!1)):
(r.unbind("resize",ka),touchFLAG&&window.removeEventListener("onorientationchange",ka,!1))}d.data({initialized:!0});var Ma,aa=(new Date).getTime();d.addClass("fotorama");a.vertical?d.addClass("fotorama_vertical"):d.addClass("fotorama_horizontal");var T,Qa=a.data&&"object"==typeof a.data;T=Qa?b(a.data).filter(function(){return this.img}):d.children().filter(function(){var a=b(this);return(a.is("a")&&a.children("img").size()||a.is("img"))&&(a.attr("href")||a.attr("src")||a.children().attr("src"))});
var q=T.size();d.data({size:q});if(a.startImg>q-1||"number"!=typeof a.startImg)a.startImg=0;var ea=[];T.each(function(a){if(Qa)ea[a]={imgHref:this.img,thumbSrc:this.thumb};else{var d=b(this);ea[a]={imgHref:d.attr("href"),imgSrc:d.attr("src"),thumbSrc:d.children().attr("src")}}});d.html("");if(!a.touchStyle)a.arrows=!1;var $=[],s,wa,m=a.width,h=a.height,R,ma=!1,Oa;if(a.touchStyle)var na=0,oa,z,H,ra,Ba,Ra,Sa,Ta,J=[],Ua,ba,Va=0,fa=!1,Ca=!1,Wa,Da=!1,Ea=!1;var M,pa,U,sa,x,V;a.vertical?(M="top",pa="left",
U="pageY",sa="pageX",x="height",V="width"):(M="left",pa="top",U="pageX",sa="pageY",x="width",V="height");var n=b('<div class="fotorama__wrap"></div>').appendTo(d),t=b('<div class="fotorama__shaft"></div>').appendTo(n),ga=t[0];disableSelection(d);var E=b('<div class="fotorama__state"></div>').appendTo(t),qa,la=0,La;if(touchFLAG)n.addClass("fotorama__wrap_touch"),a.shadows=!1;a.touchStyle?(n.addClass("fotorama__wrap_style_touch"),a.shadows&&n.append('<i class="fotorama__shadow fotorama__shadow_prev"></i><i class="fotorama__shadow fotorama__shadow_next"></i>')):
n.addClass("fotorama__wrap_style_fade");csstrFLAG&&n.addClass("fotorama__wrap_csstransitions");if(a.arrows){var ha,ia;a.vertical?(ha="&#9650;",ia="&#9660;"):(ha="&#9668;",ia="&#9658;");var ta=b('<i class="fotorama__arr fotorama__arr_prev">'+ha+'</i><i class="fotorama__arr fotorama__arr_next">'+ia+"</i>").appendTo(n),ca=ta.eq(0),da=ta.eq(1);if(!touchFLAG){var Fa=!1,Ga,$a=function(){Fa=!0;clearTimeout(Ga);ta.css(getDuration(0));n.removeClass("fotorama__wrap_mouseout");setTimeout(function(){ta.css(getDuration(a.transitionDuration));
setTimeout(function(){n.addClass("fotorama__wrap_mouseover")},1)},1)},Xa=function(){clearTimeout(Ga);Ga=setTimeout(function(){!fa&&!Fa&&n.removeClass("fotorama__wrap_mouseover").addClass("fotorama__wrap_mouseout")},3*a.transitionDuration)};n.mouseenter(function(){$a()});n.mouseleave(function(){Fa=!1;Xa()})}}var y,p=b();T.each(function(){var a=b('<div class="fotorama__frame" style="visibility: hidden;"></div>');p=p.add(a)});if(a.thumbs){var u=a.thumbSize;u||(u=a.vertical?64:48);var N,Na=0,w=b('<div class="fotorama__thumbs"></div>').appendTo(d).css("visibility",
"hidden"),B;if(a.thumbsPreview)a.thumbOpacity=0.66,a.thumbOpacityActive=1,B=u+2*a.thumbMargin,w.addClass("fotorama__thumbs_previews").css(V,B);var G=b('<div class="fotorama__thumbs-shaft"></div>').appendTo(w);if(a.thumbsPreview){var C=0,Z=void 0;if(a.shadows)var ua=b('<i class="fotorama__shadow fotorama__shadow_prev"></i><i class="fotorama__shadow fotorama__shadow_next"></i>').appendTo(w);ha=u-(X?0:2*a.thumbBorderWidth);ia=a.thumbMargin;var S=b('<i class="fotorama__thumb-border"></i>').hide().css(V,
ha).css(pa,ia).css("border-width",a.thumbBorderWidth).appendTo(G)}T.each(function(){var c;a.thumbsPreview?(c=b('<div class="fotorama__thumb"></div>'),c.css(V,u).css("margin",a.thumbMargin)):c=b('<i class="fotorama__thumb"><i class="fotorama__thumb__dot"></i></i>');c.appendTo(G)});var A=b(".fotorama__thumb",d);a.thumbsPreview&&T.each(function(c){function d(e){var j=b(e),g=j.width(),f=j.height(),g=1E3*(g/f),g=a.vertical?Math.round(1E3*(u/g)):Math.round(u*g/1E3);Modernizr.canvas?(j.remove(),j=b('<canvas class="fotorama__thumb__img"></canvas>'),
j.appendTo(A.eq(c))):j.addClass("fotorama__thumb__img");j.attr(x,g).attr(V,u).css(x,g).css(V,u).css("visibility","visible");Modernizr.canvas&&(f=j[0].getContext("2d"),a.vertical?f.drawImage(e,0,0,u,g):f.drawImage(e,0,0,g,u));!touchFLAG&&0!=c&&j.stop().fadeTo(0,a.thumbOpacity);C+=g+a.thumbMargin-(u+a.thumbMargin);G.css(x,C);A.eq(c).css(x,g).data(x,g);P()}setTimeout(function(){Ja(c,A.eq(c),d,"thumb")},50*c)})}if(a.caption){var ya=b('<p class="fotorama__caption"></p>');ya.appendTo(d)}var xa=[];m&&h&&
K();I(p.eq(a.startImg),!1,!1,!0);a.thumbs&&(a.thumbColor&&!a.thumbsPreview&&A.children().css("background-color",a.thumbColor),a.thumbsBackgroundColor&&(w.css("background-color",a.thumbsBackgroundColor),a.thumbsPreview&&a.shadows&&ua.css(getBoxShadowColor(a.thumbsBackgroundColor))),a.thumbsPreview&&(a.thumbBorderColor&&S.css({"border-color":a.thumbBorderColor}),touchFLAG||A.hover(function(){var c=b(this);c.hasClass("fotorama__thumb_selected")||c.children().stop().fadeTo(a.transitionDuration/2,a.thumbOpacityActive)},
function(){var c=b(this);c.hasClass("fotorama__thumb_selected")||c.children().stop().fadeTo(2*a.transitionDuration,a.thumbOpacity)})));a.backgroundColor&&n.add(p).css("background-color",a.backgroundColor);a.arrowsColor&&a.arrows&&da.add(ca).css("color",a.arrowsColor);var Aa=!1,za=!1;Pa();d.bind("fotoramaShowImg",function(c,b){if(b>q-1||"number"!=typeof b)b=0;(!a.touchStyle||!Ca)&&I(p.eq(b),c,!1)});d.bind("fotoramaResize",function(c,b,d,e){b&&(m=b);d&&(h=d);R=1E3*(m/h);e?(a.resize=!0,K(!0)):(a.resize=
!1,K(!0,!0));Pa();clearTimeout(Aa)});a.thumbs&&A.click(function(a){a.stopPropagation();if(!b(this).data("disabled")){var d=A.index(b(this)),e=a[U]-w.offset()[M];I(p.eq(d),a,e)}});a.arrows&&(ca.click(function(a){b(this).data("disabled")||v(-1,a,!1)}),da.click(function(a){b(this).data("disabled")||v(1,a,!1)}));!a.touchStyle&&!touchFLAG&&n.click(function(a){a.shiftKey?v(-1,a,!0):v(1,a,!0)});if(a.touchStyle||touchFLAG){var ua=function(c){if((touchFLAG||2>c.which)&&y){var b=function(){Ca=!0;Ta=(new Date).getTime();
Ba=H;Ra=ra;J=[[Ta,H]];z=t.position()[M];csstrFLAG?t.css(getDuration(0)).css(getTranslate(z,a.vertical)):t.stop();Sa=z};if(touchFLAG)if(touchFLAG&&1==c.targetTouches.length)H=c.targetTouches[0][U],ra=c.targetTouches[0][sa],b(),ga.addEventListener("touchmove",Ha,!1),ga.addEventListener("touchend",Ia,!1);else{if(touchFLAG&&1<c.targetTouches.length)return!1}else H=c[U],c.preventDefault(),b(),O.mousemove(Ha),O.mouseup(Ia)}},Ha=function(c){function b(){c.preventDefault();fa||(a.shadows&&n.addClass("fotorama__wrap_shadow"),
touchFLAG||t.addClass("fotorama__shaft_grabbing"));fa=!0;clearTimeout(Wa);Ua=(new Date).getTime();J.push([Ua,H]);var d=Ba-H,e;e=a.vertical?-(oa-h):-(na-m);z=Sa-d;0<z?(z=Math.round(z-z/1.25),a.shadows&&n.addClass("fotorama__wrap_shadow_no-left").removeClass("fotorama__wrap_shadow_no-right")):z<e?(z=Math.round(z+(e-z)/1.25),a.shadows&&n.addClass("fotorama__wrap_shadow_no-right").removeClass("fotorama__wrap_shadow_no-left")):a.shadows&&n.removeClass("fotorama__wrap_shadow_no-left fotorama__wrap_shadow_no-right");
a.touchStyle&&t.css(getTranslate(z,a.vertical))}touchFLAG?touchFLAG&&1==c.targetTouches.length&&(H=c.targetTouches[0][U],ra=c.targetTouches[0][sa],Ea?Da&&b():(-5<=Math.abs(H-Ba)-Math.abs(ra-Ra)&&(Da=!0,c.preventDefault()),Ea=!0)):(H=c[U],b())},Ia=function(c){if(!touchFLAG||!c.targetTouches.length){Ea=Da=Ca=!1;Wa=setTimeout(function(){fa=!1;touchFLAG||Xa()},W);touchFLAG?(ga.removeEventListener("touchmove",Ha,!1),ga.removeEventListener("touchend",Ia,!1)):(O.unbind("mouseup"),O.unbind("mousemove"));
a.shadows&&n.removeClass("fotorama__wrap_shadow");touchFLAG||t.removeClass("fotorama__shaft_grabbing");ba=(new Date).getTime();var b=-z,d=!1,e=!1,g=ba-W,f,h,m,l;for(i=0;i<J.length;i++)f=Math.abs(g-J[i][0]),0==i&&(h=f,m=ba-J[i][0],l=J[i][1]),f<=h&&(h=f,m=J[i][0],l=J[i][1]);f=ba-m<=W;g=1E3>=ba-Va;l-=H;a.touchStyle?touchFLAG||1<J.length||fa?(f&&(-10>=l?d=!0:10<=l&&(e=!0)),l=void 0,!d&&!e?l=Math.round(b/s):g?d?v(-1,c,!1):e&&v(1,c,!1):d?l=Math.round((b-s/2)/s):e&&(l=Math.round((b+s/2)/s)),void 0!=l&&(0>
l&&(l=0),l>q-1&&(l=q-1),I(p.eq(l),c,!1))):a.pseudoClick&&(c.shiftKey?v(-1,c,!0):v(1,c,!0)):0<=l?v(1,c,!0):0>l&&v(-1,c,!0);Va=ba}};touchFLAG?ga.addEventListener("touchstart",ua,!1):t.mousedown(ua)}}var e=b.browser.msie,W=200,X="CSS1Compat"!=document.compatMode&&e,r=b(window),O=b(document);b.fn.fotorama=function(d){var a=b.extend({data:null,width:null,height:null,startImg:0,transitionDuration:333,touchStyle:!0,pseudoClick:!0,backgroundColor:null,margin:5,minPadding:10,alwaysPadding:!1,preload:3,resize:!1,
zoomToFit:!0,vertical:!1,verticalThumbsRight:!1,arrows:!0,arrowsColor:null,thumbs:!0,thumbsBackgroundColor:null,thumbColor:null,thumbsPreview:!0,thumbSize:null,thumbMargin:5,thumbBorderWidth:3,thumbBorderColor:null,caption:!1,onShowImg:null,shadows:!0,detachSiblings:!0},d);this.each(function(){var d=b(this);d.data("initialized")||f(d,a)})}})(jQuery);
function getTranslate(b,f){if(csstrFLAG){var e;e=f?"translate3d(0,"+b+"px,0)":"translate3d("+b+"px,0,0)";return{"-moz-transform":e,"-webkit-transform":e,"-o-transform":e,transform:e}}return f?{top:b}:{left:b}}function getDuration(b){b+="ms";return{"-moz-transition-duration":b,"-webkit-transition-duration":b,"-o-transition-duration":b,"transition-duration":b}}function getBoxShadowColor(b){b="0 0 10px "+b;return{"-moz-box-shadow":b,"-webkit-box-shadow":b,"-o-box-shadow":b,"box-shadow":b}}
function disableSelection(b){b.mousemove(function(b){b.preventDefault()}).mousedown(function(b){b.preventDefault()})}
var _SPINNER="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAGoCAMAAAAQMBfHAAABtlBMVEX///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8cWrVBAAAAkXRSTlMAKUfghaPCZkAlPw7nsHiUy1w3VBcoLEoiNsAw/EbdoYNlGSYIFEUdDEgS2yENIMi9CnfkLhUnkhutW5/5gGSCAgsyaZlEsVA4yQQfAxM9Khh/AWEPm7nVEfNCtB4kNDnGSU+JM5dznmAtXkuQO3JnTlhiWp2nIwf2rtgcPha7UYxf4avt0DUGpjp1eXwvTBBjhUW/zwAABtxJREFUeF7tmtlXE0kUxm/2zr5gwhI3QiAsCXtCQFED4gKCIKIgoo7ruI0zOjNuo7Pva/7jqTq3iy9dOc05eclT/94434/qk6fbt74mK6GLF0N0EJF6PXKgUBcgAJfLzcJyHvkjz/VOXQhXXAWVX/Z4PCOdViHsEqgz1q+zAYHzyjKZdB4VxtEbIpiq16dEPuiShEkCIyGSoUhkSAh7Ik6bOYwx/BlUORhIJNYg1ILBErWP7Fm/5GzWGgxfcEsuDFPUz0StguFmDJo1hVmrEDKFEKX4iGjKKvTzEUY/tY/pjY00gkLy+z1r3n3M54tD+CIQ6O3Tc9+MSIqLi0UWlIH8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",_ERROR=
"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAAAAABWESUoAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAJ0Uk5TAEQHIkixAAABv0lEQVQYGWXBQWcjcRzH4d+L+xpDRVRYETGXqt5W9FI9xFIVvfae64i11IgosfoGeqtaZawcwlgrlxE1Qvx99j+zk5lUn8fU6N48pmtc+vpwrZapNkgKGtvFUDVTJYgdH+xnJ6qYStEbn6wGKpm8wYZSHl+fS9Hl9w2l7bk8k9TP8HZ3oQ4mG7w8kmRSuKIyU6uzxHsLJZOm1CY6kuDFkqlfAE9vwH6kI0vADWRaAH86/Q2QR2p1MiCRdQrgVrrYAauuWjdAcWoTIAskjfGeAzWCDBjbHJipNMWbqxUDc/sFjFRZ4t2rMQJSy4EvqoQvgLvSQQ/IbQ8u0H+9DHg/Uy1w4MyBC1Q7eweynmp72FsO9HRw5YCXUJUusLUUGKlxj/dTlRGQ2hyI1UrwpirNgIWNgXWgRvCMN5a3BiZ2WgDf1OqugN2FNAaKjikBso5aUQ5s+p01sJBp4IBHHfm6B9InoOjLpBjvQUcm1KaSSWGKtzxRa0ZlFUomKcrx1mMdhHc7vKwvyeRdbCn9jS+H0vl1nFPaDOWZStGaT35HKpkqJz8cH7g4VMVUGz4WNHbJUDVTo3uTvKaOLF3enqrxD+aQUnwgKhDtAAAAAElFTkSuQmCC",
base64Test=new Image,BASE64Flag=!0;base64Test.onerror=function(){if(1!=this.width||1!=this.height)BASE64Flag=!1};base64Test.src=_ERROR;