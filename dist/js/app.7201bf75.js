(function(e){function t(t){for(var r,a,i=t[0],l=t[1],c=t[2],u=0,f=[];u<i.length;u++)a=i[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);d&&d(t);while(f.length)f.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(s.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},a={app:0},o={app:0},s=[];function i(e){return l.p+"js/"+({Mentionslegales:"Mentionslegales",home:"home"}[e]||e)+"."+{Mentionslegales:"52923ef1",home:"fd156ad2"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={Mentionslegales:1,home:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({Mentionslegales:"Mentionslegales",home:"home"}[e]||e)+"."+{Mentionslegales:"dee1b9e5",home:"638854b2"}[e]+".css",o=l.p+r,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var c=s[i],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===r||u===o))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){c=f[i],u=c.getAttribute("data-href");if(u===r||u===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete a[e],d.parentNode.removeChild(d),n(s)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=s);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=i(e);var f=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/sardine/",l.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var f=0;f<c.length;f++)t(c[f]);var d=u;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"0418":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"navbar container-fluid",attrs:{id:"nav"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"navbar_items"},[n("ul",[e._m(0),e._m(1),e._m(2),e._m(3),n("li",[n("router-link",{attrs:{to:"/Legale"}},[e._v("Mentions legales")])],1)])])])])},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",[n("a",{attrs:{href:"/#about"}},[e._v("À propos")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",[n("a",{attrs:{href:"/#services"}},[e._v("Services")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",[n("a",{attrs:{href:"/#video"}},[e._v("Video")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",[n("a",{attrs:{href:"/#newsletter"}},[e._v("Newsletter")])])}],o={name:"Header"},s=o,i=(n("74fe"),n("2877")),l=Object(i["a"])(s,r,a,!1,null,"f71c1414",null);t["a"]=l.exports},"12dc":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{attrs:{id:"content"}},[n("Header"),n("router-view"),n("Footer")],1)},o=[],s=n("0418"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"footer float-sm-start"},[n("cookie-law",{attrs:{theme:"dark-lime"}}),e._m(0)],1)},l=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container text-center"},[n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fab fa-instagram"})]),n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fab fa-facebook-f"})]),n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fab fa-linkedin-in"})]),n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fab fa-youtube"})]),n("a",{attrs:{href:"#"}},[n("i",{staticClass:"fab fa-twitter"})]),n("p",[e._v("Tous droits réservés©")])])}],c=n("d2d0"),u=n.n(c),f={name:"Footer",components:{CookieLaw:u.a}},d=f,p=(n("760c"),n("2877")),h=Object(p["a"])(d,i,l,!1,null,null,null),m=h.exports,v={name:"App",components:{Header:s["a"],Footer:m}},b=v,g=(n("034f"),Object(p["a"])(b,a,o,!1,null,null,null)),_=g.exports,y=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f"));r["a"].use(y["a"]);var w=[{path:"/",name:"Home",components:{default:function(){return n.e("home").then(n.bind(null,"4a12"))}}},{path:"/Legale",name:"Mentionslegales",components:{default:function(){return n.e("Mentionslegales").then(n.bind(null,"45b7"))}}}],C=new y["a"]({mode:"history",base:"/sardine/",routes:w}),E=C;new r["a"]({router:E,render:function(e){return e(_)}}).$mount("#app")},"74fe":function(e,t,n){"use strict";n("12dc")},"760c":function(e,t,n){"use strict";n("c3f5")},"85ec":function(e,t,n){},c3f5:function(e,t,n){}});
//# sourceMappingURL=app.7201bf75.js.map