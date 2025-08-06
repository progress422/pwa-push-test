(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function r(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(n){if(n.ep)return;n.ep=!0;const s=r(n);fetch(n.href,s)}})();var zt="";function jt(e){zt=e}function ao(e=""){if(!zt){const t=[...document.getElementsByTagName("script")],r=t.find(o=>o.hasAttribute("data-shoelace"));if(r)jt(r.getAttribute("data-shoelace"));else{const o=t.find(s=>/shoelace(\.min)?\.js($|\?)/.test(s.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(s.src));let n="";o&&(n=o.getAttribute("src")),jt(n.split("/").slice(0,-1).join("/"))}}return zt.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")}var sr=Object.defineProperty,lo=Object.defineProperties,co=Object.getOwnPropertyDescriptor,uo=Object.getOwnPropertyDescriptors,Ee=Object.getOwnPropertySymbols,ho=Object.prototype.hasOwnProperty,po=Object.prototype.propertyIsEnumerable,$e=(e,t,r)=>t in e?sr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,lt=(e,t)=>{for(var r in t||(t={}))ho.call(t,r)&&$e(e,r,t[r]);if(Ee)for(var r of Ee(t))po.call(t,r)&&$e(e,r,t[r]);return e},ir=(e,t)=>lo(e,uo(t)),u=(e,t,r,o)=>{for(var n=o>1?void 0:o?co(t,r):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&sr(t,r,n),n},ar=(e,t,r)=>{if(!t.has(e))throw TypeError("Cannot "+r)},fo=(e,t,r)=>(ar(e,t,"read from private field"),t.get(e)),go=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r)},bo=(e,t,r,o)=>(ar(e,t,"write to private field"),t.set(e,r),r);jt("https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.16.0/cdn/");/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ht=globalThis,te=ht.ShadowRoot&&(ht.ShadyCSS===void 0||ht.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ee=Symbol(),Ae=new WeakMap;let lr=class{constructor(t,r,o){if(this._$cssResult$=!0,o!==ee)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(te&&t===void 0){const o=r!==void 0&&r.length===1;o&&(t=Ae.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&Ae.set(r,t))}return t}toString(){return this.cssText}};const mo=e=>new lr(typeof e=="string"?e:e+"",void 0,ee),S=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((o,n,s)=>o+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[s+1],e[0]);return new lr(r,e,ee)},vo=(e,t)=>{if(te)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const o=document.createElement("style"),n=ht.litNonce;n!==void 0&&o.setAttribute("nonce",n),o.textContent=r.cssText,e.appendChild(o)}},Se=te?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const o of t.cssRules)r+=o.cssText;return mo(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:yo,defineProperty:wo,getOwnPropertyDescriptor:_o,getOwnPropertyNames:Eo,getOwnPropertySymbols:$o,getPrototypeOf:Ao}=Object,wt=globalThis,Ce=wt.trustedTypes,So=Ce?Ce.emptyScript:"",Co=wt.reactiveElementPolyfillSupport,tt=(e,t)=>e,ft={toAttribute(e,t){switch(t){case Boolean:e=e?So:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},re=(e,t)=>!yo(e,t),Ie={attribute:!0,type:String,converter:ft,reflect:!1,hasChanged:re};Symbol.metadata??=Symbol("metadata"),wt.litPropertyMetadata??=new WeakMap;class W extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=Ie){if(r.state&&(r.attribute=!1),this._$Ei(),this.elementProperties.set(t,r),!r.noAccessor){const o=Symbol(),n=this.getPropertyDescriptor(t,o,r);n!==void 0&&wo(this.prototype,t,n)}}static getPropertyDescriptor(t,r,o){const{get:n,set:s}=_o(this.prototype,t)??{get(){return this[r]},set(i){this[r]=i}};return{get(){return n?.call(this)},set(i){const c=n?.call(this);s.call(this,i),this.requestUpdate(t,c,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Ie}static _$Ei(){if(this.hasOwnProperty(tt("elementProperties")))return;const t=Ao(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(tt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(tt("properties"))){const r=this.properties,o=[...Eo(r),...$o(r)];for(const n of o)this.createProperty(n,r[n])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[o,n]of r)this.elementProperties.set(o,n)}this._$Eh=new Map;for(const[r,o]of this.elementProperties){const n=this._$Eu(r,o);n!==void 0&&this._$Eh.set(n,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const n of o)r.unshift(Se(n))}else t!==void 0&&r.push(Se(t));return r}static _$Eu(t,r){const o=r.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const o of r.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return vo(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,r,o){this._$AK(t,o)}_$EC(t,r){const o=this.constructor.elementProperties.get(t),n=this.constructor._$Eu(t,o);if(n!==void 0&&o.reflect===!0){const s=(o.converter?.toAttribute!==void 0?o.converter:ft).toAttribute(r,o.type);this._$Em=t,s==null?this.removeAttribute(n):this.setAttribute(n,s),this._$Em=null}}_$AK(t,r){const o=this.constructor,n=o._$Eh.get(t);if(n!==void 0&&this._$Em!==n){const s=o.getPropertyOptions(n),i=typeof s.converter=="function"?{fromAttribute:s.converter}:s.converter?.fromAttribute!==void 0?s.converter:ft;this._$Em=n,this[n]=i.fromAttribute(r,s.type),this._$Em=null}}requestUpdate(t,r,o){if(t!==void 0){if(o??=this.constructor.getPropertyOptions(t),!(o.hasChanged??re)(this[t],r))return;this.P(t,r,o)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,r,o){this._$AL.has(t)||this._$AL.set(t,r),o.reflect===!0&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[n,s]of this._$Ep)this[n]=s;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[n,s]of o)s.wrapped!==!0||this._$AL.has(n)||this[n]===void 0||this.P(n,this[n],s)}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),this._$EO?.forEach(o=>o.hostUpdate?.()),this.update(r)):this._$EU()}catch(o){throw t=!1,this._$EU(),o}t&&this._$AE(r)}willUpdate(t){}_$AE(t){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach(r=>this._$EC(r,this[r])),this._$EU()}updated(t){}firstUpdated(t){}}W.elementStyles=[],W.shadowRootOptions={mode:"open"},W[tt("elementProperties")]=new Map,W[tt("finalized")]=new Map,Co?.({ReactiveElement:W}),(wt.reactiveElementVersions??=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const oe=globalThis,gt=oe.trustedTypes,ke=gt?gt.createPolicy("lit-html",{createHTML:e=>e}):void 0,cr="$lit$",k=`lit$${Math.random().toFixed(9).slice(2)}$`,dr="?"+k,Io=`<${dr}>`,U=document,et=()=>U.createComment(""),rt=e=>e===null||typeof e!="object"&&typeof e!="function",ne=Array.isArray,ko=e=>ne(e)||typeof e?.[Symbol.iterator]=="function",kt=`[ 	
\f\r]`,J=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Te=/-->/g,xe=/>/g,N=RegExp(`>|${kt}(?:([^\\s"'>=/]+)(${kt}*=${kt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),De=/'/g,Oe=/"/g,ur=/^(?:script|style|textarea|title)$/i,To=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),w=To(1),V=Symbol.for("lit-noChange"),b=Symbol.for("lit-nothing"),Pe=new WeakMap,B=U.createTreeWalker(U,129);function hr(e,t){if(!ne(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return ke!==void 0?ke.createHTML(t):t}const xo=(e,t)=>{const r=e.length-1,o=[];let n,s=t===2?"<svg>":t===3?"<math>":"",i=J;for(let c=0;c<r;c++){const a=e[c];let l,p,d=-1,m=0;for(;m<a.length&&(i.lastIndex=m,p=i.exec(a),p!==null);)m=i.lastIndex,i===J?p[1]==="!--"?i=Te:p[1]!==void 0?i=xe:p[2]!==void 0?(ur.test(p[2])&&(n=RegExp("</"+p[2],"g")),i=N):p[3]!==void 0&&(i=N):i===N?p[0]===">"?(i=n??J,d=-1):p[1]===void 0?d=-2:(d=i.lastIndex-p[2].length,l=p[1],i=p[3]===void 0?N:p[3]==='"'?Oe:De):i===Oe||i===De?i=N:i===Te||i===xe?i=J:(i=N,n=void 0);const v=i===N&&e[c+1].startsWith("/>")?" ":"";s+=i===J?a+Io:d>=0?(o.push(l),a.slice(0,d)+cr+a.slice(d)+k+v):a+k+(d===-2?c:v)}return[hr(e,s+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),o]};class ot{constructor({strings:t,_$litType$:r},o){let n;this.parts=[];let s=0,i=0;const c=t.length-1,a=this.parts,[l,p]=xo(t,r);if(this.el=ot.createElement(l,o),B.currentNode=this.el.content,r===2||r===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(n=B.nextNode())!==null&&a.length<c;){if(n.nodeType===1){if(n.hasAttributes())for(const d of n.getAttributeNames())if(d.endsWith(cr)){const m=p[i++],v=n.getAttribute(d).split(k),j=/([.?@])?(.*)/.exec(m);a.push({type:1,index:s,name:j[2],strings:v,ctor:j[1]==="."?Oo:j[1]==="?"?Po:j[1]==="@"?No:_t}),n.removeAttribute(d)}else d.startsWith(k)&&(a.push({type:6,index:s}),n.removeAttribute(d));if(ur.test(n.tagName)){const d=n.textContent.split(k),m=d.length-1;if(m>0){n.textContent=gt?gt.emptyScript:"";for(let v=0;v<m;v++)n.append(d[v],et()),B.nextNode(),a.push({type:2,index:++s});n.append(d[m],et())}}}else if(n.nodeType===8)if(n.data===dr)a.push({type:2,index:s});else{let d=-1;for(;(d=n.data.indexOf(k,d+1))!==-1;)a.push({type:7,index:s}),d+=k.length-1}s++}}static createElement(t,r){const o=U.createElement("template");return o.innerHTML=t,o}}function K(e,t,r=e,o){if(t===V)return t;let n=o!==void 0?r._$Co?.[o]:r._$Cl;const s=rt(t)?void 0:t._$litDirective$;return n?.constructor!==s&&(n?._$AO?.(!1),s===void 0?n=void 0:(n=new s(e),n._$AT(e,r,o)),o!==void 0?(r._$Co??=[])[o]=n:r._$Cl=n),n!==void 0&&(t=K(e,n._$AS(e,t.values),n,o)),t}class Do{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:o}=this._$AD,n=(t?.creationScope??U).importNode(r,!0);B.currentNode=n;let s=B.nextNode(),i=0,c=0,a=o[0];for(;a!==void 0;){if(i===a.index){let l;a.type===2?l=new ct(s,s.nextSibling,this,t):a.type===1?l=new a.ctor(s,a.name,a.strings,this,t):a.type===6&&(l=new Ro(s,this,t)),this._$AV.push(l),a=o[++c]}i!==a?.index&&(s=B.nextNode(),i++)}return B.currentNode=U,n}p(t){let r=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,r),r+=o.strings.length-2):o._$AI(t[r])),r++}}class ct{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,o,n){this.type=2,this._$AH=b,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=o,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=K(this,t,r),rt(t)?t===b||t==null||t===""?(this._$AH!==b&&this._$AR(),this._$AH=b):t!==this._$AH&&t!==V&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ko(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==b&&rt(this._$AH)?this._$AA.nextSibling.data=t:this.T(U.createTextNode(t)),this._$AH=t}$(t){const{values:r,_$litType$:o}=t,n=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=ot.createElement(hr(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===n)this._$AH.p(r);else{const s=new Do(n,this),i=s.u(this.options);s.p(r),this.T(i),this._$AH=s}}_$AC(t){let r=Pe.get(t.strings);return r===void 0&&Pe.set(t.strings,r=new ot(t)),r}k(t){ne(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let o,n=0;for(const s of t)n===r.length?r.push(o=new ct(this.O(et()),this.O(et()),this,this.options)):o=r[n],o._$AI(s),n++;n<r.length&&(this._$AR(o&&o._$AB.nextSibling,n),r.length=n)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class _t{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,o,n,s){this.type=1,this._$AH=b,this._$AN=void 0,this.element=t,this.name=r,this._$AM=n,this.options=s,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=b}_$AI(t,r=this,o,n){const s=this.strings;let i=!1;if(s===void 0)t=K(this,t,r,0),i=!rt(t)||t!==this._$AH&&t!==V,i&&(this._$AH=t);else{const c=t;let a,l;for(t=s[0],a=0;a<s.length-1;a++)l=K(this,c[o+a],r,a),l===V&&(l=this._$AH[a]),i||=!rt(l)||l!==this._$AH[a],l===b?t=b:t!==b&&(t+=(l??"")+s[a+1]),this._$AH[a]=l}i&&!n&&this.j(t)}j(t){t===b?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Oo extends _t{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===b?void 0:t}}class Po extends _t{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==b)}}class No extends _t{constructor(t,r,o,n,s){super(t,r,o,n,s),this.type=5}_$AI(t,r=this){if((t=K(this,t,r,0)??b)===V)return;const o=this._$AH,n=t===b&&o!==b||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,s=t!==b&&(o===b||n);n&&this.element.removeEventListener(this.name,this,o),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Ro{constructor(t,r,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){K(this,t)}}const Mo=oe.litHtmlPolyfillSupport;Mo?.(ot,ct),(oe.litHtmlVersions??=[]).push("3.2.1");const Bo=(e,t,r)=>{const o=r?.renderBefore??t;let n=o._$litPart$;if(n===void 0){const s=r?.renderBefore??null;o._$litPart$=n=new ct(t.insertBefore(et(),s),s,void 0,r??{})}return n._$AI(e),n};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let T=class extends W{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Bo(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return V}};T._$litElement$=!0,T.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:T});const Lo=globalThis.litElementPolyfillSupport;Lo?.({LitElement:T});(globalThis.litElementVersions??=[]).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const se=e=>(t,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Uo={attribute:!0,type:String,converter:ft,reflect:!1,hasChanged:re},Vo=(e=Uo,t,r)=>{const{kind:o,metadata:n}=r;let s=globalThis.litPropertyMetadata.get(n);if(s===void 0&&globalThis.litPropertyMetadata.set(n,s=new Map),s.set(r.name,e),o==="accessor"){const{name:i}=r;return{set(c){const a=t.get.call(this);t.set.call(this,c),this.requestUpdate(i,a,e)},init(c){return c!==void 0&&this.P(i,void 0,e),c}}}if(o==="setter"){const{name:i}=r;return function(c){const a=this[i];t.call(this,c),this.requestUpdate(i,a,e)}}throw Error("Unsupported decorator location: "+o)};function h(e){return(t,r)=>typeof r=="object"?Vo(e,t,r):((o,n,s)=>{const i=n.hasOwnProperty(s);return n.constructor.createProperty(s,i?{...o,wrapped:!0}:o),i?Object.getOwnPropertyDescriptor(n,s):void 0})(e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Et(e){return h({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fo=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ho(e,t){return(r,o,n)=>{const s=i=>i.renderRoot?.querySelector(e)??null;return Fo(r,o,{get(){return s(this)}})}}const zo="modulepreload",jo=function(e){return"/pwa-push-test/"+e},Ne={},Wo=function(t,r,o){let n=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),c=i?.nonce||i?.getAttribute("nonce");n=Promise.allSettled(r.map(a=>{if(a=jo(a),a in Ne)return;Ne[a]=!0;const l=a.endsWith(".css"),p=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${p}`))return;const d=document.createElement("link");if(d.rel=l?"stylesheet":zo,l||(d.as="script"),d.crossOrigin="",d.href=a,c&&d.setAttribute("nonce",c),document.head.appendChild(d),l)return new Promise((m,v)=>{d.addEventListener("load",m),d.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${a}`)))})}))}function s(i){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=i,window.dispatchEvent(c),!c.defaultPrevented)throw i}return n.then(i=>{for(const c of i||[])c.status==="rejected"&&s(c.reason);return t().catch(s)})},ie=Symbol.for("app-tools::log::1.x");globalThis[ie]={setDebug:qo,debug:"window"in globalThis?new URL(window.location.href).searchParams.has("app-tools-debug"):!1};function qo(e){globalThis[ie].debug=!!e}function Ko(e,t){globalThis[ie].debug&&(console.groupCollapsed(`[app-tools] ${e}`),t&&console.log(t),console.groupEnd())}function Go(e){return(t,r)=>{Ko(`${e}: ${t}`,r)}}const I=Go("router");class Jo extends Event{constructor(t){super("route-changed"),this.context=t}}class Yo extends EventTarget{context={params:{},query:{},title:"",url:new URL(window.location.href)};constructor(t){super(),this.config=t,this.routes=t.routes.map(r=>({...r,urlPattern:new URLPattern({pathname:r.path,baseURL:window.location.href,search:"*",hash:"*"})})),I("Initialized routes",this.routes),queueMicrotask(()=>{this.navigate(new URL(window.location.href),{replace:!0})}),window.addEventListener("popstate",this._onPopState),window.addEventListener("click",this._onAnchorClick)}uninstall(){window.removeEventListener("popstate",this._onPopState),window.removeEventListener("click",this._onAnchorClick)}get url(){return new URL(window.location.href)}get fallback(){return new URL(this.config?.fallback||this.baseUrl.href.substring(window.location.origin.length),this.baseUrl)}get baseUrl(){return new URL("./",document.baseURI)}render(){return I(`Rendering route ${this.context.url.pathname}${this.context.url.search}${this.context.url.hash}`,{context:this.context,route:this.route}),this.route?.render?.(this.context)}_matchRoute(t){for(const r of this.routes){const o=r.urlPattern.exec(t);if(o){const{title:n}=r,s=Object.fromEntries(new URLSearchParams(t.search)),i=o?.pathname?.groups??{};return this.context={url:t,title:typeof n=="function"?n({params:i,query:s,url:t}):n,params:i,query:s},r}}return I(`No route matched for ${t.pathname}${t.search}${t.hash}`,t),null}_notifyUrlChanged(){this.dispatchEvent(new Jo(this.context))}_onPopState=()=>{this.navigate(new URL(window.location.href),{backNav:!0})};_onAnchorClick=t=>{if(t.defaultPrevented||t.button!==0||t.metaKey||t.ctrlKey||t.shiftKey)return;const r=t.composedPath().find(s=>s.tagName==="A");if(!r||!r.href)return;const o=new URL(r.href);if(this.url.href===o.href||o.host!==window.location.host||r.hasAttribute("download")||r.href.includes("mailto:"))return;const n=r.getAttribute("target");n&&n!==""&&n!=="_self"||(t.preventDefault(),this.navigate(o))};_collectPlugins(t){return[...this.config?.plugins??[],...t?.plugins??[]]}async navigate(t,r={}){typeof t=="string"&&(t=new URL(t,this.baseUrl));let o=this._matchRoute(t)||this._matchRoute(this.fallback);I(`Navigating to ${t.pathname}${t.search}${t.hash}`,{context:this.context,route:this.route});let n=this._collectPlugins(o);for(const s of n)try{const i=await s?.shouldNavigate?.(this.context);i&&(await i.condition()||(t=new URL(i.redirect,this.baseUrl),o=this._matchRoute(t)||this._matchRoute(this.fallback),n=this._collectPlugins(o),I("Redirecting",{context:this.context,route:this.route})))}catch(i){throw I(`Plugin "${s.name}" error on shouldNavigate hook`,i),i}if(this.route=o,!this.route)throw new Error(`[ROUTER] No route or fallback matched for url ${t}`);for(const s of n)try{await s?.beforeNavigation?.(this.context)}catch(i){throw I(`Plugin "${s.name}" error on beforeNavigation hook`,i),i}r?.replace?window.history.replaceState(null,"",`${t.pathname}${t.search}${t.hash}`):r.backNav||window.history.pushState(null,"",`${t.pathname}${t.search}${t.hash}`),document.title=this.context.title,this._notifyUrlChanged();for(const s of n)try{await s?.afterNavigation?.(this.context)}catch(i){throw I(`Plugin "${s.name}" error on afterNavigation hook`,i),i}}}globalThis.URLPattern||await Wo(()=>import("./index-CBloBB_n.js"),[]);const Zo="/pwa-push-test";new Yo({routes:[{path:ae(),title:"Home",render:()=>w`<app-home></app-home>`}]});function ae(e){var t=Zo;return e&&(t=t+e),t}var Xo=S`
  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,pr=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=r=>{const o=r.target;(this.slotNames.includes("[default]")&&!o.name||o.name&&this.slotNames.includes(o.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}},$t=S`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,pt,P=class extends T{constructor(){super(),go(this,pt,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){const r=new CustomEvent(e,lt({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(r),r}static define(e,t=this,r={}){const o=customElements.get(e);if(!o){try{customElements.define(e,t,r)}catch{customElements.define(e,class extends t{},r)}return}let n=" (unknown version)",s=n;"version"in t&&t.version&&(n=" v"+t.version),"version"in o&&o.version&&(s=" v"+o.version),!(n&&s&&n===s)&&console.warn(`Attempted to register <${e}>${n}, but <${e}>${s} has already been registered.`)}attributeChangedCallback(e,t,r){fo(this,pt)||(this.constructor.elementProperties.forEach((o,n)=>{o.reflect&&this[n]!=null&&this.initialReflectedProperties.set(n,this[n])}),bo(this,pt,!0)),super.attributeChangedCallback(e,t,r)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,r)=>{e.has(r)&&this[r]==null&&(this[r]=t)})}};pt=new WeakMap;P.version="2.18.0";P.dependencies={};u([h()],P.prototype,"dir",2);u([h()],P.prototype,"lang",2);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Qo={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},tn=e=>(...t)=>({_$litDirective$:e,values:t});let en=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,o){this._$Ct=t,this._$AM=r,this._$Ci=o}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fr=tn(class extends en{constructor(e){if(super(e),e.type!==Qo.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in t)t[o]&&!this.nt?.has(o)&&this.st.add(o);return this.render(t)}const r=e.element.classList;for(const o of this.st)o in t||(r.remove(o),this.st.delete(o));for(const o in t){const n=!!t[o];n===this.st.has(o)||this.nt?.has(o)||(n?(r.add(o),this.st.add(o)):(r.remove(o),this.st.delete(o)))}return V}});var gr=class extends P{constructor(){super(...arguments),this.hasSlotController=new pr(this,"footer","header","image")}render(){return w`
      <div
        part="base"
        class=${fr({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};gr.styles=[$t,Xo];gr.define("sl-card");var rn=S`
  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`;const Wt=new Set,q=new Map;let M,le="ltr",ce="en";const br=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(br){const e=new MutationObserver(vr);le=document.documentElement.dir||"ltr",ce=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function mr(...e){e.map(t=>{const r=t.$code.toLowerCase();q.has(r)?q.set(r,Object.assign(Object.assign({},q.get(r)),t)):q.set(r,t),M||(M=t)}),vr()}function vr(){br&&(le=document.documentElement.dir||"ltr",ce=document.documentElement.lang||navigator.language),[...Wt.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}let on=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){Wt.add(this.host)}hostDisconnected(){Wt.delete(this.host)}dir(){return`${this.host.dir||le}`.toLowerCase()}lang(){return`${this.host.lang||ce}`.toLowerCase()}getTranslationData(t){var r,o;const n=new Intl.Locale(t.replace(/_/g,"-")),s=n?.language.toLowerCase(),i=(o=(r=n?.region)===null||r===void 0?void 0:r.toLowerCase())!==null&&o!==void 0?o:"",c=q.get(`${s}-${i}`),a=q.get(s);return{locale:n,language:s,region:i,primary:c,secondary:a}}exists(t,r){var o;const{primary:n,secondary:s}=this.getTranslationData((o=r.lang)!==null&&o!==void 0?o:this.lang());return r=Object.assign({includeFallback:!1},r),!!(n&&n[t]||s&&s[t]||r.includeFallback&&M&&M[t])}term(t,...r){const{primary:o,secondary:n}=this.getTranslationData(this.lang());let s;if(o&&o[t])s=o[t];else if(n&&n[t])s=n[t];else if(M&&M[t])s=M[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof s=="function"?s(...r):s}date(t,r){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),r).format(t)}number(t,r){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),r).format(t)}relativeTime(t,r,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(t,r)}};var yr={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};mr(yr);var nn=yr,wr=class extends on{};mr(nn);var _r=class extends P{constructor(){super(...arguments),this.localize=new wr(this)}render(){return w`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};_r.styles=[$t,rn];var Y=new WeakMap,Z=new WeakMap,X=new WeakMap,Tt=new WeakSet,dt=new WeakMap,sn=class{constructor(e,t){this.handleFormData=r=>{const o=this.options.disabled(this.host),n=this.options.name(this.host),s=this.options.value(this.host),i=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!o&&!i&&typeof n=="string"&&n.length>0&&typeof s<"u"&&(Array.isArray(s)?s.forEach(c=>{r.formData.append(n,c.toString())}):r.formData.append(n,s.toString()))},this.handleFormSubmit=r=>{var o;const n=this.options.disabled(this.host),s=this.options.reportValidity;this.form&&!this.form.noValidate&&((o=Y.get(this.form))==null||o.forEach(i=>{this.setUserInteracted(i,!0)})),this.form&&!this.form.noValidate&&!n&&!s(this.host)&&(r.preventDefault(),r.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),dt.set(this.host,[])},this.handleInteraction=r=>{const o=dt.get(this.host);o.includes(r.type)||o.push(r.type),o.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const r=this.form.querySelectorAll("*");for(const o of r)if(typeof o.checkValidity=="function"&&!o.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const r=this.form.querySelectorAll("*");for(const o of r)if(typeof o.reportValidity=="function"&&!o.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options=lt({form:r=>{const o=r.form;if(o){const s=r.getRootNode().querySelector(`#${o}`);if(s)return s}return r.closest("form")},name:r=>r.name,value:r=>r.value,defaultValue:r=>r.defaultValue,disabled:r=>{var o;return(o=r.disabled)!=null?o:!1},reportValidity:r=>typeof r.reportValidity=="function"?r.reportValidity():!0,checkValidity:r=>typeof r.checkValidity=="function"?r.checkValidity():!0,setValue:(r,o)=>r.value=o,assumeInteractionOn:["sl-input"]},t)}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),dt.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),dt.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,Y.has(this.form)?Y.get(this.form).add(this.host):Y.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Z.has(this.form)||(Z.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),X.has(this.form)||(X.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const e=Y.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Z.has(this.form)&&(this.form.reportValidity=Z.get(this.form),Z.delete(this.form)),X.has(this.form)&&(this.form.checkValidity=X.get(this.form),X.delete(this.form)),this.form=void 0))}setUserInteracted(e,t){t?Tt.add(e):Tt.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){const r=document.createElement("button");r.type=e,r.style.position="absolute",r.style.width="0",r.style.height="0",r.style.clipPath="inset(50%)",r.style.overflow="hidden",r.style.whiteSpace="nowrap",t&&(r.name=t.name,r.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(o=>{t.hasAttribute(o)&&r.setAttribute(o,t.getAttribute(o))})),this.form.append(r),r.click(),r.remove()}}getForm(){var e;return(e=this.form)!=null?e:null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){const t=this.host,r=!!Tt.has(t),o=!!t.required;t.toggleAttribute("data-required",o),t.toggleAttribute("data-optional",!o),t.toggleAttribute("data-invalid",!e),t.toggleAttribute("data-valid",e),t.toggleAttribute("data-user-invalid",!e&&r),t.toggleAttribute("data-user-valid",e&&r)}updateValidity(){const e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){const t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||e?.preventDefault()}},de=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(ir(lt({},de),{valid:!1,valueMissing:!0}));Object.freeze(ir(lt({},de),{valid:!1,customError:!0}));var an=S`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host([data-sl-button-group__button--first]:not([data-sl-button-group__button--last])) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([data-sl-button-group__button--inner]) .button {
    border-radius: 0;
  }

  :host([data-sl-button-group__button--last]:not([data-sl-button-group__button--first])) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host([data-sl-button-group__button]:not([data-sl-button-group__button--first])) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      [data-sl-button-group__button]:not(
          [data-sl-button-group__button--first],
          [data-sl-button-group__button--radio],
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host([data-sl-button-group__button--hover]) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host([data-sl-button-group__button--focus]),
  :host([data-sl-button-group__button][checked]) {
    z-index: 2;
  }
`,ln={name:"default",resolver:e=>ao(`assets/icons/${e}.svg`)},cn=ln,Re={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},dn={name:"system",resolver:e=>e in Re?`data:image/svg+xml,${encodeURIComponent(Re[e])}`:""},un=dn,hn=[cn,un],qt=[];function pn(e){qt.push(e)}function fn(e){qt=qt.filter(t=>t!==e)}function Me(e){return hn.find(t=>t.name===e)}var gn=S`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;function ue(e,t){const r=lt({waitUntilFirstUpdate:!1},t);return(o,n)=>{const{update:s}=o,i=Array.isArray(e)?e:[e];o.update=function(c){i.forEach(a=>{const l=a;if(c.has(l)){const p=c.get(l),d=this[l];p!==d&&(!r.waitUntilFirstUpdate||this.hasUpdated)&&this[n](p,d)}}),s.call(this,c)}}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bn=(e,t)=>e?._$litType$!==void 0;var Q=Symbol(),ut=Symbol(),xt,Dt=new Map,C=class extends P{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(e,t){var r;let o;if(t?.spriteSheet)return this.svg=w`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,this.svg;try{if(o=await fetch(e,{mode:"cors"}),!o.ok)return o.status===410?Q:ut}catch{return ut}try{const n=document.createElement("div");n.innerHTML=await o.text();const s=n.firstElementChild;if(((r=s?.tagName)==null?void 0:r.toLowerCase())!=="svg")return Q;xt||(xt=new DOMParser);const c=xt.parseFromString(s.outerHTML,"text/html").body.querySelector("svg");return c?(c.part.add("svg"),document.adoptNode(c)):Q}catch{return Q}}connectedCallback(){super.connectedCallback(),pn(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),fn(this)}getIconSource(){const e=Me(this.library);return this.name&&e?{url:e.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const{url:t,fromLibrary:r}=this.getIconSource(),o=r?Me(this.library):void 0;if(!t){this.svg=null;return}let n=Dt.get(t);if(n||(n=this.resolveIcon(t,o),Dt.set(t,n)),!this.initialRender)return;const s=await n;if(s===ut&&Dt.delete(t),t===this.getIconSource().url){if(bn(s)){if(this.svg=s,o){await this.updateComplete;const i=this.shadowRoot.querySelector("[part='svg']");typeof o.mutator=="function"&&i&&o.mutator(i)}return}switch(s){case ut:case Q:this.svg=null,this.emit("sl-error");break;default:this.svg=s.cloneNode(!0),(e=o?.mutator)==null||e.call(o,this.svg),this.emit("sl-load")}}}render(){return this.svg}};C.styles=[$t,gn];u([Et()],C.prototype,"svg",2);u([h({reflect:!0})],C.prototype,"name",2);u([h()],C.prototype,"src",2);u([h()],C.prototype,"label",2);u([h({reflect:!0})],C.prototype,"library",2);u([ue("label")],C.prototype,"handleLabelChange",1);u([ue(["name","src","library"])],C.prototype,"setIcon",1);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Er=Symbol.for(""),mn=e=>{if(e?.r===Er)return e?._$litStatic$},Be=(e,...t)=>({_$litStatic$:t.reduce((r,o,n)=>r+(s=>{if(s._$litStatic$!==void 0)return s._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${s}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(o)+e[n+1],e[0]),r:Er}),Le=new Map,vn=e=>(t,...r)=>{const o=r.length;let n,s;const i=[],c=[];let a,l=0,p=!1;for(;l<o;){for(a=t[l];l<o&&(s=r[l],(n=mn(s))!==void 0);)a+=n+t[++l],p=!0;l!==o&&c.push(s),i.push(a),l++}if(l===o&&i.push(t[o]),p){const d=i.join("$$lit$$");(t=Le.get(d))===void 0&&(i.raw=i,Le.set(d,t=i)),r=c}return e(t,...r)},Ot=vn(w);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _=e=>e??b;var f=class extends P{constructor(){super(...arguments),this.formControlController=new sn(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new pr(this,"[default]","prefix","suffix"),this.localize=new wr(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:de}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){const e=this.isLink(),t=e?Be`a`:Be`button`;return Ot`
      <${t}
        part="base"
        class=${fr({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${_(e?void 0:this.disabled)}
        type=${_(e?void 0:this.type)}
        title=${this.title}
        name=${_(e?void 0:this.name)}
        value=${_(e?void 0:this.value)}
        href=${_(e&&!this.disabled?this.href:void 0)}
        target=${_(e?this.target:void 0)}
        download=${_(e?this.download:void 0)}
        rel=${_(e?this.rel:void 0)}
        role=${_(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?Ot` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?Ot`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${t}>
    `}};f.styles=[$t,an];f.dependencies={"sl-icon":C,"sl-spinner":_r};u([Ho(".button")],f.prototype,"button",2);u([Et()],f.prototype,"hasFocus",2);u([Et()],f.prototype,"invalid",2);u([h()],f.prototype,"title",2);u([h({reflect:!0})],f.prototype,"variant",2);u([h({reflect:!0})],f.prototype,"size",2);u([h({type:Boolean,reflect:!0})],f.prototype,"caret",2);u([h({type:Boolean,reflect:!0})],f.prototype,"disabled",2);u([h({type:Boolean,reflect:!0})],f.prototype,"loading",2);u([h({type:Boolean,reflect:!0})],f.prototype,"outline",2);u([h({type:Boolean,reflect:!0})],f.prototype,"pill",2);u([h({type:Boolean,reflect:!0})],f.prototype,"circle",2);u([h()],f.prototype,"type",2);u([h()],f.prototype,"name",2);u([h()],f.prototype,"value",2);u([h()],f.prototype,"href",2);u([h()],f.prototype,"target",2);u([h()],f.prototype,"rel",2);u([h()],f.prototype,"download",2);u([h()],f.prototype,"form",2);u([h({attribute:"formaction"})],f.prototype,"formAction",2);u([h({attribute:"formenctype"})],f.prototype,"formEnctype",2);u([h({attribute:"formmethod"})],f.prototype,"formMethod",2);u([h({attribute:"formnovalidate",type:Boolean})],f.prototype,"formNoValidate",2);u([h({attribute:"formtarget"})],f.prototype,"formTarget",2);u([ue("disabled",{waitUntilFirstUpdate:!0})],f.prototype,"handleDisabledChange",1);f.define("sl-button");const yn=S`
  @media(min-width: 1000px) {
    sl-card {
      max-width: 70vw;
    }
  }

  main {
    margin-top: 34px;
    padding: 12px;
  }
`;var wn=Object.defineProperty,_n=Object.getOwnPropertyDescriptor,$r=(e,t,r,o)=>{for(var n=o>1?void 0:o?_n(t,r):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&wn(t,r,n),n};let bt=class extends T{constructor(){super(...arguments),this.message="Welcome!"}async firstUpdated(){console.log("This is your home page")}share(){navigator.share&&navigator.share({title:"PWABuilder pwa-starter",text:"Check out the PWABuilder pwa-starter!",url:"https://github.com/pwa-builder/pwa-starter"})}render(){return w`
      <app-header></app-header>

      <main>
        <div id="welcomeBar">
          <sl-card id="welcomeCard">
            <div slot="header">
              <h2>${this.message}</h2>
            </div>

            <p>
              For more information on the PWABuilder pwa-starter, check out the
              <a href="https://docs.pwabuilder.com/#/starter/quick-start">
                documentation</a>.
            </p>

            <p id="mainInfo">
              Welcome to the
              <a href="https://pwabuilder.com">PWABuilder</a>
              pwa-starter! Be sure to head back to
              <a href="https://pwabuilder.com">PWABuilder</a>
              when you are ready to ship this PWA to the Microsoft Store, Google Play
              and the Apple App Store!
            </p>

            ${"share"in navigator?w`<sl-button slot="footer" variant="default" @click="${this.share}">
                        <sl-icon slot="prefix" name="share"></sl-icon>
                        Share this Starter!
                      </sl-button>`:null}
          </sl-card>

          <sl-card id="infoCard">
            <h2>Technology Used</h2>

            <ul>
              <li>
                <a href="https://www.typescriptlang.org/">TypeScript</a>
              </li>

              <li>
                <a href="https://lit.dev">lit</a>
              </li>

              <li>
                <a href="https://shoelace.style/">Shoelace</a>
              </li>

              <li>
                <a href="https://github.com/thepassle/app-tools/blob/master/router/README.md"
                  >App Tools Router</a>
              </li>
            </ul>
          </sl-card>

          <sl-button href="${ae("about")}" variant="primary">Navigate to About</sl-button>
        </div>
      </main>
    `}};bt.styles=[yn,S`
    #welcomeBar {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    #welcomeCard,
    #infoCard {
      padding: 18px;
      padding-top: 0px;
    }

    sl-card::part(footer) {
      display: flex;
      justify-content: flex-end;
    }

    @media(min-width: 750px) {
      sl-card {
        width: 70vw;
      }
    }


    @media (horizontal-viewport-segments: 2) {
      #welcomeBar {
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
      }

      #welcomeCard {
        margin-right: 64px;
      }
    }
  `];$r([h()],bt.prototype,"message",2);bt=$r([se("app-home")],bt);var En=Object.defineProperty,$n=Object.getOwnPropertyDescriptor,he=(e,t,r,o)=>{for(var n=o>1?void 0:o?$n(t,r):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&En(t,r,n),n};let nt=class extends T{constructor(){super(...arguments),this.title="push-notifications-pwa",this.enableBack=!1}render(){return w`
      <header>

        <div id="back-button-block">
          ${this.enableBack?w`<sl-button size="small" href="${ae()}">
            Back
          </sl-button>`:null}

          <h1>${this.title}</h1>
        </div>
      </header>
    `}};nt.styles=S`
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: var(--app-color-primary);
      color: white;
      padding: 12px;
      padding-top: 4px;

      position: fixed;
      left: env(titlebar-area-x, 0);
      top: env(titlebar-area-y, 0);
      height: env(titlebar-area-height, 30px);
      width: env(titlebar-area-width, 100%);
      -webkit-app-region: drag;
    }

    header h1 {
      margin-top: 0;
      margin-bottom: 0;
      font-size: 12px;
      font-weight: bold;
    }

    nav a {
      margin-left: 10px;
    }

    #back-button-block {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 8px;
    }

    @media(prefers-color-scheme: light) {
      header {
        color: black;
      }

      nav a {
        color: initial;
      }
    }
  `;he([h({type:String})],nt.prototype,"title",2);he([h({type:Boolean})],nt.prototype,"enableBack",2);nt=he([se("app-header")],nt);const An=()=>{};var Ue={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar=function(e){const t=[];let r=0;for(let o=0;o<e.length;o++){let n=e.charCodeAt(o);n<128?t[r++]=n:n<2048?(t[r++]=n>>6|192,t[r++]=n&63|128):(n&64512)===55296&&o+1<e.length&&(e.charCodeAt(o+1)&64512)===56320?(n=65536+((n&1023)<<10)+(e.charCodeAt(++o)&1023),t[r++]=n>>18|240,t[r++]=n>>12&63|128,t[r++]=n>>6&63|128,t[r++]=n&63|128):(t[r++]=n>>12|224,t[r++]=n>>6&63|128,t[r++]=n&63|128)}return t},Sn=function(e){const t=[];let r=0,o=0;for(;r<e.length;){const n=e[r++];if(n<128)t[o++]=String.fromCharCode(n);else if(n>191&&n<224){const s=e[r++];t[o++]=String.fromCharCode((n&31)<<6|s&63)}else if(n>239&&n<365){const s=e[r++],i=e[r++],c=e[r++],a=((n&7)<<18|(s&63)<<12|(i&63)<<6|c&63)-65536;t[o++]=String.fromCharCode(55296+(a>>10)),t[o++]=String.fromCharCode(56320+(a&1023))}else{const s=e[r++],i=e[r++];t[o++]=String.fromCharCode((n&15)<<12|(s&63)<<6|i&63)}}return t.join("")},Sr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,o=[];for(let n=0;n<e.length;n+=3){const s=e[n],i=n+1<e.length,c=i?e[n+1]:0,a=n+2<e.length,l=a?e[n+2]:0,p=s>>2,d=(s&3)<<4|c>>4;let m=(c&15)<<2|l>>6,v=l&63;a||(v=64,i||(m=64)),o.push(r[p],r[d],r[m],r[v])}return o.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Ar(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Sn(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const r=t?this.charToByteMapWebSafe_:this.charToByteMap_,o=[];for(let n=0;n<e.length;){const s=r[e.charAt(n++)],c=n<e.length?r[e.charAt(n)]:0;++n;const l=n<e.length?r[e.charAt(n)]:64;++n;const d=n<e.length?r[e.charAt(n)]:64;if(++n,s==null||c==null||l==null||d==null)throw new Cn;const m=s<<2|c>>4;if(o.push(m),l!==64){const v=c<<4&240|l>>2;if(o.push(v),d!==64){const j=l<<6&192|d;o.push(j)}}}return o},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Cn extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const In=function(e){const t=Ar(e);return Sr.encodeByteArray(t,!0)},Cr=function(e){return In(e).replace(/\./g,"")},kn=function(e){try{return Sr.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xn=()=>Tn().__FIREBASE_DEFAULTS__,Dn=()=>{if(typeof process>"u"||typeof Ue>"u")return;const e=Ue.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},On=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&kn(e[1]);return t&&JSON.parse(t)},Pn=()=>{try{return An()||xn()||Dn()||On()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Ir=()=>Pn()?.config;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,r)=>{this.resolve=t,this.reject=r})}wrapCallback(t){return(r,o)=>{r?this.reject(r):this.resolve(o),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(r):t(r,o))}}}function kr(){try{return typeof indexedDB=="object"}catch{return!1}}function Tr(){return new Promise((e,t)=>{try{let r=!0;const o="validate-browser-context-for-indexeddb-analytics-module",n=self.indexedDB.open(o);n.onsuccess=()=>{n.result.close(),r||self.indexedDB.deleteDatabase(o),e(!0)},n.onupgradeneeded=()=>{r=!1},n.onerror=()=>{t(n.error?.message||"")}}catch(r){t(r)}})}function Rn(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn="FirebaseError";class G extends Error{constructor(t,r,o){super(r),this.code=t,this.customData=o,this.name=Mn,Object.setPrototypeOf(this,G.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,At.prototype.create)}}class At{constructor(t,r,o){this.service=t,this.serviceName=r,this.errors=o}create(t,...r){const o=r[0]||{},n=`${this.service}/${t}`,s=this.errors[t],i=s?Bn(s,o):"Error",c=`${this.serviceName}: ${i} (${n}).`;return new G(n,c,o)}}function Bn(e,t){return e.replace(Ln,(r,o)=>{const n=t[o];return n!=null?String(n):`<${o}?>`})}const Ln=/\{\$([^}]+)}/g;function Kt(e,t){if(e===t)return!0;const r=Object.keys(e),o=Object.keys(t);for(const n of r){if(!o.includes(n))return!1;const s=e[n],i=t[n];if(Ve(s)&&Ve(i)){if(!Kt(s,i))return!1}else if(s!==i)return!1}for(const n of o)if(!r.includes(n))return!1;return!0}function Ve(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xr(e){return e&&e._delegate?e._delegate:e}class O{constructor(t,r,o){this.name=t,this.instanceFactory=r,this.type=o,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(t,r){this.name=t,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const r=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(r)){const o=new Nn;if(this.instancesDeferred.set(r,o),this.isInitialized(r)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:r});n&&o.resolve(n)}catch{}}return this.instancesDeferred.get(r).promise}getImmediate(t){const r=this.normalizeInstanceIdentifier(t?.identifier),o=t?.optional??!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(n){if(o)return null;throw n}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Fn(t))try{this.getOrInitializeService({instanceIdentifier:R})}catch{}for(const[r,o]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(r);try{const s=this.getOrInitializeService({instanceIdentifier:n});o.resolve(s)}catch{}}}}clearInstance(t=R){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(r=>"INTERNAL"in r).map(r=>r.INTERNAL.delete()),...t.filter(r=>"_delete"in r).map(r=>r._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=R){return this.instances.has(t)}getOptions(t=R){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:r={}}=t,o=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(o))throw Error(`${this.name}(${o}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const n=this.getOrInitializeService({instanceIdentifier:o,options:r});for(const[s,i]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);o===c&&i.resolve(n)}return n}onInit(t,r){const o=this.normalizeInstanceIdentifier(r),n=this.onInitCallbacks.get(o)??new Set;n.add(t),this.onInitCallbacks.set(o,n);const s=this.instances.get(o);return s&&t(s,o),()=>{n.delete(t)}}invokeOnInitCallbacks(t,r){const o=this.onInitCallbacks.get(r);if(o)for(const n of o)try{n(t,r)}catch{}}getOrInitializeService({instanceIdentifier:t,options:r={}}){let o=this.instances.get(t);if(!o&&this.component&&(o=this.component.instanceFactory(this.container,{instanceIdentifier:Vn(t),options:r}),this.instances.set(t,o),this.instancesOptions.set(t,r),this.invokeOnInitCallbacks(o,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,o)}catch{}return o||null}normalizeInstanceIdentifier(t=R){return this.component?this.component.multipleInstances?t:R:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Vn(e){return e===R?void 0:e}function Fn(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const r=this.getProvider(t.name);if(r.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);r.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const r=new Un(t,this);return this.providers.set(t,r),r}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var g;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(g||(g={}));const zn={debug:g.DEBUG,verbose:g.VERBOSE,info:g.INFO,warn:g.WARN,error:g.ERROR,silent:g.SILENT},jn=g.INFO,Wn={[g.DEBUG]:"log",[g.VERBOSE]:"log",[g.INFO]:"info",[g.WARN]:"warn",[g.ERROR]:"error"},qn=(e,t,...r)=>{if(t<e.logLevel)return;const o=new Date().toISOString(),n=Wn[t];if(n)console[n](`[${o}]  ${e.name}:`,...r);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Kn{constructor(t){this.name=t,this._logLevel=jn,this._logHandler=qn,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in g))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?zn[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,g.DEBUG,...t),this._logHandler(this,g.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,g.VERBOSE,...t),this._logHandler(this,g.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,g.INFO,...t),this._logHandler(this,g.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,g.WARN,...t),this._logHandler(this,g.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,g.ERROR,...t),this._logHandler(this,g.ERROR,...t)}}const Gn=(e,t)=>t.some(r=>e instanceof r);let Fe,He;function Jn(){return Fe||(Fe=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Yn(){return He||(He=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Dr=new WeakMap,Gt=new WeakMap,Or=new WeakMap,Pt=new WeakMap,pe=new WeakMap;function Zn(e){const t=new Promise((r,o)=>{const n=()=>{e.removeEventListener("success",s),e.removeEventListener("error",i)},s=()=>{r($(e.result)),n()},i=()=>{o(e.error),n()};e.addEventListener("success",s),e.addEventListener("error",i)});return t.then(r=>{r instanceof IDBCursor&&Dr.set(r,e)}).catch(()=>{}),pe.set(t,e),t}function Xn(e){if(Gt.has(e))return;const t=new Promise((r,o)=>{const n=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",i),e.removeEventListener("abort",i)},s=()=>{r(),n()},i=()=>{o(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",s),e.addEventListener("error",i),e.addEventListener("abort",i)});Gt.set(e,t)}let Jt={get(e,t,r){if(e instanceof IDBTransaction){if(t==="done")return Gt.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Or.get(e);if(t==="store")return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return $(e[t])},set(e,t,r){return e[t]=r,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Qn(e){Jt=e(Jt)}function ts(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...r){const o=e.call(Nt(this),t,...r);return Or.set(o,t.sort?t.sort():[t]),$(o)}:Yn().includes(e)?function(...t){return e.apply(Nt(this),t),$(Dr.get(this))}:function(...t){return $(e.apply(Nt(this),t))}}function es(e){return typeof e=="function"?ts(e):(e instanceof IDBTransaction&&Xn(e),Gn(e,Jn())?new Proxy(e,Jt):e)}function $(e){if(e instanceof IDBRequest)return Zn(e);if(Pt.has(e))return Pt.get(e);const t=es(e);return t!==e&&(Pt.set(e,t),pe.set(t,e)),t}const Nt=e=>pe.get(e);function St(e,t,{blocked:r,upgrade:o,blocking:n,terminated:s}={}){const i=indexedDB.open(e,t),c=$(i);return o&&i.addEventListener("upgradeneeded",a=>{o($(i.result),a.oldVersion,a.newVersion,$(i.transaction),a)}),r&&i.addEventListener("blocked",a=>r(a.oldVersion,a.newVersion,a)),c.then(a=>{s&&a.addEventListener("close",()=>s()),n&&a.addEventListener("versionchange",l=>n(l.oldVersion,l.newVersion,l))}).catch(()=>{}),c}function Rt(e,{blocked:t}={}){const r=indexedDB.deleteDatabase(e);return t&&r.addEventListener("blocked",o=>t(o.oldVersion,o)),$(r).then(()=>{})}const rs=["get","getKey","getAll","getAllKeys","count"],os=["put","add","delete","clear"],Mt=new Map;function ze(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Mt.get(t))return Mt.get(t);const r=t.replace(/FromIndex$/,""),o=t!==r,n=os.includes(r);if(!(r in(o?IDBIndex:IDBObjectStore).prototype)||!(n||rs.includes(r)))return;const s=async function(i,...c){const a=this.transaction(i,n?"readwrite":"readonly");let l=a.store;return o&&(l=l.index(c.shift())),(await Promise.all([l[r](...c),n&&a.done]))[0]};return Mt.set(t,s),s}Qn(e=>({...e,get:(t,r,o)=>ze(t,r)||e.get(t,r,o),has:(t,r)=>!!ze(t,r)||e.has(t,r)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(r=>{if(ss(r)){const o=r.getImmediate();return`${o.library}/${o.version}`}else return null}).filter(r=>r).join(" ")}}function ss(e){return e.getComponent()?.type==="VERSION"}const Yt="@firebase/app",je="0.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A=new Kn("@firebase/app"),is="@firebase/app-compat",as="@firebase/analytics-compat",ls="@firebase/analytics",cs="@firebase/app-check-compat",ds="@firebase/app-check",us="@firebase/auth",hs="@firebase/auth-compat",ps="@firebase/database",fs="@firebase/data-connect",gs="@firebase/database-compat",bs="@firebase/functions",ms="@firebase/functions-compat",vs="@firebase/installations",ys="@firebase/installations-compat",ws="@firebase/messaging",_s="@firebase/messaging-compat",Es="@firebase/performance",$s="@firebase/performance-compat",As="@firebase/remote-config",Ss="@firebase/remote-config-compat",Cs="@firebase/storage",Is="@firebase/storage-compat",ks="@firebase/firestore",Ts="@firebase/ai",xs="@firebase/firestore-compat",Ds="firebase";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt="[DEFAULT]",Os={[Yt]:"fire-core",[is]:"fire-core-compat",[ls]:"fire-analytics",[as]:"fire-analytics-compat",[ds]:"fire-app-check",[cs]:"fire-app-check-compat",[us]:"fire-auth",[hs]:"fire-auth-compat",[ps]:"fire-rtdb",[fs]:"fire-data-connect",[gs]:"fire-rtdb-compat",[bs]:"fire-fn",[ms]:"fire-fn-compat",[vs]:"fire-iid",[ys]:"fire-iid-compat",[ws]:"fire-fcm",[_s]:"fire-fcm-compat",[Es]:"fire-perf",[$s]:"fire-perf-compat",[As]:"fire-rc",[Ss]:"fire-rc-compat",[Cs]:"fire-gcs",[Is]:"fire-gcs-compat",[ks]:"fire-fst",[xs]:"fire-fst-compat",[Ts]:"fire-vertex","fire-js":"fire-js",[Ds]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt=new Map,Ps=new Map,Xt=new Map;function We(e,t){try{e.container.addComponent(t)}catch(r){A.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,r)}}function F(e){const t=e.name;if(Xt.has(t))return A.debug(`There were multiple attempts to register component ${t}.`),!1;Xt.set(t,e);for(const r of mt.values())We(r,e);for(const r of Ps.values())We(r,e);return!0}function fe(e,t){const r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ns={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},x=new At("app","Firebase",Ns);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(t,r,o){this._isDeleted=!1,this._options={...t},this._config={...r},this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=o,this.container.addComponent(new O("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw x.create("app-deleted",{appName:this._name})}}function Pr(e,t={}){let r=e;typeof t!="object"&&(t={name:t});const o={name:Zt,automaticDataCollectionEnabled:!0,...t},n=o.name;if(typeof n!="string"||!n)throw x.create("bad-app-name",{appName:String(n)});if(r||(r=Ir()),!r)throw x.create("no-options");const s=mt.get(n);if(s){if(Kt(r,s.options)&&Kt(o,s.config))return s;throw x.create("duplicate-app",{appName:n})}const i=new Hn(n);for(const a of Xt.values())i.addComponent(a);const c=new Rs(r,o,i);return mt.set(n,c),c}function Ms(e=Zt){const t=mt.get(e);if(!t&&e===Zt&&Ir())return Pr();if(!t)throw x.create("no-app",{appName:e});return t}function D(e,t,r){let o=Os[e]??e;r&&(o+=`-${r}`);const n=o.match(/\s|\//),s=t.match(/\s|\//);if(n||s){const i=[`Unable to register library "${o}" with version "${t}":`];n&&i.push(`library name "${o}" contains illegal characters (whitespace or "/")`),n&&s&&i.push("and"),s&&i.push(`version name "${t}" contains illegal characters (whitespace or "/")`),A.warn(i.join(" "));return}F(new O(`${o}-version`,()=>({library:o,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bs="firebase-heartbeat-database",Ls=1,st="firebase-heartbeat-store";let Bt=null;function Nr(){return Bt||(Bt=St(Bs,Ls,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(st)}catch(r){console.warn(r)}}}}).catch(e=>{throw x.create("idb-open",{originalErrorMessage:e.message})})),Bt}async function Us(e){try{const r=(await Nr()).transaction(st),o=await r.objectStore(st).get(Rr(e));return await r.done,o}catch(t){if(t instanceof G)A.warn(t.message);else{const r=x.create("idb-get",{originalErrorMessage:t?.message});A.warn(r.message)}}}async function qe(e,t){try{const o=(await Nr()).transaction(st,"readwrite");await o.objectStore(st).put(t,Rr(e)),await o.done}catch(r){if(r instanceof G)A.warn(r.message);else{const o=x.create("idb-set",{originalErrorMessage:r?.message});A.warn(o.message)}}}function Rr(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vs=1024,Fs=30;class Hs{constructor(t){this.container=t,this._heartbeatsCache=null;const r=this.container.getProvider("app").getImmediate();this._storage=new js(r),this._heartbeatsCachePromise=this._storage.read().then(o=>(this._heartbeatsCache=o,o))}async triggerHeartbeat(){try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Ke();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(n=>n.date===o))return;if(this._heartbeatsCache.heartbeats.push({date:o,agent:r}),this._heartbeatsCache.heartbeats.length>Fs){const n=Ws(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(n,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){A.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ke(),{heartbeatsToSend:r,unsentEntries:o}=zs(this._heartbeatsCache.heartbeats),n=Cr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),n}catch(t){return A.warn(t),""}}}function Ke(){return new Date().toISOString().substring(0,10)}function zs(e,t=Vs){const r=[];let o=e.slice();for(const n of e){const s=r.find(i=>i.agent===n.agent);if(s){if(s.dates.push(n.date),Ge(r)>t){s.dates.pop();break}}else if(r.push({agent:n.agent,dates:[n.date]}),Ge(r)>t){r.pop();break}o=o.slice(1)}return{heartbeatsToSend:r,unsentEntries:o}}class js{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return kr()?Tr().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const r=await Us(this.app);return r?.heartbeats?r:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const o=await this.read();return qe(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??o.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const o=await this.read();return qe(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...t.heartbeats]})}else return}}function Ge(e){return Cr(JSON.stringify({version:2,heartbeats:e})).length}function Ws(e){if(e.length===0)return-1;let t=0,r=e[0].date;for(let o=1;o<e.length;o++)e[o].date<r&&(r=e[o].date,t=o);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qs(e){F(new O("platform-logger",t=>new ns(t),"PRIVATE")),F(new O("heartbeat",t=>new Hs(t),"PRIVATE")),D(Yt,je,e),D(Yt,je,"esm2020"),D("fire-js","")}qs("");var Ks="firebase",Gs="12.0.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */D(Ks,Gs,"app");const Mr="@firebase/installations",ge="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br=1e4,Lr=`w:${ge}`,Ur="FIS_v2",Js="https://firebaseinstallations.googleapis.com/v1",Ys=60*60*1e3,Zs="installations",Xs="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},H=new At(Zs,Xs,Qs);function Vr(e){return e instanceof G&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr({projectId:e}){return`${Js}/projects/${e}/installations`}function Hr(e){return{token:e.token,requestStatus:2,expiresIn:ei(e.expiresIn),creationTime:Date.now()}}async function zr(e,t){const o=(await t.json()).error;return H.create("request-failed",{requestName:e,serverCode:o.code,serverMessage:o.message,serverStatus:o.status})}function jr({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function ti(e,{refreshToken:t}){const r=jr(e);return r.append("Authorization",ri(t)),r}async function Wr(e){const t=await e();return t.status>=500&&t.status<600?e():t}function ei(e){return Number(e.replace("s","000"))}function ri(e){return`${Ur} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oi({appConfig:e,heartbeatServiceProvider:t},{fid:r}){const o=Fr(e),n=jr(e),s=t.getImmediate({optional:!0});if(s){const l=await s.getHeartbeatsHeader();l&&n.append("x-firebase-client",l)}const i={fid:r,authVersion:Ur,appId:e.appId,sdkVersion:Lr},c={method:"POST",headers:n,body:JSON.stringify(i)},a=await Wr(()=>fetch(o,c));if(a.ok){const l=await a.json();return{fid:l.fid||r,registrationStatus:2,refreshToken:l.refreshToken,authToken:Hr(l.authToken)}}else throw await zr("Create Installation",a)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qr(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const si=/^[cdef][\w-]{21}$/,Qt="";function ii(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const r=ai(e);return si.test(r)?r:Qt}catch{return Qt}}function ai(e){return ni(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr=new Map;function Gr(e,t){const r=Ct(e);Jr(r,t),li(r,t)}function Jr(e,t){const r=Kr.get(e);if(r)for(const o of r)o(t)}function li(e,t){const r=ci();r&&r.postMessage({key:e,fid:t}),di()}let L=null;function ci(){return!L&&"BroadcastChannel"in self&&(L=new BroadcastChannel("[Firebase] FID Change"),L.onmessage=e=>{Jr(e.data.key,e.data.fid)}),L}function di(){Kr.size===0&&L&&(L.close(),L=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ui="firebase-installations-database",hi=1,z="firebase-installations-store";let Lt=null;function be(){return Lt||(Lt=St(ui,hi,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(z)}}})),Lt}async function vt(e,t){const r=Ct(e),n=(await be()).transaction(z,"readwrite"),s=n.objectStore(z),i=await s.get(r);return await s.put(t,r),await n.done,(!i||i.fid!==t.fid)&&Gr(e,t.fid),t}async function Yr(e){const t=Ct(e),o=(await be()).transaction(z,"readwrite");await o.objectStore(z).delete(t),await o.done}async function It(e,t){const r=Ct(e),n=(await be()).transaction(z,"readwrite"),s=n.objectStore(z),i=await s.get(r),c=t(i);return c===void 0?await s.delete(r):await s.put(c,r),await n.done,c&&(!i||i.fid!==c.fid)&&Gr(e,c.fid),c}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function me(e){let t;const r=await It(e.appConfig,o=>{const n=pi(o),s=fi(e,n);return t=s.registrationPromise,s.installationEntry});return r.fid===Qt?{installationEntry:await t}:{installationEntry:r,registrationPromise:t}}function pi(e){const t=e||{fid:ii(),registrationStatus:0};return Zr(t)}function fi(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const n=Promise.reject(H.create("app-offline"));return{installationEntry:t,registrationPromise:n}}const r={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},o=gi(e,r);return{installationEntry:r,registrationPromise:o}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:bi(e)}:{installationEntry:t}}async function gi(e,t){try{const r=await oi(e,t);return vt(e.appConfig,r)}catch(r){throw Vr(r)&&r.customData.serverCode===409?await Yr(e.appConfig):await vt(e.appConfig,{fid:t.fid,registrationStatus:0}),r}}async function bi(e){let t=await Je(e.appConfig);for(;t.registrationStatus===1;)await qr(100),t=await Je(e.appConfig);if(t.registrationStatus===0){const{installationEntry:r,registrationPromise:o}=await me(e);return o||r}return t}function Je(e){return It(e,t=>{if(!t)throw H.create("installation-not-found");return Zr(t)})}function Zr(e){return mi(e)?{fid:e.fid,registrationStatus:0}:e}function mi(e){return e.registrationStatus===1&&e.registrationTime+Br<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vi({appConfig:e,heartbeatServiceProvider:t},r){const o=yi(e,r),n=ti(e,r),s=t.getImmediate({optional:!0});if(s){const l=await s.getHeartbeatsHeader();l&&n.append("x-firebase-client",l)}const i={installation:{sdkVersion:Lr,appId:e.appId}},c={method:"POST",headers:n,body:JSON.stringify(i)},a=await Wr(()=>fetch(o,c));if(a.ok){const l=await a.json();return Hr(l)}else throw await zr("Generate Auth Token",a)}function yi(e,{fid:t}){return`${Fr(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ve(e,t=!1){let r;const o=await It(e.appConfig,s=>{if(!Xr(s))throw H.create("not-registered");const i=s.authToken;if(!t&&Ei(i))return s;if(i.requestStatus===1)return r=wi(e,t),s;{if(!navigator.onLine)throw H.create("app-offline");const c=Ai(s);return r=_i(e,c),c}});return r?await r:o.authToken}async function wi(e,t){let r=await Ye(e.appConfig);for(;r.authToken.requestStatus===1;)await qr(100),r=await Ye(e.appConfig);const o=r.authToken;return o.requestStatus===0?ve(e,t):o}function Ye(e){return It(e,t=>{if(!Xr(t))throw H.create("not-registered");const r=t.authToken;return Si(r)?{...t,authToken:{requestStatus:0}}:t})}async function _i(e,t){try{const r=await vi(e,t),o={...t,authToken:r};return await vt(e.appConfig,o),r}catch(r){if(Vr(r)&&(r.customData.serverCode===401||r.customData.serverCode===404))await Yr(e.appConfig);else{const o={...t,authToken:{requestStatus:0}};await vt(e.appConfig,o)}throw r}}function Xr(e){return e!==void 0&&e.registrationStatus===2}function Ei(e){return e.requestStatus===2&&!$i(e)}function $i(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Ys}function Ai(e){const t={requestStatus:1,requestTime:Date.now()};return{...e,authToken:t}}function Si(e){return e.requestStatus===1&&e.requestTime+Br<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ci(e){const t=e,{installationEntry:r,registrationPromise:o}=await me(t);return o?o.catch(console.error):ve(t).catch(console.error),r.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ii(e,t=!1){const r=e;return await ki(r),(await ve(r,t)).token}async function ki(e){const{registrationPromise:t}=await me(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ti(e){if(!e||!e.options)throw Ut("App Configuration");if(!e.name)throw Ut("App Name");const t=["projectId","apiKey","appId"];for(const r of t)if(!e.options[r])throw Ut(r);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Ut(e){return H.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr="installations",xi="installations-internal",Di=e=>{const t=e.getProvider("app").getImmediate(),r=Ti(t),o=fe(t,"heartbeat");return{app:t,appConfig:r,heartbeatServiceProvider:o,_delete:()=>Promise.resolve()}},Oi=e=>{const t=e.getProvider("app").getImmediate(),r=fe(t,Qr).getImmediate();return{getId:()=>Ci(r),getToken:n=>Ii(r,n)}};function Pi(){F(new O(Qr,Di,"PUBLIC")),F(new O(xi,Oi,"PRIVATE"))}Pi();D(Mr,ge);D(Mr,ge,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ni="/firebase-messaging-sw.js",Ri="/firebase-cloud-messaging-push-scope",to="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",Mi="https://fcmregistrations.googleapis.com/v1",eo="google.c.a.c_id",Bi="google.c.a.c_l",Li="google.c.a.ts",Ui="google.c.a.e",Ze=1e4;var Xe;(function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Xe||(Xe={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var it;(function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"})(it||(it={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Vi(e){const t="=".repeat((4-e.length%4)%4),r=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),o=atob(r),n=new Uint8Array(o.length);for(let s=0;s<o.length;++s)n[s]=o.charCodeAt(s);return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vt="fcm_token_details_db",Fi=5,Qe="fcm_token_object_Store";async function Hi(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes(Vt))return null;let t=null;return(await St(Vt,Fi,{upgrade:async(o,n,s,i)=>{if(n<2||!o.objectStoreNames.contains(Qe))return;const c=i.objectStore(Qe),a=await c.index("fcmSenderId").get(e);if(await c.clear(),!!a){if(n===2){const l=a;if(!l.auth||!l.p256dh||!l.endpoint)return;t={token:l.fcmToken,createTime:l.createTime??Date.now(),subscriptionOptions:{auth:l.auth,p256dh:l.p256dh,endpoint:l.endpoint,swScope:l.swScope,vapidKey:typeof l.vapidKey=="string"?l.vapidKey:E(l.vapidKey)}}}else if(n===3){const l=a;t={token:l.fcmToken,createTime:l.createTime,subscriptionOptions:{auth:E(l.auth),p256dh:E(l.p256dh),endpoint:l.endpoint,swScope:l.swScope,vapidKey:E(l.vapidKey)}}}else if(n===4){const l=a;t={token:l.fcmToken,createTime:l.createTime,subscriptionOptions:{auth:E(l.auth),p256dh:E(l.p256dh),endpoint:l.endpoint,swScope:l.swScope,vapidKey:E(l.vapidKey)}}}}}})).close(),await Rt(Vt),await Rt("fcm_vapid_details_db"),await Rt("undefined"),zi(t)?t:null}function zi(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ji="firebase-messaging-database",Wi=1,at="firebase-messaging-store";let Ft=null;function ro(){return Ft||(Ft=St(ji,Wi,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(at)}}})),Ft}async function qi(e){const t=oo(e),o=await(await ro()).transaction(at).objectStore(at).get(t);if(o)return o;{const n=await Hi(e.appConfig.senderId);if(n)return await ye(e,n),n}}async function ye(e,t){const r=oo(e),n=(await ro()).transaction(at,"readwrite");return await n.objectStore(at).put(t,r),await n.done,t}function oo({appConfig:e}){return e.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ki={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},y=new At("messaging","Messaging",Ki);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gi(e,t){const r=await _e(e),o=no(t),n={method:"POST",headers:r,body:JSON.stringify(o)};let s;try{s=await(await fetch(we(e.appConfig),n)).json()}catch(i){throw y.create("token-subscribe-failed",{errorInfo:i?.toString()})}if(s.error){const i=s.error.message;throw y.create("token-subscribe-failed",{errorInfo:i})}if(!s.token)throw y.create("token-subscribe-no-token");return s.token}async function Ji(e,t){const r=await _e(e),o=no(t.subscriptionOptions),n={method:"PATCH",headers:r,body:JSON.stringify(o)};let s;try{s=await(await fetch(`${we(e.appConfig)}/${t.token}`,n)).json()}catch(i){throw y.create("token-update-failed",{errorInfo:i?.toString()})}if(s.error){const i=s.error.message;throw y.create("token-update-failed",{errorInfo:i})}if(!s.token)throw y.create("token-update-no-token");return s.token}async function Yi(e,t){const o={method:"DELETE",headers:await _e(e)};try{const s=await(await fetch(`${we(e.appConfig)}/${t}`,o)).json();if(s.error){const i=s.error.message;throw y.create("token-unsubscribe-failed",{errorInfo:i})}}catch(n){throw y.create("token-unsubscribe-failed",{errorInfo:n?.toString()})}}function we({projectId:e}){return`${Mi}/projects/${e}/registrations`}async function _e({appConfig:e,installations:t}){const r=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${r}`})}function no({p256dh:e,auth:t,endpoint:r,vapidKey:o}){const n={web:{endpoint:r,auth:t,p256dh:e}};return o!==to&&(n.web.applicationPubKey=o),n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zi=7*24*60*60*1e3;async function Xi(e){const t=await ta(e.swRegistration,e.vapidKey),r={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:E(t.getKey("auth")),p256dh:E(t.getKey("p256dh"))},o=await qi(e.firebaseDependencies);if(o){if(ea(o.subscriptionOptions,r))return Date.now()>=o.createTime+Zi?Qi(e,{token:o.token,createTime:Date.now(),subscriptionOptions:r}):o.token;try{await Yi(e.firebaseDependencies,o.token)}catch(n){console.warn(n)}return tr(e.firebaseDependencies,r)}else return tr(e.firebaseDependencies,r)}async function Qi(e,t){try{const r=await Ji(e.firebaseDependencies,t),o={...t,token:r,createTime:Date.now()};return await ye(e.firebaseDependencies,o),r}catch(r){throw r}}async function tr(e,t){const o={token:await Gi(e,t),createTime:Date.now(),subscriptionOptions:t};return await ye(e,o),o.token}async function ta(e,t){const r=await e.pushManager.getSubscription();return r||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Vi(t)})}function ea(e,t){const r=t.vapidKey===e.vapidKey,o=t.endpoint===e.endpoint,n=t.auth===e.auth,s=t.p256dh===e.p256dh;return r&&o&&n&&s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return ra(t,e),oa(t,e),na(t,e),t}function ra(e,t){if(!t.notification)return;e.notification={};const r=t.notification.title;r&&(e.notification.title=r);const o=t.notification.body;o&&(e.notification.body=o);const n=t.notification.image;n&&(e.notification.image=n);const s=t.notification.icon;s&&(e.notification.icon=s)}function oa(e,t){t.data&&(e.data=t.data)}function na(e,t){if(!t.fcmOptions&&!t.notification?.click_action)return;e.fcmOptions={};const r=t.fcmOptions?.link??t.notification?.click_action;r&&(e.fcmOptions.link=r);const o=t.fcmOptions?.analytics_label;o&&(e.fcmOptions.analyticsLabel=o)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sa(e){return typeof e=="object"&&!!e&&eo in e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ia(e){if(!e||!e.options)throw Ht("App Configuration Object");if(!e.name)throw Ht("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:r}=e;for(const o of t)if(!r[o])throw Ht(o);return{appName:e.name,projectId:r.projectId,apiKey:r.apiKey,appId:r.appId,senderId:r.messagingSenderId}}function Ht(e){return y.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(t,r,o){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const n=ia(t);this.firebaseDependencies={app:t,appConfig:n,installations:r,analyticsProvider:o}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function la(e){try{e.swRegistration=await navigator.serviceWorker.register(Ni,{scope:Ri}),e.swRegistration.update().catch(()=>{}),await ca(e.swRegistration)}catch(t){throw y.create("failed-service-worker-registration",{browserErrorMessage:t?.message})}}async function ca(e){return new Promise((t,r)=>{const o=setTimeout(()=>r(new Error(`Service worker not registered after ${Ze} ms`)),Ze),n=e.installing||e.waiting;e.active?(clearTimeout(o),t()):n?n.onstatechange=s=>{s.target?.state==="activated"&&(n.onstatechange=null,clearTimeout(o),t())}:(clearTimeout(o),r(new Error("No incoming service worker found.")))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function da(e,t){if(!t&&!e.swRegistration&&await la(e),!(!t&&e.swRegistration)){if(!(t instanceof ServiceWorkerRegistration))throw y.create("invalid-sw-registration");e.swRegistration=t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ua(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=to)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function so(e,t){if(!navigator)throw y.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw y.create("permission-blocked");return await ua(e,t?.vapidKey),await da(e,t?.serviceWorkerRegistration),Xi(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ha(e,t,r){const o=pa(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(o,{message_id:r[eo],message_name:r[Bi],message_time:r[Li],message_device_time:Math.floor(Date.now()/1e3)})}function pa(e){switch(e){case it.NOTIFICATION_CLICKED:return"notification_open";case it.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fa(e,t){const r=t.data;if(!r.isFirebaseMessaging)return;e.onMessageHandler&&r.messageType===it.PUSH_RECEIVED&&(typeof e.onMessageHandler=="function"?e.onMessageHandler(er(r)):e.onMessageHandler.next(er(r)));const o=r.data;sa(o)&&o[Ui]==="1"&&await ha(e,r.messageType,o)}const rr="@firebase/messaging",or="0.12.23";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ga=e=>{const t=new aa(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",r=>fa(t,r)),t},ba=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:o=>so(t,o)}};function ma(){F(new O("messaging",ga,"PUBLIC")),F(new O("messaging-internal",ba,"PRIVATE")),D(rr,or),D(rr,or,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function va(){try{await Tr()}catch{return!1}return typeof window<"u"&&kr()&&Rn()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ya(e=Ms()){return va().then(t=>{if(!t)throw y.create("unsupported-browser")},t=>{throw y.create("indexed-db-unsupported")}),fe(xr(e),"messaging").getImmediate()}async function wa(e,t){return e=xr(e),so(e,t)}ma();var _a=Object.defineProperty,Ea=Object.getOwnPropertyDescriptor,io=(e,t,r,o)=>{for(var n=o>1?void 0:o?Ea(t,r):t,s=e.length-1,i;s>=0;s--)(i=e[s])&&(n=(o?i(t,r,n):i(n))||n);return o&&n&&_a(t,r,n),n};const nr={apiKey:"AIzaSyB0iuZzabjCGefy9OokK6UFxOvF6jJaTAU",authDomain:"push-notifications-test-4bdb0.firebaseapp.com",projectId:"push-notifications-test-4bdb0",storageBucket:"push-notifications-test-4bdb0.firebasestorage.app",messagingSenderId:"158709240339",appId:"1:158709240339:web:e5b363e9773e5abed1e5e6",vapidKey:"BMuqicDEKYewQecSiObnuJ8cV2Gd3E8lOSzE8wrTaBtTMuR6-66N4z3abqmxJZQ84U7VcXT08PaRHjp3Gk4f00o"};let yt=class extends T{constructor(){super(...arguments),this.fcmToken=""}firstUpdated(){this.getTokenValue()}async getTokenValue(){if("serviceWorker"in navigator){const e=Pr(nr),t=ya(e),r=await navigator.serviceWorker.register("/sw.js");if(r&&await Notification.requestPermission()==="granted"){console.log("Notification permission granted.");const n=await wa(t,{vapidKey:nr.vapidKey,serviceWorkerRegistration:r});n&&(this.fcmToken=n),console.log(n,"token")}}}render(){return w` <h2>${this.fcmToken}</h2> `}};yt.styles=S`
    main {
      padding-left: 16px;
      padding-right: 16px;
      padding-bottom: 16px;
    }
  `;io([Et()],yt.prototype,"fcmToken",2);yt=io([se("app-index")],yt);
//# sourceMappingURL=index-71LzojBc.js.map
