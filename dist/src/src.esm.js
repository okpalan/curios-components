import e from"@babel/runtime/helpers/asyncToGenerator";import t from"@babel/runtime/helpers/classCallCheck";import n from"@babel/runtime/helpers/createClass";import i from"@babel/runtime/helpers/possibleConstructorReturn";import r from"@babel/runtime/helpers/getPrototypeOf";import s from"@babel/runtime/helpers/inherits";import o from"@babel/runtime/helpers/wrapNativeSuper";import a from"@babel/runtime/regenerator";function u(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function c(e){if(e.__esModule)return e;var t=e.default;if("function"==typeof t){var n=function e(){return this instanceof e?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var i=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(n,t,i.get?i:{enumerable:!0,get:function(){return e[t]}})})),n}function l(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(l=function(){return!!e})()}var h=function(o){function u(){var e,n,s,o;return t(this,u),n=this,s=r(s=u),(e=i(n,l()?Reflect.construct(s,[],r(n).constructor):s.apply(n,o))).attachShadow({mode:"open"}),e.loadTemplate(),e.noiseTexture=null,e.timer=null,e.isPaused=!1,e.isExpanded=!1,e.startTime=Date.now(),e}return s(u,o),n(u,[{key:"attributeChangedCallback",value:function(e,t,n){"state"===e?this.updateState():"tint"===e?this.updateTint():"duration"===e&&this.updateDuration()}},{key:"connectedCallback",value:function(){var e=this;this.generateNoiseTexture(),this.loadTemplate().then((function(){e.startTimer(),e.addEventListeners()}))}},{key:"disconnectedCallback",value:function(){this.clearTimer(),this.removeEventListeners()}},{key:"loadTemplate",value:(c=e(a.mark((function e(){var t,n;return a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("draft/noisy-notification.html");case 2:return t=e.sent,e.next=5,t.text();case 5:n=e.sent,this.shadowRoot.innerHTML=n,this.addStyles();case 8:case"end":return e.stop()}}),e,this)}))),function(){return c.apply(this,arguments)})},{key:"addStyles",value:function(){var e=this;fetch("draft/noisy-notification.css").then((function(e){return e.text()})).then((function(t){var n=document.createElement("style");n.textContent=t,e.shadowRoot.appendChild(n)}))}},{key:"addEventListeners",value:function(){var e=this,t=this.shadowRoot.querySelector(".close-button"),n=this.shadowRoot.querySelector(".expand-button");t.addEventListener("click",(function(){return e.dismissState()})),n.addEventListener("click",(function(){return e.toggleExpand()})),this.addEventListener("mouseover",(function(){return e.pauseTimer()})),this.addEventListener("mouseleave",(function(){return e.resumeTimer()})),this.addEventListener("touchstart",(function(){return e.pauseTimer()})),this.addEventListener("touchend",(function(){return e.resumeTimer()}))}},{key:"removeEventListeners",value:function(){var e=this.shadowRoot.querySelector(".close-button"),t=this.shadowRoot.querySelector(".expand-button");e.removeEventListener("click",this.dismissState),t.removeEventListener("click",this.toggleExpand),this.removeEventListener("mouseover",this.pauseTimer),this.removeEventListener("mouseleave",this.resumeTimer),this.removeEventListener("touchstart",this.pauseTimer),this.removeEventListener("touchend",this.resumeTimer)}},{key:"generateNoiseTexture",value:function(){var e=document.createElement("canvas"),t=e.getContext("2d");e.width=512,e.height=512,function(e,t,n,i){for(var r=e.createImageData(t,n),s=r.data,o=function(e){var t=e;return function(){return(t=(9301*t+49297)%233280)/233280}}(i),a=0;a<s.length;a+=4){var u=Math.floor(255*o());s[a]=u,s[a+1]=u,s[a+2]=u,s[a+3]=50}e.putImageData(r,0,0)}(t,512,512,42),this.noiseTexture=e.toDataURL(),this.shadowRoot.querySelector(".noise").style.backgroundImage="url(".concat(this.noiseTexture,")")}},{key:"startTimer",value:function(){var e=this;this.isCollapsible&&(this.clearTimer(),this.startTime=Date.now(),this.timer=setTimeout((function(){return e.dismissState()}),this.duration))}},{key:"clearTimer",value:function(){this.timer&&(clearTimeout(this.timer),this.timer=null)}},{key:"pauseTimer",value:function(){this.isCollapsible&&!this.isPaused&&(this.isPaused=!0,this.clearTimer())}},{key:"resumeTimer",value:function(){this.isCollapsible&&this.isPaused&&(this.isPaused=!1,this.startTimer())}},{key:"dismissState",value:function(){this.clearTimer(),this.dispatchEvent(new CustomEvent("dismissed")),this.remove()}},{key:"toggleExpand",value:function(){this.isExpanded=!this.isExpanded,this.shadowRoot.querySelector(".expand-button span").textContent=this.isExpanded?"🔼":"🔽",this.style.height=this.isExpanded?"auto":"50px"}},{key:"updateState",value:function(){this.style.backgroundColor=this.getTintedColor()}},{key:"updateTint",value:function(){this.style.backgroundColor=this.getTintedColor()}},{key:"updateDuration",value:function(){this.clearTimer(),this.startTimer()}},{key:"getTintedColor",value:function(){var e={danger:"#FF4500",warning:"#F6C737","info-active":"#52C74D","info-inactive":"#5E7A74"}[this.getAttribute("state")]||"#000";return this.tintColor(e,parseInt(this.getAttribute("tint"))||0)}},{key:"tintColor",value:function(e,t){return"".concat(e).concat({0:"00",1:"33",2:"66",3:"99"}[t])}},{key:"isCollapsible",get:function(){return["info","warning","success"].includes(this.getAttribute("state"))}},{key:"duration",get:function(){return parseInt(this.getAttribute("duration"))||5e3}}],[{key:"observedAttributes",get:function(){return["state","tint","duration"]}}]);var c}(o(HTMLElement));customElements.define("noisy-notification",h),module.exports=h;var d=u(c(Object.freeze({__proto__:null})));export{d as default};
//# sourceMappingURL=src.esm.js.map
