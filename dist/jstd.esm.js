function _typeof(r){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(r)}function _classCallCheck(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function _createClass(r,e,t){return e&&_defineProperties(r.prototype,e),t&&_defineProperties(r,t),r}function _defineProperty(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function _slicedToArray(r,e){return _arrayWithHoles(r)||_iterableToArrayLimit(r,e)||_unsupportedIterableToArray(r,e)||_nonIterableRest()}function _toConsumableArray(r){return _arrayWithoutHoles(r)||_iterableToArray(r)||_unsupportedIterableToArray(r)||_nonIterableSpread()}function _arrayWithoutHoles(r){if(Array.isArray(r))return _arrayLikeToArray(r)}function _arrayWithHoles(r){if(Array.isArray(r))return r}function _iterableToArray(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}function _iterableToArrayLimit(r,e){var t=r&&("undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"]);if(null!=t){var n,o,a=[],i=!0,y=!1;try{for(t=t.call(r);!(i=(n=t.next()).done)&&(a.push(n.value),!e||a.length!==e);i=!0);}catch(r){y=!0,o=r}finally{try{i||null==t.return||t.return()}finally{if(y)throw o}}return a}}function _unsupportedIterableToArray(r,e){if(r){if("string"==typeof r)return _arrayLikeToArray(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,e):void 0}}function _arrayLikeToArray(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _createForOfIteratorHelper(r,e){var t="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(!t){if(Array.isArray(r)||(t=_unsupportedIterableToArray(r))||e&&r&&"number"==typeof r.length){t&&(r=t);var n=0,o=function(){};return{s:o,n:function(){return n>=r.length?{done:!0}:{done:!1,value:r[n++]}},e:function(r){throw r},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,y=!1;return{s:function(){t=t.call(r)},n:function(){var r=t.next();return i=r.done,r},e:function(r){y=!0,a=r},f:function(){try{i||null==t.return||t.return()}finally{if(y)throw a}}}}var stringable=function(r){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return typeis(r)===Types.string&&(!e||r.length>0)},strLen=function(r){var e=0;if(!stringable(r))return e;for(var t=0,n=r.length;t<n;t++)e+=r.charCodeAt(t)<256?1:3;return e},kRegSignNumberic=new RegExp("^\\d+(\\.|\\.\\d+)?$","i"),kRegUnSignNumberic=new RegExp("^\\-\\d+(\\.|\\.\\d+)?$","i"),kRegNumberic=new RegExp("^\\-?\\d+(\\.|\\.\\d+)?$","i"),kRegStartStrictNumberic=new RegExp("^(\\-?[1-9]|0\\.\\d+|0$)","i"),kRegEndStrictNumberic=new RegExp("\\.$","i"),kEmptySpacer=new RegExp("(^$|^\\s+$)","i"),isNil=function(r){return isNull(r)||isUndefined(r)||typeis(r)===Types.string&&re(kEmptySpacer,r)},isNull=function(r){return typeis(r)===Types.null},isUndefined=function(r){return typeis(r)===Types.undefined},isNumberic=function(r,e){var t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if(isNil(r))return!1;if(!re(kRegStartStrictNumberic,r)||re(kRegEndStrictNumberic,r))return!1;var n=+r;return!isNaN(n)&&(t?typeis(e)===Types.bool?re(e?kRegSignNumberic:kRegUnSignNumberic,n):re(kRegNumberic,n):typeis(n)===Types.number)},objectable=function(r){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(typeis(r)!==Types.object)return!1;var t=Object.getPrototypeOf(r);if(!t)return!e||Object.keys(r).length>0;if(t.constructor===Object)return!e||Object.keys(r).length>0;var n=Object.prototype.hasOwnProperty.call(t,"constructor")&&t.constructor;return"function"==typeof n&&Object.prototype.hasOwnProperty.toString.call(n)===Object.prototype.hasOwnProperty.toString.call(Object)&&(!e||Object.keys(r).length>0)},optional=function optional(path,obj){var separator=arguments.length>2&&void 0!==arguments[2]?arguments[2]:".",rs=void 0,properties;if(!stringable(path)||!stringable(separator))return rs;var p=path,o;if(properties=-1===p.indexOf(separator)?Array.of(p):p.split(separator),isNil(obj)){try{o=isNumberic(properties[0])?eval("this[".concat(properties[0],"]")):eval("this."+properties[0])}catch(r){o=Object.prototype.constructor()}if(properties.shift(),typeis(o)===Types.object)o=o;else{if(typeis(o)!==Types.array)return rs;o=o}}else o=obj;return rs=properties.reduce((function(r,e){return objectable(r)?r[e]:arrayable(r)?isNumberic(e)?r[+e]:r[e]:r?r[e]:void 0}),o),rs},extractable=function extractable(){for(var rs=Object.prototype.constructor(),_len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];if(!arrayable(args)||args.length<2)return rs;var t=Array.prototype.slice.call(args,-1)[0];if(typeis(t)===Types.string)try{t=eval("this."+t)}catch(r){t=void 0}if(!objectable(t))return rs;var o=Array.prototype.slice.apply(args,[0,-1]),_iterator=_createForOfIteratorHelper(o),_step;try{for(_iterator.s();!(_step=_iterator.n()).done;){var i=_step.value;typeis(i)===Types.string?rs[i]=optional(i,t)||String.prototype.constructor():typeis(i)===Types.array?2===i.length?rs[i[0]]=(typeis(i[1])===Types.string?optional(i[1],t):i[1])||String.prototype.constructor():3===i.length&&(rs[i[0]]=objectable(i[2])||arrayable(i[2])?optional(i[1],i[2]):String.prototype.constructor()):typeis(i)===Types.object&&(rs=Object.assign(rs,i))}}catch(r){_iterator.e(r)}finally{_iterator.f()}return rs},assign=function r(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:".";typeis(t)!==Types.object&&typeis(t)!==Types.array||(stringable(e)||arrayable(e))&&(stringable(e)&&(e=e.split(o)),e.length>1?r(e,t[e.shift()],n):t[e[0]]=n)},objReverse=function(r){if(!objectable(r))return r;var e=r,t=Object.keys(e).reduce((function(r,t){var n=String(e[t]),o=[];return arrayable(r[n],!1)&&(o=r[n]),Object.assign(r,_defineProperty({},n,o.concat(t)))}),{});for(var n in t)t.hasOwnProperty(n)&&(t[n]=Array.isArray(t[n])&&1===t[n].length?t[n][0]:t[n]);return t},TypesDesc,Types;!function(r){r["[object Number]"]="number",r["[object String]"]="string",r["[object Boolean]"]="bool",r["[object Undefined]"]="undefined",r["[object Null]"]="null",r["[object Array]"]="array",r["[object Uint8Array]"]="uint8Array",r["[object Object]"]="object",r["[object Function]"]="function",r["[object BigInt]"]="bigInt",r["[object Date]"]="date",r["[object WeakMap]"]="weakMap",r["[object Map]"]="map",r["[object WeakSet]"]="weakSet",r["[object ArrayBuffer]"]="arrayBuffer",r["[object Set]"]="set",r["[object Symbol]"]="symbol",r["[object DataView]"]="dataView",r["[object Float32Array]"]="float32Array",r["[object Float64Array]"]="float64Array",r["[object Int8Array]"]="int8Array",r["[object Int16Array]"]="int16Array",r["[object Int32Array]"]="int32Array",r["[object Uint8ClampedArray]"]="uint8ClampedArray",r["[object Uint16Array]"]="uint16Array",r["[object Uint32Array]"]="uint32Array",r["[object BigInt64Array]"]="bigInt64Array",r["[object BigUint64Array]"]="bigUint64Array",r["[object RegExp]"]="regExp"}(TypesDesc||(TypesDesc={})),function(r){r.number="number",r.string="string",r.bool="bool",r[void 0]="undefined",r.null="null",r.bigInt="bigInt",r.object="object",r.function="function",r.symbol="symbol",r.arrayBuffer="arrayBuffer",r.regExp="regExp",r.date="date",r.dataView="dataView",r.weakMap="weakMap",r.map="map",r.weakSet="weakSet",r.set="set",r.array="array",r.uint8Array="uint8Array",r.float32Array="float32Array",r.float64Array="float64Array",r.int8Array="int8Array",r.int16Array="int16Array",r.int32Array="int32Array",r.uint8ClampedArray="uint8ClampedArray",r.uint16Array="uint16Array",r.uint32Array="uint32Array",r.bigInt64Array="bigInt64Array",r.bigUint64Array="bigUint64Array",r.unknown=""}(Types||(Types={}));var inEnum=function(r,e){return!(!objectable(r)||r!==Object(r))&&(Object.prototype.hasOwnProperty.call(r,e)||Object.values(r).indexOf(e)>-1)},typeis=function(r){var e=Object.prototype.toString.call(r);if("[object Object]"===e){var t=Object.getPrototypeOf(r);if(t&&t.constructor!==Object)return Types.unknown}var n=Types.unknown;return Object.keys(TypesDesc).includes(e)&&(n=Types[TypesDesc[e]]),n},re=function(r,e){return r.test(e.toString())},arrayable=function(r){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return(typeis(r)===Types.array||typeis(r)===Types.uint8Array)&&(!e||r.length>0)},arrayUnique=function(r){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!arrayable(r))return r;if(e){var t=r.map((function(r){return JSON.stringify(r)}));return Array.from(new Set(t)).map((function(r){return JSON.parse(r)}))}return Array.from(new Set(r))},arrValsCount=function(r){var e={};return arrayable(r)?r.reduce((function(r,e){var t=e+"";return r[t]?r[t]++:r[t]=1,r}),e):e},arrValCount=function(r,e){if(!arrayable(r)||!r.includes(e))return 0;var t=arrValsCount(r),n=e+"";return t.hasOwnProperty(n)?t[n]:0},flat=function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1/0,n=Array.prototype.constructor();if(!arrayable(e,!1))return e;var o=isNaN(t)?1:Number(t);if(!o)return Array.prototype.slice.call(e);for(var a=0,i=e.length>>>0;a<i;a++)n=n.concat(r(e[a],o-1));return n},chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",InvalidCharacterError=function r(e){_classCallCheck(this,r),_defineProperty(this,"name",void 0),_defineProperty(this,"message",void 0),this.message=e,this.name="InvalidCharacterError"},_btoa,_atob;_btoa="undefined"!=typeof window&&window.btoa?window.btoa:function(r){for(var e=String(r),t="",n=0,o=0,a=0,i=chars;e.charAt(0|a)||(i="=",a%1);t+=i.charAt(63&n>>8-a%1*8)){if((o=e.charCodeAt(a+=3/4))>255)throw new InvalidCharacterError("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");n=n<<8|o}return t},_atob="undefined"!=typeof window&&window.atob?window.atob:function(r){var e=String(r).replace(/[=]+$/,"");if(e.length%4==1)throw new InvalidCharacterError("'atob' failed: The string to be decoded is not correctly encoded.");for(var t,n="",o=0,a=0,i=0;t=e.charAt(i++);~t&&(a=o%4?64*a+t:t,o++%4)?n+=String.fromCharCode(255&a>>(-2*o&6)):0)t=chars.indexOf(t);return n};var url2Blob=function(r){if("undefined"==typeof window)throw new Error("url2Blob only works in browser environment");if(!stringable(r))throw new TypeError(r+" can not be null");var e=r.split(",");if(!arrayable(e))throw new ReferenceError("invalid data url");var t=e[0].match(/:(.*?);/);if(!arrayable(t)||t.length<2)throw new ReferenceError("invalid data format");for(var n=t,o=_atob(e[1]),a=o.length,i=new Uint8Array(a);a--;)i[a]=o.charCodeAt(a);return new Blob([i],{type:n[1]})},str2Buffer=function(r){if(stringable(r))return r=_btoa(unescape(encodeURIComponent(r))),new Uint8Array(Array.prototype.map.call(r,(function(r){return r.charCodeAt(0)})))},buffer2Str=function(r){if(arrayable(r)||objectable(r)||stringable(r)){typeis(r)===Types.string&&(r=JSON.parse.call(null,r));var e=Object.values(r);if(arrayable(e))return decodeURIComponent(escape(_atob(String.fromCharCode.apply(null,Array.prototype.map.call(new Uint8Array(e),(function(r){return r}))))))}},formatNumber=function(r){return(r=r.toString())[1]?r:"0"+r},formatDate=function(r){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy-MM-dd hh:mm:ss",t=String.prototype.constructor();if(typeis(r)!==Types.date&&!stringable(r))return t;if(typeis(r)===Types.string&&(r=new Date(r)),"Invalid Date"===r.toString())return t;for(var n=r,o={Y:n.getFullYear(),M:n.getMonth()+1,D:n.getDate(),h:n.getHours(),m:n.getMinutes(),s:n.getSeconds()},a=0,i=Object.keys(o).length>>>0;a<i;a++)if(o.hasOwnProperty(o[a])&&isNaN(o[o[a]]))return t;var y={Y:o.Y.toString(),yyyy:o.Y.toString(),M:o.M.toString(),MM:formatNumber(o.M),d:o.D.toString(),dd:formatNumber(o.D),h:o.h.toString(),hh:formatNumber(o.h),m:o.m.toString(),mm:formatNumber(o.m),s:o.s.toString(),ss:formatNumber(o.s)},l=e.split(/-| |:|\//);t=e;for(var u=0;u<l.length;u++){var s=l[u];t=t.replace(s,y[s])}return t},timezoneDate=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,i=arguments.length>6?arguments[6]:void 0;if([r,e,t,n,o,a].every((function(r){return typeis(r)===Types.number&&r>=0}))){var y=new Date(Date.UTC(r,e-1,t,n,o,a)),l=new Date(y.toLocaleString("en-US",{timeZone:"UTC"})),u=y;if(stringable(i))u=new Date(y.toLocaleString("en-US",{timeZone:i}));else if("Invalid Date"===(u=new Date("".concat(e,"/").concat(t,"/").concat(r," ").concat(n,":").concat(o,":").concat(a))).toString())return;var s=l.getTime()-u.getTime();return y.setTime(y.getTime()+s),y}},quarterable=function(r){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Q",n=Array(2).fill(String.prototype.constructor()),o=new RegExp("^\\d{4}".concat(t,"\\d$"),"g");if(stringable(r)&&o.test(r)){var a=r.split(t),i=_slicedToArray(a,2),y=i[0],l=i[1];if(isNumberic(y)&&isNumberic(l)){var u=+l+ +e,s=4*+y+u;return u%4==0?(n[0]=0===u?y-1:+y+u/4-1,n[1]=4):(n[1]=s%4,n[0]=(s-n[1])/4),n.join(t)}}},mappable=function(r){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return typeis(r)===Types.map&&(!e||r.size>0)},rangeRandom=function(r,e){return!isNumberic(r)||!isNumberic(e)||r>e?Math.random():Math.random()*(e-r)+r},numberic=function(r){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,t=arguments.length>2?arguments[2]:void 0;if(isNumberic(r,void 0,!1)){var n=+r,o=Math.sign(n);n=Math.abs(n);var a=isNumberic(e,!0)?+(1+Array(e).fill(0).join("")):100,i=Math.round((n+Number.EPSILON)*a)/a;return o*((t=isNumberic(t,!0)?t:e)>0?+i.toFixed(t):i)}},guid=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"abcdefghijklmnopqrstuvwxyz0123456789",t=e.split("");return t.length||(t="abcdefghijklmnopqrstuvwxyz0123456789".split("")),_toConsumableArray(Array(r)).map((function(r){return t[Math.random()*t.length|0]})).join("")},hash=function(){return(16777215*Math.random()<<7).toString(16)},sleep=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:16;return new Promise((function(e){return setTimeout(e,r)}))},settable=function(r){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return typeis(r)===Types.set&&(!e||r.size>0)},PromiseStatus;!function(r){r.pending="pending",r.fulfilled="fulfilled",r.rejected="rejected"}(PromiseStatus||(PromiseStatus={}));var PromisePolyfill=function(){function r(e){var t=this;_classCallCheck(this,r),_defineProperty(this,"status",void 0),_defineProperty(this,"value",void 0),_defineProperty(this,"reason",void 0),_defineProperty(this,"onResolvedClosures",void 0),_defineProperty(this,"onRejectedClosures",void 0),this.status=PromiseStatus.pending,this.value=void 0,this.reason=void 0,this.onResolvedClosures=[],this.onRejectedClosures=[];var n=function(r){t.status===PromiseStatus.pending&&(t.status=PromiseStatus.rejected,t.reason=r,t.onRejectedClosures.forEach((function(r){return r()})))};try{e((function(r){t.status===PromiseStatus.pending&&(t.status=PromiseStatus.fulfilled,t.value=r,t.onResolvedClosures.forEach((function(r){return r()})))}),n)}catch(r){n(r)}}return _createClass(r,[{key:"then",value:function(e,t){var n=this;e="function"==typeof e?e:function(r){return r},t="function"==typeof t?t:function(r){throw r};var o=new r((function(r,a){n.status===PromiseStatus.fulfilled&&micro((function(){try{var t,i=null===(t=e)||void 0===t?void 0:t(n.value);resolvePromise(o,i,r,a)}catch(r){a(r)}})),n.status===PromiseStatus.rejected&&micro((function(){try{var e,i=null===(e=t)||void 0===e?void 0:e(n.reason);resolvePromise(o,i,r,a)}catch(r){a(r)}})),n.status===PromiseStatus.pending&&(n.onResolvedClosures.push((function(){micro((function(){try{var t,i=null===(t=e)||void 0===t?void 0:t(n.value);resolvePromise(o,i,r,a)}catch(r){a(r)}}))})),n.onRejectedClosures.push((function(){micro((function(){try{var e,i=null===(e=t)||void 0===e?void 0:e(n.reason);resolvePromise(o,i,r,a)}catch(r){a(r)}}))})))}));return o}},{key:"catch",value:function(r){return this.then(void 0,r)}}]),r}();function micro(r){return"undefined"!=typeof window?window.queueMicrotask(r):process.nextTick(r)}function resolvePromise(r,e,t,n){if(e===r)return n(new TypeError("Chaining cycle detected for promise"));var o=!1;if(null===e||"object"!==_typeof(e)&&"function"!=typeof e)t(e);else try{var a=e.then;"function"==typeof a?a.call(e,(function(e){o||(o=!0,resolvePromise(r,e,t,n))}),(function(r){o||(o=!0,n(r))})):t(e)}catch(r){if(o)return;o=!0,n(r)}}_defineProperty(PromisePolyfill,"resolve",void 0),_defineProperty(PromisePolyfill,"reject",void 0),_defineProperty(PromisePolyfill,"race",void 0),_defineProperty(PromisePolyfill,"all",void 0),_defineProperty(PromisePolyfill,"deferred",void 0),PromisePolyfill.resolve=function(r){return new PromisePolyfill((function(e,t){return e(r)}))},PromisePolyfill.reject=function(r){return new PromisePolyfill((function(e,t){return t(r)}))},PromisePolyfill.race=function(r){return new PromisePolyfill((function(e,t){for(var n=0;n<r.length;n++)r[n].then(e,t)}))},PromisePolyfill.all=function(r){var e=Array(),t=0;return new PromisePolyfill((function(n,o){for(var a=function(a){r[a].then((function(o){!function(n,o,a){e[n]=o,++t===r.length&&a(e)}(a,o,n)}),o)},i=0;i<r.length;i++)a(i)}))},PromisePolyfill.deferred=function(){var r={};return r.promise=new PromisePolyfill((function(e,t){r.resolve=e,r.reject=t})),r};var debounce=function(r,e){var t,n,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(typeis(r)!==Types.function)throw new TypeError("Expected a function");if(!isNumberic(e,!0))throw new TypeError("Expected a numberic time");var a=function(a){for(var i=arguments.length,y=new Array(i>1?i-1:0),l=1;l<i;l++)y[l-1]=arguments[l];if(t&&clearTimeout(t),o){var u=!t;t=setTimeout((function(){t=null}),+e),u&&(n=r.apply(a,y))}return t=setTimeout((function(){r.apply(a,y)}),+e),n};return a.cancel=function(){t&&clearTimeout(t),t=null},a},throttle=function(r,e,t){if(typeis(r)!==Types.function)throw new TypeError("Expected a function");if(!isNumberic(e,!0))throw new TypeError("Expected a numberic time");var n,o;if(t&&(t.leading=null===(n=t.leading)||void 0===n||n,t.trailing=null===(o=t.trailing)||void 0===o||o,!1===t.leading&&!1===t.trailing))throw new Error("Expected one of leading and trailing to be assigned to false");var a,i,y=+e,l=0,u=function(e){for(var n=arguments.length,o=new Array(n>1?n-1:0),u=1;u<n;u++)o[u-1]=arguments[u];var s=(new Date).getTime();l||!1!==(null==t?void 0:t.leading)||(l=s);var c=y-(s-l);return c<=0||c>y?(a&&(clearTimeout(a),a=null),l=s,r.apply(e,o)):a||!1===(null==t?void 0:t.trailing)||(a=setTimeout((function(){l=!1===(null==t?void 0:t.leading)?0:(new Date).getTime(),a=null,r.apply(e,o)}),c)),i};return u.cancel=function(){a&&clearTimeout(a),l=0,a=null},u},_TypedCopyMap,TypedArrayMap={"[object Float32Array]":Float32Array,"[object Float64Array]":Float64Array,"[object Int8Array]":Int8Array,"[object Int16Array]":Int16Array,"[object Int32Array]":Int32Array,"[object Uint8Array]":Uint8Array,"[object Uint16Array]":Uint16Array,"[object Uint32Array]":Uint32Array,"[object Uint8ClampedArray]":Uint8ClampedArray},TypedCopyMap=(_TypedCopyMap={},_defineProperty(_TypedCopyMap,Types.date,copyDate),_defineProperty(_TypedCopyMap,Types.arrayBuffer,copyArrayBuffer),_defineProperty(_TypedCopyMap,Types.dataView,copyDataView),_defineProperty(_TypedCopyMap,Types.float32Array,copyTypedArray),_defineProperty(_TypedCopyMap,Types.float64Array,copyTypedArray),_defineProperty(_TypedCopyMap,Types.int8Array,copyTypedArray),_defineProperty(_TypedCopyMap,Types.int16Array,copyTypedArray),_defineProperty(_TypedCopyMap,Types.int32Array,copyTypedArray),_defineProperty(_TypedCopyMap,Types.uint8Array,copyTypedArray),_defineProperty(_TypedCopyMap,Types.uint8ClampedArray,copyTypedArray),_defineProperty(_TypedCopyMap,Types.uint16Array,copyTypedArray),_defineProperty(_TypedCopyMap,Types.uint32Array,copyTypedArray),_defineProperty(_TypedCopyMap,Types.bigInt64Array,copyTypedArray),_defineProperty(_TypedCopyMap,Types.bigUint64Array,copyTypedArray),_defineProperty(_TypedCopyMap,Types.regExp,copyRegExp),_TypedCopyMap),copy=function r(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=e;if(isNull(n))return n;if(TypedCopyMap[typeis(n)])return TypedCopyMap[typeis(n)](e);if(arrayable(e)){var o=Array.prototype.constructor();return e.map((function(r){return o.push(r)})),t?o.map((function(e){return r(e)})):o}if(objectable(e)){var a=Object.prototype.constructor();for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(a[i]=e[i]);if(!t)return a;for(var y in a)Object.prototype.hasOwnProperty.call(a,y)&&(a[y]=r(a[y]));return a}return e};function copyArrayBuffer(r){var e=new ArrayBuffer(r.byteLength);return new Uint8Array(e).set(new Uint8Array(r)),e}function copyDataView(r){var e=copyArrayBuffer(r.buffer);return new DataView(e,r.byteOffset,r.byteLength)}function copyDate(r){return new Date(r.getTime())}function copyRegExp(r){var e=new RegExp(r.source,r.flags);return e.lastIndex=r.lastIndex,e}function copyTypedArray(r){try{TypedArrayMap["[object BigInt64Array]"]=BigInt64Array,TypedArrayMap["[object BigUint64Array]"]=BigUint64Array}catch(r){}var e=copyArrayBuffer(r.buffer);return new(TypedArrayMap[Object.prototype.toString.call(r)])(e,r.byteOffset,r.length)}var Jstd=Object.freeze({__proto__:null,arrayable:arrayable,arrayUnique:arrayUnique,arrValsCount:arrValsCount,arrValCount:arrValCount,flat:flat,get _btoa(){return _btoa},get _atob(){return _atob},url2Blob:url2Blob,str2Buffer:str2Buffer,buffer2Str:buffer2Str,typeis:typeis,re:re,formatDate:formatDate,timezoneDate:timezoneDate,quarterable:quarterable,get Types(){return Types},get TypesDesc(){return TypesDesc},inEnum:inEnum,mappable:mappable,rangeRandom:rangeRandom,numberic:numberic,guid:guid,hash:hash,objectable:objectable,optional:optional,extractable:extractable,assign:assign,objReverse:objReverse,isNil:isNil,isNull:isNull,isUndefined:isUndefined,isNumberic:isNumberic,sleep:sleep,settable:settable,stringable:stringable,strLen:strLen,PromisePolyfill:PromisePolyfill,debounce:debounce,throttle:throttle,copy:copy,copyArrayBuffer:copyArrayBuffer,copyDataView:copyDataView,copyDate:copyDate,copyRegExp:copyRegExp,copyTypedArray:copyTypedArray});export default Jstd;export{Jstd,PromisePolyfill,Types,TypesDesc,_atob,_btoa,arrValCount,arrValsCount,arrayUnique,arrayable,assign,buffer2Str,copy,copyArrayBuffer,copyDataView,copyDate,copyRegExp,copyTypedArray,debounce,extractable,flat,formatDate,guid,hash,inEnum,isNil,isNull,isNumberic,isUndefined,mappable,numberic,objReverse,objectable,optional,quarterable,rangeRandom,re,settable,sleep,str2Buffer,strLen,stringable,throttle,timezoneDate,typeis,url2Blob};
