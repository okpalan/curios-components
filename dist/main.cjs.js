"use strict";function t(t,e,r,n,o,i,a){try{var u=t[i](a),s=u.value}catch(t){return void r(t)}u.done?e(s):Promise.resolve(s).then(n,o)}function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function r(t){var r=function(t,r){if("object"!=e(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,r);if("object"!=e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t,"string");return"symbol"==e(r)?r:r+""}function n(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,r(o.key),o)}}function o(t,r){if(r&&("object"==e(r)||"function"==typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function i(t){return i=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},i(t)}function a(t,e){return a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},a(t,e)}function u(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(u=function(){return!!t})()}function s(t){var e="function"==typeof Map?new Map:void 0;return s=function(t){if(null===t||!function(t){try{return-1!==Function.toString.call(t).indexOf("[native code]")}catch(e){return"function"==typeof t}}(t))return t;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return function(t,e,r){if(u())return Reflect.construct.apply(null,arguments);var n=[null];n.push.apply(n,e);var o=new(t.bind.apply(t,n));return r&&a(o,r.prototype),o}(t,arguments,i(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),a(r,t)},s(t)}function c(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var l={exports:{}},f={exports:{}};!function(t){function e(r){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(r)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports}(f);var h=f.exports;!function(t){var e=h.default;function r(){t.exports=r=function(){return o},t.exports.__esModule=!0,t.exports.default=t.exports;var n,o={},i=Object.prototype,a=i.hasOwnProperty,u=Object.defineProperty||function(t,e,r){t[e]=r.value},s="function"==typeof Symbol?Symbol:{},c=s.iterator||"@@iterator",l=s.asyncIterator||"@@asyncIterator",f=s.toStringTag||"@@toStringTag";function h(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{h({},"")}catch(n){h=function(t,e,r){return t[e]=r}}function p(t,e,r,n){var o=e&&e.prototype instanceof w?e:w,i=Object.create(o.prototype),a=new F(n||[]);return u(i,"_invoke",{value:j(t,r,a)}),i}function y(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}o.wrap=p;var d="suspendedStart",v="suspendedYield",m="executing",g="completed",b={};function w(){}function x(){}function E(){}var T={};h(T,c,(function(){return this}));var L=Object.getPrototypeOf,k=L&&L(L(M([])));k&&k!==i&&a.call(k,c)&&(T=k);var S=E.prototype=w.prototype=Object.create(T);function O(t){["next","throw","return"].forEach((function(e){h(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,r){function n(o,i,u,s){var c=y(t[o],t,i);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==e(f)&&a.call(f,"__await")?r.resolve(f.__await).then((function(t){n("next",t,u,s)}),(function(t){n("throw",t,u,s)})):r.resolve(f).then((function(t){l.value=t,u(l)}),(function(t){return n("throw",t,u,s)}))}s(c.arg)}var o;u(this,"_invoke",{value:function(t,e){function i(){return new r((function(r,o){n(t,e,r,o)}))}return o=o?o.then(i,i):i()}})}function j(t,e,r){var o=d;return function(i,a){if(o===m)throw Error("Generator is already running");if(o===g){if("throw"===i)throw a;return{value:n,done:!0}}for(r.method=i,r.arg=a;;){var u=r.delegate;if(u){var s=P(u,r);if(s){if(s===b)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===d)throw o=g,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=m;var c=y(t,e,r);if("normal"===c.type){if(o=r.done?g:v,c.arg===b)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(o=g,r.method="throw",r.arg=c.arg)}}}function P(t,e){var r=e.method,o=t.iterator[r];if(o===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=n,P(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),b;var i=y(o,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,b;var a=i.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,b):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,b)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function R(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function F(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function M(t){if(t||""===t){var r=t[c];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function e(){for(;++o<t.length;)if(a.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=n,e.done=!0,e};return i.next=i}}throw new TypeError(e(t)+" is not iterable")}return x.prototype=E,u(S,"constructor",{value:E,configurable:!0}),u(E,"constructor",{value:x,configurable:!0}),x.displayName=h(E,f,"GeneratorFunction"),o.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===x||"GeneratorFunction"===(e.displayName||e.name))},o.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,h(t,f,"GeneratorFunction")),t.prototype=Object.create(S),t},o.awrap=function(t){return{__await:t}},O(_.prototype),h(_.prototype,l,(function(){return this})),o.AsyncIterator=_,o.async=function(t,e,r,n,i){void 0===i&&(i=Promise);var a=new _(p(t,e,r,n),i);return o.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},O(S),h(S,f,"Generator"),h(S,c,(function(){return this})),h(S,"toString",(function(){return"[object Generator]"})),o.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},o.values=M,F.prototype={constructor:F,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(R),!t)for(var e in this)"t"===e.charAt(0)&&a.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return u.type="throw",u.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],u=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var s=a.call(i,"catchLoc"),c=a.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,b):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),b},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),R(r),b}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;R(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:M(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),b}},o}t.exports=r,t.exports.__esModule=!0,t.exports.default=t.exports}(l);var p=(0,l.exports)(),y=p;try{regeneratorRuntime=p}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=p:Function("r","regeneratorRuntime = r")(p)}var d=c(y);function v(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(v=function(){return!!t})()}var m=function(){function e(){var t,r,n,a;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),r=this,n=i(n=e),(t=o(r,v()?Reflect.construct(n,[],i(r).constructor):n.apply(r,a))).attachShadow({mode:"open"}),t.loadTemplate(),t.noiseTexture=null,t.timer=null,t.isPaused=!1,t.isExpanded=!1,t.startTime=Date.now(),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&a(t,e)}(e,s(HTMLElement)),r=e,u=[{key:"attributeChangedCallback",value:function(t,e,r){"state"===t?this.updateState():"tint"===t?this.updateTint():"duration"===t&&this.updateDuration()}},{key:"connectedCallback",value:function(){var t=this;return this.generateNoiseTexture(),this.loadTemplate().then((function(){t.startTimer(),t.addEventListeners()}))}},{key:"disconnectedCallback",value:function(){this.clearTimer(),this.removeEventListeners()}},{key:"loadTemplate",value:(l=d.mark((function t(){var e,r;return d.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("draft/noisy-notification.html");case 2:return e=t.sent,t.next=5,e.text();case 5:r=t.sent,this.shadowRoot.innerHTML=r,this.addStyles();case 8:case"end":return t.stop()}}),t,this)})),f=function(){var e=this,r=arguments;return new Promise((function(n,o){var i=l.apply(e,r);function a(e){t(i,n,o,a,u,"next",e)}function u(e){t(i,n,o,a,u,"throw",e)}a(void 0)}))},function(){return f.apply(this,arguments)})},{key:"addStyles",value:function(){var t=this;fetch("draft/noisy-notification.css").then((function(t){return t.text()})).then((function(e){var r=document.createElement("style");r.textContent=e,t.shadowRoot.appendChild(r)}))}},{key:"addEventListeners",value:function(){var t=this,e=this.shadowRoot.querySelector(".close-button"),r=this.shadowRoot.querySelector(".expand-button");e.addEventListener("click",(function(){return t.dismissState()})),r.addEventListener("click",(function(){return t.toggleExpand()})),this.addEventListener("mouseover",(function(){return t.pauseTimer()})),this.addEventListener("mouseleave",(function(){return t.resumeTimer()})),this.addEventListener("touchstart",(function(){return t.pauseTimer()})),this.addEventListener("touchend",(function(){return t.resumeTimer()}))}},{key:"removeEventListeners",value:function(){var t=this.shadowRoot.querySelector(".close-button"),e=this.shadowRoot.querySelector(".expand-button");t.removeEventListener("click",this.dismissState),e.removeEventListener("click",this.toggleExpand),this.removeEventListener("mouseover",this.pauseTimer),this.removeEventListener("mouseleave",this.resumeTimer),this.removeEventListener("touchstart",this.pauseTimer),this.removeEventListener("touchend",this.resumeTimer)}},{key:"generateNoiseTexture",value:function(){var t=document.createElement("canvas"),e=t.getContext("2d");t.width=512,t.height=512,function(t,e,r,n){for(var o=t.createImageData(e,r),i=o.data,a=function(t){var e=t;return function(){return(e=(9301*e+49297)%233280)/233280}}(n),u=0;u<i.length;u+=4){var s=Math.floor(255*a());i[u]=s,i[u+1]=s,i[u+2]=s,i[u+3]=50}t.putImageData(o,0,0)}(e,512,512,42),this.noiseTexture=t.toDataURL(),this.shadowRoot.querySelector(".noise").style.backgroundImage="url(".concat(this.noiseTexture,")")}},{key:"startTimer",value:function(){var t=this;this.isCollapsible&&(this.clearTimer(),this.startTime=Date.now(),this.timer=setTimeout((function(){return t.dismissState()}),this.duration))}},{key:"clearTimer",value:function(){this.timer&&(clearTimeout(this.timer),this.timer=null)}},{key:"pauseTimer",value:function(){this.isCollapsible&&!this.isPaused&&(this.isPaused=!0,this.clearTimer())}},{key:"resumeTimer",value:function(){this.isCollapsible&&this.isPaused&&(this.isPaused=!1,this.startTimer())}},{key:"dismissState",value:function(){this.clearTimer(),this.dispatchEvent(new CustomEvent("dismissed"))}},{key:"toggleExpand",value:function(){this.isExpanded=!this.isExpanded,this.shadowRoot.querySelector(".expand-button img").src=this.isExpanded?"collapse.svg":"expand.svg",this.style.height=this.isExpanded?"auto":"50px"}},{key:"updateState",value:function(){this.style.backgroundColor=this.getTintedColor()}},{key:"updateTint",value:function(){this.style.backgroundColor=this.getTintedColor()}},{key:"updateDuration",value:function(){this.clearTimer(),this.startTimer()}},{key:"getTintedColor",value:function(){var t={danger:"#FF4500",warning:"#F6C737","info-active":"#52C74D","info-inactive":"#5E7A74"}[this.getAttribute("state")]||"#000";return this.tintColor(t,parseInt(this.getAttribute("tint"))||0)}},{key:"tintColor",value:function(t,e){return"".concat(t).concat({0:"00",1:"33",2:"66",3:"99"}[e])}},{key:"isCollapsible",get:function(){return["info","warning","success"].includes(this.getAttribute("state"))}},{key:"duration",get:function(){return parseInt(this.getAttribute("duration"))||5e3}}],c=[{key:"observedAttributes",get:function(){return["state","tint","duration"]}}],u&&n(r.prototype,u),c&&n(r,c),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,u,c,l,f}();customElements.define("noisy-notification",m);
//# sourceMappingURL=main.cjs.js.map
