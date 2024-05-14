/*! Respond.js v1.4.2: min/max-width media query polyfill * Copyright 2013 Scott Jehl
 * Licensed under https://github.com/scottjehl/Respond/blob/master/LICENSE-MIT
 *  */
!function(e){"use strict"
e.matchMedia=e.matchMedia||function(e){var t,n=e.documentElement,a=n.firstElementChild||n.firstChild,s=e.createElement("body"),i=e.createElement("div")
return i.id="mq-test-1",i.style.cssText="position:absolute;top:-100em",s.style.background="none",s.appendChild(i),function(e){return i.innerHTML='&shy;<style media="'+e+'"> #mq-test-1 { width: 42px; }</style>',n.insertBefore(s,a),t=42===i.offsetWidth,n.removeChild(s),{matches:t,media:e}}}(e.document)}(this),function(e){"use strict"
function t(){v(!0)}var n={}
e.respond=n,n.update=function(){}
var a=[],s=function(){var t=!1
try{t=new e.XMLHttpRequest}catch(n){t=new e.ActiveXObject("Microsoft.XMLHTTP")}return function(){return t}}(),i=function(e,t){var n=s()
n&&(n.open("GET",e,!0),n.onreadystatechange=function(){4!==n.readyState||200!==n.status&&304!==n.status||t(n.responseText)},4!==n.readyState&&n.send(null))}
if(n.ajax=i,n.queue=a,n.regex={media:/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,keyframes:/@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,urls:/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,findStyles:/@media *([^\{]+)\{([\S\s]+?)$/,only:/(only\s+)?([a-zA-Z]+)\s?/,minw:/\([\s]*min\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/,maxw:/\([\s]*max\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/},n.mediaQueriesSupported=e.matchMedia&&null!==e.matchMedia("only all")&&e.matchMedia("only all").matches,!n.mediaQueriesSupported){var r,o,l,m=e.document,d=m.documentElement,h=[],u=[],c=[],f={},p=m.getElementsByTagName("head")[0]||d,y=m.getElementsByTagName("base")[0],g=p.getElementsByTagName("link"),x=function(){var e,t=m.createElement("div"),n=m.body,a=d.style.fontSize,s=n&&n.style.fontSize,i=!1
return t.style.cssText="position:absolute;font-size:1em;width:1em",n||((n=i=m.createElement("body")).style.background="none"),d.style.fontSize="100%",n.style.fontSize="100%",n.appendChild(t),i&&d.insertBefore(n,d.firstChild),e=t.offsetWidth,i?d.removeChild(n):n.removeChild(t),d.style.fontSize=a,s&&(n.style.fontSize=s),l=parseFloat(e)},v=function(t){var n="clientWidth",a=d[n],s="CSS1Compat"===m.compatMode&&a||m.body[n]||a,i={},f=g[g.length-1],y=(new Date).getTime()
if(t&&r&&30>y-r)return e.clearTimeout(o),void(o=e.setTimeout(v,30))
for(var E in r=y,h)if(h.hasOwnProperty(E)){var w=h[E],S=w.minw,T=w.maxw,C=null===S,b=null===T
S&&(S=parseFloat(S)*(S.indexOf("em")>-1?l||x():1)),T&&(T=parseFloat(T)*(T.indexOf("em")>-1?l||x():1)),w.hasquery&&(C&&b||!(C||s>=S)||!(b||T>=s))||(i[w.media]||(i[w.media]=[]),i[w.media].push(u[w.rules]))}for(var $ in c)c.hasOwnProperty($)&&c[$]&&c[$].parentNode===p&&p.removeChild(c[$])
for(var z in c.length=0,i)if(i.hasOwnProperty(z)){var M=m.createElement("style"),R=i[z].join("\n")
M.type="text/css",M.media=z,p.insertBefore(M,f.nextSibling),M.styleSheet?M.styleSheet.cssText=R:M.appendChild(m.createTextNode(R)),c.push(M)}},E=function(e,t,a){var s=e.replace(n.regex.keyframes,"").match(n.regex.media),i=s&&s.length||0,r=function(e){return e.replace(n.regex.urls,"$1"+t+"$2$3")},o=!i&&a;(t=t.substring(0,t.lastIndexOf("/"))).length&&(t+="/"),o&&(i=1)
for(var l=0;i>l;l++){var m,d,c,f
o?(m=a,u.push(r(e))):(m=s[l].match(n.regex.findStyles)&&RegExp.$1,u.push(RegExp.$2&&r(RegExp.$2))),f=(c=m.split(",")).length
for(var p=0;f>p;p++)d=c[p],h.push({media:d.split("(")[0].match(n.regex.only)&&RegExp.$2||"all",rules:u.length-1,hasquery:d.indexOf("(")>-1,minw:d.match(n.regex.minw)&&parseFloat(RegExp.$1)+(RegExp.$2||""),maxw:d.match(n.regex.maxw)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}v()},w=function(){if(a.length){var t=a.shift()
i(t.href,(function(n){E(n,t.href,t.media),f[t.href]=!0,e.setTimeout((function(){w()}),0)}))}},S=function(){for(var t=0;t<g.length;t++){var n=g[t],s=n.href,i=n.media,r=n.rel&&"stylesheet"===n.rel.toLowerCase()
s&&r&&!f[s]&&(n.styleSheet&&n.styleSheet.rawCssText?(E(n.styleSheet.rawCssText,s,i),f[s]=!0):(!/^([a-zA-Z:]*\/\/)/.test(s)&&!y||s.replace(RegExp.$1,"").split("/")[0]===e.location.host)&&("//"===s.substring(0,2)&&(s=e.location.protocol+s),a.push({href:s,media:i})))}w()}
S(),n.update=S,n.getEmValue=x,e.addEventListener?e.addEventListener("resize",t,!1):e.attachEvent&&e.attachEvent("onresize",t)}}(this)
