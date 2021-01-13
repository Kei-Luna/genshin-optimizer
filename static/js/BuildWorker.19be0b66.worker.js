/*! For license information please see BuildWorker.19be0b66.worker.js.LICENSE.txt */
!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/genshin-optimizer/",n(n.s=8)}([function(t,e,n){t.exports=n(3)},function(t,e,n){"use strict";t.exports=n(5)},function(t,e,n){"use strict";var r=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function a(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(t){return e[t]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(t){r[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(i){return!1}}()?Object.assign:function(t,e){for(var n,u,c=a(t),l=1;l<arguments.length;l++){for(var _ in n=Object(arguments[l]))i.call(n,_)&&(c[_]=n[_]);if(r){u=r(n);for(var m=0;m<u.length;m++)o.call(n,u[m])&&(c[u[m]]=n[u[m]])}}return c}},function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(C){c=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var i=e&&e.prototype instanceof d?e:d,o=Object.create(i.prototype),a=new M(r||[]);return o._invoke=function(t,e,n){var r=m;return function(i,o){if(r===f)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw o;return A()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var u=S(a,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===m)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var c=_(t,e,n);if("normal"===c.type){if(r=n.done?p:s,c.arg===y)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=p,n.method="throw",n.arg=c.arg)}}}(t,n,a),o}function _(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(C){return{type:"throw",arg:C}}}t.wrap=l;var m="suspendedStart",s="suspendedYield",f="executing",p="completed",y={};function d(){}function h(){}function g(){}var v={};v[o]=function(){return this};var b=Object.getPrototypeOf,k=b&&b(b(D([])));k&&k!==n&&r.call(k,o)&&(v=k);var E=g.prototype=d.prototype=Object.create(v);function w(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function n(i,o,a,u){var c=_(t[i],t,o);if("throw"!==c.type){var l=c.arg,m=l.value;return m&&"object"===typeof m&&r.call(m,"__await")?e.resolve(m.__await).then((function(t){n("next",t,a,u)}),(function(t){n("throw",t,a,u)})):e.resolve(m).then((function(t){l.value=t,a(l)}),(function(t){return n("throw",t,a,u)}))}u(c.arg)}var i;this._invoke=function(t,r){function o(){return new e((function(e,i){n(t,r,e,i)}))}return i=i?i.then(o,o):o()}}function S(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,S(t,n),"throw"===n.method))return y;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var i=_(r,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,y;var o=i.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,y):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,y)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function M(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function D(t){if(t){var n=t[o];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function n(){for(;++i<t.length;)if(r.call(t,i))return n.value=t[i],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:A}}function A(){return{value:e,done:!0}}return h.prototype=E.constructor=g,g.constructor=h,h.displayName=c(g,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c(t,u,"GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},w(O.prototype),O.prototype[a]=function(){return this},t.AsyncIterator=O,t.async=function(e,n,r,i,o){void 0===o&&(o=Promise);var a=new O(l(e,n,r,i),o);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(E),c(E,u,"Generator"),E[o]=function(){return this},E.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=D,M.prototype={constructor:M,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(r,i){return u.type="throw",u.arg=t,n.next=r,i&&(n.method="next",n.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],u=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),P(n),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;P(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:D(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),y}},t}(t.exports);try{regeneratorRuntime=r}catch(i){Function("r","regeneratorRuntime = r")(r)}},function(t,e){$RefreshReg$=function(){},$RefreshSig$=function(){return function(){}}},function(t,e,n){"use strict";n(2);var r=n(6),i=60103;if(e.Fragment=60107,"function"===typeof Symbol&&Symbol.for){var o=Symbol.for;i=o("react.element"),e.Fragment=o("react.fragment")}var a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function l(t,e,n){var r,o={},l=null,_=null;for(r in void 0!==n&&(l=""+n),void 0!==e.key&&(l=""+e.key),void 0!==e.ref&&(_=e.ref),e)u.call(e,r)&&!c.hasOwnProperty(r)&&(o[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps)void 0===o[r]&&(o[r]=e[r]);return{$$typeof:i,type:t,key:l,ref:_,props:o,_owner:a.current}}e.jsx=l,e.jsxs=l},function(t,e,n){"use strict";t.exports=n(7)},function(t,e,n){"use strict";var r=n(2),i=60103,o=60106;e.Fragment=60107,e.StrictMode=60108,e.Profiler=60114;var a=60109,u=60110,c=60112;e.Suspense=60113;var l=60115,_=60116;if("function"===typeof Symbol&&Symbol.for){var m=Symbol.for;i=m("react.element"),o=m("react.portal"),e.Fragment=m("react.fragment"),e.StrictMode=m("react.strict_mode"),e.Profiler=m("react.profiler"),a=m("react.provider"),u=m("react.context"),c=m("react.forward_ref"),e.Suspense=m("react.suspense"),l=m("react.memo"),_=m("react.lazy")}var s="function"===typeof Symbol&&Symbol.iterator;function f(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function d(t,e,n){this.props=t,this.context=e,this.refs=y,this.updater=n||p}function h(){}function g(t,e,n){this.props=t,this.context=e,this.refs=y,this.updater=n||p}d.prototype.isReactComponent={},d.prototype.setState=function(t,e){if("object"!==typeof t&&"function"!==typeof t&&null!=t)throw Error(f(85));this.updater.enqueueSetState(this,t,e,"setState")},d.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")},h.prototype=d.prototype;var v=g.prototype=new h;v.constructor=g,r(v,d.prototype),v.isPureReactComponent=!0;var b={current:null},k=Object.prototype.hasOwnProperty,E={key:!0,ref:!0,__self:!0,__source:!0};function w(t,e,n){var r,o={},a=null,u=null;if(null!=e)for(r in void 0!==e.ref&&(u=e.ref),void 0!==e.key&&(a=""+e.key),e)k.call(e,r)&&!E.hasOwnProperty(r)&&(o[r]=e[r]);var c=arguments.length-2;if(1===c)o.children=n;else if(1<c){for(var l=Array(c),_=0;_<c;_++)l[_]=arguments[_+2];o.children=l}if(t&&t.defaultProps)for(r in c=t.defaultProps)void 0===o[r]&&(o[r]=c[r]);return{$$typeof:i,type:t,key:a,ref:u,props:o,_owner:b.current}}function O(t){return"object"===typeof t&&null!==t&&t.$$typeof===i}var S=/\/+/g;function j(t,e){return"object"===typeof t&&null!==t&&null!=t.key?function(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,(function(t){return e[t]}))}(""+t.key):e.toString(36)}function P(t,e,n,r,a){var u=typeof t;"undefined"!==u&&"boolean"!==u||(t=null);var c=!1;if(null===t)c=!0;else switch(u){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case i:case o:c=!0}}if(c)return a=a(c=t),t=""===r?"."+j(c,0):r,Array.isArray(a)?(n="",null!=t&&(n=t.replace(S,"$&/")+"/"),P(a,e,n,"",(function(t){return t}))):null!=a&&(O(a)&&(a=function(t,e){return{$$typeof:i,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}(a,n+(!a.key||c&&c.key===a.key?"":(""+a.key).replace(S,"$&/")+"/")+t)),e.push(a)),1;if(c=0,r=""===r?".":r+":",Array.isArray(t))for(var l=0;l<t.length;l++){var _=r+j(u=t[l],l);c+=P(u,e,n,_,a)}else if("function"===typeof(_=function(t){return null===t||"object"!==typeof t?null:"function"===typeof(t=s&&t[s]||t["@@iterator"])?t:null}(t)))for(t=_.call(t),l=0;!(u=t.next()).done;)c+=P(u=u.value,e,n,_=r+j(u,l++),a);else if("object"===u)throw e=""+t,Error(f(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e));return c}function M(t,e,n){if(null==t)return t;var r=[],i=0;return P(t,r,"","",(function(t){return e.call(n,t,i++)})),r}function D(t){if(-1===t._status){var e=t._result;e=e(),t._status=0,t._result=e,e.then((function(e){0===t._status&&(e=e.default,t._status=1,t._result=e)}),(function(e){0===t._status&&(t._status=2,t._result=e)}))}if(1===t._status)return t._result;throw t._result}var A={current:null};function C(){var t=A.current;if(null===t)throw Error(f(321));return t}var R={ReactCurrentDispatcher:A,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:b,IsSomeRendererActing:{current:!1},assign:r};e.Children={map:M,forEach:function(t,e,n){M(t,(function(){e.apply(this,arguments)}),n)},count:function(t){var e=0;return M(t,(function(){e++})),e},toArray:function(t){return M(t,(function(t){return t}))||[]},only:function(t){if(!O(t))throw Error(f(143));return t}},e.Component=d,e.PureComponent=g,e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R,e.cloneElement=function(t,e,n){if(null===t||void 0===t)throw Error(f(267,t));var o=r({},t.props),a=t.key,u=t.ref,c=t._owner;if(null!=e){if(void 0!==e.ref&&(u=e.ref,c=b.current),void 0!==e.key&&(a=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(_ in e)k.call(e,_)&&!E.hasOwnProperty(_)&&(o[_]=void 0===e[_]&&void 0!==l?l[_]:e[_])}var _=arguments.length-2;if(1===_)o.children=n;else if(1<_){l=Array(_);for(var m=0;m<_;m++)l[m]=arguments[m+2];o.children=l}return{$$typeof:i,type:t.type,key:a,ref:u,props:o,_owner:c}},e.createContext=function(t,e){return void 0===e&&(e=null),(t={$$typeof:u,_calculateChangedBits:e,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:a,_context:t},t.Consumer=t},e.createElement=w,e.createFactory=function(t){var e=w.bind(null,t);return e.type=t,e},e.createRef=function(){return{current:null}},e.forwardRef=function(t){return{$$typeof:c,render:t}},e.isValidElement=O,e.lazy=function(t){return{$$typeof:_,_payload:{_status:-1,_result:t},_init:D}},e.memo=function(t,e){return{$$typeof:l,type:t,compare:void 0===e?null:e}},e.useCallback=function(t,e){return C().useCallback(t,e)},e.useContext=function(t,e){return C().useContext(t,e)},e.useDebugValue=function(){},e.useEffect=function(t,e){return C().useEffect(t,e)},e.useImperativeHandle=function(t,e,n){return C().useImperativeHandle(t,e,n)},e.useLayoutEffect=function(t,e){return C().useLayoutEffect(t,e)},e.useMemo=function(t,e){return C().useMemo(t,e)},e.useReducer=function(t,e,n){return C().useReducer(t,e,n)},e.useRef=function(t){return C().useRef(t)},e.useState=function(t){return C().useState(t)},e.version="17.0.1"},function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function a(t,e){if(t){if("string"===typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(t,e):void 0}}function u(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,i=!1,o=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(c){i=!0,o=c}finally{try{r||null==u.return||u.return()}finally{if(i)throw o}}return n}}(t,e)||a(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.r(e);var c=n(0),l=n.n(c);function _(t,e,n,r,i,o,a){try{var u=t[o](a),c=u.value}catch(l){return void n(l)}u.done?e(c):Promise.resolve(c).then(r,i)}n(4);var m=function t(){if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this instanceof t)throw Error("A static class cannot be instantiated.")};m.setToSlots=function(t){var e={};return Object.entries(t).forEach((function(t){var n=u(t,2),r=n[0],i=n[1];i&&(e[i.setKey]?e[i.setKey].push(r):e[i.setKey]=[r])})),e};var s=n(1);function f(t){return function(t){if(Array.isArray(t))return o(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||a(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var p={anemo:{name:"Anemo"},geo:{name:"Geo"},electro:{name:"Electro"},hydro:{name:"Hydro"},pyro:{name:"Pyro"},cryo:{name:"Cryo"}};var y=function(t,e,n){return t<e?e:t>n?n:t};var d={hp_base:{name:"HP",pretty:"HP Base"},hp:{name:"HP",pretty:"HP Flat"},hp_:{name:"HP",unit:"%",pretty:"HP Percent"},hp_final:{name:"HP",pretty:"HP Final"},atk_base:{name:"ATK",pretty:"ATK Base"},atk:{name:"ATK",pretty:"ATK Flat"},atk_:{name:"ATK",unit:"%",pretty:"ATK Percent"},atk_final:{name:"ATK",pretty:"ATK Final"},atk_weapon:{name:"Weapon ATK",pretty:"ATK Weapon"},def_base:{name:"DEF",pretty:"DEF Base"},def:{name:"DEF",pretty:"DEF Flat"},def_:{name:"DEF",unit:"%",pretty:"DEF Percent"},def_final:{name:"DEF",pretty:"DEF Final"},phy_dmg_bonus:{name:"Physical DMG Bonus",unit:"%"},phy_res:{name:"Physical RES",unit:"%"},ele_dmg_bonus:{name:"DMG Bonus",unit:"%"},ele_res:{name:"DMG RES",unit:"%"},ele_mas:{name:"Elemental Mastery"},ener_rech:{name:"Energy Recharge",unit:"%"},crit_rate:{name:"CRIT Rate",unit:"%"},crit_dmg:{name:"CRIT DMG",unit:"%"},heal_bonu:{name:"Healing Bonus",unit:"%"},stam:{name:"Stamina"},inc_heal:{name:"Incoming Healing Bonus",unit:"%"},pow_shield:{name:"Powerful Shield",unit:"%"},red_cd:{name:"Reduce CD",unit:"%"},norm_atk_dmg:{name:"Normal Attack DMG"},char_atk_dmg:{name:"Charged Attack DMG"},plunge_dmg:{name:"Plunging Attack DMG"},norm_atk_crit_dmg:{name:"Normal Attack CRIT Hit DMG"},char_atk_crit_dmg:{name:"Charged Attack CRIT Hit DMG"},plunge_crit_dmg:{name:"Plunging Attack CRIT Hit DMG"},norm_atk_avg_dmg:{name:"Normal Attack Avg. DMG"},char_atk_avg_dmg:{name:"Charged Attack Avg. DMG"},plunge_avg_dmg:{name:"Plunging Attack Avg. DMG"},norm_atk_dmg_bonus:{name:"Normal Attack DMG Bonus",unit:"%"},char_atk_dmg_bonus:{name:"Charged Attack DMG Bonus",unit:"%"},norm_atk_crit_rate:{name:"Nomral Attack CRIT Rate",unit:"%"},char_atk_crit_rate:{name:"Charged Attack CRIT Rate",unit:"%"},norm_atk_crit_multi:{name:"Normal Attack Crit Multiplier",unit:"multi"},char_atk_crit_multi:{name:"Charged Attack Crit Multiplier",unit:"multi"},norm_atk_bonus_multi:{name:"Normal Attack Bonus DMG Multiplier",unit:"multi"},char_atk_bonus_multi:{name:"Charged Attack Bonus DMG Multiplier",unit:"multi"},plunge_bonus_multi:{name:"Plunging Attack Bonus DMG Multiplier",unit:"multi"},skill_dmg:{name:"Ele. Skill DMG"},burst_dmg:{name:"Ele. Burst DMG"},skill_crit_dmg:{name:"Ele. Skill CRIT Hit DMG"},burst_crit_dmg:{name:"Ele. Burst CRIT Hit DMG"},skill_avg_dmg:{name:"Ele. Skill Avg. DMG"},burst_avg_dmg:{name:"Ele. Burst Avg. DMG"},skill_dmg_bonus:{name:"Ele. Skill DMG Bonus",unit:"%"},burst_dmg_bonus:{name:"Ele. Burst DMG Bonus",unit:"%"},skill_crit_rate:{name:"Ele. Skill CRIT Rate",unit:"%"},burst_crit_rate:{name:"Ele. Burst CRIT Rate",unit:"%"},skill_crit_multi:{name:"Ele. Skill Crit Multiplier",unit:"multi"},burst_crit_multi:{name:"Ele. Burst Crit Multiplier",unit:"multi"},skill_bonus_multi:{name:"Ele. Skill Bonus DMG Multiplier",unit:"multi"},burst_bonus_multi:{name:"Ele. Burst Bonus DMG Multiplier",unit:"multi"},skill_cd_red:{name:"Ele. Skill CD Red.",unit:"%"},burst_cd_red:{name:"Ele. Burst CD Red.",unit:"%"},phy_dmg:{name:"Physical Attack DMG"},phy_crit_dmg:{name:"Physical Attack CRIT Hit DMG"},phy_avg_dmg:{name:"Physical Attack Avg. DMG"},phy_bonus_multi:{name:"Physical Attack Bonus DMG Multiplier",unit:"multi"},ele_dmg:{name:"Elemental Attack DMG"},ele_crit_dmg:{name:"Elemental Attack CRIT Hit DMG"},ele_avg_dmg:{name:"Elemental Attack Avg. DMG"},ele_bonus_multi:{name:"Elemental Attack Bonus DMG Multiplier",unit:"multi"},crit_dmg_multi:{name:"Crit Hit Multiplier",unit:"multi"},crit_multi:{name:"Crit Multiplier",unit:"multi"},dmg:{name:"All DMG",unit:"%"},move_spd:{name:"Movement SPD",unit:"%"},atk_spd:{name:"ATK SPD",unit:"%"},weakspot_dmg:{name:"Weakspot DMG",unit:"%"},stamina_dec:{name:"Stamina Consumption Dec.",unit:"%"},stamina_gliding_dec:{name:"Gliding Stamina Consumption Dec.",unit:"%"},stamina_charged_dec:{name:"Charged Attack Stamina Consumption Dec.",unit:"%"},overloaded_dmg:{name:"Overloaded DMG",unit:"%"},electro_charged_dmg:{name:"Electro-Charged DMG",unit:"%"},superconduct_dmg:{name:"Superconduct DMG",unit:"%"},burning_dmg:{name:"Overloaded DMG",unit:"%"},vaporize_dmg:{name:"Vaporize DMG",unit:"%"},melt_dmg:{name:"Melt DMG",unit:"%"},swirl_dmg:{name:"Swirl DMG",unit:"%"},char_ele_key:{name:"Character Element Key",default:"anemo"},char_level:{name:"Character Level",default:1},enemy_level:{name:"Enemy Level"},enemy_level_multi:{name:"Enemy Level Multiplier",unit:"multi"},enemy_phy_res:{name:"Enemy Physical RES",unit:"%",default:10},enemy_phy_res_multi:{name:"Enemy Physical RES Multiplier",unit:"multi"},enemy_phy_immunity:{name:"Enemy Physical Immunity",default:!1},enemy_ele_res:{name:"Enemy Elemental RES",unit:"%",default:10},enemy_ele_res_multi:{name:"Enemy Elemental RES Multiplier",unit:"multi"},enemy_ele_immunity:{name:"Enemy Elemental Immunity",default:!1}};function h(t){return(t/=100)<0?1-t/2:t>=.75?1/(4*t+1):1-t}var g={hp_final:function(t){return t.hp_base*(1+t.hp_/100)+t.hp},atk_final:function(t){return(t.atk_base+t.atk_weapon)*(1+t.atk_/100)+t.atk},def_final:function(t){return t.def_base*(1+t.def_/100)+t.def},norm_atk_dmg:function(t){return t.atk_final*t.norm_atk_bonus_multi*t.enemy_level_multi*t.enemy_phy_res_multi},norm_atk_crit_dmg:function(t){return t.norm_atk_dmg*t.crit_dmg_multi},norm_atk_avg_dmg:function(t){return t.norm_atk_dmg*t.norm_atk_crit_multi},norm_atk_crit_multi:function(t){return 1+y(t.crit_rate+t.norm_atk_crit_rate,0,100)/100*t.crit_dmg/100},norm_atk_bonus_multi:function(t){return 1+(t.phy_dmg_bonus+t.norm_atk_dmg_bonus+t.dmg)/100},char_atk_dmg:function(t){return t.atk_final*t.char_atk_bonus_multi*t.enemy_level_multi*t.enemy_phy_res_multi},char_atk_crit_dmg:function(t){return t.char_atk_dmg*t.crit_dmg_multi},char_atk_avg_dmg:function(t){return t.char_atk_dmg*t.char_atk_crit_multi},char_atk_crit_multi:function(t){return 1+y(t.crit_rate+t.char_atk_crit_rate,0,100)/100*t.crit_dmg/100},char_atk_bonus_multi:function(t){return 1+(t.phy_dmg_bonus+t.char_atk_dmg_bonus+t.dmg)/100},plunge_dmg:function(t){return t.phy_dmg},plunge_crit_dmg:function(t){return t.phy_crit_dmg},plunge_avg_dmg:function(t){return t.phy_avg_dmg},plunge_bonus_multi:function(t){return t.phy_bonus_multi},phy_dmg:function(t){return t.atk_final*t.phy_bonus_multi*t.enemy_level_multi*t.enemy_phy_res_multi},phy_crit_dmg:function(t){return t.phy_dmg*t.crit_dmg_multi},phy_avg_dmg:function(t){return t.phy_dmg*t.crit_multi},phy_bonus_multi:function(t){return 1+(t.phy_dmg_bonus+t.dmg)/100},crit_dmg_multi:function(t){return 1+t.crit_dmg/100},crit_multi:function(t){return 1+y(t.crit_rate,0,100)/100*(t.crit_dmg/100)},skill_crit_multi:function(t){return 1+y(t.crit_rate+t.skill_crit_rate,0,100)/100*t.crit_dmg/100},burst_crit_multi:function(t){return 1+y(t.crit_rate+t.burst_crit_rate,0,100)/100*t.crit_dmg/100},enemy_level_multi:function(t){return(100+t.char_level)/(100+t.enemy_level+100+t.char_level)},enemy_phy_res_multi:function(t){return t.enemy_phy_immunity?0:h(t.enemy_phy_res)}},v={norm_atk_dmg:function(t,e){return t.atk_final*t["".concat(e,"_norm_atk_bonus_multi")]*t.enemy_level_multi*t["".concat(e,"_enemy_ele_res_multi")]},norm_atk_crit_dmg:function(t,e){return t["".concat(e,"_norm_atk_dmg")]*t.crit_dmg_multi},norm_atk_avg_dmg:function(t,e){return t["".concat(e,"_norm_atk_dmg")]*t.norm_atk_crit_multi},norm_atk_bonus_multi:function(t,e){return 1+(t["".concat(e,"_ele_dmg_bonus")]+t.norm_atk_dmg_bonus+t.dmg)/100},char_atk_dmg:function(t,e){return t.atk_final*t["".concat(e,"_char_atk_bonus_multi")]*t.enemy_level_multi*t["".concat(e,"_enemy_ele_res_multi")]},char_atk_crit_dmg:function(t,e){return t["".concat(e,"_char_atk_dmg")]*t.crit_dmg_multi},char_atk_avg_dmg:function(t,e){return t["".concat(e,"_char_atk_dmg")]*t.char_atk_crit_multi},char_atk_bonus_multi:function(t,e){return 1+(t["".concat(e,"_ele_dmg_bonus")]+t.char_atk_dmg_bonus+t.dmg)/100},plunge_dmg:function(t,e){return t["".concat(e,"_ele_dmg")]},plunge_crit_dmg:function(t,e){return t["".concat(e,"_ele_crit_dmg")]},plunge_avg_dmg:function(t,e){return t["".concat(e,"_ele_avg_dmg")]},plunge_bonus_multi:function(t,e){return t["".concat(e,"_ele_bonus_multi")]},ele_dmg:function(t,e){return t.atk_final*t["".concat(e,"_ele_bonus_multi")]*t.enemy_level_multi*t["".concat(e,"_enemy_ele_res_multi")]},ele_crit_dmg:function(t,e){return t["".concat(e,"_ele_dmg")]*t.crit_dmg_multi},ele_avg_dmg:function(t,e){return t["".concat(e,"_ele_dmg")]*t.crit_multi},ele_bonus_multi:function(t,e){return 1+(t["".concat(e,"_ele_dmg_bonus")]+t.dmg)/100},skill_dmg:function(t,e){return t.atk_final*t["".concat(e,"_skill_bonus_multi")]*t.enemy_level_multi*t["".concat(e,"_enemy_ele_res_multi")]},skill_crit_dmg:function(t,e){return t["".concat(e,"_skill_dmg")]*t.crit_dmg_multi},skill_avg_dmg:function(t,e){return t["".concat(e,"_skill_dmg")]*t.skill_crit_multi},skill_bonus_multi:function(t,e){return 1+(t["".concat(e,"_ele_dmg_bonus")]+t.skill_dmg_bonus+t.dmg)/100},burst_dmg:function(t,e){return t.atk_final*t["".concat(e,"_burst_bonus_multi")]*t.enemy_level_multi*t["".concat(e,"_enemy_ele_res_multi")]},burst_crit_dmg:function(t,e){return t["".concat(e,"_burst_dmg")]*t.crit_dmg_multi},burst_avg_dmg:function(t,e){return t["".concat(e,"_burst_dmg")]*t.burst_crit_multi},burst_bonus_multi:function(t,e){return 1+(t["".concat(e,"_ele_dmg_bonus")]+t.burst_dmg_bonus+t.dmg)/100},enemy_ele_res_multi:function(t,e){return t["".concat(e,"_enemy_ele_immunity")]?0:h(t["".concat(e,"_enemy_ele_res")])}};["phy_dmg_bonus","phy_res","enemy_phy_res","enemy_phy_immunity","phy_dmg","phy_crit_dmg","phy_avg_dmg","phy_bonus_multi"].concat(f(Object.keys(d).filter((function(t){return["norm_atk","char_atk","plunge"].some((function(e){return t.includes(e)}))})))).forEach((function(t){d[t].html=Object(s.jsx)("span",{className:"text-physical text-nowrap",children:d[t].name}),d[t].variant="physical"})),["ele_dmg_bonus","ele_res","enemy_ele_res","enemy_ele_immunity"].concat(f(Object.keys(v))).forEach((function(t){var e=d[t];Object.keys(p).forEach((function(n){var r="".concat(n,"_").concat(t);d[r]=function(t){return JSON.parse(JSON.stringify(t))}(e),d[r].name="enemy_ele_res"===t?"Enemy ".concat(p[n].name," RES"):"enemy_ele_res_multi"===t?"Enemy ".concat(p[n].name," RES Multiplier"):"enemy_ele_immunity"===t?"Enemy ".concat(p[n].name," Immunity"):"".concat(p[n].name," ").concat(e.name),d[r].html=Object(s.jsx)("span",{className:"text-".concat(n," text-nowrap"),children:d[r].name}),d[r].variant=n}))})),Object.entries(v).forEach((function(t){var e=u(t,2),n=e[0],r=e[1];return Object.keys(p).forEach((function(t){return Object.defineProperty(g,"".concat(t,"_").concat(n),{configurable:!0,enumerable:!0,writable:!0,value:function(e){return r(e,t)}})}))}));var b={noelle_burst_atk:{key:"atk_final",formula:function(t){return function(e){return(e.atk_base+e.atk_weapon)*(1+e.atk_/100)+e.atk+e.def_final*(t.value/100)}},dependency:["atk_base","atk_weapon","atk_","atk","def_final","def_base","def_","def"]}};onmessage=function(){var t,e=(t=l.a.mark((function t(e){var n,r,i,o,a,u,c,_,m,s,f,p,y,d;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=e.data,r=n.splitArtifacts,i=n.artifactSetPerms,o=n.setFilters,a=n.initialStats,u=n.artifactSetEffects,c=n.maxBuildsToShow,_=n.buildFilterKey,m=n.asending,s=n.depdendencyStatKeys,f=performance.now(),p=k(r,i,o),y=p.map((function(t){return{builFilterVal:E(_,a,t,u,s),artifacts:t}})),d=performance.now(),y.sort((function(t,e){return m?t.builFilterVal-e.builFilterVal:e.builFilterVal-t.builFilterVal})),y.splice(c),postMessage({builds:y,timing:d-f});case 8:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,i){var o=t.apply(e,n);function a(t){_(o,r,i,a,u,"next",t)}function u(t){_(o,r,i,a,u,"throw",t)}a(void 0)}))});return function(t){return e.apply(this,arguments)}}();var k=function(t,e,n){var o=[],a={},c=n.filter((function(t){return t.key})).map((function(t){return t.key}));Object.entries(t).forEach((function(t){var e=u(t,2),n=e[0],r=e[1],i={};r.forEach((function(t){if(c.includes(t.setKey))i[t.setKey]?i[t.setKey].push(t):i[t.setKey]=[t];else{i.Other?i.Other.push(t):i.Other=[t]}})),a[n]=i}));var l=["flower","plume","sands","goblet","circlet"],_=function t(e,n,u){if(e>=l.length)o.push(u);else{var c=l[e],_=n[c];a[c][_]&&a[c][_].forEach((function(o){u[c]=o,t(e+1,n,function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},u))}))}};return e.forEach((function(t){return _(0,t,{})})),o};function E(t,e,n,r,i){var o=JSON.parse(JSON.stringify(e)),a=m.setToSlots(n);return Object.values(n).forEach((function(t){t&&(o[t.mainStatKey]=(o[t.mainStatKey]||0)+t.mainStatVal,t.substats.forEach((function(t){return(null===t||void 0===t?void 0:t.key)&&(o[t.key]=(o[t.key]||0)+t.value)})))})),Object.entries(a).forEach((function(t){var e=u(t,2),n=e[0],i=e[1];return r[n]&&Object.entries(r[n]).forEach((function(t){var e=u(t,2),n=e[0],r=e[1];return parseInt(n)<=i.length&&Object.entries(r).forEach((function(t){var e=u(t,2),n=e[0],r=e[1];return o[n]=(o[n]||0)+r}))}))})),function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.formulaKeys,r=void 0===n?Object.keys(g):n,i=e.statKeys,o=void 0===i?Object.keys(d):i,a=t.formulaOverrides;(void 0===a?[]:a).forEach((function(e){var n=e.key,i=e.options,o=b[n]||{},a=o.key,u=o.formula;r.includes(a)&&(u=u(i),Object.defineProperty(t,a,{get:i.formulaKeys?function(){return u(t)}:function(){var e=u(t);return Object.defineProperty(this,a,{value:e}),e},configurable:!0}))})),r.forEach((function(n){!t.hasOwnProperty(n)&&Object.defineProperty(t,n,{get:e.formulaKeys?function(){return g[n](t)}:function(){var e=g[n](t);return Object.defineProperty(this,n,{value:e}),e},configurable:!0})})),o.forEach((function(e){return!t.hasOwnProperty(e)&&(t[e]=d[e].default||0)}))}(o,i),o[t]}}]);
//# sourceMappingURL=BuildWorker.19be0b66.worker.js.map