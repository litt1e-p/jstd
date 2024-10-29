!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).jstd={})}(this,(function(t){"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function o(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function u(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,o,i=[],a=!0,u=!1;try{for(r=r.call(t);!(a=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);a=!0);}catch(t){u=!0,o=t}finally{try{a||null==r.return||r.return()}finally{if(u)throw o}}return i}(t,e)||l(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t){return function(t){if(Array.isArray(t))return f(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||l(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e){if(t){if("string"==typeof t)return f(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(t,e):void 0}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function s(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}var y,d,p=function(e){var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return E(e)===t.Types.string&&(!r||e.length>0)},v=function(t){var e=0;if(!p(t))return e;for(var r=0,n=t.length;r<n;r++)e+=t.charCodeAt(r)<256?1:3;return e},b=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return String.fromCharCode(+t+(e?65:97))},g=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return p(t,!1)?t.charCodeAt(0)-(e?65:97):NaN},h=function(t){var e;try{e=btoa(unescape(encodeURIComponent(JSON.stringify(t))))}catch(t){console.error("serialize failed:".concat(t)),e=""}return e},m=function(t){var e;try{e=JSON.parse(decodeURIComponent(escape(atob(t))))}catch(t){console.error("unserialize failed:".concat(t)),e=void 0}return e},w=function(e){var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(E(e)!==t.Types.object)return!1;var n=Object.getPrototypeOf(e);if(!n)return!r||Object.keys(e).length>0;if(n.constructor===Object)return!r||Object.keys(e).length>0;var o=Object.prototype.hasOwnProperty.call(n,"constructor")&&n.constructor;return"function"==typeof o&&Object.prototype.hasOwnProperty.toString.call(o)===Object.prototype.hasOwnProperty.toString.call(Object)&&(!r||Object.keys(e).length>0)},A=function(t,e){return console.warn("optional function is deprecated!"),e},j=function(){return console.warn("extractable is deprecated!"),Object.prototype.constructor()},T=function e(r,n,o){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:".";E(n)!==t.Types.object&&E(n)!==t.Types.array&&E(n)!==t.Types.unknown||(p(r)||U(r))&&(p(r)&&(r=r.split(i)),r.length>1?e(r,n[r.shift()],o):n[r[0]]=o)},S=function(t){if(!w(t))return t;var e=t,r=Object.keys(e).reduce((function(t,r){var n=String(e[r]),o=[];return U(t[n],!1)&&(o=t[n]),Object.assign(t,i({},n,o.concat(r)))}),{});for(var n in r)r.hasOwnProperty(n)&&(r[n]=Array.isArray(r[n])&&1===r[n].length?r[n][0]:r[n]);return r},O=function(t,e){if(!t||!e)return!1;var r;try{r=JSON.stringify(t)===JSON.stringify(e)}catch(t){r=!1}return r};t.TypesDesc=void 0,(y=t.TypesDesc||(t.TypesDesc={}))["[object Number]"]="number",y["[object String]"]="string",y["[object Boolean]"]="bool",y["[object Undefined]"]="undefined",y["[object Null]"]="null",y["[object Array]"]="array",y["[object Uint8Array]"]="uint8Array",y["[object Object]"]="object",y["[object Function]"]="function",y["[object AsyncFunction]"]="asyncFunction",y["[object BigInt]"]="bigInt",y["[object Date]"]="date",y["[object WeakMap]"]="weakMap",y["[object Map]"]="map",y["[object WeakSet]"]="weakSet",y["[object ArrayBuffer]"]="arrayBuffer",y["[object Set]"]="set",y["[object Symbol]"]="symbol",y["[object DataView]"]="dataView",y["[object Float32Array]"]="float32Array",y["[object Float64Array]"]="float64Array",y["[object Int8Array]"]="int8Array",y["[object Int16Array]"]="int16Array",y["[object Int32Array]"]="int32Array",y["[object Uint8ClampedArray]"]="uint8ClampedArray",y["[object Uint16Array]"]="uint16Array",y["[object Uint32Array]"]="uint32Array",y["[object BigInt64Array]"]="bigInt64Array",y["[object BigUint64Array]"]="bigUint64Array",y["[object RegExp]"]="regExp",t.Types=void 0,(d=t.Types||(t.Types={})).number="number",d.string="string",d.bool="bool",d[void 0]="undefined",d.null="null",d.bigInt="bigInt",d.object="object",d.function="function",d.asyncFunction="asyncFunction",d.symbol="symbol",d.arrayBuffer="arrayBuffer",d.regExp="regExp",d.date="date",d.dataView="dataView",d.weakMap="weakMap",d.map="map",d.weakSet="weakSet",d.set="set",d.array="array",d.uint8Array="uint8Array",d.float32Array="float32Array",d.float64Array="float64Array",d.int8Array="int8Array",d.int16Array="int16Array",d.int32Array="int32Array",d.uint8ClampedArray="uint8ClampedArray",d.uint16Array="uint16Array",d.uint32Array="uint32Array",d.bigInt64Array="bigInt64Array",d.bigUint64Array="bigUint64Array",d.unknown="";var C=function(t,e){return!(!w(t)||t!==Object(t))&&(Object.prototype.hasOwnProperty.call(t,e)||Object.values(t).indexOf(e)>-1)},E=function(e){var r=Object.prototype.toString.call(e);if("[object Object]"===r){var n=Object.getPrototypeOf(e);if(n&&n.constructor!==Object)return t.Types.unknown}var o=t.Types.unknown;return Object.keys(t.TypesDesc).includes(r)&&(o=t.Types[t.TypesDesc[r]]),o},x=function(t,e){return t.test(e.toString())},U=function(e){var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return(E(e)===t.Types.array||E(e)===t.Types.uint8Array)&&(!r||e.length>0)},I=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!U(t))return t;if(e){var r=t.map((function(t){return JSON.stringify(t)}));return Array.from(new Set(r)).map((function(t){return JSON.parse(t)}))}return Array.from(new Set(t))},D=function(t){var e={};return U(t)?t.reduce((function(t,e){var r=e+"";return t[r]?t[r]++:t[r]=1,t}),e):e},k=function(t,e){if(!U(t)||!t.includes(e))return 0;var r=D(t),n=e+"";return r.hasOwnProperty(n)?r[n]:0},N=function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1/0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{children:"children"},o=Array.prototype.constructor();if(!U(e,!1))return e;var i=isNaN(r)?1:Number(r);if(!i)return Array.prototype.slice.call(e);for(var u=0,c=e.length>>>0;u<c;u++){var l=e[u];if(w(l,!1)){var f=n.children,y=l[f],d=a(l,[f].map(s));o.push(d),U(y)&&(o=o.concat(t(y,i-1,n)))}else o=o.concat(t(l,i-1,n))}return o},M="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",R=o((function t(e){r(this,t),i(this,"name",void 0),i(this,"message",void 0),this.message=e,this.name="InvalidCharacterError"}));t._btoa=void 0,"undefined"!=typeof window&&window.btoa?t._btoa=window.btoa:t._btoa=function(t){for(var e=String(t),r="",n=0,o=0,i=0,a=M;e.charAt(0|i)||(a="=",i%1);r+=a.charAt(63&n>>8-i%1*8)){if((o=e.charCodeAt(i+=3/4))>255)throw new R("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");n=n<<8|o}return r},t._atob=void 0,"undefined"!=typeof window&&window.atob?t._atob=window.atob:t._atob=function(t){var e=String(t).replace(/[=]+$/,"");if(e.length%4==1)throw new R("'atob' failed: The string to be decoded is not correctly encoded.");for(var r,n="",o=0,i=0,a=0;r=e.charAt(a++);~r&&(i=o%4?64*i+r:r,o++%4)?n+=String.fromCharCode(255&i>>(-2*o&6)):0)r=M.indexOf(r);return n};var F,P=function(e){if("undefined"==typeof window)throw new Error("url2Blob only works in browser environment");if(!p(e))throw new TypeError(e+" can not be null");var r=e.split(",");if(!U(r))throw new ReferenceError("invalid data url");var n=r[0].match(/:(.*?);/);if(!U(n)||n.length<2)throw new ReferenceError("invalid data format");for(var o=n,i=t._atob(r[1]),a=i.length,u=new Uint8Array(a);a--;)u[a]=i.charCodeAt(a);return new Blob([u],{type:o[1]})},B=function(e){if(p(e))return e=t._btoa(unescape(encodeURIComponent(e))),new Uint8Array(Array.prototype.map.call(e,(function(t){return t.charCodeAt(0)})))},_=function(e){if(U(e)||w(e)||p(e)){E(e)===t.Types.string&&(e=JSON.parse.call(null,e));var r=Object.values(e);if(U(r))return decodeURIComponent(escape(t._atob(String.fromCharCode.apply(null,Array.prototype.map.call(new Uint8Array(r),(function(t){return t}))))))}},z=new RegExp("^\\d+(\\.|\\.\\d+)?$","i"),V=new RegExp("^\\-\\d+(\\.|\\.\\d+)?$","i"),$=new RegExp("^\\-?\\d+(\\.|\\.\\d+)?$","i"),q=new RegExp("^\\-?([1-9]|0\\.\\d+|0$)","i"),L=new RegExp("\\.$","i"),J=new RegExp("(^$|^\\s+$)","i"),Y=function(e){return Z(e)||H(e)||E(e)===t.Types.string&&x(J,e)},Z=function(e){return E(e)===t.Types.null},H=function(e){return E(e)===t.Types.undefined},W=function(e,r){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(Y(e))return!1;if(!x(q,e)||x(L,e))return!1;var o=+e;return!isNaN(o)&&(n?E(r)===t.Types.bool?x(r?z:V,o):x($,o):E(o)===t.Types.number)},Q=function(t){return(t=t.toString())[1]?t:"0"+t},G=function(e){var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return E(e)===t.Types.date&&(!r||"Invalid Date"!==e.toString())},K=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy-MM-dd hh:mm:ss",n=String.prototype.constructor();if(E(e)!==t.Types.date&&!p(e))return n;if(E(e)===t.Types.string&&(e=new Date(e)),"Invalid Date"===e.toString())return n;for(var o=e,i={Y:o.getFullYear(),M:o.getMonth()+1,D:o.getDate(),h:o.getHours(),m:o.getMinutes(),s:o.getSeconds()},a=0,u=Object.keys(i).length>>>0;a<u;a++)if(i.hasOwnProperty(i[a])&&isNaN(i[i[a]]))return n;var c={Y:i.Y.toString(),yyyy:i.Y.toString(),M:i.M.toString(),MM:Q(i.M),d:i.D.toString(),dd:Q(i.D),h:i.h.toString(),hh:Q(i.h),m:i.m.toString(),mm:Q(i.m),s:i.s.toString(),ss:Q(i.s)},l=r.split(/-| |:|\//);n=r;for(var f=0;f<l.length;f++){var s=l[f];n=n.replace(s,c[s])}return n},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,u=arguments.length>6?arguments[6]:void 0;if([e,r,n,o,i,a].every((function(e){return E(e)===t.Types.number&&e>=0}))){var c=new Date(Date.UTC(e,r-1,n,o,i,a)),l=new Date(c.toLocaleString("en-US",{timeZone:"UTC"})),f=c;if(p(u))f=new Date(c.toLocaleString("en-US",{timeZone:u}));else if("Invalid Date"===(f=new Date("".concat(r,"/").concat(n,"/").concat(e," ").concat(o,":").concat(i,":").concat(a))).toString())return;var s=l.getTime()-f.getTime();return c.setTime(c.getTime()+s),c}},tt=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Q",n=Array(2).fill(String.prototype.constructor()),o=new RegExp("^\\d{4}".concat(r,"\\d$"),"g");if(p(t)&&o.test(t)){var i=t.split(r),a=u(i,2),c=a[0],l=a[1];if(W(c)&&W(l)){var f=+l+ +e,s=4*+c+f;return f%4==0?(n[0]=0===f?c-1:+c+f/4-1,n[1]=4):(n[1]=s%4,n[0]=(s-n[1])/4),n.join(r)}}},et=function(e){var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return E(e)===t.Types.map&&(!r||e.size>0)};!function(t){t.round="round",t.ceil="ceil",t.floor="floor",t.trunc="trunc"}(F||(F={}));var rt,nt=function(){function t(){r(this,t),i(this,"powers",void 0),void 0===Math.trunc&&(Math.trunc=function(t){return t<0?Math.ceil(t):Math.floor(t)}),this.powers=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13,1e14,1e15,1e16,1e17,1e18,1e19,1e20,1e21,1e22]}return o(t,[{key:"intpow10",value:function(t){return t<0||t>22?Math.pow(10,t):this.powers[t]}},{key:"isRound",value:function(t,e){var r=this.intpow10(e);return Math.round(t*r)/r===t}},{key:"decimalAdjust",value:function(t,e,r){if("round"!==t&&this.isRound(e,r||0))return e;var n=this.intpow10(r||0),o=e*n*(1+Number.EPSILON);return Math[t](o)/n}},{key:"round",value:function(t,e){return this.decimalAdjust(F.round,t,e)}},{key:"ceil",value:function(t,e){return this.decimalAdjust(F.ceil,t,e)}},{key:"floor",value:function(t,e){return this.decimalAdjust(F.floor,t,e)}},{key:"trunc",value:function(t,e){return this.decimalAdjust(F.trunc,t,e)}},{key:"toFixed",value:function(t,e){return this.decimalAdjust(F.round,t,e).toFixed(e)}}]),t}(),ot=function(t,e){return!W(t)||!W(e)||t>e?Math.random():Math.random()*(e-t)+t},it=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(W(t,void 0,!1)){var r=+t,n=Math.sign(r);return e=W(e,!0)?e:2,(new nt).round(Math.abs(r),e)*n}},at=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"abcdefghijklmnopqrstuvwxyz0123456789",r=e.split("");return r.length||(r="abcdefghijklmnopqrstuvwxyz0123456789".split("")),c(Array(t)).map((function(t){return r[Math.random()*r.length|0]})).join("")},ut=function(){return(16777215*Math.random()<<7).toString(16)},ct=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,r=arguments.length>2?arguments[2]:void 0,n=it(t,e);if(void 0!==n)return(r=W(r,!0)?r:e)>0?n.toFixed(r):t},lt=function(t){var e,r,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,o=arguments.length>2?arguments[2]:void 0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return W(t)?(o=W(o,!0)?o:n,null!==(e=null===(r=it(t,n))||void 0===r?void 0:r.toLocaleString(void 0,{minimumFractionDigits:o,maximumFractionDigits:o}))&&void 0!==e?e:i):i},ft=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return W(t)?"".concat(t>0?"+":t<0?"-":"").concat(Math.abs(t)):e},st=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:16;return new Promise((function(e){return setTimeout(e,t)}))},yt=function(e){var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return E(e)===t.Types.set&&(!r||e.size>0)};!function(t){t.pending="pending",t.fulfilled="fulfilled",t.rejected="rejected"}(rt||(rt={}));var dt=function(){function t(e){var n=this;r(this,t),i(this,"status",void 0),i(this,"value",void 0),i(this,"reason",void 0),i(this,"onResolvedClosures",void 0),i(this,"onRejectedClosures",void 0),this.status=rt.pending,this.value=void 0,this.reason=void 0,this.onResolvedClosures=[],this.onRejectedClosures=[];var o=function(t){n.status===rt.pending&&(n.status=rt.rejected,n.reason=t,n.onRejectedClosures.forEach((function(t){return t()})))};try{e((function(t){n.status===rt.pending&&(n.status=rt.fulfilled,n.value=t,n.onResolvedClosures.forEach((function(t){return t()})))}),o)}catch(t){o(t)}}return o(t,[{key:"then",value:function(e,r){var n=this;e="function"==typeof e?e:function(t){return t},r="function"==typeof r?r:function(t){throw t};var o=new t((function(t,i){n.status===rt.fulfilled&&pt((function(){try{var r,a=null===(r=e)||void 0===r?void 0:r(n.value);vt(o,a,t,i)}catch(t){i(t)}})),n.status===rt.rejected&&pt((function(){try{var e,a=null===(e=r)||void 0===e?void 0:e(n.reason);vt(o,a,t,i)}catch(t){i(t)}})),n.status===rt.pending&&(n.onResolvedClosures.push((function(){pt((function(){try{var r,a=null===(r=e)||void 0===r?void 0:r(n.value);vt(o,a,t,i)}catch(t){i(t)}}))})),n.onRejectedClosures.push((function(){pt((function(){try{var e,a=null===(e=r)||void 0===e?void 0:e(n.reason);vt(o,a,t,i)}catch(t){i(t)}}))})))}));return o}},{key:"catch",value:function(t){return this.then(void 0,t)}}]),t}();function pt(t){return"undefined"!=typeof window?window.queueMicrotask(t):process.nextTick(t)}function vt(t,r,n,o){if(r===t)return o(new TypeError("Chaining cycle detected for promise"));var i=!1;if(null===r||"object"!==e(r)&&"function"!=typeof r)n(r);else try{var a=r.then;"function"==typeof a?a.call(r,(function(e){i||(i=!0,vt(t,e,n,o))}),(function(t){i||(i=!0,o(t))})):n(r)}catch(t){if(i)return;i=!0,o(t)}}i(dt,"resolve",void 0),i(dt,"reject",void 0),i(dt,"race",void 0),i(dt,"all",void 0),i(dt,"deferred",void 0),dt.resolve=function(t){return new dt((function(e,r){return e(t)}))},dt.reject=function(t){return new dt((function(e,r){return r(t)}))},dt.race=function(t){return new dt((function(e,r){for(var n=0;n<t.length;n++)t[n].then(e,r)}))},dt.all=function(t){var e=Array(),r=0;return new dt((function(n,o){for(var i=function(i){t[i].then((function(o){!function(n,o,i){e[n]=o,++r===t.length&&i(e)}(i,o,n)}),o)},a=0;a<t.length;a++)i(a)}))},dt.deferred=function(){var t={};return t.promise=new dt((function(e,r){t.resolve=e,t.reject=r})),t};var bt,gt=function(e,r){var n,o,i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(E(e)!==t.Types.function&&E(e)!==t.Types.asyncFunction)throw new TypeError("Expected a function");if(!W(r,!0))throw new TypeError("Expected a numberic time");var a=function(){for(var t=arguments.length,a=new Array(t),u=0;u<t;u++)a[u]=arguments[u];var c=this;if(n&&clearTimeout(n),i){var l=!n;n=setTimeout((function(){n=null}),+r),l&&(o=e.apply(c,a))}return n=setTimeout((function(){e.apply(c,a)}),+r),o};return a.cancel=function(){n&&clearTimeout(n),n=null},a},ht=function(e,r,n){if(E(e)!==t.Types.function&&E(e)!==t.Types.asyncFunction)throw new TypeError("Expected a function");if(!W(r,!0))throw new TypeError("Expected a numberic time");var o,i;if(n&&(n.leading=null===(o=n.leading)||void 0===o||o,n.trailing=null===(i=n.trailing)||void 0===i||i,!1===n.leading&&!1===n.trailing))throw new Error("Expected one of leading and trailing to be assigned to false");var a,u,c=+r,l=0,f=function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];var i=this,f=(new Date).getTime();l||!1!==(null==n?void 0:n.leading)||(l=f);var s=c-(f-l);return s<=0||s>c?(a&&(clearTimeout(a),a=null),l=f,e.apply(i,r)):a||!1===(null==n?void 0:n.trailing)||(a=setTimeout((function(){l=!1===(null==n?void 0:n.leading)?0:(new Date).getTime(),a=null,e.apply(i,r)}),s)),u};return f.cancel=function(){a&&clearTimeout(a),l=0,a=null},f},mt={"[object Float32Array]":Float32Array,"[object Float64Array]":Float64Array,"[object Int8Array]":Int8Array,"[object Int16Array]":Int16Array,"[object Int32Array]":Int32Array,"[object Uint8Array]":Uint8Array,"[object Uint16Array]":Uint16Array,"[object Uint32Array]":Uint32Array,"[object Uint8ClampedArray]":Uint8ClampedArray},wt=(i(bt={},t.Types.date,St),i(bt,t.Types.arrayBuffer,jt),i(bt,t.Types.dataView,Tt),i(bt,t.Types.float32Array,Ct),i(bt,t.Types.float64Array,Ct),i(bt,t.Types.int8Array,Ct),i(bt,t.Types.int16Array,Ct),i(bt,t.Types.int32Array,Ct),i(bt,t.Types.uint8Array,Ct),i(bt,t.Types.uint8ClampedArray,Ct),i(bt,t.Types.uint16Array,Ct),i(bt,t.Types.uint32Array,Ct),i(bt,t.Types.bigInt64Array,Ct),i(bt,t.Types.bigUint64Array,Ct),i(bt,t.Types.regExp,Ot),bt),At=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=function t(e){var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:new Map,o=e;if(Z(o))return o;if(wt[E(o)])return wt[E(o)](e);if(n.get(o))return n.get(o);if(U(e,!1)){var i=Array.prototype.constructor();return n.set(o,i),e.map((function(t){return i.push(t)})),r?i.map((function(e){return t(e,r,n)})):i}if(w(e,!1)){var a=Object.prototype.constructor();for(var u in n.set(o,a),e)Object.prototype.hasOwnProperty.call(e,u)&&(a[u]=e[u]);if(!r)return a;for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(a[c]=t(a[c],r,n));return a}return e};return r.call(null,t,e)};function jt(t){var e=new ArrayBuffer(t.byteLength);return new Uint8Array(e).set(new Uint8Array(t)),e}function Tt(t){var e=jt(t.buffer);return new DataView(e,t.byteOffset,t.byteLength)}function St(t){return new Date(t.getTime())}function Ot(t){var e=new RegExp(t.source,t.flags);return e.lastIndex=t.lastIndex,e}function Ct(t){try{mt["[object BigInt64Array]"]=BigInt64Array,mt["[object BigUint64Array]"]=BigUint64Array}catch(t){}var e=jt(t.buffer);return new(mt[Object.prototype.toString.call(t)])(e,t.byteOffset,t.length)}var Et=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"zh-Hans-CN",o=null!=t?t:"",i=null!=e?e:"",a=/^[a-zA-Z0-9]$/;return W(t)&&W(e)?Number(t)>Number(e)?1:Number(t)<Number(e)?-1:0:a.test(o)||a.test(i)?(r||(o=String(o).toUpperCase(),i=String(i).toUpperCase()),o>i?1:o<i?-1:0):(o=String(o))===(i=String(i))?0:o.localeCompare(i,n)},xt=Object.freeze({__proto__:null,arrayable:U,arrayUnique:I,arrValsCount:D,arrValCount:k,flat:N,get _btoa(){return t._btoa},get _atob(){return t._atob},url2Blob:P,str2Buffer:B,buffer2Str:_,typeis:E,re:x,formatDate:K,timezoneDate:X,quarterable:tt,dateable:G,get Types(){return t.Types},get TypesDesc(){return t.TypesDesc},inEnum:C,mappable:et,rangeRandom:ot,numberic:it,guid:at,hash:ut,numberFormat:ct,moneyFormat:lt,signFormat:ft,objectable:w,optional:A,extractable:j,assign:T,objReverse:S,isEqualObj:O,isNil:Y,isNull:Z,isUndefined:H,isNumberic:W,sleep:st,settable:yt,stringable:p,strLen:v,number2Alphabet:b,alphabet2Number:g,serialize:h,unserialize:m,PromisePolyfill:dt,debounce:gt,throttle:ht,copy:At,copyArrayBuffer:jt,copyDataView:Tt,copyDate:St,copyRegExp:Ot,copyTypedArray:Ct,sort:Et});t.Jstd=xt,t.PromisePolyfill=dt,t.alphabet2Number=g,t.arrValCount=k,t.arrValsCount=D,t.arrayUnique=I,t.arrayable=U,t.assign=T,t.buffer2Str=_,t.copy=At,t.copyArrayBuffer=jt,t.copyDataView=Tt,t.copyDate=St,t.copyRegExp=Ot,t.copyTypedArray=Ct,t.dateable=G,t.debounce=gt,t.default=xt,t.extractable=j,t.flat=N,t.formatDate=K,t.guid=at,t.hash=ut,t.inEnum=C,t.isEqualObj=O,t.isNil=Y,t.isNull=Z,t.isNumberic=W,t.isUndefined=H,t.mappable=et,t.moneyFormat=lt,t.number2Alphabet=b,t.numberFormat=ct,t.numberic=it,t.objReverse=S,t.objectable=w,t.optional=A,t.quarterable=tt,t.rangeRandom=ot,t.re=x,t.serialize=h,t.settable=yt,t.signFormat=ft,t.sleep=st,t.sort=Et,t.str2Buffer=B,t.strLen=v,t.stringable=p,t.throttle=ht,t.timezoneDate=X,t.typeis=E,t.unserialize=m,t.url2Blob=P,Object.defineProperty(t,"__esModule",{value:!0})}));
