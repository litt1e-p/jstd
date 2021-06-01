!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((e="undefined"!=typeof globalThis?globalThis:e||self).jstd={})}(this,(function(exports){"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),e}function _defineProperty(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _slicedToArray(e,r){return _arrayWithHoles(e)||_iterableToArrayLimit(e,r)||_unsupportedIterableToArray(e,r)||_nonIterableRest()}function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _iterableToArray(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function _iterableToArrayLimit(e,r){var t=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=t){var o,n,a=[],i=!0,s=!1;try{for(t=t.call(e);!(i=(o=t.next()).done)&&(a.push(o.value),!r||a.length!==r);i=!0);}catch(e){s=!0,n=e}finally{try{i||null==t.return||t.return()}finally{if(s)throw n}}return a}}function _unsupportedIterableToArray(e,r){if(e){if("string"==typeof e)return _arrayLikeToArray(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(e,r):void 0}}function _arrayLikeToArray(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,o=new Array(r);t<r;t++)o[t]=e[t];return o}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _createForOfIteratorHelper(e,r){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=_unsupportedIterableToArray(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var o=0,n=function(){};return{s:n,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,s=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return i=e.done,e},e:function(e){s=!0,a=e},f:function(){try{i||null==t.return||t.return()}finally{if(s)throw a}}}}var stringable=function(e){var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return typeis(e)===exports.Types.string&&(!r||e.length>0)},strLen=function(e){var r=0;if(!stringable(e))return r;for(var t=0,o=e.length;t<o;t++)r+=e.charCodeAt(t)<256?1:3;return r},kRegSignNumberic=new RegExp("^\\d+(\\.|\\.\\d+)?$","i"),kRegUnSignNumberic=new RegExp("^\\-\\d+(\\.|\\.\\d+)?$","i"),kRegNumberic=new RegExp("^\\-?\\d+(\\.|\\.\\d+)?$","i"),kRegStartStrictNumberic=new RegExp("^(\\-?[1-9]|0\\.\\d+|0$)","i"),kRegEndStrictNumberic=new RegExp("\\.$","i"),kEmptySpacer=new RegExp("(^$|^\\s+$)","i"),isNil=function(e){return isNull(e)||isUndefined(e)||typeis(e)===exports.Types.string&&re(kEmptySpacer,e)},isNull=function(e){return typeis(e)===exports.Types.null},isUndefined=function(e){return typeis(e)===exports.Types.undefined},isNumberic=function(e,r){var t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(isNil(e))return!1;if(!re(kRegStartStrictNumberic,e)||re(kRegEndStrictNumberic,e))return!1;var o=+e;return!isNaN(o)&&(t?typeis(r)===exports.Types.bool?re(r?kRegSignNumberic:kRegUnSignNumberic,o):re(kRegNumberic,o):typeis(o)===exports.Types.number)},objectable=function(e){var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(typeis(e)!==exports.Types.object)return!1;var t=Object.getPrototypeOf(e);if(!t)return!r||Object.keys(e).length>0;if(t.constructor===Object)return!r||Object.keys(e).length>0;var o=Object.prototype.hasOwnProperty.call(t,"constructor")&&t.constructor;return"function"==typeof o&&Object.prototype.hasOwnProperty.toString.call(o)===Object.prototype.hasOwnProperty.toString.call(Object)&&(!r||Object.keys(e).length>0)},optional=function optional(path,obj){var separator=arguments.length>2&&void 0!==arguments[2]?arguments[2]:".",rs=void 0,properties;if(!stringable(path)||!stringable(separator))return rs;var p=path,o;if(properties=-1===p.indexOf(separator)?Array.of(p):p.split(separator),isNil(obj)){try{o=isNumberic(properties[0])?eval("this[".concat(properties[0],"]")):eval("this."+properties[0])}catch(e){o=Object.prototype.constructor()}if(properties.shift(),typeis(o)===exports.Types.object)o=o;else{if(typeis(o)!==exports.Types.array)return rs;o=o}}else o=obj;return rs=properties.reduce((function(e,r){return objectable(e)?e[r]:arrayable(e)?isNumberic(r)?e[+r]:e[r]:e?e[r]:void 0}),o),rs},extractable=function extractable(){for(var rs=Object.prototype.constructor(),_len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];if(!arrayable(args)||args.length<2)return rs;var t=Array.prototype.slice.call(args,-1)[0];if(typeis(t)===exports.Types.string)try{t=eval("this."+t)}catch(e){t=void 0}if(!objectable(t))return rs;var o=Array.prototype.slice.apply(args,[0,-1]),_iterator=_createForOfIteratorHelper(o),_step;try{for(_iterator.s();!(_step=_iterator.n()).done;){var i=_step.value;typeis(i)===exports.Types.string?rs[i]=optional(i,t)||String.prototype.constructor():typeis(i)===exports.Types.array?2===i.length?rs[i[0]]=(typeis(i[1])===exports.Types.string?optional(i[1],t):i[1])||String.prototype.constructor():3===i.length&&(rs[i[0]]=objectable(i[2])||arrayable(i[2])?optional(i[1],i[2]):String.prototype.constructor()):typeis(i)===exports.Types.object&&(rs=Object.assign(rs,i))}}catch(e){_iterator.e(e)}finally{_iterator.f()}return rs},assign=function e(r,t,o){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:".";typeis(t)!==exports.Types.object&&typeis(t)!==exports.Types.array||(stringable(r)||arrayable(r))&&(stringable(r)&&(r=r.split(n)),r.length>1?e(r,t[r.shift()],o):t[r[0]]=o)},objReverse=function(e){if(!objectable(e))return e;var r=e,t=Object.keys(r).reduce((function(e,t){var o=String(r[t]),n=[];return arrayable(e[o],!1)&&(n=e[o]),Object.assign(e,_defineProperty({},o,n.concat(t)))}),{});for(var o in t)t.hasOwnProperty(o)&&(t[o]=Array.isArray(t[o])&&1===t[o].length?t[o][0]:t[o]);return t},TypesDesc,Types;exports.TypesDesc=void 0,TypesDesc=exports.TypesDesc||(exports.TypesDesc={}),TypesDesc["[object Number]"]="number",TypesDesc["[object String]"]="string",TypesDesc["[object Boolean]"]="bool",TypesDesc["[object Undefined]"]="undefined",TypesDesc["[object Null]"]="null",TypesDesc["[object Array]"]="array",TypesDesc["[object Uint8Array]"]="uint8Array",TypesDesc["[object Object]"]="object",TypesDesc["[object Function]"]="function",TypesDesc["[object BigInt]"]="bigInt",TypesDesc["[object Date]"]="date",TypesDesc["[object WeakMap]"]="weakMap",TypesDesc["[object Map]"]="map",TypesDesc["[object WeakSet]"]="weakSet",TypesDesc["[object ArrayBuffer]"]="arrayBuffer",TypesDesc["[object Set]"]="set",TypesDesc["[object Symbol]"]="symbol",TypesDesc["[object DataView]"]="dataView",TypesDesc["[object Float32Array]"]="float32Array",TypesDesc["[object Float64Array]"]="float64Array",TypesDesc["[object Int8Array]"]="int8Array",TypesDesc["[object Int16Array]"]="int16Array",TypesDesc["[object Int32Array]"]="int32Array",TypesDesc["[object Uint8ClampedArray]"]="uint8ClampedArray",TypesDesc["[object Uint16Array]"]="uint16Array",TypesDesc["[object Uint32Array]"]="uint32Array",TypesDesc["[object BigInt64Array]"]="bigInt64Array",TypesDesc["[object BigUint64Array]"]="bigUint64Array",TypesDesc["[object RegExp]"]="regExp",exports.Types=void 0,Types=exports.Types||(exports.Types={}),Types.number="number",Types.string="string",Types.bool="bool",Types[void 0]="undefined",Types.null="null",Types.bigInt="bigInt",Types.object="object",Types.function="function",Types.symbol="symbol",Types.arrayBuffer="arrayBuffer",Types.regExp="regExp",Types.date="date",Types.dataView="dataView",Types.weakMap="weakMap",Types.map="map",Types.weakSet="weakSet",Types.set="set",Types.array="array",Types.uint8Array="uint8Array",Types.float32Array="float32Array",Types.float64Array="float64Array",Types.int8Array="int8Array",Types.int16Array="int16Array",Types.int32Array="int32Array",Types.uint8ClampedArray="uint8ClampedArray",Types.uint16Array="uint16Array",Types.uint32Array="uint32Array",Types.bigInt64Array="bigInt64Array",Types.bigUint64Array="bigUint64Array",Types.unknown="";var inEnum=function(e,r){return!(!objectable(e)||e!==Object(e))&&(Object.prototype.hasOwnProperty.call(e,r)||Object.values(e).indexOf(r)>-1)},typeis=function(e){var r=Object.prototype.toString.call(e);if("[object Object]"===r){var t=Object.getPrototypeOf(e);if(t&&t.constructor!==Object)return exports.Types.unknown}var o=exports.Types.unknown;return Object.keys(exports.TypesDesc).includes(r)&&(o=exports.Types[exports.TypesDesc[r]]),o},re=function(e,r){return e.test(r.toString())},arrayable=function(e){var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return(typeis(e)===exports.Types.array||typeis(e)===exports.Types.uint8Array)&&(!r||e.length>0)},arrayUnique=function(e){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!arrayable(e))return e;if(r){var t=e.map((function(e){return JSON.stringify(e)}));return Array.from(new Set(t)).map((function(e){return JSON.parse(e)}))}return Array.from(new Set(e))},arrValsCount=function(e){var r={};return arrayable(e)?e.reduce((function(e,r){var t=r+"";return e[t]?e[t]++:e[t]=1,e}),r):r},arrValCount=function(e,r){if(!arrayable(e)||!e.includes(r))return 0;var t=arrValsCount(e),o=r+"";return t.hasOwnProperty(o)?t[o]:0},flat=function e(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1/0,o=Array.prototype.constructor();if(!arrayable(r,!1))return r;var n=isNaN(t)?1:Number(t);if(!n)return Array.prototype.slice.call(r);for(var a=0,i=r.length>>>0;a<i;a++)o=o.concat(e(r[a],n-1));return o},chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",InvalidCharacterError=function e(r){_classCallCheck(this,e),_defineProperty(this,"name",void 0),_defineProperty(this,"message",void 0),this.message=r,this.name="InvalidCharacterError"};exports._btoa=void 0,"undefined"!=typeof window&&window.btoa?exports._btoa=window.btoa:exports._btoa=function(e){for(var r=String(e),t="",o=0,n=0,a=0,i=chars;r.charAt(0|a)||(i="=",a%1);t+=i.charAt(63&o>>8-a%1*8)){if((n=r.charCodeAt(a+=3/4))>255)throw new InvalidCharacterError("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");o=o<<8|n}return t},exports._atob=void 0,"undefined"!=typeof window&&window.atob?exports._atob=window.atob:exports._atob=function(e){var r=String(e).replace(/[=]+$/,"");if(r.length%4==1)throw new InvalidCharacterError("'atob' failed: The string to be decoded is not correctly encoded.");for(var t,o="",n=0,a=0,i=0;t=r.charAt(i++);~t&&(a=n%4?64*a+t:t,n++%4)?o+=String.fromCharCode(255&a>>(-2*n&6)):0)t=chars.indexOf(t);return o};var url2Blob=function(e){if("undefined"==typeof window)throw new Error("url2Blob only works in browser environment");if(!stringable(e))throw new TypeError(e+" can not be null");var r=e.split(",");if(!arrayable(r))throw new ReferenceError("invalid data url");var t=r[0].match(/:(.*?);/);if(!arrayable(t)||t.length<2)throw new ReferenceError("invalid data format");for(var o=t,n=exports._atob(r[1]),a=n.length,i=new Uint8Array(a);a--;)i[a]=n.charCodeAt(a);return new Blob([i],{type:o[1]})},str2Buffer=function(e){if(stringable(e))return e=exports._btoa(unescape(encodeURIComponent(e))),new Uint8Array(Array.prototype.map.call(e,(function(e){return e.charCodeAt(0)})))},buffer2Str=function(e){if(arrayable(e)||objectable(e)||stringable(e)){typeis(e)===exports.Types.string&&(e=JSON.parse.call(null,e));var r=Object.values(e);if(arrayable(r))return decodeURIComponent(escape(exports._atob(String.fromCharCode.apply(null,Array.prototype.map.call(new Uint8Array(r),(function(e){return e}))))))}},formatNumber=function(e){return(e=e.toString())[1]?e:"0"+e},formatDate=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy-MM-dd hh:mm:ss",t=String.prototype.constructor();if(typeis(e)!==exports.Types.date&&!stringable(e))return t;if(typeis(e)===exports.Types.string&&(e=new Date(e)),"Invalid Date"===e.toString())return t;for(var o=e,n={Y:o.getFullYear(),M:o.getMonth()+1,D:o.getDate(),h:o.getHours(),m:o.getMinutes(),s:o.getSeconds()},a=0,i=Object.keys(n).length>>>0;a<i;a++)if(n.hasOwnProperty(n[a])&&isNaN(n[n[a]]))return t;var s={Y:n.Y.toString(),yyyy:n.Y.toString(),M:n.M.toString(),MM:formatNumber(n.M),d:n.D.toString(),dd:formatNumber(n.D),h:n.h.toString(),hh:formatNumber(n.h),m:n.m.toString(),mm:formatNumber(n.m),s:n.s.toString(),ss:formatNumber(n.s)},p=r.split(/-| |:|\//);t=r;for(var y=0;y<p.length;y++){var l=p[y];t=t.replace(l,s[l])}return t},timezoneDate=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,n=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,i=arguments.length>6?arguments[6]:void 0;if([e,r,t,o,n,a].every((function(e){return typeis(e)===exports.Types.number&&e>=0}))){var s=new Date(Date.UTC(e,r-1,t,o,n,a)),p=new Date(s.toLocaleString("en-US",{timeZone:"UTC"})),y=s;if(stringable(i))y=new Date(s.toLocaleString("en-US",{timeZone:i}));else if("Invalid Date"===(y=new Date("".concat(r,"/").concat(t,"/").concat(e," ").concat(o,":").concat(n,":").concat(a))).toString())return;var l=p.getTime()-y.getTime();return s.setTime(s.getTime()+l),s}},quarterable=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Q",o=Array(2).fill(String.prototype.constructor()),n=new RegExp("^\\d{4}".concat(t,"\\d$"),"g");if(stringable(e)&&n.test(e)){var a=e.split(t),i=_slicedToArray(a,2),s=i[0],p=i[1];if(isNumberic(s)&&isNumberic(p)){var y=+p+ +r,l=4*+s+y;return y%4==0?(o[0]=0===y?s-1:+s+y/4-1,o[1]=4):(o[1]=l%4,o[0]=(l-o[1])/4),o.join(t)}}},mappable=function(e){var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return typeis(e)===exports.Types.map&&(!r||e.size>0)},rangeRandom=function(e,r){return!isNumberic(e)||!isNumberic(r)||e>r?Math.random():Math.random()*(r-e)+e},numberic=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,t=arguments.length>2?arguments[2]:void 0;if(isNumberic(e,void 0,!1)){var o=+e,n=Math.sign(o);o=Math.abs(o);var a=isNumberic(r,!0)?+(1+Array(r).fill(0).join("")):100,i=Math.round((o+Number.EPSILON)*a)/a;return n*((t=isNumberic(t,!0)?t:r)>0?+i.toFixed(t):i)}},guid=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"abcdefghijklmnopqrstuvwxyz0123456789",t=r.split("");return t.length||(t="abcdefghijklmnopqrstuvwxyz0123456789".split("")),_toConsumableArray(Array(e)).map((function(e){return t[Math.random()*t.length|0]})).join("")},hash=function(){return(16777215*Math.random()<<7).toString(16)},sleep=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:16;return new Promise((function(r){return setTimeout(r,e)}))},settable=function(e){var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return typeis(e)===exports.Types.set&&(!r||e.size>0)},PromiseStatus;!function(e){e.pending="pending",e.fulfilled="fulfilled",e.rejected="rejected"}(PromiseStatus||(PromiseStatus={}));var PromisePolyfill=function(){function e(r){var t=this;_classCallCheck(this,e),_defineProperty(this,"status",void 0),_defineProperty(this,"value",void 0),_defineProperty(this,"reason",void 0),_defineProperty(this,"onResolvedClosures",void 0),_defineProperty(this,"onRejectedClosures",void 0),this.status=PromiseStatus.pending,this.value=void 0,this.reason=void 0,this.onResolvedClosures=[],this.onRejectedClosures=[];var o=function(e){t.status===PromiseStatus.pending&&(t.status=PromiseStatus.rejected,t.reason=e,t.onRejectedClosures.forEach((function(e){return e()})))};try{r((function(e){t.status===PromiseStatus.pending&&(t.status=PromiseStatus.fulfilled,t.value=e,t.onResolvedClosures.forEach((function(e){return e()})))}),o)}catch(e){o(e)}}return _createClass(e,[{key:"then",value:function(r,t){var o=this;r="function"==typeof r?r:function(e){return e},t="function"==typeof t?t:function(e){throw e};var n=new e((function(e,a){o.status===PromiseStatus.fulfilled&&micro((function(){try{var t,i=null===(t=r)||void 0===t?void 0:t(o.value);resolvePromise(n,i,e,a)}catch(e){a(e)}})),o.status===PromiseStatus.rejected&&micro((function(){try{var r,i=null===(r=t)||void 0===r?void 0:r(o.reason);resolvePromise(n,i,e,a)}catch(e){a(e)}})),o.status===PromiseStatus.pending&&(o.onResolvedClosures.push((function(){micro((function(){try{var t,i=null===(t=r)||void 0===t?void 0:t(o.value);resolvePromise(n,i,e,a)}catch(e){a(e)}}))})),o.onRejectedClosures.push((function(){micro((function(){try{var r,i=null===(r=t)||void 0===r?void 0:r(o.reason);resolvePromise(n,i,e,a)}catch(e){a(e)}}))})))}));return n}},{key:"catch",value:function(e){return this.then(void 0,e)}}]),e}();function micro(e){return"undefined"!=typeof window?window.queueMicrotask(e):process.nextTick(e)}function resolvePromise(e,r,t,o){if(r===e)return o(new TypeError("Chaining cycle detected for promise"));var n=!1;if(null===r||"object"!==_typeof(r)&&"function"!=typeof r)t(r);else try{var a=r.then;"function"==typeof a?a.call(r,(function(r){n||(n=!0,resolvePromise(e,r,t,o))}),(function(e){n||(n=!0,o(e))})):t(r)}catch(e){if(n)return;n=!0,o(e)}}_defineProperty(PromisePolyfill,"resolve",void 0),_defineProperty(PromisePolyfill,"reject",void 0),_defineProperty(PromisePolyfill,"race",void 0),_defineProperty(PromisePolyfill,"all",void 0),_defineProperty(PromisePolyfill,"deferred",void 0),PromisePolyfill.resolve=function(e){return new PromisePolyfill((function(r,t){return r(e)}))},PromisePolyfill.reject=function(e){return new PromisePolyfill((function(r,t){return t(e)}))},PromisePolyfill.race=function(e){return new PromisePolyfill((function(r,t){for(var o=0;o<e.length;o++)e[o].then(r,t)}))},PromisePolyfill.all=function(e){var r=Array(),t=0;return new PromisePolyfill((function(o,n){for(var a=function(a){e[a].then((function(n){!function(o,n,a){r[o]=n,++t===e.length&&a(r)}(a,n,o)}),n)},i=0;i<e.length;i++)a(i)}))},PromisePolyfill.deferred=function(){var e={};return e.promise=new PromisePolyfill((function(r,t){e.resolve=r,e.reject=t})),e};var debounce=function(e,r){var t,o,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(typeis(e)!==exports.Types.function)throw new TypeError("Expected a function");if(!isNumberic(r,!0))throw new TypeError("Expected a numberic time");var a=function(){for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];var p=this;if(t&&clearTimeout(t),n){var y=!t;t=setTimeout((function(){t=null}),+r),y&&(o=e.apply(p,i))}return t=setTimeout((function(){e.apply(p,i)}),+r),o};return a.cancel=function(){t&&clearTimeout(t),t=null},a},throttle=function(e,r,t){if(typeis(e)!==exports.Types.function)throw new TypeError("Expected a function");if(!isNumberic(r,!0))throw new TypeError("Expected a numberic time");var o,n;if(t&&(t.leading=null===(o=t.leading)||void 0===o||o,t.trailing=null===(n=t.trailing)||void 0===n||n,!1===t.leading&&!1===t.trailing))throw new Error("Expected one of leading and trailing to be assigned to false");var a,i,s=+r,p=0,y=function(){for(var r=arguments.length,o=new Array(r),n=0;n<r;n++)o[n]=arguments[n];var y=this,l=(new Date).getTime();p||!1!==(null==t?void 0:t.leading)||(p=l);var c=s-(l-p);return c<=0||c>s?(a&&(clearTimeout(a),a=null),p=l,e.apply(y,o)):a||!1===(null==t?void 0:t.trailing)||(a=setTimeout((function(){p=!1===(null==t?void 0:t.leading)?0:(new Date).getTime(),a=null,e.apply(y,o)}),c)),i};return y.cancel=function(){a&&clearTimeout(a),p=0,a=null},y},_TypedCopyMap,TypedArrayMap={"[object Float32Array]":Float32Array,"[object Float64Array]":Float64Array,"[object Int8Array]":Int8Array,"[object Int16Array]":Int16Array,"[object Int32Array]":Int32Array,"[object Uint8Array]":Uint8Array,"[object Uint16Array]":Uint16Array,"[object Uint32Array]":Uint32Array,"[object Uint8ClampedArray]":Uint8ClampedArray},TypedCopyMap=(_TypedCopyMap={},_defineProperty(_TypedCopyMap,exports.Types.date,copyDate),_defineProperty(_TypedCopyMap,exports.Types.arrayBuffer,copyArrayBuffer),_defineProperty(_TypedCopyMap,exports.Types.dataView,copyDataView),_defineProperty(_TypedCopyMap,exports.Types.float32Array,copyTypedArray),_defineProperty(_TypedCopyMap,exports.Types.float64Array,copyTypedArray),_defineProperty(_TypedCopyMap,exports.Types.int8Array,copyTypedArray),_defineProperty(_TypedCopyMap,exports.Types.int16Array,copyTypedArray),_defineProperty(_TypedCopyMap,exports.Types.int32Array,copyTypedArray),_defineProperty(_TypedCopyMap,exports.Types.uint8Array,copyTypedArray),_defineProperty(_TypedCopyMap,exports.Types.uint8ClampedArray,copyTypedArray),_defineProperty(_TypedCopyMap,exports.Types.uint16Array,copyTypedArray),_defineProperty(_TypedCopyMap,exports.Types.uint32Array,copyTypedArray),_defineProperty(_TypedCopyMap,exports.Types.bigInt64Array,copyTypedArray),_defineProperty(_TypedCopyMap,exports.Types.bigUint64Array,copyTypedArray),_defineProperty(_TypedCopyMap,exports.Types.regExp,copyRegExp),_TypedCopyMap),copy=function e(r){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],o=r;if(isNull(o))return o;if(TypedCopyMap[typeis(o)])return TypedCopyMap[typeis(o)](r);if(arrayable(r)){var n=Array.prototype.constructor();return r.map((function(e){return n.push(e)})),t?n.map((function(r){return e(r)})):n}if(objectable(r)){var a=Object.prototype.constructor();for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(a[i]=r[i]);if(!t)return a;for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(a[s]=e(a[s]));return a}return r};function copyArrayBuffer(e){var r=new ArrayBuffer(e.byteLength);return new Uint8Array(r).set(new Uint8Array(e)),r}function copyDataView(e){var r=copyArrayBuffer(e.buffer);return new DataView(r,e.byteOffset,e.byteLength)}function copyDate(e){return new Date(e.getTime())}function copyRegExp(e){var r=new RegExp(e.source,e.flags);return r.lastIndex=e.lastIndex,r}function copyTypedArray(e){try{TypedArrayMap["[object BigInt64Array]"]=BigInt64Array,TypedArrayMap["[object BigUint64Array]"]=BigUint64Array}catch(e){}var r=copyArrayBuffer(e.buffer);return new(TypedArrayMap[Object.prototype.toString.call(e)])(r,e.byteOffset,e.length)}var Jstd=Object.freeze({__proto__:null,arrayable:arrayable,arrayUnique:arrayUnique,arrValsCount:arrValsCount,arrValCount:arrValCount,flat:flat,get _btoa(){return exports._btoa},get _atob(){return exports._atob},url2Blob:url2Blob,str2Buffer:str2Buffer,buffer2Str:buffer2Str,typeis:typeis,re:re,formatDate:formatDate,timezoneDate:timezoneDate,quarterable:quarterable,get Types(){return exports.Types},get TypesDesc(){return exports.TypesDesc},inEnum:inEnum,mappable:mappable,rangeRandom:rangeRandom,numberic:numberic,guid:guid,hash:hash,objectable:objectable,optional:optional,extractable:extractable,assign:assign,objReverse:objReverse,isNil:isNil,isNull:isNull,isUndefined:isUndefined,isNumberic:isNumberic,sleep:sleep,settable:settable,stringable:stringable,strLen:strLen,PromisePolyfill:PromisePolyfill,debounce:debounce,throttle:throttle,copy:copy,copyArrayBuffer:copyArrayBuffer,copyDataView:copyDataView,copyDate:copyDate,copyRegExp:copyRegExp,copyTypedArray:copyTypedArray});exports.Jstd=Jstd,exports.PromisePolyfill=PromisePolyfill,exports.arrValCount=arrValCount,exports.arrValsCount=arrValsCount,exports.arrayUnique=arrayUnique,exports.arrayable=arrayable,exports.assign=assign,exports.buffer2Str=buffer2Str,exports.copy=copy,exports.copyArrayBuffer=copyArrayBuffer,exports.copyDataView=copyDataView,exports.copyDate=copyDate,exports.copyRegExp=copyRegExp,exports.copyTypedArray=copyTypedArray,exports.debounce=debounce,exports.default=Jstd,exports.extractable=extractable,exports.flat=flat,exports.formatDate=formatDate,exports.guid=guid,exports.hash=hash,exports.inEnum=inEnum,exports.isNil=isNil,exports.isNull=isNull,exports.isNumberic=isNumberic,exports.isUndefined=isUndefined,exports.mappable=mappable,exports.numberic=numberic,exports.objReverse=objReverse,exports.objectable=objectable,exports.optional=optional,exports.quarterable=quarterable,exports.rangeRandom=rangeRandom,exports.re=re,exports.settable=settable,exports.sleep=sleep,exports.str2Buffer=str2Buffer,exports.strLen=strLen,exports.stringable=stringable,exports.throttle=throttle,exports.timezoneDate=timezoneDate,exports.typeis=typeis,exports.url2Blob=url2Blob,Object.defineProperty(exports,"__esModule",{value:!0})}));
