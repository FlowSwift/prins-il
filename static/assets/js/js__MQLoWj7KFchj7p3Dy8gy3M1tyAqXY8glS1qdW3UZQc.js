//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){function n(n){function t(t,r,e,u,i,o){for(;i>=0&&o>i;i+=n){var a=u?u[i]:i;e=r(e,t[a],a,t)}return e}return function(r,e,u,i){e=b(e,i,4);var o=!k(r)&&m.keys(r),a=(o||r).length,c=n>0?0:a-1;return arguments.length<3&&(u=r[o?o[c]:c],c+=n),t(r,e,u,o,c,a)}}function t(n){return function(t,r,e){r=x(r,e);for(var u=O(t),i=n>0?0:u-1;i>=0&&u>i;i+=n)if(r(t[i],i,t))return i;return-1}}function r(n,t,r){return function(e,u,i){var o=0,a=O(e);if("number"==typeof i)n>0?o=i>=0?i:Math.max(i+a,o):a=i>=0?Math.min(i+1,a):i+a+1;else if(r&&i&&a)return i=r(e,u),e[i]===u?i:-1;if(u!==u)return i=t(l.call(e,o,a),m.isNaN),i>=0?i+o:-1;for(i=n>0?o:a-1;i>=0&&a>i;i+=n)if(e[i]===u)return i;return-1}}function e(n,t){var r=I.length,e=n.constructor,u=m.isFunction(e)&&e.prototype||a,i="constructor";for(m.has(n,i)&&!m.contains(t,i)&&t.push(i);r--;)i=I[r],i in n&&n[i]!==u[i]&&!m.contains(t,i)&&t.push(i)}var u=this,i=u._,o=Array.prototype,a=Object.prototype,c=Function.prototype,f=o.push,l=o.slice,s=a.toString,p=a.hasOwnProperty,h=Array.isArray,v=Object.keys,g=c.bind,y=Object.create,d=function(){},m=function(n){return n instanceof m?n:this instanceof m?void(this._wrapped=n):new m(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=m),exports._=m):u._=m,m.VERSION="1.8.3";var b=function(n,t,r){if(t===void 0)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}},x=function(n,t,r){return null==n?m.identity:m.isFunction(n)?b(n,t,r):m.isObject(n)?m.matcher(n):m.property(n)};m.iteratee=function(n,t){return x(n,t,1/0)};var _=function(n,t){return function(r){var e=arguments.length;if(2>e||null==r)return r;for(var u=1;e>u;u++)for(var i=arguments[u],o=n(i),a=o.length,c=0;a>c;c++){var f=o[c];t&&r[f]!==void 0||(r[f]=i[f])}return r}},j=function(n){if(!m.isObject(n))return{};if(y)return y(n);d.prototype=n;var t=new d;return d.prototype=null,t},w=function(n){return function(t){return null==t?void 0:t[n]}},A=Math.pow(2,53)-1,O=w("length"),k=function(n){var t=O(n);return"number"==typeof t&&t>=0&&A>=t};m.each=m.forEach=function(n,t,r){t=b(t,r);var e,u;if(k(n))for(e=0,u=n.length;u>e;e++)t(n[e],e,n);else{var i=m.keys(n);for(e=0,u=i.length;u>e;e++)t(n[i[e]],i[e],n)}return n},m.map=m.collect=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=Array(u),o=0;u>o;o++){var a=e?e[o]:o;i[o]=t(n[a],a,n)}return i},m.reduce=m.foldl=m.inject=n(1),m.reduceRight=m.foldr=n(-1),m.find=m.detect=function(n,t,r){var e;return e=k(n)?m.findIndex(n,t,r):m.findKey(n,t,r),e!==void 0&&e!==-1?n[e]:void 0},m.filter=m.select=function(n,t,r){var e=[];return t=x(t,r),m.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e},m.reject=function(n,t,r){return m.filter(n,m.negate(x(t)),r)},m.every=m.all=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(!t(n[o],o,n))return!1}return!0},m.some=m.any=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(t(n[o],o,n))return!0}return!1},m.contains=m.includes=m.include=function(n,t,r,e){return k(n)||(n=m.values(n)),("number"!=typeof r||e)&&(r=0),m.indexOf(n,t,r)>=0},m.invoke=function(n,t){var r=l.call(arguments,2),e=m.isFunction(t);return m.map(n,function(n){var u=e?t:n[t];return null==u?u:u.apply(n,r)})},m.pluck=function(n,t){return m.map(n,m.property(t))},m.where=function(n,t){return m.filter(n,m.matcher(t))},m.findWhere=function(n,t){return m.find(n,m.matcher(t))},m.max=function(n,t,r){var e,u,i=-1/0,o=-1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],e>i&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(u>o||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i},m.min=function(n,t,r){var e,u,i=1/0,o=1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],i>e&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(o>u||1/0===u&&1/0===i)&&(i=n,o=u)});return i},m.shuffle=function(n){for(var t,r=k(n)?n:m.values(n),e=r.length,u=Array(e),i=0;e>i;i++)t=m.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];return u},m.sample=function(n,t,r){return null==t||r?(k(n)||(n=m.values(n)),n[m.random(n.length-1)]):m.shuffle(n).slice(0,Math.max(0,t))},m.sortBy=function(n,t,r){return t=x(t,r),m.pluck(m.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={};return r=x(r,e),m.each(t,function(e,i){var o=r(e,i,t);n(u,e,o)}),u}};m.groupBy=F(function(n,t,r){m.has(n,r)?n[r].push(t):n[r]=[t]}),m.indexBy=F(function(n,t,r){n[r]=t}),m.countBy=F(function(n,t,r){m.has(n,r)?n[r]++:n[r]=1}),m.toArray=function(n){return n?m.isArray(n)?l.call(n):k(n)?m.map(n,m.identity):m.values(n):[]},m.size=function(n){return null==n?0:k(n)?n.length:m.keys(n).length},m.partition=function(n,t,r){t=x(t,r);var e=[],u=[];return m.each(n,function(n,r,i){(t(n,r,i)?e:u).push(n)}),[e,u]},m.first=m.head=m.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:m.initial(n,n.length-t)},m.initial=function(n,t,r){return l.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},m.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:m.rest(n,Math.max(0,n.length-t))},m.rest=m.tail=m.drop=function(n,t,r){return l.call(n,null==t||r?1:t)},m.compact=function(n){return m.filter(n,m.identity)};var S=function(n,t,r,e){for(var u=[],i=0,o=e||0,a=O(n);a>o;o++){var c=n[o];if(k(c)&&(m.isArray(c)||m.isArguments(c))){t||(c=S(c,t,r));var f=0,l=c.length;for(u.length+=l;l>f;)u[i++]=c[f++]}else r||(u[i++]=c)}return u};m.flatten=function(n,t){return S(n,t,!1)},m.without=function(n){return m.difference(n,l.call(arguments,1))},m.uniq=m.unique=function(n,t,r,e){m.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=x(r,e));for(var u=[],i=[],o=0,a=O(n);a>o;o++){var c=n[o],f=r?r(c,o,n):c;t?(o&&i===f||u.push(c),i=f):r?m.contains(i,f)||(i.push(f),u.push(c)):m.contains(u,c)||u.push(c)}return u},m.union=function(){return m.uniq(S(arguments,!0,!0))},m.intersection=function(n){for(var t=[],r=arguments.length,e=0,u=O(n);u>e;e++){var i=n[e];if(!m.contains(t,i)){for(var o=1;r>o&&m.contains(arguments[o],i);o++);o===r&&t.push(i)}}return t},m.difference=function(n){var t=S(arguments,!0,!0,1);return m.filter(n,function(n){return!m.contains(t,n)})},m.zip=function(){return m.unzip(arguments)},m.unzip=function(n){for(var t=n&&m.max(n,O).length||0,r=Array(t),e=0;t>e;e++)r[e]=m.pluck(n,e);return r},m.object=function(n,t){for(var r={},e=0,u=O(n);u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},m.findIndex=t(1),m.findLastIndex=t(-1),m.sortedIndex=function(n,t,r,e){r=x(r,e,1);for(var u=r(t),i=0,o=O(n);o>i;){var a=Math.floor((i+o)/2);r(n[a])<u?i=a+1:o=a}return i},m.indexOf=r(1,m.findIndex,m.sortedIndex),m.lastIndexOf=r(-1,m.findLastIndex),m.range=function(n,t,r){null==t&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;e>i;i++,n+=r)u[i]=n;return u};var E=function(n,t,r,e,u){if(!(e instanceof t))return n.apply(r,u);var i=j(n.prototype),o=n.apply(i,u);return m.isObject(o)?o:i};m.bind=function(n,t){if(g&&n.bind===g)return g.apply(n,l.call(arguments,1));if(!m.isFunction(n))throw new TypeError("Bind must be called on a function");var r=l.call(arguments,2),e=function(){return E(n,e,t,this,r.concat(l.call(arguments)))};return e},m.partial=function(n){var t=l.call(arguments,1),r=function(){for(var e=0,u=t.length,i=Array(u),o=0;u>o;o++)i[o]=t[o]===m?arguments[e++]:t[o];for(;e<arguments.length;)i.push(arguments[e++]);return E(n,r,this,this,i)};return r},m.bindAll=function(n){var t,r,e=arguments.length;if(1>=e)throw new Error("bindAll must be passed function names");for(t=1;e>t;t++)r=arguments[t],n[r]=m.bind(n[r],n);return n},m.memoize=function(n,t){var r=function(e){var u=r.cache,i=""+(t?t.apply(this,arguments):e);return m.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},m.delay=function(n,t){var r=l.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},m.defer=m.partial(m.delay,m,1),m.throttle=function(n,t,r){var e,u,i,o=null,a=0;r||(r={});var c=function(){a=r.leading===!1?0:m.now(),o=null,i=n.apply(e,u),o||(e=u=null)};return function(){var f=m.now();a||r.leading!==!1||(a=f);var l=t-(f-a);return e=this,u=arguments,0>=l||l>t?(o&&(clearTimeout(o),o=null),a=f,i=n.apply(e,u),o||(e=u=null)):o||r.trailing===!1||(o=setTimeout(c,l)),i}},m.debounce=function(n,t,r){var e,u,i,o,a,c=function(){var f=m.now()-o;t>f&&f>=0?e=setTimeout(c,t-f):(e=null,r||(a=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,o=m.now();var f=r&&!e;return e||(e=setTimeout(c,t)),f&&(a=n.apply(i,u),i=u=null),a}},m.wrap=function(n,t){return m.partial(t,n)},m.negate=function(n){return function(){return!n.apply(this,arguments)}},m.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},m.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},m.before=function(n,t){var r;return function(){return--n>0&&(r=t.apply(this,arguments)),1>=n&&(t=null),r}},m.once=m.partial(m.before,2);var M=!{toString:null}.propertyIsEnumerable("toString"),I=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];m.keys=function(n){if(!m.isObject(n))return[];if(v)return v(n);var t=[];for(var r in n)m.has(n,r)&&t.push(r);return M&&e(n,t),t},m.allKeys=function(n){if(!m.isObject(n))return[];var t=[];for(var r in n)t.push(r);return M&&e(n,t),t},m.values=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},m.mapObject=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=u.length,o={},a=0;i>a;a++)e=u[a],o[e]=t(n[e],e,n);return o},m.pairs=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},m.invert=function(n){for(var t={},r=m.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},m.functions=m.methods=function(n){var t=[];for(var r in n)m.isFunction(n[r])&&t.push(r);return t.sort()},m.extend=_(m.allKeys),m.extendOwn=m.assign=_(m.keys),m.findKey=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=0,o=u.length;o>i;i++)if(e=u[i],t(n[e],e,n))return e},m.pick=function(n,t,r){var e,u,i={},o=n;if(null==o)return i;m.isFunction(t)?(u=m.allKeys(o),e=b(t,r)):(u=S(arguments,!1,!1,1),e=function(n,t,r){return t in r},o=Object(o));for(var a=0,c=u.length;c>a;a++){var f=u[a],l=o[f];e(l,f,o)&&(i[f]=l)}return i},m.omit=function(n,t,r){if(m.isFunction(t))t=m.negate(t);else{var e=m.map(S(arguments,!1,!1,1),String);t=function(n,t){return!m.contains(e,t)}}return m.pick(n,t,r)},m.defaults=_(m.allKeys,!0),m.create=function(n,t){var r=j(n);return t&&m.extendOwn(r,t),r},m.clone=function(n){return m.isObject(n)?m.isArray(n)?n.slice():m.extend({},n):n},m.tap=function(n,t){return t(n),n},m.isMatch=function(n,t){var r=m.keys(t),e=r.length;if(null==n)return!e;for(var u=Object(n),i=0;e>i;i++){var o=r[i];if(t[o]!==u[o]||!(o in u))return!1}return!0};var N=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof m&&(n=n._wrapped),t instanceof m&&(t=t._wrapped);var u=s.call(n);if(u!==s.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof t)return!1;var o=n.constructor,a=t.constructor;if(o!==a&&!(m.isFunction(o)&&o instanceof o&&m.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in t)return!1}r=r||[],e=e||[];for(var c=r.length;c--;)if(r[c]===n)return e[c]===t;if(r.push(n),e.push(t),i){if(c=n.length,c!==t.length)return!1;for(;c--;)if(!N(n[c],t[c],r,e))return!1}else{var f,l=m.keys(n);if(c=l.length,m.keys(t).length!==c)return!1;for(;c--;)if(f=l[c],!m.has(t,f)||!N(n[f],t[f],r,e))return!1}return r.pop(),e.pop(),!0};m.isEqual=function(n,t){return N(n,t)},m.isEmpty=function(n){return null==n?!0:k(n)&&(m.isArray(n)||m.isString(n)||m.isArguments(n))?0===n.length:0===m.keys(n).length},m.isElement=function(n){return!(!n||1!==n.nodeType)},m.isArray=h||function(n){return"[object Array]"===s.call(n)},m.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},m.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(n){m["is"+n]=function(t){return s.call(t)==="[object "+n+"]"}}),m.isArguments(arguments)||(m.isArguments=function(n){return m.has(n,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(m.isFunction=function(n){return"function"==typeof n||!1}),m.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},m.isNaN=function(n){return m.isNumber(n)&&n!==+n},m.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===s.call(n)},m.isNull=function(n){return null===n},m.isUndefined=function(n){return n===void 0},m.has=function(n,t){return null!=n&&p.call(n,t)},m.noConflict=function(){return u._=i,this},m.identity=function(n){return n},m.constant=function(n){return function(){return n}},m.noop=function(){},m.property=w,m.propertyOf=function(n){return null==n?function(){}:function(t){return n[t]}},m.matcher=m.matches=function(n){return n=m.extendOwn({},n),function(t){return m.isMatch(t,n)}},m.times=function(n,t,r){var e=Array(Math.max(0,n));t=b(t,r,1);for(var u=0;n>u;u++)e[u]=t(u);return e},m.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},m.now=Date.now||function(){return(new Date).getTime()};var B={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},T=m.invert(B),R=function(n){var t=function(t){return n[t]},r="(?:"+m.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};m.escape=R(B),m.unescape=R(T),m.result=function(n,t,r){var e=null==n?void 0:n[t];return e===void 0&&(e=r),m.isFunction(e)?e.call(n):e};var q=0;m.uniqueId=function(n){var t=++q+"";return n?n+t:t},m.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var K=/(.)^/,z={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\u2028|\u2029/g,L=function(n){return"\\"+z[n]};m.template=function(n,t,r){!t&&r&&(t=r),t=m.defaults({},t,m.templateSettings);var e=RegExp([(t.escape||K).source,(t.interpolate||K).source,(t.evaluate||K).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,o,a){return i+=n.slice(u,a).replace(D,L),u=a+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":o&&(i+="';\n"+o+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var o=new Function(t.variable||"obj","_",i)}catch(a){throw a.source=i,a}var c=function(n){return o.call(this,n,m)},f=t.variable||"obj";return c.source="function("+f+"){\n"+i+"}",c},m.chain=function(n){var t=m(n);return t._chain=!0,t};var P=function(n,t){return n._chain?m(t).chain():t};m.mixin=function(n){m.each(m.functions(n),function(t){var r=m[t]=n[t];m.prototype[t]=function(){var n=[this._wrapped];return f.apply(n,arguments),P(this,r.apply(m,n))}})},m.mixin(m),m.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=o[n];m.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],P(this,r)}}),m.each(["concat","join","slice"],function(n){var t=o[n];m.prototype[n]=function(){return P(this,t.apply(this._wrapped,arguments))}}),m.prototype.value=function(){return this._wrapped},m.prototype.valueOf=m.prototype.toJSON=m.prototype.value,m.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return m})}).call(this);;
(function(t){var e=typeof self=="object"&&self.self===self&&self||typeof global=="object"&&global.global===global&&global;if(typeof define==="function"&&define.amd){define(["underscore","jquery","exports"],function(i,r,n){e.Backbone=t(e,n,i,r)})}else if(typeof exports!=="undefined"){var i=require("underscore"),r;try{r=require("jquery")}catch(n){}t(e,exports,i,r)}else{e.Backbone=t(e,{},e._,e.jQuery||e.Zepto||e.ender||e.$)}})(function(t,e,i,r){var n=t.Backbone;var s=Array.prototype.slice;e.VERSION="1.3.3";e.$=r;e.noConflict=function(){t.Backbone=n;return this};e.emulateHTTP=false;e.emulateJSON=false;var a=function(t,e,r){switch(t){case 1:return function(){return i[e](this[r])};case 2:return function(t){return i[e](this[r],t)};case 3:return function(t,n){return i[e](this[r],o(t,this),n)};case 4:return function(t,n,s){return i[e](this[r],o(t,this),n,s)};default:return function(){var t=s.call(arguments);t.unshift(this[r]);return i[e].apply(i,t)}}};var h=function(t,e,r){i.each(e,function(e,n){if(i[n])t.prototype[n]=a(e,n,r)})};var o=function(t,e){if(i.isFunction(t))return t;if(i.isObject(t)&&!e._isModel(t))return l(t);if(i.isString(t))return function(e){return e.get(t)};return t};var l=function(t){var e=i.matches(t);return function(t){return e(t.attributes)}};var u=e.Events={};var c=/\s+/;var f=function(t,e,r,n,s){var a=0,h;if(r&&typeof r==="object"){if(n!==void 0&&"context"in s&&s.context===void 0)s.context=n;for(h=i.keys(r);a<h.length;a++){e=f(t,e,h[a],r[h[a]],s)}}else if(r&&c.test(r)){for(h=r.split(c);a<h.length;a++){e=t(e,h[a],n,s)}}else{e=t(e,r,n,s)}return e};u.on=function(t,e,i){return d(this,t,e,i)};var d=function(t,e,i,r,n){t._events=f(v,t._events||{},e,i,{context:r,ctx:t,listening:n});if(n){var s=t._listeners||(t._listeners={});s[n.id]=n}return t};u.listenTo=function(t,e,r){if(!t)return this;var n=t._listenId||(t._listenId=i.uniqueId("l"));var s=this._listeningTo||(this._listeningTo={});var a=s[n];if(!a){var h=this._listenId||(this._listenId=i.uniqueId("l"));a=s[n]={obj:t,objId:n,id:h,listeningTo:s,count:0}}d(t,e,r,this,a);return this};var v=function(t,e,i,r){if(i){var n=t[e]||(t[e]=[]);var s=r.context,a=r.ctx,h=r.listening;if(h)h.count++;n.push({callback:i,context:s,ctx:s||a,listening:h})}return t};u.off=function(t,e,i){if(!this._events)return this;this._events=f(g,this._events,t,e,{context:i,listeners:this._listeners});return this};u.stopListening=function(t,e,r){var n=this._listeningTo;if(!n)return this;var s=t?[t._listenId]:i.keys(n);for(var a=0;a<s.length;a++){var h=n[s[a]];if(!h)break;h.obj.off(e,r,this)}return this};var g=function(t,e,r,n){if(!t)return;var s=0,a;var h=n.context,o=n.listeners;if(!e&&!r&&!h){var l=i.keys(o);for(;s<l.length;s++){a=o[l[s]];delete o[a.id];delete a.listeningTo[a.objId]}return}var u=e?[e]:i.keys(t);for(;s<u.length;s++){e=u[s];var c=t[e];if(!c)break;var f=[];for(var d=0;d<c.length;d++){var v=c[d];if(r&&r!==v.callback&&r!==v.callback._callback||h&&h!==v.context){f.push(v)}else{a=v.listening;if(a&&--a.count===0){delete o[a.id];delete a.listeningTo[a.objId]}}}if(f.length){t[e]=f}else{delete t[e]}}return t};u.once=function(t,e,r){var n=f(p,{},t,e,i.bind(this.off,this));if(typeof t==="string"&&r==null)e=void 0;return this.on(n,e,r)};u.listenToOnce=function(t,e,r){var n=f(p,{},e,r,i.bind(this.stopListening,this,t));return this.listenTo(t,n)};var p=function(t,e,r,n){if(r){var s=t[e]=i.once(function(){n(e,s);r.apply(this,arguments)});s._callback=r}return t};u.trigger=function(t){if(!this._events)return this;var e=Math.max(0,arguments.length-1);var i=Array(e);for(var r=0;r<e;r++)i[r]=arguments[r+1];f(m,this._events,t,void 0,i);return this};var m=function(t,e,i,r){if(t){var n=t[e];var s=t.all;if(n&&s)s=s.slice();if(n)_(n,r);if(s)_(s,[e].concat(r))}return t};var _=function(t,e){var i,r=-1,n=t.length,s=e[0],a=e[1],h=e[2];switch(e.length){case 0:while(++r<n)(i=t[r]).callback.call(i.ctx);return;case 1:while(++r<n)(i=t[r]).callback.call(i.ctx,s);return;case 2:while(++r<n)(i=t[r]).callback.call(i.ctx,s,a);return;case 3:while(++r<n)(i=t[r]).callback.call(i.ctx,s,a,h);return;default:while(++r<n)(i=t[r]).callback.apply(i.ctx,e);return}};u.bind=u.on;u.unbind=u.off;i.extend(e,u);var y=e.Model=function(t,e){var r=t||{};e||(e={});this.cid=i.uniqueId(this.cidPrefix);this.attributes={};if(e.collection)this.collection=e.collection;if(e.parse)r=this.parse(r,e)||{};var n=i.result(this,"defaults");r=i.defaults(i.extend({},n,r),n);this.set(r,e);this.changed={};this.initialize.apply(this,arguments)};i.extend(y.prototype,u,{changed:null,validationError:null,idAttribute:"id",cidPrefix:"c",initialize:function(){},toJSON:function(t){return i.clone(this.attributes)},sync:function(){return e.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return i.escape(this.get(t))},has:function(t){return this.get(t)!=null},matches:function(t){return!!i.iteratee(t,this)(this.attributes)},set:function(t,e,r){if(t==null)return this;var n;if(typeof t==="object"){n=t;r=e}else{(n={})[t]=e}r||(r={});if(!this._validate(n,r))return false;var s=r.unset;var a=r.silent;var h=[];var o=this._changing;this._changing=true;if(!o){this._previousAttributes=i.clone(this.attributes);this.changed={}}var l=this.attributes;var u=this.changed;var c=this._previousAttributes;for(var f in n){e=n[f];if(!i.isEqual(l[f],e))h.push(f);if(!i.isEqual(c[f],e)){u[f]=e}else{delete u[f]}s?delete l[f]:l[f]=e}if(this.idAttribute in n)this.id=this.get(this.idAttribute);if(!a){if(h.length)this._pending=r;for(var d=0;d<h.length;d++){this.trigger("change:"+h[d],this,l[h[d]],r)}}if(o)return this;if(!a){while(this._pending){r=this._pending;this._pending=false;this.trigger("change",this,r)}}this._pending=false;this._changing=false;return this},unset:function(t,e){return this.set(t,void 0,i.extend({},e,{unset:true}))},clear:function(t){var e={};for(var r in this.attributes)e[r]=void 0;return this.set(e,i.extend({},t,{unset:true}))},hasChanged:function(t){if(t==null)return!i.isEmpty(this.changed);return i.has(this.changed,t)},changedAttributes:function(t){if(!t)return this.hasChanged()?i.clone(this.changed):false;var e=this._changing?this._previousAttributes:this.attributes;var r={};for(var n in t){var s=t[n];if(i.isEqual(e[n],s))continue;r[n]=s}return i.size(r)?r:false},previous:function(t){if(t==null||!this._previousAttributes)return null;return this._previousAttributes[t]},previousAttributes:function(){return i.clone(this._previousAttributes)},fetch:function(t){t=i.extend({parse:true},t);var e=this;var r=t.success;t.success=function(i){var n=t.parse?e.parse(i,t):i;if(!e.set(n,t))return false;if(r)r.call(t.context,e,i,t);e.trigger("sync",e,i,t)};B(this,t);return this.sync("read",this,t)},save:function(t,e,r){var n;if(t==null||typeof t==="object"){n=t;r=e}else{(n={})[t]=e}r=i.extend({validate:true,parse:true},r);var s=r.wait;if(n&&!s){if(!this.set(n,r))return false}else if(!this._validate(n,r)){return false}var a=this;var h=r.success;var o=this.attributes;r.success=function(t){a.attributes=o;var e=r.parse?a.parse(t,r):t;if(s)e=i.extend({},n,e);if(e&&!a.set(e,r))return false;if(h)h.call(r.context,a,t,r);a.trigger("sync",a,t,r)};B(this,r);if(n&&s)this.attributes=i.extend({},o,n);var l=this.isNew()?"create":r.patch?"patch":"update";if(l==="patch"&&!r.attrs)r.attrs=n;var u=this.sync(l,this,r);this.attributes=o;return u},destroy:function(t){t=t?i.clone(t):{};var e=this;var r=t.success;var n=t.wait;var s=function(){e.stopListening();e.trigger("destroy",e,e.collection,t)};t.success=function(i){if(n)s();if(r)r.call(t.context,e,i,t);if(!e.isNew())e.trigger("sync",e,i,t)};var a=false;if(this.isNew()){i.defer(t.success)}else{B(this,t);a=this.sync("delete",this,t)}if(!n)s();return a},url:function(){var t=i.result(this,"urlRoot")||i.result(this.collection,"url")||F();if(this.isNew())return t;var e=this.get(this.idAttribute);return t.replace(/[^\/]$/,"$&/")+encodeURIComponent(e)},parse:function(t,e){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return!this.has(this.idAttribute)},isValid:function(t){return this._validate({},i.extend({},t,{validate:true}))},_validate:function(t,e){if(!e.validate||!this.validate)return true;t=i.extend({},this.attributes,t);var r=this.validationError=this.validate(t,e)||null;if(!r)return true;this.trigger("invalid",this,r,i.extend(e,{validationError:r}));return false}});var b={keys:1,values:1,pairs:1,invert:1,pick:0,omit:0,chain:1,isEmpty:1};h(y,b,"attributes");var x=e.Collection=function(t,e){e||(e={});if(e.model)this.model=e.model;if(e.comparator!==void 0)this.comparator=e.comparator;this._reset();this.initialize.apply(this,arguments);if(t)this.reset(t,i.extend({silent:true},e))};var w={add:true,remove:true,merge:true};var E={add:true,remove:false};var I=function(t,e,i){i=Math.min(Math.max(i,0),t.length);var r=Array(t.length-i);var n=e.length;var s;for(s=0;s<r.length;s++)r[s]=t[s+i];for(s=0;s<n;s++)t[s+i]=e[s];for(s=0;s<r.length;s++)t[s+n+i]=r[s]};i.extend(x.prototype,u,{model:y,initialize:function(){},toJSON:function(t){return this.map(function(e){return e.toJSON(t)})},sync:function(){return e.sync.apply(this,arguments)},add:function(t,e){return this.set(t,i.extend({merge:false},e,E))},remove:function(t,e){e=i.extend({},e);var r=!i.isArray(t);t=r?[t]:t.slice();var n=this._removeModels(t,e);if(!e.silent&&n.length){e.changes={added:[],merged:[],removed:n};this.trigger("update",this,e)}return r?n[0]:n},set:function(t,e){if(t==null)return;e=i.extend({},w,e);if(e.parse&&!this._isModel(t)){t=this.parse(t,e)||[]}var r=!i.isArray(t);t=r?[t]:t.slice();var n=e.at;if(n!=null)n=+n;if(n>this.length)n=this.length;if(n<0)n+=this.length+1;var s=[];var a=[];var h=[];var o=[];var l={};var u=e.add;var c=e.merge;var f=e.remove;var d=false;var v=this.comparator&&n==null&&e.sort!==false;var g=i.isString(this.comparator)?this.comparator:null;var p,m;for(m=0;m<t.length;m++){p=t[m];var _=this.get(p);if(_){if(c&&p!==_){var y=this._isModel(p)?p.attributes:p;if(e.parse)y=_.parse(y,e);_.set(y,e);h.push(_);if(v&&!d)d=_.hasChanged(g)}if(!l[_.cid]){l[_.cid]=true;s.push(_)}t[m]=_}else if(u){p=t[m]=this._prepareModel(p,e);if(p){a.push(p);this._addReference(p,e);l[p.cid]=true;s.push(p)}}}if(f){for(m=0;m<this.length;m++){p=this.models[m];if(!l[p.cid])o.push(p)}if(o.length)this._removeModels(o,e)}var b=false;var x=!v&&u&&f;if(s.length&&x){b=this.length!==s.length||i.some(this.models,function(t,e){return t!==s[e]});this.models.length=0;I(this.models,s,0);this.length=this.models.length}else if(a.length){if(v)d=true;I(this.models,a,n==null?this.length:n);this.length=this.models.length}if(d)this.sort({silent:true});if(!e.silent){for(m=0;m<a.length;m++){if(n!=null)e.index=n+m;p=a[m];p.trigger("add",p,this,e)}if(d||b)this.trigger("sort",this,e);if(a.length||o.length||h.length){e.changes={added:a,removed:o,merged:h};this.trigger("update",this,e)}}return r?t[0]:t},reset:function(t,e){e=e?i.clone(e):{};for(var r=0;r<this.models.length;r++){this._removeReference(this.models[r],e)}e.previousModels=this.models;this._reset();t=this.add(t,i.extend({silent:true},e));if(!e.silent)this.trigger("reset",this,e);return t},push:function(t,e){return this.add(t,i.extend({at:this.length},e))},pop:function(t){var e=this.at(this.length-1);return this.remove(e,t)},unshift:function(t,e){return this.add(t,i.extend({at:0},e))},shift:function(t){var e=this.at(0);return this.remove(e,t)},slice:function(){return s.apply(this.models,arguments)},get:function(t){if(t==null)return void 0;return this._byId[t]||this._byId[this.modelId(t.attributes||t)]||t.cid&&this._byId[t.cid]},has:function(t){return this.get(t)!=null},at:function(t){if(t<0)t+=this.length;return this.models[t]},where:function(t,e){return this[e?"find":"filter"](t)},findWhere:function(t){return this.where(t,true)},sort:function(t){var e=this.comparator;if(!e)throw new Error("Cannot sort a set without a comparator");t||(t={});var r=e.length;if(i.isFunction(e))e=i.bind(e,this);if(r===1||i.isString(e)){this.models=this.sortBy(e)}else{this.models.sort(e)}if(!t.silent)this.trigger("sort",this,t);return this},pluck:function(t){return this.map(t+"")},fetch:function(t){t=i.extend({parse:true},t);var e=t.success;var r=this;t.success=function(i){var n=t.reset?"reset":"set";r[n](i,t);if(e)e.call(t.context,r,i,t);r.trigger("sync",r,i,t)};B(this,t);return this.sync("read",this,t)},create:function(t,e){e=e?i.clone(e):{};var r=e.wait;t=this._prepareModel(t,e);if(!t)return false;if(!r)this.add(t,e);var n=this;var s=e.success;e.success=function(t,e,i){if(r)n.add(t,i);if(s)s.call(i.context,t,e,i)};t.save(null,e);return t},parse:function(t,e){return t},clone:function(){return new this.constructor(this.models,{model:this.model,comparator:this.comparator})},modelId:function(t){return t[this.model.prototype.idAttribute||"id"]},_reset:function(){this.length=0;this.models=[];this._byId={}},_prepareModel:function(t,e){if(this._isModel(t)){if(!t.collection)t.collection=this;return t}e=e?i.clone(e):{};e.collection=this;var r=new this.model(t,e);if(!r.validationError)return r;this.trigger("invalid",this,r.validationError,e);return false},_removeModels:function(t,e){var i=[];for(var r=0;r<t.length;r++){var n=this.get(t[r]);if(!n)continue;var s=this.indexOf(n);this.models.splice(s,1);this.length--;delete this._byId[n.cid];var a=this.modelId(n.attributes);if(a!=null)delete this._byId[a];if(!e.silent){e.index=s;n.trigger("remove",n,this,e)}i.push(n);this._removeReference(n,e)}return i},_isModel:function(t){return t instanceof y},_addReference:function(t,e){this._byId[t.cid]=t;var i=this.modelId(t.attributes);if(i!=null)this._byId[i]=t;t.on("all",this._onModelEvent,this)},_removeReference:function(t,e){delete this._byId[t.cid];var i=this.modelId(t.attributes);if(i!=null)delete this._byId[i];if(this===t.collection)delete t.collection;t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,i,r){if(e){if((t==="add"||t==="remove")&&i!==this)return;if(t==="destroy")this.remove(e,r);if(t==="change"){var n=this.modelId(e.previousAttributes());var s=this.modelId(e.attributes);if(n!==s){if(n!=null)delete this._byId[n];if(s!=null)this._byId[s]=e}}}this.trigger.apply(this,arguments)}});var S={forEach:3,each:3,map:3,collect:3,reduce:0,foldl:0,inject:0,reduceRight:0,foldr:0,find:3,detect:3,filter:3,select:3,reject:3,every:3,all:3,some:3,any:3,include:3,includes:3,contains:3,invoke:0,max:3,min:3,toArray:1,size:1,first:3,head:3,take:3,initial:3,rest:3,tail:3,drop:3,last:3,without:0,difference:0,indexOf:3,shuffle:1,lastIndexOf:3,isEmpty:1,chain:1,sample:3,partition:3,groupBy:3,countBy:3,sortBy:3,indexBy:3,findIndex:3,findLastIndex:3};h(x,S,"models");var k=e.View=function(t){this.cid=i.uniqueId("view");i.extend(this,i.pick(t,P));this._ensureElement();this.initialize.apply(this,arguments)};var T=/^(\S+)\s*(.*)$/;var P=["model","collection","el","id","attributes","className","tagName","events"];i.extend(k.prototype,u,{tagName:"div",$:function(t){return this.$el.find(t)},initialize:function(){},render:function(){return this},remove:function(){this._removeElement();this.stopListening();return this},_removeElement:function(){this.$el.remove()},setElement:function(t){this.undelegateEvents();this._setElement(t);this.delegateEvents();return this},_setElement:function(t){this.$el=t instanceof e.$?t:e.$(t);this.el=this.$el[0]},delegateEvents:function(t){t||(t=i.result(this,"events"));if(!t)return this;this.undelegateEvents();for(var e in t){var r=t[e];if(!i.isFunction(r))r=this[r];if(!r)continue;var n=e.match(T);this.delegate(n[1],n[2],i.bind(r,this))}return this},delegate:function(t,e,i){this.$el.on(t+".delegateEvents"+this.cid,e,i);return this},undelegateEvents:function(){if(this.$el)this.$el.off(".delegateEvents"+this.cid);return this},undelegate:function(t,e,i){this.$el.off(t+".delegateEvents"+this.cid,e,i);return this},_createElement:function(t){return document.createElement(t)},_ensureElement:function(){if(!this.el){var t=i.extend({},i.result(this,"attributes"));if(this.id)t.id=i.result(this,"id");if(this.className)t["class"]=i.result(this,"className");this.setElement(this._createElement(i.result(this,"tagName")));this._setAttributes(t)}else{this.setElement(i.result(this,"el"))}},_setAttributes:function(t){this.$el.attr(t)}});e.sync=function(t,r,n){var s=H[t];i.defaults(n||(n={}),{emulateHTTP:e.emulateHTTP,emulateJSON:e.emulateJSON});var a={type:s,dataType:"json"};if(!n.url){a.url=i.result(r,"url")||F()}if(n.data==null&&r&&(t==="create"||t==="update"||t==="patch")){a.contentType="application/json";a.data=JSON.stringify(n.attrs||r.toJSON(n))}if(n.emulateJSON){a.contentType="application/x-www-form-urlencoded";a.data=a.data?{model:a.data}:{}}if(n.emulateHTTP&&(s==="PUT"||s==="DELETE"||s==="PATCH")){a.type="POST";if(n.emulateJSON)a.data._method=s;var h=n.beforeSend;n.beforeSend=function(t){t.setRequestHeader("X-HTTP-Method-Override",s);if(h)return h.apply(this,arguments)}}if(a.type!=="GET"&&!n.emulateJSON){a.processData=false}var o=n.error;n.error=function(t,e,i){n.textStatus=e;n.errorThrown=i;if(o)o.call(n.context,t,e,i)};var l=n.xhr=e.ajax(i.extend(a,n));r.trigger("request",r,l,n);return l};var H={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};e.ajax=function(){return e.$.ajax.apply(e.$,arguments)};var $=e.Router=function(t){t||(t={});if(t.routes)this.routes=t.routes;this._bindRoutes();this.initialize.apply(this,arguments)};var A=/\((.*?)\)/g;var C=/(\(\?)?:\w+/g;var R=/\*\w+/g;var j=/[\-{}\[\]+?.,\\\^$|#\s]/g;i.extend($.prototype,u,{initialize:function(){},route:function(t,r,n){if(!i.isRegExp(t))t=this._routeToRegExp(t);if(i.isFunction(r)){n=r;r=""}if(!n)n=this[r];var s=this;e.history.route(t,function(i){var a=s._extractParameters(t,i);if(s.execute(n,a,r)!==false){s.trigger.apply(s,["route:"+r].concat(a));s.trigger("route",r,a);e.history.trigger("route",s,r,a)}});return this},execute:function(t,e,i){if(t)t.apply(this,e)},navigate:function(t,i){e.history.navigate(t,i);return this},_bindRoutes:function(){if(!this.routes)return;this.routes=i.result(this,"routes");var t,e=i.keys(this.routes);while((t=e.pop())!=null){this.route(t,this.routes[t])}},_routeToRegExp:function(t){t=t.replace(j,"\\$&").replace(A,"(?:$1)?").replace(C,function(t,e){return e?t:"([^/?]+)"}).replace(R,"([^?]*?)");return new RegExp("^"+t+"(?:\\?([\\s\\S]*))?$")},_extractParameters:function(t,e){var r=t.exec(e).slice(1);return i.map(r,function(t,e){if(e===r.length-1)return t||null;return t?decodeURIComponent(t):null})}});var N=e.History=function(){this.handlers=[];this.checkUrl=i.bind(this.checkUrl,this);if(typeof window!=="undefined"){this.location=window.location;this.history=window.history}};var M=/^[#\/]|\s+$/g;var O=/^\/+|\/+$/g;var U=/#.*$/;N.started=false;i.extend(N.prototype,u,{interval:50,atRoot:function(){var t=this.location.pathname.replace(/[^\/]$/,"$&/");return t===this.root&&!this.getSearch()},matchRoot:function(){var t=this.decodeFragment(this.location.pathname);var e=t.slice(0,this.root.length-1)+"/";return e===this.root},decodeFragment:function(t){return decodeURI(t.replace(/%25/g,"%2525"))},getSearch:function(){var t=this.location.href.replace(/#.*/,"").match(/\?.+/);return t?t[0]:""},getHash:function(t){var e=(t||this).location.href.match(/#(.*)$/);return e?e[1]:""},getPath:function(){var t=this.decodeFragment(this.location.pathname+this.getSearch()).slice(this.root.length-1);return t.charAt(0)==="/"?t.slice(1):t},getFragment:function(t){if(t==null){if(this._usePushState||!this._wantsHashChange){t=this.getPath()}else{t=this.getHash()}}return t.replace(M,"")},start:function(t){if(N.started)throw new Error("Backbone.history has already been started");N.started=true;this.options=i.extend({root:"/"},this.options,t);this.root=this.options.root;this._wantsHashChange=this.options.hashChange!==false;this._hasHashChange="onhashchange"in window&&(document.documentMode===void 0||document.documentMode>7);this._useHashChange=this._wantsHashChange&&this._hasHashChange;this._wantsPushState=!!this.options.pushState;this._hasPushState=!!(this.history&&this.history.pushState);this._usePushState=this._wantsPushState&&this._hasPushState;this.fragment=this.getFragment();this.root=("/"+this.root+"/").replace(O,"/");if(this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!this.atRoot()){var e=this.root.slice(0,-1)||"/";this.location.replace(e+"#"+this.getPath());return true}else if(this._hasPushState&&this.atRoot()){this.navigate(this.getHash(),{replace:true})}}if(!this._hasHashChange&&this._wantsHashChange&&!this._usePushState){this.iframe=document.createElement("iframe");this.iframe.src="javascript:0";this.iframe.style.display="none";this.iframe.tabIndex=-1;var r=document.body;var n=r.insertBefore(this.iframe,r.firstChild).contentWindow;n.document.open();n.document.close();n.location.hash="#"+this.fragment}var s=window.addEventListener||function(t,e){return attachEvent("on"+t,e)};if(this._usePushState){s("popstate",this.checkUrl,false)}else if(this._useHashChange&&!this.iframe){s("hashchange",this.checkUrl,false)}else if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval)}if(!this.options.silent)return this.loadUrl()},stop:function(){var t=window.removeEventListener||function(t,e){return detachEvent("on"+t,e)};if(this._usePushState){t("popstate",this.checkUrl,false)}else if(this._useHashChange&&!this.iframe){t("hashchange",this.checkUrl,false)}if(this.iframe){document.body.removeChild(this.iframe);this.iframe=null}if(this._checkUrlInterval)clearInterval(this._checkUrlInterval);N.started=false},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(t){var e=this.getFragment();if(e===this.fragment&&this.iframe){e=this.getHash(this.iframe.contentWindow)}if(e===this.fragment)return false;if(this.iframe)this.navigate(e);this.loadUrl()},loadUrl:function(t){if(!this.matchRoot())return false;t=this.fragment=this.getFragment(t);return i.some(this.handlers,function(e){if(e.route.test(t)){e.callback(t);return true}})},navigate:function(t,e){if(!N.started)return false;if(!e||e===true)e={trigger:!!e};t=this.getFragment(t||"");var i=this.root;if(t===""||t.charAt(0)==="?"){i=i.slice(0,-1)||"/"}var r=i+t;t=this.decodeFragment(t.replace(U,""));if(this.fragment===t)return;this.fragment=t;if(this._usePushState){this.history[e.replace?"replaceState":"pushState"]({},document.title,r)}else if(this._wantsHashChange){this._updateHash(this.location,t,e.replace);if(this.iframe&&t!==this.getHash(this.iframe.contentWindow)){var n=this.iframe.contentWindow;if(!e.replace){n.document.open();n.document.close()}this._updateHash(n.location,t,e.replace)}}else{return this.location.assign(r)}if(e.trigger)return this.loadUrl(t)},_updateHash:function(t,e,i){if(i){var r=t.href.replace(/(javascript:|#).*$/,"");t.replace(r+"#"+e)}else{t.hash="#"+e}}});e.history=new N;var q=function(t,e){var r=this;var n;if(t&&i.has(t,"constructor")){n=t.constructor}else{n=function(){return r.apply(this,arguments)}}i.extend(n,r,e);n.prototype=i.create(r.prototype,t);n.prototype.constructor=n;n.__super__=r.prototype;return n};y.extend=x.extend=$.extend=k.extend=N.extend=q;var F=function(){throw new Error('A "url" property or function must be specified')};var B=function(t,e){var i=e.error;e.error=function(r){if(i)i.call(e.context,t,r,e);t.trigger("error",t,r,e)}};return e});;
/* 
 *  Ingeschoten door EF2 B.V. - www.ef2.nl
 *  Doeltreffende communicatie
 *  Prima samenspel van Kees, Simon, Arthur en Diederick
 *  Hoewel wij de makers zijn, rusten de rechten bij onze klant.
 */

var timerStart = Date.now();
var pageLoad = 0;
jQuery(document).ready(function($){
    
    msieversion();
    
    $('.webform-component--bericht textarea').keyup(function(){
        var valueofbox = $(this).val();
        
        var ranges = [
            '\ud83c[\udf00-\udfff]', // U+1F300 to U+1F3FF
            '\ud83d[\udc00-\ude4f]', // U+1F400 to U+1F64F
            '\ud83d[\ude80-\udeff]'  // U+1F680 to U+1F6FF
        ];
        valueofbox = valueofbox.replace(new RegExp(ranges.join('|'), 'g'), '');
        $(this).val(valueofbox);
    });
    
    $('a.no-click').click(function(){
        return false;
    });
    
    if($('.i18n-nl #edit-search-block-form--2').length){
        $('#edit-search-block-form--2').attr('placeholder', 'Voer hier je trefwoorden in');
    }else if($('.i18n-en #edit-search-block-form--2').length){
        $('#edit-search-block-form--2').attr('placeholder', 'Enter your keywords');
    }
    
    if($('.node-type-product #google-store-locator-map-container').length > 0){
        $('.node-type-product #google-store-locator-map-container form.storelocator-filter').submit(function(){
            var filter;
            
            // Try to get CRM name from the productcategorie (view)
            if($('#crm_name').length && $('#crm_name').val().length){
                filter = $('#crm_name').data('urlname');
                console.log(filter);
            }else{
                var uriParts = window.location.pathname.split('/');
                filter = uriParts[2].replace('prins-', '').replace('-', '');
            }
            
            var place = encodeURIComponent($('input', this).val()).replace(/%20/g, '+').toLowerCase();
            window.location = '/vind-een-winkel/'+ filter +'/' + place;
        });
        $('.node-type-product #google-store-locator-map-container form.storelocator-filter input').blur(function(){
            setTimeout(function(){
                $('.node-type-product #google-store-locator-map-container form.storelocator-filter').trigger('submit');
            }, 200);
        });
        
    }
    
    if($('.node-type-leeftijdsfase .view-leeftijdsfase-verzorging .views-field-field-verzorging-items li').length){
        $('.node-type-leeftijdsfase .view-leeftijdsfase-verzorging .views-field-field-verzorging-items li').each(function(){
            if($(this).find('a').length){
                $(this).click(function(){
                    window.location = $(this).find('a').attr('href');
                });
                $(this).css('cursor', 'pointer');
            }
        });
    }
    if($('.view-leeftijdsfase-eigenaren .views-row').length){
        $('.view-leeftijdsfase-eigenaren .views-field-field-youtube-video, '+ 
                '.view-leeftijdsfase-eigenaren .views-field-field-usp-titel, '+
                '.view-leeftijdsfase-eigenaren .views-field-field-usp-subtitel').click(function(){
            console.log('Click triggered');
            $(this).parent().find('.views-field-field-youtube-video-1 a').trigger('click');
        }).css('cursor', 'pointer');
    }
    
    
    if($('.play-with-music video').length){
        $('.play-with-music video').attr('muted', 'false');
        $('.play-with-music video').each(function(){
            this.volume = 0.7;
            this.muted = false;
            this.volume = 0.7;
            setTimeout(function(){
                $('.play-with-music video')[0].muted = false;
            }, 1000);
        });
    }
    
    if($(window).width() >= 768){
        $("video").click(function() {
            if (this.paused) {
                this.volume = 0.7;
                this.muted = false;
                this.volume = 0.7;
                this.play();
            } else {
              this.pause();
            }
        });
    }else{
        $('.view-home-header video').remove();
    }
    
    if($('body.page-node-4').length){
        artikel_overview_pager();
        
        if(window.location.search.length > 0){
            var page = parseInt(window.location.search.replace( /^\D+/g, ''));
            for(i = 0; i < page; i++){
                setTimeout(function(){
                    console.log('Load more');
                    $('.pager-load-more a').trigger('click');
                    $('.view-display-id-block_5 .views-row-1').last();
                }, (800 * i));
            }
            setTimeout(function(){
                    console.log('Scroll to');
                    $('html, body').animate({
                        scrollTop: ($('.view-display-id-block_5 .views-row-1').last().offset().top - 120)
                    }, 500);
                }, ((800 * i)+500));
            var page_url = window.location.pathname;
            window.history.pushState("", "", page_url);
        }
    }
    
    video_header();
    setTimeout(video_header, 500);
    scrollHeader();
    setTimeout(scrollHeader, 500);
    window.homeheader.start();
    
    $('.view-header-vacature .views-field-field-startafbeelding').click(function(){
        player = $(this).parent().find('video')[0];
        if($(this).parent().find('video').length) {
            $(this).fadeOut();
            player = $(this).parent().find('video')[0];
            player.play();
        }
    });
    
    setTimeout(function(){
        $('.view-category-header .views-field-field-startafbeelding, .view-header-video .views-field-field-startafbeelding, .view-header-leeftijdfasepagina .views-field-field-startafbeelding').each(function () {
            player = $(this).parent().find('video')[0];
            if($(this).parent().find('video').length) {
                $(this).fadeOut();
                player = $(this).parent().find('video')[0];
                player.play();
            }
        });
    }, 500);
    
    // Responsive menu toggle
    $('.toggle').bind('touchstart click', function () {
        if($(this).parent().find('.menu .menu.active').length){
            $(this).parent().find('.menu .menu.active').removeClass('active');
            return false;
        }
        
        $(this).toggleClass('is-active').parent().toggleClass('active').find('.block').toggleClass('active');
        //$(this)('aside').toggleClass('active').find('.block').toggleClass('active');
        return false;
    });
    
    /*
	if($(window).width() <= 1024){
        $('.menu li.expanded:not(.collapsed) > a').click(function(){
            $(this).parent().find('.menu').toggleClass('active');
            return false;
        });
    }else{
        window.timeoutMenu = 0;
        window.menu = false;
        $('.menu li.expanded').hover(function(){
            clearTimeout(window.timeoutMenu);
            if(window.menu){
                window.menu.find('.menu').removeClass('active');
            }
            $(this).find('.menu').addClass('active');
            return false;
        },function(){
            window.menu = $(this);
            window.timeoutMenu = setTimeout(function(){
                window.menu.find('.menu').removeClass('active');
            }, 1500);
            
            return false;
        });
    }
	*/
    
    $('#search-block-form input[type="submit"]').click(function(){
        if($(this).closest('form').hasClass('search-open-window')){
            
        }else{
            $(this).closest('form').toggleClass('search-open-window').find('.form-item').toggleClass('search-open');
            if($(window).width() >= 1024){
                //$(this).closest('form').append('<video src="https://player.vimeo.com/external/201851022.hd.mp4?s=3b280ff31609dfb8141c66366e5703c59f275553&profile_id=174" frameborder="0" width="100%" height="100%" style="display:none" id="vimeo-player" loop="" muted=""><source src="https://player.vimeo.com/external/196546000.hd.mp4?s=b3684e6e9dd5e23690f33a015a5d73688eaf484a&amp;profile_id=119" type="video/mp4"></video>');
                $(this).closest('form').append('<video src="https://player.vimeo.com/external/198840679.sd.mp4?s=1b008a83450676db32f2ac16066fef3c6d5e9cb7&profile_id=165" frameborder="0" width="100%" height="100%" style="display:none" id="vimeo-player" loop="" muted=""><source src="https://player.vimeo.com/external/198840679.sd.mp4?s=1b008a83450676db32f2ac16066fef3c6d5e9cb7&profile_id=165" type="video/mp4"></video>');
                player = $(this).closest('form').find('video')[0];
                player.play();
                setTimeout(function(_this){
                    $(_this).closest('form').find('video').fadeIn(1000);
                }(this),600);
                $(this).closest('form').find('video').click(function(){
                    $(this).closest('form').removeClass('search-open-window');
                    $(this).fadeOut(400, function(){
                        $(this).remove();
                    });
                });
            }
            $(this).closest('form').find('.form-item input').attr('autocomplete', 'off').focus();
            // .attr('placeholder', $(this).closest('form').find('.form-item label').text())
            return false;
        }
    });
    $('#block-search-form').on('click', '#search-block-form.search-open-window', function(e){
        //console.log($(e.target).is('.container-inline'));
        
        if(e.target != this && !$(e.target).is('.container-inline')) return;
        $('#search-block-form').find('video').fadeOut(400, function(){
            $(this).remove();
        });
        $('#search-block-form').toggleClass('search-open-window');
    });
    
    $('.block-locale, .block-extra-locale').click(function(){
        $(this).toggleClass('language-open');
        if($(this).hasClass('language-open')){
            $('body').click(function(e){
                if ($(e.target).closest('.block-locale, .block-extra-locale').length === 0) {
                    $('.block-locale, .block-extra-locale').trigger('click'); 
                }
            });
            return false;
        }else{
            $('body').unbind('click');
        }
    });
    
    /*jQuery('#logo img').dataCSS('height');
    jQuery('#header nav').dataCSS('height');
    jQuery('#header nav .main-menu .block-search').dataCSS('margin-top');
    */
   
   $('.node-type-tips-info .view-header-artikel, .node-type-acties-evenementen .view-header-artikel, .node-type-leeftijdsfase .view-header-leeftijdfasepagina').append('<span class="header-down-btn"></span>');
   $('.node-type-tips-info .header-down-btn, .node-type-acties-evenementen .view-header-artikel, .node-type-leeftijdsfase .header-down-btn').click(function(){
       var new_position = jQuery('#main-content').offset().top;
        jQuery('html, body').animate({
            scrollTop: (new_position - 66)
        }, 400);
   });
    
    // $('.view-header-animal-choice .views-row').click(function(){
        // $('.header-interactive').addClass('active-slide');
        // if($(this).closest('.views-row').hasClass('views-row-1')){
        //     $('#block-views-home-leeftijdenwidget-block').addClass('active');
        //     if($(window).width() > 768){
        //         window.homeheader.player_animal_type('kat');
        //     }
        // }else{
        //     $('#block-views-home-leeftijdenwidget-block-1').addClass('active');
        //     if($(window).width() > 768){
        //         window.homeheader.player_animal_type('hond');
        //     }
        // }
        // return false;
    // });
    
    $('.slide-close').click(function(){
        $('.header-interactive').removeClass('active-slide');
        $('#block-views-home-leeftijdenwidget-block').removeClass('active');
        $('#block-views-home-leeftijdenwidget-block-1').removeClass('active');
        window.history.replaceState({}, document.title, "/");
        window.homeheader.reset();
    });
    if(jQuery(window).width() < 768){
        jQuery('.view-artikel-overzicht .views-row, ' +
            '.field-name-field-gerelateerde-artikelen .node, ' +
            '.node-type-home .view-home-leeftijdenwidget .views-row, ' +
            '.view-populair-bij-prins .views-row, ' +
            '.view-alle-vacatures .views-row').click(function(){
            window.location = jQuery(this).find('a').attr('href');
        });
    }else{
        jQuery('body').on('click', '.view-artikel-overzicht .views-row, ' +
            '.field-name-field-gerelateerde-artikelen .node, ' +
            '.node-type-home .view-home-leeftijdenwidget .views-row, ' +
            '.view-populair-bij-prins .views-row, ' +
            '.view-alle-vacatures .views-row', function(){
            window.location = jQuery(this).find('a').attr('href');
        });
    }
    jQuery('.view-experts .views-row').click(function () {
        window.location = jQuery(this).find('.field-name-title a').attr('href');
    });

    /*$('#node-5022 .field-name-field-link a, #node-8099 .field-name-field-link a').attr('href', '#webform-anchor');
    $('#node-5022 .field-name-field-youtube-video, #node-8099 .field-name-field-youtube-video').mousedown(function () {
        $(this).toggleClass('playing');
        console.log('Test 1234');
    });*/

	function scrollToElement(target) {
		$('html, body').stop();
		var element = document.getElementById(target);
		if (element != null) {		
			var	elementMargin = $(element).outerHeight(true) - $(element).height(),
				headerHeight = 75 + $('#admin-menu').outerHeight(true),
				posY = element.getBoundingClientRect().top + window.pageYOffset - headerHeight;
			$('html, body').animate({
				'scrollTop': posY
			}, 500, 'swing', function () {
				//window.location.hash = target;
			});
		}
	}

	// SMOOTH SCROLL TO ANCHOR
	$('a[href*="#"]').on('click', function(e) {
		var target = this.hash.substr(1);
		var currentUrl = window.location.href.replace(window.location.hash, '');
		var targetUrl = $(this).attr('href').split('#')[0];
		if ((targetUrl == '' || currentUrl == targetUrl) && target.length > 0) {
			e.preventDefault();
			scrollToElement(target);
			return false;
		}
	});
	
    /* links in de product header */
    $('.product-voedingswaarde').click(function(){
        $('html, body').animate({
            scrollTop: ($(".group-foodinfo h2").offset().top - 120)
        }, 1000);
        return false;
    });
    $('.product-storelocator').click(function(){
        $('html, body').animate({
            scrollTop: ($("#block-google-store-locator-google-store-locator-block").offset().top - 120)
        }, 1500);
        return false;
    });
    $('.product-list').click(function(){
        $('html, body').animate({
            scrollTop: ($("#block-views-productlijn-producten-block").offset().top - 120)
        }, 1500);
        return false;
    });
    
    pageFadeIn('.header-interactive .block:not(#block-views-home-header-block) .views-field:not(.views-field-field-startafbeelding), .node-type-overzicht .block .views-row');
    
    jQuery('#header nav').append('<div class="loader"></div>');
    
    jQuery('#block-views-populair-bij-prins-block-4 h2').click(function(){
        jQuery(this).parent('div').toggleClass('active');
        
        if(jQuery(window).width() < 768 && jQuery(this).parent('div').hasClass('active')){
            var populair_height = (jQuery(this).parent('div').find('.content .views-row').height() + 15) * jQuery(this).parent('div').find('.content .views-row').length;
            jQuery(this).parent('div').find('.content').height( populair_height );
            
            setTimeout(function(){
                var new_position = jQuery('#block-views-populair-bij-prins-block-4 .content').offset().top;
                console.log(new_position);
                jQuery('html, body').animate({
                    scrollTop: (new_position - 66)
                }, 400);
            }, 400);

        }
        
    });
    
    if(jQuery(window).width() < 768){
        window.resptable.start();
    }
    
    if(jQuery('body').hasClass('front')){
        if(window.location.hash){
            $('.header-interactive').addClass('active-slide');
            setTimeout(function(){
                var slide = window.location.hash.replace('#', '');
                jQuery('.view-header-animal-choice .views-row .' + slide + ' a').trigger('click');
            }, 700);
        }
    }
    
    if(jQuery('.leeftijdsfase-submenu').length){
        jQuery('.leeftijdsfase-submenu a').click(function(){
            var anchor = $(this).attr('href');
            if($(anchor).length){
                var new_position = ($(anchor).offset().top - ($('#header nav').height() - parseInt($('#header nav .content > .menu').css('margin-top'))));

                $('html, body').animate({
                    scrollTop: new_position
                }, 800);
            }
            return false;
        });
    }
    
    Drupal.behaviors.events = {
        attach: function(context, settings) {
            console.log('Ajax load');
            pageFadeIn('.node-type-overzicht .block .view-display-id-block_5 .views-row:not(.fade-ready)');
            
            artikel_overview_pager();
        }
    };
    
    jQuery('.region-footer, .region-second-main .newsletter-signup').on('change', 'form#mailchimp-form input[type=checkbox]', function(event){
        jQuery('form#mailchimp-form input[type=checkbox]').parents('.form-item').removeClass('selected');
        jQuery('form#mailchimp-form input[type=checkbox]:checked').parent('.form-item').addClass('selected');        
    });    

   
});

jQuery(window).load(function(){
    pageLoad = Date.now() - timerStart;
    jQuery('#logo img').dataCSS('height');
    jQuery('#header nav').dataCSS('height');
    jQuery('#header nav .main-menu .block-search').dataCSS('margin-top');
    jQuery('#header nav .content > .menu').dataCSS('margin-top');
    
    scrollHeader();
    setTimeout(function(){
        resize_timeout = false;
    }, 300);
    
    if(jQuery('.view-leeftijdsfase-tips').length){
        jQuery('.view-leeftijdsfase-tips').tips_slider({
            pager : jQuery('.view-leeftijdsfase-tips .views-field-field-tips-1'),
            slider : jQuery('.view-leeftijdsfase-tips .views-field-field-tips')
        });
    }

    //jQuery('body').pageAjaxSlider();
});
window.onbeforeunload = function() {
    
    jQuery('.loader').animate({
        'width' : '100%'
    }, (pageLoad + 50));
    
};


var resize_rtime;
var resize_timeout = true;
var resize_delta = 200;
jQuery(window).resize(function() {
    if(jQuery(window).width() >= 1024 && !is_touch_device()){
        resize_rtime = new Date();
        if (resize_timeout === false) {
            resize_timeout = true;                
            setTimeout(resizeend, resize_delta);
        }  
    }else{
        scrollHeader();
    }
});

function artikel_overview_pager(){
    $ = jQuery;
    
    if($('body.page-node-4').length){
        jQuery('.view-artikel-overzicht .views-row').unbind('click').click(function () {
            window.location = jQuery(this).find('a').attr('href');
        });

        $('.pager-load-more a').click(function(){
            var page = parseInt(window.location.search.replace( /^\D+/g, ''));
            //console.log(page);
            if(page < 1 || isNaN(page)){
                page = 1;
            }else{
                page++;
            }
            var page_url = window.location.pathname + '?pager=' + page;
            window.history.pushState("", "", page_url);
        });
    }
}

function video_header(){
    $ = jQuery;
    if($(window).width() < 768){
        return false;
    }
    
    $('.views-field-field-startafbeelding').each(function(){
        if($(this).parent().find('video').length) {
            $(this).addClass('video-under-it'); //.hide();
            
            var header_height = $(this).height();
            var video_height = $(this).parent().find('video').height();

            $(this).parent().find('video').css({
                'margin-top' : ((header_height - video_height) / 2)
            });
            
        }
    });
}
function resizeend() {
    if (new Date() - resize_rtime < resize_delta) {
        setTimeout(resizeend, resize_delta);
    } else {
        resize_timeout = false;
        __resize_handler();
    }               
}
function __resize_handler(){
    console.log('Stop dragging resize');
    
    jQuery('body').data('scrollTop', jQuery('body').scrollTop());
    jQuery('body').scrollTop(0);
    jQuery('body > *').animate({'opacity' : '0.75'}, 100);
    scrollHeader();
    video_header();
    
    setTimeout(function(){
        jQuery('#logo img').dataCSS('height');
        jQuery('#header nav').dataCSS('height');
        jQuery('#header nav .main-menu .block-search').dataCSS('margin-top');
        jQuery('#header nav .content > .menu').dataCSS('margin-top');
        jQuery('body').scrollTop(jQuery('body').data('scrollTop'));
        jQuery('body > *').animate({'opacity' : '1'}, 100);
        setTimeout(scrollHeader, 500);
    }, 300);
}
function is_touch_device() {
    return 'ontouchstart' in window        // works on most browsers 
        || navigator.maxTouchPoints;       // works on IE10/11 and Surface
};

jQuery(window).scroll(function(){
    if(jQuery(window).width() >= 1024){
        scrollHeader();
    }
    //jQuery('.menu-block-1 .first a').text( 'Cont. ' +  jQuery('body').scrollTop());
});


jQuery.fn.pageAjaxSlider = function(options){
    
    var defaults = {
        siteURL: "http://" + window.location.host.toString(),
        internalLinks: "a[href^='http://"+window.location.host.toString()+"'], a[href^='/'], a[href^='./'], a[href^='../'], a[href^='#']"
    };
    
    var settings = jQuery.extend( {}, defaults, options );
    
    start = function(){
        jQuery(document).on('click', settings.internalLinks, function(){
            var url = jQuery(this).attr('href');
            if(window.development){
                __load_new_page( url );
                return false;
            }
        });
        jQuery('body').append('<div class="temp-ajax" style="display:none"></div>');
    };
    
    __load_new_page = function(url){
        jQuery('.page-spanner').css({
            'background-color' : '#98c010'
        });
        jQuery('.page-spanner .page:nth-child(1)').addClass('scale-out');
        jQuery.ajax({
            url: url,
            data: {},
            success: function (data) {
                jQuery('.temp-ajax').append(data);
                __append_to_spanner( 
                    jQuery('.temp-ajax').find('.page-spanner .page'), 
                    jQuery('.temp-ajax').find('.header-interactive'),
                    __get_body_class(data) );
                jQuery('.temp-ajax').html('');
            },
            dataType: 'html'
        });
        
    };
    
    __get_body_class = function(data){
        var parser = new DOMParser();
        doc = parser.parseFromString(data, "text/html");
        var body_class = doc.body.getAttribute('class');
        parser = doc = null;
        return body_class;
    };
    
    __append_to_spanner = function(page, header, body_class){
        jQuery('.page-spanner').append(page);
        jQuery(header).data('old-height', jQuery(header).height()).height(0);
        jQuery('.header-interactive').slideUp().replaceWith(header);
        jQuery('.page-spanner .page:nth-child(2)').css('opacity', '0').addClass('fade-in');
        jQuery('.page-spanner .page:nth-child(1)').addClass('fade-out');
        jQuery('body').attr('class', body_class);
        jQuery('.page-spanner').css({
            'background-color' : '#ffffff'
        });
        setTimeout(function(){
            jQuery('.header-interactive').css('display', 'block').animate({
                'height' : jQuery(header).data('old-height'),
                'opacity' : 1
            }, 300, function(){
                console.log('gelukt');
            });
            jQuery('.page-spanner .page:nth-child(1)').remove();
        }, 800);
    };
    
    return this.each(function() {  
        start();
    });
};


jQuery.fn.dataCSS = function(css_variable) {  
    return this.each(function() {  
        jQuery(this).data(css_variable, jQuery(this).css(css_variable) );
    });  
}; 

jQuery.fn.tips_slider = function(options) {  
    
    var defaults = {
        slider: {},
        pager: {},
        auto: true,
        time: 3000,
        timer: 0,
        animation_time: 500
    };
    
    var settings = jQuery.extend( {}, defaults, options );
    var current_slide = 1;
    var old_slide = 0;
    var max_slides = settings.slider.find('li').length;
    var maxHeight = Math.max.apply(null, settings.slider.find('li').map(function (){ return jQuery(this).height(); }).get());
    console.log(maxHeight);
    
    start = function(){
        __pager_set(current_slide);
        __slide_in(current_slide);
        settings.slider.find('li').not(':nth-child('+current_slide+')').hide();
        settings.slider.find('ul').css('max-height', maxHeight);
        __play();
    };
    
    __play = function(){
        if(settings.auto){
            settings.timer = setInterval(function(){
                
                old_slide = current_slide;
                current_slide++;
                
                if(current_slide > max_slides){
                    current_slide = 1;
                }
                __slide_in(current_slide);
                __slide_out(old_slide);
                
            }, settings.time);
        }
    };
    
    __pause = function(){
        clearInterval(settings.timer);
    };
    
    __slide_in = function(slide){
        __pager_set(slide);
        settings.slider.find('li:nth-child('+slide+')').css({
            'height' : 0,
            'opacity' : 0,
            'display' : 'block'
        }).animate({
            'height' : maxHeight,
            'opacity' : 1
        }, settings.animation_time);
    };
    
    __slide_out = function(slide){
        settings.slider.find('li:nth-child('+slide+')').animate({
            'height' : 0,
            'opacity' : 0
        }, settings.animation_time, function(){
            jQuery(this).hide();
        });
    };
    
    __pager_set = function(page) {
        settings.pager.find('li').removeClass('selected');
        settings.pager.find('li:nth-child('+page+')').addClass('selected');
    };
    
    
    return this.each(function() {  
        start();
        jQuery(this).hover(function(){
            __pause();
        }, function(){
            __play();
        });
        settings.pager.find('li').click(function(){
            var index = (jQuery(this).index() +1);
            current_slide = (settings.pager.find('li.selected').index() + 1);
            
            if(index != current_slide){
                __slide_out(current_slide);
                __slide_in(index);
            }
        });
        settings.slider.find('li').each(function(){
            if(jQuery(this).find('a').length){
                jQuery(this).click(function(){
                    window.location = jQuery(this).find('a').attr('href');
                }).css('cursor', 'pointer');
            }
        });
    });  



}; 
 
 
function scrollHeader(){
    var scrollpos = parseInt( ((jQuery(document).scrollTop() > 0)?jQuery(document).scrollTop() : 0) );
    
    if(msieversion()){
        if(scrollpos > 100){
            jQuery('#header nav').addClass('ie-bar');
        }else{
            jQuery('#header nav').removeClass('ie-bar');
        }
        headerAdditionals(scrollpos);
        return false;
    }
    var menu_margin = parseInt(jQuery('#header nav .content > .menu').data('margin-top'));
    
    /*if(jQuery(window).width() >= 1024 && menu_margin > 0){
        var max_logo_height = parseInt(jQuery('#logo img').data('height'));
        var nav_height = parseInt(jQuery('#header nav').data('height'));
        var max_scroll = menu_margin;
        var block_search_margin = parseInt(jQuery('#header nav .main-menu .block-search').data('margin-top'));

        if(scrollpos < max_scroll){
            var header_height = (nav_height - scrollpos);
            var logo_height = (max_logo_height - scrollpos);
            menu_margin = (menu_margin - scrollpos);
            var search_margin = (block_search_margin - scrollpos);
        }else{
            var header_height = nav_height - max_scroll;
            var logo_height = (max_logo_height - max_scroll);
            menu_margin = 0;
            var search_margin = (block_search_margin - max_scroll);
        }
        headerAdditionals(scrollpos);
        
        var adminbar_height = (jQuery('body').hasClass('admin-menu')) ?  29 : 0;
        jQuery('#header nav').height( header_height );
        //jQuery('#header').css('margin-top', header_height );
        jQuery('#logo img').height(logo_height);
        jQuery('#header nav .content > .menu, #header nav .menu-block-wrapper > .menu').css('margin-top', menu_margin);
        jQuery('#header nav .main-menu .block-search').css('margin-top', search_margin);
        // jQuery('#header nav .content > .menu .menu').css('top', (logo_height + adminbar_height));
        
    }*/
    if(jQuery(window).width() < 1024 && !jQuery('.main-menu > .menu-wrapper').hasClass('active')){
        jQuery('#block-extra-locale-language').hide(300);
    }
}
function headerAdditionals(scrollpos){
    if(scrollpos < 1){
        filterFixed(false, scrollpos);
        jQuery('#block-extra-locale-language').stop(false, true).show(300);
    }else{
        filterFixed(true, scrollpos);
        jQuery('#block-extra-locale-language').stop(false, true).hide(300);
    }
}
function filterFixed(fixed, scrollpos){
    if(jQuery('#block-global-filter-global-filter-3').length > 0){
        var filter = jQuery('#block-global-filter-global-filter-3');
        if(fixed && scrollpos > 125){
            filter.addClass('fixed-under-bar');
        }else{
            filter.removeClass('fixed-under-bar');
        }
    }
    if(jQuery('.filter-block').length > 0){
        var filter = jQuery('.filter-block');
        if(fixed && scrollpos > 125){
            filter.addClass('fixed-under-bar');
        }else{
            filter.removeClass('fixed-under-bar');
        }
    }
    
}
 
function pageFadeIn(blocks){
    var start = 600;
    var plus  = 400; 
    
    jQuery(blocks).each(function(){
        jQuery(this).animate({
            'opacity' : 1
        }, start).addClass('fade-ready');
        start += plus;
    });
     
}

jQuery(document).bind('gslReady', function(){
    jQuery('.feature-filter').prepend('<h4>Filter op producten</h4>');
    jQuery('.storelocator-panel .feature-filter h4').click(function(){
        jQuery('.storelocator-panel .feature-filter').toggleClass('active');
    });
});

function msieversion() {
    
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");
    
    // If Internet Explorer, return version number
    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
        //console.log(ua.substring(msie + 5, ua.indexOf(".", msie)));
        return true;
    } 

    return false;
}

function ResponsiveTable(){
    var $ = jQuery;
    
    this.s = {
        new_rows : 2,
        new_col: 1,
        makeresp : 'table.gallery'
    };
    
    this.start = function(){
        $(this.s.makeresp).each(function(){
            var old_col = $(this).find('tr:eq(0) td').length;
            var html = $(this).html();
            
            for(i = 0; i < old_col; i++){
                var old_rows = $(html).find('tr').length; // td:eq('+i+')');
                
                var new_html = '';
                for(j = 0; j < old_rows; j++){
                    new_html+= '<tr><td>'+ $(html).find('tr:eq('+j+') td:eq('+i+')').html() +'</td></tr>';
                }
                $(this).after('<table class="gallery">' + new_html + '</table>');
            }
            $(this).hide();
            
        });
    };
}

function Home_video_header(){
    var $ = jQuery;
    this.player = '';
    this.player_kat = '';
    this.player_kat_2 = '';
    this.player_hond = '';
    this.player_hond_2 = '';
    this.player_current = '';
    
    this._handler = function(){
        $('.view-home-header .views-field-field-startafbeelding').each(function(){
            window.homeheader.player = $(this).parent().find('video')[0];
            window.homeheader.player_kat = $(this).parent().find('.views-field-field-vimeo-video-kat video')[0];
            window.homeheader.player_kat_2 = $(this).parent().find('.views-field-field-vimeo-video-kat video')[1];
            window.homeheader.player_hond = $(this).parent().find('.views-field-field-vimeo-video-hond video')[0];
            window.homeheader.player_hond_2 = $(this).parent().find('.views-field-field-vimeo-video-hond video')[1];
            if(window.homeheader.player) {
                window.homeheader.player.play();
                $(this).fadeOut();
            }
            window.homeheader.player_current = window.homeheader.player;
        });
    };
    
    this.player_animal_type = function(type) {
        //window.homeheader.player.pause();
        //window.homeheader.player.currentTime = 0;
        //window.homeheader.player.load();
        
        var player_animal;
        
        if(type === 'kat'){
            player_animal = window.homeheader.player_kat;
        }else{
            player_animal = window.homeheader.player_hond;
        }
        player_animal.currentTime = 0;
        jQuery(window.homeheader.player_current).show();
        
        jQuery('.view-home-header .views-field:regex(class, views-field-field-vimeo-.*)').removeClass('active');
        $('.view-home-header .views-field-field-vimeo-video-' +type).addClass('active');
        
        player_animal.play();
        window.homeheader.player_current = player_animal;
        
        setTimeout(function(){
            //window.homeheader.player_current.pause();
            jQuery(window.homeheader.player_current).hide();
            if(type === 'kat'){
                player_animal = window.homeheader.player_kat_2;
            }else{
                player_animal = window.homeheader.player_hond_2;
            }
            player_animal.play();
            
        }, (player_animal.duration * 1000));
        
    };
    
    this.reset = function(){
        jQuery('.view-home-header .views-field:regex(class, views-field-field-vimeo-.*)').removeClass('active');
        //window.homeheader.player.start();
        window.homeheader.player.currentTime = 0;
    };
    
    this.start = function(){
        setTimeout(function(_this){
            _this._handler();
        }(this), 500);
    };
}

window.resptable = new ResponsiveTable();
window.homeheader = new Home_video_header();

jQuery.expr[':'].regex = function(elem, index, match) {
    var matchParams = match[3].split(','),
        validLabels = /^(data|css):/,
        attr = {
            method: matchParams[0].match(validLabels) ? 
                        matchParams[0].split(':')[0] : 'attr',
            property: matchParams.shift().replace(validLabels,'')
        },
        regexFlags = 'ig',
        regex = new RegExp(matchParams.join('').replace(/^\s+|\s+$/g,''), regexFlags);
    return regex.test(jQuery(elem)[attr.method](attr.property));
};
;
jQuery(document).ready(function($){
	(function($) {
		$.fn.visible = function(partial) {	
			var $t            = $(this),
				$w            = $(window),
				viewTop       = $w.scrollTop(),
				viewBottom    = viewTop + $w.height(),
				_top          = $t.offset().top,
				_bottom       = _top + $t.height(),
				compareTop    = partial === true ? _bottom : _top,
				compareBottom = partial === true ? _top : _bottom;
			
			return ((compareBottom <= viewBottom) && (compareTop >= viewTop));		
		};
	})(jQuery);

	var win = $(window);

	var slideLeft = $("");
	var slideRight = $(".page-taxonomy-term .vocabulary-product-category .group-samenstelling .field-name-field-samenstelling-afbeelding img");
	var slideUp = $(".node-type-leeftijdsfase .group-subbox");
	var popUp = $(".field-name-field-usp-afbeelding, .views-field-field-usp-afbeelding img.svg-img");
	var fadeIn = $(".view-leeftijdsfase-tips .view-content, .node-type-leeftijdsfase .field-name-field-subafbeelding, .field-name-field-samenstellingomschrijving, .field-name-field-samenstelling-afbeelding, .field-name-field-product-afbeelding, .view-productlijn-producten .view-content .views-row, .field-name-field-subalinea, .view-leeftijdsfase-eigenaren, .node-type-product .field-name-field-subafbeelding, .node-type-product .main-spanner .field-name-field-gerelateerde-artikelen, .node-type-leeftijdsfase .group-subbox .field-name-field-subafbeelding img");

	win.scroll(function(event) {  
	  slideLeft.each(function(i, el) {
		var el = $(el);
		if (el.visible(true)) {
		  el.addClass("slide-left"); 
		} 
	  });  
	});

	win.scroll(function(event) {  
	  slideRight.each(function(i, el) {
		var el = $(el);
		if (el.visible(true)) {
		  el.addClass("slide-right"); 
		} 
	  });  
	});

	win.scroll(function(event) {  
	  slideUp.each(function(i, el) {
		var el = $(el);
		if (el.visible(true)) {
		  el.addClass("slide-up"); 
		} 
	  });  
	});
	popUp.each(function(i, el) {
	  var el = $(el);
	  if (el.visible(true)) {
		el.addClass("already-visible"); 
	  } 
	});
	win.scroll(function(event) {  
	  popUp.each(function(i, el) {
		var el = $(el);
		if (el.visible(true)) {
		  el.addClass("pop-up"); 
		} 
	  });  
	});
	fadeIn.each(function(i, el) {
	  var el = $(el);
	  if (el.visible(true)) {
		el.addClass("already-visible"); 
	  } 
	});
	win.scroll(function(event) {  
	  fadeIn.each(function(i, el) {
		var el = $(el);
		if (el.visible(true)) {
		  el.addClass("fade-in"); 
		} 
	  });  
	});
		
	if(jQuery(window).width() < 768){
	  jQuery('.view-actie-evenement .views-row, ' +
		  '.field-name-field-gerelateerde-acties .node').click(function(){
		  window.location = jQuery(this).find('a').attr('href');
	  });
	}else{
		jQuery('body').on('click', '.view-actie-evenement .views-row, ' +
			'.field-name-field-gerelateerde-acties .node', function(){
			window.location = jQuery(this).find('a').attr('href');
		});
	}

	$('.field-type-text-long').each(function() {
		$('table').each(function() {
			if (!$(this).parent('.table-scroll').length) {
				$(this).wrap('<div class="table-responsive"></div>');
			}
		});
	});
		
	function openModal(modalType, modalConfig) {
		var modalConfig = modalConfig || {};
		modalConfig.modalWidth = modalConfig.modalWidth || '';
		if (modalConfig.source) {
			$('body').addClass('modal_active');
			if (!$('.modal_container').length) {
				$('body').append('<div class="modal_overlay"><div class="modal_container"><div class="modal_dialog"><div class="modal_button_close">x</div><div class="modal_content"><div class="modal_loading"></div>');
			}
			$('.modal_dialog').addClass(modalConfig.dialogClass);
			
			if (modalType == 'newsletter' || modalType == 'youtube' || modalType == 'iframe') {
				$('.modal_loading').show();
				$('.modal_content').append('<iframe src="' + modalConfig.source + '">');
				if (modalConfig.width) {
					$('.modal_content iframe').css('width', modalConfig.width);
				}
				if (modalConfig.height) {
					$('.modal_content iframe').css('height', modalConfig.height);
				}
				$('.modal_content iframe').addClass('modal_content_nonpersistent').on('load', function() {
					$('.modal_loading').hide();
				});
			} else if (modalType == 'inline') {			
				if (modalConfig.source.startsWith('.') || modalConfig.source.startsWith('#')) {
					var el = $(modalConfig.source).clone();
					$('.modal_content').append(el).find('.modal_content_inline').addClass('modal_content_nonpersistent').show();
				}
			} else {
				$('.modal_loading').hide();
				//closeModal();
			}
			$('.modal_overlay').fadeIn(750);
		}
	}
	function closeModal(e) {
	}	
	function getModalConfig(el) {
		var modalConfig = {};
		modalConfig.dialogClass = '';
		
		if (el.data('modal-type')) {
			modalConfig.type = el.data('modal-type');
		} else {
			return false;
		}
		if (el.attr('data-modal-source')) {
			modalConfig.source = el.attr('data-modal-source');
		} else if (modalConfig.type == 'inline') {
			modalConfig.source = '.modal_content_inline';
		} else {
			return false;
		}
		if (el.data('modal-width')) {
			modalConfig.width = el.data('modal-width');
		}
		if (el.data('modal-height')) {
			modalConfig.height = el.data('modal-height');
		}		
		switch(modalConfig.type) {
			case 'newsletter':
				modalConfig.dialogClass = 'modal_dialog_default';					
				if ($('#mc-emailaddress').length) {
					var mail = $('#mc-emailaddress').val();
					if (mail.indexOf('@') !== -1) {
						modalConfig.source += '?em=' + btoa(mail);
					}
				}
			break;
			case 'youtube':
				modalConfig.dialogClass = 'modal_dialog_youtube';
			break;
			default:
				modalConfig.dialogClass = 'modal_dialog_default';
		}
		
		return modalConfig;
	}
	
	$(document.body)
		.on('click', '.modal_overlay', function(e) {
			e.preventDefault();
			$('body').removeClass('modal_active');
			$('.modal_overlay').fadeOut(750, function() {
				$(this).find('.modal_content_nonpersistent').remove();
				//$('.modal_dialog').removeAttr('style').attr('class', 'modal_dialog');
			});
		})
		.on('click', '.modal_content', function(e) {
			e.stopPropagation();
		})
		.on('click', '.page .modal-open', function(e) {
			e.preventDefault();
			var modalType,
				modalConfig = getModalConfig($(this));
				
			if ($(this).data('modal-type' && modalConfig)) {
				modalType = $(this).data('modal-type');
				openModal(modalType, modalConfig);
			}
		});
	
	if (Drupal.eu_cookie_compliance.hasAgreed()) {
		//if (!$('body').hasClass('logged-in') && $('body').hasClass('i18n-nl') && ($('body').hasClass('page-node-5022') || $('body').hasClass('page-voedingswijzer') || $('body').hasClass('node-type-leeftijdsfase'))) {
		if (!$('body').hasClass('logged-in') && $('body').hasClass('i18n-nl')
			&& ($('body').hasClass('page-node-61'))) {
			(function(h,o,t,j,a,r) {
				h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
				h._hjSettings={hjid:"411504",hjsv:"6"};
				a=o.getElementsByTagName('head')[0];
				r=o.createElement('script');r.async=1;
				r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
				a.appendChild(r);
			})(window,document,'//static.hotjar.com/c/hotjar-','.js?sv=');
		}
		
		// Mopinion		
		if ($('body').hasClass('i18n-nl')) {
			(function() {
				var id = "uxvmeu9pgit4m5uib0ty4ye98jczeaz8aeq";
				var js = document.createElement("script");
				js.setAttribute("type","text/javascript");
				js.setAttribute("src","//deploy.mopinion.com/js/pastease.js");
				js.async = true;
				document.getElementsByTagName("head")[0].appendChild(js);
				var t = setInterval(function(){try{ new Pastease.load(id);clearInterval(t) } catch(e){}}, 50);
			})();
			$('body.page-voedingswijzer').on('click', '.answer-title', function() {
				if (window.voedingswijzer.data.step == 4 && $('body').hasClass('i18n-nl')) {
					setTimeout(function(){ srv.openModal(true,'1ead541e1417fab3090e18baccc26b9a8063e662'); }, 30000);
				}
			});
		}
	}
	
	$('body.page-voedingswijzer').on({
		mouseenter: function() {
			$(this).addClass('active-product');
		},
		mouseleave: function() {
			$(this).removeClass('active-product');
		},
		click: function() {
			var target = $(this).attr('about');
			//window.location = $(this).attr('about');
			window.open(target, '_blank') || window.location.replace(target);
		}
	}, '.node-product');
	
	$('body.node-type-home .view-home-leeftijdenwidget.slide .views-row').click(function() {
		window.location = $(this).find('.views-field-title .field-content a').attr('href');
	});
	$('body.page-taxonomy-term .view-productlijn-producten .views-row').click(function() {
		window.location = $(this).find('.views-field-field-detailpagina-titel .field-content a').attr('href');
	});	
	$('body.node-type-webform .field-name-field-cta-s .field-name-field-cta-afbeelding').click(function(e) {
		$(this).siblings('.field-name-field-cta-link').find('a')[0].click();
	});
	
	$('body.productlijn.i18n-nl').find('#edit-field-vw-vraag-2-target-id-selective-all a').text('Alle leeftijden');
	
	$('body.node-type-webform .webform-client-form .webform-newsletter input').click(function() {
		var fieldset = $(this).parentsUntil('fieldset', '.fieldset-wrapper');
		console.log('webform-newsletter-source click');
		if ($(this).is(':checked')) {
			if ($(this).val() == '1' || $(this).val().toLowerCase() == 'ja') {
				var email = fieldset.find('.webform-newsletter-source input').val();
				fieldset.find('.webform-newsletter-target input').val(email);
				console.log('set target (1): ' + email);
			} else {
				fieldset.find('.webform-newsletter-target input').val('');
				console.log('clear target (1)');				
			}
		} else {
			fieldset.find('.webform-newsletter-target input').val('');
			console.log('clear target (1)');
		}
	});
	$('body.node-type-webform .webform-client-form .webform-newsletter-source input').focusout(function() {
		console.log('webform-newsletter-source focusout');
		var email = $(this).val(),
			fieldset = $(this).parentsUntil('fieldset', '.fieldset-wrapper'),
			newsletter = fieldset.find('.webform-newsletter input:checked').val();
			
		if (newsletter && (newsletter == '1' || newsletter.toLowerCase() == 'ja')) {
			fieldset.find('.webform-newsletter-target input').val(email);
			console.log('set target (2): ' + email);
		} else {
			fieldset.find('.webform-newsletter-target input').val('');
			console.log('clear target (2)');
		}
	});
	
	$('.coupon-container .coupon-preview').click(function(e) {
		$('.coupon-details').removeClass('coupon-active');
		$(this).next('.coupon-details').addClass('coupon-active');
	});
	
	$('body.page-node-9616 .coupon-code').click(function() {
		if (copyToClipboard(this)) {
			$(this).addClass('copied');
		}
	});
	
	function copyToClipboard(element) {
		var textToCopy = $('<input>');
		$('body').append(textToCopy);
		textToCopy.val($(element).text()).select();
		var result = document.execCommand('copy');
		textToCopy.remove();
		return result;
	}
	
	$('body.node-type-product .nutrition-table:not(#nutrition-table-1)').hide();
	$('body.node-type-product #nutrition-guide-options span.nutrition-guide-toggle[data-nutrition-table="1"]').addClass('active');
	$('body.node-type-product #nutrition-guide-options span.nutrition-guide-toggle').click(function() {
		$('body.node-type-product #nutrition-guide-options span.nutrition-guide-toggle').removeClass('active');
		$(this).addClass('active');
		var table = '#nutrition-table-' + $(this).data('nutrition-table');		
		$('body.node-type-product .nutrition-table').hide();
		$(table).show();
	});

	$('#header .main-menu')
		.on({
			mouseenter: function() {
				$(this).children('.menu').addClass('active');
			},
			mouseleave: function() {
				$('.menu li.expanded .menu').removeClass('active');
			}
		}, '#block-system-main-menu:not(.active) .menu li.expanded')
		.on({
			click: function(e) {
				e.preventDefault();
				var isActive = $(this).next('.menu').hasClass('active');
				$('.menu li.expanded .menu').removeClass('active');
				if (!isActive) {
					$(this).next('.menu').addClass('active');
				}
			}
		}, '#block-system-main-menu.active .menu li.expanded > a');
		
	$('body.node-type-tekstpagina .flexcolumns-container.collapsible-container .collapsible-toggle').click(function(e) {
		e.preventDefault();
		$(this).toggleClass('collapsible-toggle-up').parents().siblings('.collapsible-content').slideToggle(500);
	});
	
	$('body.node-type-tekstpagina div.collapsible-container .collapsible-toggle').click(function(e) {
		e.preventDefault();
		$(this).toggleClass('collapsible-toggle-up').parent().children('.collapsible-content').slideToggle(500);
	});
	
	$('body.node-type-blokkenpagina .group-leesverder div:first-child span').click(function() {
		$(this).toggleClass('collapsible-toggle-up').parents().siblings('div.field-name-field-tekst-lees-verder').slideToggle(500);
	});
	
	/* Sportvoedingen*/
	$('.page-node-8964, .page-node-8965, .page-node-8966').find('.product-buttons .product-storelocator').removeClass('product-storelocator').addClass('cta cta-scroll').text('Vraag informatie aan').attr('href', '#block-webform-client-block-8968').show();
	
	Drupal.behaviors.events = {
		attach: function(context, settings) {
			$('.node-type-webform .ajax-processed').bind('ajaxSuccess', function(data, status, xhr) {
				$('.webform-client-form.webform-client-form-5022 input[type=radio].error').each(function() {
					$(this).closest('.form-radios').addClass('form-radios-error');
				});
			});
		}
	};
});;
/** 
 *  Do simple translate things in UI wich cannot simple translate by Drupal 7
 **/



jQuery(document).ready(function(){
    window.customTranslation.do();
});

function CustomTranslation() {
    
    this.words2en = [
        {find: "Alle leeftijden", replace: "All ages", selector: ".form-item a"},
        {find: "Hond", replace: "Dog", selector: ".form-item a"},
        {find: "Kat", replace: "Cat", selector: ".form-item a"}
    ];
    
    this.do = function(){
//        console.log('Start UI translation');
        if(jQuery('body').hasClass('i18n-en')){
            jQuery.each(this.words2en, function(index, word){
                jQuery(word.selector).each(function(){
                    if(word.find === '*'){
                        jQuery(this).text( word.replace);
                        return true;
                    }
                    
                    var str = jQuery(this).text();
                    jQuery(this).text( str.replace(word.find, word.replace) );
                });

            });
        }
    };
    
}

window.customTranslation = new CustomTranslation();;
