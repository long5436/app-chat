var Z5=Object.defineProperty,eE=Object.defineProperties;var nE=Object.getOwnPropertyDescriptors;var c4=Object.getOwnPropertySymbols;var uE=Object.prototype.hasOwnProperty,oE=Object.prototype.propertyIsEnumerable;var _4=(e,n,u)=>n in e?Z5(e,n,{enumerable:!0,configurable:!0,writable:!0,value:u}):e[n]=u,tr=(e,n)=>{for(var u in n||(n={}))uE.call(n,u)&&_4(e,u,n[u]);if(c4)for(var u of c4(n))oE.call(n,u)&&_4(e,u,n[u]);return e},ar=(e,n)=>eE(e,nE(n));const iE=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const t of i)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function u(i){const t={};return i.integrity&&(t.integrity=i.integrity),i.referrerpolicy&&(t.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?t.credentials="include":i.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(i){if(i.ep)return;i.ep=!0;const t=u(i);fetch(i.href,t)}};iE();function Tk(e,n){const u=Object.create(null),o=e.split(",");for(let i=0;i<o.length;i++)u[o[i]]=!0;return n?i=>!!u[i.toLowerCase()]:i=>!!u[i]}const tE="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",aE=Tk(tE);function rb(e){return!!e||e===""}function tu(e){if(He(e)){const n={};for(let u=0;u<e.length;u++){const o=e[u],i=Jn(o)?dE(o):tu(o);if(i)for(const t in i)n[t]=i[t]}return n}else{if(Jn(e))return e;if(Xn(e))return e}}const rE=/;(?![^(]*\))/g,sE=/:(.+)/;function dE(e){const n={};return e.split(rE).forEach(u=>{if(u){const o=u.split(sE);o.length>1&&(n[o[0].trim()]=o[1].trim())}}),n}function I(e){let n="";if(Jn(e))n=e;else if(He(e))for(let u=0;u<e.length;u++){const o=I(e[u]);o&&(n+=o+" ")}else if(Xn(e))for(const u in e)e[u]&&(n+=u+" ");return n.trim()}function mE(e,n){if(e.length!==n.length)return!1;let u=!0;for(let o=0;u&&o<e.length;o++)u=Rr(e[o],n[o]);return u}function Rr(e,n){if(e===n)return!0;let u=g4(e),o=g4(n);if(u||o)return u&&o?e.getTime()===n.getTime():!1;if(u=Fl(e),o=Fl(n),u||o)return e===n;if(u=He(e),o=He(n),u||o)return u&&o?mE(e,n):!1;if(u=Xn(e),o=Xn(n),u||o){if(!u||!o)return!1;const i=Object.keys(e).length,t=Object.keys(n).length;if(i!==t)return!1;for(const r in e){const s=e.hasOwnProperty(r),d=n.hasOwnProperty(r);if(s&&!d||!s&&d||!Rr(e[r],n[r]))return!1}}return String(e)===String(n)}function Sk(e,n){return e.findIndex(u=>Rr(u,n))}const yn=e=>Jn(e)?e:e==null?"":He(e)||Xn(e)&&(e.toString===mb||!Ze(e.toString))?JSON.stringify(e,sb,2):String(e),sb=(e,n)=>n&&n.__v_isRef?sb(e,n.value):Zs(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((u,[o,i])=>(u[`${o} =>`]=i,u),{})}:Rd(n)?{[`Set(${n.size})`]:[...n.values()]}:Xn(n)&&!He(n)&&!lb(n)?String(n):n,Sn={},Qs=[],Yi=()=>{},lE=()=>!1,cE=/^on[^a-z]/,eg=e=>cE.test(e),Lk=e=>e.startsWith("onUpdate:"),to=Object.assign,Ck=(e,n)=>{const u=e.indexOf(n);u>-1&&e.splice(u,1)},_E=Object.prototype.hasOwnProperty,pn=(e,n)=>_E.call(e,n),He=Array.isArray,Zs=e=>tc(e)==="[object Map]",Rd=e=>tc(e)==="[object Set]",g4=e=>tc(e)==="[object Date]",Ze=e=>typeof e=="function",Jn=e=>typeof e=="string",Fl=e=>typeof e=="symbol",Xn=e=>e!==null&&typeof e=="object",db=e=>Xn(e)&&Ze(e.then)&&Ze(e.catch),mb=Object.prototype.toString,tc=e=>mb.call(e),gE=e=>tc(e).slice(8,-1),lb=e=>tc(e)==="[object Object]",Ak=e=>Jn(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,z0=Tk(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ng=e=>{const n=Object.create(null);return u=>n[u]||(n[u]=e(u))},pE=/-(\w)/g,et=ng(e=>e.replace(pE,(n,u)=>u?u.toUpperCase():"")),hE=/\B([A-Z])/g,ls=ng(e=>e.replace(hE,"-$1").toLowerCase()),ug=ng(e=>e.charAt(0).toUpperCase()+e.slice(1)),rh=ng(e=>e?`on${ug(e)}`:""),bl=(e,n)=>!Object.is(e,n),ed=(e,n)=>{for(let u=0;u<e.length;u++)e[u](n)},r_=(e,n,u)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,value:u})},s_=e=>{const n=parseFloat(e);return isNaN(n)?e:n};let p4;const kE=()=>p4||(p4=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Vi;class cb{constructor(n=!1){this.active=!0,this.effects=[],this.cleanups=[],!n&&Vi&&(this.parent=Vi,this.index=(Vi.scopes||(Vi.scopes=[])).push(this)-1)}run(n){if(this.active){const u=Vi;try{return Vi=this,n()}finally{Vi=u}}}on(){Vi=this}off(){Vi=this.parent}stop(n){if(this.active){let u,o;for(u=0,o=this.effects.length;u<o;u++)this.effects[u].stop();for(u=0,o=this.cleanups.length;u<o;u++)this.cleanups[u]();if(this.scopes)for(u=0,o=this.scopes.length;u<o;u++)this.scopes[u].stop(!0);if(this.parent&&!n){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.active=!1}}}function _b(e){return new cb(e)}function fE(e,n=Vi){n&&n.active&&n.effects.push(e)}const xk=e=>{const n=new Set(e);return n.w=0,n.n=0,n},gb=e=>(e.w&Ea)>0,pb=e=>(e.n&Ea)>0,yE=({deps:e})=>{if(e.length)for(let n=0;n<e.length;n++)e[n].w|=Ea},FE=e=>{const{deps:n}=e;if(n.length){let u=0;for(let o=0;o<n.length;o++){const i=n[o];gb(i)&&!pb(i)?i.delete(e):n[u++]=i,i.w&=~Ea,i.n&=~Ea}n.length=u}},Zh=new WeakMap;let Nm=0,Ea=1;const e1=30;let Ci;const vr=Symbol(""),n1=Symbol("");class Yk{constructor(n,u=null,o){this.fn=n,this.scheduler=u,this.active=!0,this.deps=[],this.parent=void 0,fE(this,o)}run(){if(!this.active)return this.fn();let n=Ci,u=fa;for(;n;){if(n===this)return;n=n.parent}try{return this.parent=Ci,Ci=this,fa=!0,Ea=1<<++Nm,Nm<=e1?yE(this):h4(this),this.fn()}finally{Nm<=e1&&FE(this),Ea=1<<--Nm,Ci=this.parent,fa=u,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ci===this?this.deferStop=!0:this.active&&(h4(this),this.onStop&&this.onStop(),this.active=!1)}}function h4(e){const{deps:n}=e;if(n.length){for(let u=0;u<n.length;u++)n[u].delete(e);n.length=0}}let fa=!0;const hb=[];function $d(){hb.push(fa),fa=!1}function Hd(){const e=hb.pop();fa=e===void 0?!0:e}function zo(e,n,u){if(fa&&Ci){let o=Zh.get(e);o||Zh.set(e,o=new Map);let i=o.get(u);i||o.set(u,i=xk()),kb(i)}}function kb(e,n){let u=!1;Nm<=e1?pb(e)||(e.n|=Ea,u=!gb(e)):u=!e.has(Ci),u&&(e.add(Ci),Ci.deps.push(e))}function St(e,n,u,o,i,t){const r=Zh.get(e);if(!r)return;let s=[];if(n==="clear")s=[...r.values()];else if(u==="length"&&He(e))r.forEach((d,l)=>{(l==="length"||l>=o)&&s.push(d)});else switch(u!==void 0&&s.push(r.get(u)),n){case"add":He(e)?Ak(u)&&s.push(r.get("length")):(s.push(r.get(vr)),Zs(e)&&s.push(r.get(n1)));break;case"delete":He(e)||(s.push(r.get(vr)),Zs(e)&&s.push(r.get(n1)));break;case"set":Zs(e)&&s.push(r.get(vr));break}if(s.length===1)s[0]&&u1(s[0]);else{const d=[];for(const l of s)l&&d.push(...l);u1(xk(d))}}function u1(e,n){const u=He(e)?e:[...e];for(const o of u)o.computed&&k4(o);for(const o of u)o.computed||k4(o)}function k4(e,n){(e!==Ci||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const bE=Tk("__proto__,__v_isRef,__isVue"),fb=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Fl)),wE=Ik(),jE=Ik(!1,!0),DE=Ik(!0),f4=vE();function vE(){const e={};return["includes","indexOf","lastIndexOf"].forEach(n=>{e[n]=function(...u){const o=jn(this);for(let t=0,r=this.length;t<r;t++)zo(o,"get",t+"");const i=o[n](...u);return i===-1||i===!1?o[n](...u.map(jn)):i}}),["push","pop","shift","unshift","splice"].forEach(n=>{e[n]=function(...u){$d();const o=jn(this)[n].apply(this,u);return Hd(),o}}),e}function Ik(e=!1,n=!1){return function(o,i,t){if(i==="__v_isReactive")return!e;if(i==="__v_isReadonly")return e;if(i==="__v_isShallow")return n;if(i==="__v_raw"&&t===(e?n?$E:jb:n?wb:bb).get(o))return o;const r=He(o);if(!e&&r&&pn(f4,i))return Reflect.get(f4,i,t);const s=Reflect.get(o,i,t);return(Fl(i)?fb.has(i):bE(i))||(e||zo(o,"get",i),n)?s:qn(s)?r&&Ak(i)?s:s.value:Xn(s)?e?Db(s):Cn(s):s}}const BE=yb(),PE=yb(!0);function yb(e=!1){return function(u,o,i,t){let r=u[o];if(wl(r)&&qn(r)&&!qn(i))return!1;if(!e&&!wl(i)&&(o1(i)||(i=jn(i),r=jn(r)),!He(u)&&qn(r)&&!qn(i)))return r.value=i,!0;const s=He(u)&&Ak(o)?Number(o)<u.length:pn(u,o),d=Reflect.set(u,o,i,t);return u===jn(t)&&(s?bl(i,r)&&St(u,"set",o,i):St(u,"add",o,i)),d}}function EE(e,n){const u=pn(e,n);e[n];const o=Reflect.deleteProperty(e,n);return o&&u&&St(e,"delete",n,void 0),o}function ME(e,n){const u=Reflect.has(e,n);return(!Fl(n)||!fb.has(n))&&zo(e,"has",n),u}function TE(e){return zo(e,"iterate",He(e)?"length":vr),Reflect.ownKeys(e)}const Fb={get:wE,set:BE,deleteProperty:EE,has:ME,ownKeys:TE},SE={get:DE,set(e,n){return!0},deleteProperty(e,n){return!0}},LE=to({},Fb,{get:jE,set:PE}),Ok=e=>e,og=e=>Reflect.getPrototypeOf(e);function _0(e,n,u=!1,o=!1){e=e.__v_raw;const i=jn(e),t=jn(n);u||(n!==t&&zo(i,"get",n),zo(i,"get",t));const{has:r}=og(i),s=o?Ok:u?$k:jl;if(r.call(i,n))return s(e.get(n));if(r.call(i,t))return s(e.get(t));e!==i&&e.get(n)}function g0(e,n=!1){const u=this.__v_raw,o=jn(u),i=jn(e);return n||(e!==i&&zo(o,"has",e),zo(o,"has",i)),e===i?u.has(e):u.has(e)||u.has(i)}function p0(e,n=!1){return e=e.__v_raw,!n&&zo(jn(e),"iterate",vr),Reflect.get(e,"size",e)}function y4(e){e=jn(e);const n=jn(this);return og(n).has.call(n,e)||(n.add(e),St(n,"add",e,e)),this}function F4(e,n){n=jn(n);const u=jn(this),{has:o,get:i}=og(u);let t=o.call(u,e);t||(e=jn(e),t=o.call(u,e));const r=i.call(u,e);return u.set(e,n),t?bl(n,r)&&St(u,"set",e,n):St(u,"add",e,n),this}function b4(e){const n=jn(this),{has:u,get:o}=og(n);let i=u.call(n,e);i||(e=jn(e),i=u.call(n,e)),o&&o.call(n,e);const t=n.delete(e);return i&&St(n,"delete",e,void 0),t}function w4(){const e=jn(this),n=e.size!==0,u=e.clear();return n&&St(e,"clear",void 0,void 0),u}function h0(e,n){return function(o,i){const t=this,r=t.__v_raw,s=jn(r),d=n?Ok:e?$k:jl;return!e&&zo(s,"iterate",vr),r.forEach((l,c)=>o.call(i,d(l),d(c),t))}}function k0(e,n,u){return function(...o){const i=this.__v_raw,t=jn(i),r=Zs(t),s=e==="entries"||e===Symbol.iterator&&r,d=e==="keys"&&r,l=i[e](...o),c=u?Ok:n?$k:jl;return!n&&zo(t,"iterate",d?n1:vr),{next(){const{value:_,done:p}=l.next();return p?{value:_,done:p}:{value:s?[c(_[0]),c(_[1])]:c(_),done:p}},[Symbol.iterator](){return this}}}}function ea(e){return function(...n){return e==="delete"?!1:this}}function CE(){const e={get(t){return _0(this,t)},get size(){return p0(this)},has:g0,add:y4,set:F4,delete:b4,clear:w4,forEach:h0(!1,!1)},n={get(t){return _0(this,t,!1,!0)},get size(){return p0(this)},has:g0,add:y4,set:F4,delete:b4,clear:w4,forEach:h0(!1,!0)},u={get(t){return _0(this,t,!0)},get size(){return p0(this,!0)},has(t){return g0.call(this,t,!0)},add:ea("add"),set:ea("set"),delete:ea("delete"),clear:ea("clear"),forEach:h0(!0,!1)},o={get(t){return _0(this,t,!0,!0)},get size(){return p0(this,!0)},has(t){return g0.call(this,t,!0)},add:ea("add"),set:ea("set"),delete:ea("delete"),clear:ea("clear"),forEach:h0(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(t=>{e[t]=k0(t,!1,!1),u[t]=k0(t,!0,!1),n[t]=k0(t,!1,!0),o[t]=k0(t,!0,!0)}),[e,u,n,o]}const[AE,xE,YE,IE]=CE();function Nk(e,n){const u=n?e?IE:YE:e?xE:AE;return(o,i,t)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?o:Reflect.get(pn(u,i)&&i in o?u:o,i,t)}const OE={get:Nk(!1,!1)},NE={get:Nk(!1,!0)},RE={get:Nk(!0,!1)},bb=new WeakMap,wb=new WeakMap,jb=new WeakMap,$E=new WeakMap;function HE(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function UE(e){return e.__v_skip||!Object.isExtensible(e)?0:HE(gE(e))}function Cn(e){return wl(e)?e:Rk(e,!1,Fb,OE,bb)}function zE(e){return Rk(e,!1,LE,NE,wb)}function Db(e){return Rk(e,!0,SE,RE,jb)}function Rk(e,n,u,o,i){if(!Xn(e)||e.__v_raw&&!(n&&e.__v_isReactive))return e;const t=i.get(e);if(t)return t;const r=UE(e);if(r===0)return e;const s=new Proxy(e,r===2?o:u);return i.set(e,s),s}function ya(e){return wl(e)?ya(e.__v_raw):!!(e&&e.__v_isReactive)}function wl(e){return!!(e&&e.__v_isReadonly)}function o1(e){return!!(e&&e.__v_isShallow)}function vb(e){return ya(e)||wl(e)}function jn(e){const n=e&&e.__v_raw;return n?jn(n):e}function ld(e){return r_(e,"__v_skip",!0),e}const jl=e=>Xn(e)?Cn(e):e,$k=e=>Xn(e)?Db(e):e;function Bb(e){fa&&Ci&&(e=jn(e),kb(e.dep||(e.dep=xk())))}function Pb(e,n){e=jn(e),e.dep&&u1(e.dep)}function qn(e){return!!(e&&e.__v_isRef===!0)}function Pe(e){return Eb(e,!1)}function VE(e){return Eb(e,!0)}function Eb(e,n){return qn(e)?e:new WE(e,n)}class WE{constructor(n,u){this.__v_isShallow=u,this.dep=void 0,this.__v_isRef=!0,this._rawValue=u?n:jn(n),this._value=u?n:jl(n)}get value(){return Bb(this),this._value}set value(n){n=this.__v_isShallow?n:jn(n),bl(n,this._rawValue)&&(this._rawValue=n,this._value=this.__v_isShallow?n:jl(n),Pb(this))}}function xe(e){return qn(e)?e.value:e}const qE={get:(e,n,u)=>xe(Reflect.get(e,n,u)),set:(e,n,u,o)=>{const i=e[n];return qn(i)&&!qn(u)?(i.value=u,!0):Reflect.set(e,n,u,o)}};function Mb(e){return ya(e)?e:new Proxy(e,qE)}function ac(e){const n=He(e)?new Array(e.length):{};for(const u in e)n[u]=GE(e,u);return n}class KE{constructor(n,u,o){this._object=n,this._key=u,this._defaultValue=o,this.__v_isRef=!0}get value(){const n=this._object[this._key];return n===void 0?this._defaultValue:n}set value(n){this._object[this._key]=n}}function GE(e,n,u){const o=e[n];return qn(o)?o:new KE(e,n,u)}class JE{constructor(n,u,o,i){this._setter=u,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Yk(n,()=>{this._dirty||(this._dirty=!0,Pb(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=o}get value(){const n=jn(this);return Bb(n),(n._dirty||!n._cacheable)&&(n._dirty=!1,n._value=n.effect.run()),n._value}set value(n){this._setter(n)}}function XE(e,n,u=!1){let o,i;const t=Ze(e);return t?(o=e,i=Yi):(o=e.get,i=e.set),new JE(o,i,t||!i,u)}function Fa(e,n,u,o){let i;try{i=o?e(...o):e()}catch(t){ig(t,n,u)}return i}function Ii(e,n,u,o){if(Ze(e)){const t=Fa(e,n,u,o);return t&&db(t)&&t.catch(r=>{ig(r,n,u)}),t}const i=[];for(let t=0;t<e.length;t++)i.push(Ii(e[t],n,u,o));return i}function ig(e,n,u,o=!0){const i=n?n.vnode:null;if(n){let t=n.parent;const r=n.proxy,s=u;for(;t;){const l=t.ec;if(l){for(let c=0;c<l.length;c++)if(l[c](e,r,s)===!1)return}t=t.parent}const d=n.appContext.config.errorHandler;if(d){Fa(d,null,10,[e,r,s]);return}}QE(e,u,i,o)}function QE(e,n,u,o=!0){console.error(e)}let d_=!1,i1=!1;const Co=[];let yt=0;const Jm=[];let Rm=null,Us=0;const Xm=[];let ra=null,zs=0;const Tb=Promise.resolve();let Hk=null,t1=null;function Uk(e){const n=Hk||Tb;return e?n.then(this?e.bind(this):e):n}function ZE(e){let n=yt+1,u=Co.length;for(;n<u;){const o=n+u>>>1;Dl(Co[o])<e?n=o+1:u=o}return n}function Sb(e){(!Co.length||!Co.includes(e,d_&&e.allowRecurse?yt+1:yt))&&e!==t1&&(e.id==null?Co.push(e):Co.splice(ZE(e.id),0,e),Lb())}function Lb(){!d_&&!i1&&(i1=!0,Hk=Tb.then(xb))}function eM(e){const n=Co.indexOf(e);n>yt&&Co.splice(n,1)}function Cb(e,n,u,o){He(e)?u.push(...e):(!n||!n.includes(e,e.allowRecurse?o+1:o))&&u.push(e),Lb()}function nM(e){Cb(e,Rm,Jm,Us)}function uM(e){Cb(e,ra,Xm,zs)}function tg(e,n=null){if(Jm.length){for(t1=n,Rm=[...new Set(Jm)],Jm.length=0,Us=0;Us<Rm.length;Us++)Rm[Us]();Rm=null,Us=0,t1=null,tg(e,n)}}function Ab(e){if(tg(),Xm.length){const n=[...new Set(Xm)];if(Xm.length=0,ra){ra.push(...n);return}for(ra=n,ra.sort((u,o)=>Dl(u)-Dl(o)),zs=0;zs<ra.length;zs++)ra[zs]();ra=null,zs=0}}const Dl=e=>e.id==null?1/0:e.id;function xb(e){i1=!1,d_=!0,tg(e),Co.sort((u,o)=>Dl(u)-Dl(o));const n=Yi;try{for(yt=0;yt<Co.length;yt++){const u=Co[yt];u&&u.active!==!1&&Fa(u,null,14)}}finally{yt=0,Co.length=0,Ab(),d_=!1,Hk=null,(Co.length||Jm.length||Xm.length)&&xb(e)}}function oM(e,n,...u){if(e.isUnmounted)return;const o=e.vnode.props||Sn;let i=u;const t=n.startsWith("update:"),r=t&&n.slice(7);if(r&&r in o){const c=`${r==="modelValue"?"model":r}Modifiers`,{number:_,trim:p}=o[c]||Sn;p&&(i=u.map(f=>f.trim())),_&&(i=u.map(s_))}let s,d=o[s=rh(n)]||o[s=rh(et(n))];!d&&t&&(d=o[s=rh(ls(n))]),d&&Ii(d,e,6,i);const l=o[s+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Ii(l,e,6,i)}}function Yb(e,n,u=!1){const o=n.emitsCache,i=o.get(e);if(i!==void 0)return i;const t=e.emits;let r={},s=!1;if(!Ze(e)){const d=l=>{const c=Yb(l,n,!0);c&&(s=!0,to(r,c))};!u&&n.mixins.length&&n.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}return!t&&!s?(o.set(e,null),null):(He(t)?t.forEach(d=>r[d]=null):to(r,t),o.set(e,r),r)}function ag(e,n){return!e||!eg(n)?!1:(n=n.slice(2).replace(/Once$/,""),pn(e,n[0].toLowerCase()+n.slice(1))||pn(e,ls(n))||pn(e,n))}let Iu=null,Ib=null;function m_(e){const n=Iu;return Iu=e,Ib=e&&e.type.__scopeId||null,n}function ao(e,n=Iu,u){if(!n||e._n)return e;const o=(...i)=>{o._d&&C4(-1);const t=m_(n),r=e(...i);return m_(t),o._d&&C4(1),r};return o._n=!0,o._c=!0,o._d=!0,o}function sh(e){const{type:n,vnode:u,proxy:o,withProxy:i,props:t,propsOptions:[r],slots:s,attrs:d,emit:l,render:c,renderCache:_,data:p,setupState:f,ctx:y,inheritAttrs:D}=e;let P,v;const j=m_(e);try{if(u.shapeFlag&4){const S=i||o;P=qi(c.call(S,S,_,t,f,p,y)),v=d}else{const S=n;P=qi(S.length>1?S(t,{attrs:d,slots:s,emit:l}):S(t,null)),v=n.props?d:iM(d)}}catch(S){Zm.length=0,ig(S,e,1),P=he(Ma)}let M=P;if(v&&D!==!1){const S=Object.keys(v),{shapeFlag:$}=M;S.length&&$&7&&(r&&S.some(Lk)&&(v=tM(v,r)),M=$r(M,v))}return u.dirs&&(M=$r(M),M.dirs=M.dirs?M.dirs.concat(u.dirs):u.dirs),u.transition&&(M.transition=u.transition),P=M,m_(j),P}const iM=e=>{let n;for(const u in e)(u==="class"||u==="style"||eg(u))&&((n||(n={}))[u]=e[u]);return n},tM=(e,n)=>{const u={};for(const o in e)(!Lk(o)||!(o.slice(9)in n))&&(u[o]=e[o]);return u};function aM(e,n,u){const{props:o,children:i,component:t}=e,{props:r,children:s,patchFlag:d}=n,l=t.emitsOptions;if(n.dirs||n.transition)return!0;if(u&&d>=0){if(d&1024)return!0;if(d&16)return o?j4(o,r,l):!!r;if(d&8){const c=n.dynamicProps;for(let _=0;_<c.length;_++){const p=c[_];if(r[p]!==o[p]&&!ag(l,p))return!0}}}else return(i||s)&&(!s||!s.$stable)?!0:o===r?!1:o?r?j4(o,r,l):!0:!!r;return!1}function j4(e,n,u){const o=Object.keys(n);if(o.length!==Object.keys(e).length)return!0;for(let i=0;i<o.length;i++){const t=o[i];if(n[t]!==e[t]&&!ag(u,t))return!0}return!1}function rM({vnode:e,parent:n},u){for(;n&&n.subTree===e;)(e=n.vnode).el=u,n=n.parent}const Ob=e=>e.__isSuspense;function sM(e,n){n&&n.pendingBranch?He(e)?n.effects.push(...e):n.effects.push(e):uM(e)}function Br(e,n){if(hu){let u=hu.provides;const o=hu.parent&&hu.parent.provides;o===u&&(u=hu.provides=Object.create(o)),u[e]=n}}function oo(e,n,u=!1){const o=hu||Iu;if(o){const i=o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides;if(i&&e in i)return i[e];if(arguments.length>1)return u&&Ze(n)?n.call(o.proxy):n}}function rc(e,n){return zk(e,null,n)}const D4={};function vn(e,n,u){return zk(e,n,u)}function zk(e,n,{immediate:u,deep:o,flush:i,onTrack:t,onTrigger:r}=Sn){const s=hu;let d,l=!1,c=!1;if(qn(e)?(d=()=>e.value,l=o1(e)):ya(e)?(d=()=>e,o=!0):He(e)?(c=!0,l=e.some(v=>ya(v)||o1(v)),d=()=>e.map(v=>{if(qn(v))return v.value;if(ya(v))return fr(v);if(Ze(v))return Fa(v,s,2)})):Ze(e)?n?d=()=>Fa(e,s,2):d=()=>{if(!(s&&s.isUnmounted))return _&&_(),Ii(e,s,3,[p])}:d=Yi,n&&o){const v=d;d=()=>fr(v())}let _,p=v=>{_=P.onStop=()=>{Fa(v,s,4)}};if(Pl)return p=Yi,n?u&&Ii(n,s,3,[d(),c?[]:void 0,p]):d(),Yi;let f=c?[]:D4;const y=()=>{if(!!P.active)if(n){const v=P.run();(o||l||(c?v.some((j,M)=>bl(j,f[M])):bl(v,f)))&&(_&&_(),Ii(n,s,3,[v,f===D4?void 0:f,p]),f=v)}else P.run()};y.allowRecurse=!!n;let D;i==="sync"?D=y:i==="post"?D=()=>wu(y,s&&s.suspense):D=()=>nM(y);const P=new Yk(d,D);return n?u?y():f=P.run():i==="post"?wu(P.run.bind(P),s&&s.suspense):P.run(),()=>{P.stop(),s&&s.scope&&Ck(s.scope.effects,P)}}function dM(e,n,u){const o=this.proxy,i=Jn(e)?e.includes(".")?Nb(o,e):()=>o[e]:e.bind(o,o);let t;Ze(n)?t=n:(t=n.handler,u=n);const r=hu;_d(this);const s=zk(i,t.bind(o),u);return r?_d(r):Pr(),s}function Nb(e,n){const u=n.split(".");return()=>{let o=e;for(let i=0;i<u.length&&o;i++)o=o[u[i]];return o}}function fr(e,n){if(!Xn(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),qn(e))fr(e.value,n);else if(He(e))for(let u=0;u<e.length;u++)fr(e[u],n);else if(Rd(e)||Zs(e))e.forEach(u=>{fr(u,n)});else if(lb(e))for(const u in e)fr(e[u],n);return e}function Rb(e,n){e.shapeFlag&6&&e.component?Rb(e.component.subTree,n):e.shapeFlag&128?(e.ssContent.transition=n.clone(e.ssContent),e.ssFallback.transition=n.clone(e.ssFallback)):e.transition=n}function Wu(e){return Ze(e)?{setup:e,name:e.name}:e}const nd=e=>!!e.type.__asyncLoader,$b=e=>e.type.__isKeepAlive,mM={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:n}){const u=Ud(),o=u.ctx;if(!o.renderer)return()=>{const j=n.default&&n.default();return j&&j.length===1?j[0]:j};const i=new Map,t=new Set;let r=null;const s=u.suspense,{renderer:{p:d,m:l,um:c,o:{createElement:_}}}=o,p=_("div");o.activate=(j,M,S,$,C)=>{const L=j.component;l(j,M,S,0,s),d(L.vnode,j,M,S,L,s,$,j.slotScopeIds,C),wu(()=>{L.isDeactivated=!1,L.a&&ed(L.a);const T=j.props&&j.props.onVnodeMounted;T&&di(T,L.parent,j)},s)},o.deactivate=j=>{const M=j.component;l(j,p,null,1,s),wu(()=>{M.da&&ed(M.da);const S=j.props&&j.props.onVnodeUnmounted;S&&di(S,M.parent,j),M.isDeactivated=!0},s)};function f(j){dh(j),c(j,u,s,!0)}function y(j){i.forEach((M,S)=>{const $=c1(M.type);$&&(!j||!j($))&&D(S)})}function D(j){const M=i.get(j);!r||M.type!==r.type?f(M):r&&dh(r),i.delete(j),t.delete(j)}vn(()=>[e.include,e.exclude],([j,M])=>{j&&y(S=>$m(j,S)),M&&y(S=>!$m(M,S))},{flush:"post",deep:!0});let P=null;const v=()=>{P!=null&&i.set(P,mh(u.subTree))};return Ri(v),sc(v),dc(()=>{i.forEach(j=>{const{subTree:M,suspense:S}=u,$=mh(M);if(j.type===$.type){dh($);const C=$.component.da;C&&wu(C,S);return}f(j)})}),()=>{if(P=null,!n.default)return null;const j=n.default(),M=j[0];if(j.length>1)return r=null,j;if(!Bl(M)||!(M.shapeFlag&4)&&!(M.shapeFlag&128))return r=null,M;let S=mh(M);const $=S.type,C=c1(nd(S)?S.type.__asyncResolved||{}:$),{include:L,exclude:T,max:q}=e;if(L&&(!C||!$m(L,C))||T&&C&&$m(T,C))return r=S,M;const V=S.key==null?$:S.key,X=i.get(V);return S.el&&(S=$r(S),M.shapeFlag&128&&(M.ssContent=S)),P=V,X?(S.el=X.el,S.component=X.component,S.transition&&Rb(S,S.transition),S.shapeFlag|=512,t.delete(V),t.add(V)):(t.add(V),q&&t.size>parseInt(q,10)&&D(t.values().next().value)),S.shapeFlag|=256,r=S,Ob(M.type)?M:S}}},lM=mM;function $m(e,n){return He(e)?e.some(u=>$m(u,n)):Jn(e)?e.split(",").includes(n):e.test?e.test(n):!1}function cM(e,n){Hb(e,"a",n)}function _M(e,n){Hb(e,"da",n)}function Hb(e,n,u=hu){const o=e.__wdc||(e.__wdc=()=>{let i=u;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(rg(n,o,u),u){let i=u.parent;for(;i&&i.parent;)$b(i.parent.vnode)&&gM(o,n,u,i),i=i.parent}}function gM(e,n,u,o){const i=rg(n,e,o,!0);sg(()=>{Ck(o[n],i)},u)}function dh(e){let n=e.shapeFlag;n&256&&(n-=256),n&512&&(n-=512),e.shapeFlag=n}function mh(e){return e.shapeFlag&128?e.ssContent:e}function rg(e,n,u=hu,o=!1){if(u){const i=u[e]||(u[e]=[]),t=n.__weh||(n.__weh=(...r)=>{if(u.isUnmounted)return;$d(),_d(u);const s=Ii(n,u,e,r);return Pr(),Hd(),s});return o?i.unshift(t):i.push(t),t}}const Ot=e=>(n,u=hu)=>(!Pl||e==="sp")&&rg(e,n,u),pM=Ot("bm"),Ri=Ot("m"),hM=Ot("bu"),sc=Ot("u"),dc=Ot("bum"),sg=Ot("um"),kM=Ot("sp"),fM=Ot("rtg"),yM=Ot("rtc");function FM(e,n=hu){rg("ec",e,n)}function Yo(e,n){const u=Iu;if(u===null)return e;const o=mg(u)||u.proxy,i=e.dirs||(e.dirs=[]);for(let t=0;t<n.length;t++){let[r,s,d,l=Sn]=n[t];Ze(r)&&(r={mounted:r,updated:r}),r.deep&&fr(s),i.push({dir:r,instance:o,value:s,oldValue:void 0,arg:d,modifiers:l})}return e}function rr(e,n,u,o){const i=e.dirs,t=n&&n.dirs;for(let r=0;r<i.length;r++){const s=i[r];t&&(s.oldValue=t[r].value);let d=s.dir[o];d&&($d(),Ii(d,u,8,[e.el,s,e,n]),Hd())}}const Vk="components";function kn(e,n){return Vb(Vk,e,!0,n)||e}const Ub=Symbol();function zb(e){return Jn(e)?Vb(Vk,e,!1)||e:e||Ub}function Vb(e,n,u=!0,o=!1){const i=Iu||hu;if(i){const t=i.type;if(e===Vk){const s=c1(t);if(s&&(s===n||s===et(n)||s===ug(et(n))))return t}const r=v4(i[e]||t[e],n)||v4(i.appContext[e],n);return!r&&o?t:r}}function v4(e,n){return e&&(e[n]||e[et(n)]||e[ug(et(n))])}function Oi(e,n,u,o){let i;const t=u&&u[o];if(He(e)||Jn(e)){i=new Array(e.length);for(let r=0,s=e.length;r<s;r++)i[r]=n(e[r],r,void 0,t&&t[r])}else if(typeof e=="number"){i=new Array(e);for(let r=0;r<e;r++)i[r]=n(r+1,r,void 0,t&&t[r])}else if(Xn(e))if(e[Symbol.iterator])i=Array.from(e,(r,s)=>n(r,s,void 0,t&&t[s]));else{const r=Object.keys(e);i=new Array(r.length);for(let s=0,d=r.length;s<d;s++){const l=r[s];i[s]=n(e[l],l,s,t&&t[s])}}else i=[];return u&&(u[o]=i),i}function cd(e,n,u={},o,i){if(Iu.isCE||Iu.parent&&nd(Iu.parent)&&Iu.parent.isCE)return he("slot",n==="default"?null:{name:n},o&&o());let t=e[n];t&&t._c&&(t._d=!1),J();const r=t&&Wb(t(u)),s=Vn(sn,{key:u.key||`_${n}`},r||(o?o():[]),r&&e._===1?64:-2);return!i&&s.scopeId&&(s.slotScopeIds=[s.scopeId+"-s"]),t&&t._c&&(t._d=!0),s}function Wb(e){return e.some(n=>Bl(n)?!(n.type===Ma||n.type===sn&&!Wb(n.children)):!0)?e:null}const a1=e=>e?o9(e)?mg(e)||e.proxy:a1(e.parent):null,l_=to(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>a1(e.parent),$root:e=>a1(e.root),$emit:e=>e.emit,$options:e=>Kb(e),$forceUpdate:e=>e.f||(e.f=()=>Sb(e.update)),$nextTick:e=>e.n||(e.n=Uk.bind(e.proxy)),$watch:e=>dM.bind(e)}),bM={get({_:e},n){const{ctx:u,setupState:o,data:i,props:t,accessCache:r,type:s,appContext:d}=e;let l;if(n[0]!=="$"){const f=r[n];if(f!==void 0)switch(f){case 1:return o[n];case 2:return i[n];case 4:return u[n];case 3:return t[n]}else{if(o!==Sn&&pn(o,n))return r[n]=1,o[n];if(i!==Sn&&pn(i,n))return r[n]=2,i[n];if((l=e.propsOptions[0])&&pn(l,n))return r[n]=3,t[n];if(u!==Sn&&pn(u,n))return r[n]=4,u[n];r1&&(r[n]=0)}}const c=l_[n];let _,p;if(c)return n==="$attrs"&&zo(e,"get",n),c(e);if((_=s.__cssModules)&&(_=_[n]))return _;if(u!==Sn&&pn(u,n))return r[n]=4,u[n];if(p=d.config.globalProperties,pn(p,n))return p[n]},set({_:e},n,u){const{data:o,setupState:i,ctx:t}=e;return i!==Sn&&pn(i,n)?(i[n]=u,!0):o!==Sn&&pn(o,n)?(o[n]=u,!0):pn(e.props,n)||n[0]==="$"&&n.slice(1)in e?!1:(t[n]=u,!0)},has({_:{data:e,setupState:n,accessCache:u,ctx:o,appContext:i,propsOptions:t}},r){let s;return!!u[r]||e!==Sn&&pn(e,r)||n!==Sn&&pn(n,r)||(s=t[0])&&pn(s,r)||pn(o,r)||pn(l_,r)||pn(i.config.globalProperties,r)},defineProperty(e,n,u){return u.get!=null?e._.accessCache[n]=0:pn(u,"value")&&this.set(e,n,u.value,null),Reflect.defineProperty(e,n,u)}};let r1=!0;function wM(e){const n=Kb(e),u=e.proxy,o=e.ctx;r1=!1,n.beforeCreate&&B4(n.beforeCreate,e,"bc");const{data:i,computed:t,methods:r,watch:s,provide:d,inject:l,created:c,beforeMount:_,mounted:p,beforeUpdate:f,updated:y,activated:D,deactivated:P,beforeDestroy:v,beforeUnmount:j,destroyed:M,unmounted:S,render:$,renderTracked:C,renderTriggered:L,errorCaptured:T,serverPrefetch:q,expose:V,inheritAttrs:X,components:Z,directives:ke,filters:me}=n;if(l&&jM(l,o,null,e.appContext.config.unwrapInjectedRef),r)for(const Me in r){const be=r[Me];Ze(be)&&(o[Me]=be.bind(u))}if(i){const Me=i.call(u,u);Xn(Me)&&(e.data=Cn(Me))}if(r1=!0,t)for(const Me in t){const be=t[Me],ln=Ze(be)?be.bind(u,u):Ze(be.get)?be.get.bind(u,u):Yi,Fe=!Ze(be)&&Ze(be.set)?be.set.bind(u):Yi,Te=Ne({get:ln,set:Fe});Object.defineProperty(o,Me,{enumerable:!0,configurable:!0,get:()=>Te.value,set:Ce=>Te.value=Ce})}if(s)for(const Me in s)qb(s[Me],o,u,Me);if(d){const Me=Ze(d)?d.call(u):d;Reflect.ownKeys(Me).forEach(be=>{Br(be,Me[be])})}c&&B4(c,e,"c");function Se(Me,be){He(be)?be.forEach(ln=>Me(ln.bind(u))):be&&Me(be.bind(u))}if(Se(pM,_),Se(Ri,p),Se(hM,f),Se(sc,y),Se(cM,D),Se(_M,P),Se(FM,T),Se(yM,C),Se(fM,L),Se(dc,j),Se(sg,S),Se(kM,q),He(V))if(V.length){const Me=e.exposed||(e.exposed={});V.forEach(be=>{Object.defineProperty(Me,be,{get:()=>u[be],set:ln=>u[be]=ln})})}else e.exposed||(e.exposed={});$&&e.render===Yi&&(e.render=$),X!=null&&(e.inheritAttrs=X),Z&&(e.components=Z),ke&&(e.directives=ke)}function jM(e,n,u=Yi,o=!1){He(e)&&(e=s1(e));for(const i in e){const t=e[i];let r;Xn(t)?"default"in t?r=oo(t.from||i,t.default,!0):r=oo(t.from||i):r=oo(t),qn(r)&&o?Object.defineProperty(n,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:s=>r.value=s}):n[i]=r}}function B4(e,n,u){Ii(He(e)?e.map(o=>o.bind(n.proxy)):e.bind(n.proxy),n,u)}function qb(e,n,u,o){const i=o.includes(".")?Nb(u,o):()=>u[o];if(Jn(e)){const t=n[e];Ze(t)&&vn(i,t)}else if(Ze(e))vn(i,e.bind(u));else if(Xn(e))if(He(e))e.forEach(t=>qb(t,n,u,o));else{const t=Ze(e.handler)?e.handler.bind(u):n[e.handler];Ze(t)&&vn(i,t,e)}}function Kb(e){const n=e.type,{mixins:u,extends:o}=n,{mixins:i,optionsCache:t,config:{optionMergeStrategies:r}}=e.appContext,s=t.get(n);let d;return s?d=s:!i.length&&!u&&!o?d=n:(d={},i.length&&i.forEach(l=>c_(d,l,r,!0)),c_(d,n,r)),t.set(n,d),d}function c_(e,n,u,o=!1){const{mixins:i,extends:t}=n;t&&c_(e,t,u,!0),i&&i.forEach(r=>c_(e,r,u,!0));for(const r in n)if(!(o&&r==="expose")){const s=DM[r]||u&&u[r];e[r]=s?s(e[r],n[r]):n[r]}return e}const DM={data:P4,props:lr,emits:lr,methods:lr,computed:lr,beforeCreate:Xu,created:Xu,beforeMount:Xu,mounted:Xu,beforeUpdate:Xu,updated:Xu,beforeDestroy:Xu,beforeUnmount:Xu,destroyed:Xu,unmounted:Xu,activated:Xu,deactivated:Xu,errorCaptured:Xu,serverPrefetch:Xu,components:lr,directives:lr,watch:BM,provide:P4,inject:vM};function P4(e,n){return n?e?function(){return to(Ze(e)?e.call(this,this):e,Ze(n)?n.call(this,this):n)}:n:e}function vM(e,n){return lr(s1(e),s1(n))}function s1(e){if(He(e)){const n={};for(let u=0;u<e.length;u++)n[e[u]]=e[u];return n}return e}function Xu(e,n){return e?[...new Set([].concat(e,n))]:n}function lr(e,n){return e?to(to(Object.create(null),e),n):n}function BM(e,n){if(!e)return n;if(!n)return e;const u=to(Object.create(null),e);for(const o in n)u[o]=Xu(e[o],n[o]);return u}function PM(e,n,u,o=!1){const i={},t={};r_(t,dg,1),e.propsDefaults=Object.create(null),Gb(e,n,i,t);for(const r in e.propsOptions[0])r in i||(i[r]=void 0);u?e.props=o?i:zE(i):e.type.props?e.props=i:e.props=t,e.attrs=t}function EM(e,n,u,o){const{props:i,attrs:t,vnode:{patchFlag:r}}=e,s=jn(i),[d]=e.propsOptions;let l=!1;if((o||r>0)&&!(r&16)){if(r&8){const c=e.vnode.dynamicProps;for(let _=0;_<c.length;_++){let p=c[_];if(ag(e.emitsOptions,p))continue;const f=n[p];if(d)if(pn(t,p))f!==t[p]&&(t[p]=f,l=!0);else{const y=et(p);i[y]=d1(d,s,y,f,e,!1)}else f!==t[p]&&(t[p]=f,l=!0)}}}else{Gb(e,n,i,t)&&(l=!0);let c;for(const _ in s)(!n||!pn(n,_)&&((c=ls(_))===_||!pn(n,c)))&&(d?u&&(u[_]!==void 0||u[c]!==void 0)&&(i[_]=d1(d,s,_,void 0,e,!0)):delete i[_]);if(t!==s)for(const _ in t)(!n||!pn(n,_)&&!0)&&(delete t[_],l=!0)}l&&St(e,"set","$attrs")}function Gb(e,n,u,o){const[i,t]=e.propsOptions;let r=!1,s;if(n)for(let d in n){if(z0(d))continue;const l=n[d];let c;i&&pn(i,c=et(d))?!t||!t.includes(c)?u[c]=l:(s||(s={}))[c]=l:ag(e.emitsOptions,d)||(!(d in o)||l!==o[d])&&(o[d]=l,r=!0)}if(t){const d=jn(u),l=s||Sn;for(let c=0;c<t.length;c++){const _=t[c];u[_]=d1(i,d,_,l[_],e,!pn(l,_))}}return r}function d1(e,n,u,o,i,t){const r=e[u];if(r!=null){const s=pn(r,"default");if(s&&o===void 0){const d=r.default;if(r.type!==Function&&Ze(d)){const{propsDefaults:l}=i;u in l?o=l[u]:(_d(i),o=l[u]=d.call(null,n),Pr())}else o=d}r[0]&&(t&&!s?o=!1:r[1]&&(o===""||o===ls(u))&&(o=!0))}return o}function Jb(e,n,u=!1){const o=n.propsCache,i=o.get(e);if(i)return i;const t=e.props,r={},s=[];let d=!1;if(!Ze(e)){const c=_=>{d=!0;const[p,f]=Jb(_,n,!0);to(r,p),f&&s.push(...f)};!u&&n.mixins.length&&n.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!t&&!d)return o.set(e,Qs),Qs;if(He(t))for(let c=0;c<t.length;c++){const _=et(t[c]);E4(_)&&(r[_]=Sn)}else if(t)for(const c in t){const _=et(c);if(E4(_)){const p=t[c],f=r[_]=He(p)||Ze(p)?{type:p}:p;if(f){const y=S4(Boolean,f.type),D=S4(String,f.type);f[0]=y>-1,f[1]=D<0||y<D,(y>-1||pn(f,"default"))&&s.push(_)}}}const l=[r,s];return o.set(e,l),l}function E4(e){return e[0]!=="$"}function M4(e){const n=e&&e.toString().match(/^\s*function (\w+)/);return n?n[1]:e===null?"null":""}function T4(e,n){return M4(e)===M4(n)}function S4(e,n){return He(n)?n.findIndex(u=>T4(u,e)):Ze(n)&&T4(n,e)?0:-1}const Xb=e=>e[0]==="_"||e==="$stable",Wk=e=>He(e)?e.map(qi):[qi(e)],MM=(e,n,u)=>{if(n._n)return n;const o=ao((...i)=>Wk(n(...i)),u);return o._c=!1,o},Qb=(e,n,u)=>{const o=e._ctx;for(const i in e){if(Xb(i))continue;const t=e[i];if(Ze(t))n[i]=MM(i,t,o);else if(t!=null){const r=Wk(t);n[i]=()=>r}}},Zb=(e,n)=>{const u=Wk(n);e.slots.default=()=>u},TM=(e,n)=>{if(e.vnode.shapeFlag&32){const u=n._;u?(e.slots=jn(n),r_(n,"_",u)):Qb(n,e.slots={})}else e.slots={},n&&Zb(e,n);r_(e.slots,dg,1)},SM=(e,n,u)=>{const{vnode:o,slots:i}=e;let t=!0,r=Sn;if(o.shapeFlag&32){const s=n._;s?u&&s===1?t=!1:(to(i,n),!u&&s===1&&delete i._):(t=!n.$stable,Qb(n,i)),r=n}else n&&(Zb(e,n),r={default:1});if(t)for(const s in i)!Xb(s)&&!(s in r)&&delete i[s]};function e9(){return{app:null,config:{isNativeTag:lE,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let LM=0;function CM(e,n){return function(o,i=null){Ze(o)||(o=Object.assign({},o)),i!=null&&!Xn(i)&&(i=null);const t=e9(),r=new Set;let s=!1;const d=t.app={_uid:LM++,_component:o,_props:i,_container:null,_context:t,_instance:null,version:ZM,get config(){return t.config},set config(l){},use(l,...c){return r.has(l)||(l&&Ze(l.install)?(r.add(l),l.install(d,...c)):Ze(l)&&(r.add(l),l(d,...c))),d},mixin(l){return t.mixins.includes(l)||t.mixins.push(l),d},component(l,c){return c?(t.components[l]=c,d):t.components[l]},directive(l,c){return c?(t.directives[l]=c,d):t.directives[l]},mount(l,c,_){if(!s){const p=he(o,i);return p.appContext=t,c&&n?n(p,l):e(p,l,_),s=!0,d._container=l,l.__vue_app__=d,mg(p.component)||p.component.proxy}},unmount(){s&&(e(null,d._container),delete d._container.__vue_app__)},provide(l,c){return t.provides[l]=c,d}};return d}}function m1(e,n,u,o,i=!1){if(He(e)){e.forEach((p,f)=>m1(p,n&&(He(n)?n[f]:n),u,o,i));return}if(nd(o)&&!i)return;const t=o.shapeFlag&4?mg(o.component)||o.component.proxy:o.el,r=i?null:t,{i:s,r:d}=e,l=n&&n.r,c=s.refs===Sn?s.refs={}:s.refs,_=s.setupState;if(l!=null&&l!==d&&(Jn(l)?(c[l]=null,pn(_,l)&&(_[l]=null)):qn(l)&&(l.value=null)),Ze(d))Fa(d,s,12,[r,c]);else{const p=Jn(d),f=qn(d);if(p||f){const y=()=>{if(e.f){const D=p?c[d]:d.value;i?He(D)&&Ck(D,t):He(D)?D.includes(t)||D.push(t):p?(c[d]=[t],pn(_,d)&&(_[d]=c[d])):(d.value=[t],e.k&&(c[e.k]=d.value))}else p?(c[d]=r,pn(_,d)&&(_[d]=r)):qn(d)&&(d.value=r,e.k&&(c[e.k]=r))};r?(y.id=-1,wu(y,u)):y()}}}const wu=sM;function AM(e){return xM(e)}function xM(e,n){const u=kE();u.__VUE__=!0;const{insert:o,remove:i,patchProp:t,createElement:r,createText:s,createComment:d,setText:l,setElementText:c,parentNode:_,nextSibling:p,setScopeId:f=Yi,cloneNode:y,insertStaticContent:D}=e,P=(k,b,B,A=null,Y=null,z=null,x=!1,H=null,U=!!b.dynamicChildren)=>{if(k===b)return;k&&!Tm(k,b)&&(A=te(k),Ge(k,Y,z,!0),k=null),b.patchFlag===-2&&(U=!1,b.dynamicChildren=null);const{type:O,ref:ne,shapeFlag:W}=b;switch(O){case Kk:v(k,b,B,A);break;case Ma:j(k,b,B,A);break;case lh:k==null&&M(b,B,A,x);break;case sn:ke(k,b,B,A,Y,z,x,H,U);break;default:W&1?C(k,b,B,A,Y,z,x,H,U):W&6?me(k,b,B,A,Y,z,x,H,U):(W&64||W&128)&&O.process(k,b,B,A,Y,z,x,H,U,ze)}ne!=null&&Y&&m1(ne,k&&k.ref,z,b||k,!b)},v=(k,b,B,A)=>{if(k==null)o(b.el=s(b.children),B,A);else{const Y=b.el=k.el;b.children!==k.children&&l(Y,b.children)}},j=(k,b,B,A)=>{k==null?o(b.el=d(b.children||""),B,A):b.el=k.el},M=(k,b,B,A)=>{[k.el,k.anchor]=D(k.children,b,B,A,k.el,k.anchor)},S=({el:k,anchor:b},B,A)=>{let Y;for(;k&&k!==b;)Y=p(k),o(k,B,A),k=Y;o(b,B,A)},$=({el:k,anchor:b})=>{let B;for(;k&&k!==b;)B=p(k),i(k),k=B;i(b)},C=(k,b,B,A,Y,z,x,H,U)=>{x=x||b.type==="svg",k==null?L(b,B,A,Y,z,x,H,U):V(k,b,Y,z,x,H,U)},L=(k,b,B,A,Y,z,x,H)=>{let U,O;const{type:ne,props:W,shapeFlag:ee,transition:ie,patchFlag:_e,dirs:De}=k;if(k.el&&y!==void 0&&_e===-1)U=k.el=y(k.el);else{if(U=k.el=r(k.type,z,W&&W.is,W),ee&8?c(U,k.children):ee&16&&q(k.children,U,null,A,Y,z&&ne!=="foreignObject",x,H),De&&rr(k,null,A,"created"),W){for(const fe in W)fe!=="value"&&!z0(fe)&&t(U,fe,null,W[fe],z,k.children,A,Y,de);"value"in W&&t(U,"value",null,W.value),(O=W.onVnodeBeforeMount)&&di(O,A,k)}T(U,k,k.scopeId,x,A)}De&&rr(k,null,A,"beforeMount");const we=(!Y||Y&&!Y.pendingBranch)&&ie&&!ie.persisted;we&&ie.beforeEnter(U),o(U,b,B),((O=W&&W.onVnodeMounted)||we||De)&&wu(()=>{O&&di(O,A,k),we&&ie.enter(U),De&&rr(k,null,A,"mounted")},Y)},T=(k,b,B,A,Y)=>{if(B&&f(k,B),A)for(let z=0;z<A.length;z++)f(k,A[z]);if(Y){let z=Y.subTree;if(b===z){const x=Y.vnode;T(k,x,x.scopeId,x.slotScopeIds,Y.parent)}}},q=(k,b,B,A,Y,z,x,H,U=0)=>{for(let O=U;O<k.length;O++){const ne=k[O]=H?ma(k[O]):qi(k[O]);P(null,ne,b,B,A,Y,z,x,H)}},V=(k,b,B,A,Y,z,x)=>{const H=b.el=k.el;let{patchFlag:U,dynamicChildren:O,dirs:ne}=b;U|=k.patchFlag&16;const W=k.props||Sn,ee=b.props||Sn;let ie;B&&sr(B,!1),(ie=ee.onVnodeBeforeUpdate)&&di(ie,B,b,k),ne&&rr(b,k,B,"beforeUpdate"),B&&sr(B,!0);const _e=Y&&b.type!=="foreignObject";if(O?X(k.dynamicChildren,O,H,B,A,_e,z):x||ln(k,b,H,null,B,A,_e,z,!1),U>0){if(U&16)Z(H,b,W,ee,B,A,Y);else if(U&2&&W.class!==ee.class&&t(H,"class",null,ee.class,Y),U&4&&t(H,"style",W.style,ee.style,Y),U&8){const De=b.dynamicProps;for(let we=0;we<De.length;we++){const fe=De[we],un=W[fe],Ln=ee[fe];(Ln!==un||fe==="value")&&t(H,fe,un,Ln,Y,k.children,B,A,de)}}U&1&&k.children!==b.children&&c(H,b.children)}else!x&&O==null&&Z(H,b,W,ee,B,A,Y);((ie=ee.onVnodeUpdated)||ne)&&wu(()=>{ie&&di(ie,B,b,k),ne&&rr(b,k,B,"updated")},A)},X=(k,b,B,A,Y,z,x)=>{for(let H=0;H<b.length;H++){const U=k[H],O=b[H],ne=U.el&&(U.type===sn||!Tm(U,O)||U.shapeFlag&70)?_(U.el):B;P(U,O,ne,null,A,Y,z,x,!0)}},Z=(k,b,B,A,Y,z,x)=>{if(B!==A){for(const H in A){if(z0(H))continue;const U=A[H],O=B[H];U!==O&&H!=="value"&&t(k,H,O,U,x,b.children,Y,z,de)}if(B!==Sn)for(const H in B)!z0(H)&&!(H in A)&&t(k,H,B[H],null,x,b.children,Y,z,de);"value"in A&&t(k,"value",B.value,A.value)}},ke=(k,b,B,A,Y,z,x,H,U)=>{const O=b.el=k?k.el:s(""),ne=b.anchor=k?k.anchor:s("");let{patchFlag:W,dynamicChildren:ee,slotScopeIds:ie}=b;ie&&(H=H?H.concat(ie):ie),k==null?(o(O,B,A),o(ne,B,A),q(b.children,B,ne,Y,z,x,H,U)):W>0&&W&64&&ee&&k.dynamicChildren?(X(k.dynamicChildren,ee,B,Y,z,x,H),(b.key!=null||Y&&b===Y.subTree)&&qk(k,b,!0)):ln(k,b,B,ne,Y,z,x,H,U)},me=(k,b,B,A,Y,z,x,H,U)=>{b.slotScopeIds=H,k==null?b.shapeFlag&512?Y.ctx.activate(b,B,A,x,U):Ye(b,B,A,Y,z,x,U):Se(k,b,U)},Ye=(k,b,B,A,Y,z,x)=>{const H=k.component=qM(k,A,Y);if($b(k)&&(H.ctx.renderer=ze),KM(H),H.asyncDep){if(Y&&Y.registerDep(H,Me),!k.el){const U=H.subTree=he(Ma);j(null,U,b,B)}return}Me(H,k,b,B,Y,z,x)},Se=(k,b,B)=>{const A=b.component=k.component;if(aM(k,b,B))if(A.asyncDep&&!A.asyncResolved){be(A,b,B);return}else A.next=b,eM(A.update),A.update();else b.el=k.el,A.vnode=b},Me=(k,b,B,A,Y,z,x)=>{const H=()=>{if(k.isMounted){let{next:ne,bu:W,u:ee,parent:ie,vnode:_e}=k,De=ne,we;sr(k,!1),ne?(ne.el=_e.el,be(k,ne,x)):ne=_e,W&&ed(W),(we=ne.props&&ne.props.onVnodeBeforeUpdate)&&di(we,ie,ne,_e),sr(k,!0);const fe=sh(k),un=k.subTree;k.subTree=fe,P(un,fe,_(un.el),te(un),k,Y,z),ne.el=fe.el,De===null&&rM(k,fe.el),ee&&wu(ee,Y),(we=ne.props&&ne.props.onVnodeUpdated)&&wu(()=>di(we,ie,ne,_e),Y)}else{let ne;const{el:W,props:ee}=b,{bm:ie,m:_e,parent:De}=k,we=nd(b);if(sr(k,!1),ie&&ed(ie),!we&&(ne=ee&&ee.onVnodeBeforeMount)&&di(ne,De,b),sr(k,!0),W&&Ie){const fe=()=>{k.subTree=sh(k),Ie(W,k.subTree,k,Y,null)};we?b.type.__asyncLoader().then(()=>!k.isUnmounted&&fe()):fe()}else{const fe=k.subTree=sh(k);P(null,fe,B,A,k,Y,z),b.el=fe.el}if(_e&&wu(_e,Y),!we&&(ne=ee&&ee.onVnodeMounted)){const fe=b;wu(()=>di(ne,De,fe),Y)}(b.shapeFlag&256||De&&nd(De.vnode)&&De.vnode.shapeFlag&256)&&k.a&&wu(k.a,Y),k.isMounted=!0,b=B=A=null}},U=k.effect=new Yk(H,()=>Sb(O),k.scope),O=k.update=()=>U.run();O.id=k.uid,sr(k,!0),O()},be=(k,b,B)=>{b.component=k;const A=k.vnode.props;k.vnode=b,k.next=null,EM(k,b.props,A,B),SM(k,b.children,B),$d(),tg(void 0,k.update),Hd()},ln=(k,b,B,A,Y,z,x,H,U=!1)=>{const O=k&&k.children,ne=k?k.shapeFlag:0,W=b.children,{patchFlag:ee,shapeFlag:ie}=b;if(ee>0){if(ee&128){Te(O,W,B,A,Y,z,x,H,U);return}else if(ee&256){Fe(O,W,B,A,Y,z,x,H,U);return}}ie&8?(ne&16&&de(O,Y,z),W!==O&&c(B,W)):ne&16?ie&16?Te(O,W,B,A,Y,z,x,H,U):de(O,Y,z,!0):(ne&8&&c(B,""),ie&16&&q(W,B,A,Y,z,x,H,U))},Fe=(k,b,B,A,Y,z,x,H,U)=>{k=k||Qs,b=b||Qs;const O=k.length,ne=b.length,W=Math.min(O,ne);let ee;for(ee=0;ee<W;ee++){const ie=b[ee]=U?ma(b[ee]):qi(b[ee]);P(k[ee],ie,B,null,Y,z,x,H,U)}O>ne?de(k,Y,z,!0,!1,W):q(b,B,A,Y,z,x,H,U,W)},Te=(k,b,B,A,Y,z,x,H,U)=>{let O=0;const ne=b.length;let W=k.length-1,ee=ne-1;for(;O<=W&&O<=ee;){const ie=k[O],_e=b[O]=U?ma(b[O]):qi(b[O]);if(Tm(ie,_e))P(ie,_e,B,null,Y,z,x,H,U);else break;O++}for(;O<=W&&O<=ee;){const ie=k[W],_e=b[ee]=U?ma(b[ee]):qi(b[ee]);if(Tm(ie,_e))P(ie,_e,B,null,Y,z,x,H,U);else break;W--,ee--}if(O>W){if(O<=ee){const ie=ee+1,_e=ie<ne?b[ie].el:A;for(;O<=ee;)P(null,b[O]=U?ma(b[O]):qi(b[O]),B,_e,Y,z,x,H,U),O++}}else if(O>ee)for(;O<=W;)Ge(k[O],Y,z,!0),O++;else{const ie=O,_e=O,De=new Map;for(O=_e;O<=ee;O++){const cn=b[O]=U?ma(b[O]):qi(b[O]);cn.key!=null&&De.set(cn.key,O)}let we,fe=0;const un=ee-_e+1;let Ln=!1,Cu=0;const Un=new Array(un);for(O=0;O<un;O++)Un[O]=0;for(O=ie;O<=W;O++){const cn=k[O];if(fe>=un){Ge(cn,Y,z,!0);continue}let En;if(cn.key!=null)En=De.get(cn.key);else for(we=_e;we<=ee;we++)if(Un[we-_e]===0&&Tm(cn,b[we])){En=we;break}En===void 0?Ge(cn,Y,z,!0):(Un[En-_e]=O+1,En>=Cu?Cu=En:Ln=!0,P(cn,b[En],B,null,Y,z,x,H,U),fe++)}const ro=Ln?YM(Un):Qs;for(we=ro.length-1,O=un-1;O>=0;O--){const cn=_e+O,En=b[cn],ki=cn+1<ne?b[cn+1].el:A;Un[O]===0?P(null,En,B,ki,Y,z,x,H,U):Ln&&(we<0||O!==ro[we]?Ce(En,B,ki,2):we--)}}},Ce=(k,b,B,A,Y=null)=>{const{el:z,type:x,transition:H,children:U,shapeFlag:O}=k;if(O&6){Ce(k.component.subTree,b,B,A);return}if(O&128){k.suspense.move(b,B,A);return}if(O&64){x.move(k,b,B,ze);return}if(x===sn){o(z,b,B);for(let W=0;W<U.length;W++)Ce(U[W],b,B,A);o(k.anchor,b,B);return}if(x===lh){S(k,b,B);return}if(A!==2&&O&1&&H)if(A===0)H.beforeEnter(z),o(z,b,B),wu(()=>H.enter(z),Y);else{const{leave:W,delayLeave:ee,afterLeave:ie}=H,_e=()=>o(z,b,B),De=()=>{W(z,()=>{_e(),ie&&ie()})};ee?ee(z,_e,De):De()}else o(z,b,B)},Ge=(k,b,B,A=!1,Y=!1)=>{const{type:z,props:x,ref:H,children:U,dynamicChildren:O,shapeFlag:ne,patchFlag:W,dirs:ee}=k;if(H!=null&&m1(H,null,B,k,!0),ne&256){b.ctx.deactivate(k);return}const ie=ne&1&&ee,_e=!nd(k);let De;if(_e&&(De=x&&x.onVnodeBeforeUnmount)&&di(De,b,k),ne&6)ye(k.component,B,A);else{if(ne&128){k.suspense.unmount(B,A);return}ie&&rr(k,null,b,"beforeUnmount"),ne&64?k.type.remove(k,b,B,Y,ze,A):O&&(z!==sn||W>0&&W&64)?de(O,b,B,!1,!0):(z===sn&&W&384||!Y&&ne&16)&&de(U,b,B),A&&rn(k)}(_e&&(De=x&&x.onVnodeUnmounted)||ie)&&wu(()=>{De&&di(De,b,k),ie&&rr(k,null,b,"unmounted")},B)},rn=k=>{const{type:b,el:B,anchor:A,transition:Y}=k;if(b===sn){Q(B,A);return}if(b===lh){$(k);return}const z=()=>{i(B),Y&&!Y.persisted&&Y.afterLeave&&Y.afterLeave()};if(k.shapeFlag&1&&Y&&!Y.persisted){const{leave:x,delayLeave:H}=Y,U=()=>x(B,z);H?H(k.el,z,U):U()}else z()},Q=(k,b)=>{let B;for(;k!==b;)B=p(k),i(k),k=B;i(b)},ye=(k,b,B)=>{const{bum:A,scope:Y,update:z,subTree:x,um:H}=k;A&&ed(A),Y.stop(),z&&(z.active=!1,Ge(x,k,b,B)),H&&wu(H,b),wu(()=>{k.isUnmounted=!0},b),b&&b.pendingBranch&&!b.isUnmounted&&k.asyncDep&&!k.asyncResolved&&k.suspenseId===b.pendingId&&(b.deps--,b.deps===0&&b.resolve())},de=(k,b,B,A=!1,Y=!1,z=0)=>{for(let x=z;x<k.length;x++)Ge(k[x],b,B,A,Y)},te=k=>k.shapeFlag&6?te(k.component.subTree):k.shapeFlag&128?k.suspense.next():p(k.anchor||k.el),en=(k,b,B)=>{k==null?b._vnode&&Ge(b._vnode,null,null,!0):P(b._vnode||null,k,b,null,null,null,B),Ab(),b._vnode=k},ze={p:P,um:Ge,m:Ce,r:rn,mt:Ye,mc:q,pc:ln,pbc:X,n:te,o:e};let ce,Ie;return n&&([ce,Ie]=n(ze)),{render:en,hydrate:ce,createApp:CM(en,ce)}}function sr({effect:e,update:n},u){e.allowRecurse=n.allowRecurse=u}function qk(e,n,u=!1){const o=e.children,i=n.children;if(He(o)&&He(i))for(let t=0;t<o.length;t++){const r=o[t];let s=i[t];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=i[t]=ma(i[t]),s.el=r.el),u||qk(r,s))}}function YM(e){const n=e.slice(),u=[0];let o,i,t,r,s;const d=e.length;for(o=0;o<d;o++){const l=e[o];if(l!==0){if(i=u[u.length-1],e[i]<l){n[o]=i,u.push(o);continue}for(t=0,r=u.length-1;t<r;)s=t+r>>1,e[u[s]]<l?t=s+1:r=s;l<e[u[t]]&&(t>0&&(n[o]=u[t-1]),u[t]=o)}}for(t=u.length,r=u[t-1];t-- >0;)u[t]=r,r=n[r];return u}const IM=e=>e.__isTeleport,Qm=e=>e&&(e.disabled||e.disabled===""),L4=e=>typeof SVGElement!="undefined"&&e instanceof SVGElement,l1=(e,n)=>{const u=e&&e.to;return Jn(u)?n?n(u):null:u},OM={__isTeleport:!0,process(e,n,u,o,i,t,r,s,d,l){const{mc:c,pc:_,pbc:p,o:{insert:f,querySelector:y,createText:D,createComment:P}}=l,v=Qm(n.props);let{shapeFlag:j,children:M,dynamicChildren:S}=n;if(e==null){const $=n.el=D(""),C=n.anchor=D("");f($,u,o),f(C,u,o);const L=n.target=l1(n.props,y),T=n.targetAnchor=D("");L&&(f(T,L),r=r||L4(L));const q=(V,X)=>{j&16&&c(M,V,X,i,t,r,s,d)};v?q(u,C):L&&q(L,T)}else{n.el=e.el;const $=n.anchor=e.anchor,C=n.target=e.target,L=n.targetAnchor=e.targetAnchor,T=Qm(e.props),q=T?u:C,V=T?$:L;if(r=r||L4(C),S?(p(e.dynamicChildren,S,q,i,t,r,s),qk(e,n,!0)):d||_(e,n,q,V,i,t,r,s,!1),v)T||f0(n,u,$,l,1);else if((n.props&&n.props.to)!==(e.props&&e.props.to)){const X=n.target=l1(n.props,y);X&&f0(n,X,null,l,0)}else T&&f0(n,C,L,l,1)}},remove(e,n,u,o,{um:i,o:{remove:t}},r){const{shapeFlag:s,children:d,anchor:l,targetAnchor:c,target:_,props:p}=e;if(_&&t(c),(r||!Qm(p))&&(t(l),s&16))for(let f=0;f<d.length;f++){const y=d[f];i(y,n,u,!0,!!y.dynamicChildren)}},move:f0,hydrate:NM};function f0(e,n,u,{o:{insert:o},m:i},t=2){t===0&&o(e.targetAnchor,n,u);const{el:r,anchor:s,shapeFlag:d,children:l,props:c}=e,_=t===2;if(_&&o(r,n,u),(!_||Qm(c))&&d&16)for(let p=0;p<l.length;p++)i(l[p],n,u,2);_&&o(s,n,u)}function NM(e,n,u,o,i,t,{o:{nextSibling:r,parentNode:s,querySelector:d}},l){const c=n.target=l1(n.props,d);if(c){const _=c._lpa||c.firstChild;if(n.shapeFlag&16)if(Qm(n.props))n.anchor=l(r(e),n,s(e),u,o,i,t),n.targetAnchor=_;else{n.anchor=r(e);let p=_;for(;p;)if(p=r(p),p&&p.nodeType===8&&p.data==="teleport anchor"){n.targetAnchor=p,c._lpa=n.targetAnchor&&r(n.targetAnchor);break}l(_,n,c,u,o,i,t)}}return n.anchor&&r(n.anchor)}const RM=OM,sn=Symbol(void 0),Kk=Symbol(void 0),Ma=Symbol(void 0),lh=Symbol(void 0),Zm=[];let xi=null;function J(e=!1){Zm.push(xi=e?null:[])}function $M(){Zm.pop(),xi=Zm[Zm.length-1]||null}let vl=1;function C4(e){vl+=e}function n9(e){return e.dynamicChildren=vl>0?xi||Qs:null,$M(),vl>0&&xi&&xi.push(e),e}function oe(e,n,u,o,i,t){return n9(R(e,n,u,o,i,t,!0))}function Vn(e,n,u,o,i){return n9(he(e,n,u,o,i,!0))}function Bl(e){return e?e.__v_isVNode===!0:!1}function Tm(e,n){return e.type===n.type&&e.key===n.key}const dg="__vInternal",u9=({key:e})=>e!=null?e:null,V0=({ref:e,ref_key:n,ref_for:u})=>e!=null?Jn(e)||qn(e)||Ze(e)?{i:Iu,r:e,k:n,f:!!u}:e:null;function R(e,n=null,u=null,o=0,i=null,t=e===sn?0:1,r=!1,s=!1){const d={__v_isVNode:!0,__v_skip:!0,type:e,props:n,key:n&&u9(n),ref:n&&V0(n),scopeId:Ib,slotScopeIds:null,children:u,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:t,patchFlag:o,dynamicProps:i,dynamicChildren:null,appContext:null};return s?(Gk(d,u),t&128&&e.normalize(d)):u&&(d.shapeFlag|=Jn(u)?8:16),vl>0&&!r&&xi&&(d.patchFlag>0||t&6)&&d.patchFlag!==32&&xi.push(d),d}const he=HM;function HM(e,n=null,u=null,o=0,i=null,t=!1){if((!e||e===Ub)&&(e=Ma),Bl(e)){const s=$r(e,n,!0);return u&&Gk(s,u),vl>0&&!t&&xi&&(s.shapeFlag&6?xi[xi.indexOf(e)]=s:xi.push(s)),s.patchFlag|=-2,s}if(QM(e)&&(e=e.__vccOpts),n){n=UM(n);let{class:s,style:d}=n;s&&!Jn(s)&&(n.class=I(s)),Xn(d)&&(vb(d)&&!He(d)&&(d=to({},d)),n.style=tu(d))}const r=Jn(e)?1:Ob(e)?128:IM(e)?64:Xn(e)?4:Ze(e)?2:0;return R(e,n,u,o,i,r,t,!0)}function UM(e){return e?vb(e)||dg in e?to({},e):e:null}function $r(e,n,u=!1){const{props:o,ref:i,patchFlag:t,children:r}=e,s=n?zM(o||{},n):o;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&u9(s),ref:n&&n.ref?u&&i?He(i)?i.concat(V0(n)):[i,V0(n)]:V0(n):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:r,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:n&&e.type!==sn?t===-1?16:t|16:t,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&$r(e.ssContent),ssFallback:e.ssFallback&&$r(e.ssFallback),el:e.el,anchor:e.anchor}}function mc(e=" ",n=0){return he(Kk,null,e,n)}function wn(e="",n=!1){return n?(J(),Vn(Ma,null,e)):he(Ma,null,e)}function qi(e){return e==null||typeof e=="boolean"?he(Ma):He(e)?he(sn,null,e.slice()):typeof e=="object"?ma(e):he(Kk,null,String(e))}function ma(e){return e.el===null||e.memo?e:$r(e)}function Gk(e,n){let u=0;const{shapeFlag:o}=e;if(n==null)n=null;else if(He(n))u=16;else if(typeof n=="object")if(o&65){const i=n.default;i&&(i._c&&(i._d=!1),Gk(e,i()),i._c&&(i._d=!0));return}else{u=32;const i=n._;!i&&!(dg in n)?n._ctx=Iu:i===3&&Iu&&(Iu.slots._===1?n._=1:(n._=2,e.patchFlag|=1024))}else Ze(n)?(n={default:n,_ctx:Iu},u=32):(n=String(n),o&64?(u=16,n=[mc(n)]):u=8);e.children=n,e.shapeFlag|=u}function zM(...e){const n={};for(let u=0;u<e.length;u++){const o=e[u];for(const i in o)if(i==="class")n.class!==o.class&&(n.class=I([n.class,o.class]));else if(i==="style")n.style=tu([n.style,o.style]);else if(eg(i)){const t=n[i],r=o[i];r&&t!==r&&!(He(t)&&t.includes(r))&&(n[i]=t?[].concat(t,r):r)}else i!==""&&(n[i]=o[i])}return n}function di(e,n,u,o=null){Ii(e,n,7,[u,o])}const VM=e9();let WM=0;function qM(e,n,u){const o=e.type,i=(n?n.appContext:e.appContext)||VM,t={uid:WM++,vnode:e,type:o,parent:n,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new cb(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:n?n.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Jb(o,i),emitsOptions:Yb(o,i),emit:null,emitted:null,propsDefaults:Sn,inheritAttrs:o.inheritAttrs,ctx:Sn,data:Sn,props:Sn,attrs:Sn,slots:Sn,refs:Sn,setupState:Sn,setupContext:null,suspense:u,suspenseId:u?u.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return t.ctx={_:t},t.root=n?n.root:t,t.emit=oM.bind(null,t),e.ce&&e.ce(t),t}let hu=null;const Ud=()=>hu||Iu,_d=e=>{hu=e,e.scope.on()},Pr=()=>{hu&&hu.scope.off(),hu=null};function o9(e){return e.vnode.shapeFlag&4}let Pl=!1;function KM(e,n=!1){Pl=n;const{props:u,children:o}=e.vnode,i=o9(e);PM(e,u,i,n),TM(e,o);const t=i?GM(e,n):void 0;return Pl=!1,t}function GM(e,n){const u=e.type;e.accessCache=Object.create(null),e.proxy=ld(new Proxy(e.ctx,bM));const{setup:o}=u;if(o){const i=e.setupContext=o.length>1?XM(e):null;_d(e),$d();const t=Fa(o,e,0,[e.props,i]);if(Hd(),Pr(),db(t)){if(t.then(Pr,Pr),n)return t.then(r=>{A4(e,r,n)}).catch(r=>{ig(r,e,0)});e.asyncDep=t}else A4(e,t,n)}else i9(e,n)}function A4(e,n,u){Ze(n)?e.type.__ssrInlineRender?e.ssrRender=n:e.render=n:Xn(n)&&(e.setupState=Mb(n)),i9(e,u)}let x4;function i9(e,n,u){const o=e.type;if(!e.render){if(!n&&x4&&!o.render){const i=o.template;if(i){const{isCustomElement:t,compilerOptions:r}=e.appContext.config,{delimiters:s,compilerOptions:d}=o,l=to(to({isCustomElement:t,delimiters:s},r),d);o.render=x4(i,l)}}e.render=o.render||Yi}_d(e),$d(),wM(e),Hd(),Pr()}function JM(e){return new Proxy(e.attrs,{get(n,u){return zo(e,"get","$attrs"),n[u]}})}function XM(e){const n=o=>{e.exposed=o||{}};let u;return{get attrs(){return u||(u=JM(e))},slots:e.slots,emit:e.emit,expose:n}}function mg(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Mb(ld(e.exposed)),{get(n,u){if(u in n)return n[u];if(u in l_)return l_[u](e)}}))}function c1(e){return Ze(e)&&e.displayName||e.name}function QM(e){return Ze(e)&&"__vccOpts"in e}const Ne=(e,n)=>XE(e,n,Pl);function el(e,n,u){const o=arguments.length;return o===2?Xn(n)&&!He(n)?Bl(n)?he(e,null,[n]):he(e,n):he(e,null,n):(o>3?u=Array.prototype.slice.call(arguments,2):o===3&&Bl(u)&&(u=[u]),he(e,n,u))}const ZM="3.2.35",e8="http://www.w3.org/2000/svg",pr=typeof document!="undefined"?document:null,Y4=pr&&pr.createElement("template"),n8={insert:(e,n,u)=>{n.insertBefore(e,u||null)},remove:e=>{const n=e.parentNode;n&&n.removeChild(e)},createElement:(e,n,u,o)=>{const i=n?pr.createElementNS(e8,e):pr.createElement(e,u?{is:u}:void 0);return e==="select"&&o&&o.multiple!=null&&i.setAttribute("multiple",o.multiple),i},createText:e=>pr.createTextNode(e),createComment:e=>pr.createComment(e),setText:(e,n)=>{e.nodeValue=n},setElementText:(e,n)=>{e.textContent=n},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>pr.querySelector(e),setScopeId(e,n){e.setAttribute(n,"")},cloneNode(e){const n=e.cloneNode(!0);return"_value"in e&&(n._value=e._value),n},insertStaticContent(e,n,u,o,i,t){const r=u?u.previousSibling:n.lastChild;if(i&&(i===t||i.nextSibling))for(;n.insertBefore(i.cloneNode(!0),u),!(i===t||!(i=i.nextSibling)););else{Y4.innerHTML=o?`<svg>${e}</svg>`:e;const s=Y4.content;if(o){const d=s.firstChild;for(;d.firstChild;)s.appendChild(d.firstChild);s.removeChild(d)}n.insertBefore(s,u)}return[r?r.nextSibling:n.firstChild,u?u.previousSibling:n.lastChild]}};function u8(e,n,u){const o=e._vtc;o&&(n=(n?[n,...o]:[...o]).join(" ")),n==null?e.removeAttribute("class"):u?e.setAttribute("class",n):e.className=n}function o8(e,n,u){const o=e.style,i=Jn(u);if(u&&!i){for(const t in u)_1(o,t,u[t]);if(n&&!Jn(n))for(const t in n)u[t]==null&&_1(o,t,"")}else{const t=o.display;i?n!==u&&(o.cssText=u):n&&e.removeAttribute("style"),"_vod"in e&&(o.display=t)}}const I4=/\s*!important$/;function _1(e,n,u){if(He(u))u.forEach(o=>_1(e,n,o));else if(u==null&&(u=""),n.startsWith("--"))e.setProperty(n,u);else{const o=i8(e,n);I4.test(u)?e.setProperty(ls(o),u.replace(I4,""),"important"):e[o]=u}}const O4=["Webkit","Moz","ms"],ch={};function i8(e,n){const u=ch[n];if(u)return u;let o=et(n);if(o!=="filter"&&o in e)return ch[n]=o;o=ug(o);for(let i=0;i<O4.length;i++){const t=O4[i]+o;if(t in e)return ch[n]=t}return n}const N4="http://www.w3.org/1999/xlink";function t8(e,n,u,o,i){if(o&&n.startsWith("xlink:"))u==null?e.removeAttributeNS(N4,n.slice(6,n.length)):e.setAttributeNS(N4,n,u);else{const t=aE(n);u==null||t&&!rb(u)?e.removeAttribute(n):e.setAttribute(n,t?"":u)}}function a8(e,n,u,o,i,t,r){if(n==="innerHTML"||n==="textContent"){o&&r(o,i,t),e[n]=u==null?"":u;return}if(n==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=u;const d=u==null?"":u;(e.value!==d||e.tagName==="OPTION")&&(e.value=d),u==null&&e.removeAttribute(n);return}let s=!1;if(u===""||u==null){const d=typeof e[n];d==="boolean"?u=rb(u):u==null&&d==="string"?(u="",s=!0):d==="number"&&(u=0,s=!0)}try{e[n]=u}catch{}s&&e.removeAttribute(n)}const[t9,r8]=(()=>{let e=Date.now,n=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(e=()=>performance.now());const u=navigator.userAgent.match(/firefox\/(\d+)/i);n=!!(u&&Number(u[1])<=53)}return[e,n]})();let g1=0;const s8=Promise.resolve(),d8=()=>{g1=0},m8=()=>g1||(s8.then(d8),g1=t9());function Ft(e,n,u,o){e.addEventListener(n,u,o)}function l8(e,n,u,o){e.removeEventListener(n,u,o)}function c8(e,n,u,o,i=null){const t=e._vei||(e._vei={}),r=t[n];if(o&&r)r.value=o;else{const[s,d]=_8(n);if(o){const l=t[n]=g8(o,i);Ft(e,s,l,d)}else r&&(l8(e,s,r,d),t[n]=void 0)}}const R4=/(?:Once|Passive|Capture)$/;function _8(e){let n;if(R4.test(e)){n={};let u;for(;u=e.match(R4);)e=e.slice(0,e.length-u[0].length),n[u[0].toLowerCase()]=!0}return[ls(e.slice(2)),n]}function g8(e,n){const u=o=>{const i=o.timeStamp||t9();(r8||i>=u.attached-1)&&Ii(p8(o,u.value),n,5,[o])};return u.value=e,u.attached=m8(),u}function p8(e,n){if(He(n)){const u=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{u.call(e),e._stopped=!0},n.map(o=>i=>!i._stopped&&o&&o(i))}else return n}const $4=/^on[a-z]/,h8=(e,n,u,o,i=!1,t,r,s,d)=>{n==="class"?u8(e,o,i):n==="style"?o8(e,u,o):eg(n)?Lk(n)||c8(e,n,u,o,r):(n[0]==="."?(n=n.slice(1),!0):n[0]==="^"?(n=n.slice(1),!1):k8(e,n,o,i))?a8(e,n,o,t,r,s,d):(n==="true-value"?e._trueValue=o:n==="false-value"&&(e._falseValue=o),t8(e,n,o,i))};function k8(e,n,u,o){return o?!!(n==="innerHTML"||n==="textContent"||n in e&&$4.test(n)&&Ze(u)):n==="spellcheck"||n==="draggable"||n==="translate"||n==="form"||n==="list"&&e.tagName==="INPUT"||n==="type"&&e.tagName==="TEXTAREA"||$4.test(n)&&Jn(u)?!1:n in e}const Ta=e=>{const n=e.props["onUpdate:modelValue"]||!1;return He(n)?u=>ed(n,u):n};function f8(e){e.target.composing=!0}function H4(e){const n=e.target;n.composing&&(n.composing=!1,n.dispatchEvent(new Event("input")))}const gd={created(e,{modifiers:{lazy:n,trim:u,number:o}},i){e._assign=Ta(i);const t=o||i.props&&i.props.type==="number";Ft(e,n?"change":"input",r=>{if(r.target.composing)return;let s=e.value;u&&(s=s.trim()),t&&(s=s_(s)),e._assign(s)}),u&&Ft(e,"change",()=>{e.value=e.value.trim()}),n||(Ft(e,"compositionstart",f8),Ft(e,"compositionend",H4),Ft(e,"change",H4))},mounted(e,{value:n}){e.value=n==null?"":n},beforeUpdate(e,{value:n,modifiers:{lazy:u,trim:o,number:i}},t){if(e._assign=Ta(t),e.composing||document.activeElement===e&&e.type!=="range"&&(u||o&&e.value.trim()===n||(i||e.type==="number")&&s_(e.value)===n))return;const r=n==null?"":n;e.value!==r&&(e.value=r)}},y8={deep:!0,created(e,n,u){e._assign=Ta(u),Ft(e,"change",()=>{const o=e._modelValue,i=pd(e),t=e.checked,r=e._assign;if(He(o)){const s=Sk(o,i),d=s!==-1;if(t&&!d)r(o.concat(i));else if(!t&&d){const l=[...o];l.splice(s,1),r(l)}}else if(Rd(o)){const s=new Set(o);t?s.add(i):s.delete(i),r(s)}else r(a9(e,t))})},mounted:U4,beforeUpdate(e,n,u){e._assign=Ta(u),U4(e,n,u)}};function U4(e,{value:n,oldValue:u},o){e._modelValue=n,He(n)?e.checked=Sk(n,o.props.value)>-1:Rd(n)?e.checked=n.has(o.props.value):n!==u&&(e.checked=Rr(n,a9(e,!0)))}const F8={created(e,{value:n},u){e.checked=Rr(n,u.props.value),e._assign=Ta(u),Ft(e,"change",()=>{e._assign(pd(e))})},beforeUpdate(e,{value:n,oldValue:u},o){e._assign=Ta(o),n!==u&&(e.checked=Rr(n,o.props.value))}},b8={deep:!0,created(e,{value:n,modifiers:{number:u}},o){const i=Rd(n);Ft(e,"change",()=>{const t=Array.prototype.filter.call(e.options,r=>r.selected).map(r=>u?s_(pd(r)):pd(r));e._assign(e.multiple?i?new Set(t):t:t[0])}),e._assign=Ta(o)},mounted(e,{value:n}){z4(e,n)},beforeUpdate(e,n,u){e._assign=Ta(u)},updated(e,{value:n}){z4(e,n)}};function z4(e,n){const u=e.multiple;if(!(u&&!He(n)&&!Rd(n))){for(let o=0,i=e.options.length;o<i;o++){const t=e.options[o],r=pd(t);if(u)He(n)?t.selected=Sk(n,r)>-1:t.selected=n.has(r);else if(Rr(pd(t),n)){e.selectedIndex!==o&&(e.selectedIndex=o);return}}!u&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function pd(e){return"_value"in e?e._value:e.value}function a9(e,n){const u=n?"_trueValue":"_falseValue";return u in e?e[u]:n}const p1={created(e,n,u){y0(e,n,u,null,"created")},mounted(e,n,u){y0(e,n,u,null,"mounted")},beforeUpdate(e,n,u,o){y0(e,n,u,o,"beforeUpdate")},updated(e,n,u,o){y0(e,n,u,o,"updated")}};function w8(e,n){switch(e){case"SELECT":return b8;case"TEXTAREA":return gd;default:switch(n){case"checkbox":return y8;case"radio":return F8;default:return gd}}}function y0(e,n,u,o,i){const r=w8(e.tagName,u.props&&u.props.type)[i];r&&r(e,n,u,o)}const j8=["ctrl","shift","alt","meta"],D8={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,n)=>j8.some(u=>e[`${u}Key`]&&!n.includes(u))},Hr=(e,n)=>(u,...o)=>{for(let i=0;i<n.length;i++){const t=D8[n[i]];if(t&&t(u,n))return}return e(u,...o)},v8={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},h1=(e,n)=>u=>{if(!("key"in u))return;const o=ls(u.key);if(n.some(i=>i===o||v8[i]===o))return e(u)},ud={beforeMount(e,{value:n},{transition:u}){e._vod=e.style.display==="none"?"":e.style.display,u&&n?u.beforeEnter(e):Sm(e,n)},mounted(e,{value:n},{transition:u}){u&&n&&u.enter(e)},updated(e,{value:n,oldValue:u},{transition:o}){!n!=!u&&(o?n?(o.beforeEnter(e),Sm(e,!0),o.enter(e)):o.leave(e,()=>{Sm(e,!1)}):Sm(e,n))},beforeUnmount(e,{value:n}){Sm(e,n)}};function Sm(e,n){e.style.display=n?e._vod:"none"}const B8=to({patchProp:h8},n8);let V4;function P8(){return V4||(V4=AM(B8))}const E8=(...e)=>{const n=P8().createApp(...e),{mount:u}=n;return n.mount=o=>{const i=M8(o);if(!i)return;const t=n._component;!Ze(t)&&!t.render&&!t.template&&(t.template=i.innerHTML),i.innerHTML="";const r=u(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),r},n};function M8(e){return Jn(e)?document.querySelector(e):e}var T8=!1;/*!
  * pinia v2.0.14
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let r9;const lg=e=>r9=e,s9=Symbol();function k1(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var nl;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(nl||(nl={}));function S8(){const e=_b(!0),n=e.run(()=>Pe({}));let u=[],o=[];const i=ld({install(t){lg(i),i._a=t,t.provide(s9,i),t.config.globalProperties.$pinia=i,o.forEach(r=>u.push(r)),o=[]},use(t){return!this._a&&!T8?o.push(t):u.push(t),this},_p:u,_a:null,_e:e,_s:new Map,state:n});return i}const d9=()=>{};function W4(e,n,u,o=d9){e.push(n);const i=()=>{const t=e.indexOf(n);t>-1&&(e.splice(t,1),o())};return!u&&Ud()&&sg(i),i}function Ns(e,...n){e.slice().forEach(u=>{u(...n)})}function f1(e,n){for(const u in n){if(!n.hasOwnProperty(u))continue;const o=n[u],i=e[u];k1(i)&&k1(o)&&e.hasOwnProperty(u)&&!qn(o)&&!ya(o)?e[u]=f1(i,o):e[u]=o}return e}const L8=Symbol();function C8(e){return!k1(e)||!e.hasOwnProperty(L8)}const{assign:ft}=Object;function A8(e){return!!(qn(e)&&e.effect)}function x8(e,n,u,o){const{state:i,actions:t,getters:r}=n,s=u.state.value[e];let d;function l(){s||(u.state.value[e]=i?i():{});const c=ac(u.state.value[e]);return ft(c,t,Object.keys(r||{}).reduce((_,p)=>(_[p]=ld(Ne(()=>{lg(u);const f=u._s.get(e);return r[p].call(f,f)})),_),{}))}return d=m9(e,l,n,u,o,!0),d.$reset=function(){const _=i?i():{};this.$patch(p=>{ft(p,_)})},d}function m9(e,n,u={},o,i,t){let r;const s=ft({actions:{}},u),d={deep:!0};let l,c,_=ld([]),p=ld([]),f;const y=o.state.value[e];!t&&!y&&(o.state.value[e]={}),Pe({});let D;function P(L){let T;l=c=!1,typeof L=="function"?(L(o.state.value[e]),T={type:nl.patchFunction,storeId:e,events:f}):(f1(o.state.value[e],L),T={type:nl.patchObject,payload:L,storeId:e,events:f});const q=D=Symbol();Uk().then(()=>{D===q&&(l=!0)}),c=!0,Ns(_,T,o.state.value[e])}const v=d9;function j(){r.stop(),_=[],p=[],o._s.delete(e)}function M(L,T){return function(){lg(o);const q=Array.from(arguments),V=[],X=[];function Z(Ye){V.push(Ye)}function ke(Ye){X.push(Ye)}Ns(p,{args:q,name:L,store:$,after:Z,onError:ke});let me;try{me=T.apply(this&&this.$id===e?this:$,q)}catch(Ye){throw Ns(X,Ye),Ye}return me instanceof Promise?me.then(Ye=>(Ns(V,Ye),Ye)).catch(Ye=>(Ns(X,Ye),Promise.reject(Ye))):(Ns(V,me),me)}}const S={_p:o,$id:e,$onAction:W4.bind(null,p),$patch:P,$reset:v,$subscribe(L,T={}){const q=W4(_,L,T.detached,()=>V()),V=r.run(()=>vn(()=>o.state.value[e],X=>{(T.flush==="sync"?c:l)&&L({storeId:e,type:nl.direct,events:f},X)},ft({},d,T)));return q},$dispose:j},$=Cn(ft({},S));o._s.set(e,$);const C=o._e.run(()=>(r=_b(),r.run(()=>n())));for(const L in C){const T=C[L];if(qn(T)&&!A8(T)||ya(T))t||(y&&C8(T)&&(qn(T)?T.value=y[L]:f1(T,y[L])),o.state.value[e][L]=T);else if(typeof T=="function"){const q=M(L,T);C[L]=q,s.actions[L]=T}}return ft($,C),ft(jn($),C),Object.defineProperty($,"$state",{get:()=>o.state.value[e],set:L=>{P(T=>{ft(T,L)})}}),o._p.forEach(L=>{ft($,r.run(()=>L({store:$,app:o._a,pinia:o,options:s})))}),y&&t&&u.hydrate&&u.hydrate($.$state,y),l=!0,c=!0,$}function Jk(e,n,u){let o,i;const t=typeof n=="function";typeof e=="string"?(o=e,i=t?u:n):(i=e,o=e.id);function r(s,d){const l=Ud();return s=s||l&&oo(s9),s&&lg(s),s=r9,s._s.has(o)||(t?m9(o,n,i,s):x8(o,i,s)),s._s.get(o)}return r.$id=o,r}/*!
  * vue-router v4.0.15
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const l9=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",zd=e=>l9?Symbol(e):"_vr_"+e,Y8=zd("rvlm"),q4=zd("rvd"),cg=zd("r"),Xk=zd("rl"),y1=zd("rvl"),Vs=typeof window!="undefined";function I8(e){return e.__esModule||l9&&e[Symbol.toStringTag]==="Module"}const Tn=Object.assign;function _h(e,n){const u={};for(const o in n){const i=n[o];u[o]=Array.isArray(i)?i.map(e):e(i)}return u}const ul=()=>{},O8=/\/$/,N8=e=>e.replace(O8,"");function gh(e,n,u="/"){let o,i={},t="",r="";const s=n.indexOf("?"),d=n.indexOf("#",s>-1?s:0);return s>-1&&(o=n.slice(0,s),t=n.slice(s+1,d>-1?d:n.length),i=e(t)),d>-1&&(o=o||n.slice(0,d),r=n.slice(d,n.length)),o=U8(o!=null?o:n,u),{fullPath:o+(t&&"?")+t+r,path:o,query:i,hash:r}}function R8(e,n){const u=n.query?e(n.query):"";return n.path+(u&&"?")+u+(n.hash||"")}function K4(e,n){return!n||!e.toLowerCase().startsWith(n.toLowerCase())?e:e.slice(n.length)||"/"}function $8(e,n,u){const o=n.matched.length-1,i=u.matched.length-1;return o>-1&&o===i&&hd(n.matched[o],u.matched[i])&&c9(n.params,u.params)&&e(n.query)===e(u.query)&&n.hash===u.hash}function hd(e,n){return(e.aliasOf||e)===(n.aliasOf||n)}function c9(e,n){if(Object.keys(e).length!==Object.keys(n).length)return!1;for(const u in e)if(!H8(e[u],n[u]))return!1;return!0}function H8(e,n){return Array.isArray(e)?G4(e,n):Array.isArray(n)?G4(n,e):e===n}function G4(e,n){return Array.isArray(n)?e.length===n.length&&e.every((u,o)=>u===n[o]):e.length===1&&e[0]===n}function U8(e,n){if(e.startsWith("/"))return e;if(!e)return n;const u=n.split("/"),o=e.split("/");let i=u.length-1,t,r;for(t=0;t<o.length;t++)if(r=o[t],!(i===1||r==="."))if(r==="..")i--;else break;return u.slice(0,i).join("/")+"/"+o.slice(t-(t===o.length?1:0)).join("/")}var El;(function(e){e.pop="pop",e.push="push"})(El||(El={}));var ol;(function(e){e.back="back",e.forward="forward",e.unknown=""})(ol||(ol={}));function z8(e){if(!e)if(Vs){const n=document.querySelector("base");e=n&&n.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),N8(e)}const V8=/^[^#]+#/;function W8(e,n){return e.replace(V8,"#")+n}function q8(e,n){const u=document.documentElement.getBoundingClientRect(),o=e.getBoundingClientRect();return{behavior:n.behavior,left:o.left-u.left-(n.left||0),top:o.top-u.top-(n.top||0)}}const _g=()=>({left:window.pageXOffset,top:window.pageYOffset});function K8(e){let n;if("el"in e){const u=e.el,o=typeof u=="string"&&u.startsWith("#"),i=typeof u=="string"?o?document.getElementById(u.slice(1)):document.querySelector(u):u;if(!i)return;n=q8(i,e)}else n=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(n):window.scrollTo(n.left!=null?n.left:window.pageXOffset,n.top!=null?n.top:window.pageYOffset)}function J4(e,n){return(history.state?history.state.position-n:-1)+e}const F1=new Map;function G8(e,n){F1.set(e,n)}function J8(e){const n=F1.get(e);return F1.delete(e),n}let X8=()=>location.protocol+"//"+location.host;function _9(e,n){const{pathname:u,search:o,hash:i}=n,t=e.indexOf("#");if(t>-1){let s=i.includes(e.slice(t))?e.slice(t).length:1,d=i.slice(s);return d[0]!=="/"&&(d="/"+d),K4(d,"")}return K4(u,e)+o+i}function Q8(e,n,u,o){let i=[],t=[],r=null;const s=({state:p})=>{const f=_9(e,location),y=u.value,D=n.value;let P=0;if(p){if(u.value=f,n.value=p,r&&r===y){r=null;return}P=D?p.position-D.position:0}else o(f);i.forEach(v=>{v(u.value,y,{delta:P,type:El.pop,direction:P?P>0?ol.forward:ol.back:ol.unknown})})};function d(){r=u.value}function l(p){i.push(p);const f=()=>{const y=i.indexOf(p);y>-1&&i.splice(y,1)};return t.push(f),f}function c(){const{history:p}=window;!p.state||p.replaceState(Tn({},p.state,{scroll:_g()}),"")}function _(){for(const p of t)p();t=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",c)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",c),{pauseListeners:d,listen:l,destroy:_}}function X4(e,n,u,o=!1,i=!1){return{back:e,current:n,forward:u,replaced:o,position:window.history.length,scroll:i?_g():null}}function Z8(e){const{history:n,location:u}=window,o={value:_9(e,u)},i={value:n.state};i.value||t(o.value,{back:null,current:o.value,forward:null,position:n.length-1,replaced:!0,scroll:null},!0);function t(d,l,c){const _=e.indexOf("#"),p=_>-1?(u.host&&document.querySelector("base")?e:e.slice(_))+d:X8()+e+d;try{n[c?"replaceState":"pushState"](l,"",p),i.value=l}catch(f){console.error(f),u[c?"replace":"assign"](p)}}function r(d,l){const c=Tn({},n.state,X4(i.value.back,d,i.value.forward,!0),l,{position:i.value.position});t(d,c,!0),o.value=d}function s(d,l){const c=Tn({},i.value,n.state,{forward:d,scroll:_g()});t(c.current,c,!0);const _=Tn({},X4(o.value,d,null),{position:c.position+1},l);t(d,_,!1),o.value=d}return{location:o,state:i,push:s,replace:r}}function e7(e){e=z8(e);const n=Z8(e),u=Q8(e,n.state,n.location,n.replace);function o(t,r=!0){r||u.pauseListeners(),history.go(t)}const i=Tn({location:"",base:e,go:o,createHref:W8.bind(null,e)},n,u);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>n.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>n.state.value}),i}function n7(e){return typeof e=="string"||e&&typeof e=="object"}function g9(e){return typeof e=="string"||typeof e=="symbol"}const na={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},p9=zd("nf");var Q4;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Q4||(Q4={}));function kd(e,n){return Tn(new Error,{type:e,[p9]:!0},n)}function ua(e,n){return e instanceof Error&&p9 in e&&(n==null||!!(e.type&n))}const Z4="[^/]+?",u7={sensitive:!1,strict:!1,start:!0,end:!0},o7=/[.+*?^${}()[\]/\\]/g;function i7(e,n){const u=Tn({},u7,n),o=[];let i=u.start?"^":"";const t=[];for(const l of e){const c=l.length?[]:[90];u.strict&&!l.length&&(i+="/");for(let _=0;_<l.length;_++){const p=l[_];let f=40+(u.sensitive?.25:0);if(p.type===0)_||(i+="/"),i+=p.value.replace(o7,"\\$&"),f+=40;else if(p.type===1){const{value:y,repeatable:D,optional:P,regexp:v}=p;t.push({name:y,repeatable:D,optional:P});const j=v||Z4;if(j!==Z4){f+=10;try{new RegExp(`(${j})`)}catch(S){throw new Error(`Invalid custom RegExp for param "${y}" (${j}): `+S.message)}}let M=D?`((?:${j})(?:/(?:${j}))*)`:`(${j})`;_||(M=P&&l.length<2?`(?:/${M})`:"/"+M),P&&(M+="?"),i+=M,f+=20,P&&(f+=-8),D&&(f+=-20),j===".*"&&(f+=-50)}c.push(f)}o.push(c)}if(u.strict&&u.end){const l=o.length-1;o[l][o[l].length-1]+=.7000000000000001}u.strict||(i+="/?"),u.end?i+="$":u.strict&&(i+="(?:/|$)");const r=new RegExp(i,u.sensitive?"":"i");function s(l){const c=l.match(r),_={};if(!c)return null;for(let p=1;p<c.length;p++){const f=c[p]||"",y=t[p-1];_[y.name]=f&&y.repeatable?f.split("/"):f}return _}function d(l){let c="",_=!1;for(const p of e){(!_||!c.endsWith("/"))&&(c+="/"),_=!1;for(const f of p)if(f.type===0)c+=f.value;else if(f.type===1){const{value:y,repeatable:D,optional:P}=f,v=y in l?l[y]:"";if(Array.isArray(v)&&!D)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const j=Array.isArray(v)?v.join("/"):v;if(!j)if(P)p.length<2&&e.length>1&&(c.endsWith("/")?c=c.slice(0,-1):_=!0);else throw new Error(`Missing required param "${y}"`);c+=j}}return c}return{re:r,score:o,keys:t,parse:s,stringify:d}}function t7(e,n){let u=0;for(;u<e.length&&u<n.length;){const o=n[u]-e[u];if(o)return o;u++}return e.length<n.length?e.length===1&&e[0]===40+40?-1:1:e.length>n.length?n.length===1&&n[0]===40+40?1:-1:0}function a7(e,n){let u=0;const o=e.score,i=n.score;for(;u<o.length&&u<i.length;){const t=t7(o[u],i[u]);if(t)return t;u++}return i.length-o.length}const r7={type:0,value:""},s7=/[a-zA-Z0-9_]/;function d7(e){if(!e)return[[]];if(e==="/")return[[r7]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function n(f){throw new Error(`ERR (${u})/"${l}": ${f}`)}let u=0,o=u;const i=[];let t;function r(){t&&i.push(t),t=[]}let s=0,d,l="",c="";function _(){!l||(u===0?t.push({type:0,value:l}):u===1||u===2||u===3?(t.length>1&&(d==="*"||d==="+")&&n(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),t.push({type:1,value:l,regexp:c,repeatable:d==="*"||d==="+",optional:d==="*"||d==="?"})):n("Invalid state to consume buffer"),l="")}function p(){l+=d}for(;s<e.length;){if(d=e[s++],d==="\\"&&u!==2){o=u,u=4;continue}switch(u){case 0:d==="/"?(l&&_(),r()):d===":"?(_(),u=1):p();break;case 4:p(),u=o;break;case 1:d==="("?u=2:s7.test(d)?p():(_(),u=0,d!=="*"&&d!=="?"&&d!=="+"&&s--);break;case 2:d===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+d:u=3:c+=d;break;case 3:_(),u=0,d!=="*"&&d!=="?"&&d!=="+"&&s--,c="";break;default:n("Unknown state");break}}return u===2&&n(`Unfinished custom RegExp for param "${l}"`),_(),r(),i}function m7(e,n,u){const o=i7(d7(e.path),u),i=Tn(o,{record:e,parent:n,children:[],alias:[]});return n&&!i.record.aliasOf==!n.record.aliasOf&&n.children.push(i),i}function l7(e,n){const u=[],o=new Map;n=n3({strict:!1,end:!0,sensitive:!1},n);function i(c){return o.get(c)}function t(c,_,p){const f=!p,y=_7(c);y.aliasOf=p&&p.record;const D=n3(n,c),P=[y];if("alias"in c){const M=typeof c.alias=="string"?[c.alias]:c.alias;for(const S of M)P.push(Tn({},y,{components:p?p.record.components:y.components,path:S,aliasOf:p?p.record:y}))}let v,j;for(const M of P){const{path:S}=M;if(_&&S[0]!=="/"){const $=_.record.path,C=$[$.length-1]==="/"?"":"/";M.path=_.record.path+(S&&C+S)}if(v=m7(M,_,D),p?p.alias.push(v):(j=j||v,j!==v&&j.alias.push(v),f&&c.name&&!e3(v)&&r(c.name)),"children"in y){const $=y.children;for(let C=0;C<$.length;C++)t($[C],v,p&&p.children[C])}p=p||v,d(v)}return j?()=>{r(j)}:ul}function r(c){if(g9(c)){const _=o.get(c);_&&(o.delete(c),u.splice(u.indexOf(_),1),_.children.forEach(r),_.alias.forEach(r))}else{const _=u.indexOf(c);_>-1&&(u.splice(_,1),c.record.name&&o.delete(c.record.name),c.children.forEach(r),c.alias.forEach(r))}}function s(){return u}function d(c){let _=0;for(;_<u.length&&a7(c,u[_])>=0&&(c.record.path!==u[_].record.path||!h9(c,u[_]));)_++;u.splice(_,0,c),c.record.name&&!e3(c)&&o.set(c.record.name,c)}function l(c,_){let p,f={},y,D;if("name"in c&&c.name){if(p=o.get(c.name),!p)throw kd(1,{location:c});D=p.record.name,f=Tn(c7(_.params,p.keys.filter(j=>!j.optional).map(j=>j.name)),c.params),y=p.stringify(f)}else if("path"in c)y=c.path,p=u.find(j=>j.re.test(y)),p&&(f=p.parse(y),D=p.record.name);else{if(p=_.name?o.get(_.name):u.find(j=>j.re.test(_.path)),!p)throw kd(1,{location:c,currentLocation:_});D=p.record.name,f=Tn({},_.params,c.params),y=p.stringify(f)}const P=[];let v=p;for(;v;)P.unshift(v.record),v=v.parent;return{name:D,path:y,params:f,matched:P,meta:p7(P)}}return e.forEach(c=>t(c)),{addRoute:t,resolve:l,removeRoute:r,getRoutes:s,getRecordMatcher:i}}function c7(e,n){const u={};for(const o of n)o in e&&(u[o]=e[o]);return u}function _7(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:g7(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function g7(e){const n={},u=e.props||!1;if("component"in e)n.default=u;else for(const o in e.components)n[o]=typeof u=="boolean"?u:u[o];return n}function e3(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function p7(e){return e.reduce((n,u)=>Tn(n,u.meta),{})}function n3(e,n){const u={};for(const o in e)u[o]=o in n?n[o]:e[o];return u}function h9(e,n){return n.children.some(u=>u===e||h9(e,u))}const k9=/#/g,h7=/&/g,k7=/\//g,f7=/=/g,y7=/\?/g,f9=/\+/g,F7=/%5B/g,b7=/%5D/g,y9=/%5E/g,w7=/%60/g,F9=/%7B/g,j7=/%7C/g,b9=/%7D/g,D7=/%20/g;function Qk(e){return encodeURI(""+e).replace(j7,"|").replace(F7,"[").replace(b7,"]")}function v7(e){return Qk(e).replace(F9,"{").replace(b9,"}").replace(y9,"^")}function b1(e){return Qk(e).replace(f9,"%2B").replace(D7,"+").replace(k9,"%23").replace(h7,"%26").replace(w7,"`").replace(F9,"{").replace(b9,"}").replace(y9,"^")}function B7(e){return b1(e).replace(f7,"%3D")}function P7(e){return Qk(e).replace(k9,"%23").replace(y7,"%3F")}function E7(e){return e==null?"":P7(e).replace(k7,"%2F")}function __(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function M7(e){const n={};if(e===""||e==="?")return n;const o=(e[0]==="?"?e.slice(1):e).split("&");for(let i=0;i<o.length;++i){const t=o[i].replace(f9," "),r=t.indexOf("="),s=__(r<0?t:t.slice(0,r)),d=r<0?null:__(t.slice(r+1));if(s in n){let l=n[s];Array.isArray(l)||(l=n[s]=[l]),l.push(d)}else n[s]=d}return n}function u3(e){let n="";for(let u in e){const o=e[u];if(u=B7(u),o==null){o!==void 0&&(n+=(n.length?"&":"")+u);continue}(Array.isArray(o)?o.map(t=>t&&b1(t)):[o&&b1(o)]).forEach(t=>{t!==void 0&&(n+=(n.length?"&":"")+u,t!=null&&(n+="="+t))})}return n}function T7(e){const n={};for(const u in e){const o=e[u];o!==void 0&&(n[u]=Array.isArray(o)?o.map(i=>i==null?null:""+i):o==null?o:""+o)}return n}function Lm(){let e=[];function n(o){return e.push(o),()=>{const i=e.indexOf(o);i>-1&&e.splice(i,1)}}function u(){e=[]}return{add:n,list:()=>e,reset:u}}function la(e,n,u,o,i){const t=o&&(o.enterCallbacks[i]=o.enterCallbacks[i]||[]);return()=>new Promise((r,s)=>{const d=_=>{_===!1?s(kd(4,{from:u,to:n})):_ instanceof Error?s(_):n7(_)?s(kd(2,{from:n,to:_})):(t&&o.enterCallbacks[i]===t&&typeof _=="function"&&t.push(_),r())},l=e.call(o&&o.instances[i],n,u,d);let c=Promise.resolve(l);e.length<3&&(c=c.then(d)),c.catch(_=>s(_))})}function ph(e,n,u,o){const i=[];for(const t of e)for(const r in t.components){let s=t.components[r];if(!(n!=="beforeRouteEnter"&&!t.instances[r]))if(S7(s)){const l=(s.__vccOpts||s)[n];l&&i.push(la(l,u,o,t,r))}else{let d=s();i.push(()=>d.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${r}" at "${t.path}"`));const c=I8(l)?l.default:l;t.components[r]=c;const p=(c.__vccOpts||c)[n];return p&&la(p,u,o,t,r)()}))}}return i}function S7(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function o3(e){const n=oo(cg),u=oo(Xk),o=Ne(()=>n.resolve(xe(e.to))),i=Ne(()=>{const{matched:d}=o.value,{length:l}=d,c=d[l-1],_=u.matched;if(!c||!_.length)return-1;const p=_.findIndex(hd.bind(null,c));if(p>-1)return p;const f=i3(d[l-2]);return l>1&&i3(c)===f&&_[_.length-1].path!==f?_.findIndex(hd.bind(null,d[l-2])):p}),t=Ne(()=>i.value>-1&&x7(u.params,o.value.params)),r=Ne(()=>i.value>-1&&i.value===u.matched.length-1&&c9(u.params,o.value.params));function s(d={}){return A7(d)?n[xe(e.replace)?"replace":"push"](xe(e.to)).catch(ul):Promise.resolve()}return{route:o,href:Ne(()=>o.value.href),isActive:t,isExactActive:r,navigate:s}}const L7=Wu({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:o3,setup(e,{slots:n}){const u=Cn(o3(e)),{options:o}=oo(cg),i=Ne(()=>({[t3(e.activeClass,o.linkActiveClass,"router-link-active")]:u.isActive,[t3(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:u.isExactActive}));return()=>{const t=n.default&&n.default(u);return e.custom?t:el("a",{"aria-current":u.isExactActive?e.ariaCurrentValue:null,href:u.href,onClick:u.navigate,class:i.value},t)}}}),C7=L7;function A7(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const n=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(n))return}return e.preventDefault&&e.preventDefault(),!0}}function x7(e,n){for(const u in n){const o=n[u],i=e[u];if(typeof o=="string"){if(o!==i)return!1}else if(!Array.isArray(i)||i.length!==o.length||o.some((t,r)=>t!==i[r]))return!1}return!0}function i3(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const t3=(e,n,u)=>e!=null?e:n!=null?n:u,Y7=Wu({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:n,slots:u}){const o=oo(y1),i=Ne(()=>e.route||o.value),t=oo(q4,0),r=Ne(()=>i.value.matched[t]);Br(q4,t+1),Br(Y8,r),Br(y1,i);const s=Pe();return vn(()=>[s.value,r.value,e.name],([d,l,c],[_,p,f])=>{l&&(l.instances[c]=d,p&&p!==l&&d&&d===_&&(l.leaveGuards.size||(l.leaveGuards=p.leaveGuards),l.updateGuards.size||(l.updateGuards=p.updateGuards))),d&&l&&(!p||!hd(l,p)||!_)&&(l.enterCallbacks[c]||[]).forEach(y=>y(d))},{flush:"post"}),()=>{const d=i.value,l=r.value,c=l&&l.components[e.name],_=e.name;if(!c)return a3(u.default,{Component:c,route:d});const p=l.props[e.name],f=p?p===!0?d.params:typeof p=="function"?p(d):p:null,D=el(c,Tn({},f,n,{onVnodeUnmounted:P=>{P.component.isUnmounted&&(l.instances[_]=null)},ref:s}));return a3(u.default,{Component:D,route:d})||D}}});function a3(e,n){if(!e)return null;const u=e(n);return u.length===1?u[0]:u}const w9=Y7;function I7(e){const n=l7(e.routes,e),u=e.parseQuery||M7,o=e.stringifyQuery||u3,i=e.history,t=Lm(),r=Lm(),s=Lm(),d=VE(na);let l=na;Vs&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=_h.bind(null,Q=>""+Q),_=_h.bind(null,E7),p=_h.bind(null,__);function f(Q,ye){let de,te;return g9(Q)?(de=n.getRecordMatcher(Q),te=ye):te=Q,n.addRoute(te,de)}function y(Q){const ye=n.getRecordMatcher(Q);ye&&n.removeRoute(ye)}function D(){return n.getRoutes().map(Q=>Q.record)}function P(Q){return!!n.getRecordMatcher(Q)}function v(Q,ye){if(ye=Tn({},ye||d.value),typeof Q=="string"){const Ie=gh(u,Q,ye.path),k=n.resolve({path:Ie.path},ye),b=i.createHref(Ie.fullPath);return Tn(Ie,k,{params:p(k.params),hash:__(Ie.hash),redirectedFrom:void 0,href:b})}let de;if("path"in Q)de=Tn({},Q,{path:gh(u,Q.path,ye.path).path});else{const Ie=Tn({},Q.params);for(const k in Ie)Ie[k]==null&&delete Ie[k];de=Tn({},Q,{params:_(Q.params)}),ye.params=_(ye.params)}const te=n.resolve(de,ye),en=Q.hash||"";te.params=c(p(te.params));const ze=R8(o,Tn({},Q,{hash:v7(en),path:te.path})),ce=i.createHref(ze);return Tn({fullPath:ze,hash:en,query:o===u3?T7(Q.query):Q.query||{}},te,{redirectedFrom:void 0,href:ce})}function j(Q){return typeof Q=="string"?gh(u,Q,d.value.path):Tn({},Q)}function M(Q,ye){if(l!==Q)return kd(8,{from:ye,to:Q})}function S(Q){return L(Q)}function $(Q){return S(Tn(j(Q),{replace:!0}))}function C(Q){const ye=Q.matched[Q.matched.length-1];if(ye&&ye.redirect){const{redirect:de}=ye;let te=typeof de=="function"?de(Q):de;return typeof te=="string"&&(te=te.includes("?")||te.includes("#")?te=j(te):{path:te},te.params={}),Tn({query:Q.query,hash:Q.hash,params:Q.params},te)}}function L(Q,ye){const de=l=v(Q),te=d.value,en=Q.state,ze=Q.force,ce=Q.replace===!0,Ie=C(de);if(Ie)return L(Tn(j(Ie),{state:en,force:ze,replace:ce}),ye||de);const k=de;k.redirectedFrom=ye;let b;return!ze&&$8(o,te,de)&&(b=kd(16,{to:k,from:te}),Fe(te,te,!0,!1)),(b?Promise.resolve(b):q(k,te)).catch(B=>ua(B)?ua(B,2)?B:ln(B):Me(B,k,te)).then(B=>{if(B){if(ua(B,2))return L(Tn(j(B.to),{state:en,force:ze,replace:ce}),ye||k)}else B=X(k,te,!0,ce,en);return V(k,te,B),B})}function T(Q,ye){const de=M(Q,ye);return de?Promise.reject(de):Promise.resolve()}function q(Q,ye){let de;const[te,en,ze]=O7(Q,ye);de=ph(te.reverse(),"beforeRouteLeave",Q,ye);for(const Ie of te)Ie.leaveGuards.forEach(k=>{de.push(la(k,Q,ye))});const ce=T.bind(null,Q,ye);return de.push(ce),Rs(de).then(()=>{de=[];for(const Ie of t.list())de.push(la(Ie,Q,ye));return de.push(ce),Rs(de)}).then(()=>{de=ph(en,"beforeRouteUpdate",Q,ye);for(const Ie of en)Ie.updateGuards.forEach(k=>{de.push(la(k,Q,ye))});return de.push(ce),Rs(de)}).then(()=>{de=[];for(const Ie of Q.matched)if(Ie.beforeEnter&&!ye.matched.includes(Ie))if(Array.isArray(Ie.beforeEnter))for(const k of Ie.beforeEnter)de.push(la(k,Q,ye));else de.push(la(Ie.beforeEnter,Q,ye));return de.push(ce),Rs(de)}).then(()=>(Q.matched.forEach(Ie=>Ie.enterCallbacks={}),de=ph(ze,"beforeRouteEnter",Q,ye),de.push(ce),Rs(de))).then(()=>{de=[];for(const Ie of r.list())de.push(la(Ie,Q,ye));return de.push(ce),Rs(de)}).catch(Ie=>ua(Ie,8)?Ie:Promise.reject(Ie))}function V(Q,ye,de){for(const te of s.list())te(Q,ye,de)}function X(Q,ye,de,te,en){const ze=M(Q,ye);if(ze)return ze;const ce=ye===na,Ie=Vs?history.state:{};de&&(te||ce?i.replace(Q.fullPath,Tn({scroll:ce&&Ie&&Ie.scroll},en)):i.push(Q.fullPath,en)),d.value=Q,Fe(Q,ye,de,ce),ln()}let Z;function ke(){Z||(Z=i.listen((Q,ye,de)=>{const te=v(Q),en=C(te);if(en){L(Tn(en,{replace:!0}),te).catch(ul);return}l=te;const ze=d.value;Vs&&G8(J4(ze.fullPath,de.delta),_g()),q(te,ze).catch(ce=>ua(ce,12)?ce:ua(ce,2)?(L(ce.to,te).then(Ie=>{ua(Ie,20)&&!de.delta&&de.type===El.pop&&i.go(-1,!1)}).catch(ul),Promise.reject()):(de.delta&&i.go(-de.delta,!1),Me(ce,te,ze))).then(ce=>{ce=ce||X(te,ze,!1),ce&&(de.delta?i.go(-de.delta,!1):de.type===El.pop&&ua(ce,20)&&i.go(-1,!1)),V(te,ze,ce)}).catch(ul)}))}let me=Lm(),Ye=Lm(),Se;function Me(Q,ye,de){ln(Q);const te=Ye.list();return te.length?te.forEach(en=>en(Q,ye,de)):console.error(Q),Promise.reject(Q)}function be(){return Se&&d.value!==na?Promise.resolve():new Promise((Q,ye)=>{me.add([Q,ye])})}function ln(Q){return Se||(Se=!Q,ke(),me.list().forEach(([ye,de])=>Q?de(Q):ye()),me.reset()),Q}function Fe(Q,ye,de,te){const{scrollBehavior:en}=e;if(!Vs||!en)return Promise.resolve();const ze=!de&&J8(J4(Q.fullPath,0))||(te||!de)&&history.state&&history.state.scroll||null;return Uk().then(()=>en(Q,ye,ze)).then(ce=>ce&&K8(ce)).catch(ce=>Me(ce,Q,ye))}const Te=Q=>i.go(Q);let Ce;const Ge=new Set;return{currentRoute:d,addRoute:f,removeRoute:y,hasRoute:P,getRoutes:D,resolve:v,options:e,push:S,replace:$,go:Te,back:()=>Te(-1),forward:()=>Te(1),beforeEach:t.add,beforeResolve:r.add,afterEach:s.add,onError:Ye.add,isReady:be,install(Q){const ye=this;Q.component("RouterLink",C7),Q.component("RouterView",w9),Q.config.globalProperties.$router=ye,Object.defineProperty(Q.config.globalProperties,"$route",{enumerable:!0,get:()=>xe(d)}),Vs&&!Ce&&d.value===na&&(Ce=!0,S(i.location).catch(en=>{}));const de={};for(const en in na)de[en]=Ne(()=>d.value[en]);Q.provide(cg,ye),Q.provide(Xk,Cn(de)),Q.provide(y1,d);const te=Q.unmount;Ge.add(Q),Q.unmount=function(){Ge.delete(Q),Ge.size<1&&(l=na,Z&&Z(),Z=null,d.value=na,Ce=!1,Se=!1),te()}}}}function Rs(e){return e.reduce((n,u)=>n.then(()=>u()),Promise.resolve())}function O7(e,n){const u=[],o=[],i=[],t=Math.max(n.matched.length,e.matched.length);for(let r=0;r<t;r++){const s=n.matched[r];s&&(e.matched.find(l=>hd(l,s))?o.push(s):u.push(s));const d=e.matched[r];d&&(n.matched.find(l=>hd(l,d))||i.push(d))}return[u,o,i]}function gg(){return oo(cg)}function j9(){return oo(Xk)}/**
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
 */const D9=function(e){const n=[];let u=0;for(let o=0;o<e.length;o++){let i=e.charCodeAt(o);i<128?n[u++]=i:i<2048?(n[u++]=i>>6|192,n[u++]=i&63|128):(i&64512)===55296&&o+1<e.length&&(e.charCodeAt(o+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++o)&1023),n[u++]=i>>18|240,n[u++]=i>>12&63|128,n[u++]=i>>6&63|128,n[u++]=i&63|128):(n[u++]=i>>12|224,n[u++]=i>>6&63|128,n[u++]=i&63|128)}return n},N7=function(e){const n=[];let u=0,o=0;for(;u<e.length;){const i=e[u++];if(i<128)n[o++]=String.fromCharCode(i);else if(i>191&&i<224){const t=e[u++];n[o++]=String.fromCharCode((i&31)<<6|t&63)}else if(i>239&&i<365){const t=e[u++],r=e[u++],s=e[u++],d=((i&7)<<18|(t&63)<<12|(r&63)<<6|s&63)-65536;n[o++]=String.fromCharCode(55296+(d>>10)),n[o++]=String.fromCharCode(56320+(d&1023))}else{const t=e[u++],r=e[u++];n[o++]=String.fromCharCode((i&15)<<12|(t&63)<<6|r&63)}}return n.join("")},v9={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,n){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const u=n?this.byteToCharMapWebSafe_:this.byteToCharMap_,o=[];for(let i=0;i<e.length;i+=3){const t=e[i],r=i+1<e.length,s=r?e[i+1]:0,d=i+2<e.length,l=d?e[i+2]:0,c=t>>2,_=(t&3)<<4|s>>4;let p=(s&15)<<2|l>>6,f=l&63;d||(f=64,r||(p=64)),o.push(u[c],u[_],u[p],u[f])}return o.join("")},encodeString(e,n){return this.HAS_NATIVE_SUPPORT&&!n?btoa(e):this.encodeByteArray(D9(e),n)},decodeString(e,n){return this.HAS_NATIVE_SUPPORT&&!n?atob(e):N7(this.decodeStringToByteArray(e,n))},decodeStringToByteArray(e,n){this.init_();const u=n?this.charToByteMapWebSafe_:this.charToByteMap_,o=[];for(let i=0;i<e.length;){const t=u[e.charAt(i++)],s=i<e.length?u[e.charAt(i)]:0;++i;const l=i<e.length?u[e.charAt(i)]:64;++i;const _=i<e.length?u[e.charAt(i)]:64;if(++i,t==null||s==null||l==null||_==null)throw Error();const p=t<<2|s>>4;if(o.push(p),l!==64){const f=s<<4&240|l>>2;if(o.push(f),_!==64){const y=l<<6&192|_;o.push(y)}}}return o},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},R7=function(e){const n=D9(e);return v9.encodeByteArray(n,!0)},B9=function(e){return R7(e).replace(/\./g,"")},$7=function(e){try{return v9.decodeString(e,!0)}catch(n){console.error("base64Decode failed: ",n)}return null};/**
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
 */class H7{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((n,u)=>{this.resolve=n,this.reject=u})}wrapCallback(n){return(u,o)=>{u?this.reject(u):this.resolve(o),typeof n=="function"&&(this.promise.catch(()=>{}),n.length===1?n(u):n(u,o))}}}/**
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
 */function ku(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function P9(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ku())}function Zk(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function E9(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function U7(){return ku().indexOf("Electron/")>=0}function M9(){const e=ku();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function z7(){return ku().indexOf("MSAppHost/")>=0}function T9(){return typeof indexedDB=="object"}function S9(){return new Promise((e,n)=>{try{let u=!0;const o="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(o);i.onsuccess=()=>{i.result.close(),u||self.indexedDB.deleteDatabase(o),e(!0)},i.onupgradeneeded=()=>{u=!1},i.onerror=()=>{var t;n(((t=i.error)===null||t===void 0?void 0:t.message)||"")}}catch(u){n(u)}})}function V7(){return!(typeof navigator=="undefined"||!navigator.cookieEnabled)}/**
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
 */const W7="FirebaseError";class ot extends Error{constructor(n,u,o){super(u),this.code=n,this.customData=o,this.name=W7,Object.setPrototypeOf(this,ot.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,cs.prototype.create)}}class cs{constructor(n,u,o){this.service=n,this.serviceName=u,this.errors=o}create(n,...u){const o=u[0]||{},i=`${this.service}/${n}`,t=this.errors[n],r=t?q7(t,o):"Error",s=`${this.serviceName}: ${r} (${i}).`;return new ot(i,s,o)}}function q7(e,n){return e.replace(K7,(u,o)=>{const i=n[o];return i!=null?String(i):`<${o}?>`})}const K7=/\{\$([^}]+)}/g;function G7(e){for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n))return!1;return!0}function Ml(e,n){if(e===n)return!0;const u=Object.keys(e),o=Object.keys(n);for(const i of u){if(!o.includes(i))return!1;const t=e[i],r=n[i];if(r3(t)&&r3(r)){if(!Ml(t,r))return!1}else if(t!==r)return!1}for(const i of o)if(!u.includes(i))return!1;return!0}function r3(e){return e!==null&&typeof e=="object"}/**
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
 */function lc(e){const n=[];for(const[u,o]of Object.entries(e))Array.isArray(o)?o.forEach(i=>{n.push(encodeURIComponent(u)+"="+encodeURIComponent(i))}):n.push(encodeURIComponent(u)+"="+encodeURIComponent(o));return n.length?"&"+n.join("&"):""}function Hm(e){const n={};return e.replace(/^\?/,"").split("&").forEach(o=>{if(o){const[i,t]=o.split("=");n[decodeURIComponent(i)]=decodeURIComponent(t)}}),n}function Um(e){const n=e.indexOf("?");if(!n)return"";const u=e.indexOf("#",n);return e.substring(n,u>0?u:void 0)}function J7(e,n){const u=new X7(e,n);return u.subscribe.bind(u)}class X7{constructor(n,u){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=u,this.task.then(()=>{n(this)}).catch(o=>{this.error(o)})}next(n){this.forEachObserver(u=>{u.next(n)})}error(n){this.forEachObserver(u=>{u.error(n)}),this.close(n)}complete(){this.forEachObserver(n=>{n.complete()}),this.close()}subscribe(n,u,o){let i;if(n===void 0&&u===void 0&&o===void 0)throw new Error("Missing Observer.");Q7(n,["next","error","complete"])?i=n:i={next:n,error:u,complete:o},i.next===void 0&&(i.next=hh),i.error===void 0&&(i.error=hh),i.complete===void 0&&(i.complete=hh);const t=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),t}unsubscribeOne(n){this.observers===void 0||this.observers[n]===void 0||(delete this.observers[n],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(n){if(!this.finalized)for(let u=0;u<this.observers.length;u++)this.sendOne(u,n)}sendOne(n,u){this.task.then(()=>{if(this.observers!==void 0&&this.observers[n]!==void 0)try{u(this.observers[n])}catch(o){typeof console!="undefined"&&console.error&&console.error(o)}})}close(n){this.finalized||(this.finalized=!0,n!==void 0&&(this.finalError=n),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Q7(e,n){if(typeof e!="object"||e===null)return!1;for(const u of n)if(u in e&&typeof e[u]=="function")return!0;return!1}function hh(){}/**
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
 */const Z7=1e3,eT=2,nT=4*60*60*1e3,uT=.5;function s3(e,n=Z7,u=eT){const o=n*Math.pow(u,e),i=Math.round(uT*o*(Math.random()-.5)*2);return Math.min(nT,o+i)}/**
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
 */function Hn(e){return e&&e._delegate?e._delegate:e}class _i{constructor(n,u,o){this.name=n,this.instanceFactory=u,this.type=o,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(n){return this.instantiationMode=n,this}setMultipleInstances(n){return this.multipleInstances=n,this}setServiceProps(n){return this.serviceProps=n,this}setInstanceCreatedCallback(n){return this.onInstanceCreated=n,this}}/**
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
 */const cr="[DEFAULT]";/**
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
 */class oT{constructor(n,u){this.name=n,this.container=u,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(n){const u=this.normalizeInstanceIdentifier(n);if(!this.instancesDeferred.has(u)){const o=new H7;if(this.instancesDeferred.set(u,o),this.isInitialized(u)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:u});i&&o.resolve(i)}catch{}}return this.instancesDeferred.get(u).promise}getImmediate(n){var u;const o=this.normalizeInstanceIdentifier(n==null?void 0:n.identifier),i=(u=n==null?void 0:n.optional)!==null&&u!==void 0?u:!1;if(this.isInitialized(o)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:o})}catch(t){if(i)return null;throw t}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(n){if(n.name!==this.name)throw Error(`Mismatching Component ${n.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=n,!!this.shouldAutoInitialize()){if(tT(n))try{this.getOrInitializeService({instanceIdentifier:cr})}catch{}for(const[u,o]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(u);try{const t=this.getOrInitializeService({instanceIdentifier:i});o.resolve(t)}catch{}}}}clearInstance(n=cr){this.instancesDeferred.delete(n),this.instancesOptions.delete(n),this.instances.delete(n)}async delete(){const n=Array.from(this.instances.values());await Promise.all([...n.filter(u=>"INTERNAL"in u).map(u=>u.INTERNAL.delete()),...n.filter(u=>"_delete"in u).map(u=>u._delete())])}isComponentSet(){return this.component!=null}isInitialized(n=cr){return this.instances.has(n)}getOptions(n=cr){return this.instancesOptions.get(n)||{}}initialize(n={}){const{options:u={}}=n,o=this.normalizeInstanceIdentifier(n.instanceIdentifier);if(this.isInitialized(o))throw Error(`${this.name}(${o}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:o,options:u});for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);o===s&&r.resolve(i)}return i}onInit(n,u){var o;const i=this.normalizeInstanceIdentifier(u),t=(o=this.onInitCallbacks.get(i))!==null&&o!==void 0?o:new Set;t.add(n),this.onInitCallbacks.set(i,t);const r=this.instances.get(i);return r&&n(r,i),()=>{t.delete(n)}}invokeOnInitCallbacks(n,u){const o=this.onInitCallbacks.get(u);if(!!o)for(const i of o)try{i(n,u)}catch{}}getOrInitializeService({instanceIdentifier:n,options:u={}}){let o=this.instances.get(n);if(!o&&this.component&&(o=this.component.instanceFactory(this.container,{instanceIdentifier:iT(n),options:u}),this.instances.set(n,o),this.instancesOptions.set(n,u),this.invokeOnInitCallbacks(o,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,o)}catch{}return o||null}normalizeInstanceIdentifier(n=cr){return this.component?this.component.multipleInstances?n:cr:n}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function iT(e){return e===cr?void 0:e}function tT(e){return e.instantiationMode==="EAGER"}/**
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
 */class aT{constructor(n){this.name=n,this.providers=new Map}addComponent(n){const u=this.getProvider(n.name);if(u.isComponentSet())throw new Error(`Component ${n.name} has already been registered with ${this.name}`);u.setComponent(n)}addOrOverwriteComponent(n){this.getProvider(n.name).isComponentSet()&&this.providers.delete(n.name),this.addComponent(n)}getProvider(n){if(this.providers.has(n))return this.providers.get(n);const u=new oT(n,this);return this.providers.set(n,u),u}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var bn;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(bn||(bn={}));const rT={debug:bn.DEBUG,verbose:bn.VERBOSE,info:bn.INFO,warn:bn.WARN,error:bn.ERROR,silent:bn.SILENT},sT=bn.INFO,dT={[bn.DEBUG]:"log",[bn.VERBOSE]:"log",[bn.INFO]:"info",[bn.WARN]:"warn",[bn.ERROR]:"error"},mT=(e,n,...u)=>{if(n<e.logLevel)return;const o=new Date().toISOString(),i=dT[n];if(i)console[i](`[${o}]  ${e.name}:`,...u);else throw new Error(`Attempted to log a message with an invalid logType (value: ${n})`)};class pg{constructor(n){this.name=n,this._logLevel=sT,this._logHandler=mT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(n){if(!(n in bn))throw new TypeError(`Invalid value "${n}" assigned to \`logLevel\``);this._logLevel=n}setLogLevel(n){this._logLevel=typeof n=="string"?rT[n]:n}get logHandler(){return this._logHandler}set logHandler(n){if(typeof n!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=n}get userLogHandler(){return this._userLogHandler}set userLogHandler(n){this._userLogHandler=n}debug(...n){this._userLogHandler&&this._userLogHandler(this,bn.DEBUG,...n),this._logHandler(this,bn.DEBUG,...n)}log(...n){this._userLogHandler&&this._userLogHandler(this,bn.VERBOSE,...n),this._logHandler(this,bn.VERBOSE,...n)}info(...n){this._userLogHandler&&this._userLogHandler(this,bn.INFO,...n),this._logHandler(this,bn.INFO,...n)}warn(...n){this._userLogHandler&&this._userLogHandler(this,bn.WARN,...n),this._logHandler(this,bn.WARN,...n)}error(...n){this._userLogHandler&&this._userLogHandler(this,bn.ERROR,...n),this._logHandler(this,bn.ERROR,...n)}}const lT=(e,n)=>n.some(u=>e instanceof u);let d3,m3;function cT(){return d3||(d3=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _T(){return m3||(m3=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const L9=new WeakMap,w1=new WeakMap,C9=new WeakMap,kh=new WeakMap,ef=new WeakMap;function gT(e){const n=new Promise((u,o)=>{const i=()=>{e.removeEventListener("success",t),e.removeEventListener("error",r)},t=()=>{u(ba(e.result)),i()},r=()=>{o(e.error),i()};e.addEventListener("success",t),e.addEventListener("error",r)});return n.then(u=>{u instanceof IDBCursor&&L9.set(u,e)}).catch(()=>{}),ef.set(n,e),n}function pT(e){if(w1.has(e))return;const n=new Promise((u,o)=>{const i=()=>{e.removeEventListener("complete",t),e.removeEventListener("error",r),e.removeEventListener("abort",r)},t=()=>{u(),i()},r=()=>{o(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",t),e.addEventListener("error",r),e.addEventListener("abort",r)});w1.set(e,n)}let j1={get(e,n,u){if(e instanceof IDBTransaction){if(n==="done")return w1.get(e);if(n==="objectStoreNames")return e.objectStoreNames||C9.get(e);if(n==="store")return u.objectStoreNames[1]?void 0:u.objectStore(u.objectStoreNames[0])}return ba(e[n])},set(e,n,u){return e[n]=u,!0},has(e,n){return e instanceof IDBTransaction&&(n==="done"||n==="store")?!0:n in e}};function hT(e){j1=e(j1)}function kT(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(n,...u){const o=e.call(fh(this),n,...u);return C9.set(o,n.sort?n.sort():[n]),ba(o)}:_T().includes(e)?function(...n){return e.apply(fh(this),n),ba(L9.get(this))}:function(...n){return ba(e.apply(fh(this),n))}}function fT(e){return typeof e=="function"?kT(e):(e instanceof IDBTransaction&&pT(e),lT(e,cT())?new Proxy(e,j1):e)}function ba(e){if(e instanceof IDBRequest)return gT(e);if(kh.has(e))return kh.get(e);const n=fT(e);return n!==e&&(kh.set(e,n),ef.set(n,e)),n}const fh=e=>ef.get(e);function A9(e,n,{blocked:u,upgrade:o,blocking:i,terminated:t}={}){const r=indexedDB.open(e,n),s=ba(r);return o&&r.addEventListener("upgradeneeded",d=>{o(ba(r.result),d.oldVersion,d.newVersion,ba(r.transaction))}),u&&r.addEventListener("blocked",()=>u()),s.then(d=>{t&&d.addEventListener("close",()=>t()),i&&d.addEventListener("versionchange",()=>i())}).catch(()=>{}),s}const yT=["get","getKey","getAll","getAllKeys","count"],FT=["put","add","delete","clear"],yh=new Map;function l3(e,n){if(!(e instanceof IDBDatabase&&!(n in e)&&typeof n=="string"))return;if(yh.get(n))return yh.get(n);const u=n.replace(/FromIndex$/,""),o=n!==u,i=FT.includes(u);if(!(u in(o?IDBIndex:IDBObjectStore).prototype)||!(i||yT.includes(u)))return;const t=async function(r,...s){const d=this.transaction(r,i?"readwrite":"readonly");let l=d.store;return o&&(l=l.index(s.shift())),(await Promise.all([l[u](...s),i&&d.done]))[0]};return yh.set(n,t),t}hT(e=>ar(tr({},e),{get:(n,u,o)=>l3(n,u)||e.get(n,u,o),has:(n,u)=>!!l3(n,u)||e.has(n,u)}));/**
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
 */class bT{constructor(n){this.container=n}getPlatformInfoString(){return this.container.getProviders().map(u=>{if(wT(u)){const o=u.getImmediate();return`${o.library}/${o.version}`}else return null}).filter(u=>u).join(" ")}}function wT(e){const n=e.getComponent();return(n==null?void 0:n.type)==="VERSION"}const D1="@firebase/app",c3="0.7.25";/**
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
 */const nf=new pg("@firebase/app"),jT="@firebase/app-compat",DT="@firebase/analytics-compat",vT="@firebase/analytics",BT="@firebase/app-check-compat",PT="@firebase/app-check",ET="@firebase/auth",MT="@firebase/auth-compat",TT="@firebase/database",ST="@firebase/database-compat",LT="@firebase/functions",CT="@firebase/functions-compat",AT="@firebase/installations",xT="@firebase/installations-compat",YT="@firebase/messaging",IT="@firebase/messaging-compat",OT="@firebase/performance",NT="@firebase/performance-compat",RT="@firebase/remote-config",$T="@firebase/remote-config-compat",HT="@firebase/storage",UT="@firebase/storage-compat",zT="@firebase/firestore",VT="@firebase/firestore-compat",WT="firebase",qT="9.8.2";/**
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
 */const x9="[DEFAULT]",KT={[D1]:"fire-core",[jT]:"fire-core-compat",[vT]:"fire-analytics",[DT]:"fire-analytics-compat",[PT]:"fire-app-check",[BT]:"fire-app-check-compat",[ET]:"fire-auth",[MT]:"fire-auth-compat",[TT]:"fire-rtdb",[ST]:"fire-rtdb-compat",[LT]:"fire-fn",[CT]:"fire-fn-compat",[AT]:"fire-iid",[xT]:"fire-iid-compat",[YT]:"fire-fcm",[IT]:"fire-fcm-compat",[OT]:"fire-perf",[NT]:"fire-perf-compat",[RT]:"fire-rc",[$T]:"fire-rc-compat",[HT]:"fire-gcs",[UT]:"fire-gcs-compat",[zT]:"fire-fst",[VT]:"fire-fst-compat","fire-js":"fire-js",[WT]:"fire-js-all"};/**
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
 */const g_=new Map,v1=new Map;function GT(e,n){try{e.container.addComponent(n)}catch(u){nf.debug(`Component ${n.name} failed to register with FirebaseApp ${e.name}`,u)}}function Ni(e){const n=e.name;if(v1.has(n))return nf.debug(`There were multiple attempts to register component ${n}.`),!1;v1.set(n,e);for(const u of g_.values())GT(u,e);return!0}function Na(e,n){const u=e.container.getProvider("heartbeat").getImmediate({optional:!0});return u&&u.triggerHeartbeat(),e.container.getProvider(n)}/**
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
 */const JT={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Ur=new cs("app","Firebase",JT);/**
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
 */class XT{constructor(n,u,o){this._isDeleted=!1,this._options=Object.assign({},n),this._config=Object.assign({},u),this._name=u.name,this._automaticDataCollectionEnabled=u.automaticDataCollectionEnabled,this._container=o,this.container.addComponent(new _i("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(n){this.checkDestroyed(),this._automaticDataCollectionEnabled=n}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(n){this._isDeleted=n}checkDestroyed(){if(this.isDeleted)throw Ur.create("app-deleted",{appName:this._name})}}/**
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
 */const Vd=qT;function QT(e,n={}){typeof n!="object"&&(n={name:n});const u=Object.assign({name:x9,automaticDataCollectionEnabled:!1},n),o=u.name;if(typeof o!="string"||!o)throw Ur.create("bad-app-name",{appName:String(o)});const i=g_.get(o);if(i){if(Ml(e,i.options)&&Ml(u,i.config))return i;throw Ur.create("duplicate-app",{appName:o})}const t=new aT(o);for(const s of v1.values())t.addComponent(s);const r=new XT(e,u,t);return g_.set(o,r),r}function hg(e=x9){const n=g_.get(e);if(!n)throw Ur.create("no-app",{appName:e});return n}function yo(e,n,u){var o;let i=(o=KT[e])!==null&&o!==void 0?o:e;u&&(i+=`-${u}`);const t=i.match(/\s|\//),r=n.match(/\s|\//);if(t||r){const s=[`Unable to register library "${i}" with version "${n}":`];t&&s.push(`library name "${i}" contains illegal characters (whitespace or "/")`),t&&r&&s.push("and"),r&&s.push(`version name "${n}" contains illegal characters (whitespace or "/")`),nf.warn(s.join(" "));return}Ni(new _i(`${i}-version`,()=>({library:i,version:n}),"VERSION"))}/**
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
 */const ZT="firebase-heartbeat-database",eS=1,Tl="firebase-heartbeat-store";let Fh=null;function Y9(){return Fh||(Fh=A9(ZT,eS,{upgrade:(e,n)=>{switch(n){case 0:e.createObjectStore(Tl)}}}).catch(e=>{throw Ur.create("storage-open",{originalErrorMessage:e.message})})),Fh}async function nS(e){try{return(await Y9()).transaction(Tl).objectStore(Tl).get(I9(e))}catch(n){throw Ur.create("storage-get",{originalErrorMessage:n.message})}}async function _3(e,n){try{const o=(await Y9()).transaction(Tl,"readwrite");return await o.objectStore(Tl).put(n,I9(e)),o.done}catch(u){throw Ur.create("storage-set",{originalErrorMessage:u.message})}}function I9(e){return`${e.name}!${e.options.appId}`}/**
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
 */const uS=1024,oS=30*24*60*60*1e3;class iS{constructor(n){this.container=n,this._heartbeatsCache=null;const u=this.container.getProvider("app").getImmediate();this._storage=new aS(u),this._heartbeatsCachePromise=this._storage.read().then(o=>(this._heartbeatsCache=o,o))}async triggerHeartbeat(){const u=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=g3();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(i=>i.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:u}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const t=new Date(i.date).valueOf();return Date.now()-t<=oS}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const n=g3(),{heartbeatsToSend:u,unsentEntries:o}=tS(this._heartbeatsCache.heartbeats),i=B9(JSON.stringify({version:2,heartbeats:u}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function g3(){return new Date().toISOString().substring(0,10)}function tS(e,n=uS){const u=[];let o=e.slice();for(const i of e){const t=u.find(r=>r.agent===i.agent);if(t){if(t.dates.push(i.date),p3(u)>n){t.dates.pop();break}}else if(u.push({agent:i.agent,dates:[i.date]}),p3(u)>n){u.pop();break}o=o.slice(1)}return{heartbeatsToSend:u,unsentEntries:o}}class aS{constructor(n){this.app=n,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return T9()?S9().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await nS(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(n){var u;if(await this._canUseIndexedDBPromise){const i=await this.read();return _3(this.app,{lastSentHeartbeatDate:(u=n.lastSentHeartbeatDate)!==null&&u!==void 0?u:i.lastSentHeartbeatDate,heartbeats:n.heartbeats})}else return}async add(n){var u;if(await this._canUseIndexedDBPromise){const i=await this.read();return _3(this.app,{lastSentHeartbeatDate:(u=n.lastSentHeartbeatDate)!==null&&u!==void 0?u:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...n.heartbeats]})}else return}}function p3(e){return B9(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function rS(e){Ni(new _i("platform-logger",n=>new bT(n),"PRIVATE")),Ni(new _i("heartbeat",n=>new iS(n),"PRIVATE")),yo(D1,c3,e),yo(D1,c3,"esm2017"),yo("fire-js","")}rS("");function uf(e,n){var u={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(u[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,o=Object.getOwnPropertySymbols(e);i<o.length;i++)n.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(u[o[i]]=e[o[i]]);return u}function O9(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const sS=O9,N9=new cs("auth","Firebase",O9());/**
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
 */const h3=new pg("@firebase/auth");function W0(e,...n){h3.logLevel<=bn.ERROR&&h3.error(`Auth (${Vd}): ${e}`,...n)}/**
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
 */function gi(e,...n){throw of(e,...n)}function Ji(e,...n){return of(e,...n)}function R9(e,n,u){const o=Object.assign(Object.assign({},sS()),{[n]:u});return new cs("auth","Firebase",o).create(n,{appName:e.name})}function dS(e,n,u){const o=u;if(!(n instanceof o))throw o.name!==n.constructor.name&&gi(e,"argument-error"),R9(e,"argument-error",`Type of ${n.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function of(e,...n){if(typeof e!="string"){const u=n[0],o=[...n.slice(1)];return o[0]&&(o[0].appName=e.name),e._errorFactory.create(u,...o)}return N9.create(e,...n)}function qe(e,n,...u){if(!e)throw of(n,...u)}function Bt(e){const n="INTERNAL ASSERTION FAILED: "+e;throw W0(n),new Error(n)}function Lt(e,n){e||Bt(n)}/**
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
 */const k3=new Map;function Pt(e){Lt(e instanceof Function,"Expected a class definition");let n=k3.get(e);return n?(Lt(n instanceof e,"Instance stored in cache mismatched with class"),n):(n=new e,k3.set(e,n),n)}/**
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
 */function mS(e,n){const u=Na(e,"auth");if(u.isInitialized()){const i=u.getImmediate(),t=u.getOptions();if(Ml(t,n!=null?n:{}))return i;gi(i,"already-initialized")}return u.initialize({options:n})}function lS(e,n){const u=(n==null?void 0:n.persistence)||[],o=(Array.isArray(u)?u:[u]).map(Pt);n!=null&&n.errorMap&&e._updateErrorMap(n.errorMap),e._initializeWithPersistence(o,n==null?void 0:n.popupRedirectResolver)}/**
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
 */function B1(){var e;return typeof self!="undefined"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function cS(){return f3()==="http:"||f3()==="https:"}function f3(){var e;return typeof self!="undefined"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
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
 */function _S(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(cS()||Zk()||"connection"in navigator)?navigator.onLine:!0}function gS(){if(typeof navigator=="undefined")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
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
 */class cc{constructor(n,u){this.shortDelay=n,this.longDelay=u,Lt(u>n,"Short delay should be less than long delay!"),this.isMobile=P9()||E9()}get(){return _S()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function tf(e,n){Lt(e.emulator,"Emulator should always be set here");const{url:u}=e.emulator;return n?`${u}${n.startsWith("/")?n.slice(1):n}`:u}/**
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
 */class $9{static initialize(n,u,o){this.fetchImpl=n,u&&(this.headersImpl=u),o&&(this.responseImpl=o)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Bt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Bt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Bt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const pS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const hS=new cc(3e4,6e4);function _c(e,n){return e.tenantId&&!n.tenantId?Object.assign(Object.assign({},n),{tenantId:e.tenantId}):n}async function Wd(e,n,u,o,i={}){return H9(e,i,async()=>{let t={},r={};o&&(n==="GET"?r=o:t={body:JSON.stringify(o)});const s=lc(Object.assign({key:e.config.apiKey},r)).slice(1),d=await e._getAdditionalHeaders();return d["Content-Type"]="application/json",e.languageCode&&(d["X-Firebase-Locale"]=e.languageCode),$9.fetch()(U9(e,e.config.apiHost,u,s),Object.assign({method:n,headers:d,referrerPolicy:"no-referrer"},t))})}async function H9(e,n,u){e._canInitEmulator=!1;const o=Object.assign(Object.assign({},pS),n);try{const i=new kS(e),t=await Promise.race([u(),i.promise]);i.clearNetworkTimeout();const r=await t.json();if("needConfirmation"in r)throw F0(e,"account-exists-with-different-credential",r);if(t.ok&&!("errorMessage"in r))return r;{const s=t.ok?r.errorMessage:r.error.message,[d,l]=s.split(" : ");if(d==="FEDERATED_USER_ID_ALREADY_LINKED")throw F0(e,"credential-already-in-use",r);if(d==="EMAIL_EXISTS")throw F0(e,"email-already-in-use",r);if(d==="USER_DISABLED")throw F0(e,"user-disabled",r);const c=o[d]||d.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw R9(e,c,l);gi(e,c)}}catch(i){if(i instanceof ot)throw i;gi(e,"network-request-failed")}}async function gc(e,n,u,o,i={}){const t=await Wd(e,n,u,o,i);return"mfaPendingCredential"in t&&gi(e,"multi-factor-auth-required",{_serverResponse:t}),t}function U9(e,n,u,o){const i=`${n}${u}?${o}`;return e.config.emulator?tf(e.config,i):`${e.config.apiScheme}://${i}`}class kS{constructor(n){this.auth=n,this.timer=null,this.promise=new Promise((u,o)=>{this.timer=setTimeout(()=>o(Ji(this.auth,"network-request-failed")),hS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function F0(e,n,u){const o={appName:e.name};u.email&&(o.email=u.email),u.phoneNumber&&(o.phoneNumber=u.phoneNumber);const i=Ji(e,n,o);return i.customData._tokenResponse=u,i}/**
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
 */async function fS(e,n){return Wd(e,"POST","/v1/accounts:delete",n)}async function yS(e,n){return Wd(e,"POST","/v1/accounts:lookup",n)}/**
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
 */function il(e){if(!!e)try{const n=new Date(Number(e));if(!isNaN(n.getTime()))return n.toUTCString()}catch{}}async function FS(e,n=!1){const u=Hn(e),o=await u.getIdToken(n),i=af(o);qe(i&&i.exp&&i.auth_time&&i.iat,u.auth,"internal-error");const t=typeof i.firebase=="object"?i.firebase:void 0,r=t==null?void 0:t.sign_in_provider;return{claims:i,token:o,authTime:il(bh(i.auth_time)),issuedAtTime:il(bh(i.iat)),expirationTime:il(bh(i.exp)),signInProvider:r||null,signInSecondFactor:(t==null?void 0:t.sign_in_second_factor)||null}}function bh(e){return Number(e)*1e3}function af(e){const[n,u,o]=e.split(".");if(n===void 0||u===void 0||o===void 0)return W0("JWT malformed, contained fewer than 3 sections"),null;try{const i=$7(u);return i?JSON.parse(i):(W0("Failed to decode base64 JWT payload"),null)}catch(i){return W0("Caught error parsing JWT payload as JSON",i),null}}function bS(e){const n=af(e);return qe(n,"internal-error"),qe(typeof n.exp!="undefined","internal-error"),qe(typeof n.iat!="undefined","internal-error"),Number(n.exp)-Number(n.iat)}/**
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
 */async function fd(e,n,u=!1){if(u)return n;try{return await n}catch(o){throw o instanceof ot&&wS(o)&&e.auth.currentUser===e&&await e.auth.signOut(),o}}function wS({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
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
 */class jS{constructor(n){this.user=n,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(n){var u;if(n){const o=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),o}else{this.errorBackoff=3e4;const i=((u=this.user.stsTokenManager.expirationTime)!==null&&u!==void 0?u:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(n=!1){if(!this.isRunning)return;const u=this.getInterval(n);this.timerId=setTimeout(async()=>{await this.iteration()},u)}async iteration(){try{await this.user.getIdToken(!0)}catch(n){n.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class z9{constructor(n,u){this.createdAt=n,this.lastLoginAt=u,this._initializeTime()}_initializeTime(){this.lastSignInTime=il(this.lastLoginAt),this.creationTime=il(this.createdAt)}_copy(n){this.createdAt=n.createdAt,this.lastLoginAt=n.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function p_(e){var n;const u=e.auth,o=await e.getIdToken(),i=await fd(e,yS(u,{idToken:o}));qe(i==null?void 0:i.users.length,u,"internal-error");const t=i.users[0];e._notifyReloadListener(t);const r=!((n=t.providerUserInfo)===null||n===void 0)&&n.length?BS(t.providerUserInfo):[],s=vS(e.providerData,r),d=e.isAnonymous,l=!(e.email&&t.passwordHash)&&!(s!=null&&s.length),c=d?l:!1,_={uid:t.localId,displayName:t.displayName||null,photoURL:t.photoUrl||null,email:t.email||null,emailVerified:t.emailVerified||!1,phoneNumber:t.phoneNumber||null,tenantId:t.tenantId||null,providerData:s,metadata:new z9(t.createdAt,t.lastLoginAt),isAnonymous:c};Object.assign(e,_)}async function DS(e){const n=Hn(e);await p_(n),await n.auth._persistUserIfCurrent(n),n.auth._notifyListenersIfCurrent(n)}function vS(e,n){return[...e.filter(o=>!n.some(i=>i.providerId===o.providerId)),...n]}function BS(e){return e.map(n=>{var{providerId:u}=n,o=uf(n,["providerId"]);return{providerId:u,uid:o.rawId||"",displayName:o.displayName||null,email:o.email||null,phoneNumber:o.phoneNumber||null,photoURL:o.photoUrl||null}})}/**
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
 */async function PS(e,n){const u=await H9(e,{},async()=>{const o=lc({grant_type:"refresh_token",refresh_token:n}).slice(1),{tokenApiHost:i,apiKey:t}=e.config,r=U9(e,i,"/v1/token",`key=${t}`),s=await e._getAdditionalHeaders();return s["Content-Type"]="application/x-www-form-urlencoded",$9.fetch()(r,{method:"POST",headers:s,body:o})});return{accessToken:u.access_token,expiresIn:u.expires_in,refreshToken:u.refresh_token}}/**
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
 */class Sl{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(n){qe(n.idToken,"internal-error"),qe(typeof n.idToken!="undefined","internal-error"),qe(typeof n.refreshToken!="undefined","internal-error");const u="expiresIn"in n&&typeof n.expiresIn!="undefined"?Number(n.expiresIn):bS(n.idToken);this.updateTokensAndExpiration(n.idToken,n.refreshToken,u)}async getToken(n,u=!1){return qe(!this.accessToken||this.refreshToken,n,"user-token-expired"),!u&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(n,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(n,u){const{accessToken:o,refreshToken:i,expiresIn:t}=await PS(n,u);this.updateTokensAndExpiration(o,i,Number(t))}updateTokensAndExpiration(n,u,o){this.refreshToken=u||null,this.accessToken=n||null,this.expirationTime=Date.now()+o*1e3}static fromJSON(n,u){const{refreshToken:o,accessToken:i,expirationTime:t}=u,r=new Sl;return o&&(qe(typeof o=="string","internal-error",{appName:n}),r.refreshToken=o),i&&(qe(typeof i=="string","internal-error",{appName:n}),r.accessToken=i),t&&(qe(typeof t=="number","internal-error",{appName:n}),r.expirationTime=t),r}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(n){this.accessToken=n.accessToken,this.refreshToken=n.refreshToken,this.expirationTime=n.expirationTime}_clone(){return Object.assign(new Sl,this.toJSON())}_performRefresh(){return Bt("not implemented")}}/**
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
 */function oa(e,n){qe(typeof e=="string"||typeof e=="undefined","internal-error",{appName:n})}class Er{constructor(n){var{uid:u,auth:o,stsTokenManager:i}=n,t=uf(n,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new jS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=u,this.auth=o,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=t.displayName||null,this.email=t.email||null,this.emailVerified=t.emailVerified||!1,this.phoneNumber=t.phoneNumber||null,this.photoURL=t.photoURL||null,this.isAnonymous=t.isAnonymous||!1,this.tenantId=t.tenantId||null,this.providerData=t.providerData?[...t.providerData]:[],this.metadata=new z9(t.createdAt||void 0,t.lastLoginAt||void 0)}async getIdToken(n){const u=await fd(this,this.stsTokenManager.getToken(this.auth,n));return qe(u,this.auth,"internal-error"),this.accessToken!==u&&(this.accessToken=u,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),u}getIdTokenResult(n){return FS(this,n)}reload(){return DS(this)}_assign(n){this!==n&&(qe(this.uid===n.uid,this.auth,"internal-error"),this.displayName=n.displayName,this.photoURL=n.photoURL,this.email=n.email,this.emailVerified=n.emailVerified,this.phoneNumber=n.phoneNumber,this.isAnonymous=n.isAnonymous,this.tenantId=n.tenantId,this.providerData=n.providerData.map(u=>Object.assign({},u)),this.metadata._copy(n.metadata),this.stsTokenManager._assign(n.stsTokenManager))}_clone(n){return new Er(Object.assign(Object.assign({},this),{auth:n,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(n){qe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=n,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(n){this.reloadListener?this.reloadListener(n):this.reloadUserInfo=n}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(n,u=!1){let o=!1;n.idToken&&n.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(n),o=!0),u&&await p_(this),await this.auth._persistUserIfCurrent(this),o&&this.auth._notifyListenersIfCurrent(this)}async delete(){const n=await this.getIdToken();return await fd(this,fS(this.auth,{idToken:n})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(n=>Object.assign({},n)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(n,u){var o,i,t,r,s,d,l,c;const _=(o=u.displayName)!==null&&o!==void 0?o:void 0,p=(i=u.email)!==null&&i!==void 0?i:void 0,f=(t=u.phoneNumber)!==null&&t!==void 0?t:void 0,y=(r=u.photoURL)!==null&&r!==void 0?r:void 0,D=(s=u.tenantId)!==null&&s!==void 0?s:void 0,P=(d=u._redirectEventId)!==null&&d!==void 0?d:void 0,v=(l=u.createdAt)!==null&&l!==void 0?l:void 0,j=(c=u.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:M,emailVerified:S,isAnonymous:$,providerData:C,stsTokenManager:L}=u;qe(M&&L,n,"internal-error");const T=Sl.fromJSON(this.name,L);qe(typeof M=="string",n,"internal-error"),oa(_,n.name),oa(p,n.name),qe(typeof S=="boolean",n,"internal-error"),qe(typeof $=="boolean",n,"internal-error"),oa(f,n.name),oa(y,n.name),oa(D,n.name),oa(P,n.name),oa(v,n.name),oa(j,n.name);const q=new Er({uid:M,auth:n,email:p,emailVerified:S,displayName:_,isAnonymous:$,photoURL:y,phoneNumber:f,tenantId:D,stsTokenManager:T,createdAt:v,lastLoginAt:j});return C&&Array.isArray(C)&&(q.providerData=C.map(V=>Object.assign({},V))),P&&(q._redirectEventId=P),q}static async _fromIdTokenResponse(n,u,o=!1){const i=new Sl;i.updateFromServerResponse(u);const t=new Er({uid:u.localId,auth:n,stsTokenManager:i,isAnonymous:o});return await p_(t),t}}/**
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
 */class V9{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(n,u){this.storage[n]=u}async _get(n){const u=this.storage[n];return u===void 0?null:u}async _remove(n){delete this.storage[n]}_addListener(n,u){}_removeListener(n,u){}}V9.type="NONE";const y3=V9;/**
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
 */function q0(e,n,u){return`firebase:${e}:${n}:${u}`}class od{constructor(n,u,o){this.persistence=n,this.auth=u,this.userKey=o;const{config:i,name:t}=this.auth;this.fullUserKey=q0(this.userKey,i.apiKey,t),this.fullPersistenceKey=q0("persistence",i.apiKey,t),this.boundEventHandler=u._onStorageEvent.bind(u),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(n){return this.persistence._set(this.fullUserKey,n.toJSON())}async getCurrentUser(){const n=await this.persistence._get(this.fullUserKey);return n?Er._fromJSON(this.auth,n):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(n){if(this.persistence===n)return;const u=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=n,u)return this.setCurrentUser(u)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(n,u,o="authUser"){if(!u.length)return new od(Pt(y3),n,o);const i=(await Promise.all(u.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let t=i[0]||Pt(y3);const r=q0(o,n.config.apiKey,n.name);let s=null;for(const l of u)try{const c=await l._get(r);if(c){const _=Er._fromJSON(n,c);l!==t&&(s=_),t=l;break}}catch{}const d=i.filter(l=>l._shouldAllowMigration);return!t._shouldAllowMigration||!d.length?new od(t,n,o):(t=d[0],s&&await t._set(r,s.toJSON()),await Promise.all(u.map(async l=>{if(l!==t)try{await l._remove(r)}catch{}})),new od(t,n,o))}}/**
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
 */function F3(e){const n=e.toLowerCase();if(n.includes("opera/")||n.includes("opr/")||n.includes("opios/"))return"Opera";if(K9(n))return"IEMobile";if(n.includes("msie")||n.includes("trident/"))return"IE";if(n.includes("edge/"))return"Edge";if(W9(n))return"Firefox";if(n.includes("silk/"))return"Silk";if(J9(n))return"Blackberry";if(X9(n))return"Webos";if(rf(n))return"Safari";if((n.includes("chrome/")||q9(n))&&!n.includes("edge/"))return"Chrome";if(G9(n))return"Android";{const u=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,o=e.match(u);if((o==null?void 0:o.length)===2)return o[1]}return"Other"}function W9(e=ku()){return/firefox\//i.test(e)}function rf(e=ku()){const n=e.toLowerCase();return n.includes("safari/")&&!n.includes("chrome/")&&!n.includes("crios/")&&!n.includes("android")}function q9(e=ku()){return/crios\//i.test(e)}function K9(e=ku()){return/iemobile/i.test(e)}function G9(e=ku()){return/android/i.test(e)}function J9(e=ku()){return/blackberry/i.test(e)}function X9(e=ku()){return/webos/i.test(e)}function kg(e=ku()){return/iphone|ipad|ipod/i.test(e)}function ES(e=ku()){var n;return kg(e)&&!!(!((n=window.navigator)===null||n===void 0)&&n.standalone)}function MS(){return M9()&&document.documentMode===10}function Q9(e=ku()){return kg(e)||G9(e)||X9(e)||J9(e)||/windows phone/i.test(e)||K9(e)}function TS(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Z9(e,n=[]){let u;switch(e){case"Browser":u=F3(ku());break;case"Worker":u=`${F3(ku())}-${e}`;break;default:u=e}const o=n.length?n.join(","):"FirebaseCore-web";return`${u}/JsCore/${Vd}/${o}`}/**
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
 */class SS{constructor(n){this.auth=n,this.queue=[]}pushCallback(n,u){const o=t=>new Promise((r,s)=>{try{const d=n(t);r(d)}catch(d){s(d)}});o.onAbort=u,this.queue.push(o);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(n){if(this.auth.currentUser===n)return;const u=[];try{for(const o of this.queue)await o(n),o.onAbort&&u.push(o.onAbort)}catch(o){u.reverse();for(const i of u)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:o.message})}}}/**
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
 */class LS{constructor(n,u,o){this.app=n,this.heartbeatServiceProvider=u,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new b3(this),this.idTokenSubscription=new b3(this),this.beforeStateQueue=new SS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=N9,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=n.name,this.clientVersion=o.sdkClientVersion}_initializeWithPersistence(n,u){return u&&(this._popupRedirectResolver=Pt(u)),this._initializationPromise=this.queue(async()=>{var o,i;if(!this._deleted&&(this.persistenceManager=await od.create(this,n),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(u),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const n=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!n)){if(this.currentUser&&n&&this.currentUser.uid===n.uid){this._currentUser._assign(n),await this.currentUser.getIdToken();return}await this._updateCurrentUser(n,!0)}}async initializeCurrentUser(n){var u;const o=await this.assertedPersistence.getCurrentUser();let i=o,t=!1;if(n&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=(u=this.redirectUser)===null||u===void 0?void 0:u._redirectEventId,s=i==null?void 0:i._redirectEventId,d=await this.tryRedirectSignIn(n);(!r||r===s)&&(d==null?void 0:d.user)&&(i=d.user,t=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(t)try{await this.beforeStateQueue.runMiddleware(i)}catch(r){i=o,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(r))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return qe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(n){let u=null;try{u=await this._popupRedirectResolver._completeRedirectFn(this,n,!0)}catch{await this._setRedirectUser(null)}return u}async reloadAndSetCurrentUserOrClear(n){try{await p_(n)}catch(u){if(u.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(n)}useDeviceLanguage(){this.languageCode=gS()}async _delete(){this._deleted=!0}async updateCurrentUser(n){const u=n?Hn(n):null;return u&&qe(u.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(u&&u._clone(this))}async _updateCurrentUser(n,u=!1){if(!this._deleted)return n&&qe(this.tenantId===n.tenantId,this,"tenant-id-mismatch"),u||await this.beforeStateQueue.runMiddleware(n),this.queue(async()=>{await this.directlySetCurrentUser(n),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(n){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Pt(n))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(n){this._errorFactory=new cs("auth","Firebase",n())}onAuthStateChanged(n,u,o){return this.registerStateListener(this.authStateSubscription,n,u,o)}beforeAuthStateChanged(n,u){return this.beforeStateQueue.pushCallback(n,u)}onIdTokenChanged(n,u,o){return this.registerStateListener(this.idTokenSubscription,n,u,o)}toJSON(){var n;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(n=this._currentUser)===null||n===void 0?void 0:n.toJSON()}}async _setRedirectUser(n,u){const o=await this.getOrInitRedirectPersistenceManager(u);return n===null?o.removeCurrentUser():o.setCurrentUser(n)}async getOrInitRedirectPersistenceManager(n){if(!this.redirectPersistenceManager){const u=n&&Pt(n)||this._popupRedirectResolver;qe(u,this,"argument-error"),this.redirectPersistenceManager=await od.create(this,[Pt(u._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(n){var u,o;return this._isInitialized&&await this.queue(async()=>{}),((u=this._currentUser)===null||u===void 0?void 0:u._redirectEventId)===n?this._currentUser:((o=this.redirectUser)===null||o===void 0?void 0:o._redirectEventId)===n?this.redirectUser:null}async _persistUserIfCurrent(n){if(n===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(n))}_notifyListenersIfCurrent(n){n===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n,u;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const o=(u=(n=this.currentUser)===null||n===void 0?void 0:n.uid)!==null&&u!==void 0?u:null;this.lastNotifiedUid!==o&&(this.lastNotifiedUid=o,this.authStateSubscription.next(this.currentUser))}registerStateListener(n,u,o,i){if(this._deleted)return()=>{};const t=typeof u=="function"?u:u.next.bind(u),r=this._isInitialized?Promise.resolve():this._initializationPromise;return qe(r,this,"internal-error"),r.then(()=>t(this.currentUser)),typeof u=="function"?n.addObserver(u,o,i):n.addObserver(u)}async directlySetCurrentUser(n){this.currentUser&&this.currentUser!==n&&(this._currentUser._stopProactiveRefresh(),n&&this.isProactiveRefreshEnabled&&n._startProactiveRefresh()),this.currentUser=n,n?await this.assertedPersistence.setCurrentUser(n):await this.assertedPersistence.removeCurrentUser()}queue(n){return this.operations=this.operations.then(n,n),this.operations}get assertedPersistence(){return qe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(n){!n||this.frameworks.includes(n)||(this.frameworks.push(n),this.frameworks.sort(),this.clientVersion=Z9(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var n;const u={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(u["X-Firebase-gmpid"]=this.app.options.appId);const o=await((n=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||n===void 0?void 0:n.getHeartbeatsHeader());return o&&(u["X-Firebase-Client"]=o),u}}function pc(e){return Hn(e)}class b3{constructor(n){this.auth=n,this.observer=null,this.addObserver=J7(u=>this.observer=u)}get next(){return qe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class sf{constructor(n,u){this.providerId=n,this.signInMethod=u}toJSON(){return Bt("not implemented")}_getIdTokenResponse(n){return Bt("not implemented")}_linkToIdToken(n,u){return Bt("not implemented")}_getReauthenticationResolver(n){return Bt("not implemented")}}async function CS(e,n){return Wd(e,"POST","/v1/accounts:update",n)}/**
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
 */async function AS(e,n){return gc(e,"POST","/v1/accounts:signInWithPassword",_c(e,n))}/**
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
 */async function xS(e,n){return gc(e,"POST","/v1/accounts:signInWithEmailLink",_c(e,n))}async function YS(e,n){return gc(e,"POST","/v1/accounts:signInWithEmailLink",_c(e,n))}/**
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
 */class Ll extends sf{constructor(n,u,o,i=null){super("password",o),this._email=n,this._password=u,this._tenantId=i}static _fromEmailAndPassword(n,u){return new Ll(n,u,"password")}static _fromEmailAndCode(n,u,o=null){return new Ll(n,u,"emailLink",o)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(n){const u=typeof n=="string"?JSON.parse(n):n;if((u==null?void 0:u.email)&&(u==null?void 0:u.password)){if(u.signInMethod==="password")return this._fromEmailAndPassword(u.email,u.password);if(u.signInMethod==="emailLink")return this._fromEmailAndCode(u.email,u.password,u.tenantId)}return null}async _getIdTokenResponse(n){switch(this.signInMethod){case"password":return AS(n,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return xS(n,{email:this._email,oobCode:this._password});default:gi(n,"internal-error")}}async _linkToIdToken(n,u){switch(this.signInMethod){case"password":return CS(n,{idToken:u,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return YS(n,{idToken:u,email:this._email,oobCode:this._password});default:gi(n,"internal-error")}}_getReauthenticationResolver(n){return this._getIdTokenResponse(n)}}/**
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
 */async function id(e,n){return gc(e,"POST","/v1/accounts:signInWithIdp",_c(e,n))}/**
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
 */const IS="http://localhost";class zr extends sf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(n){const u=new zr(n.providerId,n.signInMethod);return n.idToken||n.accessToken?(n.idToken&&(u.idToken=n.idToken),n.accessToken&&(u.accessToken=n.accessToken),n.nonce&&!n.pendingToken&&(u.nonce=n.nonce),n.pendingToken&&(u.pendingToken=n.pendingToken)):n.oauthToken&&n.oauthTokenSecret?(u.accessToken=n.oauthToken,u.secret=n.oauthTokenSecret):gi("argument-error"),u}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(n){const u=typeof n=="string"?JSON.parse(n):n,{providerId:o,signInMethod:i}=u,t=uf(u,["providerId","signInMethod"]);if(!o||!i)return null;const r=new zr(o,i);return r.idToken=t.idToken||void 0,r.accessToken=t.accessToken||void 0,r.secret=t.secret,r.nonce=t.nonce,r.pendingToken=t.pendingToken||null,r}_getIdTokenResponse(n){const u=this.buildRequest();return id(n,u)}_linkToIdToken(n,u){const o=this.buildRequest();return o.idToken=u,id(n,o)}_getReauthenticationResolver(n){const u=this.buildRequest();return u.autoCreate=!1,id(n,u)}buildRequest(){const n={requestUri:IS,returnSecureToken:!0};if(this.pendingToken)n.pendingToken=this.pendingToken;else{const u={};this.idToken&&(u.id_token=this.idToken),this.accessToken&&(u.access_token=this.accessToken),this.secret&&(u.oauth_token_secret=this.secret),u.providerId=this.providerId,this.nonce&&!this.pendingToken&&(u.nonce=this.nonce),n.postBody=lc(u)}return n}}/**
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
 */function OS(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function NS(e){const n=Hm(Um(e)).link,u=n?Hm(Um(n)).deep_link_id:null,o=Hm(Um(e)).deep_link_id;return(o?Hm(Um(o)).link:null)||o||u||n||e}class df{constructor(n){var u,o,i,t,r,s;const d=Hm(Um(n)),l=(u=d.apiKey)!==null&&u!==void 0?u:null,c=(o=d.oobCode)!==null&&o!==void 0?o:null,_=OS((i=d.mode)!==null&&i!==void 0?i:null);qe(l&&c&&_,"argument-error"),this.apiKey=l,this.operation=_,this.code=c,this.continueUrl=(t=d.continueUrl)!==null&&t!==void 0?t:null,this.languageCode=(r=d.languageCode)!==null&&r!==void 0?r:null,this.tenantId=(s=d.tenantId)!==null&&s!==void 0?s:null}static parseLink(n){const u=NS(n);try{return new df(u)}catch{return null}}}/**
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
 */class qd{constructor(){this.providerId=qd.PROVIDER_ID}static credential(n,u){return Ll._fromEmailAndPassword(n,u)}static credentialWithLink(n,u){const o=df.parseLink(u);return qe(o,"argument-error"),Ll._fromEmailAndCode(n,o.code,o.tenantId)}}qd.PROVIDER_ID="password";qd.EMAIL_PASSWORD_SIGN_IN_METHOD="password";qd.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class mf{constructor(n){this.providerId=n,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(n){this.defaultLanguageCode=n}setCustomParameters(n){return this.customParameters=n,this}getCustomParameters(){return this.customParameters}}/**
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
 */class hc extends mf{constructor(){super(...arguments),this.scopes=[]}addScope(n){return this.scopes.includes(n)||this.scopes.push(n),this}getScopes(){return[...this.scopes]}}/**
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
 */class bt extends hc{constructor(){super("facebook.com")}static credential(n){return zr._fromParams({providerId:bt.PROVIDER_ID,signInMethod:bt.FACEBOOK_SIGN_IN_METHOD,accessToken:n})}static credentialFromResult(n){return bt.credentialFromTaggedObject(n)}static credentialFromError(n){return bt.credentialFromTaggedObject(n.customData||{})}static credentialFromTaggedObject({_tokenResponse:n}){if(!n||!("oauthAccessToken"in n)||!n.oauthAccessToken)return null;try{return bt.credential(n.oauthAccessToken)}catch{return null}}}bt.FACEBOOK_SIGN_IN_METHOD="facebook.com";bt.PROVIDER_ID="facebook.com";/**
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
 */class wt extends hc{constructor(){super("google.com"),this.addScope("profile")}static credential(n,u){return zr._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.GOOGLE_SIGN_IN_METHOD,idToken:n,accessToken:u})}static credentialFromResult(n){return wt.credentialFromTaggedObject(n)}static credentialFromError(n){return wt.credentialFromTaggedObject(n.customData||{})}static credentialFromTaggedObject({_tokenResponse:n}){if(!n)return null;const{oauthIdToken:u,oauthAccessToken:o}=n;if(!u&&!o)return null;try{return wt.credential(u,o)}catch{return null}}}wt.GOOGLE_SIGN_IN_METHOD="google.com";wt.PROVIDER_ID="google.com";/**
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
 */class _a extends hc{constructor(){super("github.com")}static credential(n){return zr._fromParams({providerId:_a.PROVIDER_ID,signInMethod:_a.GITHUB_SIGN_IN_METHOD,accessToken:n})}static credentialFromResult(n){return _a.credentialFromTaggedObject(n)}static credentialFromError(n){return _a.credentialFromTaggedObject(n.customData||{})}static credentialFromTaggedObject({_tokenResponse:n}){if(!n||!("oauthAccessToken"in n)||!n.oauthAccessToken)return null;try{return _a.credential(n.oauthAccessToken)}catch{return null}}}_a.GITHUB_SIGN_IN_METHOD="github.com";_a.PROVIDER_ID="github.com";/**
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
 */class ga extends hc{constructor(){super("twitter.com")}static credential(n,u){return zr._fromParams({providerId:ga.PROVIDER_ID,signInMethod:ga.TWITTER_SIGN_IN_METHOD,oauthToken:n,oauthTokenSecret:u})}static credentialFromResult(n){return ga.credentialFromTaggedObject(n)}static credentialFromError(n){return ga.credentialFromTaggedObject(n.customData||{})}static credentialFromTaggedObject({_tokenResponse:n}){if(!n)return null;const{oauthAccessToken:u,oauthTokenSecret:o}=n;if(!u||!o)return null;try{return ga.credential(u,o)}catch{return null}}}ga.TWITTER_SIGN_IN_METHOD="twitter.com";ga.PROVIDER_ID="twitter.com";/**
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
 */async function RS(e,n){return gc(e,"POST","/v1/accounts:signUp",_c(e,n))}/**
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
 */class Vr{constructor(n){this.user=n.user,this.providerId=n.providerId,this._tokenResponse=n._tokenResponse,this.operationType=n.operationType}static async _fromIdTokenResponse(n,u,o,i=!1){const t=await Er._fromIdTokenResponse(n,o,i),r=w3(o);return new Vr({user:t,providerId:r,_tokenResponse:o,operationType:u})}static async _forOperation(n,u,o){await n._updateTokensIfNecessary(o,!0);const i=w3(o);return new Vr({user:n,providerId:i,_tokenResponse:o,operationType:u})}}function w3(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
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
 */class h_ extends ot{constructor(n,u,o,i){var t;super(u.code,u.message),this.operationType=o,this.user=i,Object.setPrototypeOf(this,h_.prototype),this.customData={appName:n.name,tenantId:(t=n.tenantId)!==null&&t!==void 0?t:void 0,_serverResponse:u.customData._serverResponse,operationType:o}}static _fromErrorAndOperation(n,u,o,i){return new h_(n,u,o,i)}}function ew(e,n,u,o){return(n==="reauthenticate"?u._getReauthenticationResolver(e):u._getIdTokenResponse(e)).catch(t=>{throw t.code==="auth/multi-factor-auth-required"?h_._fromErrorAndOperation(e,t,n,o):t})}async function $S(e,n,u=!1){const o=await fd(e,n._linkToIdToken(e.auth,await e.getIdToken()),u);return Vr._forOperation(e,"link",o)}/**
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
 */async function HS(e,n,u=!1){const{auth:o}=e,i="reauthenticate";try{const t=await fd(e,ew(o,i,n,e),u);qe(t.idToken,o,"internal-error");const r=af(t.idToken);qe(r,o,"internal-error");const{sub:s}=r;return qe(e.uid===s,o,"user-mismatch"),Vr._forOperation(e,i,t)}catch(t){throw(t==null?void 0:t.code)==="auth/user-not-found"&&gi(o,"user-mismatch"),t}}/**
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
 */async function nw(e,n,u=!1){const o="signIn",i=await ew(e,o,n),t=await Vr._fromIdTokenResponse(e,o,i);return u||await e._updateCurrentUser(t.user),t}async function US(e,n){return nw(pc(e),n)}async function zS(e,n,u){const o=pc(e),i=await RS(o,{returnSecureToken:!0,email:n,password:u}),t=await Vr._fromIdTokenResponse(o,"signIn",i);return await o._updateCurrentUser(t.user),t}function VS(e,n,u){return US(Hn(e),qd.credential(n,u))}/**
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
 */async function WS(e,n){return Wd(e,"POST","/v1/accounts:update",n)}/**
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
 */async function qS(e,{displayName:n,photoURL:u}){if(n===void 0&&u===void 0)return;const o=Hn(e),t={idToken:await o.getIdToken(),displayName:n,photoUrl:u,returnSecureToken:!0},r=await fd(o,WS(o.auth,t));o.displayName=r.displayName||null,o.photoURL=r.photoUrl||null;const s=o.providerData.find(({providerId:d})=>d==="password");s&&(s.displayName=o.displayName,s.photoURL=o.photoURL),await o._updateTokensIfNecessary(r)}function KS(e,n,u,o){return Hn(e).onAuthStateChanged(n,u,o)}function GS(e){return Hn(e).signOut()}const k_="__sak";/**
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
 */class uw{constructor(n,u){this.storageRetriever=n,this.type=u}_isAvailable(){try{return this.storage?(this.storage.setItem(k_,"1"),this.storage.removeItem(k_),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(n,u){return this.storage.setItem(n,JSON.stringify(u)),Promise.resolve()}_get(n){const u=this.storage.getItem(n);return Promise.resolve(u?JSON.parse(u):null)}_remove(n){return this.storage.removeItem(n),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function JS(){const e=ku();return rf(e)||kg(e)}const XS=1e3,QS=10;class ow extends uw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(n,u)=>this.onStorageEvent(n,u),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=JS()&&TS(),this.fallbackToPolling=Q9(),this._shouldAllowMigration=!0}forAllChangedKeys(n){for(const u of Object.keys(this.listeners)){const o=this.storage.getItem(u),i=this.localCache[u];o!==i&&n(u,i,o)}}onStorageEvent(n,u=!1){if(!n.key){this.forAllChangedKeys((r,s,d)=>{this.notifyListeners(r,d)});return}const o=n.key;if(u?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(o);if(n.newValue!==r)n.newValue!==null?this.storage.setItem(o,n.newValue):this.storage.removeItem(o);else if(this.localCache[o]===n.newValue&&!u)return}const i=()=>{const r=this.storage.getItem(o);!u&&this.localCache[o]===r||this.notifyListeners(o,r)},t=this.storage.getItem(o);MS()&&t!==n.newValue&&n.newValue!==n.oldValue?setTimeout(i,QS):i()}notifyListeners(n,u){this.localCache[n]=u;const o=this.listeners[n];if(o)for(const i of Array.from(o))i(u&&JSON.parse(u))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((n,u,o)=>{this.onStorageEvent(new StorageEvent("storage",{key:n,oldValue:u,newValue:o}),!0)})},XS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(n,u){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[n]||(this.listeners[n]=new Set,this.localCache[n]=this.storage.getItem(n)),this.listeners[n].add(u)}_removeListener(n,u){this.listeners[n]&&(this.listeners[n].delete(u),this.listeners[n].size===0&&delete this.listeners[n]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(n,u){await super._set(n,u),this.localCache[n]=JSON.stringify(u)}async _get(n){const u=await super._get(n);return this.localCache[n]=JSON.stringify(u),u}async _remove(n){await super._remove(n),delete this.localCache[n]}}ow.type="LOCAL";const ZS=ow;/**
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
 */class iw extends uw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(n,u){}_removeListener(n,u){}}iw.type="SESSION";const tw=iw;/**
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
 */function eL(e){return Promise.all(e.map(async n=>{try{const u=await n;return{fulfilled:!0,value:u}}catch(u){return{fulfilled:!1,reason:u}}}))}/**
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
 */class fg{constructor(n){this.eventTarget=n,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(n){const u=this.receivers.find(i=>i.isListeningto(n));if(u)return u;const o=new fg(n);return this.receivers.push(o),o}isListeningto(n){return this.eventTarget===n}async handleEvent(n){const u=n,{eventId:o,eventType:i,data:t}=u.data,r=this.handlersMap[i];if(!(r!=null&&r.size))return;u.ports[0].postMessage({status:"ack",eventId:o,eventType:i});const s=Array.from(r).map(async l=>l(u.origin,t)),d=await eL(s);u.ports[0].postMessage({status:"done",eventId:o,eventType:i,response:d})}_subscribe(n,u){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[n]||(this.handlersMap[n]=new Set),this.handlersMap[n].add(u)}_unsubscribe(n,u){this.handlersMap[n]&&u&&this.handlersMap[n].delete(u),(!u||this.handlersMap[n].size===0)&&delete this.handlersMap[n],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}fg.receivers=[];/**
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
 */function lf(e="",n=10){let u="";for(let o=0;o<n;o++)u+=Math.floor(Math.random()*10);return e+u}/**
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
 */class nL{constructor(n){this.target=n,this.handlers=new Set}removeMessageHandler(n){n.messageChannel&&(n.messageChannel.port1.removeEventListener("message",n.onMessage),n.messageChannel.port1.close()),this.handlers.delete(n)}async _send(n,u,o=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let t,r;return new Promise((s,d)=>{const l=lf("",20);i.port1.start();const c=setTimeout(()=>{d(new Error("unsupported_event"))},o);r={messageChannel:i,onMessage(_){const p=_;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(c),t=setTimeout(()=>{d(new Error("timeout"))},3e3);break;case"done":clearTimeout(t),s(p.data.response);break;default:clearTimeout(c),clearTimeout(t),d(new Error("invalid_response"));break}}},this.handlers.add(r),i.port1.addEventListener("message",r.onMessage),this.target.postMessage({eventType:n,eventId:l,data:u},[i.port2])}).finally(()=>{r&&this.removeMessageHandler(r)})}}/**
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
 */function Xi(){return window}function uL(e){Xi().location.href=e}/**
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
 */function aw(){return typeof Xi().WorkerGlobalScope!="undefined"&&typeof Xi().importScripts=="function"}async function oL(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function iL(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function tL(){return aw()?self:null}/**
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
 */const rw="firebaseLocalStorageDb",aL=1,f_="firebaseLocalStorage",sw="fbase_key";class kc{constructor(n){this.request=n}toPromise(){return new Promise((n,u)=>{this.request.addEventListener("success",()=>{n(this.request.result)}),this.request.addEventListener("error",()=>{u(this.request.error)})})}}function yg(e,n){return e.transaction([f_],n?"readwrite":"readonly").objectStore(f_)}function rL(){const e=indexedDB.deleteDatabase(rw);return new kc(e).toPromise()}function P1(){const e=indexedDB.open(rw,aL);return new Promise((n,u)=>{e.addEventListener("error",()=>{u(e.error)}),e.addEventListener("upgradeneeded",()=>{const o=e.result;try{o.createObjectStore(f_,{keyPath:sw})}catch(i){u(i)}}),e.addEventListener("success",async()=>{const o=e.result;o.objectStoreNames.contains(f_)?n(o):(o.close(),await rL(),n(await P1()))})})}async function j3(e,n,u){const o=yg(e,!0).put({[sw]:n,value:u});return new kc(o).toPromise()}async function sL(e,n){const u=yg(e,!1).get(n),o=await new kc(u).toPromise();return o===void 0?null:o.value}function D3(e,n){const u=yg(e,!0).delete(n);return new kc(u).toPromise()}const dL=800,mL=3;class dw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await P1(),this.db)}async _withRetries(n){let u=0;for(;;)try{const o=await this._openDb();return await n(o)}catch(o){if(u++>mL)throw o;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return aw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=fg._getInstance(tL()),this.receiver._subscribe("keyChanged",async(n,u)=>({keyProcessed:(await this._poll()).includes(u.key)})),this.receiver._subscribe("ping",async(n,u)=>["keyChanged"])}async initializeSender(){var n,u;if(this.activeServiceWorker=await oL(),!this.activeServiceWorker)return;this.sender=new nL(this.activeServiceWorker);const o=await this.sender._send("ping",{},800);!o||((n=o[0])===null||n===void 0?void 0:n.fulfilled)&&((u=o[0])===null||u===void 0?void 0:u.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(n){if(!(!this.sender||!this.activeServiceWorker||iL()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:n},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const n=await P1();return await j3(n,k_,"1"),await D3(n,k_),!0}catch{}return!1}async _withPendingWrite(n){this.pendingWrites++;try{await n()}finally{this.pendingWrites--}}async _set(n,u){return this._withPendingWrite(async()=>(await this._withRetries(o=>j3(o,n,u)),this.localCache[n]=u,this.notifyServiceWorker(n)))}async _get(n){const u=await this._withRetries(o=>sL(o,n));return this.localCache[n]=u,u}async _remove(n){return this._withPendingWrite(async()=>(await this._withRetries(u=>D3(u,n)),delete this.localCache[n],this.notifyServiceWorker(n)))}async _poll(){const n=await this._withRetries(i=>{const t=yg(i,!1).getAll();return new kc(t).toPromise()});if(!n)return[];if(this.pendingWrites!==0)return[];const u=[],o=new Set;for(const{fbase_key:i,value:t}of n)o.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(t)&&(this.notifyListeners(i,t),u.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!o.has(i)&&(this.notifyListeners(i,null),u.push(i));return u}notifyListeners(n,u){this.localCache[n]=u;const o=this.listeners[n];if(o)for(const i of Array.from(o))i(u)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),dL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(n,u){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[n]||(this.listeners[n]=new Set,this._get(n)),this.listeners[n].add(u)}_removeListener(n,u){this.listeners[n]&&(this.listeners[n].delete(u),this.listeners[n].size===0&&delete this.listeners[n]),Object.keys(this.listeners).length===0&&this.stopPolling()}}dw.type="LOCAL";const lL=dw;/**
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
 */function cL(){var e,n;return(n=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&n!==void 0?n:document}function _L(e){return new Promise((n,u)=>{const o=document.createElement("script");o.setAttribute("src",e),o.onload=n,o.onerror=i=>{const t=Ji("internal-error");t.customData=i,u(t)},o.type="text/javascript",o.charset="UTF-8",cL().appendChild(o)})}function gL(e){return`__${e}${Math.floor(Math.random()*1e6)}`}new cc(3e4,6e4);/**
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
 */function mw(e,n){return n?Pt(n):(qe(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class cf extends sf{constructor(n){super("custom","custom"),this.params=n}_getIdTokenResponse(n){return id(n,this._buildIdpRequest())}_linkToIdToken(n,u){return id(n,this._buildIdpRequest(u))}_getReauthenticationResolver(n){return id(n,this._buildIdpRequest())}_buildIdpRequest(n){const u={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return n&&(u.idToken=n),u}}function pL(e){return nw(e.auth,new cf(e),e.bypassAuthState)}function hL(e){const{auth:n,user:u}=e;return qe(u,n,"internal-error"),HS(u,new cf(e),e.bypassAuthState)}async function kL(e){const{auth:n,user:u}=e;return qe(u,n,"internal-error"),$S(u,new cf(e),e.bypassAuthState)}/**
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
 */class lw{constructor(n,u,o,i,t=!1){this.auth=n,this.resolver=o,this.user=i,this.bypassAuthState=t,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(u)?u:[u]}execute(){return new Promise(async(n,u)=>{this.pendingPromise={resolve:n,reject:u};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(o){this.reject(o)}})}async onAuthEvent(n){const{urlResponse:u,sessionId:o,postBody:i,tenantId:t,error:r,type:s}=n;if(r){this.reject(r);return}const d={auth:this.auth,requestUri:u,sessionId:o,tenantId:t||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(d))}catch(l){this.reject(l)}}onError(n){this.reject(n)}getIdpTask(n){switch(n){case"signInViaPopup":case"signInViaRedirect":return pL;case"linkViaPopup":case"linkViaRedirect":return kL;case"reauthViaPopup":case"reauthViaRedirect":return hL;default:gi(this.auth,"internal-error")}}resolve(n){Lt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(n),this.unregisterAndCleanUp()}reject(n){Lt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(n),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const fL=new cc(2e3,1e4);async function v3(e,n,u){const o=pc(e);dS(e,n,mf);const i=mw(o,u);return new yr(o,"signInViaPopup",n,i).executeNotNull()}class yr extends lw{constructor(n,u,o,i,t){super(n,u,i,t),this.provider=o,this.authWindow=null,this.pollId=null,yr.currentPopupAction&&yr.currentPopupAction.cancel(),yr.currentPopupAction=this}async executeNotNull(){const n=await this.execute();return qe(n,this.auth,"internal-error"),n}async onExecution(){Lt(this.filter.length===1,"Popup operations only handle one event");const n=lf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],n),this.authWindow.associatedEvent=n,this.resolver._originValidation(this.auth).catch(u=>{this.reject(u)}),this.resolver._isIframeWebStorageSupported(this.auth,u=>{u||this.reject(Ji(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var n;return((n=this.authWindow)===null||n===void 0?void 0:n.associatedEvent)||null}cancel(){this.reject(Ji(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,yr.currentPopupAction=null}pollUserCancellation(){const n=()=>{var u,o;if(!((o=(u=this.authWindow)===null||u===void 0?void 0:u.window)===null||o===void 0)&&o.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ji(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(n,fL.get())};n()}}yr.currentPopupAction=null;/**
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
 */const yL="pendingRedirect",K0=new Map;class FL extends lw{constructor(n,u,o=!1){super(n,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],u,void 0,o),this.eventId=null}async execute(){let n=K0.get(this.auth._key());if(!n){try{const o=await bL(this.resolver,this.auth)?await super.execute():null;n=()=>Promise.resolve(o)}catch(u){n=()=>Promise.reject(u)}K0.set(this.auth._key(),n)}return this.bypassAuthState||K0.set(this.auth._key(),()=>Promise.resolve(null)),n()}async onAuthEvent(n){if(n.type==="signInViaRedirect")return super.onAuthEvent(n);if(n.type==="unknown"){this.resolve(null);return}if(n.eventId){const u=await this.auth._redirectUserForId(n.eventId);if(u)return this.user=u,super.onAuthEvent(n);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function bL(e,n){const u=DL(n),o=jL(e);if(!await o._isAvailable())return!1;const i=await o._get(u)==="true";return await o._remove(u),i}function wL(e,n){K0.set(e._key(),n)}function jL(e){return Pt(e._redirectPersistence)}function DL(e){return q0(yL,e.config.apiKey,e.name)}async function vL(e,n,u=!1){const o=pc(e),i=mw(o,n),r=await new FL(o,i,u).execute();return r&&!u&&(delete r.user._redirectEventId,await o._persistUserIfCurrent(r.user),await o._setRedirectUser(null,n)),r}/**
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
 */const BL=10*60*1e3;class PL{constructor(n){this.auth=n,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(n){this.consumers.add(n),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,n)&&(this.sendToConsumer(this.queuedRedirectEvent,n),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(n){this.consumers.delete(n)}onEvent(n){if(this.hasEventBeenHandled(n))return!1;let u=!1;return this.consumers.forEach(o=>{this.isEventForConsumer(n,o)&&(u=!0,this.sendToConsumer(n,o),this.saveEventToCache(n))}),this.hasHandledPotentialRedirect||!EL(n)||(this.hasHandledPotentialRedirect=!0,u||(this.queuedRedirectEvent=n,u=!0)),u}sendToConsumer(n,u){var o;if(n.error&&!cw(n)){const i=((o=n.error.code)===null||o===void 0?void 0:o.split("auth/")[1])||"internal-error";u.onError(Ji(this.auth,i))}else u.onAuthEvent(n)}isEventForConsumer(n,u){const o=u.eventId===null||!!n.eventId&&n.eventId===u.eventId;return u.filter.includes(n.type)&&o}hasEventBeenHandled(n){return Date.now()-this.lastProcessedEventTime>=BL&&this.cachedEventUids.clear(),this.cachedEventUids.has(B3(n))}saveEventToCache(n){this.cachedEventUids.add(B3(n)),this.lastProcessedEventTime=Date.now()}}function B3(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(n=>n).join("-")}function cw({type:e,error:n}){return e==="unknown"&&(n==null?void 0:n.code)==="auth/no-auth-event"}function EL(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return cw(e);default:return!1}}/**
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
 */async function ML(e,n={}){return Wd(e,"GET","/v1/projects",n)}/**
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
 */const TL=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,SL=/^https?/;async function LL(e){if(e.config.emulator)return;const{authorizedDomains:n}=await ML(e);for(const u of n)try{if(CL(u))return}catch{}gi(e,"unauthorized-domain")}function CL(e){const n=B1(),{protocol:u,hostname:o}=new URL(n);if(e.startsWith("chrome-extension://")){const r=new URL(e);return r.hostname===""&&o===""?u==="chrome-extension:"&&e.replace("chrome-extension://","")===n.replace("chrome-extension://",""):u==="chrome-extension:"&&r.hostname===o}if(!SL.test(u))return!1;if(TL.test(e))return o===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(o)}/**
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
 */const AL=new cc(3e4,6e4);function P3(){const e=Xi().___jsl;if(e!=null&&e.H){for(const n of Object.keys(e.H))if(e.H[n].r=e.H[n].r||[],e.H[n].L=e.H[n].L||[],e.H[n].r=[...e.H[n].L],e.CP)for(let u=0;u<e.CP.length;u++)e.CP[u]=null}}function xL(e){return new Promise((n,u)=>{var o,i,t;function r(){P3(),gapi.load("gapi.iframes",{callback:()=>{n(gapi.iframes.getContext())},ontimeout:()=>{P3(),u(Ji(e,"network-request-failed"))},timeout:AL.get()})}if(!((i=(o=Xi().gapi)===null||o===void 0?void 0:o.iframes)===null||i===void 0)&&i.Iframe)n(gapi.iframes.getContext());else if(!((t=Xi().gapi)===null||t===void 0)&&t.load)r();else{const s=gL("iframefcb");return Xi()[s]=()=>{gapi.load?r():u(Ji(e,"network-request-failed"))},_L(`https://apis.google.com/js/api.js?onload=${s}`).catch(d=>u(d))}}).catch(n=>{throw G0=null,n})}let G0=null;function YL(e){return G0=G0||xL(e),G0}/**
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
 */const IL=new cc(5e3,15e3),OL="__/auth/iframe",NL="emulator/auth/iframe",RL={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$L=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function HL(e){const n=e.config;qe(n.authDomain,e,"auth-domain-config-required");const u=n.emulator?tf(n,NL):`https://${e.config.authDomain}/${OL}`,o={apiKey:n.apiKey,appName:e.name,v:Vd},i=$L.get(e.config.apiHost);i&&(o.eid=i);const t=e._getFrameworks();return t.length&&(o.fw=t.join(",")),`${u}?${lc(o).slice(1)}`}async function UL(e){const n=await YL(e),u=Xi().gapi;return qe(u,e,"internal-error"),n.open({where:document.body,url:HL(e),messageHandlersFilter:u.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:RL,dontclear:!0},o=>new Promise(async(i,t)=>{await o.restyle({setHideOnLeave:!1});const r=Ji(e,"network-request-failed"),s=Xi().setTimeout(()=>{t(r)},IL.get());function d(){Xi().clearTimeout(s),i(o)}o.ping(d).then(d,()=>{t(r)})}))}/**
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
 */const zL={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},VL=500,WL=600,qL="_blank",KL="http://localhost";class E3{constructor(n){this.window=n,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function GL(e,n,u,o=VL,i=WL){const t=Math.max((window.screen.availHeight-i)/2,0).toString(),r=Math.max((window.screen.availWidth-o)/2,0).toString();let s="";const d=Object.assign(Object.assign({},zL),{width:o.toString(),height:i.toString(),top:t,left:r}),l=ku().toLowerCase();u&&(s=q9(l)?qL:u),W9(l)&&(n=n||KL,d.scrollbars="yes");const c=Object.entries(d).reduce((p,[f,y])=>`${p}${f}=${y},`,"");if(ES(l)&&s!=="_self")return JL(n||"",s),new E3(null);const _=window.open(n||"",s,c);qe(_,e,"popup-blocked");try{_.focus()}catch{}return new E3(_)}function JL(e,n){const u=document.createElement("a");u.href=e,u.target=n;const o=document.createEvent("MouseEvent");o.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),u.dispatchEvent(o)}/**
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
 */const XL="__/auth/handler",QL="emulator/auth/handler";function M3(e,n,u,o,i,t){qe(e.config.authDomain,e,"auth-domain-config-required"),qe(e.config.apiKey,e,"invalid-api-key");const r={apiKey:e.config.apiKey,appName:e.name,authType:u,redirectUrl:o,v:Vd,eventId:i};if(n instanceof mf){n.setDefaultLanguage(e.languageCode),r.providerId=n.providerId||"",G7(n.getCustomParameters())||(r.customParameters=JSON.stringify(n.getCustomParameters()));for(const[d,l]of Object.entries(t||{}))r[d]=l}if(n instanceof hc){const d=n.getScopes().filter(l=>l!=="");d.length>0&&(r.scopes=d.join(","))}e.tenantId&&(r.tid=e.tenantId);const s=r;for(const d of Object.keys(s))s[d]===void 0&&delete s[d];return`${ZL(e)}?${lc(s).slice(1)}`}function ZL({config:e}){return e.emulator?tf(e,QL):`https://${e.authDomain}/${XL}`}/**
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
 */const wh="webStorageSupport";class eC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=tw,this._completeRedirectFn=vL,this._overrideRedirectResult=wL}async _openPopup(n,u,o,i){var t;Lt((t=this.eventManagers[n._key()])===null||t===void 0?void 0:t.manager,"_initialize() not called before _openPopup()");const r=M3(n,u,o,B1(),i);return GL(n,r,lf())}async _openRedirect(n,u,o,i){return await this._originValidation(n),uL(M3(n,u,o,B1(),i)),new Promise(()=>{})}_initialize(n){const u=n._key();if(this.eventManagers[u]){const{manager:i,promise:t}=this.eventManagers[u];return i?Promise.resolve(i):(Lt(t,"If manager is not set, promise should be"),t)}const o=this.initAndGetManager(n);return this.eventManagers[u]={promise:o},o.catch(()=>{delete this.eventManagers[u]}),o}async initAndGetManager(n){const u=await UL(n),o=new PL(n);return u.register("authEvent",i=>(qe(i==null?void 0:i.authEvent,n,"invalid-auth-event"),{status:o.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[n._key()]={manager:o},this.iframes[n._key()]=u,o}_isIframeWebStorageSupported(n,u){this.iframes[n._key()].send(wh,{type:wh},i=>{var t;const r=(t=i==null?void 0:i[0])===null||t===void 0?void 0:t[wh];r!==void 0&&u(!!r),gi(n,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(n){const u=n._key();return this.originValidationPromises[u]||(this.originValidationPromises[u]=LL(n)),this.originValidationPromises[u]}get _shouldInitProactively(){return Q9()||rf()||kg()}}const nC=eC;var T3="@firebase/auth",S3="0.20.2";/**
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
 */class uC{constructor(n){this.auth=n,this.internalListeners=new Map}getUid(){var n;return this.assertAuthConfigured(),((n=this.auth.currentUser)===null||n===void 0?void 0:n.uid)||null}async getToken(n){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(n)}:null}addAuthTokenListener(n){if(this.assertAuthConfigured(),this.internalListeners.has(n))return;const u=this.auth.onIdTokenChanged(o=>{var i;n(((i=o)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(n,u),this.updateProactiveRefresh()}removeAuthTokenListener(n){this.assertAuthConfigured();const u=this.internalListeners.get(n);!u||(this.internalListeners.delete(n),u(),this.updateProactiveRefresh())}assertAuthConfigured(){qe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function oC(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function iC(e){Ni(new _i("auth",(n,{options:u})=>{const o=n.getProvider("app").getImmediate(),i=n.getProvider("heartbeat"),{apiKey:t,authDomain:r}=o.options;return((s,d)=>{qe(t&&!t.includes(":"),"invalid-api-key",{appName:s.name}),qe(!(r!=null&&r.includes(":")),"argument-error",{appName:s.name});const l={apiKey:t,authDomain:r,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Z9(e)},c=new LS(s,d,l);return lS(c,u),c})(o,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((n,u,o)=>{n.getProvider("auth-internal").initialize()})),Ni(new _i("auth-internal",n=>{const u=pc(n.getProvider("auth").getImmediate());return(o=>new uC(o))(u)},"PRIVATE").setInstantiationMode("EXPLICIT")),yo(T3,S3,oC(e)),yo(T3,S3,"esm2017")}/**
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
 */function tC(e=hg()){const n=Na(e,"auth");return n.isInitialized()?n.getImmediate():mS(e,{popupRedirectResolver:nC,persistence:[lL,ZS,tw]})}iC("Browser");const Ra=Jk({id:"chat",state:()=>({chatListContent:[],chatList:[],currentChatUser:{},currentChatId:"",theme:{id:0,name:"M\u1EB7c \u0111\u1ECBnh",right:{bg:"rgb(236,83,42)",color:"#fff"},left:{bg:"#E4E6EB",color:"#000"},background:""}}),getters:{getChatContent:e=>n=>e.chatListContent.find(u=>u.chatId===n),getChatList:e=>e.chatList,getCurrentChatUser:e=>e.currentChatUser,getCurrentChatId:e=>e.currentChatId,getTheme:e=>e.theme},actions:{addChat(e){this.chats.push({id:uniqid(),user:1,content:e})},addChatData(e){this.chatListContent.push(e)},addChatDataContent(e){e&&this.chatListContent.find((n,u)=>{var o,i,t,r;if(n.chatId===e.chatId){((i=(o=e.pop)==null?void 0:o.createdAt)==null?void 0:i.seconds)===((r=n.chatData[((t=n.chatData)==null?void 0:t.length)-1])==null?void 0:r.createdAt.seconds)||n.chatData.push(e.pop);return}})},addChatList(e){this.chatList=e||[]},addCurrentChatUser(e){this.currentChatUser=e.user,this.currentChatId=e.id},setTheme(e){this.theme=e},setThemeById(e,n){this.chatList.find(u=>{if(u.id===e){u.theme=n,this.theme=n;return}})}}});var zm=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function _f(e){if(e.__esModule)return e;var n=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach(function(u){var o=Object.getOwnPropertyDescriptor(e,u);Object.defineProperty(n,u,o.get?o:{enumerable:!0,get:function(){return e[u]}})}),n}function aC(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var rC="firebase",sC="9.8.2";/**
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
 */yo(rC,sC,"app");const _w="@firebase/installations",gf="0.5.9";/**
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
 */const gw=1e4,pw=`w:${gf}`,hw="FIS_v2",dC="https://firebaseinstallations.googleapis.com/v1",mC=60*60*1e3,lC="installations",cC="Installations";/**
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
 */const _C={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Wr=new cs(lC,cC,_C);function kw(e){return e instanceof ot&&e.code.includes("request-failed")}/**
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
 */function fw({projectId:e}){return`${dC}/projects/${e}/installations`}function yw(e){return{token:e.token,requestStatus:2,expiresIn:pC(e.expiresIn),creationTime:Date.now()}}async function Fw(e,n){const o=(await n.json()).error;return Wr.create("request-failed",{requestName:e,serverCode:o.code,serverMessage:o.message,serverStatus:o.status})}function bw({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function gC(e,{refreshToken:n}){const u=bw(e);return u.append("Authorization",hC(n)),u}async function ww(e){const n=await e();return n.status>=500&&n.status<600?e():n}function pC(e){return Number(e.replace("s","000"))}function hC(e){return`${hw} ${e}`}/**
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
 */async function kC({appConfig:e,heartbeatServiceProvider:n},{fid:u}){const o=fw(e),i=bw(e),t=n.getImmediate({optional:!0});if(t){const l=await t.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const r={fid:u,authVersion:hw,appId:e.appId,sdkVersion:pw},s={method:"POST",headers:i,body:JSON.stringify(r)},d=await ww(()=>fetch(o,s));if(d.ok){const l=await d.json();return{fid:l.fid||u,registrationStatus:2,refreshToken:l.refreshToken,authToken:yw(l.authToken)}}else throw await Fw("Create Installation",d)}/**
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
 */function jw(e){return new Promise(n=>{setTimeout(n,e)})}/**
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
 */function fC(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const yC=/^[cdef][\w-]{21}$/,E1="";function FC(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const u=bC(e);return yC.test(u)?u:E1}catch{return E1}}function bC(e){return fC(e).substr(0,22)}/**
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
 */function Fg(e){return`${e.appName}!${e.appId}`}/**
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
 */const Dw=new Map;function vw(e,n){const u=Fg(e);Bw(u,n),wC(u,n)}function Bw(e,n){const u=Dw.get(e);if(!!u)for(const o of u)o(n)}function wC(e,n){const u=jC();u&&u.postMessage({key:e,fid:n}),DC()}let Fr=null;function jC(){return!Fr&&"BroadcastChannel"in self&&(Fr=new BroadcastChannel("[Firebase] FID Change"),Fr.onmessage=e=>{Bw(e.data.key,e.data.fid)}),Fr}function DC(){Dw.size===0&&Fr&&(Fr.close(),Fr=null)}/**
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
 */const vC="firebase-installations-database",BC=1,qr="firebase-installations-store";let jh=null;function pf(){return jh||(jh=A9(vC,BC,{upgrade:(e,n)=>{switch(n){case 0:e.createObjectStore(qr)}}})),jh}async function y_(e,n){const u=Fg(e),i=(await pf()).transaction(qr,"readwrite"),t=i.objectStore(qr),r=await t.get(u);return await t.put(n,u),await i.done,(!r||r.fid!==n.fid)&&vw(e,n.fid),n}async function Pw(e){const n=Fg(e),o=(await pf()).transaction(qr,"readwrite");await o.objectStore(qr).delete(n),await o.done}async function bg(e,n){const u=Fg(e),i=(await pf()).transaction(qr,"readwrite"),t=i.objectStore(qr),r=await t.get(u),s=n(r);return s===void 0?await t.delete(u):await t.put(s,u),await i.done,s&&(!r||r.fid!==s.fid)&&vw(e,s.fid),s}/**
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
 */async function hf(e){let n;const u=await bg(e.appConfig,o=>{const i=PC(o),t=EC(e,i);return n=t.registrationPromise,t.installationEntry});return u.fid===E1?{installationEntry:await n}:{installationEntry:u,registrationPromise:n}}function PC(e){const n=e||{fid:FC(),registrationStatus:0};return Ew(n)}function EC(e,n){if(n.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Wr.create("app-offline"));return{installationEntry:n,registrationPromise:i}}const u={fid:n.fid,registrationStatus:1,registrationTime:Date.now()},o=MC(e,u);return{installationEntry:u,registrationPromise:o}}else return n.registrationStatus===1?{installationEntry:n,registrationPromise:TC(e)}:{installationEntry:n}}async function MC(e,n){try{const u=await kC(e,n);return y_(e.appConfig,u)}catch(u){throw kw(u)&&u.customData.serverCode===409?await Pw(e.appConfig):await y_(e.appConfig,{fid:n.fid,registrationStatus:0}),u}}async function TC(e){let n=await L3(e.appConfig);for(;n.registrationStatus===1;)await jw(100),n=await L3(e.appConfig);if(n.registrationStatus===0){const{installationEntry:u,registrationPromise:o}=await hf(e);return o||u}return n}function L3(e){return bg(e,n=>{if(!n)throw Wr.create("installation-not-found");return Ew(n)})}function Ew(e){return SC(e)?{fid:e.fid,registrationStatus:0}:e}function SC(e){return e.registrationStatus===1&&e.registrationTime+gw<Date.now()}/**
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
 */async function LC({appConfig:e,heartbeatServiceProvider:n},u){const o=CC(e,u),i=gC(e,u),t=n.getImmediate({optional:!0});if(t){const l=await t.getHeartbeatsHeader();l&&i.append("x-firebase-client",l)}const r={installation:{sdkVersion:pw,appId:e.appId}},s={method:"POST",headers:i,body:JSON.stringify(r)},d=await ww(()=>fetch(o,s));if(d.ok){const l=await d.json();return yw(l)}else throw await Fw("Generate Auth Token",d)}function CC(e,{fid:n}){return`${fw(e)}/${n}/authTokens:generate`}/**
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
 */async function kf(e,n=!1){let u;const o=await bg(e.appConfig,t=>{if(!Mw(t))throw Wr.create("not-registered");const r=t.authToken;if(!n&&YC(r))return t;if(r.requestStatus===1)return u=AC(e,n),t;{if(!navigator.onLine)throw Wr.create("app-offline");const s=OC(t);return u=xC(e,s),s}});return u?await u:o.authToken}async function AC(e,n){let u=await C3(e.appConfig);for(;u.authToken.requestStatus===1;)await jw(100),u=await C3(e.appConfig);const o=u.authToken;return o.requestStatus===0?kf(e,n):o}function C3(e){return bg(e,n=>{if(!Mw(n))throw Wr.create("not-registered");const u=n.authToken;return NC(u)?Object.assign(Object.assign({},n),{authToken:{requestStatus:0}}):n})}async function xC(e,n){try{const u=await LC(e,n),o=Object.assign(Object.assign({},n),{authToken:u});return await y_(e.appConfig,o),u}catch(u){if(kw(u)&&(u.customData.serverCode===401||u.customData.serverCode===404))await Pw(e.appConfig);else{const o=Object.assign(Object.assign({},n),{authToken:{requestStatus:0}});await y_(e.appConfig,o)}throw u}}function Mw(e){return e!==void 0&&e.registrationStatus===2}function YC(e){return e.requestStatus===2&&!IC(e)}function IC(e){const n=Date.now();return n<e.creationTime||e.creationTime+e.expiresIn<n+mC}function OC(e){const n={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:n})}function NC(e){return e.requestStatus===1&&e.requestTime+gw<Date.now()}/**
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
 */async function RC(e){const n=e,{installationEntry:u,registrationPromise:o}=await hf(n);return o?o.catch(console.error):kf(n).catch(console.error),u.fid}/**
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
 */async function $C(e,n=!1){const u=e;return await HC(u),(await kf(u,n)).token}async function HC(e){const{registrationPromise:n}=await hf(e);n&&await n}/**
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
 */function UC(e){if(!e||!e.options)throw Dh("App Configuration");if(!e.name)throw Dh("App Name");const n=["projectId","apiKey","appId"];for(const u of n)if(!e.options[u])throw Dh(u);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Dh(e){return Wr.create("missing-app-config-values",{valueName:e})}/**
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
 */const Tw="installations",zC="installations-internal",VC=e=>{const n=e.getProvider("app").getImmediate(),u=UC(n),o=Na(n,"heartbeat");return{app:n,appConfig:u,heartbeatServiceProvider:o,_delete:()=>Promise.resolve()}},WC=e=>{const n=e.getProvider("app").getImmediate(),u=Na(n,Tw).getImmediate();return{getId:()=>RC(u),getToken:i=>$C(u,i)}};function qC(){Ni(new _i(Tw,VC,"PUBLIC")),Ni(new _i(zC,WC,"PRIVATE"))}qC();yo(_w,gf);yo(_w,gf,"esm2017");/**
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
 */const F_="analytics",KC="firebase_id",GC="origin",JC=60*1e3,XC="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Sw="https://www.googletagmanager.com/gtag/js";/**
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
 */const Ro=new pg("@firebase/analytics");/**
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
 */function Lw(e){return Promise.all(e.map(n=>n.catch(u=>u)))}function QC(e,n){const u=document.createElement("script");u.src=`${Sw}?l=${e}&id=${n}`,u.async=!0,document.head.appendChild(u)}function ZC(e){let n=[];return Array.isArray(window[e])?n=window[e]:window[e]=n,n}async function eA(e,n,u,o,i,t){const r=o[i];try{if(r)await n[r];else{const d=(await Lw(u)).find(l=>l.measurementId===i);d&&await n[d.appId]}}catch(s){Ro.error(s)}e("config",i,t)}async function nA(e,n,u,o,i){try{let t=[];if(i&&i.send_to){let r=i.send_to;Array.isArray(r)||(r=[r]);const s=await Lw(u);for(const d of r){const l=s.find(_=>_.measurementId===d),c=l&&n[l.appId];if(c)t.push(c);else{t=[];break}}}t.length===0&&(t=Object.values(n)),await Promise.all(t),e("event",o,i||{})}catch(t){Ro.error(t)}}function uA(e,n,u,o){async function i(t,r,s){try{t==="event"?await nA(e,n,u,r,s):t==="config"?await eA(e,n,u,o,r,s):e("set",r)}catch(d){Ro.error(d)}}return i}function oA(e,n,u,o,i){let t=function(...r){window[o].push(arguments)};return window[i]&&typeof window[i]=="function"&&(t=window[i]),window[i]=uA(t,e,n,u),{gtagCore:t,wrappedGtag:window[i]}}function iA(){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Sw))return n;return null}/**
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
 */const tA={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},li=new cs("analytics","Analytics",tA);/**
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
 */const aA=30,rA=1e3;class sA{constructor(n={},u=rA){this.throttleMetadata=n,this.intervalMillis=u}getThrottleMetadata(n){return this.throttleMetadata[n]}setThrottleMetadata(n,u){this.throttleMetadata[n]=u}deleteThrottleMetadata(n){delete this.throttleMetadata[n]}}const Cw=new sA;function dA(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function mA(e){var n;const{appId:u,apiKey:o}=e,i={method:"GET",headers:dA(o)},t=XC.replace("{app-id}",u),r=await fetch(t,i);if(r.status!==200&&r.status!==304){let s="";try{const d=await r.json();!((n=d.error)===null||n===void 0)&&n.message&&(s=d.error.message)}catch{}throw li.create("config-fetch-failed",{httpStatus:r.status,responseMessage:s})}return r.json()}async function lA(e,n=Cw,u){const{appId:o,apiKey:i,measurementId:t}=e.options;if(!o)throw li.create("no-app-id");if(!i){if(t)return{measurementId:t,appId:o};throw li.create("no-api-key")}const r=n.getThrottleMetadata(o)||{backoffCount:0,throttleEndTimeMillis:Date.now()},s=new gA;return setTimeout(async()=>{s.abort()},u!==void 0?u:JC),Aw({appId:o,apiKey:i,measurementId:t},r,s,n)}async function Aw(e,{throttleEndTimeMillis:n,backoffCount:u},o,i=Cw){const{appId:t,measurementId:r}=e;try{await cA(o,n)}catch(s){if(r)return Ro.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${r} provided in the "measurementId" field in the local Firebase config. [${s.message}]`),{appId:t,measurementId:r};throw s}try{const s=await mA(e);return i.deleteThrottleMetadata(t),s}catch(s){if(!_A(s)){if(i.deleteThrottleMetadata(t),r)return Ro.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${r} provided in the "measurementId" field in the local Firebase config. [${s.message}]`),{appId:t,measurementId:r};throw s}const d=Number(s.customData.httpStatus)===503?s3(u,i.intervalMillis,aA):s3(u,i.intervalMillis),l={throttleEndTimeMillis:Date.now()+d,backoffCount:u+1};return i.setThrottleMetadata(t,l),Ro.debug(`Calling attemptFetch again in ${d} millis`),Aw(e,l,o,i)}}function cA(e,n){return new Promise((u,o)=>{const i=Math.max(n-Date.now(),0),t=setTimeout(u,i);e.addEventListener(()=>{clearTimeout(t),o(li.create("fetch-throttle",{throttleEndTimeMillis:n}))})})}function _A(e){if(!(e instanceof ot)||!e.customData)return!1;const n=Number(e.customData.httpStatus);return n===429||n===500||n===503||n===504}class gA{constructor(){this.listeners=[]}addEventListener(n){this.listeners.push(n)}abort(){this.listeners.forEach(n=>n())}}/**
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
 */async function pA(){if(T9())try{await S9()}catch(e){return Ro.warn(li.create("indexeddb-unavailable",{errorInfo:e}).message),!1}else return Ro.warn(li.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function hA(e,n,u,o,i,t,r){var s;const d=lA(e);d.then(f=>{u[f.measurementId]=f.appId,e.options.measurementId&&f.measurementId!==e.options.measurementId&&Ro.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${f.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(f=>Ro.error(f)),n.push(d);const l=pA().then(f=>{if(f)return o.getId()}),[c,_]=await Promise.all([d,l]);iA()||QC(t,c.measurementId),i("js",new Date);const p=(s=r==null?void 0:r.config)!==null&&s!==void 0?s:{};return p[GC]="firebase",p.update=!0,_!=null&&(p[KC]=_),i("config",c.measurementId,p),c.measurementId}/**
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
 */class kA{constructor(n){this.app=n}_delete(){return delete tl[this.app.options.appId],Promise.resolve()}}let tl={},A3=[];const x3={};let vh="dataLayer",fA="gtag",Y3,xw,I3=!1;function yA(){const e=[];if(Zk()&&e.push("This is a browser extension environment."),V7()||e.push("Cookies are not available."),e.length>0){const n=e.map((o,i)=>`(${i+1}) ${o}`).join(" "),u=li.create("invalid-analytics-context",{errorInfo:n});Ro.warn(u.message)}}function FA(e,n,u){yA();const o=e.options.appId;if(!o)throw li.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)Ro.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw li.create("no-api-key");if(tl[o]!=null)throw li.create("already-exists",{id:o});if(!I3){ZC(vh);const{wrappedGtag:t,gtagCore:r}=oA(tl,A3,x3,vh,fA);xw=t,Y3=r,I3=!0}return tl[o]=hA(e,A3,x3,n,Y3,vh,u),new kA(e)}/**
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
 */async function bA(e,n,u,o,i){if(i&&i.global){e("event",u,o);return}else{const t=await n,r=Object.assign(Object.assign({},o),{send_to:t});e("event",u,r)}}function wA(e=hg()){e=Hn(e);const n=Na(e,F_);return n.isInitialized()?n.getImmediate():jA(e)}function jA(e,n={}){const u=Na(e,F_);if(u.isInitialized()){const i=u.getImmediate();if(Ml(n,u.getOptions()))return i;throw li.create("already-initialized")}return u.initialize({options:n})}function DA(e,n,u,o){e=Hn(e),bA(xw,tl[e.app.options.appId],n,u,o).catch(i=>Ro.error(i))}const O3="@firebase/analytics",N3="0.7.9";function vA(){Ni(new _i(F_,(n,{options:u})=>{const o=n.getProvider("app").getImmediate(),i=n.getProvider("installations-internal").getImmediate();return FA(o,i,u)},"PUBLIC")),Ni(new _i("analytics-internal",e,"PRIVATE")),yo(O3,N3),yo(O3,N3,"esm2017");function e(n){try{const u=n.getProvider(F_).getImmediate();return{logEvent:(o,i,t)=>DA(u,o,i,t)}}catch(u){throw li.create("interop-component-reg-failed",{reason:u})}}}vA();/**
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
 */const Yw="firebasestorage.googleapis.com",Iw="storageBucket",BA=2*60*1e3,PA=10*60*1e3;/**
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
 */class Qn extends ot{constructor(n,u){super(Bh(n),`Firebase Storage: ${u} (${Bh(n)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Qn.prototype)}_codeEquals(n){return Bh(n)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(n){this.customData.serverResponse=n,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function Bh(e){return"storage/"+e}function ff(){const e="An unknown error occurred, please check the error payload for server response.";return new Qn("unknown",e)}function EA(e){return new Qn("object-not-found","Object '"+e+"' does not exist.")}function MA(e){return new Qn("quota-exceeded","Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function TA(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Qn("unauthenticated",e)}function SA(){return new Qn("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function LA(e){return new Qn("unauthorized","User does not have permission to access '"+e+"'.")}function CA(){return new Qn("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function AA(){return new Qn("canceled","User canceled the upload/download.")}function xA(e){return new Qn("invalid-url","Invalid URL '"+e+"'.")}function YA(e){return new Qn("invalid-default-bucket","Invalid default bucket '"+e+"'.")}function IA(){return new Qn("no-default-bucket","No default bucket found. Did you set the '"+Iw+"' property when initializing the app?")}function OA(){return new Qn("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function NA(){return new Qn("no-download-url","The given file does not have any download URLs.")}function M1(e){return new Qn("invalid-argument",e)}function Ow(){return new Qn("app-deleted","The Firebase app was deleted.")}function RA(e){return new Qn("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function al(e,n){return new Qn("invalid-format","String does not match format '"+e+"': "+n)}function Cm(e){throw new Qn("internal-error","Internal error: "+e)}/**
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
 */class Io{constructor(n,u){this.bucket=n,this.path_=u}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const n=encodeURIComponent;return"/b/"+n(this.bucket)+"/o/"+n(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(n,u){let o;try{o=Io.makeFromUrl(n,u)}catch{return new Io(n,"")}if(o.path==="")return o;throw YA(n)}static makeFromUrl(n,u){let o=null;const i="([A-Za-z0-9.\\-_]+)";function t(S){S.path.charAt(S.path.length-1)==="/"&&(S.path_=S.path_.slice(0,-1))}const r="(/(.*))?$",s=new RegExp("^gs://"+i+r,"i"),d={bucket:1,path:3};function l(S){S.path_=decodeURIComponent(S.path)}const c="v[A-Za-z0-9_]+",_=u.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",f=new RegExp(`^https?://${_}/${c}/b/${i}/o${p}`,"i"),y={bucket:1,path:3},D=u===Yw?"(?:storage.googleapis.com|storage.cloud.google.com)":u,P="([^?#]*)",v=new RegExp(`^https?://${D}/${i}/${P}`,"i"),M=[{regex:s,indices:d,postModify:t},{regex:f,indices:y,postModify:l},{regex:v,indices:{bucket:1,path:2},postModify:l}];for(let S=0;S<M.length;S++){const $=M[S],C=$.regex.exec(n);if(C){const L=C[$.indices.bucket];let T=C[$.indices.path];T||(T=""),o=new Io(L,T),$.postModify(o);break}}if(o==null)throw xA(n);return o}}class $A{constructor(n){this.promise_=Promise.reject(n)}getPromise(){return this.promise_}cancel(n=!1){}}/**
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
 */function HA(e,n,u){let o=1,i=null,t=null,r=!1,s=0;function d(){return s===2}let l=!1;function c(...P){l||(l=!0,n.apply(null,P))}function _(P){i=setTimeout(()=>{i=null,e(f,d())},P)}function p(){t&&clearTimeout(t)}function f(P,...v){if(l){p();return}if(P){p(),c.call(null,P,...v);return}if(d()||r){p(),c.call(null,P,...v);return}o<64&&(o*=2);let M;s===1?(s=2,M=0):M=(o+Math.random())*1e3,_(M)}let y=!1;function D(P){y||(y=!0,p(),!l&&(i!==null?(P||(s=2),clearTimeout(i),_(0)):P||(s=1)))}return _(0),t=setTimeout(()=>{r=!0,D(!0)},u),D}function UA(e){e(!1)}/**
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
 */function zA(e){return e!==void 0}function VA(e){return typeof e=="object"&&!Array.isArray(e)}function yf(e){return typeof e=="string"||e instanceof String}function R3(e){return Ff()&&e instanceof Blob}function Ff(){return typeof Blob!="undefined"}function $3(e,n,u,o){if(o<n)throw M1(`Invalid value for '${e}'. Expected ${n} or greater.`);if(o>u)throw M1(`Invalid value for '${e}'. Expected ${u} or less.`)}/**
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
 */function bf(e,n,u){let o=n;return u==null&&(o=`https://${n}`),`${u}://${o}/v0${e}`}function Nw(e){const n=encodeURIComponent;let u="?";for(const o in e)if(e.hasOwnProperty(o)){const i=n(o)+"="+n(e[o]);u=u+i+"&"}return u=u.slice(0,-1),u}/**
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
 */var Mr;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(Mr||(Mr={}));/**
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
 */class WA{constructor(n,u,o,i,t,r,s,d,l,c,_){this.url_=n,this.method_=u,this.headers_=o,this.body_=i,this.successCodes_=t,this.additionalRetryCodes_=r,this.callback_=s,this.errorCallback_=d,this.timeout_=l,this.progressCallback_=c,this.connectionFactory_=_,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,f)=>{this.resolve_=p,this.reject_=f,this.start_()})}start_(){const n=(o,i)=>{if(i){o(!1,new b0(!1,null,!0));return}const t=this.connectionFactory_();this.pendingConnection_=t;const r=s=>{const d=s.loaded,l=s.lengthComputable?s.total:-1;this.progressCallback_!==null&&this.progressCallback_(d,l)};this.progressCallback_!==null&&t.addUploadProgressListener(r),t.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&t.removeUploadProgressListener(r),this.pendingConnection_=null;const s=t.getErrorCode()===Mr.NO_ERROR,d=t.getStatus();if(!s||this.isRetryStatusCode_(d)){const c=t.getErrorCode()===Mr.ABORT;o(!1,new b0(!1,null,c));return}const l=this.successCodes_.indexOf(d)!==-1;o(!0,new b0(l,t))})},u=(o,i)=>{const t=this.resolve_,r=this.reject_,s=i.connection;if(i.wasSuccessCode)try{const d=this.callback_(s,s.getResponse());zA(d)?t(d):t()}catch(d){r(d)}else if(s!==null){const d=ff();d.serverResponse=s.getErrorText(),this.errorCallback_?r(this.errorCallback_(s,d)):r(d)}else if(i.canceled){const d=this.appDelete_?Ow():AA();r(d)}else{const d=CA();r(d)}};this.canceled_?u(!1,new b0(!1,null,!0)):this.backoffId_=HA(n,u,this.timeout_)}getPromise(){return this.promise_}cancel(n){this.canceled_=!0,this.appDelete_=n||!1,this.backoffId_!==null&&UA(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(n){const u=n>=500&&n<600,i=[408,429].indexOf(n)!==-1,t=this.additionalRetryCodes_.indexOf(n)!==-1;return u||i||t}}class b0{constructor(n,u,o){this.wasSuccessCode=n,this.connection=u,this.canceled=!!o}}function qA(e,n){n!==null&&n.length>0&&(e.Authorization="Firebase "+n)}function KA(e,n){e["X-Firebase-Storage-Version"]="webjs/"+(n!=null?n:"AppManager")}function GA(e,n){n&&(e["X-Firebase-GMPID"]=n)}function JA(e,n){n!==null&&(e["X-Firebase-AppCheck"]=n)}function XA(e,n,u,o,i,t){const r=Nw(e.urlParams),s=e.url+r,d=Object.assign({},e.headers);return GA(d,n),qA(d,u),KA(d,t),JA(d,o),new WA(s,e.method,d,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i)}/**
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
 */function QA(){return typeof BlobBuilder!="undefined"?BlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:void 0}function ZA(...e){const n=QA();if(n!==void 0){const u=new n;for(let o=0;o<e.length;o++)u.append(e[o]);return u.getBlob()}else{if(Ff())return new Blob(e);throw new Qn("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function ex(e,n,u){return e.webkitSlice?e.webkitSlice(n,u):e.mozSlice?e.mozSlice(n,u):e.slice?e.slice(n,u):null}/**
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
 */function nx(e){return atob(e)}/**
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
 */const Gi={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Ph{constructor(n,u){this.data=n,this.contentType=u||null}}function ux(e,n){switch(e){case Gi.RAW:return new Ph(Rw(n));case Gi.BASE64:case Gi.BASE64URL:return new Ph($w(e,n));case Gi.DATA_URL:return new Ph(ix(n),tx(n))}throw ff()}function Rw(e){const n=[];for(let u=0;u<e.length;u++){let o=e.charCodeAt(u);if(o<=127)n.push(o);else if(o<=2047)n.push(192|o>>6,128|o&63);else if((o&64512)===55296)if(!(u<e.length-1&&(e.charCodeAt(u+1)&64512)===56320))n.push(239,191,189);else{const t=o,r=e.charCodeAt(++u);o=65536|(t&1023)<<10|r&1023,n.push(240|o>>18,128|o>>12&63,128|o>>6&63,128|o&63)}else(o&64512)===56320?n.push(239,191,189):n.push(224|o>>12,128|o>>6&63,128|o&63)}return new Uint8Array(n)}function ox(e){let n;try{n=decodeURIComponent(e)}catch{throw al(Gi.DATA_URL,"Malformed data URL.")}return Rw(n)}function $w(e,n){switch(e){case Gi.BASE64:{const i=n.indexOf("-")!==-1,t=n.indexOf("_")!==-1;if(i||t)throw al(e,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Gi.BASE64URL:{const i=n.indexOf("+")!==-1,t=n.indexOf("/")!==-1;if(i||t)throw al(e,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");n=n.replace(/-/g,"+").replace(/_/g,"/");break}}let u;try{u=nx(n)}catch{throw al(e,"Invalid character found")}const o=new Uint8Array(u.length);for(let i=0;i<u.length;i++)o[i]=u.charCodeAt(i);return o}class Hw{constructor(n){this.base64=!1,this.contentType=null;const u=n.match(/^data:([^,]+)?,/);if(u===null)throw al(Gi.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const o=u[1]||null;o!=null&&(this.base64=ax(o,";base64"),this.contentType=this.base64?o.substring(0,o.length-7):o),this.rest=n.substring(n.indexOf(",")+1)}}function ix(e){const n=new Hw(e);return n.base64?$w(Gi.BASE64,n.rest):ox(n.rest)}function tx(e){return new Hw(e).contentType}function ax(e,n){return e.length>=n.length?e.substring(e.length-n.length)===n:!1}/**
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
 */class pa{constructor(n,u){let o=0,i="";R3(n)?(this.data_=n,o=n.size,i=n.type):n instanceof ArrayBuffer?(u?this.data_=new Uint8Array(n):(this.data_=new Uint8Array(n.byteLength),this.data_.set(new Uint8Array(n))),o=this.data_.length):n instanceof Uint8Array&&(u?this.data_=n:(this.data_=new Uint8Array(n.length),this.data_.set(n)),o=n.length),this.size_=o,this.type_=i}size(){return this.size_}type(){return this.type_}slice(n,u){if(R3(this.data_)){const o=this.data_,i=ex(o,n,u);return i===null?null:new pa(i)}else{const o=new Uint8Array(this.data_.buffer,n,u-n);return new pa(o,!0)}}static getBlob(...n){if(Ff()){const u=n.map(o=>o instanceof pa?o.data_:o);return new pa(ZA.apply(null,u))}else{const u=n.map(r=>yf(r)?ux(Gi.RAW,r).data:r.data_);let o=0;u.forEach(r=>{o+=r.byteLength});const i=new Uint8Array(o);let t=0;return u.forEach(r=>{for(let s=0;s<r.length;s++)i[t++]=r[s]}),new pa(i,!0)}}uploadData(){return this.data_}}/**
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
 */function Uw(e){let n;try{n=JSON.parse(e)}catch{return null}return VA(n)?n:null}/**
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
 */function rx(e){if(e.length===0)return null;const n=e.lastIndexOf("/");return n===-1?"":e.slice(0,n)}function sx(e,n){const u=n.split("/").filter(o=>o.length>0).join("/");return e.length===0?u:e+"/"+u}function zw(e){const n=e.lastIndexOf("/",e.length-2);return n===-1?e:e.slice(n+1)}/**
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
 */function dx(e,n){return n}class Ju{constructor(n,u,o,i){this.server=n,this.local=u||n,this.writable=!!o,this.xform=i||dx}}let w0=null;function mx(e){return!yf(e)||e.length<2?e:zw(e)}function Vw(){if(w0)return w0;const e=[];e.push(new Ju("bucket")),e.push(new Ju("generation")),e.push(new Ju("metageneration")),e.push(new Ju("name","fullPath",!0));function n(t,r){return mx(r)}const u=new Ju("name");u.xform=n,e.push(u);function o(t,r){return r!==void 0?Number(r):r}const i=new Ju("size");return i.xform=o,e.push(i),e.push(new Ju("timeCreated")),e.push(new Ju("updated")),e.push(new Ju("md5Hash",null,!0)),e.push(new Ju("cacheControl",null,!0)),e.push(new Ju("contentDisposition",null,!0)),e.push(new Ju("contentEncoding",null,!0)),e.push(new Ju("contentLanguage",null,!0)),e.push(new Ju("contentType",null,!0)),e.push(new Ju("metadata","customMetadata",!0)),w0=e,w0}function lx(e,n){function u(){const o=e.bucket,i=e.fullPath,t=new Io(o,i);return n._makeStorageReference(t)}Object.defineProperty(e,"ref",{get:u})}function cx(e,n,u){const o={};o.type="file";const i=u.length;for(let t=0;t<i;t++){const r=u[t];o[r.local]=r.xform(o,n[r.server])}return lx(o,e),o}function Ww(e,n,u){const o=Uw(n);return o===null?null:cx(e,o,u)}function _x(e,n,u,o){const i=Uw(n);if(i===null||!yf(i.downloadTokens))return null;const t=i.downloadTokens;if(t.length===0)return null;const r=encodeURIComponent;return t.split(",").map(l=>{const c=e.bucket,_=e.fullPath,p="/b/"+r(c)+"/o/"+r(_),f=bf(p,u,o),y=Nw({alt:"media",token:l});return f+y})[0]}function gx(e,n){const u={},o=n.length;for(let i=0;i<o;i++){const t=n[i];t.writable&&(u[t.server]=e[t.local])}return JSON.stringify(u)}class qw{constructor(n,u,o,i){this.url=n,this.method=u,this.handler=o,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Kw(e){if(!e)throw ff()}function px(e,n){function u(o,i){const t=Ww(e,i,n);return Kw(t!==null),t}return u}function hx(e,n){function u(o,i){const t=Ww(e,i,n);return Kw(t!==null),_x(t,i,e.host,e._protocol)}return u}function Gw(e){function n(u,o){let i;return u.getStatus()===401?u.getErrorText().includes("Firebase App Check token is invalid")?i=SA():i=TA():u.getStatus()===402?i=MA(e.bucket):u.getStatus()===403?i=LA(e.path):i=o,i.serverResponse=o.serverResponse,i}return n}function kx(e){const n=Gw(e);function u(o,i){let t=n(o,i);return o.getStatus()===404&&(t=EA(e.path)),t.serverResponse=i.serverResponse,t}return u}function fx(e,n,u){const o=n.fullServerUrl(),i=bf(o,e.host,e._protocol),t="GET",r=e.maxOperationRetryTime,s=new qw(i,t,hx(e,u),r);return s.errorHandler=kx(n),s}function yx(e,n){return e&&e.contentType||n&&n.type()||"application/octet-stream"}function Fx(e,n,u){const o=Object.assign({},u);return o.fullPath=e.path,o.size=n.size(),o.contentType||(o.contentType=yx(null,n)),o}function bx(e,n,u,o,i){const t=n.bucketOnlyServerUrl(),r={"X-Goog-Upload-Protocol":"multipart"};function s(){let M="";for(let S=0;S<2;S++)M=M+Math.random().toString().slice(2);return M}const d=s();r["Content-Type"]="multipart/related; boundary="+d;const l=Fx(n,o,i),c=gx(l,u),_="--"+d+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+d+`\r
Content-Type: `+l.contentType+`\r
\r
`,p=`\r
--`+d+"--",f=pa.getBlob(_,o,p);if(f===null)throw OA();const y={name:l.fullPath},D=bf(t,e.host,e._protocol),P="POST",v=e.maxUploadRetryTime,j=new qw(D,P,px(e,u),v);return j.urlParams=y,j.headers=r,j.body=f.uploadData(),j.errorHandler=Gw(n),j}class wx{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Mr.NO_ERROR,this.sendPromise_=new Promise(n=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Mr.ABORT,n()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Mr.NETWORK_ERROR,n()}),this.xhr_.addEventListener("load",()=>{n()})})}send(n,u,o,i){if(this.sent_)throw Cm("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(u,n,!0),i!==void 0)for(const t in i)i.hasOwnProperty(t)&&this.xhr_.setRequestHeader(t,i[t].toString());return o!==void 0?this.xhr_.send(o):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Cm("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Cm("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Cm("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Cm("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(n){return this.xhr_.getResponseHeader(n)}addUploadProgressListener(n){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",n)}removeUploadProgressListener(n){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",n)}}class jx extends wx{initXhr(){this.xhr_.responseType="text"}}function Jw(){return new jx}/**
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
 */class Kr{constructor(n,u){this._service=n,u instanceof Io?this._location=u:this._location=Io.makeFromUrl(u,n.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(n,u){return new Kr(n,u)}get root(){const n=new Io(this._location.bucket,"");return this._newRef(this._service,n)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return zw(this._location.path)}get storage(){return this._service}get parent(){const n=rx(this._location.path);if(n===null)return null;const u=new Io(this._location.bucket,n);return new Kr(this._service,u)}_throwIfRoot(n){if(this._location.path==="")throw RA(n)}}function Dx(e,n,u){e._throwIfRoot("uploadBytes");const o=bx(e.storage,e._location,Vw(),new pa(n,!0),u);return e.storage.makeRequestWithTokens(o,Jw).then(i=>({metadata:i,ref:e}))}function vx(e){e._throwIfRoot("getDownloadURL");const n=fx(e.storage,e._location,Vw());return e.storage.makeRequestWithTokens(n,Jw).then(u=>{if(u===null)throw NA();return u})}function Bx(e,n){const u=sx(e._location.path,n),o=new Io(e._location.bucket,u);return new Kr(e.storage,o)}/**
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
 */function Px(e){return/^[A-Za-z]+:\/\//.test(e)}function Ex(e,n){return new Kr(e,n)}function Xw(e,n){if(e instanceof wf){const u=e;if(u._bucket==null)throw IA();const o=new Kr(u,u._bucket);return n!=null?Xw(o,n):o}else return n!==void 0?Bx(e,n):e}function Mx(e,n){if(n&&Px(n)){if(e instanceof wf)return Ex(e,n);throw M1("To use ref(service, url), the first argument must be a Storage instance.")}else return Xw(e,n)}function H3(e,n){const u=n==null?void 0:n[Iw];return u==null?null:Io.makeFromBucketSpec(u,e)}class wf{constructor(n,u,o,i,t){this.app=n,this._authProvider=u,this._appCheckProvider=o,this._url=i,this._firebaseVersion=t,this._bucket=null,this._host=Yw,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=BA,this._maxUploadRetryTime=PA,this._requests=new Set,i!=null?this._bucket=Io.makeFromBucketSpec(i,this._host):this._bucket=H3(this._host,this.app.options)}get host(){return this._host}set host(n){this._host=n,this._url!=null?this._bucket=Io.makeFromBucketSpec(this._url,n):this._bucket=H3(n,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(n){$3("time",0,Number.POSITIVE_INFINITY,n),this._maxUploadRetryTime=n}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(n){$3("time",0,Number.POSITIVE_INFINITY,n),this._maxOperationRetryTime=n}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const n=this._authProvider.getImmediate({optional:!0});if(n){const u=await n.getToken();if(u!==null)return u.accessToken}return null}async _getAppCheckToken(){const n=this._appCheckProvider.getImmediate({optional:!0});return n?(await n.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(n=>n.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(n){return new Kr(this,n)}_makeRequest(n,u,o,i){if(this._deleted)return new $A(Ow());{const t=XA(n,this._appId,o,i,u,this._firebaseVersion);return this._requests.add(t),t.getPromise().then(()=>this._requests.delete(t),()=>this._requests.delete(t)),t}}async makeRequestWithTokens(n,u){const[o,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(n,u,o,i).getPromise()}}const U3="@firebase/storage",z3="0.9.6";/**
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
 */const Qw="storage";function Tx(e,n,u){return e=Hn(e),Dx(e,n,u)}function Sx(e){return e=Hn(e),vx(e)}function V3(e,n){return e=Hn(e),Mx(e,n)}function Lx(e=hg(),n){return e=Hn(e),Na(e,Qw).getImmediate({identifier:n})}function Cx(e,{instanceIdentifier:n}){const u=e.getProvider("app").getImmediate(),o=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new wf(u,o,i,n,Vd)}function Ax(){Ni(new _i(Qw,Cx,"PUBLIC").setMultipleInstances(!0)),yo(U3,z3,""),yo(U3,z3,"esm2017")}Ax();var xx=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Be,jf=jf||{},Ke=xx||self;function b_(){}function T1(e){var n=typeof e;return n=n!="object"?n:e?Array.isArray(e)?"array":n:"null",n=="array"||n=="object"&&typeof e.length=="number"}function fc(e){var n=typeof e;return n=="object"&&e!=null||n=="function"}function Yx(e){return Object.prototype.hasOwnProperty.call(e,Eh)&&e[Eh]||(e[Eh]=++Ix)}var Eh="closure_uid_"+(1e9*Math.random()>>>0),Ix=0;function Ox(e,n,u){return e.call.apply(e.bind,arguments)}function Nx(e,n,u){if(!e)throw Error();if(2<arguments.length){var o=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,o),e.apply(n,i)}}return function(){return e.apply(n,arguments)}}function Pu(e,n,u){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Pu=Ox:Pu=Nx,Pu.apply(null,arguments)}function j0(e,n){var u=Array.prototype.slice.call(arguments,1);return function(){var o=u.slice();return o.push.apply(o,arguments),e.apply(this,o)}}function Lu(e,n){function u(){}u.prototype=n.prototype,e.Z=n.prototype,e.prototype=new u,e.prototype.constructor=e,e.Vb=function(o,i,t){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return n.prototype[i].apply(o,r)}}function $a(){this.s=this.s,this.o=this.o}var Rx=0;$a.prototype.s=!1;$a.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Rx!=0)&&Yx(this)};$a.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Zw=Array.prototype.indexOf?function(e,n){return Array.prototype.indexOf.call(e,n,void 0)}:function(e,n){if(typeof e=="string")return typeof n!="string"||n.length!=1?-1:e.indexOf(n,0);for(let u=0;u<e.length;u++)if(u in e&&e[u]===n)return u;return-1},ej=Array.prototype.forEach?function(e,n,u){Array.prototype.forEach.call(e,n,u)}:function(e,n,u){const o=e.length,i=typeof e=="string"?e.split(""):e;for(let t=0;t<o;t++)t in i&&n.call(u,i[t],t,e)};function $x(e){e:{var n=LY;const u=e.length,o=typeof e=="string"?e.split(""):e;for(let i=0;i<u;i++)if(i in o&&n.call(void 0,o[i],i,e)){n=i;break e}n=-1}return 0>n?null:typeof e=="string"?e.charAt(n):e[n]}function W3(e){return Array.prototype.concat.apply([],arguments)}function Df(e){const n=e.length;if(0<n){const u=Array(n);for(let o=0;o<n;o++)u[o]=e[o];return u}return[]}function w_(e){return/^[\s\xa0]*$/.test(e)}var q3=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function Zu(e,n){return e.indexOf(n)!=-1}function Mh(e,n){return e<n?-1:e>n?1:0}var eo;e:{var K3=Ke.navigator;if(K3){var G3=K3.userAgent;if(G3){eo=G3;break e}}eo=""}function vf(e,n,u){for(const o in e)n.call(u,e[o],o,e)}function nj(e){const n={};for(const u in e)n[u]=e[u];return n}var J3="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function uj(e,n){let u,o;for(let i=1;i<arguments.length;i++){o=arguments[i];for(u in o)e[u]=o[u];for(let t=0;t<J3.length;t++)u=J3[t],Object.prototype.hasOwnProperty.call(o,u)&&(e[u]=o[u])}}function Bf(e){return Bf[" "](e),e}Bf[" "]=b_;function Hx(e){var n=Vx;return Object.prototype.hasOwnProperty.call(n,9)?n[9]:n[9]=e(9)}var Ux=Zu(eo,"Opera"),yd=Zu(eo,"Trident")||Zu(eo,"MSIE"),oj=Zu(eo,"Edge"),S1=oj||yd,ij=Zu(eo,"Gecko")&&!(Zu(eo.toLowerCase(),"webkit")&&!Zu(eo,"Edge"))&&!(Zu(eo,"Trident")||Zu(eo,"MSIE"))&&!Zu(eo,"Edge"),zx=Zu(eo.toLowerCase(),"webkit")&&!Zu(eo,"Edge");function tj(){var e=Ke.document;return e?e.documentMode:void 0}var j_;e:{var Th="",Sh=function(){var e=eo;if(ij)return/rv:([^\);]+)(\)|;)/.exec(e);if(oj)return/Edge\/([\d\.]+)/.exec(e);if(yd)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(zx)return/WebKit\/(\S+)/.exec(e);if(Ux)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Sh&&(Th=Sh?Sh[1]:""),yd){var Lh=tj();if(Lh!=null&&Lh>parseFloat(Th)){j_=String(Lh);break e}}j_=Th}var Vx={};function Wx(){return Hx(function(){let e=0;const n=q3(String(j_)).split("."),u=q3("9").split("."),o=Math.max(n.length,u.length);for(let r=0;e==0&&r<o;r++){var i=n[r]||"",t=u[r]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],t=/(\d*)(\D*)(.*)/.exec(t)||["","","",""],i[0].length==0&&t[0].length==0)break;e=Mh(i[1].length==0?0:parseInt(i[1],10),t[1].length==0?0:parseInt(t[1],10))||Mh(i[2].length==0,t[2].length==0)||Mh(i[2],t[2]),i=i[3],t=t[3]}while(e==0)}return 0<=e})}var L1;if(Ke.document&&yd){var X3=tj();L1=X3||parseInt(j_,10)||void 0}else L1=void 0;var qx=L1,Kx=function(){if(!Ke.addEventListener||!Object.defineProperty)return!1;var e=!1,n=Object.defineProperty({},"passive",{get:function(){e=!0}});try{Ke.addEventListener("test",b_,n),Ke.removeEventListener("test",b_,n)}catch{}return e}();function Ru(e,n){this.type=e,this.g=this.target=n,this.defaultPrevented=!1}Ru.prototype.h=function(){this.defaultPrevented=!0};function Cl(e,n){if(Ru.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var u=this.type=e.type,o=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=n,n=e.relatedTarget){if(ij){e:{try{Bf(n.nodeName);var i=!0;break e}catch{}i=!1}i||(n=null)}}else u=="mouseover"?n=e.fromElement:u=="mouseout"&&(n=e.toElement);this.relatedTarget=n,o?(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Gx[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&Cl.Z.h.call(this)}}Lu(Cl,Ru);var Gx={2:"touch",3:"pen",4:"mouse"};Cl.prototype.h=function(){Cl.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var yc="closure_listenable_"+(1e6*Math.random()|0),Jx=0;function Xx(e,n,u,o,i){this.listener=e,this.proxy=null,this.src=n,this.type=u,this.capture=!!o,this.ia=i,this.key=++Jx,this.ca=this.fa=!1}function wg(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function jg(e){this.src=e,this.g={},this.h=0}jg.prototype.add=function(e,n,u,o,i){var t=e.toString();e=this.g[t],e||(e=this.g[t]=[],this.h++);var r=A1(e,n,o,i);return-1<r?(n=e[r],u||(n.fa=!1)):(n=new Xx(n,this.src,t,!!o,i),n.fa=u,e.push(n)),n};function C1(e,n){var u=n.type;if(u in e.g){var o=e.g[u],i=Zw(o,n),t;(t=0<=i)&&Array.prototype.splice.call(o,i,1),t&&(wg(n),e.g[u].length==0&&(delete e.g[u],e.h--))}}function A1(e,n,u,o){for(var i=0;i<e.length;++i){var t=e[i];if(!t.ca&&t.listener==n&&t.capture==!!u&&t.ia==o)return i}return-1}var Pf="closure_lm_"+(1e6*Math.random()|0),Ch={};function aj(e,n,u,o,i){if(o&&o.once)return sj(e,n,u,o,i);if(Array.isArray(n)){for(var t=0;t<n.length;t++)aj(e,n[t],u,o,i);return null}return u=Tf(u),e&&e[yc]?e.N(n,u,fc(o)?!!o.capture:!!o,i):rj(e,n,u,!1,o,i)}function rj(e,n,u,o,i,t){if(!n)throw Error("Invalid event type");var r=fc(i)?!!i.capture:!!i,s=Mf(e);if(s||(e[Pf]=s=new jg(e)),u=s.add(n,u,o,r,t),u.proxy)return u;if(o=Qx(),u.proxy=o,o.src=e,o.listener=u,e.addEventListener)Kx||(i=r),i===void 0&&(i=!1),e.addEventListener(n.toString(),o,i);else if(e.attachEvent)e.attachEvent(mj(n.toString()),o);else if(e.addListener&&e.removeListener)e.addListener(o);else throw Error("addEventListener and attachEvent are unavailable.");return u}function Qx(){function e(u){return n.call(e.src,e.listener,u)}var n=Zx;return e}function sj(e,n,u,o,i){if(Array.isArray(n)){for(var t=0;t<n.length;t++)sj(e,n[t],u,o,i);return null}return u=Tf(u),e&&e[yc]?e.O(n,u,fc(o)?!!o.capture:!!o,i):rj(e,n,u,!0,o,i)}function dj(e,n,u,o,i){if(Array.isArray(n))for(var t=0;t<n.length;t++)dj(e,n[t],u,o,i);else o=fc(o)?!!o.capture:!!o,u=Tf(u),e&&e[yc]?(e=e.i,n=String(n).toString(),n in e.g&&(t=e.g[n],u=A1(t,u,o,i),-1<u&&(wg(t[u]),Array.prototype.splice.call(t,u,1),t.length==0&&(delete e.g[n],e.h--)))):e&&(e=Mf(e))&&(n=e.g[n.toString()],e=-1,n&&(e=A1(n,u,o,i)),(u=-1<e?n[e]:null)&&Ef(u))}function Ef(e){if(typeof e!="number"&&e&&!e.ca){var n=e.src;if(n&&n[yc])C1(n.i,e);else{var u=e.type,o=e.proxy;n.removeEventListener?n.removeEventListener(u,o,e.capture):n.detachEvent?n.detachEvent(mj(u),o):n.addListener&&n.removeListener&&n.removeListener(o),(u=Mf(n))?(C1(u,e),u.h==0&&(u.src=null,n[Pf]=null)):wg(e)}}}function mj(e){return e in Ch?Ch[e]:Ch[e]="on"+e}function Zx(e,n){if(e.ca)e=!0;else{n=new Cl(n,this);var u=e.listener,o=e.ia||e.src;e.fa&&Ef(e),e=u.call(o,n)}return e}function Mf(e){return e=e[Pf],e instanceof jg?e:null}var Ah="__closure_events_fn_"+(1e9*Math.random()>>>0);function Tf(e){return typeof e=="function"?e:(e[Ah]||(e[Ah]=function(n){return e.handleEvent(n)}),e[Ah])}function fu(){$a.call(this),this.i=new jg(this),this.P=this,this.I=null}Lu(fu,$a);fu.prototype[yc]=!0;fu.prototype.removeEventListener=function(e,n,u,o){dj(this,e,n,u,o)};function Eu(e,n){var u,o=e.I;if(o)for(u=[];o;o=o.I)u.push(o);if(e=e.P,o=n.type||n,typeof n=="string")n=new Ru(n,e);else if(n instanceof Ru)n.target=n.target||e;else{var i=n;n=new Ru(o,e),uj(n,i)}if(i=!0,u)for(var t=u.length-1;0<=t;t--){var r=n.g=u[t];i=D0(r,o,!0,n)&&i}if(r=n.g=e,i=D0(r,o,!0,n)&&i,i=D0(r,o,!1,n)&&i,u)for(t=0;t<u.length;t++)r=n.g=u[t],i=D0(r,o,!1,n)&&i}fu.prototype.M=function(){if(fu.Z.M.call(this),this.i){var e=this.i,n;for(n in e.g){for(var u=e.g[n],o=0;o<u.length;o++)wg(u[o]);delete e.g[n],e.h--}}this.I=null};fu.prototype.N=function(e,n,u,o){return this.i.add(String(e),n,!1,u,o)};fu.prototype.O=function(e,n,u,o){return this.i.add(String(e),n,!0,u,o)};function D0(e,n,u,o){if(n=e.i.g[String(n)],!n)return!0;n=n.concat();for(var i=!0,t=0;t<n.length;++t){var r=n[t];if(r&&!r.ca&&r.capture==u){var s=r.listener,d=r.ia||r.src;r.fa&&C1(e.i,r),i=s.call(d,o)!==!1&&i}}return i&&!o.defaultPrevented}var Sf=Ke.JSON.stringify;function eY(){var e=cj;let n=null;return e.g&&(n=e.g,e.g=e.g.next,e.g||(e.h=null),n.next=null),n}class nY{constructor(){this.h=this.g=null}add(n,u){const o=lj.get();o.set(n,u),this.h?this.h.next=o:this.g=o,this.h=o}}var lj=new class{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new uY,e=>e.reset());class uY{constructor(){this.next=this.g=this.h=null}set(n,u){this.h=n,this.g=u,this.next=null}reset(){this.next=this.g=this.h=null}}function oY(e){Ke.setTimeout(()=>{throw e},0)}function Lf(e,n){x1||iY(),Y1||(x1(),Y1=!0),cj.add(e,n)}var x1;function iY(){var e=Ke.Promise.resolve(void 0);x1=function(){e.then(tY)}}var Y1=!1,cj=new nY;function tY(){for(var e;e=eY();){try{e.h.call(e.g)}catch(u){oY(u)}var n=lj;n.j(e),100>n.h&&(n.h++,e.next=n.g,n.g=e)}Y1=!1}function Dg(e,n){fu.call(this),this.h=e||1,this.g=n||Ke,this.j=Pu(this.kb,this),this.l=Date.now()}Lu(Dg,fu);Be=Dg.prototype;Be.da=!1;Be.S=null;Be.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Eu(this,"tick"),this.da&&(Cf(this),this.start()))}};Be.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Cf(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}Be.M=function(){Dg.Z.M.call(this),Cf(this),delete this.g};function Af(e,n,u){if(typeof e=="function")u&&(e=Pu(e,u));else if(e&&typeof e.handleEvent=="function")e=Pu(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(n)?-1:Ke.setTimeout(e,n||0)}function _j(e){e.g=Af(()=>{e.g=null,e.i&&(e.i=!1,_j(e))},e.j);const n=e.h;e.h=null,e.m.apply(null,n)}class aY extends $a{constructor(n,u){super(),this.m=n,this.j=u,this.h=null,this.i=!1,this.g=null}l(n){this.h=arguments,this.g?this.i=!0:_j(this)}M(){super.M(),this.g&&(Ke.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Al(e){$a.call(this),this.h=e,this.g={}}Lu(Al,$a);var Q3=[];function gj(e,n,u,o){Array.isArray(u)||(u&&(Q3[0]=u.toString()),u=Q3);for(var i=0;i<u.length;i++){var t=aj(n,u[i],o||e.handleEvent,!1,e.h||e);if(!t)break;e.g[t.key]=t}}function pj(e){vf(e.g,function(n,u){this.g.hasOwnProperty(u)&&Ef(n)},e),e.g={}}Al.prototype.M=function(){Al.Z.M.call(this),pj(this)};Al.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function vg(){this.g=!0}vg.prototype.Aa=function(){this.g=!1};function rY(e,n,u,o,i,t){e.info(function(){if(e.g)if(t)for(var r="",s=t.split("&"),d=0;d<s.length;d++){var l=s[d].split("=");if(1<l.length){var c=l[0];l=l[1];var _=c.split("_");r=2<=_.length&&_[1]=="type"?r+(c+"="+l+"&"):r+(c+"=redacted&")}}else r=null;else r=t;return"XMLHTTP REQ ("+o+") [attempt "+i+"]: "+n+`
`+u+`
`+r})}function sY(e,n,u,o,i,t,r){e.info(function(){return"XMLHTTP RESP ("+o+") [ attempt "+i+"]: "+n+`
`+u+`
`+t+" "+r})}function Gs(e,n,u,o){e.info(function(){return"XMLHTTP TEXT ("+n+"): "+mY(e,u)+(o?" "+o:"")})}function dY(e,n){e.info(function(){return"TIMEOUT: "+n})}vg.prototype.info=function(){};function mY(e,n){if(!e.g)return n;if(!n)return null;try{var u=JSON.parse(n);if(u){for(e=0;e<u.length;e++)if(Array.isArray(u[e])){var o=u[e];if(!(2>o.length)){var i=o[1];if(Array.isArray(i)&&!(1>i.length)){var t=i[0];if(t!="noop"&&t!="stop"&&t!="close")for(var r=1;r<i.length;r++)i[r]=""}}}}return Sf(u)}catch{return n}}var _s={},Z3=null;function Bg(){return Z3=Z3||new fu}_s.Ma="serverreachability";function hj(e){Ru.call(this,_s.Ma,e)}Lu(hj,Ru);function xl(e){const n=Bg();Eu(n,new hj(n,e))}_s.STAT_EVENT="statevent";function kj(e,n){Ru.call(this,_s.STAT_EVENT,e),this.stat=n}Lu(kj,Ru);function no(e){const n=Bg();Eu(n,new kj(n,e))}_s.Na="timingevent";function fj(e,n){Ru.call(this,_s.Na,e),this.size=n}Lu(fj,Ru);function Fc(e,n){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return Ke.setTimeout(function(){e()},n)}var Pg={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},yj={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function xf(){}xf.prototype.h=null;function e2(e){return e.h||(e.h=e.i())}function Fj(){}var bc={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Yf(){Ru.call(this,"d")}Lu(Yf,Ru);function If(){Ru.call(this,"c")}Lu(If,Ru);var I1;function Eg(){}Lu(Eg,xf);Eg.prototype.g=function(){return new XMLHttpRequest};Eg.prototype.i=function(){return{}};I1=new Eg;function wc(e,n,u,o){this.l=e,this.j=n,this.m=u,this.X=o||1,this.V=new Al(this),this.P=lY,e=S1?125:void 0,this.W=new Dg(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new bj}function bj(){this.i=null,this.g="",this.h=!1}var lY=45e3,O1={},D_={};Be=wc.prototype;Be.setTimeout=function(e){this.P=e};function N1(e,n,u){e.K=1,e.v=Tg(Ct(n)),e.s=u,e.U=!0,wj(e,null)}function wj(e,n){e.F=Date.now(),jc(e),e.A=Ct(e.v);var u=e.A,o=e.X;Array.isArray(o)||(o=[String(o)]),Mj(u.h,"t",o),e.C=0,u=e.l.H,e.h=new bj,e.g=Gj(e.l,u?n:null,!e.s),0<e.O&&(e.L=new aY(Pu(e.Ia,e,e.g),e.O)),gj(e.V,e.g,"readystatechange",e.gb),n=e.H?nj(e.H):{},e.s?(e.u||(e.u="POST"),n["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,n)):(e.u="GET",e.g.ea(e.A,e.u,null,n)),xl(1),rY(e.j,e.u,e.A,e.m,e.X,e.s)}Be.gb=function(e){e=e.target;const n=this.L;n&&Et(e)==3?n.l():this.Ia(e)};Be.Ia=function(e){try{if(e==this.g)e:{const c=Et(this.g);var n=this.g.Da();const _=this.g.ba();if(!(3>c)&&(c!=3||S1||this.g&&(this.h.h||this.g.ga()||i2(this.g)))){this.I||c!=4||n==7||(n==8||0>=_?xl(3):xl(2)),Mg(this);var u=this.g.ba();this.N=u;n:if(jj(this)){var o=i2(this.g);e="";var i=o.length,t=Et(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){br(this),rl(this);var r="";break n}this.h.i=new Ke.TextDecoder}for(n=0;n<i;n++)this.h.h=!0,e+=this.h.i.decode(o[n],{stream:t&&n==i-1});o.splice(0,i),this.h.g+=e,this.C=0,r=this.h.g}else r=this.g.ga();if(this.i=u==200,sY(this.j,this.u,this.A,this.m,this.X,c,u),this.i){if(this.$&&!this.J){n:{if(this.g){var s,d=this.g;if((s=d.g?d.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w_(s)){var l=s;break n}}l=null}if(u=l)Gs(this.j,this.m,u,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,R1(this,u);else{this.i=!1,this.o=3,no(12),br(this),rl(this);break e}}this.U?(Dj(this,c,r),S1&&this.i&&c==3&&(gj(this.V,this.W,"tick",this.fb),this.W.start())):(Gs(this.j,this.m,r,null),R1(this,r)),c==4&&br(this),this.i&&!this.I&&(c==4?Vj(this.l,this):(this.i=!1,jc(this)))}else u==400&&0<r.indexOf("Unknown SID")?(this.o=3,no(12)):(this.o=0,no(13)),br(this),rl(this)}}}catch{}finally{}};function jj(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Ba:!1}function Dj(e,n,u){let o=!0,i;for(;!e.I&&e.C<u.length;)if(i=cY(e,u),i==D_){n==4&&(e.o=4,no(14),o=!1),Gs(e.j,e.m,null,"[Incomplete Response]");break}else if(i==O1){e.o=4,no(15),Gs(e.j,e.m,u,"[Invalid Chunk]"),o=!1;break}else Gs(e.j,e.m,i,null),R1(e,i);jj(e)&&i!=D_&&i!=O1&&(e.h.g="",e.C=0),n!=4||u.length!=0||e.h.h||(e.o=1,no(16),o=!1),e.i=e.i&&o,o?0<u.length&&!e.aa&&(e.aa=!0,n=e.l,n.g==e&&n.$&&!n.L&&(n.h.info("Great, no buffering proxy detected. Bytes received: "+u.length),Wf(n),n.L=!0,no(11))):(Gs(e.j,e.m,u,"[Invalid Chunked Response]"),br(e),rl(e))}Be.fb=function(){if(this.g){var e=Et(this.g),n=this.g.ga();this.C<n.length&&(Mg(this),Dj(this,e,n),this.i&&e!=4&&jc(this))}};function cY(e,n){var u=e.C,o=n.indexOf(`
`,u);return o==-1?D_:(u=Number(n.substring(u,o)),isNaN(u)?O1:(o+=1,o+u>n.length?D_:(n=n.substr(o,u),e.C=o+u,n)))}Be.cancel=function(){this.I=!0,br(this)};function jc(e){e.Y=Date.now()+e.P,vj(e,e.P)}function vj(e,n){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Fc(Pu(e.eb,e),n)}function Mg(e){e.B&&(Ke.clearTimeout(e.B),e.B=null)}Be.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(dY(this.j,this.A),this.K!=2&&(xl(3),no(17)),br(this),this.o=2,rl(this)):vj(this,this.Y-e)};function rl(e){e.l.G==0||e.I||Vj(e.l,e)}function br(e){Mg(e);var n=e.L;n&&typeof n.na=="function"&&n.na(),e.L=null,Cf(e.W),pj(e.V),e.g&&(n=e.g,e.g=null,n.abort(),n.na())}function R1(e,n){try{var u=e.l;if(u.G!=0&&(u.g==e||$1(u.i,e))){if(u.I=e.N,!e.J&&$1(u.i,e)&&u.G==3){try{var o=u.Ca.g.parse(n)}catch{o=null}if(Array.isArray(o)&&o.length==3){var i=o;if(i[0]==0){e:if(!u.u){if(u.g)if(u.g.F+3e3<e.F)E_(u),Cg(u);else break e;Vf(u),no(18)}}else u.ta=i[1],0<u.ta-u.U&&37500>i[2]&&u.N&&u.A==0&&!u.v&&(u.v=Fc(Pu(u.ab,u),6e3));if(1>=Lj(u.i)&&u.ka){try{u.ka()}catch{}u.ka=void 0}}else wr(u,11)}else if((e.J||u.g==e)&&E_(u),!w_(n))for(i=u.Ca.g.parse(n),n=0;n<i.length;n++){let l=i[n];if(u.U=l[0],l=l[1],u.G==2)if(l[0]=="c"){u.J=l[1],u.la=l[2];const c=l[3];c!=null&&(u.ma=c,u.h.info("VER="+u.ma));const _=l[4];_!=null&&(u.za=_,u.h.info("SVER="+u.za));const p=l[5];p!=null&&typeof p=="number"&&0<p&&(o=1.5*p,u.K=o,u.h.info("backChannelRequestTimeoutMs_="+o)),o=u;const f=e.g;if(f){const y=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var t=o.i;!t.g&&(Zu(y,"spdy")||Zu(y,"quic")||Zu(y,"h2"))&&(t.j=t.l,t.g=new Set,t.h&&(Rf(t,t.h),t.h=null))}if(o.D){const D=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;D&&(o.sa=D,Rn(o.F,o.D,D))}}u.G=3,u.j&&u.j.xa(),u.$&&(u.O=Date.now()-e.F,u.h.info("Handshake RTT: "+u.O+"ms")),o=u;var r=e;if(o.oa=Kj(o,o.H?o.la:null,o.W),r.J){Cj(o.i,r);var s=r,d=o.K;d&&s.setTimeout(d),s.B&&(Mg(s),jc(s)),o.g=r}else Uj(o);0<u.l.length&&Ag(u)}else l[0]!="stop"&&l[0]!="close"||wr(u,7);else u.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?wr(u,7):zf(u):l[0]!="noop"&&u.j&&u.j.wa(l),u.A=0)}}xl(4)}catch{}}function _Y(e){if(e.R&&typeof e.R=="function")return e.R();if(typeof e=="string")return e.split("");if(T1(e)){for(var n=[],u=e.length,o=0;o<u;o++)n.push(e[o]);return n}n=[],u=0;for(o in e)n[u++]=e[o];return n}function Of(e,n){if(e.forEach&&typeof e.forEach=="function")e.forEach(n,void 0);else if(T1(e)||typeof e=="string")ej(e,n,void 0);else{if(e.T&&typeof e.T=="function")var u=e.T();else if(e.R&&typeof e.R=="function")u=void 0;else if(T1(e)||typeof e=="string"){u=[];for(var o=e.length,i=0;i<o;i++)u.push(i)}else for(i in u=[],o=0,e)u[o++]=i;o=_Y(e),i=o.length;for(var t=0;t<i;t++)n.call(void 0,o[t],u&&u[t],e)}}function Kd(e,n){this.h={},this.g=[],this.i=0;var u=arguments.length;if(1<u){if(u%2)throw Error("Uneven number of arguments");for(var o=0;o<u;o+=2)this.set(arguments[o],arguments[o+1])}else if(e)if(e instanceof Kd)for(u=e.T(),o=0;o<u.length;o++)this.set(u[o],e.get(u[o]));else for(o in e)this.set(o,e[o])}Be=Kd.prototype;Be.R=function(){Nf(this);for(var e=[],n=0;n<this.g.length;n++)e.push(this.h[this.g[n]]);return e};Be.T=function(){return Nf(this),this.g.concat()};function Nf(e){if(e.i!=e.g.length){for(var n=0,u=0;n<e.g.length;){var o=e.g[n];Gr(e.h,o)&&(e.g[u++]=o),n++}e.g.length=u}if(e.i!=e.g.length){var i={};for(u=n=0;n<e.g.length;)o=e.g[n],Gr(i,o)||(e.g[u++]=o,i[o]=1),n++;e.g.length=u}}Be.get=function(e,n){return Gr(this.h,e)?this.h[e]:n};Be.set=function(e,n){Gr(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=n};Be.forEach=function(e,n){for(var u=this.T(),o=0;o<u.length;o++){var i=u[o],t=this.get(i);e.call(n,t,i,this)}};function Gr(e,n){return Object.prototype.hasOwnProperty.call(e,n)}var Bj=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function gY(e,n){if(e){e=e.split("&");for(var u=0;u<e.length;u++){var o=e[u].indexOf("="),i=null;if(0<=o){var t=e[u].substring(0,o);i=e[u].substring(o+1)}else t=e[u];n(t,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Jr(e,n){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof Jr){this.g=n!==void 0?n:e.g,v_(this,e.j),this.s=e.s,B_(this,e.i),P_(this,e.m),this.l=e.l,n=e.h;var u=new Yl;u.i=n.i,n.g&&(u.g=new Kd(n.g),u.h=n.h),n2(this,u),this.o=e.o}else e&&(u=String(e).match(Bj))?(this.g=!!n,v_(this,u[1]||"",!0),this.s=sl(u[2]||""),B_(this,u[3]||"",!0),P_(this,u[4]),this.l=sl(u[5]||"",!0),n2(this,u[6]||"",!0),this.o=sl(u[7]||"")):(this.g=!!n,this.h=new Yl(null,this.g))}Jr.prototype.toString=function(){var e=[],n=this.j;n&&e.push(Vm(n,u2,!0),":");var u=this.i;return(u||n=="file")&&(e.push("//"),(n=this.s)&&e.push(Vm(n,u2,!0),"@"),e.push(encodeURIComponent(String(u)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u=this.m,u!=null&&e.push(":",String(u))),(u=this.l)&&(this.i&&u.charAt(0)!="/"&&e.push("/"),e.push(Vm(u,u.charAt(0)=="/"?yY:fY,!0))),(u=this.h.toString())&&e.push("?",u),(u=this.o)&&e.push("#",Vm(u,bY)),e.join("")};function Ct(e){return new Jr(e)}function v_(e,n,u){e.j=u?sl(n,!0):n,e.j&&(e.j=e.j.replace(/:$/,""))}function B_(e,n,u){e.i=u?sl(n,!0):n}function P_(e,n){if(n){if(n=Number(n),isNaN(n)||0>n)throw Error("Bad port number "+n);e.m=n}else e.m=null}function n2(e,n,u){n instanceof Yl?(e.h=n,wY(e.h,e.g)):(u||(n=Vm(n,FY)),e.h=new Yl(n,e.g))}function Rn(e,n,u){e.h.set(n,u)}function Tg(e){return Rn(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function pY(e){return e instanceof Jr?Ct(e):new Jr(e,void 0)}function hY(e,n,u,o){var i=new Jr(null,void 0);return e&&v_(i,e),n&&B_(i,n),u&&P_(i,u),o&&(i.l=o),i}function sl(e,n){return e?n?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Vm(e,n,u){return typeof e=="string"?(e=encodeURI(e).replace(n,kY),u&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function kY(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var u2=/[#\/\?@]/g,fY=/[#\?:]/g,yY=/[#\?]/g,FY=/[#\?@]/g,bY=/#/g;function Yl(e,n){this.h=this.g=null,this.i=e||null,this.j=!!n}function Ha(e){e.g||(e.g=new Kd,e.h=0,e.i&&gY(e.i,function(n,u){e.add(decodeURIComponent(n.replace(/\+/g," ")),u)}))}Be=Yl.prototype;Be.add=function(e,n){Ha(this),this.i=null,e=Gd(this,e);var u=this.g.get(e);return u||this.g.set(e,u=[]),u.push(n),this.h+=1,this};function Pj(e,n){Ha(e),n=Gd(e,n),Gr(e.g.h,n)&&(e.i=null,e.h-=e.g.get(n).length,e=e.g,Gr(e.h,n)&&(delete e.h[n],e.i--,e.g.length>2*e.i&&Nf(e)))}function Ej(e,n){return Ha(e),n=Gd(e,n),Gr(e.g.h,n)}Be.forEach=function(e,n){Ha(this),this.g.forEach(function(u,o){ej(u,function(i){e.call(n,i,o,this)},this)},this)};Be.T=function(){Ha(this);for(var e=this.g.R(),n=this.g.T(),u=[],o=0;o<n.length;o++)for(var i=e[o],t=0;t<i.length;t++)u.push(n[o]);return u};Be.R=function(e){Ha(this);var n=[];if(typeof e=="string")Ej(this,e)&&(n=W3(n,this.g.get(Gd(this,e))));else{e=this.g.R();for(var u=0;u<e.length;u++)n=W3(n,e[u])}return n};Be.set=function(e,n){return Ha(this),this.i=null,e=Gd(this,e),Ej(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[n]),this.h+=1,this};Be.get=function(e,n){return e?(e=this.R(e),0<e.length?String(e[0]):n):n};function Mj(e,n,u){Pj(e,n),0<u.length&&(e.i=null,e.g.set(Gd(e,n),Df(u)),e.h+=u.length)}Be.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],n=this.g.T(),u=0;u<n.length;u++){var o=n[u],i=encodeURIComponent(String(o));o=this.R(o);for(var t=0;t<o.length;t++){var r=i;o[t]!==""&&(r+="="+encodeURIComponent(String(o[t]))),e.push(r)}}return this.i=e.join("&")};function Gd(e,n){return n=String(n),e.j&&(n=n.toLowerCase()),n}function wY(e,n){n&&!e.j&&(Ha(e),e.i=null,e.g.forEach(function(u,o){var i=o.toLowerCase();o!=i&&(Pj(this,o),Mj(this,i,u))},e)),e.j=n}var jY=class{constructor(e,n){this.h=e,this.g=n}};function Tj(e){this.l=e||DY,Ke.PerformanceNavigationTiming?(e=Ke.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(Ke.g&&Ke.g.Ea&&Ke.g.Ea()&&Ke.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var DY=10;function Sj(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function Lj(e){return e.h?1:e.g?e.g.size:0}function $1(e,n){return e.h?e.h==n:e.g?e.g.has(n):!1}function Rf(e,n){e.g?e.g.add(n):e.h=n}function Cj(e,n){e.h&&e.h==n?e.h=null:e.g&&e.g.has(n)&&e.g.delete(n)}Tj.prototype.cancel=function(){if(this.i=Aj(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function Aj(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let n=e.i;for(const u of e.g.values())n=n.concat(u.D);return n}return Df(e.i)}function $f(){}$f.prototype.stringify=function(e){return Ke.JSON.stringify(e,void 0)};$f.prototype.parse=function(e){return Ke.JSON.parse(e,void 0)};function vY(){this.g=new $f}function BY(e,n,u){const o=u||"";try{Of(e,function(i,t){let r=i;fc(i)&&(r=Sf(i)),n.push(o+t+"="+encodeURIComponent(r))})}catch(i){throw n.push(o+"type="+encodeURIComponent("_badmap")),i}}function PY(e,n){const u=new vg;if(Ke.Image){const o=new Image;o.onload=j0(v0,u,o,"TestLoadImage: loaded",!0,n),o.onerror=j0(v0,u,o,"TestLoadImage: error",!1,n),o.onabort=j0(v0,u,o,"TestLoadImage: abort",!1,n),o.ontimeout=j0(v0,u,o,"TestLoadImage: timeout",!1,n),Ke.setTimeout(function(){o.ontimeout&&o.ontimeout()},1e4),o.src=e}else n(!1)}function v0(e,n,u,o,i){try{n.onload=null,n.onerror=null,n.onabort=null,n.ontimeout=null,i(o)}catch{}}function Dc(e){this.l=e.$b||null,this.j=e.ib||!1}Lu(Dc,xf);Dc.prototype.g=function(){return new Sg(this.l,this.j)};Dc.prototype.i=function(e){return function(){return e}}({});function Sg(e,n){fu.call(this),this.D=e,this.u=n,this.m=void 0,this.readyState=Hf,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Lu(Sg,fu);var Hf=0;Be=Sg.prototype;Be.open=function(e,n){if(this.readyState!=Hf)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=n,this.readyState=1,Il(this)};Be.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const n={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(n.body=e),(this.D||Ke).fetch(new Request(this.B,n)).then(this.Va.bind(this),this.ha.bind(this))};Be.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,vc(this)),this.readyState=Hf};Be.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Il(this)),this.g&&(this.readyState=3,Il(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof Ke.ReadableStream!="undefined"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;xj(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))};function xj(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}Be.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var n=e.value?e.value:new Uint8Array(0);(n=this.A.decode(n,{stream:!e.done}))&&(this.response=this.responseText+=n)}e.done?vc(this):Il(this),this.readyState==3&&xj(this)}};Be.Ua=function(e){this.g&&(this.response=this.responseText=e,vc(this))};Be.Ta=function(e){this.g&&(this.response=e,vc(this))};Be.ha=function(){this.g&&vc(this)};function vc(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Il(e)}Be.setRequestHeader=function(e,n){this.v.append(e,n)};Be.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};Be.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],n=this.h.entries();for(var u=n.next();!u.done;)u=u.value,e.push(u[0]+": "+u[1]),u=n.next();return e.join(`\r
`)};function Il(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Sg.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var EY=Ke.JSON.parse;function au(e){fu.call(this),this.headers=new Kd,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Yj,this.K=this.L=!1}Lu(au,fu);var Yj="",MY=/^https?$/i,TY=["POST","PUT"];Be=au.prototype;Be.ea=function(e,n,u,o){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);n=n?n.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():I1.g(),this.C=this.u?e2(this.u):e2(I1),this.g.onreadystatechange=Pu(this.Fa,this);try{this.F=!0,this.g.open(n,String(e),!0),this.F=!1}catch(t){o2(this,t);return}e=u||"";const i=new Kd(this.headers);o&&Of(o,function(t,r){i.set(r,t)}),o=$x(i.T()),u=Ke.FormData&&e instanceof Ke.FormData,!(0<=Zw(TY,n))||o||u||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(t,r){this.g.setRequestHeader(r,t)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Nj(this),0<this.B&&((this.K=SY(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Pu(this.pa,this)):this.A=Af(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(t){o2(this,t)}};function SY(e){return yd&&Wx()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}function LY(e){return e.toLowerCase()=="content-type"}Be.pa=function(){typeof jf!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Eu(this,"timeout"),this.abort(8))};function o2(e,n){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=n,e.m=5,Ij(e),Lg(e)}function Ij(e){e.D||(e.D=!0,Eu(e,"complete"),Eu(e,"error"))}Be.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Eu(this,"complete"),Eu(this,"abort"),Lg(this))};Be.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Lg(this,!0)),au.Z.M.call(this)};Be.Fa=function(){this.s||(this.F||this.v||this.l?Oj(this):this.cb())};Be.cb=function(){Oj(this)};function Oj(e){if(e.h&&typeof jf!="undefined"&&(!e.C[1]||Et(e)!=4||e.ba()!=2)){if(e.v&&Et(e)==4)Af(e.Fa,0,e);else if(Eu(e,"readystatechange"),Et(e)==4){e.h=!1;try{const s=e.ba();e:switch(s){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var n=!0;break e;default:n=!1}var u;if(!(u=n)){var o;if(o=s===0){var i=String(e.H).match(Bj)[1]||null;if(!i&&Ke.self&&Ke.self.location){var t=Ke.self.location.protocol;i=t.substr(0,t.length-1)}o=!MY.test(i?i.toLowerCase():"")}u=o}if(u)Eu(e,"complete"),Eu(e,"success");else{e.m=6;try{var r=2<Et(e)?e.g.statusText:""}catch{r=""}e.j=r+" ["+e.ba()+"]",Ij(e)}}finally{Lg(e)}}}}function Lg(e,n){if(e.g){Nj(e);const u=e.g,o=e.C[0]?b_:null;e.g=null,e.C=null,n||Eu(e,"ready");try{u.onreadystatechange=o}catch{}}}function Nj(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(Ke.clearTimeout(e.A),e.A=null)}function Et(e){return e.g?e.g.readyState:0}Be.ba=function(){try{return 2<Et(this)?this.g.status:-1}catch{return-1}};Be.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};Be.Qa=function(e){if(this.g){var n=this.g.responseText;return e&&n.indexOf(e)==0&&(n=n.substring(e.length)),EY(n)}};function i2(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Yj:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}Be.Da=function(){return this.m};Be.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function CY(e){let n="";return vf(e,function(u,o){n+=o,n+=":",n+=u,n+=`\r
`}),n}function Uf(e,n,u){e:{for(o in u){var o=!1;break e}o=!0}o||(u=CY(u),typeof e=="string"?u!=null&&encodeURIComponent(String(u)):Rn(e,n,u))}function Am(e,n,u){return u&&u.internalChannelParams&&u.internalChannelParams[e]||n}function Rj(e){this.za=0,this.l=[],this.h=new vg,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Am("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Am("baseRetryDelayMs",5e3,e),this.$a=Am("retryDelaySeedMs",1e4,e),this.Ya=Am("forwardChannelMaxRetries",2,e),this.ra=Am("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new Tj(e&&e.concurrentRequestLimit),this.Ca=new vY,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||e.Xb!==!1}Be=Rj.prototype;Be.ma=8;Be.G=1;function zf(e){if($j(e),e.G==3){var n=e.V++,u=Ct(e.F);Rn(u,"SID",e.J),Rn(u,"RID",n),Rn(u,"TYPE","terminate"),Bc(e,u),n=new wc(e,e.h,n,void 0),n.K=2,n.v=Tg(Ct(u)),u=!1,Ke.navigator&&Ke.navigator.sendBeacon&&(u=Ke.navigator.sendBeacon(n.v.toString(),"")),!u&&Ke.Image&&(new Image().src=n.v,u=!0),u||(n.g=Gj(n.l,null),n.g.ea(n.v)),n.F=Date.now(),jc(n)}qj(e)}Be.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch{}};function Cg(e){e.g&&(Wf(e),e.g.cancel(),e.g=null)}function $j(e){Cg(e),e.u&&(Ke.clearTimeout(e.u),e.u=null),E_(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&Ke.clearTimeout(e.m),e.m=null)}function xh(e,n){e.l.push(new jY(e.Za++,n)),e.G==3&&Ag(e)}function Ag(e){Sj(e.i)||e.m||(e.m=!0,Lf(e.Ha,e),e.C=0)}function AY(e,n){return Lj(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.l=n.D.concat(e.l),!0):e.G==1||e.G==2||e.C>=(e.Xa?0:e.Ya)?!1:(e.m=Fc(Pu(e.Ha,e,n),Wj(e,e.C)),e.C++,!0)}Be.Ha=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const i=new wc(this,this.h,e,void 0);let t=this.s;if(this.P&&(t?(t=nj(t),uj(t,this.P)):t=this.P),this.o===null&&(i.H=t),this.ja)e:{for(var n=0,u=0;u<this.l.length;u++){n:{var o=this.l[u];if("__data__"in o.g&&(o=o.g.__data__,typeof o=="string")){o=o.length;break n}o=void 0}if(o===void 0)break;if(n+=o,4096<n){n=u;break e}if(n===4096||u===this.l.length-1){n=u+1;break e}}n=1e3}else n=1e3;n=Hj(this,i,n),u=Ct(this.F),Rn(u,"RID",e),Rn(u,"CVER",22),this.D&&Rn(u,"X-HTTP-Session-Id",this.D),Bc(this,u),this.o&&t&&Uf(u,this.o,t),Rf(this.i,i),this.Ra&&Rn(u,"TYPE","init"),this.ja?(Rn(u,"$req",n),Rn(u,"SID","null"),i.$=!0,N1(i,u,null)):N1(i,u,n),this.G=2}}else this.G==3&&(e?t2(this,e):this.l.length==0||Sj(this.i)||t2(this))};function t2(e,n){var u;n?u=n.m:u=e.V++;const o=Ct(e.F);Rn(o,"SID",e.J),Rn(o,"RID",u),Rn(o,"AID",e.U),Bc(e,o),e.o&&e.s&&Uf(o,e.o,e.s),u=new wc(e,e.h,u,e.C+1),e.o===null&&(u.H=e.s),n&&(e.l=n.D.concat(e.l)),n=Hj(e,u,1e3),u.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),Rf(e.i,u),N1(u,o,n)}function Bc(e,n){e.j&&Of({},function(u,o){Rn(n,o,u)})}function Hj(e,n,u){u=Math.min(e.l.length,u);var o=e.j?Pu(e.j.Oa,e.j,e):null;e:{var i=e.l;let t=-1;for(;;){const r=["count="+u];t==-1?0<u?(t=i[0].h,r.push("ofs="+t)):t=0:r.push("ofs="+t);let s=!0;for(let d=0;d<u;d++){let l=i[d].h;const c=i[d].g;if(l-=t,0>l)t=Math.max(0,i[d].h-100),s=!1;else try{BY(c,r,"req"+l+"_")}catch{o&&o(c)}}if(s){o=r.join("&");break e}}}return e=e.l.splice(0,u),n.D=e,o}function Uj(e){e.g||e.u||(e.Y=1,Lf(e.Ga,e),e.A=0)}function Vf(e){return e.g||e.u||3<=e.A?!1:(e.Y++,e.u=Fc(Pu(e.Ga,e),Wj(e,e.A)),e.A++,!0)}Be.Ga=function(){if(this.u=null,zj(this),this.$&&!(this.L||this.g==null||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=Fc(Pu(this.bb,this),e)}};Be.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,no(10),Cg(this),zj(this))};function Wf(e){e.B!=null&&(Ke.clearTimeout(e.B),e.B=null)}function zj(e){e.g=new wc(e,e.h,"rpc",e.Y),e.o===null&&(e.g.H=e.s),e.g.O=0;var n=Ct(e.oa);Rn(n,"RID","rpc"),Rn(n,"SID",e.J),Rn(n,"CI",e.N?"0":"1"),Rn(n,"AID",e.U),Bc(e,n),Rn(n,"TYPE","xmlhttp"),e.o&&e.s&&Uf(n,e.o,e.s),e.K&&e.g.setTimeout(e.K);var u=e.g;e=e.la,u.K=1,u.v=Tg(Ct(n)),u.s=null,u.U=!0,wj(u,e)}Be.ab=function(){this.v!=null&&(this.v=null,Cg(this),Vf(this),no(19))};function E_(e){e.v!=null&&(Ke.clearTimeout(e.v),e.v=null)}function Vj(e,n){var u=null;if(e.g==n){E_(e),Wf(e),e.g=null;var o=2}else if($1(e.i,n))u=n.D,Cj(e.i,n),o=1;else return;if(e.I=n.N,e.G!=0){if(n.i)if(o==1){u=n.s?n.s.length:0,n=Date.now()-n.F;var i=e.C;o=Bg(),Eu(o,new fj(o,u,n,i)),Ag(e)}else Uj(e);else if(i=n.o,i==3||i==0&&0<e.I||!(o==1&&AY(e,n)||o==2&&Vf(e)))switch(u&&0<u.length&&(n=e.i,n.i=n.i.concat(u)),i){case 1:wr(e,5);break;case 4:wr(e,10);break;case 3:wr(e,6);break;default:wr(e,2)}}}function Wj(e,n){let u=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(u*=2),u*n}function wr(e,n){if(e.h.info("Error code "+n),n==2){var u=null;e.j&&(u=null);var o=Pu(e.jb,e);u||(u=new Jr("//www.google.com/images/cleardot.gif"),Ke.location&&Ke.location.protocol=="http"||v_(u,"https"),Tg(u)),PY(u.toString(),o)}else no(2);e.G=0,e.j&&e.j.va(n),qj(e),$j(e)}Be.jb=function(e){e?(this.h.info("Successfully pinged google.com"),no(2)):(this.h.info("Failed to ping google.com"),no(1))};function qj(e){e.G=0,e.I=-1,e.j&&((Aj(e.i).length!=0||e.l.length!=0)&&(e.i.i.length=0,Df(e.l),e.l.length=0),e.j.ua())}function Kj(e,n,u){let o=pY(u);if(o.i!="")n&&B_(o,n+"."+o.i),P_(o,o.m);else{const i=Ke.location;o=hY(i.protocol,n?n+"."+i.hostname:i.hostname,+i.port,u)}return e.aa&&vf(e.aa,function(i,t){Rn(o,t,i)}),n=e.D,u=e.sa,n&&u&&Rn(o,n,u),Rn(o,"VER",e.ma),Bc(e,o),o}function Gj(e,n,u){if(n&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return n=u&&e.Ba&&!e.qa?new au(new Dc({ib:!0})):new au(e.qa),n.L=e.H,n}function Jj(){}Be=Jj.prototype;Be.xa=function(){};Be.wa=function(){};Be.va=function(){};Be.ua=function(){};Be.Oa=function(){};function M_(){if(yd&&!(10<=Number(qx)))throw Error("Environmental error: no available transport.")}M_.prototype.g=function(e,n){return new Vo(e,n)};function Vo(e,n){fu.call(this),this.g=new Rj(n),this.l=e,this.h=n&&n.messageUrlParams||null,e=n&&n.messageHeaders||null,n&&n.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=n&&n.initMessageHeaders||null,n&&n.messageContentType&&(e?e["X-WebChannel-Content-Type"]=n.messageContentType:e={"X-WebChannel-Content-Type":n.messageContentType}),n&&n.ya&&(e?e["X-WebChannel-Client-Profile"]=n.ya:e={"X-WebChannel-Client-Profile":n.ya}),this.g.P=e,(e=n&&n.httpHeadersOverwriteParam)&&!w_(e)&&(this.g.o=e),this.A=n&&n.supportsCrossDomainXhr||!1,this.v=n&&n.sendRawJson||!1,(n=n&&n.httpSessionIdParam)&&!w_(n)&&(this.g.D=n,e=this.h,e!==null&&n in e&&(e=this.h,n in e&&delete e[n])),this.j=new Jd(this)}Lu(Vo,fu);Vo.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,n=this.l,u=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),Lf(Pu(e.hb,e,n))),no(0),e.W=n,e.aa=u||{},e.N=e.X,e.F=Kj(e,null,e.W),Ag(e)};Vo.prototype.close=function(){zf(this.g)};Vo.prototype.u=function(e){if(typeof e=="string"){var n={};n.__data__=e,xh(this.g,n)}else this.v?(n={},n.__data__=Sf(e),xh(this.g,n)):xh(this.g,e)};Vo.prototype.M=function(){this.g.j=null,delete this.j,zf(this.g),delete this.g,Vo.Z.M.call(this)};function Xj(e){Yf.call(this);var n=e.__sm__;if(n){e:{for(const u in n){e=u;break e}e=void 0}(this.i=e)&&(e=this.i,n=n!==null&&e in n?n[e]:void 0),this.data=n}else this.data=e}Lu(Xj,Yf);function Qj(){If.call(this),this.status=1}Lu(Qj,If);function Jd(e){this.g=e}Lu(Jd,Jj);Jd.prototype.xa=function(){Eu(this.g,"a")};Jd.prototype.wa=function(e){Eu(this.g,new Xj(e))};Jd.prototype.va=function(e){Eu(this.g,new Qj(e))};Jd.prototype.ua=function(){Eu(this.g,"b")};M_.prototype.createWebChannel=M_.prototype.g;Vo.prototype.send=Vo.prototype.u;Vo.prototype.open=Vo.prototype.m;Vo.prototype.close=Vo.prototype.close;Pg.NO_ERROR=0;Pg.TIMEOUT=8;Pg.HTTP_ERROR=6;yj.COMPLETE="complete";Fj.EventType=bc;bc.OPEN="a";bc.CLOSE="b";bc.ERROR="c";bc.MESSAGE="d";fu.prototype.listen=fu.prototype.N;au.prototype.listenOnce=au.prototype.O;au.prototype.getLastError=au.prototype.La;au.prototype.getLastErrorCode=au.prototype.Da;au.prototype.getStatus=au.prototype.ba;au.prototype.getResponseJson=au.prototype.Qa;au.prototype.getResponseText=au.prototype.ga;au.prototype.send=au.prototype.ea;var xY=function(){return new M_},YY=function(){return Bg()},Yh=Pg,IY=yj,OY=_s,a2={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},NY=Dc,B0=Fj,RY=au;const r2="@firebase/firestore";/**
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
 */class co{constructor(n){this.uid=n}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(n){return n.uid===this.uid}}co.UNAUTHENTICATED=new co(null),co.GOOGLE_CREDENTIALS=new co("google-credentials-uid"),co.FIRST_PARTY=new co("first-party-uid"),co.MOCK_USER=new co("mock-user");/**
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
 */let Xd="9.8.0";/**
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
 */const Xr=new pg("@firebase/firestore");function s2(){return Xr.logLevel}function Ae(e,...n){if(Xr.logLevel<=bn.DEBUG){const u=n.map(qf);Xr.debug(`Firestore (${Xd}): ${e}`,...u)}}function Sa(e,...n){if(Xr.logLevel<=bn.ERROR){const u=n.map(qf);Xr.error(`Firestore (${Xd}): ${e}`,...u)}}function d2(e,...n){if(Xr.logLevel<=bn.WARN){const u=n.map(qf);Xr.warn(`Firestore (${Xd}): ${e}`,...u)}}function qf(e){if(typeof e=="string")return e;try{return n=e,JSON.stringify(n)}catch{return e}/**
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
*/var n}/**
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
 */function Xe(e="Unexpected state"){const n=`FIRESTORE (${Xd}) INTERNAL ASSERTION FAILED: `+e;throw Sa(n),new Error(n)}function An(e,n){e||Xe()}function Qe(e,n){return e}/**
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
 */const ae={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ee extends ot{constructor(n,u){super(n,u),this.code=n,this.message=u,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class wa{constructor(){this.promise=new Promise((n,u)=>{this.resolve=n,this.reject=u})}}/**
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
 */class $Y{constructor(n,u){this.user=u,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${n}`)}}class HY{getToken(){return Promise.resolve(null)}invalidateToken(){}start(n,u){n.enqueueRetryable(()=>u(co.UNAUTHENTICATED))}shutdown(){}}class UY{constructor(n){this.t=n,this.currentUser=co.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(n,u){let o=this.i;const i=d=>this.i!==o?(o=this.i,u(d)):Promise.resolve();let t=new wa;this.o=()=>{this.i++,this.currentUser=this.u(),t.resolve(),t=new wa,n.enqueueRetryable(()=>i(this.currentUser))};const r=()=>{const d=t;n.enqueueRetryable(async()=>{await d.promise,await i(this.currentUser)})},s=d=>{Ae("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=d,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit(d=>s(d)),setTimeout(()=>{if(!this.auth){const d=this.t.getImmediate({optional:!0});d?s(d):(Ae("FirebaseAuthCredentialsProvider","Auth not yet detected"),t.resolve(),t=new wa)}},0),r()}getToken(){const n=this.i,u=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(u).then(o=>this.i!==n?(Ae("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):o?(An(typeof o.accessToken=="string"),new $Y(o.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const n=this.auth&&this.auth.getUid();return An(n===null||typeof n=="string"),new co(n)}}class zY{constructor(n,u,o){this.type="FirstParty",this.user=co.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",u);const i=n.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),o&&this.headers.set("X-Goog-Iam-Authorization-Token",o)}}class VY{constructor(n,u,o){this.h=n,this.l=u,this.m=o}getToken(){return Promise.resolve(new zY(this.h,this.l,this.m))}start(n,u){n.enqueueRetryable(()=>u(co.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class WY{constructor(n){this.value=n,this.type="AppCheck",this.headers=new Map,n&&n.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class qY{constructor(n){this.g=n,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(n,u){const o=t=>{t.error!=null&&Ae("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const r=t.token!==this.p;return this.p=t.token,Ae("FirebaseAppCheckTokenProvider",`Received ${r?"new":"existing"} token.`),r?u(t.token):Promise.resolve()};this.o=t=>{n.enqueueRetryable(()=>o(t))};const i=t=>{Ae("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit(t=>i(t)),setTimeout(()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?i(t):Ae("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const n=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(n).then(u=>u?(An(typeof u.token=="string"),this.p=u.token,new WY(u.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */class Kf{constructor(n,u){this.previousValue=n,u&&(u.sequenceNumberHandler=o=>this.I(o),this.T=o=>u.writeSequenceNumber(o))}I(n){return this.previousValue=Math.max(n,this.previousValue),this.previousValue}next(){const n=++this.previousValue;return this.T&&this.T(n),n}}/**
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
 */function KY(e){const n=typeof self!="undefined"&&(self.crypto||self.msCrypto),u=new Uint8Array(e);if(n&&typeof n.getRandomValues=="function")n.getRandomValues(u);else for(let o=0;o<e;o++)u[o]=Math.floor(256*Math.random());return u}/**
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
 */Kf.A=-1;class Zj{static R(){const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",u=Math.floor(256/n.length)*n.length;let o="";for(;o.length<20;){const i=KY(40);for(let t=0;t<i.length;++t)o.length<20&&i[t]<u&&(o+=n.charAt(i[t]%n.length))}return o}}function Dn(e,n){return e<n?-1:e>n?1:0}function Fd(e,n,u){return e.length===n.length&&e.every((o,i)=>u(o,n[i]))}/**
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
 */class $u{constructor(n,u){if(this.seconds=n,this.nanoseconds=u,u<0)throw new Ee(ae.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+u);if(u>=1e9)throw new Ee(ae.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+u);if(n<-62135596800)throw new Ee(ae.INVALID_ARGUMENT,"Timestamp seconds out of range: "+n);if(n>=253402300800)throw new Ee(ae.INVALID_ARGUMENT,"Timestamp seconds out of range: "+n)}static now(){return $u.fromMillis(Date.now())}static fromDate(n){return $u.fromMillis(n.getTime())}static fromMillis(n){const u=Math.floor(n/1e3),o=Math.floor(1e6*(n-1e3*u));return new $u(u,o)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(n){return this.seconds===n.seconds?Dn(this.nanoseconds,n.nanoseconds):Dn(this.seconds,n.seconds)}isEqual(n){return n.seconds===this.seconds&&n.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const n=this.seconds- -62135596800;return String(n).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class on{constructor(n){this.timestamp=n}static fromTimestamp(n){return new on(n)}static min(){return new on(new $u(0,0))}static max(){return new on(new $u(253402300799,999999999))}compareTo(n){return this.timestamp._compareTo(n.timestamp)}isEqual(n){return this.timestamp.isEqual(n.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */function m2(e){let n=0;for(const u in e)Object.prototype.hasOwnProperty.call(e,u)&&n++;return n}function gs(e,n){for(const u in e)Object.prototype.hasOwnProperty.call(e,u)&&n(u,e[u])}function eD(e){for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n))return!1;return!0}/**
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
 */class Ol{constructor(n,u,o){u===void 0?u=0:u>n.length&&Xe(),o===void 0?o=n.length-u:o>n.length-u&&Xe(),this.segments=n,this.offset=u,this.len=o}get length(){return this.len}isEqual(n){return Ol.comparator(this,n)===0}child(n){const u=this.segments.slice(this.offset,this.limit());return n instanceof Ol?n.forEach(o=>{u.push(o)}):u.push(n),this.construct(u)}limit(){return this.offset+this.length}popFirst(n){return n=n===void 0?1:n,this.construct(this.segments,this.offset+n,this.length-n)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(n){return this.segments[this.offset+n]}isEmpty(){return this.length===0}isPrefixOf(n){if(n.length<this.length)return!1;for(let u=0;u<this.length;u++)if(this.get(u)!==n.get(u))return!1;return!0}isImmediateParentOf(n){if(this.length+1!==n.length)return!1;for(let u=0;u<this.length;u++)if(this.get(u)!==n.get(u))return!1;return!0}forEach(n){for(let u=this.offset,o=this.limit();u<o;u++)n(this.segments[u])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(n,u){const o=Math.min(n.length,u.length);for(let i=0;i<o;i++){const t=n.get(i),r=u.get(i);if(t<r)return-1;if(t>r)return 1}return n.length<u.length?-1:n.length>u.length?1:0}}class Yn extends Ol{construct(n,u,o){return new Yn(n,u,o)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...n){const u=[];for(const o of n){if(o.indexOf("//")>=0)throw new Ee(ae.INVALID_ARGUMENT,`Invalid segment (${o}). Paths must not contain // in them.`);u.push(...o.split("/").filter(i=>i.length>0))}return new Yn(u)}static emptyPath(){return new Yn([])}}const GY=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class go extends Ol{construct(n,u,o){return new go(n,u,o)}static isValidIdentifier(n){return GY.test(n)}canonicalString(){return this.toArray().map(n=>(n=n.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),go.isValidIdentifier(n)||(n="`"+n+"`"),n)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new go(["__name__"])}static fromServerFormat(n){const u=[];let o="",i=0;const t=()=>{if(o.length===0)throw new Ee(ae.INVALID_ARGUMENT,`Invalid field path (${n}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);u.push(o),o=""};let r=!1;for(;i<n.length;){const s=n[i];if(s==="\\"){if(i+1===n.length)throw new Ee(ae.INVALID_ARGUMENT,"Path has trailing escape character: "+n);const d=n[i+1];if(d!=="\\"&&d!=="."&&d!=="`")throw new Ee(ae.INVALID_ARGUMENT,"Path has invalid escape sequence: "+n);o+=d,i+=2}else s==="`"?(r=!r,i++):s!=="."||r?(o+=s,i++):(t(),i++)}if(t(),r)throw new Ee(ae.INVALID_ARGUMENT,"Unterminated ` in path: "+n);return new go(u)}static emptyPath(){return new go([])}}/**
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
 */class Nl{constructor(n){this.fields=n,n.sort(go.comparator)}covers(n){for(const u of this.fields)if(u.isPrefixOf(n))return!0;return!1}isEqual(n){return Fd(this.fields,n.fields,(u,o)=>u.isEqual(o))}}/**
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
 */class Tu{constructor(n){this.binaryString=n}static fromBase64String(n){const u=atob(n);return new Tu(u)}static fromUint8Array(n){const u=function(o){let i="";for(let t=0;t<o.length;++t)i+=String.fromCharCode(o[t]);return i}(n);return new Tu(u)}[Symbol.iterator](){let n=0;return{next:()=>n<this.binaryString.length?{value:this.binaryString.charCodeAt(n++),done:!1}:{value:void 0,done:!0}}}toBase64(){return n=this.binaryString,btoa(n);var n}toUint8Array(){return function(n){const u=new Uint8Array(n.length);for(let o=0;o<n.length;o++)u[o]=n.charCodeAt(o);return u}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(n){return Dn(this.binaryString,n.binaryString)}isEqual(n){return this.binaryString===n.binaryString}}Tu.EMPTY_BYTE_STRING=new Tu("");const JY=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function La(e){if(An(!!e),typeof e=="string"){let n=0;const u=JY.exec(e);if(An(!!u),u[1]){let i=u[1];i=(i+"000000000").substr(0,9),n=Number(i)}const o=new Date(e);return{seconds:Math.floor(o.getTime()/1e3),nanos:n}}return{seconds:ou(e.seconds),nanos:ou(e.nanos)}}function ou(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function bd(e){return typeof e=="string"?Tu.fromBase64String(e):Tu.fromUint8Array(e)}/**
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
 */function nD(e){var n,u;return((u=(((n=e==null?void 0:e.mapValue)===null||n===void 0?void 0:n.fields)||{}).__type__)===null||u===void 0?void 0:u.stringValue)==="server_timestamp"}function uD(e){const n=e.mapValue.fields.__previous_value__;return nD(n)?uD(n):n}function Rl(e){const n=La(e.mapValue.fields.__local_write_time__.timestampValue);return new $u(n.seconds,n.nanos)}/**
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
 */class XY{constructor(n,u,o,i,t,r,s,d){this.databaseId=n,this.appId=u,this.persistenceKey=o,this.host=i,this.ssl=t,this.forceLongPolling=r,this.autoDetectLongPolling=s,this.useFetchStreams=d}}class wd{constructor(n,u){this.projectId=n,this.database=u||"(default)"}static empty(){return new wd("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(n){return n instanceof wd&&n.projectId===this.projectId&&n.database===this.database}}/**
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
 */function xg(e){return e==null}function T_(e){return e===0&&1/e==-1/0}function QY(e){return typeof e=="number"&&Number.isInteger(e)&&!T_(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
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
 */class Re{constructor(n){this.path=n}static fromPath(n){return new Re(Yn.fromString(n))}static fromName(n){return new Re(Yn.fromString(n).popFirst(5))}static empty(){return new Re(Yn.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(n){return this.path.length>=2&&this.path.get(this.path.length-2)===n}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(n){return n!==null&&Yn.comparator(this.path,n.path)===0}toString(){return this.path.toString()}static comparator(n,u){return Yn.comparator(n.path,u.path)}static isDocumentKey(n){return n.length%2==0}static fromSegments(n){return new Re(new Yn(n.slice()))}}/**
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
 */const P0={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Qr(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?nD(e)?4:ZY(e)?9007199254740991:10:Xe()}function nt(e,n){if(e===n)return!0;const u=Qr(e);if(u!==Qr(n))return!1;switch(u){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===n.booleanValue;case 4:return Rl(e).isEqual(Rl(n));case 3:return function(o,i){if(typeof o.timestampValue=="string"&&typeof i.timestampValue=="string"&&o.timestampValue.length===i.timestampValue.length)return o.timestampValue===i.timestampValue;const t=La(o.timestampValue),r=La(i.timestampValue);return t.seconds===r.seconds&&t.nanos===r.nanos}(e,n);case 5:return e.stringValue===n.stringValue;case 6:return function(o,i){return bd(o.bytesValue).isEqual(bd(i.bytesValue))}(e,n);case 7:return e.referenceValue===n.referenceValue;case 8:return function(o,i){return ou(o.geoPointValue.latitude)===ou(i.geoPointValue.latitude)&&ou(o.geoPointValue.longitude)===ou(i.geoPointValue.longitude)}(e,n);case 2:return function(o,i){if("integerValue"in o&&"integerValue"in i)return ou(o.integerValue)===ou(i.integerValue);if("doubleValue"in o&&"doubleValue"in i){const t=ou(o.doubleValue),r=ou(i.doubleValue);return t===r?T_(t)===T_(r):isNaN(t)&&isNaN(r)}return!1}(e,n);case 9:return Fd(e.arrayValue.values||[],n.arrayValue.values||[],nt);case 10:return function(o,i){const t=o.mapValue.fields||{},r=i.mapValue.fields||{};if(m2(t)!==m2(r))return!1;for(const s in t)if(t.hasOwnProperty(s)&&(r[s]===void 0||!nt(t[s],r[s])))return!1;return!0}(e,n);default:return Xe()}}function $l(e,n){return(e.values||[]).find(u=>nt(u,n))!==void 0}function jd(e,n){if(e===n)return 0;const u=Qr(e),o=Qr(n);if(u!==o)return Dn(u,o);switch(u){case 0:case 9007199254740991:return 0;case 1:return Dn(e.booleanValue,n.booleanValue);case 2:return function(i,t){const r=ou(i.integerValue||i.doubleValue),s=ou(t.integerValue||t.doubleValue);return r<s?-1:r>s?1:r===s?0:isNaN(r)?isNaN(s)?0:-1:1}(e,n);case 3:return l2(e.timestampValue,n.timestampValue);case 4:return l2(Rl(e),Rl(n));case 5:return Dn(e.stringValue,n.stringValue);case 6:return function(i,t){const r=bd(i),s=bd(t);return r.compareTo(s)}(e.bytesValue,n.bytesValue);case 7:return function(i,t){const r=i.split("/"),s=t.split("/");for(let d=0;d<r.length&&d<s.length;d++){const l=Dn(r[d],s[d]);if(l!==0)return l}return Dn(r.length,s.length)}(e.referenceValue,n.referenceValue);case 8:return function(i,t){const r=Dn(ou(i.latitude),ou(t.latitude));return r!==0?r:Dn(ou(i.longitude),ou(t.longitude))}(e.geoPointValue,n.geoPointValue);case 9:return function(i,t){const r=i.values||[],s=t.values||[];for(let d=0;d<r.length&&d<s.length;++d){const l=jd(r[d],s[d]);if(l)return l}return Dn(r.length,s.length)}(e.arrayValue,n.arrayValue);case 10:return function(i,t){if(i===P0.mapValue&&t===P0.mapValue)return 0;if(i===P0.mapValue)return 1;if(t===P0.mapValue)return-1;const r=i.fields||{},s=Object.keys(r),d=t.fields||{},l=Object.keys(d);s.sort(),l.sort();for(let c=0;c<s.length&&c<l.length;++c){const _=Dn(s[c],l[c]);if(_!==0)return _;const p=jd(r[s[c]],d[l[c]]);if(p!==0)return p}return Dn(s.length,l.length)}(e.mapValue,n.mapValue);default:throw Xe()}}function l2(e,n){if(typeof e=="string"&&typeof n=="string"&&e.length===n.length)return Dn(e,n);const u=La(e),o=La(n),i=Dn(u.seconds,o.seconds);return i!==0?i:Dn(u.nanos,o.nanos)}function td(e){return H1(e)}function H1(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(o){const i=La(o);return`time(${i.seconds},${i.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?bd(e.bytesValue).toBase64():"referenceValue"in e?(u=e.referenceValue,Re.fromName(u).toString()):"geoPointValue"in e?`geo(${(n=e.geoPointValue).latitude},${n.longitude})`:"arrayValue"in e?function(o){let i="[",t=!0;for(const r of o.values||[])t?t=!1:i+=",",i+=H1(r);return i+"]"}(e.arrayValue):"mapValue"in e?function(o){const i=Object.keys(o.fields||{}).sort();let t="{",r=!0;for(const s of i)r?r=!1:t+=",",t+=`${s}:${H1(o.fields[s])}`;return t+"}"}(e.mapValue):Xe();var n,u}function c2(e,n){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${n.path.canonicalString()}`}}function U1(e){return!!e&&"integerValue"in e}function Gf(e){return!!e&&"arrayValue"in e}function _2(e){return!!e&&"nullValue"in e}function g2(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function J0(e){return!!e&&"mapValue"in e}function dl(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const n={mapValue:{fields:{}}};return gs(e.mapValue.fields,(u,o)=>n.mapValue.fields[u]=dl(o)),n}if(e.arrayValue){const n={arrayValue:{values:[]}};for(let u=0;u<(e.arrayValue.values||[]).length;++u)n.arrayValue.values[u]=dl(e.arrayValue.values[u]);return n}return Object.assign({},e)}function ZY(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ao{constructor(n){this.value=n}static empty(){return new Ao({mapValue:{}})}field(n){if(n.isEmpty())return this.value;{let u=this.value;for(let o=0;o<n.length-1;++o)if(u=(u.mapValue.fields||{})[n.get(o)],!J0(u))return null;return u=(u.mapValue.fields||{})[n.lastSegment()],u||null}}set(n,u){this.getFieldsMap(n.popLast())[n.lastSegment()]=dl(u)}setAll(n){let u=go.emptyPath(),o={},i=[];n.forEach((r,s)=>{if(!u.isImmediateParentOf(s)){const d=this.getFieldsMap(u);this.applyChanges(d,o,i),o={},i=[],u=s.popLast()}r?o[s.lastSegment()]=dl(r):i.push(s.lastSegment())});const t=this.getFieldsMap(u);this.applyChanges(t,o,i)}delete(n){const u=this.field(n.popLast());J0(u)&&u.mapValue.fields&&delete u.mapValue.fields[n.lastSegment()]}isEqual(n){return nt(this.value,n.value)}getFieldsMap(n){let u=this.value;u.mapValue.fields||(u.mapValue={fields:{}});for(let o=0;o<n.length;++o){let i=u.mapValue.fields[n.get(o)];J0(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},u.mapValue.fields[n.get(o)]=i),u=i}return u.mapValue.fields}applyChanges(n,u,o){gs(u,(i,t)=>n[i]=t);for(const i of o)delete n[i]}clone(){return new Ao(dl(this.value))}}function oD(e){const n=[];return gs(e.fields,(u,o)=>{const i=new go([u]);if(J0(o)){const t=oD(o.mapValue).fields;if(t.length===0)n.push(i);else for(const r of t)n.push(i.child(r))}else n.push(i)}),new Nl(n)}/**
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
 */class Yu{constructor(n,u,o,i,t,r){this.key=n,this.documentType=u,this.version=o,this.readTime=i,this.data=t,this.documentState=r}static newInvalidDocument(n){return new Yu(n,0,on.min(),on.min(),Ao.empty(),0)}static newFoundDocument(n,u,o){return new Yu(n,1,u,on.min(),o,0)}static newNoDocument(n,u){return new Yu(n,2,u,on.min(),Ao.empty(),0)}static newUnknownDocument(n,u){return new Yu(n,3,u,on.min(),Ao.empty(),2)}convertToFoundDocument(n,u){return this.version=n,this.documentType=1,this.data=u,this.documentState=0,this}convertToNoDocument(n){return this.version=n,this.documentType=2,this.data=Ao.empty(),this.documentState=0,this}convertToUnknownDocument(n){return this.version=n,this.documentType=3,this.data=Ao.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(n){return this.readTime=n,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(n){return n instanceof Yu&&this.key.isEqual(n.key)&&this.version.isEqual(n.version)&&this.documentType===n.documentType&&this.documentState===n.documentState&&this.data.isEqual(n.data)}mutableCopy(){return new Yu(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}function eI(e,n){const u=e.toTimestamp().seconds,o=e.toTimestamp().nanoseconds+1,i=on.fromTimestamp(o===1e9?new $u(u+1,0):new $u(u,o));return new Zr(i,Re.empty(),n)}function nI(e){return new Zr(e.readTime,e.key,-1)}class Zr{constructor(n,u,o){this.readTime=n,this.documentKey=u,this.largestBatchId=o}static min(){return new Zr(on.min(),Re.empty(),-1)}static max(){return new Zr(on.max(),Re.empty(),-1)}}function uI(e,n){let u=e.readTime.compareTo(n.readTime);return u!==0?u:(u=Re.comparator(e.documentKey,n.documentKey),u!==0?u:Dn(e.largestBatchId,n.largestBatchId))}/**
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
 */class yu{constructor(n,u){this.comparator=n,this.root=u||Du.EMPTY}insert(n,u){return new yu(this.comparator,this.root.insert(n,u,this.comparator).copy(null,null,Du.BLACK,null,null))}remove(n){return new yu(this.comparator,this.root.remove(n,this.comparator).copy(null,null,Du.BLACK,null,null))}get(n){let u=this.root;for(;!u.isEmpty();){const o=this.comparator(n,u.key);if(o===0)return u.value;o<0?u=u.left:o>0&&(u=u.right)}return null}indexOf(n){let u=0,o=this.root;for(;!o.isEmpty();){const i=this.comparator(n,o.key);if(i===0)return u+o.left.size;i<0?o=o.left:(u+=o.left.size+1,o=o.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(n){return this.root.inorderTraversal(n)}forEach(n){this.inorderTraversal((u,o)=>(n(u,o),!1))}toString(){const n=[];return this.inorderTraversal((u,o)=>(n.push(`${u}:${o}`),!1)),`{${n.join(", ")}}`}reverseTraversal(n){return this.root.reverseTraversal(n)}getIterator(){return new E0(this.root,null,this.comparator,!1)}getIteratorFrom(n){return new E0(this.root,n,this.comparator,!1)}getReverseIterator(){return new E0(this.root,null,this.comparator,!0)}getReverseIteratorFrom(n){return new E0(this.root,n,this.comparator,!0)}}class E0{constructor(n,u,o,i){this.isReverse=i,this.nodeStack=[];let t=1;for(;!n.isEmpty();)if(t=u?o(n.key,u):1,u&&i&&(t*=-1),t<0)n=this.isReverse?n.left:n.right;else{if(t===0){this.nodeStack.push(n);break}this.nodeStack.push(n),n=this.isReverse?n.right:n.left}}getNext(){let n=this.nodeStack.pop();const u={key:n.key,value:n.value};if(this.isReverse)for(n=n.left;!n.isEmpty();)this.nodeStack.push(n),n=n.right;else for(n=n.right;!n.isEmpty();)this.nodeStack.push(n),n=n.left;return u}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const n=this.nodeStack[this.nodeStack.length-1];return{key:n.key,value:n.value}}}class Du{constructor(n,u,o,i,t){this.key=n,this.value=u,this.color=o!=null?o:Du.RED,this.left=i!=null?i:Du.EMPTY,this.right=t!=null?t:Du.EMPTY,this.size=this.left.size+1+this.right.size}copy(n,u,o,i,t){return new Du(n!=null?n:this.key,u!=null?u:this.value,o!=null?o:this.color,i!=null?i:this.left,t!=null?t:this.right)}isEmpty(){return!1}inorderTraversal(n){return this.left.inorderTraversal(n)||n(this.key,this.value)||this.right.inorderTraversal(n)}reverseTraversal(n){return this.right.reverseTraversal(n)||n(this.key,this.value)||this.left.reverseTraversal(n)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(n,u,o){let i=this;const t=o(n,i.key);return i=t<0?i.copy(null,null,null,i.left.insert(n,u,o),null):t===0?i.copy(null,u,null,null,null):i.copy(null,null,null,null,i.right.insert(n,u,o)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Du.EMPTY;let n=this;return n.left.isRed()||n.left.left.isRed()||(n=n.moveRedLeft()),n=n.copy(null,null,null,n.left.removeMin(),null),n.fixUp()}remove(n,u){let o,i=this;if(u(n,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(n,u),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),u(n,i.key)===0){if(i.right.isEmpty())return Du.EMPTY;o=i.right.min(),i=i.copy(o.key,o.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(n,u))}return i.fixUp()}isRed(){return this.color}fixUp(){let n=this;return n.right.isRed()&&!n.left.isRed()&&(n=n.rotateLeft()),n.left.isRed()&&n.left.left.isRed()&&(n=n.rotateRight()),n.left.isRed()&&n.right.isRed()&&(n=n.colorFlip()),n}moveRedLeft(){let n=this.colorFlip();return n.right.left.isRed()&&(n=n.copy(null,null,null,null,n.right.rotateRight()),n=n.rotateLeft(),n=n.colorFlip()),n}moveRedRight(){let n=this.colorFlip();return n.left.left.isRed()&&(n=n.rotateRight(),n=n.colorFlip()),n}rotateLeft(){const n=this.copy(null,null,Du.RED,null,this.right.left);return this.right.copy(null,null,this.color,n,null)}rotateRight(){const n=this.copy(null,null,Du.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,n)}colorFlip(){const n=this.left.copy(null,null,!this.left.color,null,null),u=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,n,u)}checkMaxDepth(){const n=this.check();return Math.pow(2,n)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Xe();const n=this.left.check();if(n!==this.right.check())throw Xe();return n+(this.isRed()?0:1)}}Du.EMPTY=null,Du.RED=!0,Du.BLACK=!1;Du.EMPTY=new class{constructor(){this.size=0}get key(){throw Xe()}get value(){throw Xe()}get color(){throw Xe()}get left(){throw Xe()}get right(){throw Xe()}copy(e,n,u,o,i){return this}insert(e,n,u){return new Du(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Mu{constructor(n){this.comparator=n,this.data=new yu(this.comparator)}has(n){return this.data.get(n)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(n){return this.data.indexOf(n)}forEach(n){this.data.inorderTraversal((u,o)=>(n(u),!1))}forEachInRange(n,u){const o=this.data.getIteratorFrom(n[0]);for(;o.hasNext();){const i=o.getNext();if(this.comparator(i.key,n[1])>=0)return;u(i.key)}}forEachWhile(n,u){let o;for(o=u!==void 0?this.data.getIteratorFrom(u):this.data.getIterator();o.hasNext();)if(!n(o.getNext().key))return}firstAfterOrEqual(n){const u=this.data.getIteratorFrom(n);return u.hasNext()?u.getNext().key:null}getIterator(){return new p2(this.data.getIterator())}getIteratorFrom(n){return new p2(this.data.getIteratorFrom(n))}add(n){return this.copy(this.data.remove(n).insert(n,!0))}delete(n){return this.has(n)?this.copy(this.data.remove(n)):this}isEmpty(){return this.data.isEmpty()}unionWith(n){let u=this;return u.size<n.size&&(u=n,n=this),n.forEach(o=>{u=u.add(o)}),u}isEqual(n){if(!(n instanceof Mu)||this.size!==n.size)return!1;const u=this.data.getIterator(),o=n.data.getIterator();for(;u.hasNext();){const i=u.getNext().key,t=o.getNext().key;if(this.comparator(i,t)!==0)return!1}return!0}toArray(){const n=[];return this.forEach(u=>{n.push(u)}),n}toString(){const n=[];return this.forEach(u=>n.push(u)),"SortedSet("+n.toString()+")"}copy(n){const u=new Mu(this.comparator);return u.data=n,u}}class p2{constructor(n){this.iter=n}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class oI{constructor(n,u=null,o=[],i=[],t=null,r=null,s=null){this.path=n,this.collectionGroup=u,this.orderBy=o,this.filters=i,this.limit=t,this.startAt=r,this.endAt=s,this.P=null}}function h2(e,n=null,u=[],o=[],i=null,t=null,r=null){return new oI(e,n,u,o,i,t,r)}function Jf(e){const n=Qe(e);if(n.P===null){let u=n.path.canonicalString();n.collectionGroup!==null&&(u+="|cg:"+n.collectionGroup),u+="|f:",u+=n.filters.map(o=>{return(i=o).field.canonicalString()+i.op.toString()+td(i.value);var i}).join(","),u+="|ob:",u+=n.orderBy.map(o=>function(i){return i.field.canonicalString()+i.dir}(o)).join(","),xg(n.limit)||(u+="|l:",u+=n.limit),n.startAt&&(u+="|lb:",u+=n.startAt.inclusive?"b:":"a:",u+=n.startAt.position.map(o=>td(o)).join(",")),n.endAt&&(u+="|ub:",u+=n.endAt.inclusive?"a:":"b:",u+=n.endAt.position.map(o=>td(o)).join(",")),n.P=u}return n.P}function iI(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(u=>{return`${(o=u).field.canonicalString()} ${o.op} ${td(o.value)}`;var o}).join(", ")}]`),xg(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(u=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(u)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(u=>td(u)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(u=>td(u)).join(",")),`Target(${n})`}function Xf(e,n){if(e.limit!==n.limit||e.orderBy.length!==n.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++)if(!cI(e.orderBy[i],n.orderBy[i]))return!1;if(e.filters.length!==n.filters.length)return!1;for(let i=0;i<e.filters.length;i++)if(u=e.filters[i],o=n.filters[i],u.op!==o.op||!u.field.isEqual(o.field)||!nt(u.value,o.value))return!1;var u,o;return e.collectionGroup===n.collectionGroup&&!!e.path.isEqual(n.path)&&!!f2(e.startAt,n.startAt)&&f2(e.endAt,n.endAt)}function z1(e){return Re.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}class uo extends class{}{constructor(n,u,o){super(),this.field=n,this.op=u,this.value=o}static create(n,u,o){return n.isKeyField()?u==="in"||u==="not-in"?this.V(n,u,o):new tI(n,u,o):u==="array-contains"?new sI(n,o):u==="in"?new dI(n,o):u==="not-in"?new mI(n,o):u==="array-contains-any"?new lI(n,o):new uo(n,u,o)}static V(n,u,o){return u==="in"?new aI(n,o):new rI(n,o)}matches(n){const u=n.data.field(this.field);return this.op==="!="?u!==null&&this.v(jd(u,this.value)):u!==null&&Qr(this.value)===Qr(u)&&this.v(jd(u,this.value))}v(n){switch(this.op){case"<":return n<0;case"<=":return n<=0;case"==":return n===0;case"!=":return n!==0;case">":return n>0;case">=":return n>=0;default:return Xe()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class tI extends uo{constructor(n,u,o){super(n,u,o),this.key=Re.fromName(o.referenceValue)}matches(n){const u=Re.comparator(n.key,this.key);return this.v(u)}}class aI extends uo{constructor(n,u){super(n,"in",u),this.keys=iD("in",u)}matches(n){return this.keys.some(u=>u.isEqual(n.key))}}class rI extends uo{constructor(n,u){super(n,"not-in",u),this.keys=iD("not-in",u)}matches(n){return!this.keys.some(u=>u.isEqual(n.key))}}function iD(e,n){var u;return(((u=n.arrayValue)===null||u===void 0?void 0:u.values)||[]).map(o=>Re.fromName(o.referenceValue))}class sI extends uo{constructor(n,u){super(n,"array-contains",u)}matches(n){const u=n.data.field(this.field);return Gf(u)&&$l(u.arrayValue,this.value)}}class dI extends uo{constructor(n,u){super(n,"in",u)}matches(n){const u=n.data.field(this.field);return u!==null&&$l(this.value.arrayValue,u)}}class mI extends uo{constructor(n,u){super(n,"not-in",u)}matches(n){if($l(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const u=n.data.field(this.field);return u!==null&&!$l(this.value.arrayValue,u)}}class lI extends uo{constructor(n,u){super(n,"array-contains-any",u)}matches(n){const u=n.data.field(this.field);return!(!Gf(u)||!u.arrayValue.values)&&u.arrayValue.values.some(o=>$l(this.value.arrayValue,o))}}class S_{constructor(n,u){this.position=n,this.inclusive=u}}class ad{constructor(n,u="asc"){this.field=n,this.dir=u}}function cI(e,n){return e.dir===n.dir&&e.field.isEqual(n.field)}function k2(e,n,u){let o=0;for(let i=0;i<e.position.length;i++){const t=n[i],r=e.position[i];if(t.field.isKeyField()?o=Re.comparator(Re.fromName(r.referenceValue),u.key):o=jd(r,u.data.field(t.field)),t.dir==="desc"&&(o*=-1),o!==0)break}return o}function f2(e,n){if(e===null)return n===null;if(n===null||e.inclusive!==n.inclusive||e.position.length!==n.position.length)return!1;for(let u=0;u<e.position.length;u++)if(!nt(e.position[u],n.position[u]))return!1;return!0}/**
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
 */class Qd{constructor(n,u=null,o=[],i=[],t=null,r="F",s=null,d=null){this.path=n,this.collectionGroup=u,this.explicitOrderBy=o,this.filters=i,this.limit=t,this.limitType=r,this.startAt=s,this.endAt=d,this.D=null,this.C=null,this.startAt,this.endAt}}function _I(e,n,u,o,i,t,r,s){return new Qd(e,n,u,o,i,t,r,s)}function Qf(e){return new Qd(e)}function gI(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function Zf(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function ey(e){for(const n of e.filters)if(n.S())return n.field;return null}function tD(e){return e.collectionGroup!==null}function Hl(e){const n=Qe(e);if(n.D===null){n.D=[];const u=ey(n),o=Zf(n);if(u!==null&&o===null)u.isKeyField()||n.D.push(new ad(u)),n.D.push(new ad(go.keyField(),"asc"));else{let i=!1;for(const t of n.explicitOrderBy)n.D.push(t),t.field.isKeyField()&&(i=!0);if(!i){const t=n.explicitOrderBy.length>0?n.explicitOrderBy[n.explicitOrderBy.length-1].dir:"asc";n.D.push(new ad(go.keyField(),t))}}}return n.D}function es(e){const n=Qe(e);if(!n.C)if(n.limitType==="F")n.C=h2(n.path,n.collectionGroup,Hl(n),n.filters,n.limit,n.startAt,n.endAt);else{const u=[];for(const t of Hl(n)){const r=t.dir==="desc"?"asc":"desc";u.push(new ad(t.field,r))}const o=n.endAt?new S_(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new S_(n.startAt.position,n.startAt.inclusive):null;n.C=h2(n.path,n.collectionGroup,u,n.filters,n.limit,o,i)}return n.C}function aD(e,n,u){return new Qd(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),n,u,e.startAt,e.endAt)}function Yg(e,n){return Xf(es(e),es(n))&&e.limitType===n.limitType}function rD(e){return`${Jf(es(e))}|lt:${e.limitType}`}function V1(e){return`Query(target=${iI(es(e))}; limitType=${e.limitType})`}function ny(e,n){return n.isFoundDocument()&&function(u,o){const i=o.key.path;return u.collectionGroup!==null?o.key.hasCollectionId(u.collectionGroup)&&u.path.isPrefixOf(i):Re.isDocumentKey(u.path)?u.path.isEqual(i):u.path.isImmediateParentOf(i)}(e,n)&&function(u,o){for(const i of u.explicitOrderBy)if(!i.field.isKeyField()&&o.data.field(i.field)===null)return!1;return!0}(e,n)&&function(u,o){for(const i of u.filters)if(!i.matches(o))return!1;return!0}(e,n)&&function(u,o){return!(u.startAt&&!function(i,t,r){const s=k2(i,t,r);return i.inclusive?s<=0:s<0}(u.startAt,Hl(u),o)||u.endAt&&!function(i,t,r){const s=k2(i,t,r);return i.inclusive?s>=0:s>0}(u.endAt,Hl(u),o))}(e,n)}function pI(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function sD(e){return(n,u)=>{let o=!1;for(const i of Hl(e)){const t=hI(i,n,u);if(t!==0)return t;o=o||i.field.isKeyField()}return 0}}function hI(e,n,u){const o=e.field.isKeyField()?Re.comparator(n.key,u.key):function(i,t,r){const s=t.data.field(i),d=r.data.field(i);return s!==null&&d!==null?jd(s,d):Xe()}(e.field,n,u);switch(e.dir){case"asc":return o;case"desc":return-1*o;default:return Xe()}}/**
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
 */function dD(e,n){if(e.N){if(isNaN(n))return{doubleValue:"NaN"};if(n===1/0)return{doubleValue:"Infinity"};if(n===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:T_(n)?"-0":n}}function mD(e){return{integerValue:""+e}}function kI(e,n){return QY(n)?mD(n):dD(e,n)}/**
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
 */class Ig{constructor(){this._=void 0}}function fI(e,n,u){return e instanceof Ul?function(o,i){const t={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return i&&(t.fields.__previous_value__=i),{mapValue:t}}(u,n):e instanceof Dd?cD(e,n):e instanceof zl?_D(e,n):function(o,i){const t=lD(o,i),r=y2(t)+y2(o.k);return U1(t)&&U1(o.k)?mD(r):dD(o.M,r)}(e,n)}function yI(e,n,u){return e instanceof Dd?cD(e,n):e instanceof zl?_D(e,n):u}function lD(e,n){return e instanceof L_?U1(u=n)||function(o){return!!o&&"doubleValue"in o}(u)?n:{integerValue:0}:null;var u}class Ul extends Ig{}class Dd extends Ig{constructor(n){super(),this.elements=n}}function cD(e,n){const u=gD(n);for(const o of e.elements)u.some(i=>nt(i,o))||u.push(o);return{arrayValue:{values:u}}}class zl extends Ig{constructor(n){super(),this.elements=n}}function _D(e,n){let u=gD(n);for(const o of e.elements)u=u.filter(i=>!nt(i,o));return{arrayValue:{values:u}}}class L_ extends Ig{constructor(n,u){super(),this.M=n,this.k=u}}function y2(e){return ou(e.integerValue||e.doubleValue)}function gD(e){return Gf(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}/**
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
 */class pD{constructor(n,u){this.field=n,this.transform=u}}function FI(e,n){return e.field.isEqual(n.field)&&function(u,o){return u instanceof Dd&&o instanceof Dd||u instanceof zl&&o instanceof zl?Fd(u.elements,o.elements,nt):u instanceof L_&&o instanceof L_?nt(u.k,o.k):u instanceof Ul&&o instanceof Ul}(e.transform,n.transform)}class bI{constructor(n,u){this.version=n,this.transformResults=u}}class ja{constructor(n,u){this.updateTime=n,this.exists=u}static none(){return new ja}static exists(n){return new ja(void 0,n)}static updateTime(n){return new ja(n)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(n){return this.exists===n.exists&&(this.updateTime?!!n.updateTime&&this.updateTime.isEqual(n.updateTime):!n.updateTime)}}function X0(e,n){return e.updateTime!==void 0?n.isFoundDocument()&&n.version.isEqual(e.updateTime):e.exists===void 0||e.exists===n.isFoundDocument()}class Og{}function wI(e,n,u){e instanceof Ng?function(o,i,t){const r=o.value.clone(),s=w2(o.fieldTransforms,i,t.transformResults);r.setAll(s),i.convertToFoundDocument(t.version,r).setHasCommittedMutations()}(e,n,u):e instanceof Zd?function(o,i,t){if(!X0(o.precondition,i))return void i.convertToUnknownDocument(t.version);const r=w2(o.fieldTransforms,i,t.transformResults),s=i.data;s.setAll(hD(o)),s.setAll(r),i.convertToFoundDocument(t.version,s).setHasCommittedMutations()}(e,n,u):function(o,i,t){i.convertToNoDocument(t.version).setHasCommittedMutations()}(0,n,u)}function W1(e,n,u){e instanceof Ng?function(o,i,t){if(!X0(o.precondition,i))return;const r=o.value.clone(),s=j2(o.fieldTransforms,t,i);r.setAll(s),i.convertToFoundDocument(b2(i),r).setHasLocalMutations()}(e,n,u):e instanceof Zd?function(o,i,t){if(!X0(o.precondition,i))return;const r=j2(o.fieldTransforms,t,i),s=i.data;s.setAll(hD(o)),s.setAll(r),i.convertToFoundDocument(b2(i),s).setHasLocalMutations()}(e,n,u):function(o,i){X0(o.precondition,i)&&i.convertToNoDocument(on.min())}(e,n)}function jI(e,n){let u=null;for(const o of e.fieldTransforms){const i=n.data.field(o.field),t=lD(o.transform,i||null);t!=null&&(u==null&&(u=Ao.empty()),u.set(o.field,t))}return u||null}function F2(e,n){return e.type===n.type&&!!e.key.isEqual(n.key)&&!!e.precondition.isEqual(n.precondition)&&!!function(u,o){return u===void 0&&o===void 0||!(!u||!o)&&Fd(u,o,(i,t)=>FI(i,t))}(e.fieldTransforms,n.fieldTransforms)&&(e.type===0?e.value.isEqual(n.value):e.type!==1||e.data.isEqual(n.data)&&e.fieldMask.isEqual(n.fieldMask))}function b2(e){return e.isFoundDocument()?e.version:on.min()}class Ng extends Og{constructor(n,u,o,i=[]){super(),this.key=n,this.value=u,this.precondition=o,this.fieldTransforms=i,this.type=0}}class Zd extends Og{constructor(n,u,o,i,t=[]){super(),this.key=n,this.data=u,this.fieldMask=o,this.precondition=i,this.fieldTransforms=t,this.type=1}}function hD(e){const n=new Map;return e.fieldMask.fields.forEach(u=>{if(!u.isEmpty()){const o=e.data.field(u);n.set(u,o)}}),n}function w2(e,n,u){const o=new Map;An(e.length===u.length);for(let i=0;i<u.length;i++){const t=e[i],r=t.transform,s=n.data.field(t.field);o.set(t.field,yI(r,s,u[i]))}return o}function j2(e,n,u){const o=new Map;for(const i of e){const t=i.transform,r=u.data.field(i.field);o.set(i.field,fI(t,r,n))}return o}class kD extends Og{constructor(n,u){super(),this.key=n,this.precondition=u,this.type=2,this.fieldTransforms=[]}}class DI extends Og{constructor(n,u){super(),this.key=n,this.precondition=u,this.type=3,this.fieldTransforms=[]}}/**
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
 */class vI{constructor(n){this.count=n}}/**
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
 */var uu,gn;function BI(e){switch(e){default:return Xe();case ae.CANCELLED:case ae.UNKNOWN:case ae.DEADLINE_EXCEEDED:case ae.RESOURCE_EXHAUSTED:case ae.INTERNAL:case ae.UNAVAILABLE:case ae.UNAUTHENTICATED:return!1;case ae.INVALID_ARGUMENT:case ae.NOT_FOUND:case ae.ALREADY_EXISTS:case ae.PERMISSION_DENIED:case ae.FAILED_PRECONDITION:case ae.ABORTED:case ae.OUT_OF_RANGE:case ae.UNIMPLEMENTED:case ae.DATA_LOSS:return!0}}function fD(e){if(e===void 0)return Sa("GRPC error has no .code"),ae.UNKNOWN;switch(e){case uu.OK:return ae.OK;case uu.CANCELLED:return ae.CANCELLED;case uu.UNKNOWN:return ae.UNKNOWN;case uu.DEADLINE_EXCEEDED:return ae.DEADLINE_EXCEEDED;case uu.RESOURCE_EXHAUSTED:return ae.RESOURCE_EXHAUSTED;case uu.INTERNAL:return ae.INTERNAL;case uu.UNAVAILABLE:return ae.UNAVAILABLE;case uu.UNAUTHENTICATED:return ae.UNAUTHENTICATED;case uu.INVALID_ARGUMENT:return ae.INVALID_ARGUMENT;case uu.NOT_FOUND:return ae.NOT_FOUND;case uu.ALREADY_EXISTS:return ae.ALREADY_EXISTS;case uu.PERMISSION_DENIED:return ae.PERMISSION_DENIED;case uu.FAILED_PRECONDITION:return ae.FAILED_PRECONDITION;case uu.ABORTED:return ae.ABORTED;case uu.OUT_OF_RANGE:return ae.OUT_OF_RANGE;case uu.UNIMPLEMENTED:return ae.UNIMPLEMENTED;case uu.DATA_LOSS:return ae.DATA_LOSS;default:return Xe()}}(gn=uu||(uu={}))[gn.OK=0]="OK",gn[gn.CANCELLED=1]="CANCELLED",gn[gn.UNKNOWN=2]="UNKNOWN",gn[gn.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",gn[gn.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",gn[gn.NOT_FOUND=5]="NOT_FOUND",gn[gn.ALREADY_EXISTS=6]="ALREADY_EXISTS",gn[gn.PERMISSION_DENIED=7]="PERMISSION_DENIED",gn[gn.UNAUTHENTICATED=16]="UNAUTHENTICATED",gn[gn.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",gn[gn.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",gn[gn.ABORTED=10]="ABORTED",gn[gn.OUT_OF_RANGE=11]="OUT_OF_RANGE",gn[gn.UNIMPLEMENTED=12]="UNIMPLEMENTED",gn[gn.INTERNAL=13]="INTERNAL",gn[gn.UNAVAILABLE=14]="UNAVAILABLE",gn[gn.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class em{constructor(n,u){this.mapKeyFn=n,this.equalsFn=u,this.inner={},this.innerSize=0}get(n){const u=this.mapKeyFn(n),o=this.inner[u];if(o!==void 0){for(const[i,t]of o)if(this.equalsFn(i,n))return t}}has(n){return this.get(n)!==void 0}set(n,u){const o=this.mapKeyFn(n),i=this.inner[o];if(i===void 0)return this.inner[o]=[[n,u]],void this.innerSize++;for(let t=0;t<i.length;t++)if(this.equalsFn(i[t][0],n))return void(i[t]=[n,u]);i.push([n,u]),this.innerSize++}delete(n){const u=this.mapKeyFn(n),o=this.inner[u];if(o===void 0)return!1;for(let i=0;i<o.length;i++)if(this.equalsFn(o[i][0],n))return o.length===1?delete this.inner[u]:o.splice(i,1),this.innerSize--,!0;return!1}forEach(n){gs(this.inner,(u,o)=>{for(const[i,t]of o)n(i,t)})}isEmpty(){return eD(this.inner)}size(){return this.innerSize}}/**
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
 */const PI=new yu(Re.comparator);function ns(){return PI}const EI=new yu(Re.comparator);function q1(...e){let n=EI;for(const u of e)n=n.insert(u.key,u);return n}function Ih(){return new em(e=>e.toString(),(e,n)=>e.isEqual(n))}const MI=new yu(Re.comparator),TI=new Mu(Re.comparator);function In(...e){let n=TI;for(const u of e)n=n.add(u);return n}const SI=new Mu(Dn);function yD(){return SI}/**
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
 */class Rg{constructor(n,u,o,i,t){this.snapshotVersion=n,this.targetChanges=u,this.targetMismatches=o,this.documentUpdates=i,this.resolvedLimboDocuments=t}static createSynthesizedRemoteEventForCurrentChange(n,u){const o=new Map;return o.set(n,Pc.createSynthesizedTargetChangeForCurrentChange(n,u)),new Rg(on.min(),o,yD(),ns(),In())}}class Pc{constructor(n,u,o,i,t){this.resumeToken=n,this.current=u,this.addedDocuments=o,this.modifiedDocuments=i,this.removedDocuments=t}static createSynthesizedTargetChangeForCurrentChange(n,u){return new Pc(Tu.EMPTY_BYTE_STRING,u,In(),In(),In())}}/**
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
 */class Q0{constructor(n,u,o,i){this.O=n,this.removedTargetIds=u,this.key=o,this.F=i}}class FD{constructor(n,u){this.targetId=n,this.$=u}}class bD{constructor(n,u,o=Tu.EMPTY_BYTE_STRING,i=null){this.state=n,this.targetIds=u,this.resumeToken=o,this.cause=i}}class D2{constructor(){this.B=0,this.L=B2(),this.U=Tu.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return this.B!==0}get j(){return this.K}W(n){n.approximateByteSize()>0&&(this.K=!0,this.U=n)}H(){let n=In(),u=In(),o=In();return this.L.forEach((i,t)=>{switch(t){case 0:n=n.add(i);break;case 2:u=u.add(i);break;case 1:o=o.add(i);break;default:Xe()}}),new Pc(this.U,this.q,n,u,o)}J(){this.K=!1,this.L=B2()}Y(n,u){this.K=!0,this.L=this.L.insert(n,u)}X(n){this.K=!0,this.L=this.L.remove(n)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class LI{constructor(n){this.nt=n,this.st=new Map,this.it=ns(),this.rt=v2(),this.ot=new Mu(Dn)}ut(n){for(const u of n.O)n.F&&n.F.isFoundDocument()?this.at(u,n.F):this.ct(u,n.key,n.F);for(const u of n.removedTargetIds)this.ct(u,n.key,n.F)}ht(n){this.forEachTarget(n,u=>{const o=this.lt(u);switch(n.state){case 0:this.ft(u)&&o.W(n.resumeToken);break;case 1:o.tt(),o.G||o.J(),o.W(n.resumeToken);break;case 2:o.tt(),o.G||this.removeTarget(u);break;case 3:this.ft(u)&&(o.et(),o.W(n.resumeToken));break;case 4:this.ft(u)&&(this.dt(u),o.W(n.resumeToken));break;default:Xe()}})}forEachTarget(n,u){n.targetIds.length>0?n.targetIds.forEach(u):this.st.forEach((o,i)=>{this.ft(i)&&u(i)})}_t(n){const u=n.targetId,o=n.$.count,i=this.wt(u);if(i){const t=i.target;if(z1(t))if(o===0){const r=new Re(t.path);this.ct(u,r,Yu.newNoDocument(r,on.min()))}else An(o===1);else this.gt(u)!==o&&(this.dt(u),this.ot=this.ot.add(u))}}yt(n){const u=new Map;this.st.forEach((t,r)=>{const s=this.wt(r);if(s){if(t.current&&z1(s.target)){const d=new Re(s.target.path);this.it.get(d)!==null||this.It(r,d)||this.ct(r,d,Yu.newNoDocument(d,n))}t.j&&(u.set(r,t.H()),t.J())}});let o=In();this.rt.forEach((t,r)=>{let s=!0;r.forEachWhile(d=>{const l=this.wt(d);return!l||l.purpose===2||(s=!1,!1)}),s&&(o=o.add(t))}),this.it.forEach((t,r)=>r.setReadTime(n));const i=new Rg(n,u,this.ot,this.it,o);return this.it=ns(),this.rt=v2(),this.ot=new Mu(Dn),i}at(n,u){if(!this.ft(n))return;const o=this.It(n,u.key)?2:0;this.lt(n).Y(u.key,o),this.it=this.it.insert(u.key,u),this.rt=this.rt.insert(u.key,this.Tt(u.key).add(n))}ct(n,u,o){if(!this.ft(n))return;const i=this.lt(n);this.It(n,u)?i.Y(u,1):i.X(u),this.rt=this.rt.insert(u,this.Tt(u).delete(n)),o&&(this.it=this.it.insert(u,o))}removeTarget(n){this.st.delete(n)}gt(n){const u=this.lt(n).H();return this.nt.getRemoteKeysForTarget(n).size+u.addedDocuments.size-u.removedDocuments.size}Z(n){this.lt(n).Z()}lt(n){let u=this.st.get(n);return u||(u=new D2,this.st.set(n,u)),u}Tt(n){let u=this.rt.get(n);return u||(u=new Mu(Dn),this.rt=this.rt.insert(n,u)),u}ft(n){const u=this.wt(n)!==null;return u||Ae("WatchChangeAggregator","Detected inactive target",n),u}wt(n){const u=this.st.get(n);return u&&u.G?null:this.nt.Et(n)}dt(n){this.st.set(n,new D2),this.nt.getRemoteKeysForTarget(n).forEach(u=>{this.ct(n,u,null)})}It(n,u){return this.nt.getRemoteKeysForTarget(n).has(u)}}function v2(){return new yu(Re.comparator)}function B2(){return new yu(Re.comparator)}/**
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
 */const CI=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),AI=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class xI{constructor(n,u){this.databaseId=n,this.N=u}}function C_(e,n){return e.N?`${new Date(1e3*n.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+n.nanoseconds).slice(-9)}Z`:{seconds:""+n.seconds,nanos:n.nanoseconds}}function wD(e,n){return e.N?n.toBase64():n.toUint8Array()}function YI(e,n){return C_(e,n.toTimestamp())}function Mt(e){return An(!!e),on.fromTimestamp(function(n){const u=La(n);return new $u(u.seconds,u.nanos)}(e))}function uy(e,n){return function(u){return new Yn(["projects",u.projectId,"databases",u.database])}(e).child("documents").child(n).canonicalString()}function jD(e){const n=Yn.fromString(e);return An(BD(n)),n}function K1(e,n){return uy(e.databaseId,n.path)}function Oh(e,n){const u=jD(n);if(u.get(1)!==e.databaseId.projectId)throw new Ee(ae.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+u.get(1)+" vs "+e.databaseId.projectId);if(u.get(3)!==e.databaseId.database)throw new Ee(ae.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+u.get(3)+" vs "+e.databaseId.database);return new Re(DD(u))}function G1(e,n){return uy(e.databaseId,n)}function II(e){const n=jD(e);return n.length===4?Yn.emptyPath():DD(n)}function J1(e){return new Yn(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function DD(e){return An(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function P2(e,n,u){return{name:K1(e,n),fields:u.value.mapValue.fields}}function OI(e,n){let u;if("targetChange"in n){n.targetChange;const o=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:Xe()}(n.targetChange.targetChangeType||"NO_CHANGE"),i=n.targetChange.targetIds||[],t=function(d,l){return d.N?(An(l===void 0||typeof l=="string"),Tu.fromBase64String(l||"")):(An(l===void 0||l instanceof Uint8Array),Tu.fromUint8Array(l||new Uint8Array))}(e,n.targetChange.resumeToken),r=n.targetChange.cause,s=r&&function(d){const l=d.code===void 0?ae.UNKNOWN:fD(d.code);return new Ee(l,d.message||"")}(r);u=new bD(o,i,t,s||null)}else if("documentChange"in n){n.documentChange;const o=n.documentChange;o.document,o.document.name,o.document.updateTime;const i=Oh(e,o.document.name),t=Mt(o.document.updateTime),r=new Ao({mapValue:{fields:o.document.fields}}),s=Yu.newFoundDocument(i,t,r),d=o.targetIds||[],l=o.removedTargetIds||[];u=new Q0(d,l,s.key,s)}else if("documentDelete"in n){n.documentDelete;const o=n.documentDelete;o.document;const i=Oh(e,o.document),t=o.readTime?Mt(o.readTime):on.min(),r=Yu.newNoDocument(i,t),s=o.removedTargetIds||[];u=new Q0([],s,r.key,r)}else if("documentRemove"in n){n.documentRemove;const o=n.documentRemove;o.document;const i=Oh(e,o.document),t=o.removedTargetIds||[];u=new Q0([],t,i,null)}else{if(!("filter"in n))return Xe();{n.filter;const o=n.filter;o.targetId;const i=o.count||0,t=new vI(i),r=o.targetId;u=new FD(r,t)}}return u}function NI(e,n){let u;if(n instanceof Ng)u={update:P2(e,n.key,n.value)};else if(n instanceof kD)u={delete:K1(e,n.key)};else if(n instanceof Zd)u={update:P2(e,n.key,n.data),updateMask:GI(n.fieldMask)};else{if(!(n instanceof DI))return Xe();u={verify:K1(e,n.key)}}return n.fieldTransforms.length>0&&(u.updateTransforms=n.fieldTransforms.map(o=>function(i,t){const r=t.transform;if(r instanceof Ul)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(r instanceof Dd)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:r.elements}};if(r instanceof zl)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:r.elements}};if(r instanceof L_)return{fieldPath:t.field.canonicalString(),increment:r.k};throw Xe()}(0,o))),n.precondition.isNone||(u.currentDocument=function(o,i){return i.updateTime!==void 0?{updateTime:YI(o,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Xe()}(e,n.precondition)),u}function RI(e,n){return e&&e.length>0?(An(n!==void 0),e.map(u=>function(o,i){let t=o.updateTime?Mt(o.updateTime):Mt(i);return t.isEqual(on.min())&&(t=Mt(i)),new bI(t,o.transformResults||[])}(u,n))):[]}function $I(e,n){return{documents:[G1(e,n.path)]}}function HI(e,n){const u={structuredQuery:{}},o=n.path;n.collectionGroup!==null?(u.parent=G1(e,o),u.structuredQuery.from=[{collectionId:n.collectionGroup,allDescendants:!0}]):(u.parent=G1(e,o.popLast()),u.structuredQuery.from=[{collectionId:o.lastSegment()}]);const i=function(d){if(d.length===0)return;const l=d.map(c=>function(_){if(_.op==="=="){if(g2(_.value))return{unaryFilter:{field:$s(_.field),op:"IS_NAN"}};if(_2(_.value))return{unaryFilter:{field:$s(_.field),op:"IS_NULL"}}}else if(_.op==="!="){if(g2(_.value))return{unaryFilter:{field:$s(_.field),op:"IS_NOT_NAN"}};if(_2(_.value))return{unaryFilter:{field:$s(_.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:$s(_.field),op:WI(_.op),value:_.value}}}(c));return l.length===1?l[0]:{compositeFilter:{op:"AND",filters:l}}}(n.filters);i&&(u.structuredQuery.where=i);const t=function(d){if(d.length!==0)return d.map(l=>function(c){return{field:$s(c.field),direction:VI(c.dir)}}(l))}(n.orderBy);t&&(u.structuredQuery.orderBy=t);const r=function(d,l){return d.N||xg(l)?l:{value:l}}(e,n.limit);var s;return r!==null&&(u.structuredQuery.limit=r),n.startAt&&(u.structuredQuery.startAt={before:(s=n.startAt).inclusive,values:s.position}),n.endAt&&(u.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(n.endAt)),u}function UI(e){let n=II(e.parent);const u=e.structuredQuery,o=u.from?u.from.length:0;let i=null;if(o>0){An(o===1);const c=u.from[0];c.allDescendants?i=c.collectionId:n=n.child(c.collectionId)}let t=[];u.where&&(t=vD(u.where));let r=[];u.orderBy&&(r=u.orderBy.map(c=>function(_){return new ad(Js(_.field),function(p){switch(p){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(_.direction))}(c)));let s=null;u.limit&&(s=function(c){let _;return _=typeof c=="object"?c.value:c,xg(_)?null:_}(u.limit));let d=null;u.startAt&&(d=function(c){const _=!!c.before,p=c.values||[];return new S_(p,_)}(u.startAt));let l=null;return u.endAt&&(l=function(c){const _=!c.before,p=c.values||[];return new S_(p,_)}(u.endAt)),_I(n,i,r,t,s,"F",d,l)}function zI(e,n){const u=function(o,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Xe()}}(0,n.purpose);return u==null?null:{"goog-listen-tags":u}}function vD(e){return e?e.unaryFilter!==void 0?[KI(e)]:e.fieldFilter!==void 0?[qI(e)]:e.compositeFilter!==void 0?e.compositeFilter.filters.map(n=>vD(n)).reduce((n,u)=>n.concat(u)):Xe():[]}function VI(e){return CI[e]}function WI(e){return AI[e]}function $s(e){return{fieldPath:e.canonicalString()}}function Js(e){return go.fromServerFormat(e.fieldPath)}function qI(e){return uo.create(Js(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Xe()}}(e.fieldFilter.op),e.fieldFilter.value)}function KI(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Js(e.unaryFilter.field);return uo.create(n,"==",{doubleValue:NaN});case"IS_NULL":const u=Js(e.unaryFilter.field);return uo.create(u,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Js(e.unaryFilter.field);return uo.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Js(e.unaryFilter.field);return uo.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Xe()}}function GI(e){const n=[];return e.fields.forEach(u=>n.push(u.canonicalString())),{fieldPaths:n}}function BD(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
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
 */const JI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class XI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(n){this.onCommittedListeners.push(n)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(n=>n())}}/**
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
 */class pe{constructor(n){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,n(u=>{this.isDone=!0,this.result=u,this.nextCallback&&this.nextCallback(u)},u=>{this.isDone=!0,this.error=u,this.catchCallback&&this.catchCallback(u)})}catch(n){return this.next(void 0,n)}next(n,u){return this.callbackAttached&&Xe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(u,this.error):this.wrapSuccess(n,this.result):new pe((o,i)=>{this.nextCallback=t=>{this.wrapSuccess(n,t).next(o,i)},this.catchCallback=t=>{this.wrapFailure(u,t).next(o,i)}})}toPromise(){return new Promise((n,u)=>{this.next(n,u)})}wrapUserFunction(n){try{const u=n();return u instanceof pe?u:pe.resolve(u)}catch(u){return pe.reject(u)}}wrapSuccess(n,u){return n?this.wrapUserFunction(()=>n(u)):pe.resolve(u)}wrapFailure(n,u){return n?this.wrapUserFunction(()=>n(u)):pe.reject(u)}static resolve(n){return new pe((u,o)=>{u(n)})}static reject(n){return new pe((u,o)=>{o(n)})}static waitFor(n){return new pe((u,o)=>{let i=0,t=0,r=!1;n.forEach(s=>{++i,s.next(()=>{++t,r&&t===i&&u()},d=>o(d))}),r=!0,t===i&&u()})}static or(n){let u=pe.resolve(!1);for(const o of n)u=u.next(i=>i?pe.resolve(i):o());return u}static forEach(n,u){const o=[];return n.forEach((i,t)=>{o.push(u.call(this,i,t))}),this.waitFor(o)}}function Ec(e){return e.name==="IndexedDbTransactionError"}/**
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
 */class QI{constructor(n,u,o,i){this.batchId=n,this.localWriteTime=u,this.baseMutations=o,this.mutations=i}applyToRemoteDocument(n,u){const o=u.mutationResults;for(let i=0;i<this.mutations.length;i++){const t=this.mutations[i];t.key.isEqual(n.key)&&wI(t,n,o[i])}}applyToLocalView(n){for(const u of this.baseMutations)u.key.isEqual(n.key)&&W1(u,n,this.localWriteTime);for(const u of this.mutations)u.key.isEqual(n.key)&&W1(u,n,this.localWriteTime)}applyToLocalDocumentSet(n){this.mutations.forEach(u=>{const o=n.get(u.key),i=o;this.applyToLocalView(i),o.isValidDocument()||i.convertToNoDocument(on.min())})}keys(){return this.mutations.reduce((n,u)=>n.add(u.key),In())}isEqual(n){return this.batchId===n.batchId&&Fd(this.mutations,n.mutations,(u,o)=>F2(u,o))&&Fd(this.baseMutations,n.baseMutations,(u,o)=>F2(u,o))}}class oy{constructor(n,u,o,i){this.batch=n,this.commitVersion=u,this.mutationResults=o,this.docVersions=i}static from(n,u,o){An(n.mutations.length===o.length);let i=MI;const t=n.mutations;for(let r=0;r<t.length;r++)i=i.insert(t[r].key,o[r].version);return new oy(n,u,o,i)}}/**
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
 */class ZI{constructor(n,u){this.largestBatchId=n,this.mutation=u}getKey(){return this.mutation.key}isEqual(n){return n!==null&&this.mutation===n.mutation}toString(){return`Overlay{
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
 */class Tr{constructor(n,u,o,i,t=on.min(),r=on.min(),s=Tu.EMPTY_BYTE_STRING){this.target=n,this.targetId=u,this.purpose=o,this.sequenceNumber=i,this.snapshotVersion=t,this.lastLimboFreeSnapshotVersion=r,this.resumeToken=s}withSequenceNumber(n){return new Tr(this.target,this.targetId,this.purpose,n,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(n,u){return new Tr(this.target,this.targetId,this.purpose,this.sequenceNumber,u,this.lastLimboFreeSnapshotVersion,n)}withLastLimboFreeSnapshotVersion(n){return new Tr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,n,this.resumeToken)}}/**
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
 */class eO{constructor(n){this.Jt=n}}function nO(e){const n=UI({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?aD(n,n.limit,"L"):n}/**
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
 */class uO{constructor(){this.qe=new oO}addToCollectionParentIndex(n,u){return this.qe.add(u),pe.resolve()}getCollectionParents(n,u){return pe.resolve(this.qe.getEntries(u))}addFieldIndex(n,u){return pe.resolve()}deleteFieldIndex(n,u){return pe.resolve()}getDocumentsMatchingTarget(n,u){return pe.resolve(null)}getIndexType(n,u){return pe.resolve(0)}getFieldIndexes(n,u){return pe.resolve([])}getNextCollectionGroupToUpdate(n){return pe.resolve(null)}getMinOffset(n,u){return pe.resolve(Zr.min())}updateCollectionGroup(n,u,o){return pe.resolve()}updateIndexEntries(n,u){return pe.resolve()}}class oO{constructor(){this.index={}}add(n){const u=n.lastSegment(),o=n.popLast(),i=this.index[u]||new Mu(Yn.comparator),t=!i.has(o);return this.index[u]=i.add(o),t}has(n){const u=n.lastSegment(),o=n.popLast(),i=this.index[u];return i&&i.has(o)}getEntries(n){return(this.index[n]||new Mu(Yn.comparator)).toArray()}}/**
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
 */class vd{constructor(n){this.mn=n}next(){return this.mn+=2,this.mn}static gn(){return new vd(0)}static yn(){return new vd(-1)}}/**
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
 */async function Mc(e){if(e.code!==ae.FAILED_PRECONDITION||e.message!==JI)throw e;Ae("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class iO{constructor(){this.changes=new em(n=>n.toString(),(n,u)=>n.isEqual(u)),this.changesApplied=!1}addEntry(n){this.assertNotApplied(),this.changes.set(n.key,n)}removeEntry(n,u){this.assertNotApplied(),this.changes.set(n,Yu.newInvalidDocument(n).setReadTime(u))}getEntry(n,u){this.assertNotApplied();const o=this.changes.get(u);return o!==void 0?pe.resolve(o):this.getFromCache(n,u)}getEntries(n,u){return this.getAllFromCache(n,u)}apply(n){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(n)}assertNotApplied(){}}/**
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
 */class tO{constructor(n,u,o){this.ds=n,this.Bs=u,this.indexManager=o}Ls(n,u){return this.Bs.getAllMutationBatchesAffectingDocumentKey(n,u).next(o=>this.Us(n,u,o))}Us(n,u,o){return this.ds.getEntry(n,u).next(i=>{for(const t of o)t.applyToLocalView(i);return i})}qs(n,u){n.forEach((o,i)=>{for(const t of u)t.applyToLocalView(i)})}Ks(n,u){return this.ds.getEntries(n,u).next(o=>this.Gs(n,o).next(()=>o))}Gs(n,u){return this.Bs.getAllMutationBatchesAffectingDocumentKeys(n,u).next(o=>this.qs(u,o))}Qs(n,u,o){return function(i){return Re.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(u)?this.js(n,u.path):tD(u)?this.Ws(n,u,o):this.zs(n,u,o)}js(n,u){return this.Ls(n,new Re(u)).next(o=>{let i=q1();return o.isFoundDocument()&&(i=i.insert(o.key,o)),i})}Ws(n,u,o){const i=u.collectionGroup;let t=q1();return this.indexManager.getCollectionParents(n,i).next(r=>pe.forEach(r,s=>{const d=function(l,c){return new Qd(c,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(u,s.child(i));return this.zs(n,d,o).next(l=>{l.forEach((c,_)=>{t=t.insert(c,_)})})}).next(()=>t))}zs(n,u,o){let i;return this.ds.getAllFromCollection(n,u.path,o).next(t=>(i=t,this.Bs.getAllMutationBatchesAffectingQuery(n,u))).next(t=>{for(const r of t)for(const s of r.mutations){const d=s.key;let l=i.get(d);l==null&&(l=Yu.newInvalidDocument(d),i=i.insert(d,l)),W1(s,l,r.localWriteTime),l.isFoundDocument()||(i=i.remove(d))}}).next(()=>(i.forEach((t,r)=>{ny(u,r)||(i=i.remove(t))}),i))}}/**
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
 */class iy{constructor(n,u,o,i){this.targetId=n,this.fromCache=u,this.Hs=o,this.Js=i}static Ys(n,u){let o=In(),i=In();for(const t of u.docChanges)switch(t.type){case 0:o=o.add(t.doc.key);break;case 1:i=i.add(t.doc.key)}return new iy(n,u.fromCache,o,i)}}/**
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
 */class aO{constructor(){this.Xs=!1}initialize(n,u){this.Zs=n,this.indexManager=u,this.Xs=!0}Qs(n,u,o,i){return this.ti(n,u).next(t=>t||this.ei(n,u,i,o)).next(t=>t||this.ni(n,u))}ti(n,u){return pe.resolve(null)}ei(n,u,o,i){return gI(u)||i.isEqual(on.min())?this.ni(n,u):this.Zs.Ks(n,o).next(t=>{const r=this.si(u,t);return this.ii(u,r,o,i)?this.ni(n,u):(s2()<=bn.DEBUG&&Ae("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),V1(u)),this.ri(n,r,u,eI(i,-1)))})}si(n,u){let o=new Mu(sD(n));return u.forEach((i,t)=>{ny(n,t)&&(o=o.add(t))}),o}ii(n,u,o,i){if(n.limit===null)return!1;if(o.size!==u.size)return!0;const t=n.limitType==="F"?u.last():u.first();return!!t&&(t.hasPendingWrites||t.version.compareTo(i)>0)}ni(n,u){return s2()<=bn.DEBUG&&Ae("QueryEngine","Using full collection scan to execute query:",V1(u)),this.Zs.Qs(n,u,Zr.min())}ri(n,u,o,i){return this.Zs.Qs(n,o,i).next(t=>(u.forEach(r=>{t=t.insert(r.key,r)}),t))}}/**
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
 */class rO{constructor(n,u,o,i){this.persistence=n,this.oi=u,this.M=i,this.ui=new yu(Dn),this.ai=new em(t=>Jf(t),Xf),this.ci=new Map,this.hi=n.getRemoteDocumentCache(),this.fs=n.getTargetCache(),this._s=n.getBundleCache(),this.li(o)}li(n){this.indexManager=this.persistence.getIndexManager(n),this.Bs=this.persistence.getMutationQueue(n,this.indexManager),this.fi=new tO(this.hi,this.Bs,this.indexManager),this.hi.setIndexManager(this.indexManager),this.oi.initialize(this.fi,this.indexManager)}collectGarbage(n){return this.persistence.runTransaction("Collect garbage","readwrite-primary",u=>n.collect(u,this.ui))}}function sO(e,n,u,o){return new rO(e,n,u,o)}async function PD(e,n){const u=Qe(e);return await u.persistence.runTransaction("Handle user change","readonly",o=>{let i;return u.Bs.getAllMutationBatches(o).next(t=>(i=t,u.li(n),u.Bs.getAllMutationBatches(o))).next(t=>{const r=[],s=[];let d=In();for(const l of i){r.push(l.batchId);for(const c of l.mutations)d=d.add(c.key)}for(const l of t){s.push(l.batchId);for(const c of l.mutations)d=d.add(c.key)}return u.fi.Ks(o,d).next(l=>({di:l,removedBatchIds:r,addedBatchIds:s}))})})}function dO(e,n){const u=Qe(e);return u.persistence.runTransaction("Acknowledge batch","readwrite-primary",o=>{const i=n.batch.keys(),t=u.hi.newChangeBuffer({trackRemovals:!0});return function(r,s,d,l){const c=d.batch,_=c.keys();let p=pe.resolve();return _.forEach(f=>{p=p.next(()=>l.getEntry(s,f)).next(y=>{const D=d.docVersions.get(f);An(D!==null),y.version.compareTo(D)<0&&(c.applyToRemoteDocument(y,d),y.isValidDocument()&&(y.setReadTime(d.commitVersion),l.addEntry(y)))})}),p.next(()=>r.Bs.removeMutationBatch(s,c))}(u,o,n,t).next(()=>t.apply(o)).next(()=>u.Bs.performConsistencyCheck(o)).next(()=>u.fi.Ks(o,i))})}function ED(e){const n=Qe(e);return n.persistence.runTransaction("Get last remote snapshot version","readonly",u=>n.fs.getLastRemoteSnapshotVersion(u))}function mO(e,n){const u=Qe(e),o=n.snapshotVersion;let i=u.ui;return u.persistence.runTransaction("Apply remote event","readwrite-primary",t=>{const r=u.hi.newChangeBuffer({trackRemovals:!0});i=u.ui;const s=[];n.targetChanges.forEach((l,c)=>{const _=i.get(c);if(!_)return;s.push(u.fs.removeMatchingKeys(t,l.removedDocuments,c).next(()=>u.fs.addMatchingKeys(t,l.addedDocuments,c)));let p=_.withSequenceNumber(t.currentSequenceNumber);n.targetMismatches.has(c)?p=p.withResumeToken(Tu.EMPTY_BYTE_STRING,on.min()).withLastLimboFreeSnapshotVersion(on.min()):l.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(l.resumeToken,o)),i=i.insert(c,p),function(f,y,D){return f.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-f.snapshotVersion.toMicroseconds()>=3e8?!0:D.addedDocuments.size+D.modifiedDocuments.size+D.removedDocuments.size>0}(_,p,l)&&s.push(u.fs.updateTargetData(t,p))});let d=ns();if(n.documentUpdates.forEach(l=>{n.resolvedLimboDocuments.has(l)&&s.push(u.persistence.referenceDelegate.updateLimboDocument(t,l))}),s.push(lO(t,r,n.documentUpdates).next(l=>{d=l})),!o.isEqual(on.min())){const l=u.fs.getLastRemoteSnapshotVersion(t).next(c=>u.fs.setTargetsMetadata(t,t.currentSequenceNumber,o));s.push(l)}return pe.waitFor(s).next(()=>r.apply(t)).next(()=>u.fi.Gs(t,d)).next(()=>d)}).then(t=>(u.ui=i,t))}function lO(e,n,u){let o=In();return u.forEach(i=>o=o.add(i)),n.getEntries(e,o).next(i=>{let t=ns();return u.forEach((r,s)=>{const d=i.get(r);s.isNoDocument()&&s.version.isEqual(on.min())?(n.removeEntry(r,s.readTime),t=t.insert(r,s)):!d.isValidDocument()||s.version.compareTo(d.version)>0||s.version.compareTo(d.version)===0&&d.hasPendingWrites?(n.addEntry(s),t=t.insert(r,s)):Ae("LocalStore","Ignoring outdated watch update for ",r,". Current version:",d.version," Watch version:",s.version)}),t})}function cO(e,n){const u=Qe(e);return u.persistence.runTransaction("Get next mutation batch","readonly",o=>(n===void 0&&(n=-1),u.Bs.getNextMutationBatchAfterBatchId(o,n)))}function _O(e,n){const u=Qe(e);return u.persistence.runTransaction("Allocate target","readwrite",o=>{let i;return u.fs.getTargetData(o,n).next(t=>t?(i=t,pe.resolve(i)):u.fs.allocateTargetId(o).next(r=>(i=new Tr(n,r,0,o.currentSequenceNumber),u.fs.addTargetData(o,i).next(()=>i))))}).then(o=>{const i=u.ui.get(o.targetId);return(i===null||o.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(u.ui=u.ui.insert(o.targetId,o),u.ai.set(n,o.targetId)),o})}async function X1(e,n,u){const o=Qe(e),i=o.ui.get(n),t=u?"readwrite":"readwrite-primary";try{u||await o.persistence.runTransaction("Release target",t,r=>o.persistence.referenceDelegate.removeTarget(r,i))}catch(r){if(!Ec(r))throw r;Ae("LocalStore",`Failed to update sequence numbers for target ${n}: ${r}`)}o.ui=o.ui.remove(n),o.ai.delete(i.target)}function E2(e,n,u){const o=Qe(e);let i=on.min(),t=In();return o.persistence.runTransaction("Execute query","readonly",r=>function(s,d,l){const c=Qe(s),_=c.ai.get(l);return _!==void 0?pe.resolve(c.ui.get(_)):c.fs.getTargetData(d,l)}(o,r,es(n)).next(s=>{if(s)return i=s.lastLimboFreeSnapshotVersion,o.fs.getMatchingKeysForTargetId(r,s.targetId).next(d=>{t=d})}).next(()=>o.oi.Qs(r,n,u?i:on.min(),u?t:In())).next(s=>(gO(o,pI(n),s),{documents:s,_i:t})))}function gO(e,n,u){let o=on.min();u.forEach((i,t)=>{t.readTime.compareTo(o)>0&&(o=t.readTime)}),e.ci.set(n,o)}/**
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
 */class pO{constructor(n){this.M=n,this.yi=new Map,this.pi=new Map}getBundleMetadata(n,u){return pe.resolve(this.yi.get(u))}saveBundleMetadata(n,u){var o;return this.yi.set(u.id,{id:(o=u).id,version:o.version,createTime:Mt(o.createTime)}),pe.resolve()}getNamedQuery(n,u){return pe.resolve(this.pi.get(u))}saveNamedQuery(n,u){return this.pi.set(u.name,function(o){return{name:o.name,query:nO(o.bundledQuery),readTime:Mt(o.readTime)}}(u)),pe.resolve()}}/**
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
 */class hO{constructor(){this.overlays=new yu(Re.comparator),this.Ii=new Map}getOverlay(n,u){return pe.resolve(this.overlays.get(u))}saveOverlays(n,u,o){return o.forEach((i,t)=>{this.Xt(n,u,t)}),pe.resolve()}removeOverlaysForBatchId(n,u,o){const i=this.Ii.get(o);return i!==void 0&&(i.forEach(t=>this.overlays=this.overlays.remove(t)),this.Ii.delete(o)),pe.resolve()}getOverlaysForCollection(n,u,o){const i=Ih(),t=u.length+1,r=new Re(u.child("")),s=this.overlays.getIteratorFrom(r);for(;s.hasNext();){const d=s.getNext().value,l=d.getKey();if(!u.isPrefixOf(l.path))break;l.path.length===t&&d.largestBatchId>o&&i.set(d.getKey(),d)}return pe.resolve(i)}getOverlaysForCollectionGroup(n,u,o,i){let t=new yu((l,c)=>l-c);const r=this.overlays.getIterator();for(;r.hasNext();){const l=r.getNext().value;if(l.getKey().getCollectionGroup()===u&&l.largestBatchId>o){let c=t.get(l.largestBatchId);c===null&&(c=Ih(),t=t.insert(l.largestBatchId,c)),c.set(l.getKey(),l)}}const s=Ih(),d=t.getIterator();for(;d.hasNext()&&(d.getNext().value.forEach((l,c)=>s.set(l,c)),!(s.size()>=i)););return pe.resolve(s)}Xt(n,u,o){if(o===null)return;const i=this.overlays.get(o.key);if(i!==null){const r=this.Ii.get(i.largestBatchId).delete(o.key);this.Ii.set(i.largestBatchId,r)}this.overlays=this.overlays.insert(o.key,new ZI(u,o));let t=this.Ii.get(u);t===void 0&&(t=In(),this.Ii.set(u,t)),this.Ii.set(u,t.add(o.key))}}/**
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
 */class ty{constructor(){this.Ti=new Mu(pu.Ei),this.Ai=new Mu(pu.Ri)}isEmpty(){return this.Ti.isEmpty()}addReference(n,u){const o=new pu(n,u);this.Ti=this.Ti.add(o),this.Ai=this.Ai.add(o)}bi(n,u){n.forEach(o=>this.addReference(o,u))}removeReference(n,u){this.Pi(new pu(n,u))}Vi(n,u){n.forEach(o=>this.removeReference(o,u))}vi(n){const u=new Re(new Yn([])),o=new pu(u,n),i=new pu(u,n+1),t=[];return this.Ai.forEachInRange([o,i],r=>{this.Pi(r),t.push(r.key)}),t}Si(){this.Ti.forEach(n=>this.Pi(n))}Pi(n){this.Ti=this.Ti.delete(n),this.Ai=this.Ai.delete(n)}Di(n){const u=new Re(new Yn([])),o=new pu(u,n),i=new pu(u,n+1);let t=In();return this.Ai.forEachInRange([o,i],r=>{t=t.add(r.key)}),t}containsKey(n){const u=new pu(n,0),o=this.Ti.firstAfterOrEqual(u);return o!==null&&n.isEqual(o.key)}}class pu{constructor(n,u){this.key=n,this.Ci=u}static Ei(n,u){return Re.comparator(n.key,u.key)||Dn(n.Ci,u.Ci)}static Ri(n,u){return Dn(n.Ci,u.Ci)||Re.comparator(n.key,u.key)}}/**
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
 */class kO{constructor(n,u){this.indexManager=n,this.referenceDelegate=u,this.Bs=[],this.xi=1,this.Ni=new Mu(pu.Ei)}checkEmpty(n){return pe.resolve(this.Bs.length===0)}addMutationBatch(n,u,o,i){const t=this.xi;this.xi++,this.Bs.length>0&&this.Bs[this.Bs.length-1];const r=new QI(t,u,o,i);this.Bs.push(r);for(const s of i)this.Ni=this.Ni.add(new pu(s.key,t)),this.indexManager.addToCollectionParentIndex(n,s.key.path.popLast());return pe.resolve(r)}lookupMutationBatch(n,u){return pe.resolve(this.ki(u))}getNextMutationBatchAfterBatchId(n,u){const o=u+1,i=this.Mi(o),t=i<0?0:i;return pe.resolve(this.Bs.length>t?this.Bs[t]:null)}getHighestUnacknowledgedBatchId(){return pe.resolve(this.Bs.length===0?-1:this.xi-1)}getAllMutationBatches(n){return pe.resolve(this.Bs.slice())}getAllMutationBatchesAffectingDocumentKey(n,u){const o=new pu(u,0),i=new pu(u,Number.POSITIVE_INFINITY),t=[];return this.Ni.forEachInRange([o,i],r=>{const s=this.ki(r.Ci);t.push(s)}),pe.resolve(t)}getAllMutationBatchesAffectingDocumentKeys(n,u){let o=new Mu(Dn);return u.forEach(i=>{const t=new pu(i,0),r=new pu(i,Number.POSITIVE_INFINITY);this.Ni.forEachInRange([t,r],s=>{o=o.add(s.Ci)})}),pe.resolve(this.Oi(o))}getAllMutationBatchesAffectingQuery(n,u){const o=u.path,i=o.length+1;let t=o;Re.isDocumentKey(t)||(t=t.child(""));const r=new pu(new Re(t),0);let s=new Mu(Dn);return this.Ni.forEachWhile(d=>{const l=d.key.path;return!!o.isPrefixOf(l)&&(l.length===i&&(s=s.add(d.Ci)),!0)},r),pe.resolve(this.Oi(s))}Oi(n){const u=[];return n.forEach(o=>{const i=this.ki(o);i!==null&&u.push(i)}),u}removeMutationBatch(n,u){An(this.Fi(u.batchId,"removed")===0),this.Bs.shift();let o=this.Ni;return pe.forEach(u.mutations,i=>{const t=new pu(i.key,u.batchId);return o=o.delete(t),this.referenceDelegate.markPotentiallyOrphaned(n,i.key)}).next(()=>{this.Ni=o})}_n(n){}containsKey(n,u){const o=new pu(u,0),i=this.Ni.firstAfterOrEqual(o);return pe.resolve(u.isEqual(i&&i.key))}performConsistencyCheck(n){return this.Bs.length,pe.resolve()}Fi(n,u){return this.Mi(n)}Mi(n){return this.Bs.length===0?0:n-this.Bs[0].batchId}ki(n){const u=this.Mi(n);return u<0||u>=this.Bs.length?null:this.Bs[u]}}/**
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
 */class fO{constructor(n){this.$i=n,this.docs=new yu(Re.comparator),this.size=0}setIndexManager(n){this.indexManager=n}addEntry(n,u){const o=u.key,i=this.docs.get(o),t=i?i.size:0,r=this.$i(u);return this.docs=this.docs.insert(o,{document:u.mutableCopy(),size:r}),this.size+=r-t,this.indexManager.addToCollectionParentIndex(n,o.path.popLast())}removeEntry(n){const u=this.docs.get(n);u&&(this.docs=this.docs.remove(n),this.size-=u.size)}getEntry(n,u){const o=this.docs.get(u);return pe.resolve(o?o.document.mutableCopy():Yu.newInvalidDocument(u))}getEntries(n,u){let o=ns();return u.forEach(i=>{const t=this.docs.get(i);o=o.insert(i,t?t.document.mutableCopy():Yu.newInvalidDocument(i))}),pe.resolve(o)}getAllFromCollection(n,u,o){let i=ns();const t=new Re(u.child("")),r=this.docs.getIteratorFrom(t);for(;r.hasNext();){const{key:s,value:{document:d}}=r.getNext();if(!u.isPrefixOf(s.path))break;s.path.length>u.length+1||uI(nI(d),o)<=0||(i=i.insert(d.key,d.mutableCopy()))}return pe.resolve(i)}getAllFromCollectionGroup(n,u,o,i){Xe()}Bi(n,u){return pe.forEach(this.docs,o=>u(o))}newChangeBuffer(n){return new yO(this)}getSize(n){return pe.resolve(this.size)}}class yO extends iO{constructor(n){super(),this.Kn=n}applyChanges(n){const u=[];return this.changes.forEach((o,i)=>{i.isValidDocument()?u.push(this.Kn.addEntry(n,i)):this.Kn.removeEntry(o)}),pe.waitFor(u)}getFromCache(n,u){return this.Kn.getEntry(n,u)}getAllFromCache(n,u){return this.Kn.getEntries(n,u)}}/**
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
 */class FO{constructor(n){this.persistence=n,this.Li=new em(u=>Jf(u),Xf),this.lastRemoteSnapshotVersion=on.min(),this.highestTargetId=0,this.Ui=0,this.qi=new ty,this.targetCount=0,this.Ki=vd.gn()}forEachTarget(n,u){return this.Li.forEach((o,i)=>u(i)),pe.resolve()}getLastRemoteSnapshotVersion(n){return pe.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(n){return pe.resolve(this.Ui)}allocateTargetId(n){return this.highestTargetId=this.Ki.next(),pe.resolve(this.highestTargetId)}setTargetsMetadata(n,u,o){return o&&(this.lastRemoteSnapshotVersion=o),u>this.Ui&&(this.Ui=u),pe.resolve()}Tn(n){this.Li.set(n.target,n);const u=n.targetId;u>this.highestTargetId&&(this.Ki=new vd(u),this.highestTargetId=u),n.sequenceNumber>this.Ui&&(this.Ui=n.sequenceNumber)}addTargetData(n,u){return this.Tn(u),this.targetCount+=1,pe.resolve()}updateTargetData(n,u){return this.Tn(u),pe.resolve()}removeTargetData(n,u){return this.Li.delete(u.target),this.qi.vi(u.targetId),this.targetCount-=1,pe.resolve()}removeTargets(n,u,o){let i=0;const t=[];return this.Li.forEach((r,s)=>{s.sequenceNumber<=u&&o.get(s.targetId)===null&&(this.Li.delete(r),t.push(this.removeMatchingKeysForTargetId(n,s.targetId)),i++)}),pe.waitFor(t).next(()=>i)}getTargetCount(n){return pe.resolve(this.targetCount)}getTargetData(n,u){const o=this.Li.get(u)||null;return pe.resolve(o)}addMatchingKeys(n,u,o){return this.qi.bi(u,o),pe.resolve()}removeMatchingKeys(n,u,o){this.qi.Vi(u,o);const i=this.persistence.referenceDelegate,t=[];return i&&u.forEach(r=>{t.push(i.markPotentiallyOrphaned(n,r))}),pe.waitFor(t)}removeMatchingKeysForTargetId(n,u){return this.qi.vi(u),pe.resolve()}getMatchingKeysForTargetId(n,u){const o=this.qi.Di(u);return pe.resolve(o)}containsKey(n,u){return pe.resolve(this.qi.containsKey(u))}}/**
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
 */class bO{constructor(n,u){this.Gi={},this.overlays={},this.es=new Kf(0),this.ns=!1,this.ns=!0,this.referenceDelegate=n(this),this.fs=new FO(this),this.indexManager=new uO,this.ds=function(o){return new fO(o)}(o=>this.referenceDelegate.Qi(o)),this.M=new eO(u),this._s=new pO(this.M)}start(){return Promise.resolve()}shutdown(){return this.ns=!1,Promise.resolve()}get started(){return this.ns}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(n){return this.indexManager}getDocumentOverlayCache(n){let u=this.overlays[n.toKey()];return u||(u=new hO,this.overlays[n.toKey()]=u),u}getMutationQueue(n,u){let o=this.Gi[n.toKey()];return o||(o=new kO(u,this.referenceDelegate),this.Gi[n.toKey()]=o),o}getTargetCache(){return this.fs}getRemoteDocumentCache(){return this.ds}getBundleCache(){return this._s}runTransaction(n,u,o){Ae("MemoryPersistence","Starting transaction:",n);const i=new wO(this.es.next());return this.referenceDelegate.ji(),o(i).next(t=>this.referenceDelegate.Wi(i).next(()=>t)).toPromise().then(t=>(i.raiseOnCommittedEvent(),t))}zi(n,u){return pe.or(Object.values(this.Gi).map(o=>()=>o.containsKey(n,u)))}}class wO extends XI{constructor(n){super(),this.currentSequenceNumber=n}}class ay{constructor(n){this.persistence=n,this.Hi=new ty,this.Ji=null}static Yi(n){return new ay(n)}get Xi(){if(this.Ji)return this.Ji;throw Xe()}addReference(n,u,o){return this.Hi.addReference(o,u),this.Xi.delete(o.toString()),pe.resolve()}removeReference(n,u,o){return this.Hi.removeReference(o,u),this.Xi.add(o.toString()),pe.resolve()}markPotentiallyOrphaned(n,u){return this.Xi.add(u.toString()),pe.resolve()}removeTarget(n,u){this.Hi.vi(u.targetId).forEach(i=>this.Xi.add(i.toString()));const o=this.persistence.getTargetCache();return o.getMatchingKeysForTargetId(n,u.targetId).next(i=>{i.forEach(t=>this.Xi.add(t.toString()))}).next(()=>o.removeTargetData(n,u))}ji(){this.Ji=new Set}Wi(n){const u=this.persistence.getRemoteDocumentCache().newChangeBuffer();return pe.forEach(this.Xi,o=>{const i=Re.fromPath(o);return this.Zi(n,i).next(t=>{t||u.removeEntry(i,on.min())})}).next(()=>(this.Ji=null,u.apply(n)))}updateLimboDocument(n,u){return this.Zi(n,u).next(o=>{o?this.Xi.delete(u.toString()):this.Xi.add(u.toString())})}Qi(n){return 0}Zi(n,u){return pe.or([()=>pe.resolve(this.Hi.containsKey(u)),()=>this.persistence.getTargetCache().containsKey(n,u),()=>this.persistence.zi(n,u)])}}class M2{constructor(){this.activeTargetIds=yD()}nr(n){this.activeTargetIds=this.activeTargetIds.add(n)}sr(n){this.activeTargetIds=this.activeTargetIds.delete(n)}er(){const n={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(n)}}class jO{constructor(){this.Ur=new M2,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(n){}updateMutationState(n,u,o){}addLocalQueryTarget(n){return this.Ur.nr(n),this.qr[n]||"not-current"}updateQueryState(n,u,o){this.qr[n]=u}removeLocalQueryTarget(n){this.Ur.sr(n)}isLocalQueryTarget(n){return this.Ur.activeTargetIds.has(n)}clearQueryState(n){delete this.qr[n]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(n){return this.Ur.activeTargetIds.has(n)}start(){return this.Ur=new M2,Promise.resolve()}handleUserChange(n,u,o){}setOnlineState(n){}shutdown(){}writeSequenceNumber(n){}notifyBundleLoaded(n){}}/**
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
 */class DO{Kr(n){}shutdown(){}}/**
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
 */class T2{constructor(){this.Gr=()=>this.Qr(),this.jr=()=>this.Wr(),this.zr=[],this.Hr()}Kr(n){this.zr.push(n)}shutdown(){window.removeEventListener("online",this.Gr),window.removeEventListener("offline",this.jr)}Hr(){window.addEventListener("online",this.Gr),window.addEventListener("offline",this.jr)}Qr(){Ae("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const n of this.zr)n(0)}Wr(){Ae("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const n of this.zr)n(1)}static vt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */const vO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
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
 */class BO{constructor(n){this.Jr=n.Jr,this.Yr=n.Yr}Xr(n){this.Zr=n}eo(n){this.no=n}onMessage(n){this.so=n}close(){this.Yr()}send(n){this.Jr(n)}io(){this.Zr()}ro(n){this.no(n)}oo(n){this.so(n)}}/**
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
 */class PO extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const u=n.ssl?"https":"http";this.uo=u+"://"+n.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}co(n,u,o,i,t){const r=this.ho(n,u);Ae("RestConnection","Sending: ",r,o);const s={};return this.lo(s,i,t),this.fo(n,r,s,o).then(d=>(Ae("RestConnection","Received: ",d),d),d=>{throw d2("RestConnection",`${n} failed with error: `,d,"url: ",r,"request:",o),d})}_o(n,u,o,i,t){return this.co(n,u,o,i,t)}lo(n,u,o){n["X-Goog-Api-Client"]="gl-js/ fire/"+Xd,n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),u&&u.headers.forEach((i,t)=>n[t]=i),o&&o.headers.forEach((i,t)=>n[t]=i)}ho(n,u){const o=vO[n];return`${this.uo}/v1/${u}:${o}`}}{constructor(n){super(n),this.forceLongPolling=n.forceLongPolling,this.autoDetectLongPolling=n.autoDetectLongPolling,this.useFetchStreams=n.useFetchStreams}fo(n,u,o,i){return new Promise((t,r)=>{const s=new RY;s.listenOnce(IY.COMPLETE,()=>{try{switch(s.getLastErrorCode()){case Yh.NO_ERROR:const l=s.getResponseJson();Ae("Connection","XHR received:",JSON.stringify(l)),t(l);break;case Yh.TIMEOUT:Ae("Connection",'RPC "'+n+'" timed out'),r(new Ee(ae.DEADLINE_EXCEEDED,"Request time out"));break;case Yh.HTTP_ERROR:const c=s.getStatus();if(Ae("Connection",'RPC "'+n+'" failed with status:',c,"response text:",s.getResponseText()),c>0){const _=s.getResponseJson().error;if(_&&_.status&&_.message){const p=function(f){const y=f.toLowerCase().replace(/_/g,"-");return Object.values(ae).indexOf(y)>=0?y:ae.UNKNOWN}(_.status);r(new Ee(p,_.message))}else r(new Ee(ae.UNKNOWN,"Server responded with status "+s.getStatus()))}else r(new Ee(ae.UNAVAILABLE,"Connection failed."));break;default:Xe()}}finally{Ae("Connection",'RPC "'+n+'" completed.')}});const d=JSON.stringify(i);s.send(u,"POST",d,o,15)})}wo(n,u,o){const i=[this.uo,"/","google.firestore.v1.Firestore","/",n,"/channel"],t=xY(),r=YY(),s={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(s.xmlHttpFactory=new NY({})),this.lo(s.initMessageHeaders,u,o),P9()||E9()||U7()||M9()||z7()||Zk()||(s.httpHeadersOverwriteParam="$httpHeaders");const d=i.join("");Ae("Connection","Creating WebChannel: "+d,s);const l=t.createWebChannel(d,s);let c=!1,_=!1;const p=new BO({Jr:y=>{_?Ae("Connection","Not sending because WebChannel is closed:",y):(c||(Ae("Connection","Opening WebChannel transport."),l.open(),c=!0),Ae("Connection","WebChannel sending:",y),l.send(y))},Yr:()=>l.close()}),f=(y,D,P)=>{y.listen(D,v=>{try{P(v)}catch(j){setTimeout(()=>{throw j},0)}})};return f(l,B0.EventType.OPEN,()=>{_||Ae("Connection","WebChannel transport opened.")}),f(l,B0.EventType.CLOSE,()=>{_||(_=!0,Ae("Connection","WebChannel transport closed"),p.ro())}),f(l,B0.EventType.ERROR,y=>{_||(_=!0,d2("Connection","WebChannel transport errored:",y),p.ro(new Ee(ae.UNAVAILABLE,"The operation could not be completed")))}),f(l,B0.EventType.MESSAGE,y=>{var D;if(!_){const P=y.data[0];An(!!P);const v=P,j=v.error||((D=v[0])===null||D===void 0?void 0:D.error);if(j){Ae("Connection","WebChannel received error:",j);const M=j.status;let S=function(C){const L=uu[C];if(L!==void 0)return fD(L)}(M),$=j.message;S===void 0&&(S=ae.INTERNAL,$="Unknown error status: "+M+" with message "+j.message),_=!0,p.ro(new Ee(S,$)),l.close()}else Ae("Connection","WebChannel received:",P),p.oo(P)}}),f(r,OY.STAT_EVENT,y=>{y.stat===a2.PROXY?Ae("Connection","Detected buffering proxy"):y.stat===a2.NOPROXY&&Ae("Connection","Detected no buffering proxy")}),setTimeout(()=>{p.io()},0),p}}function Nh(){return typeof document!="undefined"?document:null}/**
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
 */function $g(e){return new xI(e,!0)}class MD{constructor(n,u,o=1e3,i=1.5,t=6e4){this.Yn=n,this.timerId=u,this.mo=o,this.yo=i,this.po=t,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(n){this.cancel();const u=Math.floor(this.Io+this.bo()),o=Math.max(0,Date.now()-this.Eo),i=Math.max(0,u-o);i>0&&Ae("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${u} ms, last attempt: ${o} ms ago)`),this.To=this.Yn.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),n())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
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
 */class TD{constructor(n,u,o,i,t,r,s,d){this.Yn=n,this.Vo=o,this.vo=i,this.So=t,this.authCredentialsProvider=r,this.appCheckCredentialsProvider=s,this.listener=d,this.state=0,this.Do=0,this.Co=null,this.xo=null,this.stream=null,this.No=new MD(n,u)}ko(){return this.state===1||this.state===5||this.Mo()}Mo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.ko()&&await this.close(0)}Fo(){this.state=0,this.No.reset()}$o(){this.Mo()&&this.Co===null&&(this.Co=this.Yn.enqueueAfterDelay(this.Vo,6e4,()=>this.Bo()))}Lo(n){this.Uo(),this.stream.send(n)}async Bo(){if(this.Mo())return this.close(0)}Uo(){this.Co&&(this.Co.cancel(),this.Co=null)}qo(){this.xo&&(this.xo.cancel(),this.xo=null)}async close(n,u){this.Uo(),this.qo(),this.No.cancel(),this.Do++,n!==4?this.No.reset():u&&u.code===ae.RESOURCE_EXHAUSTED?(Sa(u.toString()),Sa("Using maximum backoff delay to prevent overloading the backend."),this.No.Ao()):u&&u.code===ae.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Ko(),this.stream.close(),this.stream=null),this.state=n,await this.listener.eo(u)}Ko(){}auth(){this.state=1;const n=this.Go(this.Do),u=this.Do;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([o,i])=>{this.Do===u&&this.Qo(o,i)},o=>{n(()=>{const i=new Ee(ae.UNKNOWN,"Fetching auth token failed: "+o.message);return this.jo(i)})})}Qo(n,u){const o=this.Go(this.Do);this.stream=this.Wo(n,u),this.stream.Xr(()=>{o(()=>(this.state=2,this.xo=this.Yn.enqueueAfterDelay(this.vo,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.eo(i=>{o(()=>this.jo(i))}),this.stream.onMessage(i=>{o(()=>this.onMessage(i))})}Oo(){this.state=5,this.No.Ro(async()=>{this.state=0,this.start()})}jo(n){return Ae("PersistentStream",`close with error: ${n}`),this.stream=null,this.close(4,n)}Go(n){return u=>{this.Yn.enqueueAndForget(()=>this.Do===n?u():(Ae("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class EO extends TD{constructor(n,u,o,i,t,r){super(n,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",u,o,i,r),this.M=t}Wo(n,u){return this.So.wo("Listen",n,u)}onMessage(n){this.No.reset();const u=OI(this.M,n),o=function(i){if(!("targetChange"in i))return on.min();const t=i.targetChange;return t.targetIds&&t.targetIds.length?on.min():t.readTime?Mt(t.readTime):on.min()}(n);return this.listener.zo(u,o)}Ho(n){const u={};u.database=J1(this.M),u.addTarget=function(i,t){let r;const s=t.target;return r=z1(s)?{documents:$I(i,s)}:{query:HI(i,s)},r.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?r.resumeToken=wD(i,t.resumeToken):t.snapshotVersion.compareTo(on.min())>0&&(r.readTime=C_(i,t.snapshotVersion.toTimestamp())),r}(this.M,n);const o=zI(this.M,n);o&&(u.labels=o),this.Lo(u)}Jo(n){const u={};u.database=J1(this.M),u.removeTarget=n,this.Lo(u)}}class MO extends TD{constructor(n,u,o,i,t,r){super(n,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",u,o,i,r),this.M=t,this.Yo=!1}get Xo(){return this.Yo}start(){this.Yo=!1,this.lastStreamToken=void 0,super.start()}Ko(){this.Yo&&this.Zo([])}Wo(n,u){return this.So.wo("Write",n,u)}onMessage(n){if(An(!!n.streamToken),this.lastStreamToken=n.streamToken,this.Yo){this.No.reset();const u=RI(n.writeResults,n.commitTime),o=Mt(n.commitTime);return this.listener.tu(o,u)}return An(!n.writeResults||n.writeResults.length===0),this.Yo=!0,this.listener.eu()}nu(){const n={};n.database=J1(this.M),this.Lo(n)}Zo(n){const u={streamToken:this.lastStreamToken,writes:n.map(o=>NI(this.M,o))};this.Lo(u)}}/**
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
 */class TO extends class{}{constructor(n,u,o,i){super(),this.authCredentials=n,this.appCheckCredentials=u,this.So=o,this.M=i,this.su=!1}iu(){if(this.su)throw new Ee(ae.FAILED_PRECONDITION,"The client has already been terminated.")}co(n,u,o){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,t])=>this.So.co(n,u,o,i,t)).catch(i=>{throw i.name==="FirebaseError"?(i.code===ae.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Ee(ae.UNKNOWN,i.toString())})}_o(n,u,o){return this.iu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,t])=>this.So._o(n,u,o,i,t)).catch(i=>{throw i.name==="FirebaseError"?(i.code===ae.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Ee(ae.UNKNOWN,i.toString())})}terminate(){this.su=!0}}class SO{constructor(n,u){this.asyncQueue=n,this.onlineStateHandler=u,this.state="Unknown",this.ru=0,this.ou=null,this.uu=!0}au(){this.ru===0&&(this.cu("Unknown"),this.ou=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ou=null,this.hu("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}lu(n){this.state==="Online"?this.cu("Unknown"):(this.ru++,this.ru>=1&&(this.fu(),this.hu(`Connection failed 1 times. Most recent error: ${n.toString()}`),this.cu("Offline")))}set(n){this.fu(),this.ru=0,n==="Online"&&(this.uu=!1),this.cu(n)}cu(n){n!==this.state&&(this.state=n,this.onlineStateHandler(n))}hu(n){const u=`Could not reach Cloud Firestore backend. ${n}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.uu?(Sa(u),this.uu=!1):Ae("OnlineStateTracker",u)}fu(){this.ou!==null&&(this.ou.cancel(),this.ou=null)}}/**
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
 */class LO{constructor(n,u,o,i,t){this.localStore=n,this.datastore=u,this.asyncQueue=o,this.remoteSyncer={},this.du=[],this._u=new Map,this.wu=new Set,this.mu=[],this.gu=t,this.gu.Kr(r=>{o.enqueueAndForget(async()=>{ps(this)&&(Ae("RemoteStore","Restarting streams for network reachability change."),await async function(s){const d=Qe(s);d.wu.add(4),await Tc(d),d.yu.set("Unknown"),d.wu.delete(4),await Hg(d)}(this))})}),this.yu=new SO(o,i)}}async function Hg(e){if(ps(e))for(const n of e.mu)await n(!0)}async function Tc(e){for(const n of e.mu)await n(!1)}function SD(e,n){const u=Qe(e);u._u.has(n.targetId)||(u._u.set(n.targetId,n),dy(u)?sy(u):nm(u).Mo()&&ry(u,n))}function LD(e,n){const u=Qe(e),o=nm(u);u._u.delete(n),o.Mo()&&CD(u,n),u._u.size===0&&(o.Mo()?o.$o():ps(u)&&u.yu.set("Unknown"))}function ry(e,n){e.pu.Z(n.targetId),nm(e).Ho(n)}function CD(e,n){e.pu.Z(n),nm(e).Jo(n)}function sy(e){e.pu=new LI({getRemoteKeysForTarget:n=>e.remoteSyncer.getRemoteKeysForTarget(n),Et:n=>e._u.get(n)||null}),nm(e).start(),e.yu.au()}function dy(e){return ps(e)&&!nm(e).ko()&&e._u.size>0}function ps(e){return Qe(e).wu.size===0}function AD(e){e.pu=void 0}async function CO(e){e._u.forEach((n,u)=>{ry(e,n)})}async function AO(e,n){AD(e),dy(e)?(e.yu.lu(n),sy(e)):e.yu.set("Unknown")}async function xO(e,n,u){if(e.yu.set("Online"),n instanceof bD&&n.state===2&&n.cause)try{await async function(o,i){const t=i.cause;for(const r of i.targetIds)o._u.has(r)&&(await o.remoteSyncer.rejectListen(r,t),o._u.delete(r),o.pu.removeTarget(r))}(e,n)}catch(o){Ae("RemoteStore","Failed to remove targets %s: %s ",n.targetIds.join(","),o),await A_(e,o)}else if(n instanceof Q0?e.pu.ut(n):n instanceof FD?e.pu._t(n):e.pu.ht(n),!u.isEqual(on.min()))try{const o=await ED(e.localStore);u.compareTo(o)>=0&&await function(i,t){const r=i.pu.yt(t);return r.targetChanges.forEach((s,d)=>{if(s.resumeToken.approximateByteSize()>0){const l=i._u.get(d);l&&i._u.set(d,l.withResumeToken(s.resumeToken,t))}}),r.targetMismatches.forEach(s=>{const d=i._u.get(s);if(!d)return;i._u.set(s,d.withResumeToken(Tu.EMPTY_BYTE_STRING,d.snapshotVersion)),CD(i,s);const l=new Tr(d.target,s,1,d.sequenceNumber);ry(i,l)}),i.remoteSyncer.applyRemoteEvent(r)}(e,u)}catch(o){Ae("RemoteStore","Failed to raise snapshot:",o),await A_(e,o)}}async function A_(e,n,u){if(!Ec(n))throw n;e.wu.add(1),await Tc(e),e.yu.set("Offline"),u||(u=()=>ED(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{Ae("RemoteStore","Retrying IndexedDB access"),await u(),e.wu.delete(1),await Hg(e)})}function xD(e,n){return n().catch(u=>A_(e,u,n))}async function Ug(e){const n=Qe(e),u=Ca(n);let o=n.du.length>0?n.du[n.du.length-1].batchId:-1;for(;YO(n);)try{const i=await cO(n.localStore,o);if(i===null){n.du.length===0&&u.$o();break}o=i.batchId,IO(n,i)}catch(i){await A_(n,i)}YD(n)&&ID(n)}function YO(e){return ps(e)&&e.du.length<10}function IO(e,n){e.du.push(n);const u=Ca(e);u.Mo()&&u.Xo&&u.Zo(n.mutations)}function YD(e){return ps(e)&&!Ca(e).ko()&&e.du.length>0}function ID(e){Ca(e).start()}async function OO(e){Ca(e).nu()}async function NO(e){const n=Ca(e);for(const u of e.du)n.Zo(u.mutations)}async function RO(e,n,u){const o=e.du.shift(),i=oy.from(o,n,u);await xD(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await Ug(e)}async function $O(e,n){n&&Ca(e).Xo&&await async function(u,o){if(i=o.code,BI(i)&&i!==ae.ABORTED){const t=u.du.shift();Ca(u).Fo(),await xD(u,()=>u.remoteSyncer.rejectFailedWrite(t.batchId,o)),await Ug(u)}var i}(e,n),YD(e)&&ID(e)}async function S2(e,n){const u=Qe(e);u.asyncQueue.verifyOperationInProgress(),Ae("RemoteStore","RemoteStore received new credentials");const o=ps(u);u.wu.add(3),await Tc(u),o&&u.yu.set("Unknown"),await u.remoteSyncer.handleCredentialChange(n),u.wu.delete(3),await Hg(u)}async function HO(e,n){const u=Qe(e);n?(u.wu.delete(2),await Hg(u)):n||(u.wu.add(2),await Tc(u),u.yu.set("Unknown"))}function nm(e){return e.Iu||(e.Iu=function(n,u,o){const i=Qe(n);return i.iu(),new EO(u,i.So,i.authCredentials,i.appCheckCredentials,i.M,o)}(e.datastore,e.asyncQueue,{Xr:CO.bind(null,e),eo:AO.bind(null,e),zo:xO.bind(null,e)}),e.mu.push(async n=>{n?(e.Iu.Fo(),dy(e)?sy(e):e.yu.set("Unknown")):(await e.Iu.stop(),AD(e))})),e.Iu}function Ca(e){return e.Tu||(e.Tu=function(n,u,o){const i=Qe(n);return i.iu(),new MO(u,i.So,i.authCredentials,i.appCheckCredentials,i.M,o)}(e.datastore,e.asyncQueue,{Xr:OO.bind(null,e),eo:$O.bind(null,e),eu:NO.bind(null,e),tu:RO.bind(null,e)}),e.mu.push(async n=>{n?(e.Tu.Fo(),await Ug(e)):(await e.Tu.stop(),e.du.length>0&&(Ae("RemoteStore",`Stopping write stream with ${e.du.length} pending writes`),e.du=[]))})),e.Tu}/**
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
 */class my{constructor(n,u,o,i,t){this.asyncQueue=n,this.timerId=u,this.targetTimeMs=o,this.op=i,this.removalCallback=t,this.deferred=new wa,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(r=>{})}static createAndSchedule(n,u,o,i,t){const r=Date.now()+o,s=new my(n,u,r,i,t);return s.start(o),s}start(n){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),n)}skipDelay(){return this.handleDelayElapsed()}cancel(n){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Ee(ae.CANCELLED,"Operation cancelled"+(n?": "+n:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(n=>this.deferred.resolve(n))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ly(e,n){if(Sa("AsyncQueue",`${n}: ${e}`),Ec(e))return new Ee(ae.UNAVAILABLE,`${n}: ${e}`);throw e}/**
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
 */class rd{constructor(n){this.comparator=n?(u,o)=>n(u,o)||Re.comparator(u.key,o.key):(u,o)=>Re.comparator(u.key,o.key),this.keyedMap=q1(),this.sortedSet=new yu(this.comparator)}static emptySet(n){return new rd(n.comparator)}has(n){return this.keyedMap.get(n)!=null}get(n){return this.keyedMap.get(n)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(n){const u=this.keyedMap.get(n);return u?this.sortedSet.indexOf(u):-1}get size(){return this.sortedSet.size}forEach(n){this.sortedSet.inorderTraversal((u,o)=>(n(u),!1))}add(n){const u=this.delete(n.key);return u.copy(u.keyedMap.insert(n.key,n),u.sortedSet.insert(n,null))}delete(n){const u=this.get(n);return u?this.copy(this.keyedMap.remove(n),this.sortedSet.remove(u)):this}isEqual(n){if(!(n instanceof rd)||this.size!==n.size)return!1;const u=this.sortedSet.getIterator(),o=n.sortedSet.getIterator();for(;u.hasNext();){const i=u.getNext().key,t=o.getNext().key;if(!i.isEqual(t))return!1}return!0}toString(){const n=[];return this.forEach(u=>{n.push(u.toString())}),n.length===0?"DocumentSet ()":`DocumentSet (
  `+n.join(`  
`)+`
)`}copy(n,u){const o=new rd;return o.comparator=this.comparator,o.keyedMap=n,o.sortedSet=u,o}}/**
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
 */class L2{constructor(){this.Eu=new yu(Re.comparator)}track(n){const u=n.doc.key,o=this.Eu.get(u);o?n.type!==0&&o.type===3?this.Eu=this.Eu.insert(u,n):n.type===3&&o.type!==1?this.Eu=this.Eu.insert(u,{type:o.type,doc:n.doc}):n.type===2&&o.type===2?this.Eu=this.Eu.insert(u,{type:2,doc:n.doc}):n.type===2&&o.type===0?this.Eu=this.Eu.insert(u,{type:0,doc:n.doc}):n.type===1&&o.type===0?this.Eu=this.Eu.remove(u):n.type===1&&o.type===2?this.Eu=this.Eu.insert(u,{type:1,doc:o.doc}):n.type===0&&o.type===1?this.Eu=this.Eu.insert(u,{type:2,doc:n.doc}):Xe():this.Eu=this.Eu.insert(u,n)}Au(){const n=[];return this.Eu.inorderTraversal((u,o)=>{n.push(o)}),n}}class Bd{constructor(n,u,o,i,t,r,s,d){this.query=n,this.docs=u,this.oldDocs=o,this.docChanges=i,this.mutatedKeys=t,this.fromCache=r,this.syncStateChanged=s,this.excludesMetadataChanges=d}static fromInitialDocuments(n,u,o,i){const t=[];return u.forEach(r=>{t.push({type:0,doc:r})}),new Bd(n,u,rd.emptySet(u),t,o,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(n){if(!(this.fromCache===n.fromCache&&this.syncStateChanged===n.syncStateChanged&&this.mutatedKeys.isEqual(n.mutatedKeys)&&Yg(this.query,n.query)&&this.docs.isEqual(n.docs)&&this.oldDocs.isEqual(n.oldDocs)))return!1;const u=this.docChanges,o=n.docChanges;if(u.length!==o.length)return!1;for(let i=0;i<u.length;i++)if(u[i].type!==o[i].type||!u[i].doc.isEqual(o[i].doc))return!1;return!0}}/**
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
 */class UO{constructor(){this.Ru=void 0,this.listeners=[]}}class zO{constructor(){this.queries=new em(n=>rD(n),Yg),this.onlineState="Unknown",this.bu=new Set}}async function OD(e,n){const u=Qe(e),o=n.query;let i=!1,t=u.queries.get(o);if(t||(i=!0,t=new UO),i)try{t.Ru=await u.onListen(o)}catch(r){const s=ly(r,`Initialization of query '${V1(n.query)}' failed`);return void n.onError(s)}u.queries.set(o,t),t.listeners.push(n),n.Pu(u.onlineState),t.Ru&&n.Vu(t.Ru)&&cy(u)}async function ND(e,n){const u=Qe(e),o=n.query;let i=!1;const t=u.queries.get(o);if(t){const r=t.listeners.indexOf(n);r>=0&&(t.listeners.splice(r,1),i=t.listeners.length===0)}if(i)return u.queries.delete(o),u.onUnlisten(o)}function VO(e,n){const u=Qe(e);let o=!1;for(const i of n){const t=i.query,r=u.queries.get(t);if(r){for(const s of r.listeners)s.Vu(i)&&(o=!0);r.Ru=i}}o&&cy(u)}function WO(e,n,u){const o=Qe(e),i=o.queries.get(n);if(i)for(const t of i.listeners)t.onError(u);o.queries.delete(n)}function cy(e){e.bu.forEach(n=>{n.next()})}class RD{constructor(n,u,o){this.query=n,this.vu=u,this.Su=!1,this.Du=null,this.onlineState="Unknown",this.options=o||{}}Vu(n){if(!this.options.includeMetadataChanges){const o=[];for(const i of n.docChanges)i.type!==3&&o.push(i);n=new Bd(n.query,n.docs,n.oldDocs,o,n.mutatedKeys,n.fromCache,n.syncStateChanged,!0)}let u=!1;return this.Su?this.Cu(n)&&(this.vu.next(n),u=!0):this.xu(n,this.onlineState)&&(this.Nu(n),u=!0),this.Du=n,u}onError(n){this.vu.error(n)}Pu(n){this.onlineState=n;let u=!1;return this.Du&&!this.Su&&this.xu(this.Du,n)&&(this.Nu(this.Du),u=!0),u}xu(n,u){if(!n.fromCache)return!0;const o=u!=="Offline";return(!this.options.ku||!o)&&(!n.docs.isEmpty()||u==="Offline")}Cu(n){if(n.docChanges.length>0)return!0;const u=this.Du&&this.Du.hasPendingWrites!==n.hasPendingWrites;return!(!n.syncStateChanged&&!u)&&this.options.includeMetadataChanges===!0}Nu(n){n=Bd.fromInitialDocuments(n.query,n.docs,n.mutatedKeys,n.fromCache),this.Su=!0,this.vu.next(n)}}/**
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
 */class $D{constructor(n){this.key=n}}class HD{constructor(n){this.key=n}}class qO{constructor(n,u){this.query=n,this.Uu=u,this.qu=null,this.current=!1,this.Ku=In(),this.mutatedKeys=In(),this.Gu=sD(n),this.Qu=new rd(this.Gu)}get ju(){return this.Uu}Wu(n,u){const o=u?u.zu:new L2,i=u?u.Qu:this.Qu;let t=u?u.mutatedKeys:this.mutatedKeys,r=i,s=!1;const d=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(n.inorderTraversal((c,_)=>{const p=i.get(c),f=ny(this.query,_)?_:null,y=!!p&&this.mutatedKeys.has(p.key),D=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let P=!1;p&&f?p.data.isEqual(f.data)?y!==D&&(o.track({type:3,doc:f}),P=!0):this.Hu(p,f)||(o.track({type:2,doc:f}),P=!0,(d&&this.Gu(f,d)>0||l&&this.Gu(f,l)<0)&&(s=!0)):!p&&f?(o.track({type:0,doc:f}),P=!0):p&&!f&&(o.track({type:1,doc:p}),P=!0,(d||l)&&(s=!0)),P&&(f?(r=r.add(f),t=D?t.add(c):t.delete(c)):(r=r.delete(c),t=t.delete(c)))}),this.query.limit!==null)for(;r.size>this.query.limit;){const c=this.query.limitType==="F"?r.last():r.first();r=r.delete(c.key),t=t.delete(c.key),o.track({type:1,doc:c})}return{Qu:r,zu:o,ii:s,mutatedKeys:t}}Hu(n,u){return n.hasLocalMutations&&u.hasCommittedMutations&&!u.hasLocalMutations}applyChanges(n,u,o){const i=this.Qu;this.Qu=n.Qu,this.mutatedKeys=n.mutatedKeys;const t=n.zu.Au();t.sort((l,c)=>function(_,p){const f=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Xe()}};return f(_)-f(p)}(l.type,c.type)||this.Gu(l.doc,c.doc)),this.Ju(o);const r=u?this.Yu():[],s=this.Ku.size===0&&this.current?1:0,d=s!==this.qu;return this.qu=s,t.length!==0||d?{snapshot:new Bd(this.query,n.Qu,i,t,n.mutatedKeys,s===0,d,!1),Xu:r}:{Xu:r}}Pu(n){return this.current&&n==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new L2,mutatedKeys:this.mutatedKeys,ii:!1},!1)):{Xu:[]}}Zu(n){return!this.Uu.has(n)&&!!this.Qu.has(n)&&!this.Qu.get(n).hasLocalMutations}Ju(n){n&&(n.addedDocuments.forEach(u=>this.Uu=this.Uu.add(u)),n.modifiedDocuments.forEach(u=>{}),n.removedDocuments.forEach(u=>this.Uu=this.Uu.delete(u)),this.current=n.current)}Yu(){if(!this.current)return[];const n=this.Ku;this.Ku=In(),this.Qu.forEach(o=>{this.Zu(o.key)&&(this.Ku=this.Ku.add(o.key))});const u=[];return n.forEach(o=>{this.Ku.has(o)||u.push(new HD(o))}),this.Ku.forEach(o=>{n.has(o)||u.push(new $D(o))}),u}ta(n){this.Uu=n._i,this.Ku=In();const u=this.Wu(n.documents);return this.applyChanges(u,!0)}ea(){return Bd.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.qu===0)}}class KO{constructor(n,u,o){this.query=n,this.targetId=u,this.view=o}}class GO{constructor(n){this.key=n,this.na=!1}}class JO{constructor(n,u,o,i,t,r){this.localStore=n,this.remoteStore=u,this.eventManager=o,this.sharedClientState=i,this.currentUser=t,this.maxConcurrentLimboResolutions=r,this.sa={},this.ia=new em(s=>rD(s),Yg),this.ra=new Map,this.oa=new Set,this.ua=new yu(Re.comparator),this.aa=new Map,this.ca=new ty,this.ha={},this.la=new Map,this.fa=vd.yn(),this.onlineState="Unknown",this.da=void 0}get isPrimaryClient(){return this.da===!0}}async function XO(e,n){const u=rN(e);let o,i;const t=u.ia.get(n);if(t)o=t.targetId,u.sharedClientState.addLocalQueryTarget(o),i=t.view.ea();else{const r=await _O(u.localStore,es(n));u.isPrimaryClient&&SD(u.remoteStore,r);const s=u.sharedClientState.addLocalQueryTarget(r.targetId);o=r.targetId,i=await QO(u,n,o,s==="current")}return i}async function QO(e,n,u,o){e._a=(c,_,p)=>async function(f,y,D,P){let v=y.view.Wu(D);v.ii&&(v=await E2(f.localStore,y.query,!1).then(({documents:S})=>y.view.Wu(S,v)));const j=P&&P.targetChanges.get(y.targetId),M=y.view.applyChanges(v,f.isPrimaryClient,j);return A2(f,y.targetId,M.Xu),M.snapshot}(e,c,_,p);const i=await E2(e.localStore,n,!0),t=new qO(n,i._i),r=t.Wu(i.documents),s=Pc.createSynthesizedTargetChangeForCurrentChange(u,o&&e.onlineState!=="Offline"),d=t.applyChanges(r,e.isPrimaryClient,s);A2(e,u,d.Xu);const l=new KO(n,u,t);return e.ia.set(n,l),e.ra.has(u)?e.ra.get(u).push(n):e.ra.set(u,[n]),d.snapshot}async function ZO(e,n){const u=Qe(e),o=u.ia.get(n),i=u.ra.get(o.targetId);if(i.length>1)return u.ra.set(o.targetId,i.filter(t=>!Yg(t,n))),void u.ia.delete(n);u.isPrimaryClient?(u.sharedClientState.removeLocalQueryTarget(o.targetId),u.sharedClientState.isActiveQueryTarget(o.targetId)||await X1(u.localStore,o.targetId,!1).then(()=>{u.sharedClientState.clearQueryState(o.targetId),LD(u.remoteStore,o.targetId),Q1(u,o.targetId)}).catch(Mc)):(Q1(u,o.targetId),await X1(u.localStore,o.targetId,!0))}async function eN(e,n,u){const o=sN(e);try{const i=await function(t,r){const s=Qe(t),d=$u.now(),l=r.reduce((_,p)=>_.add(p.key),In());let c;return s.persistence.runTransaction("Locally write mutations","readwrite",_=>s.fi.Ks(_,l).next(p=>{c=p;const f=[];for(const y of r){const D=jI(y,c.get(y.key));D!=null&&f.push(new Zd(y.key,D,oD(D.value.mapValue),ja.exists(!0)))}return s.Bs.addMutationBatch(_,d,f,r)})).then(_=>(_.applyToLocalDocumentSet(c),{batchId:_.batchId,changes:c}))}(o.localStore,n);o.sharedClientState.addPendingMutation(i.batchId),function(t,r,s){let d=t.ha[t.currentUser.toKey()];d||(d=new yu(Dn)),d=d.insert(r,s),t.ha[t.currentUser.toKey()]=d}(o,i.batchId,u),await Sc(o,i.changes),await Ug(o.remoteStore)}catch(i){const t=ly(i,"Failed to persist write");u.reject(t)}}async function UD(e,n){const u=Qe(e);try{const o=await mO(u.localStore,n);n.targetChanges.forEach((i,t)=>{const r=u.aa.get(t);r&&(An(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?r.na=!0:i.modifiedDocuments.size>0?An(r.na):i.removedDocuments.size>0&&(An(r.na),r.na=!1))}),await Sc(u,o,n)}catch(o){await Mc(o)}}function C2(e,n,u){const o=Qe(e);if(o.isPrimaryClient&&u===0||!o.isPrimaryClient&&u===1){const i=[];o.ia.forEach((t,r)=>{const s=r.view.Pu(n);s.snapshot&&i.push(s.snapshot)}),function(t,r){const s=Qe(t);s.onlineState=r;let d=!1;s.queries.forEach((l,c)=>{for(const _ of c.listeners)_.Pu(r)&&(d=!0)}),d&&cy(s)}(o.eventManager,n),i.length&&o.sa.zo(i),o.onlineState=n,o.isPrimaryClient&&o.sharedClientState.setOnlineState(n)}}async function nN(e,n,u){const o=Qe(e);o.sharedClientState.updateQueryState(n,"rejected",u);const i=o.aa.get(n),t=i&&i.key;if(t){let r=new yu(Re.comparator);r=r.insert(t,Yu.newNoDocument(t,on.min()));const s=In().add(t),d=new Rg(on.min(),new Map,new Mu(Dn),r,s);await UD(o,d),o.ua=o.ua.remove(t),o.aa.delete(n),_y(o)}else await X1(o.localStore,n,!1).then(()=>Q1(o,n,u)).catch(Mc)}async function uN(e,n){const u=Qe(e),o=n.batch.batchId;try{const i=await dO(u.localStore,n);VD(u,o,null),zD(u,o),u.sharedClientState.updateMutationState(o,"acknowledged"),await Sc(u,i)}catch(i){await Mc(i)}}async function oN(e,n,u){const o=Qe(e);try{const i=await function(t,r){const s=Qe(t);return s.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let l;return s.Bs.lookupMutationBatch(d,r).next(c=>(An(c!==null),l=c.keys(),s.Bs.removeMutationBatch(d,c))).next(()=>s.Bs.performConsistencyCheck(d)).next(()=>s.fi.Ks(d,l))})}(o.localStore,n);VD(o,n,u),zD(o,n),o.sharedClientState.updateMutationState(n,"rejected",u),await Sc(o,i)}catch(i){await Mc(i)}}function zD(e,n){(e.la.get(n)||[]).forEach(u=>{u.resolve()}),e.la.delete(n)}function VD(e,n,u){const o=Qe(e);let i=o.ha[o.currentUser.toKey()];if(i){const t=i.get(n);t&&(u?t.reject(u):t.resolve(),i=i.remove(n)),o.ha[o.currentUser.toKey()]=i}}function Q1(e,n,u=null){e.sharedClientState.removeLocalQueryTarget(n);for(const o of e.ra.get(n))e.ia.delete(o),u&&e.sa.wa(o,u);e.ra.delete(n),e.isPrimaryClient&&e.ca.vi(n).forEach(o=>{e.ca.containsKey(o)||WD(e,o)})}function WD(e,n){e.oa.delete(n.path.canonicalString());const u=e.ua.get(n);u!==null&&(LD(e.remoteStore,u),e.ua=e.ua.remove(n),e.aa.delete(u),_y(e))}function A2(e,n,u){for(const o of u)o instanceof $D?(e.ca.addReference(o.key,n),iN(e,o)):o instanceof HD?(Ae("SyncEngine","Document no longer in limbo: "+o.key),e.ca.removeReference(o.key,n),e.ca.containsKey(o.key)||WD(e,o.key)):Xe()}function iN(e,n){const u=n.key,o=u.path.canonicalString();e.ua.get(u)||e.oa.has(o)||(Ae("SyncEngine","New document in limbo: "+u),e.oa.add(o),_y(e))}function _y(e){for(;e.oa.size>0&&e.ua.size<e.maxConcurrentLimboResolutions;){const n=e.oa.values().next().value;e.oa.delete(n);const u=new Re(Yn.fromString(n)),o=e.fa.next();e.aa.set(o,new GO(u)),e.ua=e.ua.insert(u,o),SD(e.remoteStore,new Tr(es(Qf(u.path)),o,2,Kf.A))}}async function Sc(e,n,u){const o=Qe(e),i=[],t=[],r=[];o.ia.isEmpty()||(o.ia.forEach((s,d)=>{r.push(o._a(d,n,u).then(l=>{if(l){o.isPrimaryClient&&o.sharedClientState.updateQueryState(d.targetId,l.fromCache?"not-current":"current"),i.push(l);const c=iy.Ys(d.targetId,l);t.push(c)}}))}),await Promise.all(r),o.sa.zo(i),await async function(s,d){const l=Qe(s);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>pe.forEach(d,_=>pe.forEach(_.Hs,p=>l.persistence.referenceDelegate.addReference(c,_.targetId,p)).next(()=>pe.forEach(_.Js,p=>l.persistence.referenceDelegate.removeReference(c,_.targetId,p)))))}catch(c){if(!Ec(c))throw c;Ae("LocalStore","Failed to update sequence numbers: "+c)}for(const c of d){const _=c.targetId;if(!c.fromCache){const p=l.ui.get(_),f=p.snapshotVersion,y=p.withLastLimboFreeSnapshotVersion(f);l.ui=l.ui.insert(_,y)}}}(o.localStore,t))}async function tN(e,n){const u=Qe(e);if(!u.currentUser.isEqual(n)){Ae("SyncEngine","User change. New user:",n.toKey());const o=await PD(u.localStore,n);u.currentUser=n,function(i,t){i.la.forEach(r=>{r.forEach(s=>{s.reject(new Ee(ae.CANCELLED,t))})}),i.la.clear()}(u,"'waitForPendingWrites' promise is rejected due to a user change."),u.sharedClientState.handleUserChange(n,o.removedBatchIds,o.addedBatchIds),await Sc(u,o.di)}}function aN(e,n){const u=Qe(e),o=u.aa.get(n);if(o&&o.na)return In().add(o.key);{let i=In();const t=u.ra.get(n);if(!t)return i;for(const r of t){const s=u.ia.get(r);i=i.unionWith(s.view.ju)}return i}}function rN(e){const n=Qe(e);return n.remoteStore.remoteSyncer.applyRemoteEvent=UD.bind(null,n),n.remoteStore.remoteSyncer.getRemoteKeysForTarget=aN.bind(null,n),n.remoteStore.remoteSyncer.rejectListen=nN.bind(null,n),n.sa.zo=VO.bind(null,n.eventManager),n.sa.wa=WO.bind(null,n.eventManager),n}function sN(e){const n=Qe(e);return n.remoteStore.remoteSyncer.applySuccessfulWrite=uN.bind(null,n),n.remoteStore.remoteSyncer.rejectFailedWrite=oN.bind(null,n),n}class dN{constructor(){this.synchronizeTabs=!1}async initialize(n){this.M=$g(n.databaseInfo.databaseId),this.sharedClientState=this.ga(n),this.persistence=this.ya(n),await this.persistence.start(),this.gcScheduler=this.pa(n),this.localStore=this.Ia(n)}pa(n){return null}Ia(n){return sO(this.persistence,new aO,n.initialUser,this.M)}ya(n){return new bO(ay.Yi,this.M)}ga(n){return new jO}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class mN{async initialize(n,u){this.localStore||(this.localStore=n.localStore,this.sharedClientState=n.sharedClientState,this.datastore=this.createDatastore(u),this.remoteStore=this.createRemoteStore(u),this.eventManager=this.createEventManager(u),this.syncEngine=this.createSyncEngine(u,!n.synchronizeTabs),this.sharedClientState.onlineStateHandler=o=>C2(this.syncEngine,o,1),this.remoteStore.remoteSyncer.handleCredentialChange=tN.bind(null,this.syncEngine),await HO(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(n){return new zO}createDatastore(n){const u=$g(n.databaseInfo.databaseId),o=(i=n.databaseInfo,new PO(i));var i;return function(t,r,s,d){return new TO(t,r,s,d)}(n.authCredentials,n.appCheckCredentials,o,u)}createRemoteStore(n){return u=this.localStore,o=this.datastore,i=n.asyncQueue,t=s=>C2(this.syncEngine,s,0),r=T2.vt()?new T2:new DO,new LO(u,o,i,t,r);var u,o,i,t,r}createSyncEngine(n,u){return function(o,i,t,r,s,d,l){const c=new JO(o,i,t,r,s,d);return l&&(c.da=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,n.initialUser,n.maxConcurrentLimboResolutions,u)}terminate(){return async function(n){const u=Qe(n);Ae("RemoteStore","RemoteStore shutting down."),u.wu.add(5),await Tc(u),u.gu.shutdown(),u.yu.set("Unknown")}(this.remoteStore)}}/**
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
 */class qD{constructor(n){this.observer=n,this.muted=!1}next(n){this.observer.next&&this.Ea(this.observer.next,n)}error(n){this.observer.error?this.Ea(this.observer.error,n):console.error("Uncaught Error in snapshot listener:",n)}Aa(){this.muted=!0}Ea(n,u){this.muted||setTimeout(()=>{this.muted||n(u)},0)}}/**
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
 */class lN{constructor(n,u,o,i){this.authCredentials=n,this.appCheckCredentials=u,this.asyncQueue=o,this.databaseInfo=i,this.user=co.UNAUTHENTICATED,this.clientId=Zj.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(o,async t=>{Ae("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t}),this.appCheckCredentials.start(o,t=>(Ae("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(n){this.authCredentialListener=n}setAppCheckTokenChangeListener(n){this.appCheckCredentialListener=n}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Ee(ae.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const n=new wa;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),n.resolve()}catch(u){const o=ly(u,"Failed to shutdown persistence");n.reject(o)}}),n.promise}}async function cN(e,n){e.asyncQueue.verifyOperationInProgress(),Ae("FirestoreClient","Initializing OfflineComponentProvider");const u=await e.getConfiguration();await n.initialize(u);let o=u.initialUser;e.setCredentialChangeListener(async i=>{o.isEqual(i)||(await PD(n.localStore,i),o=i)}),n.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=n}async function _N(e,n){e.asyncQueue.verifyOperationInProgress();const u=await gN(e);Ae("FirestoreClient","Initializing OnlineComponentProvider");const o=await e.getConfiguration();await n.initialize(u,o),e.setCredentialChangeListener(i=>S2(n.remoteStore,i)),e.setAppCheckTokenChangeListener((i,t)=>S2(n.remoteStore,t)),e.onlineComponents=n}async function gN(e){return e.offlineComponents||(Ae("FirestoreClient","Using default OfflineComponentProvider"),await cN(e,new dN)),e.offlineComponents}async function KD(e){return e.onlineComponents||(Ae("FirestoreClient","Using default OnlineComponentProvider"),await _N(e,new mN)),e.onlineComponents}function pN(e){return KD(e).then(n=>n.syncEngine)}async function Z1(e){const n=await KD(e),u=n.eventManager;return u.onListen=XO.bind(null,n.syncEngine),u.onUnlisten=ZO.bind(null,n.syncEngine),u}function hN(e,n,u={}){const o=new wa;return e.asyncQueue.enqueueAndForget(async()=>function(i,t,r,s,d){const l=new qD({next:_=>{t.enqueueAndForget(()=>ND(i,c)),_.fromCache&&s.source==="server"?d.reject(new Ee(ae.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(_)},error:_=>d.reject(_)}),c=new RD(r,l,{includeMetadataChanges:!0,ku:!0});return OD(i,c)}(await Z1(e),e.asyncQueue,n,u,o)),o.promise}const x2=new Map;/**
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
 */function GD(e,n,u){if(!u)throw new Ee(ae.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${n}.`)}function kN(e,n,u,o){if(n===!0&&o===!0)throw new Ee(ae.INVALID_ARGUMENT,`${e} and ${u} cannot be used together.`)}function Y2(e){if(!Re.isDocumentKey(e))throw new Ee(ae.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function I2(e){if(Re.isDocumentKey(e))throw new Ee(ae.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function zg(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const n=function(u){return u.constructor?u.constructor.name:null}(e);return n?`a custom ${n} object`:"an object"}}return typeof e=="function"?"a function":Xe()}function Tt(e,n){if("_delegate"in e&&(e=e._delegate),!(e instanceof n)){if(n.name===e.constructor.name)throw new Ee(ae.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const u=zg(e);throw new Ee(ae.INVALID_ARGUMENT,`Expected type '${n.name}', but it was: ${u}`)}}return e}function fN(e,n){if(n<=0)throw new Ee(ae.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${n}.`)}/**
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
 */class O2{constructor(n){var u;if(n.host===void 0){if(n.ssl!==void 0)throw new Ee(ae.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=n.host,this.ssl=(u=n.ssl)===null||u===void 0||u;if(this.credentials=n.credentials,this.ignoreUndefinedProperties=!!n.ignoreUndefinedProperties,n.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(n.cacheSizeBytes!==-1&&n.cacheSizeBytes<1048576)throw new Ee(ae.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=n.cacheSizeBytes}this.experimentalForceLongPolling=!!n.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!n.experimentalAutoDetectLongPolling,this.useFetchStreams=!!n.useFetchStreams,kN("experimentalForceLongPolling",n.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",n.experimentalAutoDetectLongPolling)}isEqual(n){return this.host===n.host&&this.ssl===n.ssl&&this.credentials===n.credentials&&this.cacheSizeBytes===n.cacheSizeBytes&&this.experimentalForceLongPolling===n.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===n.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===n.ignoreUndefinedProperties&&this.useFetchStreams===n.useFetchStreams}}/**
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
 */class gy{constructor(n,u,o){this._authCredentials=u,this._appCheckCredentials=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new O2({}),this._settingsFrozen=!1,n instanceof wd?this._databaseId=n:(this._app=n,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new Ee(ae.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new wd(i.options.projectId)}(n))}get app(){if(!this._app)throw new Ee(ae.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(n){if(this._settingsFrozen)throw new Ee(ae.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new O2(n),n.credentials!==void 0&&(this._authCredentials=function(u){if(!u)return new HY;switch(u.type){case"gapi":const o=u.client;return An(!(typeof o!="object"||o===null||!o.auth||!o.auth.getAuthHeaderValueForFirstParty)),new VY(o,u.sessionIndex||"0",u.iamToken||null);case"provider":return u.client;default:throw new Ee(ae.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(n.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const u=x2.get(n);u&&(Ae("ComponentProvider","Removing Datastore"),x2.delete(n),u.terminate())}(this),Promise.resolve()}}/**
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
 */class Fo{constructor(n,u,o){this.converter=u,this._key=o,this.type="document",this.firestore=n}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Da(this.firestore,this.converter,this._key.path.popLast())}withConverter(n){return new Fo(this.firestore,n,this._key)}}class Ua{constructor(n,u,o){this.converter=u,this._query=o,this.type="query",this.firestore=n}withConverter(n){return new Ua(this.firestore,n,this._query)}}class Da extends Ua{constructor(n,u,o){super(n,u,Qf(o)),this._path=o,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const n=this._path.popLast();return n.isEmpty()?null:new Fo(this.firestore,null,new Re(n))}withConverter(n){return new Da(this.firestore,n,this._path)}}function Bu(e,n,...u){if(e=Hn(e),GD("collection","path",n),e instanceof gy){const o=Yn.fromString(n,...u);return I2(o),new Da(e,null,o)}{if(!(e instanceof Fo||e instanceof Da))throw new Ee(ae.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const o=e._path.child(Yn.fromString(n,...u));return I2(o),new Da(e.firestore,null,o)}}function Vg(e,n,...u){if(e=Hn(e),arguments.length===1&&(n=Zj.R()),GD("doc","path",n),e instanceof gy){const o=Yn.fromString(n,...u);return Y2(o),new Fo(e,null,new Re(o))}{if(!(e instanceof Fo||e instanceof Da))throw new Ee(ae.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const o=e._path.child(Yn.fromString(n,...u));return Y2(o),new Fo(e.firestore,e instanceof Da?e.converter:null,new Re(o))}}/**
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
 */class yN{constructor(){this.Fa=Promise.resolve(),this.$a=[],this.Ba=!1,this.La=[],this.Ua=null,this.qa=!1,this.Ka=!1,this.Ga=[],this.No=new MD(this,"async_queue_retry"),this.Qa=()=>{const u=Nh();u&&Ae("AsyncQueue","Visibility state changed to "+u.visibilityState),this.No.Po()};const n=Nh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Qa)}get isShuttingDown(){return this.Ba}enqueueAndForget(n){this.enqueue(n)}enqueueAndForgetEvenWhileRestricted(n){this.ja(),this.Wa(n)}enterRestrictedMode(n){if(!this.Ba){this.Ba=!0,this.Ka=n||!1;const u=Nh();u&&typeof u.removeEventListener=="function"&&u.removeEventListener("visibilitychange",this.Qa)}}enqueue(n){if(this.ja(),this.Ba)return new Promise(()=>{});const u=new wa;return this.Wa(()=>this.Ba&&this.Ka?Promise.resolve():(n().then(u.resolve,u.reject),u.promise)).then(()=>u.promise)}enqueueRetryable(n){this.enqueueAndForget(()=>(this.$a.push(n),this.za()))}async za(){if(this.$a.length!==0){try{await this.$a[0](),this.$a.shift(),this.No.reset()}catch(n){if(!Ec(n))throw n;Ae("AsyncQueue","Operation failed with retryable error: "+n)}this.$a.length>0&&this.No.Ro(()=>this.za())}}Wa(n){const u=this.Fa.then(()=>(this.qa=!0,n().catch(o=>{this.Ua=o,this.qa=!1;const i=function(t){let r=t.message||"";return t.stack&&(r=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),r}(o);throw Sa("INTERNAL UNHANDLED ERROR: ",i),o}).then(o=>(this.qa=!1,o))));return this.Fa=u,u}enqueueAfterDelay(n,u,o){this.ja(),this.Ga.indexOf(n)>-1&&(u=0);const i=my.createAndSchedule(this,n,u,o,t=>this.Ha(t));return this.La.push(i),i}ja(){this.Ua&&Xe()}verifyOperationInProgress(){}async Ja(){let n;do n=this.Fa,await n;while(n!==this.Fa)}Ya(n){for(const u of this.La)if(u.timerId===n)return!0;return!1}Xa(n){return this.Ja().then(()=>{this.La.sort((u,o)=>u.targetTimeMs-o.targetTimeMs);for(const u of this.La)if(u.skipDelay(),n!=="all"&&u.timerId===n)break;return this.Ja()})}Za(n){this.Ga.push(n)}Ha(n){const u=this.La.indexOf(n);this.La.splice(u,1)}}function N2(e){return function(n,u){if(typeof n!="object"||n===null)return!1;const o=n;for(const i of u)if(i in o&&typeof o[i]=="function")return!0;return!1}(e,["next","error","complete"])}class us extends gy{constructor(n,u,o){super(n,u,o),this.type="firestore",this._queue=new yN,this._persistenceKey="name"in n?n.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||JD(this),this._firestoreClient.terminate()}}function FN(e=hg()){return Na(e,"firestore").getImmediate()}function py(e){return e._firestoreClient||JD(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function JD(e){var n;const u=e._freezeSettings(),o=function(i,t,r,s){return new XY(i,t,r,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams)}(e._databaseId,((n=e._app)===null||n===void 0?void 0:n.options.appId)||"",e._persistenceKey,u);e._firestoreClient=new lN(e._authCredentials,e._appCheckCredentials,e._queue,o)}/**
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
 */class Wg{constructor(...n){for(let u=0;u<n.length;++u)if(n[u].length===0)throw new Ee(ae.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new go(n)}isEqual(n){return this._internalPath.isEqual(n._internalPath)}}/**
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
 */class Pd{constructor(n){this._byteString=n}static fromBase64String(n){try{return new Pd(Tu.fromBase64String(n))}catch(u){throw new Ee(ae.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+u)}}static fromUint8Array(n){return new Pd(Tu.fromUint8Array(n))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(n){return this._byteString.isEqual(n._byteString)}}/**
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
 */class Lc{constructor(n){this._methodName=n}}/**
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
 */class hy{constructor(n,u){if(!isFinite(n)||n<-90||n>90)throw new Ee(ae.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+n);if(!isFinite(u)||u<-180||u>180)throw new Ee(ae.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+u);this._lat=n,this._long=u}get latitude(){return this._lat}get longitude(){return this._long}isEqual(n){return this._lat===n._lat&&this._long===n._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(n){return Dn(this._lat,n._lat)||Dn(this._long,n._long)}}/**
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
 */const bN=/^__.*__$/;class wN{constructor(n,u,o){this.data=n,this.fieldMask=u,this.fieldTransforms=o}toMutation(n,u){return this.fieldMask!==null?new Zd(n,this.data,this.fieldMask,u,this.fieldTransforms):new Ng(n,this.data,u,this.fieldTransforms)}}class XD{constructor(n,u,o){this.data=n,this.fieldMask=u,this.fieldTransforms=o}toMutation(n,u){return new Zd(n,this.data,this.fieldMask,u,this.fieldTransforms)}}function QD(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Xe()}}class qg{constructor(n,u,o,i,t,r){this.settings=n,this.databaseId=u,this.M=o,this.ignoreUndefinedProperties=i,t===void 0&&this.tc(),this.fieldTransforms=t||[],this.fieldMask=r||[]}get path(){return this.settings.path}get ec(){return this.settings.ec}nc(n){return new qg(Object.assign(Object.assign({},this.settings),n),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}sc(n){var u;const o=(u=this.path)===null||u===void 0?void 0:u.child(n),i=this.nc({path:o,ic:!1});return i.rc(n),i}oc(n){var u;const o=(u=this.path)===null||u===void 0?void 0:u.child(n),i=this.nc({path:o,ic:!1});return i.tc(),i}uc(n){return this.nc({path:void 0,ic:!0})}ac(n){return x_(n,this.settings.methodName,this.settings.cc||!1,this.path,this.settings.hc)}contains(n){return this.fieldMask.find(u=>n.isPrefixOf(u))!==void 0||this.fieldTransforms.find(u=>n.isPrefixOf(u.field))!==void 0}tc(){if(this.path)for(let n=0;n<this.path.length;n++)this.rc(this.path.get(n))}rc(n){if(n.length===0)throw this.ac("Document fields must not be empty");if(QD(this.ec)&&bN.test(n))throw this.ac('Document fields cannot begin and end with "__"')}}class jN{constructor(n,u,o){this.databaseId=n,this.ignoreUndefinedProperties=u,this.M=o||$g(n)}lc(n,u,o,i=!1){return new qg({ec:n,methodName:u,hc:o,path:go.emptyPath(),ic:!1,cc:i},this.databaseId,this.M,this.ignoreUndefinedProperties)}}function ky(e){const n=e._freezeSettings(),u=$g(e._databaseId);return new jN(e._databaseId,!!n.ignoreUndefinedProperties,u)}function DN(e,n,u,o,i,t={}){const r=e.lc(t.merge||t.mergeFields?2:0,n,u,i);yy("Data must be an object, but it was:",r,o);const s=ZD(o,r);let d,l;if(t.merge)d=new Nl(r.fieldMask),l=r.fieldTransforms;else if(t.mergeFields){const c=[];for(const _ of t.mergeFields){const p=ek(n,_,u);if(!r.contains(p))throw new Ee(ae.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);nv(c,p)||c.push(p)}d=new Nl(c),l=r.fieldTransforms.filter(_=>d.covers(_.field))}else d=null,l=r.fieldTransforms;return new wN(new Ao(s),d,l)}class Kg extends Lc{_toFieldTransform(n){if(n.ec!==2)throw n.ec===1?n.ac(`${this._methodName}() can only appear at the top level of your update data`):n.ac(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return n.fieldMask.push(n.path),null}isEqual(n){return n instanceof Kg}}function vN(e,n,u){return new qg({ec:3,hc:n.settings.hc,methodName:e._methodName,ic:u},n.databaseId,n.M,n.ignoreUndefinedProperties)}class fy extends Lc{_toFieldTransform(n){return new pD(n.path,new Ul)}isEqual(n){return n instanceof fy}}class BN extends Lc{constructor(n,u){super(n),this.fc=u}_toFieldTransform(n){const u=vN(this,n,!0),o=this.fc.map(t=>um(t,u)),i=new Dd(o);return new pD(n.path,i)}isEqual(n){return this===n}}function PN(e,n,u,o){const i=e.lc(1,n,u);yy("Data must be an object, but it was:",i,o);const t=[],r=Ao.empty();gs(o,(d,l)=>{const c=Fy(n,d,u);l=Hn(l);const _=i.oc(c);if(l instanceof Kg)t.push(c);else{const p=um(l,_);p!=null&&(t.push(c),r.set(c,p))}});const s=new Nl(t);return new XD(r,s,i.fieldTransforms)}function EN(e,n,u,o,i,t){const r=e.lc(1,n,u),s=[ek(n,o,u)],d=[i];if(t.length%2!=0)throw new Ee(ae.INVALID_ARGUMENT,`Function ${n}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<t.length;p+=2)s.push(ek(n,t[p])),d.push(t[p+1]);const l=[],c=Ao.empty();for(let p=s.length-1;p>=0;--p)if(!nv(l,s[p])){const f=s[p];let y=d[p];y=Hn(y);const D=r.oc(f);if(y instanceof Kg)l.push(f);else{const P=um(y,D);P!=null&&(l.push(f),c.set(f,P))}}const _=new Nl(l);return new XD(c,_,r.fieldTransforms)}function MN(e,n,u,o=!1){return um(u,e.lc(o?4:3,n))}function um(e,n){if(ev(e=Hn(e)))return yy("Unsupported field value:",n,e),ZD(e,n);if(e instanceof Lc)return function(u,o){if(!QD(o.ec))throw o.ac(`${u._methodName}() can only be used with update() and set()`);if(!o.path)throw o.ac(`${u._methodName}() is not currently supported inside arrays`);const i=u._toFieldTransform(o);i&&o.fieldTransforms.push(i)}(e,n),null;if(e===void 0&&n.ignoreUndefinedProperties)return null;if(n.path&&n.fieldMask.push(n.path),e instanceof Array){if(n.settings.ic&&n.ec!==4)throw n.ac("Nested arrays are not supported");return function(u,o){const i=[];let t=0;for(const r of u){let s=um(r,o.uc(t));s==null&&(s={nullValue:"NULL_VALUE"}),i.push(s),t++}return{arrayValue:{values:i}}}(e,n)}return function(u,o){if((u=Hn(u))===null)return{nullValue:"NULL_VALUE"};if(typeof u=="number")return kI(o.M,u);if(typeof u=="boolean")return{booleanValue:u};if(typeof u=="string")return{stringValue:u};if(u instanceof Date){const i=$u.fromDate(u);return{timestampValue:C_(o.M,i)}}if(u instanceof $u){const i=new $u(u.seconds,1e3*Math.floor(u.nanoseconds/1e3));return{timestampValue:C_(o.M,i)}}if(u instanceof hy)return{geoPointValue:{latitude:u.latitude,longitude:u.longitude}};if(u instanceof Pd)return{bytesValue:wD(o.M,u._byteString)};if(u instanceof Fo){const i=o.databaseId,t=u.firestore._databaseId;if(!t.isEqual(i))throw o.ac(`Document reference is for database ${t.projectId}/${t.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:uy(u.firestore._databaseId||o.databaseId,u._key.path)}}throw o.ac(`Unsupported field value: ${zg(u)}`)}(e,n)}function ZD(e,n){const u={};return eD(e)?n.path&&n.path.length>0&&n.fieldMask.push(n.path):gs(e,(o,i)=>{const t=um(i,n.sc(o));t!=null&&(u[o]=t)}),{mapValue:{fields:u}}}function ev(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof $u||e instanceof hy||e instanceof Pd||e instanceof Fo||e instanceof Lc)}function yy(e,n,u){if(!ev(u)||!function(o){return typeof o=="object"&&o!==null&&(Object.getPrototypeOf(o)===Object.prototype||Object.getPrototypeOf(o)===null)}(u)){const o=zg(u);throw o==="an object"?n.ac(e+" a custom object"):n.ac(e+" "+o)}}function ek(e,n,u){if((n=Hn(n))instanceof Wg)return n._internalPath;if(typeof n=="string")return Fy(e,n);throw x_("Field path arguments must be of type string or ",e,!1,void 0,u)}const TN=new RegExp("[~\\*/\\[\\]]");function Fy(e,n,u){if(n.search(TN)>=0)throw x_(`Invalid field path (${n}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,u);try{return new Wg(...n.split("."))._internalPath}catch{throw x_(`Invalid field path (${n}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,u)}}function x_(e,n,u,o,i){const t=o&&!o.isEmpty(),r=i!==void 0;let s=`Function ${n}() called with invalid data`;u&&(s+=" (via `toFirestore()`)"),s+=". ";let d="";return(t||r)&&(d+=" (found",t&&(d+=` in field ${o}`),r&&(d+=` in document ${i}`),d+=")"),new Ee(ae.INVALID_ARGUMENT,s+e+d)}function nv(e,n){return e.some(u=>u.isEqual(n))}/**
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
 */class uv{constructor(n,u,o,i,t){this._firestore=n,this._userDataWriter=u,this._key=o,this._document=i,this._converter=t}get id(){return this._key.path.lastSegment()}get ref(){return new Fo(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const n=new SN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(n)}return this._userDataWriter.convertValue(this._document.data.value)}}get(n){if(this._document){const u=this._document.data.field(Gg("DocumentSnapshot.get",n));if(u!==null)return this._userDataWriter.convertValue(u)}}}class SN extends uv{data(){return super.data()}}function Gg(e,n){return typeof n=="string"?Fy(e,n):n instanceof Wg?n._internalPath:n._delegate._internalPath}/**
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
 */class Wm{constructor(n,u){this.hasPendingWrites=n,this.fromCache=u}isEqual(n){return this.hasPendingWrites===n.hasPendingWrites&&this.fromCache===n.fromCache}}class ov extends uv{constructor(n,u,o,i,t,r){super(n,u,o,i,r),this._firestore=n,this._firestoreImpl=n,this.metadata=t}exists(){return super.exists()}data(n={}){if(this._document){if(this._converter){const u=new Z0(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(u,n)}return this._userDataWriter.convertValue(this._document.data.value,n.serverTimestamps)}}get(n,u={}){if(this._document){const o=this._document.data.field(Gg("DocumentSnapshot.get",n));if(o!==null)return this._userDataWriter.convertValue(o,u.serverTimestamps)}}}class Z0 extends ov{data(n={}){return super.data(n)}}class iv{constructor(n,u,o,i){this._firestore=n,this._userDataWriter=u,this._snapshot=i,this.metadata=new Wm(i.hasPendingWrites,i.fromCache),this.query=o}get docs(){const n=[];return this.forEach(u=>n.push(u)),n}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(n,u){this._snapshot.docs.forEach(o=>{n.call(u,new Z0(this._firestore,this._userDataWriter,o.key,o,new Wm(this._snapshot.mutatedKeys.has(o.key),this._snapshot.fromCache),this.query.converter))})}docChanges(n={}){const u=!!n.includeMetadataChanges;if(u&&this._snapshot.excludesMetadataChanges)throw new Ee(ae.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===u||(this._cachedChanges=function(o,i){if(o._snapshot.oldDocs.isEmpty()){let t=0;return o._snapshot.docChanges.map(r=>({type:"added",doc:new Z0(o._firestore,o._userDataWriter,r.doc.key,r.doc,new Wm(o._snapshot.mutatedKeys.has(r.doc.key),o._snapshot.fromCache),o.query.converter),oldIndex:-1,newIndex:t++}))}{let t=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(r=>i||r.type!==3).map(r=>{const s=new Z0(o._firestore,o._userDataWriter,r.doc.key,r.doc,new Wm(o._snapshot.mutatedKeys.has(r.doc.key),o._snapshot.fromCache),o.query.converter);let d=-1,l=-1;return r.type!==0&&(d=t.indexOf(r.doc.key),t=t.delete(r.doc.key)),r.type!==1&&(t=t.add(r.doc),l=t.indexOf(r.doc.key)),{type:LN(r.type),doc:s,oldIndex:d,newIndex:l}})}}(this,u),this._cachedChangesIncludeMetadataChanges=u),this._cachedChanges}}function LN(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Xe()}}/**
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
 */function tv(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new Ee(ae.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class by{}function po(e,...n){for(const u of n)e=u._apply(e);return e}class CN extends by{constructor(n,u,o){super(),this._c=n,this.wc=u,this.mc=o,this.type="where"}_apply(n){const u=ky(n.firestore),o=function(i,t,r,s,d,l,c){let _;if(d.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new Ee(ae.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){$2(c,l);const f=[];for(const y of c)f.push(R2(s,i,y));_={arrayValue:{values:f}}}else _=R2(s,i,c)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||$2(c,l),_=MN(r,t,c,l==="in"||l==="not-in");const p=uo.create(d,l,_);return function(f,y){if(y.S()){const P=ey(f);if(P!==null&&!P.isEqual(y.field))throw new Ee(ae.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${P.toString()}' and '${y.field.toString()}'`);const v=Zf(f);v!==null&&av(f,y.field,v)}const D=function(P,v){for(const j of P.filters)if(v.indexOf(j.op)>=0)return j.op;return null}(f,function(P){switch(P){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(y.op));if(D!==null)throw D===y.op?new Ee(ae.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${y.op.toString()}' filter.`):new Ee(ae.INVALID_ARGUMENT,`Invalid query. You cannot use '${y.op.toString()}' filters with '${D.toString()}' filters.`)}(i,p),p}(n._query,"where",u,n.firestore._databaseId,this._c,this.wc,this.mc);return new Ua(n.firestore,n.converter,function(i,t){const r=i.filters.concat([t]);return new Qd(i.path,i.collectionGroup,i.explicitOrderBy.slice(),r,i.limit,i.limitType,i.startAt,i.endAt)}(n._query,o))}}function Oo(e,n,u){const o=n,i=Gg("where",e);return new CN(i,o,u)}class AN extends by{constructor(n,u){super(),this._c=n,this.gc=u,this.type="orderBy"}_apply(n){const u=function(o,i,t){if(o.startAt!==null)throw new Ee(ae.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new Ee(ae.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new ad(i,t);return function(s,d){if(Zf(s)===null){const l=ey(s);l!==null&&av(s,l,d.field)}}(o,r),r}(n._query,this._c,this.gc);return new Ua(n.firestore,n.converter,function(o,i){const t=o.explicitOrderBy.concat([i]);return new Qd(o.path,o.collectionGroup,t,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)}(n._query,u))}}function xN(e,n="asc"){const u=n,o=Gg("orderBy",e);return new AN(o,u)}class YN extends by{constructor(n,u,o){super(),this.type=n,this.yc=u,this.Ic=o}_apply(n){return new Ua(n.firestore,n.converter,aD(n._query,this.yc,this.Ic))}}function IN(e){return fN("limit",e),new YN("limit",e,"F")}function R2(e,n,u){if(typeof(u=Hn(u))=="string"){if(u==="")throw new Ee(ae.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!tD(n)&&u.indexOf("/")!==-1)throw new Ee(ae.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${u}' contains a '/' character.`);const o=n.path.child(Yn.fromString(u));if(!Re.isDocumentKey(o))throw new Ee(ae.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${o}' is not because it has an odd number of segments (${o.length}).`);return c2(e,new Re(o))}if(u instanceof Fo)return c2(e,u._key);throw new Ee(ae.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${zg(u)}.`)}function $2(e,n){if(!Array.isArray(e)||e.length===0)throw new Ee(ae.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${n.toString()}' filters.`);if(e.length>10)throw new Ee(ae.INVALID_ARGUMENT,`Invalid Query. '${n.toString()}' filters support a maximum of 10 elements in the value array.`)}function av(e,n,u){if(!u.isEqual(n))throw new Ee(ae.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${n.toString()}' and so you must also use '${n.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${u.toString()}' instead.`)}/**
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
 */class ON{convertValue(n,u="none"){switch(Qr(n)){case 0:return null;case 1:return n.booleanValue;case 2:return ou(n.integerValue||n.doubleValue);case 3:return this.convertTimestamp(n.timestampValue);case 4:return this.convertServerTimestamp(n,u);case 5:return n.stringValue;case 6:return this.convertBytes(bd(n.bytesValue));case 7:return this.convertReference(n.referenceValue);case 8:return this.convertGeoPoint(n.geoPointValue);case 9:return this.convertArray(n.arrayValue,u);case 10:return this.convertObject(n.mapValue,u);default:throw Xe()}}convertObject(n,u){const o={};return gs(n.fields,(i,t)=>{o[i]=this.convertValue(t,u)}),o}convertGeoPoint(n){return new hy(ou(n.latitude),ou(n.longitude))}convertArray(n,u){return(n.values||[]).map(o=>this.convertValue(o,u))}convertServerTimestamp(n,u){switch(u){case"previous":const o=uD(n);return o==null?null:this.convertValue(o,u);case"estimate":return this.convertTimestamp(Rl(n));default:return null}}convertTimestamp(n){const u=La(n);return new $u(u.seconds,u.nanos)}convertDocumentKey(n,u){const o=Yn.fromString(n);An(BD(o));const i=new wd(o.get(1),o.get(3)),t=new Re(o.popFirst(5));return i.isEqual(u)||Sa(`Document ${t} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${u.projectId}/${u.database}) instead.`),t}}/**
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
 */function NN(e,n,u){let o;return o=e?u&&(u.merge||u.mergeFields)?e.toFirestore(n,u):e.toFirestore(n):n,o}class wy extends ON{constructor(n){super(),this.firestore=n}convertBytes(n){return new Pd(n)}convertReference(n){const u=this.convertDocumentKey(n,this.firestore._databaseId);return new Fo(this.firestore,null,u)}}function ho(e){e=Tt(e,Ua);const n=Tt(e.firestore,us),u=py(n),o=new wy(n);return tv(e._query),hN(u,e._query).then(i=>new iv(n,o,e,i))}function jy(e,n,u,...o){e=Tt(e,Fo);const i=Tt(e.firestore,us),t=ky(i);let r;return r=typeof(n=Hn(n))=="string"||n instanceof Wg?EN(t,"updateDoc",e._key,n,u,o):PN(t,"updateDoc",e._key,n),Dy(i,[r.toMutation(e._key,ja.exists(!0))])}function RN(e){return Dy(Tt(e.firestore,us),[new kD(e._key,ja.none())])}function nk(e,n){const u=Tt(e.firestore,us),o=Vg(e),i=NN(e.converter,n);return Dy(u,[DN(ky(e.firestore),"addDoc",o._key,i,e.converter!==null,{}).toMutation(o._key,ja.exists(!1))]).then(()=>o)}function Xs(e,...n){var u,o,i;e=Hn(e);let t={includeMetadataChanges:!1},r=0;typeof n[r]!="object"||N2(n[r])||(t=n[r],r++);const s={includeMetadataChanges:t.includeMetadataChanges};if(N2(n[r])){const _=n[r];n[r]=(u=_.next)===null||u===void 0?void 0:u.bind(_),n[r+1]=(o=_.error)===null||o===void 0?void 0:o.bind(_),n[r+2]=(i=_.complete)===null||i===void 0?void 0:i.bind(_)}let d,l,c;if(e instanceof Fo)l=Tt(e.firestore,us),c=Qf(e._key.path),d={next:_=>{n[r]&&n[r]($N(l,e,_))},error:n[r+1],complete:n[r+2]};else{const _=Tt(e,Ua);l=Tt(_.firestore,us),c=_._query;const p=new wy(l);d={next:f=>{n[r]&&n[r](new iv(l,p,_,f))},error:n[r+1],complete:n[r+2]},tv(e._query)}return function(_,p,f,y){const D=new qD(y),P=new RD(p,D,f);return _.asyncQueue.enqueueAndForget(async()=>OD(await Z1(_),P)),()=>{D.Aa(),_.asyncQueue.enqueueAndForget(async()=>ND(await Z1(_),P))}}(py(l),c,s,d)}function Dy(e,n){return function(u,o){const i=new wa;return u.asyncQueue.enqueueAndForget(async()=>eN(await pN(u),o,i)),i.promise}(py(e),n)}function $N(e,n,u){const o=u.docs.get(n._key),i=new wy(e);return new ov(e,i,n._key,o,new Wm(u.hasPendingWrites,u.fromCache),n.converter)}function sd(){return new fy("serverTimestamp")}function rv(...e){return new BN("arrayUnion",e)}(function(e,n=!0){(function(u){Xd=u})(Vd),Ni(new _i("firestore",(u,{options:o})=>{const i=u.getProvider("app").getImmediate(),t=new us(i,new UY(u.getProvider("auth-internal")),new qY(u.getProvider("app-check-internal")));return o=Object.assign({useFetchStreams:n},o),t._setSettings(o),t},"PUBLIC")),yo(r2,"3.4.9",e),yo(r2,"3.4.9","esm2017")})();const HN={apiKey:"AIzaSyDC806RagzFoYGl8-jDT1k83XWGyof3pNE",authDomain:"chat-app-demo-ace5d.firebaseapp.com",projectId:"chat-app-demo-ace5d",storageBucket:"chat-app-demo-ace5d.appspot.com",messagingSenderId:"11486599596",appId:"1:11486599596:web:f0cdf74d4c2afc05dfc209",measurementId:"G-9MLL0P04HF"},Jg=QT(HN);wA(Jg);const os=tC(Jg),iu=FN(Jg),uk=Lx(Jg),UN=new bt,zN=new wt,Y_=async(e,n)=>{console.log(n),nk(Bu(iu,e),ar(tr({},n),{createdAt:sd()})),e==="chats"&&nk(Bu(iu,"messages"),{chatId:n.id,name:n.name,chatData:[],createdAt:sd(),updatedAt:sd()})},VN=async(e,n)=>{console.log();const u=Bu(iu,"chats"),o=po(u,Oo("id","in",[e+n,n+e])),i=await ho(o);let t;return i.forEach(async r=>{t=r.data()}),t},WN=async(e,n,u)=>{console.log({collectionName:e,currentUser:n,newFriend:u});const o=async(l,c)=>{if(console.log(l,c),c){const _=Vg(iu,"users",l.id);await jy(_,{friends:rv(c)})}},i=Bu(iu,e),t=po(i,Oo("uid","==",n.uid));(await ho(t)).forEach(async l=>{o(l,{displayName:u.displayName,photoURL:u.photoURL,uid:u.uid,theme:u.theme})}),Bu(iu,e);const s=po(i,Oo("uid","==",u.uid)),d=await ho(s);console.log("da chay den day"),d.forEach(async l=>{console.log(u),o(l,{displayName:n.displayName,photoURL:n.photoURL,uid:n.uid,theme:n.theme})})},qN=async e=>{const n=Bu(iu,"users"),u=po(n,Oo("uid","==",e)),o=await ho(u);let i={};return o.forEach(async t=>{i=t.data()}),i},KN=async e=>{const n=Bu(iu,"messages"),u=po(n,Oo("chatId","==",e)),o=await ho(u),i={data:{}};return o.forEach(async t=>{i.data=t.data()}),i.data},ok=async(e,n,u)=>{const o=async(s,d)=>{const l=Vg(iu,e,s.id);await jy(l,{chatData:rv(d),updatedAt:sd()})},i=Bu(iu,e),t=po(i,Oo("chatId","==",n));(await ho(t)).forEach(async s=>{o(s,u)})},GN=async(e,n)=>{const u=async(r,s)=>{const d=Vg(iu,"messages",r.id);await jy(d,{theme:ar(tr({},s),{preview:!1}),updatedAt:sd()})},o=Bu(iu,"messages"),i=po(o,Oo("chatId","==",e));(await ho(i)).forEach(async r=>{u(r,n)})},hi=Jk({id:"user",state:()=>({userinfo:{},listUser:[],friendIds:[]}),getters:{getUserinfo:e=>e.userinfo,findUser:e=>n=>e.listUser.find(u=>u.uid===n),getFriendIds:e=>e.friendIds},actions:{async setUserInfo(e){if(e){this.userinfo.displayName=e.displayName,this.userinfo.photoURL=e.photoURL,this.userinfo.uid=e.uid;const n=await qN(e.uid);if(n!=null&&n.uid){const u=n.friends.map(o=>o.uid)||[];this.friendIds=[n.uid,...u],this.userinfo={displayName:n.displayName,photoURL:n.photoURL,uid:n.uid,theme:n.theme}}}},addUser(e){this.listUser.findIndex(u=>u.uid===e.uid)===-1&&this.listUser.push(e)}}}),it=Jk({id:"app",state:()=>({pageFriend:!1,listFriend:[],notifications:[]}),getters:{getPageFriend:e=>e.pageFriend,getListFriend:e=>e.listFriend,getNotifications:e=>e.notifications},actions:{changePage(){this.pageFriend=!this.pageFriend},addListFriend(e){this.listFriend=e},setNotifications(e){this.notifications=e}}}),JN={name:"appProvider",setup(e){const n=gg(),u=j9(),o=Ra(),i=hi(),t=it(),r=Ne(()=>i.getUserinfo);Ne(()=>r.value.uid);const s=Cn({data:[]}),d=Pe(!1);o.$reset(),i.$reset(),t.$reset(),rc(()=>{KS(os,D=>{D?(console.log("da dang nhap"),d.value=!0,i.setUserInfo(D),(u.name==="login"||u.name==="register")&&n.push({path:"/"})):(n.push({path:"/login"}),d.value=!1)})});async function l(){if(console.log(r.value.uid),console.log("thong bao dang chay"),r.value.uid){const D=Bu(iu,"notifications"),P=po(D,Oo("uidReceive","==",r.value.uid));await ho(P);const v=Xs(P,j=>{vn(r,()=>{v(),console.log("da huy snapshot thong bao"),l()}),console.log("da bat dau snapshot thong bao");let M=[];t.setNotifications(M),j.forEach(async S=>{console.log("du lieu: ",S.data()),M.push(S.data()),t.setNotifications(M)})})}}async function c(){if(r.value.uid){const D=Bu(iu,"chats"),P=po(D,Oo("members","array-contains",r.value.uid));await ho(P);const v=Xs(P,j=>{vn(r,()=>{console.log("da unsubscribe list chat"),v(),c()});let M=[];j.forEach(async S=>{M.push(S.data()),s.data=M})})}}async function _(){if(console.log(r.value.uid),r.value.uid){const D=Bu(iu,"users"),P=po(D,Oo("uid","==",r.value.uid));await ho(P);const v=Xs(P,j=>{vn(r,()=>{console.log("da huy list friend"),v(),_()}),j.forEach(async M=>{t.addListFriend(M.data().friends),console.log("Da cap nhat list friend")})})}}const p=Ne(()=>o.getCurrentChatId);let f="";async function y(){const D=Bu(iu,"messages"),P=po(D,Oo("chatId","==",p.value));await ho(P);const v=Xs(P,j=>{vn(p,M=>{M!==f&&(f=M,console.log("da unsubscribe watch chat"),console.log("da watch lai chat "),v(),y())}),j.forEach(async M=>{var T;const S=(T=M.get("chatData"))==null?void 0:T.pop(),$=M.get("chatId"),C=M.get("theme"),L=M.get("chatId");(S==null?void 0:S.type)==="theme"&&o.setThemeById(L,C),o.addChatDataContent({chatId:$,pop:S})})})}return l(),y(),_(),c(),vn(r,D=>{_(),l(),c()}),vn(s,D=>{o.addChatList(D.data)}),(D,P)=>cd(D.$slots,"default")}};var vy={},sv={exports:{}},dv={};function _u(e,n){const u=Object.create(null),o=e.split(",");for(let i=0;i<o.length;i++)u[o[i]]=!0;return n?i=>!!u[i.toLowerCase()]:i=>!!u[i]}const By={[1]:"TEXT",[2]:"CLASS",[4]:"STYLE",[8]:"PROPS",[16]:"FULL_PROPS",[32]:"HYDRATE_EVENTS",[64]:"STABLE_FRAGMENT",[128]:"KEYED_FRAGMENT",[256]:"UNKEYED_FRAGMENT",[512]:"NEED_PATCH",[1024]:"DYNAMIC_SLOTS",[2048]:"DEV_ROOT_FRAGMENT",[-1]:"HOISTED",[-2]:"BAIL"},XN={[1]:"STABLE",[2]:"DYNAMIC",[3]:"FORWARDED"},QN="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",mv=_u(QN),H2=2;function lv(e,n=0,u=e.length){let o=e.split(/(\r?\n)/);const i=o.filter((s,d)=>d%2===1);o=o.filter((s,d)=>d%2===0);let t=0;const r=[];for(let s=0;s<o.length;s++)if(t+=o[s].length+(i[s]&&i[s].length||0),t>=n){for(let d=s-H2;d<=s+H2||u>t;d++){if(d<0||d>=o.length)continue;const l=d+1;r.push(`${l}${" ".repeat(Math.max(3-String(l).length,0))}|  ${o[d]}`);const c=o[d].length,_=i[d]&&i[d].length||0;if(d===s){const p=n-(t-(c+_)),f=Math.max(1,u>t?c-p:u-n);r.push("   |  "+" ".repeat(p)+"^".repeat(f))}else if(d>s){if(u>t){const p=Math.max(Math.min(u-t,c),1);r.push("   |  "+"^".repeat(p))}t+=c+_}}break}return r.join(`
`)}const cv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",_v=_u(cv),ZN=_u(cv+",async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected");function Py(e){return!!e||e===""}const eR=/[>/="'\u0009\u000a\u000c\u0020]/,Rh={};function nR(e){if(Rh.hasOwnProperty(e))return Rh[e];const n=eR.test(e);return n&&console.error(`unsafe attribute name: ${e}`),Rh[e]=!n}const uR={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv"},gv=_u("animation-iteration-count,border-image-outset,border-image-slice,border-image-width,box-flex,box-flex-group,box-ordinal-group,column-count,columns,flex,flex-grow,flex-positive,flex-shrink,flex-negative,flex-order,grid-row,grid-row-end,grid-row-span,grid-row-start,grid-column,grid-column-end,grid-column-span,grid-column-start,font-weight,line-clamp,line-height,opacity,order,orphans,tab-size,widows,z-index,zoom,fill-opacity,flood-opacity,stop-opacity,stroke-dasharray,stroke-dashoffset,stroke-miterlimit,stroke-opacity,stroke-width"),oR=_u("accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap"),iR=_u("xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan");function om(e){if(ve(e)){const n={};for(let u=0;u<e.length;u++){const o=e[u],i=Je(o)?Ey(o):om(o);if(i)for(const t in i)n[t]=i[t]}return n}else{if(Je(e))return e;if(Nn(e))return e}}const tR=/;(?![^(]*\))/g,aR=/:(.+)/;function Ey(e){const n={};return e.split(tR).forEach(u=>{if(u){const o=u.split(aR);o.length>1&&(n[o[0].trim()]=o[1].trim())}}),n}function rR(e){let n="";if(!e||Je(e))return n;for(const u in e){const o=e[u],i=u.startsWith("--")?u:$o(u);(Je(o)||typeof o=="number"&&gv(i))&&(n+=`${i}:${o};`)}return n}function im(e){let n="";if(Je(e))n=e;else if(ve(e))for(let u=0;u<e.length;u++){const o=im(e[u]);o&&(n+=o+" ")}else if(Nn(e))for(const u in e)e[u]&&(n+=u+" ");return n.trim()}function pv(e){if(!e)return null;let{class:n,style:u}=e;return n&&!Je(n)&&(e.class=im(n)),u&&(e.style=om(u)),e}const sR="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",dR="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",mR="area,base,br,col,embed,hr,img,input,link,meta,param,source,track,wbr",hv=_u(sR),kv=_u(dR),fv=_u(mR),lR=/["'&<>]/;function cR(e){const n=""+e,u=lR.exec(n);if(!u)return n;let o="",i,t,r=0;for(t=u.index;t<n.length;t++){switch(n.charCodeAt(t)){case 34:i="&quot;";break;case 38:i="&amp;";break;case 39:i="&#39;";break;case 60:i="&lt;";break;case 62:i="&gt;";break;default:continue}r!==t&&(o+=n.slice(r,t)),r=t+1,o+=i}return r!==t?o+n.slice(r,t):o}const _R=/^-?>|<!--|-->|--!>|<!-$/g;function gR(e){return e.replace(_R,"")}function pR(e,n){if(e.length!==n.length)return!1;let u=!0;for(let o=0;u&&o<e.length;o++)u=At(e[o],n[o]);return u}function At(e,n){if(e===n)return!0;let u=ik(e),o=ik(n);if(u||o)return u&&o?e.getTime()===n.getTime():!1;if(u=xt(e),o=xt(n),u||o)return e===n;if(u=ve(e),o=ve(n),u||o)return u&&o?pR(e,n):!1;if(u=Nn(e),o=Nn(n),u||o){if(!u||!o)return!1;const i=Object.keys(e).length,t=Object.keys(n).length;if(i!==t)return!1;for(const r in e){const s=e.hasOwnProperty(r),d=n.hasOwnProperty(r);if(s&&!d||!s&&d||!At(e[r],n[r]))return!1}}return String(e)===String(n)}function Cc(e,n){return e.findIndex(u=>At(u,n))}const yv=e=>Je(e)?e:e==null?"":ve(e)||Nn(e)&&(e.toString===My||!We(e.toString))?JSON.stringify(e,Fv,2):String(e),Fv=(e,n)=>n&&n.__v_isRef?Fv(e,n.value):Lr(n)?{[`Map(${n.size})`]:[...n.entries()].reduce((u,[o,i])=>(u[`${o} =>`]=i,u),{})}:Va(n)?{[`Set(${n.size})`]:[...n.values()]}:Nn(n)&&!ve(n)&&!Ty(n)?String(n):n,fn={},Sr=[],io=()=>{},ml=()=>!1,hR=/^on[^a-z]/,za=e=>hR.test(e),Xg=e=>e.startsWith("onUpdate:"),Fn=Object.assign,Qg=(e,n)=>{const u=e.indexOf(n);u>-1&&e.splice(u,1)},kR=Object.prototype.hasOwnProperty,dn=(e,n)=>kR.call(e,n),ve=Array.isArray,Lr=e=>tm(e)==="[object Map]",Va=e=>tm(e)==="[object Set]",ik=e=>tm(e)==="[object Date]",We=e=>typeof e=="function",Je=e=>typeof e=="string",xt=e=>typeof e=="symbol",Nn=e=>e!==null&&typeof e=="object",Zg=e=>Nn(e)&&We(e.then)&&We(e.catch),My=Object.prototype.toString,tm=e=>My.call(e),bv=e=>tm(e).slice(8,-1),Ty=e=>tm(e)==="[object Object]",ep=e=>Je(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,va=_u(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),wv=_u("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),np=e=>{const n=Object.create(null);return u=>n[u]||(n[u]=e(u))},fR=/-(\w)/g,Su=np(e=>e.replace(fR,(n,u)=>u?u.toUpperCase():"")),yR=/\B([A-Z])/g,$o=np(e=>e.replace(yR,"-$1").toLowerCase()),Wa=np(e=>e.charAt(0).toUpperCase()+e.slice(1)),Cr=np(e=>e?`on${Wa(e)}`:""),is=(e,n)=>!Object.is(e,n),Ar=(e,n)=>{for(let u=0;u<e.length;u++)e[u](n)},Vl=(e,n,u)=>{Object.defineProperty(e,n,{configurable:!0,enumerable:!1,value:u})},Yt=e=>{const n=parseFloat(e);return isNaN(n)?e:n};let U2;const jv=()=>U2||(U2=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{}),FR=/^[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*$/;function bR(e){return FR.test(e)?`__props.${e}`:`__props[${JSON.stringify(e)}]`}var wR=Object.freeze(Object.defineProperty({__proto__:null,EMPTY_ARR:Sr,EMPTY_OBJ:fn,NO:ml,NOOP:io,PatchFlagNames:By,camelize:Su,capitalize:Wa,def:Vl,escapeHtml:cR,escapeHtmlComment:gR,extend:Fn,genPropsAccessExp:bR,generateCodeFrame:lv,getGlobalThis:jv,hasChanged:is,hasOwn:dn,hyphenate:$o,includeBooleanAttr:Py,invokeArrayFns:Ar,isArray:ve,isBooleanAttr:ZN,isBuiltInDirective:wv,isDate:ik,isFunction:We,isGloballyWhitelisted:mv,isHTMLTag:hv,isIntegerKey:ep,isKnownHtmlAttr:oR,isKnownSvgAttr:iR,isMap:Lr,isModelListener:Xg,isNoUnitNumericStyleProp:gv,isObject:Nn,isOn:za,isPlainObject:Ty,isPromise:Zg,isReservedProp:va,isSSRSafeAttrName:nR,isSVGTag:kv,isSet:Va,isSpecialBooleanAttr:_v,isString:Je,isSymbol:xt,isVoidTag:fv,looseEqual:At,looseIndexOf:Cc,makeMap:_u,normalizeClass:im,normalizeProps:pv,normalizeStyle:om,objectToString:My,parseStringStyle:Ey,propsToAttrMap:uR,remove:Qg,slotFlagsText:XN,stringifyStyle:rR,toDisplayString:yv,toHandlerKey:Cr,toNumber:Yt,toRawType:bv,toTypeString:tm},Symbol.toStringTag,{value:"Module"}));function Sy(e){throw e}function Dv(e){}function $n(e,n,u,o){const i=e,t=new SyntaxError(String(i));return t.code=e,t.loc=n,t}const Ed=Symbol(""),dd=Symbol(""),up=Symbol(""),Wl=Symbol(""),Ly=Symbol(""),Aa=Symbol(""),Cy=Symbol(""),Ay=Symbol(""),op=Symbol(""),ip=Symbol(""),am=Symbol(""),tp=Symbol(""),xy=Symbol(""),ap=Symbol(""),ql=Symbol(""),rp=Symbol(""),sp=Symbol(""),dp=Symbol(""),mp=Symbol(""),Yy=Symbol(""),Iy=Symbol(""),Ac=Symbol(""),Kl=Symbol(""),lp=Symbol(""),cp=Symbol(""),Md=Symbol(""),rm=Symbol(""),_p=Symbol(""),I_=Symbol(""),vv=Symbol(""),O_=Symbol(""),Gl=Symbol(""),Bv=Symbol(""),Pv=Symbol(""),gp=Symbol(""),Ev=Symbol(""),Mv=Symbol(""),pp=Symbol(""),Oy=Symbol(""),ts={[Ed]:"Fragment",[dd]:"Teleport",[up]:"Suspense",[Wl]:"KeepAlive",[Ly]:"BaseTransition",[Aa]:"openBlock",[Cy]:"createBlock",[Ay]:"createElementBlock",[op]:"createVNode",[ip]:"createElementVNode",[am]:"createCommentVNode",[tp]:"createTextVNode",[xy]:"createStaticVNode",[ap]:"resolveComponent",[ql]:"resolveDynamicComponent",[rp]:"resolveDirective",[sp]:"resolveFilter",[dp]:"withDirectives",[mp]:"renderList",[Yy]:"renderSlot",[Iy]:"createSlots",[Ac]:"toDisplayString",[Kl]:"mergeProps",[lp]:"normalizeClass",[cp]:"normalizeStyle",[Md]:"normalizeProps",[rm]:"guardReactiveProps",[_p]:"toHandlers",[I_]:"camelize",[vv]:"capitalize",[O_]:"toHandlerKey",[Gl]:"setBlockTracking",[Bv]:"pushScopeId",[Pv]:"popScopeId",[gp]:"withCtx",[Ev]:"unref",[Mv]:"isRef",[pp]:"withMemo",[Oy]:"isMemoSame"};function Tv(e){Object.getOwnPropertySymbols(e).forEach(n=>{ts[n]=e[n]})}const gu={source:"",start:{line:1,column:1,offset:0},end:{line:1,column:1,offset:0}};function Sv(e,n=gu){return{type:0,children:e,helpers:[],components:[],directives:[],hoists:[],imports:[],cached:0,temps:0,codegenNode:void 0,loc:n}}function Td(e,n,u,o,i,t,r,s=!1,d=!1,l=!1,c=gu){return e&&(s?(e.helper(Aa),e.helper(ss(e.inSSR,l))):e.helper(rs(e.inSSR,l)),r&&e.helper(dp)),{type:13,tag:n,props:u,children:o,patchFlag:i,dynamicProps:t,directives:r,isBlock:s,disableTracking:d,isComponent:l,loc:c}}function sm(e,n=gu){return{type:17,loc:n,elements:e}}function No(e,n=gu){return{type:15,loc:n,properties:e}}function Kn(e,n){return{type:16,loc:gu,key:Je(e)?nn(e,!0):e,value:n}}function nn(e,n=!1,u=gu,o=0){return{type:4,loc:u,content:e,isStatic:n,constType:n?3:o}}function jR(e,n){return{type:5,loc:n,content:Je(e)?nn(e,!1,n):e}}function ci(e,n=gu){return{type:8,loc:n,children:e}}function Gn(e,n=[],u=gu){return{type:14,loc:u,callee:e,arguments:n}}function as(e,n=void 0,u=!1,o=!1,i=gu){return{type:18,params:e,returns:n,newline:u,isSlot:o,loc:i}}function N_(e,n,u,o=!0){return{type:19,test:e,consequent:n,alternate:u,newline:o,loc:gu}}function Lv(e,n,u=!1){return{type:20,index:e,value:n,isVNode:u,loc:gu}}function Cv(e){return{type:21,body:e,loc:gu}}function DR(e){return{type:22,elements:e,loc:gu}}function vR(e,n,u){return{type:23,test:e,consequent:n,alternate:u,loc:gu}}function BR(e,n){return{type:24,left:e,right:n,loc:gu}}function PR(e){return{type:25,expressions:e,loc:gu}}function ER(e){return{type:26,returns:e,loc:gu}}const bo=e=>e.type===4&&e.isStatic,jr=(e,n)=>e===n||e===$o(n);function Ny(e){if(jr(e,"Teleport"))return dd;if(jr(e,"Suspense"))return up;if(jr(e,"KeepAlive"))return Wl;if(jr(e,"BaseTransition"))return Ly}const MR=/^\d|[^\$\w]/,xc=e=>!MR.test(e),TR=/[A-Za-z_$\xA0-\uFFFF]/,SR=/[\.\?\w$\xA0-\uFFFF]/,LR=/\s+[.[]\s*|\s*[.[]\s+/g,Av=e=>{e=e.trim().replace(LR,r=>r.trim());let n=0,u=[],o=0,i=0,t=null;for(let r=0;r<e.length;r++){const s=e.charAt(r);switch(n){case 0:if(s==="[")u.push(n),n=1,o++;else if(s==="(")u.push(n),n=2,i++;else if(!(r===0?TR:SR).test(s))return!1;break;case 1:s==="'"||s==='"'||s==="`"?(u.push(n),n=3,t=s):s==="["?o++:s==="]"&&(--o||(n=u.pop()));break;case 2:if(s==="'"||s==='"'||s==="`")u.push(n),n=3,t=s;else if(s==="(")i++;else if(s===")"){if(r===e.length-1)return!1;--i||(n=u.pop())}break;case 3:s===t&&(n=u.pop(),t=null);break}}return!o&&!i},CR=io,Ry=Av;function $y(e,n,u){const i={source:e.source.slice(n,n+u),start:Jl(e.start,e.source,n),end:e.end};return u!=null&&(i.end=Jl(e.start,e.source,n+u)),i}function Jl(e,n,u=n.length){return Xl(Fn({},e),n,u)}function Xl(e,n,u=n.length){let o=0,i=-1;for(let t=0;t<u;t++)n.charCodeAt(t)===10&&(o++,i=t);return e.offset+=u,e.line+=o,e.column=i===-1?e.column+u:u-i,e}function AR(e,n){if(!e)throw new Error(n||"unexpected compiler condition")}function _o(e,n,u=!1){for(let o=0;o<e.props.length;o++){const i=e.props[o];if(i.type===7&&(u||i.exp)&&(Je(n)?i.name===n:n.test(i.name)))return i}}function Yc(e,n,u=!1,o=!1){for(let i=0;i<e.props.length;i++){const t=e.props[i];if(t.type===6){if(u)continue;if(t.name===n&&(t.value||o))return t}else if(t.name==="bind"&&(t.exp||o)&&ka(t.arg,n))return t}}function ka(e,n){return!!(e&&bo(e)&&e.content===n)}function xv(e){return e.props.some(n=>n.type===7&&n.name==="bind"&&(!n.arg||n.arg.type!==4||!n.arg.isStatic))}function e_(e){return e.type===5||e.type===2}function Hy(e){return e.type===7&&e.name==="slot"}function Sd(e){return e.type===1&&e.tagType===3}function Ql(e){return e.type===1&&e.tagType===2}function rs(e,n){return e||n?op:ip}function ss(e,n){return e||n?Cy:Ay}const xR=new Set([Md,rm]);function Yv(e,n=[]){if(e&&!Je(e)&&e.type===14){const u=e.callee;if(!Je(u)&&xR.has(u))return Yv(e.arguments[0],n.concat(e))}return[e,n]}function Zl(e,n,u){let o,i=e.type===13?e.props:e.arguments[2],t=[],r;if(i&&!Je(i)&&i.type===14){const s=Yv(i);i=s[0],t=s[1],r=t[t.length-1]}if(i==null||Je(i))o=No([n]);else if(i.type===14){const s=i.arguments[0];!Je(s)&&s.type===15?s.properties.unshift(n):i.callee===_p?o=Gn(u.helper(Kl),[No([n]),i]):i.arguments.unshift(No([n])),!o&&(o=i)}else if(i.type===15){let s=!1;if(n.key.type===4){const d=n.key.content;s=i.properties.some(l=>l.key.type===4&&l.key.content===d)}s||i.properties.unshift(n),o=i}else o=Gn(u.helper(Kl),[No([n]),i]),r&&r.callee===rm&&(r=t[t.length-2]);e.type===13?r?r.arguments[0]=o:e.props=o:r?r.arguments[0]=o:e.arguments[2]=o}function Ld(e,n){return`_${n}_${e.replace(/[^\w]/g,(u,o)=>u==="-"?"_":e.charCodeAt(o).toString())}`}function Li(e,n){if(!e||Object.keys(n).length===0)return!1;switch(e.type){case 1:for(let u=0;u<e.props.length;u++){const o=e.props[u];if(o.type===7&&(Li(o.arg,n)||Li(o.exp,n)))return!0}return e.children.some(u=>Li(u,n));case 11:return Li(e.source,n)?!0:e.children.some(u=>Li(u,n));case 9:return e.branches.some(u=>Li(u,n));case 10:return Li(e.condition,n)?!0:e.children.some(u=>Li(u,n));case 4:return!e.isStatic&&xc(e.content)&&!!n[e.content];case 8:return e.children.some(u=>Nn(u)&&Li(u,n));case 5:case 12:return Li(e.content,n);case 2:case 3:return!1;default:return!1}}function Iv(e){return e.type===14&&e.callee===pp?e.arguments[1].returns:e}function hp(e,{helper:n,removeHelper:u,inSSR:o}){e.isBlock||(e.isBlock=!0,u(rs(o,e.isComponent)),n(Aa),n(ss(o,e.isComponent)))}const YR={COMPILER_IS_ON_ELEMENT:{message:'Platform-native elements with "is" prop will no longer be treated as components in Vue 3 unless the "is" value is explicitly prefixed with "vue:".',link:"https://v3-migration.vuejs.org/breaking-changes/custom-elements-interop.html"},COMPILER_V_BIND_SYNC:{message:e=>`.sync modifier for v-bind has been removed. Use v-model with argument instead. \`v-bind:${e}.sync\` should be changed to \`v-model:${e}\`.`,link:"https://v3-migration.vuejs.org/breaking-changes/v-model.html"},COMPILER_V_BIND_PROP:{message:".prop modifier for v-bind has been removed and no longer necessary. Vue 3 will automatically set a binding as DOM property when appropriate."},COMPILER_V_BIND_OBJECT_ORDER:{message:'v-bind="obj" usage is now order sensitive and behaves like JavaScript object spread: it will now overwrite an existing non-mergeable attribute that appears before v-bind in the case of conflict. To retain 2.x behavior, move v-bind to make it the first attribute. You can also suppress this warning if the usage is intended.',link:"https://v3-migration.vuejs.org/breaking-changes/v-bind.html"},COMPILER_V_ON_NATIVE:{message:".native modifier for v-on has been removed as is no longer necessary.",link:"https://v3-migration.vuejs.org/breaking-changes/v-on-native-modifier-removed.html"},COMPILER_V_IF_V_FOR_PRECEDENCE:{message:"v-if / v-for precedence when used on the same element has changed in Vue 3: v-if now takes higher precedence and will no longer have access to v-for scope variables. It is best to avoid the ambiguity with <template> tags or use a computed property that filters v-for data source.",link:"https://v3-migration.vuejs.org/breaking-changes/v-if-v-for.html"},COMPILER_NATIVE_TEMPLATE:{message:"<template> with no special directives will render as a native template element instead of its inner content in Vue 3."},COMPILER_INLINE_TEMPLATE:{message:'"inline-template" has been removed in Vue 3.',link:"https://v3-migration.vuejs.org/breaking-changes/inline-template-attribute.html"},COMPILER_FILTER:{message:'filters have been removed in Vue 3. The "|" symbol will be treated as native JavaScript bitwise OR operator. Use method calls or computed properties instead.',link:"https://v3-migration.vuejs.org/breaking-changes/filters.html"}};function tk(e,n){const u=n.options?n.options.compatConfig:n.compatConfig,o=u&&u[e];return e==="MODE"?o||3:o}function xr(e,n){const u=tk("MODE",n),o=tk(e,n);return u===3?o===!0:o!==!1}function Cd(e,n,u,...o){return xr(e,n)}function IR(e,n,u,...o){if(tk(e,n)==="suppress-warning")return;const{message:t,link:r}=YR[e],s=`(deprecation ${e}) ${typeof t=="function"?t(...o):t}${r?`
  Details: ${r}`:""}`,d=new SyntaxError(s);d.code=e,u&&(d.loc=u),n.onWarn(d)}const OR=/&(gt|lt|amp|apos|quot);/g,NR={gt:">",lt:"<",amp:"&",apos:"'",quot:'"'},z2={delimiters:["{{","}}"],getNamespace:()=>0,getTextMode:()=>0,isVoidTag:ml,isPreTag:ml,isCustomElement:ml,decodeEntities:e=>e.replace(OR,(n,u)=>NR[u]),onError:Sy,onWarn:Dv,comments:!1};function Uy(e,n={}){const u=RR(e,n),o=Ho(u);return Sv(zy(u,0,[]),pi(u,o))}function RR(e,n){const u=Fn({},z2);let o;for(o in n)u[o]=n[o]===void 0?z2[o]:n[o];return{options:u,column:1,line:1,offset:0,originalSource:e,source:e,inPre:!1,inVPre:!1,onWarn:u.onWarn}}function zy(e,n,u){const o=kp(u),i=o?o.ns:0,t=[];for(;!GR(e,n,u);){const s=e.source;let d;if(n===0||n===1){if(!e.inVPre&&Ou(s,e.options.delimiters[0]))d=qR(e,n);else if(n===0&&s[0]==="<")if(s.length===1)Bn(e,5,1);else if(s[1]==="!")Ou(s,"<!--")?d=HR(e):Ou(s,"<!DOCTYPE")?d=xm(e):Ou(s,"<![CDATA[")?i!==0?d=$R(e,u):(Bn(e,1),d=xm(e)):(Bn(e,11),d=xm(e));else if(s[1]==="/")if(s.length===2)Bn(e,5,2);else if(s[2]===">"){Bn(e,14,2),cu(e,3);continue}else if(/[a-z]/i.test(s[2])){Bn(e,23),ak(e,1,o);continue}else Bn(e,12,2),d=xm(e);else/[a-z]/i.test(s[1])?(d=UR(e,u),xr("COMPILER_NATIVE_TEMPLATE",e)&&d&&d.tag==="template"&&!d.props.some(l=>l.type===7&&Ov(l.name))&&(d=d.children)):s[1]==="?"?(Bn(e,21,1),d=xm(e)):Bn(e,12,1)}if(d||(d=KR(e,n)),ve(d))for(let l=0;l<d.length;l++)V2(t,d[l]);else V2(t,d)}let r=!1;if(n!==2&&n!==1){const s=e.options.whitespace!=="preserve";for(let d=0;d<t.length;d++){const l=t[d];if(!e.inPre&&l.type===2)if(/[^\t\r\n\f ]/.test(l.content))s&&(l.content=l.content.replace(/[\t\r\n\f ]+/g," "));else{const c=t[d-1],_=t[d+1];!c||!_||s&&(c.type===3||_.type===3||c.type===1&&_.type===1&&/[\r\n]/.test(l.content))?(r=!0,t[d]=null):l.content=" "}else l.type===3&&!e.options.comments&&(r=!0,t[d]=null)}if(e.inPre&&o&&e.options.isPreTag(o.tag)){const d=t[0];d&&d.type===2&&(d.content=d.content.replace(/^\r?\n/,""))}}return r?t.filter(Boolean):t}function V2(e,n){if(n.type===2){const u=kp(e);if(u&&u.type===2&&u.loc.end.offset===n.loc.start.offset){u.content+=n.content,u.loc.end=n.loc.end,u.loc.source+=n.loc.source;return}}e.push(n)}function $R(e,n){cu(e,9);const u=zy(e,3,n);return e.source.length===0?Bn(e,6):cu(e,3),u}function HR(e){const n=Ho(e);let u;const o=/--(\!)?>/.exec(e.source);if(!o)u=e.source.slice(4),cu(e,e.source.length),Bn(e,7);else{o.index<=3&&Bn(e,0),o[1]&&Bn(e,10),u=e.source.slice(4,o.index);const i=e.source.slice(0,o.index);let t=1,r=0;for(;(r=i.indexOf("<!--",t))!==-1;)cu(e,r-t+1),r+4<i.length&&Bn(e,16),t=r+1;cu(e,o.index+o[0].length-t+1)}return{type:3,content:u,loc:pi(e,n)}}function xm(e){const n=Ho(e),u=e.source[1]==="?"?1:2;let o;const i=e.source.indexOf(">");return i===-1?(o=e.source.slice(u),cu(e,e.source.length)):(o=e.source.slice(u,i),cu(e,i+1)),{type:3,content:o,loc:pi(e,n)}}function UR(e,n){const u=e.inPre,o=e.inVPre,i=kp(n),t=ak(e,0,i),r=e.inPre&&!u,s=e.inVPre&&!o;if(t.isSelfClosing||e.options.isVoidTag(t.tag))return r&&(e.inPre=!1),s&&(e.inVPre=!1),t;n.push(t);const d=e.options.getTextMode(t,i),l=zy(e,d,n);n.pop();{const c=t.props.find(_=>_.type===6&&_.name==="inline-template");if(c&&Cd("COMPILER_INLINE_TEMPLATE",e,c.loc)){const _=pi(e,t.loc.end);c.value={type:2,content:_.source,loc:_}}}if(t.children=l,rk(e.source,t.tag))ak(e,1,i);else if(Bn(e,24,0,t.loc.start),e.source.length===0&&t.tag.toLowerCase()==="script"){const c=l[0];c&&Ou(c.loc.source,"<!--")&&Bn(e,8)}return t.loc=pi(e,t.loc.start),r&&(e.inPre=!1),s&&(e.inVPre=!1),t}const Ov=_u("if,else,else-if,for,slot");function ak(e,n,u){const o=Ho(e),i=/^<\/?([a-z][^\t\r\n\f />]*)/i.exec(e.source),t=i[1],r=e.options.getNamespace(t,u);cu(e,i[0].length),ec(e);const s=Ho(e),d=e.source;e.options.isPreTag(t)&&(e.inPre=!0);let l=W2(e,n);n===0&&!e.inVPre&&l.some(p=>p.type===7&&p.name==="pre")&&(e.inVPre=!0,Fn(e,s),e.source=d,l=W2(e,n).filter(p=>p.name!=="v-pre"));let c=!1;if(e.source.length===0?Bn(e,9):(c=Ou(e.source,"/>"),n===1&&c&&Bn(e,4),cu(e,c?2:1)),n===1)return;let _=0;return e.inVPre||(t==="slot"?_=2:t==="template"?l.some(p=>p.type===7&&Ov(p.name))&&(_=3):zR(t,l,e)&&(_=1)),{type:1,ns:r,tag:t,tagType:_,props:l,isSelfClosing:c,children:[],loc:pi(e,o),codegenNode:void 0}}function zR(e,n,u){const o=u.options;if(o.isCustomElement(e))return!1;if(e==="component"||/^[A-Z]/.test(e)||Ny(e)||o.isBuiltInComponent&&o.isBuiltInComponent(e)||o.isNativeTag&&!o.isNativeTag(e))return!0;for(let i=0;i<n.length;i++){const t=n[i];if(t.type===6){if(t.name==="is"&&t.value){if(t.value.content.startsWith("vue:"))return!0;if(Cd("COMPILER_IS_ON_ELEMENT",u,t.loc))return!0}}else{if(t.name==="is")return!0;if(t.name==="bind"&&ka(t.arg,"is")&&!0&&Cd("COMPILER_IS_ON_ELEMENT",u,t.loc))return!0}}}function W2(e,n){const u=[],o=new Set;for(;e.source.length>0&&!Ou(e.source,">")&&!Ou(e.source,"/>");){if(Ou(e.source,"/")){Bn(e,22),cu(e,1),ec(e);continue}n===1&&Bn(e,3);const i=VR(e,o);i.type===6&&i.value&&i.name==="class"&&(i.value.content=i.value.content.replace(/\s+/g," ").trim()),n===0&&u.push(i),/^[^\t\r\n\f />]/.test(e.source)&&Bn(e,15),ec(e)}return u}function VR(e,n){const u=Ho(e),i=/^[^\t\r\n\f />][^\t\r\n\f />=]*/.exec(e.source)[0];n.has(i)&&Bn(e,2),n.add(i),i[0]==="="&&Bn(e,19);{const s=/["'<]/g;let d;for(;d=s.exec(i);)Bn(e,17,d.index)}cu(e,i.length);let t;/^[\t\r\n\f ]*=/.test(e.source)&&(ec(e),cu(e,1),ec(e),t=WR(e),t||Bn(e,13));const r=pi(e,u);if(!e.inVPre&&/^(v-[A-Za-z0-9-]|:|\.|@|#)/.test(i)){const s=/(?:^v-([a-z0-9-]+))?(?:(?::|^\.|^@|^#)(\[[^\]]+\]|[^\.]+))?(.+)?$/i.exec(i);let d=Ou(i,"."),l=s[1]||(d||Ou(i,":")?"bind":Ou(i,"@")?"on":"slot"),c;if(s[2]){const p=l==="slot",f=i.lastIndexOf(s[2]),y=pi(e,q2(e,u,f),q2(e,u,f+s[2].length+(p&&s[3]||"").length));let D=s[2],P=!0;D.startsWith("[")?(P=!1,D.endsWith("]")?D=D.slice(1,D.length-1):(Bn(e,27),D=D.slice(1))):p&&(D+=s[3]||""),c={type:4,content:D,isStatic:P,constType:P?3:0,loc:y}}if(t&&t.isQuoted){const p=t.loc;p.start.offset++,p.start.column++,p.end=Jl(p.start,t.content),p.source=p.source.slice(1,-1)}const _=s[3]?s[3].slice(1).split("."):[];return d&&_.push("prop"),l==="bind"&&c&&_.includes("sync")&&Cd("COMPILER_V_BIND_SYNC",e,r,c.loc.source)&&(l="model",_.splice(_.indexOf("sync"),1)),{type:7,name:l,exp:t&&{type:4,content:t.content,isStatic:!1,constType:0,loc:t.loc},arg:c,modifiers:_,loc:r}}return!e.inVPre&&Ou(i,"v-")&&Bn(e,26),{type:6,name:i,value:t&&{type:2,content:t.content,loc:t.loc},loc:r}}function WR(e){const n=Ho(e);let u;const o=e.source[0],i=o==='"'||o==="'";if(i){cu(e,1);const t=e.source.indexOf(o);t===-1?u=ll(e,e.source.length,4):(u=ll(e,t,4),cu(e,1))}else{const t=/^[^\t\r\n\f >]+/.exec(e.source);if(!t)return;const r=/["'<=`]/g;let s;for(;s=r.exec(t[0]);)Bn(e,18,s.index);u=ll(e,t[0].length,4)}return{content:u,isQuoted:i,loc:pi(e,n)}}function qR(e,n){const[u,o]=e.options.delimiters,i=e.source.indexOf(o,u.length);if(i===-1){Bn(e,25);return}const t=Ho(e);cu(e,u.length);const r=Ho(e),s=Ho(e),d=i-u.length,l=e.source.slice(0,d),c=ll(e,d,n),_=c.trim(),p=c.indexOf(_);p>0&&Xl(r,l,p);const f=d-(c.length-_.length-p);return Xl(s,l,f),cu(e,o.length),{type:5,content:{type:4,isStatic:!1,constType:0,content:_,loc:pi(e,r,s)},loc:pi(e,t)}}function KR(e,n){const u=n===3?["]]>"]:["<",e.options.delimiters[0]];let o=e.source.length;for(let r=0;r<u.length;r++){const s=e.source.indexOf(u[r],1);s!==-1&&o>s&&(o=s)}const i=Ho(e),t=ll(e,o,n);return{type:2,content:t,loc:pi(e,i)}}function ll(e,n,u){const o=e.source.slice(0,n);return cu(e,n),u===2||u===3||!o.includes("&")?o:e.options.decodeEntities(o,u===4)}function Ho(e){const{column:n,line:u,offset:o}=e;return{column:n,line:u,offset:o}}function pi(e,n,u){return u=u||Ho(e),{start:n,end:u,source:e.originalSource.slice(n.offset,u.offset)}}function kp(e){return e[e.length-1]}function Ou(e,n){return e.startsWith(n)}function cu(e,n){const{source:u}=e;Xl(e,u,n),e.source=u.slice(n)}function ec(e){const n=/^[\t\r\n\f ]+/.exec(e.source);n&&cu(e,n[0].length)}function q2(e,n,u){return Jl(n,e.originalSource.slice(n.offset,u),u)}function Bn(e,n,u,o=Ho(e)){u&&(o.offset+=u,o.column+=u),e.options.onError($n(n,{start:o,end:o,source:""}))}function GR(e,n,u){const o=e.source;switch(n){case 0:if(Ou(o,"</")){for(let i=u.length-1;i>=0;--i)if(rk(o,u[i].tag))return!0}break;case 1:case 2:{const i=kp(u);if(i&&rk(o,i.tag))return!0;break}case 3:if(Ou(o,"]]>"))return!0;break}return!o}function rk(e,n){return Ou(e,"</")&&e.slice(2,2+n.length).toLowerCase()===n.toLowerCase()&&/[\t\r\n\f />]/.test(e[2+n.length]||">")}function JR(e,n){n_(e,n,Nv(e,e.children[0]))}function Nv(e,n){const{children:u}=e;return u.length===1&&n.type===1&&!Ql(n)}function n_(e,n,u=!1){const{children:o}=e,i=o.length;let t=0;for(let r=0;r<o.length;r++){const s=o[r];if(s.type===1&&s.tagType===0){const d=u?0:ko(s,n);if(d>0){if(d>=2){s.codegenNode.patchFlag=-1+"",s.codegenNode=n.hoist(s.codegenNode),t++;continue}}else{const l=s.codegenNode;if(l.type===13){const c=Uv(l);if((!c||c===512||c===1)&&$v(s,n)>=2){const _=Hv(s);_&&(l.props=n.hoist(_))}l.dynamicProps&&(l.dynamicProps=n.hoist(l.dynamicProps))}}}else s.type===12&&ko(s.content,n)>=2&&(s.codegenNode=n.hoist(s.codegenNode),t++);if(s.type===1){const d=s.tagType===1;d&&n.scopes.vSlot++,n_(s,n),d&&n.scopes.vSlot--}else if(s.type===11)n_(s,n,s.children.length===1);else if(s.type===9)for(let d=0;d<s.branches.length;d++)n_(s.branches[d],n,s.branches[d].children.length===1)}t&&n.transformHoist&&n.transformHoist(o,n,e),t&&t===i&&e.type===1&&e.tagType===0&&e.codegenNode&&e.codegenNode.type===13&&ve(e.codegenNode.children)&&(e.codegenNode.children=n.hoist(sm(e.codegenNode.children)))}function ko(e,n){const{constantCache:u}=n;switch(e.type){case 1:if(e.tagType!==0)return 0;const o=u.get(e);if(o!==void 0)return o;const i=e.codegenNode;if(i.type!==13||i.isBlock&&e.tag!=="svg"&&e.tag!=="foreignObject")return 0;if(Uv(i))return u.set(e,0),0;{let s=3;const d=$v(e,n);if(d===0)return u.set(e,0),0;d<s&&(s=d);for(let l=0;l<e.children.length;l++){const c=ko(e.children[l],n);if(c===0)return u.set(e,0),0;c<s&&(s=c)}if(s>1)for(let l=0;l<e.props.length;l++){const c=e.props[l];if(c.type===7&&c.name==="bind"&&c.exp){const _=ko(c.exp,n);if(_===0)return u.set(e,0),0;_<s&&(s=_)}}if(i.isBlock){for(let l=0;l<e.props.length;l++)if(e.props[l].type===7)return u.set(e,0),0;n.removeHelper(Aa),n.removeHelper(ss(n.inSSR,i.isComponent)),i.isBlock=!1,n.helper(rs(n.inSSR,i.isComponent))}return u.set(e,s),s}case 2:case 3:return 3;case 9:case 11:case 10:return 0;case 5:case 12:return ko(e.content,n);case 4:return e.constType;case 8:let r=3;for(let s=0;s<e.children.length;s++){const d=e.children[s];if(Je(d)||xt(d))continue;const l=ko(d,n);if(l===0)return 0;l<r&&(r=l)}return r;default:return 0}}const XR=new Set([lp,cp,Md,rm]);function Rv(e,n){if(e.type===14&&!Je(e.callee)&&XR.has(e.callee)){const u=e.arguments[0];if(u.type===4)return ko(u,n);if(u.type===14)return Rv(u,n)}return 0}function $v(e,n){let u=3;const o=Hv(e);if(o&&o.type===15){const{properties:i}=o;for(let t=0;t<i.length;t++){const{key:r,value:s}=i[t],d=ko(r,n);if(d===0)return d;d<u&&(u=d);let l;if(s.type===4?l=ko(s,n):s.type===14?l=Rv(s,n):l=0,l===0)return l;l<u&&(u=l)}}return u}function Hv(e){const n=e.codegenNode;if(n.type===13)return n.props}function Uv(e){const n=e.patchFlag;return n?parseInt(n,10):void 0}function zv(e,{filename:n="",prefixIdentifiers:u=!1,hoistStatic:o=!1,cacheHandlers:i=!1,nodeTransforms:t=[],directiveTransforms:r={},transformHoist:s=null,isBuiltInComponent:d=io,isCustomElement:l=io,expressionPlugins:c=[],scopeId:_=null,slotted:p=!0,ssr:f=!1,inSSR:y=!1,ssrCssVars:D="",bindingMetadata:P=fn,inline:v=!1,isTS:j=!1,onError:M=Sy,onWarn:S=Dv,compatConfig:$}){const C=n.replace(/\?.*$/,"").match(/([^/\\]+)\.\w+$/),L={selfName:C&&Wa(Su(C[1])),prefixIdentifiers:u,hoistStatic:o,cacheHandlers:i,nodeTransforms:t,directiveTransforms:r,transformHoist:s,isBuiltInComponent:d,isCustomElement:l,expressionPlugins:c,scopeId:_,slotted:p,ssr:f,inSSR:y,ssrCssVars:D,bindingMetadata:P,inline:v,isTS:j,onError:M,onWarn:S,compatConfig:$,root:e,helpers:new Map,components:new Set,directives:new Set,hoists:[],imports:[],constantCache:new Map,temps:0,cached:0,identifiers:Object.create(null),scopes:{vFor:0,vSlot:0,vPre:0,vOnce:0},parent:null,currentNode:e,childIndex:0,inVOnce:!1,helper(T){const q=L.helpers.get(T)||0;return L.helpers.set(T,q+1),T},removeHelper(T){const q=L.helpers.get(T);if(q){const V=q-1;V?L.helpers.set(T,V):L.helpers.delete(T)}},helperString(T){return`_${ts[L.helper(T)]}`},replaceNode(T){L.parent.children[L.childIndex]=L.currentNode=T},removeNode(T){const q=L.parent.children,V=T?q.indexOf(T):L.currentNode?L.childIndex:-1;!T||T===L.currentNode?(L.currentNode=null,L.onNodeRemoved()):L.childIndex>V&&(L.childIndex--,L.onNodeRemoved()),L.parent.children.splice(V,1)},onNodeRemoved:()=>{},addIdentifiers(T){},removeIdentifiers(T){},hoist(T){Je(T)&&(T=nn(T)),L.hoists.push(T);const q=nn(`_hoisted_${L.hoists.length}`,!1,T.loc,2);return q.hoisted=T,q},cache(T,q=!1){return Lv(L.cached++,T,q)}};return L.filters=new Set,L}function Vv(e,n){const u=zv(e,n);Ic(e,u),n.hoistStatic&&JR(e,u),n.ssr||QR(e,u),e.helpers=[...u.helpers.keys()],e.components=[...u.components],e.directives=[...u.directives],e.imports=u.imports,e.hoists=u.hoists,e.temps=u.temps,e.cached=u.cached,e.filters=[...u.filters]}function QR(e,n){const{helper:u}=n,{children:o}=e;if(o.length===1){const i=o[0];if(Nv(e,i)&&i.codegenNode){const t=i.codegenNode;t.type===13&&hp(t,n),e.codegenNode=t}else e.codegenNode=i}else if(o.length>1){let i=64;By[64],e.codegenNode=Td(n,u(Ed),void 0,e.children,i+"",void 0,void 0,!0,void 0,!1)}}function ZR(e,n){let u=0;const o=()=>{u--};for(;u<e.children.length;u++){const i=e.children[u];Je(i)||(n.parent=e,n.childIndex=u,n.onNodeRemoved=o,Ic(i,n))}}function Ic(e,n){n.currentNode=e;const{nodeTransforms:u}=n,o=[];for(let t=0;t<u.length;t++){const r=u[t](e,n);if(r&&(ve(r)?o.push(...r):o.push(r)),n.currentNode)e=n.currentNode;else return}switch(e.type){case 3:n.ssr||n.helper(am);break;case 5:n.ssr||n.helper(Ac);break;case 9:for(let t=0;t<e.branches.length;t++)Ic(e.branches[t],n);break;case 10:case 11:case 1:case 0:ZR(e,n);break}n.currentNode=e;let i=o.length;for(;i--;)o[i]()}function Vy(e,n){const u=Je(e)?o=>o===e:o=>e.test(o);return(o,i)=>{if(o.type===1){const{props:t}=o;if(o.tagType===3&&t.some(Hy))return;const r=[];for(let s=0;s<t.length;s++){const d=t[s];if(d.type===7&&u(d.name)){t.splice(s,1),s--;const l=n(o,d,i);l&&r.push(l)}}return r}}}const fp="/*#__PURE__*/",Wv=e=>`${ts[e]}: _${ts[e]}`;function e$(e,{mode:n="function",prefixIdentifiers:u=n==="module",sourceMap:o=!1,filename:i="template.vue.html",scopeId:t=null,optimizeImports:r=!1,runtimeGlobalName:s="Vue",runtimeModuleName:d="vue",ssrRuntimeModuleName:l="vue/server-renderer",ssr:c=!1,isTS:_=!1,inSSR:p=!1}){const f={mode:n,prefixIdentifiers:u,sourceMap:o,filename:i,scopeId:t,optimizeImports:r,runtimeGlobalName:s,runtimeModuleName:d,ssrRuntimeModuleName:l,ssr:c,isTS:_,inSSR:p,source:e.loc.source,code:"",column:1,line:1,offset:0,indentLevel:0,pure:!1,map:void 0,helper(D){return`_${ts[D]}`},push(D,P){f.code+=D},indent(){y(++f.indentLevel)},deindent(D=!1){D?--f.indentLevel:y(--f.indentLevel)},newline(){y(f.indentLevel)}};function y(D){f.push(`
`+"  ".repeat(D))}return f}function qv(e,n={}){const u=e$(e,n);n.onContextCreated&&n.onContextCreated(u);const{mode:o,push:i,prefixIdentifiers:t,indent:r,deindent:s,newline:d,scopeId:l,ssr:c}=u,_=e.helpers.length>0,p=!t&&o!=="module";n$(e,u);const y=c?"ssrRender":"render",P=(c?["_ctx","_push","_parent","_attrs"]:["_ctx","_cache"]).join(", ");if(i(`function ${y}(${P}) {`),r(),p&&(i("with (_ctx) {"),r(),_&&(i(`const { ${e.helpers.map(Wv).join(", ")} } = _Vue`),i(`
`),d())),e.components.length&&($h(e.components,"component",u),(e.directives.length||e.temps>0)&&d()),e.directives.length&&($h(e.directives,"directive",u),e.temps>0&&d()),e.filters&&e.filters.length&&(d(),$h(e.filters,"filter",u),d()),e.temps>0){i("let ");for(let v=0;v<e.temps;v++)i(`${v>0?", ":""}_temp${v}`)}return(e.components.length||e.directives.length||e.temps)&&(i(`
`),d()),c||i("return "),e.codegenNode?Hu(e.codegenNode,u):i("null"),p&&(s(),i("}")),s(),i("}"),{ast:e,code:u.code,preamble:"",map:u.map?u.map.toJSON():void 0}}function n$(e,n){const{ssr:u,prefixIdentifiers:o,push:i,newline:t,runtimeModuleName:r,runtimeGlobalName:s,ssrRuntimeModuleName:d}=n,l=s;if(e.helpers.length>0&&(i(`const _Vue = ${l}
`),e.hoists.length)){const c=[op,ip,am,tp,xy].filter(_=>e.helpers.includes(_)).map(Wv).join(", ");i(`const { ${c} } = _Vue
`)}u$(e.hoists,n),t(),i("return ")}function $h(e,n,{helper:u,push:o,newline:i,isTS:t}){const r=u(n==="filter"?sp:n==="component"?ap:rp);for(let s=0;s<e.length;s++){let d=e[s];const l=d.endsWith("__self");l&&(d=d.slice(0,-6)),o(`const ${Ld(d,n)} = ${r}(${JSON.stringify(d)}${l?", true":""})${t?"!":""}`),s<e.length-1&&i()}}function u$(e,n){if(!e.length)return;n.pure=!0;const{push:u,newline:o,helper:i,scopeId:t,mode:r}=n;o();for(let s=0;s<e.length;s++){const d=e[s];d&&(u(`const _hoisted_${s+1} = `),Hu(d,n),o())}n.pure=!1}function Wy(e,n){const u=e.length>3||!1;n.push("["),u&&n.indent(),Oc(e,n,u),u&&n.deindent(),n.push("]")}function Oc(e,n,u=!1,o=!0){const{push:i,newline:t}=n;for(let r=0;r<e.length;r++){const s=e[r];Je(s)?i(s):ve(s)?Wy(s,n):Hu(s,n),r<e.length-1&&(u?(o&&i(","),t()):o&&i(", "))}}function Hu(e,n){if(Je(e)){n.push(e);return}if(xt(e)){n.push(n.helper(e));return}switch(e.type){case 1:case 9:case 11:Hu(e.codegenNode,n);break;case 2:o$(e,n);break;case 4:Kv(e,n);break;case 5:i$(e,n);break;case 12:Hu(e.codegenNode,n);break;case 8:Gv(e,n);break;case 3:a$(e,n);break;case 13:r$(e,n);break;case 14:d$(e,n);break;case 15:m$(e,n);break;case 17:l$(e,n);break;case 18:c$(e,n);break;case 19:_$(e,n);break;case 20:g$(e,n);break;case 21:Oc(e.body,n,!0,!1);break}}function o$(e,n){n.push(JSON.stringify(e.content),e)}function Kv(e,n){const{content:u,isStatic:o}=e;n.push(o?JSON.stringify(u):u,e)}function i$(e,n){const{push:u,helper:o,pure:i}=n;i&&u(fp),u(`${o(Ac)}(`),Hu(e.content,n),u(")")}function Gv(e,n){for(let u=0;u<e.children.length;u++){const o=e.children[u];Je(o)?n.push(o):Hu(o,n)}}function t$(e,n){const{push:u}=n;if(e.type===8)u("["),Gv(e,n),u("]");else if(e.isStatic){const o=xc(e.content)?e.content:JSON.stringify(e.content);u(o,e)}else u(`[${e.content}]`,e)}function a$(e,n){const{push:u,helper:o,pure:i}=n;i&&u(fp),u(`${o(am)}(${JSON.stringify(e.content)})`,e)}function r$(e,n){const{push:u,helper:o,pure:i}=n,{tag:t,props:r,children:s,patchFlag:d,dynamicProps:l,directives:c,isBlock:_,disableTracking:p,isComponent:f}=e;c&&u(o(dp)+"("),_&&u(`(${o(Aa)}(${p?"true":""}), `),i&&u(fp);const y=_?ss(n.inSSR,f):rs(n.inSSR,f);u(o(y)+"(",e),Oc(s$([t,r,s,d,l]),n),u(")"),_&&u(")"),c&&(u(", "),Hu(c,n),u(")"))}function s$(e){let n=e.length;for(;n--&&e[n]==null;);return e.slice(0,n+1).map(u=>u||"null")}function d$(e,n){const{push:u,helper:o,pure:i}=n,t=Je(e.callee)?e.callee:o(e.callee);i&&u(fp),u(t+"(",e),Oc(e.arguments,n),u(")")}function m$(e,n){const{push:u,indent:o,deindent:i,newline:t}=n,{properties:r}=e;if(!r.length){u("{}",e);return}const s=r.length>1||!1;u(s?"{":"{ "),s&&o();for(let d=0;d<r.length;d++){const{key:l,value:c}=r[d];t$(l,n),u(": "),Hu(c,n),d<r.length-1&&(u(","),t())}s&&i(),u(s?"}":" }")}function l$(e,n){Wy(e.elements,n)}function c$(e,n){const{push:u,indent:o,deindent:i}=n,{params:t,returns:r,body:s,newline:d,isSlot:l}=e;l&&u(`_${ts[gp]}(`),u("(",e),ve(t)?Oc(t,n):t&&Hu(t,n),u(") => "),(d||s)&&(u("{"),o()),r?(d&&u("return "),ve(r)?Wy(r,n):Hu(r,n)):s&&Hu(s,n),(d||s)&&(i(),u("}")),l&&(e.isNonScopedSlot&&u(", undefined, true"),u(")"))}function _$(e,n){const{test:u,consequent:o,alternate:i,newline:t}=e,{push:r,indent:s,deindent:d,newline:l}=n;if(u.type===4){const _=!xc(u.content);_&&r("("),Kv(u,n),_&&r(")")}else r("("),Hu(u,n),r(")");t&&s(),n.indentLevel++,t||r(" "),r("? "),Hu(o,n),n.indentLevel--,t&&l(),t||r(" "),r(": ");const c=i.type===19;c||n.indentLevel++,Hu(i,n),c||n.indentLevel--,t&&d(!0)}function g$(e,n){const{push:u,helper:o,indent:i,deindent:t,newline:r}=n;u(`_cache[${e.index}] || (`),e.isVNode&&(i(),u(`${o(Gl)}(-1),`),r()),u(`_cache[${e.index}] = `),Hu(e.value,n),e.isVNode&&(u(","),r(),u(`${o(Gl)}(1),`),r(),u(`_cache[${e.index}]`),t()),u(")")}function p$(e,n,u=!1,o=[],i=Object.create(null)){}function h$(e,n,u){return!1}function k$(e,n){if(e&&(e.type==="ObjectProperty"||e.type==="ArrayPattern")){let u=n.length;for(;u--;){const o=n[u];if(o.type==="AssignmentExpression")return!0;if(o.type!=="ObjectProperty"&&!o.type.endsWith("Pattern"))break}}return!1}function f$(e,n){for(const u of e.params)for(const o of ha(u))n(o)}function y$(e,n){for(const u of e.body)if(u.type==="VariableDeclaration"){if(u.declare)continue;for(const o of u.declarations)for(const i of ha(o.id))n(i)}else if(u.type==="FunctionDeclaration"||u.type==="ClassDeclaration"){if(u.declare||!u.id)continue;n(u.id)}}function ha(e,n=[]){switch(e.type){case"Identifier":n.push(e);break;case"MemberExpression":let u=e;for(;u.type==="MemberExpression";)u=u.object;n.push(u);break;case"ObjectPattern":for(const o of e.properties)o.type==="RestElement"?ha(o.argument,n):ha(o.value,n);break;case"ArrayPattern":e.elements.forEach(o=>{o&&ha(o,n)});break;case"RestElement":ha(e.argument,n);break;case"AssignmentPattern":ha(e.left,n);break}return n}const F$=e=>/Function(?:Expression|Declaration)$|Method$/.test(e.type),Jv=e=>e&&(e.type==="ObjectProperty"||e.type==="ObjectMethod")&&!e.computed,b$=(e,n)=>Jv(n)&&n.key===e;new RegExp("\\b"+"do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments,typeof,void".split(",").join("\\b|\\b")+"\\b");const w$=(e,n)=>{if(e.type===5)e.content=u_(e.content,n);else if(e.type===1)for(let u=0;u<e.props.length;u++){const o=e.props[u];if(o.type===7&&o.name!=="for"){const i=o.exp,t=o.arg;i&&i.type===4&&!(o.name==="on"&&t)&&(o.exp=u_(i,n,o.name==="slot")),t&&t.type===4&&!t.isStatic&&(o.arg=u_(t,n))}}};function u_(e,n,u=!1,o=!1,i=Object.create(n.identifiers)){return e}const j$=Vy(/^(if|else|else-if)$/,(e,n,u)=>Xv(e,n,u,(o,i,t)=>{const r=u.parent.children;let s=r.indexOf(o),d=0;for(;s-->=0;){const l=r[s];l&&l.type===9&&(d+=l.branches.length)}return()=>{if(t)o.codegenNode=G2(i,d,u);else{const l=D$(o.codegenNode);l.alternate=G2(i,d+o.branches.length-1,u)}}}));function Xv(e,n,u,o){if(n.name!=="else"&&(!n.exp||!n.exp.content.trim())){const i=n.exp?n.exp.loc:e.loc;u.onError($n(28,n.loc)),n.exp=nn("true",!1,i)}if(n.name==="if"){const i=K2(e,n),t={type:9,loc:e.loc,branches:[i]};if(u.replaceNode(t),o)return o(t,i,!0)}else{const i=u.parent.children;let t=i.indexOf(e);for(;t-->=-1;){const r=i[t];if(r&&r.type===2&&!r.content.trim().length){u.removeNode(r);continue}if(r&&r.type===9){n.name==="else-if"&&r.branches[r.branches.length-1].condition===void 0&&u.onError($n(30,e.loc)),u.removeNode();const s=K2(e,n);r.branches.push(s);const d=o&&o(r,s,!1);Ic(s,u),d&&d(),u.currentNode=null}else u.onError($n(30,e.loc));break}}}function K2(e,n){const u=e.tagType===3;return{type:10,loc:e.loc,condition:n.name==="else"?void 0:n.exp,children:u&&!_o(e,"for")?e.children:[e],userKey:Yc(e,"key"),isTemplateIf:u}}function G2(e,n,u){return e.condition?N_(e.condition,J2(e,n,u),Gn(u.helper(am),['""',"true"])):J2(e,n,u)}function J2(e,n,u){const{helper:o}=u,i=Kn("key",nn(`${n}`,!1,gu,2)),{children:t}=e,r=t[0];if(t.length!==1||r.type!==1)if(t.length===1&&r.type===11){const d=r.codegenNode;return Zl(d,i,u),d}else{let d=64;return By[64],Td(u,o(Ed),No([i]),t,d+"",void 0,void 0,!0,!1,!1,e.loc)}else{const d=r.codegenNode,l=Iv(d);return l.type===13&&hp(l,u),Zl(l,i,u),d}}function D$(e){for(;;)if(e.type===19)if(e.alternate.type===19)e=e.alternate;else return e;else e.type===20&&(e=e.value)}const v$=Vy("for",(e,n,u)=>{const{helper:o,removeHelper:i}=u;return Qv(e,n,u,t=>{const r=Gn(o(mp),[t.source]),s=Sd(e),d=_o(e,"memo"),l=Yc(e,"key"),c=l&&(l.type===6?nn(l.value.content,!0):l.exp),_=l?Kn("key",c):null,p=t.source.type===4&&t.source.constType>0,f=p?64:l?128:256;return t.codegenNode=Td(u,o(Ed),void 0,r,f+"",void 0,void 0,!0,!p,!1,e.loc),()=>{let y;const{children:D}=t,P=D.length!==1||D[0].type!==1,v=Ql(e)?e:s&&e.children.length===1&&Ql(e.children[0])?e.children[0]:null;if(v?(y=v.codegenNode,s&&_&&Zl(y,_,u)):P?y=Td(u,o(Ed),_?No([_]):void 0,e.children,64+"",void 0,void 0,!0,void 0,!1):(y=D[0].codegenNode,s&&_&&Zl(y,_,u),y.isBlock!==!p&&(y.isBlock?(i(Aa),i(ss(u.inSSR,y.isComponent))):i(rs(u.inSSR,y.isComponent))),y.isBlock=!p,y.isBlock?(o(Aa),o(ss(u.inSSR,y.isComponent))):o(rs(u.inSSR,y.isComponent))),d){const j=as(R_(t.parseResult,[nn("_cached")]));j.body=Cv([ci(["const _memo = (",d.exp,")"]),ci(["if (_cached",...c?[" && _cached.key === ",c]:[],` && ${u.helperString(Oy)}(_cached, _memo)) return _cached`]),ci(["const _item = ",y]),nn("_item.memo = _memo"),nn("return _item")]),r.arguments.push(j,nn("_cache"),nn(String(u.cached++)))}else r.arguments.push(as(R_(t.parseResult),y,!0))}})});function Qv(e,n,u,o){if(!n.exp){u.onError($n(31,n.loc));return}const i=qy(n.exp);if(!i){u.onError($n(32,n.loc));return}const{addIdentifiers:t,removeIdentifiers:r,scopes:s}=u,{source:d,value:l,key:c,index:_}=i,p={type:11,loc:n.loc,source:d,valueAlias:l,keyAlias:c,objectIndexAlias:_,parseResult:i,children:Sd(e)?e.children:[e]};u.replaceNode(p),s.vFor++;const f=o&&o(p);return()=>{s.vFor--,f&&f()}}const B$=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,X2=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,P$=/^\(|\)$/g;function qy(e,n){const u=e.loc,o=e.content,i=o.match(B$);if(!i)return;const[,t,r]=i,s={source:M0(u,r.trim(),o.indexOf(r,t.length)),value:void 0,key:void 0,index:void 0};let d=t.trim().replace(P$,"").trim();const l=t.indexOf(d),c=d.match(X2);if(c){d=d.replace(X2,"").trim();const _=c[1].trim();let p;if(_&&(p=o.indexOf(_,l+d.length),s.key=M0(u,_,p)),c[2]){const f=c[2].trim();f&&(s.index=M0(u,f,o.indexOf(f,s.key?p+_.length:l+d.length)))}}return d&&(s.value=M0(u,d,l)),s}function M0(e,n,u){return nn(n,!1,$y(e,u,n.length))}function R_({value:e,key:n,index:u},o=[]){return E$([e,n,u,...o])}function E$(e){let n=e.length;for(;n--&&!e[n];);return e.slice(0,n+1).map((u,o)=>u||nn("_".repeat(o+1),!1))}const Q2=nn("undefined",!1),Zv=(e,n)=>{if(e.type===1&&(e.tagType===1||e.tagType===3)){const u=_o(e,"slot");if(u)return u.exp,n.scopes.vSlot++,()=>{n.scopes.vSlot--}}},M$=(e,n)=>{let u;if(Sd(e)&&e.props.some(Hy)&&(u=_o(e,"for"))){const o=u.parseResult=qy(u.exp);if(o){const{value:i,key:t,index:r}=o,{addIdentifiers:s,removeIdentifiers:d}=n;return i&&s(i),t&&s(t),r&&s(r),()=>{i&&d(i),t&&d(t),r&&d(r)}}}},T$=(e,n,u)=>as(e,n,!1,!0,n.length?n[0].loc:u);function eB(e,n,u=T$){n.helper(gp);const{children:o,loc:i}=e,t=[],r=[];let s=n.scopes.vSlot>0||n.scopes.vFor>0;const d=_o(e,"slot",!0);if(d){const{arg:D,exp:P}=d;D&&!bo(D)&&(s=!0),t.push(Kn(D||nn("default",!0),u(P,o,i)))}let l=!1,c=!1;const _=[],p=new Set;for(let D=0;D<o.length;D++){const P=o[D];let v;if(!Sd(P)||!(v=_o(P,"slot",!0))){P.type!==3&&_.push(P);continue}if(d){n.onError($n(37,v.loc));break}l=!0;const{children:j,loc:M}=P,{arg:S=nn("default",!0),exp:$,loc:C}=v;let L;bo(S)?L=S?S.content:"default":s=!0;const T=u($,j,M);let q,V,X;if(q=_o(P,"if"))s=!0,r.push(N_(q.exp,T0(S,T),Q2));else if(V=_o(P,/^else(-if)?$/,!0)){let Z=D,ke;for(;Z--&&(ke=o[Z],ke.type===3););if(ke&&Sd(ke)&&_o(ke,"if")){o.splice(D,1),D--;let me=r[r.length-1];for(;me.alternate.type===19;)me=me.alternate;me.alternate=V.exp?N_(V.exp,T0(S,T),Q2):T0(S,T)}else n.onError($n(30,V.loc))}else if(X=_o(P,"for")){s=!0;const Z=X.parseResult||qy(X.exp);Z?r.push(Gn(n.helper(mp),[Z.source,as(R_(Z),T0(S,T),!0)])):n.onError($n(32,X.loc))}else{if(L){if(p.has(L)){n.onError($n(38,C));continue}p.add(L),L==="default"&&(c=!0)}t.push(Kn(S,T))}}if(!d){const D=(P,v)=>{const j=u(P,v,i);return n.compatConfig&&(j.isNonScopedSlot=!0),Kn("default",j)};l?_.length&&_.some(P=>nB(P))&&(c?n.onError($n(39,_[0].loc)):t.push(D(void 0,_))):t.push(D(void 0,o))}const f=s?2:o_(e.children)?3:1;let y=No(t.concat(Kn("_",nn(f+"",!1))),i);return r.length&&(y=Gn(n.helper(Iy),[y,sm(r)])),{slots:y,hasDynamicSlots:s}}function T0(e,n){return No([Kn("name",e),Kn("fn",n)])}function o_(e){for(let n=0;n<e.length;n++){const u=e[n];switch(u.type){case 1:if(u.tagType===2||o_(u.children))return!0;break;case 9:if(o_(u.branches))return!0;break;case 10:case 11:if(o_(u.children))return!0;break}}return!1}function nB(e){return e.type!==2&&e.type!==12?!0:e.type===2?!!e.content.trim():nB(e.content)}const uB=new WeakMap,oB=(e,n)=>function(){if(e=n.currentNode,!(e.type===1&&(e.tagType===0||e.tagType===1)))return;const{tag:o,props:i}=e,t=e.tagType===1;let r=t?iB(e,n):`"${o}"`;const s=Nn(r)&&r.callee===ql;let d,l,c,_=0,p,f,y,D=s||r===dd||r===up||!t&&(o==="svg"||o==="foreignObject");if(i.length>0){const P=Ky(e,n,void 0,t,s);d=P.props,_=P.patchFlag,f=P.dynamicPropNames;const v=P.directives;y=v&&v.length?sm(v.map(j=>tB(j,n))):void 0,P.shouldUseBlock&&(D=!0)}if(e.children.length>0)if(r===Wl&&(D=!0,_|=1024),t&&r!==dd&&r!==Wl){const{slots:v,hasDynamicSlots:j}=eB(e,n);l=v,j&&(_|=1024)}else if(e.children.length===1&&r!==dd){const v=e.children[0],j=v.type,M=j===5||j===8;M&&ko(v,n)===0&&(_|=1),M||j===2?l=v:l=e.children}else l=e.children;_!==0&&(c=String(_),f&&f.length&&(p=L$(f))),e.codegenNode=Td(n,r,d,l,c,p,y,!!D,!1,t,e.loc)};function iB(e,n,u=!1){let{tag:o}=e;const i=sk(o),t=Yc(e,"is");if(t)if(i||xr("COMPILER_IS_ON_ELEMENT",n)){const d=t.type===6?t.value&&nn(t.value.content,!0):t.exp;if(d)return Gn(n.helper(ql),[d])}else t.type===6&&t.value.content.startsWith("vue:")&&(o=t.value.content.slice(4));const r=!i&&_o(e,"is");if(r&&r.exp)return Gn(n.helper(ql),[r.exp]);const s=Ny(o)||n.isBuiltInComponent(o);return s?(u||n.helper(s),s):(n.helper(ap),n.components.add(o),Ld(o,"component"))}function Ky(e,n,u=e.props,o,i,t=!1){const{tag:r,loc:s,children:d}=e;let l=[];const c=[],_=[],p=d.length>0;let f=!1,y=0,D=!1,P=!1,v=!1,j=!1,M=!1,S=!1;const $=[],C=({key:T,value:q})=>{if(bo(T)){const V=T.content,X=za(V);if(X&&(!o||i)&&V.toLowerCase()!=="onclick"&&V!=="onUpdate:modelValue"&&!va(V)&&(j=!0),X&&va(V)&&(S=!0),q.type===20||(q.type===4||q.type===8)&&ko(q,n)>0)return;V==="ref"?D=!0:V==="class"?P=!0:V==="style"?v=!0:V!=="key"&&!$.includes(V)&&$.push(V),o&&(V==="class"||V==="style")&&!$.includes(V)&&$.push(V)}else M=!0};for(let T=0;T<u.length;T++){const q=u[T];if(q.type===6){const{loc:V,name:X,value:Z}=q;let ke=!0;if(X==="ref"&&(D=!0,n.scopes.vFor>0&&l.push(Kn(nn("ref_for",!0),nn("true")))),X==="is"&&(sk(r)||Z&&Z.content.startsWith("vue:")||xr("COMPILER_IS_ON_ELEMENT",n)))continue;l.push(Kn(nn(X,!0,$y(V,0,X.length)),nn(Z?Z.content:"",ke,Z?Z.loc:V)))}else{const{name:V,arg:X,exp:Z,loc:ke}=q,me=V==="bind",Ye=V==="on";if(V==="slot"){o||n.onError($n(40,ke));continue}if(V==="once"||V==="memo"||V==="is"||me&&ka(X,"is")&&(sk(r)||xr("COMPILER_IS_ON_ELEMENT",n))||Ye&&t)continue;if((me&&ka(X,"key")||Ye&&p&&ka(X,"vue:before-update"))&&(f=!0),me&&ka(X,"ref")&&n.scopes.vFor>0&&l.push(Kn(nn("ref_for",!0),nn("true"))),!X&&(me||Ye)){if(M=!0,Z)if(l.length&&(c.push(No(Hh(l),s)),l=[]),me){if(xr("COMPILER_V_BIND_OBJECT_ORDER",n)){c.unshift(Z);continue}c.push(Z)}else c.push({type:14,loc:ke,callee:n.helper(_p),arguments:[Z]});else n.onError($n(me?34:35,ke));continue}const Se=n.directiveTransforms[V];if(Se){const{props:Me,needRuntime:be}=Se(q,e,n);!t&&Me.forEach(C),l.push(...Me),be&&(_.push(q),xt(be)&&uB.set(q,be))}else wv(V)||(_.push(q),p&&(f=!0))}}let L;if(c.length?(l.length&&c.push(No(Hh(l),s)),c.length>1?L=Gn(n.helper(Kl),c,s):L=c[0]):l.length&&(L=No(Hh(l),s)),M?y|=16:(P&&!o&&(y|=2),v&&!o&&(y|=4),$.length&&(y|=8),j&&(y|=32)),!f&&(y===0||y===32)&&(D||S||_.length>0)&&(y|=512),!n.inSSR&&L)switch(L.type){case 15:let T=-1,q=-1,V=!1;for(let ke=0;ke<L.properties.length;ke++){const me=L.properties[ke].key;bo(me)?me.content==="class"?T=ke:me.content==="style"&&(q=ke):me.isHandlerKey||(V=!0)}const X=L.properties[T],Z=L.properties[q];V?L=Gn(n.helper(Md),[L]):(X&&!bo(X.value)&&(X.value=Gn(n.helper(lp),[X.value])),Z&&(v||Z.value.type===4&&Z.value.content.trim()[0]==="["||Z.value.type===17)&&(Z.value=Gn(n.helper(cp),[Z.value])));break;case 14:break;default:L=Gn(n.helper(Md),[Gn(n.helper(rm),[L])]);break}return{props:L,directives:_,patchFlag:y,dynamicPropNames:$,shouldUseBlock:f}}function Hh(e){const n=new Map,u=[];for(let o=0;o<e.length;o++){const i=e[o];if(i.key.type===8||!i.key.isStatic){u.push(i);continue}const t=i.key.content,r=n.get(t);r?(t==="style"||t==="class"||za(t))&&S$(r,i):(n.set(t,i),u.push(i))}return u}function S$(e,n){e.value.type===17?e.value.elements.push(n.value):e.value=sm([e.value,n.value],e.loc)}function tB(e,n){const u=[],o=uB.get(e);o?u.push(n.helperString(o)):(n.helper(rp),n.directives.add(e.name),u.push(Ld(e.name,"directive")));const{loc:i}=e;if(e.exp&&u.push(e.exp),e.arg&&(e.exp||u.push("void 0"),u.push(e.arg)),Object.keys(e.modifiers).length){e.arg||(e.exp||u.push("void 0"),u.push("void 0"));const t=nn("true",!1,i);u.push(No(e.modifiers.map(r=>Kn(r,t)),i))}return sm(u,e.loc)}function L$(e){let n="[";for(let u=0,o=e.length;u<o;u++)n+=JSON.stringify(e[u]),u<o-1&&(n+=", ");return n+"]"}function sk(e){return e==="component"||e==="Component"}const C$=e=>{const n=Object.create(null);return u=>n[u]||(n[u]=e(u))},A$=/-(\w)/g,Z2=C$(e=>e.replace(A$,(n,u)=>u?u.toUpperCase():"")),x$=(e,n)=>{if(Ql(e)){const{children:u,loc:o}=e,{slotName:i,slotProps:t}=aB(e,n),r=[n.prefixIdentifiers?"_ctx.$slots":"$slots",i,"{}","undefined","true"];let s=2;t&&(r[2]=t,s=3),u.length&&(r[3]=as([],u,!1,!1,o),s=4),n.scopeId&&!n.slotted&&(s=5),r.splice(s),e.codegenNode=Gn(n.helper(Yy),r,o)}};function aB(e,n){let u='"default"',o;const i=[];for(let t=0;t<e.props.length;t++){const r=e.props[t];r.type===6?r.value&&(r.name==="name"?u=JSON.stringify(r.value.content):(r.name=Z2(r.name),i.push(r))):r.name==="bind"&&ka(r.arg,"name")?r.exp&&(u=r.exp):(r.name==="bind"&&r.arg&&bo(r.arg)&&(r.arg.content=Z2(r.arg.content)),i.push(r))}if(i.length>0){const{props:t,directives:r}=Ky(e,n,i,!1,!1);o=t,r.length&&n.onError($n(36,r[0].loc))}return{slotName:u,slotProps:o}}const Y$=/^\s*([\w$_]+|(async\s*)?\([^)]*?\))\s*=>|^\s*(async\s+)?function(?:\s+[\w$]+)?\s*\(/,Gy=(e,n,u,o)=>{const{loc:i,modifiers:t,arg:r}=e;!e.exp&&!t.length&&u.onError($n(35,i));let s;if(r.type===4)if(r.isStatic){let _=r.content;_.startsWith("vue:")&&(_=`vnode-${_.slice(4)}`),s=nn(Cr(Su(_)),!0,r.loc)}else s=ci([`${u.helperString(O_)}(`,r,")"]);else s=r,s.children.unshift(`${u.helperString(O_)}(`),s.children.push(")");let d=e.exp;d&&!d.content.trim()&&(d=void 0);let l=u.cacheHandlers&&!d&&!u.inVOnce;if(d){const _=Ry(d.content),p=!(_||Y$.test(d.content)),f=d.content.includes(";");(p||l&&_)&&(d=ci([`${p?"$event":"(...args)"} => ${f?"{":"("}`,d,f?"}":")"]))}let c={props:[Kn(s,d||nn("() => {}",!1,i))]};return o&&(c=o(c)),l&&(c.props[0].value=u.cache(c.props[0].value)),c.props.forEach(_=>_.key.isHandlerKey=!0),c},rB=(e,n,u)=>{const{exp:o,modifiers:i,loc:t}=e,r=e.arg;return r.type!==4?(r.children.unshift("("),r.children.push(') || ""')):r.isStatic||(r.content=`${r.content} || ""`),i.includes("camel")&&(r.type===4?r.isStatic?r.content=Su(r.content):r.content=`${u.helperString(I_)}(${r.content})`:(r.children.unshift(`${u.helperString(I_)}(`),r.children.push(")"))),u.inSSR||(i.includes("prop")&&e6(r,"."),i.includes("attr")&&e6(r,"^")),!o||o.type===4&&!o.content.trim()?(u.onError($n(34,t)),{props:[Kn(r,nn("",!0,t))]}):{props:[Kn(r,o)]}},e6=(e,n)=>{e.type===4?e.isStatic?e.content=n+e.content:e.content=`\`${n}\${${e.content}}\``:(e.children.unshift(`'${n}' + (`),e.children.push(")"))},I$=(e,n)=>{if(e.type===0||e.type===1||e.type===11||e.type===10)return()=>{const u=e.children;let o,i=!1;for(let t=0;t<u.length;t++){const r=u[t];if(e_(r)){i=!0;for(let s=t+1;s<u.length;s++){const d=u[s];if(e_(d))o||(o=u[t]=ci([r],r.loc)),o.children.push(" + ",d),u.splice(s,1),s--;else{o=void 0;break}}}}if(!(!i||u.length===1&&(e.type===0||e.type===1&&e.tagType===0&&!e.props.find(t=>t.type===7&&!n.directiveTransforms[t.name])&&e.tag!=="template")))for(let t=0;t<u.length;t++){const r=u[t];if(e_(r)||r.type===8){const s=[];(r.type!==2||r.content!==" ")&&s.push(r),!n.ssr&&ko(r,n)===0&&s.push(1+""),u[t]={type:12,content:r,loc:r.loc,codegenNode:Gn(n.helper(tp),s)}}}}},n6=new WeakSet,O$=(e,n)=>{if(e.type===1&&_o(e,"once",!0))return n6.has(e)||n.inVOnce?void 0:(n6.add(e),n.inVOnce=!0,n.helper(Gl),()=>{n.inVOnce=!1;const u=n.currentNode;u.codegenNode&&(u.codegenNode=n.cache(u.codegenNode,!0))})},Jy=(e,n,u)=>{const{exp:o,arg:i}=e;if(!o)return u.onError($n(41,e.loc)),Uh();const t=o.loc.source,r=o.type===4?o.content:t;u.bindingMetadata[t];const s=!1;if(!r.trim()||!Ry(r)&&!s)return u.onError($n(42,o.loc)),Uh();const d=i||nn("modelValue",!0),l=i?bo(i)?`onUpdate:${i.content}`:ci(['"onUpdate:" + ',i]):"onUpdate:modelValue";let c;const _=u.isTS?"($event: any)":"$event";c=ci([`${_} => ((`,o,") = $event)"]);const p=[Kn(d,e.exp),Kn(l,c)];if(e.modifiers.length&&n.tagType===1){const f=e.modifiers.map(D=>(xc(D)?D:JSON.stringify(D))+": true").join(", "),y=i?bo(i)?`${i.content}Modifiers`:ci([i,' + "Modifiers"']):"modelModifiers";p.push(Kn(y,nn(`{ ${f} }`,!1,e.loc,2)))}return Uh(p)};function Uh(e=[]){return{props:e}}const N$=/[\w).+\-_$\]]/,R$=(e,n)=>{!xr("COMPILER_FILTER",n)||(e.type===5&&$_(e.content,n),e.type===1&&e.props.forEach(u=>{u.type===7&&u.name!=="for"&&u.exp&&$_(u.exp,n)}))};function $_(e,n){if(e.type===4)u6(e,n);else for(let u=0;u<e.children.length;u++){const o=e.children[u];typeof o=="object"&&(o.type===4?u6(o,n):o.type===8?$_(e,n):o.type===5&&$_(o.content,n))}}function u6(e,n){const u=e.content;let o=!1,i=!1,t=!1,r=!1,s=0,d=0,l=0,c=0,_,p,f,y,D=[];for(f=0;f<u.length;f++)if(p=_,_=u.charCodeAt(f),o)_===39&&p!==92&&(o=!1);else if(i)_===34&&p!==92&&(i=!1);else if(t)_===96&&p!==92&&(t=!1);else if(r)_===47&&p!==92&&(r=!1);else if(_===124&&u.charCodeAt(f+1)!==124&&u.charCodeAt(f-1)!==124&&!s&&!d&&!l)y===void 0?(c=f+1,y=u.slice(0,f).trim()):P();else{switch(_){case 34:i=!0;break;case 39:o=!0;break;case 96:t=!0;break;case 40:l++;break;case 41:l--;break;case 91:d++;break;case 93:d--;break;case 123:s++;break;case 125:s--;break}if(_===47){let v=f-1,j;for(;v>=0&&(j=u.charAt(v),j===" ");v--);(!j||!N$.test(j))&&(r=!0)}}y===void 0?y=u.slice(0,f).trim():c!==0&&P();function P(){D.push(u.slice(c,f).trim()),c=f+1}if(D.length){for(f=0;f<D.length;f++)y=$$(y,D[f],n);e.content=y}}function $$(e,n,u){u.helper(sp);const o=n.indexOf("(");if(o<0)return u.filters.add(n),`${Ld(n,"filter")}(${e})`;{const i=n.slice(0,o),t=n.slice(o+1);return u.filters.add(i),`${Ld(i,"filter")}(${e}${t!==")"?","+t:t}`}}const o6=new WeakSet,H$=(e,n)=>{if(e.type===1){const u=_o(e,"memo");return!u||o6.has(e)?void 0:(o6.add(e),()=>{const o=e.codegenNode||n.currentNode.codegenNode;o&&o.type===13&&(e.tagType!==1&&hp(o,n),e.codegenNode=Gn(n.helper(pp),[u.exp,as(void 0,o),"_cache",String(n.cached++)]))})}};function sB(e){return[[O$,j$,H$,v$,R$,x$,oB,Zv,I$],{on:Gy,bind:rB,model:Jy}]}function dB(e,n={}){const u=n.onError||Sy,o=n.mode==="module";n.prefixIdentifiers===!0?u($n(46)):o&&u($n(47));const i=!1;n.cacheHandlers&&u($n(48)),n.scopeId&&!o&&u($n(49));const t=Je(e)?Uy(e,n):e,[r,s]=sB();return Vv(t,Fn({},n,{prefixIdentifiers:i,nodeTransforms:[...r,...n.nodeTransforms||[]],directiveTransforms:Fn({},s,n.directiveTransforms||{})})),qv(t,Fn({},n,{prefixIdentifiers:i}))}const mB=()=>({props:[]}),Xy=Symbol(""),Qy=Symbol(""),Zy=Symbol(""),eF=Symbol(""),H_=Symbol(""),nF=Symbol(""),uF=Symbol(""),oF=Symbol(""),iF=Symbol(""),tF=Symbol("");Tv({[Xy]:"vModelRadio",[Qy]:"vModelCheckbox",[Zy]:"vModelText",[eF]:"vModelSelect",[H_]:"vModelDynamic",[nF]:"withModifiers",[uF]:"withKeys",[oF]:"vShow",[iF]:"Transition",[tF]:"TransitionGroup"});let Hs;function U$(e,n=!1){return Hs||(Hs=document.createElement("div")),n?(Hs.innerHTML=`<div foo="${e.replace(/"/g,"&quot;")}">`,Hs.children[0].getAttribute("foo")):(Hs.innerHTML=e,Hs.textContent)}const z$=_u("style,iframe,script,noscript",!0),aF={isVoidTag:fv,isNativeTag:e=>hv(e)||kv(e),isPreTag:e=>e==="pre",decodeEntities:U$,isBuiltInComponent:e=>{if(jr(e,"Transition"))return iF;if(jr(e,"TransitionGroup"))return tF},getNamespace(e,n){let u=n?n.ns:0;if(n&&u===2)if(n.tag==="annotation-xml"){if(e==="svg")return 1;n.props.some(o=>o.type===6&&o.name==="encoding"&&o.value!=null&&(o.value.content==="text/html"||o.value.content==="application/xhtml+xml"))&&(u=0)}else/^m(?:[ions]|text)$/.test(n.tag)&&e!=="mglyph"&&e!=="malignmark"&&(u=0);else n&&u===1&&(n.tag==="foreignObject"||n.tag==="desc"||n.tag==="title")&&(u=0);if(u===0){if(e==="svg")return 1;if(e==="math")return 2}return u},getTextMode({tag:e,ns:n}){if(n===0){if(e==="textarea"||e==="title")return 1;if(z$(e))return 2}return 0}},lB=e=>{e.type===1&&e.props.forEach((n,u)=>{n.type===6&&n.name==="style"&&n.value&&(e.props[u]={type:7,name:"bind",arg:nn("style",!0,n.loc),exp:V$(n.value.content,n.loc),modifiers:[],loc:n.loc})})},V$=(e,n)=>{const u=Ey(e);return nn(JSON.stringify(u),!1,n,3)};function Qi(e,n){return $n(e,n)}const W$=(e,n,u)=>{const{exp:o,loc:i}=e;return o||u.onError(Qi(50,i)),n.children.length&&(u.onError(Qi(51,i)),n.children.length=0),{props:[Kn(nn("innerHTML",!0,i),o||nn("",!0))]}},q$=(e,n,u)=>{const{exp:o,loc:i}=e;return o||u.onError(Qi(52,i)),n.children.length&&(u.onError(Qi(53,i)),n.children.length=0),{props:[Kn(nn("textContent",!0),o?ko(o,u)>0?o:Gn(u.helperString(Ac),[o],i):nn("",!0))]}},K$=(e,n,u)=>{const o=Jy(e,n,u);if(!o.props.length||n.tagType===1)return o;e.arg&&u.onError(Qi(55,e.arg.loc));const{tag:i}=n,t=u.isCustomElement(i);if(i==="input"||i==="textarea"||i==="select"||t){let r=Zy,s=!1;if(i==="input"||t){const d=Yc(n,"type");if(d){if(d.type===7)r=H_;else if(d.value)switch(d.value.content){case"radio":r=Xy;break;case"checkbox":r=Qy;break;case"file":s=!0,u.onError(Qi(56,e.loc));break}}else xv(n)&&(r=H_)}else i==="select"&&(r=eF);s||(o.needRuntime=u.helper(r))}else u.onError(Qi(54,e.loc));return o.props=o.props.filter(r=>!(r.key.type===4&&r.key.content==="modelValue")),o},G$=_u("passive,once,capture"),J$=_u("stop,prevent,self,ctrl,shift,alt,meta,exact,middle"),X$=_u("left,right"),cB=_u("onkeyup,onkeydown,onkeypress",!0),Q$=(e,n,u,o)=>{const i=[],t=[],r=[];for(let s=0;s<n.length;s++){const d=n[s];d==="native"&&Cd("COMPILER_V_ON_NATIVE",u)||G$(d)?r.push(d):X$(d)?bo(e)?cB(e.content)?i.push(d):t.push(d):(i.push(d),t.push(d)):J$(d)?t.push(d):i.push(d)}return{keyModifiers:i,nonKeyModifiers:t,eventOptionModifiers:r}},i6=(e,n)=>bo(e)&&e.content.toLowerCase()==="onclick"?nn(n,!0):e.type!==4?ci(["(",e,`) === "onClick" ? "${n}" : (`,e,")"]):e,Z$=(e,n,u)=>Gy(e,n,u,o=>{const{modifiers:i}=e;if(!i.length)return o;let{key:t,value:r}=o.props[0];const{keyModifiers:s,nonKeyModifiers:d,eventOptionModifiers:l}=Q$(t,i,u,e.loc);if(d.includes("right")&&(t=i6(t,"onContextmenu")),d.includes("middle")&&(t=i6(t,"onMouseup")),d.length&&(r=Gn(u.helper(nF),[r,JSON.stringify(d)])),s.length&&(!bo(t)||cB(t.content))&&(r=Gn(u.helper(uF),[r,JSON.stringify(s)])),l.length){const c=l.map(Wa).join("");t=bo(t)?nn(`${t.content}${c}`,!0):ci(["(",t,`) + "${c}"`])}return{props:[Kn(t,r)]}}),eH=(e,n,u)=>{const{exp:o,loc:i}=e;return o||u.onError(Qi(58,i)),{props:[],needRuntime:u.helper(oF)}},nH=(e,n)=>{e.type===1&&e.tagType===0&&(e.tag==="script"||e.tag==="style")&&(n.onError(Qi(60,e.loc)),n.removeNode())},_B=[lB],gB={cloak:mB,html:W$,text:q$,model:K$,on:Z$,show:eH};function uH(e,n={}){return dB(e,Fn({},aF,n,{nodeTransforms:[nH,..._B,...n.nodeTransforms||[]],directiveTransforms:Fn({},gB,n.directiveTransforms||{}),transformHoist:null}))}function oH(e,n={}){return Uy(e,Fn({},aF,n))}var iH=Object.freeze(Object.defineProperty({__proto__:null,DOMDirectiveTransforms:gB,DOMNodeTransforms:_B,TRANSITION:iF,TRANSITION_GROUP:tF,V_MODEL_CHECKBOX:Qy,V_MODEL_DYNAMIC:H_,V_MODEL_RADIO:Xy,V_MODEL_SELECT:eF,V_MODEL_TEXT:Zy,V_ON_WITH_KEYS:uF,V_ON_WITH_MODIFIERS:nF,V_SHOW:oF,compile:uH,createDOMCompilerError:Qi,parse:oH,parserOptions:aF,transformStyle:lB,generateCodeFrame:lv,BASE_TRANSITION:Ly,CAMELIZE:I_,CAPITALIZE:vv,CREATE_BLOCK:Cy,CREATE_COMMENT:am,CREATE_ELEMENT_BLOCK:Ay,CREATE_ELEMENT_VNODE:ip,CREATE_SLOTS:Iy,CREATE_STATIC:xy,CREATE_TEXT:tp,CREATE_VNODE:op,FRAGMENT:Ed,GUARD_REACTIVE_PROPS:rm,IS_MEMO_SAME:Oy,IS_REF:Mv,KEEP_ALIVE:Wl,MERGE_PROPS:Kl,NORMALIZE_CLASS:lp,NORMALIZE_PROPS:Md,NORMALIZE_STYLE:cp,OPEN_BLOCK:Aa,POP_SCOPE_ID:Pv,PUSH_SCOPE_ID:Bv,RENDER_LIST:mp,RENDER_SLOT:Yy,RESOLVE_COMPONENT:ap,RESOLVE_DIRECTIVE:rp,RESOLVE_DYNAMIC_COMPONENT:ql,RESOLVE_FILTER:sp,SET_BLOCK_TRACKING:Gl,SUSPENSE:up,TELEPORT:dd,TO_DISPLAY_STRING:Ac,TO_HANDLERS:_p,TO_HANDLER_KEY:O_,UNREF:Ev,WITH_CTX:gp,WITH_DIRECTIVES:dp,WITH_MEMO:pp,advancePositionWithClone:Jl,advancePositionWithMutation:Xl,assert:AR,baseCompile:dB,baseParse:Uy,buildDirectiveArgs:tB,buildProps:Ky,buildSlots:eB,checkCompatEnabled:Cd,createArrayExpression:sm,createAssignmentExpression:BR,createBlockStatement:Cv,createCacheExpression:Lv,createCallExpression:Gn,createCompilerError:$n,createCompoundExpression:ci,createConditionalExpression:N_,createForLoopParams:R_,createFunctionExpression:as,createIfStatement:vR,createInterpolation:jR,createObjectExpression:No,createObjectProperty:Kn,createReturnStatement:ER,createRoot:Sv,createSequenceExpression:PR,createSimpleExpression:nn,createStructuralDirectiveTransform:Vy,createTemplateLiteral:DR,createTransformContext:zv,createVNodeCall:Td,extractIdentifiers:ha,findDir:_o,findProp:Yc,generate:qv,getBaseTransformPreset:sB,getConstantType:ko,getInnerRange:$y,getMemoedVNodeCall:Iv,getVNodeBlockHelper:ss,getVNodeHelper:rs,hasDynamicKeyVBind:xv,hasScopeRef:Li,helperNameMap:ts,injectProp:Zl,isBuiltInType:jr,isCoreComponent:Ny,isFunctionType:F$,isInDestructureAssignment:k$,isMemberExpression:Ry,isMemberExpressionBrowser:Av,isMemberExpressionNode:CR,isReferencedIdentifier:h$,isSimpleIdentifier:xc,isSlotOutlet:Ql,isStaticArgOf:ka,isStaticExp:bo,isStaticProperty:Jv,isStaticPropertyKey:b$,isTemplateNode:Sd,isText:e_,isVSlot:Hy,locStub:gu,makeBlock:hp,noopDirectiveTransform:mB,processExpression:u_,processFor:Qv,processIf:Xv,processSlotOutlet:aB,registerRuntimeHelpers:Tv,resolveComponentType:iB,toValidAssetId:Ld,trackSlotScopes:Zv,trackVForSlotScopes:M$,transform:Vv,transformBind:rB,transformElement:oB,transformExpression:w$,transformModel:Jy,transformOn:Gy,traverseNode:Ic,walkBlockDeclarations:y$,walkFunctionParams:f$,walkIdentifiers:p$,warnDeprecation:IR},Symbol.toStringTag,{value:"Module"})),tH=_f(iH);let So;class rF{constructor(n=!1){this.active=!0,this.effects=[],this.cleanups=[],!n&&So&&(this.parent=So,this.index=(So.scopes||(So.scopes=[])).push(this)-1)}run(n){if(this.active){const u=So;try{return So=this,n()}finally{So=u}}}on(){So=this}off(){So=this.parent}stop(n){if(this.active){let u,o;for(u=0,o=this.effects.length;u<o;u++)this.effects[u].stop();for(u=0,o=this.cleanups.length;u<o;u++)this.cleanups[u]();if(this.scopes)for(u=0,o=this.scopes.length;u<o;u++)this.scopes[u].stop(!0);if(this.parent&&!n){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.active=!1}}}function aH(e){return new rF(e)}function pB(e,n=So){n&&n.active&&n.effects.push(e)}function rH(){return So}function sH(e){So&&So.cleanups.push(e)}const sF=e=>{const n=new Set(e);return n.w=0,n.n=0,n},hB=e=>(e.w&xa)>0,kB=e=>(e.n&xa)>0,dH=({deps:e})=>{if(e.length)for(let n=0;n<e.length;n++)e[n].w|=xa},mH=e=>{const{deps:n}=e;if(n.length){let u=0;for(let o=0;o<n.length;o++){const i=n[o];hB(i)&&!kB(i)?i.delete(e):n[u++]=i,i.w&=~xa,i.n&=~xa}n.length=u}},dk=new WeakMap;let qm=0,xa=1;const mk=30;let Ai;const Yr=Symbol(""),lk=Symbol("");class Nc{constructor(n,u=null,o){this.fn=n,this.scheduler=u,this.active=!0,this.deps=[],this.parent=void 0,pB(this,o)}run(){if(!this.active)return this.fn();let n=Ai,u=Ba;for(;n;){if(n===this)return;n=n.parent}try{return this.parent=Ai,Ai=this,Ba=!0,xa=1<<++qm,qm<=mk?dH(this):t6(this),this.fn()}finally{qm<=mk&&mH(this),xa=1<<--qm,Ai=this.parent,Ba=u,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ai===this?this.deferStop=!0:this.active&&(t6(this),this.onStop&&this.onStop(),this.active=!1)}}function t6(e){const{deps:n}=e;if(n.length){for(let u=0;u<n.length;u++)n[u].delete(e);n.length=0}}function lH(e,n){e.effect&&(e=e.effect.fn);const u=new Nc(e);n&&(Fn(u,n),n.scope&&pB(u,n.scope)),(!n||!n.lazy)&&u.run();const o=u.run.bind(u);return o.effect=u,o}function cH(e){e.effect.stop()}let Ba=!0;const fB=[];function hs(){fB.push(Ba),Ba=!1}function ks(){const e=fB.pop();Ba=e===void 0?!0:e}function Wo(e,n,u){if(Ba&&Ai){let o=dk.get(e);o||dk.set(e,o=new Map);let i=o.get(u);i||o.set(u,i=sF()),yB(i)}}function yB(e,n){let u=!1;qm<=mk?kB(e)||(e.n|=xa,u=!hB(e)):u=!e.has(Ai),u&&(e.add(Ai),Ai.deps.push(e))}function It(e,n,u,o,i,t){const r=dk.get(e);if(!r)return;let s=[];if(n==="clear")s=[...r.values()];else if(u==="length"&&ve(e))r.forEach((d,l)=>{(l==="length"||l>=o)&&s.push(d)});else switch(u!==void 0&&s.push(r.get(u)),n){case"add":ve(e)?ep(u)&&s.push(r.get("length")):(s.push(r.get(Yr)),Lr(e)&&s.push(r.get(lk)));break;case"delete":ve(e)||(s.push(r.get(Yr)),Lr(e)&&s.push(r.get(lk)));break;case"set":Lr(e)&&s.push(r.get(Yr));break}if(s.length===1)s[0]&&ck(s[0]);else{const d=[];for(const l of s)l&&d.push(...l);ck(sF(d))}}function ck(e,n){const u=ve(e)?e:[...e];for(const o of u)o.computed&&a6(o);for(const o of u)o.computed||a6(o)}function a6(e,n){(e!==Ai||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const _H=_u("__proto__,__v_isRef,__isVue"),FB=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(xt)),gH=yp(),pH=yp(!1,!0),hH=yp(!0),kH=yp(!0,!0),r6=fH();function fH(){const e={};return["includes","indexOf","lastIndexOf"].forEach(n=>{e[n]=function(...u){const o=mn(this);for(let t=0,r=this.length;t<r;t++)Wo(o,"get",t+"");const i=o[n](...u);return i===-1||i===!1?o[n](...u.map(mn)):i}}),["push","pop","shift","unshift","splice"].forEach(n=>{e[n]=function(...u){hs();const o=mn(this)[n].apply(this,u);return ks(),o}}),e}function yp(e=!1,n=!1){return function(o,i,t){if(i==="__v_isReactive")return!e;if(i==="__v_isReadonly")return e;if(i==="__v_isShallow")return n;if(i==="__v_raw"&&t===(e?n?PB:BB:n?vB:DB).get(o))return o;const r=ve(o);if(!e&&r&&dn(r6,i))return Reflect.get(r6,i,t);const s=Reflect.get(o,i,t);return(xt(i)?FB.has(i):_H(i))||(e||Wo(o,"get",i),n)?s:lu(s)?r&&ep(i)?s:s.value:Nn(s)?e?mF(s):wp(s):s}}const yH=bB(),FH=bB(!0);function bB(e=!1){return function(u,o,i,t){let r=u[o];if(Ad(r)&&lu(r)&&!lu(i))return!1;if(!e&&!Ad(i)&&(U_(i)||(i=mn(i),r=mn(r)),!ve(u)&&lu(r)&&!lu(i)))return r.value=i,!0;const s=ve(u)&&ep(o)?Number(o)<u.length:dn(u,o),d=Reflect.set(u,o,i,t);return u===mn(t)&&(s?is(i,r)&&It(u,"set",o,i):It(u,"add",o,i)),d}}function bH(e,n){const u=dn(e,n);e[n];const o=Reflect.deleteProperty(e,n);return o&&u&&It(e,"delete",n,void 0),o}function wH(e,n){const u=Reflect.has(e,n);return(!xt(n)||!FB.has(n))&&Wo(e,"has",n),u}function jH(e){return Wo(e,"iterate",ve(e)?"length":Yr),Reflect.ownKeys(e)}const wB={get:gH,set:yH,deleteProperty:bH,has:wH,ownKeys:jH},jB={get:hH,set(e,n){return!0},deleteProperty(e,n){return!0}},DH=Fn({},wB,{get:pH,set:FH}),vH=Fn({},jB,{get:kH}),dF=e=>e,Fp=e=>Reflect.getPrototypeOf(e);function S0(e,n,u=!1,o=!1){e=e.__v_raw;const i=mn(e),t=mn(n);u||(n!==t&&Wo(i,"get",n),Wo(i,"get",t));const{has:r}=Fp(i),s=o?dF:u?_F:nc;if(r.call(i,n))return s(e.get(n));if(r.call(i,t))return s(e.get(t));e!==i&&e.get(n)}function L0(e,n=!1){const u=this.__v_raw,o=mn(u),i=mn(e);return n||(e!==i&&Wo(o,"has",e),Wo(o,"has",i)),e===i?u.has(e):u.has(e)||u.has(i)}function C0(e,n=!1){return e=e.__v_raw,!n&&Wo(mn(e),"iterate",Yr),Reflect.get(e,"size",e)}function s6(e){e=mn(e);const n=mn(this);return Fp(n).has.call(n,e)||(n.add(e),It(n,"add",e,e)),this}function d6(e,n){n=mn(n);const u=mn(this),{has:o,get:i}=Fp(u);let t=o.call(u,e);t||(e=mn(e),t=o.call(u,e));const r=i.call(u,e);return u.set(e,n),t?is(n,r)&&It(u,"set",e,n):It(u,"add",e,n),this}function m6(e){const n=mn(this),{has:u,get:o}=Fp(n);let i=u.call(n,e);i||(e=mn(e),i=u.call(n,e)),o&&o.call(n,e);const t=n.delete(e);return i&&It(n,"delete",e,void 0),t}function l6(){const e=mn(this),n=e.size!==0,u=e.clear();return n&&It(e,"clear",void 0,void 0),u}function A0(e,n){return function(o,i){const t=this,r=t.__v_raw,s=mn(r),d=n?dF:e?_F:nc;return!e&&Wo(s,"iterate",Yr),r.forEach((l,c)=>o.call(i,d(l),d(c),t))}}function x0(e,n,u){return function(...o){const i=this.__v_raw,t=mn(i),r=Lr(t),s=e==="entries"||e===Symbol.iterator&&r,d=e==="keys"&&r,l=i[e](...o),c=u?dF:n?_F:nc;return!n&&Wo(t,"iterate",d?lk:Yr),{next(){const{value:_,done:p}=l.next();return p?{value:_,done:p}:{value:s?[c(_[0]),c(_[1])]:c(_),done:p}},[Symbol.iterator](){return this}}}}function ia(e){return function(...n){return e==="delete"?!1:this}}function BH(){const e={get(t){return S0(this,t)},get size(){return C0(this)},has:L0,add:s6,set:d6,delete:m6,clear:l6,forEach:A0(!1,!1)},n={get(t){return S0(this,t,!1,!0)},get size(){return C0(this)},has:L0,add:s6,set:d6,delete:m6,clear:l6,forEach:A0(!1,!0)},u={get(t){return S0(this,t,!0)},get size(){return C0(this,!0)},has(t){return L0.call(this,t,!0)},add:ia("add"),set:ia("set"),delete:ia("delete"),clear:ia("clear"),forEach:A0(!0,!1)},o={get(t){return S0(this,t,!0,!0)},get size(){return C0(this,!0)},has(t){return L0.call(this,t,!0)},add:ia("add"),set:ia("set"),delete:ia("delete"),clear:ia("clear"),forEach:A0(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(t=>{e[t]=x0(t,!1,!1),u[t]=x0(t,!0,!1),n[t]=x0(t,!1,!0),o[t]=x0(t,!0,!0)}),[e,u,n,o]}const[PH,EH,MH,TH]=BH();function bp(e,n){const u=n?e?TH:MH:e?EH:PH;return(o,i,t)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?o:Reflect.get(dn(u,i)&&i in o?u:o,i,t)}const SH={get:bp(!1,!1)},LH={get:bp(!1,!0)},CH={get:bp(!0,!1)},AH={get:bp(!0,!0)},DB=new WeakMap,vB=new WeakMap,BB=new WeakMap,PB=new WeakMap;function xH(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function YH(e){return e.__v_skip||!Object.isExtensible(e)?0:xH(bv(e))}function wp(e){return Ad(e)?e:jp(e,!1,wB,SH,DB)}function EB(e){return jp(e,!1,DH,LH,vB)}function mF(e){return jp(e,!0,jB,CH,BB)}function IH(e){return jp(e,!0,vH,AH,PB)}function jp(e,n,u,o,i){if(!Nn(e)||e.__v_raw&&!(n&&e.__v_isReactive))return e;const t=i.get(e);if(t)return t;const r=YH(e);if(r===0)return e;const s=new Proxy(e,r===2?o:u);return i.set(e,s),s}function Ir(e){return Ad(e)?Ir(e.__v_raw):!!(e&&e.__v_isReactive)}function Ad(e){return!!(e&&e.__v_isReadonly)}function U_(e){return!!(e&&e.__v_isShallow)}function lF(e){return Ir(e)||Ad(e)}function mn(e){const n=e&&e.__v_raw;return n?mn(n):e}function cF(e){return Vl(e,"__v_skip",!0),e}const nc=e=>Nn(e)?wp(e):e,_F=e=>Nn(e)?mF(e):e;function gF(e){Ba&&Ai&&(e=mn(e),yB(e.dep||(e.dep=sF())))}function Dp(e,n){e=mn(e),e.dep&&ck(e.dep)}function lu(e){return!!(e&&e.__v_isRef===!0)}function i_(e){return MB(e,!1)}function OH(e){return MB(e,!0)}function MB(e,n){return lu(e)?e:new NH(e,n)}class NH{constructor(n,u){this.__v_isShallow=u,this.dep=void 0,this.__v_isRef=!0,this._rawValue=u?n:mn(n),this._value=u?n:nc(n)}get value(){return gF(this),this._value}set value(n){n=this.__v_isShallow?n:mn(n),is(n,this._rawValue)&&(this._rawValue=n,this._value=this.__v_isShallow?n:nc(n),Dp(this))}}function RH(e){Dp(e)}function TB(e){return lu(e)?e.value:e}const $H={get:(e,n,u)=>TB(Reflect.get(e,n,u)),set:(e,n,u,o)=>{const i=e[n];return lu(i)&&!lu(u)?(i.value=u,!0):Reflect.set(e,n,u,o)}};function pF(e){return Ir(e)?e:new Proxy(e,$H)}class HH{constructor(n){this.dep=void 0,this.__v_isRef=!0;const{get:u,set:o}=n(()=>gF(this),()=>Dp(this));this._get=u,this._set=o}get value(){return this._get()}set value(n){this._set(n)}}function UH(e){return new HH(e)}function zH(e){const n=ve(e)?new Array(e.length):{};for(const u in e)n[u]=SB(e,u);return n}class VH{constructor(n,u,o){this._object=n,this._key=u,this._defaultValue=o,this.__v_isRef=!0}get value(){const n=this._object[this._key];return n===void 0?this._defaultValue:n}set value(n){this._object[this._key]=n}}function SB(e,n,u){const o=e[n];return lu(o)?o:new VH(e,n,u)}class WH{constructor(n,u,o,i){this._setter=u,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Nc(n,()=>{this._dirty||(this._dirty=!0,Dp(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=o}get value(){const n=mn(this);return gF(n),(n._dirty||!n._cacheable)&&(n._dirty=!1,n._value=n.effect.run()),n._value}set value(n){this._setter(n)}}function qH(e,n,u=!1){let o,i;const t=We(e);return t?(o=e,i=io):(o=e.get,i=e.set),new WH(o,i,t||!i,u)}const cl=[];function LB(e,...n){hs();const u=cl.length?cl[cl.length-1].component:null,o=u&&u.appContext.config.warnHandler,i=KH();if(o)Zi(o,u,11,[e+n.join(""),u&&u.proxy,i.map(({vnode:t})=>`at <${DP(u,t.type)}>`).join(`
`),i]);else{const t=[`[Vue warn]: ${e}`,...n];i.length&&t.push(`
`,...GH(i)),console.warn(...t)}ks()}function KH(){let e=cl[cl.length-1];if(!e)return[];const n=[];for(;e;){const u=n[0];u&&u.vnode===e?u.recurseCount++:n.push({vnode:e,recurseCount:0});const o=e.component&&e.component.parent;e=o&&o.vnode}return n}function GH(e){const n=[];return e.forEach((u,o)=>{n.push(...o===0?[]:[`
[`+ue+"] ",arguments[0])r(arguments[0],F)&&(h+=F+": "+arguments[0][F]+", ");h=h.slice(0,-2)}else h=arguments[ue];N.push(h)}L(a+`
Arguments: `+Array.prototype.slice.call(N).join("")+`
          to bottom,
          #ff2618,
          #ff5907,
          #ffa001,
          #c0c60b,
          #9fc611,
          #02b891,
          #367fe5,
          #8a39ef
        ) fixed`,color:"#fff"},left:{bg:"#E4E6EB",color:"#000"},background:""},{id:2,name:"T\xECnh y\xEAu",right:{bg:"#ff228c",color:"#fff"},left:{bg:"#FFF5F5",color:"#000"},background:"",preview:!0},{id:3,name:"B\u1EA7u tr\u1EDDi",right:{bg:`linear-gradient(
          to bottom,
         #bc58fb, #c399ff, #8bc4ff
        ) fixed`,color:"#fff"},left:{bg:"#FFF5F5",color:"#000"},background:"",preview:!0},{id:4,name:"Th\u01B0 gi\xE3n",right:{bg:`linear-gradient(
          to bottom,
         #189fff, #ff5907, #01a4ff, #c0c60b, #8a39ef
        ) fixed`,color:"#fff"},left:{bg:"#FFF5F5",color:"#000"},background:"",preview:!0}]}),d=Cn({data:[aG,uG,oG,iG,tG]}),l=Pe(),c=Cn({data:{}});function _(){GN(t.value,s.data[l.value]),c.data=s.data[l.value],ok("messages",t.value,{displayName:r.value.displayName,uid:r.value.uid,createdAt:new Date,type:"theme",content:`${r.value.displayName} \u0111\xE3 thay \u0111\u1ED5i ch\u1EE7 \u0111\u1EC1 th\xE0nh ${s.data[l.value].name}`,themeName:s.data[l.value].name})}function p(y){y===l.value?l.value=void 0:l.value=y;const D=u.theme;D!=null&&D.preview||(c.data=D),o.setTheme(s.data[l.value])}function f(){n("close"),o.setTheme(c.data)}return(y,D)=>{const P=kn("v-icon");return J(),oe(sn,null,[R("span",{class:I(y.$style.overlay)},null,2),R("div",{class:I(y.$style.theme)},[R("div",{class:I(y.$style.head)},[R("h4",{class:I(y.$style.text)},"Ch\u1EE7 \u0111\u1EC1",2),R("div",{class:I(y.$style.btn),onClick:f},[he(P,{name:"pr-times",class:I(y.$style.icon)},null,8,["class"])],2)],2),R("div",{class:I(y.$style.list)},[(J(!0),oe(sn,null,Oi(s.data,(v,j)=>(J(),oe("div",{class:I([y.$style.item,{[y.$style.itemSelected]:l.value===j}]),onClick:M=>p(j),key:j},[R("div",{class:I(y.$style.avt)},[R("img",{class:I(y.$style.img),src:d.data[j],alt:""},null,10,bG)],2),R("span",null,yn(v.name),1)],10,FG))),128))],2),R("div",{class:I(y.$style.actions)},[R("button",{class:I(y.$style.btn),onClick:f},"Hu\u1EF7",2),R("button",{class:I(y.$style.btn),disabled:l.value===void 0,onClick:_}," L\u01B0u ",10,wG)],2)],2)],64)}}},DG={$style:yG};var vG=hn(jG,[["__cssModules",DG]]);const BG="_menu_ib88o_1",PG="_pop_ib88o_5",EG="_item_ib88o_18",MG="_boxIcon_ib88o_22",TG="_icon_ib88o_26",SG="_btn_ib88o_36",LG="_btnActive_ib88o_53";var CG={menu:BG,pop:PG,item:EG,boxIcon:MG,icon:TG,btn:SG,btnActive:LG};const AG=R("span",null,"Thay \u0111\u1ED5i ch\u1EE7 \u0111\u1EC1",-1),xG={name:"ChatMainMenu",setup(e){const n=Pe(!1),u=Pe(!1);function o(){n.value=!n.value}function i(){u.value=!u.value}return(t,r)=>{const s=kn("v-icon");return J(),oe(sn,null,[R("div",{class:I(t.$style.menu)},[R("div",null,[R("button",{class:I(t.$style.btn)},[he(s,{name:"fa-video",class:I(t.$style.icon)},null,8,["class"])],2),R("button",{class:I(t.$style.btn)},[he(s,{name:"ri-search-line",class:I(t.$style.icon)},null,8,["class"])],2),R("button",{class:I([t.$style.btn,{[t.$style.btnActive]:n.value}]),onClick:o},[he(s,{name:"md-morehoriz",class:I(t.$style.icon)},null,8,["class"])],2)]),n.value?(J(),oe("div",{key:0,class:I(t.$style.pop)},[R("div",{class:I(t.$style.item),onClick:i},[R("div",{class:I(t.$style.boxIcon)},[he(nG,{class:I(t.$style.icon)},null,8,["class"])],2),AG],2)],2)):wn("",!0)],2),u.value?(J(),Vn(vG,{key:0,onClose:i})):wn("",!0)],64)}}},YG={$style:CG};var IG=hn(xG,[["__cssModules",YG]]);const OG="_msg_1fbfw_1",NG="_avt_1fbfw_7",RG="_avtName_1fbfw_12",$G="_content_1fbfw_22",HG="_text_1fbfw_25",UG="_time_1fbfw_34";var zG={msg:OG,avt:NG,avtName:RG,content:$G,text:HG,time:UG};const VG=["src"],WG={name:"ChatMessageLeft",props:["data"],setup(e){const n=it(),u=Ne(()=>n.getTheme);return(o,i)=>{var r,s,d,l,c,_,p,f;const t=kn("v-icon");return J(),oe("div",{class:I(o.$style.msg)},[R("div",{class:I(o.$style.avt)},[(r=e.data)!=null&&r.photoURL?(J(),oe("img",{key:0,src:(s=e.data)==null?void 0:s.photoURL,alt:""},null,8,VG)):(J(),oe("div",{key:1,class:I(o.$style.avtName),style:tu({background:e.data.theme.backgroundColor,color:e.data.theme.textColor})},[R("span",null,yn(xe(ys)((d=e.data)==null?void 0:d.displayName).name),1)],6))],2),R("div",{class:I(o.$style.content)},[R("div",{class:I(o.$style.text),style:tu({background:(c=(l=xe(u))==null?void 0:l.left)==null?void 0:c.bg,color:(p=(_=xe(u))==null?void 0:_.left)==null?void 0:p.color})},[R("p",null,yn(e.data.content),1)],6),R("p",{class:I(o.$style.time)},[he(t,{name:"bi-check-all",fill:"green"}),R("span",null,yn(xe(OF)((f=e.data.createdAt)==null?void 0:f.seconds)),1)],2)],2)],2)}}},qG={$style:zG};var KG=hn(WG,[["__cssModules",qG]]);const GG="_msgR_17zhj_1",JG="_body_17zhj_4",XG="_avt_17zhj_9",QG="_avtName_17zhj_17",ZG="_content_17zhj_27",eJ="_text_17zhj_31",nJ="_time_17zhj_42";var uJ={msgR:GG,body:JG,avt:XG,avtName:QG,content:ZG,text:eJ,time:nJ};const oJ={name:"ChatMessageRight",props:["data"],setup(e){const n=it(),u=Ne(()=>n.getTheme);return(o,i)=>{var r,s,d,l,c;const t=kn("v-icon");return J(),oe("div",{class:I(o.$style.msgR)},[R("div",{class:I(o.$style.body)},[R("div",{class:I(o.$style.content)},[R("div",{class:I(o.$style.text),style:tu({background:(s=(r=xe(u))==null?void 0:r.right)==null?void 0:s.bg,color:(l=(d=xe(u))==null?void 0:d.right)==null?void 0:l.color})},[R("p",null,yn(e.data.content),1)],6),R("p",{class:I(o.$style.time)},[he(t,{name:"bi-check-all",fill:"green"}),R("span",null,yn(xe(OF)((c=e.data.createdAt)==null?void 0:c.seconds)),1)],2)],2)],2)],2)}}},iJ={$style:uJ};var tJ=hn(oJ,[["__cssModules",iJ]]);const aJ="_chatNoti_1qqqr_1";var rJ={chatNoti:aJ};const sJ={name:"ChatMessageNoti",props:["data"],setup(e){return Pe(""),(n,u)=>(J(),oe("div",{class:I(n.$style.chatNoti)},[R("span",null,yn(e.data.displayName)+" \u0111\xE3 thay \u0111\u1ED5i ch\u1EE7 \u0111\u1EC1 th\xE0nh "+yn(e.data.themeName),1)],2))}},dJ={$style:rJ};var mJ=hn(sJ,[["__cssModules",dJ]]);const lJ={key:0,class:"classBtn"},cJ={name:"ViewBox",props:["src"],setup(e){const n=e,u=Cn({data:[]}),o=Ne(()=>n.src),i=[];return i.push(n.src),u.data=i,vn(o,t=>{const r=[];r.push(t),u.data=r}),(t,r)=>{const s=kn("photo-consumer"),d=kn("photo-provider");return J(),Vn(d,null,{default:ao(()=>[(J(!0),oe(sn,null,Oi(u.data,(l,c)=>(J(),Vn(s,{intro:l,key:l,src:l},{default:ao(()=>[c===0?(J(),oe("button",lJ)):wn("",!0)]),_:2},1032,["intro","src"]))),128))]),_:1})}}},_J="_chatImage_awa7y_1",gJ="_avt_awa7y_5",pJ="_avtName_awa7y_10",hJ="_item_awa7y_20",kJ="_img_awa7y_25",fJ="_time_awa7y_31",yJ="_right_awa7y_38",FJ="_left_awa7y_43",bJ="_preview_awa7y_50",wJ="_enable_awa7y_50";var jJ={chatImage:_J,avt:gJ,avtName:pJ,item:hJ,img:kJ,time:fJ,right:yJ,left:FJ,preview:bJ,enable:wJ};const DJ=["src"],vJ=["src"],BJ={name:"ChatMessageImage",props:["huong","data"],setup(e){const n=e,u=it();Cn({data:[]});const o=Pe("");Ne(()=>u.getTheme);const i=Ne(()=>n.data);return o.value=i.value.imageURL,vn(i,t=>{o.value=t.imageURL}),(t,r)=>{var d,l,c,_,p;const s=kn("v-icon");return J(),oe("div",{class:I([t.$style.chatImage,{[t.$style.right]:e.huong==="right"},{[t.$style.left]:e.huong==="left"}])},[e.huong==="left"?(J(),oe("div",{key:0,class:I(t.$style.avt)},[(d=e.data)!=null&&d.photoURL?(J(),oe("img",{key:0,src:(l=e.data)==null?void 0:l.photoURL,alt:""},null,8,DJ)):(J(),oe("div",{key:1,class:I(t.$style.avtName),style:tu({background:e.data.theme.backgroundColor,color:e.data.theme.textColor})},[R("span",null,yn(xe(ys)((c=e.data)==null?void 0:c.displayName).name),1)],6))],2)):wn("",!0),R("div",{class:I(t.$style.item)},[R("img",{class:I(t.$style.img),src:(_=e.data)==null?void 0:_.imageURL,alt:""},null,10,vJ),R("p",{class:I(t.$style.time)},[he(s,{name:"bi-check-all",fill:"green"}),R("span",null,yn(xe(OF)((p=e.data.createdAt)==null?void 0:p.seconds)),1)],2),he(cJ,{src:e.data.imageURL},null,8,["src"])],2)],2)}}},PJ={$style:jJ};var EJ=hn(BJ,[["__cssModules",PJ]]);const MJ="_chatView_13y5t_1",TJ="_chatContent_13y5t_7",SJ="_scroll_13y5t_7",LJ="_btn_13y5t_14",CJ="_icon_13y5t_27";var AJ={chatView:MJ,chatContent:TJ,scroll:SJ,btn:LJ,icon:CJ};const xJ={name:"ChatView",setup(e){const{proxy:n}=Ud(),u=Ra(),o=hi(),i=Cn({data:[]}),t=Ne(()=>u.currentChatId),r=Pe(!1),s=Ne(()=>{var c;if((c=u.getChatContent(t.value))!=null&&c.chatData)return u.getChatContent(t.value).chatData});i.data=s.value;const d=o.userinfo;function l(){const c=n.$refs.chatMain;c&&(c.scrollHeight,setTimeout(()=>{c.scroll({top:1e5,left:0,behavior:"smooth"})},50))}return Ri(()=>{l(),n.$refs.chatMain,setTimeout(()=>{},2e3)}),vn(i,c=>{l()}),sc(()=>{l()}),(c,_)=>{const p=kn("v-icon");return J(),oe("div",{class:I(c.$style.chatView),ref:"chatMain"},[R("div",{ref:"chatContent",class:I(c.$style.chatContent)},[(J(!0),oe(sn,null,Oi(xe(s),f=>(J(),oe(sn,{key:f.index},[(f==null?void 0:f.type)==="image"?(J(),Vn(EJ,{key:0,huong:f.uid===xe(d).uid?"right":"left",data:f},null,8,["huong","data"])):(f==null?void 0:f.type)==="theme"?(J(),Vn(mJ,{key:1,data:f},null,8,["data"])):f.uid===xe(d).uid?(J(),Vn(tJ,{key:2,data:f},null,8,["data"])):(J(),Vn(KG,{key:3,data:f},null,8,["data"]))],64))),128))],2),R("div",{class:I(c.$style.scroll)},[Yo(R("div",{class:I(c.$style.btn),onClick:l},[he(p,{name:"io-arrow-down-outline",class:I(c.$style.icon)},null,8,["class"])],2),[[ud,r.value]])],2)],2)}}},YJ={$style:AJ};var IJ=hn(xJ,[["__cssModules",YJ]]),OJ="/assets/bg-theme-1.b4e033ef.png",NJ="/assets/bg-theme-2.0ceb8c00.png",RJ="/assets/bg-theme-3.2a3d50e4.jpg",$J="/assets/bg-theme-4.63b825d2.png";const HJ="_chatTheme_b8gaj_1",UJ="_header_b8gaj_15",zJ="_wrapper_b8gaj_24",VJ="_user_b8gaj_31",WJ="_info_b8gaj_31",qJ="_avt_b8gaj_35",KJ="_avtName_b8gaj_41",GJ="_body_b8gaj_55",JJ="_content_b8gaj_60",XJ="_messages_b8gaj_67",QJ="_inputChat_b8gaj_71";var ZJ={chatTheme:HJ,header:UJ,wrapper:zJ,user:VJ,info:WJ,avt:qJ,avtName:KJ,body:GJ,content:JJ,messages:XJ,inputChat:QJ};const eX=["src"],nX={name:"ChatMainContent",setup(e){const n=Ra();it();const u=Ne(()=>n.getCurrentChatUser),o=Ne(()=>n.getTheme),i=Ne(()=>{var t;switch((t=o.value)==null?void 0:t.id){case 0:return null;case 1:return`url(${OJ})`;case 2:return`url(${NJ})`;case 3:return`url(${RJ})`;case 4:return`url(${$J})`;default:return null}});return(t,r)=>{var s,d;return J(),oe("div",{class:I(t.$style.chatTheme),style:tu({backgroundImage:xe(i)})},[R("div",{class:I(t.$style.header)},[R("div",{class:I(t.$style.wrapper)},[R("div",{class:I(t.$style.user)},[R("div",{class:I(t.$style.info)},[xe(u).photoURL?(J(),oe("img",{key:0,src:xe(u).photoURL||xe(e5),alt:"",class:I(t.$style.avt)},null,10,eX)):(J(),oe("div",{key:1,class:I(t.$style.avtName),style:tu({background:(s=xe(u).theme)==null?void 0:s.backgroundColor,color:(d=xe(u).theme)==null?void 0:d.textColor})},[R("span",null,yn(xe(ys)(xe(u).displayName).name),1)],6)),R("h3",{class:I(t.$style.username)},yn(xe(u).displayName),3)],2)],2),R("div",null,[he(IG)])],2)],2),R("div",{class:I(t.$style.body)},[R("div",{class:I(t.$style.wrapper)},[R("div",{class:I(t.$style.content)},[R("div",{class:I(t.$style.messages)},[he(IJ,{data:xe(u)},null,8,["data"])],2),R("div",{class:I(t.$style.inputChat)},[he(GK)],2)],2)],2)],2)],6)}}},uX={$style:ZJ};var oX=hn(nX,[["__cssModules",uX]]),iX="/assets/live_chat.45d07c60.png";const tX="_wl_1qae4_1",aX="_content_1qae4_5";var rX={wl:tX,content:aX};const sX=["src"],dX={name:"ChatMainWelcome",setup(e){const n=hi(),u=Ne(()=>n.getUserinfo);return(o,i)=>(J(),oe("div",{class:I(o.$style.wl)},[R("div",{class:I(o.$style.content)},[R("h2",null," Ch\xE0o m\u1EEBng "+yn(xe(u).username?xe(u).username:"b\u1EA1n")+" \u0111\u1EBFn v\u1EDBi app chat b\u1EADc th\u1EA7y ",1),R("img",{src:xe(iX),alt:""},null,8,sX)],2)],2))}},mX={$style:rX};var lX=hn(dX,[["__cssModules",mX]]);const cX="_chatMain_n1da6_1";var _X={chatMain:cX};const gX={name:"ChatMain",setup(e){const n=Ra(),u=Ne(()=>n.getCurrentChatUser);return(o,i)=>(J(),oe("div",{class:I(o.$style.chatMain)},[(J(),Vn(zb(xe(u).displayName?oX:lX)))],2))}},pX={$style:_X};var hX=hn(gX,[["__cssModules",pX]]),kX=Object.defineProperty,W6=Object.getOwnPropertySymbols,fX=Object.prototype.hasOwnProperty,yX=Object.prototype.propertyIsEnumerable,q6=(e,n,u)=>n in e?kX(e,n,{enumerable:!0,configurable:!0,writable:!0,value:u}):e[n]=u,FX=(e,n)=>{for(var u in n||(n={}))fX.call(n,u)&&q6(e,u,n[u]);if(W6)for(var u of W6(n))yX.call(n,u)&&q6(e,u,n[u]);return e},d5="usehead",K6="head:count",Xh="data-head-attrs",bX=(e,n,u)=>{const o=u.createElement(e);for(const i of Object.keys(n)){let t=n[i];i==="key"||t===!1||(i==="children"?o.textContent=t:o.setAttribute(i,t))}return o};function wX(e,n){if(e instanceof HTMLElement&&n instanceof HTMLElement){const u=n.getAttribute("nonce");if(u&&!e.getAttribute("nonce")){const o=n.cloneNode(!0);return o.setAttribute("nonce",""),o.nonce=u,u===e.nonce&&e.isEqualNode(o)}}return e.isEqualNode(n)}var jX=e=>{const n=["key","id","name","property"];for(const u of n){const o=typeof e.getAttribute=="function"?e.hasAttribute(u)?e.getAttribute(u):void 0:e[u];if(o!==void 0)return{name:u,value:o}}},DX=()=>{const e=oo(d5);if(!e)throw new Error("You may forget to apply app.use(head)");return e},vX=["title","meta","link","base","style","script","htmlAttrs","bodyAttrs"],BX=e=>{const n=[];for(const u of Object.keys(e))if(e[u]!=null){if(u==="title")n.push({tag:u,props:{children:e[u]}});else if(u==="base")n.push({tag:u,props:FX({key:"default"},e[u])});else if(vX.includes(u)){const o=e[u];Array.isArray(o)?o.forEach(i=>{n.push({tag:u,props:i})}):o&&n.push({tag:u,props:o})}}return n},G6=(e,n)=>{const u=e.getAttribute(Xh);if(u)for(const i of u.split(","))i in n||e.removeAttribute(i);const o=[];for(const i in n){const t=n[i];t!=null&&(t===!1?e.removeAttribute(i):e.setAttribute(i,t),o.push(i))}o.length?e.setAttribute(Xh,o.join(",")):e.removeAttribute(Xh)},PX=(e=window.document,n,u)=>{var o;const i=e.head;let t=i.querySelector(`meta[name="${K6}"]`);const r=t?Number(t.getAttribute("content")):0,s=[];if(t)for(let l=0,c=t.previousElementSibling;l<r;l++,c=(c==null?void 0:c.previousElementSibling)||null)((o=c==null?void 0:c.tagName)==null?void 0:o.toLowerCase())===n&&s.push(c);else t=e.createElement("meta"),t.setAttribute("name",K6),t.setAttribute("content","0"),i.append(t);let d=u.map(l=>bX(l.tag,l.props,e));d=d.filter(l=>{for(let c=0;c<s.length;c++){const _=s[c];if(wX(_,l))return s.splice(c,1),!1}return!0}),s.forEach(l=>{var c;return(c=l.parentNode)==null?void 0:c.removeChild(l)}),d.forEach(l=>{i.insertBefore(l,t)}),t.setAttribute("content",""+(r-s.length+d.length))},EX=()=>{let e=[],n=new Set;const u={install(o){o.config.globalProperties.$head=u,o.provide(d5,u)},get headTags(){const o=[];return e.forEach(i=>{BX(i.value).forEach(r=>{if(r.tag==="meta"||r.tag==="base"||r.tag==="script"){const s=jX(r.props);if(s){let d=-1;for(let l=0;l<o.length;l++){const c=o[l],_=c.props[s.name],p=r.props[s.name];if(c.tag===r.tag&&_===p){d=l;break}}d!==-1&&o.splice(d,1)}}o.push(r)})}),o},addHeadObjs(o){e.push(o)},removeHeadObjs(o){e=e.filter(i=>i!==o)},updateDOM(o=window.document){let i,t={},r={};const s={};for(const l of u.headTags){if(l.tag==="title"){i=l.props.children;continue}if(l.tag==="htmlAttrs"){Object.assign(t,l.props);continue}if(l.tag==="bodyAttrs"){Object.assign(r,l.props);continue}s[l.tag]=s[l.tag]||[],s[l.tag].push(l)}i!==void 0&&(o.title=i),G6(o.documentElement,t),G6(o.body,r);const d=new Set([...Object.keys(s),...n]);for(const l of d)PX(o,l,s[l]||[]);n.clear(),Object.keys(s).forEach(l=>n.add(l))}};return u},MX=typeof window!="undefined",Ip=e=>{const n=Pe(e),u=DX();u.addHeadObjs(n),MX&&(rc(()=>{u.updateDOM()}),dc(()=>{u.removeHeadObjs(n),u.updateDOM()}))};const J6={name:"index",setup(e){return Ip({title:"Tin nh\u1EAFn"}),(n,u)=>(J(),Vn(QP,null,{sidebar:ao(()=>[he(eK)]),body:ao(()=>[he(hX)]),_:1}))}},TX="_layout_1xait_1",SX="_layoutFilter_1xait_13",LX="_item_1xait_13",CX="_content_1xait_39";var AX={layout:TX,layoutFilter:SX,item:LX,content:CX};const xX={};function YX(e,n){return J(),oe("div",{class:I(e.$style.layout)},[R("div",{class:I(e.$style.layoutFilter)},[R("span",{class:I(e.$style.item)},null,2),R("span",{class:I(e.$style.item)},null,2),R("span",{class:I(e.$style.item)},null,2)],2),R("div",{class:I(e.$style.content)},[cd(e.$slots,"default")],2)],2)}const IX={$style:AX};var m5=hn(xX,[["render",YX],["__cssModules",IX]]);const OX="_pop_1hztk_1",NX="_iconBox_1hztk_14",RX="_icon_1hztk_14",$X="_text_1hztk_25";var HX={pop:OX,iconBox:NX,icon:RX,text:$X};const UX={name:"PopupNotification",props:["content"],setup(e){return(n,u)=>{const o=kn("v-icon");return J(),oe("div",{class:I(n.$style.pop)},[R("div",{class:I(n.$style.iconBox)},[he(o,{name:"pr-times",class:I(n.$style.icon)},null,8,["class"])],2),R("p",{class:I(n.$style.text)},yn(e.content),3)],2)}}},zX={$style:HX};var VX=hn(UX,[["__cssModules",zX]]);const WX="_form_ssax_1",qX="_heading_ssax_6",KX="_content_ssax_9",GX="_inputBox_ssax_14",JX="_hidePassBtn_ssax_22",XX="_icon_ssax_28",QX="_input_ssax_14",ZX="_btnSubmit_ssax_40",eQ="_forgetPass_ssax_58",nQ="_link_ssax_63";var uQ={form:WX,heading:qX,content:KX,inputBox:GX,hidePassBtn:JX,icon:XX,input:QX,btnSubmit:ZX,forgetPass:eQ,link:nQ};const oQ=["onKeydown"],iQ=["type","onKeydown"],tQ=mc(" Ch\u01B0a c\xF3 t\xE0i kho\u1EA3n? \u0110\u0103ng k\xFD ngay "),aQ=["disabled"],rQ={name:"FormSignIn",setup(e){const n=Pe(!1),u=Pe(!0),o=Pe(!1),i=Ne(()=>n.value?"text":"password"),t=Cn({email:"",password:""});async function r(){if(console.log(t),u)try{const d=await VS(os,t.email,t.password);console.log(d);const l=d.user}catch(d){o.value=!0,t.password="",t.email="",setTimeout(()=>{o.value=!1},5e3),console.log(d)}}function s(d){d.pointerType==="mouse"?n.value=!n.value:r()}return vn(t,d=>{d.password.length>=6?(console.log(d.password.length),d.email?u.value=!1:u.value=!0):u.value=!0,console.log(u.value)}),(d,l)=>{const c=kn("v-icon"),_=kn("router-link");return J(),oe(sn,null,[R("form",{class:I(d.$style.form),onSubmit:l[2]||(l[2]=Hr(()=>{},["prevent"]))},[R("h2",{class:I(d.$style.heading)},"Hello !",2),R("p",{class:I(d.$style.content)},"Welcome to Chat app master",2),R("div",{class:I(d.$style.inputBox)},[Yo(R("input",{class:I(d.$style.input),type:"email",placeholder:"Email","onUpdate:modelValue":l[0]||(l[0]=p=>t.email=p),onKeydown:h1(r,["enter"])},null,42,oQ),[[gd,t.email]])],2),R("div",{class:I(d.$style.inputBox)},[Yo(R("input",{class:I(d.$style.input),type:xe(i),placeholder:"M\u1EADt kh\u1EA9u","onUpdate:modelValue":l[1]||(l[1]=p=>t.password=p),onKeydown:h1(r,["enter"])},null,42,iQ),[[p1,t.password]]),n.value?(J(),oe("button",{key:0,onClick:s,class:I(d.$style.hidePassBtn)},[he(c,{name:"md-removeredeye",class:I(d.$style.icon)},null,8,["class"])],2)):(J(),oe("button",{key:1,onClick:s,class:I(d.$style.hidePassBtn)},[he(c,{name:"fa-regular-eye-slash",class:I(d.$style.icon)},null,8,["class"])],2))],2),R("div",{class:I(d.$style.forgetPass)},[he(_,{class:I(d.$style.link),to:{path:"/register"}},{default:ao(()=>[tQ]),_:1},8,["class"])],2),R("button",{type:"submit",disabled:u.value,class:I(d.$style.btnSubmit),onClick:r}," \u0110\u0103ng nh\u1EADp ",10,aQ)],34),o.value?(J(),Vn(VX,{key:0,content:"Email ho\u1EB7c m\u1EADt kh\u1EA9u kh\xF4ng ch\xEDnh x\xE1c"})):wn("",!0)],64)}}},sQ={$style:uQ};var dQ=hn(rQ,[["__cssModules",sQ]]);const mQ="_btn_x2j60_1",lQ="_icon_x2j60_8";var cQ={btn:mQ,icon:lQ};const _Q={name:"Button",props:["icon"],setup(e){const u=e.icon==="google"?"fc-google":"fa-facebook";return(o,i)=>{const t=kn("v-icon");return J(),oe("button",{class:I(o.$style.btn)},[he(t,{name:xe(u),class:I(o.$style.icon)},null,8,["name","class"])],2)}}},gQ={$style:cQ};var X6=hn(_Q,[["__cssModules",gQ]]);const ht=[255,0,0];function Mk(){ht[0]=Math.round(Math.random()*255),ht[1]=Math.round(Math.random()*255),ht[2]=Math.round(Math.random()*255);const n=Math.round((parseInt(ht[0])*299+parseInt(ht[1])*587+parseInt(ht[2])*114)/1e3)>150?"black":"white",u="rgb("+ht[0]+","+ht[1]+","+ht[2]+")";return{textColor:n,backgroundColor:u}}const pQ="_comboButton_1cs1d_1";var hQ={comboButton:pQ};const kQ={name:"SignInWith",setup(e){async function n(){const{_tokenResponse:o,user:i}=await v3(os,zN);o!=null&&o.isNewUser&&Y_("users",{displayName:i.displayName,email:i.email,photoURL:i.photoURL,uid:i.uid,providerId:o.providerId,friends:[],theme:Mk()})}async function u(){const{_tokenResponse:o,user:i}=await v3(os,UN);o!=null&&o.isNewUser&&Y_("users",{displayName:i.displayName,email:i.email,photoURL:i.photoURL,uid:i.uid,providerId:o.providerId,friends:[],theme:Mk()})}return(o,i)=>(J(),oe("div",{class:I(o.$style.comboButton)},[he(X6,{icon:"google",onClick:n}),he(X6,{onClick:u})],2))}},fQ={$style:hQ};var yQ=hn(kQ,[["__cssModules",fQ]]);const FQ="_loginForm_9i5b0_1",bQ="_orLogin_9i5b0_10";var wQ={loginForm:FQ,orLogin:bQ};const jQ={name:"LoginForm",setup(e){return(n,u)=>(J(),oe("div",{class:I(n.$style.loginForm)},[he(dQ),R("p",{class:I(n.$style.orLogin)},"Ho\u1EB7c \u0111\u0103ng nh\u1EADp v\u1EDBi",2),he(yQ)],2))}},DQ={$style:wQ};var vQ=hn(jQ,[["__cssModules",DQ]]);const BQ={name:"index",setup(e){return Ip({title:"\u0110\u0103ng nh\u1EADp"}),(n,u)=>(J(),Vn(m5,null,{default:ao(()=>[he(vQ)]),_:1}))}};function PQ(e){for(var n=5381,u=e.length;u;)n=n*33^e.charCodeAt(--u);return n>>>0}var EQ=PQ;const MQ="_action_1bmpk_1",TQ="_btn_1bmpk_5",SQ="_noti_1bmpk_19",LQ="_btnActive_1bmpk_31",CQ="_listFirend_1bmpk_35",AQ="_item_1bmpk_39",xQ="_displayName_1bmpk_46",YQ="_avt_1bmpk_49",IQ="_avtImg_1bmpk_54",OQ="_avtText_1bmpk_59",NQ="_content_1bmpk_70",RQ="_icon_1bmpk_79",$Q="_info_1bmpk_84",HQ="_itemActive_1bmpk_101";var UQ={action:MQ,btn:TQ,noti:SQ,btnActive:LQ,listFirend:CQ,item:AQ,displayName:xQ,avt:YQ,avtImg:IQ,avtText:OQ,content:NQ,icon:RQ,info:$Q,itemActive:HQ};const zQ=["onClick"],VQ=["src"],WQ={name:"ListFriend",setup(e){const n=it(),u=hi(),o=Ne(()=>u.getUserinfo),i=Ne(()=>n.getListFriend),t=gg(),r=Pe(!1);r.value=window.innerWidth<=768,Ri(()=>{window.addEventListener("resize",()=>{r.value=window.innerWidth<=768})});async function s(d){const l=await VN(o.value.uid,d.uid);if(console.log(l),l)t.push({path:"/"});else{const c=EQ(o.value.uid+d.uid);await Y_("chats",{id:o.value.uid+d.uid,urlId:c,name:"",membersInfo:[o.value,d],members:[o.value.uid,d.uid],theme:{id:0,name:"M\u1EB7c \u0111\u1ECBnh",right:{bg:"rgb(236,83,42)",color:"#fff"},left:{bg:"#E4E6EB",color:"#000"},background:"",preview:!1}}),t.push({name:"chat",params:{id:c}})}}return(d,l)=>{const c=kn("v-icon");return J(),oe(sn,null,[wn("",!0),R("div",{class:I(d.$style.listFirend)},[(J(!0),oe(sn,null,Oi(xe(i),_=>(J(),oe("div",{key:_.index,class:I([d.$style.item,{[d.$style.itemActive]:_===2}]),onClick:p=>s(_)},[R("div",{class:I(d.$style.avt)},[_.photoURL?(J(),oe("img",{key:0,src:_.photoURL||xe(GP),alt:"",class:I(d.$style.avtImg)},null,10,VQ)):(J(),oe("div",{key:1,class:I(d.$style.avtText),style:tu({background:_.theme.backgroundColor,color:_.theme.textColor})},[R("span",null,yn(xe(ys)(_.displayName).name),1)],6))],2),r.value?wn("",!0):(J(),oe("div",{key:0,class:I(d.$style.content)},[R("div",null,[R("h3",{class:I(d.$style.displayName)},yn(_.displayName),3)]),R("button",{class:I(d.$style.btn)},[he(c,{name:"bi-chat-text",class:I(d.$style.icon)},null,8,["class"])],2)],2))],10,zQ))),128))],2)],64)}}},qQ={$style:UQ};var KQ=hn(WQ,[["__cssModules",qQ]]);const GQ="_heading_1qokp_1";var JQ={heading:GQ};const XQ=mc(" B\u1EA1n b\xE8 "),QQ={name:"FriendSideBar",setup(e){const n=Pe(!1);return n.value=window.innerWidth<=768,Ri(()=>{window.addEventListener("resize",()=>{n.value=window.innerWidth<=768})}),(u,o)=>(kn("v-icon"),J(),oe(sn,null,[R("h3",{class:I(u.$style.heading)},[XQ,wn("",!0)],2),n.value?wn("",!0):(J(),Vn(ZP,{key:0})),he(KQ)],64))}},ZQ={$style:JQ};var eZ=hn(QQ,[["__cssModules",ZQ]]);const nZ="_heading_rkt4t_1",uZ="_list_rkt4t_5",oZ="_item_rkt4t_10",iZ="_img_rkt4t_17",tZ="_avtText_rkt4t_22";var aZ={heading:nZ,list:uZ,item:oZ,img:iZ,avtText:tZ};const rZ=R("p",null,"G\u1EE3i \xFD b\u1EA1n b\xE8",-1),sZ=[rZ],dZ=["src"],mZ=["onClick"],lZ={name:"FriendView",setup(e){const n=hi(),u=Cn({users:[]}),o=Ne(()=>n.getFriendIds);rc(async()=>{if(o.value){const t=Bu(iu,"users"),r=po(t,xN("createdAt","desc"),IN(10));await ho(r),Xs(r,s=>{u.users=[],s.forEach(async d=>{o.value.findIndex(c=>c===d.data().uid)===-1&&u.users.push(d.data())})})}});async function i(t){const r=t,s=n.userinfo,d={send:s,receive:{displayName:r.displayName,photoURL:r.photoURL,uid:r.uid,theme:r.theme},message:`${s.displayName} \u0111\xE3 g\u1EEDi \u0111\u1EBFn b\u1EA1n l\u1EDDi m\u1EDDi k\u1EBFt b\u1EA1n`,data:null,uidReceive:r.uid,type:"addfriend"};XP(d)}return(t,r)=>(J(),oe(sn,null,[R("div",{class:I(t.$style.heading)},sZ,2),R("div",{class:I(t.$style.list)},[(J(!0),oe(sn,null,Oi(u.users,s=>(J(),oe("div",{class:I(t.$style.item),key:s.index},[s.photoURL?(J(),oe("img",{key:0,src:s.photoURL?s.photoURL:xe(e5),alt:"",class:I(t.$style.img)},null,10,dZ)):(J(),oe("div",{key:1,class:I(t.$style.avtText),style:tu({background:s.theme.backgroundColor,color:s.theme.textColor})},[R("span",null,yn(xe(ys)(s.displayName).name),1)],6)),R("h3",null,yn(s.displayName),1),R("button",{onClick:d=>i(s)},"K\u1EBFt b\u1EA1n",8,mZ)],2))),128))],2)],64))}},cZ={$style:aZ};var _Z=hn(lZ,[["__cssModules",cZ]]);const gZ="_header_ak2ff_1",pZ="_wrapper_ak2ff_7",hZ="_user_ak2ff_14",kZ="_info_ak2ff_14",fZ="_avt_ak2ff_18",yZ="_btn_ak2ff_24",FZ="_icon_ak2ff_30",bZ="_body_ak2ff_39",wZ="_content_ak2ff_44",jZ="_messages_ak2ff_51",DZ="_inputChat_ak2ff_55";var vZ={header:gZ,wrapper:pZ,user:hZ,info:kZ,avt:fZ,btn:yZ,icon:FZ,body:bZ,content:wZ,messages:jZ,inputChat:DZ};const BZ={name:"FriendMain",setup(e){return(n,u)=>{const o=kn("v-icon");return J(),oe(sn,null,[R("div",{class:I(n.$style.header)},[R("div",{class:I(n.$style.wrapper)},[R("div",{class:I(n.$style.user)},[R("div",{class:I(n.$style.info)},[R("h2",{class:I(n.$style.username)},"Danh s\xE1ch b\u1EA1n b\xE8",2)],2)],2),R("div",null,[R("button",{class:I(n.$style.btn)},[he(o,{name:"ri-search-2-line",class:I(n.$style.icon)},null,8,["class"])],2)])],2)],2),R("div",{class:I(n.$style.body)},[R("div",{class:I(n.$style.wrapper)},[R("div",{class:I(n.$style.content)},[R("div",{class:I(n.$style.messages)},[he(_Z)],2)],2)],2)],2)],64)}}},PZ={$style:vZ};var EZ=hn(BZ,[["__cssModules",PZ]]);const MZ={name:"index",setup(e){return Ip({title:"B\u1EA1n b\xE8"}),(n,u)=>(J(),Vn(QP,null,{sidebar:ao(()=>[he(eZ)]),body:ao(()=>[he(EZ)]),_:1}))}},TZ="_form_ssax_1",SZ="_heading_ssax_6",LZ="_content_ssax_9",CZ="_inputBox_ssax_14",AZ="_hidePassBtn_ssax_22",xZ="_icon_ssax_28",YZ="_input_ssax_14",IZ="_btnSubmit_ssax_40",OZ="_forgetPass_ssax_58",NZ="_link_ssax_63";var RZ={form:TZ,heading:SZ,content:LZ,inputBox:CZ,hidePassBtn:AZ,icon:xZ,input:YZ,btnSubmit:IZ,forgetPass:OZ,link:NZ};const $Z=["type"],HZ=["type"],UZ=mc(" Quay l\u1EA1i \u0111\u0103ng nh\u1EADp "),zZ=["disabled"],VZ={name:"RegisterDetail",setup(e){const n=Pe(!1),u=Ne(()=>n.value?"text":"password"),o=Cn({email:"",password:"",name:""}),i=Pe(""),t=Pe(!1);vn(i,l=>{r(l,o.password)}),vn(o,l=>{r(l.password,i.value)});function r(l,c){l===c?o.password.length<6?t.value=!1:o.email&&o.name?t.value=!0:t.value=!1:t.value=!1}async function s(){console.log(o);const l=await zS(os,o.email,o.password);await qS(os.currentUser,{displayName:o.name,photoURL:""}),console.log(l.user);const c=l.user;Y_("users",{displayName:c.displayName,email:c.email,photoURL:c.photoURL,uid:c.uid,providerId:c.providerId,friends:[],theme:Mk()})}function d(){n.value=!n.value}return(l,c)=>{const _=kn("v-icon"),p=kn("router-link");return J(),oe("form",{class:I(l.$style.form),onSubmit:c[4]||(c[4]=Hr(()=>{},["prevent"]))},[R("h2",{class:I(l.$style.heading)},"Hello !",2),R("p",{class:I(l.$style.content)},"Welcome to Chat app master",2),R("div",{class:I(l.$style.inputBox)},[Yo(R("input",{class:I(l.$style.input),type:"text",placeholder:"T\xEAn b\u1EA1n","onUpdate:modelValue":c[0]||(c[0]=f=>o.name=f),required:""},null,2),[[gd,o.name]])],2),R("div",{class:I(l.$style.inputBox)},[Yo(R("input",{class:I(l.$style.input),type:"email",placeholder:"Email","onUpdate:modelValue":c[1]||(c[1]=f=>o.email=f),required:""},null,2),[[gd,o.email]])],2),R("div",{class:I(l.$style.inputBox)},[Yo(R("input",{class:I(l.$style.input),type:xe(u),placeholder:"M\u1EADt kh\u1EA9u","onUpdate:modelValue":c[2]||(c[2]=f=>o.password=f),required:""},null,10,$Z),[[p1,o.password]]),n.value?(J(),oe("button",{key:0,onClick:d,class:I(l.$style.hidePassBtn)},[he(_,{name:"md-removeredeye",class:I(l.$style.icon)},null,8,["class"])],2)):(J(),oe("button",{key:1,onClick:d,class:I(l.$style.hidePassBtn)},[he(_,{name:"fa-regular-eye-slash",class:I(l.$style.icon)},null,8,["class"])],2))],2),R("div",{class:I(l.$style.inputBox)},[Yo(R("input",{class:I(l.$style.input),type:xe(u),placeholder:"Nh\u1EADp l\u1EA1i m\u1EADt kh\u1EA9u","onUpdate:modelValue":c[3]||(c[3]=f=>i.value=f),required:""},null,10,HZ),[[p1,i.value]]),n.value?(J(),oe("button",{key:0,onClick:d,class:I(l.$style.hidePassBtn)},[he(_,{name:"md-removeredeye",class:I(l.$style.icon)},null,8,["class"])],2)):(J(),oe("button",{key:1,onClick:d,class:I(l.$style.hidePassBtn)},[he(_,{name:"fa-regular-eye-slash",class:I(l.$style.icon)},null,8,["class"])],2))],2),R("div",{class:I(l.$style.forgetPass)},[he(p,{class:I(l.$style.link),to:{path:"/login"}},{default:ao(()=>[UZ]),_:1},8,["class"])],2),R("button",{class:I(l.$style.btnSubmit),disabled:!t.value,onClick:s}," \u0110\u0103ng k\xFD ",10,zZ)],34)}}},WZ={$style:RZ};var qZ=hn(VZ,[["__cssModules",WZ]]);const KZ="_loginForm_9i5b0_1",GZ="_orLogin_9i5b0_10";var JZ={loginForm:KZ,orLogin:GZ};const XZ={name:"RegisterForm",setup(e){return(n,u)=>(J(),oe("div",{class:I(n.$style.loginForm)},[he(qZ)],2))}},QZ={$style:JZ};var ZZ=hn(XZ,[["__cssModules",QZ]]);const eee={name:"index",setup(e){return Ip({title:"\u0110\u0103ng k\xFD"}),(n,u)=>(J(),Vn(m5,null,{default:ao(()=>[he(ZZ)]),_:1}))}},nee=I7({history:e7("/"),routes:[{path:"/",name:"home",component:J6},{path:"/login",name:"login",component:BQ},{path:"/register",name:"register",component:eee},{path:"/friends",name:"friends",component:MZ},{path:"/t/:id",name:"chat",component:J6}]});var l5=Symbol(),c5=Symbol(),_5=Symbol();function uee(e){var n=Pe([]),u=function(r,s){return s?Array.prototype.indexOf.call(r,s):-1},o=function(r){var s,d,l=(d=(s=r[0].originRef)===null||s===void 0?void 0:s.parentNode)===null||d===void 0?void 0:d.children;l&&l.length&&r.sort(function(c,_){return u(l,c.originRef)-u(l,_.originRef)})},i=function(r){var s=n.value.findIndex(function(d){var l=d.key;return r.key===l});s>-1?n.value.splice(s,1,r):(n.value.push(r),o(n.value))},t=function(r){var s=n.value.filter(function(l){return l.key!==r}),d=s.length-1;n.value=s,e.value=Math.max(Math.min(e.value,d),0)};return{items:n,updateItem:i,removeItem:t}}function oee(e,n,u){var o=Pe(!1),i=function(){o.value=!1,u()},t=function(r){var s=e.value.findIndex(function(d){return d.key===r});s>-1&&(n.value=s,o.value=!0,u())};return{visible:o,handleHide:i,handleShow:t}}function iee(e){var n=Pe(0),u=function(o){n.value=o,e()};return{index:n,updateIndex:u}}var RF=Wu({});const tee={class:"PhotoView__Spinner"},aee=R("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:"36",height:"36",fill:"white"},[R("path",{opacity:".25",d:"M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"}),R("path",{d:"M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z"})],-1),ree=[aee];function see(e,n,u,o,i,t){return J(),oe("div",tee,ree)}RF.render=see;RF.__file="src/PhotoView/Spinner.vue";function dee(e,n,u){var o,i=window.innerWidth,t=window.innerHeight,r=u%180!==0;r&&(o=[t,i],i=o[0],t=o[1]);var s,d,l=i/e,c=t/n;return e<i&&n<t?(s=e,d=n):l<c?(s=i,d=i*(n/e)):(s=t*(e/n),d=t),{width:s,height:d}}function mee(e){var n=Pe(0),u=Pe(0),o=Pe(0),i=Pe(0),t=Pe(!1);function r(d,l,c){var _=dee(d,l,c);o.value=_.width,i.value=_.height}var s=function(d){t.value=!1;var l=new Image;l.onload=function(){n.value=l.naturalWidth,u.value=l.naturalHeight,r(n.value,u.value,0),t.value=!0},l.src=d};return s(e.value),vn(e,function(){s(e.value)}),{width:o,height:i,loaded:t,naturalWidth:n,naturalHeight:u,setSuitableImageSize:r}}function Z_(e){var n=typeof e;return e!=null&&(n=="object"||n=="function")}var lee=typeof global=="object"&&global&&global.Object===Object&&global,cee=lee,_ee=typeof self=="object"&&self&&self.Object===Object&&self,gee=cee||_ee||Function("return this")(),g5=gee,pee=function(){return g5.Date.now()},Qh=pee,hee=/\s/;function kee(e){for(var n=e.length;n--&&hee.test(e.charAt(n)););return n}var fee=/^\s+/;function yee(e){return e&&e.slice(0,kee(e)+1).replace(fee,"")}var Fee=g5.Symbol,Nd=Fee,p5=Object.prototype,bee=p5.hasOwnProperty,wee=p5.toString,Om=Nd?Nd.toStringTag:void 0;function jee(e){var n=bee.call(e,Om),u=e[Om];try{e[Om]=void 0;var o=!0}catch{}var i=wee.call(e);return o&&(n?e[Om]=u:delete e[Om]),i}var Dee=Object.prototype,vee=Dee.toString;function Bee(e){return vee.call(e)}var Pee="[object Null]",Eee="[object Undefined]",Q6=Nd?Nd.toStringTag:void 0;function Mee(e){return e==null?e===void 0?Eee:Pee:Q6&&Q6 in Object(e)?jee(e):Bee(e)}function Tee(e){return e!=null&&typeof e=="object"}var See="[object Symbol]";function h5(e){return typeof e=="symbol"||Tee(e)&&Mee(e)==See}var Z6=0/0,Lee=/^[-+]0x[0-9a-f]+$/i,Cee=/^0b[01]+$/i,Aee=/^0o[0-7]+$/i,xee=parseInt;function eb(e){if(typeof e=="number")return e;if(h5(e))return Z6;if(Z_(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=Z_(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=yee(e);var u=Cee.test(e);return u||Aee.test(e)?xee(e.slice(2),u?2:8):Lee.test(e)?Z6:+e}var Yee="Expected a function",Iee=Math.max,Oee=Math.min;function k5(e,n,u){var o,i,t,r,s,d,l=0,c=!1,_=!1,p=!0;if(typeof e!="function")throw new TypeError(Yee);n=eb(n)||0,Z_(u)&&(c=!!u.leading,_="maxWait"in u,t=_?Iee(eb(u.maxWait)||0,n):t,p="trailing"in u?!!u.trailing:p);function f(C){var L=o,T=i;return o=i=void 0,l=C,r=e.apply(T,L),r}function y(C){return l=C,s=setTimeout(v,n),c?f(C):r}function D(C){var L=C-d,T=C-l,q=n-L;return _?Oee(q,t-T):q}function P(C){var L=C-d,T=C-l;return d===void 0||L>=n||L<0||_&&T>=t}function v(){var C=Qh();if(P(C))return j(C);s=setTimeout(v,D(C))}function j(C){return s=void 0,p&&o?f(C):(o=i=void 0,r)}function M(){s!==void 0&&clearTimeout(s),l=0,o=d=i=s=void 0}function S(){return s===void 0?r:j(Qh())}function $(){var C=Qh(),L=P(C);if(o=arguments,i=this,d=C,L){if(s===void 0)return y(d);if(_)return clearTimeout(s),s=setTimeout(v,n),f(d)}return s===void 0&&(s=setTimeout(v,n)),r}return $.cancel=M,$.flush=S,$}var Nee="Expected a function";function $F(e,n,u){var o=!0,i=!0;if(typeof e!="function")throw new TypeError(Nee);return Z_(u)&&(o="leading"in u?!!u.leading:o,i="trailing"in u?!!u.trailing:i),k5(e,n,{leading:o,maxWait:n,trailing:i})}function Ree(e,n,u,o){var i=$F(function(){o(e.value,n.value,u.value)},8);window.addEventListener("resize",i),dc(function(){window.removeEventListener("resize",i)})}var vt;(function(e){e[e.None=0]="None",e[e.In=1]="In",e[e.Out=2]="Out"})(vt||(vt={}));var du;(function(e){e[e.Normal=0]="Normal",e[e.X=1]="X",e[e.Y=2]="Y",e[e.Scale=3]="Scale"})(du||(du={}));var mi;(function(e){e[e.Left=0]="Left",e[e.Right=1]="Right",e[e.Top=2]="Top",e[e.Bottom=3]="Bottom"})(mi||(mi={}));function $ee(e){if(e){var n=window.innerWidth,u=window.innerHeight,o=e.left+e.width/2-n/2,i=e.top+e.height/2-u/2;return"".concat(o,"px ").concat(i,"px")}return null}var gr=typeof document!="undefined"&&"ontouchstart"in document.documentElement,Hee=20,nb=10,U0=40,ub=6;function Uee(e,n){var u=0,o=k5(function(){for(var i=[],t=0;t<arguments.length;t++)i[t]=arguments[t];u=0,e.apply(void 0,i)},300);return function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];u+=1,o.apply(void 0,t),u>=2&&(o.cancel(),u=0,n.apply(void 0,t))}}function ob(e){var n=e.x,u=e.y,o=e.clientX,i=e.clientY,t=e.fromScale,r=e.toScale,s=window.innerWidth,d=window.innerHeight,l=s/2+n,c=d/2+u,_=r/t,p=-(o-l)*(_-1),f=-(i-c)*(_-1);return{x:p+n,y:f+u,scale:r}}function f5(e){var n,u=e.width,o=e.height,i=e.scale,t=e.rotate,r=t%180!==0;r&&(n=[o,u],u=n[0],o=n[1]);var s=window.innerWidth,d=window.innerHeight,l=u*i,c=o*i,_,p,f,y;return l>s?(_=(l-s)/2,p=-(l-s)/2):(_=0,p=0),c>d?(f=(c-d)/2,y=-(c-d)/2):(f=0,y=0),{edgeLeft:_,edgeRight:p,edgeTop:f,edgeBottom:y}}function zee(e){var n=e.width,u=e.height,o=e.scale,i=e.rotate,t=e.x,r=e.y,s=f5({width:n,height:u,scale:o,rotate:i}),d=[];return t===s.edgeLeft&&d.push(mi.Left),t===s.edgeRight&&d.push(mi.Right),r===s.edgeTop&&d.push(mi.Top),r===s.edgeBottom&&d.push(mi.Bottom),d}function Vee(e){var n=e.width,u=e.height,o=e.scale,i=e.rotate,t=e.x,r=e.y,s=f5({width:n,height:u,scale:o,rotate:i}),d=s.edgeLeft,l=s.edgeRight,c=s.edgeTop,_=s.edgeBottom;return t>d&&(t=d),t<l&&(t=l),r>c&&(r=c),r<_&&(r=_),{x:t,y:r,scale:o}}function ib(e){var n=e.touches[0],u=n.clientX,o=n.clientY;if(e.touches.length>=2){var i=e.touches[1],t=i.clientX,r=i.clientY;return{clientX:(u+t)/2,clientY:(o+r)/2,touchLength:Math.sqrt(Math.pow(t-u,2)+Math.pow(r-o,2))}}return{clientX:u,clientY:o,touchLength:0}}function Wee(e,n,u,o,i,t,r,s,d){var l=Pe(0),c=Pe(0),_=Pe(1),p=Pe(0),f=Pe(!1),y=Pe(0),D=Pe(0),P=Pe(du.Normal),v=Pe(0),j=Pe(0),M=Pe(0),S=[],$=function(Te){gr||(L(Te.clientX,Te.clientY,0),window.addEventListener("mousemove",T),window.addEventListener("mouseup",X))},C=function(Te){if(!!gr){var Ce=ib(Te);L(Ce.clientX,Ce.clientY,Ce.touchLength),window.addEventListener("touchmove",q),window.addEventListener("touchend",Z)}},L=function(Te,Ce,Ge){f.value=!0,y.value=Te,D.value=Ce,M.value=Ge,S=zee({width:e.value,height:n.value,scale:_.value,rotate:p.value,x:v.value,y:j.value}),t(Te,Ce)},T=function(Te){gr||!f.value||V(Te.clientX,Te.clientY,0)},q=function(Te){if(!(!gr||!f.value)){var Ce=ib(Te);V(Ce.clientX,Ce.clientY,Ce.touchLength)}},V=$F(function(Te,Ce,Ge){if(P.value===du.Normal)if(_.value!==1||Ge)P.value=du.Scale;else{var rn=Math.abs(Te-y.value)>nb,Q=Math.abs(Ce-D.value)>nb;if(!rn&&!Q)return;P.value=rn?du.X:du.Y}r(P.value,Te,Ce,S);var ye=Te-y.value,de=Ce-D.value;if(P.value===du.Y&&(l.value=ye+v.value,c.value=de+j.value),P.value===du.Scale)if(Ge){var te=_.value+(Ge-M.value)/100/2*_.value,en=Math.max(Math.min(te,Math.max(ub,u.value/e.value)),1);Me(en,Te,Ce),M.value=Ge}else!(ye>0&&S.includes(mi.Left))&&!(ye<0&&S.includes(mi.Right))&&(l.value=ye+v.value),c.value=de+j.value},8,{trailing:!1}),X=function(Te){gr||(Ye(Te.clientX,Te.clientY,Te),window.removeEventListener("mousemove",T),window.removeEventListener("mouseup",X))},Z=function(Te){if(!!gr){var Ce=Te.changedTouches[0];Ye(Ce.clientX,Ce.clientY,Te),window.removeEventListener("touchmove",q),window.removeEventListener("touchend",Z)}},ke=function(Te,Ce){if(P.value===du.Normal)if(_.value===1){var Ge=Math.max(2,u.value/e.value),rn=ob({x:l.value,y:c.value,clientX:Te,clientY:Ce,fromScale:_.value,toScale:Ge});l.value=rn.x,c.value=rn.y,_.value=rn.scale}else l.value=0,c.value=0,_.value=1},me=Uee(d,ke),Ye=function(Te,Ce,Ge){y.value===Te&&D.value===Ce&&me(Te,Ce,Ge),s(P.value,Te,Ce,S),P.value===du.Y&&(l.value=0,c.value=0),P.value===du.Scale&&be({width:e.value,height:n.value,scale:_.value,rotate:p.value,x:l.value,y:c.value}),f.value=!1,P.value=du.Normal,y.value=0,D.value=0,v.value=l.value,j.value=c.value},Se=function(Te){var Ce=_.value-Te.deltaY/100/2,Ge=Math.max(Math.min(Ce,Math.max(ub,u.value/e.value)),1);Me(Ge,Te.clientX,Te.clientY)},Me=function(Te,Ce,Ge){var rn=ob({x:l.value,y:c.value,clientX:Ce,clientY:Ge,fromScale:_.value,toScale:Te});be({width:e.value,height:n.value,scale:rn.scale,rotate:p.value,x:rn.x,y:rn.y})},be=function(Te){var Ce=Vee(Te);l.value=Ce.x,c.value=Ce.y,v.value=Ce.x,j.value=Ce.y,_.value=Ce.scale},ln=function(){p.value=p.value-90,i(u.value,o.value,p.value),be({width:e.value,height:n.value,scale:_.value,rotate:p.value,x:l.value,y:c.value})},Fe=function(){p.value=p.value+90,i(u.value,o.value,p.value),be({width:e.value,height:n.value,scale:_.value,rotate:p.value,x:l.value,y:c.value})};return{x:l,y:c,scale:_,touched:f,handleMouseDown:$,handleTouchStart:C,handleWheel:Se,rotate:p,handleRotateLeft:ln,handleRotateRight:Fe}}var HF=Wu({name:"PhotoView",components:{Spinner:RF},props:{src:{type:String,required:!0},originRect:{type:Object,default:null},showAnimateType:{type:Number,default:null}},emits:["touchStart","touchMove","touchEnd","singleTap"],setup:function(e,n){var u=n.emit,o=ac(e).src,i=mee(o),t=i.width,r=i.height,s=i.loaded,d=i.naturalWidth,l=i.naturalHeight,c=i.setSuitableImageSize,_=function(V,X){u("touchStart",V,X)},p=function(V,X,Z,ke){u("touchMove",V,X,Z,ke)},f=function(V,X,Z,ke){u("touchEnd",V,X,Z,ke)},y=function(V,X,Z){u("singleTap",V,X,Z)},D=Wee(t,r,d,l,c,_,p,f,y),P=D.x,v=D.y,j=D.scale,M=D.rotate,S=D.touched,$=D.handleMouseDown,C=D.handleTouchStart,L=D.handleWheel,T=D.handleRotateLeft,q=D.handleRotateRight;return Ree(d,l,M,c),{width:t,height:r,loaded:s,x:P,y:v,scale:j,touched:S,handleMouseDown:$,handleTouchStart:C,handleWheel:L,rotate:M,handleRotateLeft:T,handleRotateRight:q}},data:function(){return{ShowAnimateEnum:vt,isFlipHorizontal:!1,isFlipVertical:!1}},methods:{getAnimateOrigin:$ee,toggleFlipHorizontal:function(){this.isFlipHorizontal=!this.isFlipHorizontal},toggleFlipVertical:function(){this.isFlipVertical=!this.isFlipVertical},getTransform:function(){var e="".concat(this.isFlipHorizontal?"-":"").concat(this.scale),n="".concat(this.isFlipVertical?"-":"").concat(this.scale),u={matrix:"".concat(e,", 0, 0, ").concat(n,", ").concat(this.x,", ").concat(this.y)};this.rotate&&(u.rotate="".concat(this.rotate,"deg"));var o="";return Object.keys(u).forEach(function(i){o+="".concat(i,"(").concat(u[i],")")}),o}}});const qee=["width","height","src"];function Kee(e,n,u,o,i,t){const r=kn("spinner");return e.loaded?(J(),oe("div",{key:0,class:"PhotoView__PhotoWrap",style:tu({width:`${e.width}px`,height:`${e.height}px`})},[R("div",{class:I(["PhotoView__PhotoBox",{PhotoView__animateIn:e.showAnimateType===e.ShowAnimateEnum.In,PhotoView__animateOut:e.showAnimateType===e.ShowAnimateEnum.Out}]),style:tu({transformOrigin:e.getAnimateOrigin(e.originRect)})},[R("img",{class:"PhotoView__Photo",width:e.width,height:e.height,src:e.src,style:tu({transform:e.getTransform(),transition:e.touched?void 0:"transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)"}),onMousedown:n[0]||(n[0]=Hr((...s)=>e.handleMouseDown&&e.handleMouseDown(...s),["prevent"])),onTouchstart:n[1]||(n[1]=Hr((...s)=>e.handleTouchStart&&e.handleTouchStart(...s),["prevent"])),onWheel:n[2]||(n[2]=(...s)=>e.handleWheel&&e.handleWheel(...s))},null,44,qee)],6)],4)):(J(),Vn(r,{key:1}))}HF.render=Kee;HF.__file="src/PhotoView/index.vue";function Gee(e){var n=document.body.style,u=n.overflow;vn(e,function(){e.value?n.overflow="hidden":n.overflow=u})}function Jee(){var e=Pe(window.innerWidth),n=$F(function(){e.value=window.innerWidth},8);return window.addEventListener("resize",n),dc(function(){window.removeEventListener("resize",n)}),{innerWidth:e}}var UF=Wu({});const Xee={version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"44",height:"44",viewBox:"0 0 768 768"},Qee=R("path",{fill:"#FFF",d:"M607.5 205.5l-178.5 178.5 178.5 178.5-45 45-178.5-178.5-178.5 178.5-45-45 178.5-178.5-178.5-178.5 45-45 178.5 178.5 178.5-178.5z"},null,-1),Zee=[Qee];function ene(e,n,u,o,i,t){return J(),oe("svg",Xee,Zee)}UF.render=ene;UF.__file="src/PhotoSlider/Close.vue";var zF=Wu({});const nne={version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"44",height:"44",viewBox:"0 0 768 768"},une=R("path",{d:"M640.5 352.5v63h-390l178.5 180-45 45-256.5-256.5 256.5-256.5 45 45-178.5 180h390z"},null,-1),one=[une];function ine(e,n,u,o,i,t){return J(),oe("svg",nne,one)}zF.render=ine;zF.__file="src/PhotoSlider/ArrowLeft.vue";var VF=Wu({});const tne={version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"44",height:"44",viewBox:"0 0 768 768"},ane=R("path",{d:"M384 127.5l256.5 256.5-256.5 256.5-45-45 178.5-180h-390v-63h390l-178.5-180z"},null,-1),rne=[ane];function sne(e,n,u,o,i,t){return J(),oe("svg",tne,rne)}VF.render=sne;VF.__file="src/PhotoSlider/ArrowRight.vue";var WF=Wu({});const dne={viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"44",height:"44"},mne=R("path",{fill:"#FFF",d:"M744.81 959.5c99.37-180.1 116.14-454.76-274.34-445.6v221.85L134.82 400.12 470.46 64.5v217.1c467.59-12.2 519.68 412.74 274.35 677.9z"},null,-1),lne=[mne];function cne(e,n,u,o,i,t){return J(),oe("svg",dne,lne)}WF.render=cne;WF.__file="src/PhotoSlider/RotateLeft.vue";var qF=Wu({});const _ne={viewBox:"0 0 1000 1000",version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"44",height:"44"},gne=R("path",{fill:"#FFF",d:"M555.668 258.9754V47.24496791175579l327.3385 327.3241L555.668 701.8941V485.52881146582615c-380.8294-8.9369-364.4728 258.9334-267.5596 434.5814C48.8389 661.5105 99.6385 247.0815 555.668 258.9754z"},null,-1),pne=[gne];function hne(e,n,u,o,i,t){return J(),oe("svg",_ne,pne)}qF.render=hne;qF.__file="src/PhotoSlider/RotateRight.vue";var KF=Wu({});const kne={viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"44",height:"44"},fne=R("path",{fill:"#FFF",d:"M978.432 492.832l-153.696-116.896c-17.504-13.312-31.968-6.208-32.096 15.776L792.032 480H231.968l-0.608-88.288c-0.16-22.016-14.592-29.088-32.096-15.776l-153.696 116.896c-17.504 13.312-17.12 34.592 0.864 47.264l154.144 108.608c17.984 12.672 32.576 5.056 32.416-16.96L232.384 544h559.2l-0.576 87.712c-0.16 22.016 14.432 29.632 32.416 16.96l154.144-108.608c17.984-12.672 18.4-33.92 0.864-47.232z"},null,-1),yne=[fne];function Fne(e,n,u,o,i,t){return J(),oe("svg",kne,yne)}KF.render=Fne;KF.__file="src/PhotoSlider/FlipHorizontal.vue";var GF=Wu({});const bne={viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"44",height:"44"},wne=R("path",{fill:"#FFF",d:"M494.03 74.72l-109.59 144.09c-12.48 16.41-5.82 29.97 14.79000001 30.09L482 249.47 482 774.53l-82.77 0.54c-20.64 0.15-27.27 13.68-14.79 30.09l109.59 144.09c12.48 16.41 32.43 16.05 44.31000001-0.81l101.81999999-144.51c11.88-16.86 4.74-30.54-15.9-30.39L542.00000001 774.14l-1e-8-524.25 82.23 0.54c20.64 0.15 27.78-13.53 15.9-30.39l-101.82-144.51c-11.88-16.86-31.8-17.25-44.28-0.81z"},null,-1),jne=[wne];function Dne(e,n,u,o,i,t){return J(),oe("svg",bne,jne)}GF.render=Dne;GF.__file="src/PhotoSlider/FilpVertical.vue";var JF=Wu({});const vne={viewBox:"0 0 1068 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2740",width:"44",height:"44"},Bne=R("path",{d:"M252.622237 809.004596a252.614304 252.614304 0 0 1-31.486765-503.2587v-4.352863a301.406611 301.406611 0 0 1 594.880633-68.660847 288.877568 288.877568 0 0 1-36.146765 575.488683 31.529129 31.529129 0 0 1 0-63.047667 225.819311 225.819311 0 0 0 8.472726-451.479758l-26.244267-0.974363-3.812726-25.990085a238.358944 238.358944 0 0 0-474.176071 34.664037 243.040125 243.040125 0 0 0 1.874591 30.035812l4.501135 35.786673-37.163491-0.3495h-0.730773c-104.521657 0-189.577228 85.034389-189.577228 189.577228s85.034389 189.577228 189.577228 189.577228a31.529129 31.529129 0 0 1 0 63.047667z",fill:"#FFF"},null,-1),Pne=R("path",{d:"M500.417679 442.421546m10.590906 0l46.599989 0q10.590907 0 10.590907 10.590906l0 528.878103q0 10.590907-10.590907 10.590907l-46.599989 0q-10.590907 0-10.590906-10.590907l0-528.878103q0-10.590907 10.590906-10.590906Z",fill:"#FFF"},null,-1),Ene=R("path",{d:"M487.406543 980.472843m7.488902-7.488902l171.982631-171.982631q7.488902-7.488902 14.977804 0l32.951168 32.951168q7.488902 7.488902 0 14.977804l-171.982631 171.982631q-7.488902 7.488902-14.977804 0l-32.951168-32.951168q-7.488902-7.488902 0-14.977804Z",fill:"#FFF"},null,-1),Mne=R("path",{d:"M344.966294 837.223674m7.488902-7.488902l32.951168-32.951168q7.488902-7.488902 14.977804 0l176.198883 176.198883q7.488902 7.488902 0 14.977804l-32.951168 32.951168q-7.488902 7.488902-14.977804 0l-176.198883-176.198883q-7.488902-7.488902 0-14.977804Z",fill:"#FFF"},null,-1),Tne=[Bne,Pne,Ene,Mne];function Sne(e,n,u,o,i,t){return J(),oe("svg",vne,Tne)}JF.render=Sne;JF.__file="src/PhotoSlider/Download.vue";function Lne(e,n){var u=Pe(e.value),o=Pe(vt.None),i=Pe(null);vn(e,function(){var r=n.value.originRef;if(r&&r.nodeType===1&&r.children.length>0){var s=r.getBoundingClientRect(),d=s.top,l=s.left,c=s.width,_=s.height;i.value={left:l,top:d,width:c,height:_}}else i.value=null;e.value?(o.value=vt.In,u.value=!0):o.value=vt.Out});var t=function(){o.value===vt.Out&&(u.value=!1),o.value=vt.None};return{photoVisible:u,showAnimateType:o,originRect:i,onShowAnimateEnd:t}}var Op=Wu({name:"PhotoSlider",components:{PhotoView:HF,Close:UF,ArrowLeft:zF,ArrowRight:VF,RotateLeft:WF,RotateRight:qF,FlipHorizontal:KF,FilpVertical:GF,Download:JF},props:{items:{type:Array,required:!0},index:{type:Number,required:!0},visible:{type:Boolean,required:!0},shouldTransition:{type:Boolean,default:!1},toggleOverlay:{type:Boolean,default:!0},defaultBackdropOpacity:{type:Number,default:1},loop:{type:Boolean,default:!1}},emits:["clickPhoto","clickMask","changeIndex","closeModal"],setup:function(e){var n=ac(e),u=n.items,o=n.index,i=n.visible,t=Ne(function(){return u.value[o.value]||{}});Gee(i);var r=Lne(i,t),s=r.photoVisible,d=r.showAnimateType,l=r.originRect,c=r.onShowAnimateEnd,_=Jee().innerWidth;return{innerWidth:_,currentItem:t,photoVisible:s,showAnimateType:d,originRect:l,onShowAnimateEnd:c}},data:function(){return{horizontalOffset:Hee,ShowAnimateEnum:vt,isTouchDevice:gr,touched:!1,hasMove:!1,needTransition:!1,clientX:0,clientY:0,touchMoveX:0,backdropOpacity:this.defaultBackdropOpacity,overlayVisible:!0,virtualIndex:0,photoViewRefs:{}}},computed:{showItems:function(){var e=this.items.length;if(this.loop){var n=this.items.concat(this.items).concat(this.items);return n.slice(e+this.index-1,e+this.index+2)}return this.items.slice(Math.max(this.index-1,0),Math.min(this.index+2,e))}},created:function(){window.addEventListener("keydown",this.handleKeyDown)},beforeUnmount:function(){window.removeEventListener("keydown",this.handleKeyDown)},beforeUpdate:function(){this.photoViewRefs={}},methods:{handleDownload:function(){var e=this.items[this.index];if(e){var n=document.createElement("a"),u=e.src.split(".")[0].split("/"),o=u[u.length-1];n.download=e.downloadName||o,n.href=e.src,n.dispatchEvent(new MouseEvent("click"))}},toggleFlipHorizontal:function(){var e;(e=this.photoViewRefs[this.currentItem.key])===null||e===void 0||e.toggleFlipHorizontal()},toggleFlipVertical:function(){var e;(e=this.photoViewRefs[this.currentItem.key])===null||e===void 0||e.toggleFlipVertical()},handleRotateLeft:function(){var e;(e=this.photoViewRefs[this.currentItem.key])===null||e===void 0||e.handleRotateLeft()},handleRotateRight:function(){var e;(e=this.photoViewRefs[this.currentItem.key])===null||e===void 0||e.handleRotateRight()},setPhotoViewRef:function(e,n){this.photoViewRefs[e]=n},handleKeyDown:function(e){if(this.visible)switch(e.code){case"ArrowLeft":this.handlePrevious();break;case"ArrowRight":this.handleNext();break;case"Escape":this.handleClickClose();break}},handleSingleTap:function(e,n,u){this.toggleOverlay&&(this.overlayVisible=!this.overlayVisible),this.$emit("clickPhoto",u)},handleTouchStart:function(e,n){this.touched=!0,this.needTransition=!1,this.clientX=e,this.clientY=n},handleTouchMove:function(e,n,u,o){e===du.Scale&&this.handleTouchScaleMove(n,o),e===du.X&&this.handleTouchHorizontalMove(n),e===du.Y&&this.handleTouchVerticalMove(n,u)},handleTouchScaleMove:function(e,n){var u=e-this.clientX;(u>0&&n.includes(mi.Left)||u<0&&n.includes(mi.Right))&&this.handleTouchHorizontalMove(e)},handleTouchHorizontalMove:function(e){var n=e-this.clientX;!this.loop&&(this.index===0&&n>0||this.index===this.items.length-1&&n<0)&&(n=n/2),this.hasMove=e!==this.clientX,this.touchMoveX=n},handleTouchVerticalMove:function(e,n){var u=Math.abs(n-this.clientY),o=Math.max(Math.min(this.defaultBackdropOpacity,this.defaultBackdropOpacity-u/100/4),0);this.hasMove=e!==this.clientX||n!==this.clientY,this.backdropOpacity=o},handleTouchEnd:function(e,n,u,o){e===du.Scale&&this.handleTouchScaleEnd(n,o),e===du.X&&this.handleTouchHorizontalEnd(n),e===du.Y&&this.handleTouchVerticalEnd(u),this.hasMove&&(this.needTransition=!0),this.touched=!1,this.hasMove=!1,this.clientX=0,this.clientY=0,this.touchMoveX=0},handleTouchScaleEnd:function(e,n){var u=e-this.clientX;u<-U0&&n.includes(mi.Right)&&this.handleNext(),u>U0&&n.includes(mi.Left)&&this.handlePrevious()},handleTouchHorizontalEnd:function(e){var n=e-this.clientX;n<-U0&&this.handleNext(),n>U0&&this.handlePrevious()},handleTouchVerticalEnd:function(e){var n=e-this.clientY;Math.abs(n)>window.innerHeight*.14?this.$emit("closeModal"):this.resetBackdropOpacity()},resetBackdropOpacity:function(){this.backdropOpacity=this.defaultBackdropOpacity},resetNeedTransition:function(){this.needTransition=!1},handlePrevious:function(){var e=this.items.length;!this.loop&&this.index===0||(this.$emit("changeIndex",(this.index+e-1)%e),this.virtualIndex-=1)},handleNext:function(){var e=this.items.length;!this.loop&&this.index===e-1||(this.$emit("changeIndex",(this.index+1)%e),this.virtualIndex+=1)},handleClickMask:function(e){this.$emit("clickMask",e)},handleClickClose:function(){this.$emit("closeModal")},getItemLeft:function(e){var n=this.virtualIndex+e;return(this.loop||this.index!==0)&&(n-=1),"".concat((this.innerWidth+this.horizontalOffset)*n,"px")},getItemTransition:function(){var e="transform 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)";if(this.needTransition)return e;if(!this.hasMove)return this.shouldTransition?e:void 0},getItemTransform:function(){return"translate3d(".concat(-(this.innerWidth+this.horizontalOffset)*this.virtualIndex+this.touchMoveX,"px, 0px, 0px)")}}});const Cne={class:"PhotoSlider__BannerWrap"},Ane={class:"PhotoSlider__Counter"},xne={class:"PhotoSlider__BannerRight"},Yne={key:1,class:"PhotoSlider__FooterWrap"};function Ine(e,n,u,o,i,t){const r=kn("download"),s=kn("rotate-left"),d=kn("rotate-right"),l=kn("flip-horizontal"),c=kn("filp-vertical"),_=kn("close"),p=kn("photo-view"),f=kn("arrow-left"),y=kn("arrow-right");return J(),Vn(RM,{to:"body"},[e.photoVisible?(J(),oe("div",{key:0,class:I(["PhotoSlider__Wrapper",{PhotoSlider__Clean:e.showAnimateType!==e.ShowAnimateEnum.None,PhotoSlider__Hide:!e.overlayVisible}])},[R("div",{class:I(["PhotoSlider__Backdrop",{PhotoSlider__fadeIn:e.showAnimateType===e.ShowAnimateEnum.In,PhotoSlider__fadeOut:e.showAnimateType===e.ShowAnimateEnum.Out}]),style:tu({background:`rgba(0, 0, 0, ${e.backdropOpacity})`}),onAnimationend:n[0]||(n[0]=D=>(e.onShowAnimateEnd(),e.resetBackdropOpacity()))},null,38),R("div",Cne,[R("div",Ane,yn(e.index+1)+" / "+yn(e.items.length),1),R("div",xne,[he(r,{class:"PhotoSlider__BannerIcon",onClick:e.handleDownload},null,8,["onClick"]),he(s,{class:"PhotoSlider__BannerIcon",onClick:e.handleRotateLeft},null,8,["onClick"]),he(d,{class:"PhotoSlider__BannerIcon",onClick:e.handleRotateRight},null,8,["onClick"]),he(l,{class:"PhotoSlider__BannerIcon",onClick:e.toggleFlipHorizontal},null,8,["onClick"]),he(c,{class:"PhotoSlider__BannerIcon",onClick:e.toggleFlipVertical},null,8,["onClick"]),he(_,{class:"PhotoSlider__BannerIcon",onClick:e.handleClickClose},null,8,["onClick"])])]),(J(!0),oe(sn,null,Oi(e.showItems,(D,P)=>(J(),oe("div",{key:D.key,class:"PhotoSlider__PhotoBox",style:tu({left:e.getItemLeft(P),transition:e.getItemTransition(),transform:e.getItemTransform()}),onTransitionend:n[2]||(n[2]=(...v)=>e.resetNeedTransition&&e.resetNeedTransition(...v)),onClick:n[3]||(n[3]=(...v)=>e.handleClickMask&&e.handleClickMask(...v))},[he(p,{ref:v=>e.setPhotoViewRef(D.key,v),"origin-rect":e.originRect,"show-animate-type":e.showAnimateType,src:D.src,onClick:n[1]||(n[1]=Hr(()=>{},["stop"])),onTouchStart:e.handleTouchStart,onTouchMove:e.handleTouchMove,onTouchEnd:e.handleTouchEnd,onSingleTap:e.handleSingleTap},null,8,["origin-rect","show-animate-type","src","onTouchStart","onTouchMove","onTouchEnd","onSingleTap"])],36))),128)),e.isTouchDevice?wn("v-if",!0):(J(),oe(sn,{key:0},[e.loop||e.index>0?(J(),oe("div",{key:0,class:"PhotoSlider__ArrowLeft",onClick:n[4]||(n[4]=(...D)=>e.handlePrevious&&e.handlePrevious(...D))},[he(f)])):wn("v-if",!0),e.loop||e.index<e.items.length-1?(J(),oe("div",{key:1,class:"PhotoSlider__ArrowRight",onClick:n[5]||(n[5]=(...D)=>e.handleNext&&e.handleNext(...D))},[he(y)])):wn("v-if",!0)],64)),e.currentItem.intro?(J(),oe("div",Yne,yn(e.currentItem.intro),1)):wn("v-if",!0)],2)):wn("v-if",!0)])}Op.render=Ine;Op.__file="src/PhotoSlider/index.vue";var XF=Wu({name:"PhotoProvider",components:{PhotoSlider:Op},props:{photoClosable:{type:Boolean,default:!1},maskClosable:{type:Boolean,default:!0},shouldTransition:{type:Boolean,default:!1},defaultBackdropOpacity:{type:Number,default:1},loop:{type:Boolean,default:!1}},emits:["indexChange","visibleChange"],setup:function(e,n){var u=n.emit,o=function(){u("indexChange",{index:r,items:l,visible:f})},i=function(){u("visibleChange",{index:r,items:l,visible:f})},t=iee(o),r=t.index,s=t.updateIndex,d=uee(r),l=d.items,c=d.updateItem,_=d.removeItem,p=oee(l,r,i),f=p.visible,y=p.handleHide,D=p.handleShow;return Br(l5,c),Br(c5,_),Br(_5,D),{items:l,updateItem:c,removeItem:_,visible:f,handleHide:y,handleShow:D,index:r,updateIndex:s}},methods:{handleClickPhoto:function(){this.photoClosable&&this.handleHide()},handleClickMask:function(){this.maskClosable&&this.handleHide()}}});function One(e,n,u,o,i,t){const r=kn("photo-slider");return J(),oe(sn,null,[wn(" @slot \u9ED8\u8BA4\u63D2\u69FD "),cd(e.$slots,"default"),he(r,{visible:e.visible,index:e.index,"should-transition":e.shouldTransition,"toggle-overlay":!e.photoClosable,"default-backdrop-opacity":e.defaultBackdropOpacity,items:e.items,loop:e.loop,onClickPhoto:e.handleClickPhoto,onClickMask:e.handleClickMask,onChangeIndex:e.updateIndex,onCloseModal:e.handleHide},null,8,["visible","index","should-transition","toggle-overlay","default-backdrop-opacity","items","loop","onClickPhoto","onClickMask","onChangeIndex","onCloseModal"])],64)}XF.render=One;XF.__file="src/PhotoProvider/index.vue";function Nne(e,n){for(var u=-1,o=e==null?0:e.length,i=Array(o);++u<o;)i[u]=n(e[u],u,e);return i}var Rne=Array.isArray,$ne=Rne,Hne=1/0,tb=Nd?Nd.prototype:void 0,ab=tb?tb.toString:void 0;function y5(e){if(typeof e=="string")return e;if($ne(e))return Nne(e,y5)+"";if(h5(e))return ab?ab.call(e):"";var n=e+"";return n=="0"&&1/e==-Hne?"-0":n}function Une(e){return e==null?"":y5(e)}var zne=0;function Vne(e){var n=++zne;return Une(e)+n}var QF=Wu({name:"PhotoConsumer",props:{src:{type:String,required:!0},intro:{type:String,default:null},downloadName:{type:String,default:null}},setup:function(e){var n=oo(l5),u=oo(c5),o=oo(_5),i=Pe(null),t=Vne(),r=ac(e),s=r.src,d=r.intro,l=r.downloadName,c=function(){o==null||o(t)},_=function(){return{key:t,src:s.value,originRef:i.value,intro:d.value,downloadName:l.value}};return vn([s,d,l],function(){n==null||n(_())}),Ri(function(){n==null||n(_())}),sg(function(){u==null||u(t)}),{root:i,handleClick:c}}});function Wne(e,n,u,o,i,t){return e.$slots.default()?(J(),oe("span",{key:0,ref:"root",style:{display:"inline-block"},class:"PhotoConsumer",onClick:n[0]||(n[0]=(...r)=>e.handleClick&&e.handleClick(...r))},[wn(" @slot \u9ED8\u8BA4\u63D2\u69FD "),cd(e.$slots,"default")],512)):wn("v-if",!0)}QF.render=Wne;QF.__file="src/PhotoConsumer/index.vue";var qne=[XF,QF,Op],Kne=function(e){qne.forEach(function(n){e.component(n.name,n)})},Gne={install:Kne};const Jne={"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;","&":"&amp;"};let Xne=0;var Qne=e=>e.replace(/[<>"&]/g,n=>Jne[n]||n),Zne=e=>e+Xne++;const kr={},eue=e=>{const{name:n,paths:u=[],d:o,polygons:i=[],points:t}=e;o&&u.push({d:o}),t&&i.push({points:t}),kr[n]=Object.assign({},e,{paths:u,polygons:i}),kr[n].minX||(kr[n].minX=0),kr[n].minY||(kr[n].minY=0)},nue=(...e)=>{for(const n of e)eue(n)},uue=Wu({name:"OhVueIcon",props:{name:{type:String,validator:e=>!e||e in kr||(console.warn(`Invalid prop: prop "name" is referring to an unregistered icon "${e}".
Please make sure you have imported this icon before using it.`),!1)},title:String,fill:String,scale:{type:[Number,String],default:1},animation:{validator:e=>["spin","spin-pulse","wrench","ring","pulse","flash","float"].includes(e)},hover:Boolean,flip:{validator:e=>["horizontal","vertical","both"].includes(e)},speed:{validator:e=>e==="fast"||e==="slow"},label:String,inverse:Boolean},setup(e){const n=Pe([]),u=Cn({outerScale:1.2,x:null,y:null}),o=Cn({width:0,height:0}),i=Ne(()=>{const D=Number(e.scale);return isNaN(D)||D<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.'),u.outerScale):D*u.outerScale}),t=Ne(()=>({"ov-icon":!0,"ov-inverse":e.inverse,"ov-flip-horizontal":e.flip==="horizontal","ov-flip-vertical":e.flip==="vertical","ov-flip-both":e.flip==="both","ov-spin":e.animation==="spin","ov-spin-pulse":e.animation==="spin-pulse","ov-wrench":e.animation==="wrench","ov-ring":e.animation==="ring","ov-pulse":e.animation==="pulse","ov-flash":e.animation==="flash","ov-float":e.animation==="float","ov-hover":e.hover,"ov-fast":e.speed==="fast","ov-slow":e.speed==="slow"})),r=Ne(()=>e.name?kr[e.name]:null),s=Ne(()=>r.value?`${r.value.minX} ${r.value.minY} ${r.value.width} ${r.value.height}`:`0 0 ${l.value} ${c.value}`),d=Ne(()=>{if(!r.value)return 1;const{width:D,height:P}=r.value;return Math.max(D,P)/16}),l=Ne(()=>o.width||r.value&&r.value.width/d.value*i.value||0),c=Ne(()=>o.height||r.value&&r.value.height/d.value*i.value||0),_=Ne(()=>i.value!==1&&{fontSize:i.value+"em"}),p=Ne(()=>{if(!r.value||!r.value.raw)return null;const D={};let P=r.value.raw;return P=P.replace(/\s(?:xml:)?id=(["']?)([^"')\s]+)\1/g,(v,j,M)=>{const S=Zne("vat-");return D[M]=S,` id="${S}"`}),P=P.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,(v,j,M,S)=>{const $=j||S;return $&&D[$]?`#${D[$]}`:v}),P}),f=Ne(()=>r.value&&r.value.attr?r.value.attr:{}),y=()=>{if(!e.name&&e.name!==null&&n.value.length===0)return void console.warn('Invalid prop: prop "name" is required.');if(r.value)return;let D=0,P=0;n.value.forEach(v=>{v.outerScale=i.value,D=Math.max(D,v.width),P=Math.max(P,v.height)}),o.width=D,o.height=P,n.value.forEach(v=>{v.x=(D-v.width)/2,v.y=(P-v.height)/2})};return Ri(()=>{y()}),sc(()=>{y()}),ar(tr({},ac(u)),{children:n,icon:r,klass:t,style:_,width:l,height:c,box:s,attribs:f,raw:p})},created(){const e=this.$parent;e&&e.children&&e.children.push(this)},render(){const e=Object.assign({role:this.$attrs.role||(this.label||this.title?"img":null),"aria-label":this.label||null,"aria-hidden":!(this.label||this.title),width:this.width,height:this.height,viewBox:this.box},this.attribs);this.attribs.stroke?e.stroke=this.fill?this.fill:"currentColor":e.fill=this.fill?this.fill:"currentColor",this.x&&(e.x=this.x.toString()),this.y&&(e.y=this.y.toString());let n={class:this.klass,style:this.style};if(n=Object.assign(n,e),this.raw){const i=this.title?`<title>${Qne(this.title)}</title>${this.raw}`:this.raw;n.innerHTML=i}const u=this.title?[el("title",this.title)]:[],o=(i,t,r)=>el(i,ar(tr({},t),{key:`${i}-${r}`}));return el("svg",n,this.raw?void 0:u.concat([this.$slots.default?this.$slots.default():this.icon?[...this.icon.paths.map((i,t)=>o("path",i,t)),...this.icon.polygons.map((i,t)=>o("polygon",i,t))]:[]]))}});function ZF(e,n){n===void 0&&(n={});var u=n.insertAt;if(e&&typeof document!="undefined"){var o=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",u==="top"&&o.firstChild?o.insertBefore(i,o.firstChild):o.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}ZF(`.ov-icon {
  display: inline-block;
  overflow: visible;
  vertical-align: -0.2em;
}
`);ZF(`/* ---------------- spin ---------------- */
.ov-spin:not(.ov-hover),
.ov-spin.ov-hover:hover,
.ov-parent.ov-hover:hover > .ov-spin {
  animation: ov-spin 1s linear infinite;
}

.ov-spin:not(.ov-hover).ov-fast,
.ov-spin.ov-hover.ov-fast:hover,
.ov-parent.ov-hover:hover > .ov-spin.ov-fast {
  animation: ov-spin 0.7s linear infinite;
}

.ov-spin:not(.ov-hover).ov-slow,
.ov-spin.ov-hover.ov-slow:hover,
.ov-parent.ov-hover:hover > .ov-spin.ov-slow {
  animation: ov-spin 2s linear infinite;
}

/* ---------------- spin-pulse ---------------- */

.ov-spin-pulse:not(.ov-hover),
.ov-spin-pulse.ov-hover:hover,
.ov-parent.ov-hover:hover > .ov-spin-pulse {
  animation: ov-spin 1s infinite steps(8);
}

.ov-spin-pulse:not(.ov-hover).ov-fast,
.ov-spin-pulse.ov-hover.ov-fast:hover,
.ov-parent.ov-hover:hover > .ov-spin-pulse.ov-fast {
  animation: ov-spin 0.7s infinite steps(8);
}

.ov-spin-pulse:not(.ov-hover).ov-slow,
.ov-spin-pulse.ov-hover.ov-slow:hover,
.ov-parent.ov-hover:hover > .ov-spin-pulse.ov-slow {
  animation: ov-spin 2s infinite steps(8);
}

@keyframes ov-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* ---------------- wrench ---------------- */
.ov-wrench:not(.ov-hover),
.ov-wrench.ov-hover:hover,
.ov-parent.ov-hover:hover > .ov-wrench {
  animation: ov-wrench 2.5s ease infinite;
}

.ov-wrench:not(.ov-hover).ov-fast,
.ov-wrench.ov-hover.ov-fast:hover,
.ov-parent.ov-hover:hover > .ov-wrench.ov-fast {
  animation: ov-wrench 1.2s ease infinite;
}

.ov-wrench:not(.ov-hover).ov-slow,
.ov-wrench.ov-hover.ov-slow:hover,
.ov-parent.ov-hover:hover > .ov-wrench.ov-slow {
  animation: ov-wrench 3.7s ease infinite;
}

@keyframes ov-wrench {
  0% {
    transform: rotate(-12deg);
  }

  8% {
    transform: rotate(12deg);
  }

  10%, 28%, 30%, 48%, 50%, 68% {
    transform: rotate(24deg);
  }

  18%, 20%, 38%, 40%, 58%, 60% {
    transform: rotate(-24deg);
  }

  75%, 100% {
    transform: rotate(0deg);
  }
}

/* ---------------- ring ---------------- */
.ov-ring:not(.ov-hover),
.ov-ring.ov-hover:hover,
.ov-parent.ov-hover:hover > .ov-ring {
  animation: ov-ring 2s ease infinite;
}

.ov-ring:not(.ov-hover).ov-fast,
.ov-ring.ov-hover.ov-fast:hover,
.ov-parent.ov-hover:hover > .ov-ring.ov-fast {
  animation: ov-ring 1s ease infinite;
}

.ov-ring:not(.ov-hover).ov-slow,
.ov-ring.ov-hover.ov-slow:hover,
.ov-parent.ov-hover:hover > .ov-ring.ov-slow {
  animation: ov-ring 3s ease infinite;
}

@keyframes ov-ring {
  0% {
    transform: rotate(-15deg);
  }

  2% {
    transform: rotate(15deg);
  }

  4%, 12% {
    transform: rotate(-18deg);
  }

  6% {
    transform: rotate(18deg);
  }

  8% {
    transform: rotate(-22deg);
  }

  10% {
    transform: rotate(22deg);
  }

  12% {
    transform: rotate(-18deg);
  }

  14% {
    transform: rotate(18deg);
  }

  16% {
    transform: rotate(-12deg);
  }

  18% {
    transform: rotate(12deg);
  }

  20%, 100% {
    transform: rotate(0deg);
  }
}

/* ---------------- pulse ---------------- */
.ov-pulse:not(.ov-hover),
.ov-pulse.ov-hover:hover,
.ov-parent.ov-hover:hover > .ov-pulse {
  animation: ov-pulse 2s linear infinite;
}

.ov-pulse:not(.ov-hover).ov-fast,
.ov-pulse.ov-hover.ov-fast:hover,
.ov-parent.ov-hover:hover > .ov-pulse.ov-fast {
  animation: ov-pulse 1s linear infinite;
}

.ov-pulse:not(.ov-hover).ov-slow,
.ov-pulse.ov-hover.ov-slow:hover,
.ov-parent.ov-hover:hover > .ov-pulse.ov-slow {
  animation: ov-pulse 3s linear infinite;
}

@keyframes ov-pulse {
  0% {
    transform: scale(1.1);
  }

  50% {
    transform: scale(0.8);
  }

  100% {
    transform: scale(1.1);
  }
}

/* ---------------- flash ---------------- */
.ov-flash:not(.ov-hover),
.ov-flash.ov-hover:hover,
.ov-parent.ov-hover:hover > .ov-flash {
  animation: ov-flash 2s ease infinite;
}

.ov-flash:not(.ov-hover).ov-fast,
.ov-flash.ov-hover.ov-fast:hover,
.ov-parent.ov-hover:hover > .ov-flash.ov-fast {
  animation: ov-flash 1s ease infinite;
}

.ov-flash:not(.ov-hover).ov-slow,
.ov-flash.ov-hover.ov-slow:hover,
.ov-parent.ov-hover:hover > .ov-flash.ov-slow {
  animation: ov-flash 3s ease infinite;
}

@keyframes ov-flash {
  0%, 100%, 50%{
    opacity: 1;
  }
  25%, 75%{
    opacity: 0;
  }
}

/* ---------------- float ---------------- */
.ov-float:not(.ov-hover),
.ov-float.ov-hover:hover,
.ov-parent.ov-hover:hover > .ov-float {
  animation: ov-float 2s linear infinite;
}

.ov-float:not(.ov-hover).ov-fast,
.ov-float.ov-hover.ov-fast:hover,
.ov-parent.ov-hover:hover > .ov-float.ov-fast {
  animation: ov-float 1s linear infinite;
}

.ov-float:not(.ov-hover).ov-slow,
.ov-float.ov-hover.ov-slow:hover,
.ov-parent.ov-hover:hover > .ov-float.ov-slow {
  animation: ov-float 3s linear infinite;
}

@keyframes ov-float {
  0%, 100% {
    transform: translateY(-3px);
  }
  50% {
    transform: translateY(3px);
  }
}
`);ZF(`.ov-flip-horizontal {
  transform: scale(-1, 1);
}

.ov-flip-vertical {
  transform: scale(1, -1);
}

.ov-flip-both {
  transform: scale(-1, -1);
}

.ov-inverse {
  color: #fff;
}
`);const oue={name:"bi-chat-text",minX:-1.6,minY:-1.6,width:19.2,height:19.2,raw:'<path d="M2.678 11.894a1 1 0 01.287.801 10.97 10.97 0 01-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 01.71-.074A8.06 8.06 0 008 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 01-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 00.244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 01-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/><path d="M4 5.5a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zM4 8a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7A.5.5 0 014 8zm0 2.5a.5.5 0 01.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5z"/>'},iue={name:"bi-check-all",minX:-1.6,minY:-1.6,width:19.2,height:19.2,raw:'<path d="M8.97 4.97a.75.75 0 011.07 1.05l-3.99 4.99a.75.75 0 01-1.08.02L2.324 8.384a.75.75 0 111.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 01.02-.022zm-.92 5.14l.92.92a.75.75 0 001.079-.02l3.992-4.99a.75.75 0 10-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z"/>'},tue={name:"bi-chevron-down",minX:-1.6,minY:-1.6,width:19.2,height:19.2,raw:'<path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z"/>'},aue={name:"bi-image",minX:-1.6,minY:-1.6,width:19.2,height:19.2,raw:'<path d="M6.002 5.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/><path d="M2.002 1a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V3a2 2 0 00-2-2h-12zm12 1a1 1 0 011 1v6.5l-3.777-1.947a.5.5 0 00-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 00-.63.062L1.002 12V3a1 1 0 011-1h12z"/>'},rue={name:"co-mic",minX:-51.2,minY:-51.2,width:614.4,height:614.4,raw:'<path fill="var(--ci-primary-color, currentColor)" d="M256 328a96.108 96.108 0 0096-96V112a96 96 0 00-192 0v120a96.108 96.108 0 0096 96zm-64-216a64 64 0 01128 0v120a64 64 0 01-128 0z" class="ci-primary"/><path fill="var(--ci-primary-color, currentColor)" d="M400 176v56c0 79.4-64.6 144-144 144s-144-64.6-144-144v-56H80v56c0 91.653 70.424 167.154 160 175.265V496h32v-88.735c89.576-8.111 160-83.612 160-175.265v-56z" class="ci-primary"/>'},sue={name:"fa-facebook",minX:-43.52,minY:-43.52,width:599.04,height:599.04,raw:'<path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/>'},due={name:"fa-video",minX:-48.96,minY:-80.96,width:673.92,height:673.92,raw:'<path d="M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8zm189.4 37.7L416 177.3v157.4l109.6 75.5c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8z"/>'},mue={name:"fa-regular-eye-slash",minX:-54.4,minY:-118.4,width:748.8,height:748.8,raw:'<path d="M634 471L36 3.51A16 16 0 0013.51 6l-10 12.49A16 16 0 006 41l598 467.49a16 16 0 0022.49-2.49l10-12.49A16 16 0 00634 471zM296.79 146.47l134.79 105.38C429.36 191.91 380.48 144 320 144a112.26 112.26 0 00-23.21 2.47zm46.42 219.07L208.42 260.16C210.65 320.09 259.53 368 320 368a113 113 0 0023.21-2.46zM320 112c98.65 0 189.09 55 237.93 144a285.53 285.53 0 01-44 60.2l37.74 29.5a333.7 333.7 0 0052.9-75.11 32.35 32.35 0 000-29.19C550.29 135.59 442.93 64 320 64c-36.7 0-71.71 7-104.63 18.81l46.41 36.29c18.94-4.3 38.34-7.1 58.22-7.1zm0 288c-98.65 0-189.08-55-237.93-144a285.47 285.47 0 0144.05-60.19l-37.74-29.5a333.6 333.6 0 00-52.89 75.1 32.35 32.35 0 000 29.19C89.72 376.41 197.08 448 320 448c36.7 0 71.71-7.05 104.63-18.81l-46.41-36.28C359.28 397.2 339.89 400 320 400z"/>'},lue={name:"fa-regular-smile",minX:-51.52,minY:-43.52,width:599.04,height:599.04,raw:'<path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 448c-110.3 0-200-89.7-200-200S137.7 56 248 56s200 89.7 200 200-89.7 200-200 200zm-80-216c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32zm4 72.6c-20.8 25-51.5 39.4-84 39.4s-63.2-14.3-84-39.4c-8.5-10.2-23.7-11.5-33.8-3.1-10.2 8.5-11.5 23.6-3.1 33.8 30 36 74.1 56.6 120.9 56.6s90.9-20.6 120.9-56.6c8.5-10.2 7.1-25.3-3.1-33.8-10.1-8.4-25.3-7.1-33.8 3.1z"/>'},cue={name:"fc-google",minX:0,minY:0,width:48,height:48,raw:'<path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/><path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"/><path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0124 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"/><path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 01-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"/>'},_ue={name:"hi-logout",minX:0,minY:0,width:24,height:24,raw:'<path stroke-linecap="round" stroke-linejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>',attr:{fill:"none",stroke:"currentColor","stroke-width":"2","aria-hidden":"true"}},gue={name:"io-arrow-down-outline",minX:0,minY:0,width:512,height:512,raw:'<path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M112 268l144 144 144-144M256 392V100"/>'},pue={name:"io-chatbubble-ellipses-outline",minX:0,minY:0,width:512,height:512,raw:'<path fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M87.48 380c1.2-4.38-1.43-10.47-3.94-14.86a42.63 42.63 0 00-2.54-3.8 199.81 199.81 0 01-33-110C47.64 139.09 140.72 48 255.82 48 356.2 48 440 117.54 459.57 209.85a199 199 0 014.43 41.64c0 112.41-89.49 204.93-204.59 204.93-18.31 0-43-4.6-56.47-8.37s-26.92-8.77-30.39-10.11a31.14 31.14 0 00-11.13-2.07 30.7 30.7 0 00-12.08 2.43L81.5 462.78a15.92 15.92 0 01-4.66 1.22 9.61 9.61 0 01-9.58-9.74 15.85 15.85 0 01.6-3.29z"/><circle cx="160" cy="256" r="32"/><circle cx="256" cy="256" r="32"/><circle cx="352" cy="256" r="32"/>'},hue={name:"io-notifications-outline",minX:0,minY:0,width:512,height:512,raw:'<path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M427.68 351.43C402 320 383.87 304 383.87 217.35 383.87 138 343.35 109.73 310 96c-4.43-1.82-8.6-6-9.95-10.55C294.2 65.54 277.8 48 256 48s-38.21 17.55-44 37.47c-1.35 4.6-5.52 8.71-9.95 10.53-33.39 13.75-73.87 41.92-73.87 121.35C128.13 304 110 320 84.32 351.43 73.68 364.45 83 384 101.61 384h308.88c18.51 0 27.77-19.61 17.19-32.57zM320 384v16a64 64 0 01-128 0v-16"/>'},kue={name:"io-send",minX:0,minY:0,width:512,height:512,raw:'<path d="M476.59 227.05l-.16-.07L49.35 49.84A23.56 23.56 0 0027.14 52 24.65 24.65 0 0016 72.59v113.29a24 24 0 0019.52 23.57l232.93 43.07a4 4 0 010 7.86L35.53 303.45A24 24 0 0016 327v113.31A23.57 23.57 0 0026.59 460a23.94 23.94 0 0013.22 4 24.55 24.55 0 009.52-1.93L476.4 285.94l.19-.09a32 32 0 000-58.8z"/>'},fue={name:"io-settings-sharp",minX:0,minY:0,width:512,height:512,raw:'<path d="M256 176a80 80 0 1080 80 80.24 80.24 0 00-80-80zm172.72 80a165.53 165.53 0 01-1.64 22.34l48.69 38.12a11.59 11.59 0 012.63 14.78l-46.06 79.52a11.64 11.64 0 01-14.14 4.93l-57.25-23a176.56 176.56 0 01-38.82 22.67l-8.56 60.78a11.93 11.93 0 01-11.51 9.86h-92.12a12 12 0 01-11.51-9.53l-8.56-60.78A169.3 169.3 0 01151.05 393L93.8 416a11.64 11.64 0 01-14.14-4.92L33.6 331.57a11.59 11.59 0 012.63-14.78l48.69-38.12A174.58 174.58 0 0183.28 256a165.53 165.53 0 011.64-22.34l-48.69-38.12a11.59 11.59 0 01-2.63-14.78l46.06-79.52a11.64 11.64 0 0114.14-4.93l57.25 23a176.56 176.56 0 0138.82-22.67l8.56-60.78A11.93 11.93 0 01209.94 26h92.12a12 12 0 0111.51 9.53l8.56 60.78A169.3 169.3 0 01361 119l57.2-23a11.64 11.64 0 0114.14 4.92l46.06 79.52a11.59 11.59 0 01-2.63 14.78l-48.69 38.12a174.58 174.58 0 011.64 22.66z"/>'},yue={name:"la-user-friends-solid",minX:0,minY:0,width:32,height:32,raw:'<path d="M9 7c-3.3 0-6 2.7-6 6 0 1.984.977 3.75 2.469 4.844C2.832 19.152 1 21.864 1 25h2c0-3.324 2.676-6 6-6s6 2.676 6 6h2c0-3.324 2.676-6 6-6s6 2.676 6 6h2c0-3.137-1.832-5.848-4.469-7.156A6.006 6.006 0 0029 13c0-3.3-2.7-6-6-6s-6 2.7-6 6c0 1.984.977 3.75 2.469 4.844A8.063 8.063 0 0016 21.125a8.063 8.063 0 00-3.469-3.281A6.006 6.006 0 0015 13c0-3.3-2.7-6-6-6zm0 2c2.223 0 4 1.777 4 4s-1.777 4-4 4-4-1.777-4-4 1.777-4 4-4zm14 0c2.223 0 4 1.777 4 4s-1.777 4-4 4-4-1.777-4-4 1.777-4 4-4z"/>'},Fue={name:"md-removeredeye",minX:.48,minY:.48,width:23.04,height:23.04,raw:'<path fill="none" d="M0 0h24v24H0z"/><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>'},bue={name:"md-morehoriz",minX:.48,minY:.48,width:23.04,height:23.04,raw:'<path fill="none" d="M0 0h24v24H0z"/><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>'},wue={name:"pr-times",minX:1.2,minY:1.2,width:21.6,height:21.6,raw:'<path d="M13.06 12l4.42-4.42a.75.75 0 10-1.06-1.06L12 10.94 7.58 6.52a.75.75 0 00-1.06 1.06L10.94 12l-4.42 4.42a.75.75 0 000 1.06.75.75 0 001.06 0L12 13.06l4.42 4.42a.75.75 0 001.06 0 .75.75 0 000-1.06z"/>'},jue={name:"ri-search-2-line",minX:0,minY:0,width:24,height:24,raw:'<path fill="none" d="M0 0h24v24H0z"/><path d="M11 2c4.968 0 9 4.032 9 9s-4.032 9-9 9-9-4.032-9-9 4.032-9 9-9zm0 16c3.867 0 7-3.133 7-7 0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7zm8.485.071l2.829 2.828-1.415 1.415-2.828-2.829 1.414-1.414z"/>'},Due={name:"ri-search-line",minX:0,minY:0,width:24,height:24,raw:'<path fill="none" d="M0 0h24v24H0z"/><path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0111 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 01-1.969 5.617zm-2.006-.742A6.977 6.977 0 0018 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 004.875-1.975l.15-.15z"/>'};nue(tue,fue,pue,yue,jue,lue,Fue,mue,cue,sue,_ue,kue,iue,gue,rue,bue,due,hue,wue,aue,Due,oue);const dm=E8(RV),vue=EX();dm.use(S8());dm.use(nee);dm.use(vue);dm.component("v-icon",uue);dm.use(Gne);dm.mount("#app");