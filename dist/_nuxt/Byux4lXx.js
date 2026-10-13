const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./-NYei-4w.js","./DRngL4hm.js","./RichTextEditor.CoV-T8AV.css","./WLySs8D1.js","./ClqQ7GCM.js","./CQN-_Dz5.js","./ULrouWdP.js","./Be1xKJUq.js","./BLQlWRe5.js","./DNu6O_T2.js","./Dr7xiIh_.js","./DCAap1pA.js","./Rx_g20Q5.js","./DQZezYkN.js","./DEMHSD3S.js","./DFIQU3A_.js","./CNKf9U6N.js","./easnLw_P.js","./CkRE13WQ.js","./DKLHhxUN.js","./DCO9CI-M.js","./DV1QmvOb.js","./BnsphjTg.js","./DrQHBhQ-.js","./Czu4pRUY.js","./D6_K27jk.js","./CLO-QPjK.js","./d3P1fMSo.js","./VqexWPal.js","./default.CIPVV4NQ.css","./DlJvgOuc.js","./-weSFSUi.js","./error-404.CoZKRZXM.css","./BUQJiE_h.js","./error-500.D6506J9O.css"])))=>i.map(i=>d[i]);
var hI=Object.defineProperty;var fI=(t,e,n)=>e in t?hI(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var mr=(t,e,n)=>fI(t,typeof e!="symbol"?e+"":e,n);/**
* @vue/shared v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function jh(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Se={},$s=[],Sn=()=>{},m_=()=>!1,jo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),xc=t=>t.startsWith("onUpdate:"),st=Object.assign,Hh=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},dI=Object.prototype.hasOwnProperty,ke=(t,e)=>dI.call(t,e),oe=Array.isArray,qs=t=>vi(t)==="[object Map]",yi=t=>vi(t)==="[object Set]",dp=t=>vi(t)==="[object Date]",pI=t=>vi(t)==="[object RegExp]",fe=t=>typeof t=="function",Me=t=>typeof t=="string",Zt=t=>typeof t=="symbol",Pe=t=>t!==null&&typeof t=="object",__=t=>(Pe(t)||fe(t))&&fe(t.then)&&fe(t.catch),y_=Object.prototype.toString,vi=t=>y_.call(t),gI=t=>vi(t).slice(8,-1),v_=t=>vi(t)==="[object Object]",Lc=t=>Me(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,rs=jh(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Mc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},mI=/-\w/g,St=Mc(t=>t.replace(mI,e=>e.slice(1).toUpperCase())),_I=/\B([A-Z])/g,lr=Mc(t=>t.replace(_I,"-$1").toLowerCase()),Uc=Mc(t=>t.charAt(0).toUpperCase()+t.slice(1)),$l=Mc(t=>t?`on${Uc(t)}`:""),It=(t,e)=>!Object.is(t,e),Ws=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},w_=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Fc=t=>{const e=parseFloat(t);return isNaN(e)?t:e},E_=t=>{const e=Me(t)?Number(t):NaN;return isNaN(e)?t:e};let pp;const Bc=()=>pp||(pp=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function jc(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Me(r)?EI(r):jc(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Me(t)||Pe(t))return t}const yI=/;(?![^(]*\))/g,vI=/:([^]+)/,wI=/\/\*[^]*?\*\//g;function EI(t){const e={};return t.replace(wI,"").split(yI).forEach(n=>{if(n){const r=n.split(vI);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Hc(t){let e="";if(Me(t))e=t;else if(oe(t))for(let n=0;n<t.length;n++){const r=Hc(t[n]);r&&(e+=r+" ")}else if(Pe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function TI(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Me(e)&&(t.class=Hc(e)),n&&(t.style=jc(n)),t}const II="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",AI=jh(II);function T_(t){return!!t||t===""}function bI(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=wi(t[r],e[r]);return n}function wi(t,e){if(t===e)return!0;let n=dp(t),r=dp(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Zt(t),r=Zt(e),n||r)return t===e;if(n=oe(t),r=oe(e),n||r)return n&&r?bI(t,e):!1;if(n=Pe(t),r=Pe(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!wi(t[o],e[o]))return!1}}return String(t)===String(e)}function $h(t,e){return t.findIndex(n=>wi(n,e))}const I_=t=>!!(t&&t.__v_isRef===!0),RI=t=>Me(t)?t:t==null?"":oe(t)||Pe(t)&&(t.toString===y_||!fe(t.toString))?I_(t)?RI(t.value):JSON.stringify(t,A_,2):String(t),A_=(t,e)=>I_(e)?A_(t,e.value):qs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[ql(r,i)+" =>"]=s,n),{})}:yi(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>ql(n))}:Zt(e)?ql(e):Pe(e)&&!oe(e)&&!v_(e)?String(e):e,ql=(t,e="")=>{var n;return Zt(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ht;class b_{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&ht&&(ht.active?(this.parent=ht,this.index=(ht.scopes||(ht.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=ht;try{return ht=this,e()}finally{ht=n}}}on(){++this._on===1&&(this.prevScope=ht,ht=this)}off(){if(this._on>0&&--this._on===0){if(ht===this)ht=this.prevScope;else{let e=ht;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function SI(t){return new b_(t)}function R_(){return ht}let Ue;const Wl=new WeakSet;class S_{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ht&&(ht.active?ht.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Wl.has(this)&&(Wl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||C_(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,gp(this),k_(this);const e=Ue,n=dn;Ue=this,dn=!0;try{return this.fn()}finally{N_(this),Ue=e,dn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Kh(e);this.deps=this.depsTail=void 0,gp(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Wl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ku(this)&&this.run()}get dirty(){return ku(this)}}let P_=0,so,io;function C_(t,e=!1){if(t.flags|=8,e){t.next=io,io=t;return}t.next=so,so=t}function qh(){P_++}function Wh(){if(--P_>0)return;if(io){let e=io;for(io=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;so;){let e=so;for(so=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function k_(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function N_(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Kh(r),PI(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function ku(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(O_(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function O_(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Eo)||(t.globalVersion=Eo,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!ku(t))))return;t.flags|=2;const e=t.dep,n=Ue,r=dn;Ue=t,dn=!0;try{k_(t);const s=t.fn(t._value);(e.version===0||It(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ue=n,dn=r,N_(t),t.flags&=-3}}function Kh(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Kh(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function PI(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let dn=!0;const D_=[];function nr(){D_.push(dn),dn=!1}function rr(){const t=D_.pop();dn=t===void 0?!0:t}function gp(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ue;Ue=void 0;try{e()}finally{Ue=n}}}let Eo=0;class CI{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class $c{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ue||!dn||Ue===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ue)n=this.activeLink=new CI(Ue,this),Ue.deps?(n.prevDep=Ue.depsTail,Ue.depsTail.nextDep=n,Ue.depsTail=n):Ue.deps=Ue.depsTail=n,V_(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ue.depsTail,n.nextDep=void 0,Ue.depsTail.nextDep=n,Ue.depsTail=n,Ue.deps===n&&(Ue.deps=r)}return n}trigger(e){this.version++,Eo++,this.notify(e)}notify(e){qh();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Wh()}}}function V_(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)V_(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const ec=new WeakMap,ss=Symbol(""),Nu=Symbol(""),To=Symbol("");function At(t,e,n){if(dn&&Ue){let r=ec.get(t);r||ec.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new $c),s.map=r,s.key=n),s.track()}}function qn(t,e,n,r,s,i){const o=ec.get(t);if(!o){Eo++;return}const a=l=>{l&&l.trigger()};if(qh(),e==="clear")o.forEach(a);else{const l=oe(t),u=l&&Lc(n);if(l&&n==="length"){const h=Number(r);o.forEach((d,g)=>{(g==="length"||g===To||!Zt(g)&&g>=h)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),u&&a(o.get(To)),e){case"add":l?u&&a(o.get("length")):(a(o.get(ss)),qs(t)&&a(o.get(Nu)));break;case"delete":l||(a(o.get(ss)),qs(t)&&a(o.get(Nu)));break;case"set":qs(t)&&a(o.get(ss));break}}Wh()}function kI(t,e){const n=ec.get(t);return n&&n.get(e)}function Os(t){const e=be(t);return e===t?e:(At(e,"iterate",To),Xt(t)?e:e.map(pn))}function qc(t){return At(t=be(t),"iterate",To),t}function An(t,e){return On(t)?ti(Nr(t)?pn(e):e):pn(e)}const NI={__proto__:null,[Symbol.iterator](){return Kl(this,Symbol.iterator,t=>An(this,t))},concat(...t){return Os(this).concat(...t.map(e=>oe(e)?Os(e):e))},entries(){return Kl(this,"entries",t=>(t[1]=An(this,t[1]),t))},every(t,e){return Un(this,"every",t,e,void 0,arguments)},filter(t,e){return Un(this,"filter",t,e,n=>n.map(r=>An(this,r)),arguments)},find(t,e){return Un(this,"find",t,e,n=>An(this,n),arguments)},findIndex(t,e){return Un(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Un(this,"findLast",t,e,n=>An(this,n),arguments)},findLastIndex(t,e){return Un(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Un(this,"forEach",t,e,void 0,arguments)},includes(...t){return Gl(this,"includes",t)},indexOf(...t){return Gl(this,"indexOf",t)},join(t){return Os(this).join(t)},lastIndexOf(...t){return Gl(this,"lastIndexOf",t)},map(t,e){return Un(this,"map",t,e,void 0,arguments)},pop(){return Hi(this,"pop")},push(...t){return Hi(this,"push",t)},reduce(t,...e){return mp(this,"reduce",t,e)},reduceRight(t,...e){return mp(this,"reduceRight",t,e)},shift(){return Hi(this,"shift")},some(t,e){return Un(this,"some",t,e,void 0,arguments)},splice(...t){return Hi(this,"splice",t)},toReversed(){return Os(this).toReversed()},toSorted(t){return Os(this).toSorted(t)},toSpliced(...t){return Os(this).toSpliced(...t)},unshift(...t){return Hi(this,"unshift",t)},values(){return Kl(this,"values",t=>An(this,t))}};function Kl(t,e,n){const r=qc(t),s=r[e]();return r!==t&&!Xt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const OI=Array.prototype;function Un(t,e,n,r,s,i){const o=qc(t),a=o!==t&&!Xt(t),l=o[e];if(l!==OI[e]){const d=l.apply(t,i);return a?pn(d):d}let u=n;o!==t&&(a?u=function(d,g){return n.call(this,An(t,d),g,t)}:n.length>2&&(u=function(d,g){return n.call(this,d,g,t)}));const h=l.call(o,u,r);return a&&s?s(h):h}function mp(t,e,n,r){const s=qc(t),i=s!==t&&!Xt(t);let o=n,a=!1;s!==t&&(i?(a=r.length===0,o=function(u,h,d){return a&&(a=!1,u=An(t,u)),n.call(this,u,An(t,h),d,t)}):n.length>3&&(o=function(u,h,d){return n.call(this,u,h,d,t)}));const l=s[e](o,...r);return a?An(t,l):l}function Gl(t,e,n){const r=be(t);At(r,"iterate",To);const s=r[e](...n);return(s===-1||s===!1)&&Wc(n[0])?(n[0]=be(n[0]),r[e](...n)):s}function Hi(t,e,n=[]){nr(),qh();const r=be(t)[e].apply(t,n);return Wh(),rr(),r}const DI=jh("__proto__,__v_isRef,__isVue"),x_=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Zt));function VI(t){Zt(t)||(t=String(t));const e=be(this);return At(e,"has",t),e.hasOwnProperty(t)}class L_{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?qI:B_:i?F_:U_).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=oe(e);if(!s){let l;if(o&&(l=NI[n]))return l;if(n==="hasOwnProperty")return VI}const a=Reflect.get(e,n,rt(e)?e:r);if((Zt(n)?x_.has(n):DI(n))||(s||At(e,"get",n),i))return a;if(rt(a)){const l=o&&Lc(n)?a:a.value;return s&&Pe(l)?Du(l):l}return Pe(a)?s?Du(a):Ur(a):a}}class M_ extends L_{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];const o=oe(e)&&Lc(n);if(!this._isShallow){const u=On(i);if(!Xt(r)&&!On(r)&&(i=be(i),r=be(r)),!o&&rt(i)&&!rt(r))return u||(i.value=r),!0}const a=o?Number(n)<e.length:ke(e,n),l=Reflect.set(e,n,r,rt(e)?e:s);return e===be(s)&&(a?It(r,i)&&qn(e,"set",n,r):qn(e,"add",n,r)),l}deleteProperty(e,n){const r=ke(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&qn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Zt(n)||!x_.has(n))&&At(e,"has",n),r}ownKeys(e){return At(e,"iterate",oe(e)?"length":ss),Reflect.ownKeys(e)}}class xI extends L_{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const LI=new M_,MI=new xI,UI=new M_(!0);const Ou=t=>t,Ta=t=>Reflect.getPrototypeOf(t);function FI(t,e,n){return function(...r){const s=this.__v_raw,i=be(s),o=qs(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),h=n?Ou:e?ti:pn;return!e&&At(i,"iterate",l?Nu:ss),st(Object.create(u),{next(){const{value:d,done:g}=u.next();return g?{value:d,done:g}:{value:a?[h(d[0]),h(d[1])]:h(d),done:g}}})}}function Ia(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function BI(t,e){const n={get(s){const i=this.__v_raw,o=be(i),a=be(s);t||(It(s,a)&&At(o,"get",s),At(o,"get",a));const{has:l}=Ta(o),u=e?Ou:t?ti:pn;if(l.call(o,s))return u(i.get(s));if(l.call(o,a))return u(i.get(a));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&At(be(s),"iterate",ss),s.size},has(s){const i=this.__v_raw,o=be(i),a=be(s);return t||(It(s,a)&&At(o,"has",s),At(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){const o=this,a=o.__v_raw,l=be(a),u=e?Ou:t?ti:pn;return!t&&At(l,"iterate",ss),a.forEach((h,d)=>s.call(i,u(h),u(d),o))}};return st(n,t?{add:Ia("add"),set:Ia("set"),delete:Ia("delete"),clear:Ia("clear")}:{add(s){const i=be(this),o=Ta(i),a=be(s),l=!e&&!Xt(s)&&!On(s)?a:s;return o.has.call(i,l)||It(s,l)&&o.has.call(i,s)||It(a,l)&&o.has.call(i,a)||(i.add(l),qn(i,"add",l,l)),this},set(s,i){!e&&!Xt(i)&&!On(i)&&(i=be(i));const o=be(this),{has:a,get:l}=Ta(o);let u=a.call(o,s);u||(s=be(s),u=a.call(o,s));const h=l.call(o,s);return o.set(s,i),u?It(i,h)&&qn(o,"set",s,i):qn(o,"add",s,i),this},delete(s){const i=be(this),{has:o,get:a}=Ta(i);let l=o.call(i,s);l||(s=be(s),l=o.call(i,s)),a&&a.call(i,s);const u=i.delete(s);return l&&qn(i,"delete",s,void 0),u},clear(){const s=be(this),i=s.size!==0,o=s.clear();return i&&qn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=FI(s,t,e)}),n}function Gh(t,e){const n=BI(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ke(n,s)&&s in r?n:r,s,i)}const jI={get:Gh(!1,!1)},HI={get:Gh(!1,!0)},$I={get:Gh(!0,!1)};const U_=new WeakMap,F_=new WeakMap,B_=new WeakMap,qI=new WeakMap;function WI(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function KI(t){return t.__v_skip||!Object.isExtensible(t)?0:WI(gI(t))}function Ur(t){return On(t)?t:zh(t,!1,LI,jI,U_)}function Kn(t){return zh(t,!1,UI,HI,F_)}function Du(t){return zh(t,!0,MI,$I,B_)}function zh(t,e,n,r,s){if(!Pe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=KI(t);if(i===0)return t;const o=s.get(t);if(o)return o;const a=new Proxy(t,i===2?r:n);return s.set(t,a),a}function Nr(t){return On(t)?Nr(t.__v_raw):!!(t&&t.__v_isReactive)}function On(t){return!!(t&&t.__v_isReadonly)}function Xt(t){return!!(t&&t.__v_isShallow)}function Wc(t){return t?!!t.__v_raw:!1}function be(t){const e=t&&t.__v_raw;return e?be(e):t}function GI(t){return!ke(t,"__v_skip")&&Object.isExtensible(t)&&w_(t,"__v_skip",!0),t}const pn=t=>Pe(t)?Ur(t):t,ti=t=>Pe(t)?Du(t):t;function rt(t){return t?t.__v_isRef===!0:!1}function Yn(t){return j_(t,!1)}function Io(t){return j_(t,!0)}function j_(t,e){return rt(t)?t:new zI(t,e)}class zI{constructor(e,n){this.dep=new $c,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:be(e),this._value=n?e:pn(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Xt(e)||On(e);e=r?e:be(e),It(e,n)&&(this._rawValue=e,this._value=r?e:pn(e),this.dep.trigger())}}function Le(t){return rt(t)?t.value:t}const QI={get:(t,e,n)=>e==="__v_raw"?t:Le(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return rt(s)&&!rt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function H_(t){return Nr(t)?t:new Proxy(t,QI)}class JI{constructor(e){this.__v_isRef=!0,this._value=void 0;const n=this.dep=new $c,{get:r,set:s}=e(n.track.bind(n),n.trigger.bind(n));this._get=r,this._set=s}get value(){return this._value=this._get()}set value(e){this._set(e)}}function YI(t){return new JI(t)}class XI{constructor(e,n,r){this._object=e,this._defaultValue=r,this.__v_isRef=!0,this._value=void 0,this._key=Zt(n)?n:String(n),this._raw=be(e);let s=!0,i=e;if(!oe(e)||Zt(this._key)||!Lc(this._key))do s=!Wc(i)||Xt(i);while(s&&(i=i.__v_raw));this._shallow=s}get value(){let e=this._object[this._key];return this._shallow&&(e=Le(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&rt(this._raw[this._key])){const n=this._object[this._key];if(rt(n)){n.value=e;return}}this._object[this._key]=e}get dep(){return kI(this._raw,this._key)}}class ZI{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function $_(t,e,n){return rt(t)?t:fe(t)?new ZI(t):Pe(t)&&arguments.length>1?eA(t,e,n):Yn(t)}function eA(t,e,n){return new XI(t,e,n)}class tA{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new $c(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Eo-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ue!==this)return C_(this,!0),!0}get value(){const e=this.dep.track();return O_(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function nA(t,e,n=!1){let r,s;return fe(t)?r=t:(r=t.get,s=t.set),new tA(r,s,n)}const Aa={},tc=new WeakMap;let Yr;function rA(t,e=!1,n=Yr){if(n){let r=tc.get(n);r||tc.set(n,r=[]),r.push(t)}}function sA(t,e,n=Se){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:l}=n,u=C=>s?C:Xt(C)||s===!1||s===0?Wn(C,1):Wn(C);let h,d,g,m,w=!1,S=!1;if(rt(t)?(d=()=>t.value,w=Xt(t)):Nr(t)?(d=()=>u(t),w=!0):oe(t)?(S=!0,w=t.some(C=>Nr(C)||Xt(C)),d=()=>t.map(C=>{if(rt(C))return C.value;if(Nr(C))return u(C);if(fe(C))return l?l(C,2):C()})):fe(t)?e?d=l?()=>l(t,2):t:d=()=>{if(g){nr();try{g()}finally{rr()}}const C=Yr;Yr=h;try{return l?l(t,3,[m]):t(m)}finally{Yr=C}}:d=Sn,e&&s){const C=d,D=s===!0?1/0:s;d=()=>Wn(C(),D)}const N=R_(),x=()=>{h.stop(),N&&N.active&&Hh(N.effects,h)};if(i&&e){const C=e;e=(...D)=>{C(...D),x()}}let O=S?new Array(t.length).fill(Aa):Aa;const T=C=>{if(!(!(h.flags&1)||!h.dirty&&!C))if(e){const D=h.run();if(s||w||(S?D.some((M,E)=>It(M,O[E])):It(D,O))){g&&g();const M=Yr;Yr=h;try{const E=[D,O===Aa?void 0:S&&O[0]===Aa?[]:O,m];O=D,l?l(e,3,E):e(...E)}finally{Yr=M}}}else h.run()};return a&&a(T),h=new S_(d),h.scheduler=o?()=>o(T,!1):T,m=C=>rA(C,!1,h),g=h.onStop=()=>{const C=tc.get(h);if(C){if(l)l(C,4);else for(const D of C)D();tc.delete(h)}},e?r?T(!0):O=h.run():o?o(T.bind(null,!0),!0):h.run(),x.pause=h.pause.bind(h),x.resume=h.resume.bind(h),x.stop=x,x}function Wn(t,e=1/0,n){if(e<=0||!Pe(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,rt(t))Wn(t.value,e,n);else if(oe(t))for(let r=0;r<t.length;r++)Wn(t[r],e,n);else if(yi(t)||qs(t))t.forEach(r=>{Wn(r,e,n)});else if(v_(t)){for(const r in t)Wn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Wn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ho(t,e,n,r){try{return r?t(...r):t()}catch(s){Ei(s,e,n)}}function gn(t,e,n,r){if(fe(t)){const s=Ho(t,e,n,r);return s&&__(s)&&s.catch(i=>{Ei(i,e,n)}),s}if(oe(t)){const s=[];for(let i=0;i<t.length;i++)s.push(gn(t[i],e,n,r));return s}}function Ei(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Se;if(e){let a=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const h=a.ec;if(h){for(let d=0;d<h.length;d++)if(h[d](t,l,u)===!1)return}a=a.parent}if(i){nr(),Ho(i,null,10,[t,l,u]),rr();return}}iA(t,n,s,r,o)}function iA(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const xt=[];let En=-1;const Ks=[];let wr=null,xs=0;const q_=Promise.resolve();let nc=null;function ys(t){const e=nc||q_;return t?e.then(this?t.bind(this):t):e}function oA(t){let e=En+1,n=xt.length;for(;e<n;){const r=e+n>>>1,s=xt[r],i=Ao(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Qh(t){if(!(t.flags&1)){const e=Ao(t),n=xt[xt.length-1];!n||!(t.flags&2)&&e>=Ao(n)?xt.push(t):xt.splice(oA(e),0,t),t.flags|=1,W_()}}function W_(){nc||(nc=q_.then(K_))}function Vu(t){oe(t)?Ks.push(...t):wr&&t.id===-1?wr.splice(xs+1,0,t):t.flags&1||(Ks.push(t),t.flags|=1),W_()}function _p(t,e,n=En+1){for(;n<xt.length;n++){const r=xt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;xt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function rc(t){if(Ks.length){const e=[...new Set(Ks)].sort((n,r)=>Ao(n)-Ao(r));if(Ks.length=0,wr){wr.push(...e);return}for(wr=e,xs=0;xs<wr.length;xs++){const n=wr[xs];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}wr=null,xs=0}}const Ao=t=>t.id==null?t.flags&2?-1:1/0:t.id;function K_(t){try{for(En=0;En<xt.length;En++){const e=xt[En];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ho(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;En<xt.length;En++){const e=xt[En];e&&(e.flags&=-2)}En=-1,xt.length=0,rc(),nc=null,(xt.length||Ks.length)&&K_()}}let gt=null,G_=null;function sc(t){const e=gt;return gt=t,G_=t&&t.type.__scopeId||null,e}function Jh(t,e=gt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&uc(-1);const i=sc(e);let o;try{o=t(...s)}finally{sc(i),r._d&&uc(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function aU(t,e){if(gt===null)return t;const n=Jc(gt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,l=Se]=e[s];i&&(fe(i)&&(i={mounted:i,updated:i}),i.deep&&Wn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Tn(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(nr(),gn(l,n,8,[t.el,a,t,e]),rr())}}function is(t,e){if(dt){let n=dt.provides;const r=dt.parent&&dt.parent.provides;r===n&&(n=dt.provides=Object.create(r)),n[t]=e}}function Lt(t,e,n=!1){const r=Ti();if(r||os){let s=os?os._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&fe(e)?e.call(r&&r.proxy):e}}function z_(){return!!(Ti()||os)}const aA=Symbol.for("v-scx"),cA=()=>Lt(aA);function cU(t,e){return Kc(t,null,e)}function lA(t,e){return Kc(t,null,{flush:"sync"})}function Gs(t,e,n){return Kc(t,e,n)}function Kc(t,e,n=Se){const{immediate:r,deep:s,flush:i,once:o}=n,a=st({},n),l=e&&r||!e&&i!=="post";let u;if(si){if(i==="sync"){const m=cA();u=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=Sn,m.resume=Sn,m.pause=Sn,m}}const h=dt;a.call=(m,w,S)=>gn(m,h,w,S);let d=!1;i==="post"?a.scheduler=m=>{et(m,h&&h.suspense)}:i!=="sync"&&(d=!0,a.scheduler=(m,w)=>{w?m():Qh(m)}),a.augmentJob=m=>{e&&(m.flags|=4),d&&(m.flags|=2,h&&(m.id=h.uid,m.i=h))};const g=sA(t,e,a);return si&&(u?u.push(g):l&&g()),g}function uA(t,e,n){const r=this.proxy,s=Me(t)?t.includes(".")?Q_(r,t):()=>r[t]:t.bind(r,r);let i;fe(e)?i=e:(i=e.handler,n=e);const o=qo(this),a=Kc(s,i.bind(r),n);return o(),a}function Q_(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const vr=new WeakMap,J_=Symbol("_vte"),Y_=t=>t.__isTeleport,Zr=t=>t&&(t.disabled||t.disabled===""),hA=t=>t&&(t.defer||t.defer===""),yp=t=>typeof SVGElement<"u"&&t instanceof SVGElement,vp=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,xu=(t,e)=>{const n=t&&t.to;return Me(n)?e?e(n):null:n},fA={name:"Teleport",__isTeleport:!0,process(t,e,n,r,s,i,o,a,l,u){const{mc:h,pc:d,pbc:g,o:{insert:m,querySelector:w,createText:S,createComment:N,parentNode:x}}=u,O=Zr(e.props);let{dynamicChildren:T}=e;const C=(E,v,_)=>{E.shapeFlag&16&&h(E.children,v,_,s,i,o,a,l)},D=(E=e)=>{const v=Zr(E.props),_=E.target=xu(E.props,w),I=Lu(_,E,S,m);_&&(o!=="svg"&&yp(_)?o="svg":o!=="mathml"&&vp(_)&&(o="mathml"),s&&s.isCE&&(s.ce._teleportTargets||(s.ce._teleportTargets=new Set)).add(_),v||(C(E,_,I),zi(E,!1)))},M=E=>{const v=()=>{if(vr.get(E)===v){if(vr.delete(E),Zr(E.props)){const _=x(E.el)||n;C(E,_,E.anchor),zi(E,!0)}D(E)}};vr.set(E,v),et(v,i)};if(t==null){const E=e.el=S(""),v=e.anchor=S("");if(m(E,n,r),m(v,n,r),hA(e.props)||i&&i.pendingBranch){M(e);return}O&&(C(e,n,v),zi(e,!0)),D()}else{e.el=t.el;const E=e.anchor=t.anchor,v=vr.get(t);if(v){v.flags|=8,vr.delete(t),M(e);return}e.targetStart=t.targetStart;const _=e.target=t.target,I=e.targetAnchor=t.targetAnchor,P=Zr(t.props),R=P?n:_,A=P?E:I;if(o==="svg"||yp(_)?o="svg":(o==="mathml"||vp(_))&&(o="mathml"),T?(g(t.dynamicChildren,T,R,s,i,o,a),nf(t,e,!0)):l||d(t,e,R,A,s,i,o,a,!1),O)P?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):ba(e,n,E,u,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const de=e.target=xu(e.props,w);de&&ba(e,de,null,u,0)}else P&&ba(e,_,I,u,1);zi(e,O)}},remove(t,e,n,{um:r,o:{remove:s}},i){const{shapeFlag:o,children:a,anchor:l,targetStart:u,targetAnchor:h,target:d,props:g}=t;let m=i||!Zr(g);const w=vr.get(t);if(w&&(w.flags|=8,vr.delete(t),m=!1),d&&(s(u),s(h)),i&&s(l),o&16)for(let S=0;S<a.length;S++){const N=a[S];r(N,e,n,m,!!N.dynamicChildren)}},move:ba,hydrate:dA};function ba(t,e,n,{o:{insert:r},m:s},i=2){i===0&&r(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:u,props:h}=t,d=i===2;if(d&&r(o,e,n),!vr.has(t)&&(!d||Zr(h))&&l&16)for(let g=0;g<u.length;g++)s(u[g],e,n,2);d&&r(a,e,n)}function dA(t,e,n,r,s,i,{o:{nextSibling:o,parentNode:a,querySelector:l,insert:u,createText:h}},d){function g(N,x){let O=x;for(;O;){if(O&&O.nodeType===8){if(O.data==="teleport start anchor")e.targetStart=O;else if(O.data==="teleport anchor"){e.targetAnchor=O,N._lpa=e.targetAnchor&&o(e.targetAnchor);break}}O=o(O)}}function m(N,x){x.anchor=d(o(N),x,a(N),n,r,s,i)}const w=e.target=xu(e.props,l),S=Zr(e.props);if(w){const N=w._lpa||w.firstChild;e.shapeFlag&16&&(S?(m(t,e),g(w,N),e.targetAnchor||Lu(w,e,h,u,a(t)===w?t:null)):(e.anchor=o(t),g(w,N),e.targetAnchor||Lu(w,e,h,u),d(N&&o(N),e,w,n,r,s,i))),zi(e,S)}else S&&e.shapeFlag&16&&(m(t,e),e.targetStart=t,e.targetAnchor=o(t));return e.anchor&&o(e.anchor)}const lU=fA;function zi(t,e){const n=t.ctx;if(n&&n.ut){let r,s;for(e?(r=t.el,s=t.anchor):(r=t.targetStart,s=t.targetAnchor);r&&r!==s;)r.nodeType===1&&r.setAttribute("data-v-owner",n.uid),r=r.nextSibling;n.ut()}}function Lu(t,e,n,r,s=null){const i=e.targetStart=n(""),o=e.targetAnchor=n("");return i[J_]=o,t&&(r(i,t,s),r(o,t,s)),o}const In=Symbol("_leaveCb"),$i=Symbol("_enterCb");function pA(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Xh(()=>{t.isMounted=!0}),Zh(()=>{t.isUnmounting=!0}),t}const nn=[Function,Array],X_={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:nn,onEnter:nn,onAfterEnter:nn,onEnterCancelled:nn,onBeforeLeave:nn,onLeave:nn,onAfterLeave:nn,onLeaveCancelled:nn,onBeforeAppear:nn,onAppear:nn,onAfterAppear:nn,onAppearCancelled:nn},Z_=t=>{const e=t.subTree;return e.component?Z_(e.component):e},gA={name:"BaseTransition",props:X_,setup(t,{slots:e}){const n=Ti(),r=pA();return()=>{const s=e.default&&ny(e.default(),!0),i=s&&s.length?ey(s):n.subTree?ub():void 0;if(!i)return;const o=be(t),{mode:a}=o;if(r.isLeaving)return zl(i);const l=wp(i);if(!l)return zl(i);let u=Mu(l,o,r,n,d=>u=d);l.type!==tt&&ni(l,u);let h=n.subTree&&wp(n.subTree);if(h&&h.type!==tt&&!fn(h,l)&&Z_(n).type!==tt){let d=Mu(h,o,r,n);if(ni(h,d),a==="out-in"&&l.type!==tt)return r.isLeaving=!0,d.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,h=void 0},zl(i);a==="in-out"&&l.type!==tt?d.delayLeave=(g,m,w)=>{const S=ty(r,h);S[String(h.key)]=h,g[In]=()=>{m(),g[In]=void 0,delete u.delayedLeave,h=void 0},u.delayedLeave=()=>{w(),delete u.delayedLeave,h=void 0}}:h=void 0}else h&&(h=void 0);return i}}};function ey(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==tt){e=n;break}}return e}const mA=gA;function ty(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Mu(t,e,n,r,s){const{appear:i,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:h,onEnterCancelled:d,onBeforeLeave:g,onLeave:m,onAfterLeave:w,onLeaveCancelled:S,onBeforeAppear:N,onAppear:x,onAfterAppear:O,onAppearCancelled:T}=e,C=String(t.key),D=ty(n,t),M=(_,I)=>{_&&gn(_,r,9,I)},E=(_,I)=>{const P=I[1];M(_,I),oe(_)?_.every(R=>R.length<=1)&&P():_.length<=1&&P()},v={mode:o,persisted:a,beforeEnter(_){let I=l;if(!n.isMounted)if(i)I=N||l;else return;_[In]&&_[In](!0);const P=D[C];P&&fn(t,P)&&P.el[In]&&P.el[In](),M(I,[_])},enter(_){if(D[C]===t)return;let I=u,P=h,R=d;if(!n.isMounted)if(i)I=x||u,P=O||h,R=T||d;else return;let A=!1;_[$i]=we=>{A||(A=!0,we?M(R,[_]):M(P,[_]),v.delayedLeave&&v.delayedLeave(),_[$i]=void 0)};const de=_[$i].bind(null,!1);I?E(I,[_,de]):de()},leave(_,I){const P=String(t.key);if(_[$i]&&_[$i](!0),n.isUnmounting)return I();M(g,[_]);let R=!1;_[In]=de=>{R||(R=!0,I(),de?M(S,[_]):M(w,[_]),_[In]=void 0,D[P]===t&&delete D[P])};const A=_[In].bind(null,!1);D[P]=t,m?E(m,[_,A]):A()},clone(_){const I=Mu(_,e,n,r,s);return s&&s(I),I}};return v}function zl(t){if($o(t))return t=sr(t),t.children=null,t}function wp(t){if(!$o(t))return Y_(t.type)&&t.children?ey(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&fe(n.default))return n.default()}}function ni(t,e){t.shapeFlag&6&&t.component?(t.transition=e,ni(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function ny(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===bt?(o.patchFlag&128&&s++,r=r.concat(ny(o.children,e,a))):(e||o.type!==tt)&&r.push(a!=null?sr(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function Fr(t,e){return fe(t)?st({name:t.name},e,{setup:t}):t}function Yh(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Ep(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const ic=new WeakMap;function zs(t,e,n,r,s=!1){if(oe(t)){t.forEach((S,N)=>zs(S,e&&(oe(e)?e[N]:e),n,r,s));return}if(Xn(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&zs(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Jc(r.component):r.el,o=s?null:i,{i:a,r:l}=t,u=e&&e.r,h=a.refs===Se?a.refs={}:a.refs,d=a.setupState,g=be(d),m=d===Se?m_:S=>Ep(h,S)?!1:ke(g,S),w=(S,N)=>!(N&&Ep(h,N));if(u!=null&&u!==l){if(Tp(e),Me(u))h[u]=null,m(u)&&(d[u]=null);else if(rt(u)){const S=e;w(u,S.k)&&(u.value=null),S.k&&(h[S.k]=null)}}if(fe(l))Ho(l,a,12,[o,h]);else{const S=Me(l),N=rt(l);if(S||N){const x=()=>{if(t.f){const O=S?m(l)?d[l]:h[l]:w()||!t.k?l.value:h[t.k];if(s)oe(O)&&Hh(O,i);else if(oe(O))O.includes(i)||O.push(i);else if(S)h[l]=[i],m(l)&&(d[l]=h[l]);else{const T=[i];w(l,t.k)&&(l.value=T),t.k&&(h[t.k]=T)}}else S?(h[l]=o,m(l)&&(d[l]=o)):N&&(w(l,t.k)&&(l.value=o),t.k&&(h[t.k]=o))};if(o){const O=()=>{x(),ic.delete(t)};O.id=-1,ic.set(t,O),et(O,n)}else Tp(t),x()}}}function Tp(t){const e=ic.get(t);e&&(e.flags|=8,ic.delete(t))}let Ip=!1;const Ds=()=>{Ip||(console.error("Hydration completed but contains mismatches."),Ip=!0)},_A=t=>t.namespaceURI.includes("svg")&&t.tagName!=="foreignObject",yA=t=>t.namespaceURI.includes("MathML"),Ra=t=>{if(t.nodeType===1){if(_A(t))return"svg";if(yA(t))return"mathml"}},Bs=t=>t.nodeType===8;function vA(t){const{mt:e,p:n,o:{patchProp:r,createText:s,nextSibling:i,parentNode:o,remove:a,insert:l,createComment:u}}=t,h=(T,C)=>{if(!C.hasChildNodes()){n(null,T,C),rc(),C._vnode=T;return}d(C.firstChild,T,null,null,null),rc(),C._vnode=T},d=(T,C,D,M,E,v=!1)=>{v=v||!!C.dynamicChildren;const _=Bs(T)&&T.data==="[",I=()=>S(T,C,D,M,E,_),{type:P,ref:R,shapeFlag:A,patchFlag:de}=C;let we=T.nodeType;C.el=T,de===-2&&(v=!1,C.dynamicChildren=null);let te=null;switch(P){case as:we!==3?C.children===""?(l(C.el=s(""),o(T),T),te=T):te=I():(T.data!==C.children&&(Ds(),T.data=C.children),te=i(T));break;case tt:O(T)?(te=i(T),x(C.el=T.content.firstChild,T,D)):we!==8||_?te=I():te=i(T);break;case ao:if(_&&(T=i(T),we=T.nodeType),we===1||we===3){te=T;const le=!C.children.length;for(let X=0;X<C.staticCount;X++)le&&(C.children+=te.nodeType===1?te.outerHTML:te.data),X===C.staticCount-1&&(C.anchor=te),te=i(te);return _?i(te):te}else I();break;case bt:_?te=w(T,C,D,M,E,v):te=I();break;default:if(A&1)(we!==1||C.type.toLowerCase()!==T.tagName.toLowerCase())&&!O(T)?te=I():te=g(T,C,D,M,E,v);else if(A&6){C.slotScopeIds=E;const le=o(T);if(_?te=N(T):Bs(T)&&T.data==="teleport start"?te=N(T,T.data,"teleport end"):te=i(T),e(C,le,null,D,M,Ra(le),v),Xn(C)&&!C.type.__asyncResolved){let X;_?(X=Ge(bt),X.anchor=te?te.previousSibling:le.lastChild):X=T.nodeType===3?Ly(""):Ge("div"),X.el=T,C.component.subTree=X}}else A&64?we!==8?te=I():te=C.type.hydrate(T,C,D,M,E,v,t,m):A&128&&(te=C.type.hydrate(T,C,D,M,Ra(o(T)),E,v,t,d))}return R!=null&&zs(R,null,M,C),te},g=(T,C,D,M,E,v)=>{v=v||!!C.dynamicChildren;const{type:_,props:I,patchFlag:P,shapeFlag:R,dirs:A,transition:de}=C,we=_==="input"||_==="option";if(we||P!==-1){A&&Tn(C,null,D,"created");let te=!1;if(O(T)){te=Ry(null,de)&&D&&D.vnode.props&&D.vnode.props.appear;const X=T.content.firstChild;if(te){const Te=X.getAttribute("class");Te&&(X.$cls=Te),de.beforeEnter(X)}x(X,T,D),C.el=T=X}if(R&16&&!(I&&(I.innerHTML||I.textContent))){let X=m(T.firstChild,C,T,D,M,E,v);for(;X;){Sa(T,1)||Ds();const Te=X;X=X.nextSibling,a(Te)}}else if(R&8){let X=C.children;X[0]===`
`&&(T.tagName==="PRE"||T.tagName==="TEXTAREA")&&(X=X.slice(1));const{textContent:Te}=T;Te!==X&&Te!==X.replace(/\r\n|\r/g,`
`)&&(Sa(T,0)||Ds(),T.textContent=C.children)}if(I){if(we||!v||P&48){const X=T.tagName.includes("-");for(const Te in I)(we&&(Te.endsWith("value")||Te==="indeterminate")||jo(Te)&&!rs(Te)||Te[0]==="."||X&&!rs(Te))&&r(T,Te,null,I[Te],void 0,D)}else if(I.onClick)r(T,"onClick",null,I.onClick,void 0,D);else if(P&4&&Nr(I.style))for(const X in I.style)I.style[X]}let le;(le=I&&I.onVnodeBeforeMount)&&jt(le,D,C),A&&Tn(C,null,D,"beforeMount"),((le=I&&I.onVnodeMounted)||A||te)&&ky(()=>{le&&jt(le,D,C),te&&de.enter(T),A&&Tn(C,null,D,"mounted")},M)}return T.nextSibling},m=(T,C,D,M,E,v,_)=>{_=_||!!C.dynamicChildren;const I=C.children,P=I.length;for(let R=0;R<P;R++){const A=_?I[R]:I[R]=Qt(I[R]),de=A.type===as;T?(de&&!_&&R+1<P&&Qt(I[R+1]).type===as&&(l(s(T.data.slice(A.children.length)),D,i(T)),T.data=A.children),T=d(T,A,M,E,v,_)):de&&!A.children?l(A.el=s(""),D):(Sa(D,1)||Ds(),n(null,A,D,null,M,E,Ra(D),v))}return T},w=(T,C,D,M,E,v)=>{const{slotScopeIds:_}=C;_&&(E=E?E.concat(_):_);const I=o(T),P=m(i(T),C,I,D,M,E,v);return P&&Bs(P)&&P.data==="]"?i(C.anchor=P):(Ds(),l(C.anchor=u("]"),I,P),P)},S=(T,C,D,M,E,v)=>{if(Sa(T.parentElement,1)||Ds(),C.el=null,v){const P=N(T);for(;;){const R=i(T);if(R&&R!==P)a(R);else break}}const _=i(T),I=o(T);return a(T),n(null,C,I,_,D,M,Ra(I),E),D&&(D.vnode.el=C.el,Qc(D,C.el)),_},N=(T,C="[",D="]")=>{let M=0;for(;T;)if(T=i(T),T&&Bs(T)&&(T.data===C&&M++,T.data===D)){if(M===0)return i(T);M--}return T},x=(T,C,D)=>{const M=C.parentNode;M&&M.replaceChild(T,C);let E=D;for(;E;)E.vnode.el===C&&(E.vnode.el=E.subTree.el=T),E=E.parent},O=T=>T.nodeType===1&&T.tagName==="TEMPLATE";return[h,d]}const Ap="data-allow-mismatch",wA={0:"text",1:"children",2:"class",3:"style",4:"attribute"};function Sa(t,e){if(e===0||e===1)for(;t&&!t.hasAttribute(Ap);)t=t.parentElement;const n=t&&t.getAttribute(Ap);if(n==null)return!1;if(n==="")return!0;{const r=n.split(",");return e===0&&r.includes("children")?!0:r.includes(wA[e])}}Bc().requestIdleCallback;Bc().cancelIdleCallback;function EA(t,e){if(Bs(t)&&t.data==="["){let n=1,r=t.nextSibling;for(;r;){if(r.nodeType===1){if(e(r)===!1)break}else if(Bs(r))if(r.data==="]"){if(--n===0)break}else r.data==="["&&n++;r=r.nextSibling}}else e(t)}const Xn=t=>!!t.type.__asyncLoader;function bp(t){fe(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:r,delay:s=200,hydrate:i,timeout:o,suspensible:a=!0,onError:l}=t;let u=null,h,d=0;const g=()=>(d++,u=null,m()),m=()=>{let w;return u||(w=u=e().catch(S=>{if(S=S instanceof Error?S:new Error(String(S)),l)return new Promise((N,x)=>{l(S,()=>N(g()),()=>x(S),d+1)});throw S}).then(S=>w!==u&&u?u:(S&&(S.__esModule||S[Symbol.toStringTag]==="Module")&&(S=S.default),h=S,S)))};return Fr({name:"AsyncComponentWrapper",__asyncLoader:m,__asyncHydrate(w,S,N){let x=!1;(S.bu||(S.bu=[])).push(()=>x=!0);const O=()=>{x||N()},T=i?()=>{const C=i(O,D=>EA(w,D));C&&(S.bum||(S.bum=[])).push(C)}:O;h?T():m().then(()=>!S.isUnmounted&&T())},get __asyncResolved(){return h},setup(){const w=dt;if(Yh(w),h)return()=>Pa(h,w);const S=T=>{u=null,Ei(T,w,13,!r)};if(a&&w.suspense||si)return m().then(T=>()=>Pa(T,w)).catch(T=>(S(T),()=>r?Ge(r,{error:T}):null));const N=Yn(!1),x=Yn(),O=Yn(!!s);return s&&setTimeout(()=>{O.value=!1},s),o!=null&&setTimeout(()=>{if(!N.value&&!x.value){const T=new Error(`Async component timed out after ${o}ms.`);S(T),x.value=T}},o),m().then(()=>{N.value=!0,w.parent&&$o(w.parent.vnode)&&w.parent.update()}).catch(T=>{S(T),x.value=T}),()=>{if(N.value&&h)return Pa(h,w);if(x.value&&r)return Ge(r,{error:x.value});if(n&&!O.value)return Pa(n,w)}}})}function Pa(t,e){const{ref:n,props:r,children:s,ce:i}=e.vnode,o=Ge(t,r,s);return o.ref=n,o.ce=i,delete e.vnode.ce,o}const $o=t=>t.type.__isKeepAlive,TA={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=Ti(),r=n.ctx;if(!r.renderer)return()=>{const O=e.default&&e.default();return O&&O.length===1?O[0]:O};const s=new Map,i=new Set;let o=null;const a=n.suspense,{renderer:{p:l,m:u,um:h,o:{createElement:d}}}=r,g=d("div");r.activate=(O,T,C,D,M)=>{const E=O.component;u(O,T,C,0,a),l(E.vnode,O,T,C,E,a,D,O.slotScopeIds,M),et(()=>{E.isDeactivated=!1,E.a&&Ws(E.a);const v=O.props&&O.props.onVnodeMounted;v&&jt(v,E.parent,O)},a)},r.deactivate=O=>{const T=O.component;cc(T.m),cc(T.a),u(O,g,null,1,a),et(()=>{T.da&&Ws(T.da);const C=O.props&&O.props.onVnodeUnmounted;C&&jt(C,T.parent,O),T.isDeactivated=!0},a)};function m(O){Ql(O),h(O,n,a,!0)}function w(O){s.forEach((T,C)=>{const D=Ku(Xn(T)?T.type.__asyncResolved||{}:T.type);D&&!O(D)&&S(C)})}function S(O){const T=s.get(O);T&&(!o||!fn(T,o))?m(T):o&&Ql(o),s.delete(O),i.delete(O)}Gs(()=>[t.include,t.exclude],([O,T])=>{O&&w(C=>Qi(O,C)),T&&w(C=>!Qi(T,C))},{flush:"post",deep:!0});let N=null;const x=()=>{N!=null&&(lc(n.subTree.type)?et(()=>{s.set(N,Ca(n.subTree))},n.subTree.suspense):s.set(N,Ca(n.subTree)))};return Xh(x),sy(x),Zh(()=>{s.forEach(O=>{const{subTree:T,suspense:C}=n,D=Ca(T);if(O.type===D.type&&O.key===D.key){Ql(D);const M=D.component.da;M&&et(M,C);return}m(O)})}),()=>{if(N=null,!e.default)return o=null;const O=e.default(),T=O[0];if(O.length>1)return o=null,O;if(!us(T)||!(T.shapeFlag&4)&&!(T.shapeFlag&128))return o=null,T;let C=Ca(T);if(C.type===tt)return o=null,C;const D=C.type,M=Ku(Xn(C)?C.type.__asyncResolved||{}:D),{include:E,exclude:v,max:_}=t;if(E&&(!M||!Qi(E,M))||v&&M&&Qi(v,M))return C.shapeFlag&=-257,o=C,T;const I=C.key==null?D:C.key,P=s.get(I);return C.el&&(C=sr(C),T.shapeFlag&128&&(T.ssContent=C)),N=I,P?(C.el=P.el,C.component=P.component,C.transition&&ni(C,C.transition),C.shapeFlag|=512,i.delete(I),i.add(I)):(i.add(I),_&&i.size>parseInt(_,10)&&S(i.values().next().value)),C.shapeFlag|=256,o=C,lc(T.type)?T:C}}},IA=TA;function Qi(t,e){return oe(t)?t.some(n=>Qi(n,e)):Me(t)?t.split(",").includes(e):pI(t)?(t.lastIndex=0,t.test(e)):!1}function AA(t,e){ry(t,"a",e)}function bA(t,e){ry(t,"da",e)}function ry(t,e,n=dt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Gc(e,r,n),n){let s=n.parent;for(;s&&s.parent;)$o(s.parent.vnode)&&RA(r,e,n,s),s=s.parent}}function RA(t,e,n,r){const s=Gc(e,t,r,!0);iy(()=>{Hh(r[e],s)},n)}function Ql(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function Ca(t){return t.shapeFlag&128?t.ssContent:t}function Gc(t,e,n=dt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{nr();const a=qo(n),l=gn(e,n,t,o);return a(),rr(),l});return r?s.unshift(i):s.push(i),i}}const ur=t=>(e,n=dt)=>{(!si||t==="sp")&&Gc(t,(...r)=>e(...r),n)},SA=ur("bm"),Xh=ur("m"),PA=ur("bu"),sy=ur("u"),Zh=ur("bum"),iy=ur("um"),CA=ur("sp"),kA=ur("rtg"),NA=ur("rtc");function oy(t,e=dt){Gc("ec",t,e)}const ay="components";function uU(t,e){return ly(ay,t,!0,e)||t}const cy=Symbol.for("v-ndc");function OA(t){return Me(t)?ly(ay,t,!1)||t:t||cy}function ly(t,e,n=!0,r=!1){const s=gt||dt;if(s){const i=s.type;{const a=Ku(i,!1);if(a&&(a===e||a===St(e)||a===Uc(St(e))))return i}const o=Rp(s[t]||i[t],e)||Rp(s.appContext[t],e);return!o&&r?i:o}}function Rp(t,e){return t&&(t[e]||t[St(e)]||t[Uc(St(e))])}function hU(t,e,n,r){let s;const i=n,o=oe(t);if(o||Me(t)){const a=o&&Nr(t);let l=!1,u=!1;a&&(l=!Xt(t),u=On(t),t=qc(t)),s=new Array(t.length);for(let h=0,d=t.length;h<d;h++)s[h]=e(l?u?ti(pn(t[h])):pn(t[h]):t[h],h,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,i)}else if(Pe(t))if(t[Symbol.iterator])s=Array.from(t,(a,l)=>e(a,l,void 0,i));else{const a=Object.keys(t);s=new Array(a.length);for(let l=0,u=a.length;l<u;l++){const h=a[l];s[l]=e(t[h],h,l,i)}}else s=[];return s}function fU(t,e,n={},r,s){if(gt.ce||gt.parent&&Xn(gt.parent)&&gt.parent.ce){const u=Object.keys(n).length>0;return sn(),bn(bt,null,[Ge("slot",n,r)],u?-2:64)}let i=t[e];i&&i._c&&(i._d=!1),sn();const o=i&&uy(i(n)),a=n.key||o&&o.key,l=bn(bt,{key:(a&&!Zt(a)?a:`_${e}`)+(!o&&r?"_fb":"")},o||[],o&&t._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),i&&i._c&&(i._d=!0),l}function uy(t){return t.some(e=>us(e)?!(e.type===tt||e.type===bt&&!uy(e.children)):!0)?t:null}const Uu=t=>t?Uy(t)?Jc(t):Uu(t.parent):null,oo=st(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Uu(t.parent),$root:t=>Uu(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>fy(t),$forceUpdate:t=>t.f||(t.f=()=>{Qh(t.update)}),$nextTick:t=>t.n||(t.n=ys.bind(t.proxy)),$watch:t=>uA.bind(t)}),Jl=(t,e)=>t!==Se&&!t.__isScriptSetup&&ke(t,e),DA={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=t;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Jl(r,e))return o[e]=1,r[e];if(s!==Se&&ke(s,e))return o[e]=2,s[e];if(ke(i,e))return o[e]=3,i[e];if(n!==Se&&ke(n,e))return o[e]=4,n[e];Fu&&(o[e]=0)}}const u=oo[e];let h,d;if(u)return e==="$attrs"&&At(t.attrs,"get",""),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Se&&ke(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,ke(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Jl(s,e)?(s[e]=n,!0):r!==Se&&ke(r,e)?(r[e]=n,!0):ke(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,props:i,type:o}},a){let l;return!!(n[a]||t!==Se&&a[0]!=="$"&&ke(t,a)||Jl(e,a)||ke(i,a)||ke(r,a)||ke(oo,a)||ke(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ke(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function oc(t){return oe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}function dU(t,e){return!t||!e?t||e:oe(t)&&oe(e)?t.concat(e):st({},oc(t),oc(e))}let Fu=!0;function VA(t){const e=fy(t),n=t.proxy,r=t.ctx;Fu=!1,e.beforeCreate&&Sp(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:u,created:h,beforeMount:d,mounted:g,beforeUpdate:m,updated:w,activated:S,deactivated:N,beforeDestroy:x,beforeUnmount:O,destroyed:T,unmounted:C,render:D,renderTracked:M,renderTriggered:E,errorCaptured:v,serverPrefetch:_,expose:I,inheritAttrs:P,components:R,directives:A,filters:de}=e;if(u&&xA(u,r,null),o)for(const le in o){const X=o[le];fe(X)&&(r[le]=X.bind(n))}if(s){const le=s.call(n,n);Pe(le)&&(t.data=Ur(le))}if(Fu=!0,i)for(const le in i){const X=i[le],Te=fe(X)?X.bind(n,n):fe(X.get)?X.get.bind(n,n):Sn,ln=!fe(X)&&fe(X.set)?X.set.bind(n):Sn,en=Ht({get:Te,set:ln});Object.defineProperty(r,le,{enumerable:!0,configurable:!0,get:()=>en.value,set:je=>en.value=je})}if(a)for(const le in a)hy(a[le],r,n,le);if(l){const le=fe(l)?l.call(n):l;Reflect.ownKeys(le).forEach(X=>{is(X,le[X])})}h&&Sp(h,t,"c");function te(le,X){oe(X)?X.forEach(Te=>le(Te.bind(n))):X&&le(X.bind(n))}if(te(SA,d),te(Xh,g),te(PA,m),te(sy,w),te(AA,S),te(bA,N),te(oy,v),te(NA,M),te(kA,E),te(Zh,O),te(iy,C),te(CA,_),oe(I))if(I.length){const le=t.exposed||(t.exposed={});I.forEach(X=>{Object.defineProperty(le,X,{get:()=>n[X],set:Te=>n[X]=Te,enumerable:!0})})}else t.exposed||(t.exposed={});D&&t.render===Sn&&(t.render=D),P!=null&&(t.inheritAttrs=P),R&&(t.components=R),A&&(t.directives=A),_&&Yh(t)}function xA(t,e,n=Sn){oe(t)&&(t=Bu(t));for(const r in t){const s=t[r];let i;Pe(s)?"default"in s?i=Lt(s.from||r,s.default,!0):i=Lt(s.from||r):i=Lt(s),rt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Sp(t,e,n){gn(oe(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function hy(t,e,n,r){let s=r.includes(".")?Q_(n,r):()=>n[r];if(Me(t)){const i=e[t];fe(i)&&Gs(s,i)}else if(fe(t))Gs(s,t.bind(n));else if(Pe(t))if(oe(t))t.forEach(i=>hy(i,e,n,r));else{const i=fe(t.handler)?t.handler.bind(n):e[t.handler];fe(i)&&Gs(s,i,t)}}function fy(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>ac(l,u,o,!0)),ac(l,e,o)),Pe(e)&&i.set(e,l),l}function ac(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&ac(t,i,n,!0),s&&s.forEach(o=>ac(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=LA[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const LA={data:Pp,props:Cp,emits:Cp,methods:Ji,computed:Ji,beforeCreate:Dt,created:Dt,beforeMount:Dt,mounted:Dt,beforeUpdate:Dt,updated:Dt,beforeDestroy:Dt,beforeUnmount:Dt,destroyed:Dt,unmounted:Dt,activated:Dt,deactivated:Dt,errorCaptured:Dt,serverPrefetch:Dt,components:Ji,directives:Ji,watch:UA,provide:Pp,inject:MA};function Pp(t,e){return e?t?function(){return st(fe(t)?t.call(this,this):t,fe(e)?e.call(this,this):e)}:e:t}function MA(t,e){return Ji(Bu(t),Bu(e))}function Bu(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Dt(t,e){return t?[...new Set([].concat(t,e))]:e}function Ji(t,e){return t?st(Object.create(null),t,e):e}function Cp(t,e){return t?oe(t)&&oe(e)?[...new Set([...t,...e])]:st(Object.create(null),oc(t),oc(e??{})):e}function UA(t,e){if(!t)return e;if(!e)return t;const n=st(Object.create(null),t);for(const r in e)n[r]=Dt(t[r],e[r]);return n}function dy(){return{app:null,config:{isNativeTag:m_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let FA=0;function BA(t,e){return function(r,s=null){fe(r)||(r=st({},r)),s!=null&&!Pe(s)&&(s=null);const i=dy(),o=new WeakSet,a=[];let l=!1;const u=i.app={_uid:FA++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:By,get config(){return i.config},set config(h){},use(h,...d){return o.has(h)||(h&&fe(h.install)?(o.add(h),h.install(u,...d)):fe(h)&&(o.add(h),h(u,...d))),u},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),u},component(h,d){return d?(i.components[h]=d,u):i.components[h]},directive(h,d){return d?(i.directives[h]=d,u):i.directives[h]},mount(h,d,g){if(!l){const m=u._ceVNode||Ge(r,s);return m.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),d&&e?e(m,h):t(m,h,g),l=!0,u._container=h,h.__vue_app__=u,Jc(m.component)}},onUnmount(h){a.push(h)},unmount(){l&&(gn(a,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(h,d){return i.provides[h]=d,u},runWithContext(h){const d=os;os=u;try{return h()}finally{os=d}}};return u}}let os=null;function pU(t,e,n=Se){const r=Ti(),s=St(e),i=lr(e),o=py(t,s),a=YI((l,u)=>{let h,d=Se,g;return lA(()=>{const m=t[s];It(h,m)&&(h=m,u())}),{get(){return l(),n.get?n.get(h):h},set(m){const w=n.set?n.set(m):m;if(!It(w,h)&&!(d!==Se&&It(m,d)))return;const S=r.vnode.props;S&&(e in S||s in S||i in S)&&(`onUpdate:${e}`in S||`onUpdate:${s}`in S||`onUpdate:${i}`in S)||(h=m,u()),r.emit(`update:${e}`,w),It(m,w)&&It(m,d)&&!It(w,g)&&u(),d=m,g=w}}});return a[Symbol.iterator]=()=>{let l=0;return{next(){return l<2?{value:l++?o||Se:a,done:!1}:{done:!0}}}},a}const py=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${St(e)}Modifiers`]||t[`${lr(e)}Modifiers`];function jA(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Se;let s=n;const i=e.startsWith("update:"),o=i&&py(r,e.slice(7));o&&(o.trim&&(s=n.map(h=>Me(h)?h.trim():h)),o.number&&(s=n.map(Fc)));let a,l=r[a=$l(e)]||r[a=$l(St(e))];!l&&i&&(l=r[a=$l(lr(e))]),l&&gn(l,t,6,s);const u=r[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,gn(u,t,6,s)}}const HA=new WeakMap;function gy(t,e,n=!1){const r=n?HA:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!fe(t)){const l=u=>{const h=gy(u,e,!0);h&&(a=!0,st(o,h))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(Pe(t)&&r.set(t,null),null):(oe(i)?i.forEach(l=>o[l]=null):st(o,i),Pe(t)&&r.set(t,o),o)}function zc(t,e){return!t||!jo(e)?!1:(e=e.slice(2).replace(/Once$/,""),ke(t,e[0].toLowerCase()+e.slice(1))||ke(t,lr(e))||ke(t,e))}function Yl(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:l,render:u,renderCache:h,props:d,data:g,setupState:m,ctx:w,inheritAttrs:S}=t,N=sc(t);let x,O;try{if(n.shapeFlag&4){const C=s||r,D=C;x=Qt(u.call(D,C,h,d,m,g,w)),O=a}else{const C=e;x=Qt(C.length>1?C(d,{attrs:a,slots:o,emit:l}):C(d,null)),O=e.props?a:qA(a)}}catch(C){co.length=0,Ei(C,t,1),x=Ge(tt)}let T=x;if(O&&S!==!1){const C=Object.keys(O),{shapeFlag:D}=T;C.length&&D&7&&(i&&C.some(xc)&&(O=WA(O,i)),T=sr(T,O,!1,!0))}return n.dirs&&(T=sr(T,null,!1,!0),T.dirs=T.dirs?T.dirs.concat(n.dirs):n.dirs),n.transition&&ni(T,n.transition),x=T,sc(N),x}function $A(t,e=!0){let n;for(let r=0;r<t.length;r++){const s=t[r];if(us(s)){if(s.type!==tt||s.children==="v-if"){if(n)return;n=s}}else return}return n}const qA=t=>{let e;for(const n in t)(n==="class"||n==="style"||jo(n))&&((e||(e={}))[n]=t[n]);return e},WA=(t,e)=>{const n={};for(const r in t)(!xc(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function KA(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?kp(r,o,u):!!o;if(l&8){const h=e.dynamicProps;for(let d=0;d<h.length;d++){const g=h[d];if(my(o,r,g)&&!zc(u,g))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?kp(r,o,u):!0:!!o;return!1}function kp(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(my(e,t,i)&&!zc(n,i))return!0}return!1}function my(t,e,n){const r=t[n],s=e[n];return n==="style"&&Pe(r)&&Pe(s)?!wi(r,s):r!==s}function Qc({vnode:t,parent:e,suspense:n},r){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.suspense.vnode.el=s.el=r,t=s),s===t)(t=e.vnode).el=r,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=r)}const _y={},yy=()=>Object.create(_y),vy=t=>Object.getPrototypeOf(t)===_y;function GA(t,e,n,r=!1){const s={},i=yy();t.propsDefaults=Object.create(null),wy(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Kn(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function zA(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=be(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let d=0;d<h.length;d++){let g=h[d];if(zc(t.emitsOptions,g))continue;const m=e[g];if(l)if(ke(i,g))m!==i[g]&&(i[g]=m,u=!0);else{const w=St(g);s[w]=ju(l,a,w,m,t,!1)}else m!==i[g]&&(i[g]=m,u=!0)}}}else{wy(t,e,s,i)&&(u=!0);let h;for(const d in a)(!e||!ke(e,d)&&((h=lr(d))===d||!ke(e,h)))&&(l?n&&(n[d]!==void 0||n[h]!==void 0)&&(s[d]=ju(l,a,d,void 0,t,!0)):delete s[d]);if(i!==a)for(const d in i)(!e||!ke(e,d))&&(delete i[d],u=!0)}u&&qn(t.attrs,"set","")}function wy(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(rs(l))continue;const u=e[l];let h;s&&ke(s,h=St(l))?!i||!i.includes(h)?n[h]=u:(a||(a={}))[h]=u:zc(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=be(n),u=a||Se;for(let h=0;h<i.length;h++){const d=i[h];n[d]=ju(s,l,d,u[d],t,!ke(u,d))}}return o}function ju(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=ke(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&fe(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const h=qo(s);r=u[n]=l.call(null,e),h()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===lr(n))&&(r=!0))}return r}const QA=new WeakMap;function Ey(t,e,n=!1){const r=n?QA:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let l=!1;if(!fe(t)){const h=d=>{l=!0;const[g,m]=Ey(d,e,!0);st(o,g),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!i&&!l)return Pe(t)&&r.set(t,$s),$s;if(oe(i))for(let h=0;h<i.length;h++){const d=St(i[h]);Np(d)&&(o[d]=Se)}else if(i)for(const h in i){const d=St(h);if(Np(d)){const g=i[h],m=o[d]=oe(g)||fe(g)?{type:g}:st({},g),w=m.type;let S=!1,N=!0;if(oe(w))for(let x=0;x<w.length;++x){const O=w[x],T=fe(O)&&O.name;if(T==="Boolean"){S=!0;break}else T==="String"&&(N=!1)}else S=fe(w)&&w.name==="Boolean";m[0]=S,m[1]=N,(S||ke(m,"default"))&&a.push(d)}}const u=[o,a];return Pe(t)&&r.set(t,u),u}function Np(t){return t[0]!=="$"&&!rs(t)}const ef=t=>t==="_"||t==="_ctx"||t==="$stable",tf=t=>oe(t)?t.map(Qt):[Qt(t)],JA=(t,e,n)=>{if(e._n)return e;const r=Jh((...s)=>tf(e(...s)),n);return r._c=!1,r},Ty=(t,e,n)=>{const r=t._ctx;for(const s in t){if(ef(s))continue;const i=t[s];if(fe(i))e[s]=JA(s,i,r);else if(i!=null){const o=tf(i);e[s]=()=>o}}},Iy=(t,e)=>{const n=tf(e);t.slots.default=()=>n},Ay=(t,e,n)=>{for(const r in e)(n||!ef(r))&&(t[r]=e[r])},YA=(t,e,n)=>{const r=t.slots=yy();if(t.vnode.shapeFlag&32){const s=e._;s?(Ay(r,e,n),n&&w_(r,"_",s,!0)):Ty(e,r)}else e&&Iy(t,e)},XA=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Se;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:Ay(s,e,n):(i=!e.$stable,Ty(e,s)),o=e}else e&&(Iy(t,e),o={default:1});if(i)for(const a in s)!ef(a)&&o[a]==null&&delete s[a]},et=ky;function ZA(t){return by(t)}function eb(t){return by(t,vA)}function by(t,e){const n=Bc();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:u,setElementText:h,parentNode:d,nextSibling:g,setScopeId:m=Sn,insertStaticContent:w}=t,S=(b,k,L,H=null,F=null,$=null,Q=void 0,G=null,K=!!k.dynamicChildren)=>{if(b===k)return;b&&!fn(b,k)&&(H=B(b),je(b,F,$,!0),b=null),k.patchFlag===-2&&(K=!1,k.dynamicChildren=null);const{type:q,ref:ae,shapeFlag:Y}=k;switch(q){case as:N(b,k,L,H);break;case tt:x(b,k,L,H);break;case ao:b==null&&O(k,L,H,Q);break;case bt:R(b,k,L,H,F,$,Q,G,K);break;default:Y&1?D(b,k,L,H,F,$,Q,G,K):Y&6?A(b,k,L,H,F,$,Q,G,K):(Y&64||Y&128)&&q.process(b,k,L,H,F,$,Q,G,K,se)}ae!=null&&F?zs(ae,b&&b.ref,$,k||b,!k):ae==null&&b&&b.ref!=null&&zs(b.ref,null,$,b,!0)},N=(b,k,L,H)=>{if(b==null)r(k.el=a(k.children),L,H);else{const F=k.el=b.el;k.children!==b.children&&u(F,k.children)}},x=(b,k,L,H)=>{b==null?r(k.el=l(k.children||""),L,H):k.el=b.el},O=(b,k,L,H)=>{[b.el,b.anchor]=w(b.children,k,L,H,b.el,b.anchor)},T=({el:b,anchor:k},L,H)=>{let F;for(;b&&b!==k;)F=g(b),r(b,L,H),b=F;r(k,L,H)},C=({el:b,anchor:k})=>{let L;for(;b&&b!==k;)L=g(b),s(b),b=L;s(k)},D=(b,k,L,H,F,$,Q,G,K)=>{if(k.type==="svg"?Q="svg":k.type==="math"&&(Q="mathml"),b==null)M(k,L,H,F,$,Q,G,K);else{const q=b.el&&b.el._isVueCE?b.el:null;try{q&&q._beginPatch(),_(b,k,F,$,Q,G,K)}finally{q&&q._endPatch()}}},M=(b,k,L,H,F,$,Q,G)=>{let K,q;const{props:ae,shapeFlag:Y,transition:ie,dirs:ne}=b;if(K=b.el=o(b.type,$,ae&&ae.is,ae),Y&8?h(K,b.children):Y&16&&v(b.children,K,null,H,F,Xl(b,$),Q,G),ne&&Tn(b,null,H,"created"),E(K,b,b.scopeId,Q,H),ae){for(const Ie in ae)Ie!=="value"&&!rs(Ie)&&i(K,Ie,null,ae[Ie],$,H);"value"in ae&&i(K,"value",null,ae.value,$),(q=ae.onVnodeBeforeMount)&&jt(q,H,b)}ne&&Tn(b,null,H,"beforeMount");const ue=Ry(F,ie);ue&&ie.beforeEnter(K),r(K,k,L),((q=ae&&ae.onVnodeMounted)||ue||ne)&&et(()=>{try{q&&jt(q,H,b),ue&&ie.enter(K),ne&&Tn(b,null,H,"mounted")}finally{}},F)},E=(b,k,L,H,F)=>{if(L&&m(b,L),H)for(let $=0;$<H.length;$++)m(b,H[$]);if(F){let $=F.subTree;if(k===$||lc($.type)&&($.ssContent===k||$.ssFallback===k)){const Q=F.vnode;E(b,Q,Q.scopeId,Q.slotScopeIds,F.parent)}}},v=(b,k,L,H,F,$,Q,G,K=0)=>{for(let q=K;q<b.length;q++){const ae=b[q]=G?$n(b[q]):Qt(b[q]);S(null,ae,k,L,H,F,$,Q,G)}},_=(b,k,L,H,F,$,Q)=>{const G=k.el=b.el;let{patchFlag:K,dynamicChildren:q,dirs:ae}=k;K|=b.patchFlag&16;const Y=b.props||Se,ie=k.props||Se;let ne;if(L&&Gr(L,!1),(ne=ie.onVnodeBeforeUpdate)&&jt(ne,L,k,b),ae&&Tn(k,b,L,"beforeUpdate"),L&&Gr(L,!0),(Y.innerHTML&&ie.innerHTML==null||Y.textContent&&ie.textContent==null)&&h(G,""),q?I(b.dynamicChildren,q,G,L,H,Xl(k,F),$):Q||X(b,k,G,null,L,H,Xl(k,F),$,!1),K>0){if(K&16)P(G,Y,ie,L,F);else if(K&2&&Y.class!==ie.class&&i(G,"class",null,ie.class,F),K&4&&i(G,"style",Y.style,ie.style,F),K&8){const ue=k.dynamicProps;for(let Ie=0;Ie<ue.length;Ie++){const Ne=ue[Ie],$e=Y[Ne],Ye=ie[Ne];(Ye!==$e||Ne==="value")&&i(G,Ne,$e,Ye,F,L)}}K&1&&b.children!==k.children&&h(G,k.children)}else!Q&&q==null&&P(G,Y,ie,L,F);((ne=ie.onVnodeUpdated)||ae)&&et(()=>{ne&&jt(ne,L,k,b),ae&&Tn(k,b,L,"updated")},H)},I=(b,k,L,H,F,$,Q)=>{for(let G=0;G<k.length;G++){const K=b[G],q=k[G],ae=K.el&&(K.type===bt||!fn(K,q)||K.shapeFlag&198)?d(K.el):L;S(K,q,ae,null,H,F,$,Q,!0)}},P=(b,k,L,H,F)=>{if(k!==L){if(k!==Se)for(const $ in k)!rs($)&&!($ in L)&&i(b,$,k[$],null,F,H);for(const $ in L){if(rs($))continue;const Q=L[$],G=k[$];Q!==G&&$!=="value"&&i(b,$,G,Q,F,H)}"value"in L&&i(b,"value",k.value,L.value,F)}},R=(b,k,L,H,F,$,Q,G,K)=>{const q=k.el=b?b.el:a(""),ae=k.anchor=b?b.anchor:a("");let{patchFlag:Y,dynamicChildren:ie,slotScopeIds:ne}=k;ne&&(G=G?G.concat(ne):ne),b==null?(r(q,L,H),r(ae,L,H),v(k.children||[],L,ae,F,$,Q,G,K)):Y>0&&Y&64&&ie&&b.dynamicChildren&&b.dynamicChildren.length===ie.length?(I(b.dynamicChildren,ie,L,F,$,Q,G),(k.key!=null||F&&k===F.subTree)&&nf(b,k,!0)):X(b,k,L,ae,F,$,Q,G,K)},A=(b,k,L,H,F,$,Q,G,K)=>{k.slotScopeIds=G,b==null?k.shapeFlag&512?F.ctx.activate(k,L,H,Q,K):de(k,L,H,F,$,Q,K):we(b,k,K)},de=(b,k,L,H,F,$,Q)=>{const G=b.component=db(b,H,F);if($o(b)&&(G.ctx.renderer=se),pb(G,!1,Q),G.asyncDep){if(F&&F.registerDep(G,te,Q),!b.el){const K=G.subTree=Ge(tt);x(null,K,k,L),b.placeholder=K.el}}else te(G,b,k,L,F,$,Q)},we=(b,k,L)=>{const H=k.component=b.component;if(KA(b,k,L))if(H.asyncDep&&!H.asyncResolved){le(H,k,L);return}else H.next=k,H.update();else k.el=b.el,H.vnode=k},te=(b,k,L,H,F,$,Q)=>{const G=()=>{if(b.isMounted){let{next:Y,bu:ie,u:ne,parent:ue,vnode:Ie}=b;{const yt=Sy(b);if(yt){Y&&(Y.el=Ie.el,le(b,Y,Q)),yt.asyncDep.then(()=>{et(()=>{b.isUnmounted||q()},F)});return}}let Ne=Y,$e;Gr(b,!1),Y?(Y.el=Ie.el,le(b,Y,Q)):Y=Ie,ie&&Ws(ie),($e=Y.props&&Y.props.onVnodeBeforeUpdate)&&jt($e,ue,Y,Ie),Gr(b,!0);const Ye=Yl(b),lt=b.subTree;b.subTree=Ye,S(lt,Ye,d(lt.el),B(lt),b,F,$),Y.el=Ye.el,Ne===null&&Qc(b,Ye.el),ne&&et(ne,F),($e=Y.props&&Y.props.onVnodeUpdated)&&et(()=>jt($e,ue,Y,Ie),F)}else{let Y;const{el:ie,props:ne}=k,{bm:ue,m:Ie,parent:Ne,root:$e,type:Ye}=b,lt=Xn(k);if(Gr(b,!1),ue&&Ws(ue),!lt&&(Y=ne&&ne.onVnodeBeforeMount)&&jt(Y,Ne,k),Gr(b,!0),ie&&Ve){const yt=()=>{b.subTree=Yl(b),Ve(ie,b.subTree,b,F,null)};lt&&Ye.__asyncHydrate?Ye.__asyncHydrate(ie,b,yt):yt()}else{$e.ce&&$e.ce._hasShadowRoot()&&$e.ce._injectChildStyle(Ye,b.parent?b.parent.type:void 0);const yt=b.subTree=Yl(b);S(null,yt,L,H,b,F,$),k.el=yt.el}if(Ie&&et(Ie,F),!lt&&(Y=ne&&ne.onVnodeMounted)){const yt=k;et(()=>jt(Y,Ne,yt),F)}(k.shapeFlag&256||Ne&&Xn(Ne.vnode)&&Ne.vnode.shapeFlag&256)&&b.a&&et(b.a,F),b.isMounted=!0,k=L=H=null}};b.scope.on();const K=b.effect=new S_(G);b.scope.off();const q=b.update=K.run.bind(K),ae=b.job=K.runIfDirty.bind(K);ae.i=b,ae.id=b.uid,K.scheduler=()=>Qh(ae),Gr(b,!0),q()},le=(b,k,L)=>{k.component=b;const H=b.vnode.props;b.vnode=k,b.next=null,zA(b,k.props,H,L),XA(b,k.children,L),nr(),_p(b),rr()},X=(b,k,L,H,F,$,Q,G,K=!1)=>{const q=b&&b.children,ae=b?b.shapeFlag:0,Y=k.children,{patchFlag:ie,shapeFlag:ne}=k;if(ie>0){if(ie&128){ln(q,Y,L,H,F,$,Q,G,K);return}else if(ie&256){Te(q,Y,L,H,F,$,Q,G,K);return}}ne&8?(ae&16&&Bt(q,F,$),Y!==q&&h(L,Y)):ae&16?ne&16?ln(q,Y,L,H,F,$,Q,G,K):Bt(q,F,$,!0):(ae&8&&h(L,""),ne&16&&v(Y,L,H,F,$,Q,G,K))},Te=(b,k,L,H,F,$,Q,G,K)=>{b=b||$s,k=k||$s;const q=b.length,ae=k.length,Y=Math.min(q,ae);let ie;for(ie=0;ie<Y;ie++){const ne=k[ie]=K?$n(k[ie]):Qt(k[ie]);S(b[ie],ne,L,null,F,$,Q,G,K)}q>ae?Bt(b,F,$,!0,!1,Y):v(k,L,H,F,$,Q,G,K,Y)},ln=(b,k,L,H,F,$,Q,G,K)=>{let q=0;const ae=k.length;let Y=b.length-1,ie=ae-1;for(;q<=Y&&q<=ie;){const ne=b[q],ue=k[q]=K?$n(k[q]):Qt(k[q]);if(fn(ne,ue))S(ne,ue,L,null,F,$,Q,G,K);else break;q++}for(;q<=Y&&q<=ie;){const ne=b[Y],ue=k[ie]=K?$n(k[ie]):Qt(k[ie]);if(fn(ne,ue))S(ne,ue,L,null,F,$,Q,G,K);else break;Y--,ie--}if(q>Y){if(q<=ie){const ne=ie+1,ue=ne<ae?k[ne].el:H;for(;q<=ie;)S(null,k[q]=K?$n(k[q]):Qt(k[q]),L,ue,F,$,Q,G,K),q++}}else if(q>ie)for(;q<=Y;)je(b[q],F,$,!0),q++;else{const ne=q,ue=q,Ie=new Map;for(q=ue;q<=ie;q++){const kt=k[q]=K?$n(k[q]):Qt(k[q]);kt.key!=null&&Ie.set(kt.key,q)}let Ne,$e=0;const Ye=ie-ue+1;let lt=!1,yt=0;const fr=new Array(Ye);for(q=0;q<Ye;q++)fr[q]=0;for(q=ne;q<=Y;q++){const kt=b[q];if($e>=Ye){je(kt,F,$,!0);continue}let tn;if(kt.key!=null)tn=Ie.get(kt.key);else for(Ne=ue;Ne<=ie;Ne++)if(fr[Ne-ue]===0&&fn(kt,k[Ne])){tn=Ne;break}tn===void 0?je(kt,F,$,!0):(fr[tn-ue]=q+1,tn>=yt?yt=tn:lt=!0,S(kt,k[tn],L,null,F,$,Q,G,K),$e++)}const Rs=lt?tb(fr):$s;for(Ne=Rs.length-1,q=Ye-1;q>=0;q--){const kt=ue+q,tn=k[kt],Ss=k[kt+1],Ci=kt+1<ae?Ss.el||Py(Ss):H;fr[q]===0?S(null,tn,L,Ci,F,$,Q,G,K):lt&&(Ne<0||q!==Rs[Ne]?en(tn,L,Ci,2):Ne--)}}},en=(b,k,L,H,F=null)=>{const{el:$,type:Q,transition:G,children:K,shapeFlag:q}=b;if(q&6){en(b.component.subTree,k,L,H);return}if(q&128){b.suspense.move(k,L,H);return}if(q&64){Q.move(b,k,L,se);return}if(Q===bt){r($,k,L);for(let Y=0;Y<K.length;Y++)en(K[Y],k,L,H);r(b.anchor,k,L);return}if(Q===ao){T(b,k,L);return}if(H!==2&&q&1&&G)if(H===0)G.beforeEnter($),r($,k,L),et(()=>G.enter($),F);else{const{leave:Y,delayLeave:ie,afterLeave:ne}=G,ue=()=>{b.ctx.isUnmounted?s($):r($,k,L)},Ie=()=>{$._isLeaving&&$[In](!0),Y($,()=>{ue(),ne&&ne()})};ie?ie($,ue,Ie):Ie()}else r($,k,L)},je=(b,k,L,H=!1,F=!1)=>{const{type:$,props:Q,ref:G,children:K,dynamicChildren:q,shapeFlag:ae,patchFlag:Y,dirs:ie,cacheIndex:ne,memo:ue}=b;if(Y===-2&&(F=!1),G!=null&&(nr(),zs(G,null,L,b,!0),rr()),ne!=null&&(k.renderCache[ne]=void 0),ae&256){k.ctx.deactivate(b);return}const Ie=ae&1&&ie,Ne=!Xn(b);let $e;if(Ne&&($e=Q&&Q.onVnodeBeforeUnmount)&&jt($e,k,b),ae&6)Gt(b.component,L,H);else{if(ae&128){b.suspense.unmount(L,H);return}Ie&&Tn(b,null,k,"beforeUnmount"),ae&64?b.type.remove(b,k,L,se,H):q&&!q.hasOnce&&($!==bt||Y>0&&Y&64)?Bt(q,k,L,!1,!0):($===bt&&Y&384||!F&&ae&16)&&Bt(K,k,L),H&&He(b)}const Ye=ue!=null&&ne==null;(Ne&&($e=Q&&Q.onVnodeUnmounted)||Ie||Ye)&&et(()=>{$e&&jt($e,k,b),Ie&&Tn(b,null,k,"unmounted"),Ye&&(b.el=null)},L)},He=b=>{const{type:k,el:L,anchor:H,transition:F}=b;if(k===bt){hr(L,H);return}if(k===ao){C(b);return}const $=()=>{s(L),F&&!F.persisted&&F.afterLeave&&F.afterLeave()};if(b.shapeFlag&1&&F&&!F.persisted){const{leave:Q,delayLeave:G}=F,K=()=>Q(L,$);G?G(b.el,$,K):K()}else $()},hr=(b,k)=>{let L;for(;b!==k;)L=g(b),s(b),b=L;s(k)},Gt=(b,k,L)=>{const{bum:H,scope:F,job:$,subTree:Q,um:G,m:K,a:q}=b;cc(K),cc(q),H&&Ws(H),F.stop(),$&&($.flags|=8,je(Q,b,k,L)),G&&et(G,k),et(()=>{b.isUnmounted=!0},k)},Bt=(b,k,L,H=!1,F=!1,$=0)=>{for(let Q=$;Q<b.length;Q++)je(b[Q],k,L,H,F)},B=b=>{if(b.shapeFlag&6)return B(b.component.subTree);if(b.shapeFlag&128)return b.suspense.next();const k=g(b.anchor||b.el),L=k&&k[J_];return L?g(L):k};let ee=!1;const J=(b,k,L)=>{let H;b==null?k._vnode&&(je(k._vnode,null,null,!0),H=k._vnode.component):S(k._vnode||null,b,k,null,null,null,L),k._vnode=b,ee||(ee=!0,_p(H),rc(),ee=!1)},se={p:S,um:je,m:en,r:He,mt:de,mc:v,pc:X,pbc:I,n:B,o:t};let _e,Ve;return e&&([_e,Ve]=e(se)),{render:J,hydrate:_e,createApp:BA(J,_e)}}function Xl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Gr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Ry(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function nf(t,e,n=!1){const r=t.children,s=e.children;if(oe(r)&&oe(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=$n(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&nf(o,a)),a.type===as&&(a.patchFlag===-1&&(a=s[i]=$n(a)),a.el=o.el),a.type===tt&&!a.el&&(a.el=o.el)}}function tb(t){const e=t.slice(),n=[0];let r,s,i,o,a;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Sy(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Sy(e)}function cc(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function Py(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?Py(e.subTree):null}const lc=t=>t.__isSuspense;let Hu=0;const nb={name:"Suspense",__isSuspense:!0,process(t,e,n,r,s,i,o,a,l,u){if(t==null)rb(e,n,r,s,i,o,a,l,u);else{if(i&&i.deps>0&&!t.suspense.isInFallback){e.suspense=t.suspense,e.suspense.vnode=e,e.el=t.el;return}sb(t,e,n,r,s,o,a,l,u)}},hydrate:ib,normalize:ob},rf=nb;function bo(t,e){const n=t.props&&t.props[e];fe(n)&&n()}function rb(t,e,n,r,s,i,o,a,l){const{p:u,o:{createElement:h}}=l,d=h("div"),g=t.suspense=Cy(t,s,r,e,d,n,i,o,a,l);u(null,g.pendingBranch=t.ssContent,d,null,r,g,i,o),g.deps>0?(bo(t,"onPending"),bo(t,"onFallback"),u(null,t.ssFallback,e,n,r,null,i,o),Qs(g,t.ssFallback)):g.resolve(!1,!0)}function sb(t,e,n,r,s,i,o,a,{p:l,um:u,o:{createElement:h}}){const d=e.suspense=t.suspense;d.vnode=e,e.el=t.el;const g=e.ssContent,m=e.ssFallback,{activeBranch:w,pendingBranch:S,isInFallback:N,isHydrating:x}=d;if(S)d.pendingBranch=g,fn(S,g)?(l(S,g,d.hiddenContainer,null,s,d,i,o,a),d.deps<=0?d.resolve():N&&(x||(l(w,m,n,r,s,null,i,o,a),Qs(d,m)))):(d.pendingId=Hu++,x?(d.isHydrating=!1,d.activeBranch=S):u(S,s,d),d.deps=0,d.effects.length=0,d.hiddenContainer=h("div"),N?(l(null,g,d.hiddenContainer,null,s,d,i,o,a),d.deps<=0?d.resolve():(l(w,m,n,r,s,null,i,o,a),Qs(d,m))):w&&fn(w,g)?(l(w,g,n,r,s,d,i,o,a),d.resolve(!0)):(l(null,g,d.hiddenContainer,null,s,d,i,o,a),d.deps<=0&&d.resolve()));else if(w&&fn(w,g))l(w,g,n,r,s,d,i,o,a),Qs(d,g);else if(bo(e,"onPending"),d.pendingBranch=g,g.shapeFlag&512?d.pendingId=g.component.suspenseId:d.pendingId=Hu++,l(null,g,d.hiddenContainer,null,s,d,i,o,a),d.deps<=0)d.resolve();else{const{timeout:O,pendingId:T}=d;O>0?setTimeout(()=>{d.pendingId===T&&d.fallback(m)},O):O===0&&d.fallback(m)}}function Cy(t,e,n,r,s,i,o,a,l,u,h=!1){const{p:d,m:g,um:m,n:w,o:{parentNode:S,remove:N}}=u;let x;const O=ab(t);O&&e&&e.pendingBranch&&(x=e.pendingId,e.deps++);const T=t.props?E_(t.props.timeout):void 0,C=i,D={vnode:t,parent:e,parentComponent:n,namespace:o,container:r,hiddenContainer:s,deps:0,pendingId:Hu++,timeout:typeof T=="number"?T:-1,activeBranch:null,isFallbackMountPending:!1,pendingBranch:null,isInFallback:!h,isHydrating:h,isUnmounted:!1,effects:[],resolve(M=!1,E=!1){const{vnode:v,activeBranch:_,pendingBranch:I,pendingId:P,effects:R,parentComponent:A,container:de,isInFallback:we}=D;let te=!1;if(D.isHydrating)D.isHydrating=!1;else if(!M){te=_&&I.transition&&I.transition.mode==="out-in";let Te=!1;te&&(_.transition.afterLeave=()=>{P===D.pendingId&&(g(I,de,i===C&&!Te?w(_):i,0),Vu(R),we&&v.ssFallback&&(v.ssFallback.el=null))}),_&&!D.isFallbackMountPending&&(S(_.el)===de&&(i=w(_),Te=!0),m(_,A,D,!0),!te&&we&&v.ssFallback&&et(()=>v.ssFallback.el=null,D)),te||g(I,de,i,0)}D.isFallbackMountPending=!1,Qs(D,I),D.pendingBranch=null,D.isInFallback=!1;let le=D.parent,X=!1;for(;le;){if(le.pendingBranch){le.effects.push(...R),X=!0;break}le=le.parent}!X&&!te&&Vu(R),D.effects=[],O&&e&&e.pendingBranch&&x===e.pendingId&&(e.deps--,e.deps===0&&!E&&e.resolve()),bo(v,"onResolve")},fallback(M){if(!D.pendingBranch)return;const{vnode:E,activeBranch:v,parentComponent:_,container:I,namespace:P}=D;bo(E,"onFallback");const R=w(v),A=()=>{D.isFallbackMountPending=!1,D.isInFallback&&(d(null,M,I,R,_,null,P,a,l),Qs(D,M))},de=M.transition&&M.transition.mode==="out-in";de&&(D.isFallbackMountPending=!0,v.transition.afterLeave=A),D.isInFallback=!0,m(v,_,null,!0),de||A()},move(M,E,v){D.activeBranch&&g(D.activeBranch,M,E,v),D.container=M},next(){return D.activeBranch&&w(D.activeBranch)},registerDep(M,E,v){const _=!!D.pendingBranch;_&&D.deps++;const I=M.vnode.el;M.asyncDep.catch(P=>{Ei(P,M,0)}).then(P=>{if(M.isUnmounted||D.isUnmounted||D.pendingId!==M.suspenseId)return;qu(),M.asyncResolved=!0;const{vnode:R}=M;Wu(M,P),I&&(R.el=I);const A=!I&&M.subTree.el;E(M,R,S(I||M.subTree.el),I?null:w(M.subTree),D,o,v),A&&(R.placeholder=null,N(A)),Qc(M,R.el),_&&--D.deps===0&&D.resolve()})},unmount(M,E){D.isUnmounted=!0,D.activeBranch&&m(D.activeBranch,n,M,E),D.pendingBranch&&m(D.pendingBranch,n,M,E)}};return D}function ib(t,e,n,r,s,i,o,a,l){const u=e.suspense=Cy(e,r,n,t.parentNode,document.createElement("div"),null,s,i,o,a,!0),h=l(t,u.pendingBranch=e.ssContent,n,u,i,o);return u.deps===0&&u.resolve(!1,!0),h}function ob(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=Op(r?n.default:n),t.ssFallback=r?Op(n.fallback):Ge(tt)}function Op(t){let e;if(fe(t)){const n=ri&&t._c;n&&(t._d=!1,sn()),t=t(),n&&(t._d=!0,e=qt,Ny())}return oe(t)&&(t=$A(t)),t=Qt(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function ky(t,e){e&&e.pendingBranch?oe(t)?e.effects.push(...t):e.effects.push(t):Vu(t)}function Qs(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t;let s=e.el;for(;!s&&e.component;)e=e.component.subTree,s=e.el;n.el=s,r&&r.subTree===n&&(r.vnode.el=s,Qc(r,s))}function ab(t){const e=t.props&&t.props.suspensible;return e!=null&&e!==!1}const bt=Symbol.for("v-fgt"),as=Symbol.for("v-txt"),tt=Symbol.for("v-cmt"),ao=Symbol.for("v-stc"),co=[];let qt=null;function sn(t=!1){co.push(qt=t?null:[])}function Ny(){co.pop(),qt=co[co.length-1]||null}let ri=1;function uc(t,e=!1){ri+=t,t<0&&qt&&e&&(qt.hasOnce=!0)}function Oy(t){return t.dynamicChildren=ri>0?qt||$s:null,Ny(),ri>0&&qt&&qt.push(t),t}function cb(t,e,n,r,s,i){return Oy(Vy(t,e,n,r,s,i,!0))}function bn(t,e,n,r,s){return Oy(Ge(t,e,n,r,s,!0))}function us(t){return t?t.__v_isVNode===!0:!1}function fn(t,e){return t.type===e.type&&t.key===e.key}const Dy=({key:t})=>t??null,ja=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Me(t)||rt(t)||fe(t)?{i:gt,r:t,k:e,f:!!n}:t:null);function Vy(t,e=null,n=null,r=0,s=null,i=t===bt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Dy(e),ref:e&&ja(e),scopeId:G_,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:gt};return a?(sf(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Me(n)?8:16),ri>0&&!o&&qt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&qt.push(l),l}const Ge=lb;function lb(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===cy)&&(t=tt),us(t)){const a=sr(t,e,!0);return n&&sf(a,n),ri>0&&!i&&qt&&(a.shapeFlag&6?qt[qt.indexOf(t)]=a:qt.push(a)),a.patchFlag=-2,a}if(yb(t)&&(t=t.__vccOpts),e){e=xy(e);let{class:a,style:l}=e;a&&!Me(a)&&(e.class=Hc(a)),Pe(l)&&(Wc(l)&&!oe(l)&&(l=st({},l)),e.style=jc(l))}const o=Me(t)?1:lc(t)?128:Y_(t)?64:Pe(t)?4:fe(t)?2:0;return Vy(t,e,n,r,s,o,i,!0)}function xy(t){return t?Wc(t)||vy(t)?st({},t):t:null}function sr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:l}=t,u=e?My(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Dy(u),ref:e&&e.ref?n&&i?oe(i)?i.concat(ja(e)):[i,ja(e)]:ja(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==bt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&sr(t.ssContent),ssFallback:t.ssFallback&&sr(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&ni(h,l.clone(h)),h}function Ly(t=" ",e=0){return Ge(as,null,t,e)}function gU(t,e){const n=Ge(ao,null,t);return n.staticCount=e,n}function ub(t="",e=!1){return e?(sn(),bn(tt,null,t)):Ge(tt,null,t)}function Qt(t){return t==null||typeof t=="boolean"?Ge(tt):oe(t)?Ge(bt,null,t.slice()):us(t)?$n(t):Ge(as,null,String(t))}function $n(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:sr(t)}function sf(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(oe(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),sf(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!vy(e)?e._ctx=gt:s===3&&gt&&(gt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else fe(e)?(e={default:e,_ctx:gt},n=32):(e=String(e),r&64?(n=16,e=[Ly(e)]):n=8);t.children=e,t.shapeFlag|=n}function My(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Hc([e.class,r.class]));else if(s==="style")e.style=jc([e.style,r.style]);else if(jo(s)){const i=e[s],o=r[s];o&&i!==o&&!(oe(i)&&i.includes(o))?e[s]=i?[].concat(i,o):o:o==null&&i==null&&!xc(s)&&(e[s]=o)}else s!==""&&(e[s]=r[s])}return e}function jt(t,e,n,r=null){gn(t,e,7,[n,r])}const hb=dy();let fb=0;function db(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||hb,i={uid:fb++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new b_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ey(r,s),emitsOptions:gy(r,s),emit:null,emitted:null,propsDefaults:Se,inheritAttrs:r.inheritAttrs,ctx:Se,data:Se,props:Se,attrs:Se,slots:Se,refs:Se,setupState:Se,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=jA.bind(null,i),t.ce&&t.ce(i),i}let dt=null;const Ti=()=>dt||gt;let hc,$u;{const t=Bc(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};hc=e("__VUE_INSTANCE_SETTERS__",n=>dt=n),$u=e("__VUE_SSR_SETTERS__",n=>si=n)}const qo=t=>{const e=dt;return hc(t),t.scope.on(),()=>{t.scope.off(),hc(e)}},qu=()=>{dt&&dt.scope.off(),hc(null)};function Uy(t){return t.vnode.shapeFlag&4}let si=!1;function pb(t,e=!1,n=!1){e&&$u(e);const{props:r,children:s}=t.vnode,i=Uy(t);GA(t,r,i,e),YA(t,s,n||e);const o=i?gb(t,e):void 0;return e&&$u(!1),o}function gb(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,DA);const{setup:r}=n;if(r){nr();const s=t.setupContext=r.length>1?_b(t):null,i=qo(t),o=Ho(r,t,0,[t.props,s]),a=__(o);if(rr(),i(),(a||t.sp)&&!Xn(t)&&Yh(t),a){if(o.then(qu,qu),e)return o.then(l=>{Wu(t,l)}).catch(l=>{Ei(l,t,0)});t.asyncDep=o}else Wu(t,o)}else Fy(t)}function Wu(t,e,n){fe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Pe(e)&&(t.setupState=H_(e)),Fy(t)}function Fy(t,e,n){const r=t.type;t.render||(t.render=r.render||Sn);{const s=qo(t);nr();try{VA(t)}finally{rr(),s()}}}const mb={get(t,e){return At(t,"get",""),t[e]}};function _b(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,mb),slots:t.slots,emit:t.emit,expose:e}}function Jc(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(H_(GI(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in oo)return oo[n](t)},has(e,n){return n in e||n in oo}})):t.proxy}function Ku(t,e=!0){return fe(t)?t.displayName||t.name:t.name||e&&t.__name}function yb(t){return fe(t)&&"__vccOpts"in t}const Ht=(t,e)=>nA(t,e,si);function Wt(t,e,n){try{uc(-1);const r=arguments.length;return r===2?Pe(e)&&!oe(e)?us(e)?Ge(t,null,[e]):Ge(t,e):Ge(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&us(n)&&(n=[n]),Ge(t,e,n))}finally{uc(1)}}const By="3.5.34";/**
* @vue/runtime-dom v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Gu;const Dp=typeof window<"u"&&window.trustedTypes;if(Dp)try{Gu=Dp.createPolicy("vue",{createHTML:t=>t})}catch{}const jy=Gu?t=>Gu.createHTML(t):t=>t,vb="http://www.w3.org/2000/svg",wb="http://www.w3.org/1998/Math/MathML",jn=typeof document<"u"?document:null,Vp=jn&&jn.createElement("template"),Eb={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?jn.createElementNS(vb,t):e==="mathml"?jn.createElementNS(wb,t):n?jn.createElement(t,{is:n}):jn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>jn.createTextNode(t),createComment:t=>jn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>jn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Vp.innerHTML=jy(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const a=Vp.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},_r="transition",qi="animation",Ro=Symbol("_vtc"),Hy={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Tb=st({},X_,Hy),Ib=t=>(t.displayName="Transition",t.props=Tb,t),$y=Ib((t,{slots:e})=>Wt(mA,Ab(t),e)),zr=(t,e=[])=>{oe(t)?t.forEach(n=>n(...e)):t&&t(...e)},xp=t=>t?oe(t)?t.some(e=>e.length>1):t.length>1:!1;function Ab(t){const e={};for(const R in t)R in Hy||(e[R]=t[R]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:u=o,appearToClass:h=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:g=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=t,w=bb(s),S=w&&w[0],N=w&&w[1],{onBeforeEnter:x,onEnter:O,onEnterCancelled:T,onLeave:C,onLeaveCancelled:D,onBeforeAppear:M=x,onAppear:E=O,onAppearCancelled:v=T}=e,_=(R,A,de,we)=>{R._enterCancelled=we,Qr(R,A?h:a),Qr(R,A?u:o),de&&de()},I=(R,A)=>{R._isLeaving=!1,Qr(R,d),Qr(R,m),Qr(R,g),A&&A()},P=R=>(A,de)=>{const we=R?E:O,te=()=>_(A,R,de);zr(we,[A,te]),Lp(()=>{Qr(A,R?l:i),Fn(A,R?h:a),xp(we)||Mp(A,r,S,te)})};return st(e,{onBeforeEnter(R){zr(x,[R]),Fn(R,i),Fn(R,o)},onBeforeAppear(R){zr(M,[R]),Fn(R,l),Fn(R,u)},onEnter:P(!1),onAppear:P(!0),onLeave(R,A){R._isLeaving=!0;const de=()=>I(R,A);Fn(R,d),R._enterCancelled?(Fn(R,g),Bp(R)):(Bp(R),Fn(R,g)),Lp(()=>{R._isLeaving&&(Qr(R,d),Fn(R,m),xp(C)||Mp(R,r,N,de))}),zr(C,[R,de])},onEnterCancelled(R){_(R,!1,void 0,!0),zr(T,[R])},onAppearCancelled(R){_(R,!0,void 0,!0),zr(v,[R])},onLeaveCancelled(R){I(R),zr(D,[R])}})}function bb(t){if(t==null)return null;if(Pe(t))return[Zl(t.enter),Zl(t.leave)];{const e=Zl(t);return[e,e]}}function Zl(t){return E_(t)}function Fn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Ro]||(t[Ro]=new Set)).add(e)}function Qr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Ro];n&&(n.delete(e),n.size||(t[Ro]=void 0))}function Lp(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Rb=0;function Mp(t,e,n,r){const s=t._endId=++Rb,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:a,propCount:l}=Sb(t,e);if(!o)return r();const u=o+"end";let h=0;const d=()=>{t.removeEventListener(u,g),i()},g=m=>{m.target===t&&++h>=l&&d()};setTimeout(()=>{h<l&&d()},a+1),t.addEventListener(u,g)}function Sb(t,e){const n=window.getComputedStyle(t),r=w=>(n[w]||"").split(", "),s=r(`${_r}Delay`),i=r(`${_r}Duration`),o=Up(s,i),a=r(`${qi}Delay`),l=r(`${qi}Duration`),u=Up(a,l);let h=null,d=0,g=0;e===_r?o>0&&(h=_r,d=o,g=i.length):e===qi?u>0&&(h=qi,d=u,g=l.length):(d=Math.max(o,u),h=d>0?o>u?_r:qi:null,g=h?h===_r?i.length:l.length:0);const m=h===_r&&/\b(?:transform|all)(?:,|$)/.test(r(`${_r}Property`).toString());return{type:h,timeout:d,propCount:g,hasTransform:m}}function Up(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Fp(n)+Fp(t[r])))}function Fp(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Bp(t){return(t?t.ownerDocument:document).body.offsetHeight}function Pb(t,e,n){const r=t[Ro];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const jp=Symbol("_vod"),Cb=Symbol("_vsh"),kb=Symbol(""),Nb=/(?:^|;)\s*display\s*:/;function Ob(t,e,n){const r=t.style,s=Me(n);let i=!1;if(n&&!s){if(e)if(Me(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Yi(r,a,"")}else for(const o in e)n[o]==null&&Yi(r,o,"");for(const o in n){o==="display"&&(i=!0);const a=n[o];a!=null?Vb(t,o,!Me(e)&&e?e[o]:void 0,a)||Yi(r,o,a):Yi(r,o,"")}}else if(s){if(e!==n){const o=r[kb];o&&(n+=";"+o),r.cssText=n,i=Nb.test(n)}}else e&&t.removeAttribute("style");jp in t&&(t[jp]=i?r.display:"",t[Cb]&&(r.display="none"))}const Hp=/\s*!important$/;function Yi(t,e,n){if(oe(n))n.forEach(r=>Yi(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Db(t,e);Hp.test(n)?t.setProperty(lr(r),n.replace(Hp,""),"important"):t[r]=n}}const $p=["Webkit","Moz","ms"],eu={};function Db(t,e){const n=eu[e];if(n)return n;let r=St(e);if(r!=="filter"&&r in t)return eu[e]=r;r=Uc(r);for(let s=0;s<$p.length;s++){const i=$p[s]+r;if(i in t)return eu[e]=i}return e}function Vb(t,e,n,r){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Me(r)&&n===r}const qp="http://www.w3.org/1999/xlink";function Wp(t,e,n,r,s,i=AI(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(qp,e.slice(6,e.length)):t.setAttributeNS(qp,e,n):n==null||i&&!T_(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Zt(n)?String(n):n)}function Kp(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?jy(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=T_(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Ir(t,e,n,r){t.addEventListener(e,n,r)}function xb(t,e,n,r){t.removeEventListener(e,n,r)}const Gp=Symbol("_vei");function Lb(t,e,n,r,s=null){const i=t[Gp]||(t[Gp]={}),o=i[e];if(r&&o)o.value=r;else{const[a,l]=Mb(e);if(r){const u=i[e]=Bb(r,s);Ir(t,a,u,l)}else o&&(xb(t,a,o,l),i[e]=void 0)}}const zp=/(?:Once|Passive|Capture)$/;function Mb(t){let e;if(zp.test(t)){e={};let r;for(;r=t.match(zp);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):lr(t.slice(2)),e]}let tu=0;const Ub=Promise.resolve(),Fb=()=>tu||(Ub.then(()=>tu=0),tu=Date.now());function Bb(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;gn(jb(r,n.value),e,5,[r])};return n.value=t,n.attached=Fb(),n}function jb(t,e){if(oe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Qp=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Hb=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?Pb(t,r,o):e==="style"?Ob(t,n,r):jo(e)?xc(e)||Lb(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):$b(t,e,r,o))?(Kp(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Wp(t,e,r,o,i,e!=="value")):t._isVueCE&&(qb(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!Me(r)))?Kp(t,St(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Wp(t,e,r,o))};function $b(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Qp(e)&&fe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Qp(e)&&Me(n)?!1:e in t}function qb(t,e){const n=t._def.props;if(!n)return!1;const r=St(e);return Array.isArray(n)?n.some(s=>St(s)===r):Object.keys(n).some(s=>St(s)===r)}const ii=t=>{const e=t.props["onUpdate:modelValue"]||!1;return oe(e)?n=>Ws(e,n):e};function Wb(t){t.target.composing=!0}function Jp(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Zn=Symbol("_assign");function Yp(t,e,n){return e&&(t=t.trim()),n&&(t=Fc(t)),t}const mU={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Zn]=ii(s);const i=r||s.props&&s.props.type==="number";Ir(t,e?"change":"input",o=>{o.target.composing||t[Zn](Yp(t.value,n,i))}),(n||i)&&Ir(t,"change",()=>{t.value=Yp(t.value,n,i)}),e||(Ir(t,"compositionstart",Wb),Ir(t,"compositionend",Jp),Ir(t,"change",Jp))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Zn]=ii(o),t.composing)return;const a=(i||t.type==="number")&&!/^0\d/.test(t.value)?Fc(t.value):t.value,l=e??"";if(a===l)return;const u=t.getRootNode();(u instanceof Document||u instanceof ShadowRoot)&&u.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l)}},_U={deep:!0,created(t,e,n){t[Zn]=ii(n),Ir(t,"change",()=>{const r=t._modelValue,s=So(t),i=t.checked,o=t[Zn];if(oe(r)){const a=$h(r,s),l=a!==-1;if(i&&!l)o(r.concat(s));else if(!i&&l){const u=[...r];u.splice(a,1),o(u)}}else if(yi(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o(qy(t,i))})},mounted:Xp,beforeUpdate(t,e,n){t[Zn]=ii(n),Xp(t,e,n)}};function Xp(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(oe(e))s=$h(e,r.props.value)>-1;else if(yi(e))s=e.has(r.props.value);else{if(e===n)return;s=wi(e,qy(t,!0))}t.checked!==s&&(t.checked=s)}const yU={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=yi(e);Ir(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Fc(So(o)):So(o));t[Zn](t.multiple?s?new Set(i):i:i[0]),t._assigning=!0,ys(()=>{t._assigning=!1})}),t[Zn]=ii(r)},mounted(t,{value:e}){Zp(t,e)},beforeUpdate(t,e,n){t[Zn]=ii(n)},updated(t,{value:e}){t._assigning||Zp(t,e)}};function Zp(t,e){const n=t.multiple,r=oe(e);if(!(n&&!r&&!yi(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],a=So(o);if(n)if(r){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(u=>String(u)===String(a)):o.selected=$h(e,a)>-1}else o.selected=e.has(a);else if(wi(So(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function So(t){return"_value"in t?t._value:t.value}function qy(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Kb=["ctrl","shift","alt","meta"],Gb={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Kb.some(n=>t[`${n}Key`]&&!e.includes(n))},vU=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=Gb[e[o]];if(a&&a(s,e))return}return t(s,...i)})},zb={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},wU=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=lr(s.key);if(e.some(o=>o===i||zb[o]===i))return t(s)})},Wy=st({patchProp:Hb},Eb);let lo,eg=!1;function Qb(){return lo||(lo=ZA(Wy))}function Jb(){return lo=eg?lo:eb(Wy),eg=!0,lo}const Yb=(...t)=>{const e=Qb().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Gy(r);if(!s)return;const i=e._component;!fe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Ky(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e},Xb=(...t)=>{const e=Jb().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Gy(r);if(s)return n(s,!0,Ky(s))},e};function Ky(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Gy(t){return Me(t)?document.querySelector(t):t}const Zb=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,eR=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,tR=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function nR(t,e){if(t==="__proto__"||t==="constructor"&&e&&typeof e=="object"&&"prototype"in e){rR(t);return}return e}function rR(t){console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`)}function fc(t,e={}){if(typeof t!="string")return t;if(t[0]==='"'&&t[t.length-1]==='"'&&t.indexOf("\\")===-1)return t.slice(1,-1);const n=t.trim();if(n.length<=9)switch(n.toLowerCase()){case"true":return!0;case"false":return!1;case"undefined":return;case"null":return null;case"nan":return Number.NaN;case"infinity":return Number.POSITIVE_INFINITY;case"-infinity":return Number.NEGATIVE_INFINITY}if(!tR.test(t)){if(e.strict)throw new SyntaxError("[destr] Invalid JSON");return t}try{if(Zb.test(t)||eR.test(t)){if(e.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(t,nR)}return JSON.parse(t)}catch(r){if(e.strict)throw r;return t}}const sR=/#/g,iR=/&/g,oR=/\//g,aR=/=/g,of=/\+/g,cR=/%5e/gi,lR=/%60/gi,uR=/%7c/gi,hR=/%20/gi;function fR(t){return encodeURI(""+t).replace(uR,"|")}function zu(t){return fR(typeof t=="string"?t:JSON.stringify(t)).replace(of,"%2B").replace(hR,"+").replace(sR,"%23").replace(iR,"%26").replace(lR,"`").replace(cR,"^").replace(oR,"%2F")}function nu(t){return zu(t).replace(aR,"%3D")}function dc(t=""){try{return decodeURIComponent(""+t)}catch{return""+t}}function dR(t){return dc(t.replace(of," "))}function pR(t){return dc(t.replace(of," "))}function gR(t=""){const e=Object.create(null);t[0]==="?"&&(t=t.slice(1));for(const n of t.split("&")){const r=n.match(/([^=]+)=?(.*)/)||[];if(r.length<2)continue;const s=dR(r[1]);if(s==="__proto__"||s==="constructor")continue;const i=pR(r[2]||"");e[s]===void 0?e[s]=i:Array.isArray(e[s])?e[s].push(i):e[s]=[e[s],i]}return e}function mR(t,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(n=>`${nu(t)}=${zu(n)}`).join("&"):`${nu(t)}=${zu(e)}`:nu(t)}function _R(t){return Object.keys(t).filter(e=>t[e]!==void 0).map(e=>mR(e,t[e])).filter(Boolean).join("&")}const yR=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,vR=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,wR=/^([/\\]\s*){2,}[^/\\]/,ER=/^[\s\0]*(blob|data|javascript|vbscript):$/i,TR=/\/$|\/\?|\/#/,IR=/^\.?\//;function vs(t,e={}){return typeof e=="boolean"&&(e={acceptRelative:e}),e.strict?yR.test(t):vR.test(t)||(e.acceptRelative?wR.test(t):!1)}function AR(t){return!!t&&ER.test(t)}function Qu(t="",e){return e?TR.test(t):t.endsWith("/")}function af(t="",e){if(!e)return(Qu(t)?t.slice(0,-1):t)||"/";if(!Qu(t,!0))return t||"/";let n=t,r="";const s=t.indexOf("#");s!==-1&&(n=t.slice(0,s),r=t.slice(s));const[i,...o]=n.split("?");return((i.endsWith("/")?i.slice(0,-1):i)||"/")+(o.length>0?`?${o.join("?")}`:"")+r}function Ju(t="",e){if(!e)return t.endsWith("/")?t:t+"/";if(Qu(t,!0))return t||"/";let n=t,r="";const s=t.indexOf("#");if(s!==-1&&(n=t.slice(0,s),r=t.slice(s),!n))return r;const[i,...o]=n.split("?");return i+"/"+(o.length>0?`?${o.join("?")}`:"")+r}function bR(t=""){return t.startsWith("/")}function tg(t=""){return bR(t)?t:"/"+t}function RR(t,e){if(Qy(e)||vs(t))return t;const n=af(e);if(t.startsWith(n)){const r=t[n.length];if(!r||r==="/"||r==="?")return t}return cf(n,t)}function ng(t,e){if(Qy(e))return t;const n=af(e);if(!t.startsWith(n))return t;const r=t[n.length];return r&&r!=="/"&&r!=="?"?t:"/"+t.slice(n.length).replace(/^\/+/,"")}function zy(t,e){const n=CR(t),r={...gR(n.search),...e};return n.search=_R(r),kR(n)}function Qy(t){return!t||t==="/"}function SR(t){return t&&t!=="/"}function cf(t,...e){let n=t||"";for(const r of e.filter(s=>SR(s)))if(n){const s=r.replace(IR,"");n=Ju(n)+s}else n=r;return n}function Jy(...t){var o,a,l,u;const e=/\/(?!\/)/,n=t.filter(Boolean),r=[];let s=0;for(const h of n)if(!(!h||h==="/")){for(const[d,g]of h.split(e).entries())if(!(!g||g===".")){if(g===".."){if(r.length===1&&vs(r[0]))continue;r.pop(),s--;continue}if(d===1&&((o=r[r.length-1])!=null&&o.endsWith(":/"))){r[r.length-1]+="/"+g;continue}r.push(g),s++}}let i=r.join("/");return s>=0?(a=n[0])!=null&&a.startsWith("/")&&!i.startsWith("/")?i="/"+i:(l=n[0])!=null&&l.startsWith("./")&&!i.startsWith("./")&&(i="./"+i):i="../".repeat(-1*s)+i,(u=n[n.length-1])!=null&&u.endsWith("/")&&!i.endsWith("/")&&(i+="/"),i}function PR(t,e,n={}){return n.trailingSlash||(t=Ju(t),e=Ju(e)),n.leadingSlash||(t=tg(t),e=tg(e)),n.encoding||(t=dc(t),e=dc(e)),t===e}const Yy=Symbol.for("ufo:protocolRelative");function CR(t="",e){const n=t.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(n){const[,d,g=""]=n;return{protocol:d.toLowerCase(),pathname:g,href:d+g,auth:"",host:"",search:"",hash:""}}if(!vs(t,{acceptRelative:!0}))return rg(t);const[,r="",s,i=""]=t.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[];let[,o="",a=""]=i.match(/([^#/?]*)(.*)?/)||[];r==="file:"&&(a=a.replace(/\/(?=[A-Za-z]:)/,""));const{pathname:l,search:u,hash:h}=rg(a);return{protocol:r.toLowerCase(),auth:s?s.slice(0,Math.max(0,s.length-1)):"",host:o,pathname:l,search:u,hash:h,[Yy]:!r}}function rg(t=""){const[e="",n="",r=""]=(t.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:n,hash:r}}function kR(t){const e=t.pathname||"",n=t.search?(t.search.startsWith("?")?"":"?")+t.search:"",r=t.hash||"",s=t.auth?t.auth+"@":"",i=t.host||"";return(t.protocol||t[Yy]?(t.protocol||"")+"//":"")+s+i+e+n+r}class NR extends Error{constructor(e,n){super(e,n),this.name="FetchError",n!=null&&n.cause&&!this.cause&&(this.cause=n.cause)}}function OR(t){var l,u,h,d,g;const e=((l=t.error)==null?void 0:l.message)||((u=t.error)==null?void 0:u.toString())||"",n=((h=t.request)==null?void 0:h.method)||((d=t.options)==null?void 0:d.method)||"GET",r=((g=t.request)==null?void 0:g.url)||String(t.request)||"/",s=`[${n}] ${JSON.stringify(r)}`,i=t.response?`${t.response.status} ${t.response.statusText}`:"<no response>",o=`${s}: ${i}${e?` ${e}`:""}`,a=new NR(o,t.error?{cause:t.error}:void 0);for(const m of["request","options","response"])Object.defineProperty(a,m,{get(){return t[m]}});for(const[m,w]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(a,m,{get(){return t.response&&t.response[w]}});return a}const DR=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function sg(t="GET"){return DR.has(t.toUpperCase())}function VR(t){if(t===void 0)return!1;const e=typeof t;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(t)?!0:t.buffer||t instanceof FormData||t instanceof URLSearchParams?!1:t.constructor&&t.constructor.name==="Object"||typeof t.toJSON=="function"}const xR=new Set(["image/svg","application/xml","application/xhtml","application/html"]),LR=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function MR(t=""){if(!t)return"json";const e=t.split(";").shift()||"";return LR.test(e)?"json":e==="text/event-stream"?"stream":xR.has(e)||e.startsWith("text/")?"text":"blob"}function UR(t,e,n,r){const s=FR((e==null?void 0:e.headers)??(t==null?void 0:t.headers),n==null?void 0:n.headers,r);let i;return(n!=null&&n.query||n!=null&&n.params||e!=null&&e.params||e!=null&&e.query)&&(i={...n==null?void 0:n.params,...n==null?void 0:n.query,...e==null?void 0:e.params,...e==null?void 0:e.query}),{...n,...e,query:i,params:i,headers:s}}function FR(t,e,n){if(!e)return new n(t);const r=new n(e);if(t)for(const[s,i]of Symbol.iterator in t||Array.isArray(t)?t:new n(t))r.set(s,i);return r}async function ka(t,e){if(e)if(Array.isArray(e))for(const n of e)await n(t);else await e(t)}const BR=new Set([408,409,425,429,500,502,503,504]),jR=new Set([101,204,205,304]);function Xy(t={}){const{fetch:e=globalThis.fetch,Headers:n=globalThis.Headers,AbortController:r=globalThis.AbortController}=t;async function s(a){const l=a.error&&a.error.name==="AbortError"&&!a.options.timeout||!1;if(a.options.retry!==!1&&!l){let h;typeof a.options.retry=="number"?h=a.options.retry:h=sg(a.options.method)?0:1;const d=a.response&&a.response.status||500;if(h>0&&(Array.isArray(a.options.retryStatusCodes)?a.options.retryStatusCodes.includes(d):BR.has(d))){const g=typeof a.options.retryDelay=="function"?a.options.retryDelay(a):a.options.retryDelay||0;return g>0&&await new Promise(m=>setTimeout(m,g)),i(a.request,{...a.options,retry:h-1})}}const u=OR(a);throw Error.captureStackTrace&&Error.captureStackTrace(u,i),u}const i=async function(l,u={}){const h={request:l,options:UR(l,u,t.defaults,n),response:void 0,error:void 0};if(h.options.method&&(h.options.method=h.options.method.toUpperCase()),h.options.onRequest&&(await ka(h,h.options.onRequest),h.options.headers instanceof n||(h.options.headers=new n(h.options.headers||{}))),typeof h.request=="string"&&(h.options.baseURL&&(h.request=RR(h.request,h.options.baseURL)),h.options.query&&(h.request=zy(h.request,h.options.query),delete h.options.query),"query"in h.options&&delete h.options.query,"params"in h.options&&delete h.options.params),h.options.body&&sg(h.options.method))if(VR(h.options.body)){const m=h.options.headers.get("content-type");typeof h.options.body!="string"&&(h.options.body=m==="application/x-www-form-urlencoded"?new URLSearchParams(h.options.body).toString():JSON.stringify(h.options.body)),m||h.options.headers.set("content-type","application/json"),h.options.headers.has("accept")||h.options.headers.set("accept","application/json")}else("pipeTo"in h.options.body&&typeof h.options.body.pipeTo=="function"||typeof h.options.body.pipe=="function")&&("duplex"in h.options||(h.options.duplex="half"));let d;if(!h.options.signal&&h.options.timeout){const m=new r;d=setTimeout(()=>{const w=new Error("[TimeoutError]: The operation was aborted due to timeout");w.name="TimeoutError",w.code=23,m.abort(w)},h.options.timeout),h.options.signal=m.signal}try{h.response=await e(h.request,h.options)}catch(m){return h.error=m,h.options.onRequestError&&await ka(h,h.options.onRequestError),await s(h)}finally{d&&clearTimeout(d)}if((h.response.body||h.response._bodyInit)&&!jR.has(h.response.status)&&h.options.method!=="HEAD"){const m=(h.options.parseResponse?"json":h.options.responseType)||MR(h.response.headers.get("content-type")||"");switch(m){case"json":{const w=await h.response.text(),S=h.options.parseResponse||fc;h.response._data=S(w);break}case"stream":{h.response._data=h.response.body||h.response._bodyInit;break}default:h.response._data=await h.response[m]()}}return h.options.onResponse&&await ka(h,h.options.onResponse),!h.options.ignoreResponseError&&h.response.status>=400&&h.response.status<600?(h.options.onResponseError&&await ka(h,h.options.onResponseError),await s(h)):h.response},o=async function(l,u){return(await i(l,u))._data};return o.raw=i,o.native=(...a)=>e(...a),o.create=(a={},l={})=>Xy({...t,...l,defaults:{...t.defaults,...l.defaults,...a}}),o}const pc=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),HR=pc.fetch?(...t)=>pc.fetch(...t):()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!")),$R=pc.Headers,qR=pc.AbortController,WR=Xy({fetch:HR,Headers:$R,AbortController:qR}),KR=WR,GR=()=>{var t;return((t=window==null?void 0:window.__NUXT__)==null?void 0:t.config)||{}},gc=GR().app,zR=()=>gc.baseURL,QR=()=>gc.buildAssetsDir,lf=(...t)=>Jy(Zy(),QR(),...t),Zy=(...t)=>{const e=gc.cdnURL||gc.baseURL;return t.length?Jy(e,...t):e};globalThis.__buildAssetsURL=lf,globalThis.__publicAssetsURL=Zy;globalThis.$fetch||(globalThis.$fetch=KR.create({baseURL:zR()}));function Yu(t,e={},n){for(const r in t){const s=t[r],i=n?`${n}:${r}`:r;typeof s=="object"&&s!==null?Yu(s,e,i):typeof s=="function"&&(e[i]=s)}return e}const JR={run:t=>t()},YR=()=>JR,ev=typeof console.createTask<"u"?console.createTask:YR;function XR(t,e){const n=e.shift(),r=ev(n);return t.reduce((s,i)=>s.then(()=>r.run(()=>i(...e))),Promise.resolve())}function ZR(t,e){const n=e.shift(),r=ev(n);return Promise.all(t.map(s=>r.run(()=>s(...e))))}function ru(t,e){for(const n of[...t])n(e)}class e0{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n,r={}){if(!e||typeof n!="function")return()=>{};const s=e;let i;for(;this._deprecatedHooks[e];)i=this._deprecatedHooks[e],e=i.to;if(i&&!r.allowDeprecated){let o=i.message;o||(o=`${s} hook has been deprecated`+(i.to?`, please use ${i.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=void 0)}}hookOnce(e,n){let r,s=(...i)=>(typeof r=="function"&&r(),r=void 0,s=void 0,n(...i));return r=this.hook(e,s),r}removeHook(e,n){if(this._hooks[e]){const r=this._hooks[e].indexOf(n);r!==-1&&this._hooks[e].splice(r,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=typeof n=="string"?{to:n}:n;const r=this._hooks[e]||[];delete this._hooks[e];for(const s of r)this.hook(e,s)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const n in e)this.deprecateHook(n,e[n])}addHooks(e){const n=Yu(e),r=Object.keys(n).map(s=>this.hook(s,n[s]));return()=>{for(const s of r.splice(0,r.length))s()}}removeHooks(e){const n=Yu(e);for(const r in n)this.removeHook(r,n[r])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...n){return n.unshift(e),this.callHookWith(XR,e,...n)}callHookParallel(e,...n){return n.unshift(e),this.callHookWith(ZR,e,...n)}callHookWith(e,n,...r){const s=this._before||this._after?{name:n,args:r,context:{}}:void 0;this._before&&ru(this._before,s);const i=e(n in this._hooks?[...this._hooks[n]]:[],r);return i instanceof Promise?i.finally(()=>{this._after&&s&&ru(this._after,s)}):(this._after&&s&&ru(this._after,s),i)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const n=this._before.indexOf(e);n!==-1&&this._before.splice(n,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const n=this._after.indexOf(e);n!==-1&&this._after.splice(n,1)}}}}function tv(){return new e0}function t0(t={}){let e,n=!1;const r=o=>{if(e&&e!==o)throw new Error("Context conflict")};let s;if(t.asyncContext){const o=t.AsyncLocalStorage||globalThis.AsyncLocalStorage;o?s=new o:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const i=()=>{if(s){const o=s.getStore();if(o!==void 0)return o}return e};return{use:()=>{const o=i();if(o===void 0)throw new Error("Context is not available");return o},tryUse:()=>i(),set:(o,a)=>{a||r(o),e=o,n=!0},unset:()=>{e=void 0,n=!1},call:(o,a)=>{r(o),e=o;try{return s?s.run(o,a):a()}finally{n||(e=void 0)}},async callAsync(o,a){e=o;const l=()=>{e=o},u=()=>e===o?l:void 0;Xu.add(u);try{const h=s?s.run(o,a):a();return n||(e=void 0),await h}finally{Xu.delete(u)}}}}function n0(t={}){const e={};return{get(n,r={}){return e[n]||(e[n]=t0({...t,...r})),e[n]}}}const mc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},ig="__unctx__",r0=mc[ig]||(mc[ig]=n0()),s0=(t,e={})=>r0.get(t,e),og="__unctx_async_handlers__",Xu=mc[og]||(mc[og]=new Set);function Js(t){const e=[];for(const s of Xu){const i=s();i&&e.push(i)}const n=()=>{for(const s of e)s()};let r=t();return r&&typeof r=="object"&&"catch"in r&&(r=r.catch(s=>{throw n(),s})),[r,n]}const i0=!1,Zu=!1,o0=!1,EU={componentName:"NuxtLink",prefetch:!0,prefetchOn:{visibility:!0}},a0=null,c0="#__nuxt",nv="nuxt-app",ag=36e5,l0="vite:preloadError";function rv(t=nv){return s0(t,{asyncContext:!1})}const u0="__nuxt_plugin";function h0(t){var s;let e=0;const n={_id:t.id||nv||"nuxt-app",_scope:SI(),provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.13.2"},get vue(){return n.vueApp.version}},payload:Kn({...((s=t.ssrContext)==null?void 0:s.payload)||{},data:Kn({}),state:Ur({}),once:new Set,_errors:Kn({})}),static:{data:{}},runWithContext(i){return n._scope.active&&!R_()?n._scope.run(()=>cg(n,i)):cg(n,i)},isHydrating:!0,deferHydration(){if(!n.isHydrating)return()=>{};e++;let i=!1;return()=>{if(!i&&(i=!0,e--,e===0))return n.isHydrating=!1,n.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:Kn({}),_payloadRevivers:{},...t};{const i=window.__NUXT__;if(i)for(const o in i)switch(o){case"data":case"state":case"_errors":Object.assign(n.payload[o],i[o]);break;default:n.payload[o]=i[o]}}n.hooks=tv(),n.hook=n.hooks.hook,n.callHook=n.hooks.callHook,n.provide=(i,o)=>{const a="$"+i;Na(n,a,o),Na(n.vueApp.config.globalProperties,a,o)},Na(n.vueApp,"$nuxt",n),Na(n.vueApp.config.globalProperties,"$nuxt",n);{window.addEventListener(l0,o=>{n.callHook("app:chunkError",{error:o.payload}),(n.isHydrating||o.payload.message.includes("Unable to preload CSS"))&&o.preventDefault()}),window.useNuxtApp=window.useNuxtApp||ze;const i=n.hook("app:error",(...o)=>{console.error("[nuxt] error caught during app initialization",...o)});n.hook("app:mounted",i)}const r=n.payload.config;return n.provide("config",r),n}function f0(t,e){e.hooks&&t.hooks.addHooks(e.hooks)}async function d0(t,e){if(typeof e=="function"){const{provide:n}=await t.runWithContext(()=>e(t))||{};if(n&&typeof n=="object")for(const r in n)t.provide(r,n[r])}}async function p0(t,e){const n=[],r=[],s=[],i=[];let o=0;async function a(l){var h;const u=((h=l.dependsOn)==null?void 0:h.filter(d=>e.some(g=>g._name===d)&&!n.includes(d)))??[];if(u.length>0)r.push([new Set(u),l]);else{const d=d0(t,l).then(async()=>{l._name&&(n.push(l._name),await Promise.all(r.map(async([g,m])=>{g.has(l._name)&&(g.delete(l._name),g.size===0&&(o++,await a(m)))})))});l.parallel?s.push(d.catch(g=>i.push(g))):await d}}for(const l of e)f0(t,l);for(const l of e)await a(l);if(await Promise.all(s),o)for(let l=0;l<o;l++)await Promise.all(s);if(i.length)throw i[0]}function cn(t){if(typeof t=="function")return t;const e=t._name||t.name;return delete t.name,Object.assign(t.setup||(()=>{}),t,{[u0]:!0,_name:e})}function cg(t,e,n){const r=()=>e();return rv(t._id).set(t),t.vueApp.runWithContext(r)}function g0(t){var n;let e;return z_()&&(e=(n=Ti())==null?void 0:n.appContext.app.$nuxt),e=e||rv(t).tryUse(),e||null}function ze(t){const e=g0(t);if(!e)throw new Error("[nuxt] instance unavailable");return e}function Yc(t){return ze().$config}function Na(t,e,n){Object.defineProperty(t,e,{get:()=>n})}function m0(t,e){return{ctx:{table:t},matchAll:n=>iv(n,t)}}function sv(t){const e={};for(const n in t)e[n]=n==="dynamic"?new Map(Object.entries(t[n]).map(([r,s])=>[r,sv(s)])):new Map(Object.entries(t[n]));return e}function _0(t){return m0(sv(t))}function iv(t,e,n){t.endsWith("/")&&(t=t.slice(0,-1)||"/");const r=[];for(const[i,o]of lg(e.wildcard))(t===i||t.startsWith(i+"/"))&&r.push(o);for(const[i,o]of lg(e.dynamic))if(t.startsWith(i+"/")){const a="/"+t.slice(i.length).split("/").splice(2).join("/");r.push(...iv(a,o))}const s=e.static.get(t);return s&&r.push(s),r.filter(Boolean)}function lg(t){return[...t.entries()].sort((e,n)=>e[0].length-n[0].length)}function su(t){if(t===null||typeof t!="object")return!1;const e=Object.getPrototypeOf(t);return e!==null&&e!==Object.prototype&&Object.getPrototypeOf(e)!==null||Symbol.iterator in t?!1:Symbol.toStringTag in t?Object.prototype.toString.call(t)==="[object Module]":!0}function eh(t,e,n=".",r){if(!su(e))return eh(t,{},n,r);const s={...e};for(const i of Object.keys(t)){if(i==="__proto__"||i==="constructor")continue;const o=t[i];o!=null&&(r&&r(s,i,o,n)||(Array.isArray(o)&&Array.isArray(s[i])?s[i]=[...o,...s[i]]:su(o)&&su(s[i])?s[i]=eh(o,s[i],(n?`${n}.`:"")+i.toString(),r):s[i]=o))}return s}function y0(t){return(...e)=>e.reduce((n,r)=>eh(n,r,"",t),{})}const ov=y0();function v0(t,e){try{return e in t}catch{return!1}}class th extends Error{constructor(n,r={}){super(n,r);mr(this,"statusCode",500);mr(this,"fatal",!1);mr(this,"unhandled",!1);mr(this,"statusMessage");mr(this,"data");mr(this,"cause");r.cause&&!this.cause&&(this.cause=r.cause)}toJSON(){const n={message:this.message,statusCode:rh(this.statusCode,500)};return this.statusMessage&&(n.statusMessage=av(this.statusMessage)),this.data!==void 0&&(n.data=this.data),n}}mr(th,"__h3_error__",!0);function nh(t){if(typeof t=="string")return new th(t);if(w0(t))return t;const e=new th(t.message??t.statusMessage??"",{cause:t.cause||t});if(v0(t,"stack"))try{Object.defineProperty(e,"stack",{get(){return t.stack}})}catch{try{e.stack=t.stack}catch{}}if(t.data&&(e.data=t.data),t.statusCode?e.statusCode=rh(t.statusCode,e.statusCode):t.status&&(e.statusCode=rh(t.status,e.statusCode)),t.statusMessage?e.statusMessage=t.statusMessage:t.statusText&&(e.statusMessage=t.statusText),e.statusMessage){const n=e.statusMessage;av(e.statusMessage)!==n&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return t.fatal!==void 0&&(e.fatal=t.fatal),t.unhandled!==void 0&&(e.unhandled=t.unhandled),e}function w0(t){var e;return((e=t==null?void 0:t.constructor)==null?void 0:e.__h3_error__)===!0}const E0=/[^\u0009\u0020-\u007E]/g;function av(t=""){return t.replace(E0,"")}function rh(t,e=200){return!t||(typeof t=="string"&&(t=Number.parseInt(t,10)),t<100||t>999)?e:t}const cv=Symbol("layout-meta"),Wo=Symbol("route"),on=()=>{var t;return(t=ze())==null?void 0:t.$router},uf=()=>z_()?Lt(Wo,ze()._route):ze()._route;function TU(t){return t}const T0=()=>{try{if(ze()._processingMiddleware)return!0}catch{return!1}return!1},IU=(t,e)=>{t||(t="/");const n=typeof t=="string"?t:"path"in t?I0(t):on().resolve(t).href;if(e!=null&&e.open){const{target:l="_blank",windowFeatures:u={}}=e.open,h=Object.entries(u).filter(([d,g])=>g!==void 0).map(([d,g])=>`${d.toLowerCase()}=${g}`).join(", ");return open(n,l,h),Promise.resolve()}const r=vs(n,{acceptRelative:!0}),s=(e==null?void 0:e.external)||r;if(s){if(!(e!=null&&e.external))throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");const{protocol:l}=new URL(n,window.location.href);if(l&&AR(l))throw new Error(`Cannot navigate to a URL with '${l}' protocol.`)}const i=T0();if(!s&&i)return t;const o=on(),a=ze();return s?(a._scope.stop(),e!=null&&e.replace?location.replace(n):location.href=n,i?a.isHydrating?new Promise(()=>{}):!1:Promise.resolve()):e!=null&&e.replace?o.replace(t):o.push(t)};function I0(t){return zy(t.path||"",t.query||{})+(t.hash||"")}const lv="__nuxt_error",Xc=()=>$_(ze().payload,"error"),js=t=>{const e=Zc(t);try{const n=ze(),r=Xc();n.hooks.callHook("app:error",e),r.value=r.value||e}catch{throw e}return e},A0=async(t={})=>{const e=ze(),n=Xc();e.callHook("app:error:cleared",t),t.redirect&&await on().replace(t.redirect),n.value=a0},b0=t=>!!t&&typeof t=="object"&&lv in t,Zc=t=>{const e=nh(t);return Object.defineProperty(e,lv,{value:!0,configurable:!1,writable:!1}),e};function R0(t){return Uint8Array.fromBase64(t).buffer}function S0(t){return Uint8Array.from(Buffer.from(t,"base64")).buffer}function P0(t){const e=atob(t),n=e.length,r=new Uint8Array(n);for(let s=0;s<n;s++)r[s]=e.charCodeAt(s);return r.buffer}const C0=typeof Uint8Array.fromBase64=="function";var g_;const k0=typeof process=="object"&&((g_=process.versions)==null?void 0:g_.node)!==void 0,N0=C0?R0:k0?S0:P0,O0=-1,D0=-2,V0=-3,x0=-4,L0=-5,M0=-6,U0=-7;function F0(t,e){return B0(JSON.parse(t),e)}function B0(t,e){if(typeof t=="number")return i(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,r=Array(n.length);let s=null;function i(o,a=!1){if(o===O0)return;if(o===V0)return NaN;if(o===x0)return 1/0;if(o===L0)return-1/0;if(o===M0)return-0;if(a||typeof o!="number")throw new Error("Invalid input");if(o in r)return r[o];const l=n[o];if(!l||typeof l!="object")r[o]=l;else if(Array.isArray(l))if(typeof l[0]=="string"){const u=l[0],h=e&&Object.hasOwn(e,u)?e[u]:void 0;if(h){let d=l[1];if(typeof d!="number"&&(d=n.push(l[1])-1),s??(s=new Set),s.has(d))throw new Error("Invalid circular reference");return s.add(d),r[o]=h(i(d)),s.delete(d),r[o]}switch(u){case"Date":r[o]=new Date(l[1]);break;case"Set":const d=new Set;r[o]=d;for(let w=1;w<l.length;w+=1)d.add(i(l[w]));break;case"Map":const g=new Map;r[o]=g;for(let w=1;w<l.length;w+=2)g.set(i(l[w]),i(l[w+1]));break;case"RegExp":r[o]=new RegExp(l[1],l[2]);break;case"Object":{const w=l[1];if(typeof n[w]=="object"&&n[w][0]!=="BigInt")throw new Error("Invalid input");r[o]=Object(i(w));break}case"BigInt":r[o]=BigInt(l[1]);break;case"null":const m=Object.create(null);r[o]=m;for(let w=1;w<l.length;w+=2){if(l[w]==="__proto__")throw new Error("Cannot parse an object with a `__proto__` property");m[l[w]]=i(l[w+1])}break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Float16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":case"DataView":{if(n[l[1]][0]!=="ArrayBuffer")throw new Error("Invalid data");const w=globalThis[u],S=i(l[1]);r[o]=l[2]!==void 0?new w(S,l[2],l[3]):new w(S);break}case"ArrayBuffer":{const w=l[1];if(typeof w!="string")throw new Error("Invalid ArrayBuffer encoding");const S=N0(w);r[o]=S;break}case"Temporal.Duration":case"Temporal.Instant":case"Temporal.PlainDate":case"Temporal.PlainTime":case"Temporal.PlainDateTime":case"Temporal.PlainMonthDay":case"Temporal.PlainYearMonth":case"Temporal.ZonedDateTime":{const w=u.slice(9);r[o]=Temporal[w].from(l[1]);break}case"URL":{const w=new URL(l[1]);r[o]=w;break}case"URLSearchParams":{const w=new URLSearchParams(l[1]);r[o]=w;break}default:throw new Error(`Unknown type ${u}`)}}else if(l[0]===U0){const u=l[1];if(!Number.isInteger(u)||u<0)throw new Error("Invalid input");const h=new Array(u);r[o]=h;for(let d=2;d<l.length;d+=2){const g=l[d];if(!Number.isInteger(g)||g<0||g>=u)throw new Error("Invalid input");h[g]=i(l[d+1])}}else{const u=new Array(l.length);r[o]=u;for(let h=0;h<l.length;h+=1){const d=l[h];d!==D0&&(u[h]=i(d))}}else{const u={};r[o]=u;for(const h of Object.keys(l)){if(h==="__proto__")throw new Error("Cannot parse an object with a `__proto__` property");const d=l[h];u[h]=i(d)}}return r[o]}return i(0)}const j0=new Set(["title","titleTemplate","script","style","noscript"]),Ha=new Set(["base","meta","link","style","script","noscript"]),H0=new Set(["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"]),$0=new Set(["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"]),uv=new Set(["tagPosition","tagPriority","tagDuplicateStrategy","children","innerHTML","textContent","processTemplateParams"]),q0=typeof window<"u";function _c(t){let e=9;for(let n=0;n<t.length;)e=Math.imul(e^t.charCodeAt(n++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function sh(t){if(t._h)return t._h;if(t._d)return _c(t._d);let e=`${t.tag}:${t.textContent||t.innerHTML||""}:`;for(const n in t.props)e+=`${n}:${String(t.props[n])},`;return _c(e)}function W0(t,e){return t instanceof Promise?t.then(e):e(t)}function ih(t,e,n,r){const s=r||fv(typeof e=="object"&&typeof e!="function"&&!(e instanceof Promise)?{...e}:{[t==="script"||t==="noscript"||t==="style"?"innerHTML":"textContent"]:e},t==="templateParams"||t==="titleTemplate");if(s instanceof Promise)return s.then(o=>ih(t,e,n,o));const i={tag:t,props:s};for(const o of uv){const a=i.props[o]!==void 0?i.props[o]:n[o];a!==void 0&&((!(o==="innerHTML"||o==="textContent"||o==="children")||j0.has(i.tag))&&(i[o==="children"?"innerHTML":o]=a),delete i.props[o])}return i.props.body&&(i.tagPosition="bodyClose",delete i.props.body),i.tag==="script"&&typeof i.innerHTML=="object"&&(i.innerHTML=JSON.stringify(i.innerHTML),i.props.type=i.props.type||"application/json"),Array.isArray(i.props.content)?i.props.content.map(o=>({...i,props:{...i.props,content:o}})):i}function K0(t,e){var r;const n=t==="class"?" ":";";return e&&typeof e=="object"&&!Array.isArray(e)&&(e=Object.entries(e).filter(([,s])=>s).map(([s,i])=>t==="style"?`${s}:${i}`:s)),(r=String(Array.isArray(e)?e.join(n):e))==null?void 0:r.split(n).filter(s=>!!s.trim()).join(n)}function hv(t,e,n,r){for(let s=r;s<n.length;s+=1){const i=n[s];if(i==="class"||i==="style"){t[i]=K0(i,t[i]);continue}if(t[i]instanceof Promise)return t[i].then(o=>(t[i]=o,hv(t,e,n,s)));if(!e&&!uv.has(i)){const o=String(t[i]),a=i.startsWith("data-");o==="true"||o===""?t[i]=a?"true":!0:t[i]||(a&&o==="false"?t[i]="false":delete t[i])}}}function fv(t,e=!1){const n=hv(t,e,Object.keys(t),0);return n instanceof Promise?n.then(()=>t):t}const G0=10;function dv(t,e,n){for(let r=n;r<e.length;r+=1){const s=e[r];if(s instanceof Promise)return s.then(i=>(e[r]=i,dv(t,e,r)));Array.isArray(s)?t.push(...s):t.push(s)}}function z0(t){const e=[],n=t.resolvedInput;for(const s in n){if(!Object.prototype.hasOwnProperty.call(n,s))continue;const i=n[s];if(!(i===void 0||!H0.has(s))){if(Array.isArray(i)){for(const o of i)e.push(ih(s,o,t));continue}e.push(ih(s,i,t))}}if(e.length===0)return[];const r=[];return W0(dv(r,e,0),()=>r.map((s,i)=>(s._e=t._i,t.mode&&(s._m=t.mode),s._p=(t._i<<G0)+i,s)))}const ug=new Set(["onload","onerror","onabort","onprogress","onloadstart"]),hg={base:-10,title:10},fg={critical:-80,high:-10,low:20};function yc(t){const e=t.tagPriority;if(typeof e=="number")return e;let n=100;return t.tag==="meta"?t.props["http-equiv"]==="content-security-policy"?n=-30:t.props.charset?n=-20:t.props.name==="viewport"&&(n=-15):t.tag==="link"&&t.props.rel==="preconnect"?n=20:t.tag in hg&&(n=hg[t.tag]),e&&e in fg?n+fg[e]:n}const Q0=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}],J0=["name","property","http-equiv"];function pv(t){const{props:e,tag:n}=t;if($0.has(n))return n;if(n==="link"&&e.rel==="canonical")return"canonical";if(e.charset)return"charset";if(e.id)return`${n}:id:${e.id}`;for(const r of J0)if(e[r]!==void 0)return`${n}:${r}:${e[r]}`;return!1}const Er="%separator";function Y0(t,e,n=!1){var s;let r;if(e==="s"||e==="pageTitle")r=t.pageTitle;else if(e.includes(".")){const i=e.indexOf(".");r=(s=t[e.substring(0,i)])==null?void 0:s[e.substring(i+1)]}else r=t[e];if(r!==void 0)return n?(r||"").replace(/"/g,'\\"'):r||""}const X0=new RegExp(`${Er}(?:\\s*${Er})*`,"g");function Oa(t,e,n,r=!1){if(typeof t!="string"||!t.includes("%"))return t;let s=t;try{s=decodeURI(t)}catch{}const i=s.match(/%\w+(?:\.\w+)?/g);if(!i)return t;const o=t.includes(Er);return t=t.replace(/%\w+(?:\.\w+)?/g,a=>{if(a===Er||!i.includes(a))return a;const l=Y0(e,a.slice(1),r);return l!==void 0?l:a}).trim(),o&&(t.endsWith(Er)&&(t=t.slice(0,-Er.length)),t.startsWith(Er)&&(t=t.slice(Er.length)),t=t.replace(X0,n).trim()),t}function dg(t,e){return t==null?e||null:typeof t=="function"?t(e):t}async function gv(t,e={}){const n=e.document||t.resolvedOptions.document;if(!n||!t.dirty)return;const r={shouldRender:!0,tags:[]};if(await t.hooks.callHook("dom:beforeRender",r),!!r.shouldRender)return t._domUpdatePromise||(t._domUpdatePromise=new Promise(async s=>{var d;const i=(await t.resolveTags()).map(g=>({tag:g,id:Ha.has(g.tag)?sh(g):g.tag,shouldRender:!0}));let o=t._dom;if(!o){o={elMap:{htmlAttrs:n.documentElement,bodyAttrs:n.body}};const g=new Set;for(const m of["body","head"]){const w=(d=n[m])==null?void 0:d.children;for(const S of w){const N=S.tagName.toLowerCase();if(!Ha.has(N))continue;const x={tag:N,props:await fv(S.getAttributeNames().reduce((D,M)=>({...D,[M]:S.getAttribute(M)}),{})),innerHTML:S.innerHTML},O=pv(x);let T=O,C=1;for(;T&&g.has(T);)T=`${O}:${C++}`;T&&(x._d=T,g.add(T)),o.elMap[S.getAttribute("data-hid")||sh(x)]=S}}}o.pendingSideEffects={...o.sideEffects},o.sideEffects={};function a(g,m,w){const S=`${g}:${m}`;o.sideEffects[S]=w,delete o.pendingSideEffects[S]}function l({id:g,$el:m,tag:w}){const S=w.tag.endsWith("Attrs");if(o.elMap[g]=m,S||(w.textContent&&w.textContent!==m.textContent&&(m.textContent=w.textContent),w.innerHTML&&w.innerHTML!==m.innerHTML&&(m.innerHTML=w.innerHTML),a(g,"el",()=>{var N;(N=o.elMap[g])==null||N.remove(),delete o.elMap[g]})),w._eventHandlers)for(const N in w._eventHandlers)Object.prototype.hasOwnProperty.call(w._eventHandlers,N)&&m.getAttribute(`data-${N}`)!==""&&((w.tag==="bodyAttrs"?n.defaultView:m).addEventListener(N.substring(2),w._eventHandlers[N].bind(m)),m.setAttribute(`data-${N}`,""));for(const N in w.props){if(!Object.prototype.hasOwnProperty.call(w.props,N))continue;const x=w.props[N],O=`attr:${N}`;if(N==="class"){if(!x)continue;for(const T of x.split(" "))S&&a(g,`${O}:${T}`,()=>m.classList.remove(T)),!m.classList.contains(T)&&m.classList.add(T)}else if(N==="style"){if(!x)continue;for(const T of x.split(";")){const C=T.indexOf(":"),D=T.substring(0,C).trim(),M=T.substring(C+1).trim();a(g,`${O}:${D}`,()=>{m.style.removeProperty(D)}),m.style.setProperty(D,M)}}else m.getAttribute(N)!==x&&m.setAttribute(N,x===!0?"":String(x)),S&&a(g,O,()=>m.removeAttribute(N))}}const u=[],h={bodyClose:void 0,bodyOpen:void 0,head:void 0};for(const g of i){const{tag:m,shouldRender:w,id:S}=g;if(w){if(m.tag==="title"){n.title=m.textContent;continue}g.$el=g.$el||o.elMap[S],g.$el?l(g):Ha.has(m.tag)&&u.push(g)}}for(const g of u){const m=g.tag.tagPosition||"head";g.$el=n.createElement(g.tag.tag),l(g),h[m]=h[m]||n.createDocumentFragment(),h[m].appendChild(g.$el)}for(const g of i)await t.hooks.callHook("dom:renderTag",g,n,a);h.head&&n.head.appendChild(h.head),h.bodyOpen&&n.body.insertBefore(h.bodyOpen,n.body.firstChild),h.bodyClose&&n.body.appendChild(h.bodyClose);for(const g in o.pendingSideEffects)o.pendingSideEffects[g]();t._dom=o,await t.hooks.callHook("dom:rendered",{renders:i}),s()}).finally(()=>{t._domUpdatePromise=void 0,t.dirty=!1})),t._domUpdatePromise}function Z0(t,e={}){const n=e.delayFn||(r=>setTimeout(r,10));return t._domDebouncedUpdatePromise=t._domDebouncedUpdatePromise||new Promise(r=>n(()=>gv(t,e).then(()=>{delete t._domDebouncedUpdatePromise,r()})))}function eS(t){return e=>{var r,s;const n=((s=(r=e.resolvedOptions.document)==null?void 0:r.head.querySelector('script[id="unhead:payload"]'))==null?void 0:s.innerHTML)||!1;return n&&e.push(JSON.parse(n)),{mode:"client",hooks:{"entries:updated":i=>{Z0(i,t)}}}}}const tS=new Set(["templateParams","htmlAttrs","bodyAttrs"]),nS={hooks:{"tag:normalise":({tag:t})=>{t.props.hid&&(t.key=t.props.hid,delete t.props.hid),t.props.vmid&&(t.key=t.props.vmid,delete t.props.vmid),t.props.key&&(t.key=t.props.key,delete t.props.key);const e=pv(t);e&&!e.startsWith("meta:og:")&&!e.startsWith("meta:twitter:")&&delete t.key;const n=e||(t.key?`${t.tag}:${t.key}`:!1);n&&(t._d=n)},"tags:resolve":t=>{const e=Object.create(null);for(const r of t.tags){const s=(r.key?`${r.tag}:${r.key}`:r._d)||sh(r),i=e[s];if(i){let a=r==null?void 0:r.tagDuplicateStrategy;if(!a&&tS.has(r.tag)&&(a="merge"),a==="merge"){const l=i.props;l.style&&r.props.style&&(l.style[l.style.length-1]!==";"&&(l.style+=";"),r.props.style=`${l.style} ${r.props.style}`),l.class&&r.props.class?r.props.class=`${l.class} ${r.props.class}`:l.class&&(r.props.class=l.class),e[s].props={...l,...r.props};continue}else if(r._e===i._e){i._duped=i._duped||[],r._d=`${i._d}:${i._duped.length+1}`,i._duped.push(r);continue}else if(yc(r)>yc(i))continue}if(!(r.innerHTML||r.textContent||Object.keys(r.props).length!==0)&&Ha.has(r.tag)){delete e[s];continue}e[s]=r}const n=[];for(const r in e){const s=e[r],i=s._duped;n.push(s),i&&(delete s._duped,n.push(...i))}t.tags=n,t.tags=t.tags.filter(r=>!(r.tag==="meta"&&(r.props.name||r.props.property)&&!r.props.content))}}},rS=new Set(["script","link","bodyAttrs"]),sS=t=>({hooks:{"tags:resolve":e=>{for(const n of e.tags){if(!rS.has(n.tag))continue;const r=n.props;for(const s in r){if(s[0]!=="o"||s[1]!=="n"||!Object.prototype.hasOwnProperty.call(r,s))continue;const i=r[s];typeof i=="function"&&(t.ssr&&ug.has(s)?r[s]=`this.dataset.${s}fired = true`:delete r[s],n._eventHandlers=n._eventHandlers||{},n._eventHandlers[s]=i)}t.ssr&&n._eventHandlers&&(n.props.src||n.props.href)&&(n.key=n.key||_c(n.props.src||n.props.href))}},"dom:renderTag":({$el:e,tag:n})=>{var s,i;const r=e==null?void 0:e.dataset;if(r)for(const o in r){if(!o.endsWith("fired"))continue;const a=o.slice(0,-5);ug.has(a)&&((i=(s=n._eventHandlers)==null?void 0:s[a])==null||i.call(e,new Event(a.substring(2))))}}}}),iS=new Set(["link","style","script","noscript"]),oS={hooks:{"tag:normalise":({tag:t})=>{t.key&&iS.has(t.tag)&&(t.props["data-hid"]=t._h=_c(t.key))}}},aS={mode:"server",hooks:{"tags:beforeResolve":t=>{const e={};let n=!1;for(const r of t.tags)r._m!=="server"||r.tag!=="titleTemplate"&&r.tag!=="templateParams"&&r.tag!=="title"||(e[r.tag]=r.tag==="title"||r.tag==="titleTemplate"?r.textContent:r.props,n=!0);n&&t.tags.push({tag:"script",innerHTML:JSON.stringify(e),props:{id:"unhead:payload",type:"application/json"}})}}},cS={hooks:{"tags:resolve":t=>{var e;for(const n of t.tags)if(typeof n.tagPriority=="string")for(const{prefix:r,offset:s}of Q0){if(!n.tagPriority.startsWith(r))continue;const i=n.tagPriority.substring(r.length),o=(e=t.tags.find(a=>a._d===i))==null?void 0:e._p;if(o!==void 0){n._p=o+s;break}}t.tags.sort((n,r)=>{const s=yc(n),i=yc(r);return s<i?-1:s>i?1:n._p-r._p})}}},lS={meta:"content",link:"href",htmlAttrs:"lang"},uS=["innerHTML","textContent"],hS=t=>({hooks:{"tags:resolve":e=>{var o;const{tags:n}=e;let r;for(let a=0;a<n.length;a+=1)n[a].tag==="templateParams"&&(r=e.tags.splice(a,1)[0].props,a-=1);const s=r||{},i=s.separator||"|";delete s.separator,s.pageTitle=Oa(s.pageTitle||((o=n.find(a=>a.tag==="title"))==null?void 0:o.textContent)||"",s,i);for(const a of n){if(a.processTemplateParams===!1)continue;const l=lS[a.tag];if(l&&typeof a.props[l]=="string")a.props[l]=Oa(a.props[l],s,i);else if(a.processTemplateParams||a.tag==="titleTemplate"||a.tag==="title")for(const u of uS)typeof a[u]=="string"&&(a[u]=Oa(a[u],s,i,a.tag==="script"&&a.props.type.endsWith("json")))}t._templateParams=s,t._separator=i},"tags:afterResolve":({tags:e})=>{let n;for(let r=0;r<e.length;r+=1){const s=e[r];s.tag==="title"&&s.processTemplateParams!==!1&&(n=s)}n!=null&&n.textContent&&(n.textContent=Oa(n.textContent,t._templateParams,t._separator))}}}),fS={hooks:{"tags:resolve":t=>{const{tags:e}=t;let n,r;for(let s=0;s<e.length;s+=1){const i=e[s];i.tag==="title"?n=i:i.tag==="titleTemplate"&&(r=i)}if(r&&n){const s=dg(r.textContent,n.textContent);s!==null?n.textContent=s||n.textContent:t.tags.splice(t.tags.indexOf(n),1)}else if(r){const s=dg(r.textContent);s!==null&&(r.textContent=s,r.tag="title",r=void 0)}r&&t.tags.splice(t.tags.indexOf(r),1)}}},dS={hooks:{"tags:afterResolve":t=>{for(const e of t.tags)typeof e.innerHTML=="string"&&(e.innerHTML&&(e.props.type==="application/ld+json"||e.props.type==="application/json")?e.innerHTML=e.innerHTML.replace(/</g,"\\u003C"):e.innerHTML=e.innerHTML.replace(new RegExp(`</${e.tag}`,"g"),`<\\/${e.tag}`))}}};let mv;function pS(t={}){const e=gS(t);return e.use(eS()),mv=e}function pg(t,e){return!t||t==="server"&&e||t==="client"&&!e}function gS(t={}){const e=tv();e.addHooks(t.hooks||{}),t.document=t.document||(q0?document:void 0);const n=!t.document,r=()=>{a.dirty=!0,e.callHook("entries:updated",a)};let s=0,i=[];const o=[],a={plugins:o,dirty:!1,resolvedOptions:t,hooks:e,headEntries(){return i},use(l){const u=typeof l=="function"?l(a):l;(!u.key||!o.some(h=>h.key===u.key))&&(o.push(u),pg(u.mode,n)&&e.addHooks(u.hooks||{}))},push(l,u){u==null||delete u.head;const h={_i:s++,input:l,...u};return pg(h.mode,n)&&(i.push(h),r()),{dispose(){i=i.filter(d=>d._i!==h._i),r()},patch(d){for(const g of i)g._i===h._i&&(g.input=h.input=d);r()}}},async resolveTags(){const l={tags:[],entries:[...i]};await e.callHook("entries:resolve",l);for(const u of l.entries){const h=u.resolvedInput||u.input;if(u.resolvedInput=await(u.transform?u.transform(h):h),u.resolvedInput)for(const d of await z0(u)){const g={tag:d,entry:u,resolvedOptions:a.resolvedOptions};await e.callHook("tag:normalise",g),l.tags.push(g.tag)}}return await e.callHook("tags:beforeResolve",l),await e.callHook("tags:resolve",l),await e.callHook("tags:afterResolve",l),l.tags},ssr:n};return[nS,aS,sS,oS,cS,hS,fS,dS,...(t==null?void 0:t.plugins)||[]].forEach(l=>a.use(l)),a.hooks.callHook("init",a),a}function mS(){return mv}const _S=By[0]==="3";function yS(t){return typeof t=="function"?t():Le(t)}function oh(t){if(t instanceof Promise||t instanceof Date||t instanceof RegExp)return t;const e=yS(t);if(!t||!e)return e;if(Array.isArray(e))return e.map(n=>oh(n));if(typeof e=="object"){const n={};for(const r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(r==="titleTemplate"||r[0]==="o"&&r[1]==="n"){n[r]=Le(e[r]);continue}n[r]=oh(e[r])}return n}return e}const vS={hooks:{"entries:resolve":t=>{for(const e of t.entries)e.resolvedInput=oh(e.input)}}},_v="usehead";function wS(t){return{install(n){_S&&(n.config.globalProperties.$unhead=t,n.config.globalProperties.$head=t,n.provide(_v,t))}}.install}function ES(t={}){t.domDelayFn=t.domDelayFn||(n=>ys(()=>setTimeout(()=>n(),0)));const e=pS(t);return e.use(vS),e.install=wS(e),e}const ah=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ch="__unhead_injection_handler__";function TS(t){ah[ch]=t}function AU(){return ch in ah?ah[ch]():Lt(_v)||mS()}let $a,qa;function IS(){return $a=$fetch(lf(`builds/meta/${Yc().app.buildId}.json`),{responseType:"json"}),$a.then(t=>{qa=_0(t.matcher)}).catch(t=>{console.error("[nuxt] Error fetching app manifest.",t)}),$a}function el(){return $a||IS()}async function hf(t){if(await el(),!qa)return console.error("[nuxt] Error creating app manifest matcher.",qa),{};try{return ov({},...qa.matchAll(t).reverse())}catch(e){return console.error("[nuxt] Error matching route rules.",e),{}}}async function gg(t,e={}){const n=await bS(t,e),r=ze(),s=r._payloadCache=r._payloadCache||{};return n in s||(s[n]=vv(t).then(i=>i?yv(n).then(o=>o||(delete s[n],null)):(s[n]=null,null))),s[n]}const AS="_payload.json";async function bS(t,e={}){const n=new URL(t,"http://localhost");if(n.host!=="localhost"||vs(n.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+t);const r=Yc(),s=e.hash||(e.fresh?Date.now():r.app.buildId),i=r.app.cdnURL,o=i&&await vv(t)?i:r.app.baseURL;return cf(o,n.pathname,AS+(s?`?${s}`:""))}async function yv(t){const e=fetch(t).then(n=>n.text().then(wv));try{return await e}catch(n){console.warn("[nuxt] Cannot load payload ",t,n)}return null}async function vv(t=uf().path){if(t=af(t),(await el()).prerendered.includes(t))return!0;const n=await hf(t);return!!n.prerender&&!n.redirect}let Jr=null;async function RS(){var r;if(Jr)return Jr;const t=document.getElementById("__NUXT_DATA__");if(!t)return{};const e=await wv(t.textContent||""),n=t.dataset.src?await yv(t.dataset.src):void 0;return Jr={...e,...n,...window.__NUXT__},(r=Jr.config)!=null&&r.public&&(Jr.config.public=Ur(Jr.config.public)),Jr}async function wv(t){return await F0(t,ze()._payloadRevivers)}function SS(t,e){ze()._payloadRevivers[t]=e}const mg={NuxtError:t=>Zc(t),EmptyShallowRef:t=>Io(t==="_"?void 0:t==="0n"?BigInt(0):fc(t)),EmptyRef:t=>Yn(t==="_"?void 0:t==="0n"?BigInt(0):fc(t)),ShallowRef:t=>Io(t),ShallowReactive:t=>Kn(t),Ref:t=>Yn(t),Reactive:t=>Ur(t)},PS=cn({name:"nuxt:revive-payload:client",order:-30,async setup(t){let e,n;for(const r in mg)SS(r,mg[r]);Object.assign(t.payload,([e,n]=Js(()=>t.runWithContext(RS)),e=await e,n(),e)),window.__NUXT__=t.payload}}),CS=[],kS=cn({name:"nuxt:head",enforce:"pre",setup(t){const e=ES({plugins:CS});TS(()=>ze().vueApp._context.provides.usehead),t.vueApp.use(e);{let n=!0;const r=async()=>{n=!1,await gv(e)};e.hooks.hook("dom:beforeRender",s=>{s.shouldRender=!n}),t.hooks.hook("page:start",()=>{n=!0}),t.hooks.hook("page:finish",()=>{t.isHydrating||r()}),t.hooks.hook("app:error",r),t.hooks.hook("app:suspense:resolve",r)}}});/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Ls=typeof document<"u";function Ev(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function NS(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Ev(t.default)}const Ce=Object.assign;function iu(t,e){const n={};for(const r in e){const s=e[r];n[r]=mn(s)?s.map(t):t(s)}return n}const uo=()=>{},mn=Array.isArray;function _g(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}const Tv=/#/g,OS=/&/g,DS=/\//g,VS=/=/g,xS=/\?/g,Iv=/\+/g,LS=/%5B/g,MS=/%5D/g,Av=/%5E/g,US=/%60/g,bv=/%7B/g,FS=/%7C/g,Rv=/%7D/g,BS=/%20/g;function ff(t){return t==null?"":encodeURI(""+t).replace(FS,"|").replace(LS,"[").replace(MS,"]")}function jS(t){return ff(t).replace(bv,"{").replace(Rv,"}").replace(Av,"^")}function lh(t){return ff(t).replace(Iv,"%2B").replace(BS,"+").replace(Tv,"%23").replace(OS,"%26").replace(US,"`").replace(bv,"{").replace(Rv,"}").replace(Av,"^")}function HS(t){return lh(t).replace(VS,"%3D")}function $S(t){return ff(t).replace(Tv,"%23").replace(xS,"%3F")}function qS(t){return $S(t).replace(DS,"%2F")}function Po(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const WS=/\/$/,KS=t=>t.replace(WS,"");function ou(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(r=e.slice(0,l),i=e.slice(l,a>0?a:e.length),s=t(i.slice(1))),a>=0&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=JS(r??e,n),{fullPath:r+i+o,path:r,query:s,hash:Po(o)}}function GS(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function yg(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function zS(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&oi(e.matched[r],n.matched[s])&&Sv(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function oi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Sv(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(var n in t)if(!QS(t[n],e[n]))return!1;return!0}function QS(t,e){return mn(t)?vg(t,e):mn(e)?vg(e,t):(t==null?void 0:t.valueOf())===(e==null?void 0:e.valueOf())}function vg(t,e){return mn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function JS(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const hn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let uh=function(t){return t.pop="pop",t.push="push",t}({}),au=function(t){return t.back="back",t.forward="forward",t.unknown="",t}({});function YS(t){if(!t)if(Ls){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),KS(t)}const XS=/^[^#]+#/;function ZS(t,e){return t.replace(XS,"#")+e}function eP(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const tl=()=>({left:window.scrollX,top:window.scrollY});function tP(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=eP(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function wg(t,e){return(history.state?history.state.position-e:-1)+t}const hh=new Map;function nP(t,e){hh.set(t,e)}function rP(t){const e=hh.get(t);return hh.delete(t),e}function sP(t){return typeof t=="string"||t&&typeof t=="object"}function Pv(t){return typeof t=="string"||typeof t=="symbol"}let Ke=function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t}({});const Cv=Symbol("");Ke.MATCHER_NOT_FOUND+"",Ke.NAVIGATION_GUARD_REDIRECT+"",Ke.NAVIGATION_ABORTED+"",Ke.NAVIGATION_CANCELLED+"",Ke.NAVIGATION_DUPLICATED+"";function ai(t,e){return Ce(new Error,{type:t,[Cv]:!0},e)}function Bn(t,e){return t instanceof Error&&Cv in t&&(e==null||!!(t.type&e))}const iP=["params","query","hash"];function oP(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of iP)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function aP(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(Iv," "),i=s.indexOf("="),o=Po(i<0?s:s.slice(0,i)),a=i<0?null:Po(s.slice(i+1));if(o in e){let l=e[o];mn(l)||(l=e[o]=[l]),l.push(a)}else e[o]=a}return e}function Eg(t){let e="";for(let n in t){const r=t[n];if(n=HS(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(mn(r)?r.map(s=>s&&lh(s)):[r&&lh(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function cP(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=mn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const lP=Symbol(""),Tg=Symbol(""),df=Symbol(""),pf=Symbol(""),fh=Symbol("");function Wi(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Tr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const u=g=>{g===!1?l(ai(Ke.NAVIGATION_ABORTED,{from:n,to:e})):g instanceof Error?l(g):sP(g)?l(ai(Ke.NAVIGATION_GUARD_REDIRECT,{from:e,to:g})):(o&&r.enterCallbacks[s]===o&&typeof g=="function"&&o.push(g),a())},h=i(()=>t.call(r&&r.instances[s],e,n,u));let d=Promise.resolve(h);t.length<3&&(d=d.then(u)),d.catch(g=>l(g))})}function cu(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Ev(l)){const u=(l.__vccOpts||l)[e];u&&i.push(Tr(u,n,r,o,a,s))}else{let u=l();i.push(()=>u.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const d=NS(h)?h.default:h;o.mods[a]=h,o.components[a]=d;const g=(d.__vccOpts||d)[e];return g&&Tr(g,n,r,o,a,s)()}))}}return i}function uP(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>oi(u,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(u=>oi(u,l))||s.push(l))}return[n,r,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let hP=()=>location.protocol+"//"+location.host;function kv(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let o=s.includes(t.slice(i))?t.slice(i).length:1,a=s.slice(o);return a[0]!=="/"&&(a="/"+a),yg(a,"")}return yg(n,t)+r+s}function fP(t,e,n,r){let s=[],i=[],o=null;const a=({state:g})=>{const m=kv(t,location),w=n.value,S=e.value;let N=0;if(g){if(n.value=m,e.value=g,o&&o===w){o=null;return}N=S?g.position-S.position:0}else r(m);s.forEach(x=>{x(n.value,w,{delta:N,type:uh.pop,direction:N?N>0?au.forward:au.back:au.unknown})})};function l(){o=n.value}function u(g){s.push(g);const m=()=>{const w=s.indexOf(g);w>-1&&s.splice(w,1)};return i.push(m),m}function h(){if(document.visibilityState==="hidden"){const{history:g}=window;if(!g.state)return;g.replaceState(Ce({},g.state,{scroll:tl()}),"")}}function d(){for(const g of i)g();i=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",h),document.removeEventListener("visibilitychange",h)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",h),document.addEventListener("visibilitychange",h),{pauseListeners:l,listen:u,destroy:d}}function Ig(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?tl():null}}function dP(t){const{history:e,location:n}=window,r={value:kv(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,h){const d=t.indexOf("#"),g=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:hP()+t+l;try{e[h?"replaceState":"pushState"](u,"",g),s.value=u}catch(m){console.error(m),n[h?"replace":"assign"](g)}}function o(l,u){i(l,Ce({},e.state,Ig(s.value.back,l,s.value.forward,!0),u,{position:s.value.position}),!0),r.value=l}function a(l,u){const h=Ce({},s.value,e.state,{forward:l,scroll:tl()});i(h.current,h,!0),i(l,Ce({},Ig(r.value,l,null),{position:h.position+1},u),!1),r.value=l}return{location:r,state:s,push:a,replace:o}}function Nv(t){t=YS(t);const e=dP(t),n=fP(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Ce({location:"",base:t,go:r,createHref:ZS.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function pP(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),Nv(t)}let es=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t}({});var it=function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t}(it||{});const gP={type:es.Static,value:""},mP=/[a-zA-Z0-9_]/;function _P(t){if(!t)return[[]];if(t==="/")return[[gP]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${u}": ${m}`)}let n=it.Static,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,l,u="",h="";function d(){u&&(n===it.Static?i.push({type:es.Static,value:u}):n===it.Param||n===it.ParamRegExp||n===it.ParamRegExpEnd?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:es.Param,value:u,regexp:h,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function g(){u+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==it.ParamRegExp){r=n,n=it.EscapeNext;continue}switch(n){case it.Static:l==="/"?(u&&d(),o()):l===":"?(d(),n=it.Param):g();break;case it.EscapeNext:g(),n=r;break;case it.Param:l==="("?n=it.ParamRegExp:mP.test(l)?g():(d(),n=it.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case it.ParamRegExp:l===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+l:n=it.ParamRegExpEnd:h+=l;break;case it.ParamRegExpEnd:d(),n=it.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,h="";break;default:e("Unknown state");break}}return n===it.ParamRegExp&&e(`Unfinished custom RegExp for param "${u}"`),d(),o(),s}const Ag="[^/]+?",yP={sensitive:!1,strict:!1,start:!0,end:!0};var Vt=function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t}(Vt||{});const vP=/[.+*?^${}()[\]/\\]/g;function wP(t,e){const n=Ce({},yP,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const h=u.length?[]:[Vt.Root];n.strict&&!u.length&&(s+="/");for(let d=0;d<u.length;d++){const g=u[d];let m=Vt.Segment+(n.sensitive?Vt.BonusCaseSensitive:0);if(g.type===es.Static)d||(s+="/"),s+=g.value.replace(vP,"\\$&"),m+=Vt.Static;else if(g.type===es.Param){const{value:w,repeatable:S,optional:N,regexp:x}=g;i.push({name:w,repeatable:S,optional:N});const O=x||Ag;if(O!==Ag){m+=Vt.BonusCustomRegExp;try{`${O}`}catch(C){throw new Error(`Invalid custom RegExp for param "${w}" (${O}): `+C.message)}}let T=S?`((?:${O})(?:/(?:${O}))*)`:`(${O})`;d||(T=N&&u.length<2?`(?:/${T})`:"/"+T),N&&(T+="?"),s+=T,m+=Vt.Dynamic,N&&(m+=Vt.BonusOptional),S&&(m+=Vt.BonusRepeatable),O===".*"&&(m+=Vt.BonusWildcard)}h.push(m)}r.push(h)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=Vt.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(u){const h=u.match(o),d={};if(!h)return null;for(let g=1;g<h.length;g++){const m=h[g]||"",w=i[g-1];d[w.name]=m&&w.repeatable?m.split("/"):m}return d}function l(u){let h="",d=!1;for(const g of t){(!d||!h.endsWith("/"))&&(h+="/"),d=!1;for(const m of g)if(m.type===es.Static)h+=m.value;else if(m.type===es.Param){const{value:w,repeatable:S,optional:N}=m,x=w in u?u[w]:"";if(mn(x)&&!S)throw new Error(`Provided param "${w}" is an array but it is not repeatable (* or + modifiers)`);const O=mn(x)?x.join("/"):x;if(!O)if(N)g.length<2&&(h.endsWith("/")?h=h.slice(0,-1):d=!0);else throw new Error(`Missing required param "${w}"`);h+=O}}return h||"/"}return{re:o,score:r,keys:i,parse:a,stringify:l}}function EP(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===Vt.Static+Vt.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===Vt.Static+Vt.Segment?1:-1:0}function Ov(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=EP(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(bg(r))return 1;if(bg(s))return-1}return s.length-r.length}function bg(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const TP={strict:!1,end:!0,sensitive:!1};function IP(t,e,n){const r=wP(_P(t.path),n),s=Ce(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function AP(t,e){const n=[],r=new Map;e=_g(TP,e);function s(d){return r.get(d)}function i(d,g,m){const w=!m,S=Sg(d);S.aliasOf=m&&m.record;const N=_g(e,d),x=[S];if("alias"in d){const C=typeof d.alias=="string"?[d.alias]:d.alias;for(const D of C)x.push(Sg(Ce({},S,{components:m?m.record.components:S.components,path:D,aliasOf:m?m.record:S})))}let O,T;for(const C of x){const{path:D}=C;if(g&&D[0]!=="/"){const M=g.record.path,E=M[M.length-1]==="/"?"":"/";C.path=g.record.path+(D&&E+D)}if(O=IP(C,g,N),m?m.alias.push(O):(T=T||O,T!==O&&T.alias.push(O),w&&d.name&&!Pg(O)&&o(d.name)),Dv(O)&&l(O),S.children){const M=S.children;for(let E=0;E<M.length;E++)i(M[E],O,m&&m.children[E])}m=m||O}return T?()=>{o(T)}:uo}function o(d){if(Pv(d)){const g=r.get(d);g&&(r.delete(d),n.splice(n.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=n.indexOf(d);g>-1&&(n.splice(g,1),d.record.name&&r.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return n}function l(d){const g=SP(d,n);n.splice(g,0,d),d.record.name&&!Pg(d)&&r.set(d.record.name,d)}function u(d,g){let m,w={},S,N;if("name"in d&&d.name){if(m=r.get(d.name),!m)throw ai(Ke.MATCHER_NOT_FOUND,{location:d});N=m.record.name,w=Ce(Rg(g.params,m.keys.filter(T=>!T.optional).concat(m.parent?m.parent.keys.filter(T=>T.optional):[]).map(T=>T.name)),d.params&&Rg(d.params,m.keys.map(T=>T.name))),S=m.stringify(w)}else if(d.path!=null)S=d.path,m=n.find(T=>T.re.test(S)),m&&(w=m.parse(S),N=m.record.name);else{if(m=g.name?r.get(g.name):n.find(T=>T.re.test(g.path)),!m)throw ai(Ke.MATCHER_NOT_FOUND,{location:d,currentLocation:g});N=m.record.name,w=Ce({},g.params,d.params),S=m.stringify(w)}const x=[];let O=m;for(;O;)x.unshift(O.record),O=O.parent;return{name:N,path:S,params:w,matched:x,meta:RP(x)}}t.forEach(d=>i(d));function h(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:h,getRoutes:a,getRecordMatcher:s}}function Rg(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Sg(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:bP(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function bP(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Pg(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function RP(t){return t.reduce((e,n)=>Ce(e,n.meta),{})}function SP(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Ov(t,e[i])<0?r=i:n=i+1}const s=PP(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function PP(t){let e=t;for(;e=e.parent;)if(Dv(e)&&Ov(t,e)===0)return e}function Dv({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Cg(t){const e=Lt(df),n=Lt(pf),r=Ht(()=>{const l=Le(t.to);return e.resolve(l)}),s=Ht(()=>{const{matched:l}=r.value,{length:u}=l,h=l[u-1],d=n.matched;if(!h||!d.length)return-1;const g=d.findIndex(oi.bind(null,h));if(g>-1)return g;const m=kg(l[u-2]);return u>1&&kg(h)===m&&d[d.length-1].path!==m?d.findIndex(oi.bind(null,l[u-2])):g}),i=Ht(()=>s.value>-1&&DP(n.params,r.value.params)),o=Ht(()=>s.value>-1&&s.value===n.matched.length-1&&Sv(n.params,r.value.params));function a(l={}){if(OP(l)){const u=e[Le(t.replace)?"replace":"push"](Le(t.to)).catch(uo);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:Ht(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}function CP(t){return t.length===1?t[0]:t}const kP=Fr({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Cg,setup(t,{slots:e}){const n=Ur(Cg(t)),{options:r}=Lt(df),s=Ht(()=>({[Ng(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Ng(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&CP(e.default(n));return t.custom?i:Wt("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),NP=kP;function OP(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function DP(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!mn(s)||s.length!==r.length||r.some((i,o)=>i.valueOf()!==s[o].valueOf()))return!1}return!0}function kg(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ng=(t,e,n)=>t??e??n,VP=Fr({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Lt(fh),s=Ht(()=>t.route||r.value),i=Lt(Tg,0),o=Ht(()=>{let u=Le(i);const{matched:h}=s.value;let d;for(;(d=h[u])&&!d.components;)u++;return u}),a=Ht(()=>s.value.matched[o.value]);is(Tg,Ht(()=>o.value+1)),is(lP,a),is(fh,s);const l=Yn();return Gs(()=>[l.value,a.value,t.name],([u,h,d],[g,m,w])=>{h&&(h.instances[d]=u,m&&m!==h&&u&&u===g&&(h.leaveGuards.size||(h.leaveGuards=m.leaveGuards),h.updateGuards.size||(h.updateGuards=m.updateGuards))),u&&h&&(!m||!oi(h,m)||!g)&&(h.enterCallbacks[d]||[]).forEach(S=>S(u))},{flush:"post"}),()=>{const u=s.value,h=t.name,d=a.value,g=d&&d.components[h];if(!g)return Og(n.default,{Component:g,route:u});const m=d.props[h],w=m?m===!0?u.params:typeof m=="function"?m(u):m:null,N=Wt(g,Ce({},w,e,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(d.instances[h]=null)},ref:l}));return Og(n.default,{Component:N,route:u})||N}}});function Og(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Vv=VP;function xP(t){const e=AP(t.routes,t),n=t.parseQuery||aP,r=t.stringifyQuery||Eg,s=t.history,i=Wi(),o=Wi(),a=Wi(),l=Io(hn);let u=hn;Ls&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=iu.bind(null,B=>""+B),d=iu.bind(null,qS),g=iu.bind(null,Po);function m(B,ee){let J,se;return Pv(B)?(J=e.getRecordMatcher(B),se=ee):se=B,e.addRoute(se,J)}function w(B){const ee=e.getRecordMatcher(B);ee&&e.removeRoute(ee)}function S(){return e.getRoutes().map(B=>B.record)}function N(B){return!!e.getRecordMatcher(B)}function x(B,ee){if(ee=Ce({},ee||l.value),typeof B=="string"){const k=ou(n,B,ee.path),L=e.resolve({path:k.path},ee),H=s.createHref(k.fullPath);return Ce(k,L,{params:g(L.params),hash:Po(k.hash),redirectedFrom:void 0,href:H})}let J;if(B.path!=null)J=Ce({},B,{path:ou(n,B.path,ee.path).path});else{const k=Ce({},B.params);for(const L in k)k[L]==null&&delete k[L];J=Ce({},B,{params:d(k)}),ee.params=d(ee.params)}const se=e.resolve(J,ee),_e=B.hash||"";se.params=h(g(se.params));const Ve=GS(r,Ce({},B,{hash:jS(_e),path:se.path})),b=s.createHref(Ve);return Ce({fullPath:Ve,hash:_e,query:r===Eg?cP(B.query):B.query||{}},se,{redirectedFrom:void 0,href:b})}function O(B){return typeof B=="string"?ou(n,B,l.value.path):Ce({},B)}function T(B,ee){if(u!==B)return ai(Ke.NAVIGATION_CANCELLED,{from:ee,to:B})}function C(B){return E(B)}function D(B){return C(Ce(O(B),{replace:!0}))}function M(B,ee){const J=B.matched[B.matched.length-1];if(J&&J.redirect){const{redirect:se}=J;let _e=typeof se=="function"?se(B,ee):se;return typeof _e=="string"&&(_e=_e.includes("?")||_e.includes("#")?_e=O(_e):{path:_e},_e.params={}),Ce({query:B.query,hash:B.hash,params:_e.path!=null?{}:B.params},_e)}}function E(B,ee){const J=u=x(B),se=l.value,_e=B.state,Ve=B.force,b=B.replace===!0,k=M(J,se);if(k)return E(Ce(O(k),{state:typeof k=="object"?Ce({},_e,k.state):_e,force:Ve,replace:b}),ee||J);const L=J;L.redirectedFrom=ee;let H;return!Ve&&zS(r,se,J)&&(H=ai(Ke.NAVIGATION_DUPLICATED,{to:L,from:se}),en(se,se,!0,!1)),(H?Promise.resolve(H):I(L,se)).catch(F=>Bn(F)?Bn(F,Ke.NAVIGATION_GUARD_REDIRECT)?F:ln(F):X(F,L,se)).then(F=>{if(F){if(Bn(F,Ke.NAVIGATION_GUARD_REDIRECT))return E(Ce({replace:b},O(F.to),{state:typeof F.to=="object"?Ce({},_e,F.to.state):_e,force:Ve}),ee||L)}else F=R(L,se,!0,b,_e);return P(L,se,F),F})}function v(B,ee){const J=T(B,ee);return J?Promise.reject(J):Promise.resolve()}function _(B){const ee=hr.values().next().value;return ee&&typeof ee.runWithContext=="function"?ee.runWithContext(B):B()}function I(B,ee){let J;const[se,_e,Ve]=uP(B,ee);J=cu(se.reverse(),"beforeRouteLeave",B,ee);for(const k of se)k.leaveGuards.forEach(L=>{J.push(Tr(L,B,ee))});const b=v.bind(null,B,ee);return J.push(b),Bt(J).then(()=>{J=[];for(const k of i.list())J.push(Tr(k,B,ee));return J.push(b),Bt(J)}).then(()=>{J=cu(_e,"beforeRouteUpdate",B,ee);for(const k of _e)k.updateGuards.forEach(L=>{J.push(Tr(L,B,ee))});return J.push(b),Bt(J)}).then(()=>{J=[];for(const k of Ve)if(k.beforeEnter)if(mn(k.beforeEnter))for(const L of k.beforeEnter)J.push(Tr(L,B,ee));else J.push(Tr(k.beforeEnter,B,ee));return J.push(b),Bt(J)}).then(()=>(B.matched.forEach(k=>k.enterCallbacks={}),J=cu(Ve,"beforeRouteEnter",B,ee,_),J.push(b),Bt(J))).then(()=>{J=[];for(const k of o.list())J.push(Tr(k,B,ee));return J.push(b),Bt(J)}).catch(k=>Bn(k,Ke.NAVIGATION_CANCELLED)?k:Promise.reject(k))}function P(B,ee,J){a.list().forEach(se=>_(()=>se(B,ee,J)))}function R(B,ee,J,se,_e){const Ve=T(B,ee);if(Ve)return Ve;const b=ee===hn,k=Ls?history.state:{};J&&(se||b?s.replace(B.fullPath,Ce({scroll:b&&k&&k.scroll},_e)):s.push(B.fullPath,_e)),l.value=B,en(B,ee,J,b),ln()}let A;function de(){A||(A=s.listen((B,ee,J)=>{if(!Gt.listening)return;const se=x(B),_e=M(se,Gt.currentRoute.value);if(_e){E(Ce(_e,{replace:!0,force:!0}),se).catch(uo);return}u=se;const Ve=l.value;Ls&&nP(wg(Ve.fullPath,J.delta),tl()),I(se,Ve).catch(b=>Bn(b,Ke.NAVIGATION_ABORTED|Ke.NAVIGATION_CANCELLED)?b:Bn(b,Ke.NAVIGATION_GUARD_REDIRECT)?(E(Ce(O(b.to),{force:!0}),se).then(k=>{Bn(k,Ke.NAVIGATION_ABORTED|Ke.NAVIGATION_DUPLICATED)&&!J.delta&&J.type===uh.pop&&s.go(-1,!1)}).catch(uo),Promise.reject()):(J.delta&&s.go(-J.delta,!1),X(b,se,Ve))).then(b=>{b=b||R(se,Ve,!1),b&&(J.delta&&!Bn(b,Ke.NAVIGATION_CANCELLED)?s.go(-J.delta,!1):J.type===uh.pop&&Bn(b,Ke.NAVIGATION_ABORTED|Ke.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),P(se,Ve,b)}).catch(uo)}))}let we=Wi(),te=Wi(),le;function X(B,ee,J){ln(B);const se=te.list();return se.length?se.forEach(_e=>_e(B,ee,J)):console.error(B),Promise.reject(B)}function Te(){return le&&l.value!==hn?Promise.resolve():new Promise((B,ee)=>{we.add([B,ee])})}function ln(B){return le||(le=!B,de(),we.list().forEach(([ee,J])=>B?J(B):ee()),we.reset()),B}function en(B,ee,J,se){const{scrollBehavior:_e}=t;if(!Ls||!_e)return Promise.resolve();const Ve=!J&&rP(wg(B.fullPath,0))||(se||!J)&&history.state&&history.state.scroll||null;return ys().then(()=>_e(B,ee,Ve)).then(b=>b&&tP(b)).catch(b=>X(b,B,ee))}const je=B=>s.go(B);let He;const hr=new Set,Gt={currentRoute:l,listening:!0,addRoute:m,removeRoute:w,clearRoutes:e.clearRoutes,hasRoute:N,getRoutes:S,resolve:x,options:t,push:C,replace:D,go:je,back:()=>je(-1),forward:()=>je(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:te.add,isReady:Te,install(B){B.component("RouterLink",NP),B.component("RouterView",Vv),B.config.globalProperties.$router=Gt,Object.defineProperty(B.config.globalProperties,"$route",{enumerable:!0,get:()=>Le(l)}),Ls&&!He&&l.value===hn&&(He=!0,C(s.location).catch(se=>{}));const ee={};for(const se in hn)Object.defineProperty(ee,se,{get:()=>l.value[se],enumerable:!0});B.provide(df,Gt),B.provide(pf,Kn(ee)),B.provide(fh,l);const J=B.unmount;hr.add(B),B.unmount=function(){hr.delete(B),hr.size<1&&(u=hn,A&&A(),A=null,l.value=hn,He=!1,le=!1),J()}}};function Bt(B){return B.reduce((ee,J)=>ee.then(()=>_(J)),Promise.resolve())}return Gt}function LP(t){return Lt(pf)}const MP=(t,e)=>e.path.replace(/(:\w+)\([^)]+\)/g,"$1").replace(/(:\w+)[?+*]/g,"$1").replace(/:\w+/g,n=>{var r;return((r=t.params[n.slice(1)])==null?void 0:r.toString())||""}),dh=(t,e)=>{const n=t.route.matched.find(s=>{var i;return((i=s.components)==null?void 0:i.default)===t.Component.type}),r=e??(n==null?void 0:n.meta.key)??(n&&MP(t.route,n));return typeof r=="function"?r(t.route):r},UP=(t,e)=>({default:()=>t?Wt(IA,t===!0?{}:t,e):e});function gf(t){return Array.isArray(t)?t:[t]}const FP="modulepreload",BP=function(t,e){return new URL(t,e).href},Dg={},ot=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=Promise.allSettled(n.map(u=>{if(u=BP(u,r),u in Dg)return;Dg[u]=!0;const h=u.endsWith(".css"),d=h?'[rel="stylesheet"]':"";if(!!r)for(let w=o.length-1;w>=0;w--){const S=o[w];if(S.href===u&&(!h||S.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${d}`))return;const m=document.createElement("link");if(m.rel=h?"stylesheet":FP,h||(m.as="script"),m.crossOrigin="",m.href=u,l&&m.setAttribute("nonce",l),document.head.appendChild(m),h)return new Promise((w,S)=>{m.addEventListener("load",w),m.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return e().catch(i)})},jP={middleware:"auth"},HP={middleware:"auth"},$P={middleware:"auth"},qP={middleware:"auth"},WP={middleware:"auth"},KP={middleware:"auth"},GP={layout:!1},zP={middleware:"auth"},QP={middleware:"auth"},JP={middleware:"auth"},YP={middleware:"auth"},lu=[{name:"announcements",path:"/announcements",meta:jP||{},component:()=>ot(()=>import("./-NYei-4w.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url)},{name:"card-expenses",path:"/card-expenses",meta:HP||{},component:()=>ot(()=>import("./e2cmJS1T.js"),[],import.meta.url)},{name:"expense",path:"/expense",meta:$P||{},component:()=>ot(()=>import("./CQN-_Dz5.js"),__vite__mapDeps([5,6,7,8,9]),import.meta.url)},{name:"expense-new",path:"/expense/new",meta:qP||{},component:()=>ot(()=>import("./Dr7xiIh_.js"),__vite__mapDeps([10,6,4,9]),import.meta.url)},{name:"health-checkups",path:"/health-checkups",meta:WP||{},component:()=>ot(()=>import("./DCAap1pA.js"),__vite__mapDeps([11,1,2,4]),import.meta.url)},{name:"index",path:"/",meta:KP||{},component:()=>ot(()=>import("./Rx_g20Q5.js"),__vite__mapDeps([12,6,7,4,13,9,14,3]),import.meta.url)},{name:"login",path:"/login",meta:GP||{},component:()=>ot(()=>import("./DFIQU3A_.js"),__vite__mapDeps([15,16]),import.meta.url)},{name:"notifications",path:"/notifications",component:()=>ot(()=>import("./easnLw_P.js"),__vite__mapDeps([17,18]),import.meta.url)},{name:"overtime",path:"/overtime",component:()=>ot(()=>import("./DKLHhxUN.js"),__vite__mapDeps([19,7,8,20,4]),import.meta.url)},{name:"overtime-new",path:"/overtime/new",component:()=>ot(()=>import("./DV1QmvOb.js"),__vite__mapDeps([21,6,20,4]),import.meta.url)},{name:"paid-leave",path:"/paid-leave",meta:zP||{},component:()=>ot(()=>import("./BnsphjTg.js"),__vite__mapDeps([22,6,7,8,4,13]),import.meta.url)},{name:"paid-leave-new",path:"/paid-leave/new",meta:QP||{},component:()=>ot(()=>import("./DrQHBhQ-.js"),__vite__mapDeps([23,6,4,13]),import.meta.url)},{name:"profile",path:"/profile",component:()=>ot(()=>import("./Czu4pRUY.js"),__vite__mapDeps([24,25]),import.meta.url)},{name:"users",path:"/users",meta:JP||{},component:()=>ot(()=>import("./CLO-QPjK.js"),__vite__mapDeps([26,4]),import.meta.url)},{name:"vehicle",path:"/vehicle",meta:YP||{},component:()=>ot(()=>import("./d3P1fMSo.js"),__vite__mapDeps([27,14,4]),import.meta.url)}],xv=(t,e,n)=>(e=e===!0?{}:e,{default:()=>{var r;return e?Wt(t,e,n):(r=n.default)==null?void 0:r.call(n)}});function Vg(t){const e=(t==null?void 0:t.meta.key)??t.path.replace(/(:\w+)\([^)]+\)/g,"$1").replace(/(:\w+)[?+*]/g,"$1").replace(/:\w+/g,n=>{var r;return((r=t.params[n.slice(1)])==null?void 0:r.toString())||""});return typeof e=="function"?e(t):e}function XP(t,e){return t===e||e===hn?!1:Vg(t)!==Vg(e)?!0:!t.matched.every((r,s)=>{var i,o;return r.components&&r.components.default===((o=(i=e.matched[s])==null?void 0:i.components)==null?void 0:o.default)})}const ZP={scrollBehavior(t,e,n){var u;const r=ze(),s=((u=on().options)==null?void 0:u.scrollBehaviorType)??"auto";let i=n||void 0;const o=typeof t.meta.scrollToTop=="function"?t.meta.scrollToTop(t,e):t.meta.scrollToTop;if(!i&&e&&t&&o!==!1&&XP(t,e)&&(i={left:0,top:0}),t.path===e.path)return e.hash&&!t.hash?{left:0,top:0}:t.hash?{el:t.hash,top:xg(t.hash),behavior:s}:!1;const a=h=>!!(h.meta.pageTransition??Zu),l=a(e)&&a(t)?"page:transition:finish":"page:finish";return new Promise(h=>{r.hooks.hookOnce(l,async()=>{await new Promise(d=>setTimeout(d,0)),t.hash&&(i={el:t.hash,top:xg(t.hash),behavior:s}),h(i)})})}};function xg(t){try{const e=document.querySelector(t);if(e)return(Number.parseFloat(getComputedStyle(e).scrollMarginTop)||0)+(Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)||0)}catch{}return 0}const eC={hashMode:!1,scrollBehaviorType:"auto"},rn={...eC,...ZP},tC=async t=>{var l;let e,n;if(!((l=t.meta)!=null&&l.validate))return;const r=ze(),s=on(),i=([e,n]=Js(()=>Promise.resolve(t.meta.validate(t))),e=await e,n(),e);if(i===!0)return;const o=Zc({statusCode:i&&i.statusCode||404,statusMessage:i&&i.statusMessage||`Page Not Found: ${t.fullPath}`,data:{path:t.fullPath}}),a=s.beforeResolve(u=>{if(a(),u===t){const h=s.afterEach(async()=>{h(),await r.runWithContext(()=>js(o)),window==null||window.history.pushState({},"",t.fullPath)});return!1}})},nC=async t=>{let e,n;const r=([e,n]=Js(()=>hf(t.path)),e=await e,n(),e);if(r.redirect)return vs(r.redirect,{acceptRelative:!0})?(window.location.href=r.redirect,!1):r.redirect},rC=[tC,nC],ho={auth:()=>ot(()=>import("./Bja8E4ra.js"),[],import.meta.url)};function sC(t,e,n){const{pathname:r,search:s,hash:i}=e,o=t.indexOf("#");if(o>-1){const u=i.includes(t.slice(o))?t.slice(o).length:1;let h=i.slice(u);return h[0]!=="/"&&(h="/"+h),ng(h,"")}const a=ng(r,t),l=!n||PR(a,n,{trailingSlash:!0})?a:n;return l+(l.includes("?")?"":s)+i}const iC=cn({name:"nuxt:router",enforce:"pre",async setup(t){var N;let e,n,r=Yc().app.baseURL;rn.hashMode&&!r.includes("#")&&(r+="#");const s=((N=rn.history)==null?void 0:N.call(rn,r))??(rn.hashMode?pP(r):Nv(r)),i=rn.routes?([e,n]=Js(()=>rn.routes(lu)),e=await e,n(),e??lu):lu;let o;const a=xP({...rn,scrollBehavior:(x,O,T)=>{if(O===hn){o=T;return}if(rn.scrollBehavior){if(a.options.scrollBehavior=rn.scrollBehavior,"scrollRestoration"in window.history){const C=a.beforeEach(()=>{C(),window.history.scrollRestoration="manual"})}return rn.scrollBehavior(x,hn,o||T)}},history:s,routes:i});"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto"),t.vueApp.use(a);const l=Io(a.currentRoute.value);a.afterEach((x,O)=>{l.value=O}),Object.defineProperty(t.vueApp.config.globalProperties,"previousRoute",{get:()=>l.value});const u=sC(r,window.location,t.payload.path),h=Io(a.currentRoute.value),d=()=>{h.value=a.currentRoute.value};t.hook("page:finish",d),a.afterEach((x,O)=>{var T,C,D,M;((C=(T=x.matched[0])==null?void 0:T.components)==null?void 0:C.default)===((M=(D=O.matched[0])==null?void 0:D.components)==null?void 0:M.default)&&d()});const g={};for(const x in h.value)Object.defineProperty(g,x,{get:()=>h.value[x],enumerable:!0});t._route=Kn(g),t._middleware=t._middleware||{global:[],named:{}};const m=Xc();a.afterEach(async(x,O,T)=>{delete t._processingMiddleware,!t.isHydrating&&m.value&&await t.runWithContext(A0),T&&await t.callHook("page:loading:end"),x.matched.length===0&&await t.runWithContext(()=>js(nh({statusCode:404,fatal:!1,statusMessage:`Page not found: ${x.fullPath}`,data:{path:x.fullPath}})))});try{[e,n]=Js(()=>a.isReady()),await e,n()}catch(x){[e,n]=Js(()=>t.runWithContext(()=>js(x))),await e,n()}const w=u!==a.currentRoute.value.fullPath?a.resolve(u):a.currentRoute.value;d();const S=t.payload.state._layout;return a.beforeEach(async(x,O)=>{var T;await t.callHook("page:loading:start"),x.meta=Ur(x.meta),t.isHydrating&&S&&!On(x.meta.layout)&&(x.meta.layout=S),t._processingMiddleware=!0;{const C=new Set([...rC,...t._middleware.global]);for(const D of x.matched){const M=D.meta.middleware;if(M)for(const E of gf(M))C.add(E)}{const D=await t.runWithContext(()=>hf(x.path));if(D.appMiddleware)for(const M in D.appMiddleware)D.appMiddleware[M]?C.add(M):C.delete(M)}for(const D of C){const M=typeof D=="string"?t._middleware.named[D]||await((T=ho[D])==null?void 0:T.call(ho).then(v=>v.default||v)):D;if(!M)throw new Error(`Unknown route middleware: '${D}'.`);const E=await t.runWithContext(()=>M(x,O));if(!t.payload.serverRendered&&t.isHydrating&&(E===!1||E instanceof Error)){const v=E||nh({statusCode:404,statusMessage:`Page Not Found: ${u}`});return await t.runWithContext(()=>js(v)),!1}if(E!==!0&&(E||E===!1))return E}}}),a.onError(async()=>{delete t._processingMiddleware,await t.callHook("page:loading:end")}),t.hooks.hookOnce("app:created",async()=>{try{"name"in w&&(w.name=void 0),await a.replace({...w,force:!0}),a.options.scrollBehavior=rn.scrollBehavior}catch(x){await t.runWithContext(()=>js(x))}}),{provide:{router:a}}}}),Lg=globalThis.requestIdleCallback||(t=>{const e=Date.now(),n={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-e))};return setTimeout(()=>{t(n)},1)}),bU=globalThis.cancelIdleCallback||(t=>{clearTimeout(t)}),mf=t=>{const e=ze();e.isHydrating?e.hooks.hookOnce("app:suspense:resolve",()=>{Lg(()=>t())}):Lg(()=>t())},oC=cn({name:"nuxt:payload",setup(t){on().beforeResolve(async(e,n)=>{if(e.path===n.path)return;const r=await gg(e.path);r&&Object.assign(t.static.data,r.data)}),mf(()=>{var e;t.hooks.hook("link:prefetch",async n=>{const{hostname:r}=new URL(n,window.location.href);r===window.location.hostname&&await gg(n)}),((e=navigator.connection)==null?void 0:e.effectiveType)!=="slow-2g"&&setTimeout(el,1e3)})}}),aC=cn(()=>{const t=on();mf(()=>{t.beforeResolve(async()=>{await new Promise(e=>{setTimeout(e,100),requestAnimationFrame(()=>{setTimeout(e,0)})})})})}),cC=cn(t=>{let e;async function n(){const r=await el();e&&clearTimeout(e),e=setTimeout(n,ag);try{const s=await $fetch(lf("builds/latest.json")+`?${Date.now()}`);s.id!==r.id&&t.hooks.callHook("app:manifest:update",s)}catch{}}mf(()=>{e=setTimeout(n,ag)})});function lC(t={}){const e=t.path||window.location.pathname;let n={};try{n=fc(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(t.force||(n==null?void 0:n.path)!==e||(n==null?void 0:n.expires)<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:e,expires:Date.now()+(t.ttl??1e4)}))}catch{}if(t.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:ze().payload.state}))}catch{}window.location.pathname!==e?window.location.href=e:window.location.reload()}}const uC=cn({name:"nuxt:chunk-reload",setup(t){const e=on(),n=Yc(),r=new Set;e.beforeEach(()=>{r.clear()}),t.hook("app:chunkError",({error:i})=>{r.add(i)});function s(i){const a="href"in i&&i.href[0]==="#"?n.app.baseURL+i.href:cf(n.app.baseURL,i.fullPath);lC({path:a,persistState:!0})}t.hook("app:manifest:update",()=>{e.beforeResolve(s)}),e.onError((i,o)=>{r.has(i)&&s(o)})}}),hC=cn({name:"nuxt:global-components"}),Cr={default:()=>ot(()=>import("./VqexWPal.js"),__vite__mapDeps([28,6,16,25,18,29]),import.meta.url)},fC=cn({name:"nuxt:prefetch",setup(t){const e=on();t.hooks.hook("app:mounted",()=>{e.beforeEach(async n=>{var s;const r=(s=n==null?void 0:n.meta)==null?void 0:s.layout;r&&typeof Cr[r]=="function"&&await Cr[r]()})}),t.hooks.hook("link:prefetch",n=>{if(vs(n))return;const r=e.resolve(n);if(!r)return;const s=r.meta.layout;let i=gf(r.meta.middleware);i=i.filter(o=>typeof o=="string");for(const o of i)typeof ho[o]=="function"&&ho[o]();s&&typeof Cr[s]=="function"&&Cr[s]()})}});var Mg={};/**
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
 */const Lv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},dC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Mv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,h=i>>2,d=(i&3)<<4|a>>4;let g=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(g=64)),r.push(n[h],n[d],n[g],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Lv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):dC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||u==null||d==null)throw new pC;const g=i<<2|a>>4;if(r.push(g),u!==64){const m=a<<4&240|u>>2;if(r.push(m),d!==64){const w=u<<6&192|d;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class pC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const gC=function(t){const e=Lv(t);return Mv.encodeByteArray(e,!0)},vc=function(t){return gC(t).replace(/\./g,"")},Uv=function(t){try{return Mv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function mC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const _C=()=>mC().__FIREBASE_DEFAULTS__,yC=()=>{if(typeof process>"u"||typeof Mg>"u")return;const t=Mg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},vC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Uv(t[1]);return e&&JSON.parse(e)},nl=()=>{try{return _C()||yC()||vC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Fv=t=>{var e,n;return(n=(e=nl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Bv=t=>{const e=Fv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},jv=()=>{var t;return(t=nl())===null||t===void 0?void 0:t.config},Hv=t=>{var e;return(e=nl())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class wC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function $v(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[vc(JSON.stringify(n)),vc(JSON.stringify(o)),""].join(".")}/**
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
 */function Ct(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function EC(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ct())}function TC(){var t;const e=(t=nl())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(globalThis.process)==="[object process]"}catch{return!1}}function IC(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function AC(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function bC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function RC(){const t=Ct();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function SC(){return!TC()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function qv(){try{return typeof indexedDB=="object"}catch{return!1}}function Wv(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function PC(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const CC="FirebaseError";class wn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=CC,Object.setPrototypeOf(this,wn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ws.prototype.create)}}class ws{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?kC(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new wn(s,a,r)}}function kC(t,e){return t.replace(NC,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const NC=/\{\$([^}]+)}/g;function OC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Co(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Ug(i)&&Ug(o)){if(!Co(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ug(t){return t!==null&&typeof t=="object"}/**
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
 */function Ko(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Xi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Zi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function DC(t,e){const n=new VC(t,e);return n.subscribe.bind(n)}class VC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");xC(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=uu),s.error===void 0&&(s.error=uu),s.complete===void 0&&(s.complete=uu);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function xC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function uu(){}/**
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
 */function De(t){return t&&t._delegate?t._delegate:t}class an{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Xr="[DEFAULT]";/**
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
 */class LC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new wC;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(UC(e))try{this.getOrInitializeService({instanceIdentifier:Xr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Xr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Xr){return this.instances.has(e)}getOptions(e=Xr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:MC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Xr){return this.component?this.component.multipleInstances?e:Xr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function MC(t){return t===Xr?void 0:t}function UC(t){return t.instantiationMode==="EAGER"}/**
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
 */class FC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new LC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ve;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ve||(ve={}));const BC={debug:ve.DEBUG,verbose:ve.VERBOSE,info:ve.INFO,warn:ve.WARN,error:ve.ERROR,silent:ve.SILENT},jC=ve.INFO,HC={[ve.DEBUG]:"log",[ve.VERBOSE]:"log",[ve.INFO]:"info",[ve.WARN]:"warn",[ve.ERROR]:"error"},$C=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=HC[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _f{constructor(e){this.name=e,this._logLevel=jC,this._logHandler=$C,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?BC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ve.DEBUG,...e),this._logHandler(this,ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ve.VERBOSE,...e),this._logHandler(this,ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ve.INFO,...e),this._logHandler(this,ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ve.WARN,...e),this._logHandler(this,ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ve.ERROR,...e),this._logHandler(this,ve.ERROR,...e)}}const qC=(t,e)=>e.some(n=>t instanceof n);let Fg,Bg;function WC(){return Fg||(Fg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function KC(){return Bg||(Bg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Kv=new WeakMap,ph=new WeakMap,Gv=new WeakMap,hu=new WeakMap,yf=new WeakMap;function GC(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(er(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Kv.set(n,t)}).catch(()=>{}),yf.set(e,t),e}function zC(t){if(ph.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ph.set(t,e)}let gh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ph.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Gv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return er(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function QC(t){gh=t(gh)}function JC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(fu(this),e,...n);return Gv.set(r,e.sort?e.sort():[e]),er(r)}:KC().includes(t)?function(...e){return t.apply(fu(this),e),er(Kv.get(this))}:function(...e){return er(t.apply(fu(this),e))}}function YC(t){return typeof t=="function"?JC(t):(t instanceof IDBTransaction&&zC(t),qC(t,WC())?new Proxy(t,gh):t)}function er(t){if(t instanceof IDBRequest)return GC(t);if(hu.has(t))return hu.get(t);const e=YC(t);return e!==t&&(hu.set(t,e),yf.set(e,t)),e}const fu=t=>yf.get(t);function rl(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=er(o);return r&&o.addEventListener("upgradeneeded",l=>{r(er(o.result),l.oldVersion,l.newVersion,er(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}function du(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",r=>e(r.oldVersion,r)),er(n).then(()=>{})}const XC=["get","getKey","getAll","getAllKeys","count"],ZC=["put","add","delete","clear"],pu=new Map;function jg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(pu.get(e))return pu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=ZC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||XC.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&l.done]))[0]};return pu.set(e,i),i}QC(t=>({...t,get:(e,n,r)=>jg(e,n)||t.get(e,n,r),has:(e,n)=>!!jg(e,n)||t.has(e,n)}));/**
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
 */class ek{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(tk(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function tk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const mh="@firebase/app",Hg="0.10.13";/**
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
 */const ir=new _f("@firebase/app"),nk="@firebase/app-compat",rk="@firebase/analytics-compat",sk="@firebase/analytics",ik="@firebase/app-check-compat",ok="@firebase/app-check",ak="@firebase/auth",ck="@firebase/auth-compat",lk="@firebase/database",uk="@firebase/data-connect",hk="@firebase/database-compat",fk="@firebase/functions",dk="@firebase/functions-compat",pk="@firebase/installations",gk="@firebase/installations-compat",mk="@firebase/messaging",_k="@firebase/messaging-compat",yk="@firebase/performance",vk="@firebase/performance-compat",wk="@firebase/remote-config",Ek="@firebase/remote-config-compat",Tk="@firebase/storage",Ik="@firebase/storage-compat",Ak="@firebase/firestore",bk="@firebase/vertexai-preview",Rk="@firebase/firestore-compat",Sk="firebase",Pk="10.14.1";/**
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
 */const _h="[DEFAULT]",Ck={[mh]:"fire-core",[nk]:"fire-core-compat",[sk]:"fire-analytics",[rk]:"fire-analytics-compat",[ok]:"fire-app-check",[ik]:"fire-app-check-compat",[ak]:"fire-auth",[ck]:"fire-auth-compat",[lk]:"fire-rtdb",[uk]:"fire-data-connect",[hk]:"fire-rtdb-compat",[fk]:"fire-fn",[dk]:"fire-fn-compat",[pk]:"fire-iid",[gk]:"fire-iid-compat",[mk]:"fire-fcm",[_k]:"fire-fcm-compat",[yk]:"fire-perf",[vk]:"fire-perf-compat",[wk]:"fire-rc",[Ek]:"fire-rc-compat",[Tk]:"fire-gcs",[Ik]:"fire-gcs-compat",[Ak]:"fire-fst",[Rk]:"fire-fst-compat",[bk]:"fire-vertex","fire-js":"fire-js",[Sk]:"fire-js-all"};/**
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
 */const ko=new Map,kk=new Map,yh=new Map;function $g(t,e){try{t.container.addComponent(e)}catch(n){ir.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function _n(t){const e=t.name;if(yh.has(e))return ir.debug(`There were multiple attempts to register component ${e}.`),!1;yh.set(e,t);for(const n of ko.values())$g(n,t);for(const n of kk.values())$g(n,t);return!0}function Es(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Gn(t){return t.settings!==void 0}/**
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
 */const Nk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Or=new ws("app","Firebase",Nk);/**
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
 */class Ok{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new an("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Or.create("app-deleted",{appName:this._name})}}/**
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
 */const Ts=Pk;function zv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:_h,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Or.create("bad-app-name",{appName:String(s)});if(n||(n=jv()),!n)throw Or.create("no-options");const i=ko.get(s);if(i){if(Co(n,i.options)&&Co(r,i.config))return i;throw Or.create("duplicate-app",{appName:s})}const o=new FC(s);for(const l of yh.values())o.addComponent(l);const a=new Ok(n,r,o);return ko.set(s,a),a}function Go(t=_h){const e=ko.get(t);if(!e&&t===_h&&jv())return zv();if(!e)throw Or.create("no-app",{appName:t});return e}function Dk(){return Array.from(ko.values())}function Kt(t,e,n){var r;let s=(r=Ck[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ir.warn(a.join(" "));return}_n(new an(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Vk="firebase-heartbeat-database",xk=1,No="firebase-heartbeat-store";let gu=null;function Qv(){return gu||(gu=rl(Vk,xk,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(No)}catch(n){console.warn(n)}}}}).catch(t=>{throw Or.create("idb-open",{originalErrorMessage:t.message})})),gu}async function Lk(t){try{const n=(await Qv()).transaction(No),r=await n.objectStore(No).get(Jv(t));return await n.done,r}catch(e){if(e instanceof wn)ir.warn(e.message);else{const n=Or.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ir.warn(n.message)}}}async function qg(t,e){try{const r=(await Qv()).transaction(No,"readwrite");await r.objectStore(No).put(e,Jv(t)),await r.done}catch(n){if(n instanceof wn)ir.warn(n.message);else{const r=Or.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ir.warn(r.message)}}}function Jv(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Mk=1024,Uk=30*24*60*60*1e3;class Fk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new jk(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Wg();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Uk}),this._storage.overwrite(this._heartbeatsCache))}catch(r){ir.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Wg(),{heartbeatsToSend:r,unsentEntries:s}=Bk(this._heartbeatsCache.heartbeats),i=vc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return ir.warn(n),""}}}function Wg(){return new Date().toISOString().substring(0,10)}function Bk(t,e=Mk){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Kg(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Kg(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class jk{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return qv()?Wv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Lk(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return qg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return qg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Kg(t){return vc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Hk(t){_n(new an("platform-logger",e=>new ek(e),"PRIVATE")),_n(new an("heartbeat",e=>new Fk(e),"PRIVATE")),Kt(mh,Hg,t),Kt(mh,Hg,"esm2017"),Kt("fire-js","")}Hk("");var $k="firebase",qk="10.14.1";/**
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
 */Kt($k,qk,"app");function vf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Yv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Wk=Yv,Xv=new ws("auth","Firebase",Yv());/**
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
 */const wc=new _f("@firebase/auth");function Kk(t,...e){wc.logLevel<=ve.WARN&&wc.warn(`Auth (${Ts}): ${t}`,...e)}function Wa(t,...e){wc.logLevel<=ve.ERROR&&wc.error(`Auth (${Ts}): ${t}`,...e)}/**
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
 */function yn(t,...e){throw wf(t,...e)}function Pn(t,...e){return wf(t,...e)}function Zv(t,e,n){const r=Object.assign(Object.assign({},Wk()),{[e]:n});return new ws("auth","Firebase",r).create(e,{appName:t.name})}function Dr(t){return Zv(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function wf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Xv.create(t,...e)}function he(t,e,...n){if(!t)throw wf(e,...n)}function zn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Wa(e),new Error(e)}function or(t,e){t||zn(e)}/**
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
 */function vh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Gk(){return Gg()==="http:"||Gg()==="https:"}function Gg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function zk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Gk()||AC()||"connection"in navigator)?navigator.onLine:!0}function Qk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class zo{constructor(e,n){this.shortDelay=e,this.longDelay=n,or(n>e,"Short delay should be less than long delay!"),this.isMobile=EC()||bC()}get(){return zk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ef(t,e){or(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class ew{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;zn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;zn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;zn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Jk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Yk=new zo(3e4,6e4);function Br(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function xn(t,e,n,r,s={}){return tw(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Ko(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:l},i);return IC()||(u.referrerPolicy="no-referrer"),ew.fetch()(nw(t,t.config.apiHost,n,a),u)})}async function tw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Jk),e);try{const s=new Zk(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Da(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Da(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Da(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Da(t,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Zv(t,h,u);yn(t,h)}}catch(s){if(s instanceof wn)throw s;yn(t,"network-request-failed",{message:String(s)})}}async function sl(t,e,n,r,s={}){const i=await xn(t,e,n,r,s);return"mfaPendingCredential"in i&&yn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function nw(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Ef(t.config,s):`${t.config.apiScheme}://${s}`}function Xk(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Zk{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Pn(this.auth,"network-request-failed")),Yk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Da(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Pn(t,e,r);return s.customData._tokenResponse=n,s}function zg(t){return t!==void 0&&t.enterprise!==void 0}class eN{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Xk(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function tN(t,e){return xn(t,"GET","/v2/recaptchaConfig",Br(t,e))}/**
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
 */async function nN(t,e){return xn(t,"POST","/v1/accounts:delete",e)}async function rw(t,e){return xn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function fo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function rN(t,e=!1){const n=De(t),r=await n.getIdToken(e),s=Tf(r);he(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:fo(mu(s.auth_time)),issuedAtTime:fo(mu(s.iat)),expirationTime:fo(mu(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function mu(t){return Number(t)*1e3}function Tf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Wa("JWT malformed, contained fewer than 3 sections"),null;try{const s=Uv(n);return s?JSON.parse(s):(Wa("Failed to decode base64 JWT payload"),null)}catch(s){return Wa("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Qg(t){const e=Tf(t);return he(e,"internal-error"),he(typeof e.exp<"u","internal-error"),he(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ci(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof wn&&sN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function sN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class iN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class wh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=fo(this.lastLoginAt),this.creationTime=fo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ec(t){var e;const n=t.auth,r=await t.getIdToken(),s=await ci(t,rw(n,{idToken:r}));he(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?sw(i.providerUserInfo):[],a=aN(t.providerData,o),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),h=l?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new wh(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,d)}async function oN(t){const e=De(t);await Ec(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function aN(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function sw(t){return t.map(e=>{var{providerId:n}=e,r=vf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function cN(t,e){const n=await tw(t,{},async()=>{const r=Ko({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=nw(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ew.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function lN(t,e){return xn(t,"POST","/v2/accounts:revokeToken",Br(t,e))}/**
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
 */class Ys{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){he(e.idToken,"internal-error"),he(typeof e.idToken<"u","internal-error"),he(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Qg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){he(e.length!==0,"internal-error");const n=Qg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(he(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await cN(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ys;return r&&(he(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(he(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(he(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ys,this.toJSON())}_performRefresh(){return zn("not implemented")}}/**
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
 */function yr(t,e){he(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Qn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=vf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new iN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new wh(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ci(this,this.stsTokenManager.getToken(this.auth,e));return he(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return rN(this,e)}reload(){return oN(this)}_assign(e){this!==e&&(he(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Qn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){he(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ec(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Gn(this.auth.app))return Promise.reject(Dr(this.auth));const e=await this.getIdToken();return await ci(this,nN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,l,u,h;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,S=(a=n.tenantId)!==null&&a!==void 0?a:void 0,N=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,x=(u=n.createdAt)!==null&&u!==void 0?u:void 0,O=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:T,emailVerified:C,isAnonymous:D,providerData:M,stsTokenManager:E}=n;he(T&&E,e,"internal-error");const v=Ys.fromJSON(this.name,E);he(typeof T=="string",e,"internal-error"),yr(d,e.name),yr(g,e.name),he(typeof C=="boolean",e,"internal-error"),he(typeof D=="boolean",e,"internal-error"),yr(m,e.name),yr(w,e.name),yr(S,e.name),yr(N,e.name),yr(x,e.name),yr(O,e.name);const _=new Qn({uid:T,auth:e,email:g,emailVerified:C,displayName:d,isAnonymous:D,photoURL:w,phoneNumber:m,tenantId:S,stsTokenManager:v,createdAt:x,lastLoginAt:O});return M&&Array.isArray(M)&&(_.providerData=M.map(I=>Object.assign({},I))),N&&(_._redirectEventId=N),_}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ys;s.updateFromServerResponse(n);const i=new Qn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ec(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];he(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?sw(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new Ys;a.updateFromIdToken(r);const l=new Qn({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new wh(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
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
 */const Jg=new Map;function Jn(t){or(t instanceof Function,"Expected a class definition");let e=Jg.get(t);return e?(or(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Jg.set(t,e),e)}/**
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
 */class iw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}iw.type="NONE";const Yg=iw;/**
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
 */function Ka(t,e,n){return`firebase:${t}:${e}:${n}`}class Xs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ka(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ka("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Qn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Xs(Jn(Yg),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Jn(Yg);const o=Ka(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const h=await u._get(o);if(h){const d=Qn._fromJSON(e,h);u!==i&&(a=d),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Xs(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Xs(i,e,r))}}/**
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
 */function Xg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(lw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ow(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(hw(e))return"Blackberry";if(fw(e))return"Webos";if(aw(e))return"Safari";if((e.includes("chrome/")||cw(e))&&!e.includes("edge/"))return"Chrome";if(uw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ow(t=Ct()){return/firefox\//i.test(t)}function aw(t=Ct()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function cw(t=Ct()){return/crios\//i.test(t)}function lw(t=Ct()){return/iemobile/i.test(t)}function uw(t=Ct()){return/android/i.test(t)}function hw(t=Ct()){return/blackberry/i.test(t)}function fw(t=Ct()){return/webos/i.test(t)}function If(t=Ct()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function uN(t=Ct()){var e;return If(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function hN(){return RC()&&document.documentMode===10}function dw(t=Ct()){return If(t)||uw(t)||fw(t)||hw(t)||/windows phone/i.test(t)||lw(t)}/**
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
 */function pw(t,e=[]){let n;switch(t){case"Browser":n=Xg(Ct());break;case"Worker":n=`${Xg(Ct())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ts}/${r}`}/**
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
 */class fN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function dN(t,e={}){return xn(t,"GET","/v2/passwordPolicy",Br(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const pN=6;class gN{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:pN,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class mN{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Zg(this),this.idTokenSubscription=new Zg(this),this.beforeStateQueue=new fN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Xv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Jn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Xs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await rw(this,{idToken:e}),r=await Qn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Gn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return he(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ec(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Qk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Gn(this.app))return Promise.reject(Dr(this));const n=e?De(e):null;return n&&he(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&he(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Gn(this.app)?Promise.reject(Dr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Gn(this.app)?Promise.reject(Dr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Jn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await dN(this),n=new gN(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ws("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await lN(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Jn(e)||this._popupRedirectResolver;he(n,this,"argument-error"),this.redirectPersistenceManager=await Xs.create(this,[Jn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(he(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return he(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=pw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Kk(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Is(t){return De(t)}class Zg{constructor(e){this.auth=e,this.observer=null,this.addObserver=DC(n=>this.observer=n)}get next(){return he(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let il={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function _N(t){il=t}function gw(t){return il.loadJS(t)}function yN(){return il.recaptchaEnterpriseScript}function vN(){return il.gapiScript}function wN(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const EN="recaptcha-enterprise",TN="NO_RECAPTCHA";class IN{constructor(e){this.type=EN,this.auth=Is(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{tN(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new eN(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function s(i,o,a){const l=window.grecaptcha;zg(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(TN)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&zg(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=yN();l.length!==0&&(l+=a),gw(l).then(()=>{s(a,i,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function em(t,e,n,r=!1){const s=new IN(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Eh(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await em(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await em(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function AN(t,e){const n=Es(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Co(i,e??{}))return s;yn(s,"already-initialized")}return n.initialize({options:e})}function bN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Jn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function RN(t,e,n){const r=Is(t);he(r._canInitEmulator,r,"emulator-config-failed"),he(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=mw(e),{host:o,port:a}=SN(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),PN()}function mw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function SN(t){const e=mw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:tm(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:tm(o)}}}function tm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function PN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Af{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return zn("not implemented")}_getIdTokenResponse(e){return zn("not implemented")}_linkToIdToken(e,n){return zn("not implemented")}_getReauthenticationResolver(e){return zn("not implemented")}}async function CN(t,e){return xn(t,"POST","/v1/accounts:update",e)}async function kN(t,e){return xn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function NN(t,e){return sl(t,"POST","/v1/accounts:signInWithPassword",Br(t,e))}async function ON(t,e){return xn(t,"POST","/v1/accounts:sendOobCode",Br(t,e))}async function DN(t,e){return ON(t,e)}/**
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
 */async function VN(t,e){return sl(t,"POST","/v1/accounts:signInWithEmailLink",Br(t,e))}async function xN(t,e){return sl(t,"POST","/v1/accounts:signInWithEmailLink",Br(t,e))}/**
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
 */class Oo extends Af{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Oo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Oo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Eh(e,n,"signInWithPassword",NN);case"emailLink":return VN(e,{email:this._email,oobCode:this._password});default:yn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Eh(e,r,"signUpPassword",kN);case"emailLink":return xN(e,{idToken:n,email:this._email,oobCode:this._password});default:yn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Zs(t,e){return sl(t,"POST","/v1/accounts:signInWithIdp",Br(t,e))}/**
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
 */const LN="http://localhost";class hs extends Af{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new hs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):yn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=vf(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new hs(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Zs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Zs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Zs(e,n)}buildRequest(){const e={requestUri:LN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ko(n)}return e}}/**
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
 */function MN(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function UN(t){const e=Xi(Zi(t)).link,n=e?Xi(Zi(e)).deep_link_id:null,r=Xi(Zi(t)).deep_link_id;return(r?Xi(Zi(r)).link:null)||r||n||e||t}class bf{constructor(e){var n,r,s,i,o,a;const l=Xi(Zi(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,h=(r=l.oobCode)!==null&&r!==void 0?r:null,d=MN((s=l.mode)!==null&&s!==void 0?s:null);he(u&&h&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=h,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=UN(e);try{return new bf(n)}catch{return null}}}/**
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
 */class Ii{constructor(){this.providerId=Ii.PROVIDER_ID}static credential(e,n){return Oo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=bf.parseLink(n);return he(r,"argument-error"),Oo._fromEmailAndCode(e,r.code,r.tenantId)}}Ii.PROVIDER_ID="password";Ii.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ii.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class _w{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Qo extends _w{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ar extends Qo{constructor(){super("facebook.com")}static credential(e){return hs._fromParams({providerId:Ar.PROVIDER_ID,signInMethod:Ar.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ar.credentialFromTaggedObject(e)}static credentialFromError(e){return Ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ar.credential(e.oauthAccessToken)}catch{return null}}}Ar.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ar.PROVIDER_ID="facebook.com";/**
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
 */class br extends Qo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return hs._fromParams({providerId:br.PROVIDER_ID,signInMethod:br.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return br.credentialFromTaggedObject(e)}static credentialFromError(e){return br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return br.credential(n,r)}catch{return null}}}br.GOOGLE_SIGN_IN_METHOD="google.com";br.PROVIDER_ID="google.com";/**
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
 */class Rr extends Qo{constructor(){super("github.com")}static credential(e){return hs._fromParams({providerId:Rr.PROVIDER_ID,signInMethod:Rr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rr.credentialFromTaggedObject(e)}static credentialFromError(e){return Rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rr.credential(e.oauthAccessToken)}catch{return null}}}Rr.GITHUB_SIGN_IN_METHOD="github.com";Rr.PROVIDER_ID="github.com";/**
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
 */class Sr extends Qo{constructor(){super("twitter.com")}static credential(e,n){return hs._fromParams({providerId:Sr.PROVIDER_ID,signInMethod:Sr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Sr.credentialFromTaggedObject(e)}static credentialFromError(e){return Sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Sr.credential(n,r)}catch{return null}}}Sr.TWITTER_SIGN_IN_METHOD="twitter.com";Sr.PROVIDER_ID="twitter.com";/**
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
 */class li{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Qn._fromIdTokenResponse(e,r,s),o=nm(r);return new li({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=nm(r);return new li({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function nm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Tc extends wn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Tc.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Tc(e,n,r,s)}}function yw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Tc._fromErrorAndOperation(t,i,e,r):i})}async function FN(t,e,n=!1){const r=await ci(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return li._forOperation(t,"link",r)}/**
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
 */async function vw(t,e,n=!1){const{auth:r}=t;if(Gn(r.app))return Promise.reject(Dr(r));const s="reauthenticate";try{const i=await ci(t,yw(r,s,e,t),n);he(i.idToken,r,"internal-error");const o=Tf(i.idToken);he(o,r,"internal-error");const{sub:a}=o;return he(t.uid===a,r,"user-mismatch"),li._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&yn(r,"user-mismatch"),i}}/**
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
 */async function ww(t,e,n=!1){if(Gn(t.app))return Promise.reject(Dr(t));const r="signIn",s=await yw(t,r,e),i=await li._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function BN(t,e){return ww(Is(t),e)}async function RU(t,e){return vw(De(t),e)}/**
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
 */async function jN(t){const e=Is(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function SU(t,e,n){const r=Is(t);await Eh(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",DN)}function HN(t,e,n){return Gn(t.app)?Promise.reject(Dr(t)):BN(De(t),Ii.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&jN(t),r})}function PU(t,e){return $N(De(t),null,e)}async function $N(t,e,n){const{auth:r}=t,i={idToken:await t.getIdToken(),returnSecureToken:!0};n&&(i.password=n);const o=await ci(t,CN(r,i));await t._updateTokensIfNecessary(o,!0)}function qN(t,e,n,r){return De(t).onIdTokenChanged(e,n,r)}function WN(t,e,n){return De(t).beforeAuthStateChanged(e,n)}function KN(t,e,n,r){return De(t).onAuthStateChanged(e,n,r)}function GN(t){return De(t).signOut()}const Ic="__sak";/**
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
 */class Ew{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ic,"1"),this.storage.removeItem(Ic),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const zN=1e3,QN=10;class Tw extends Ew{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=dw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);hN()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,QN):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},zN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Tw.type="LOCAL";const JN=Tw;/**
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
 */class Iw extends Ew{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Iw.type="SESSION";const Aw=Iw;/**
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
 */function YN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ol{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ol(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(n.origin,i)),l=await YN(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ol.receivers=[];/**
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
 */function Rf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class XN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const u=Rf("",20);s.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const g=d;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(g.data.response);break;default:clearTimeout(h),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Cn(){return window}function ZN(t){Cn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function bw(){return typeof Cn().WorkerGlobalScope<"u"&&typeof Cn().importScripts=="function"}async function eO(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function tO(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function nO(){return bw()?self:null}/**
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
 */const Rw="firebaseLocalStorageDb",rO=1,Ac="firebaseLocalStorage",Sw="fbase_key";class Jo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function al(t,e){return t.transaction([Ac],e?"readwrite":"readonly").objectStore(Ac)}function sO(){const t=indexedDB.deleteDatabase(Rw);return new Jo(t).toPromise()}function Th(){const t=indexedDB.open(Rw,rO);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ac,{keyPath:Sw})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ac)?e(r):(r.close(),await sO(),e(await Th()))})})}async function rm(t,e,n){const r=al(t,!0).put({[Sw]:e,value:n});return new Jo(r).toPromise()}async function iO(t,e){const n=al(t,!1).get(e),r=await new Jo(n).toPromise();return r===void 0?null:r.value}function sm(t,e){const n=al(t,!0).delete(e);return new Jo(n).toPromise()}const oO=800,aO=3;class Pw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Th(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>aO)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return bw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ol._getInstance(nO()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await eO(),!this.activeServiceWorker)return;this.sender=new XN(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||tO()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Th();return await rm(e,Ic,"1"),await sm(e,Ic),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>rm(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>iO(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>sm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=al(s,!1).getAll();return new Jo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),oO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Pw.type="LOCAL";const cO=Pw;new zo(3e4,6e4);/**
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
 */function lO(t,e){return e?Jn(e):(he(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Sf extends Af{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Zs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Zs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Zs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function uO(t){return ww(t.auth,new Sf(t),t.bypassAuthState)}function hO(t){const{auth:e,user:n}=t;return he(n,e,"internal-error"),vw(n,new Sf(t),t.bypassAuthState)}async function fO(t){const{auth:e,user:n}=t;return he(n,e,"internal-error"),FN(n,new Sf(t),t.bypassAuthState)}/**
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
 */class Cw{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return uO;case"linkViaPopup":case"linkViaRedirect":return fO;case"reauthViaPopup":case"reauthViaRedirect":return hO;default:yn(this.auth,"internal-error")}}resolve(e){or(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){or(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const dO=new zo(2e3,1e4);class Hs extends Cw{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Hs.currentPopupAction&&Hs.currentPopupAction.cancel(),Hs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return he(e,this.auth,"internal-error"),e}async onExecution(){or(this.filter.length===1,"Popup operations only handle one event");const e=Rf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Pn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Pn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Hs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Pn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,dO.get())};e()}}Hs.currentPopupAction=null;/**
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
 */const pO="pendingRedirect",Ga=new Map;class gO extends Cw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ga.get(this.auth._key());if(!e){try{const r=await mO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ga.set(this.auth._key(),e)}return this.bypassAuthState||Ga.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function mO(t,e){const n=vO(e),r=yO(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function _O(t,e){Ga.set(t._key(),e)}function yO(t){return Jn(t._redirectPersistence)}function vO(t){return Ka(pO,t.config.apiKey,t.name)}async function wO(t,e,n=!1){if(Gn(t.app))return Promise.reject(Dr(t));const r=Is(t),s=lO(r,e),o=await new gO(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const EO=10*60*1e3;class TO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!IO(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!kw(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Pn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=EO&&this.cachedEventUids.clear(),this.cachedEventUids.has(im(e))}saveEventToCache(e){this.cachedEventUids.add(im(e)),this.lastProcessedEventTime=Date.now()}}function im(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function kw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function IO(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return kw(t);default:return!1}}/**
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
 */async function AO(t,e={}){return xn(t,"GET","/v1/projects",e)}/**
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
 */const bO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,RO=/^https?/;async function SO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await AO(t);for(const n of e)try{if(PO(n))return}catch{}yn(t,"unauthorized-domain")}function PO(t){const e=vh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!RO.test(n))return!1;if(bO.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const CO=new zo(3e4,6e4);function om(){const t=Cn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function kO(t){return new Promise((e,n)=>{var r,s,i;function o(){om(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{om(),n(Pn(t,"network-request-failed"))},timeout:CO.get()})}if(!((s=(r=Cn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Cn().gapi)===null||i===void 0)&&i.load)o();else{const a=wN("iframefcb");return Cn()[a]=()=>{gapi.load?o():n(Pn(t,"network-request-failed"))},gw(`${vN()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw za=null,e})}let za=null;function NO(t){return za=za||kO(t),za}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const OO=new zo(5e3,15e3),DO="__/auth/iframe",VO="emulator/auth/iframe",xO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},LO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function MO(t){const e=t.config;he(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ef(e,VO):`https://${t.config.authDomain}/${DO}`,r={apiKey:e.apiKey,appName:t.name,v:Ts},s=LO.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ko(r).slice(1)}`}async function UO(t){const e=await NO(t),n=Cn().gapi;return he(n,t,"internal-error"),e.open({where:document.body,url:MO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:xO,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Pn(t,"network-request-failed"),a=Cn().setTimeout(()=>{i(o)},OO.get());function l(){Cn().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const FO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},BO=500,jO=600,HO="_blank",$O="http://localhost";class am{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function qO(t,e,n,r=BO,s=jO){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},FO),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Ct().toLowerCase();n&&(a=cw(u)?HO:n),ow(u)&&(e=e||$O,l.scrollbars="yes");const h=Object.entries(l).reduce((g,[m,w])=>`${g}${m}=${w},`,"");if(uN(u)&&a!=="_self")return WO(e||"",a),new am(null);const d=window.open(e||"",a,h);he(d,t,"popup-blocked");try{d.focus()}catch{}return new am(d)}function WO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const KO="__/auth/handler",GO="emulator/auth/handler",zO=encodeURIComponent("fac");async function cm(t,e,n,r,s,i){he(t.config.authDomain,t,"auth-domain-config-required"),he(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ts,eventId:s};if(e instanceof _w){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",OC(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries({}))o[h]=d}if(e instanceof Qo){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await t._getAppCheckToken(),u=l?`#${zO}=${encodeURIComponent(l)}`:"";return`${QO(t)}?${Ko(a).slice(1)}${u}`}function QO({config:t}){return t.emulator?Ef(t,GO):`https://${t.authDomain}/${KO}`}/**
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
 */const _u="webStorageSupport";class JO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Aw,this._completeRedirectFn=wO,this._overrideRedirectResult=_O}async _openPopup(e,n,r,s){var i;or((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await cm(e,n,r,vh(),s);return qO(e,o,Rf())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await cm(e,n,r,vh(),s);return ZN(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(or(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await UO(e),r=new TO(e);return n.register("authEvent",s=>(he(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(_u,{type:_u},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[_u];o!==void 0&&n(!!o),yn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=SO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return dw()||aw()||If()}}const YO=JO;var lm="@firebase/auth",um="1.7.9";/**
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
 */class XO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){he(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function ZO(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function eD(t){_n(new an("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;he(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:pw(t)},u=new mN(r,s,i,l);return bN(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),_n(new an("auth-internal",e=>{const n=Is(e.getProvider("auth").getImmediate());return(r=>new XO(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Kt(lm,um,ZO(t)),Kt(lm,um,"esm2017")}/**
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
 */const tD=5*60,nD=Hv("authIdTokenMaxAge")||tD;let hm=null;const rD=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>nD)return;const s=n==null?void 0:n.token;hm!==s&&(hm=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function sD(t=Go()){const e=Es(t,"auth");if(e.isInitialized())return e.getImmediate();const n=AN(t,{popupRedirectResolver:YO,persistence:[cO,JN,Aw]}),r=Hv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=rD(i.toString());WN(n,o,()=>o(n.currentUser)),qN(n,a=>o(a))}}const s=Fv("auth");return s&&RN(n,`http://${s}`),n}function iD(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}_N({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Pn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",iD().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});eD("Browser");var fm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var cs,Nw;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,v){function _(){}_.prototype=v.prototype,E.D=v.prototype,E.prototype=new _,E.prototype.constructor=E,E.C=function(I,P,R){for(var A=Array(arguments.length-2),de=2;de<arguments.length;de++)A[de-2]=arguments[de];return v.prototype[P].apply(I,A)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,v,_){_||(_=0);var I=Array(16);if(typeof v=="string")for(var P=0;16>P;++P)I[P]=v.charCodeAt(_++)|v.charCodeAt(_++)<<8|v.charCodeAt(_++)<<16|v.charCodeAt(_++)<<24;else for(P=0;16>P;++P)I[P]=v[_++]|v[_++]<<8|v[_++]<<16|v[_++]<<24;v=E.g[0],_=E.g[1],P=E.g[2];var R=E.g[3],A=v+(R^_&(P^R))+I[0]+3614090360&4294967295;v=_+(A<<7&4294967295|A>>>25),A=R+(P^v&(_^P))+I[1]+3905402710&4294967295,R=v+(A<<12&4294967295|A>>>20),A=P+(_^R&(v^_))+I[2]+606105819&4294967295,P=R+(A<<17&4294967295|A>>>15),A=_+(v^P&(R^v))+I[3]+3250441966&4294967295,_=P+(A<<22&4294967295|A>>>10),A=v+(R^_&(P^R))+I[4]+4118548399&4294967295,v=_+(A<<7&4294967295|A>>>25),A=R+(P^v&(_^P))+I[5]+1200080426&4294967295,R=v+(A<<12&4294967295|A>>>20),A=P+(_^R&(v^_))+I[6]+2821735955&4294967295,P=R+(A<<17&4294967295|A>>>15),A=_+(v^P&(R^v))+I[7]+4249261313&4294967295,_=P+(A<<22&4294967295|A>>>10),A=v+(R^_&(P^R))+I[8]+1770035416&4294967295,v=_+(A<<7&4294967295|A>>>25),A=R+(P^v&(_^P))+I[9]+2336552879&4294967295,R=v+(A<<12&4294967295|A>>>20),A=P+(_^R&(v^_))+I[10]+4294925233&4294967295,P=R+(A<<17&4294967295|A>>>15),A=_+(v^P&(R^v))+I[11]+2304563134&4294967295,_=P+(A<<22&4294967295|A>>>10),A=v+(R^_&(P^R))+I[12]+1804603682&4294967295,v=_+(A<<7&4294967295|A>>>25),A=R+(P^v&(_^P))+I[13]+4254626195&4294967295,R=v+(A<<12&4294967295|A>>>20),A=P+(_^R&(v^_))+I[14]+2792965006&4294967295,P=R+(A<<17&4294967295|A>>>15),A=_+(v^P&(R^v))+I[15]+1236535329&4294967295,_=P+(A<<22&4294967295|A>>>10),A=v+(P^R&(_^P))+I[1]+4129170786&4294967295,v=_+(A<<5&4294967295|A>>>27),A=R+(_^P&(v^_))+I[6]+3225465664&4294967295,R=v+(A<<9&4294967295|A>>>23),A=P+(v^_&(R^v))+I[11]+643717713&4294967295,P=R+(A<<14&4294967295|A>>>18),A=_+(R^v&(P^R))+I[0]+3921069994&4294967295,_=P+(A<<20&4294967295|A>>>12),A=v+(P^R&(_^P))+I[5]+3593408605&4294967295,v=_+(A<<5&4294967295|A>>>27),A=R+(_^P&(v^_))+I[10]+38016083&4294967295,R=v+(A<<9&4294967295|A>>>23),A=P+(v^_&(R^v))+I[15]+3634488961&4294967295,P=R+(A<<14&4294967295|A>>>18),A=_+(R^v&(P^R))+I[4]+3889429448&4294967295,_=P+(A<<20&4294967295|A>>>12),A=v+(P^R&(_^P))+I[9]+568446438&4294967295,v=_+(A<<5&4294967295|A>>>27),A=R+(_^P&(v^_))+I[14]+3275163606&4294967295,R=v+(A<<9&4294967295|A>>>23),A=P+(v^_&(R^v))+I[3]+4107603335&4294967295,P=R+(A<<14&4294967295|A>>>18),A=_+(R^v&(P^R))+I[8]+1163531501&4294967295,_=P+(A<<20&4294967295|A>>>12),A=v+(P^R&(_^P))+I[13]+2850285829&4294967295,v=_+(A<<5&4294967295|A>>>27),A=R+(_^P&(v^_))+I[2]+4243563512&4294967295,R=v+(A<<9&4294967295|A>>>23),A=P+(v^_&(R^v))+I[7]+1735328473&4294967295,P=R+(A<<14&4294967295|A>>>18),A=_+(R^v&(P^R))+I[12]+2368359562&4294967295,_=P+(A<<20&4294967295|A>>>12),A=v+(_^P^R)+I[5]+4294588738&4294967295,v=_+(A<<4&4294967295|A>>>28),A=R+(v^_^P)+I[8]+2272392833&4294967295,R=v+(A<<11&4294967295|A>>>21),A=P+(R^v^_)+I[11]+1839030562&4294967295,P=R+(A<<16&4294967295|A>>>16),A=_+(P^R^v)+I[14]+4259657740&4294967295,_=P+(A<<23&4294967295|A>>>9),A=v+(_^P^R)+I[1]+2763975236&4294967295,v=_+(A<<4&4294967295|A>>>28),A=R+(v^_^P)+I[4]+1272893353&4294967295,R=v+(A<<11&4294967295|A>>>21),A=P+(R^v^_)+I[7]+4139469664&4294967295,P=R+(A<<16&4294967295|A>>>16),A=_+(P^R^v)+I[10]+3200236656&4294967295,_=P+(A<<23&4294967295|A>>>9),A=v+(_^P^R)+I[13]+681279174&4294967295,v=_+(A<<4&4294967295|A>>>28),A=R+(v^_^P)+I[0]+3936430074&4294967295,R=v+(A<<11&4294967295|A>>>21),A=P+(R^v^_)+I[3]+3572445317&4294967295,P=R+(A<<16&4294967295|A>>>16),A=_+(P^R^v)+I[6]+76029189&4294967295,_=P+(A<<23&4294967295|A>>>9),A=v+(_^P^R)+I[9]+3654602809&4294967295,v=_+(A<<4&4294967295|A>>>28),A=R+(v^_^P)+I[12]+3873151461&4294967295,R=v+(A<<11&4294967295|A>>>21),A=P+(R^v^_)+I[15]+530742520&4294967295,P=R+(A<<16&4294967295|A>>>16),A=_+(P^R^v)+I[2]+3299628645&4294967295,_=P+(A<<23&4294967295|A>>>9),A=v+(P^(_|~R))+I[0]+4096336452&4294967295,v=_+(A<<6&4294967295|A>>>26),A=R+(_^(v|~P))+I[7]+1126891415&4294967295,R=v+(A<<10&4294967295|A>>>22),A=P+(v^(R|~_))+I[14]+2878612391&4294967295,P=R+(A<<15&4294967295|A>>>17),A=_+(R^(P|~v))+I[5]+4237533241&4294967295,_=P+(A<<21&4294967295|A>>>11),A=v+(P^(_|~R))+I[12]+1700485571&4294967295,v=_+(A<<6&4294967295|A>>>26),A=R+(_^(v|~P))+I[3]+2399980690&4294967295,R=v+(A<<10&4294967295|A>>>22),A=P+(v^(R|~_))+I[10]+4293915773&4294967295,P=R+(A<<15&4294967295|A>>>17),A=_+(R^(P|~v))+I[1]+2240044497&4294967295,_=P+(A<<21&4294967295|A>>>11),A=v+(P^(_|~R))+I[8]+1873313359&4294967295,v=_+(A<<6&4294967295|A>>>26),A=R+(_^(v|~P))+I[15]+4264355552&4294967295,R=v+(A<<10&4294967295|A>>>22),A=P+(v^(R|~_))+I[6]+2734768916&4294967295,P=R+(A<<15&4294967295|A>>>17),A=_+(R^(P|~v))+I[13]+1309151649&4294967295,_=P+(A<<21&4294967295|A>>>11),A=v+(P^(_|~R))+I[4]+4149444226&4294967295,v=_+(A<<6&4294967295|A>>>26),A=R+(_^(v|~P))+I[11]+3174756917&4294967295,R=v+(A<<10&4294967295|A>>>22),A=P+(v^(R|~_))+I[2]+718787259&4294967295,P=R+(A<<15&4294967295|A>>>17),A=_+(R^(P|~v))+I[9]+3951481745&4294967295,E.g[0]=E.g[0]+v&4294967295,E.g[1]=E.g[1]+(P+(A<<21&4294967295|A>>>11))&4294967295,E.g[2]=E.g[2]+P&4294967295,E.g[3]=E.g[3]+R&4294967295}r.prototype.u=function(E,v){v===void 0&&(v=E.length);for(var _=v-this.blockSize,I=this.B,P=this.h,R=0;R<v;){if(P==0)for(;R<=_;)s(this,E,R),R+=this.blockSize;if(typeof E=="string"){for(;R<v;)if(I[P++]=E.charCodeAt(R++),P==this.blockSize){s(this,I),P=0;break}}else for(;R<v;)if(I[P++]=E[R++],P==this.blockSize){s(this,I),P=0;break}}this.h=P,this.o+=v},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var v=1;v<E.length-8;++v)E[v]=0;var _=8*this.o;for(v=E.length-8;v<E.length;++v)E[v]=_&255,_/=256;for(this.u(E),E=Array(16),v=_=0;4>v;++v)for(var I=0;32>I;I+=8)E[_++]=this.g[v]>>>I&255;return E};function i(E,v){var _=a;return Object.prototype.hasOwnProperty.call(_,E)?_[E]:_[E]=v(E)}function o(E,v){this.h=v;for(var _=[],I=!0,P=E.length-1;0<=P;P--){var R=E[P]|0;I&&R==v||(_[P]=R,I=!1)}this.g=_}var a={};function l(E){return-128<=E&&128>E?i(E,function(v){return new o([v|0],0>v?-1:0)}):new o([E|0],0>E?-1:0)}function u(E){if(isNaN(E)||!isFinite(E))return d;if(0>E)return N(u(-E));for(var v=[],_=1,I=0;E>=_;I++)v[I]=E/_|0,_*=4294967296;return new o(v,0)}function h(E,v){if(E.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(E.charAt(0)=="-")return N(h(E.substring(1),v));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=u(Math.pow(v,8)),I=d,P=0;P<E.length;P+=8){var R=Math.min(8,E.length-P),A=parseInt(E.substring(P,P+R),v);8>R?(R=u(Math.pow(v,R)),I=I.j(R).add(u(A))):(I=I.j(_),I=I.add(u(A)))}return I}var d=l(0),g=l(1),m=l(16777216);t=o.prototype,t.m=function(){if(S(this))return-N(this).m();for(var E=0,v=1,_=0;_<this.g.length;_++){var I=this.i(_);E+=(0<=I?I:4294967296+I)*v,v*=4294967296}return E},t.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(w(this))return"0";if(S(this))return"-"+N(this).toString(E);for(var v=u(Math.pow(E,6)),_=this,I="";;){var P=C(_,v).g;_=x(_,P.j(v));var R=((0<_.g.length?_.g[0]:_.h)>>>0).toString(E);if(_=P,w(_))return R+I;for(;6>R.length;)R="0"+R;I=R+I}},t.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function w(E){if(E.h!=0)return!1;for(var v=0;v<E.g.length;v++)if(E.g[v]!=0)return!1;return!0}function S(E){return E.h==-1}t.l=function(E){return E=x(this,E),S(E)?-1:w(E)?0:1};function N(E){for(var v=E.g.length,_=[],I=0;I<v;I++)_[I]=~E.g[I];return new o(_,~E.h).add(g)}t.abs=function(){return S(this)?N(this):this},t.add=function(E){for(var v=Math.max(this.g.length,E.g.length),_=[],I=0,P=0;P<=v;P++){var R=I+(this.i(P)&65535)+(E.i(P)&65535),A=(R>>>16)+(this.i(P)>>>16)+(E.i(P)>>>16);I=A>>>16,R&=65535,A&=65535,_[P]=A<<16|R}return new o(_,_[_.length-1]&-2147483648?-1:0)};function x(E,v){return E.add(N(v))}t.j=function(E){if(w(this)||w(E))return d;if(S(this))return S(E)?N(this).j(N(E)):N(N(this).j(E));if(S(E))return N(this.j(N(E)));if(0>this.l(m)&&0>E.l(m))return u(this.m()*E.m());for(var v=this.g.length+E.g.length,_=[],I=0;I<2*v;I++)_[I]=0;for(I=0;I<this.g.length;I++)for(var P=0;P<E.g.length;P++){var R=this.i(I)>>>16,A=this.i(I)&65535,de=E.i(P)>>>16,we=E.i(P)&65535;_[2*I+2*P]+=A*we,O(_,2*I+2*P),_[2*I+2*P+1]+=R*we,O(_,2*I+2*P+1),_[2*I+2*P+1]+=A*de,O(_,2*I+2*P+1),_[2*I+2*P+2]+=R*de,O(_,2*I+2*P+2)}for(I=0;I<v;I++)_[I]=_[2*I+1]<<16|_[2*I];for(I=v;I<2*v;I++)_[I]=0;return new o(_,0)};function O(E,v){for(;(E[v]&65535)!=E[v];)E[v+1]+=E[v]>>>16,E[v]&=65535,v++}function T(E,v){this.g=E,this.h=v}function C(E,v){if(w(v))throw Error("division by zero");if(w(E))return new T(d,d);if(S(E))return v=C(N(E),v),new T(N(v.g),N(v.h));if(S(v))return v=C(E,N(v)),new T(N(v.g),v.h);if(30<E.g.length){if(S(E)||S(v))throw Error("slowDivide_ only works with positive integers.");for(var _=g,I=v;0>=I.l(E);)_=D(_),I=D(I);var P=M(_,1),R=M(I,1);for(I=M(I,2),_=M(_,2);!w(I);){var A=R.add(I);0>=A.l(E)&&(P=P.add(_),R=A),I=M(I,1),_=M(_,1)}return v=x(E,P.j(v)),new T(P,v)}for(P=d;0<=E.l(v);){for(_=Math.max(1,Math.floor(E.m()/v.m())),I=Math.ceil(Math.log(_)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),R=u(_),A=R.j(v);S(A)||0<A.l(E);)_-=I,R=u(_),A=R.j(v);w(R)&&(R=g),P=P.add(R),E=x(E,A)}return new T(P,E)}t.A=function(E){return C(this,E).h},t.and=function(E){for(var v=Math.max(this.g.length,E.g.length),_=[],I=0;I<v;I++)_[I]=this.i(I)&E.i(I);return new o(_,this.h&E.h)},t.or=function(E){for(var v=Math.max(this.g.length,E.g.length),_=[],I=0;I<v;I++)_[I]=this.i(I)|E.i(I);return new o(_,this.h|E.h)},t.xor=function(E){for(var v=Math.max(this.g.length,E.g.length),_=[],I=0;I<v;I++)_[I]=this.i(I)^E.i(I);return new o(_,this.h^E.h)};function D(E){for(var v=E.g.length+1,_=[],I=0;I<v;I++)_[I]=E.i(I)<<1|E.i(I-1)>>>31;return new o(_,E.h)}function M(E,v){var _=v>>5;v%=32;for(var I=E.g.length-_,P=[],R=0;R<I;R++)P[R]=0<v?E.i(R+_)>>>v|E.i(R+_+1)<<32-v:E.i(R+_);return new o(P,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Nw=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,cs=o}).apply(typeof fm<"u"?fm:typeof self<"u"?self:typeof window<"u"?window:{});var Va=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ow,eo,Dw,Qa,Ih,Vw,xw,Lw;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,f,p){return c==Array.prototype||c==Object.prototype||(c[f]=p.value),c};function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Va=="object"&&Va];for(var f=0;f<c.length;++f){var p=c[f];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function s(c,f){if(f)e:{var p=r;c=c.split(".");for(var y=0;y<c.length-1;y++){var V=c[y];if(!(V in p))break e;p=p[V]}c=c[c.length-1],y=p[c],f=f(y),f!=y&&f!=null&&e(p,c,{configurable:!0,writable:!0,value:f})}}function i(c,f){c instanceof String&&(c+="");var p=0,y=!1,V={next:function(){if(!y&&p<c.length){var U=p++;return{value:f(U,c[U]),done:!1}}return y=!0,{done:!0,value:void 0}}};return V[Symbol.iterator]=function(){return V},V}s("Array.prototype.values",function(c){return c||function(){return i(this,function(f,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(c){var f=typeof c;return f=f!="object"?f:c?Array.isArray(c)?"array":f:"null",f=="array"||f=="object"&&typeof c.length=="number"}function u(c){var f=typeof c;return f=="object"&&c!=null||f=="function"}function h(c,f,p){return c.call.apply(c.bind,arguments)}function d(c,f,p){if(!c)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var V=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(V,y),c.apply(f,V)}}return function(){return c.apply(f,arguments)}}function g(c,f,p){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:d,g.apply(null,arguments)}function m(c,f){var p=Array.prototype.slice.call(arguments,1);return function(){var y=p.slice();return y.push.apply(y,arguments),c.apply(this,y)}}function w(c,f){function p(){}p.prototype=f.prototype,c.aa=f.prototype,c.prototype=new p,c.prototype.constructor=c,c.Qb=function(y,V,U){for(var z=Array(arguments.length-2),xe=2;xe<arguments.length;xe++)z[xe-2]=arguments[xe];return f.prototype[V].apply(y,z)}}function S(c){const f=c.length;if(0<f){const p=Array(f);for(let y=0;y<f;y++)p[y]=c[y];return p}return[]}function N(c,f){for(let p=1;p<arguments.length;p++){const y=arguments[p];if(l(y)){const V=c.length||0,U=y.length||0;c.length=V+U;for(let z=0;z<U;z++)c[V+z]=y[z]}else c.push(y)}}class x{constructor(f,p){this.i=f,this.j=p,this.h=0,this.g=null}get(){let f;return 0<this.h?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function O(c){return/^[\s\xa0]*$/.test(c)}function T(){var c=a.navigator;return c&&(c=c.userAgent)?c:""}function C(c){return C[" "](c),c}C[" "]=function(){};var D=T().indexOf("Gecko")!=-1&&!(T().toLowerCase().indexOf("webkit")!=-1&&T().indexOf("Edge")==-1)&&!(T().indexOf("Trident")!=-1||T().indexOf("MSIE")!=-1)&&T().indexOf("Edge")==-1;function M(c,f,p){for(const y in c)f.call(p,c[y],y,c)}function E(c,f){for(const p in c)f.call(void 0,c[p],p,c)}function v(c){const f={};for(const p in c)f[p]=c[p];return f}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(c,f){let p,y;for(let V=1;V<arguments.length;V++){y=arguments[V];for(p in y)c[p]=y[p];for(let U=0;U<_.length;U++)p=_[U],Object.prototype.hasOwnProperty.call(y,p)&&(c[p]=y[p])}}function P(c){var f=1;c=c.split(":");const p=[];for(;0<f&&c.length;)p.push(c.shift()),f--;return c.length&&p.push(c.join(":")),p}function R(c){a.setTimeout(()=>{throw c},0)}function A(){var c=Te;let f=null;return c.g&&(f=c.g,c.g=c.g.next,c.g||(c.h=null),f.next=null),f}class de{constructor(){this.h=this.g=null}add(f,p){const y=we.get();y.set(f,p),this.h?this.h.next=y:this.g=y,this.h=y}}var we=new x(()=>new te,c=>c.reset());class te{constructor(){this.next=this.g=this.h=null}set(f,p){this.h=f,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let le,X=!1,Te=new de,ln=()=>{const c=a.Promise.resolve(void 0);le=()=>{c.then(en)}};var en=()=>{for(var c;c=A();){try{c.h.call(c.g)}catch(p){R(p)}var f=we;f.j(c),100>f.h&&(f.h++,c.next=f.g,f.g=c)}X=!1};function je(){this.s=this.s,this.C=this.C}je.prototype.s=!1,je.prototype.ma=function(){this.s||(this.s=!0,this.N())},je.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function He(c,f){this.type=c,this.g=this.target=f,this.defaultPrevented=!1}He.prototype.h=function(){this.defaultPrevented=!0};var hr=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var c=!1,f=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const p=()=>{};a.addEventListener("test",p,f),a.removeEventListener("test",p,f)}catch{}return c}();function Gt(c,f){if(He.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var p=this.type=c.type,y=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=f,f=c.relatedTarget){if(D){e:{try{C(f.nodeName);var V=!0;break e}catch{}V=!1}V||(f=null)}}else p=="mouseover"?f=c.fromElement:p=="mouseout"&&(f=c.toElement);this.relatedTarget=f,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:Bt[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&Gt.aa.h.call(this)}}w(Gt,He);var Bt={2:"touch",3:"pen",4:"mouse"};Gt.prototype.h=function(){Gt.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var B="closure_listenable_"+(1e6*Math.random()|0),ee=0;function J(c,f,p,y,V){this.listener=c,this.proxy=null,this.src=f,this.type=p,this.capture=!!y,this.ha=V,this.key=++ee,this.da=this.fa=!1}function se(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function _e(c){this.src=c,this.g={},this.h=0}_e.prototype.add=function(c,f,p,y,V){var U=c.toString();c=this.g[U],c||(c=this.g[U]=[],this.h++);var z=b(c,f,y,V);return-1<z?(f=c[z],p||(f.fa=!1)):(f=new J(f,this.src,U,!!y,V),f.fa=p,c.push(f)),f};function Ve(c,f){var p=f.type;if(p in c.g){var y=c.g[p],V=Array.prototype.indexOf.call(y,f,void 0),U;(U=0<=V)&&Array.prototype.splice.call(y,V,1),U&&(se(f),c.g[p].length==0&&(delete c.g[p],c.h--))}}function b(c,f,p,y){for(var V=0;V<c.length;++V){var U=c[V];if(!U.da&&U.listener==f&&U.capture==!!p&&U.ha==y)return V}return-1}var k="closure_lm_"+(1e6*Math.random()|0),L={};function H(c,f,p,y,V){if(Array.isArray(f)){for(var U=0;U<f.length;U++)H(c,f[U],p,y,V);return null}return p=ie(p),c&&c[B]?c.K(f,p,u(y)?!!y.capture:!1,V):F(c,f,p,!1,y,V)}function F(c,f,p,y,V,U){if(!f)throw Error("Invalid event type");var z=u(V)?!!V.capture:!!V,xe=ae(c);if(xe||(c[k]=xe=new _e(c)),p=xe.add(f,p,y,z,U),p.proxy)return p;if(y=$(),p.proxy=y,y.src=c,y.listener=p,c.addEventListener)hr||(V=z),V===void 0&&(V=!1),c.addEventListener(f.toString(),y,V);else if(c.attachEvent)c.attachEvent(K(f.toString()),y);else if(c.addListener&&c.removeListener)c.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return p}function $(){function c(p){return f.call(c.src,c.listener,p)}const f=q;return c}function Q(c,f,p,y,V){if(Array.isArray(f))for(var U=0;U<f.length;U++)Q(c,f[U],p,y,V);else y=u(y)?!!y.capture:!!y,p=ie(p),c&&c[B]?(c=c.i,f=String(f).toString(),f in c.g&&(U=c.g[f],p=b(U,p,y,V),-1<p&&(se(U[p]),Array.prototype.splice.call(U,p,1),U.length==0&&(delete c.g[f],c.h--)))):c&&(c=ae(c))&&(f=c.g[f.toString()],c=-1,f&&(c=b(f,p,y,V)),(p=-1<c?f[c]:null)&&G(p))}function G(c){if(typeof c!="number"&&c&&!c.da){var f=c.src;if(f&&f[B])Ve(f.i,c);else{var p=c.type,y=c.proxy;f.removeEventListener?f.removeEventListener(p,y,c.capture):f.detachEvent?f.detachEvent(K(p),y):f.addListener&&f.removeListener&&f.removeListener(y),(p=ae(f))?(Ve(p,c),p.h==0&&(p.src=null,f[k]=null)):se(c)}}}function K(c){return c in L?L[c]:L[c]="on"+c}function q(c,f){if(c.da)c=!0;else{f=new Gt(f,this);var p=c.listener,y=c.ha||c.src;c.fa&&G(c),c=p.call(y,f)}return c}function ae(c){return c=c[k],c instanceof _e?c:null}var Y="__closure_events_fn_"+(1e9*Math.random()>>>0);function ie(c){return typeof c=="function"?c:(c[Y]||(c[Y]=function(f){return c.handleEvent(f)}),c[Y])}function ne(){je.call(this),this.i=new _e(this),this.M=this,this.F=null}w(ne,je),ne.prototype[B]=!0,ne.prototype.removeEventListener=function(c,f,p,y){Q(this,c,f,p,y)};function ue(c,f){var p,y=c.F;if(y)for(p=[];y;y=y.F)p.push(y);if(c=c.M,y=f.type||f,typeof f=="string")f=new He(f,c);else if(f instanceof He)f.target=f.target||c;else{var V=f;f=new He(y,c),I(f,V)}if(V=!0,p)for(var U=p.length-1;0<=U;U--){var z=f.g=p[U];V=Ie(z,y,!0,f)&&V}if(z=f.g=c,V=Ie(z,y,!0,f)&&V,V=Ie(z,y,!1,f)&&V,p)for(U=0;U<p.length;U++)z=f.g=p[U],V=Ie(z,y,!1,f)&&V}ne.prototype.N=function(){if(ne.aa.N.call(this),this.i){var c=this.i,f;for(f in c.g){for(var p=c.g[f],y=0;y<p.length;y++)se(p[y]);delete c.g[f],c.h--}}this.F=null},ne.prototype.K=function(c,f,p,y){return this.i.add(String(c),f,!1,p,y)},ne.prototype.L=function(c,f,p,y){return this.i.add(String(c),f,!0,p,y)};function Ie(c,f,p,y){if(f=c.i.g[String(f)],!f)return!0;f=f.concat();for(var V=!0,U=0;U<f.length;++U){var z=f[U];if(z&&!z.da&&z.capture==p){var xe=z.listener,ut=z.ha||z.src;z.fa&&Ve(c.i,z),V=xe.call(ut,y)!==!1&&V}}return V&&!y.defaultPrevented}function Ne(c,f,p){if(typeof c=="function")p&&(c=g(c,p));else if(c&&typeof c.handleEvent=="function")c=g(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(f)?-1:a.setTimeout(c,f||0)}function $e(c){c.g=Ne(()=>{c.g=null,c.i&&(c.i=!1,$e(c))},c.l);const f=c.h;c.h=null,c.m.apply(null,f)}class Ye extends je{constructor(f,p){super(),this.m=f,this.l=p,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:$e(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function lt(c){je.call(this),this.h=c,this.g={}}w(lt,je);var yt=[];function fr(c){M(c.g,function(f,p){this.g.hasOwnProperty(p)&&G(f)},c),c.g={}}lt.prototype.N=function(){lt.aa.N.call(this),fr(this)},lt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Rs=a.JSON.stringify,kt=a.JSON.parse,tn=class{stringify(c){return a.JSON.stringify(c,void 0)}parse(c){return a.JSON.parse(c,void 0)}};function Ss(){}Ss.prototype.h=null;function Ci(c){return c.h||(c.h=c.i())}function Id(){}var ki={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Cl(){He.call(this,"d")}w(Cl,He);function kl(){He.call(this,"c")}w(kl,He);var $r={},Ad=null;function aa(){return Ad=Ad||new ne}$r.La="serverreachability";function bd(c){He.call(this,$r.La,c)}w(bd,He);function Ni(c){const f=aa();ue(f,new bd(f))}$r.STAT_EVENT="statevent";function Rd(c,f){He.call(this,$r.STAT_EVENT,c),this.stat=f}w(Rd,He);function Nt(c){const f=aa();ue(f,new Rd(f,c))}$r.Ma="timingevent";function Sd(c,f){He.call(this,$r.Ma,c),this.size=f}w(Sd,He);function Oi(c,f){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){c()},f)}function Di(){this.g=!0}Di.prototype.xa=function(){this.g=!1};function HT(c,f,p,y,V,U){c.info(function(){if(c.g)if(U)for(var z="",xe=U.split("&"),ut=0;ut<xe.length;ut++){var Ae=xe[ut].split("=");if(1<Ae.length){var vt=Ae[0];Ae=Ae[1];var wt=vt.split("_");z=2<=wt.length&&wt[1]=="type"?z+(vt+"="+Ae+"&"):z+(vt+"=redacted&")}}else z=null;else z=U;return"XMLHTTP REQ ("+y+") [attempt "+V+"]: "+f+`
`+p+`
`+z})}function $T(c,f,p,y,V,U,z){c.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+V+"]: "+f+`
`+p+`
`+U+" "+z})}function Ps(c,f,p,y){c.info(function(){return"XMLHTTP TEXT ("+f+"): "+WT(c,p)+(y?" "+y:"")})}function qT(c,f){c.info(function(){return"TIMEOUT: "+f})}Di.prototype.info=function(){};function WT(c,f){if(!c.g)return f;if(!f)return null;try{var p=JSON.parse(f);if(p){for(c=0;c<p.length;c++)if(Array.isArray(p[c])){var y=p[c];if(!(2>y.length)){var V=y[1];if(Array.isArray(V)&&!(1>V.length)){var U=V[0];if(U!="noop"&&U!="stop"&&U!="close")for(var z=1;z<V.length;z++)V[z]=""}}}}return Rs(p)}catch{return f}}var ca={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Pd={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Nl;function la(){}w(la,Ss),la.prototype.g=function(){return new XMLHttpRequest},la.prototype.i=function(){return{}},Nl=new la;function dr(c,f,p,y){this.j=c,this.i=f,this.l=p,this.R=y||1,this.U=new lt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Cd}function Cd(){this.i=null,this.g="",this.h=!1}var kd={},Ol={};function Dl(c,f,p){c.L=1,c.v=da(Ln(f)),c.m=p,c.P=!0,Nd(c,null)}function Nd(c,f){c.F=Date.now(),ua(c),c.A=Ln(c.v);var p=c.A,y=c.R;Array.isArray(y)||(y=[String(y)]),Wd(p.i,"t",y),c.C=0,p=c.j.J,c.h=new Cd,c.g=lp(c.j,p?f:null,!c.m),0<c.O&&(c.M=new Ye(g(c.Y,c,c.g),c.O)),f=c.U,p=c.g,y=c.ca;var V="readystatechange";Array.isArray(V)||(V&&(yt[0]=V.toString()),V=yt);for(var U=0;U<V.length;U++){var z=H(p,V[U],y||f.handleEvent,!1,f.h||f);if(!z)break;f.g[z.key]=z}f=c.H?v(c.H):{},c.m?(c.u||(c.u="POST"),f["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,f)):(c.u="GET",c.g.ea(c.A,c.u,null,f)),Ni(),HT(c.i,c.u,c.A,c.l,c.R,c.m)}dr.prototype.ca=function(c){c=c.target;const f=this.M;f&&Mn(c)==3?f.j():this.Y(c)},dr.prototype.Y=function(c){try{if(c==this.g)e:{const wt=Mn(this.g);var f=this.g.Ba();const Ns=this.g.Z();if(!(3>wt)&&(wt!=3||this.g&&(this.h.h||this.g.oa()||Xd(this.g)))){this.J||wt!=4||f==7||(f==8||0>=Ns?Ni(3):Ni(2)),Vl(this);var p=this.g.Z();this.X=p;t:if(Od(this)){var y=Xd(this.g);c="";var V=y.length,U=Mn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){qr(this),Vi(this);var z="";break t}this.h.i=new a.TextDecoder}for(f=0;f<V;f++)this.h.h=!0,c+=this.h.i.decode(y[f],{stream:!(U&&f==V-1)});y.length=0,this.h.g+=c,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=p==200,$T(this.i,this.u,this.A,this.l,this.R,wt,p),this.o){if(this.T&&!this.K){t:{if(this.g){var xe,ut=this.g;if((xe=ut.g?ut.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(xe)){var Ae=xe;break t}}Ae=null}if(p=Ae)Ps(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,xl(this,p);else{this.o=!1,this.s=3,Nt(12),qr(this),Vi(this);break e}}if(this.P){p=!0;let un;for(;!this.J&&this.C<z.length;)if(un=KT(this,z),un==Ol){wt==4&&(this.s=4,Nt(14),p=!1),Ps(this.i,this.l,null,"[Incomplete Response]");break}else if(un==kd){this.s=4,Nt(15),Ps(this.i,this.l,z,"[Invalid Chunk]"),p=!1;break}else Ps(this.i,this.l,un,null),xl(this,un);if(Od(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),wt!=4||z.length!=0||this.h.h||(this.s=1,Nt(16),p=!1),this.o=this.o&&p,!p)Ps(this.i,this.l,z,"[Invalid Chunked Response]"),qr(this),Vi(this);else if(0<z.length&&!this.W){this.W=!0;var vt=this.j;vt.g==this&&vt.ba&&!vt.M&&(vt.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),jl(vt),vt.M=!0,Nt(11))}}else Ps(this.i,this.l,z,null),xl(this,z);wt==4&&qr(this),this.o&&!this.J&&(wt==4?ip(this.j,this):(this.o=!1,ua(this)))}else lI(this.g),p==400&&0<z.indexOf("Unknown SID")?(this.s=3,Nt(12)):(this.s=0,Nt(13)),qr(this),Vi(this)}}}catch{}finally{}};function Od(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function KT(c,f){var p=c.C,y=f.indexOf(`
`,p);return y==-1?Ol:(p=Number(f.substring(p,y)),isNaN(p)?kd:(y+=1,y+p>f.length?Ol:(f=f.slice(y,y+p),c.C=y+p,f)))}dr.prototype.cancel=function(){this.J=!0,qr(this)};function ua(c){c.S=Date.now()+c.I,Dd(c,c.I)}function Dd(c,f){if(c.B!=null)throw Error("WatchDog timer not null");c.B=Oi(g(c.ba,c),f)}function Vl(c){c.B&&(a.clearTimeout(c.B),c.B=null)}dr.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(qT(this.i,this.A),this.L!=2&&(Ni(),Nt(17)),qr(this),this.s=2,Vi(this)):Dd(this,this.S-c)};function Vi(c){c.j.G==0||c.J||ip(c.j,c)}function qr(c){Vl(c);var f=c.M;f&&typeof f.ma=="function"&&f.ma(),c.M=null,fr(c.U),c.g&&(f=c.g,c.g=null,f.abort(),f.ma())}function xl(c,f){try{var p=c.j;if(p.G!=0&&(p.g==c||Ll(p.h,c))){if(!c.K&&Ll(p.h,c)&&p.G==3){try{var y=p.Da.g.parse(f)}catch{y=null}if(Array.isArray(y)&&y.length==3){var V=y;if(V[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<c.F)va(p),_a(p);else break e;Bl(p),Nt(18)}}else p.za=V[1],0<p.za-p.T&&37500>V[2]&&p.F&&p.v==0&&!p.C&&(p.C=Oi(g(p.Za,p),6e3));if(1>=Ld(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else Kr(p,11)}else if((c.K||p.g==c)&&va(p),!O(f))for(V=p.Da.g.parse(f),f=0;f<V.length;f++){let Ae=V[f];if(p.T=Ae[0],Ae=Ae[1],p.G==2)if(Ae[0]=="c"){p.K=Ae[1],p.ia=Ae[2];const vt=Ae[3];vt!=null&&(p.la=vt,p.j.info("VER="+p.la));const wt=Ae[4];wt!=null&&(p.Aa=wt,p.j.info("SVER="+p.Aa));const Ns=Ae[5];Ns!=null&&typeof Ns=="number"&&0<Ns&&(y=1.5*Ns,p.L=y,p.j.info("backChannelRequestTimeoutMs_="+y)),y=p;const un=c.g;if(un){const Ea=un.g?un.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ea){var U=y.h;U.g||Ea.indexOf("spdy")==-1&&Ea.indexOf("quic")==-1&&Ea.indexOf("h2")==-1||(U.j=U.l,U.g=new Set,U.h&&(Ml(U,U.h),U.h=null))}if(y.D){const Hl=un.g?un.g.getResponseHeader("X-HTTP-Session-Id"):null;Hl&&(y.ya=Hl,Fe(y.I,y.D,Hl))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-c.F,p.j.info("Handshake RTT: "+p.R+"ms")),y=p;var z=c;if(y.qa=cp(y,y.J?y.ia:null,y.W),z.K){Md(y.h,z);var xe=z,ut=y.L;ut&&(xe.I=ut),xe.B&&(Vl(xe),ua(xe)),y.g=z}else rp(y);0<p.i.length&&ya(p)}else Ae[0]!="stop"&&Ae[0]!="close"||Kr(p,7);else p.G==3&&(Ae[0]=="stop"||Ae[0]=="close"?Ae[0]=="stop"?Kr(p,7):Fl(p):Ae[0]!="noop"&&p.l&&p.l.ta(Ae),p.v=0)}}Ni(4)}catch{}}var GT=class{constructor(c,f){this.g=c,this.map=f}};function Vd(c){this.l=c||10,a.PerformanceNavigationTiming?(c=a.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function xd(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function Ld(c){return c.h?1:c.g?c.g.size:0}function Ll(c,f){return c.h?c.h==f:c.g?c.g.has(f):!1}function Ml(c,f){c.g?c.g.add(f):c.h=f}function Md(c,f){c.h&&c.h==f?c.h=null:c.g&&c.g.has(f)&&c.g.delete(f)}Vd.prototype.cancel=function(){if(this.i=Ud(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Ud(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let f=c.i;for(const p of c.g.values())f=f.concat(p.D);return f}return S(c.i)}function zT(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(l(c)){for(var f=[],p=c.length,y=0;y<p;y++)f.push(c[y]);return f}f=[],p=0;for(y in c)f[p++]=c[y];return f}function QT(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(l(c)||typeof c=="string"){var f=[];c=c.length;for(var p=0;p<c;p++)f.push(p);return f}f=[],p=0;for(const y in c)f[p++]=y;return f}}}function Fd(c,f){if(c.forEach&&typeof c.forEach=="function")c.forEach(f,void 0);else if(l(c)||typeof c=="string")Array.prototype.forEach.call(c,f,void 0);else for(var p=QT(c),y=zT(c),V=y.length,U=0;U<V;U++)f.call(void 0,y[U],p&&p[U],c)}var Bd=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function JT(c,f){if(c){c=c.split("&");for(var p=0;p<c.length;p++){var y=c[p].indexOf("="),V=null;if(0<=y){var U=c[p].substring(0,y);V=c[p].substring(y+1)}else U=c[p];f(U,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function Wr(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof Wr){this.h=c.h,ha(this,c.j),this.o=c.o,this.g=c.g,fa(this,c.s),this.l=c.l;var f=c.i,p=new Mi;p.i=f.i,f.g&&(p.g=new Map(f.g),p.h=f.h),jd(this,p),this.m=c.m}else c&&(f=String(c).match(Bd))?(this.h=!1,ha(this,f[1]||"",!0),this.o=xi(f[2]||""),this.g=xi(f[3]||"",!0),fa(this,f[4]),this.l=xi(f[5]||"",!0),jd(this,f[6]||"",!0),this.m=xi(f[7]||"")):(this.h=!1,this.i=new Mi(null,this.h))}Wr.prototype.toString=function(){var c=[],f=this.j;f&&c.push(Li(f,Hd,!0),":");var p=this.g;return(p||f=="file")&&(c.push("//"),(f=this.o)&&c.push(Li(f,Hd,!0),"@"),c.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&c.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&c.push("/"),c.push(Li(p,p.charAt(0)=="/"?ZT:XT,!0))),(p=this.i.toString())&&c.push("?",p),(p=this.m)&&c.push("#",Li(p,tI)),c.join("")};function Ln(c){return new Wr(c)}function ha(c,f,p){c.j=p?xi(f,!0):f,c.j&&(c.j=c.j.replace(/:$/,""))}function fa(c,f){if(f){if(f=Number(f),isNaN(f)||0>f)throw Error("Bad port number "+f);c.s=f}else c.s=null}function jd(c,f,p){f instanceof Mi?(c.i=f,nI(c.i,c.h)):(p||(f=Li(f,eI)),c.i=new Mi(f,c.h))}function Fe(c,f,p){c.i.set(f,p)}function da(c){return Fe(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function xi(c,f){return c?f?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function Li(c,f,p){return typeof c=="string"?(c=encodeURI(c).replace(f,YT),p&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function YT(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Hd=/[#\/\?@]/g,XT=/[#\?:]/g,ZT=/[#\?]/g,eI=/[#\?@]/g,tI=/#/g;function Mi(c,f){this.h=this.g=null,this.i=c||null,this.j=!!f}function pr(c){c.g||(c.g=new Map,c.h=0,c.i&&JT(c.i,function(f,p){c.add(decodeURIComponent(f.replace(/\+/g," ")),p)}))}t=Mi.prototype,t.add=function(c,f){pr(this),this.i=null,c=Cs(this,c);var p=this.g.get(c);return p||this.g.set(c,p=[]),p.push(f),this.h+=1,this};function $d(c,f){pr(c),f=Cs(c,f),c.g.has(f)&&(c.i=null,c.h-=c.g.get(f).length,c.g.delete(f))}function qd(c,f){return pr(c),f=Cs(c,f),c.g.has(f)}t.forEach=function(c,f){pr(this),this.g.forEach(function(p,y){p.forEach(function(V){c.call(f,V,y,this)},this)},this)},t.na=function(){pr(this);const c=Array.from(this.g.values()),f=Array.from(this.g.keys()),p=[];for(let y=0;y<f.length;y++){const V=c[y];for(let U=0;U<V.length;U++)p.push(f[y])}return p},t.V=function(c){pr(this);let f=[];if(typeof c=="string")qd(this,c)&&(f=f.concat(this.g.get(Cs(this,c))));else{c=Array.from(this.g.values());for(let p=0;p<c.length;p++)f=f.concat(c[p])}return f},t.set=function(c,f){return pr(this),this.i=null,c=Cs(this,c),qd(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[f]),this.h+=1,this},t.get=function(c,f){return c?(c=this.V(c),0<c.length?String(c[0]):f):f};function Wd(c,f,p){$d(c,f),0<p.length&&(c.i=null,c.g.set(Cs(c,f),S(p)),c.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],f=Array.from(this.g.keys());for(var p=0;p<f.length;p++){var y=f[p];const U=encodeURIComponent(String(y)),z=this.V(y);for(y=0;y<z.length;y++){var V=U;z[y]!==""&&(V+="="+encodeURIComponent(String(z[y]))),c.push(V)}}return this.i=c.join("&")};function Cs(c,f){return f=String(f),c.j&&(f=f.toLowerCase()),f}function nI(c,f){f&&!c.j&&(pr(c),c.i=null,c.g.forEach(function(p,y){var V=y.toLowerCase();y!=V&&($d(this,y),Wd(this,V,p))},c)),c.j=f}function rI(c,f){const p=new Di;if(a.Image){const y=new Image;y.onload=m(gr,p,"TestLoadImage: loaded",!0,f,y),y.onerror=m(gr,p,"TestLoadImage: error",!1,f,y),y.onabort=m(gr,p,"TestLoadImage: abort",!1,f,y),y.ontimeout=m(gr,p,"TestLoadImage: timeout",!1,f,y),a.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=c}else f(!1)}function sI(c,f){const p=new Di,y=new AbortController,V=setTimeout(()=>{y.abort(),gr(p,"TestPingServer: timeout",!1,f)},1e4);fetch(c,{signal:y.signal}).then(U=>{clearTimeout(V),U.ok?gr(p,"TestPingServer: ok",!0,f):gr(p,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(V),gr(p,"TestPingServer: error",!1,f)})}function gr(c,f,p,y,V){try{V&&(V.onload=null,V.onerror=null,V.onabort=null,V.ontimeout=null),y(p)}catch{}}function iI(){this.g=new tn}function oI(c,f,p){const y=p||"";try{Fd(c,function(V,U){let z=V;u(V)&&(z=Rs(V)),f.push(y+U+"="+encodeURIComponent(z))})}catch(V){throw f.push(y+"type="+encodeURIComponent("_badmap")),V}}function pa(c){this.l=c.Ub||null,this.j=c.eb||!1}w(pa,Ss),pa.prototype.g=function(){return new ga(this.l,this.j)},pa.prototype.i=function(c){return function(){return c}}({});function ga(c,f){ne.call(this),this.D=c,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}w(ga,ne),t=ga.prototype,t.open=function(c,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=f,this.readyState=1,Fi(this)},t.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const f={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(f.body=c),(this.D||a).fetch(new Request(this.A,f)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ui(this)),this.readyState=0},t.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Fi(this)),this.g&&(this.readyState=3,Fi(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Kd(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function Kd(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}t.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var f=c.value?c.value:new Uint8Array(0);(f=this.v.decode(f,{stream:!c.done}))&&(this.response=this.responseText+=f)}c.done?Ui(this):Fi(this),this.readyState==3&&Kd(this)}},t.Ra=function(c){this.g&&(this.response=this.responseText=c,Ui(this))},t.Qa=function(c){this.g&&(this.response=c,Ui(this))},t.ga=function(){this.g&&Ui(this)};function Ui(c){c.readyState=4,c.l=null,c.j=null,c.v=null,Fi(c)}t.setRequestHeader=function(c,f){this.u.append(c,f)},t.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],f=this.h.entries();for(var p=f.next();!p.done;)p=p.value,c.push(p[0]+": "+p[1]),p=f.next();return c.join(`\r
`)};function Fi(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(ga.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Gd(c){let f="";return M(c,function(p,y){f+=y,f+=":",f+=p,f+=`\r
`}),f}function Ul(c,f,p){e:{for(y in p){var y=!1;break e}y=!0}y||(p=Gd(p),typeof c=="string"?p!=null&&encodeURIComponent(String(p)):Fe(c,f,p))}function We(c){ne.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}w(We,ne);var aI=/^https?$/i,cI=["POST","PUT"];t=We.prototype,t.Ha=function(c){this.J=c},t.ea=function(c,f,p,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);f=f?f.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Nl.g(),this.v=this.o?Ci(this.o):Ci(Nl),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(f,String(c),!0),this.B=!1}catch(U){zd(this,U);return}if(c=p||"",p=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var V in y)p.set(V,y[V]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const U of y.keys())p.set(U,y.get(U));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(p.keys()).find(U=>U.toLowerCase()=="content-type"),V=a.FormData&&c instanceof a.FormData,!(0<=Array.prototype.indexOf.call(cI,f,void 0))||y||V||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[U,z]of p)this.g.setRequestHeader(U,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Yd(this),this.u=!0,this.g.send(c),this.u=!1}catch(U){zd(this,U)}};function zd(c,f){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=f,c.m=5,Qd(c),ma(c)}function Qd(c){c.A||(c.A=!0,ue(c,"complete"),ue(c,"error"))}t.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,ue(this,"complete"),ue(this,"abort"),ma(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ma(this,!0)),We.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Jd(this):this.bb())},t.bb=function(){Jd(this)};function Jd(c){if(c.h&&typeof o<"u"&&(!c.v[1]||Mn(c)!=4||c.Z()!=2)){if(c.u&&Mn(c)==4)Ne(c.Ea,0,c);else if(ue(c,"readystatechange"),Mn(c)==4){c.h=!1;try{const z=c.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var p;if(!(p=f)){var y;if(y=z===0){var V=String(c.D).match(Bd)[1]||null;!V&&a.self&&a.self.location&&(V=a.self.location.protocol.slice(0,-1)),y=!aI.test(V?V.toLowerCase():"")}p=y}if(p)ue(c,"complete"),ue(c,"success");else{c.m=6;try{var U=2<Mn(c)?c.g.statusText:""}catch{U=""}c.l=U+" ["+c.Z()+"]",Qd(c)}}finally{ma(c)}}}}function ma(c,f){if(c.g){Yd(c);const p=c.g,y=c.v[0]?()=>{}:null;c.g=null,c.v=null,f||ue(c,"ready");try{p.onreadystatechange=y}catch{}}}function Yd(c){c.I&&(a.clearTimeout(c.I),c.I=null)}t.isActive=function(){return!!this.g};function Mn(c){return c.g?c.g.readyState:0}t.Z=function(){try{return 2<Mn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(c){if(this.g){var f=this.g.responseText;return c&&f.indexOf(c)==0&&(f=f.substring(c.length)),kt(f)}};function Xd(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function lI(c){const f={};c=(c.g&&2<=Mn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<c.length;y++){if(O(c[y]))continue;var p=P(c[y]);const V=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const U=f[V]||[];f[V]=U,U.push(p)}E(f,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Bi(c,f,p){return p&&p.internalChannelParams&&p.internalChannelParams[c]||f}function Zd(c){this.Aa=0,this.i=[],this.j=new Di,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Bi("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Bi("baseRetryDelayMs",5e3,c),this.cb=Bi("retryDelaySeedMs",1e4,c),this.Wa=Bi("forwardChannelMaxRetries",2,c),this.wa=Bi("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Vd(c&&c.concurrentRequestLimit),this.Da=new iI,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Zd.prototype,t.la=8,t.G=1,t.connect=function(c,f,p,y){Nt(0),this.W=c,this.H=f||{},p&&y!==void 0&&(this.H.OSID=p,this.H.OAID=y),this.F=this.X,this.I=cp(this,null,this.W),ya(this)};function Fl(c){if(ep(c),c.G==3){var f=c.U++,p=Ln(c.I);if(Fe(p,"SID",c.K),Fe(p,"RID",f),Fe(p,"TYPE","terminate"),ji(c,p),f=new dr(c,c.j,f),f.L=2,f.v=da(Ln(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(f.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=f.v,p=!0),p||(f.g=lp(f.j,null),f.g.ea(f.v)),f.F=Date.now(),ua(f)}ap(c)}function _a(c){c.g&&(jl(c),c.g.cancel(),c.g=null)}function ep(c){_a(c),c.u&&(a.clearTimeout(c.u),c.u=null),va(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&a.clearTimeout(c.s),c.s=null)}function ya(c){if(!xd(c.h)&&!c.s){c.s=!0;var f=c.Ga;le||ln(),X||(le(),X=!0),Te.add(f,c),c.B=0}}function uI(c,f){return Ld(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=f.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=Oi(g(c.Ga,c,f),op(c,c.B)),c.B++,!0)}t.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const V=new dr(this,this.j,c);let U=this.o;if(this.S&&(U?(U=v(U),I(U,this.S)):U=this.S),this.m!==null||this.O||(V.H=U,U=null),this.P)e:{for(var f=0,p=0;p<this.i.length;p++){t:{var y=this.i[p];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(f+=y,4096<f){f=p;break e}if(f===4096||p===this.i.length-1){f=p+1;break e}}f=1e3}else f=1e3;f=np(this,V,f),p=Ln(this.I),Fe(p,"RID",c),Fe(p,"CVER",22),this.D&&Fe(p,"X-HTTP-Session-Id",this.D),ji(this,p),U&&(this.O?f="headers="+encodeURIComponent(String(Gd(U)))+"&"+f:this.m&&Ul(p,this.m,U)),Ml(this.h,V),this.Ua&&Fe(p,"TYPE","init"),this.P?(Fe(p,"$req",f),Fe(p,"SID","null"),V.T=!0,Dl(V,p,null)):Dl(V,p,f),this.G=2}}else this.G==3&&(c?tp(this,c):this.i.length==0||xd(this.h)||tp(this))};function tp(c,f){var p;f?p=f.l:p=c.U++;const y=Ln(c.I);Fe(y,"SID",c.K),Fe(y,"RID",p),Fe(y,"AID",c.T),ji(c,y),c.m&&c.o&&Ul(y,c.m,c.o),p=new dr(c,c.j,p,c.B+1),c.m===null&&(p.H=c.o),f&&(c.i=f.D.concat(c.i)),f=np(c,p,1e3),p.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),Ml(c.h,p),Dl(p,y,f)}function ji(c,f){c.H&&M(c.H,function(p,y){Fe(f,y,p)}),c.l&&Fd({},function(p,y){Fe(f,y,p)})}function np(c,f,p){p=Math.min(c.i.length,p);var y=c.l?g(c.l.Na,c.l,c):null;e:{var V=c.i;let U=-1;for(;;){const z=["count="+p];U==-1?0<p?(U=V[0].g,z.push("ofs="+U)):U=0:z.push("ofs="+U);let xe=!0;for(let ut=0;ut<p;ut++){let Ae=V[ut].g;const vt=V[ut].map;if(Ae-=U,0>Ae)U=Math.max(0,V[ut].g-100),xe=!1;else try{oI(vt,z,"req"+Ae+"_")}catch{y&&y(vt)}}if(xe){y=z.join("&");break e}}}return c=c.i.splice(0,p),f.D=c,y}function rp(c){if(!c.g&&!c.u){c.Y=1;var f=c.Fa;le||ln(),X||(le(),X=!0),Te.add(f,c),c.v=0}}function Bl(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=Oi(g(c.Fa,c),op(c,c.v)),c.v++,!0)}t.Fa=function(){if(this.u=null,sp(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=Oi(g(this.ab,this),c)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Nt(10),_a(this),sp(this))};function jl(c){c.A!=null&&(a.clearTimeout(c.A),c.A=null)}function sp(c){c.g=new dr(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var f=Ln(c.qa);Fe(f,"RID","rpc"),Fe(f,"SID",c.K),Fe(f,"AID",c.T),Fe(f,"CI",c.F?"0":"1"),!c.F&&c.ja&&Fe(f,"TO",c.ja),Fe(f,"TYPE","xmlhttp"),ji(c,f),c.m&&c.o&&Ul(f,c.m,c.o),c.L&&(c.g.I=c.L);var p=c.g;c=c.ia,p.L=1,p.v=da(Ln(f)),p.m=null,p.P=!0,Nd(p,c)}t.Za=function(){this.C!=null&&(this.C=null,_a(this),Bl(this),Nt(19))};function va(c){c.C!=null&&(a.clearTimeout(c.C),c.C=null)}function ip(c,f){var p=null;if(c.g==f){va(c),jl(c),c.g=null;var y=2}else if(Ll(c.h,f))p=f.D,Md(c.h,f),y=1;else return;if(c.G!=0){if(f.o)if(y==1){p=f.m?f.m.length:0,f=Date.now()-f.F;var V=c.B;y=aa(),ue(y,new Sd(y,p)),ya(c)}else rp(c);else if(V=f.s,V==3||V==0&&0<f.X||!(y==1&&uI(c,f)||y==2&&Bl(c)))switch(p&&0<p.length&&(f=c.h,f.i=f.i.concat(p)),V){case 1:Kr(c,5);break;case 4:Kr(c,10);break;case 3:Kr(c,6);break;default:Kr(c,2)}}}function op(c,f){let p=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(p*=2),p*f}function Kr(c,f){if(c.j.info("Error code "+f),f==2){var p=g(c.fb,c),y=c.Xa;const V=!y;y=new Wr(y||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||ha(y,"https"),da(y),V?rI(y.toString(),p):sI(y.toString(),p)}else Nt(2);c.G=0,c.l&&c.l.sa(f),ap(c),ep(c)}t.fb=function(c){c?(this.j.info("Successfully pinged google.com"),Nt(2)):(this.j.info("Failed to ping google.com"),Nt(1))};function ap(c){if(c.G=0,c.ka=[],c.l){const f=Ud(c.h);(f.length!=0||c.i.length!=0)&&(N(c.ka,f),N(c.ka,c.i),c.h.i.length=0,S(c.i),c.i.length=0),c.l.ra()}}function cp(c,f,p){var y=p instanceof Wr?Ln(p):new Wr(p);if(y.g!="")f&&(y.g=f+"."+y.g),fa(y,y.s);else{var V=a.location;y=V.protocol,f=f?f+"."+V.hostname:V.hostname,V=+V.port;var U=new Wr(null);y&&ha(U,y),f&&(U.g=f),V&&fa(U,V),p&&(U.l=p),y=U}return p=c.D,f=c.ya,p&&f&&Fe(y,p,f),Fe(y,"VER",c.la),ji(c,y),y}function lp(c,f,p){if(f&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return f=c.Ca&&!c.pa?new We(new pa({eb:p})):new We(c.pa),f.Ha(c.J),f}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function up(){}t=up.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function wa(){}wa.prototype.g=function(c,f){return new zt(c,f)};function zt(c,f){ne.call(this),this.g=new Zd(f),this.l=c,this.h=f&&f.messageUrlParams||null,c=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(c?c["X-WebChannel-Content-Type"]=f.messageContentType:c={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.va&&(c?c["X-WebChannel-Client-Profile"]=f.va:c={"X-WebChannel-Client-Profile":f.va}),this.g.S=c,(c=f&&f.Sb)&&!O(c)&&(this.g.m=c),this.v=f&&f.supportsCrossDomainXhr||!1,this.u=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!O(f)&&(this.g.D=f,c=this.h,c!==null&&f in c&&(c=this.h,f in c&&delete c[f])),this.j=new ks(this)}w(zt,ne),zt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},zt.prototype.close=function(){Fl(this.g)},zt.prototype.o=function(c){var f=this.g;if(typeof c=="string"){var p={};p.__data__=c,c=p}else this.u&&(p={},p.__data__=Rs(c),c=p);f.i.push(new GT(f.Ya++,c)),f.G==3&&ya(f)},zt.prototype.N=function(){this.g.l=null,delete this.j,Fl(this.g),delete this.g,zt.aa.N.call(this)};function hp(c){Cl.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var f=c.__sm__;if(f){e:{for(const p in f){c=p;break e}c=void 0}(this.i=c)&&(c=this.i,f=f!==null&&c in f?f[c]:void 0),this.data=f}else this.data=c}w(hp,Cl);function fp(){kl.call(this),this.status=1}w(fp,kl);function ks(c){this.g=c}w(ks,up),ks.prototype.ua=function(){ue(this.g,"a")},ks.prototype.ta=function(c){ue(this.g,new hp(c))},ks.prototype.sa=function(c){ue(this.g,new fp)},ks.prototype.ra=function(){ue(this.g,"b")},wa.prototype.createWebChannel=wa.prototype.g,zt.prototype.send=zt.prototype.o,zt.prototype.open=zt.prototype.m,zt.prototype.close=zt.prototype.close,Lw=function(){return new wa},xw=function(){return aa()},Vw=$r,Ih={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ca.NO_ERROR=0,ca.TIMEOUT=8,ca.HTTP_ERROR=6,Qa=ca,Pd.COMPLETE="complete",Dw=Pd,Id.EventType=ki,ki.OPEN="a",ki.CLOSE="b",ki.ERROR="c",ki.MESSAGE="d",ne.prototype.listen=ne.prototype.K,eo=Id,We.prototype.listenOnce=We.prototype.L,We.prototype.getLastError=We.prototype.Ka,We.prototype.getLastErrorCode=We.prototype.Ba,We.prototype.getStatus=We.prototype.Z,We.prototype.getResponseJson=We.prototype.Oa,We.prototype.getResponseText=We.prototype.oa,We.prototype.send=We.prototype.ea,We.prototype.setWithCredentials=We.prototype.Ha,Ow=We}).apply(typeof Va<"u"?Va:typeof self<"u"?self:typeof window<"u"?window:{});const dm="@firebase/firestore";/**
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
 */class Tt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Tt.UNAUTHENTICATED=new Tt(null),Tt.GOOGLE_CREDENTIALS=new Tt("google-credentials-uid"),Tt.FIRST_PARTY=new Tt("first-party-uid"),Tt.MOCK_USER=new Tt("mock-user");/**
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
 */let Ai="10.14.0";/**
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
 */const fs=new _f("@firebase/firestore");function Ki(){return fs.logLevel}function re(t,...e){if(fs.logLevel<=ve.DEBUG){const n=e.map(Pf);fs.debug(`Firestore (${Ai}): ${t}`,...n)}}function ar(t,...e){if(fs.logLevel<=ve.ERROR){const n=e.map(Pf);fs.error(`Firestore (${Ai}): ${t}`,...n)}}function ui(t,...e){if(fs.logLevel<=ve.WARN){const n=e.map(Pf);fs.warn(`Firestore (${Ai}): ${t}`,...n)}}function Pf(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function pe(t="Unexpected state"){const e=`FIRESTORE (${Ai}) INTERNAL ASSERTION FAILED: `+t;throw ar(e),new Error(e)}function Oe(t,e){t||pe()}function me(t,e){return t}/**
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
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Z extends wn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class tr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Mw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class oD{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Tt.UNAUTHENTICATED))}shutdown(){}}class aD{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class cD{constructor(e){this.t=e,this.currentUser=Tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Oe(this.o===void 0);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new tr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new tr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{re("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(re("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new tr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(re("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Oe(typeof r.accessToken=="string"),new Mw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Oe(e===null||typeof e=="string"),new Tt(e)}}class lD{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Tt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class uD{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new lD(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class hD{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class fD{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Oe(this.o===void 0);const r=i=>{i.error!=null&&re("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,re("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{re("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):re("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Oe(typeof n.token=="string"),this.R=n.token,new hD(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function dD(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Uw{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=dD(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Re(t,e){return t<e?-1:t>e?1:0}function hi(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class at{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Z(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Z(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new Z(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Z(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return at.fromMillis(Date.now())}static fromDate(e){return at.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new at(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Re(this.nanoseconds,e.nanoseconds):Re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ge{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ge(e)}static min(){return new ge(new at(0,0))}static max(){return new ge(new at(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Do{constructor(e,n,r){n===void 0?n=0:n>e.length&&pe(),r===void 0?r=e.length-n:r>e.length-n&&pe(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Do.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Do?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Be extends Do{construct(e,n,r){return new Be(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Z(j.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Be(n)}static emptyPath(){return new Be([])}}const pD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class pt extends Do{construct(e,n,r){return new pt(e,n,r)}static isValidIdentifier(e){return pD.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),pt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new pt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Z(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new Z(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new Z(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new Z(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new pt(n)}static emptyPath(){return new pt([])}}/**
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
 */class ce{constructor(e){this.path=e}static fromPath(e){return new ce(Be.fromString(e))}static fromName(e){return new ce(Be.fromString(e).popFirst(5))}static empty(){return new ce(Be.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Be.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Be.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ce(new Be(e.slice()))}}function gD(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ge.fromTimestamp(r===1e9?new at(n+1,0):new at(n,r));return new xr(s,ce.empty(),e)}function mD(t){return new xr(t.readTime,t.key,-1)}class xr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new xr(ge.min(),ce.empty(),-1)}static max(){return new xr(ge.max(),ce.empty(),-1)}}function _D(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=ce.comparator(t.documentKey,e.documentKey),n!==0?n:Re(t.largestBatchId,e.largestBatchId))}/**
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
 */const yD="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class vD{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Yo(t){if(t.code!==j.FAILED_PRECONDITION||t.message!==yD)throw t;re("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class W{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&pe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new W((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof W?n:W.resolve(n)}catch(n){return W.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):W.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):W.reject(n)}static resolve(e){return new W((n,r)=>{n(e)})}static reject(e){return new W((n,r)=>{r(e)})}static waitFor(e){return new W((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=W.resolve(!1);for(const r of e)n=n.next(s=>s?W.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new W((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next(h=>{o[u]=h,++a,a===i&&r(o)},h=>s(h))}})}static doWhile(e,n){return new W((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function wD(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Xo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Cf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Cf.oe=-1;function cl(t){return t==null}function bc(t){return t===0&&1/t==-1/0}function ED(t){return typeof t=="number"&&Number.isInteger(t)&&!bc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function pm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function As(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Fw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class qe{constructor(e,n){this.comparator=e,this.root=n||ft.EMPTY}insert(e,n){return new qe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ft.BLACK,null,null))}remove(e){return new qe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ft.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new xa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new xa(this.root,e,this.comparator,!1)}getReverseIterator(){return new xa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new xa(this.root,e,this.comparator,!0)}}class xa{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ft{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ft.RED,this.left=s??ft.EMPTY,this.right=i??ft.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ft(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ft.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ft.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ft.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ft.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw pe();const e=this.left.check();if(e!==this.right.check())throw pe();return e+(this.isRed()?0:1)}}ft.EMPTY=null,ft.RED=!0,ft.BLACK=!1;ft.EMPTY=new class{constructor(){this.size=0}get key(){throw pe()}get value(){throw pe()}get color(){throw pe()}get left(){throw pe()}get right(){throw pe()}copy(e,n,r,s,i){return this}insert(e,n,r){return new ft(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class mt{constructor(e){this.comparator=e,this.data=new qe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new gm(this.data.getIterator())}getIteratorFrom(e){return new gm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof mt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new mt(this.comparator);return n.data=e,n}}class gm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Jt{constructor(e){this.fields=e,e.sort(pt.comparator)}static empty(){return new Jt([])}unionWith(e){let n=new mt(pt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Jt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return hi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class Bw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class _t{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Bw("Invalid base64 string: "+i):i}}(e);return new _t(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new _t(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}_t.EMPTY_BYTE_STRING=new _t("");const TD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Lr(t){if(Oe(!!t),typeof t=="string"){let e=0;const n=TD.exec(t);if(Oe(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Xe(t.seconds),nanos:Xe(t.nanos)}}function Xe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ds(t){return typeof t=="string"?_t.fromBase64String(t):_t.fromUint8Array(t)}/**
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
 */function kf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Nf(t){const e=t.mapValue.fields.__previous_value__;return kf(e)?Nf(e):e}function Vo(t){const e=Lr(t.mapValue.fields.__local_write_time__.timestampValue);return new at(e.seconds,e.nanos)}/**
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
 */class ID{constructor(e,n,r,s,i,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class xo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new xo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof xo&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const La={mapValue:{}};function ps(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?kf(t)?4:bD(t)?9007199254740991:AD(t)?10:11:pe()}function Dn(t,e){if(t===e)return!0;const n=ps(t);if(n!==ps(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Vo(t).isEqual(Vo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Lr(s.timestampValue),a=Lr(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return ds(s.bytesValue).isEqual(ds(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Xe(s.geoPointValue.latitude)===Xe(i.geoPointValue.latitude)&&Xe(s.geoPointValue.longitude)===Xe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Xe(s.integerValue)===Xe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Xe(s.doubleValue),a=Xe(i.doubleValue);return o===a?bc(o)===bc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return hi(t.arrayValue.values||[],e.arrayValue.values||[],Dn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(pm(o)!==pm(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Dn(o[l],a[l])))return!1;return!0}(t,e);default:return pe()}}function Lo(t,e){return(t.values||[]).find(n=>Dn(n,e))!==void 0}function fi(t,e){if(t===e)return 0;const n=ps(t),r=ps(e);if(n!==r)return Re(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Re(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Xe(i.integerValue||i.doubleValue),l=Xe(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return mm(t.timestampValue,e.timestampValue);case 4:return mm(Vo(t),Vo(e));case 5:return Re(t.stringValue,e.stringValue);case 6:return function(i,o){const a=ds(i),l=ds(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const h=Re(a[u],l[u]);if(h!==0)return h}return Re(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=Re(Xe(i.latitude),Xe(o.latitude));return a!==0?a:Re(Xe(i.longitude),Xe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return _m(t.arrayValue,e.arrayValue);case 10:return function(i,o){var a,l,u,h;const d=i.fields||{},g=o.fields||{},m=(a=d.value)===null||a===void 0?void 0:a.arrayValue,w=(l=g.value)===null||l===void 0?void 0:l.arrayValue,S=Re(((u=m==null?void 0:m.values)===null||u===void 0?void 0:u.length)||0,((h=w==null?void 0:w.values)===null||h===void 0?void 0:h.length)||0);return S!==0?S:_m(m,w)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===La.mapValue&&o===La.mapValue)return 0;if(i===La.mapValue)return 1;if(o===La.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),u=o.fields||{},h=Object.keys(u);l.sort(),h.sort();for(let d=0;d<l.length&&d<h.length;++d){const g=Re(l[d],h[d]);if(g!==0)return g;const m=fi(a[l[d]],u[h[d]]);if(m!==0)return m}return Re(l.length,h.length)}(t.mapValue,e.mapValue);default:throw pe()}}function mm(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Re(t,e);const n=Lr(t),r=Lr(e),s=Re(n.seconds,r.seconds);return s!==0?s:Re(n.nanos,r.nanos)}function _m(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=fi(n[s],r[s]);if(i)return i}return Re(n.length,r.length)}function di(t){return Ah(t)}function Ah(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Lr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ds(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return ce.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Ah(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Ah(n.fields[o])}`;return s+"}"}(t.mapValue):pe()}function ym(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function bh(t){return!!t&&"integerValue"in t}function Of(t){return!!t&&"arrayValue"in t}function vm(t){return!!t&&"nullValue"in t}function wm(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ja(t){return!!t&&"mapValue"in t}function AD(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function po(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return As(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=po(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=po(t.arrayValue.values[n]);return e}return Object.assign({},t)}function bD(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class $t{constructor(e){this.value=e}static empty(){return new $t({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ja(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=po(n)}setAll(e){let n=pt.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=po(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Ja(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Dn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Ja(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){As(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new $t(po(this.value))}}function jw(t){const e=[];return As(t.fields,(n,r)=>{const s=new pt([n]);if(Ja(r)){const i=jw(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Jt(e)}/**
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
 */class Rt{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Rt(e,0,ge.min(),ge.min(),ge.min(),$t.empty(),0)}static newFoundDocument(e,n,r,s){return new Rt(e,1,n,ge.min(),r,s,0)}static newNoDocument(e,n){return new Rt(e,2,n,ge.min(),ge.min(),$t.empty(),0)}static newUnknownDocument(e,n){return new Rt(e,3,n,ge.min(),ge.min(),$t.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ge.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=$t.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=$t.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ge.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Rt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Rt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Rc{constructor(e,n){this.position=e,this.inclusive=n}}function Em(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=ce.comparator(ce.fromName(o.referenceValue),n.key):r=fi(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Tm(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Dn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Mo{constructor(e,n="asc"){this.field=e,this.dir=n}}function RD(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Hw{}class nt extends Hw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new PD(e,n,r):n==="array-contains"?new ND(e,r):n==="in"?new OD(e,r):n==="not-in"?new DD(e,r):n==="array-contains-any"?new VD(e,r):new nt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new CD(e,r):new kD(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(fi(n,this.value)):n!==null&&ps(this.value)===ps(n)&&this.matchesComparison(fi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return pe()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class vn extends Hw{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new vn(e,n)}matches(e){return $w(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function $w(t){return t.op==="and"}function qw(t){return SD(t)&&$w(t)}function SD(t){for(const e of t.filters)if(e instanceof vn)return!1;return!0}function Rh(t){if(t instanceof nt)return t.field.canonicalString()+t.op.toString()+di(t.value);if(qw(t))return t.filters.map(e=>Rh(e)).join(",");{const e=t.filters.map(n=>Rh(n)).join(",");return`${t.op}(${e})`}}function Ww(t,e){return t instanceof nt?function(r,s){return s instanceof nt&&r.op===s.op&&r.field.isEqual(s.field)&&Dn(r.value,s.value)}(t,e):t instanceof vn?function(r,s){return s instanceof vn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&Ww(o,s.filters[a]),!0):!1}(t,e):void pe()}function Kw(t){return t instanceof nt?function(n){return`${n.field.canonicalString()} ${n.op} ${di(n.value)}`}(t):t instanceof vn?function(n){return n.op.toString()+" {"+n.getFilters().map(Kw).join(" ,")+"}"}(t):"Filter"}class PD extends nt{constructor(e,n,r){super(e,n,r),this.key=ce.fromName(r.referenceValue)}matches(e){const n=ce.comparator(e.key,this.key);return this.matchesComparison(n)}}class CD extends nt{constructor(e,n){super(e,"in",n),this.keys=Gw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class kD extends nt{constructor(e,n){super(e,"not-in",n),this.keys=Gw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Gw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>ce.fromName(r.referenceValue))}class ND extends nt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Of(n)&&Lo(n.arrayValue,this.value)}}class OD extends nt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Lo(this.value.arrayValue,n)}}class DD extends nt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Lo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Lo(this.value.arrayValue,n)}}class VD extends nt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Of(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Lo(this.value.arrayValue,r))}}/**
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
 */class xD{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ue=null}}function Im(t,e=null,n=[],r=[],s=null,i=null,o=null){return new xD(t,e,n,r,s,i,o)}function Df(t){const e=me(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Rh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),cl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>di(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>di(r)).join(",")),e.ue=n}return e.ue}function Vf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!RD(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Ww(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Tm(t.startAt,e.startAt)&&Tm(t.endAt,e.endAt)}function Sh(t){return ce.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class bi{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function LD(t,e,n,r,s,i,o,a){return new bi(t,e,n,r,s,i,o,a)}function ll(t){return new bi(t)}function Am(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function zw(t){return t.collectionGroup!==null}function go(t){const e=me(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new mt(pt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Mo(i,r))}),n.has(pt.keyField().canonicalString())||e.ce.push(new Mo(pt.keyField(),r))}return e.ce}function kn(t){const e=me(t);return e.le||(e.le=MD(e,go(t))),e.le}function MD(t,e){if(t.limitType==="F")return Im(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Mo(s.field,i)});const n=t.endAt?new Rc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Rc(t.startAt.position,t.startAt.inclusive):null;return Im(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Ph(t,e){const n=t.filters.concat([e]);return new bi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Ch(t,e,n){return new bi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ul(t,e){return Vf(kn(t),kn(e))&&t.limitType===e.limitType}function Qw(t){return`${Df(kn(t))}|lt:${t.limitType}`}function Ms(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Kw(s)).join(", ")}]`),cl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>di(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>di(s)).join(",")),`Target(${r})`}(kn(t))}; limitType=${t.limitType})`}function hl(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):ce.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of go(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,l){const u=Em(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,go(r),s)||r.endAt&&!function(o,a,l){const u=Em(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,go(r),s))}(t,e)}function UD(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Jw(t){return(e,n)=>{let r=!1;for(const s of go(t)){const i=FD(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function FD(t,e,n){const r=t.field.isKeyField()?ce.comparator(e.key,n.key):function(i,o,a){const l=o.data.field(i),u=a.data.field(i);return l!==null&&u!==null?fi(l,u):pe()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return pe()}}/**
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
 */class Ri{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){As(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Fw(this.inner)}size(){return this.innerSize}}/**
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
 */const BD=new qe(ce.comparator);function cr(){return BD}const Yw=new qe(ce.comparator);function to(...t){let e=Yw;for(const n of t)e=e.insert(n.key,n);return e}function Xw(t){let e=Yw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ts(){return mo()}function Zw(){return mo()}function mo(){return new Ri(t=>t.toString(),(t,e)=>t.isEqual(e))}const jD=new qe(ce.comparator),HD=new mt(ce.comparator);function ye(...t){let e=HD;for(const n of t)e=e.add(n);return e}const $D=new mt(Re);function qD(){return $D}/**
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
 */function xf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:bc(e)?"-0":e}}function eE(t){return{integerValue:""+t}}function WD(t,e){return ED(e)?eE(e):xf(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class fl{constructor(){this._=void 0}}function KD(t,e,n){return t instanceof Sc?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&kf(i)&&(i=Nf(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof pi?nE(t,e):t instanceof Uo?rE(t,e):function(s,i){const o=tE(s,i),a=bm(o)+bm(s.Pe);return bh(o)&&bh(s.Pe)?eE(a):xf(s.serializer,a)}(t,e)}function GD(t,e,n){return t instanceof pi?nE(t,e):t instanceof Uo?rE(t,e):n}function tE(t,e){return t instanceof Pc?function(r){return bh(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Sc extends fl{}class pi extends fl{constructor(e){super(),this.elements=e}}function nE(t,e){const n=sE(e);for(const r of t.elements)n.some(s=>Dn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Uo extends fl{constructor(e){super(),this.elements=e}}function rE(t,e){let n=sE(e);for(const r of t.elements)n=n.filter(s=>!Dn(s,r));return{arrayValue:{values:n}}}class Pc extends fl{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function bm(t){return Xe(t.integerValue||t.doubleValue)}function sE(t){return Of(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class zD{constructor(e,n){this.field=e,this.transform=n}}function QD(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof pi&&s instanceof pi||r instanceof Uo&&s instanceof Uo?hi(r.elements,s.elements,Dn):r instanceof Pc&&s instanceof Pc?Dn(r.Pe,s.Pe):r instanceof Sc&&s instanceof Sc}(t.transform,e.transform)}class JD{constructor(e,n){this.version=e,this.transformResults=n}}class Mt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Mt}static exists(e){return new Mt(void 0,e)}static updateTime(e){return new Mt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ya(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class dl{}function iE(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new pl(t.key,Mt.none()):new Zo(t.key,t.data,Mt.none());{const n=t.data,r=$t.empty();let s=new mt(pt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new jr(t.key,r,new Jt(s.toArray()),Mt.none())}}function YD(t,e,n){t instanceof Zo?function(s,i,o){const a=s.value.clone(),l=Sm(s.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof jr?function(s,i,o){if(!Ya(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Sm(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(oE(s)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function _o(t,e,n,r){return t instanceof Zo?function(i,o,a,l){if(!Ya(i.precondition,o))return a;const u=i.value.clone(),h=Pm(i.fieldTransforms,l,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof jr?function(i,o,a,l){if(!Ya(i.precondition,o))return a;const u=Pm(i.fieldTransforms,l,o),h=o.data;return h.setAll(oE(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(d=>d.field))}(t,e,n,r):function(i,o,a){return Ya(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function XD(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=tE(r.transform,s||null);i!=null&&(n===null&&(n=$t.empty()),n.set(r.field,i))}return n||null}function Rm(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&hi(r,s,(i,o)=>QD(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Zo extends dl{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class jr extends dl{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function oE(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Sm(t,e,n){const r=new Map;Oe(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,GD(o,a,n[s]))}return r}function Pm(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,KD(i,o,e))}return r}class pl extends dl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ZD extends dl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class eV{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&YD(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=_o(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=_o(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Zw();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const l=iE(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(ge.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ye())}isEqual(e){return this.batchId===e.batchId&&hi(this.mutations,e.mutations,(n,r)=>Rm(n,r))&&hi(this.baseMutations,e.baseMutations,(n,r)=>Rm(n,r))}}class Lf{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Oe(e.mutations.length===r.length);let s=function(){return jD}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Lf(e,n,r,s)}}/**
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
 */class tV{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class nV{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ze,Ee;function rV(t){switch(t){default:return pe();case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0}}function aE(t){if(t===void 0)return ar("GRPC error has no .code"),j.UNKNOWN;switch(t){case Ze.OK:return j.OK;case Ze.CANCELLED:return j.CANCELLED;case Ze.UNKNOWN:return j.UNKNOWN;case Ze.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case Ze.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case Ze.INTERNAL:return j.INTERNAL;case Ze.UNAVAILABLE:return j.UNAVAILABLE;case Ze.UNAUTHENTICATED:return j.UNAUTHENTICATED;case Ze.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case Ze.NOT_FOUND:return j.NOT_FOUND;case Ze.ALREADY_EXISTS:return j.ALREADY_EXISTS;case Ze.PERMISSION_DENIED:return j.PERMISSION_DENIED;case Ze.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case Ze.ABORTED:return j.ABORTED;case Ze.OUT_OF_RANGE:return j.OUT_OF_RANGE;case Ze.UNIMPLEMENTED:return j.UNIMPLEMENTED;case Ze.DATA_LOSS:return j.DATA_LOSS;default:return pe()}}(Ee=Ze||(Ze={}))[Ee.OK=0]="OK",Ee[Ee.CANCELLED=1]="CANCELLED",Ee[Ee.UNKNOWN=2]="UNKNOWN",Ee[Ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ee[Ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ee[Ee.NOT_FOUND=5]="NOT_FOUND",Ee[Ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ee[Ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ee[Ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ee[Ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ee[Ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ee[Ee.ABORTED=10]="ABORTED",Ee[Ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ee[Ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ee[Ee.INTERNAL=13]="INTERNAL",Ee[Ee.UNAVAILABLE=14]="UNAVAILABLE",Ee[Ee.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
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
 */function sV(){return new TextEncoder}/**
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
 */const iV=new cs([4294967295,4294967295],0);function Cm(t){const e=sV().encode(t),n=new Nw;return n.update(e),new Uint8Array(n.digest())}function km(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new cs([n,r],0),new cs([s,i],0)]}class Mf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new no(`Invalid padding: ${n}`);if(r<0)throw new no(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new no(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new no(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=cs.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(cs.fromNumber(r)));return s.compare(iV)===1&&(s=new cs([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Cm(e),[r,s]=km(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Mf(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=Cm(e),[r,s]=km(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class no extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class gl{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,ea.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new gl(ge.min(),s,new qe(Re),cr(),ye())}}class ea{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ea(r,n,ye(),ye(),ye())}}/**
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
 */class Xa{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class cE{constructor(e,n){this.targetId=e,this.me=n}}class lE{constructor(e,n,r=_t.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Nm{constructor(){this.fe=0,this.ge=Dm(),this.pe=_t.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ye(),n=ye(),r=ye();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:pe()}}),new ea(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=Dm()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Oe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class oV{constructor(e){this.Le=e,this.Be=new Map,this.ke=cr(),this.qe=Om(),this.Qe=new qe(Re)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:pe()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(Sh(i))if(r===0){const o=new ce(i.path);this.Ue(n,o,Rt.newNoDocument(o,ge.min()))}else Oe(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),l=a?this.Xe(a,e,o):1;if(l!==0){this.je(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,u)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=ds(r).toUint8Array()}catch(l){if(l instanceof Bw)return ui("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Mf(o,s,i)}catch(l){return ui(l instanceof no?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const a=this.Je(o);if(a){if(i.current&&Sh(a.target)){const l=new ce(a.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,Rt.newNoDocument(l,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=ye();this.qe.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Je(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new gl(e,n,this.Qe,this.ke,r);return this.ke=cr(),this.qe=Om(),this.Qe=new qe(Re),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Nm,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new mt(Re),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||re("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Nm),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Om(){return new qe(ce.comparator)}function Dm(){return new qe(ce.comparator)}const aV={asc:"ASCENDING",desc:"DESCENDING"},cV={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},lV={and:"AND",or:"OR"};class uV{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function kh(t,e){return t.useProto3Json||cl(e)?e:{value:e}}function Cc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function uE(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function hV(t,e){return Cc(t,e.toTimestamp())}function Nn(t){return Oe(!!t),ge.fromTimestamp(function(n){const r=Lr(n);return new at(r.seconds,r.nanos)}(t))}function Uf(t,e){return Nh(t,e).canonicalString()}function Nh(t,e){const n=function(s){return new Be(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function hE(t){const e=Be.fromString(t);return Oe(mE(e)),e}function Oh(t,e){return Uf(t.databaseId,e.path)}function yu(t,e){const n=hE(e);if(n.get(1)!==t.databaseId.projectId)throw new Z(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Z(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ce(dE(n))}function fE(t,e){return Uf(t.databaseId,e)}function fV(t){const e=hE(t);return e.length===4?Be.emptyPath():dE(e)}function Dh(t){return new Be(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function dE(t){return Oe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Vm(t,e,n){return{name:Oh(t,e),fields:n.value.mapValue.fields}}function dV(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:pe()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(u,h){return u.useProto3Json?(Oe(h===void 0||typeof h=="string"),_t.fromBase64String(h||"")):(Oe(h===void 0||h instanceof Buffer||h instanceof Uint8Array),_t.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const h=u.code===void 0?j.UNKNOWN:aE(u.code);return new Z(h,u.message||"")}(o);n=new lE(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=yu(t,r.document.name),i=Nn(r.document.updateTime),o=r.document.createTime?Nn(r.document.createTime):ge.min(),a=new $t({mapValue:{fields:r.document.fields}}),l=Rt.newFoundDocument(s,i,o,a),u=r.targetIds||[],h=r.removedTargetIds||[];n=new Xa(u,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=yu(t,r.document),i=r.readTime?Nn(r.readTime):ge.min(),o=Rt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Xa([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=yu(t,r.document),i=r.removedTargetIds||[];n=new Xa([],i,s,null)}else{if(!("filter"in e))return pe();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new nV(s,i),a=r.targetId;n=new cE(a,o)}}return n}function pV(t,e){let n;if(e instanceof Zo)n={update:Vm(t,e.key,e.value)};else if(e instanceof pl)n={delete:Oh(t,e.key)};else if(e instanceof jr)n={update:Vm(t,e.key,e.data),updateMask:IV(e.fieldMask)};else{if(!(e instanceof ZD))return pe();n={verify:Oh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof Sc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof pi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Uo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Pc)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw pe()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:hV(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:pe()}(t,e.precondition)),n}function gV(t,e){return t&&t.length>0?(Oe(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?Nn(s.updateTime):Nn(i);return o.isEqual(ge.min())&&(o=Nn(i)),new JD(o,s.transformResults||[])}(n,e))):[]}function mV(t,e){return{documents:[fE(t,e.path)]}}function _V(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=fE(t,s);const i=function(u){if(u.length!==0)return gE(vn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(h=>function(g){return{field:Us(g.field),direction:wV(g.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=kh(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{_t:n,parent:s}}function yV(t){let e=fV(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Oe(r===1);const h=n.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];n.where&&(i=function(d){const g=pE(d);return g instanceof vn&&qw(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(g=>function(w){return new Mo(Fs(w.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(w.direction))}(g))}(n.orderBy));let a=null;n.limit&&(a=function(d){let g;return g=typeof d=="object"?d.value:d,cl(g)?null:g}(n.limit));let l=null;n.startAt&&(l=function(d){const g=!!d.before,m=d.values||[];return new Rc(m,g)}(n.startAt));let u=null;return n.endAt&&(u=function(d){const g=!d.before,m=d.values||[];return new Rc(m,g)}(n.endAt)),LD(e,s,o,i,a,"F",l,u)}function vV(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return pe()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function pE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Fs(n.unaryFilter.field);return nt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Fs(n.unaryFilter.field);return nt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Fs(n.unaryFilter.field);return nt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Fs(n.unaryFilter.field);return nt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return pe()}}(t):t.fieldFilter!==void 0?function(n){return nt.create(Fs(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return pe()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return vn.create(n.compositeFilter.filters.map(r=>pE(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return pe()}}(n.compositeFilter.op))}(t):pe()}function wV(t){return aV[t]}function EV(t){return cV[t]}function TV(t){return lV[t]}function Us(t){return{fieldPath:t.canonicalString()}}function Fs(t){return pt.fromServerFormat(t.fieldPath)}function gE(t){return t instanceof nt?function(n){if(n.op==="=="){if(wm(n.value))return{unaryFilter:{field:Us(n.field),op:"IS_NAN"}};if(vm(n.value))return{unaryFilter:{field:Us(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(wm(n.value))return{unaryFilter:{field:Us(n.field),op:"IS_NOT_NAN"}};if(vm(n.value))return{unaryFilter:{field:Us(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Us(n.field),op:EV(n.op),value:n.value}}}(t):t instanceof vn?function(n){const r=n.getFilters().map(s=>gE(s));return r.length===1?r[0]:{compositeFilter:{op:TV(n.op),filters:r}}}(t):pe()}function IV(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function mE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class kr{constructor(e,n,r,s,i=ge.min(),o=ge.min(),a=_t.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new kr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new kr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new kr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new kr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class AV{constructor(e){this.ct=e}}function bV(t){const e=yV({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ch(e,e.limit,"L"):e}/**
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
 */class RV{constructor(){this.un=new SV}addToCollectionParentIndex(e,n){return this.un.add(n),W.resolve()}getCollectionParents(e,n){return W.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return W.resolve()}deleteFieldIndex(e,n){return W.resolve()}deleteAllFieldIndexes(e){return W.resolve()}createTargetIndexes(e,n){return W.resolve()}getDocumentsMatchingTarget(e,n){return W.resolve(null)}getIndexType(e,n){return W.resolve(0)}getFieldIndexes(e,n){return W.resolve([])}getNextCollectionGroupToUpdate(e){return W.resolve(null)}getMinOffset(e,n){return W.resolve(xr.min())}getMinOffsetFromCollectionGroup(e,n){return W.resolve(xr.min())}updateCollectionGroup(e,n,r){return W.resolve()}updateIndexEntries(e,n){return W.resolve()}}class SV{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new mt(Be.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new mt(Be.comparator)).toArray()}}/**
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
 */class gi{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new gi(0)}static kn(){return new gi(-1)}}/**
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
 */class PV{constructor(){this.changes=new Ri(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Rt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?W.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class CV{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class kV{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&_o(r.mutation,s,Jt.empty(),at.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ye()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ye()){const s=ts();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=to();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ts();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ye()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=cr();const o=mo(),a=function(){return mo()}();return n.forEach((l,u)=>{const h=r.get(u.key);s.has(u.key)&&(h===void 0||h.mutation instanceof jr)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),_o(h.mutation,u,h.mutation.getFieldMask(),at.now())):o.set(u.key,Jt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var d;return a.set(u,new CV(h,(d=o.get(u))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const r=mo();let s=new qe((o,a)=>o-a),i=ye();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let h=r.get(l)||Jt.empty();h=a.applyToLocalView(u,h),r.set(l,h);const d=(s.get(a.batchId)||ye()).add(l);s=s.insert(a.batchId,d)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,h=l.value,d=Zw();h.forEach(g=>{if(!i.has(g)){const m=iE(n.get(g),r.get(g));m!==null&&d.set(g,m),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return W.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return ce.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):zw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):W.resolve(ts());let a=-1,l=i;return o.next(u=>W.forEach(u,(h,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),i.get(h)?W.resolve():this.remoteDocumentCache.getEntry(e,h).next(g=>{l=l.insert(h,g)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,l,u,ye())).next(h=>({batchId:a,changes:Xw(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ce(n)).next(r=>{let s=to();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=to();return this.indexManager.getCollectionParents(e,i).next(a=>W.forEach(a,l=>{const u=function(d,g){return new bi(g,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(h=>{h.forEach((d,g)=>{o=o.insert(d,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,Rt.newInvalidDocument(h)))});let a=to();return o.forEach((l,u)=>{const h=i.get(l);h!==void 0&&_o(h.mutation,u,Jt.empty(),at.now()),hl(n,u)&&(a=a.insert(l,u))}),a})}}/**
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
 */class NV{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return W.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Nn(s.createTime)}}(n)),W.resolve()}getNamedQuery(e,n){return W.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:bV(s.bundledQuery),readTime:Nn(s.readTime)}}(n)),W.resolve()}}/**
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
 */class OV{constructor(){this.overlays=new qe(ce.comparator),this.Ir=new Map}getOverlay(e,n){return W.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ts();return W.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),W.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),W.resolve()}getOverlaysForCollection(e,n,r){const s=ts(),i=n.length+1,o=new ce(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return W.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new qe((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let h=i.get(u.largestBatchId);h===null&&(h=ts(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=ts(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=s)););return W.resolve(a)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new tV(n,r));let i=this.Ir.get(n);i===void 0&&(i=ye(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class DV{constructor(){this.sessionToken=_t.EMPTY_BYTE_STRING}getSessionToken(e){return W.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,W.resolve()}}/**
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
 */class Ff{constructor(){this.Tr=new mt(ct.Er),this.dr=new mt(ct.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new ct(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new ct(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new ce(new Be([])),r=new ct(n,e),s=new ct(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new ce(new Be([])),r=new ct(n,e),s=new ct(n,e+1);let i=ye();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ct(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ct{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return ce.comparator(e.key,n.key)||Re(e.wr,n.wr)}static Ar(e,n){return Re(e.wr,n.wr)||ce.comparator(e.key,n.key)}}/**
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
 */class VV{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new mt(ct.Er)}checkEmpty(e){return W.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new eV(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.br=this.br.add(new ct(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return W.resolve(o)}lookupMutationBatch(e,n){return W.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return W.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return W.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return W.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ct(n,0),s=new ct(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const a=this.Dr(o.wr);i.push(a)}),W.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new mt(Re);return n.forEach(s=>{const i=new ct(s,0),o=new ct(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],a=>{r=r.add(a.wr)})}),W.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;ce.isDocumentKey(i)||(i=i.child(""));const o=new ct(new ce(i),0);let a=new mt(Re);return this.br.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(l.wr)),!0)},o),W.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Oe(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return W.forEach(n.mutations,s=>{const i=new ct(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new ct(n,0),s=this.br.firstAfterOrEqual(r);return W.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,W.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class xV{constructor(e){this.Mr=e,this.docs=function(){return new qe(ce.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return W.resolve(r?r.document.mutableCopy():Rt.newInvalidDocument(n))}getEntries(e,n){let r=cr();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Rt.newInvalidDocument(s))}),W.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=cr();const o=n.path,a=new ce(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:h}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||_D(mD(h),r)<=0||(s.has(h.key)||hl(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return W.resolve(i)}getAllFromCollectionGroup(e,n,r,s){pe()}Or(e,n){return W.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new LV(this)}getSize(e){return W.resolve(this.size)}}class LV extends PV{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),W.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class MV{constructor(e){this.persistence=e,this.Nr=new Ri(n=>Df(n),Vf),this.lastRemoteSnapshotVersion=ge.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Ff,this.targetCount=0,this.kr=gi.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),W.resolve()}getLastRemoteSnapshotVersion(e){return W.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return W.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),W.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),W.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new gi(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,W.resolve()}updateTargetData(e,n){return this.Kn(n),W.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,W.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),W.waitFor(i).next(()=>s)}getTargetCount(e){return W.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return W.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),W.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),W.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),W.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return W.resolve(r)}containsKey(e,n){return W.resolve(this.Br.containsKey(n))}}/**
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
 */class UV{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Cf(0),this.Kr=!1,this.Kr=!0,this.$r=new DV,this.referenceDelegate=e(this),this.Ur=new MV(this),this.indexManager=new RV,this.remoteDocumentCache=function(s){return new xV(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new AV(n),this.Gr=new NV(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new OV,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new VV(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){re("MemoryPersistence","Starting transaction:",e);const s=new FV(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return W.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class FV extends vD{constructor(e){super(),this.currentSequenceNumber=e}}class Bf{constructor(e){this.persistence=e,this.Jr=new Ff,this.Yr=null}static Zr(e){return new Bf(e)}get Xr(){if(this.Yr)return this.Yr;throw pe()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),W.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),W.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),W.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return W.forEach(this.Xr,r=>{const s=ce.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,ge.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return W.or([()=>W.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class jf{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=ye(),s=ye();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new jf(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class BV{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class jV{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return SC()?8:wD(Ct())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new BV;return this.Xi(e,n,o).next(a=>{if(i.result=a,this.zi)return this.es(e,n,o,a.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(Ki()<=ve.DEBUG&&re("QueryEngine","SDK will not create cache indexes for query:",Ms(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),W.resolve()):(Ki()<=ve.DEBUG&&re("QueryEngine","Query:",Ms(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Ki()<=ve.DEBUG&&re("QueryEngine","The SDK decides to create cache indexes for query:",Ms(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,kn(n))):W.resolve())}Yi(e,n){if(Am(n))return W.resolve(null);let r=kn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Ch(n,null,"F"),r=kn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ye(...i);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.ts(n,a);return this.ns(n,u,o,l.readTime)?this.Yi(e,Ch(n,null,"F")):this.rs(e,u,n,l)}))})))}Zi(e,n,r,s){return Am(n)||s.isEqual(ge.min())?W.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?W.resolve(null):(Ki()<=ve.DEBUG&&re("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ms(n)),this.rs(e,o,n,gD(s,-1)).next(a=>a))})}ts(e,n){let r=new mt(Jw(e));return n.forEach((s,i)=>{hl(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return Ki()<=ve.DEBUG&&re("QueryEngine","Using full collection scan to execute query:",Ms(n)),this.Ji.getDocumentsMatchingQuery(e,n,xr.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class HV{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new qe(Re),this._s=new Ri(i=>Df(i),Vf),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new kV(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function $V(t,e,n,r){return new HV(t,e,n,r)}async function _E(t,e){const n=me(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=ye();for(const u of s){o.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}for(const u of i){a.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next(u=>({hs:u,removedBatchIds:o,addedBatchIds:a}))})})}function qV(t,e){const n=me(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,l,u,h){const d=u.batch,g=d.keys();let m=W.resolve();return g.forEach(w=>{m=m.next(()=>h.getEntry(l,w)).next(S=>{const N=u.docVersions.get(w);Oe(N!==null),S.version.compareTo(N)<0&&(d.applyToRemoteDocument(S,u),S.isValidDocument()&&(S.setReadTime(u.commitVersion),h.addEntry(S)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(l,d))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=ye();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function yE(t){const e=me(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function WV(t,e){const n=me(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const a=[];e.targetChanges.forEach((h,d)=>{const g=s.get(d);if(!g)return;a.push(n.Ur.removeMatchingKeys(i,h.removedDocuments,d).next(()=>n.Ur.addMatchingKeys(i,h.addedDocuments,d)));let m=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(d)!==null?m=m.withResumeToken(_t.EMPTY_BYTE_STRING,ge.min()).withLastLimboFreeSnapshotVersion(ge.min()):h.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(h.resumeToken,r)),s=s.insert(d,m),function(S,N,x){return S.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-S.snapshotVersion.toMicroseconds()>=3e8?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(g,m,h)&&a.push(n.Ur.updateTargetData(i,m))});let l=cr(),u=ye();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),a.push(KV(i,o,e.documentUpdates).next(h=>{l=h.Ps,u=h.Is})),!r.isEqual(ge.min())){const h=n.Ur.getLastRemoteSnapshotVersion(i).next(d=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(h)}return W.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(n.os=s,i))}function KV(t,e,n){let r=ye(),s=ye();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=cr();return n.forEach((a,l)=>{const u=i.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(ge.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):re("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Ps:o,Is:s}})}function GV(t,e){const n=me(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function zV(t,e){const n=me(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,W.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new kr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Vh(t,e,n){const r=me(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Xo(o))throw o;re("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function xm(t,e,n){const r=me(t);let s=ge.min(),i=ye();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,h){const d=me(l),g=d._s.get(h);return g!==void 0?W.resolve(d.os.get(g)):d.Ur.getTargetData(u,h)}(r,o,kn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:ge.min(),n?i:ye())).next(a=>(QV(r,UD(e),a),{documents:a,Ts:i})))}function QV(t,e,n){let r=t.us.get(e)||ge.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class Lm{constructor(){this.activeTargetIds=qD()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class JV{constructor(){this.so=new Lm,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Lm,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class YV{_o(e){}shutdown(){}}/**
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
 */class Mm{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){re("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){re("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let Ma=null;function vu(){return Ma===null?Ma=function(){return 268435456+Math.round(2147483648*Math.random())}():Ma++,"0x"+Ma.toString(16)}/**
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
 */const XV={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class ZV{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const Et="WebChannelConnection";class ex extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const a=vu(),l=this.xo(n,r.toUriEncodedString());re("RestConnection",`Sending RPC '${n}' ${a}:`,l,s);const u={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(u,i,o),this.No(n,l,u,s).then(h=>(re("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw ui("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",l,"request:",s),h})}Lo(n,r,s,i,o,a){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ai}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=XV[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=vu();return new Promise((o,a)=>{const l=new Ow;l.setWithCredentials(!0),l.listenOnce(Dw.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Qa.NO_ERROR:const h=l.getResponseJson();re(Et,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(h)),o(h);break;case Qa.TIMEOUT:re(Et,`RPC '${e}' ${i} timed out`),a(new Z(j.DEADLINE_EXCEEDED,"Request time out"));break;case Qa.HTTP_ERROR:const d=l.getStatus();if(re(Et,`RPC '${e}' ${i} failed with status:`,d,"response text:",l.getResponseText()),d>0){let g=l.getResponseJson();Array.isArray(g)&&(g=g[0]);const m=g==null?void 0:g.error;if(m&&m.status&&m.message){const w=function(N){const x=N.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(x)>=0?x:j.UNKNOWN}(m.status);a(new Z(w,m.message))}else a(new Z(j.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new Z(j.UNAVAILABLE,"Connection failed."));break;default:pe()}}finally{re(Et,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);re(Et,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",u,r,15)})}Bo(e,n,r){const s=vu(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Lw(),a=xw(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Oo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=i.join("");re(Et,`Creating RPC '${e}' stream ${s}: ${h}`,l);const d=o.createWebChannel(h,l);let g=!1,m=!1;const w=new ZV({Io:N=>{m?re(Et,`Not sending because RPC '${e}' stream ${s} is closed:`,N):(g||(re(Et,`Opening RPC '${e}' stream ${s} transport.`),d.open(),g=!0),re(Et,`RPC '${e}' stream ${s} sending:`,N),d.send(N))},To:()=>d.close()}),S=(N,x,O)=>{N.listen(x,T=>{try{O(T)}catch(C){setTimeout(()=>{throw C},0)}})};return S(d,eo.EventType.OPEN,()=>{m||(re(Et,`RPC '${e}' stream ${s} transport opened.`),w.yo())}),S(d,eo.EventType.CLOSE,()=>{m||(m=!0,re(Et,`RPC '${e}' stream ${s} transport closed`),w.So())}),S(d,eo.EventType.ERROR,N=>{m||(m=!0,ui(Et,`RPC '${e}' stream ${s} transport errored:`,N),w.So(new Z(j.UNAVAILABLE,"The operation could not be completed")))}),S(d,eo.EventType.MESSAGE,N=>{var x;if(!m){const O=N.data[0];Oe(!!O);const T=O,C=T.error||((x=T[0])===null||x===void 0?void 0:x.error);if(C){re(Et,`RPC '${e}' stream ${s} received error:`,C);const D=C.status;let M=function(_){const I=Ze[_];if(I!==void 0)return aE(I)}(D),E=C.message;M===void 0&&(M=j.INTERNAL,E="Unknown error status: "+D+" with message "+C.message),m=!0,w.So(new Z(M,E)),d.close()}else re(Et,`RPC '${e}' stream ${s} received:`,O),w.bo(O)}}),S(a,Vw.STAT_EVENT,N=>{N.stat===Ih.PROXY?re(Et,`RPC '${e}' stream ${s} detected buffering proxy`):N.stat===Ih.NOPROXY&&re(Et,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{w.wo()},0),w}}function wu(){return typeof document<"u"?document:null}/**
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
 */function ml(t){return new uV(t,!0)}/**
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
 */class vE{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&re("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class wE{constructor(e,n,r,s,i,o,a,l){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new vE(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===j.RESOURCE_EXHAUSTED?(ar(n.toString()),ar("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new Z(j.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return re("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(re("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class tx extends wE{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=dV(this.serializer,e),r=function(i){if(!("targetChange"in i))return ge.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ge.min():o.readTime?Nn(o.readTime):ge.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Dh(this.serializer),n.addTarget=function(i,o){let a;const l=o.target;if(a=Sh(l)?{documents:mV(i,l)}:{query:_V(i,l)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=uE(i,o.resumeToken);const u=kh(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(ge.min())>0){a.readTime=Cc(i,o.snapshotVersion.toTimestamp());const u=kh(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=vV(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Dh(this.serializer),n.removeTarget=e,this.a_(n)}}class nx extends wE{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Oe(!!e.streamToken),this.lastStreamToken=e.streamToken,Oe(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Oe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=gV(e.writeResults,e.commitTime),r=Nn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Dh(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>pV(this.serializer,r))};this.a_(n)}}/**
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
 */class rx extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new Z(j.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,Nh(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Z(j.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,Nh(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Z(j.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class sx{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(ar(n),this.D_=!1):re("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class ix{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{bs(this)&&(re("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=me(l);u.L_.add(4),await ta(u),u.q_.set("Unknown"),u.L_.delete(4),await _l(u)}(this))})}),this.q_=new sx(r,s)}}async function _l(t){if(bs(t))for(const e of t.B_)await e(!0)}async function ta(t){for(const e of t.B_)await e(!1)}function EE(t,e){const n=me(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Wf(n)?qf(n):Si(n).r_()&&$f(n,e))}function Hf(t,e){const n=me(t),r=Si(n);n.N_.delete(e),r.r_()&&TE(n,e),n.N_.size===0&&(r.r_()?r.o_():bs(n)&&n.q_.set("Unknown"))}function $f(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ge.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Si(t).A_(e)}function TE(t,e){t.Q_.xe(e),Si(t).R_(e)}function qf(t){t.Q_=new oV({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Si(t).start(),t.q_.v_()}function Wf(t){return bs(t)&&!Si(t).n_()&&t.N_.size>0}function bs(t){return me(t).L_.size===0}function IE(t){t.Q_=void 0}async function ox(t){t.q_.set("Online")}async function ax(t){t.N_.forEach((e,n)=>{$f(t,e)})}async function cx(t,e){IE(t),Wf(t)?(t.q_.M_(e),qf(t)):t.q_.set("Unknown")}async function lx(t,e,n){if(t.q_.set("Online"),e instanceof lE&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.N_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.N_.delete(a),s.Q_.removeTarget(a))}(t,e)}catch(r){re("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await kc(t,r)}else if(e instanceof Xa?t.Q_.Ke(e):e instanceof cE?t.Q_.He(e):t.Q_.We(e),!n.isEqual(ge.min()))try{const r=await yE(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.Q_.rt(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const h=i.N_.get(u);h&&i.N_.set(u,h.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const h=i.N_.get(l);if(!h)return;i.N_.set(l,h.withResumeToken(_t.EMPTY_BYTE_STRING,h.snapshotVersion)),TE(i,l);const d=new kr(h.target,l,u,h.sequenceNumber);$f(i,d)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){re("RemoteStore","Failed to raise snapshot:",r),await kc(t,r)}}async function kc(t,e,n){if(!Xo(e))throw e;t.L_.add(1),await ta(t),t.q_.set("Offline"),n||(n=()=>yE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{re("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await _l(t)})}function AE(t,e){return e().catch(n=>kc(t,n,e))}async function yl(t){const e=me(t),n=Mr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;ux(e);)try{const s=await GV(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,hx(e,s)}catch(s){await kc(e,s)}bE(e)&&RE(e)}function ux(t){return bs(t)&&t.O_.length<10}function hx(t,e){t.O_.push(e);const n=Mr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function bE(t){return bs(t)&&!Mr(t).n_()&&t.O_.length>0}function RE(t){Mr(t).start()}async function fx(t){Mr(t).p_()}async function dx(t){const e=Mr(t);for(const n of t.O_)e.m_(n.mutations)}async function px(t,e,n){const r=t.O_.shift(),s=Lf.from(r,e,n);await AE(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await yl(t)}async function gx(t,e){e&&Mr(t).V_&&await async function(r,s){if(function(o){return rV(o)&&o!==j.ABORTED}(s.code)){const i=r.O_.shift();Mr(r).s_(),await AE(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await yl(r)}}(t,e),bE(t)&&RE(t)}async function Um(t,e){const n=me(t);n.asyncQueue.verifyOperationInProgress(),re("RemoteStore","RemoteStore received new credentials");const r=bs(n);n.L_.add(3),await ta(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await _l(n)}async function mx(t,e){const n=me(t);e?(n.L_.delete(2),await _l(n)):e||(n.L_.add(2),await ta(n),n.q_.set("Unknown"))}function Si(t){return t.K_||(t.K_=function(n,r,s){const i=me(n);return i.w_(),new tx(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:ox.bind(null,t),Ro:ax.bind(null,t),mo:cx.bind(null,t),d_:lx.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Wf(t)?qf(t):t.q_.set("Unknown")):(await t.K_.stop(),IE(t))})),t.K_}function Mr(t){return t.U_||(t.U_=function(n,r,s){const i=me(n);return i.w_(),new nx(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:fx.bind(null,t),mo:gx.bind(null,t),f_:dx.bind(null,t),g_:px.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await yl(t)):(await t.U_.stop(),t.O_.length>0&&(re("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class Kf{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new tr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Kf(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Z(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Gf(t,e){if(ar("AsyncQueue",`${e}: ${t}`),Xo(t))return new Z(j.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ei{constructor(e){this.comparator=e?(n,r)=>e(n,r)||ce.comparator(n.key,r.key):(n,r)=>ce.comparator(n.key,r.key),this.keyedMap=to(),this.sortedSet=new qe(this.comparator)}static emptySet(e){return new ei(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ei)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ei;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Fm{constructor(){this.W_=new qe(ce.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):pe():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class mi{constructor(e,n,r,s,i,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new mi(e,n,ei.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ul(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class _x{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class yx{constructor(){this.queries=Bm(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=me(n),i=s.queries;s.queries=Bm(),i.forEach((o,a)=>{for(const l of a.j_)l.onError(r)})})(this,new Z(j.ABORTED,"Firestore shutting down"))}}function Bm(){return new Ri(t=>Qw(t),ul)}async function zf(t,e){const n=me(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new _x,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=Gf(o,`Initialization of query '${Ms(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&Jf(n)}async function Qf(t,e){const n=me(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function vx(t,e){const n=me(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.j_)a.X_(s)&&(r=!0);o.z_=s}}r&&Jf(n)}function wx(t,e,n){const r=me(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function Jf(t){t.Y_.forEach(e=>{e.next()})}var xh,jm;(jm=xh||(xh={})).ea="default",jm.Cache="cache";class Yf{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new mi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=mi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==xh.Cache}}/**
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
 */class SE{constructor(e){this.key=e}}class PE{constructor(e){this.key=e}}class Ex{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ye(),this.mutatedKeys=ye(),this.Aa=Jw(e),this.Ra=new ei(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Fm,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((h,d)=>{const g=s.get(h),m=hl(this.query,d)?d:null,w=!!g&&this.mutatedKeys.has(g.key),S=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let N=!1;g&&m?g.data.isEqual(m.data)?w!==S&&(r.track({type:3,doc:m}),N=!0):this.ga(g,m)||(r.track({type:2,doc:m}),N=!0,(l&&this.Aa(m,l)>0||u&&this.Aa(m,u)<0)&&(a=!0)):!g&&m?(r.track({type:0,doc:m}),N=!0):g&&!m&&(r.track({type:1,doc:g}),N=!0,(l||u)&&(a=!0)),N&&(m?(o=o.add(m),i=S?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),r.track({type:1,doc:h})}return{Ra:o,fa:r,ns:a,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((h,d)=>function(m,w){const S=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return pe()}};return S(m)-S(w)}(h.type,d.type)||this.Aa(h.doc,d.doc)),this.pa(r),s=s!=null&&s;const a=n&&!s?this.ya():[],l=this.da.size===0&&this.current&&!s?1:0,u=l!==this.Ea;return this.Ea=l,o.length!==0||u?{snapshot:new mi(this.query,e.Ra,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Fm,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ye(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new PE(r))}),this.da.forEach(r=>{e.has(r)||n.push(new SE(r))}),n}ba(e){this.Ta=e.Ts,this.da=ye();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return mi.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class Tx{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Ix{constructor(e){this.key=e,this.va=!1}}class Ax{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Ri(a=>Qw(a),ul),this.Ma=new Map,this.xa=new Set,this.Oa=new qe(ce.comparator),this.Na=new Map,this.La=new Ff,this.Ba={},this.ka=new Map,this.qa=gi.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function bx(t,e,n=!0){const r=VE(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await CE(r,e,n,!0),s}async function Rx(t,e){const n=VE(t);await CE(n,e,!0,!1)}async function CE(t,e,n,r){const s=await zV(t.localStore,kn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let a;return r&&(a=await Sx(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&EE(t.remoteStore,s),a}async function Sx(t,e,n,r,s){t.Ka=(d,g,m)=>async function(S,N,x,O){let T=N.view.ma(x);T.ns&&(T=await xm(S.localStore,N.query,!1).then(({documents:E})=>N.view.ma(E,T)));const C=O&&O.targetChanges.get(N.targetId),D=O&&O.targetMismatches.get(N.targetId)!=null,M=N.view.applyChanges(T,S.isPrimaryClient,C,D);return $m(S,N.targetId,M.wa),M.snapshot}(t,d,g,m);const i=await xm(t.localStore,e,!0),o=new Ex(e,i.Ts),a=o.ma(i.documents),l=ea.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(a,t.isPrimaryClient,l);$m(t,n,u.wa);const h=new Tx(e,n,o);return t.Fa.set(e,h),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),u.snapshot}async function Px(t,e,n){const r=me(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!ul(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Vh(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Hf(r.remoteStore,s.targetId),Lh(r,s.targetId)}).catch(Yo)):(Lh(r,s.targetId),await Vh(r.localStore,s.targetId,!0))}async function Cx(t,e){const n=me(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Hf(n.remoteStore,r.targetId))}async function kx(t,e,n){const r=Mx(t);try{const s=await function(o,a){const l=me(o),u=at.now(),h=a.reduce((m,w)=>m.add(w.key),ye());let d,g;return l.persistence.runTransaction("Locally write mutations","readwrite",m=>{let w=cr(),S=ye();return l.cs.getEntries(m,h).next(N=>{w=N,w.forEach((x,O)=>{O.isValidDocument()||(S=S.add(x))})}).next(()=>l.localDocuments.getOverlayedDocuments(m,w)).next(N=>{d=N;const x=[];for(const O of a){const T=XD(O,d.get(O.key).overlayedDocument);T!=null&&x.push(new jr(O.key,T,jw(T.value.mapValue),Mt.exists(!0)))}return l.mutationQueue.addMutationBatch(m,u,x,a)}).next(N=>{g=N;const x=N.applyToLocalDocumentSet(d,S);return l.documentOverlayCache.saveOverlays(m,N.batchId,x)})}).then(()=>({batchId:g.batchId,changes:Xw(d)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,l){let u=o.Ba[o.currentUser.toKey()];u||(u=new qe(Re)),u=u.insert(a,l),o.Ba[o.currentUser.toKey()]=u}(r,s.batchId,n),await na(r,s.changes),await yl(r.remoteStore)}catch(s){const i=Gf(s,"Failed to persist write");n.reject(i)}}async function kE(t,e){const n=me(t);try{const r=await WV(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(Oe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?Oe(o.va):s.removedDocuments.size>0&&(Oe(o.va),o.va=!1))}),await na(n,r,e)}catch(r){await Yo(r)}}function Hm(t,e,n){const r=me(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const a=o.view.Z_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const l=me(o);l.onlineState=a;let u=!1;l.queries.forEach((h,d)=>{for(const g of d.j_)g.Z_(a)&&(u=!0)}),u&&Jf(l)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Nx(t,e,n){const r=me(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new qe(ce.comparator);o=o.insert(i,Rt.newNoDocument(i,ge.min()));const a=ye().add(i),l=new gl(ge.min(),new Map,new qe(Re),o,a);await kE(r,l),r.Oa=r.Oa.remove(i),r.Na.delete(e),Xf(r)}else await Vh(r.localStore,e,!1).then(()=>Lh(r,e,n)).catch(Yo)}async function Ox(t,e){const n=me(t),r=e.batch.batchId;try{const s=await qV(n.localStore,e);OE(n,r,null),NE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await na(n,s)}catch(s){await Yo(s)}}async function Dx(t,e,n){const r=me(t);try{const s=await function(o,a){const l=me(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return l.mutationQueue.lookupMutationBatch(u,a).next(d=>(Oe(d!==null),h=d.keys(),l.mutationQueue.removeMutationBatch(u,d))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,h,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>l.localDocuments.getDocuments(u,h))})}(r.localStore,e);OE(r,e,n),NE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await na(r,s)}catch(s){await Yo(s)}}function NE(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function OE(t,e,n){const r=me(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function Lh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||DE(t,r)})}function DE(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Hf(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Xf(t))}function $m(t,e,n){for(const r of n)r instanceof SE?(t.La.addReference(r.key,e),Vx(t,r)):r instanceof PE?(re("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||DE(t,r.key)):pe()}function Vx(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(re("SyncEngine","New document in limbo: "+n),t.xa.add(r),Xf(t))}function Xf(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new ce(Be.fromString(e)),r=t.qa.next();t.Na.set(r,new Ix(n)),t.Oa=t.Oa.insert(n,r),EE(t.remoteStore,new kr(kn(ll(n.path)),r,"TargetPurposeLimboResolution",Cf.oe))}}async function na(t,e,n){const r=me(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,l)=>{o.push(r.Ka(l,e,n).then(u=>{var h;if((u||n)&&r.isPrimaryClient){const d=u?!u.fromCache:(h=n==null?void 0:n.targetChanges.get(l.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(l.targetId,d?"current":"not-current")}if(u){s.push(u);const d=jf.Wi(l.targetId,u);i.push(d)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(l,u){const h=me(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>W.forEach(u,g=>W.forEach(g.$i,m=>h.persistence.referenceDelegate.addReference(d,g.targetId,m)).next(()=>W.forEach(g.Ui,m=>h.persistence.referenceDelegate.removeReference(d,g.targetId,m)))))}catch(d){if(!Xo(d))throw d;re("LocalStore","Failed to update sequence numbers: "+d)}for(const d of u){const g=d.targetId;if(!d.fromCache){const m=h.os.get(g),w=m.snapshotVersion,S=m.withLastLimboFreeSnapshotVersion(w);h.os=h.os.insert(g,S)}}}(r.localStore,i))}async function xx(t,e){const n=me(t);if(!n.currentUser.isEqual(e)){re("SyncEngine","User change. New user:",e.toKey());const r=await _E(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(a=>{a.forEach(l=>{l.reject(new Z(j.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await na(n,r.hs)}}function Lx(t,e){const n=me(t),r=n.Na.get(e);if(r&&r.va)return ye().add(r.key);{let s=ye();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const a=n.Fa.get(o);s=s.unionWith(a.view.Va)}return s}}function VE(t){const e=me(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=kE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Lx.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Nx.bind(null,e),e.Ca.d_=vx.bind(null,e.eventManager),e.Ca.$a=wx.bind(null,e.eventManager),e}function Mx(t){const e=me(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Ox.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Dx.bind(null,e),e}class Nc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ml(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return $V(this.persistence,new jV,e.initialUser,this.serializer)}Ga(e){return new UV(Bf.Zr,this.serializer)}Wa(e){return new JV}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Nc.provider={build:()=>new Nc};class Mh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Hm(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=xx.bind(null,this.syncEngine),await mx(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new yx}()}createDatastore(e){const n=ml(e.databaseInfo.databaseId),r=function(i){return new ex(i)}(e.databaseInfo);return function(i,o,a,l){return new rx(i,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new ix(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Hm(this.syncEngine,n,0),function(){return Mm.D()?new Mm:new YV}())}createSyncEngine(e,n){return function(s,i,o,a,l,u,h){const d=new Ax(s,i,o,a,l,u);return h&&(d.Qa=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=me(s);re("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await ta(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Mh.provider={build:()=>new Mh};/**
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
 *//**
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
 */class Zf{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):ar("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class Ux{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Tt.UNAUTHENTICATED,this.clientId=Uw.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{re("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(re("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new tr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Gf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Eu(t,e){t.asyncQueue.verifyOperationInProgress(),re("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await _E(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function qm(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Fx(t);re("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Um(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Um(e.remoteStore,s)),t._onlineComponents=e}async function Fx(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){re("FirestoreClient","Using user provided OfflineComponentProvider");try{await Eu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===j.FAILED_PRECONDITION||s.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;ui("Error using user provided cache. Falling back to memory cache: "+n),await Eu(t,new Nc)}}else re("FirestoreClient","Using default OfflineComponentProvider"),await Eu(t,new Nc);return t._offlineComponents}async function xE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(re("FirestoreClient","Using user provided OnlineComponentProvider"),await qm(t,t._uninitializedComponentsProvider._online)):(re("FirestoreClient","Using default OnlineComponentProvider"),await qm(t,new Mh))),t._onlineComponents}function Bx(t){return xE(t).then(e=>e.syncEngine)}async function Oc(t){const e=await xE(t),n=e.eventManager;return n.onListen=bx.bind(null,e.syncEngine),n.onUnlisten=Px.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Rx.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Cx.bind(null,e.syncEngine),n}function jx(t,e,n={}){const r=new tr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,u){const h=new Zf({next:g=>{h.Za(),o.enqueueAndForget(()=>Qf(i,d));const m=g.docs.has(a);!m&&g.fromCache?u.reject(new Z(j.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&g.fromCache&&l&&l.source==="server"?u.reject(new Z(j.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(g)},error:g=>u.reject(g)}),d=new Yf(ll(a.path),h,{includeMetadataChanges:!0,_a:!0});return zf(i,d)}(await Oc(t),t.asyncQueue,e,n,r)),r.promise}function Hx(t,e,n={}){const r=new tr;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,u){const h=new Zf({next:g=>{h.Za(),o.enqueueAndForget(()=>Qf(i,d)),g.fromCache&&l.source==="server"?u.reject(new Z(j.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(g)},error:g=>u.reject(g)}),d=new Yf(a,h,{includeMetadataChanges:!0,_a:!0});return zf(i,d)}(await Oc(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
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
 */function LE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Wm=new Map;/**
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
 */function ME(t,e,n){if(!n)throw new Z(j.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function $x(t,e,n,r){if(e===!0&&r===!0)throw new Z(j.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Km(t){if(!ce.isDocumentKey(t))throw new Z(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Gm(t){if(ce.isDocumentKey(t))throw new Z(j.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function vl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":pe()}function Ut(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Z(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=vl(t);throw new Z(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class zm{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Z(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Z(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}$x("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=LE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new Z(j.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new Z(j.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new Z(j.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class wl{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new zm({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Z(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Z(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new zm(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new oD;switch(r.type){case"firstParty":return new uD(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Z(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Wm.get(n);r&&(re("ComponentProvider","Removing Datastore"),Wm.delete(n),r.terminate())}(this),Promise.resolve()}}function qx(t,e,n,r={}){var s;const i=(t=Ut(t,wl))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&ui("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Tt.MOCK_USER;else{a=$v(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new Z(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Tt(u)}t._authCredentials=new aD(new Mw(a,l))}}/**
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
 */class Hr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Hr(this.firestore,e,this._query)}}class Pt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Vr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Pt(this.firestore,e,this._key)}}class Vr extends Hr{constructor(e,n,r){super(e,n,ll(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Pt(this.firestore,null,new ce(e))}withConverter(e){return new Vr(this.firestore,e,this._path)}}function OU(t,e,...n){if(t=De(t),ME("collection","path",e),t instanceof wl){const r=Be.fromString(e,...n);return Gm(r),new Vr(t,null,r)}{if(!(t instanceof Pt||t instanceof Vr))throw new Z(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Be.fromString(e,...n));return Gm(r),new Vr(t.firestore,null,r)}}function UE(t,e,...n){if(t=De(t),arguments.length===1&&(e=Uw.newId()),ME("doc","path",e),t instanceof wl){const r=Be.fromString(e,...n);return Km(r),new Pt(t,null,new ce(r))}{if(!(t instanceof Pt||t instanceof Vr))throw new Z(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Be.fromString(e,...n));return Km(r),new Pt(t.firestore,t instanceof Vr?t.converter:null,new ce(r))}}/**
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
 */class Qm{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new vE(this,"async_queue_retry"),this.Vu=()=>{const r=wu();r&&re("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=wu();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=wu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new tr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Xo(e))throw e;re("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw ar("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=Kf.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&pe()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function Jm(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Vn extends wl{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Qm,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Qm(e),this._firestoreClient=void 0,await e}}}function Wx(t,e){const n=typeof t=="object"?t:Go(),r=typeof t=="string"?t:"(default)",s=Es(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Bv("firestore");i&&qx(s,...i)}return s}function ra(t){if(t._terminated)throw new Z(j.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||Kx(t),t._firestoreClient}function Kx(t){var e,n,r;const s=t._freezeSettings(),i=function(a,l,u,h){return new ID(a,l,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,LE(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new Ux(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(a){const l=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(l),_online:l}}(t._componentsProvider))}/**
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
 */class _i{constructor(e){this._byteString=e}static fromBase64String(e){try{return new _i(_t.fromBase64String(e))}catch(n){throw new Z(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new _i(_t.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class sa{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Z(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new pt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class El{constructor(e){this._methodName=e}}/**
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
 */class ed{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Z(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Z(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Re(this._lat,e._lat)||Re(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class td{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const Gx=/^__.*__$/;class zx{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new jr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Zo(e,this.data,n,this.fieldTransforms)}}class FE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new jr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function BE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw pe()}}class Tl{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Tl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Dc(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(BE(this.Cu)&&Gx.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class Qx{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ml(e)}Qu(e,n,r,s=!1){return new Tl({Cu:e,methodName:n,qu:r,path:pt.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ia(t){const e=t._freezeSettings(),n=ml(t._databaseId);return new Qx(t._databaseId,!!e.ignoreUndefinedProperties,n)}function nd(t,e,n,r,s,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);sd("Data must be an object, but it was:",o,r);const a=$E(r,o);let l,u;if(i.merge)l=new Jt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const d of i.mergeFields){const g=Uh(e,d,n);if(!o.contains(g))throw new Z(j.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);WE(h,g)||h.push(g)}l=new Jt(h),u=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,u=o.fieldTransforms;return new zx(new $t(a),l,u)}class Il extends El{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Il}}function Jx(t,e,n){return new Tl({Cu:3,qu:e.settings.qu,methodName:t._methodName,xu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class rd extends El{constructor(e,n){super(e),this.Ku=n}_toFieldTransform(e){const n=Jx(this,e,!0),r=this.Ku.map(i=>Pi(i,n)),s=new pi(r);return new zD(e.path,s)}isEqual(e){return e instanceof rd&&Co(this.Ku,e.Ku)}}function jE(t,e,n,r){const s=t.Qu(1,e,n);sd("Data must be an object, but it was:",s,r);const i=[],o=$t.empty();As(r,(l,u)=>{const h=id(e,l,n);u=De(u);const d=s.Nu(h);if(u instanceof Il)i.push(h);else{const g=Pi(u,d);g!=null&&(i.push(h),o.set(h,g))}});const a=new Jt(i);return new FE(o,a,s.fieldTransforms)}function HE(t,e,n,r,s,i){const o=t.Qu(1,e,n),a=[Uh(e,r,n)],l=[s];if(i.length%2!=0)throw new Z(j.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)a.push(Uh(e,i[g])),l.push(i[g+1]);const u=[],h=$t.empty();for(let g=a.length-1;g>=0;--g)if(!WE(u,a[g])){const m=a[g];let w=l[g];w=De(w);const S=o.Nu(m);if(w instanceof Il)u.push(m);else{const N=Pi(w,S);N!=null&&(u.push(m),h.set(m,N))}}const d=new Jt(u);return new FE(h,d,o.fieldTransforms)}function Yx(t,e,n,r=!1){return Pi(n,t.Qu(r?4:3,e))}function Pi(t,e){if(qE(t=De(t)))return sd("Unsupported field value:",e,t),$E(t,e);if(t instanceof El)return function(r,s){if(!BE(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let l=Pi(a,s.Lu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=De(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return WD(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=at.fromDate(r);return{timestampValue:Cc(s.serializer,i)}}if(r instanceof at){const i=new at(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Cc(s.serializer,i)}}if(r instanceof ed)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof _i)return{bytesValue:uE(s.serializer,r._byteString)};if(r instanceof Pt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Uf(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof td)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw a.Bu("VectorValues must only contain numeric values.");return xf(a.serializer,l)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${vl(r)}`)}(t,e)}function $E(t,e){const n={};return Fw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):As(t,(r,s)=>{const i=Pi(s,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function qE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof at||t instanceof ed||t instanceof _i||t instanceof Pt||t instanceof El||t instanceof td)}function sd(t,e,n){if(!qE(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=vl(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Uh(t,e,n){if((e=De(e))instanceof sa)return e._internalPath;if(typeof e=="string")return id(t,e);throw Dc("Field path arguments must be of type string or ",t,!1,void 0,n)}const Xx=new RegExp("[~\\*/\\[\\]]");function id(t,e,n){if(e.search(Xx)>=0)throw Dc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new sa(...e.split("."))._internalPath}catch{throw Dc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Dc(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new Z(j.INVALID_ARGUMENT,a+t+l)}function WE(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class KE{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Pt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Zx(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Al("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Zx extends KE{data(){return super.data()}}function Al(t,e){return typeof e=="string"?id(t,e):e instanceof sa?e._internalPath:e._delegate._internalPath}/**
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
 */function GE(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Z(j.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class od{}class zE extends od{}function DU(t,e,...n){let r=[];e instanceof od&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof ad).length,a=i.filter(l=>l instanceof bl).length;if(o>1||o>0&&a>0)throw new Z(j.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class bl extends zE{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new bl(e,n,r)}_apply(e){const n=this._parse(e);return QE(e._query,n),new Hr(e.firestore,e.converter,Ph(e._query,n))}_parse(e){const n=ia(e.firestore);return function(i,o,a,l,u,h,d){let g;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new Z(j.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){Xm(d,h);const m=[];for(const w of d)m.push(Ym(l,i,w));g={arrayValue:{values:m}}}else g=Ym(l,i,d)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||Xm(d,h),g=Yx(a,o,d,h==="in"||h==="not-in");return nt.create(u,h,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function VU(t,e,n){const r=e,s=Al("where",t);return bl._create(s,r,n)}class ad extends od{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new ad(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:vn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const l of a)QE(o,l),o=Ph(o,l)}(e._query,n),new Hr(e.firestore,e.converter,Ph(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class cd extends zE{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new cd(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new Z(j.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new Z(j.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Mo(i,o)}(e._query,this._field,this._direction);return new Hr(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new bi(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function xU(t,e="asc"){const n=e,r=Al("orderBy",t);return cd._create(r,n)}function Ym(t,e,n){if(typeof(n=De(n))=="string"){if(n==="")throw new Z(j.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!zw(e)&&n.indexOf("/")!==-1)throw new Z(j.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Be.fromString(n));if(!ce.isDocumentKey(r))throw new Z(j.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ym(t,new ce(r))}if(n instanceof Pt)return ym(t,n._key);throw new Z(j.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${vl(n)}.`)}function Xm(t,e){if(!Array.isArray(t)||t.length===0)throw new Z(j.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function QE(t,e){const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new Z(j.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Z(j.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class eL{convertValue(e,n="none"){switch(ps(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Xe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ds(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw pe()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return As(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Xe(o.doubleValue));return new td(i)}convertGeoPoint(e){return new ed(Xe(e.latitude),Xe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Nf(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Vo(e));default:return null}}convertTimestamp(e){const n=Lr(e);return new at(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Be.fromString(e);Oe(mE(r));const s=new xo(r.get(1),r.get(3)),i=new ce(r.popFirst(5));return s.isEqual(n)||ar(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function ld(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class ro{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class JE extends KE{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Za(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Al("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Za extends JE{data(e={}){return super.data(e)}}class YE{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new ro(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Za(this._firestore,this._userDataWriter,r.key,r,new ro(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Z(j.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const l=new Za(s._firestore,s._userDataWriter,a.doc.key,a.doc,new ro(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const l=new Za(s._firestore,s._userDataWriter,a.doc.key,a.doc,new ro(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:tL(a.type),doc:l,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function tL(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return pe()}}/**
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
 */function nL(t){t=Ut(t,Pt);const e=Ut(t.firestore,Vn);return jx(ra(e),t._key).then(n=>XE(e,t,n))}class ud extends eL{constructor(e){super(),this.firestore=e}convertBytes(e){return new _i(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Pt(this.firestore,null,n)}}function LU(t){t=Ut(t,Hr);const e=Ut(t.firestore,Vn),n=ra(e),r=new ud(e);return GE(t._query),Hx(n,t._query).then(s=>new YE(e,r,t,s))}function MU(t,e,n){t=Ut(t,Pt);const r=Ut(t.firestore,Vn),s=ld(t.converter,e,n);return oa(r,[nd(ia(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Mt.none())])}function UU(t,e,n,...r){t=Ut(t,Pt);const s=Ut(t.firestore,Vn),i=ia(s);let o;return o=typeof(e=De(e))=="string"||e instanceof sa?HE(i,"updateDoc",t._key,e,n,r):jE(i,"updateDoc",t._key,e),oa(s,[o.toMutation(t._key,Mt.exists(!0))])}function FU(t){return oa(Ut(t.firestore,Vn),[new pl(t._key,Mt.none())])}function BU(t,e){const n=Ut(t.firestore,Vn),r=UE(t),s=ld(t.converter,e);return oa(n,[nd(ia(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Mt.exists(!1))]).then(()=>r)}function jU(t,...e){var n,r,s;t=De(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Jm(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Jm(e[o])){const d=e[o];e[o]=(n=d.next)===null||n===void 0?void 0:n.bind(d),e[o+1]=(r=d.error)===null||r===void 0?void 0:r.bind(d),e[o+2]=(s=d.complete)===null||s===void 0?void 0:s.bind(d)}let l,u,h;if(t instanceof Pt)u=Ut(t.firestore,Vn),h=ll(t._key.path),l={next:d=>{e[o]&&e[o](XE(u,t,d))},error:e[o+1],complete:e[o+2]};else{const d=Ut(t,Hr);u=Ut(d.firestore,Vn),h=d._query;const g=new ud(u);l={next:m=>{e[o]&&e[o](new YE(u,g,d,m))},error:e[o+1],complete:e[o+2]},GE(t._query)}return function(g,m,w,S){const N=new Zf(S),x=new Yf(m,N,w);return g.asyncQueue.enqueueAndForget(async()=>zf(await Oc(g),x)),()=>{N.Za(),g.asyncQueue.enqueueAndForget(async()=>Qf(await Oc(g),x))}}(ra(u),h,a,l)}function oa(t,e){return function(r,s){const i=new tr;return r.asyncQueue.enqueueAndForget(async()=>kx(await Bx(r),s,i)),i.promise}(ra(t),e)}function XE(t,e,n){const r=n.docs.get(e._key),s=new ud(t);return new JE(t,s,e._key,r,new ro(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */class rL{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=ia(e)}set(e,n,r){this._verifyNotCommitted();const s=Tu(e,this._firestore),i=ld(s.converter,n,r),o=nd(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,Mt.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=Tu(e,this._firestore);let o;return o=typeof(n=De(n))=="string"||n instanceof sa?HE(this._dataReader,"WriteBatch.update",i._key,n,r,s):jE(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,Mt.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Tu(e,this._firestore);return this._mutations=this._mutations.concat(new pl(n._key,Mt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new Z(j.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Tu(t,e){if((t=De(t)).firestore!==e)throw new Z(j.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}function HU(...t){return new rd("arrayUnion",t)}/**
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
 */function $U(t){return ra(t=Ut(t,Vn)),new rL(t,e=>oa(t,e))}(function(e,n=!0){(function(s){Ai=s})(Ts),_n(new an("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Vn(new cD(r.getProvider("auth-internal")),new fD(r.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new Z(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xo(u.options.projectId,h)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Kt(dm,"4.7.3",e),Kt(dm,"4.7.3","esm2017")})();/**
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
 */const ZE="firebasestorage.googleapis.com",eT="storageBucket",sL=2*60*1e3,iL=10*60*1e3;/**
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
 */class Je extends wn{constructor(e,n,r=0){super(Iu(e),`Firebase Storage: ${n} (${Iu(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Je.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Iu(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Qe;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Qe||(Qe={}));function Iu(t){return"storage/"+t}function hd(){const t="An unknown error occurred, please check the error payload for server response.";return new Je(Qe.UNKNOWN,t)}function oL(t){return new Je(Qe.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function aL(t){return new Je(Qe.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function cL(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Je(Qe.UNAUTHENTICATED,t)}function lL(){return new Je(Qe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function uL(t){return new Je(Qe.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function hL(){return new Je(Qe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function fL(){return new Je(Qe.CANCELED,"User canceled the upload/download.")}function dL(t){return new Je(Qe.INVALID_URL,"Invalid URL '"+t+"'.")}function pL(t){return new Je(Qe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function gL(){return new Je(Qe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+eT+"' property when initializing the app?")}function mL(){return new Je(Qe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function _L(){return new Je(Qe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function yL(t){return new Je(Qe.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Fh(t){return new Je(Qe.INVALID_ARGUMENT,t)}function tT(){return new Je(Qe.APP_DELETED,"The Firebase app was deleted.")}function vL(t){return new Je(Qe.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function yo(t,e){return new Je(Qe.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Gi(t){throw new Je(Qe.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Yt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Yt.makeFromUrl(e,n)}catch{return new Yt(e,"")}if(r.path==="")return r;throw pL(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(C){C.path.charAt(C.path.length-1)==="/"&&(C.path_=C.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function u(C){C.path_=decodeURIComponent(C.path)}const h="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",m=new RegExp(`^https?://${d}/${h}/b/${s}/o${g}`,"i"),w={bucket:1,path:3},S=n===ZE?"(?:storage.googleapis.com|storage.cloud.google.com)":n,N="([^?#]*)",x=new RegExp(`^https?://${S}/${s}/${N}`,"i"),T=[{regex:a,indices:l,postModify:i},{regex:m,indices:w,postModify:u},{regex:x,indices:{bucket:1,path:2},postModify:u}];for(let C=0;C<T.length;C++){const D=T[C],M=D.regex.exec(e);if(M){const E=M[D.indices.bucket];let v=M[D.indices.path];v||(v=""),r=new Yt(E,v),D.postModify(r);break}}if(r==null)throw dL(e);return r}}class wL{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function EL(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function l(){return a===2}let u=!1;function h(...N){u||(u=!0,e.apply(null,N))}function d(N){s=setTimeout(()=>{s=null,t(m,l())},N)}function g(){i&&clearTimeout(i)}function m(N,...x){if(u){g();return}if(N){g(),h.call(null,N,...x);return}if(l()||o){g(),h.call(null,N,...x);return}r<64&&(r*=2);let T;a===1?(a=2,T=0):T=(r+Math.random())*1e3,d(T)}let w=!1;function S(N){w||(w=!0,g(),!u&&(s!==null?(N||(a=2),clearTimeout(s),d(0)):N||(a=1)))}return d(0),i=setTimeout(()=>{o=!0,S(!0)},n),S}function TL(t){t(!1)}/**
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
 */function IL(t){return t!==void 0}function AL(t){return typeof t=="object"&&!Array.isArray(t)}function fd(t){return typeof t=="string"||t instanceof String}function Zm(t){return dd()&&t instanceof Blob}function dd(){return typeof Blob<"u"}function e_(t,e,n,r){if(r<e)throw Fh(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Fh(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function pd(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function nT(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var ls;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ls||(ls={}));/**
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
 */function bL(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class RL{constructor(e,n,r,s,i,o,a,l,u,h,d,g=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=d,this.retry=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,w)=>{this.resolve_=m,this.reject_=w,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Ua(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===ls.NO_ERROR,l=i.getStatus();if(!a||bL(l,this.additionalRetryCodes_)&&this.retry){const h=i.getErrorCode()===ls.ABORT;r(!1,new Ua(!1,null,h));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Ua(u,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());IL(l)?i(l):i()}catch(l){o(l)}else if(a!==null){const l=hd();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?tT():fL();o(l)}else{const l=hL();o(l)}};this.canceled_?n(!1,new Ua(!1,null,!0)):this.backoffId_=EL(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&TL(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ua{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function SL(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function PL(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function CL(t,e){e&&(t["X-Firebase-GMPID"]=e)}function kL(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function NL(t,e,n,r,s,i,o=!0){const a=nT(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return CL(u,e),SL(u,n),PL(u,i),kL(u,r),new RL(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
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
 */function OL(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function DL(...t){const e=OL();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(dd())return new Blob(t);throw new Je(Qe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function VL(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function xL(t){if(typeof atob>"u")throw yL("base-64");return atob(t)}/**
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
 */const Rn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Au{constructor(e,n){this.data=e,this.contentType=n||null}}function LL(t,e){switch(t){case Rn.RAW:return new Au(rT(e));case Rn.BASE64:case Rn.BASE64URL:return new Au(sT(t,e));case Rn.DATA_URL:return new Au(UL(e),FL(e))}throw hd()}function rT(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function ML(t){let e;try{e=decodeURIComponent(t)}catch{throw yo(Rn.DATA_URL,"Malformed data URL.")}return rT(e)}function sT(t,e){switch(t){case Rn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw yo(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Rn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw yo(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=xL(e)}catch(s){throw s.message.includes("polyfill")?s:yo(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class iT{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw yo(Rn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=BL(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function UL(t){const e=new iT(t);return e.base64?sT(Rn.BASE64,e.rest):ML(e.rest)}function FL(t){return new iT(t).contentType}function BL(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Pr{constructor(e,n){let r=0,s="";Zm(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(Zm(this.data_)){const r=this.data_,s=VL(r,e,n);return s===null?null:new Pr(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Pr(r,!0)}}static getBlob(...e){if(dd()){const n=e.map(r=>r instanceof Pr?r.data_:r);return new Pr(DL.apply(null,n))}else{const n=e.map(o=>fd(o)?LL(Rn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new Pr(s,!0)}}uploadData(){return this.data_}}/**
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
 */function oT(t){let e;try{e=JSON.parse(t)}catch{return null}return AL(e)?e:null}/**
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
 */function jL(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function HL(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function aT(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function $L(t,e){return e}class Ot{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||$L}}let Fa=null;function qL(t){return!fd(t)||t.length<2?t:aT(t)}function cT(){if(Fa)return Fa;const t=[];t.push(new Ot("bucket")),t.push(new Ot("generation")),t.push(new Ot("metageneration")),t.push(new Ot("name","fullPath",!0));function e(i,o){return qL(o)}const n=new Ot("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new Ot("size");return s.xform=r,t.push(s),t.push(new Ot("timeCreated")),t.push(new Ot("updated")),t.push(new Ot("md5Hash",null,!0)),t.push(new Ot("cacheControl",null,!0)),t.push(new Ot("contentDisposition",null,!0)),t.push(new Ot("contentEncoding",null,!0)),t.push(new Ot("contentLanguage",null,!0)),t.push(new Ot("contentType",null,!0)),t.push(new Ot("metadata","customMetadata",!0)),Fa=t,Fa}function WL(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Yt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function KL(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return WL(r,t),r}function lT(t,e,n){const r=oT(e);return r===null?null:KL(t,r,n)}function GL(t,e,n,r){const s=oT(e);if(s===null||!fd(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(u=>{const h=t.bucket,d=t.fullPath,g="/b/"+o(h)+"/o/"+o(d),m=pd(g,n,r),w=nT({alt:"media",token:u});return m+w})[0]}function zL(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class uT{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function hT(t){if(!t)throw hd()}function QL(t,e){function n(r,s){const i=lT(t,s,e);return hT(i!==null),i}return n}function JL(t,e){function n(r,s){const i=lT(t,s,e);return hT(i!==null),GL(i,s,t.host,t._protocol)}return n}function fT(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=lL():s=cL():n.getStatus()===402?s=aL(t.bucket):n.getStatus()===403?s=uL(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function YL(t){const e=fT(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=oL(t.path)),i.serverResponse=s.serverResponse,i}return n}function XL(t,e,n){const r=e.fullServerUrl(),s=pd(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new uT(s,i,JL(t,n),o);return a.errorHandler=YL(e),a}function ZL(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function eM(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=ZL(null,e)),r}function tM(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let T="";for(let C=0;C<2;C++)T=T+Math.random().toString().slice(2);return T}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=eM(e,r,s),h=zL(u,n),d="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,g=`\r
--`+l+"--",m=Pr.getBlob(d,r,g);if(m===null)throw mL();const w={name:u.fullPath},S=pd(i,t.host,t._protocol),N="POST",x=t.maxUploadRetryTime,O=new uT(S,N,QL(t,n),x);return O.urlParams=w,O.headers=o,O.body=m.uploadData(),O.errorHandler=fT(e),O}class nM{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ls.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ls.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ls.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw Gi("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Gi("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Gi("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Gi("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Gi("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class rM extends nM{initXhr(){this.xhr_.responseType="text"}}function dT(){return new rM}/**
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
 */class gs{constructor(e,n){this._service=e,n instanceof Yt?this._location=n:this._location=Yt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new gs(e,n)}get root(){const e=new Yt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return aT(this._location.path)}get storage(){return this._service}get parent(){const e=jL(this._location.path);if(e===null)return null;const n=new Yt(this._location.bucket,e);return new gs(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw vL(e)}}function sM(t,e,n){t._throwIfRoot("uploadBytes");const r=tM(t.storage,t._location,cT(),new Pr(e,!0),n);return t.storage.makeRequestWithTokens(r,dT).then(s=>({metadata:s,ref:t}))}function iM(t){t._throwIfRoot("getDownloadURL");const e=XL(t.storage,t._location,cT());return t.storage.makeRequestWithTokens(e,dT).then(n=>{if(n===null)throw _L();return n})}function oM(t,e){const n=HL(t._location.path,e),r=new Yt(t._location.bucket,n);return new gs(t.storage,r)}/**
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
 */function aM(t){return/^[A-Za-z]+:\/\//.test(t)}function cM(t,e){return new gs(t,e)}function pT(t,e){if(t instanceof gd){const n=t;if(n._bucket==null)throw gL();const r=new gs(n,n._bucket);return e!=null?pT(r,e):r}else return e!==void 0?oM(t,e):t}function lM(t,e){if(e&&aM(e)){if(t instanceof gd)return cM(t,e);throw Fh("To use ref(service, url), the first argument must be a Storage instance.")}else return pT(t,e)}function t_(t,e){const n=e==null?void 0:e[eT];return n==null?null:Yt.makeFromBucketSpec(n,t)}function uM(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:$v(s,t.app.options.projectId))}class gd{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=ZE,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=sL,this._maxUploadRetryTime=iL,this._requests=new Set,s!=null?this._bucket=Yt.makeFromBucketSpec(s,this._host):this._bucket=t_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Yt.makeFromBucketSpec(this._url,e):this._bucket=t_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){e_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){e_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new gs(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new wL(tT());{const o=NL(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const n_="@firebase/storage",r_="0.13.2";/**
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
 */const gT="storage";function qU(t,e,n){return t=De(t),sM(t,e,n)}function WU(t){return t=De(t),iM(t)}function KU(t,e){return t=De(t),lM(t,e)}function hM(t=Go(),e){t=De(t);const r=Es(t,gT).getImmediate({identifier:e}),s=Bv("storage");return s&&fM(r,...s),r}function fM(t,e,n,r={}){uM(t,e,n,r)}function dM(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new gd(n,r,s,e,Ts)}function pM(){_n(new an(gT,dM,"PUBLIC").setMultipleInstances(!0)),Kt(n_,r_,""),Kt(n_,r_,"esm2017")}pM();const mT="@firebase/installations",md="0.6.9";/**
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
 */const _T=1e4,yT=`w:${md}`,vT="FIS_v2",gM="https://firebaseinstallations.googleapis.com/v1",mM=60*60*1e3,_M="installations",yM="Installations";/**
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
 */const vM={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ms=new ws(_M,yM,vM);function wT(t){return t instanceof wn&&t.code.includes("request-failed")}/**
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
 */function ET({projectId:t}){return`${gM}/projects/${t}/installations`}function TT(t){return{token:t.token,requestStatus:2,expiresIn:EM(t.expiresIn),creationTime:Date.now()}}async function IT(t,e){const r=(await e.json()).error;return ms.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function AT({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function wM(t,{refreshToken:e}){const n=AT(t);return n.append("Authorization",TM(e)),n}async function bT(t){const e=await t();return e.status>=500&&e.status<600?t():e}function EM(t){return Number(t.replace("s","000"))}function TM(t){return`${vT} ${t}`}/**
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
 */async function IM({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=ET(t),s=AT(t),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={fid:n,authVersion:vT,appId:t.appId,sdkVersion:yT},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await bT(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:TT(u.authToken)}}else throw await IT("Create Installation",l)}/**
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
 */function RT(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function AM(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const bM=/^[cdef][\w-]{21}$/,Bh="";function RM(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=SM(t);return bM.test(n)?n:Bh}catch{return Bh}}function SM(t){return AM(t).substr(0,22)}/**
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
 */function Rl(t){return`${t.appName}!${t.appId}`}/**
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
 */const ST=new Map;function PT(t,e){const n=Rl(t);CT(n,e),PM(n,e)}function CT(t,e){const n=ST.get(t);if(n)for(const r of n)r(e)}function PM(t,e){const n=CM();n&&n.postMessage({key:t,fid:e}),kM()}let ns=null;function CM(){return!ns&&"BroadcastChannel"in self&&(ns=new BroadcastChannel("[Firebase] FID Change"),ns.onmessage=t=>{CT(t.data.key,t.data.fid)}),ns}function kM(){ST.size===0&&ns&&(ns.close(),ns=null)}/**
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
 */const NM="firebase-installations-database",OM=1,_s="firebase-installations-store";let bu=null;function _d(){return bu||(bu=rl(NM,OM,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(_s)}}})),bu}async function Vc(t,e){const n=Rl(t),s=(await _d()).transaction(_s,"readwrite"),i=s.objectStore(_s),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&PT(t,e.fid),e}async function kT(t){const e=Rl(t),r=(await _d()).transaction(_s,"readwrite");await r.objectStore(_s).delete(e),await r.done}async function Sl(t,e){const n=Rl(t),s=(await _d()).transaction(_s,"readwrite"),i=s.objectStore(_s),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&PT(t,a.fid),a}/**
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
 */async function yd(t){let e;const n=await Sl(t.appConfig,r=>{const s=DM(r),i=VM(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===Bh?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function DM(t){const e=t||{fid:RM(),registrationStatus:0};return NT(e)}function VM(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(ms.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=xM(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:LM(t)}:{installationEntry:e}}async function xM(t,e){try{const n=await IM(t,e);return Vc(t.appConfig,n)}catch(n){throw wT(n)&&n.customData.serverCode===409?await kT(t.appConfig):await Vc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function LM(t){let e=await s_(t.appConfig);for(;e.registrationStatus===1;)await RT(100),e=await s_(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await yd(t);return r||n}return e}function s_(t){return Sl(t,e=>{if(!e)throw ms.create("installation-not-found");return NT(e)})}function NT(t){return MM(t)?{fid:t.fid,registrationStatus:0}:t}function MM(t){return t.registrationStatus===1&&t.registrationTime+_T<Date.now()}/**
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
 */async function UM({appConfig:t,heartbeatServiceProvider:e},n){const r=FM(t,n),s=wM(t,n),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const o={installation:{sdkVersion:yT,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await bT(()=>fetch(r,a));if(l.ok){const u=await l.json();return TT(u)}else throw await IT("Generate Auth Token",l)}function FM(t,{fid:e}){return`${ET(t)}/${e}/authTokens:generate`}/**
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
 */async function vd(t,e=!1){let n;const r=await Sl(t.appConfig,i=>{if(!OT(i))throw ms.create("not-registered");const o=i.authToken;if(!e&&HM(o))return i;if(o.requestStatus===1)return n=BM(t,e),i;{if(!navigator.onLine)throw ms.create("app-offline");const a=qM(i);return n=jM(t,a),a}});return n?await n:r.authToken}async function BM(t,e){let n=await i_(t.appConfig);for(;n.authToken.requestStatus===1;)await RT(100),n=await i_(t.appConfig);const r=n.authToken;return r.requestStatus===0?vd(t,e):r}function i_(t){return Sl(t,e=>{if(!OT(e))throw ms.create("not-registered");const n=e.authToken;return WM(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function jM(t,e){try{const n=await UM(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Vc(t.appConfig,r),n}catch(n){if(wT(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await kT(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Vc(t.appConfig,r)}throw n}}function OT(t){return t!==void 0&&t.registrationStatus===2}function HM(t){return t.requestStatus===2&&!$M(t)}function $M(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+mM}function qM(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function WM(t){return t.requestStatus===1&&t.requestTime+_T<Date.now()}/**
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
 */async function KM(t){const e=t,{installationEntry:n,registrationPromise:r}=await yd(e);return r?r.catch(console.error):vd(e).catch(console.error),n.fid}/**
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
 */async function GM(t,e=!1){const n=t;return await zM(n),(await vd(n,e)).token}async function zM(t){const{registrationPromise:e}=await yd(t);e&&await e}/**
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
 */function QM(t){if(!t||!t.options)throw Ru("App Configuration");if(!t.name)throw Ru("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Ru(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Ru(t){return ms.create("missing-app-config-values",{valueName:t})}/**
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
 */const DT="installations",JM="installations-internal",YM=t=>{const e=t.getProvider("app").getImmediate(),n=QM(e),r=Es(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},XM=t=>{const e=t.getProvider("app").getImmediate(),n=Es(e,DT).getImmediate();return{getId:()=>KM(n),getToken:s=>GM(n,s)}};function ZM(){_n(new an(DT,YM,"PUBLIC")),_n(new an(JM,XM,"PRIVATE"))}ZM();Kt(mT,md);Kt(mT,md,"esm2017");/**
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
 */const e1="/firebase-messaging-sw.js",t1="/firebase-cloud-messaging-push-scope",VT="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",n1="https://fcmregistrations.googleapis.com/v1",xT="google.c.a.c_id",r1="google.c.a.c_l",s1="google.c.a.ts",i1="google.c.a.e";var o_;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(o_||(o_={}));/**
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
 */var Fo;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(Fo||(Fo={}));/**
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
 */function Hn(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function o1(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),s=new Uint8Array(r.length);for(let i=0;i<r.length;++i)s[i]=r.charCodeAt(i);return s}/**
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
 */const Su="fcm_token_details_db",a1=5,a_="fcm_token_object_Store";async function c1(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(i=>i.name).includes(Su))return null;let e=null;return(await rl(Su,a1,{upgrade:async(r,s,i,o)=>{var a;if(s<2||!r.objectStoreNames.contains(a_))return;const l=o.objectStore(a_),u=await l.index("fcmSenderId").get(t);if(await l.clear(),!!u){if(s===2){const h=u;if(!h.auth||!h.p256dh||!h.endpoint)return;e={token:h.fcmToken,createTime:(a=h.createTime)!==null&&a!==void 0?a:Date.now(),subscriptionOptions:{auth:h.auth,p256dh:h.p256dh,endpoint:h.endpoint,swScope:h.swScope,vapidKey:typeof h.vapidKey=="string"?h.vapidKey:Hn(h.vapidKey)}}}else if(s===3){const h=u;e={token:h.fcmToken,createTime:h.createTime,subscriptionOptions:{auth:Hn(h.auth),p256dh:Hn(h.p256dh),endpoint:h.endpoint,swScope:h.swScope,vapidKey:Hn(h.vapidKey)}}}else if(s===4){const h=u;e={token:h.fcmToken,createTime:h.createTime,subscriptionOptions:{auth:Hn(h.auth),p256dh:Hn(h.p256dh),endpoint:h.endpoint,swScope:h.swScope,vapidKey:Hn(h.vapidKey)}}}}}})).close(),await du(Su),await du("fcm_vapid_details_db"),await du("undefined"),l1(e)?e:null}function l1(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const u1="firebase-messaging-database",h1=1,Bo="firebase-messaging-store";let Pu=null;function LT(){return Pu||(Pu=rl(u1,h1,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Bo)}}})),Pu}async function f1(t){const e=MT(t),r=await(await LT()).transaction(Bo).objectStore(Bo).get(e);if(r)return r;{const s=await c1(t.appConfig.senderId);if(s)return await wd(t,s),s}}async function wd(t,e){const n=MT(t),s=(await LT()).transaction(Bo,"readwrite");return await s.objectStore(Bo).put(e,n),await s.done,e}function MT({appConfig:t}){return t.appId}/**
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
 */const d1={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},Ft=new ws("messaging","Messaging",d1);/**
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
 */async function p1(t,e){const n=await Td(t),r=UT(e),s={method:"POST",headers:n,body:JSON.stringify(r)};let i;try{i=await(await fetch(Ed(t.appConfig),s)).json()}catch(o){throw Ft.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(i.error){const o=i.error.message;throw Ft.create("token-subscribe-failed",{errorInfo:o})}if(!i.token)throw Ft.create("token-subscribe-no-token");return i.token}async function g1(t,e){const n=await Td(t),r=UT(e.subscriptionOptions),s={method:"PATCH",headers:n,body:JSON.stringify(r)};let i;try{i=await(await fetch(`${Ed(t.appConfig)}/${e.token}`,s)).json()}catch(o){throw Ft.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(i.error){const o=i.error.message;throw Ft.create("token-update-failed",{errorInfo:o})}if(!i.token)throw Ft.create("token-update-no-token");return i.token}async function m1(t,e){const r={method:"DELETE",headers:await Td(t)};try{const i=await(await fetch(`${Ed(t.appConfig)}/${e}`,r)).json();if(i.error){const o=i.error.message;throw Ft.create("token-unsubscribe-failed",{errorInfo:o})}}catch(s){throw Ft.create("token-unsubscribe-failed",{errorInfo:s==null?void 0:s.toString()})}}function Ed({projectId:t}){return`${n1}/projects/${t}/registrations`}async function Td({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function UT({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const s={web:{endpoint:n,auth:e,p256dh:t}};return r!==VT&&(s.web.applicationPubKey=r),s}/**
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
 */const _1=7*24*60*60*1e3;async function y1(t){const e=await w1(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:Hn(e.getKey("auth")),p256dh:Hn(e.getKey("p256dh"))},r=await f1(t.firebaseDependencies);if(r){if(E1(r.subscriptionOptions,n))return Date.now()>=r.createTime+_1?v1(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await m1(t.firebaseDependencies,r.token)}catch(s){console.warn(s)}return c_(t.firebaseDependencies,n)}else return c_(t.firebaseDependencies,n)}async function v1(t,e){try{const n=await g1(t.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await wd(t.firebaseDependencies,r),n}catch(n){throw n}}async function c_(t,e){const r={token:await p1(t,e),createTime:Date.now(),subscriptionOptions:e};return await wd(t,r),r.token}async function w1(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:o1(e)})}function E1(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,s=e.auth===t.auth,i=e.p256dh===t.p256dh;return n&&r&&s&&i}/**
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
 */function l_(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return T1(e,t),I1(e,t),A1(e,t),e}function T1(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const s=e.notification.image;s&&(t.notification.image=s);const i=e.notification.icon;i&&(t.notification.icon=i)}function I1(t,e){e.data&&(t.data=e.data)}function A1(t,e){var n,r,s,i,o;if(!e.fcmOptions&&!(!((n=e.notification)===null||n===void 0)&&n.click_action))return;t.fcmOptions={};const a=(s=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&s!==void 0?s:(i=e.notification)===null||i===void 0?void 0:i.click_action;a&&(t.fcmOptions.link=a);const l=(o=e.fcmOptions)===null||o===void 0?void 0:o.analytics_label;l&&(t.fcmOptions.analyticsLabel=l)}/**
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
 */function b1(t){return typeof t=="object"&&!!t&&xT in t}/**
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
 */function R1(t){if(!t||!t.options)throw Cu("App Configuration Object");if(!t.name)throw Cu("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw Cu(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Cu(t){return Ft.create("missing-app-config-values",{valueName:t})}/**
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
 */class S1{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const s=R1(e);this.firebaseDependencies={app:e,appConfig:s,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
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
 */async function P1(t){try{t.swRegistration=await navigator.serviceWorker.register(e1,{scope:t1}),t.swRegistration.update().catch(()=>{})}catch(e){throw Ft.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
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
 */async function C1(t,e){if(!e&&!t.swRegistration&&await P1(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw Ft.create("invalid-sw-registration");t.swRegistration=e}}/**
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
 */async function k1(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=VT)}/**
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
 */async function FT(t,e){if(!navigator)throw Ft.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw Ft.create("permission-blocked");return await k1(t,e==null?void 0:e.vapidKey),await C1(t,e==null?void 0:e.serviceWorkerRegistration),y1(t)}/**
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
 */async function N1(t,e,n){const r=O1(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[xT],message_name:n[r1],message_time:n[s1],message_device_time:Math.floor(Date.now()/1e3)})}function O1(t){switch(t){case Fo.NOTIFICATION_CLICKED:return"notification_open";case Fo.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function D1(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===Fo.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(l_(n)):t.onMessageHandler.next(l_(n)));const r=n.data;b1(r)&&r[i1]==="1"&&await N1(t,n.messageType,r)}const u_="@firebase/messaging",h_="0.12.12";/**
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
 */const V1=t=>{const e=new S1(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>D1(e,n)),e},x1=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>FT(e,r)}};function L1(){_n(new an("messaging",V1,"PUBLIC")),_n(new an("messaging-internal",x1,"PRIVATE")),Kt(u_,h_),Kt(u_,h_,"esm2017")}/**
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
 */async function BT(){try{await Wv()}catch{return!1}return typeof window<"u"&&qv()&&PC()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function M1(t=Go()){return BT().then(e=>{if(!e)throw Ft.create("unsupported-browser")},e=>{throw Ft.create("indexed-db-unsupported")}),Es(De(t),"messaging").getImmediate()}async function GU(t,e){return t=De(t),FT(t,e)}L1();const U1={apiKey:"AIzaSyAjczSlMbbtUk4-fqNwFCglTAr8DHHSseA",authDomain:"globalmanage-e324b.firebaseapp.com",projectId:"globalmanage-e324b",storageBucket:"globalmanage-e324b.firebasestorage.app",messagingSenderId:"345729592199",appId:"1:345729592199:web:c11c85bd5e0775fb374122"},Pl=Dk().length===0?zv(U1):Go(),vo=sD(Pl);vo.languageCode="ja";const jT=Wx(Pl),zU=hM(Pl);let Ba=null;async function QU(){if(Ba)return Ba;try{return await BT()?(Ba=M1(Pl),Ba):null}catch{return null}}const F1=cn(()=>({provide:{auth:vo,db:jT}})),B1="$s";function wo(...t){const e=typeof t[t.length-1]=="string"?t.pop():void 0;typeof t[0]!="string"&&t.unshift(e);const[n,r]=t;if(!n||typeof n!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+n);if(r!==void 0&&typeof r!="function")throw new Error("[nuxt] [useState] init must be a function: "+r);const s=B1+n,i=ze(),o=$_(i.payload.state,s);if(o.value===void 0&&r){const a=r();if(rt(a))return i.payload.state[s]=a,a;o.value=a}return o}let f_=null;const j1=()=>{const t=wo("auth:currentUser",()=>null),e=wo("auth:userProfile",()=>null),n=wo("auth:loading",()=>!0),r=Ht(()=>t.value!==null),s=Ht(()=>{var u;return((u=e.value)==null?void 0:u.role)==="admin"});async function i(u){try{const h=await nL(UE(jT,"users",u));h.exists()?e.value=h.data():e.value={name:"ユーザー",role:"user",staffName:""}}catch{e.value={name:"ユーザー",role:"user",staffName:""}}}function o(){if(!f_){n.value=!0;try{f_=KN(vo,async u=>{t.value=u,u?await i(u.uid):e.value=null,n.value=!1})}catch{n.value=!1}}}async function a(u,h){await HN(vo,u,h)}async function l(){await GN(vo)}return{currentUser:t,userProfile:e,authLoading:n,isLoggedIn:r,isAdmin:s,initAuth:o,login:a,logout:l}},H1=cn(()=>{const{initAuth:t}=j1();t()});let Vs=null;const $1=()=>{const t=wo("pwa:installable",()=>!1),e=wo("pwa:installed",()=>!1);function n(){if(!(typeof window>"u")){if(window.matchMedia("(display-mode: standalone)").matches||navigator.standalone){e.value=!0;return}window.addEventListener("beforeinstallprompt",s=>{s.preventDefault(),Vs=s,t.value=!0}),window.addEventListener("appinstalled",()=>{Vs=null,t.value=!1,e.value=!0})}}async function r(){if(!Vs)return;await Vs.prompt();const{outcome:s}=await Vs.userChoice;s==="accepted"&&(e.value=!0),Vs=null,t.value=!1}return{isInstallable:t,isInstalled:e,init:n,install:r}},q1=cn(()=>{"serviceWorker"in navigator&&navigator.serviceWorker.register("/sw.js",{scope:"/"}).catch(e=>console.warn("[SW]",e));const{init:t}=$1();t()}),W1=[PS,kS,iC,oC,aC,cC,uC,hC,fC,F1,H1,q1],K1=Fr({props:{vnode:{type:Object,required:!0},route:{type:Object,required:!0},vnodeRef:Object,renderKey:String,trackRootNodes:Boolean},setup(t){const e=t.renderKey,n=t.route,r={};for(const s in t.route)Object.defineProperty(r,s,{get:()=>e===t.renderKey?t.route[s]:n[s],enumerable:!0});return is(Wo,Kn(r)),()=>Wt(t.vnode,{ref:t.vnodeRef})}}),G1=Fr({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(t,{attrs:e,slots:n,expose:r}){const s=ze(),i=Yn(),o=Lt(Wo,null);let a;r({pageRef:i});const l=Lt(cv,null);let u;const h=s.deferHydration();if(s.isHydrating){const d=s.hooks.hookOnce("app:error",h);on().beforeEach(d)}return t.pageKey&&Gs(()=>t.pageKey,(d,g)=>{d!==g&&s.callHook("page:loading:start")}),()=>Wt(Vv,{name:t.name,route:t.route,...e},{default:d=>{const g=Q1(o,d.route,d.Component),m=o&&o.matched.length===d.route.matched.length;if(!d.Component){if(u&&!m)return u;h();return}if(u&&l&&!l.isCurrent(d.route))return u;if(g&&o&&(!l||l!=null&&l.isCurrent(o)))return m?u:null;const w=dh(d,t.pageKey);!s.isHydrating&&!J1(o,d.route,d.Component)&&a===w&&s.callHook("page:loading:end"),a=w;const S=!!(t.transition??d.route.meta.pageTransition??Zu),N=S&&z1([t.transition,d.route.meta.pageTransition,Zu,{onAfterLeave:()=>{s.callHook("page:transition:finish",d.Component)}}].filter(Boolean)),x=t.keepalive??d.route.meta.keepalive??o0;return u=xv($y,S&&N,UP(x,Wt(rf,{suspensible:!0,onPending:()=>s.callHook("page:start",d.Component),onResolve:()=>{ys(()=>s.callHook("page:finish",d.Component).then(()=>s.callHook("page:loading:end")).finally(h))}},{default:()=>{const O=Wt(K1,{key:w||void 0,vnode:n.default?Wt(bt,void 0,n.default(d)):d.Component,route:d.route,renderKey:w||void 0,trackRootNodes:S,vnodeRef:i});return x&&(O.type.name=d.Component.type.name||d.Component.type.__name||"RouteProvider"),O}}))).default(),u}})}});function z1(t){const e=t.map(n=>({...n,onAfterLeave:n.onAfterLeave?gf(n.onAfterLeave):void 0}));return ov(...e)}function Q1(t,e,n){if(!t)return!1;const r=e.matched.findIndex(s=>{var i;return((i=s.components)==null?void 0:i.default)===(n==null?void 0:n.type)});return!r||r===-1?!1:e.matched.slice(0,r).some((s,i)=>{var o,a,l;return((o=s.components)==null?void 0:o.default)!==((l=(a=t.matched[i])==null?void 0:a.components)==null?void 0:l.default)})||n&&dh({route:e,Component:n})!==dh({route:t,Component:n})}function J1(t,e,n){return t?e.matched.findIndex(s=>{var i;return((i=s.components)==null?void 0:i.default)===(n==null?void 0:n.type)})<e.matched.length-1:!1}const Y1=Fr({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},async setup(t,e){const n=await Cr[t.name]().then(r=>r.default||r);return()=>Wt(n,t.layoutProps,e.slots)}}),X1=Fr({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null},fallback:{type:[String,Object],default:null}},setup(t,e){const n=ze(),r=Lt(Wo),s=r===uf()?LP():r,i=Ht(()=>{let l=Le(t.name)??s.meta.layout??"default";return l&&!(l in Cr)&&t.fallback&&(l=Le(t.fallback)),l}),o=Yn();e.expose({layoutRef:o});const a=n.deferHydration();if(n.isHydrating){const l=n.hooks.hookOnce("app:error",a);on().beforeEach(l)}return()=>{const l=i.value&&i.value in Cr,u=s.meta.layoutTransition??i0;return xv($y,l&&u,{default:()=>Wt(rf,{suspensible:!0,onResolve:()=>{ys(a)}},{default:()=>Wt(Z1,{layoutProps:My(e.attrs,{ref:o}),key:i.value||void 0,name:i.value,shouldProvide:!t.name,hasTransition:!!u},e.slots)})}).default()}}}),Z1=Fr({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(t,e){const n=t.name;return t.shouldProvide&&is(cv,{isCurrent:r=>n===(r.meta.layout??"default")}),()=>{var r,s;return!n||typeof n=="string"&&!(n in Cr)?(s=(r=e.slots).default)==null?void 0:s.call(r):Wt(Y1,{key:n,layoutProps:t.layoutProps,name:n},e.slots)}}}),eU=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},tU={};function nU(t,e){const n=G1,r=X1;return sn(),bn(r,null,{default:Jh(()=>[Ge(n)]),_:1})}const rU=eU(tU,[["render",nU]]),sU={__name:"nuxt-error-page",props:{error:Object},setup(t){const n=t.error;n.stack&&n.stack.split(`
`).splice(1).map(d=>({text:d.replace("webpack:/","").replace(".vue",".js").trim(),internal:d.includes("node_modules")&&!d.includes(".cache")||d.includes("internal")||d.includes("new Promise")})).map(d=>`<span class="stack${d.internal?" internal":""}">${d.text}</span>`).join(`
`);const r=Number(n.statusCode||500),s=r===404,i=n.statusMessage??(s?"Page Not Found":"Internal Server Error"),o=n.message||n.toString(),a=void 0,h=s?bp(()=>ot(()=>import("./DlJvgOuc.js"),__vite__mapDeps([30,6,31,32]),import.meta.url)):bp(()=>ot(()=>import("./BUQJiE_h.js"),__vite__mapDeps([33,31,34]),import.meta.url));return(d,g)=>(sn(),bn(Le(h),TI(xy({statusCode:Le(r),statusMessage:Le(i),description:Le(o),stack:Le(a)})),null,16))}},iU={key:0},d_={__name:"nuxt-root",setup(t){const e=()=>null,n=ze(),r=n.deferHydration();if(n.isHydrating){const l=n.hooks.hookOnce("app:error",r);on().beforeEach(l)}const s=!1;is(Wo,uf()),n.hooks.callHookWith(l=>l.map(u=>u()),"vue:setup");const i=Xc(),o=!1;oy((l,u,h)=>{if(n.hooks.callHook("vue:error",l,u,h).catch(d=>console.error("[nuxt] Error in `vue:error` hook",d)),b0(l)&&(l.fatal||l.unhandled))return n.runWithContext(()=>js(l)),!1});const a=!1;return(l,u)=>(sn(),bn(rf,{onResolve:Le(r)},{default:Jh(()=>[Le(o)?(sn(),cb("div",iU)):Le(i)?(sn(),bn(Le(sU),{key:1,error:Le(i)},null,8,["error"])):Le(a)?(sn(),bn(Le(e),{key:2,context:Le(a)},null,8,["context"])):Le(s)?(sn(),bn(OA(Le(s)),{key:3})):(sn(),bn(Le(rU),{key:4}))]),_:1},8,["onResolve"]))}};let p_;{let t;p_=async function(){var o,a;if(t)return t;const r=!!(((o=window.__NUXT__)==null?void 0:o.serverRendered)??((a=document.getElementById("__NUXT_DATA__"))==null?void 0:a.dataset.ssr)==="true")?Xb(d_):Yb(d_),s=h0({vueApp:r});async function i(l){await s.callHook("app:error",l),s.payload.error=s.payload.error||Zc(l)}r.config.errorHandler=i;try{await p0(s,W1)}catch(l){i(l)}try{await s.hooks.callHook("app:created",r),await s.hooks.callHook("app:beforeMount",r),r.mount(c0),await s.hooks.callHook("app:mounted",r),await ys()}catch(l){i(l)}return r.config.errorHandler===i&&(r.config.errorHandler=void 0),r},t=p_().catch(e=>{throw console.error("Error while mounting app:",e),e})}export{MU as $,mU as A,Ht as B,Ur as C,wo as D,UU as E,bt as F,UE as G,$U as H,jT as I,DU as J,xU as K,VU as L,OU as M,jU as N,yU as O,gU as P,bn as Q,IU as R,vU as S,uf as T,wU as U,ys as V,KU as W,zU as X,qU as Y,WU as Z,eU as _,Vy as a,BU as a0,FU as a1,Wt as a2,GI as a3,Io as a4,YI as a5,pU as a6,dU as a7,jc as a8,LU as a9,QU as aA,GU as aB,HU as aC,SU as aa,vo as ab,Ii as ac,RU as ad,PU as ae,nL as af,TU as ag,OA as ah,$y as ai,lU as aj,fU as ak,$1 as al,on as am,ze as an,mf as ao,Lg as ap,bU as aq,uU as ar,gR as as,I0 as at,EU as au,vs as av,cf as aw,Yc as ax,Ju as ay,af as az,Ge as b,cb as c,Ly as d,cU as e,Gs as f,Zh as g,bA as h,AU as i,AA as j,Yn as k,Ti as l,Fr as m,Xh as n,sn as o,Le as p,ub as q,oh as r,aU as s,RI as t,j1 as u,_U as v,Jh as w,rt as x,hU as y,Hc as z};
