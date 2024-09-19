class t extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.loadTemplate(),this.noiseTexture=null,this.timer=null,this.isPaused=!1,this.isExpanded=!1,this.startTime=Date.now()}static get observedAttributes(){return["state","tint","duration"]}attributeChangedCallback(t,e,s){"state"===t?this.updateState():"tint"===t?this.updateTint():"duration"===t&&this.updateDuration()}connectedCallback(){this.generateNoiseTexture(),this.startTimer(),this.addEventListeners()}disconnectedCallback(){this.clearTimer(),this.removeEventListeners()}async loadTemplate(){const t=await fetch("draft/noisy-notification.html"),e=await t.text();this.shadowRoot.innerHTML=e,this.addStyles()}addStyles(){fetch("draft/noisy-notification.css").then((t=>t.text())).then((t=>{const e=document.createElement("style");e.textContent=t,this.shadowRoot.appendChild(e)}))}addEventListeners(){this.shadowRoot.querySelector(".close-button").addEventListener("click",(()=>this.dismissState())),this.shadowRoot.querySelector(".expand-button").addEventListener("click",(()=>this.toggleExpand())),this.addEventListener("mouseover",(()=>this.pauseTimer())),this.addEventListener("mouseleave",(()=>this.resumeTimer())),this.addEventListener("touchstart",(()=>this.pauseTimer())),this.addEventListener("touchend",(()=>this.resumeTimer()))}removeEventListeners(){this.shadowRoot.querySelector(".close-button").removeEventListener("click",(()=>this.dismissState())),this.shadowRoot.querySelector(".expand-button").removeEventListener("click",(()=>this.toggleExpand())),this.removeEventListener("mouseover",(()=>this.pauseTimer())),this.removeEventListener("mouseleave",(()=>this.resumeTimer())),this.removeEventListener("touchstart",(()=>this.pauseTimer())),this.removeEventListener("touchend",(()=>this.resumeTimer()))}generateNoiseTexture(){const t=document.createElement("canvas"),e=t.getContext("2d");t.width=512,t.height=512,function(t,e,s,i){const n=t.createImageData(e,s),r=n.data,a=function(t){let e=t;return function(){return e=(9301*e+49297)%233280,e/233280}}(i);for(let t=0;t<r.length;t+=4){const e=Math.floor(255*a());r[t]=e,r[t+1]=e,r[t+2]=e,r[t+3]=50}t.putImageData(n,0,0)}(e,512,512,42),this.noiseTexture=t.toDataURL(),this.shadowRoot.querySelector(".noise").style.backgroundImage=`url(${this.noiseTexture})`}startTimer(){this.isCollapsible&&(this.clearTimer(),this.startTime=Date.now(),this.timer=setTimeout((()=>this.dismissState()),this.duration))}clearTimer(){this.timer&&(clearTimeout(this.timer),this.timer=null)}pauseTimer(){this.isCollapsible&&!this.isPaused&&(this.isPaused=!0,this.clearTimer())}resumeTimer(){this.isCollapsible&&this.isPaused&&(this.isPaused=!1,this.startTimer())}dismissState(){this.clearTimer(),this.dispatchEvent(new CustomEvent("dismissed"))}toggleExpand(){this.isExpanded=!this.isExpanded,this.shadowRoot.querySelector(".expand-button img").src=this.isExpanded?"collapse.svg":"expand.svg",this.style.height=this.isExpanded?"auto":"50px"}updateState(){this.style.backgroundColor=this.getTintedColor()}updateTint(){this.style.backgroundColor=this.getTintedColor()}updateDuration(){this.clearTimer(),this.startTimer()}getTintedColor(){let t={danger:"#FF4500",warning:"#F6C737","info-active":"#52C74D","info-inactive":"#5E7A74"}[this.getAttribute("state")]||"#000";return this.tintColor(t,parseInt(this.getAttribute("tint"))||0)}tintColor(t,e){return`${t}${{0:"00",1:"33",2:"66",3:"99"}[e]}`}get isCollapsible(){return["info","warning","success"].includes(this.getAttribute("state"))}get duration(){return parseInt(this.getAttribute("duration"))||5e3}}customElements.define("noisy-notification",t);export{t as NoisyNotification};
//# sourceMappingURL=index.esm.js.map
