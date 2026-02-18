(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function dy(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Sh={exports:{}},ko={};var Z_;function py(){if(Z_)return ko;Z_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:h,ref:l!==void 0?l:null,props:c}}return ko.Fragment=t,ko.jsx=i,ko.jsxs=i,ko}var K_;function my(){return K_||(K_=1,Sh.exports=py()),Sh.exports}var he=my(),yh={exports:{}},se={};var Q_;function gy(){if(Q_)return se;Q_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),y=Symbol.iterator;function M(F){return F===null||typeof F!="object"?null:(F=y&&F[y]||F["@@iterator"],typeof F=="function"?F:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,S={};function _(F,at,gt){this.props=F,this.context=at,this.refs=S,this.updater=gt||b}_.prototype.isReactComponent={},_.prototype.setState=function(F,at){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,at,"setState")},_.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function D(){}D.prototype=_.prototype;function w(F,at,gt){this.props=F,this.context=at,this.refs=S,this.updater=gt||b}var U=w.prototype=new D;U.constructor=w,C(U,_.prototype),U.isPureReactComponent=!0;var O=Array.isArray;function z(){}var N={H:null,A:null,T:null,S:null},X=Object.prototype.hasOwnProperty;function T(F,at,gt){var Tt=gt.ref;return{$$typeof:r,type:F,key:at,ref:Tt!==void 0?Tt:null,props:gt}}function L(F,at){return T(F.type,at,F.props)}function H(F){return typeof F=="object"&&F!==null&&F.$$typeof===r}function Z(F){var at={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(gt){return at[gt]})}var Q=/\/+/g;function ft(F,at){return typeof F=="object"&&F!==null&&F.key!=null?Z(""+F.key):at.toString(36)}function lt(F){switch(F.status){case"fulfilled":return F.value;case"rejected":throw F.reason;default:switch(typeof F.status=="string"?F.then(z,z):(F.status="pending",F.then(function(at){F.status==="pending"&&(F.status="fulfilled",F.value=at)},function(at){F.status==="pending"&&(F.status="rejected",F.reason=at)})),F.status){case"fulfilled":return F.value;case"rejected":throw F.reason}}throw F}function I(F,at,gt,Tt,It){var it=typeof F;(it==="undefined"||it==="boolean")&&(F=null);var ut=!1;if(F===null)ut=!0;else switch(it){case"bigint":case"string":case"number":ut=!0;break;case"object":switch(F.$$typeof){case r:case t:ut=!0;break;case v:return ut=F._init,I(ut(F._payload),at,gt,Tt,It)}}if(ut)return It=It(F),ut=Tt===""?"."+ft(F,0):Tt,O(It)?(gt="",ut!=null&&(gt=ut.replace(Q,"$&/")+"/"),I(It,at,gt,"",function(Bt){return Bt})):It!=null&&(H(It)&&(It=L(It,gt+(It.key==null||F&&F.key===It.key?"":(""+It.key).replace(Q,"$&/")+"/")+ut)),at.push(It)),1;ut=0;var wt=Tt===""?".":Tt+":";if(O(F))for(var Vt=0;Vt<F.length;Vt++)Tt=F[Vt],it=wt+ft(Tt,Vt),ut+=I(Tt,at,gt,it,It);else if(Vt=M(F),typeof Vt=="function")for(F=Vt.call(F),Vt=0;!(Tt=F.next()).done;)Tt=Tt.value,it=wt+ft(Tt,Vt++),ut+=I(Tt,at,gt,it,It);else if(it==="object"){if(typeof F.then=="function")return I(lt(F),at,gt,Tt,It);throw at=String(F),Error("Objects are not valid as a React child (found: "+(at==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":at)+"). If you meant to render a collection of children, use an array instead.")}return ut}function G(F,at,gt){if(F==null)return F;var Tt=[],It=0;return I(F,Tt,"","",function(it){return at.call(gt,it,It++)}),Tt}function st(F){if(F._status===-1){var at=F._result;at=at(),at.then(function(gt){(F._status===0||F._status===-1)&&(F._status=1,F._result=gt)},function(gt){(F._status===0||F._status===-1)&&(F._status=2,F._result=gt)}),F._status===-1&&(F._status=0,F._result=at)}if(F._status===1)return F._result.default;throw F._result}var yt=typeof reportError=="function"?reportError:function(F){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var at=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof F=="object"&&F!==null&&typeof F.message=="string"?String(F.message):String(F),error:F});if(!window.dispatchEvent(at))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",F);return}console.error(F)},xt={map:G,forEach:function(F,at,gt){G(F,function(){at.apply(this,arguments)},gt)},count:function(F){var at=0;return G(F,function(){at++}),at},toArray:function(F){return G(F,function(at){return at})||[]},only:function(F){if(!H(F))throw Error("React.Children.only expected to receive a single React element child.");return F}};return se.Activity=g,se.Children=xt,se.Component=_,se.Fragment=i,se.Profiler=l,se.PureComponent=w,se.StrictMode=s,se.Suspense=m,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=N,se.__COMPILER_RUNTIME={__proto__:null,c:function(F){return N.H.useMemoCache(F)}},se.cache=function(F){return function(){return F.apply(null,arguments)}},se.cacheSignal=function(){return null},se.cloneElement=function(F,at,gt){if(F==null)throw Error("The argument must be a React element, but you passed "+F+".");var Tt=C({},F.props),It=F.key;if(at!=null)for(it in at.key!==void 0&&(It=""+at.key),at)!X.call(at,it)||it==="key"||it==="__self"||it==="__source"||it==="ref"&&at.ref===void 0||(Tt[it]=at[it]);var it=arguments.length-2;if(it===1)Tt.children=gt;else if(1<it){for(var ut=Array(it),wt=0;wt<it;wt++)ut[wt]=arguments[wt+2];Tt.children=ut}return T(F.type,It,Tt)},se.createContext=function(F){return F={$$typeof:h,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null},F.Provider=F,F.Consumer={$$typeof:c,_context:F},F},se.createElement=function(F,at,gt){var Tt,It={},it=null;if(at!=null)for(Tt in at.key!==void 0&&(it=""+at.key),at)X.call(at,Tt)&&Tt!=="key"&&Tt!=="__self"&&Tt!=="__source"&&(It[Tt]=at[Tt]);var ut=arguments.length-2;if(ut===1)It.children=gt;else if(1<ut){for(var wt=Array(ut),Vt=0;Vt<ut;Vt++)wt[Vt]=arguments[Vt+2];It.children=wt}if(F&&F.defaultProps)for(Tt in ut=F.defaultProps,ut)It[Tt]===void 0&&(It[Tt]=ut[Tt]);return T(F,it,It)},se.createRef=function(){return{current:null}},se.forwardRef=function(F){return{$$typeof:d,render:F}},se.isValidElement=H,se.lazy=function(F){return{$$typeof:v,_payload:{_status:-1,_result:F},_init:st}},se.memo=function(F,at){return{$$typeof:p,type:F,compare:at===void 0?null:at}},se.startTransition=function(F){var at=N.T,gt={};N.T=gt;try{var Tt=F(),It=N.S;It!==null&&It(gt,Tt),typeof Tt=="object"&&Tt!==null&&typeof Tt.then=="function"&&Tt.then(z,yt)}catch(it){yt(it)}finally{at!==null&&gt.types!==null&&(at.types=gt.types),N.T=at}},se.unstable_useCacheRefresh=function(){return N.H.useCacheRefresh()},se.use=function(F){return N.H.use(F)},se.useActionState=function(F,at,gt){return N.H.useActionState(F,at,gt)},se.useCallback=function(F,at){return N.H.useCallback(F,at)},se.useContext=function(F){return N.H.useContext(F)},se.useDebugValue=function(){},se.useDeferredValue=function(F,at){return N.H.useDeferredValue(F,at)},se.useEffect=function(F,at){return N.H.useEffect(F,at)},se.useEffectEvent=function(F){return N.H.useEffectEvent(F)},se.useId=function(){return N.H.useId()},se.useImperativeHandle=function(F,at,gt){return N.H.useImperativeHandle(F,at,gt)},se.useInsertionEffect=function(F,at){return N.H.useInsertionEffect(F,at)},se.useLayoutEffect=function(F,at){return N.H.useLayoutEffect(F,at)},se.useMemo=function(F,at){return N.H.useMemo(F,at)},se.useOptimistic=function(F,at){return N.H.useOptimistic(F,at)},se.useReducer=function(F,at,gt){return N.H.useReducer(F,at,gt)},se.useRef=function(F){return N.H.useRef(F)},se.useState=function(F){return N.H.useState(F)},se.useSyncExternalStore=function(F,at,gt){return N.H.useSyncExternalStore(F,at,gt)},se.useTransition=function(){return N.H.useTransition()},se.version="19.2.4",se}var J_;function ep(){return J_||(J_=1,yh.exports=gy()),yh.exports}var Fn=ep(),Mh={exports:{}},Xo={},Eh={exports:{}},bh={};var $_;function _y(){return $_||($_=1,(function(r){function t(I,G){var st=I.length;I.push(G);t:for(;0<st;){var yt=st-1>>>1,xt=I[yt];if(0<l(xt,G))I[yt]=G,I[st]=xt,st=yt;else break t}}function i(I){return I.length===0?null:I[0]}function s(I){if(I.length===0)return null;var G=I[0],st=I.pop();if(st!==G){I[0]=st;t:for(var yt=0,xt=I.length,F=xt>>>1;yt<F;){var at=2*(yt+1)-1,gt=I[at],Tt=at+1,It=I[Tt];if(0>l(gt,st))Tt<xt&&0>l(It,gt)?(I[yt]=It,I[Tt]=st,yt=Tt):(I[yt]=gt,I[at]=st,yt=at);else if(Tt<xt&&0>l(It,st))I[yt]=It,I[Tt]=st,yt=Tt;else break t}}return G}function l(I,G){var st=I.sortIndex-G.sortIndex;return st!==0?st:I.id-G.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();r.unstable_now=function(){return h.now()-d}}var m=[],p=[],v=1,g=null,y=3,M=!1,b=!1,C=!1,S=!1,_=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;function U(I){for(var G=i(p);G!==null;){if(G.callback===null)s(p);else if(G.startTime<=I)s(p),G.sortIndex=G.expirationTime,t(m,G);else break;G=i(p)}}function O(I){if(C=!1,U(I),!b)if(i(m)!==null)b=!0,z||(z=!0,Z());else{var G=i(p);G!==null&&lt(O,G.startTime-I)}}var z=!1,N=-1,X=5,T=-1;function L(){return S?!0:!(r.unstable_now()-T<X)}function H(){if(S=!1,z){var I=r.unstable_now();T=I;var G=!0;try{t:{b=!1,C&&(C=!1,D(N),N=-1),M=!0;var st=y;try{e:{for(U(I),g=i(m);g!==null&&!(g.expirationTime>I&&L());){var yt=g.callback;if(typeof yt=="function"){g.callback=null,y=g.priorityLevel;var xt=yt(g.expirationTime<=I);if(I=r.unstable_now(),typeof xt=="function"){g.callback=xt,U(I),G=!0;break e}g===i(m)&&s(m),U(I)}else s(m);g=i(m)}if(g!==null)G=!0;else{var F=i(p);F!==null&&lt(O,F.startTime-I),G=!1}}break t}finally{g=null,y=st,M=!1}G=void 0}}finally{G?Z():z=!1}}}var Z;if(typeof w=="function")Z=function(){w(H)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,ft=Q.port2;Q.port1.onmessage=H,Z=function(){ft.postMessage(null)}}else Z=function(){_(H,0)};function lt(I,G){N=_(function(){I(r.unstable_now())},G)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(I){I.callback=null},r.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<I?Math.floor(1e3/I):5},r.unstable_getCurrentPriorityLevel=function(){return y},r.unstable_next=function(I){switch(y){case 1:case 2:case 3:var G=3;break;default:G=y}var st=y;y=G;try{return I()}finally{y=st}},r.unstable_requestPaint=function(){S=!0},r.unstable_runWithPriority=function(I,G){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var st=y;y=I;try{return G()}finally{y=st}},r.unstable_scheduleCallback=function(I,G,st){var yt=r.unstable_now();switch(typeof st=="object"&&st!==null?(st=st.delay,st=typeof st=="number"&&0<st?yt+st:yt):st=yt,I){case 1:var xt=-1;break;case 2:xt=250;break;case 5:xt=1073741823;break;case 4:xt=1e4;break;default:xt=5e3}return xt=st+xt,I={id:v++,callback:G,priorityLevel:I,startTime:st,expirationTime:xt,sortIndex:-1},st>yt?(I.sortIndex=st,t(p,I),i(m)===null&&I===i(p)&&(C?(D(N),N=-1):C=!0,lt(O,st-yt))):(I.sortIndex=xt,t(m,I),b||M||(b=!0,z||(z=!0,Z()))),I},r.unstable_shouldYield=L,r.unstable_wrapCallback=function(I){var G=y;return function(){var st=y;y=G;try{return I.apply(this,arguments)}finally{y=st}}}})(bh)),bh}var t0;function vy(){return t0||(t0=1,Eh.exports=_y()),Eh.exports}var Th={exports:{}},On={};var e0;function xy(){if(e0)return On;e0=1;var r=ep();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,v){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:v}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return On.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,On.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,v)},On.flushSync=function(m){var p=h.T,v=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=v,s.d.f()}},On.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},On.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},On.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,g=d(v,p.crossOrigin),y=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:y,fetchPriority:M}):v==="script"&&s.d.X(m,{crossOrigin:g,integrity:y,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},On.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},On.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,g=d(v,p.crossOrigin);s.d.L(m,v,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},On.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},On.requestFormReset=function(m){s.d.r(m)},On.unstable_batchedUpdates=function(m,p){return m(p)},On.useFormState=function(m,p,v){return h.H.useFormState(m,p,v)},On.useFormStatus=function(){return h.H.useHostTransitionStatus()},On.version="19.2.4",On}var n0;function Sy(){if(n0)return Th.exports;n0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Th.exports=xy(),Th.exports}var i0;function yy(){if(i0)return Xo;i0=1;var r=vy(),t=ep(),i=Sy();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===o)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var x=!1,A=u.child;A;){if(A===a){x=!0,a=u,o=f;break}if(A===o){x=!0,o=u,a=f;break}A=A.sibling}if(!x){for(A=f.child;A;){if(A===a){x=!0,a=f,o=u;break}if(A===o){x=!0,o=f,a=u;break}A=A.sibling}if(!x)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function v(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=v(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,y=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),w=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),N=Symbol.for("react.memo"),X=Symbol.for("react.lazy"),T=Symbol.for("react.activity"),L=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function Z(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Symbol.for("react.client.reference");function ft(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Q?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case C:return"Fragment";case _:return"Profiler";case S:return"StrictMode";case O:return"Suspense";case z:return"SuspenseList";case T:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case w:return e.displayName||"Context";case D:return(e._context.displayName||"Context")+".Consumer";case U:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case N:return n=e.displayName||null,n!==null?n:ft(e.type)||"Memo";case X:n=e._payload,e=e._init;try{return ft(e(n))}catch{}}return null}var lt=Array.isArray,I=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,st={pending:!1,data:null,method:null,action:null},yt=[],xt=-1;function F(e){return{current:e}}function at(e){0>xt||(e.current=yt[xt],yt[xt]=null,xt--)}function gt(e,n){xt++,yt[xt]=e.current,e.current=n}var Tt=F(null),It=F(null),it=F(null),ut=F(null);function wt(e,n){switch(gt(it,n),gt(It,e),gt(Tt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?v_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=v_(n),e=x_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}at(Tt),gt(Tt,e)}function Vt(){at(Tt),at(It),at(it)}function Bt(e){e.memoizedState!==null&&gt(ut,e);var n=Tt.current,a=x_(n,e.type);n!==a&&(gt(It,e),gt(Tt,a))}function me(e){It.current===e&&(at(Tt),at(It)),ut.current===e&&(at(ut),Bo._currentValue=st)}var Je,xe;function ge(e){if(Je===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Je=n&&n[1]||"",xe=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Je+e+xe}var we=!1;function re(e,n){if(!e||we)return"";we=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var mt=function(){throw Error()};if(Object.defineProperty(mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(mt,[])}catch(ot){var nt=ot}Reflect.construct(e,[],mt)}else{try{mt.call()}catch(ot){nt=ot}e.call(mt.prototype)}}else{try{throw Error()}catch(ot){nt=ot}(mt=e())&&typeof mt.catch=="function"&&mt.catch(function(){})}}catch(ot){if(ot&&nt&&typeof ot.stack=="string")return[ot.stack,nt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),x=f[0],A=f[1];if(x&&A){var B=x.split(`
`),tt=A.split(`
`);for(u=o=0;o<B.length&&!B[o].includes("DetermineComponentFrameRoot");)o++;for(;u<tt.length&&!tt[u].includes("DetermineComponentFrameRoot");)u++;if(o===B.length||u===tt.length)for(o=B.length-1,u=tt.length-1;1<=o&&0<=u&&B[o]!==tt[u];)u--;for(;1<=o&&0<=u;o--,u--)if(B[o]!==tt[u]){if(o!==1||u!==1)do if(o--,u--,0>u||B[o]!==tt[u]){var ht=`
`+B[o].replace(" at new "," at ");return e.displayName&&ht.includes("<anonymous>")&&(ht=ht.replace("<anonymous>",e.displayName)),ht}while(1<=o&&0<=u);break}}}finally{we=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ge(a):""}function $e(e,n){switch(e.tag){case 26:case 27:case 5:return ge(e.type);case 16:return ge("Lazy");case 13:return e.child!==n&&n!==null?ge("Suspense Fallback"):ge("Suspense");case 19:return ge("SuspenseList");case 0:case 15:return re(e.type,!1);case 11:return re(e.type.render,!1);case 1:return re(e.type,!0);case 31:return ge("Activity");default:return""}}function V(e){try{var n="",a=null;do n+=$e(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Ze=Object.prototype.hasOwnProperty,Ee=r.unstable_scheduleCallback,Oe=r.unstable_cancelCallback,Yt=r.unstable_shouldYield,P=r.unstable_requestPaint,E=r.unstable_now,Y=r.unstable_getCurrentPriorityLevel,dt=r.unstable_ImmediatePriority,vt=r.unstable_UserBlockingPriority,ct=r.unstable_NormalPriority,jt=r.unstable_LowPriority,Rt=r.unstable_IdlePriority,kt=r.log,te=r.unstable_setDisableYieldValue,Mt=null,Et=null;function zt(e){if(typeof kt=="function"&&te(e),Et&&typeof Et.setStrictMode=="function")try{Et.setStrictMode(Mt,e)}catch{}}var Ot=Math.clz32?Math.clz32:W,Ct=Math.log,le=Math.LN2;function W(e){return e>>>=0,e===0?32:31-(Ct(e)/le|0)|0}var Ut=256,bt=262144,Pt=4194304;function St(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function _t(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,f=e.suspendedLanes,x=e.pingedLanes;e=e.warmLanes;var A=o&134217727;return A!==0?(o=A&~f,o!==0?u=St(o):(x&=A,x!==0?u=St(x):a||(a=A&~e,a!==0&&(u=St(a))))):(A=o&~f,A!==0?u=St(A):x!==0?u=St(x):a||(a=o&~e,a!==0&&(u=St(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function At(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ie(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ze(){var e=Pt;return Pt<<=1,(Pt&62914560)===0&&(Pt=4194304),e}function be(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Nn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ei(e,n,a,o,u,f){var x=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,B=e.expirationTimes,tt=e.hiddenUpdates;for(a=x&~a;0<a;){var ht=31-Ot(a),mt=1<<ht;A[ht]=0,B[ht]=-1;var nt=tt[ht];if(nt!==null)for(tt[ht]=null,ht=0;ht<nt.length;ht++){var ot=nt[ht];ot!==null&&(ot.lane&=-536870913)}a&=~mt}o!==0&&dl(e,o,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(x&~n))}function dl(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Ot(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Kr(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Ot(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function Hs(e,n){var a=n&-n;return a=(a&42)!==0?1:Qr(a),(a&(e.suspendedLanes|n))!==0?0:a}function Qr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Gs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Jr(){var e=G.p;return e!==0?e:(e=window.event,e===void 0?32:V_(e.type))}function Pi(e,n){var a=G.p;try{return G.p=e,n()}finally{G.p=a}}var ui=Math.random().toString(36).slice(2),on="__reactFiber$"+ui,Mn="__reactProps$"+ui,bi="__reactContainer$"+ui,Vs="__reactEvents$"+ui,ks="__reactListeners$"+ui,pl="__reactHandles$"+ui,$r="__reactResources$"+ui,us="__reactMarker$"+ui;function to(e){delete e[on],delete e[Mn],delete e[Vs],delete e[ks],delete e[pl]}function Aa(e){var n=e[on];if(n)return n;for(var a=e.parentNode;a;){if(n=a[bi]||a[on]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=A_(e);e!==null;){if(a=e[on])return a;e=A_(e)}return n}e=a,a=e.parentNode}return null}function Ra(e){if(e=e[on]||e[bi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function fs(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Ca(e){var n=e[$r];return n||(n=e[$r]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function R(e){e[us]=!0}var q=new Set,rt={};function et(e,n){J(e,n),J(e+"Capture",n)}function J(e,n){for(rt[e]=n,e=0;e<n.length;e++)q.add(n[e])}var Dt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ft={},Lt={};function Ht(e){return Ze.call(Lt,e)?!0:Ze.call(Ft,e)?!1:Dt.test(e)?Lt[e]=!0:(Ft[e]=!0,!1)}function Xt(e,n,a){if(Ht(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Qt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Wt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function Jt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function De(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ke(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(x){a=""+x,f.call(this,x)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Ye(e){if(!e._valueTracker){var n=De(e)?"checked":"value";e._valueTracker=Ke(e,n,""+e[n])}}function Pe(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=De(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Zt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ue=/[\n"\\]/g;function ae(e){return e.replace(Ue,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function En(e,n,a,o,u,f,x,A){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),n!=null?x==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Jt(n)):e.value!==""+Jt(n)&&(e.value=""+Jt(n)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),n!=null?bn(e,x,Jt(n)):a!=null?bn(e,x,Jt(a)):o!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+Jt(A):e.removeAttribute("name")}function ji(e,n,a,o,u,f,x,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Ye(e);return}a=a!=null?""+Jt(a):"",n=n!=null?""+Jt(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=A?e.checked:!!o,e.defaultChecked=!!o,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x),Ye(e)}function bn(e,n,a){n==="number"&&Zt(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function fi(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+Jt(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Fe(e,n,a){if(n!=null&&(n=""+Jt(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Jt(a):""}function Tn(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(lt(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Jt(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Ye(e)}function pn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var An=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Rn(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||An.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Xs(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Rn(e,u,o)}else for(var f in n)n.hasOwnProperty(f)&&Rn(e,f,n[f])}function Ti(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ux=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ml(e){return ux.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Zi(){}var gu=null;function _u(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ws=null,Ys=null;function _p(e){var n=Ra(e);if(n&&(e=n.stateNode)){var a=e[Mn]||null;t:switch(e=n.stateNode,n.type){case"input":if(En(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ae(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[Mn]||null;if(!u)throw Error(s(90));En(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Pe(o)}break t;case"textarea":Fe(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&fi(e,!!a.multiple,n,!1)}}}var vu=!1;function vp(e,n,a){if(vu)return e(n,a);vu=!0;try{var o=e(n);return o}finally{if(vu=!1,(Ws!==null||Ys!==null)&&(nc(),Ws&&(n=Ws,e=Ys,Ys=Ws=null,_p(n),e)))for(n=0;n<e.length;n++)_p(e[n])}}function eo(e,n){var a=e.stateNode;if(a===null)return null;var o=a[Mn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xu=!1;if(Ki)try{var no={};Object.defineProperty(no,"passive",{get:function(){xu=!0}}),window.addEventListener("test",no,no),window.removeEventListener("test",no,no)}catch{xu=!1}var wa=null,Su=null,gl=null;function xp(){if(gl)return gl;var e,n=Su,a=n.length,o,u="value"in wa?wa.value:wa.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var x=a-e;for(o=1;o<=x&&n[a-o]===u[f-o];o++);return gl=u.slice(e,1<o?1-o:void 0)}function _l(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function vl(){return!0}function Sp(){return!1}function Xn(e){function n(a,o,u,f,x){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?vl:Sp,this.isPropagationStopped=Sp,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=vl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=vl)},persist:function(){},isPersistent:vl}),n}var hs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xl=Xn(hs),io=g({},hs,{view:0,detail:0}),fx=Xn(io),yu,Mu,ao,Sl=g({},io,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ao&&(ao&&e.type==="mousemove"?(yu=e.screenX-ao.screenX,Mu=e.screenY-ao.screenY):Mu=yu=0,ao=e),yu)},movementY:function(e){return"movementY"in e?e.movementY:Mu}}),yp=Xn(Sl),hx=g({},Sl,{dataTransfer:0}),dx=Xn(hx),px=g({},io,{relatedTarget:0}),Eu=Xn(px),mx=g({},hs,{animationName:0,elapsedTime:0,pseudoElement:0}),gx=Xn(mx),_x=g({},hs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vx=Xn(_x),xx=g({},hs,{data:0}),Mp=Xn(xx),Sx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ex(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Mx[e])?!!n[e]:!1}function bu(){return Ex}var bx=g({},io,{key:function(e){if(e.key){var n=Sx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=_l(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?yx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bu,charCode:function(e){return e.type==="keypress"?_l(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_l(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Tx=Xn(bx),Ax=g({},Sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ep=Xn(Ax),Rx=g({},io,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bu}),Cx=Xn(Rx),wx=g({},hs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dx=Xn(wx),Ux=g({},Sl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Lx=Xn(Ux),Nx=g({},hs,{newState:0,oldState:0}),Ox=Xn(Nx),Px=[9,13,27,32],Tu=Ki&&"CompositionEvent"in window,so=null;Ki&&"documentMode"in document&&(so=document.documentMode);var zx=Ki&&"TextEvent"in window&&!so,bp=Ki&&(!Tu||so&&8<so&&11>=so),Tp=" ",Ap=!1;function Rp(e,n){switch(e){case"keyup":return Px.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var qs=!1;function Fx(e,n){switch(e){case"compositionend":return Cp(n);case"keypress":return n.which!==32?null:(Ap=!0,Tp);case"textInput":return e=n.data,e===Tp&&Ap?null:e;default:return null}}function Ix(e,n){if(qs)return e==="compositionend"||!Tu&&Rp(e,n)?(e=xp(),gl=Su=wa=null,qs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return bp&&n.locale!=="ko"?null:n.data;default:return null}}var Bx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Bx[e.type]:n==="textarea"}function Dp(e,n,a,o){Ws?Ys?Ys.push(o):Ys=[o]:Ws=o,n=cc(n,"onChange"),0<n.length&&(a=new xl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var ro=null,oo=null;function Hx(e){h_(e,0)}function yl(e){var n=fs(e);if(Pe(n))return e}function Up(e,n){if(e==="change")return n}var Lp=!1;if(Ki){var Au;if(Ki){var Ru="oninput"in document;if(!Ru){var Np=document.createElement("div");Np.setAttribute("oninput","return;"),Ru=typeof Np.oninput=="function"}Au=Ru}else Au=!1;Lp=Au&&(!document.documentMode||9<document.documentMode)}function Op(){ro&&(ro.detachEvent("onpropertychange",Pp),oo=ro=null)}function Pp(e){if(e.propertyName==="value"&&yl(oo)){var n=[];Dp(n,oo,e,_u(e)),vp(Hx,n)}}function Gx(e,n,a){e==="focusin"?(Op(),ro=n,oo=a,ro.attachEvent("onpropertychange",Pp)):e==="focusout"&&Op()}function Vx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return yl(oo)}function kx(e,n){if(e==="click")return yl(n)}function Xx(e,n){if(e==="input"||e==="change")return yl(n)}function Wx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var $n=typeof Object.is=="function"?Object.is:Wx;function lo(e,n){if($n(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Ze.call(n,u)||!$n(e[u],n[u]))return!1}return!0}function zp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Fp(e,n){var a=zp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=zp(a)}}function Ip(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Ip(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Bp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Zt(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Zt(e.document)}return n}function Cu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Yx=Ki&&"documentMode"in document&&11>=document.documentMode,js=null,wu=null,co=null,Du=!1;function Hp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Du||js==null||js!==Zt(o)||(o=js,"selectionStart"in o&&Cu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),co&&lo(co,o)||(co=o,o=cc(wu,"onSelect"),0<o.length&&(n=new xl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=js)))}function ds(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Zs={animationend:ds("Animation","AnimationEnd"),animationiteration:ds("Animation","AnimationIteration"),animationstart:ds("Animation","AnimationStart"),transitionrun:ds("Transition","TransitionRun"),transitionstart:ds("Transition","TransitionStart"),transitioncancel:ds("Transition","TransitionCancel"),transitionend:ds("Transition","TransitionEnd")},Uu={},Gp={};Ki&&(Gp=document.createElement("div").style,"AnimationEvent"in window||(delete Zs.animationend.animation,delete Zs.animationiteration.animation,delete Zs.animationstart.animation),"TransitionEvent"in window||delete Zs.transitionend.transition);function ps(e){if(Uu[e])return Uu[e];if(!Zs[e])return e;var n=Zs[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Gp)return Uu[e]=n[a];return e}var Vp=ps("animationend"),kp=ps("animationiteration"),Xp=ps("animationstart"),qx=ps("transitionrun"),jx=ps("transitionstart"),Zx=ps("transitioncancel"),Wp=ps("transitionend"),Yp=new Map,Lu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Lu.push("scrollEnd");function Ai(e,n){Yp.set(e,n),et(n,[e])}var Ml=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},hi=[],Ks=0,Nu=0;function El(){for(var e=Ks,n=Nu=Ks=0;n<e;){var a=hi[n];hi[n++]=null;var o=hi[n];hi[n++]=null;var u=hi[n];hi[n++]=null;var f=hi[n];if(hi[n++]=null,o!==null&&u!==null){var x=o.pending;x===null?u.next=u:(u.next=x.next,x.next=u),o.pending=u}f!==0&&qp(a,u,f)}}function bl(e,n,a,o){hi[Ks++]=e,hi[Ks++]=n,hi[Ks++]=a,hi[Ks++]=o,Nu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Ou(e,n,a,o){return bl(e,n,a,o),Tl(e)}function ms(e,n){return bl(e,null,null,n),Tl(e)}function qp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Ot(a),e=f.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function Tl(e){if(50<Lo)throw Lo=0,Xf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Qs={};function Kx(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(e,n,a,o){return new Kx(e,n,a,o)}function Pu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Qi(e,n){var a=e.alternate;return a===null?(a=ti(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function jp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Al(e,n,a,o,u,f){var x=0;if(o=e,typeof e=="function")Pu(e)&&(x=1);else if(typeof e=="string")x=ey(e,a,Tt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case T:return e=ti(31,a,n,u),e.elementType=T,e.lanes=f,e;case C:return gs(a.children,u,f,n);case S:x=8,u|=24;break;case _:return e=ti(12,a,n,u|2),e.elementType=_,e.lanes=f,e;case O:return e=ti(13,a,n,u),e.elementType=O,e.lanes=f,e;case z:return e=ti(19,a,n,u),e.elementType=z,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case w:x=10;break t;case D:x=9;break t;case U:x=11;break t;case N:x=14;break t;case X:x=16,o=null;break t}x=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=ti(x,a,n,u),n.elementType=e,n.type=o,n.lanes=f,n}function gs(e,n,a,o){return e=ti(7,e,o,n),e.lanes=a,e}function zu(e,n,a){return e=ti(6,e,null,n),e.lanes=a,e}function Zp(e){var n=ti(18,null,null,0);return n.stateNode=e,n}function Fu(e,n,a){return n=ti(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Kp=new WeakMap;function di(e,n){if(typeof e=="object"&&e!==null){var a=Kp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:V(n)},Kp.set(e,n),n)}return{value:e,source:n,stack:V(n)}}var Js=[],$s=0,Rl=null,uo=0,pi=[],mi=0,Da=null,zi=1,Fi="";function Ji(e,n){Js[$s++]=uo,Js[$s++]=Rl,Rl=e,uo=n}function Qp(e,n,a){pi[mi++]=zi,pi[mi++]=Fi,pi[mi++]=Da,Da=e;var o=zi;e=Fi;var u=32-Ot(o)-1;o&=~(1<<u),a+=1;var f=32-Ot(n)+u;if(30<f){var x=u-u%5;f=(o&(1<<x)-1).toString(32),o>>=x,u-=x,zi=1<<32-Ot(n)+u|a<<u|o,Fi=f+e}else zi=1<<f|a<<u|o,Fi=e}function Iu(e){e.return!==null&&(Ji(e,1),Qp(e,1,0))}function Bu(e){for(;e===Rl;)Rl=Js[--$s],Js[$s]=null,uo=Js[--$s],Js[$s]=null;for(;e===Da;)Da=pi[--mi],pi[mi]=null,Fi=pi[--mi],pi[mi]=null,zi=pi[--mi],pi[mi]=null}function Jp(e,n){pi[mi++]=zi,pi[mi++]=Fi,pi[mi++]=Da,zi=n.id,Fi=n.overflow,Da=e}var Cn=null,qe=null,Me=!1,Ua=null,gi=!1,Hu=Error(s(519));function La(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw fo(di(n,e)),Hu}function $p(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[on]=e,n[Mn]=o,a){case"dialog":ve("cancel",n),ve("close",n);break;case"iframe":case"object":case"embed":ve("load",n);break;case"video":case"audio":for(a=0;a<Oo.length;a++)ve(Oo[a],n);break;case"source":ve("error",n);break;case"img":case"image":case"link":ve("error",n),ve("load",n);break;case"details":ve("toggle",n);break;case"input":ve("invalid",n),ji(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":ve("invalid",n);break;case"textarea":ve("invalid",n),Tn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||g_(n.textContent,a)?(o.popover!=null&&(ve("beforetoggle",n),ve("toggle",n)),o.onScroll!=null&&ve("scroll",n),o.onScrollEnd!=null&&ve("scrollend",n),o.onClick!=null&&(n.onclick=Zi),n=!0):n=!1,n||La(e,!0)}function tm(e){for(Cn=e.return;Cn;)switch(Cn.tag){case 5:case 31:case 13:gi=!1;return;case 27:case 3:gi=!0;return;default:Cn=Cn.return}}function tr(e){if(e!==Cn)return!1;if(!Me)return tm(e),Me=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||sh(e.type,e.memoizedProps)),a=!a),a&&qe&&La(e),tm(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));qe=T_(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));qe=T_(e)}else n===27?(n=qe,Ya(e.type)?(e=uh,uh=null,qe=e):qe=n):qe=Cn?vi(e.stateNode.nextSibling):null;return!0}function _s(){qe=Cn=null,Me=!1}function Gu(){var e=Ua;return e!==null&&(jn===null?jn=e:jn.push.apply(jn,e),Ua=null),e}function fo(e){Ua===null?Ua=[e]:Ua.push(e)}var Vu=F(null),vs=null,$i=null;function Na(e,n,a){gt(Vu,n._currentValue),n._currentValue=a}function ta(e){e._currentValue=Vu.current,at(Vu)}function ku(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Xu(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var x=u.child;f=f.firstContext;t:for(;f!==null;){var A=f;f=u;for(var B=0;B<n.length;B++)if(A.context===n[B]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),ku(f.return,a,e),o||(x=null);break t}f=A.next}}else if(u.tag===18){if(x=u.return,x===null)throw Error(s(341));x.lanes|=a,f=x.alternate,f!==null&&(f.lanes|=a),ku(x,a,e),x=null}else x=u.child;if(x!==null)x.return=u;else for(x=u;x!==null;){if(x===e){x=null;break}if(u=x.sibling,u!==null){u.return=x.return,x=u;break}x=x.return}u=x}}function er(e,n,a,o){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var x=u.alternate;if(x===null)throw Error(s(387));if(x=x.memoizedProps,x!==null){var A=u.type;$n(u.pendingProps.value,x.value)||(e!==null?e.push(A):e=[A])}}else if(u===ut.current){if(x=u.alternate,x===null)throw Error(s(387));x.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Bo):e=[Bo])}u=u.return}e!==null&&Xu(n,e,a,o),n.flags|=262144}function Cl(e){for(e=e.firstContext;e!==null;){if(!$n(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function xs(e){vs=e,$i=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function wn(e){return em(vs,e)}function wl(e,n){return vs===null&&xs(e),em(e,n)}function em(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},$i===null){if(e===null)throw Error(s(308));$i=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else $i=$i.next=n;return a}var Qx=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Jx=r.unstable_scheduleCallback,$x=r.unstable_NormalPriority,ln={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Wu(){return{controller:new Qx,data:new Map,refCount:0}}function ho(e){e.refCount--,e.refCount===0&&Jx($x,function(){e.controller.abort()})}var po=null,Yu=0,nr=0,ir=null;function tS(e,n){if(po===null){var a=po=[];Yu=0,nr=Kf(),ir={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Yu++,n.then(nm,nm),n}function nm(){if(--Yu===0&&po!==null){ir!==null&&(ir.status="fulfilled");var e=po;po=null,nr=0,ir=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function eS(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var im=I.S;I.S=function(e,n){Hg=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&tS(e,n),im!==null&&im(e,n)};var Ss=F(null);function qu(){var e=Ss.current;return e!==null?e:We.pooledCache}function Dl(e,n){n===null?gt(Ss,Ss.current):gt(Ss,n.pool)}function am(){var e=qu();return e===null?null:{parent:ln._currentValue,pool:e}}var ar=Error(s(460)),ju=Error(s(474)),Ul=Error(s(542)),Ll={then:function(){}};function sm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function rm(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Zi,Zi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,lm(e),e;default:if(typeof n.status=="string")n.then(Zi,Zi);else{if(e=We,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,lm(e),e}throw Ms=n,ar}}function ys(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ms=a,ar):a}}var Ms=null;function om(){if(Ms===null)throw Error(s(459));var e=Ms;return Ms=null,e}function lm(e){if(e===ar||e===Ul)throw Error(s(483))}var sr=null,mo=0;function Nl(e){var n=mo;return mo+=1,sr===null&&(sr=[]),rm(sr,e,n)}function go(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Ol(e,n){throw n.$$typeof===y?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function cm(e){function n(j,k){if(e){var $=j.deletions;$===null?(j.deletions=[k],j.flags|=16):$.push(k)}}function a(j,k){if(!e)return null;for(;k!==null;)n(j,k),k=k.sibling;return null}function o(j){for(var k=new Map;j!==null;)j.key!==null?k.set(j.key,j):k.set(j.index,j),j=j.sibling;return k}function u(j,k){return j=Qi(j,k),j.index=0,j.sibling=null,j}function f(j,k,$){return j.index=$,e?($=j.alternate,$!==null?($=$.index,$<k?(j.flags|=67108866,k):$):(j.flags|=67108866,k)):(j.flags|=1048576,k)}function x(j){return e&&j.alternate===null&&(j.flags|=67108866),j}function A(j,k,$,pt){return k===null||k.tag!==6?(k=zu($,j.mode,pt),k.return=j,k):(k=u(k,$),k.return=j,k)}function B(j,k,$,pt){var Kt=$.type;return Kt===C?ht(j,k,$.props.children,pt,$.key):k!==null&&(k.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===X&&ys(Kt)===k.type)?(k=u(k,$.props),go(k,$),k.return=j,k):(k=Al($.type,$.key,$.props,null,j.mode,pt),go(k,$),k.return=j,k)}function tt(j,k,$,pt){return k===null||k.tag!==4||k.stateNode.containerInfo!==$.containerInfo||k.stateNode.implementation!==$.implementation?(k=Fu($,j.mode,pt),k.return=j,k):(k=u(k,$.children||[]),k.return=j,k)}function ht(j,k,$,pt,Kt){return k===null||k.tag!==7?(k=gs($,j.mode,pt,Kt),k.return=j,k):(k=u(k,$),k.return=j,k)}function mt(j,k,$){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=zu(""+k,j.mode,$),k.return=j,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case M:return $=Al(k.type,k.key,k.props,null,j.mode,$),go($,k),$.return=j,$;case b:return k=Fu(k,j.mode,$),k.return=j,k;case X:return k=ys(k),mt(j,k,$)}if(lt(k)||Z(k))return k=gs(k,j.mode,$,null),k.return=j,k;if(typeof k.then=="function")return mt(j,Nl(k),$);if(k.$$typeof===w)return mt(j,wl(j,k),$);Ol(j,k)}return null}function nt(j,k,$,pt){var Kt=k!==null?k.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return Kt!==null?null:A(j,k,""+$,pt);if(typeof $=="object"&&$!==null){switch($.$$typeof){case M:return $.key===Kt?B(j,k,$,pt):null;case b:return $.key===Kt?tt(j,k,$,pt):null;case X:return $=ys($),nt(j,k,$,pt)}if(lt($)||Z($))return Kt!==null?null:ht(j,k,$,pt,null);if(typeof $.then=="function")return nt(j,k,Nl($),pt);if($.$$typeof===w)return nt(j,k,wl(j,$),pt);Ol(j,$)}return null}function ot(j,k,$,pt,Kt){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return j=j.get($)||null,A(k,j,""+pt,Kt);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case M:return j=j.get(pt.key===null?$:pt.key)||null,B(k,j,pt,Kt);case b:return j=j.get(pt.key===null?$:pt.key)||null,tt(k,j,pt,Kt);case X:return pt=ys(pt),ot(j,k,$,pt,Kt)}if(lt(pt)||Z(pt))return j=j.get($)||null,ht(k,j,pt,Kt,null);if(typeof pt.then=="function")return ot(j,k,$,Nl(pt),Kt);if(pt.$$typeof===w)return ot(j,k,$,wl(k,pt),Kt);Ol(k,pt)}return null}function Gt(j,k,$,pt){for(var Kt=null,Ae=null,qt=k,ce=k=0,ye=null;qt!==null&&ce<$.length;ce++){qt.index>ce?(ye=qt,qt=null):ye=qt.sibling;var Re=nt(j,qt,$[ce],pt);if(Re===null){qt===null&&(qt=ye);break}e&&qt&&Re.alternate===null&&n(j,qt),k=f(Re,k,ce),Ae===null?Kt=Re:Ae.sibling=Re,Ae=Re,qt=ye}if(ce===$.length)return a(j,qt),Me&&Ji(j,ce),Kt;if(qt===null){for(;ce<$.length;ce++)qt=mt(j,$[ce],pt),qt!==null&&(k=f(qt,k,ce),Ae===null?Kt=qt:Ae.sibling=qt,Ae=qt);return Me&&Ji(j,ce),Kt}for(qt=o(qt);ce<$.length;ce++)ye=ot(qt,j,ce,$[ce],pt),ye!==null&&(e&&ye.alternate!==null&&qt.delete(ye.key===null?ce:ye.key),k=f(ye,k,ce),Ae===null?Kt=ye:Ae.sibling=ye,Ae=ye);return e&&qt.forEach(function(Qa){return n(j,Qa)}),Me&&Ji(j,ce),Kt}function $t(j,k,$,pt){if($==null)throw Error(s(151));for(var Kt=null,Ae=null,qt=k,ce=k=0,ye=null,Re=$.next();qt!==null&&!Re.done;ce++,Re=$.next()){qt.index>ce?(ye=qt,qt=null):ye=qt.sibling;var Qa=nt(j,qt,Re.value,pt);if(Qa===null){qt===null&&(qt=ye);break}e&&qt&&Qa.alternate===null&&n(j,qt),k=f(Qa,k,ce),Ae===null?Kt=Qa:Ae.sibling=Qa,Ae=Qa,qt=ye}if(Re.done)return a(j,qt),Me&&Ji(j,ce),Kt;if(qt===null){for(;!Re.done;ce++,Re=$.next())Re=mt(j,Re.value,pt),Re!==null&&(k=f(Re,k,ce),Ae===null?Kt=Re:Ae.sibling=Re,Ae=Re);return Me&&Ji(j,ce),Kt}for(qt=o(qt);!Re.done;ce++,Re=$.next())Re=ot(qt,j,ce,Re.value,pt),Re!==null&&(e&&Re.alternate!==null&&qt.delete(Re.key===null?ce:Re.key),k=f(Re,k,ce),Ae===null?Kt=Re:Ae.sibling=Re,Ae=Re);return e&&qt.forEach(function(hy){return n(j,hy)}),Me&&Ji(j,ce),Kt}function ke(j,k,$,pt){if(typeof $=="object"&&$!==null&&$.type===C&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case M:t:{for(var Kt=$.key;k!==null;){if(k.key===Kt){if(Kt=$.type,Kt===C){if(k.tag===7){a(j,k.sibling),pt=u(k,$.props.children),pt.return=j,j=pt;break t}}else if(k.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===X&&ys(Kt)===k.type){a(j,k.sibling),pt=u(k,$.props),go(pt,$),pt.return=j,j=pt;break t}a(j,k);break}else n(j,k);k=k.sibling}$.type===C?(pt=gs($.props.children,j.mode,pt,$.key),pt.return=j,j=pt):(pt=Al($.type,$.key,$.props,null,j.mode,pt),go(pt,$),pt.return=j,j=pt)}return x(j);case b:t:{for(Kt=$.key;k!==null;){if(k.key===Kt)if(k.tag===4&&k.stateNode.containerInfo===$.containerInfo&&k.stateNode.implementation===$.implementation){a(j,k.sibling),pt=u(k,$.children||[]),pt.return=j,j=pt;break t}else{a(j,k);break}else n(j,k);k=k.sibling}pt=Fu($,j.mode,pt),pt.return=j,j=pt}return x(j);case X:return $=ys($),ke(j,k,$,pt)}if(lt($))return Gt(j,k,$,pt);if(Z($)){if(Kt=Z($),typeof Kt!="function")throw Error(s(150));return $=Kt.call($),$t(j,k,$,pt)}if(typeof $.then=="function")return ke(j,k,Nl($),pt);if($.$$typeof===w)return ke(j,k,wl(j,$),pt);Ol(j,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,k!==null&&k.tag===6?(a(j,k.sibling),pt=u(k,$),pt.return=j,j=pt):(a(j,k),pt=zu($,j.mode,pt),pt.return=j,j=pt),x(j)):a(j,k)}return function(j,k,$,pt){try{mo=0;var Kt=ke(j,k,$,pt);return sr=null,Kt}catch(qt){if(qt===ar||qt===Ul)throw qt;var Ae=ti(29,qt,null,j.mode);return Ae.lanes=pt,Ae.return=j,Ae}}}var Es=cm(!0),um=cm(!1),Oa=!1;function Zu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ku(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Pa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function za(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Le&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Tl(e),qp(e,null,a),n}return bl(e,o,n,a),Tl(e)}function _o(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Kr(e,a)}}function Qu(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=x:f=f.next=x,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Ju=!1;function vo(){if(Ju){var e=ir;if(e!==null)throw e}}function xo(e,n,a,o){Ju=!1;var u=e.updateQueue;Oa=!1;var f=u.firstBaseUpdate,x=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var B=A,tt=B.next;B.next=null,x===null?f=tt:x.next=tt,x=B;var ht=e.alternate;ht!==null&&(ht=ht.updateQueue,A=ht.lastBaseUpdate,A!==x&&(A===null?ht.firstBaseUpdate=tt:A.next=tt,ht.lastBaseUpdate=B))}if(f!==null){var mt=u.baseState;x=0,ht=tt=B=null,A=f;do{var nt=A.lane&-536870913,ot=nt!==A.lane;if(ot?(Se&nt)===nt:(o&nt)===nt){nt!==0&&nt===nr&&(Ju=!0),ht!==null&&(ht=ht.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Gt=e,$t=A;nt=n;var ke=a;switch($t.tag){case 1:if(Gt=$t.payload,typeof Gt=="function"){mt=Gt.call(ke,mt,nt);break t}mt=Gt;break t;case 3:Gt.flags=Gt.flags&-65537|128;case 0:if(Gt=$t.payload,nt=typeof Gt=="function"?Gt.call(ke,mt,nt):Gt,nt==null)break t;mt=g({},mt,nt);break t;case 2:Oa=!0}}nt=A.callback,nt!==null&&(e.flags|=64,ot&&(e.flags|=8192),ot=u.callbacks,ot===null?u.callbacks=[nt]:ot.push(nt))}else ot={lane:nt,tag:A.tag,payload:A.payload,callback:A.callback,next:null},ht===null?(tt=ht=ot,B=mt):ht=ht.next=ot,x|=nt;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;ot=A,A=ot.next,ot.next=null,u.lastBaseUpdate=ot,u.shared.pending=null}}while(!0);ht===null&&(B=mt),u.baseState=B,u.firstBaseUpdate=tt,u.lastBaseUpdate=ht,f===null&&(u.shared.lanes=0),Ga|=x,e.lanes=x,e.memoizedState=mt}}function fm(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function hm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)fm(a[e],n)}var rr=F(null),Pl=F(0);function dm(e,n){e=ca,gt(Pl,e),gt(rr,n),ca=e|n.baseLanes}function $u(){gt(Pl,ca),gt(rr,rr.current)}function tf(){ca=Pl.current,at(rr),at(Pl)}var ei=F(null),_i=null;function Fa(e){var n=e.alternate;gt(an,an.current&1),gt(ei,e),_i===null&&(n===null||rr.current!==null||n.memoizedState!==null)&&(_i=e)}function ef(e){gt(an,an.current),gt(ei,e),_i===null&&(_i=e)}function pm(e){e.tag===22?(gt(an,an.current),gt(ei,e),_i===null&&(_i=e)):Ia()}function Ia(){gt(an,an.current),gt(ei,ei.current)}function ni(e){at(ei),_i===e&&(_i=null),at(an)}var an=F(0);function zl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||lh(a)||ch(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ea=0,oe=null,Ge=null,cn=null,Fl=!1,or=!1,bs=!1,Il=0,So=0,lr=null,nS=0;function tn(){throw Error(s(321))}function nf(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!$n(e[a],n[a]))return!1;return!0}function af(e,n,a,o,u,f){return ea=f,oe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,I.H=e===null||e.memoizedState===null?Qm:xf,bs=!1,f=a(o,u),bs=!1,or&&(f=gm(n,a,o,u)),mm(e),f}function mm(e){I.H=Eo;var n=Ge!==null&&Ge.next!==null;if(ea=0,cn=Ge=oe=null,Fl=!1,So=0,lr=null,n)throw Error(s(300));e===null||un||(e=e.dependencies,e!==null&&Cl(e)&&(un=!0))}function gm(e,n,a,o){oe=e;var u=0;do{if(or&&(lr=null),So=0,or=!1,25<=u)throw Error(s(301));if(u+=1,cn=Ge=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}I.H=Jm,f=n(a,o)}while(or);return f}function iS(){var e=I.H,n=e.useState()[0];return n=typeof n.then=="function"?yo(n):n,e=e.useState()[0],(Ge!==null?Ge.memoizedState:null)!==e&&(oe.flags|=1024),n}function sf(){var e=Il!==0;return Il=0,e}function rf(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function of(e){if(Fl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Fl=!1}ea=0,cn=Ge=oe=null,or=!1,So=Il=0,lr=null}function Bn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?oe.memoizedState=cn=e:cn=cn.next=e,cn}function sn(){if(Ge===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=Ge.next;var n=cn===null?oe.memoizedState:cn.next;if(n!==null)cn=n,Ge=e;else{if(e===null)throw oe.alternate===null?Error(s(467)):Error(s(310));Ge=e,e={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},cn===null?oe.memoizedState=cn=e:cn=cn.next=e}return cn}function Bl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function yo(e){var n=So;return So+=1,lr===null&&(lr=[]),e=rm(lr,e,n),n=oe,(cn===null?n.memoizedState:cn.next)===null&&(n=n.alternate,I.H=n===null||n.memoizedState===null?Qm:xf),e}function Hl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return yo(e);if(e.$$typeof===w)return wn(e)}throw Error(s(438,String(e)))}function lf(e){var n=null,a=oe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=oe.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Bl(),oe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=L;return n.index++,a}function na(e,n){return typeof n=="function"?n(e):n}function Gl(e){var n=sn();return cf(n,Ge,e)}function cf(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,f=o.pending;if(f!==null){if(u!==null){var x=u.next;u.next=f.next,f.next=x}n.baseQueue=u=f,o.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var A=x=null,B=null,tt=n,ht=!1;do{var mt=tt.lane&-536870913;if(mt!==tt.lane?(Se&mt)===mt:(ea&mt)===mt){var nt=tt.revertLane;if(nt===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null}),mt===nr&&(ht=!0);else if((ea&nt)===nt){tt=tt.next,nt===nr&&(ht=!0);continue}else mt={lane:0,revertLane:tt.revertLane,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},B===null?(A=B=mt,x=f):B=B.next=mt,oe.lanes|=nt,Ga|=nt;mt=tt.action,bs&&a(f,mt),f=tt.hasEagerState?tt.eagerState:a(f,mt)}else nt={lane:mt,revertLane:tt.revertLane,gesture:tt.gesture,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},B===null?(A=B=nt,x=f):B=B.next=nt,oe.lanes|=mt,Ga|=mt;tt=tt.next}while(tt!==null&&tt!==n);if(B===null?x=f:B.next=A,!$n(f,e.memoizedState)&&(un=!0,ht&&(a=ir,a!==null)))throw a;e.memoizedState=f,e.baseState=x,e.baseQueue=B,o.lastRenderedState=f}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function uf(e){var n=sn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var x=u=u.next;do f=e(f,x.action),x=x.next;while(x!==u);$n(f,n.memoizedState)||(un=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function _m(e,n,a){var o=oe,u=sn(),f=Me;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var x=!$n((Ge||u).memoizedState,a);if(x&&(u.memoizedState=a,un=!0),u=u.queue,df(Sm.bind(null,o,u,e),[e]),u.getSnapshot!==n||x||cn!==null&&cn.memoizedState.tag&1){if(o.flags|=2048,cr(9,{destroy:void 0},xm.bind(null,o,u,a,n),null),We===null)throw Error(s(349));f||(ea&127)!==0||vm(o,n,a)}return a}function vm(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=oe.updateQueue,n===null?(n=Bl(),oe.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function xm(e,n,a,o){n.value=a,n.getSnapshot=o,ym(n)&&Mm(e)}function Sm(e,n,a){return a(function(){ym(n)&&Mm(e)})}function ym(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!$n(e,a)}catch{return!0}}function Mm(e){var n=ms(e,2);n!==null&&Zn(n,e,2)}function ff(e){var n=Bn();if(typeof e=="function"){var a=e;if(e=a(),bs){zt(!0);try{a()}finally{zt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:e},n}function Em(e,n,a,o){return e.baseState=a,cf(e,Ge,typeof o=="function"?o:na)}function aS(e,n,a,o,u){if(Xl(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){f.listeners.push(x)}};I.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,bm(n,f)):(f.next=a.next,n.pending=a.next=f)}}function bm(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var f=I.T,x={};I.T=x;try{var A=a(u,o),B=I.S;B!==null&&B(x,A),Tm(e,n,A)}catch(tt){hf(e,n,tt)}finally{f!==null&&x.types!==null&&(f.types=x.types),I.T=f}}else try{f=a(u,o),Tm(e,n,f)}catch(tt){hf(e,n,tt)}}function Tm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Am(e,n,o)},function(o){return hf(e,n,o)}):Am(e,n,a)}function Am(e,n,a){n.status="fulfilled",n.value=a,Rm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,bm(e,a)))}function hf(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Rm(n),n=n.next;while(n!==o)}e.action=null}function Rm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Cm(e,n){return n}function wm(e,n){if(Me){var a=We.formState;if(a!==null){t:{var o=oe;if(Me){if(qe){e:{for(var u=qe,f=gi;u.nodeType!==8;){if(!f){u=null;break e}if(u=vi(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){qe=vi(u.nextSibling),o=u.data==="F!";break t}}La(o)}o=!1}o&&(n=a[0])}}return a=Bn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Cm,lastRenderedState:n},a.queue=o,a=jm.bind(null,oe,o),o.dispatch=a,o=ff(!1),f=vf.bind(null,oe,!1,o.queue),o=Bn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=aS.bind(null,oe,u,f,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function Dm(e){var n=sn();return Um(n,Ge,e)}function Um(e,n,a){if(n=cf(e,n,Cm)[0],e=Gl(na)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=yo(n)}catch(x){throw x===ar?Ul:x}else o=n;n=sn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(oe.flags|=2048,cr(9,{destroy:void 0},sS.bind(null,u,a),null)),[o,f,e]}function sS(e,n){e.action=n}function Lm(e){var n=sn(),a=Ge;if(a!==null)return Um(n,a,e);sn(),n=n.memoizedState,a=sn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function cr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=oe.updateQueue,n===null&&(n=Bl(),oe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Nm(){return sn().memoizedState}function Vl(e,n,a,o){var u=Bn();oe.flags|=e,u.memoizedState=cr(1|n,{destroy:void 0},a,o===void 0?null:o)}function kl(e,n,a,o){var u=sn();o=o===void 0?null:o;var f=u.memoizedState.inst;Ge!==null&&o!==null&&nf(o,Ge.memoizedState.deps)?u.memoizedState=cr(n,f,a,o):(oe.flags|=e,u.memoizedState=cr(1|n,f,a,o))}function Om(e,n){Vl(8390656,8,e,n)}function df(e,n){kl(2048,8,e,n)}function rS(e){oe.flags|=4;var n=oe.updateQueue;if(n===null)n=Bl(),oe.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Pm(e){var n=sn().memoizedState;return rS({ref:n,nextImpl:e}),function(){if((Le&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function zm(e,n){return kl(4,2,e,n)}function Fm(e,n){return kl(4,4,e,n)}function Im(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Bm(e,n,a){a=a!=null?a.concat([e]):null,kl(4,4,Im.bind(null,n,e),a)}function pf(){}function Hm(e,n){var a=sn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&nf(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Gm(e,n){var a=sn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&nf(n,o[1]))return o[0];if(o=e(),bs){zt(!0);try{e()}finally{zt(!1)}}return a.memoizedState=[o,n],o}function mf(e,n,a){return a===void 0||(ea&1073741824)!==0&&(Se&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Vg(),oe.lanes|=e,Ga|=e,a)}function Vm(e,n,a,o){return $n(a,n)?a:rr.current!==null?(e=mf(e,a,o),$n(e,n)||(un=!0),e):(ea&42)===0||(ea&1073741824)!==0&&(Se&261930)===0?(un=!0,e.memoizedState=a):(e=Vg(),oe.lanes|=e,Ga|=e,n)}function km(e,n,a,o,u){var f=G.p;G.p=f!==0&&8>f?f:8;var x=I.T,A={};I.T=A,vf(e,!1,n,a);try{var B=u(),tt=I.S;if(tt!==null&&tt(A,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var ht=eS(B,o);Mo(e,n,ht,si(e))}else Mo(e,n,o,si(e))}catch(mt){Mo(e,n,{then:function(){},status:"rejected",reason:mt},si())}finally{G.p=f,x!==null&&A.types!==null&&(x.types=A.types),I.T=x}}function oS(){}function gf(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=Xm(e).queue;km(e,u,n,st,a===null?oS:function(){return Wm(e),a(o)})}function Xm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:st,baseState:st,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:st},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Wm(e){var n=Xm(e);n.next===null&&(n=e.alternate.memoizedState),Mo(e,n.next.queue,{},si())}function _f(){return wn(Bo)}function Ym(){return sn().memoizedState}function qm(){return sn().memoizedState}function lS(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=si();e=Pa(a);var o=za(n,e,a);o!==null&&(Zn(o,n,a),_o(o,n,a)),n={cache:Wu()},e.payload=n;return}n=n.return}}function cS(e,n,a){var o=si();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Xl(e)?Zm(n,a):(a=Ou(e,n,a,o),a!==null&&(Zn(a,e,o),Km(a,n,o)))}function jm(e,n,a){var o=si();Mo(e,n,a,o)}function Mo(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Xl(e))Zm(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var x=n.lastRenderedState,A=f(x,a);if(u.hasEagerState=!0,u.eagerState=A,$n(A,x))return bl(e,n,u,0),We===null&&El(),!1}catch{}if(a=Ou(e,n,u,o),a!==null)return Zn(a,e,o),Km(a,n,o),!0}return!1}function vf(e,n,a,o){if(o={lane:2,revertLane:Kf(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Xl(e)){if(n)throw Error(s(479))}else n=Ou(e,a,o,2),n!==null&&Zn(n,e,2)}function Xl(e){var n=e.alternate;return e===oe||n!==null&&n===oe}function Zm(e,n){or=Fl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Km(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Kr(e,a)}}var Eo={readContext:wn,use:Hl,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useLayoutEffect:tn,useInsertionEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useSyncExternalStore:tn,useId:tn,useHostTransitionStatus:tn,useFormState:tn,useActionState:tn,useOptimistic:tn,useMemoCache:tn,useCacheRefresh:tn};Eo.useEffectEvent=tn;var Qm={readContext:wn,use:Hl,useCallback:function(e,n){return Bn().memoizedState=[e,n===void 0?null:n],e},useContext:wn,useEffect:Om,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Vl(4194308,4,Im.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Vl(4194308,4,e,n)},useInsertionEffect:function(e,n){Vl(4,2,e,n)},useMemo:function(e,n){var a=Bn();n=n===void 0?null:n;var o=e();if(bs){zt(!0);try{e()}finally{zt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Bn();if(a!==void 0){var u=a(n);if(bs){zt(!0);try{a(n)}finally{zt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=cS.bind(null,oe,e),[o.memoizedState,e]},useRef:function(e){var n=Bn();return e={current:e},n.memoizedState=e},useState:function(e){e=ff(e);var n=e.queue,a=jm.bind(null,oe,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:pf,useDeferredValue:function(e,n){var a=Bn();return mf(a,e,n)},useTransition:function(){var e=ff(!1);return e=km.bind(null,oe,e.queue,!0,!1),Bn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=oe,u=Bn();if(Me){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),We===null)throw Error(s(349));(Se&127)!==0||vm(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Om(Sm.bind(null,o,f,e),[e]),o.flags|=2048,cr(9,{destroy:void 0},xm.bind(null,o,f,a,n),null),a},useId:function(){var e=Bn(),n=We.identifierPrefix;if(Me){var a=Fi,o=zi;a=(o&~(1<<32-Ot(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Il++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=nS++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:_f,useFormState:wm,useActionState:wm,useOptimistic:function(e){var n=Bn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=vf.bind(null,oe,!0,a),a.dispatch=n,[e,n]},useMemoCache:lf,useCacheRefresh:function(){return Bn().memoizedState=lS.bind(null,oe)},useEffectEvent:function(e){var n=Bn(),a={impl:e};return n.memoizedState=a,function(){if((Le&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},xf={readContext:wn,use:Hl,useCallback:Hm,useContext:wn,useEffect:df,useImperativeHandle:Bm,useInsertionEffect:zm,useLayoutEffect:Fm,useMemo:Gm,useReducer:Gl,useRef:Nm,useState:function(){return Gl(na)},useDebugValue:pf,useDeferredValue:function(e,n){var a=sn();return Vm(a,Ge.memoizedState,e,n)},useTransition:function(){var e=Gl(na)[0],n=sn().memoizedState;return[typeof e=="boolean"?e:yo(e),n]},useSyncExternalStore:_m,useId:Ym,useHostTransitionStatus:_f,useFormState:Dm,useActionState:Dm,useOptimistic:function(e,n){var a=sn();return Em(a,Ge,e,n)},useMemoCache:lf,useCacheRefresh:qm};xf.useEffectEvent=Pm;var Jm={readContext:wn,use:Hl,useCallback:Hm,useContext:wn,useEffect:df,useImperativeHandle:Bm,useInsertionEffect:zm,useLayoutEffect:Fm,useMemo:Gm,useReducer:uf,useRef:Nm,useState:function(){return uf(na)},useDebugValue:pf,useDeferredValue:function(e,n){var a=sn();return Ge===null?mf(a,e,n):Vm(a,Ge.memoizedState,e,n)},useTransition:function(){var e=uf(na)[0],n=sn().memoizedState;return[typeof e=="boolean"?e:yo(e),n]},useSyncExternalStore:_m,useId:Ym,useHostTransitionStatus:_f,useFormState:Lm,useActionState:Lm,useOptimistic:function(e,n){var a=sn();return Ge!==null?Em(a,Ge,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:lf,useCacheRefresh:qm};Jm.useEffectEvent=Pm;function Sf(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var yf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=si(),u=Pa(o);u.payload=n,a!=null&&(u.callback=a),n=za(e,u,o),n!==null&&(Zn(n,e,o),_o(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=si(),u=Pa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=za(e,u,o),n!==null&&(Zn(n,e,o),_o(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=si(),o=Pa(a);o.tag=2,n!=null&&(o.callback=n),n=za(e,o,a),n!==null&&(Zn(n,e,a),_o(n,e,a))}};function $m(e,n,a,o,u,f,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,f,x):n.prototype&&n.prototype.isPureReactComponent?!lo(a,o)||!lo(u,f):!0}function tg(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&yf.enqueueReplaceState(n,n.state,null)}function Ts(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function eg(e){Ml(e)}function ng(e){console.error(e)}function ig(e){Ml(e)}function Wl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function ag(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Mf(e,n,a){return a=Pa(a),a.tag=3,a.payload={element:null},a.callback=function(){Wl(e,n)},a}function sg(e){return e=Pa(e),e.tag=3,e}function rg(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;e.payload=function(){return u(f)},e.callback=function(){ag(n,a,o)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){ag(n,a,o),typeof u!="function"&&(Va===null?Va=new Set([this]):Va.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function uS(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&er(n,a,u,!0),a=ei.current,a!==null){switch(a.tag){case 31:case 13:return _i===null?ic():a.alternate===null&&en===0&&(en=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Ll?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),qf(e,o,u)),!1;case 22:return a.flags|=65536,o===Ll?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),qf(e,o,u)),!1}throw Error(s(435,a.tag))}return qf(e,o,u),ic(),!1}if(Me)return n=ei.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Hu&&(e=Error(s(422),{cause:o}),fo(di(e,a)))):(o!==Hu&&(n=Error(s(423),{cause:o}),fo(di(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=di(o,a),u=Mf(e.stateNode,o,u),Qu(e,u),en!==4&&(en=2)),!1;var f=Error(s(520),{cause:o});if(f=di(f,a),Uo===null?Uo=[f]:Uo.push(f),en!==4&&(en=2),n===null)return!0;o=di(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Mf(a.stateNode,o,e),Qu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Va===null||!Va.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=sg(u),rg(u,e,a,o),Qu(a,u),!1}a=a.return}while(a!==null);return!1}var Ef=Error(s(461)),un=!1;function Dn(e,n,a,o){n.child=e===null?um(n,null,a,o):Es(n,e.child,a,o)}function og(e,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var x={};for(var A in o)A!=="ref"&&(x[A]=o[A])}else x=o;return xs(n),o=af(e,n,a,x,f,u),A=sf(),e!==null&&!un?(rf(e,n,u),ia(e,n,u)):(Me&&A&&Iu(n),n.flags|=1,Dn(e,n,o,u),n.child)}function lg(e,n,a,o,u){if(e===null){var f=a.type;return typeof f=="function"&&!Pu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,cg(e,n,f,o,u)):(e=Al(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Uf(e,u)){var x=f.memoizedProps;if(a=a.compare,a=a!==null?a:lo,a(x,o)&&e.ref===n.ref)return ia(e,n,u)}return n.flags|=1,e=Qi(f,o),e.ref=n.ref,e.return=n,n.child=e}function cg(e,n,a,o,u){if(e!==null){var f=e.memoizedProps;if(lo(f,o)&&e.ref===n.ref)if(un=!1,n.pendingProps=o=f,Uf(e,u))(e.flags&131072)!==0&&(un=!0);else return n.lanes=e.lanes,ia(e,n,u)}return bf(e,n,a,o,u)}function ug(e,n,a,o){var u=o.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return fg(e,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Dl(n,f!==null?f.cachePool:null),f!==null?dm(n,f):$u(),pm(n);else return o=n.lanes=536870912,fg(e,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(Dl(n,f.cachePool),dm(n,f),Ia(),n.memoizedState=null):(e!==null&&Dl(n,null),$u(),Ia());return Dn(e,n,u,a),n.child}function bo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function fg(e,n,a,o,u){var f=qu();return f=f===null?null:{parent:ln._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&Dl(n,null),$u(),pm(n),e!==null&&er(e,n,o,!0),n.childLanes=u,null}function Yl(e,n){return n=jl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function hg(e,n,a){return Es(n,e.child,null,a),e=Yl(n,n.pendingProps),e.flags|=2,ni(n),n.memoizedState=null,e}function fS(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Me){if(o.mode==="hidden")return e=Yl(n,o),n.lanes=536870912,bo(null,e);if(ef(n),(e=qe)?(e=b_(e,gi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Da!==null?{id:zi,overflow:Fi}:null,retryLane:536870912,hydrationErrors:null},a=Zp(e),a.return=n,n.child=a,Cn=n,qe=null)):e=null,e===null)throw La(n);return n.lanes=536870912,null}return Yl(n,o)}var f=e.memoizedState;if(f!==null){var x=f.dehydrated;if(ef(n),u)if(n.flags&256)n.flags&=-257,n=hg(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(un||er(e,n,a,!1),u=(a&e.childLanes)!==0,un||u){if(o=We,o!==null&&(x=Hs(o,a),x!==0&&x!==f.retryLane))throw f.retryLane=x,ms(e,x),Zn(o,e,x),Ef;ic(),n=hg(e,n,a)}else e=f.treeContext,qe=vi(x.nextSibling),Cn=n,Me=!0,Ua=null,gi=!1,e!==null&&Jp(n,e),n=Yl(n,o),n.flags|=4096;return n}return e=Qi(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function ql(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function bf(e,n,a,o,u){return xs(n),a=af(e,n,a,o,void 0,u),o=sf(),e!==null&&!un?(rf(e,n,u),ia(e,n,u)):(Me&&o&&Iu(n),n.flags|=1,Dn(e,n,a,u),n.child)}function dg(e,n,a,o,u,f){return xs(n),n.updateQueue=null,a=gm(n,o,a,u),mm(e),o=sf(),e!==null&&!un?(rf(e,n,f),ia(e,n,f)):(Me&&o&&Iu(n),n.flags|=1,Dn(e,n,a,f),n.child)}function pg(e,n,a,o,u){if(xs(n),n.stateNode===null){var f=Qs,x=a.contextType;typeof x=="object"&&x!==null&&(f=wn(x)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=yf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},Zu(n),x=a.contextType,f.context=typeof x=="object"&&x!==null?wn(x):Qs,f.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(Sf(n,a,x,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(x=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),x!==f.state&&yf.enqueueReplaceState(f,f.state,null),xo(n,o,f,u),vo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){f=n.stateNode;var A=n.memoizedProps,B=Ts(a,A);f.props=B;var tt=f.context,ht=a.contextType;x=Qs,typeof ht=="object"&&ht!==null&&(x=wn(ht));var mt=a.getDerivedStateFromProps;ht=typeof mt=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,ht||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||tt!==x)&&tg(n,f,o,x),Oa=!1;var nt=n.memoizedState;f.state=nt,xo(n,o,f,u),vo(),tt=n.memoizedState,A||nt!==tt||Oa?(typeof mt=="function"&&(Sf(n,a,mt,o),tt=n.memoizedState),(B=Oa||$m(n,a,B,o,nt,tt,x))?(ht||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=tt),f.props=o,f.state=tt,f.context=x,o=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,Ku(e,n),x=n.memoizedProps,ht=Ts(a,x),f.props=ht,mt=n.pendingProps,nt=f.context,tt=a.contextType,B=Qs,typeof tt=="object"&&tt!==null&&(B=wn(tt)),A=a.getDerivedStateFromProps,(tt=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x!==mt||nt!==B)&&tg(n,f,o,B),Oa=!1,nt=n.memoizedState,f.state=nt,xo(n,o,f,u),vo();var ot=n.memoizedState;x!==mt||nt!==ot||Oa||e!==null&&e.dependencies!==null&&Cl(e.dependencies)?(typeof A=="function"&&(Sf(n,a,A,o),ot=n.memoizedState),(ht=Oa||$m(n,a,ht,o,nt,ot,B)||e!==null&&e.dependencies!==null&&Cl(e.dependencies))?(tt||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,ot,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,ot,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||x===e.memoizedProps&&nt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&nt===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ot),f.props=o,f.state=ot,f.context=B,o=ht):(typeof f.componentDidUpdate!="function"||x===e.memoizedProps&&nt===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&nt===e.memoizedState||(n.flags|=1024),o=!1)}return f=o,ql(e,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&o?(n.child=Es(n,e.child,null,u),n.child=Es(n,null,a,u)):Dn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=ia(e,n,u),e}function mg(e,n,a,o){return _s(),n.flags|=256,Dn(e,n,a,o),n.child}var Tf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Af(e){return{baseLanes:e,cachePool:am()}}function Rf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ai),e}function gg(e,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,x;if((x=f)||(x=e!==null&&e.memoizedState===null?!1:(an.current&2)!==0),x&&(u=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,e===null){if(Me){if(u?Fa(n):Ia(),(e=qe)?(e=b_(e,gi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Da!==null?{id:zi,overflow:Fi}:null,retryLane:536870912,hydrationErrors:null},a=Zp(e),a.return=n,n.child=a,Cn=n,qe=null)):e=null,e===null)throw La(n);return ch(e)?n.lanes=32:n.lanes=536870912,null}var A=o.children;return o=o.fallback,u?(Ia(),u=n.mode,A=jl({mode:"hidden",children:A},u),o=gs(o,u,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,o=n.child,o.memoizedState=Af(a),o.childLanes=Rf(e,x,a),n.memoizedState=Tf,bo(null,o)):(Fa(n),Cf(n,A))}var B=e.memoizedState;if(B!==null&&(A=B.dehydrated,A!==null)){if(f)n.flags&256?(Fa(n),n.flags&=-257,n=wf(e,n,a)):n.memoizedState!==null?(Ia(),n.child=e.child,n.flags|=128,n=null):(Ia(),A=o.fallback,u=n.mode,o=jl({mode:"visible",children:o.children},u),A=gs(A,u,a,null),A.flags|=2,o.return=n,A.return=n,o.sibling=A,n.child=o,Es(n,e.child,null,a),o=n.child,o.memoizedState=Af(a),o.childLanes=Rf(e,x,a),n.memoizedState=Tf,n=bo(null,o));else if(Fa(n),ch(A)){if(x=A.nextSibling&&A.nextSibling.dataset,x)var tt=x.dgst;x=tt,o=Error(s(419)),o.stack="",o.digest=x,fo({value:o,source:null,stack:null}),n=wf(e,n,a)}else if(un||er(e,n,a,!1),x=(a&e.childLanes)!==0,un||x){if(x=We,x!==null&&(o=Hs(x,a),o!==0&&o!==B.retryLane))throw B.retryLane=o,ms(e,o),Zn(x,e,o),Ef;lh(A)||ic(),n=wf(e,n,a)}else lh(A)?(n.flags|=192,n.child=e.child,n=null):(e=B.treeContext,qe=vi(A.nextSibling),Cn=n,Me=!0,Ua=null,gi=!1,e!==null&&Jp(n,e),n=Cf(n,o.children),n.flags|=4096);return n}return u?(Ia(),A=o.fallback,u=n.mode,B=e.child,tt=B.sibling,o=Qi(B,{mode:"hidden",children:o.children}),o.subtreeFlags=B.subtreeFlags&65011712,tt!==null?A=Qi(tt,A):(A=gs(A,u,a,null),A.flags|=2),A.return=n,o.return=n,o.sibling=A,n.child=o,bo(null,o),o=n.child,A=e.child.memoizedState,A===null?A=Af(a):(u=A.cachePool,u!==null?(B=ln._currentValue,u=u.parent!==B?{parent:B,pool:B}:u):u=am(),A={baseLanes:A.baseLanes|a,cachePool:u}),o.memoizedState=A,o.childLanes=Rf(e,x,a),n.memoizedState=Tf,bo(e.child,o)):(Fa(n),a=e.child,e=a.sibling,a=Qi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(x=n.deletions,x===null?(n.deletions=[e],n.flags|=16):x.push(e)),n.child=a,n.memoizedState=null,a)}function Cf(e,n){return n=jl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function jl(e,n){return e=ti(22,e,null,n),e.lanes=0,e}function wf(e,n,a){return Es(n,e.child,null,a),e=Cf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function _g(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),ku(e.return,n,a)}function Df(e,n,a,o,u,f){var x=e.memoizedState;x===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=o,x.tail=a,x.tailMode=u,x.treeForkCount=f)}function vg(e,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var x=an.current,A=(x&2)!==0;if(A?(x=x&1|2,n.flags|=128):x&=1,gt(an,x),Dn(e,n,o,a),o=Me?uo:0,!A&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&_g(e,a,n);else if(e.tag===19)_g(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&zl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Df(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&zl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Df(n,!0,a,null,f,o);break;case"together":Df(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ia(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ga|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(er(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Qi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Qi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Uf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Cl(e)))}function hS(e,n,a){switch(n.tag){case 3:wt(n,n.stateNode.containerInfo),Na(n,ln,e.memoizedState.cache),_s();break;case 27:case 5:Bt(n);break;case 4:wt(n,n.stateNode.containerInfo);break;case 10:Na(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,ef(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Fa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?gg(e,n,a):(Fa(n),e=ia(e,n,a),e!==null?e.sibling:null);Fa(n);break;case 19:var u=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(er(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return vg(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),gt(an,an.current),o)break;return null;case 22:return n.lanes=0,ug(e,n,a,n.pendingProps);case 24:Na(n,ln,e.memoizedState.cache)}return ia(e,n,a)}function xg(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)un=!0;else{if(!Uf(e,a)&&(n.flags&128)===0)return un=!1,hS(e,n,a);un=(e.flags&131072)!==0}else un=!1,Me&&(n.flags&1048576)!==0&&Qp(n,uo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=ys(n.elementType),n.type=e,typeof e=="function")Pu(e)?(o=Ts(e,o),n.tag=1,n=pg(null,n,e,o,a)):(n.tag=0,n=bf(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===U){n.tag=11,n=og(null,n,e,o,a);break t}else if(u===N){n.tag=14,n=lg(null,n,e,o,a);break t}}throw n=ft(e)||e,Error(s(306,n,""))}}return n;case 0:return bf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Ts(o,n.pendingProps),pg(e,n,o,u,a);case 3:t:{if(wt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,Ku(e,n),xo(n,o,null,a);var x=n.memoizedState;if(o=x.cache,Na(n,ln,o),o!==f.cache&&Xu(n,[ln],a,!0),vo(),o=x.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=mg(e,n,o,a);break t}else if(o!==u){u=di(Error(s(424)),n),fo(u),n=mg(e,n,o,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,qe=vi(e.firstChild),Cn=n,Me=!0,Ua=null,gi=!0,a=um(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(_s(),o===u){n=ia(e,n,a);break t}Dn(e,n,o,a)}n=n.child}return n;case 26:return ql(e,n),e===null?(a=D_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Me||(a=n.type,e=n.pendingProps,o=uc(it.current).createElement(a),o[on]=n,o[Mn]=e,Un(o,a,e),R(o),n.stateNode=o):n.memoizedState=D_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Bt(n),e===null&&Me&&(o=n.stateNode=R_(n.type,n.pendingProps,it.current),Cn=n,gi=!0,u=qe,Ya(n.type)?(uh=u,qe=vi(o.firstChild)):qe=u),Dn(e,n,n.pendingProps.children,a),ql(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Me&&((u=o=qe)&&(o=VS(o,n.type,n.pendingProps,gi),o!==null?(n.stateNode=o,Cn=n,qe=vi(o.firstChild),gi=!1,u=!0):u=!1),u||La(n)),Bt(n),u=n.type,f=n.pendingProps,x=e!==null?e.memoizedProps:null,o=f.children,sh(u,f)?o=null:x!==null&&sh(u,x)&&(n.flags|=32),n.memoizedState!==null&&(u=af(e,n,iS,null,null,a),Bo._currentValue=u),ql(e,n),Dn(e,n,o,a),n.child;case 6:return e===null&&Me&&((e=a=qe)&&(a=kS(a,n.pendingProps,gi),a!==null?(n.stateNode=a,Cn=n,qe=null,e=!0):e=!1),e||La(n)),null;case 13:return gg(e,n,a);case 4:return wt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Es(n,null,o,a):Dn(e,n,o,a),n.child;case 11:return og(e,n,n.type,n.pendingProps,a);case 7:return Dn(e,n,n.pendingProps,a),n.child;case 8:return Dn(e,n,n.pendingProps.children,a),n.child;case 12:return Dn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Na(n,n.type,o.value),Dn(e,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,xs(n),u=wn(u),o=o(u),n.flags|=1,Dn(e,n,o,a),n.child;case 14:return lg(e,n,n.type,n.pendingProps,a);case 15:return cg(e,n,n.type,n.pendingProps,a);case 19:return vg(e,n,a);case 31:return fS(e,n,a);case 22:return ug(e,n,a,n.pendingProps);case 24:return xs(n),o=wn(ln),e===null?(u=qu(),u===null&&(u=We,f=Wu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},Zu(n),Na(n,ln,u)):((e.lanes&a)!==0&&(Ku(e,n),xo(n,null,null,a),vo()),u=e.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Na(n,ln,o)):(o=f.cache,Na(n,ln,o),o!==u.cache&&Xu(n,[ln],a,!0))),Dn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function aa(e){e.flags|=4}function Lf(e,n,a,o,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(Yg())e.flags|=8192;else throw Ms=Ll,ju}else e.flags&=-16777217}function Sg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!P_(n))if(Yg())e.flags|=8192;else throw Ms=Ll,ju}function Zl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?ze():536870912,e.lanes|=n,dr|=n)}function To(e,n){if(!Me)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function je(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function dS(e,n,a){var o=n.pendingProps;switch(Bu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(n),null;case 1:return je(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ta(ln),Vt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(tr(n)?aa(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Gu())),je(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(aa(n),f!==null?(je(n),Sg(n,f)):(je(n),Lf(n,u,null,o,a))):f?f!==e.memoizedState?(aa(n),je(n),Sg(n,f)):(je(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&aa(n),je(n),Lf(n,u,e,o,a)),null;case 27:if(me(n),a=it.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&aa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return je(n),null}e=Tt.current,tr(n)?$p(n):(e=R_(u,o,a),n.stateNode=e,aa(n))}return je(n),null;case 5:if(me(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&aa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return je(n),null}if(f=Tt.current,tr(n))$p(n);else{var x=uc(it.current);switch(f){case 1:f=x.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=x.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=x.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?x.createElement("select",{is:o.is}):x.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?x.createElement(u,{is:o.is}):x.createElement(u)}}f[on]=n,f[Mn]=o;t:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)f.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break t;for(;x.sibling===null;){if(x.return===null||x.return===n)break t;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=f;t:switch(Un(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&aa(n)}}return je(n),Lf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&aa(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=it.current,tr(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Cn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[on]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||g_(e.nodeValue,a)),e||La(n,!0)}else e=uc(e).createTextNode(o),e[on]=n,n.stateNode=e}return je(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=tr(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[on]=n}else _s(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;je(n),e=!1}else a=Gu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ni(n),n):(ni(n),null);if((n.flags&128)!==0)throw Error(s(558))}return je(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=tr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[on]=n}else _s(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;je(n),u=!1}else u=Gu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ni(n),n):(ni(n),null)}return ni(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Zl(n,n.updateQueue),je(n),null);case 4:return Vt(),e===null&&th(n.stateNode.containerInfo),je(n),null;case 10:return ta(n.type),je(n),null;case 19:if(at(an),o=n.memoizedState,o===null)return je(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)To(o,!1);else{if(en!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=zl(e),f!==null){for(n.flags|=128,To(o,!1),e=f.updateQueue,n.updateQueue=e,Zl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)jp(a,e),a=a.sibling;return gt(an,an.current&1|2),Me&&Ji(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&E()>tc&&(n.flags|=128,u=!0,To(o,!1),n.lanes=4194304)}else{if(!u)if(e=zl(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Zl(n,e),To(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!Me)return je(n),null}else 2*E()-o.renderingStartTime>tc&&a!==536870912&&(n.flags|=128,u=!0,To(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(e=o.last,e!==null?e.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=E(),e.sibling=null,a=an.current,gt(an,u?a&1|2:a&1),Me&&Ji(n,o.treeForkCount),e):(je(n),null);case 22:case 23:return ni(n),tf(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(je(n),n.subtreeFlags&6&&(n.flags|=8192)):je(n),a=n.updateQueue,a!==null&&Zl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&at(Ss),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ta(ln),je(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function pS(e,n){switch(Bu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ta(ln),Vt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return me(n),null;case 31:if(n.memoizedState!==null){if(ni(n),n.alternate===null)throw Error(s(340));_s()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ni(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));_s()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return at(an),null;case 4:return Vt(),null;case 10:return ta(n.type),null;case 22:case 23:return ni(n),tf(),e!==null&&at(Ss),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ta(ln),null;case 25:return null;default:return null}}function yg(e,n){switch(Bu(n),n.tag){case 3:ta(ln),Vt();break;case 26:case 27:case 5:me(n);break;case 4:Vt();break;case 31:n.memoizedState!==null&&ni(n);break;case 13:ni(n);break;case 19:at(an);break;case 10:ta(n.type);break;case 22:case 23:ni(n),tf(),e!==null&&at(Ss);break;case 24:ta(ln)}}function Ao(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var f=a.create,x=a.inst;o=f(),x.destroy=o}a=a.next}while(a!==u)}}catch(A){Be(n,n.return,A)}}function Ba(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&e)===e){var x=o.inst,A=x.destroy;if(A!==void 0){x.destroy=void 0,u=n;var B=a,tt=A;try{tt()}catch(ht){Be(u,B,ht)}}}o=o.next}while(o!==f)}}catch(ht){Be(n,n.return,ht)}}function Mg(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{hm(n,a)}catch(o){Be(e,e.return,o)}}}function Eg(e,n,a){a.props=Ts(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Be(e,n,o)}}function Ro(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(u){Be(e,n,u)}}function Ii(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Be(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Be(e,n,u)}else a.current=null}function bg(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Be(e,e.return,u)}}function Nf(e,n,a){try{var o=e.stateNode;zS(o,e.type,a,n),o[Mn]=n}catch(u){Be(e,e.return,u)}}function Tg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ya(e.type)||e.tag===4}function Of(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Tg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ya(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Pf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Zi));else if(o!==4&&(o===27&&Ya(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Pf(e,n,a),e=e.sibling;e!==null;)Pf(e,n,a),e=e.sibling}function Kl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Ya(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Kl(e,n,a),e=e.sibling;e!==null;)Kl(e,n,a),e=e.sibling}function Ag(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Un(n,o,a),n[on]=e,n[Mn]=a}catch(f){Be(e,e.return,f)}}var sa=!1,fn=!1,zf=!1,Rg=typeof WeakSet=="function"?WeakSet:Set,xn=null;function mS(e,n){if(e=e.containerInfo,ih=_c,e=Bp(e),Cu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var x=0,A=-1,B=-1,tt=0,ht=0,mt=e,nt=null;e:for(;;){for(var ot;mt!==a||u!==0&&mt.nodeType!==3||(A=x+u),mt!==f||o!==0&&mt.nodeType!==3||(B=x+o),mt.nodeType===3&&(x+=mt.nodeValue.length),(ot=mt.firstChild)!==null;)nt=mt,mt=ot;for(;;){if(mt===e)break e;if(nt===a&&++tt===u&&(A=x),nt===f&&++ht===o&&(B=x),(ot=mt.nextSibling)!==null)break;mt=nt,nt=mt.parentNode}mt=ot}a=A===-1||B===-1?null:{start:A,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(ah={focusedElem:e,selectionRange:a},_c=!1,xn=n;xn!==null;)if(n=xn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,xn=e;else for(;xn!==null;){switch(n=xn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var Gt=Ts(a.type,u);e=o.getSnapshotBeforeUpdate(Gt,f),o.__reactInternalSnapshotBeforeUpdate=e}catch($t){Be(a,a.return,$t)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)oh(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":oh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,xn=e;break}xn=n.return}}function Cg(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:oa(e,a),o&4&&Ao(5,a);break;case 1:if(oa(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(x){Be(a,a.return,x)}else{var u=Ts(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(x){Be(a,a.return,x)}}o&64&&Mg(a),o&512&&Ro(a,a.return);break;case 3:if(oa(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{hm(e,n)}catch(x){Be(a,a.return,x)}}break;case 27:n===null&&o&4&&Ag(a);case 26:case 5:oa(e,a),n===null&&o&4&&bg(a),o&512&&Ro(a,a.return);break;case 12:oa(e,a);break;case 31:oa(e,a),o&4&&Ug(e,a);break;case 13:oa(e,a),o&4&&Lg(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=bS.bind(null,a),XS(e,a))));break;case 22:if(o=a.memoizedState!==null||sa,!o){n=n!==null&&n.memoizedState!==null||fn,u=sa;var f=fn;sa=o,(fn=n)&&!f?la(e,a,(a.subtreeFlags&8772)!==0):oa(e,a),sa=u,fn=f}break;case 30:break;default:oa(e,a)}}function wg(e){var n=e.alternate;n!==null&&(e.alternate=null,wg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&to(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Qe=null,Wn=!1;function ra(e,n,a){for(a=a.child;a!==null;)Dg(e,n,a),a=a.sibling}function Dg(e,n,a){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(Mt,a)}catch{}switch(a.tag){case 26:fn||Ii(a,n),ra(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:fn||Ii(a,n);var o=Qe,u=Wn;Ya(a.type)&&(Qe=a.stateNode,Wn=!1),ra(e,n,a),zo(a.stateNode),Qe=o,Wn=u;break;case 5:fn||Ii(a,n);case 6:if(o=Qe,u=Wn,Qe=null,ra(e,n,a),Qe=o,Wn=u,Qe!==null)if(Wn)try{(Qe.nodeType===9?Qe.body:Qe.nodeName==="HTML"?Qe.ownerDocument.body:Qe).removeChild(a.stateNode)}catch(f){Be(a,n,f)}else try{Qe.removeChild(a.stateNode)}catch(f){Be(a,n,f)}break;case 18:Qe!==null&&(Wn?(e=Qe,M_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),yr(e)):M_(Qe,a.stateNode));break;case 4:o=Qe,u=Wn,Qe=a.stateNode.containerInfo,Wn=!0,ra(e,n,a),Qe=o,Wn=u;break;case 0:case 11:case 14:case 15:Ba(2,a,n),fn||Ba(4,a,n),ra(e,n,a);break;case 1:fn||(Ii(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Eg(a,n,o)),ra(e,n,a);break;case 21:ra(e,n,a);break;case 22:fn=(o=fn)||a.memoizedState!==null,ra(e,n,a),fn=o;break;default:ra(e,n,a)}}function Ug(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{yr(e)}catch(a){Be(n,n.return,a)}}}function Lg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{yr(e)}catch(a){Be(n,n.return,a)}}function gS(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Rg),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Rg),n;default:throw Error(s(435,e.tag))}}function Ql(e,n){var a=gS(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=TS.bind(null,e,o);o.then(u,u)}})}function Yn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=e,x=n,A=x;t:for(;A!==null;){switch(A.tag){case 27:if(Ya(A.type)){Qe=A.stateNode,Wn=!1;break t}break;case 5:Qe=A.stateNode,Wn=!1;break t;case 3:case 4:Qe=A.stateNode.containerInfo,Wn=!0;break t}A=A.return}if(Qe===null)throw Error(s(160));Dg(f,x,u),Qe=null,Wn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Ng(n,e),n=n.sibling}var Ri=null;function Ng(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Yn(n,e),qn(e),o&4&&(Ba(3,e,e.return),Ao(3,e),Ba(5,e,e.return));break;case 1:Yn(n,e),qn(e),o&512&&(fn||a===null||Ii(a,a.return)),o&64&&sa&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ri;if(Yn(n,e),qn(e),o&512&&(fn||a===null||Ii(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[us]||f[on]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Un(f,o,a),f[on]=e,R(f),o=f;break t;case"link":var x=N_("link","href",u).get(o+(a.href||""));if(x){for(var A=0;A<x.length;A++)if(f=x[A],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(A,1);break e}}f=u.createElement(o),Un(f,o,a),u.head.appendChild(f);break;case"meta":if(x=N_("meta","content",u).get(o+(a.content||""))){for(A=0;A<x.length;A++)if(f=x[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(A,1);break e}}f=u.createElement(o),Un(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[on]=e,R(f),o=f}e.stateNode=o}else O_(u,e.type,e.stateNode);else e.stateNode=L_(u,o,e.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?O_(u,e.type,e.stateNode):L_(u,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Nf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Yn(n,e),qn(e),o&512&&(fn||a===null||Ii(a,a.return)),a!==null&&o&4&&Nf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Yn(n,e),qn(e),o&512&&(fn||a===null||Ii(a,a.return)),e.flags&32){u=e.stateNode;try{pn(u,"")}catch(Gt){Be(e,e.return,Gt)}}o&4&&e.stateNode!=null&&(u=e.memoizedProps,Nf(e,u,a!==null?a.memoizedProps:u)),o&1024&&(zf=!0);break;case 6:if(Yn(n,e),qn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(Gt){Be(e,e.return,Gt)}}break;case 3:if(dc=null,u=Ri,Ri=fc(n.containerInfo),Yn(n,e),Ri=u,qn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{yr(n.containerInfo)}catch(Gt){Be(e,e.return,Gt)}zf&&(zf=!1,Og(e));break;case 4:o=Ri,Ri=fc(e.stateNode.containerInfo),Yn(n,e),qn(e),Ri=o;break;case 12:Yn(n,e),qn(e);break;case 31:Yn(n,e),qn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Ql(e,o)));break;case 13:Yn(n,e),qn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&($l=E()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Ql(e,o)));break;case 22:u=e.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,tt=sa,ht=fn;if(sa=tt||u,fn=ht||B,Yn(n,e),fn=ht,sa=tt,qn(e),o&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||B||sa||fn||As(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(f=B.stateNode,u)x=f.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{A=B.stateNode;var mt=B.memoizedProps.style,nt=mt!=null&&mt.hasOwnProperty("display")?mt.display:null;A.style.display=nt==null||typeof nt=="boolean"?"":(""+nt).trim()}}catch(Gt){Be(B,B.return,Gt)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=u?"":B.memoizedProps}catch(Gt){Be(B,B.return,Gt)}}}else if(n.tag===18){if(a===null){B=n;try{var ot=B.stateNode;u?E_(ot,!0):E_(B.stateNode,!1)}catch(Gt){Be(B,B.return,Gt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Ql(e,a))));break;case 19:Yn(n,e),qn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Ql(e,o)));break;case 30:break;case 21:break;default:Yn(n,e),qn(e)}}function qn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(Tg(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=Of(e);Kl(e,f,u);break;case 5:var x=a.stateNode;a.flags&32&&(pn(x,""),a.flags&=-33);var A=Of(e);Kl(e,A,x);break;case 3:case 4:var B=a.stateNode.containerInfo,tt=Of(e);Pf(e,tt,B);break;default:throw Error(s(161))}}catch(ht){Be(e,e.return,ht)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Og(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Og(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function oa(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Cg(e,n.alternate,n),n=n.sibling}function As(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ba(4,n,n.return),As(n);break;case 1:Ii(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Eg(n,n.return,a),As(n);break;case 27:zo(n.stateNode);case 26:case 5:Ii(n,n.return),As(n);break;case 22:n.memoizedState===null&&As(n);break;case 30:As(n);break;default:As(n)}e=e.sibling}}function la(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=e,f=n,x=f.flags;switch(f.tag){case 0:case 11:case 15:la(u,f,a),Ao(4,f);break;case 1:if(la(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(tt){Be(o,o.return,tt)}if(o=f,u=o.updateQueue,u!==null){var A=o.stateNode;try{var B=u.shared.hiddenCallbacks;if(B!==null)for(u.shared.hiddenCallbacks=null,u=0;u<B.length;u++)fm(B[u],A)}catch(tt){Be(o,o.return,tt)}}a&&x&64&&Mg(f),Ro(f,f.return);break;case 27:Ag(f);case 26:case 5:la(u,f,a),a&&o===null&&x&4&&bg(f),Ro(f,f.return);break;case 12:la(u,f,a);break;case 31:la(u,f,a),a&&x&4&&Ug(u,f);break;case 13:la(u,f,a),a&&x&4&&Lg(u,f);break;case 22:f.memoizedState===null&&la(u,f,a),Ro(f,f.return);break;case 30:break;default:la(u,f,a)}n=n.sibling}}function Ff(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&ho(a))}function If(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ho(e))}function Ci(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Pg(e,n,a,o),n=n.sibling}function Pg(e,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ci(e,n,a,o),u&2048&&Ao(9,n);break;case 1:Ci(e,n,a,o);break;case 3:Ci(e,n,a,o),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ho(e)));break;case 12:if(u&2048){Ci(e,n,a,o),e=n.stateNode;try{var f=n.memoizedProps,x=f.id,A=f.onPostCommit;typeof A=="function"&&A(x,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(B){Be(n,n.return,B)}}else Ci(e,n,a,o);break;case 31:Ci(e,n,a,o);break;case 13:Ci(e,n,a,o);break;case 23:break;case 22:f=n.stateNode,x=n.alternate,n.memoizedState!==null?f._visibility&2?Ci(e,n,a,o):Co(e,n):f._visibility&2?Ci(e,n,a,o):(f._visibility|=2,ur(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Ff(x,n);break;case 24:Ci(e,n,a,o),u&2048&&If(n.alternate,n);break;default:Ci(e,n,a,o)}}function ur(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,x=n,A=a,B=o,tt=x.flags;switch(x.tag){case 0:case 11:case 15:ur(f,x,A,B,u),Ao(8,x);break;case 23:break;case 22:var ht=x.stateNode;x.memoizedState!==null?ht._visibility&2?ur(f,x,A,B,u):Co(f,x):(ht._visibility|=2,ur(f,x,A,B,u)),u&&tt&2048&&Ff(x.alternate,x);break;case 24:ur(f,x,A,B,u),u&&tt&2048&&If(x.alternate,x);break;default:ur(f,x,A,B,u)}n=n.sibling}}function Co(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:Co(a,o),u&2048&&Ff(o.alternate,o);break;case 24:Co(a,o),u&2048&&If(o.alternate,o);break;default:Co(a,o)}n=n.sibling}}var wo=8192;function fr(e,n,a){if(e.subtreeFlags&wo)for(e=e.child;e!==null;)zg(e,n,a),e=e.sibling}function zg(e,n,a){switch(e.tag){case 26:fr(e,n,a),e.flags&wo&&e.memoizedState!==null&&ny(a,Ri,e.memoizedState,e.memoizedProps);break;case 5:fr(e,n,a);break;case 3:case 4:var o=Ri;Ri=fc(e.stateNode.containerInfo),fr(e,n,a),Ri=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=wo,wo=16777216,fr(e,n,a),wo=o):fr(e,n,a));break;default:fr(e,n,a)}}function Fg(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Do(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];xn=o,Bg(o,e)}Fg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ig(e),e=e.sibling}function Ig(e){switch(e.tag){case 0:case 11:case 15:Do(e),e.flags&2048&&Ba(9,e,e.return);break;case 3:Do(e);break;case 12:Do(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Jl(e)):Do(e);break;default:Do(e)}}function Jl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];xn=o,Bg(o,e)}Fg(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ba(8,n,n.return),Jl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Jl(n));break;default:Jl(n)}e=e.sibling}}function Bg(e,n){for(;xn!==null;){var a=xn;switch(a.tag){case 0:case 11:case 15:Ba(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:ho(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,xn=o;else t:for(a=e;xn!==null;){o=xn;var u=o.sibling,f=o.return;if(wg(o),o===a){xn=null;break t}if(u!==null){u.return=f,xn=u;break t}xn=f}}}var _S={getCacheForType:function(e){var n=wn(ln),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return wn(ln).controller.signal}},vS=typeof WeakMap=="function"?WeakMap:Map,Le=0,We=null,_e=null,Se=0,Ie=0,ii=null,Ha=!1,hr=!1,Bf=!1,ca=0,en=0,Ga=0,Rs=0,Hf=0,ai=0,dr=0,Uo=null,jn=null,Gf=!1,$l=0,Hg=0,tc=1/0,ec=null,Va=null,mn=0,ka=null,pr=null,ua=0,Vf=0,kf=null,Gg=null,Lo=0,Xf=null;function si(){return(Le&2)!==0&&Se!==0?Se&-Se:I.T!==null?Kf():Jr()}function Vg(){if(ai===0)if((Se&536870912)===0||Me){var e=bt;bt<<=1,(bt&3932160)===0&&(bt=262144),ai=e}else ai=536870912;return e=ei.current,e!==null&&(e.flags|=32),ai}function Zn(e,n,a){(e===We&&(Ie===2||Ie===9)||e.cancelPendingCommit!==null)&&(mr(e,0),Xa(e,Se,ai,!1)),Nn(e,a),((Le&2)===0||e!==We)&&(e===We&&((Le&2)===0&&(Rs|=a),en===4&&Xa(e,Se,ai,!1)),Bi(e))}function kg(e,n,a){if((Le&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||At(e,n),u=o?yS(e,n):Yf(e,n,!0),f=o;do{if(u===0){hr&&!o&&Xa(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!xS(a)){u=Yf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var A=e;u=Uo;var B=A.current.memoizedState.isDehydrated;if(B&&(mr(A,x).flags|=256),x=Yf(A,x,!1),x!==2){if(Bf&&!B){A.errorRecoveryDisabledLanes|=f,Rs|=f,u=4;break t}f=jn,jn=u,f!==null&&(jn===null?jn=f:jn.push.apply(jn,f))}u=x}if(f=!1,u!==2)continue}}if(u===1){mr(e,0),Xa(e,n,0,!0);break}t:{switch(o=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Xa(o,n,ai,!Ha);break t;case 2:jn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=$l+300-E(),10<u)){if(Xa(o,n,ai,!Ha),_t(o,0,!0)!==0)break t;ua=n,o.timeoutHandle=S_(Xg.bind(null,o,a,jn,ec,Gf,n,ai,Rs,dr,Ha,f,"Throttled",-0,0),u);break t}Xg(o,a,jn,ec,Gf,n,ai,Rs,dr,Ha,f,null,-0,0)}}break}while(!0);Bi(e)}function Xg(e,n,a,o,u,f,x,A,B,tt,ht,mt,nt,ot){if(e.timeoutHandle=-1,mt=n.subtreeFlags,mt&8192||(mt&16785408)===16785408){mt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Zi},zg(n,f,mt);var Gt=(f&62914560)===f?$l-E():(f&4194048)===f?Hg-E():0;if(Gt=iy(mt,Gt),Gt!==null){ua=f,e.cancelPendingCommit=Gt(Jg.bind(null,e,n,f,a,o,u,x,A,B,ht,mt,null,nt,ot)),Xa(e,f,x,!tt);return}}Jg(e,n,f,a,o,u,x,A,B)}function xS(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!$n(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Xa(e,n,a,o){n&=~Hf,n&=~Rs,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var f=31-Ot(u),x=1<<f;o[f]=-1,u&=~x}a!==0&&dl(e,a,n)}function nc(){return(Le&6)===0?(No(0),!1):!0}function Wf(){if(_e!==null){if(Ie===0)var e=_e.return;else e=_e,$i=vs=null,of(e),sr=null,mo=0,e=_e;for(;e!==null;)yg(e.alternate,e),e=e.return;_e=null}}function mr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,BS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ua=0,Wf(),We=e,_e=a=Qi(e.current,null),Se=n,Ie=0,ii=null,Ha=!1,hr=At(e,n),Bf=!1,dr=ai=Hf=Rs=Ga=en=0,jn=Uo=null,Gf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var u=31-Ot(o),f=1<<u;n|=e[u],o&=~f}return ca=n,El(),a}function Wg(e,n){oe=null,I.H=Eo,n===ar||n===Ul?(n=om(),Ie=3):n===ju?(n=om(),Ie=4):Ie=n===Ef?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ii=n,_e===null&&(en=1,Wl(e,di(n,e.current)))}function Yg(){var e=ei.current;return e===null?!0:(Se&4194048)===Se?_i===null:(Se&62914560)===Se||(Se&536870912)!==0?e===_i:!1}function qg(){var e=I.H;return I.H=Eo,e===null?Eo:e}function jg(){var e=I.A;return I.A=_S,e}function ic(){en=4,Ha||(Se&4194048)!==Se&&ei.current!==null||(hr=!0),(Ga&134217727)===0&&(Rs&134217727)===0||We===null||Xa(We,Se,ai,!1)}function Yf(e,n,a){var o=Le;Le|=2;var u=qg(),f=jg();(We!==e||Se!==n)&&(ec=null,mr(e,n)),n=!1;var x=en;t:do try{if(Ie!==0&&_e!==null){var A=_e,B=ii;switch(Ie){case 8:Wf(),x=6;break t;case 3:case 2:case 9:case 6:ei.current===null&&(n=!0);var tt=Ie;if(Ie=0,ii=null,gr(e,A,B,tt),a&&hr){x=0;break t}break;default:tt=Ie,Ie=0,ii=null,gr(e,A,B,tt)}}SS(),x=en;break}catch(ht){Wg(e,ht)}while(!0);return n&&e.shellSuspendCounter++,$i=vs=null,Le=o,I.H=u,I.A=f,_e===null&&(We=null,Se=0,El()),x}function SS(){for(;_e!==null;)Zg(_e)}function yS(e,n){var a=Le;Le|=2;var o=qg(),u=jg();We!==e||Se!==n?(ec=null,tc=E()+500,mr(e,n)):hr=At(e,n);t:do try{if(Ie!==0&&_e!==null){n=_e;var f=ii;e:switch(Ie){case 1:Ie=0,ii=null,gr(e,n,f,1);break;case 2:case 9:if(sm(f)){Ie=0,ii=null,Kg(n);break}n=function(){Ie!==2&&Ie!==9||We!==e||(Ie=7),Bi(e)},f.then(n,n);break t;case 3:Ie=7;break t;case 4:Ie=5;break t;case 7:sm(f)?(Ie=0,ii=null,Kg(n)):(Ie=0,ii=null,gr(e,n,f,7));break;case 5:var x=null;switch(_e.tag){case 26:x=_e.memoizedState;case 5:case 27:var A=_e;if(x?P_(x):A.stateNode.complete){Ie=0,ii=null;var B=A.sibling;if(B!==null)_e=B;else{var tt=A.return;tt!==null?(_e=tt,ac(tt)):_e=null}break e}}Ie=0,ii=null,gr(e,n,f,5);break;case 6:Ie=0,ii=null,gr(e,n,f,6);break;case 8:Wf(),en=6;break t;default:throw Error(s(462))}}MS();break}catch(ht){Wg(e,ht)}while(!0);return $i=vs=null,I.H=o,I.A=u,Le=a,_e!==null?0:(We=null,Se=0,El(),en)}function MS(){for(;_e!==null&&!Yt();)Zg(_e)}function Zg(e){var n=xg(e.alternate,e,ca);e.memoizedProps=e.pendingProps,n===null?ac(e):_e=n}function Kg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=dg(a,n,n.pendingProps,n.type,void 0,Se);break;case 11:n=dg(a,n,n.pendingProps,n.type.render,n.ref,Se);break;case 5:of(n);default:yg(a,n),n=_e=jp(n,ca),n=xg(a,n,ca)}e.memoizedProps=e.pendingProps,n===null?ac(e):_e=n}function gr(e,n,a,o){$i=vs=null,of(n),sr=null,mo=0;var u=n.return;try{if(uS(e,u,n,a,Se)){en=1,Wl(e,di(a,e.current)),_e=null;return}}catch(f){if(u!==null)throw _e=u,f;en=1,Wl(e,di(a,e.current)),_e=null;return}n.flags&32768?(Me||o===1?e=!0:hr||(Se&536870912)!==0?e=!1:(Ha=e=!0,(o===2||o===9||o===3||o===6)&&(o=ei.current,o!==null&&o.tag===13&&(o.flags|=16384))),Qg(n,e)):ac(n)}function ac(e){var n=e;do{if((n.flags&32768)!==0){Qg(n,Ha);return}e=n.return;var a=dS(n.alternate,n,ca);if(a!==null){_e=a;return}if(n=n.sibling,n!==null){_e=n;return}_e=n=e}while(n!==null);en===0&&(en=5)}function Qg(e,n){do{var a=pS(e.alternate,e);if(a!==null){a.flags&=32767,_e=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){_e=e;return}_e=e=a}while(e!==null);en=6,_e=null}function Jg(e,n,a,o,u,f,x,A,B){e.cancelPendingCommit=null;do sc();while(mn!==0);if((Le&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=Nu,Ei(e,a,f,x,A,B),e===We&&(_e=We=null,Se=0),pr=n,ka=e,ua=a,Vf=f,kf=u,Gg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,AS(ct,function(){return i_(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=I.T,I.T=null,u=G.p,G.p=2,x=Le,Le|=4;try{mS(e,n,a)}finally{Le=x,G.p=u,I.T=o}}mn=1,$g(),t_(),e_()}}function $g(){if(mn===1){mn=0;var e=ka,n=pr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=I.T,I.T=null;var o=G.p;G.p=2;var u=Le;Le|=4;try{Ng(n,e);var f=ah,x=Bp(e.containerInfo),A=f.focusedElem,B=f.selectionRange;if(x!==A&&A&&A.ownerDocument&&Ip(A.ownerDocument.documentElement,A)){if(B!==null&&Cu(A)){var tt=B.start,ht=B.end;if(ht===void 0&&(ht=tt),"selectionStart"in A)A.selectionStart=tt,A.selectionEnd=Math.min(ht,A.value.length);else{var mt=A.ownerDocument||document,nt=mt&&mt.defaultView||window;if(nt.getSelection){var ot=nt.getSelection(),Gt=A.textContent.length,$t=Math.min(B.start,Gt),ke=B.end===void 0?$t:Math.min(B.end,Gt);!ot.extend&&$t>ke&&(x=ke,ke=$t,$t=x);var j=Fp(A,$t),k=Fp(A,ke);if(j&&k&&(ot.rangeCount!==1||ot.anchorNode!==j.node||ot.anchorOffset!==j.offset||ot.focusNode!==k.node||ot.focusOffset!==k.offset)){var $=mt.createRange();$.setStart(j.node,j.offset),ot.removeAllRanges(),$t>ke?(ot.addRange($),ot.extend(k.node,k.offset)):($.setEnd(k.node,k.offset),ot.addRange($))}}}}for(mt=[],ot=A;ot=ot.parentNode;)ot.nodeType===1&&mt.push({element:ot,left:ot.scrollLeft,top:ot.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<mt.length;A++){var pt=mt[A];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}_c=!!ih,ah=ih=null}finally{Le=u,G.p=o,I.T=a}}e.current=n,mn=2}}function t_(){if(mn===2){mn=0;var e=ka,n=pr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=I.T,I.T=null;var o=G.p;G.p=2;var u=Le;Le|=4;try{Cg(e,n.alternate,n)}finally{Le=u,G.p=o,I.T=a}}mn=3}}function e_(){if(mn===4||mn===3){mn=0,P();var e=ka,n=pr,a=ua,o=Gg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?mn=5:(mn=0,pr=ka=null,n_(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Va=null),Gs(a),n=n.stateNode,Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(Mt,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=I.T,u=G.p,G.p=2,I.T=null;try{for(var f=e.onRecoverableError,x=0;x<o.length;x++){var A=o[x];f(A.value,{componentStack:A.stack})}}finally{I.T=n,G.p=u}}(ua&3)!==0&&sc(),Bi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Xf?Lo++:(Lo=0,Xf=e):Lo=0,No(0)}}function n_(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,ho(n)))}function sc(){return $g(),t_(),e_(),i_()}function i_(){if(mn!==5)return!1;var e=ka,n=Vf;Vf=0;var a=Gs(ua),o=I.T,u=G.p;try{G.p=32>a?32:a,I.T=null,a=kf,kf=null;var f=ka,x=ua;if(mn=0,pr=ka=null,ua=0,(Le&6)!==0)throw Error(s(331));var A=Le;if(Le|=4,Ig(f.current),Pg(f,f.current,x,a),Le=A,No(0,!1),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(Mt,f)}catch{}return!0}finally{G.p=u,I.T=o,n_(e,n)}}function a_(e,n,a){n=di(a,n),n=Mf(e.stateNode,n,2),e=za(e,n,2),e!==null&&(Nn(e,2),Bi(e))}function Be(e,n,a){if(e.tag===3)a_(e,e,a);else for(;n!==null;){if(n.tag===3){a_(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Va===null||!Va.has(o))){e=di(a,e),a=sg(2),o=za(n,a,2),o!==null&&(rg(a,o,n,e),Nn(o,2),Bi(o));break}}n=n.return}}function qf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new vS;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Bf=!0,u.add(a),e=ES.bind(null,e,n,a),n.then(e,e))}function ES(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,We===e&&(Se&a)===a&&(en===4||en===3&&(Se&62914560)===Se&&300>E()-$l?(Le&2)===0&&mr(e,0):Hf|=a,dr===Se&&(dr=0)),Bi(e)}function s_(e,n){n===0&&(n=ze()),e=ms(e,n),e!==null&&(Nn(e,n),Bi(e))}function bS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),s_(e,a)}function TS(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),s_(e,a)}function AS(e,n){return Ee(e,n)}var rc=null,_r=null,jf=!1,oc=!1,Zf=!1,Wa=0;function Bi(e){e!==_r&&e.next===null&&(_r===null?rc=_r=e:_r=_r.next=e),oc=!0,jf||(jf=!0,CS())}function No(e,n){if(!Zf&&oc){Zf=!0;do for(var a=!1,o=rc;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var x=o.suspendedLanes,A=o.pingedLanes;f=(1<<31-Ot(42|e)+1)-1,f&=u&~(x&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,c_(o,f))}else f=Se,f=_t(o,o===We?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||At(o,f)||(a=!0,c_(o,f));o=o.next}while(a);Zf=!1}}function RS(){r_()}function r_(){oc=jf=!1;var e=0;Wa!==0&&IS()&&(e=Wa);for(var n=E(),a=null,o=rc;o!==null;){var u=o.next,f=o_(o,n);f===0?(o.next=null,a===null?rc=u:a.next=u,u===null&&(_r=a)):(a=o,(e!==0||(f&3)!==0)&&(oc=!0)),o=u}mn!==0&&mn!==5||No(e),Wa!==0&&(Wa=0)}function o_(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var x=31-Ot(f),A=1<<x,B=u[x];B===-1?((A&a)===0||(A&o)!==0)&&(u[x]=ie(A,n)):B<=n&&(e.expiredLanes|=A),f&=~A}if(n=We,a=Se,a=_t(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Ie===2||Ie===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Oe(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||At(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Oe(o),Gs(a)){case 2:case 8:a=vt;break;case 32:a=ct;break;case 268435456:a=Rt;break;default:a=ct}return o=l_.bind(null,e),a=Ee(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Oe(o),e.callbackPriority=2,e.callbackNode=null,2}function l_(e,n){if(mn!==0&&mn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(sc()&&e.callbackNode!==a)return null;var o=Se;return o=_t(e,e===We?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(kg(e,o,n),o_(e,E()),e.callbackNode!=null&&e.callbackNode===a?l_.bind(null,e):null)}function c_(e,n){if(sc())return null;kg(e,n,!0)}function CS(){HS(function(){(Le&6)!==0?Ee(dt,RS):r_()})}function Kf(){if(Wa===0){var e=nr;e===0&&(e=Ut,Ut<<=1,(Ut&261888)===0&&(Ut=256)),Wa=e}return Wa}function u_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ml(""+e)}function f_(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function wS(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=u_((u[Mn]||null).action),x=o.submitter;x&&(n=(n=x[Mn]||null)?u_(n.formAction):x.getAttribute("formAction"),n!==null&&(f=n,x=null));var A=new xl("action","action",null,o,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Wa!==0){var B=x?f_(u,x):new FormData(u);gf(a,{pending:!0,data:B,method:u.method,action:f},null,B)}}else typeof f=="function"&&(A.preventDefault(),B=x?f_(u,x):new FormData(u),gf(a,{pending:!0,data:B,method:u.method,action:f},f,B))},currentTarget:u}]})}}for(var Qf=0;Qf<Lu.length;Qf++){var Jf=Lu[Qf],DS=Jf.toLowerCase(),US=Jf[0].toUpperCase()+Jf.slice(1);Ai(DS,"on"+US)}Ai(Vp,"onAnimationEnd"),Ai(kp,"onAnimationIteration"),Ai(Xp,"onAnimationStart"),Ai("dblclick","onDoubleClick"),Ai("focusin","onFocus"),Ai("focusout","onBlur"),Ai(qx,"onTransitionRun"),Ai(jx,"onTransitionStart"),Ai(Zx,"onTransitionCancel"),Ai(Wp,"onTransitionEnd"),J("onMouseEnter",["mouseout","mouseover"]),J("onMouseLeave",["mouseout","mouseover"]),J("onPointerEnter",["pointerout","pointerover"]),J("onPointerLeave",["pointerout","pointerover"]),et("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),et("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),et("onBeforeInput",["compositionend","keypress","textInput","paste"]),et("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),et("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),et("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),LS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Oo));function h_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var f=void 0;if(n)for(var x=o.length-1;0<=x;x--){var A=o[x],B=A.instance,tt=A.currentTarget;if(A=A.listener,B!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=tt;try{f(u)}catch(ht){Ml(ht)}u.currentTarget=null,f=B}else for(x=0;x<o.length;x++){if(A=o[x],B=A.instance,tt=A.currentTarget,A=A.listener,B!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=tt;try{f(u)}catch(ht){Ml(ht)}u.currentTarget=null,f=B}}}}function ve(e,n){var a=n[Vs];a===void 0&&(a=n[Vs]=new Set);var o=e+"__bubble";a.has(o)||(d_(n,e,2,!1),a.add(o))}function $f(e,n,a){var o=0;n&&(o|=4),d_(a,e,o,n)}var lc="_reactListening"+Math.random().toString(36).slice(2);function th(e){if(!e[lc]){e[lc]=!0,q.forEach(function(a){a!=="selectionchange"&&(LS.has(a)||$f(a,!1,e),$f(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[lc]||(n[lc]=!0,$f("selectionchange",!1,n))}}function d_(e,n,a,o){switch(V_(n)){case 2:var u=ry;break;case 8:u=oy;break;default:u=mh}a=u.bind(null,n,a,e),u=void 0,!xu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function eh(e,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var x=o.tag;if(x===3||x===4){var A=o.stateNode.containerInfo;if(A===u)break;if(x===4)for(x=o.return;x!==null;){var B=x.tag;if((B===3||B===4)&&x.stateNode.containerInfo===u)return;x=x.return}for(;A!==null;){if(x=Aa(A),x===null)return;if(B=x.tag,B===5||B===6||B===26||B===27){o=f=x;continue t}A=A.parentNode}}o=o.return}vp(function(){var tt=f,ht=_u(a),mt=[];t:{var nt=Yp.get(e);if(nt!==void 0){var ot=xl,Gt=e;switch(e){case"keypress":if(_l(a)===0)break t;case"keydown":case"keyup":ot=Tx;break;case"focusin":Gt="focus",ot=Eu;break;case"focusout":Gt="blur",ot=Eu;break;case"beforeblur":case"afterblur":ot=Eu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ot=yp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ot=dx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ot=Cx;break;case Vp:case kp:case Xp:ot=gx;break;case Wp:ot=Dx;break;case"scroll":case"scrollend":ot=fx;break;case"wheel":ot=Lx;break;case"copy":case"cut":case"paste":ot=vx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ot=Ep;break;case"toggle":case"beforetoggle":ot=Ox}var $t=(n&4)!==0,ke=!$t&&(e==="scroll"||e==="scrollend"),j=$t?nt!==null?nt+"Capture":null:nt;$t=[];for(var k=tt,$;k!==null;){var pt=k;if($=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||$===null||j===null||(pt=eo(k,j),pt!=null&&$t.push(Po(k,pt,$))),ke)break;k=k.return}0<$t.length&&(nt=new ot(nt,Gt,null,a,ht),mt.push({event:nt,listeners:$t}))}}if((n&7)===0){t:{if(nt=e==="mouseover"||e==="pointerover",ot=e==="mouseout"||e==="pointerout",nt&&a!==gu&&(Gt=a.relatedTarget||a.fromElement)&&(Aa(Gt)||Gt[bi]))break t;if((ot||nt)&&(nt=ht.window===ht?ht:(nt=ht.ownerDocument)?nt.defaultView||nt.parentWindow:window,ot?(Gt=a.relatedTarget||a.toElement,ot=tt,Gt=Gt?Aa(Gt):null,Gt!==null&&(ke=c(Gt),$t=Gt.tag,Gt!==ke||$t!==5&&$t!==27&&$t!==6)&&(Gt=null)):(ot=null,Gt=tt),ot!==Gt)){if($t=yp,pt="onMouseLeave",j="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&($t=Ep,pt="onPointerLeave",j="onPointerEnter",k="pointer"),ke=ot==null?nt:fs(ot),$=Gt==null?nt:fs(Gt),nt=new $t(pt,k+"leave",ot,a,ht),nt.target=ke,nt.relatedTarget=$,pt=null,Aa(ht)===tt&&($t=new $t(j,k+"enter",Gt,a,ht),$t.target=$,$t.relatedTarget=ke,pt=$t),ke=pt,ot&&Gt)e:{for($t=NS,j=ot,k=Gt,$=0,pt=j;pt;pt=$t(pt))$++;pt=0;for(var Kt=k;Kt;Kt=$t(Kt))pt++;for(;0<$-pt;)j=$t(j),$--;for(;0<pt-$;)k=$t(k),pt--;for(;$--;){if(j===k||k!==null&&j===k.alternate){$t=j;break e}j=$t(j),k=$t(k)}$t=null}else $t=null;ot!==null&&p_(mt,nt,ot,$t,!1),Gt!==null&&ke!==null&&p_(mt,ke,Gt,$t,!0)}}t:{if(nt=tt?fs(tt):window,ot=nt.nodeName&&nt.nodeName.toLowerCase(),ot==="select"||ot==="input"&&nt.type==="file")var Ae=Up;else if(wp(nt))if(Lp)Ae=Xx;else{Ae=Vx;var qt=Gx}else ot=nt.nodeName,!ot||ot.toLowerCase()!=="input"||nt.type!=="checkbox"&&nt.type!=="radio"?tt&&Ti(tt.elementType)&&(Ae=Up):Ae=kx;if(Ae&&(Ae=Ae(e,tt))){Dp(mt,Ae,a,ht);break t}qt&&qt(e,nt,tt),e==="focusout"&&tt&&nt.type==="number"&&tt.memoizedProps.value!=null&&bn(nt,"number",nt.value)}switch(qt=tt?fs(tt):window,e){case"focusin":(wp(qt)||qt.contentEditable==="true")&&(js=qt,wu=tt,co=null);break;case"focusout":co=wu=js=null;break;case"mousedown":Du=!0;break;case"contextmenu":case"mouseup":case"dragend":Du=!1,Hp(mt,a,ht);break;case"selectionchange":if(Yx)break;case"keydown":case"keyup":Hp(mt,a,ht)}var ce;if(Tu)t:{switch(e){case"compositionstart":var ye="onCompositionStart";break t;case"compositionend":ye="onCompositionEnd";break t;case"compositionupdate":ye="onCompositionUpdate";break t}ye=void 0}else qs?Rp(e,a)&&(ye="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ye="onCompositionStart");ye&&(bp&&a.locale!=="ko"&&(qs||ye!=="onCompositionStart"?ye==="onCompositionEnd"&&qs&&(ce=xp()):(wa=ht,Su="value"in wa?wa.value:wa.textContent,qs=!0)),qt=cc(tt,ye),0<qt.length&&(ye=new Mp(ye,e,null,a,ht),mt.push({event:ye,listeners:qt}),ce?ye.data=ce:(ce=Cp(a),ce!==null&&(ye.data=ce)))),(ce=zx?Fx(e,a):Ix(e,a))&&(ye=cc(tt,"onBeforeInput"),0<ye.length&&(qt=new Mp("onBeforeInput","beforeinput",null,a,ht),mt.push({event:qt,listeners:ye}),qt.data=ce)),wS(mt,e,tt,a,ht)}h_(mt,n)})}function Po(e,n,a){return{instance:e,listener:n,currentTarget:a}}function cc(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=eo(e,a),u!=null&&o.unshift(Po(e,u,f)),u=eo(e,n),u!=null&&o.push(Po(e,u,f))),e.tag===3)return o;e=e.return}return[]}function NS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function p_(e,n,a,o,u){for(var f=n._reactName,x=[];a!==null&&a!==o;){var A=a,B=A.alternate,tt=A.stateNode;if(A=A.tag,B!==null&&B===o)break;A!==5&&A!==26&&A!==27||tt===null||(B=tt,u?(tt=eo(a,f),tt!=null&&x.unshift(Po(a,tt,B))):u||(tt=eo(a,f),tt!=null&&x.push(Po(a,tt,B)))),a=a.return}x.length!==0&&e.push({event:n,listeners:x})}var OS=/\r\n?/g,PS=/\u0000|\uFFFD/g;function m_(e){return(typeof e=="string"?e:""+e).replace(OS,`
`).replace(PS,"")}function g_(e,n){return n=m_(n),m_(e)===n}function Ve(e,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||pn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&pn(e,""+o);break;case"className":Qt(e,"class",o);break;case"tabIndex":Qt(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Qt(e,a,o);break;case"style":Xs(e,o,f);break;case"data":if(n!=="object"){Qt(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ml(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ve(e,n,"name",u.name,u,null),Ve(e,n,"formEncType",u.formEncType,u,null),Ve(e,n,"formMethod",u.formMethod,u,null),Ve(e,n,"formTarget",u.formTarget,u,null)):(Ve(e,n,"encType",u.encType,u,null),Ve(e,n,"method",u.method,u,null),Ve(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ml(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Zi);break;case"onScroll":o!=null&&ve("scroll",e);break;case"onScrollEnd":o!=null&&ve("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=ml(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":ve("beforetoggle",e),ve("toggle",e),Xt(e,"popover",o);break;case"xlinkActuate":Wt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Wt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Wt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Wt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Wt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Wt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Xt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=cx.get(a)||a,Xt(e,a,o))}}function nh(e,n,a,o,u,f){switch(a){case"style":Xs(e,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?pn(e,o):(typeof o=="number"||typeof o=="bigint")&&pn(e,""+o);break;case"onScroll":o!=null&&ve("scroll",e);break;case"onScrollEnd":o!=null&&ve("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Zi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!rt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[Mn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,u);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Xt(e,a,o)}}}function Un(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ve("error",e),ve("load",e);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var x=a[f];if(x!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ve(e,n,f,x,a,null)}}u&&Ve(e,n,"srcSet",a.srcSet,a,null),o&&Ve(e,n,"src",a.src,a,null);return;case"input":ve("invalid",e);var A=f=x=u=null,B=null,tt=null;for(o in a)if(a.hasOwnProperty(o)){var ht=a[o];if(ht!=null)switch(o){case"name":u=ht;break;case"type":x=ht;break;case"checked":B=ht;break;case"defaultChecked":tt=ht;break;case"value":f=ht;break;case"defaultValue":A=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(s(137,n));break;default:Ve(e,n,o,ht,a,null)}}ji(e,f,A,B,tt,x,u,!1);return;case"select":ve("invalid",e),o=x=f=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":f=A;break;case"defaultValue":x=A;break;case"multiple":o=A;default:Ve(e,n,u,A,a,null)}n=f,a=x,e.multiple=!!o,n!=null?fi(e,!!o,n,!1):a!=null&&fi(e,!!o,a,!0);return;case"textarea":ve("invalid",e),f=u=o=null;for(x in a)if(a.hasOwnProperty(x)&&(A=a[x],A!=null))switch(x){case"value":o=A;break;case"defaultValue":u=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:Ve(e,n,x,A,a,null)}Tn(e,o,u,f);return;case"option":for(B in a)a.hasOwnProperty(B)&&(o=a[B],o!=null)&&(B==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":Ve(e,n,B,o,a,null));return;case"dialog":ve("beforetoggle",e),ve("toggle",e),ve("cancel",e),ve("close",e);break;case"iframe":case"object":ve("load",e);break;case"video":case"audio":for(o=0;o<Oo.length;o++)ve(Oo[o],e);break;case"image":ve("error",e),ve("load",e);break;case"details":ve("toggle",e);break;case"embed":case"source":case"link":ve("error",e),ve("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(tt in a)if(a.hasOwnProperty(tt)&&(o=a[tt],o!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ve(e,n,tt,o,a,null)}return;default:if(Ti(n)){for(ht in a)a.hasOwnProperty(ht)&&(o=a[ht],o!==void 0&&nh(e,n,ht,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&Ve(e,n,A,o,a,null))}function zS(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,x=null,A=null,B=null,tt=null,ht=null;for(ot in a){var mt=a[ot];if(a.hasOwnProperty(ot)&&mt!=null)switch(ot){case"checked":break;case"value":break;case"defaultValue":B=mt;default:o.hasOwnProperty(ot)||Ve(e,n,ot,null,o,mt)}}for(var nt in o){var ot=o[nt];if(mt=a[nt],o.hasOwnProperty(nt)&&(ot!=null||mt!=null))switch(nt){case"type":f=ot;break;case"name":u=ot;break;case"checked":tt=ot;break;case"defaultChecked":ht=ot;break;case"value":x=ot;break;case"defaultValue":A=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(s(137,n));break;default:ot!==mt&&Ve(e,n,nt,ot,o,mt)}}En(e,x,A,B,tt,ht,f,u);return;case"select":ot=x=A=nt=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":ot=B;default:o.hasOwnProperty(f)||Ve(e,n,f,null,o,B)}for(u in o)if(f=o[u],B=a[u],o.hasOwnProperty(u)&&(f!=null||B!=null))switch(u){case"value":nt=f;break;case"defaultValue":A=f;break;case"multiple":x=f;default:f!==B&&Ve(e,n,u,f,o,B)}n=A,a=x,o=ot,nt!=null?fi(e,!!a,nt,!1):!!o!=!!a&&(n!=null?fi(e,!!a,n,!0):fi(e,!!a,a?[]:"",!1));return;case"textarea":ot=nt=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Ve(e,n,A,null,o,u)}for(x in o)if(u=o[x],f=a[x],o.hasOwnProperty(x)&&(u!=null||f!=null))switch(x){case"value":nt=u;break;case"defaultValue":ot=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Ve(e,n,x,u,o,f)}Fe(e,nt,ot);return;case"option":for(var Gt in a)nt=a[Gt],a.hasOwnProperty(Gt)&&nt!=null&&!o.hasOwnProperty(Gt)&&(Gt==="selected"?e.selected=!1:Ve(e,n,Gt,null,o,nt));for(B in o)nt=o[B],ot=a[B],o.hasOwnProperty(B)&&nt!==ot&&(nt!=null||ot!=null)&&(B==="selected"?e.selected=nt&&typeof nt!="function"&&typeof nt!="symbol":Ve(e,n,B,nt,o,ot));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $t in a)nt=a[$t],a.hasOwnProperty($t)&&nt!=null&&!o.hasOwnProperty($t)&&Ve(e,n,$t,null,o,nt);for(tt in o)if(nt=o[tt],ot=a[tt],o.hasOwnProperty(tt)&&nt!==ot&&(nt!=null||ot!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(s(137,n));break;default:Ve(e,n,tt,nt,o,ot)}return;default:if(Ti(n)){for(var ke in a)nt=a[ke],a.hasOwnProperty(ke)&&nt!==void 0&&!o.hasOwnProperty(ke)&&nh(e,n,ke,void 0,o,nt);for(ht in o)nt=o[ht],ot=a[ht],!o.hasOwnProperty(ht)||nt===ot||nt===void 0&&ot===void 0||nh(e,n,ht,nt,o,ot);return}}for(var j in a)nt=a[j],a.hasOwnProperty(j)&&nt!=null&&!o.hasOwnProperty(j)&&Ve(e,n,j,null,o,nt);for(mt in o)nt=o[mt],ot=a[mt],!o.hasOwnProperty(mt)||nt===ot||nt==null&&ot==null||Ve(e,n,mt,nt,o,ot)}function __(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function FS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,x=u.initiatorType,A=u.duration;if(f&&A&&__(x)){for(x=0,A=u.responseEnd,o+=1;o<a.length;o++){var B=a[o],tt=B.startTime;if(tt>A)break;var ht=B.transferSize,mt=B.initiatorType;ht&&__(mt)&&(B=B.responseEnd,x+=ht*(B<A?1:(A-tt)/(B-tt)))}if(--o,n+=8*(f+x)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var ih=null,ah=null;function uc(e){return e.nodeType===9?e:e.ownerDocument}function v_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function x_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function sh(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var rh=null;function IS(){var e=window.event;return e&&e.type==="popstate"?e===rh?!1:(rh=e,!0):(rh=null,!1)}var S_=typeof setTimeout=="function"?setTimeout:void 0,BS=typeof clearTimeout=="function"?clearTimeout:void 0,y_=typeof Promise=="function"?Promise:void 0,HS=typeof queueMicrotask=="function"?queueMicrotask:typeof y_<"u"?function(e){return y_.resolve(null).then(e).catch(GS)}:S_;function GS(e){setTimeout(function(){throw e})}function Ya(e){return e==="head"}function M_(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),yr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")zo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,zo(a);for(var f=a.firstChild;f;){var x=f.nextSibling,A=f.nodeName;f[us]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=x}}else a==="body"&&zo(e.ownerDocument.body);a=u}while(a);yr(n)}function E_(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function oh(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":oh(a),to(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function VS(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[us])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=vi(e.nextSibling),e===null)break}return null}function kS(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=vi(e.nextSibling),e===null))return null;return e}function b_(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=vi(e.nextSibling),e===null))return null;return e}function lh(e){return e.data==="$?"||e.data==="$~"}function ch(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function XS(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function vi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var uh=null;function T_(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return vi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function A_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function R_(e,n,a){switch(n=uc(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function zo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);to(e)}var xi=new Map,C_=new Set;function fc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var fa=G.d;G.d={f:WS,r:YS,D:qS,C:jS,L:ZS,m:KS,X:JS,S:QS,M:$S};function WS(){var e=fa.f(),n=nc();return e||n}function YS(e){var n=Ra(e);n!==null&&n.tag===5&&n.type==="form"?Wm(n):fa.r(e)}var vr=typeof document>"u"?null:document;function w_(e,n,a){var o=vr;if(o&&typeof n=="string"&&n){var u=ae(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),C_.has(u)||(C_.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Un(n,"link",e),R(n),o.head.appendChild(n)))}}function qS(e){fa.D(e),w_("dns-prefetch",e,null)}function jS(e,n){fa.C(e,n),w_("preconnect",e,n)}function ZS(e,n,a){fa.L(e,n,a);var o=vr;if(o&&e&&n){var u='link[rel="preload"][as="'+ae(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+ae(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+ae(a.imageSizes)+'"]')):u+='[href="'+ae(e)+'"]';var f=u;switch(n){case"style":f=xr(e);break;case"script":f=Sr(e)}xi.has(f)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),xi.set(f,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(Fo(f))||n==="script"&&o.querySelector(Io(f))||(n=o.createElement("link"),Un(n,"link",e),R(n),o.head.appendChild(n)))}}function KS(e,n){fa.m(e,n);var a=vr;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+ae(o)+'"][href="'+ae(e)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Sr(e)}if(!xi.has(f)&&(e=g({rel:"modulepreload",href:e},n),xi.set(f,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Io(f)))return}o=a.createElement("link"),Un(o,"link",e),R(o),a.head.appendChild(o)}}}function QS(e,n,a){fa.S(e,n,a);var o=vr;if(o&&e){var u=Ca(o).hoistableStyles,f=xr(e);n=n||"default";var x=u.get(f);if(!x){var A={loading:0,preload:null};if(x=o.querySelector(Fo(f)))A.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=xi.get(f))&&fh(e,a);var B=x=o.createElement("link");R(B),Un(B,"link",e),B._p=new Promise(function(tt,ht){B.onload=tt,B.onerror=ht}),B.addEventListener("load",function(){A.loading|=1}),B.addEventListener("error",function(){A.loading|=2}),A.loading|=4,hc(x,n,o)}x={type:"stylesheet",instance:x,count:1,state:A},u.set(f,x)}}}function JS(e,n){fa.X(e,n);var a=vr;if(a&&e){var o=Ca(a).hoistableScripts,u=Sr(e),f=o.get(u);f||(f=a.querySelector(Io(u)),f||(e=g({src:e,async:!0},n),(n=xi.get(u))&&hh(e,n),f=a.createElement("script"),R(f),Un(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function $S(e,n){fa.M(e,n);var a=vr;if(a&&e){var o=Ca(a).hoistableScripts,u=Sr(e),f=o.get(u);f||(f=a.querySelector(Io(u)),f||(e=g({src:e,async:!0,type:"module"},n),(n=xi.get(u))&&hh(e,n),f=a.createElement("script"),R(f),Un(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function D_(e,n,a,o){var u=(u=it.current)?fc(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=xr(a.href),a=Ca(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=xr(a.href);var f=Ca(u).hoistableStyles,x=f.get(e);if(x||(u=u.ownerDocument||u,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,x),(f=u.querySelector(Fo(e)))&&!f._p&&(x.instance=f,x.state.loading=5),xi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},xi.set(e,a),f||ty(u,e,a,x.state))),n&&o===null)throw Error(s(528,""));return x}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Sr(a),a=Ca(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function xr(e){return'href="'+ae(e)+'"'}function Fo(e){return'link[rel="stylesheet"]['+e+"]"}function U_(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function ty(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Un(n,"link",a),R(n),e.head.appendChild(n))}function Sr(e){return'[src="'+ae(e)+'"]'}function Io(e){return"script[async]"+e}function L_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+ae(a.href)+'"]');if(o)return n.instance=o,R(o),o;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),R(o),Un(o,"style",u),hc(o,a.precedence,e),n.instance=o;case"stylesheet":u=xr(a.href);var f=e.querySelector(Fo(u));if(f)return n.state.loading|=4,n.instance=f,R(f),f;o=U_(a),(u=xi.get(u))&&fh(o,u),f=(e.ownerDocument||e).createElement("link"),R(f);var x=f;return x._p=new Promise(function(A,B){x.onload=A,x.onerror=B}),Un(f,"link",o),n.state.loading|=4,hc(f,a.precedence,e),n.instance=f;case"script":return f=Sr(a.src),(u=e.querySelector(Io(f)))?(n.instance=u,R(u),u):(o=a,(u=xi.get(f))&&(o=g({},a),hh(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),R(u),Un(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,hc(o,a.precedence,e));return n.instance}function hc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,x=0;x<o.length;x++){var A=o[x];if(A.dataset.precedence===n)f=A;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function fh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function hh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var dc=null;function N_(e,n,a){if(dc===null){var o=new Map,u=dc=new Map;u.set(a,o)}else u=dc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[us]||f[on]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var x=f.getAttribute(n)||"";x=e+x;var A=o.get(x);A?A.push(f):o.set(x,[f])}}return o}function O_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function ey(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function P_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function ny(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=xr(o.href),f=n.querySelector(Fo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=pc.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,R(f);return}f=n.ownerDocument||n,o=U_(o),(u=xi.get(u))&&fh(o,u),f=f.createElement("link"),R(f);var x=f;x._p=new Promise(function(A,B){x.onload=A,x.onerror=B}),Un(f,"link",o),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=pc.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var dh=0;function iy(e,n){return e.stylesheets&&e.count===0&&gc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&gc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&dh===0&&(dh=62500*FS());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&gc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>dh?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function pc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)gc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var mc=null;function gc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,mc=new Map,n.forEach(ay,e),mc=null,pc.call(e))}function ay(e,n){if(!(n.state.loading&4)){var a=mc.get(e);if(a)var o=a.get(null);else{a=new Map,mc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var x=u[f];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),o=x)}o&&a.set(null,o)}u=n.instance,x=u.getAttribute("data-precedence"),f=a.get(x)||o,f===o&&a.set(null,u),a.set(x,u),this.count++,o=pc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Bo={$$typeof:w,Provider:null,Consumer:null,_currentValue:st,_currentValue2:st,_threadCount:0};function sy(e,n,a,o,u,f,x,A,B){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=be(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=be(0),this.hiddenUpdates=be(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function z_(e,n,a,o,u,f,x,A,B,tt,ht,mt){return e=new sy(e,n,a,x,B,tt,ht,mt,A),n=1,f===!0&&(n|=24),f=ti(3,null,null,n),e.current=f,f.stateNode=e,n=Wu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},Zu(f),e}function F_(e){return e?(e=Qs,e):Qs}function I_(e,n,a,o,u,f){u=F_(u),o.context===null?o.context=u:o.pendingContext=u,o=Pa(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=za(e,o,n),a!==null&&(Zn(a,e,n),_o(a,e,n))}function B_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function ph(e,n){B_(e,n),(e=e.alternate)&&B_(e,n)}function H_(e){if(e.tag===13||e.tag===31){var n=ms(e,67108864);n!==null&&Zn(n,e,67108864),ph(e,67108864)}}function G_(e){if(e.tag===13||e.tag===31){var n=si();n=Qr(n);var a=ms(e,n);a!==null&&Zn(a,e,n),ph(e,n)}}var _c=!0;function ry(e,n,a,o){var u=I.T;I.T=null;var f=G.p;try{G.p=2,mh(e,n,a,o)}finally{G.p=f,I.T=u}}function oy(e,n,a,o){var u=I.T;I.T=null;var f=G.p;try{G.p=8,mh(e,n,a,o)}finally{G.p=f,I.T=u}}function mh(e,n,a,o){if(_c){var u=gh(o);if(u===null)eh(e,n,o,vc,a),k_(e,o);else if(cy(u,e,n,a,o))o.stopPropagation();else if(k_(e,o),n&4&&-1<ly.indexOf(e)){for(;u!==null;){var f=Ra(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var x=St(f.pendingLanes);if(x!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;x;){var B=1<<31-Ot(x);A.entanglements[1]|=B,x&=~B}Bi(f),(Le&6)===0&&(tc=E()+500,No(0))}}break;case 31:case 13:A=ms(f,2),A!==null&&Zn(A,f,2),nc(),ph(f,2)}if(f=gh(o),f===null&&eh(e,n,o,vc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else eh(e,n,o,null,a)}}function gh(e){return e=_u(e),_h(e)}var vc=null;function _h(e){if(vc=null,e=Aa(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return vc=e,null}function V_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Y()){case dt:return 2;case vt:return 8;case ct:case jt:return 32;case Rt:return 268435456;default:return 32}default:return 32}}var vh=!1,qa=null,ja=null,Za=null,Ho=new Map,Go=new Map,Ka=[],ly="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function k_(e,n){switch(e){case"focusin":case"focusout":qa=null;break;case"dragenter":case"dragleave":ja=null;break;case"mouseover":case"mouseout":Za=null;break;case"pointerover":case"pointerout":Ho.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Go.delete(n.pointerId)}}function Vo(e,n,a,o,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Ra(n),n!==null&&H_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function cy(e,n,a,o,u){switch(n){case"focusin":return qa=Vo(qa,e,n,a,o,u),!0;case"dragenter":return ja=Vo(ja,e,n,a,o,u),!0;case"mouseover":return Za=Vo(Za,e,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Ho.set(f,Vo(Ho.get(f)||null,e,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Go.set(f,Vo(Go.get(f)||null,e,n,a,o,u)),!0}return!1}function X_(e){var n=Aa(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Pi(e.priority,function(){G_(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Pi(e.priority,function(){G_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function xc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=gh(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);gu=o,a.target.dispatchEvent(o),gu=null}else return n=Ra(a),n!==null&&H_(n),e.blockedOn=a,!1;n.shift()}return!0}function W_(e,n,a){xc(e)&&a.delete(n)}function uy(){vh=!1,qa!==null&&xc(qa)&&(qa=null),ja!==null&&xc(ja)&&(ja=null),Za!==null&&xc(Za)&&(Za=null),Ho.forEach(W_),Go.forEach(W_)}function Sc(e,n){e.blockedOn===n&&(e.blockedOn=null,vh||(vh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,uy)))}var yc=null;function Y_(e){yc!==e&&(yc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){yc===e&&(yc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(_h(o||a)===null)continue;break}var f=Ra(a);f!==null&&(e.splice(n,3),n-=3,gf(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function yr(e){function n(B){return Sc(B,e)}qa!==null&&Sc(qa,e),ja!==null&&Sc(ja,e),Za!==null&&Sc(Za,e),Ho.forEach(n),Go.forEach(n);for(var a=0;a<Ka.length;a++){var o=Ka[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Ka.length&&(a=Ka[0],a.blockedOn===null);)X_(a),a.blockedOn===null&&Ka.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],x=u[Mn]||null;if(typeof f=="function")x||Y_(a);else if(x){var A=null;if(f&&f.hasAttribute("formAction")){if(u=f,x=f[Mn]||null)A=x.formAction;else if(_h(u)!==null)continue}else A=x.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),Y_(a)}}}function q_(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(x){return u=x})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function xh(e){this._internalRoot=e}Mc.prototype.render=xh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=si();I_(a,o,e,n,null,null)},Mc.prototype.unmount=xh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;I_(e.current,2,null,e,null,null),nc(),n[bi]=null}};function Mc(e){this._internalRoot=e}Mc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Jr();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ka.length&&n!==0&&n<Ka[a].priority;a++);Ka.splice(a,0,e),a===0&&X_(e)}};var j_=t.version;if(j_!=="19.2.4")throw Error(s(527,j_,"19.2.4"));G.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var fy={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ec=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ec.isDisabled&&Ec.supportsFiber)try{Mt=Ec.inject(fy),Et=Ec}catch{}}return Xo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=eg,f=ng,x=ig;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=z_(e,1,!1,null,null,a,o,null,u,f,x,q_),e[bi]=n.current,th(e),new xh(n)},Xo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",f=eg,x=ng,A=ig,B=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=z_(e,1,!0,n,a??null,o,u,B,f,x,A,q_),n.context=F_(null),a=n.current,o=si(),o=Qr(o),u=Pa(o),u.callback=null,za(a,u,o),a=o,n.current.lanes=a,Nn(n,a),Bi(n),e[bi]=n.current,th(e),new Mc(n)},Xo.version="19.2.4",Xo}var a0;function My(){if(a0)return Mh.exports;a0=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Mh.exports=yy(),Mh.exports}var Ey=My();const np="182",Mi={ROTATE:0,DOLLY:1,PAN:2},Br={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},by=0,s0=1,Ty=2,tu=1,Ay=2,Jo=3,ls=0,Jn=1,va=2,Sa=0,Hr=1,r0=2,o0=3,l0=4,Ry=5,Os=100,Cy=101,wy=102,Dy=103,Uy=104,Ly=200,Ny=201,Oy=202,Py=203,rd=204,od=205,zy=206,Fy=207,Iy=208,By=209,Hy=210,Gy=211,Vy=212,ky=213,Xy=214,ld=0,cd=1,ud=2,Vr=3,fd=4,hd=5,dd=6,pd=7,vv=0,Wy=1,Yy=2,Xi=0,xv=1,Sv=2,yv=3,Mv=4,Ev=5,bv=6,Tv=7,Av=300,Is=301,kr=302,md=303,gd=304,fu=306,_d=1e3,xa=1001,vd=1002,Ln=1003,qy=1004,bc=1005,yn=1006,Ah=1007,zs=1008,yi=1009,Rv=1010,Cv=1011,il=1012,ip=1013,qi=1014,Vi=1015,Ma=1016,ap=1017,sp=1018,al=1020,wv=35902,Dv=35899,Uv=1021,Lv=1022,Ni=1023,Ea=1026,Fs=1027,Nv=1028,rp=1029,Xr=1030,op=1031,lp=1033,eu=33776,nu=33777,iu=33778,au=33779,xd=35840,Sd=35841,yd=35842,Md=35843,Ed=36196,bd=37492,Td=37496,Ad=37488,Rd=37489,Cd=37490,wd=37491,Dd=37808,Ud=37809,Ld=37810,Nd=37811,Od=37812,Pd=37813,zd=37814,Fd=37815,Id=37816,Bd=37817,Hd=37818,Gd=37819,Vd=37820,kd=37821,Xd=36492,Wd=36494,Yd=36495,qd=36283,jd=36284,Zd=36285,Kd=36286,jy=3200,Zy=0,Ky=1,rs="",Vn="srgb",Wr="srgb-linear",ou="linear",He="srgb",Mr=7680,c0=519,Qy=512,Jy=513,$y=514,cp=515,tM=516,eM=517,up=518,nM=519,u0=35044,f0="300 es",ki=2e3,lu=2001;function Ov(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function sl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function iM(){const r=sl("canvas");return r.style.display="block",r}const h0={};function d0(...r){const t="THREE."+r.shift();console.log(t,...r)}function ee(...r){const t="THREE."+r.shift();console.warn(t,...r)}function Ce(...r){const t="THREE."+r.shift();console.error(t,...r)}function rl(...r){const t=r.join(" ");t in h0||(h0[t]=!0,ee(...r))}function aM(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}class Bs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let p0=1234567;const tl=Math.PI/180,ol=180/Math.PI;function qr(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Pn[r&255]+Pn[r>>8&255]+Pn[r>>16&255]+Pn[r>>24&255]+"-"+Pn[t&255]+Pn[t>>8&255]+"-"+Pn[t>>16&15|64]+Pn[t>>24&255]+"-"+Pn[i&63|128]+Pn[i>>8&255]+"-"+Pn[i>>16&255]+Pn[i>>24&255]+Pn[s&255]+Pn[s>>8&255]+Pn[s>>16&255]+Pn[s>>24&255]).toLowerCase()}function de(r,t,i){return Math.max(t,Math.min(i,r))}function fp(r,t){return(r%t+t)%t}function sM(r,t,i,s,l){return s+(r-t)*(l-s)/(i-t)}function rM(r,t,i){return r!==t?(i-r)/(t-r):0}function el(r,t,i){return(1-i)*r+i*t}function oM(r,t,i,s){return el(r,t,1-Math.exp(-i*s))}function lM(r,t=1){return t-Math.abs(fp(r,t*2)-t)}function cM(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*(3-2*r))}function uM(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*r*(r*(r*6-15)+10))}function fM(r,t){return r+Math.floor(Math.random()*(t-r+1))}function hM(r,t){return r+Math.random()*(t-r)}function dM(r){return r*(.5-Math.random())}function pM(r){r!==void 0&&(p0=r);let t=p0+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function mM(r){return r*tl}function gM(r){return r*ol}function _M(r){return(r&r-1)===0&&r!==0}function vM(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function xM(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function SM(r,t,i,s,l){const c=Math.cos,h=Math.sin,d=c(i/2),m=h(i/2),p=c((t+s)/2),v=h((t+s)/2),g=c((t-s)/2),y=h((t-s)/2),M=c((s-t)/2),b=h((s-t)/2);switch(l){case"XYX":r.set(d*v,m*g,m*y,d*p);break;case"YZY":r.set(m*y,d*v,m*g,d*p);break;case"ZXZ":r.set(m*g,m*y,d*v,d*p);break;case"XZX":r.set(d*v,m*b,m*M,d*p);break;case"YXY":r.set(m*M,d*v,m*b,d*p);break;case"ZYZ":r.set(m*b,m*M,d*v,d*p);break;default:ee("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Ir(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Hn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Qd={DEG2RAD:tl,RAD2DEG:ol,generateUUID:qr,clamp:de,euclideanModulo:fp,mapLinear:sM,inverseLerp:rM,lerp:el,damp:oM,pingpong:lM,smoothstep:cM,smootherstep:uM,randInt:fM,randFloat:hM,randFloatSpread:dM,seededRandom:pM,degToRad:mM,radToDeg:gM,isPowerOfTwo:_M,ceilPowerOfTwo:vM,floorPowerOfTwo:xM,setQuaternionFromProperEuler:SM,normalize:Hn,denormalize:Ir};class ne{constructor(t=0,i=0){ne.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=de(this.x,t.x,i.x),this.y=de(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=de(this.x,t,i),this.y=de(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(de(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(de(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*s-h*l+t.x,this.y=c*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class cs{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,h,d){let m=s[l+0],p=s[l+1],v=s[l+2],g=s[l+3],y=c[h+0],M=c[h+1],b=c[h+2],C=c[h+3];if(d<=0){t[i+0]=m,t[i+1]=p,t[i+2]=v,t[i+3]=g;return}if(d>=1){t[i+0]=y,t[i+1]=M,t[i+2]=b,t[i+3]=C;return}if(g!==C||m!==y||p!==M||v!==b){let S=m*y+p*M+v*b+g*C;S<0&&(y=-y,M=-M,b=-b,C=-C,S=-S);let _=1-d;if(S<.9995){const D=Math.acos(S),w=Math.sin(D);_=Math.sin(_*D)/w,d=Math.sin(d*D)/w,m=m*_+y*d,p=p*_+M*d,v=v*_+b*d,g=g*_+C*d}else{m=m*_+y*d,p=p*_+M*d,v=v*_+b*d,g=g*_+C*d;const D=1/Math.sqrt(m*m+p*p+v*v+g*g);m*=D,p*=D,v*=D,g*=D}}t[i]=m,t[i+1]=p,t[i+2]=v,t[i+3]=g}static multiplyQuaternionsFlat(t,i,s,l,c,h){const d=s[l],m=s[l+1],p=s[l+2],v=s[l+3],g=c[h],y=c[h+1],M=c[h+2],b=c[h+3];return t[i]=d*b+v*g+m*M-p*y,t[i+1]=m*b+v*y+p*g-d*M,t[i+2]=p*b+v*M+d*y-m*g,t[i+3]=v*b-d*g-m*y-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(s/2),v=d(l/2),g=d(c/2),y=m(s/2),M=m(l/2),b=m(c/2);switch(h){case"XYZ":this._x=y*v*g+p*M*b,this._y=p*M*g-y*v*b,this._z=p*v*b+y*M*g,this._w=p*v*g-y*M*b;break;case"YXZ":this._x=y*v*g+p*M*b,this._y=p*M*g-y*v*b,this._z=p*v*b-y*M*g,this._w=p*v*g+y*M*b;break;case"ZXY":this._x=y*v*g-p*M*b,this._y=p*M*g+y*v*b,this._z=p*v*b+y*M*g,this._w=p*v*g-y*M*b;break;case"ZYX":this._x=y*v*g-p*M*b,this._y=p*M*g+y*v*b,this._z=p*v*b-y*M*g,this._w=p*v*g+y*M*b;break;case"YZX":this._x=y*v*g+p*M*b,this._y=p*M*g+y*v*b,this._z=p*v*b-y*M*g,this._w=p*v*g-y*M*b;break;case"XZY":this._x=y*v*g-p*M*b,this._y=p*M*g-y*v*b,this._z=p*v*b+y*M*g,this._w=p*v*g+y*M*b;break;default:ee("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],v=i[6],g=i[10],y=s+d+g;if(y>0){const M=.5/Math.sqrt(y+1);this._w=.25/M,this._x=(v-m)*M,this._y=(c-p)*M,this._z=(h-l)*M}else if(s>d&&s>g){const M=2*Math.sqrt(1+s-d-g);this._w=(v-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(c+p)/M}else if(d>g){const M=2*Math.sqrt(1+d-s-g);this._w=(c-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+v)/M}else{const M=2*Math.sqrt(1+g-s-d);this._w=(h-l)/M,this._x=(c+p)/M,this._y=(m+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(de(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,h=t._w,d=i._x,m=i._y,p=i._z,v=i._w;return this._x=s*v+h*d+l*p-c*m,this._y=l*v+h*m+c*d-s*p,this._z=c*v+h*p+s*m-l*d,this._w=h*v-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let s=t._x,l=t._y,c=t._z,h=t._w,d=this.dot(t);d<0&&(s=-s,l=-l,c=-c,h=-h,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),v=Math.sin(p);m=Math.sin(m*p)/v,i=Math.sin(i*p)/v,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+h*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(t=0,i=0,s=0){K.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(m0.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(m0.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*s),v=2*(d*i-c*l),g=2*(c*s-h*i);return this.x=i+m*p+h*g-d*v,this.y=s+m*v+d*p-c*g,this.z=l+m*g+c*v-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=de(this.x,t.x,i.x),this.y=de(this.y,t.y,i.y),this.z=de(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=de(this.x,t,i),this.y=de(this.y,t,i),this.z=de(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(de(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-s*m,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Rh.copy(this).projectOnVector(t),this.sub(Rh)}reflect(t){return this.sub(Rh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(de(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Rh=new K,m0=new cs;class ue{constructor(t,i,s,l,c,h,d,m,p){ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p)}set(t,i,s,l,c,h,d,m,p){const v=this.elements;return v[0]=t,v[1]=l,v[2]=d,v[3]=i,v[4]=c,v[5]=m,v[6]=s,v[7]=h,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],v=s[4],g=s[7],y=s[2],M=s[5],b=s[8],C=l[0],S=l[3],_=l[6],D=l[1],w=l[4],U=l[7],O=l[2],z=l[5],N=l[8];return c[0]=h*C+d*D+m*O,c[3]=h*S+d*w+m*z,c[6]=h*_+d*U+m*N,c[1]=p*C+v*D+g*O,c[4]=p*S+v*w+g*z,c[7]=p*_+v*U+g*N,c[2]=y*C+M*D+b*O,c[5]=y*S+M*w+b*z,c[8]=y*_+M*U+b*N,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],v=t[8];return i*h*v-i*d*p-s*c*v+s*d*m+l*c*p-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],v=t[8],g=v*h-d*p,y=d*m-v*c,M=p*c-h*m,b=i*g+s*y+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/b;return t[0]=g*C,t[1]=(l*p-v*s)*C,t[2]=(d*s-l*h)*C,t[3]=y*C,t[4]=(v*i-l*m)*C,t[5]=(l*c-d*i)*C,t[6]=M*C,t[7]=(s*m-p*i)*C,t[8]=(h*i-s*c)*C,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(Ch.makeScale(t,i)),this}rotate(t){return this.premultiply(Ch.makeRotation(-t)),this}translate(t,i){return this.premultiply(Ch.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ch=new ue,g0=new ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_0=new ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function yM(){const r={enabled:!0,workingColorSpace:Wr,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===He&&(l.r=ya(l.r),l.g=ya(l.g),l.b=ya(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===He&&(l.r=Gr(l.r),l.g=Gr(l.g),l.b=Gr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===rs?ou:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return rl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return rl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Wr]:{primaries:t,whitePoint:s,transfer:ou,toXYZ:g0,fromXYZ:_0,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Vn},outputColorSpaceConfig:{drawingBufferColorSpace:Vn}},[Vn]:{primaries:t,whitePoint:s,transfer:He,toXYZ:g0,fromXYZ:_0,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Vn}}}),r}const Te=yM();function ya(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Gr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Er;class MM{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Er===void 0&&(Er=sl("canvas")),Er.width=t.width,Er.height=t.height;const l=Er.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Er}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=sl("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=ya(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(ya(i[s]/255)*255):i[s]=ya(i[s]);return{data:i,width:t.width,height:t.height}}else return ee("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let EM=0;class hp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:EM++}),this.uuid=qr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(wh(l[h].image)):c.push(wh(l[h]))}else c=wh(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function wh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?MM.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ee("Texture: Unable to serialize Texture."),{})}let bM=0;const Dh=new K;class In extends Bs{constructor(t=In.DEFAULT_IMAGE,i=In.DEFAULT_MAPPING,s=xa,l=xa,c=yn,h=zs,d=Ni,m=yi,p=In.DEFAULT_ANISOTROPY,v=rs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bM++}),this.uuid=qr(),this.name="",this.source=new hp(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Dh).x}get height(){return this.source.getSize(Dh).y}get depth(){return this.source.getSize(Dh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){ee(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ee(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Av)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case _d:t.x=t.x-Math.floor(t.x);break;case xa:t.x=t.x<0?0:1;break;case vd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case _d:t.y=t.y-Math.floor(t.y);break;case xa:t.y=t.y<0?0:1;break;case vd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=Av;In.DEFAULT_ANISOTROPY=1;class rn{constructor(t=0,i=0,s=0,l=1){rn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],v=m[4],g=m[8],y=m[1],M=m[5],b=m[9],C=m[2],S=m[6],_=m[10];if(Math.abs(v-y)<.01&&Math.abs(g-C)<.01&&Math.abs(b-S)<.01){if(Math.abs(v+y)<.1&&Math.abs(g+C)<.1&&Math.abs(b+S)<.1&&Math.abs(p+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const w=(p+1)/2,U=(M+1)/2,O=(_+1)/2,z=(v+y)/4,N=(g+C)/4,X=(b+S)/4;return w>U&&w>O?w<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(w),l=z/s,c=N/s):U>O?U<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(U),s=z/l,c=X/l):O<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(O),s=N/c,l=X/c),this.set(s,l,c,i),this}let D=Math.sqrt((S-b)*(S-b)+(g-C)*(g-C)+(y-v)*(y-v));return Math.abs(D)<.001&&(D=1),this.x=(S-b)/D,this.y=(g-C)/D,this.z=(y-v)/D,this.w=Math.acos((p+M+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=de(this.x,t.x,i.x),this.y=de(this.y,t.y,i.y),this.z=de(this.z,t.z,i.z),this.w=de(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=de(this.x,t,i),this.y=de(this.y,t,i),this.z=de(this.z,t,i),this.w=de(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(de(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class TM extends Bs{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new rn(0,0,t,i),this.scissorTest=!1,this.viewport=new rn(0,0,t,i);const l={width:t,height:i,depth:s.depth},c=new In(l);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:yn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new hp(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wi extends TM{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class Pv extends In{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=xa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class AM extends In{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ln,this.minFilter=Ln,this.wrapR=xa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cl{constructor(t=new K(1/0,1/0,1/0),i=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(wi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(wi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=wi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,wi):wi.fromBufferAttribute(c,h),wi.applyMatrix4(t.matrixWorld),this.expandByPoint(wi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Tc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Tc.copy(s.boundingBox)),Tc.applyMatrix4(t.matrixWorld),this.union(Tc)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,wi),wi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Wo),Ac.subVectors(this.max,Wo),br.subVectors(t.a,Wo),Tr.subVectors(t.b,Wo),Ar.subVectors(t.c,Wo),Ja.subVectors(Tr,br),$a.subVectors(Ar,Tr),Cs.subVectors(br,Ar);let i=[0,-Ja.z,Ja.y,0,-$a.z,$a.y,0,-Cs.z,Cs.y,Ja.z,0,-Ja.x,$a.z,0,-$a.x,Cs.z,0,-Cs.x,-Ja.y,Ja.x,0,-$a.y,$a.x,0,-Cs.y,Cs.x,0];return!Uh(i,br,Tr,Ar,Ac)||(i=[1,0,0,0,1,0,0,0,1],!Uh(i,br,Tr,Ar,Ac))?!1:(Rc.crossVectors(Ja,$a),i=[Rc.x,Rc.y,Rc.z],Uh(i,br,Tr,Ar,Ac))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,wi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(wi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ha[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ha[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ha[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ha[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ha[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ha[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ha[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ha[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ha),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ha=[new K,new K,new K,new K,new K,new K,new K,new K],wi=new K,Tc=new cl,br=new K,Tr=new K,Ar=new K,Ja=new K,$a=new K,Cs=new K,Wo=new K,Ac=new K,Rc=new K,ws=new K;function Uh(r,t,i,s,l){for(let c=0,h=r.length-3;c<=h;c+=3){ws.fromArray(r,c);const d=l.x*Math.abs(ws.x)+l.y*Math.abs(ws.y)+l.z*Math.abs(ws.z),m=t.dot(ws),p=i.dot(ws),v=s.dot(ws);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>d)return!1}return!0}const RM=new cl,Yo=new K,Lh=new K;class ul{constructor(t=new K,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):RM.setFromPoints(t).getCenter(s);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Yo.subVectors(t,this.center);const i=Yo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Yo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Lh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Yo.copy(t.center).add(Lh)),this.expandByPoint(Yo.copy(t.center).sub(Lh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const da=new K,Nh=new K,Cc=new K,ts=new K,Oh=new K,wc=new K,Ph=new K;class hu{constructor(t=new K,i=new K(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,da)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=da.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(da.copy(this.origin).addScaledVector(this.direction,i),da.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Nh.copy(t).add(i).multiplyScalar(.5),Cc.copy(i).sub(t).normalize(),ts.copy(this.origin).sub(Nh);const c=t.distanceTo(i)*.5,h=-this.direction.dot(Cc),d=ts.dot(this.direction),m=-ts.dot(Cc),p=ts.lengthSq(),v=Math.abs(1-h*h);let g,y,M,b;if(v>0)if(g=h*m-d,y=h*d-m,b=c*v,g>=0)if(y>=-b)if(y<=b){const C=1/v;g*=C,y*=C,M=g*(g+h*y+2*d)+y*(h*g+y+2*m)+p}else y=c,g=Math.max(0,-(h*y+d)),M=-g*g+y*(y+2*m)+p;else y=-c,g=Math.max(0,-(h*y+d)),M=-g*g+y*(y+2*m)+p;else y<=-b?(g=Math.max(0,-(-h*c+d)),y=g>0?-c:Math.min(Math.max(-c,-m),c),M=-g*g+y*(y+2*m)+p):y<=b?(g=0,y=Math.min(Math.max(-c,-m),c),M=y*(y+2*m)+p):(g=Math.max(0,-(h*c+d)),y=g>0?c:Math.min(Math.max(-c,-m),c),M=-g*g+y*(y+2*m)+p);else y=h>0?-c:c,g=Math.max(0,-(h*y+d)),M=-g*g+y*(y+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(Nh).addScaledVector(Cc,y),M}intersectSphere(t,i){da.subVectors(t.center,this.origin);const s=da.dot(this.direction),l=da.dot(da)-s*s,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,h,d,m;const p=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,y=this.origin;return p>=0?(s=(t.min.x-y.x)*p,l=(t.max.x-y.x)*p):(s=(t.max.x-y.x)*p,l=(t.min.x-y.x)*p),v>=0?(c=(t.min.y-y.y)*v,h=(t.max.y-y.y)*v):(c=(t.max.y-y.y)*v,h=(t.min.y-y.y)*v),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),g>=0?(d=(t.min.z-y.z)*g,m=(t.max.z-y.z)*g):(d=(t.max.z-y.z)*g,m=(t.min.z-y.z)*g),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,da)!==null}intersectTriangle(t,i,s,l,c){Oh.subVectors(i,t),wc.subVectors(s,t),Ph.crossVectors(Oh,wc);let h=this.direction.dot(Ph),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;ts.subVectors(this.origin,t);const m=d*this.direction.dot(wc.crossVectors(ts,wc));if(m<0)return null;const p=d*this.direction.dot(Oh.cross(ts));if(p<0||m+p>h)return null;const v=-d*ts.dot(Ph);return v<0?null:this.at(v/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nn{constructor(t,i,s,l,c,h,d,m,p,v,g,y,M,b,C,S){nn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p,v,g,y,M,b,C,S)}set(t,i,s,l,c,h,d,m,p,v,g,y,M,b,C,S){const _=this.elements;return _[0]=t,_[4]=i,_[8]=s,_[12]=l,_[1]=c,_[5]=h,_[9]=d,_[13]=m,_[2]=p,_[6]=v,_[10]=g,_[14]=y,_[3]=M,_[7]=b,_[11]=C,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nn().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/Rr.setFromMatrixColumn(t,0).length(),c=1/Rr.setFromMatrixColumn(t,1).length(),h=1/Rr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),v=Math.cos(c),g=Math.sin(c);if(t.order==="XYZ"){const y=h*v,M=h*g,b=d*v,C=d*g;i[0]=m*v,i[4]=-m*g,i[8]=p,i[1]=M+b*p,i[5]=y-C*p,i[9]=-d*m,i[2]=C-y*p,i[6]=b+M*p,i[10]=h*m}else if(t.order==="YXZ"){const y=m*v,M=m*g,b=p*v,C=p*g;i[0]=y+C*d,i[4]=b*d-M,i[8]=h*p,i[1]=h*g,i[5]=h*v,i[9]=-d,i[2]=M*d-b,i[6]=C+y*d,i[10]=h*m}else if(t.order==="ZXY"){const y=m*v,M=m*g,b=p*v,C=p*g;i[0]=y-C*d,i[4]=-h*g,i[8]=b+M*d,i[1]=M+b*d,i[5]=h*v,i[9]=C-y*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const y=h*v,M=h*g,b=d*v,C=d*g;i[0]=m*v,i[4]=b*p-M,i[8]=y*p+C,i[1]=m*g,i[5]=C*p+y,i[9]=M*p-b,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const y=h*m,M=h*p,b=d*m,C=d*p;i[0]=m*v,i[4]=C-y*g,i[8]=b*g+M,i[1]=g,i[5]=h*v,i[9]=-d*v,i[2]=-p*v,i[6]=M*g+b,i[10]=y-C*g}else if(t.order==="XZY"){const y=h*m,M=h*p,b=d*m,C=d*p;i[0]=m*v,i[4]=-g,i[8]=p*v,i[1]=y*g+C,i[5]=h*v,i[9]=M*g-b,i[2]=b*g-M,i[6]=d*v,i[10]=C*g+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(CM,t,wM)}lookAt(t,i,s){const l=this.elements;return ri.subVectors(t,i),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),es.crossVectors(s,ri),es.lengthSq()===0&&(Math.abs(s.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),es.crossVectors(s,ri)),es.normalize(),Dc.crossVectors(ri,es),l[0]=es.x,l[4]=Dc.x,l[8]=ri.x,l[1]=es.y,l[5]=Dc.y,l[9]=ri.y,l[2]=es.z,l[6]=Dc.z,l[10]=ri.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],v=s[1],g=s[5],y=s[9],M=s[13],b=s[2],C=s[6],S=s[10],_=s[14],D=s[3],w=s[7],U=s[11],O=s[15],z=l[0],N=l[4],X=l[8],T=l[12],L=l[1],H=l[5],Z=l[9],Q=l[13],ft=l[2],lt=l[6],I=l[10],G=l[14],st=l[3],yt=l[7],xt=l[11],F=l[15];return c[0]=h*z+d*L+m*ft+p*st,c[4]=h*N+d*H+m*lt+p*yt,c[8]=h*X+d*Z+m*I+p*xt,c[12]=h*T+d*Q+m*G+p*F,c[1]=v*z+g*L+y*ft+M*st,c[5]=v*N+g*H+y*lt+M*yt,c[9]=v*X+g*Z+y*I+M*xt,c[13]=v*T+g*Q+y*G+M*F,c[2]=b*z+C*L+S*ft+_*st,c[6]=b*N+C*H+S*lt+_*yt,c[10]=b*X+C*Z+S*I+_*xt,c[14]=b*T+C*Q+S*G+_*F,c[3]=D*z+w*L+U*ft+O*st,c[7]=D*N+w*H+U*lt+O*yt,c[11]=D*X+w*Z+U*I+O*xt,c[15]=D*T+w*Q+U*G+O*F,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],h=t[1],d=t[5],m=t[9],p=t[13],v=t[2],g=t[6],y=t[10],M=t[14],b=t[3],C=t[7],S=t[11],_=t[15],D=m*M-p*y,w=d*M-p*g,U=d*y-m*g,O=h*M-p*v,z=h*y-m*v,N=h*g-d*v;return i*(C*D-S*w+_*U)-s*(b*D-S*O+_*z)+l*(b*w-C*O+_*N)-c*(b*U-C*z+S*N)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],v=t[8],g=t[9],y=t[10],M=t[11],b=t[12],C=t[13],S=t[14],_=t[15],D=g*S*p-C*y*p+C*m*M-d*S*M-g*m*_+d*y*_,w=b*y*p-v*S*p-b*m*M+h*S*M+v*m*_-h*y*_,U=v*C*p-b*g*p+b*d*M-h*C*M-v*d*_+h*g*_,O=b*g*m-v*C*m-b*d*y+h*C*y+v*d*S-h*g*S,z=i*D+s*w+l*U+c*O;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/z;return t[0]=D*N,t[1]=(C*y*c-g*S*c-C*l*M+s*S*M+g*l*_-s*y*_)*N,t[2]=(d*S*c-C*m*c+C*l*p-s*S*p-d*l*_+s*m*_)*N,t[3]=(g*m*c-d*y*c-g*l*p+s*y*p+d*l*M-s*m*M)*N,t[4]=w*N,t[5]=(v*S*c-b*y*c+b*l*M-i*S*M-v*l*_+i*y*_)*N,t[6]=(b*m*c-h*S*c-b*l*p+i*S*p+h*l*_-i*m*_)*N,t[7]=(h*y*c-v*m*c+v*l*p-i*y*p-h*l*M+i*m*M)*N,t[8]=U*N,t[9]=(b*g*c-v*C*c-b*s*M+i*C*M+v*s*_-i*g*_)*N,t[10]=(h*C*c-b*d*c+b*s*p-i*C*p-h*s*_+i*d*_)*N,t[11]=(v*d*c-h*g*c-v*s*p+i*g*p+h*s*M-i*d*M)*N,t[12]=O*N,t[13]=(v*C*l-b*g*l+b*s*y-i*C*y-v*s*S+i*g*S)*N,t[14]=(b*d*l-h*C*l-b*s*m+i*C*m+h*s*S-i*d*S)*N,t[15]=(h*g*l-v*d*l+v*s*m-i*g*m-h*s*y+i*d*y)*N,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=t.x,d=t.y,m=t.z,p=c*h,v=c*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,v*d+s,v*m-l*h,0,p*m-l*d,v*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,h){return this.set(1,s,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,v=h+h,g=d+d,y=c*p,M=c*v,b=c*g,C=h*v,S=h*g,_=d*g,D=m*p,w=m*v,U=m*g,O=s.x,z=s.y,N=s.z;return l[0]=(1-(C+_))*O,l[1]=(M+U)*O,l[2]=(b-w)*O,l[3]=0,l[4]=(M-U)*z,l[5]=(1-(y+_))*z,l[6]=(S+D)*z,l[7]=0,l[8]=(b+w)*N,l[9]=(S-D)*N,l[10]=(1-(y+C))*N,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;if(t.x=l[12],t.y=l[13],t.z=l[14],this.determinant()===0)return s.set(1,1,1),i.identity(),this;let c=Rr.set(l[0],l[1],l[2]).length();const h=Rr.set(l[4],l[5],l[6]).length(),d=Rr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),Di.copy(this);const p=1/c,v=1/h,g=1/d;return Di.elements[0]*=p,Di.elements[1]*=p,Di.elements[2]*=p,Di.elements[4]*=v,Di.elements[5]*=v,Di.elements[6]*=v,Di.elements[8]*=g,Di.elements[9]*=g,Di.elements[10]*=g,i.setFromRotationMatrix(Di),s.x=c,s.y=h,s.z=d,this}makePerspective(t,i,s,l,c,h,d=ki,m=!1){const p=this.elements,v=2*c/(i-t),g=2*c/(s-l),y=(i+t)/(i-t),M=(s+l)/(s-l);let b,C;if(m)b=c/(h-c),C=h*c/(h-c);else if(d===ki)b=-(h+c)/(h-c),C=-2*h*c/(h-c);else if(d===lu)b=-h/(h-c),C=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=g,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,h,d=ki,m=!1){const p=this.elements,v=2/(i-t),g=2/(s-l),y=-(i+t)/(i-t),M=-(s+l)/(s-l);let b,C;if(m)b=1/(h-c),C=h/(h-c);else if(d===ki)b=-2/(h-c),C=-(h+c)/(h-c);else if(d===lu)b=-1/(h-c),C=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=0,p[12]=y,p[1]=0,p[5]=g,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=b,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const Rr=new K,Di=new nn,CM=new K(0,0,0),wM=new K(1,1,1),es=new K,Dc=new K,ri=new K,v0=new nn,x0=new cs;class ba{constructor(t=0,i=0,s=0,l=ba.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],v=l[9],g=l[2],y=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(de(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-de(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(de(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-g,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-de(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(y,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(de(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-de(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-v,M),this._y=0);break;default:ee("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return v0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(v0,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return x0.setFromEuler(this),this.setFromQuaternion(x0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ba.DEFAULT_ORDER="XYZ";class zv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let DM=0;const S0=new K,Cr=new cs,pa=new nn,Uc=new K,qo=new K,UM=new K,LM=new cs,y0=new K(1,0,0),M0=new K(0,1,0),E0=new K(0,0,1),b0={type:"added"},NM={type:"removed"},wr={type:"childadded",child:null},zh={type:"childremoved",child:null};class kn extends Bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:DM++}),this.uuid=qr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kn.DEFAULT_UP.clone();const t=new K,i=new ba,s=new cs,l=new K(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new nn},normalMatrix:{value:new ue}}),this.matrix=new nn,this.matrixWorld=new nn,this.matrixAutoUpdate=kn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Cr.setFromAxisAngle(t,i),this.quaternion.multiply(Cr),this}rotateOnWorldAxis(t,i){return Cr.setFromAxisAngle(t,i),this.quaternion.premultiply(Cr),this}rotateX(t){return this.rotateOnAxis(y0,t)}rotateY(t){return this.rotateOnAxis(M0,t)}rotateZ(t){return this.rotateOnAxis(E0,t)}translateOnAxis(t,i){return S0.copy(t).applyQuaternion(this.quaternion),this.position.add(S0.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(y0,t)}translateY(t){return this.translateOnAxis(M0,t)}translateZ(t){return this.translateOnAxis(E0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(pa.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Uc.copy(t):Uc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),qo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pa.lookAt(qo,Uc,this.up):pa.lookAt(Uc,qo,this.up),this.quaternion.setFromRotationMatrix(pa),l&&(pa.extractRotation(l.matrixWorld),Cr.setFromRotationMatrix(pa),this.quaternion.premultiply(Cr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Ce("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(b0),wr.child=t,this.dispatchEvent(wr),wr.child=null):Ce("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(NM),zh.child=t,this.dispatchEvent(zh),zh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),pa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),pa.multiply(t.parent.matrixWorld)),t.applyMatrix4(pa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(b0),wr.child=t,this.dispatchEvent(wr),wr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qo,t,UM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qo,LM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const g=m[p];c(t.shapes,g)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),v=h(t.images),g=h(t.shapes),y=h(t.skeletons),M=h(t.animations),b=h(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),v.length>0&&(s.images=v),g.length>0&&(s.shapes=g),y.length>0&&(s.skeletons=y),M.length>0&&(s.animations=M),b.length>0&&(s.nodes=b)}return s.object=l,s;function h(d){const m=[];for(const p in d){const v=d[p];delete v.metadata,m.push(v)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}kn.DEFAULT_UP=new K(0,1,0);kn.DEFAULT_MATRIX_AUTO_UPDATE=!0;kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ui=new K,ma=new K,Fh=new K,ga=new K,Dr=new K,Ur=new K,T0=new K,Ih=new K,Bh=new K,Hh=new K,Gh=new rn,Vh=new rn,kh=new rn;class Li{constructor(t=new K,i=new K,s=new K){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Ui.subVectors(t,i),l.cross(Ui);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Ui.subVectors(l,i),ma.subVectors(s,i),Fh.subVectors(t,i);const h=Ui.dot(Ui),d=Ui.dot(ma),m=Ui.dot(Fh),p=ma.dot(ma),v=ma.dot(Fh),g=h*p-d*d;if(g===0)return c.set(0,0,0),null;const y=1/g,M=(p*m-d*v)*y,b=(h*v-d*m)*y;return c.set(1-M-b,b,M)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,ga)===null?!1:ga.x>=0&&ga.y>=0&&ga.x+ga.y<=1}static getInterpolation(t,i,s,l,c,h,d,m){return this.getBarycoord(t,i,s,l,ga)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ga.x),m.addScaledVector(h,ga.y),m.addScaledVector(d,ga.z),m)}static getInterpolatedAttribute(t,i,s,l,c,h){return Gh.setScalar(0),Vh.setScalar(0),kh.setScalar(0),Gh.fromBufferAttribute(t,i),Vh.fromBufferAttribute(t,s),kh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(Gh,c.x),h.addScaledVector(Vh,c.y),h.addScaledVector(kh,c.z),h}static isFrontFacing(t,i,s,l){return Ui.subVectors(s,i),ma.subVectors(t,i),Ui.cross(ma).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ui.subVectors(this.c,this.b),ma.subVectors(this.a,this.b),Ui.cross(ma).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Li.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Li.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Li.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Li.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Li.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let h,d;Dr.subVectors(l,s),Ur.subVectors(c,s),Ih.subVectors(t,s);const m=Dr.dot(Ih),p=Ur.dot(Ih);if(m<=0&&p<=0)return i.copy(s);Bh.subVectors(t,l);const v=Dr.dot(Bh),g=Ur.dot(Bh);if(v>=0&&g<=v)return i.copy(l);const y=m*g-v*p;if(y<=0&&m>=0&&v<=0)return h=m/(m-v),i.copy(s).addScaledVector(Dr,h);Hh.subVectors(t,c);const M=Dr.dot(Hh),b=Ur.dot(Hh);if(b>=0&&M<=b)return i.copy(c);const C=M*p-m*b;if(C<=0&&p>=0&&b<=0)return d=p/(p-b),i.copy(s).addScaledVector(Ur,d);const S=v*b-M*g;if(S<=0&&g-v>=0&&M-b>=0)return T0.subVectors(c,l),d=(g-v)/(g-v+(M-b)),i.copy(l).addScaledVector(T0,d);const _=1/(S+C+y);return h=C*_,d=y*_,i.copy(s).addScaledVector(Dr,h).addScaledVector(Ur,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Fv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ns={h:0,s:0,l:0},Lc={h:0,s:0,l:0};function Xh(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class pe{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Vn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Te.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Te.workingColorSpace){return this.r=t,this.g=i,this.b=s,Te.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Te.workingColorSpace){if(t=fp(t,1),i=de(i,0,1),s=de(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=Xh(h,c,t+1/3),this.g=Xh(h,c,t),this.b=Xh(h,c,t-1/3)}return Te.colorSpaceToWorking(this,l),this}setStyle(t,i=Vn){function s(c){c!==void 0&&parseFloat(c)<1&&ee("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ee("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);ee("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Vn){const s=Fv[t.toLowerCase()];return s!==void 0?this.setHex(s,i):ee("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ya(t.r),this.g=ya(t.g),this.b=ya(t.b),this}copyLinearToSRGB(t){return this.r=Gr(t.r),this.g=Gr(t.g),this.b=Gr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Vn){return Te.workingToColorSpace(zn.copy(this),t),Math.round(de(zn.r*255,0,255))*65536+Math.round(de(zn.g*255,0,255))*256+Math.round(de(zn.b*255,0,255))}getHexString(t=Vn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Te.workingColorSpace){Te.workingToColorSpace(zn.copy(this),i);const s=zn.r,l=zn.g,c=zn.b,h=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const v=(d+h)/2;if(d===h)m=0,p=0;else{const g=h-d;switch(p=v<=.5?g/(h+d):g/(2-h-d),h){case s:m=(l-c)/g+(l<c?6:0);break;case l:m=(c-s)/g+2;break;case c:m=(s-l)/g+4;break}m/=6}return t.h=m,t.s=p,t.l=v,t}getRGB(t,i=Te.workingColorSpace){return Te.workingToColorSpace(zn.copy(this),i),t.r=zn.r,t.g=zn.g,t.b=zn.b,t}getStyle(t=Vn){Te.workingToColorSpace(zn.copy(this),t);const i=zn.r,s=zn.g,l=zn.b;return t!==Vn?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(ns),this.setHSL(ns.h+t,ns.s+i,ns.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(ns),t.getHSL(Lc);const s=el(ns.h,Lc.h,i),l=el(ns.s,Lc.s,i),c=el(ns.l,Lc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zn=new pe;pe.NAMES=Fv;let OM=0;class jr extends Bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:OM++}),this.uuid=qr(),this.name="",this.type="Material",this.blending=Hr,this.side=ls,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rd,this.blendDst=od,this.blendEquation=Os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pe(0,0,0),this.blendAlpha=0,this.depthFunc=Vr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=c0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mr,this.stencilZFail=Mr,this.stencilZPass=Mr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){ee(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ee(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Hr&&(s.blending=this.blending),this.side!==ls&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==rd&&(s.blendSrc=this.blendSrc),this.blendDst!==od&&(s.blendDst=this.blendDst),this.blendEquation!==Os&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Vr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==c0&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Mr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Mr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Iv extends jr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ba,this.combine=vv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const hn=new K,Nc=new ne;let PM=0;class Yi{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:PM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=u0,this.updateRanges=[],this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Nc.fromBufferAttribute(this,i),Nc.applyMatrix3(t),this.setXY(i,Nc.x,Nc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix3(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix4(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.applyNormalMatrix(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)hn.fromBufferAttribute(this,i),hn.transformDirection(t),this.setXYZ(i,hn.x,hn.y,hn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Ir(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Hn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Ir(i,this.array)),i}setX(t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Ir(i,this.array)),i}setY(t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Ir(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Ir(i,this.array)),i}setW(t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Hn(i,this.array),s=Hn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Hn(i,this.array),s=Hn(s,this.array),l=Hn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Hn(i,this.array),s=Hn(s,this.array),l=Hn(l,this.array),c=Hn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==u0&&(t.usage=this.usage),t}}class Bv extends Yi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class Hv extends Yi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class dn extends Yi{constructor(t,i,s){super(new Float32Array(t),i,s)}}let zM=0;const Si=new nn,Wh=new kn,Lr=new K,oi=new cl,jo=new cl,Sn=new K;class ci extends Bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zM++}),this.uuid=qr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ov(t)?Hv:Bv)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ue().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Si.makeRotationFromQuaternion(t),this.applyMatrix4(Si),this}rotateX(t){return Si.makeRotationX(t),this.applyMatrix4(Si),this}rotateY(t){return Si.makeRotationY(t),this.applyMatrix4(Si),this}rotateZ(t){return Si.makeRotationZ(t),this.applyMatrix4(Si),this}translate(t,i,s){return Si.makeTranslation(t,i,s),this.applyMatrix4(Si),this}scale(t,i,s){return Si.makeScale(t,i,s),this.applyMatrix4(Si),this}lookAt(t){return Wh.lookAt(t),Wh.updateMatrix(),this.applyMatrix4(Wh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Lr).negate(),this.translate(Lr.x,Lr.y,Lr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new dn(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&ee("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cl);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ce("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];oi.setFromBufferAttribute(c),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ce('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ul);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ce("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(t){const s=this.boundingSphere.center;if(oi.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];jo.setFromBufferAttribute(d),this.morphTargetsRelative?(Sn.addVectors(oi.min,jo.min),oi.expandByPoint(Sn),Sn.addVectors(oi.max,jo.max),oi.expandByPoint(Sn)):(oi.expandByPoint(jo.min),oi.expandByPoint(jo.max))}oi.getCenter(s);let l=0;for(let c=0,h=t.count;c<h;c++)Sn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(Sn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,v=d.count;p<v;p++)Sn.fromBufferAttribute(d,p),m&&(Lr.fromBufferAttribute(t,p),Sn.add(Lr)),l=Math.max(l,s.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Ce('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Ce("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yi(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let X=0;X<s.count;X++)d[X]=new K,m[X]=new K;const p=new K,v=new K,g=new K,y=new ne,M=new ne,b=new ne,C=new K,S=new K;function _(X,T,L){p.fromBufferAttribute(s,X),v.fromBufferAttribute(s,T),g.fromBufferAttribute(s,L),y.fromBufferAttribute(c,X),M.fromBufferAttribute(c,T),b.fromBufferAttribute(c,L),v.sub(p),g.sub(p),M.sub(y),b.sub(y);const H=1/(M.x*b.y-b.x*M.y);isFinite(H)&&(C.copy(v).multiplyScalar(b.y).addScaledVector(g,-M.y).multiplyScalar(H),S.copy(g).multiplyScalar(M.x).addScaledVector(v,-b.x).multiplyScalar(H),d[X].add(C),d[T].add(C),d[L].add(C),m[X].add(S),m[T].add(S),m[L].add(S))}let D=this.groups;D.length===0&&(D=[{start:0,count:t.count}]);for(let X=0,T=D.length;X<T;++X){const L=D[X],H=L.start,Z=L.count;for(let Q=H,ft=H+Z;Q<ft;Q+=3)_(t.getX(Q+0),t.getX(Q+1),t.getX(Q+2))}const w=new K,U=new K,O=new K,z=new K;function N(X){O.fromBufferAttribute(l,X),z.copy(O);const T=d[X];w.copy(T),w.sub(O.multiplyScalar(O.dot(T))).normalize(),U.crossVectors(z,T);const H=U.dot(m[X])<0?-1:1;h.setXYZW(X,w.x,w.y,w.z,H)}for(let X=0,T=D.length;X<T;++X){const L=D[X],H=L.start,Z=L.count;for(let Q=H,ft=H+Z;Q<ft;Q+=3)N(t.getX(Q+0)),N(t.getX(Q+1)),N(t.getX(Q+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Yi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let y=0,M=s.count;y<M;y++)s.setXYZ(y,0,0,0);const l=new K,c=new K,h=new K,d=new K,m=new K,p=new K,v=new K,g=new K;if(t)for(let y=0,M=t.count;y<M;y+=3){const b=t.getX(y+0),C=t.getX(y+1),S=t.getX(y+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,C),h.fromBufferAttribute(i,S),v.subVectors(h,c),g.subVectors(l,c),v.cross(g),d.fromBufferAttribute(s,b),m.fromBufferAttribute(s,C),p.fromBufferAttribute(s,S),d.add(v),m.add(v),p.add(v),s.setXYZ(b,d.x,d.y,d.z),s.setXYZ(C,m.x,m.y,m.z),s.setXYZ(S,p.x,p.y,p.z)}else for(let y=0,M=i.count;y<M;y+=3)l.fromBufferAttribute(i,y+0),c.fromBufferAttribute(i,y+1),h.fromBufferAttribute(i,y+2),v.subVectors(h,c),g.subVectors(l,c),v.cross(g),s.setXYZ(y+0,v.x,v.y,v.z),s.setXYZ(y+1,v.x,v.y,v.z),s.setXYZ(y+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Sn.fromBufferAttribute(t,i),Sn.normalize(),t.setXYZ(i,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function t(d,m){const p=d.array,v=d.itemSize,g=d.normalized,y=new p.constructor(m.length*v);let M=0,b=0;for(let C=0,S=m.length;C<S;C++){d.isInterleavedBufferAttribute?M=m[C]*d.data.stride+d.offset:M=m[C]*v;for(let _=0;_<v;_++)y[b++]=p[M++]}return new Yi(y,v,g)}if(this.index===null)return ee("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ci,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let v=0,g=p.length;v<g;v++){const y=p[v],M=t(y,s);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let g=0,y=p.length;g<y;g++){const M=p[g];v.push(M.toJSON(t.data))}v.length>0&&(l[m]=v,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const c=t.morphAttributes;for(const p in c){const v=[],g=c[p];for(let y=0,M=g.length;y<M;y++)v.push(g[y].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,v=h.length;p<v;p++){const g=h[p];this.addGroup(g.start,g.count,g.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const A0=new nn,Ds=new hu,Oc=new ul,R0=new K,Pc=new K,zc=new K,Fc=new K,Yh=new K,Ic=new K,C0=new K,Bc=new K;class Ta extends kn{constructor(t=new ci,i=new Iv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Ic.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const v=d[m],g=c[m];v!==0&&(Yh.fromBufferAttribute(g,t),h?Ic.addScaledVector(Yh,v):Ic.addScaledVector(Yh.sub(i),v))}i.add(Ic)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Oc.copy(s.boundingSphere),Oc.applyMatrix4(c),Ds.copy(t.ray).recast(t.near),!(Oc.containsPoint(Ds.origin)===!1&&(Ds.intersectSphere(Oc,R0)===null||Ds.origin.distanceToSquared(R0)>(t.far-t.near)**2))&&(A0.copy(c).invert(),Ds.copy(t.ray).applyMatrix4(A0),!(s.boundingBox!==null&&Ds.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Ds)))}_computeIntersections(t,i,s){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,v=c.attributes.uv1,g=c.attributes.normal,y=c.groups,M=c.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,C=y.length;b<C;b++){const S=y[b],_=h[S.materialIndex],D=Math.max(S.start,M.start),w=Math.min(d.count,Math.min(S.start+S.count,M.start+M.count));for(let U=D,O=w;U<O;U+=3){const z=d.getX(U),N=d.getX(U+1),X=d.getX(U+2);l=Hc(this,_,t,s,p,v,g,z,N,X),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),C=Math.min(d.count,M.start+M.count);for(let S=b,_=C;S<_;S+=3){const D=d.getX(S),w=d.getX(S+1),U=d.getX(S+2);l=Hc(this,h,t,s,p,v,g,D,w,U),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let b=0,C=y.length;b<C;b++){const S=y[b],_=h[S.materialIndex],D=Math.max(S.start,M.start),w=Math.min(m.count,Math.min(S.start+S.count,M.start+M.count));for(let U=D,O=w;U<O;U+=3){const z=U,N=U+1,X=U+2;l=Hc(this,_,t,s,p,v,g,z,N,X),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),C=Math.min(m.count,M.start+M.count);for(let S=b,_=C;S<_;S+=3){const D=S,w=S+1,U=S+2;l=Hc(this,h,t,s,p,v,g,D,w,U),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function FM(r,t,i,s,l,c,h,d){let m;if(t.side===Jn?m=s.intersectTriangle(h,c,l,!0,d):m=s.intersectTriangle(l,c,h,t.side===ls,d),m===null)return null;Bc.copy(d),Bc.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Bc);return p<i.near||p>i.far?null:{distance:p,point:Bc.clone(),object:r}}function Hc(r,t,i,s,l,c,h,d,m,p){r.getVertexPosition(d,Pc),r.getVertexPosition(m,zc),r.getVertexPosition(p,Fc);const v=FM(r,t,i,s,Pc,zc,Fc,C0);if(v){const g=new K;Li.getBarycoord(C0,Pc,zc,Fc,g),l&&(v.uv=Li.getInterpolatedAttribute(l,d,m,p,g,new ne)),c&&(v.uv1=Li.getInterpolatedAttribute(c,d,m,p,g,new ne)),h&&(v.normal=Li.getInterpolatedAttribute(h,d,m,p,g,new K),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const y={a:d,b:m,c:p,normal:new K,materialIndex:0};Li.getNormal(Pc,zc,Fc,y.normal),v.face=y,v.barycoord=g}return v}class fl extends ci{constructor(t=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],v=[],g=[];let y=0,M=0;b("z","y","x",-1,-1,s,i,t,h,c,0),b("z","y","x",1,-1,s,i,-t,h,c,1),b("x","z","y",1,1,t,s,i,l,h,2),b("x","z","y",1,-1,t,s,-i,l,h,3),b("x","y","z",1,-1,t,i,s,l,c,4),b("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new dn(p,3)),this.setAttribute("normal",new dn(v,3)),this.setAttribute("uv",new dn(g,2));function b(C,S,_,D,w,U,O,z,N,X,T){const L=U/N,H=O/X,Z=U/2,Q=O/2,ft=z/2,lt=N+1,I=X+1;let G=0,st=0;const yt=new K;for(let xt=0;xt<I;xt++){const F=xt*H-Q;for(let at=0;at<lt;at++){const gt=at*L-Z;yt[C]=gt*D,yt[S]=F*w,yt[_]=ft,p.push(yt.x,yt.y,yt.z),yt[C]=0,yt[S]=0,yt[_]=z>0?1:-1,v.push(yt.x,yt.y,yt.z),g.push(at/N),g.push(1-xt/X),G+=1}}for(let xt=0;xt<X;xt++)for(let F=0;F<N;F++){const at=y+F+lt*xt,gt=y+F+lt*(xt+1),Tt=y+(F+1)+lt*(xt+1),It=y+(F+1)+lt*xt;m.push(at,gt,It),m.push(gt,Tt,It),st+=6}d.addGroup(M,st,T),M+=st,y+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Yr(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ee("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Gn(r){const t={};for(let i=0;i<r.length;i++){const s=Yr(r[i]);for(const l in s)t[l]=s[l]}return t}function IM(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function Gv(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Te.workingColorSpace}const BM={clone:Yr,merge:Gn};var HM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,GM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Oi extends jr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=HM,this.fragmentShader=GM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Yr(t.uniforms),this.uniformsGroups=IM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Vv extends kn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nn,this.projectionMatrix=new nn,this.projectionMatrixInverse=new nn,this.coordinateSystem=ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const is=new K,w0=new ne,D0=new ne;class li extends Vv{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=ol*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(tl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ol*2*Math.atan(Math.tan(tl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){is.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(is.x,is.y).multiplyScalar(-t/is.z),is.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(is.x,is.y).multiplyScalar(-t/is.z)}getViewSize(t,i){return this.getViewBounds(t,w0,D0),i.subVectors(D0,w0)}setViewOffset(t,i,s,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(tl*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Nr=-90,Or=1;class VM extends kn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new li(Nr,Or,t,i);l.layers=this.layers,this.add(l);const c=new li(Nr,Or,t,i);c.layers=this.layers,this.add(c);const h=new li(Nr,Or,t,i);h.layers=this.layers,this.add(h);const d=new li(Nr,Or,t,i);d.layers=this.layers,this.add(d);const m=new li(Nr,Or,t,i);m.layers=this.layers,this.add(m);const p=new li(Nr,Or,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(t===ki)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===lu)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,v]=this.children,g=t.getRenderTarget(),y=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,h),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=C,t.setRenderTarget(s,5,l),t.render(i,v),t.setRenderTarget(g,y,M),t.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class dp extends In{constructor(t=[],i=Is,s,l,c,h,d,m,p,v){super(t,i,s,l,c,h,d,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class kv extends Wi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new dp(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new fl(5,5,5),c=new Oi({name:"CubemapFromEquirect",uniforms:Yr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Jn,blending:Sa});c.uniforms.tEquirect.value=i;const h=new Ta(l,c),d=i.minFilter;return i.minFilter===zs&&(i.minFilter=yn),new VM(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(c)}}class Gc extends kn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kM={type:"move"};class qh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const C of t.hand.values()){const S=i.getJointPose(C,s),_=this._getHandJoint(p,C);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const v=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],y=v.position.distanceTo(g.position),M=.02,b=.005;p.inputState.pinching&&y>M+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&y<=M-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(kM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Gc;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class Xv extends kn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ba,this.environmentIntensity=1,this.environmentRotation=new ba,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class XM extends In{constructor(t=null,i=1,s=1,l,c,h,d,m,p=Ln,v=Ln,g,y){super(null,h,d,m,p,v,l,c,g,y),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const jh=new K,WM=new K,YM=new ue;class ss{constructor(t=new K(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=jh.subVectors(s,i).cross(WM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(jh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||YM.getNormalMatrix(t),l=this.coplanarPoint(jh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Us=new ul,qM=new ne(.5,.5),Vc=new K;class Wv{constructor(t=new ss,i=new ss,s=new ss,l=new ss,c=new ss,h=new ss){this.planes=[t,i,s,l,c,h]}set(t,i,s,l,c,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=ki,s=!1){const l=this.planes,c=t.elements,h=c[0],d=c[1],m=c[2],p=c[3],v=c[4],g=c[5],y=c[6],M=c[7],b=c[8],C=c[9],S=c[10],_=c[11],D=c[12],w=c[13],U=c[14],O=c[15];if(l[0].setComponents(p-h,M-v,_-b,O-D).normalize(),l[1].setComponents(p+h,M+v,_+b,O+D).normalize(),l[2].setComponents(p+d,M+g,_+C,O+w).normalize(),l[3].setComponents(p-d,M-g,_-C,O-w).normalize(),s)l[4].setComponents(m,y,S,U).normalize(),l[5].setComponents(p-m,M-y,_-S,O-U).normalize();else if(l[4].setComponents(p-m,M-y,_-S,O-U).normalize(),i===ki)l[5].setComponents(p+m,M+y,_+S,O+U).normalize();else if(i===lu)l[5].setComponents(m,y,S,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Us.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Us.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Us)}intersectsSprite(t){Us.center.set(0,0,0);const i=qM.distanceTo(t.center);return Us.radius=.7071067811865476+i,Us.applyMatrix4(t.matrixWorld),this.intersectsSphere(Us)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Vc.x=l.normal.x>0?t.max.x:t.min.x,Vc.y=l.normal.y>0?t.max.y:t.min.y,Vc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Vc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Yv extends jr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const cu=new K,uu=new K,U0=new nn,Zo=new hu,kc=new ul,Zh=new K,L0=new K;class jM extends kn{constructor(t=new ci,i=new Yv){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)cu.fromBufferAttribute(i,l-1),uu.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=cu.distanceTo(uu);t.setAttribute("lineDistance",new dn(s,1))}else ee("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),kc.copy(s.boundingSphere),kc.applyMatrix4(l),kc.radius+=c,t.ray.intersectsSphere(kc)===!1)return;U0.copy(l).invert(),Zo.copy(t.ray).applyMatrix4(U0);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,v=s.index,y=s.attributes.position;if(v!==null){const M=Math.max(0,h.start),b=Math.min(v.count,h.start+h.count);for(let C=M,S=b-1;C<S;C+=p){const _=v.getX(C),D=v.getX(C+1),w=Xc(this,t,Zo,m,_,D,C);w&&i.push(w)}if(this.isLineLoop){const C=v.getX(b-1),S=v.getX(M),_=Xc(this,t,Zo,m,C,S,b-1);_&&i.push(_)}}else{const M=Math.max(0,h.start),b=Math.min(y.count,h.start+h.count);for(let C=M,S=b-1;C<S;C+=p){const _=Xc(this,t,Zo,m,C,C+1,C);_&&i.push(_)}if(this.isLineLoop){const C=Xc(this,t,Zo,m,b-1,M,b-1);C&&i.push(C)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Xc(r,t,i,s,l,c,h){const d=r.geometry.attributes.position;if(cu.fromBufferAttribute(d,l),uu.fromBufferAttribute(d,c),i.distanceSqToSegment(cu,uu,Zh,L0)>s)return;Zh.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(Zh);if(!(p<t.near||p>t.far))return{distance:p,point:L0.clone().applyMatrix4(r.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:r}}const N0=new K,O0=new K;class ZM extends jM{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)N0.fromBufferAttribute(i,l),O0.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+N0.distanceTo(O0);t.setAttribute("lineDistance",new dn(s,1))}else ee("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class qv extends jr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const P0=new nn,Jd=new hu,Wc=new ul,Yc=new K;class jv extends kn{constructor(t=new ci,i=new qv){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Wc.copy(s.boundingSphere),Wc.applyMatrix4(l),Wc.radius+=c,t.ray.intersectsSphere(Wc)===!1)return;P0.copy(l).invert(),Jd.copy(t.ray).applyMatrix4(P0);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=s.index,g=s.attributes.position;if(p!==null){const y=Math.max(0,h.start),M=Math.min(p.count,h.start+h.count);for(let b=y,C=M;b<C;b++){const S=p.getX(b);Yc.fromBufferAttribute(g,S),z0(Yc,S,m,l,t,i,this)}}else{const y=Math.max(0,h.start),M=Math.min(g.count,h.start+h.count);for(let b=y,C=M;b<C;b++)Yc.fromBufferAttribute(g,b),z0(Yc,b,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function z0(r,t,i,s,l,c,h){const d=Jd.distanceSqToPoint(r);if(d<i){const m=new K;Jd.closestPointToPoint(r,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:h})}}class KM extends In{constructor(t,i,s,l,c,h,d,m,p){super(t,i,s,l,c,h,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ll extends In{constructor(t,i,s=qi,l,c,h,d=Ln,m=Ln,p,v=Ea,g=1){if(v!==Ea&&v!==Fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:t,height:i,depth:g};super(y,l,c,h,d,m,v,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new hp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class QM extends ll{constructor(t,i=qi,s=Is,l,c,h=Ln,d=Ln,m,p=Ea){const v={width:t,height:t,depth:1},g=[v,v,v,v,v,v];super(t,t,i,s,l,c,h,d,m,p),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Zv extends In{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class du extends ci{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,v=m+1,g=t/d,y=i/m,M=[],b=[],C=[],S=[];for(let _=0;_<v;_++){const D=_*y-h;for(let w=0;w<p;w++){const U=w*g-c;b.push(U,-D,0),C.push(0,0,1),S.push(w/d),S.push(1-_/m)}}for(let _=0;_<m;_++)for(let D=0;D<d;D++){const w=D+p*_,U=D+p*(_+1),O=D+1+p*(_+1),z=D+1+p*_;M.push(w,U,z),M.push(U,O,z)}this.setIndex(M),this.setAttribute("position",new dn(b,3)),this.setAttribute("normal",new dn(C,3)),this.setAttribute("uv",new dn(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new du(t.width,t.height,t.widthSegments,t.heightSegments)}}class JM extends Oi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class $M extends jr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class tE extends jr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const nl={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class eE{constructor(t,i,s){const l=this;let c=!1,h=0,d=0,m;const p=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=s,this._abortController=null,this.itemStart=function(v){d++,c===!1&&l.onStart!==void 0&&l.onStart(v,h,d),c=!0},this.itemEnd=function(v){h++,l.onProgress!==void 0&&l.onProgress(v,h,d),h===d&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(v){l.onError!==void 0&&l.onError(v)},this.resolveURL=function(v){return m?m(v):v},this.setURLModifier=function(v){return m=v,this},this.addHandler=function(v,g){return p.push(v,g),this},this.removeHandler=function(v){const g=p.indexOf(v);return g!==-1&&p.splice(g,2),this},this.getHandler=function(v){for(let g=0,y=p.length;g<y;g+=2){const M=p[g],b=p[g+1];if(M.global&&(M.lastIndex=0),M.test(v))return b}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const nE=new eE;class hl{constructor(t){this.manager=t!==void 0?t:nE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){const s=this;return new Promise(function(l,c){s.load(t,l,i,c)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}hl.DEFAULT_MATERIAL_NAME="__DEFAULT";const _a={};class iE extends Error{constructor(t,i){super(t),this.response=i}}class aE extends hl{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,i,s,l){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=nl.get(`file:${t}`);if(c!==void 0)return this.manager.itemStart(t),setTimeout(()=>{i&&i(c),this.manager.itemEnd(t)},0),c;if(_a[t]!==void 0){_a[t].push({onLoad:i,onProgress:s,onError:l});return}_a[t]=[],_a[t].push({onLoad:i,onProgress:s,onError:l});const h=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),d=this.mimeType,m=this.responseType;fetch(h).then(p=>{if(p.status===200||p.status===0){if(p.status===0&&ee("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||p.body===void 0||p.body.getReader===void 0)return p;const v=_a[t],g=p.body.getReader(),y=p.headers.get("X-File-Size")||p.headers.get("Content-Length"),M=y?parseInt(y):0,b=M!==0;let C=0;const S=new ReadableStream({start(_){D();function D(){g.read().then(({done:w,value:U})=>{if(w)_.close();else{C+=U.byteLength;const O=new ProgressEvent("progress",{lengthComputable:b,loaded:C,total:M});for(let z=0,N=v.length;z<N;z++){const X=v[z];X.onProgress&&X.onProgress(O)}_.enqueue(U),D()}},w=>{_.error(w)})}}});return new Response(S)}else throw new iE(`fetch for "${p.url}" responded with ${p.status}: ${p.statusText}`,p)}).then(p=>{switch(m){case"arraybuffer":return p.arrayBuffer();case"blob":return p.blob();case"document":return p.text().then(v=>new DOMParser().parseFromString(v,d));case"json":return p.json();default:if(d==="")return p.text();{const g=/charset="?([^;"\s]*)"?/i.exec(d),y=g&&g[1]?g[1].toLowerCase():void 0,M=new TextDecoder(y);return p.arrayBuffer().then(b=>M.decode(b))}}}).then(p=>{nl.add(`file:${t}`,p);const v=_a[t];delete _a[t];for(let g=0,y=v.length;g<y;g++){const M=v[g];M.onLoad&&M.onLoad(p)}}).catch(p=>{const v=_a[t];if(v===void 0)throw this.manager.itemError(t),p;delete _a[t];for(let g=0,y=v.length;g<y;g++){const M=v[g];M.onError&&M.onError(p)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Pr=new WeakMap;class sE extends hl{constructor(t){super(t)}load(t,i,s,l){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const c=this,h=nl.get(`image:${t}`);if(h!==void 0){if(h.complete===!0)c.manager.itemStart(t),setTimeout(function(){i&&i(h),c.manager.itemEnd(t)},0);else{let g=Pr.get(h);g===void 0&&(g=[],Pr.set(h,g)),g.push({onLoad:i,onError:l})}return h}const d=sl("img");function m(){v(),i&&i(this);const g=Pr.get(this)||[];for(let y=0;y<g.length;y++){const M=g[y];M.onLoad&&M.onLoad(this)}Pr.delete(this),c.manager.itemEnd(t)}function p(g){v(),l&&l(g),nl.remove(`image:${t}`);const y=Pr.get(this)||[];for(let M=0;M<y.length;M++){const b=y[M];b.onError&&b.onError(g)}Pr.delete(this),c.manager.itemError(t),c.manager.itemEnd(t)}function v(){d.removeEventListener("load",m,!1),d.removeEventListener("error",p,!1)}return d.addEventListener("load",m,!1),d.addEventListener("error",p,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(d.crossOrigin=this.crossOrigin),nl.add(`image:${t}`,d),c.manager.itemStart(t),d.src=t,d}}class Kv extends hl{constructor(t){super(t)}load(t,i,s,l){const c=new dp;c.colorSpace=Vn;const h=new sE(this.manager);h.setCrossOrigin(this.crossOrigin),h.setPath(this.path);let d=0;function m(p){h.load(t[p],function(v){c.images[p]=v,d++,d===6&&(c.needsUpdate=!0,i&&i(c))},void 0,l)}for(let p=0;p<t.length;++p)m(p);return c}}class Qv extends Vv{constructor(t=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,h=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=v*this.view.offsetY,m=d-v*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class rE extends li{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class F0{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=de(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(de(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Jv extends ZM{constructor(t=1){const i=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],s=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],l=new ci;l.setAttribute("position",new dn(i,3)),l.setAttribute("color",new dn(s,3));const c=new Yv({vertexColors:!0,toneMapped:!1});super(l,c),this.type="AxesHelper"}setColors(t,i,s){const l=new pe,c=this.geometry.attributes.color.array;return l.set(t),l.toArray(c,0),l.toArray(c,3),l.set(i),l.toArray(c,6),l.toArray(c,9),l.set(s),l.toArray(c,12),l.toArray(c,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class $v extends Bs{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){ee("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function I0(r,t,i,s){const l=oE(s);switch(i){case Uv:return r*t;case Nv:return r*t/l.components*l.byteLength;case rp:return r*t/l.components*l.byteLength;case Xr:return r*t*2/l.components*l.byteLength;case op:return r*t*2/l.components*l.byteLength;case Lv:return r*t*3/l.components*l.byteLength;case Ni:return r*t*4/l.components*l.byteLength;case lp:return r*t*4/l.components*l.byteLength;case eu:case nu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case iu:case au:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Sd:case Md:return Math.max(r,16)*Math.max(t,8)/4;case xd:case yd:return Math.max(r,8)*Math.max(t,8)/2;case Ed:case bd:case Ad:case Rd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Td:case Cd:case wd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Dd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ud:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Ld:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Nd:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Od:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Pd:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case zd:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Fd:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Id:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Bd:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Hd:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Gd:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Vd:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case kd:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Xd:case Wd:case Yd:return Math.ceil(r/4)*Math.ceil(t/4)*16;case qd:case jd:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Zd:case Kd:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function oE(r){switch(r){case yi:case Rv:return{byteLength:1,components:1};case il:case Cv:case Ma:return{byteLength:2,components:1};case ap:case sp:return{byteLength:2,components:4};case qi:case ip:case Vi:return{byteLength:4,components:1};case wv:case Dv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:np}}));typeof window<"u"&&(window.__THREE__?ee("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=np);function tx(){let r=null,t=!1,i=null,s=null;function l(c,h){i(c,h),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function lE(r){const t=new WeakMap;function i(d,m){const p=d.array,v=d.usage,g=p.byteLength,y=r.createBuffer();r.bindBuffer(m,y),r.bufferData(m,p,v),d.onUploadCallback();let M;if(p instanceof Float32Array)M=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=r.SHORT;else if(p instanceof Uint32Array)M=r.UNSIGNED_INT;else if(p instanceof Int32Array)M=r.INT;else if(p instanceof Int8Array)M=r.BYTE;else if(p instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:g}}function s(d,m,p){const v=m.array,g=m.updateRanges;if(r.bindBuffer(p,d),g.length===0)r.bufferSubData(p,0,v);else{g.sort((M,b)=>M.start-b.start);let y=0;for(let M=1;M<g.length;M++){const b=g[y],C=g[M];C.start<=b.start+b.count+1?b.count=Math.max(b.count,C.start+C.count-b.start):(++y,g[y]=C)}g.length=y+1;for(let M=0,b=g.length;M<b;M++){const C=g[M];r.bufferSubData(p,C.start*v.BYTES_PER_ELEMENT,v,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(r.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=t.get(d);(!v||v.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var cE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,fE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,gE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_E=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,vE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,SE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ME=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,EE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,bE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,TE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,AE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,RE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,CE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,DE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,UE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,LE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,NE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,OE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,PE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,FE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,IE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,BE="gl_FragColor = linearToOutputTexel( gl_FragColor );",HE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,GE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,VE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,kE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,XE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,WE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,YE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ZE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,KE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,QE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,JE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$E=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,eb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,nb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ib=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ab=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ob=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,cb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ub=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,db=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_b=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,vb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Mb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Eb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Tb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ab=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Rb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Cb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Db=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ub=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Lb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Nb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ob=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Pb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ib=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Wb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Yb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,qb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,jb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Kb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Jb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$b=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,eT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,nT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,iT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,aT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,oT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,mT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,gT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,_T=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,vT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ST=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,MT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ET=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,RT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,wT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,DT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,UT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,NT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,FT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,IT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,HT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,GT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,fe={alphahash_fragment:cE,alphahash_pars_fragment:uE,alphamap_fragment:fE,alphamap_pars_fragment:hE,alphatest_fragment:dE,alphatest_pars_fragment:pE,aomap_fragment:mE,aomap_pars_fragment:gE,batching_pars_vertex:_E,batching_vertex:vE,begin_vertex:xE,beginnormal_vertex:SE,bsdfs:yE,iridescence_fragment:ME,bumpmap_pars_fragment:EE,clipping_planes_fragment:bE,clipping_planes_pars_fragment:TE,clipping_planes_pars_vertex:AE,clipping_planes_vertex:RE,color_fragment:CE,color_pars_fragment:wE,color_pars_vertex:DE,color_vertex:UE,common:LE,cube_uv_reflection_fragment:NE,defaultnormal_vertex:OE,displacementmap_pars_vertex:PE,displacementmap_vertex:zE,emissivemap_fragment:FE,emissivemap_pars_fragment:IE,colorspace_fragment:BE,colorspace_pars_fragment:HE,envmap_fragment:GE,envmap_common_pars_fragment:VE,envmap_pars_fragment:kE,envmap_pars_vertex:XE,envmap_physical_pars_fragment:eb,envmap_vertex:WE,fog_vertex:YE,fog_pars_vertex:qE,fog_fragment:jE,fog_pars_fragment:ZE,gradientmap_pars_fragment:KE,lightmap_pars_fragment:QE,lights_lambert_fragment:JE,lights_lambert_pars_fragment:$E,lights_pars_begin:tb,lights_toon_fragment:nb,lights_toon_pars_fragment:ib,lights_phong_fragment:ab,lights_phong_pars_fragment:sb,lights_physical_fragment:rb,lights_physical_pars_fragment:ob,lights_fragment_begin:lb,lights_fragment_maps:cb,lights_fragment_end:ub,logdepthbuf_fragment:fb,logdepthbuf_pars_fragment:hb,logdepthbuf_pars_vertex:db,logdepthbuf_vertex:pb,map_fragment:mb,map_pars_fragment:gb,map_particle_fragment:_b,map_particle_pars_fragment:vb,metalnessmap_fragment:xb,metalnessmap_pars_fragment:Sb,morphinstance_vertex:yb,morphcolor_vertex:Mb,morphnormal_vertex:Eb,morphtarget_pars_vertex:bb,morphtarget_vertex:Tb,normal_fragment_begin:Ab,normal_fragment_maps:Rb,normal_pars_fragment:Cb,normal_pars_vertex:wb,normal_vertex:Db,normalmap_pars_fragment:Ub,clearcoat_normal_fragment_begin:Lb,clearcoat_normal_fragment_maps:Nb,clearcoat_pars_fragment:Ob,iridescence_pars_fragment:Pb,opaque_fragment:zb,packing:Fb,premultiplied_alpha_fragment:Ib,project_vertex:Bb,dithering_fragment:Hb,dithering_pars_fragment:Gb,roughnessmap_fragment:Vb,roughnessmap_pars_fragment:kb,shadowmap_pars_fragment:Xb,shadowmap_pars_vertex:Wb,shadowmap_vertex:Yb,shadowmask_pars_fragment:qb,skinbase_vertex:jb,skinning_pars_vertex:Zb,skinning_vertex:Kb,skinnormal_vertex:Qb,specularmap_fragment:Jb,specularmap_pars_fragment:$b,tonemapping_fragment:tT,tonemapping_pars_fragment:eT,transmission_fragment:nT,transmission_pars_fragment:iT,uv_pars_fragment:aT,uv_pars_vertex:sT,uv_vertex:rT,worldpos_vertex:oT,background_vert:lT,background_frag:cT,backgroundCube_vert:uT,backgroundCube_frag:fT,cube_vert:hT,cube_frag:dT,depth_vert:pT,depth_frag:mT,distance_vert:gT,distance_frag:_T,equirect_vert:vT,equirect_frag:xT,linedashed_vert:ST,linedashed_frag:yT,meshbasic_vert:MT,meshbasic_frag:ET,meshlambert_vert:bT,meshlambert_frag:TT,meshmatcap_vert:AT,meshmatcap_frag:RT,meshnormal_vert:CT,meshnormal_frag:wT,meshphong_vert:DT,meshphong_frag:UT,meshphysical_vert:LT,meshphysical_frag:NT,meshtoon_vert:OT,meshtoon_frag:PT,points_vert:zT,points_frag:FT,shadow_vert:IT,shadow_frag:BT,sprite_vert:HT,sprite_frag:GT},Nt={common:{diffuse:{value:new pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ue}},envmap:{envMap:{value:null},envMapRotation:{value:new ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ue},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0},uvTransform:{value:new ue}},sprite:{diffuse:{value:new pe(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}}},Gi={basic:{uniforms:Gn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:Gn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new pe(0)}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:Gn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new pe(0)},specular:{value:new pe(1118481)},shininess:{value:30}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:Gn([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:Gn([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new pe(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:Gn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:Gn([Nt.points,Nt.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:Gn([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:Gn([Nt.common,Nt.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:Gn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:Gn([Nt.sprite,Nt.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ue}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distance:{uniforms:Gn([Nt.common,Nt.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distance_vert,fragmentShader:fe.distance_frag},shadow:{uniforms:Gn([Nt.lights,Nt.fog,{color:{value:new pe(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};Gi.physical={uniforms:Gn([Gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ue},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ue},sheen:{value:0},sheenColor:{value:new pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ue},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ue},attenuationDistance:{value:0},attenuationColor:{value:new pe(0)},specularColor:{value:new pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ue},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ue}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};const qc={r:0,b:0,g:0},Ls=new ba,VT=new nn;function kT(r,t,i,s,l,c,h){const d=new pe(0);let m=c===!0?0:1,p,v,g=null,y=0,M=null;function b(w){let U=w.isScene===!0?w.background:null;return U&&U.isTexture&&(U=(w.backgroundBlurriness>0?i:t).get(U)),U}function C(w){let U=!1;const O=b(w);O===null?_(d,m):O&&O.isColor&&(_(O,1),U=!0);const z=r.xr.getEnvironmentBlendMode();z==="additive"?s.buffers.color.setClear(0,0,0,1,h):z==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(r.autoClear||U)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function S(w,U){const O=b(U);O&&(O.isCubeTexture||O.mapping===fu)?(v===void 0&&(v=new Ta(new fl(1,1,1),new Oi({name:"BackgroundCubeMaterial",uniforms:Yr(Gi.backgroundCube.uniforms),vertexShader:Gi.backgroundCube.vertexShader,fragmentShader:Gi.backgroundCube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(z,N,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),Ls.copy(U.backgroundRotation),Ls.x*=-1,Ls.y*=-1,Ls.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(Ls.y*=-1,Ls.z*=-1),v.material.uniforms.envMap.value=O,v.material.uniforms.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(VT.makeRotationFromEuler(Ls)),v.material.toneMapped=Te.getTransfer(O.colorSpace)!==He,(g!==O||y!==O.version||M!==r.toneMapping)&&(v.material.needsUpdate=!0,g=O,y=O.version,M=r.toneMapping),v.layers.enableAll(),w.unshift(v,v.geometry,v.material,0,0,null)):O&&O.isTexture&&(p===void 0&&(p=new Ta(new du(2,2),new Oi({name:"BackgroundMaterial",uniforms:Yr(Gi.background.uniforms),vertexShader:Gi.background.vertexShader,fragmentShader:Gi.background.fragmentShader,side:ls,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=O,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.toneMapped=Te.getTransfer(O.colorSpace)!==He,O.matrixAutoUpdate===!0&&O.updateMatrix(),p.material.uniforms.uvTransform.value.copy(O.matrix),(g!==O||y!==O.version||M!==r.toneMapping)&&(p.material.needsUpdate=!0,g=O,y=O.version,M=r.toneMapping),p.layers.enableAll(),w.unshift(p,p.geometry,p.material,0,0,null))}function _(w,U){w.getRGB(qc,Gv(r)),s.buffers.color.setClear(qc.r,qc.g,qc.b,U,h)}function D(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(w,U=1){d.set(w),m=U,_(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(w){m=w,_(d,m)},render:C,addToRenderList:S,dispose:D}}function XT(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=y(null);let c=l,h=!1;function d(L,H,Z,Q,ft){let lt=!1;const I=g(Q,Z,H);c!==I&&(c=I,p(c.object)),lt=M(L,Q,Z,ft),lt&&b(L,Q,Z,ft),ft!==null&&t.update(ft,r.ELEMENT_ARRAY_BUFFER),(lt||h)&&(h=!1,U(L,H,Z,Q),ft!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(ft).buffer))}function m(){return r.createVertexArray()}function p(L){return r.bindVertexArray(L)}function v(L){return r.deleteVertexArray(L)}function g(L,H,Z){const Q=Z.wireframe===!0;let ft=s[L.id];ft===void 0&&(ft={},s[L.id]=ft);let lt=ft[H.id];lt===void 0&&(lt={},ft[H.id]=lt);let I=lt[Q];return I===void 0&&(I=y(m()),lt[Q]=I),I}function y(L){const H=[],Z=[],Q=[];for(let ft=0;ft<i;ft++)H[ft]=0,Z[ft]=0,Q[ft]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:Z,attributeDivisors:Q,object:L,attributes:{},index:null}}function M(L,H,Z,Q){const ft=c.attributes,lt=H.attributes;let I=0;const G=Z.getAttributes();for(const st in G)if(G[st].location>=0){const xt=ft[st];let F=lt[st];if(F===void 0&&(st==="instanceMatrix"&&L.instanceMatrix&&(F=L.instanceMatrix),st==="instanceColor"&&L.instanceColor&&(F=L.instanceColor)),xt===void 0||xt.attribute!==F||F&&xt.data!==F.data)return!0;I++}return c.attributesNum!==I||c.index!==Q}function b(L,H,Z,Q){const ft={},lt=H.attributes;let I=0;const G=Z.getAttributes();for(const st in G)if(G[st].location>=0){let xt=lt[st];xt===void 0&&(st==="instanceMatrix"&&L.instanceMatrix&&(xt=L.instanceMatrix),st==="instanceColor"&&L.instanceColor&&(xt=L.instanceColor));const F={};F.attribute=xt,xt&&xt.data&&(F.data=xt.data),ft[st]=F,I++}c.attributes=ft,c.attributesNum=I,c.index=Q}function C(){const L=c.newAttributes;for(let H=0,Z=L.length;H<Z;H++)L[H]=0}function S(L){_(L,0)}function _(L,H){const Z=c.newAttributes,Q=c.enabledAttributes,ft=c.attributeDivisors;Z[L]=1,Q[L]===0&&(r.enableVertexAttribArray(L),Q[L]=1),ft[L]!==H&&(r.vertexAttribDivisor(L,H),ft[L]=H)}function D(){const L=c.newAttributes,H=c.enabledAttributes;for(let Z=0,Q=H.length;Z<Q;Z++)H[Z]!==L[Z]&&(r.disableVertexAttribArray(Z),H[Z]=0)}function w(L,H,Z,Q,ft,lt,I){I===!0?r.vertexAttribIPointer(L,H,Z,ft,lt):r.vertexAttribPointer(L,H,Z,Q,ft,lt)}function U(L,H,Z,Q){C();const ft=Q.attributes,lt=Z.getAttributes(),I=H.defaultAttributeValues;for(const G in lt){const st=lt[G];if(st.location>=0){let yt=ft[G];if(yt===void 0&&(G==="instanceMatrix"&&L.instanceMatrix&&(yt=L.instanceMatrix),G==="instanceColor"&&L.instanceColor&&(yt=L.instanceColor)),yt!==void 0){const xt=yt.normalized,F=yt.itemSize,at=t.get(yt);if(at===void 0)continue;const gt=at.buffer,Tt=at.type,It=at.bytesPerElement,it=Tt===r.INT||Tt===r.UNSIGNED_INT||yt.gpuType===ip;if(yt.isInterleavedBufferAttribute){const ut=yt.data,wt=ut.stride,Vt=yt.offset;if(ut.isInstancedInterleavedBuffer){for(let Bt=0;Bt<st.locationSize;Bt++)_(st.location+Bt,ut.meshPerAttribute);L.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Bt=0;Bt<st.locationSize;Bt++)S(st.location+Bt);r.bindBuffer(r.ARRAY_BUFFER,gt);for(let Bt=0;Bt<st.locationSize;Bt++)w(st.location+Bt,F/st.locationSize,Tt,xt,wt*It,(Vt+F/st.locationSize*Bt)*It,it)}else{if(yt.isInstancedBufferAttribute){for(let ut=0;ut<st.locationSize;ut++)_(st.location+ut,yt.meshPerAttribute);L.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let ut=0;ut<st.locationSize;ut++)S(st.location+ut);r.bindBuffer(r.ARRAY_BUFFER,gt);for(let ut=0;ut<st.locationSize;ut++)w(st.location+ut,F/st.locationSize,Tt,xt,F*It,F/st.locationSize*ut*It,it)}}else if(I!==void 0){const xt=I[G];if(xt!==void 0)switch(xt.length){case 2:r.vertexAttrib2fv(st.location,xt);break;case 3:r.vertexAttrib3fv(st.location,xt);break;case 4:r.vertexAttrib4fv(st.location,xt);break;default:r.vertexAttrib1fv(st.location,xt)}}}}D()}function O(){X();for(const L in s){const H=s[L];for(const Z in H){const Q=H[Z];for(const ft in Q)v(Q[ft].object),delete Q[ft];delete H[Z]}delete s[L]}}function z(L){if(s[L.id]===void 0)return;const H=s[L.id];for(const Z in H){const Q=H[Z];for(const ft in Q)v(Q[ft].object),delete Q[ft];delete H[Z]}delete s[L.id]}function N(L){for(const H in s){const Z=s[H];if(Z[L.id]===void 0)continue;const Q=Z[L.id];for(const ft in Q)v(Q[ft].object),delete Q[ft];delete Z[L.id]}}function X(){T(),h=!0,c!==l&&(c=l,p(c.object))}function T(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:X,resetDefaultState:T,dispose:O,releaseStatesOfGeometry:z,releaseStatesOfProgram:N,initAttributes:C,enableAttribute:S,disableUnusedAttributes:D}}function WT(r,t,i){let s;function l(p){s=p}function c(p,v){r.drawArrays(s,p,v),i.update(v,s,1)}function h(p,v,g){g!==0&&(r.drawArraysInstanced(s,p,v,g),i.update(v,s,g))}function d(p,v,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,v,0,g);let M=0;for(let b=0;b<g;b++)M+=v[b];i.update(M,s,1)}function m(p,v,g,y){if(g===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<p.length;b++)h(p[b],v[b],y[b]);else{M.multiDrawArraysInstancedWEBGL(s,p,0,v,0,y,0,g);let b=0;for(let C=0;C<g;C++)b+=v[C]*y[C];i.update(b,s,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function YT(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const N=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(N){return!(N!==Ni&&s.convert(N)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(N){const X=N===Ma&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(N!==yi&&s.convert(N)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==Vi&&!X)}function m(N){if(N==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=m(p);v!==p&&(ee("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const g=i.logarithmicDepthBuffer===!0,y=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),D=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),w=r.getParameter(r.MAX_VARYING_VECTORS),U=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),O=r.getParameter(r.MAX_SAMPLES),z=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:y,maxTextures:M,maxVertexTextures:b,maxTextureSize:C,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:D,maxVaryings:w,maxFragmentUniforms:U,maxSamples:O,samples:z}}function qT(r){const t=this;let i=null,s=0,l=!1,c=!1;const h=new ss,d=new ue,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,y){const M=g.length!==0||y||s!==0||l;return l=y,s=g.length,M},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,y){i=v(g,y,0)},this.setState=function(g,y,M){const b=g.clippingPlanes,C=g.clipIntersection,S=g.clipShadows,_=r.get(g);if(!l||b===null||b.length===0||c&&!S)c?v(null):p();else{const D=c?0:s,w=D*4;let U=_.clippingState||null;m.value=U,U=v(b,y,w,M);for(let O=0;O!==w;++O)U[O]=i[O];_.clippingState=U,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=D}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function v(g,y,M,b){const C=g!==null?g.length:0;let S=null;if(C!==0){if(S=m.value,b!==!0||S===null){const _=M+C*4,D=y.matrixWorldInverse;d.getNormalMatrix(D),(S===null||S.length<_)&&(S=new Float32Array(_));for(let w=0,U=M;w!==C;++w,U+=4)h.copy(g[w]).applyMatrix4(D,d),h.normal.toArray(S,U),S[U+3]=h.constant}m.value=S,m.needsUpdate=!0}return t.numPlanes=C,t.numIntersection=0,S}}function jT(r){let t=new WeakMap;function i(h,d){return d===md?h.mapping=Is:d===gd&&(h.mapping=kr),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===md||d===gd)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new kv(m.height);return p.fromEquirectangularTexture(r,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const os=4,B0=[.125,.215,.35,.446,.526,.582],Ps=20,ZT=256,Ko=new Qv,H0=new pe;let Kh=null,Qh=0,Jh=0,$h=!1;const KT=new K;class G0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:h=256,position:d=KT}=c;Kh=this._renderer.getRenderTarget(),Qh=this._renderer.getActiveCubeFace(),Jh=this._renderer.getActiveMipmapLevel(),$h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=X0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=k0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Kh,Qh,Jh),this._renderer.xr.enabled=$h,t.scissorTest=!1,zr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Is||t.mapping===kr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Kh=this._renderer.getRenderTarget(),Qh=this._renderer.getActiveCubeFace(),Jh=this._renderer.getActiveMipmapLevel(),$h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:Ma,format:Ni,colorSpace:Wr,depthBuffer:!1},l=V0(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=V0(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=QT(c)),this._blurMaterial=$T(c,t,i),this._ggxMaterial=JT(c,t,i)}return l}_compileMaterial(t){const i=new Ta(new ci,t);this._renderer.compile(i,Ko)}_sceneToCubeUV(t,i,s,l,c){const m=new li(90,1,i,s),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],g=this._renderer,y=g.autoClear,M=g.toneMapping;g.getClearColor(H0),g.toneMapping=Xi,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ta(new fl,new Iv({name:"PMREM.Background",side:Jn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,S=C.material;let _=!1;const D=t.background;D?D.isColor&&(S.color.copy(D),t.background=null,_=!0):(S.color.copy(H0),_=!0);for(let w=0;w<6;w++){const U=w%3;U===0?(m.up.set(0,p[w],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+v[w],c.y,c.z)):U===1?(m.up.set(0,0,p[w]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+v[w],c.z)):(m.up.set(0,p[w],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+v[w]));const O=this._cubeSize;zr(l,U*O,w>2?O:0,O,O),g.setRenderTarget(l),_&&g.render(C,m),g.render(t,m)}g.toneMapping=M,g.autoClear=y,t.background=D}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Is||t.mapping===kr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=X0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=k0());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;zr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,Ko)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,d=this._lodMeshes[s];d.material=h;const m=h.uniforms,p=s/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),g=Math.sqrt(p*p-v*v),y=0+p*1.25,M=g*y,{_lodMax:b}=this,C=this._sizeLods[s],S=3*C*(s>b-os?s-b+os:0),_=4*(this._cubeSize-C);m.envMap.value=t.texture,m.roughness.value=M,m.mipInt.value=b-i,zr(c,S,_,3*C,2*C),l.setRenderTarget(c),l.render(d,Ko),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=b-s,zr(t,S,_,3*C,2*C),l.setRenderTarget(t),l.render(d,Ko)}_blur(t,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",c),this._halfBlur(h,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&Ce("blur direction must be either latitudinal or longitudinal!");const v=3,g=this._lodMeshes[l];g.material=p;const y=p.uniforms,M=this._sizeLods[s]-1,b=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Ps-1),C=c/b,S=isFinite(c)?1+Math.floor(v*C):Ps;S>Ps&&ee(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Ps}`);const _=[];let D=0;for(let N=0;N<Ps;++N){const X=N/C,T=Math.exp(-X*X/2);_.push(T),N===0?D+=T:N<S&&(D+=2*T)}for(let N=0;N<_.length;N++)_[N]=_[N]/D;y.envMap.value=t.texture,y.samples.value=S,y.weights.value=_,y.latitudinal.value=h==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:w}=this;y.dTheta.value=b,y.mipInt.value=w-s;const U=this._sizeLods[l],O=3*U*(l>w-os?l-w+os:0),z=4*(this._cubeSize-U);zr(i,O,z,3*U,2*U),m.setRenderTarget(i),m.render(g,Ko)}}function QT(r){const t=[],i=[],s=[];let l=r;const c=r-os+1+B0.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);t.push(d);let m=1/d;h>r-os?m=B0[h-r+os-1]:h===0&&(m=0),i.push(m);const p=1/(d-2),v=-p,g=1+p,y=[v,v,g,v,g,g,v,v,g,g,v,g],M=6,b=6,C=3,S=2,_=1,D=new Float32Array(C*b*M),w=new Float32Array(S*b*M),U=new Float32Array(_*b*M);for(let z=0;z<M;z++){const N=z%3*2/3-1,X=z>2?0:-1,T=[N,X,0,N+2/3,X,0,N+2/3,X+1,0,N,X,0,N+2/3,X+1,0,N,X+1,0];D.set(T,C*b*z),w.set(y,S*b*z);const L=[z,z,z,z,z,z];U.set(L,_*b*z)}const O=new ci;O.setAttribute("position",new Yi(D,C)),O.setAttribute("uv",new Yi(w,S)),O.setAttribute("faceIndex",new Yi(U,_)),s.push(new Ta(O,null)),l>os&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function V0(r,t,i){const s=new Wi(r,t,i);return s.texture.mapping=fu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function zr(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function JT(r,t,i){return new Oi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ZT,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:pu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Sa,depthTest:!1,depthWrite:!1})}function $T(r,t,i){const s=new Float32Array(Ps),l=new K(0,1,0);return new Oi({name:"SphericalGaussianBlur",defines:{n:Ps,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Sa,depthTest:!1,depthWrite:!1})}function k0(){return new Oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Sa,depthTest:!1,depthWrite:!1})}function X0(){return new Oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sa,depthTest:!1,depthWrite:!1})}function pu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function tA(r){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===md||m===gd,v=m===Is||m===kr;if(p||v){let g=t.get(d);const y=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return i===null&&(i=new G0(r)),g=p?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{const M=d.image;return p&&M&&M.height>0||v&&M&&l(M)?(i===null&&(i=new G0(r)),g=p?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",c),g.texture):null}}}return d}function l(d){let m=0;const p=6;for(let v=0;v<p;v++)d[v]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function eA(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&rl("WebGLRenderer: "+s+" extension not supported."),l}}}function nA(r,t,i,s){const l={},c=new WeakMap;function h(g){const y=g.target;y.index!==null&&t.remove(y.index);for(const b in y.attributes)t.remove(y.attributes[b]);y.removeEventListener("dispose",h),delete l[y.id];const M=c.get(y);M&&(t.remove(M),c.delete(y)),s.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function d(g,y){return l[y.id]===!0||(y.addEventListener("dispose",h),l[y.id]=!0,i.memory.geometries++),y}function m(g){const y=g.attributes;for(const M in y)t.update(y[M],r.ARRAY_BUFFER)}function p(g){const y=[],M=g.index,b=g.attributes.position;let C=0;if(M!==null){const D=M.array;C=M.version;for(let w=0,U=D.length;w<U;w+=3){const O=D[w+0],z=D[w+1],N=D[w+2];y.push(O,z,z,N,N,O)}}else if(b!==void 0){const D=b.array;C=b.version;for(let w=0,U=D.length/3-1;w<U;w+=3){const O=w+0,z=w+1,N=w+2;y.push(O,z,z,N,N,O)}}else return;const S=new(Ov(y)?Hv:Bv)(y,1);S.version=C;const _=c.get(g);_&&t.remove(_),c.set(g,S)}function v(g){const y=c.get(g);if(y){const M=g.index;M!==null&&y.version<M.version&&p(g)}else p(g);return c.get(g)}return{get:d,update:m,getWireframeAttribute:v}}function iA(r,t,i){let s;function l(y){s=y}let c,h;function d(y){c=y.type,h=y.bytesPerElement}function m(y,M){r.drawElements(s,M,c,y*h),i.update(M,s,1)}function p(y,M,b){b!==0&&(r.drawElementsInstanced(s,M,c,y*h,b),i.update(M,s,b))}function v(y,M,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,c,y,0,b);let S=0;for(let _=0;_<b;_++)S+=M[_];i.update(S,s,1)}function g(y,M,b,C){if(b===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let _=0;_<y.length;_++)p(y[_]/h,M[_],C[_]);else{S.multiDrawElementsInstancedWEBGL(s,M,0,c,y,0,C,0,b);let _=0;for(let D=0;D<b;D++)_+=M[D]*C[D];i.update(_,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=g}function aA(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,d){switch(i.calls++,h){case r.TRIANGLES:i.triangles+=d*(c/3);break;case r.LINES:i.lines+=d*(c/2);break;case r.LINE_STRIP:i.lines+=d*(c-1);break;case r.LINE_LOOP:i.lines+=d*c;break;case r.POINTS:i.points+=d*c;break;default:Ce("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function sA(r,t,i){const s=new WeakMap,l=new rn;function c(h,d,m){const p=h.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=v!==void 0?v.length:0;let y=s.get(d);if(y===void 0||y.count!==g){let L=function(){X.dispose(),s.delete(d),d.removeEventListener("dispose",L)};var M=L;y!==void 0&&y.texture.dispose();const b=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],D=d.morphAttributes.normal||[],w=d.morphAttributes.color||[];let U=0;b===!0&&(U=1),C===!0&&(U=2),S===!0&&(U=3);let O=d.attributes.position.count*U,z=1;O>t.maxTextureSize&&(z=Math.ceil(O/t.maxTextureSize),O=t.maxTextureSize);const N=new Float32Array(O*z*4*g),X=new Pv(N,O,z,g);X.type=Vi,X.needsUpdate=!0;const T=U*4;for(let H=0;H<g;H++){const Z=_[H],Q=D[H],ft=w[H],lt=O*z*4*H;for(let I=0;I<Z.count;I++){const G=I*T;b===!0&&(l.fromBufferAttribute(Z,I),N[lt+G+0]=l.x,N[lt+G+1]=l.y,N[lt+G+2]=l.z,N[lt+G+3]=0),C===!0&&(l.fromBufferAttribute(Q,I),N[lt+G+4]=l.x,N[lt+G+5]=l.y,N[lt+G+6]=l.z,N[lt+G+7]=0),S===!0&&(l.fromBufferAttribute(ft,I),N[lt+G+8]=l.x,N[lt+G+9]=l.y,N[lt+G+10]=l.z,N[lt+G+11]=ft.itemSize===4?l.w:1)}}y={count:g,texture:X,size:new ne(O,z)},s.set(d,y),d.addEventListener("dispose",L)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",h.morphTexture,i);else{let b=0;for(let S=0;S<p.length;S++)b+=p[S];const C=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(r,"morphTargetBaseInfluence",C),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",y.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",y.size)}return{update:c}}function rA(r,t,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,v=m.geometry,g=t.get(m,v);if(l.get(g)!==p&&(t.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const y=m.skeleton;l.get(y)!==p&&(y.update(),l.set(y,p))}return g}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const oA={[xv]:"LINEAR_TONE_MAPPING",[Sv]:"REINHARD_TONE_MAPPING",[yv]:"CINEON_TONE_MAPPING",[Mv]:"ACES_FILMIC_TONE_MAPPING",[bv]:"AGX_TONE_MAPPING",[Tv]:"NEUTRAL_TONE_MAPPING",[Ev]:"CUSTOM_TONE_MAPPING"};function lA(r,t,i,s,l){const c=new Wi(t,i,{type:r,depthBuffer:s,stencilBuffer:l}),h=new Wi(t,i,{type:Ma,depthBuffer:!1,stencilBuffer:!1}),d=new ci;d.setAttribute("position",new dn([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new dn([0,2,0,0,2,0],2));const m=new JM({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new Ta(d,m),v=new Qv(-1,1,1,-1,0,1);let g=null,y=null,M=!1,b,C=null,S=[],_=!1;this.setSize=function(D,w){c.setSize(D,w),h.setSize(D,w);for(let U=0;U<S.length;U++){const O=S[U];O.setSize&&O.setSize(D,w)}},this.setEffects=function(D){S=D,_=S.length>0&&S[0].isRenderPass===!0;const w=c.width,U=c.height;for(let O=0;O<S.length;O++){const z=S[O];z.setSize&&z.setSize(w,U)}},this.begin=function(D,w){if(M||D.toneMapping===Xi&&S.length===0)return!1;if(C=w,w!==null){const U=w.width,O=w.height;(c.width!==U||c.height!==O)&&this.setSize(U,O)}return _===!1&&D.setRenderTarget(c),b=D.toneMapping,D.toneMapping=Xi,!0},this.hasRenderPass=function(){return _},this.end=function(D,w){D.toneMapping=b,M=!0;let U=c,O=h;for(let z=0;z<S.length;z++){const N=S[z];if(N.enabled!==!1&&(N.render(D,O,U,w),N.needsSwap!==!1)){const X=U;U=O,O=X}}if(g!==D.outputColorSpace||y!==D.toneMapping){g=D.outputColorSpace,y=D.toneMapping,m.defines={},Te.getTransfer(g)===He&&(m.defines.SRGB_TRANSFER="");const z=oA[y];z&&(m.defines[z]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=U.texture,D.setRenderTarget(C),D.render(p,v),C=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){c.dispose(),h.dispose(),d.dispose(),m.dispose()}}const ex=new In,$d=new ll(1,1),nx=new Pv,ix=new AM,ax=new dp,W0=[],Y0=[],q0=new Float32Array(16),j0=new Float32Array(9),Z0=new Float32Array(4);function Zr(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=W0[l];if(c===void 0&&(c=new Float32Array(l),W0[l]=c),t!==0){s.toArray(c,0);for(let h=1,d=0;h!==t;++h)d+=i,r[h].toArray(c,d)}return c}function _n(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function vn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function mu(r,t){let i=Y0[t];i===void 0&&(i=new Int32Array(t),Y0[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function cA(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function uA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;r.uniform2fv(this.addr,t),vn(i,t)}}function fA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(_n(i,t))return;r.uniform3fv(this.addr,t),vn(i,t)}}function hA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;r.uniform4fv(this.addr,t),vn(i,t)}}function dA(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(_n(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),vn(i,t)}else{if(_n(i,s))return;Z0.set(s),r.uniformMatrix2fv(this.addr,!1,Z0),vn(i,s)}}function pA(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(_n(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),vn(i,t)}else{if(_n(i,s))return;j0.set(s),r.uniformMatrix3fv(this.addr,!1,j0),vn(i,s)}}function mA(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(_n(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),vn(i,t)}else{if(_n(i,s))return;q0.set(s),r.uniformMatrix4fv(this.addr,!1,q0),vn(i,s)}}function gA(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function _A(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;r.uniform2iv(this.addr,t),vn(i,t)}}function vA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(_n(i,t))return;r.uniform3iv(this.addr,t),vn(i,t)}}function xA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;r.uniform4iv(this.addr,t),vn(i,t)}}function SA(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function yA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(_n(i,t))return;r.uniform2uiv(this.addr,t),vn(i,t)}}function MA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(_n(i,t))return;r.uniform3uiv(this.addr,t),vn(i,t)}}function EA(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(_n(i,t))return;r.uniform4uiv(this.addr,t),vn(i,t)}}function bA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?($d.compareFunction=i.isReversedDepthBuffer()?up:cp,c=$d):c=ex,i.setTexture2D(t||c,l)}function TA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||ix,l)}function AA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||ax,l)}function RA(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||nx,l)}function CA(r){switch(r){case 5126:return cA;case 35664:return uA;case 35665:return fA;case 35666:return hA;case 35674:return dA;case 35675:return pA;case 35676:return mA;case 5124:case 35670:return gA;case 35667:case 35671:return _A;case 35668:case 35672:return vA;case 35669:case 35673:return xA;case 5125:return SA;case 36294:return yA;case 36295:return MA;case 36296:return EA;case 35678:case 36198:case 36298:case 36306:case 35682:return bA;case 35679:case 36299:case 36307:return TA;case 35680:case 36300:case 36308:case 36293:return AA;case 36289:case 36303:case 36311:case 36292:return RA}}function wA(r,t){r.uniform1fv(this.addr,t)}function DA(r,t){const i=Zr(t,this.size,2);r.uniform2fv(this.addr,i)}function UA(r,t){const i=Zr(t,this.size,3);r.uniform3fv(this.addr,i)}function LA(r,t){const i=Zr(t,this.size,4);r.uniform4fv(this.addr,i)}function NA(r,t){const i=Zr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function OA(r,t){const i=Zr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function PA(r,t){const i=Zr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function zA(r,t){r.uniform1iv(this.addr,t)}function FA(r,t){r.uniform2iv(this.addr,t)}function IA(r,t){r.uniform3iv(this.addr,t)}function BA(r,t){r.uniform4iv(this.addr,t)}function HA(r,t){r.uniform1uiv(this.addr,t)}function GA(r,t){r.uniform2uiv(this.addr,t)}function VA(r,t){r.uniform3uiv(this.addr,t)}function kA(r,t){r.uniform4uiv(this.addr,t)}function XA(r,t,i){const s=this.cache,l=t.length,c=mu(i,l);_n(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));let h;this.type===r.SAMPLER_2D_SHADOW?h=$d:h=ex;for(let d=0;d!==l;++d)i.setTexture2D(t[d]||h,c[d])}function WA(r,t,i){const s=this.cache,l=t.length,c=mu(i,l);_n(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||ix,c[h])}function YA(r,t,i){const s=this.cache,l=t.length,c=mu(i,l);_n(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||ax,c[h])}function qA(r,t,i){const s=this.cache,l=t.length,c=mu(i,l);_n(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||nx,c[h])}function jA(r){switch(r){case 5126:return wA;case 35664:return DA;case 35665:return UA;case 35666:return LA;case 35674:return NA;case 35675:return OA;case 35676:return PA;case 5124:case 35670:return zA;case 35667:case 35671:return FA;case 35668:case 35672:return IA;case 35669:case 35673:return BA;case 5125:return HA;case 36294:return GA;case 36295:return VA;case 36296:return kA;case 35678:case 36198:case 36298:case 36306:case 35682:return XA;case 35679:case 36299:case 36307:return WA;case 35680:case 36300:case 36308:case 36293:return YA;case 36289:case 36303:case 36311:case 36292:return qA}}class ZA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=CA(i.type)}}class KA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=jA(i.type)}}class QA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const td=/(\w+)(\])?(\[|\.)?/g;function K0(r,t){r.seq.push(t),r.map[t.id]=t}function JA(r,t,i){const s=r.name,l=s.length;for(td.lastIndex=0;;){const c=td.exec(s),h=td.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){K0(i,p===void 0?new ZA(d,r,t):new KA(d,r,t));break}else{let g=i.map[d];g===void 0&&(g=new QA(d),K0(i,g)),i=g}}}class su{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let h=0;h<s;++h){const d=t.getActiveUniform(i,h),m=t.getUniformLocation(i,d.name);JA(d,m,this)}const l=[],c=[];for(const h of this.seq)h.type===t.SAMPLER_2D_SHADOW||h.type===t.SAMPLER_CUBE_SHADOW||h.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(h):c.push(h);l.length>0&&(this.seq=l.concat(c))}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function Q0(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const $A=37297;let t1=0;function e1(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const J0=new ue;function n1(r){Te._getMatrix(J0,Te.workingColorSpace,r);const t=`mat3( ${J0.elements.map(i=>i.toFixed(4))} )`;switch(Te.getTransfer(r)){case ou:return[t,"LinearTransferOETF"];case He:return[t,"sRGBTransferOETF"];default:return ee("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function $0(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+e1(r.getShaderSource(t),d)}else return c}function i1(r,t){const i=n1(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const a1={[xv]:"Linear",[Sv]:"Reinhard",[yv]:"Cineon",[Mv]:"ACESFilmic",[bv]:"AgX",[Tv]:"Neutral",[Ev]:"Custom"};function s1(r,t){const i=a1[t];return i===void 0?(ee("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const jc=new K;function r1(){Te.getLuminanceCoefficients(jc);const r=jc.x.toFixed(4),t=jc.y.toFixed(4),i=jc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function o1(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($o).join(`
`)}function l1(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function c1(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),h=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:r.getAttribLocation(t,h),locationSize:d}}return i}function $o(r){return r!==""}function tv(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ev(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const u1=/^[ \t]*#include +<([\w\d./]+)>/gm;function tp(r){return r.replace(u1,h1)}const f1=new Map;function h1(r,t){let i=fe[t];if(i===void 0){const s=f1.get(t);if(s!==void 0)i=fe[s],ee('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return tp(i)}const d1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nv(r){return r.replace(d1,p1)}function p1(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function iv(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const m1={[tu]:"SHADOWMAP_TYPE_PCF",[Jo]:"SHADOWMAP_TYPE_VSM"};function g1(r){return m1[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const _1={[Is]:"ENVMAP_TYPE_CUBE",[kr]:"ENVMAP_TYPE_CUBE",[fu]:"ENVMAP_TYPE_CUBE_UV"};function v1(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":_1[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const x1={[kr]:"ENVMAP_MODE_REFRACTION"};function S1(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":x1[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const y1={[vv]:"ENVMAP_BLENDING_MULTIPLY",[Wy]:"ENVMAP_BLENDING_MIX",[Yy]:"ENVMAP_BLENDING_ADD"};function M1(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":y1[r.combine]||"ENVMAP_BLENDING_NONE"}function E1(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function b1(r,t,i,s){const l=r.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=g1(i),p=v1(i),v=S1(i),g=M1(i),y=E1(i),M=o1(i),b=l1(c),C=l.createProgram();let S,_,D=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter($o).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter($o).join(`
`),_.length>0&&(_+=`
`)):(S=[iv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($o).join(`
`),_=[iv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+g:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Xi?"#define TONE_MAPPING":"",i.toneMapping!==Xi?fe.tonemapping_pars_fragment:"",i.toneMapping!==Xi?s1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,i1("linearToOutputTexel",i.outputColorSpace),r1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter($o).join(`
`)),h=tp(h),h=tv(h,i),h=ev(h,i),d=tp(d),d=tv(d,i),d=ev(d,i),h=nv(h),d=nv(d),i.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",i.glslVersion===f0?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===f0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const w=D+S+h,U=D+_+d,O=Q0(l,l.VERTEX_SHADER,w),z=Q0(l,l.FRAGMENT_SHADER,U);l.attachShader(C,O),l.attachShader(C,z),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function N(H){if(r.debug.checkShaderErrors){const Z=l.getProgramInfoLog(C)||"",Q=l.getShaderInfoLog(O)||"",ft=l.getShaderInfoLog(z)||"",lt=Z.trim(),I=Q.trim(),G=ft.trim();let st=!0,yt=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(st=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,C,O,z);else{const xt=$0(l,O,"vertex"),F=$0(l,z,"fragment");Ce("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+lt+`
`+xt+`
`+F)}else lt!==""?ee("WebGLProgram: Program Info Log:",lt):(I===""||G==="")&&(yt=!1);yt&&(H.diagnostics={runnable:st,programLog:lt,vertexShader:{log:I,prefix:S},fragmentShader:{log:G,prefix:_}})}l.deleteShader(O),l.deleteShader(z),X=new su(l,C),T=c1(l,C)}let X;this.getUniforms=function(){return X===void 0&&N(this),X};let T;this.getAttributes=function(){return T===void 0&&N(this),T};let L=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=l.getProgramParameter(C,$A)),L},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=t1++,this.cacheKey=t,this.usedTimes=1,this.program=C,this.vertexShader=O,this.fragmentShader=z,this}let T1=0;class A1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new R1(t),i.set(t,s)),s}}class R1{constructor(t){this.id=T1++,this.code=t,this.usedTimes=0}}function C1(r,t,i,s,l,c,h){const d=new zv,m=new A1,p=new Set,v=[],g=new Map,y=l.logarithmicDepthBuffer;let M=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(T){return p.add(T),T===0?"uv":`uv${T}`}function S(T,L,H,Z,Q){const ft=Z.fog,lt=Q.geometry,I=T.isMeshStandardMaterial?Z.environment:null,G=(T.isMeshStandardMaterial?i:t).get(T.envMap||I),st=G&&G.mapping===fu?G.image.height:null,yt=b[T.type];T.precision!==null&&(M=l.getMaxPrecision(T.precision),M!==T.precision&&ee("WebGLProgram.getParameters:",T.precision,"not supported, using",M,"instead."));const xt=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,F=xt!==void 0?xt.length:0;let at=0;lt.morphAttributes.position!==void 0&&(at=1),lt.morphAttributes.normal!==void 0&&(at=2),lt.morphAttributes.color!==void 0&&(at=3);let gt,Tt,It,it;if(yt){const be=Gi[yt];gt=be.vertexShader,Tt=be.fragmentShader}else gt=T.vertexShader,Tt=T.fragmentShader,m.update(T),It=m.getVertexShaderID(T),it=m.getFragmentShaderID(T);const ut=r.getRenderTarget(),wt=r.state.buffers.depth.getReversed(),Vt=Q.isInstancedMesh===!0,Bt=Q.isBatchedMesh===!0,me=!!T.map,Je=!!T.matcap,xe=!!G,ge=!!T.aoMap,we=!!T.lightMap,re=!!T.bumpMap,$e=!!T.normalMap,V=!!T.displacementMap,Ze=!!T.emissiveMap,Ee=!!T.metalnessMap,Oe=!!T.roughnessMap,Yt=T.anisotropy>0,P=T.clearcoat>0,E=T.dispersion>0,Y=T.iridescence>0,dt=T.sheen>0,vt=T.transmission>0,ct=Yt&&!!T.anisotropyMap,jt=P&&!!T.clearcoatMap,Rt=P&&!!T.clearcoatNormalMap,kt=P&&!!T.clearcoatRoughnessMap,te=Y&&!!T.iridescenceMap,Mt=Y&&!!T.iridescenceThicknessMap,Et=dt&&!!T.sheenColorMap,zt=dt&&!!T.sheenRoughnessMap,Ot=!!T.specularMap,Ct=!!T.specularColorMap,le=!!T.specularIntensityMap,W=vt&&!!T.transmissionMap,Ut=vt&&!!T.thicknessMap,bt=!!T.gradientMap,Pt=!!T.alphaMap,St=T.alphaTest>0,_t=!!T.alphaHash,At=!!T.extensions;let ie=Xi;T.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(ie=r.toneMapping);const ze={shaderID:yt,shaderType:T.type,shaderName:T.name,vertexShader:gt,fragmentShader:Tt,defines:T.defines,customVertexShaderID:It,customFragmentShaderID:it,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:M,batching:Bt,batchingColor:Bt&&Q._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&Q.instanceColor!==null,instancingMorph:Vt&&Q.morphTexture!==null,outputColorSpace:ut===null?r.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:Wr,alphaToCoverage:!!T.alphaToCoverage,map:me,matcap:Je,envMap:xe,envMapMode:xe&&G.mapping,envMapCubeUVHeight:st,aoMap:ge,lightMap:we,bumpMap:re,normalMap:$e,displacementMap:V,emissiveMap:Ze,normalMapObjectSpace:$e&&T.normalMapType===Ky,normalMapTangentSpace:$e&&T.normalMapType===Zy,metalnessMap:Ee,roughnessMap:Oe,anisotropy:Yt,anisotropyMap:ct,clearcoat:P,clearcoatMap:jt,clearcoatNormalMap:Rt,clearcoatRoughnessMap:kt,dispersion:E,iridescence:Y,iridescenceMap:te,iridescenceThicknessMap:Mt,sheen:dt,sheenColorMap:Et,sheenRoughnessMap:zt,specularMap:Ot,specularColorMap:Ct,specularIntensityMap:le,transmission:vt,transmissionMap:W,thicknessMap:Ut,gradientMap:bt,opaque:T.transparent===!1&&T.blending===Hr&&T.alphaToCoverage===!1,alphaMap:Pt,alphaTest:St,alphaHash:_t,combine:T.combine,mapUv:me&&C(T.map.channel),aoMapUv:ge&&C(T.aoMap.channel),lightMapUv:we&&C(T.lightMap.channel),bumpMapUv:re&&C(T.bumpMap.channel),normalMapUv:$e&&C(T.normalMap.channel),displacementMapUv:V&&C(T.displacementMap.channel),emissiveMapUv:Ze&&C(T.emissiveMap.channel),metalnessMapUv:Ee&&C(T.metalnessMap.channel),roughnessMapUv:Oe&&C(T.roughnessMap.channel),anisotropyMapUv:ct&&C(T.anisotropyMap.channel),clearcoatMapUv:jt&&C(T.clearcoatMap.channel),clearcoatNormalMapUv:Rt&&C(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:kt&&C(T.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&C(T.iridescenceMap.channel),iridescenceThicknessMapUv:Mt&&C(T.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&C(T.sheenColorMap.channel),sheenRoughnessMapUv:zt&&C(T.sheenRoughnessMap.channel),specularMapUv:Ot&&C(T.specularMap.channel),specularColorMapUv:Ct&&C(T.specularColorMap.channel),specularIntensityMapUv:le&&C(T.specularIntensityMap.channel),transmissionMapUv:W&&C(T.transmissionMap.channel),thicknessMapUv:Ut&&C(T.thicknessMap.channel),alphaMapUv:Pt&&C(T.alphaMap.channel),vertexTangents:!!lt.attributes.tangent&&($e||Yt),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!lt.attributes.uv&&(me||Pt),fog:!!ft,useFog:T.fog===!0,fogExp2:!!ft&&ft.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:y,reversedDepthBuffer:wt,skinning:Q.isSkinnedMesh===!0,morphTargets:lt.morphAttributes.position!==void 0,morphNormals:lt.morphAttributes.normal!==void 0,morphColors:lt.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:at,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&H.length>0,shadowMapType:r.shadowMap.type,toneMapping:ie,decodeVideoTexture:me&&T.map.isVideoTexture===!0&&Te.getTransfer(T.map.colorSpace)===He,decodeVideoTextureEmissive:Ze&&T.emissiveMap.isVideoTexture===!0&&Te.getTransfer(T.emissiveMap.colorSpace)===He,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===va,flipSided:T.side===Jn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:At&&T.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(At&&T.extensions.multiDraw===!0||Bt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return ze.vertexUv1s=p.has(1),ze.vertexUv2s=p.has(2),ze.vertexUv3s=p.has(3),p.clear(),ze}function _(T){const L=[];if(T.shaderID?L.push(T.shaderID):(L.push(T.customVertexShaderID),L.push(T.customFragmentShaderID)),T.defines!==void 0)for(const H in T.defines)L.push(H),L.push(T.defines[H]);return T.isRawShaderMaterial===!1&&(D(L,T),w(L,T),L.push(r.outputColorSpace)),L.push(T.customProgramCacheKey),L.join()}function D(T,L){T.push(L.precision),T.push(L.outputColorSpace),T.push(L.envMapMode),T.push(L.envMapCubeUVHeight),T.push(L.mapUv),T.push(L.alphaMapUv),T.push(L.lightMapUv),T.push(L.aoMapUv),T.push(L.bumpMapUv),T.push(L.normalMapUv),T.push(L.displacementMapUv),T.push(L.emissiveMapUv),T.push(L.metalnessMapUv),T.push(L.roughnessMapUv),T.push(L.anisotropyMapUv),T.push(L.clearcoatMapUv),T.push(L.clearcoatNormalMapUv),T.push(L.clearcoatRoughnessMapUv),T.push(L.iridescenceMapUv),T.push(L.iridescenceThicknessMapUv),T.push(L.sheenColorMapUv),T.push(L.sheenRoughnessMapUv),T.push(L.specularMapUv),T.push(L.specularColorMapUv),T.push(L.specularIntensityMapUv),T.push(L.transmissionMapUv),T.push(L.thicknessMapUv),T.push(L.combine),T.push(L.fogExp2),T.push(L.sizeAttenuation),T.push(L.morphTargetsCount),T.push(L.morphAttributeCount),T.push(L.numDirLights),T.push(L.numPointLights),T.push(L.numSpotLights),T.push(L.numSpotLightMaps),T.push(L.numHemiLights),T.push(L.numRectAreaLights),T.push(L.numDirLightShadows),T.push(L.numPointLightShadows),T.push(L.numSpotLightShadows),T.push(L.numSpotLightShadowsWithMaps),T.push(L.numLightProbes),T.push(L.shadowMapType),T.push(L.toneMapping),T.push(L.numClippingPlanes),T.push(L.numClipIntersection),T.push(L.depthPacking)}function w(T,L){d.disableAll(),L.instancing&&d.enable(0),L.instancingColor&&d.enable(1),L.instancingMorph&&d.enable(2),L.matcap&&d.enable(3),L.envMap&&d.enable(4),L.normalMapObjectSpace&&d.enable(5),L.normalMapTangentSpace&&d.enable(6),L.clearcoat&&d.enable(7),L.iridescence&&d.enable(8),L.alphaTest&&d.enable(9),L.vertexColors&&d.enable(10),L.vertexAlphas&&d.enable(11),L.vertexUv1s&&d.enable(12),L.vertexUv2s&&d.enable(13),L.vertexUv3s&&d.enable(14),L.vertexTangents&&d.enable(15),L.anisotropy&&d.enable(16),L.alphaHash&&d.enable(17),L.batching&&d.enable(18),L.dispersion&&d.enable(19),L.batchingColor&&d.enable(20),L.gradientMap&&d.enable(21),T.push(d.mask),d.disableAll(),L.fog&&d.enable(0),L.useFog&&d.enable(1),L.flatShading&&d.enable(2),L.logarithmicDepthBuffer&&d.enable(3),L.reversedDepthBuffer&&d.enable(4),L.skinning&&d.enable(5),L.morphTargets&&d.enable(6),L.morphNormals&&d.enable(7),L.morphColors&&d.enable(8),L.premultipliedAlpha&&d.enable(9),L.shadowMapEnabled&&d.enable(10),L.doubleSided&&d.enable(11),L.flipSided&&d.enable(12),L.useDepthPacking&&d.enable(13),L.dithering&&d.enable(14),L.transmission&&d.enable(15),L.sheen&&d.enable(16),L.opaque&&d.enable(17),L.pointsUvs&&d.enable(18),L.decodeVideoTexture&&d.enable(19),L.decodeVideoTextureEmissive&&d.enable(20),L.alphaToCoverage&&d.enable(21),T.push(d.mask)}function U(T){const L=b[T.type];let H;if(L){const Z=Gi[L];H=BM.clone(Z.uniforms)}else H=T.uniforms;return H}function O(T,L){let H=g.get(L);return H!==void 0?++H.usedTimes:(H=new b1(r,L,T,c),v.push(H),g.set(L,H)),H}function z(T){if(--T.usedTimes===0){const L=v.indexOf(T);v[L]=v[v.length-1],v.pop(),g.delete(T.cacheKey),T.destroy()}}function N(T){m.remove(T)}function X(){m.dispose()}return{getParameters:S,getProgramCacheKey:_,getUniforms:U,acquireProgram:O,releaseProgram:z,releaseShaderCache:N,programs:v,dispose:X}}function w1(){let r=new WeakMap;function t(h){return r.has(h)}function i(h){let d=r.get(h);return d===void 0&&(d={},r.set(h,d)),d}function s(h){r.delete(h)}function l(h,d,m){r.get(h)[d]=m}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function D1(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function av(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function sv(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function h(g,y,M,b,C,S){let _=r[t];return _===void 0?(_={id:g.id,object:g,geometry:y,material:M,groupOrder:b,renderOrder:g.renderOrder,z:C,group:S},r[t]=_):(_.id=g.id,_.object=g,_.geometry=y,_.material=M,_.groupOrder=b,_.renderOrder=g.renderOrder,_.z=C,_.group=S),t++,_}function d(g,y,M,b,C,S){const _=h(g,y,M,b,C,S);M.transmission>0?s.push(_):M.transparent===!0?l.push(_):i.push(_)}function m(g,y,M,b,C,S){const _=h(g,y,M,b,C,S);M.transmission>0?s.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function p(g,y){i.length>1&&i.sort(g||D1),s.length>1&&s.sort(y||av),l.length>1&&l.sort(y||av)}function v(){for(let g=t,y=r.length;g<y;g++){const M=r[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:m,finish:v,sort:p}}function U1(){let r=new WeakMap;function t(s,l){const c=r.get(s);let h;return c===void 0?(h=new sv,r.set(s,[h])):l>=c.length?(h=new sv,c.push(h)):h=c[l],h}function i(){r=new WeakMap}return{get:t,dispose:i}}function L1(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new K,color:new pe};break;case"SpotLight":i={position:new K,direction:new K,color:new pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new K,color:new pe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new K,skyColor:new pe,groundColor:new pe};break;case"RectAreaLight":i={color:new pe,position:new K,halfWidth:new K,halfHeight:new K};break}return r[t.id]=i,i}}}function N1(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let O1=0;function P1(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function z1(r){const t=new L1,i=N1(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new K);const l=new K,c=new nn,h=new nn;function d(p){let v=0,g=0,y=0;for(let T=0;T<9;T++)s.probe[T].set(0,0,0);let M=0,b=0,C=0,S=0,_=0,D=0,w=0,U=0,O=0,z=0,N=0;p.sort(P1);for(let T=0,L=p.length;T<L;T++){const H=p[T],Z=H.color,Q=H.intensity,ft=H.distance;let lt=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===Xr?lt=H.shadow.map.texture:lt=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)v+=Z.r*Q,g+=Z.g*Q,y+=Z.b*Q;else if(H.isLightProbe){for(let I=0;I<9;I++)s.probe[I].addScaledVector(H.sh.coefficients[I],Q);N++}else if(H.isDirectionalLight){const I=t.get(H);if(I.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const G=H.shadow,st=i.get(H);st.shadowIntensity=G.intensity,st.shadowBias=G.bias,st.shadowNormalBias=G.normalBias,st.shadowRadius=G.radius,st.shadowMapSize=G.mapSize,s.directionalShadow[M]=st,s.directionalShadowMap[M]=lt,s.directionalShadowMatrix[M]=H.shadow.matrix,D++}s.directional[M]=I,M++}else if(H.isSpotLight){const I=t.get(H);I.position.setFromMatrixPosition(H.matrixWorld),I.color.copy(Z).multiplyScalar(Q),I.distance=ft,I.coneCos=Math.cos(H.angle),I.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),I.decay=H.decay,s.spot[C]=I;const G=H.shadow;if(H.map&&(s.spotLightMap[O]=H.map,O++,G.updateMatrices(H),H.castShadow&&z++),s.spotLightMatrix[C]=G.matrix,H.castShadow){const st=i.get(H);st.shadowIntensity=G.intensity,st.shadowBias=G.bias,st.shadowNormalBias=G.normalBias,st.shadowRadius=G.radius,st.shadowMapSize=G.mapSize,s.spotShadow[C]=st,s.spotShadowMap[C]=lt,U++}C++}else if(H.isRectAreaLight){const I=t.get(H);I.color.copy(Z).multiplyScalar(Q),I.halfWidth.set(H.width*.5,0,0),I.halfHeight.set(0,H.height*.5,0),s.rectArea[S]=I,S++}else if(H.isPointLight){const I=t.get(H);if(I.color.copy(H.color).multiplyScalar(H.intensity),I.distance=H.distance,I.decay=H.decay,H.castShadow){const G=H.shadow,st=i.get(H);st.shadowIntensity=G.intensity,st.shadowBias=G.bias,st.shadowNormalBias=G.normalBias,st.shadowRadius=G.radius,st.shadowMapSize=G.mapSize,st.shadowCameraNear=G.camera.near,st.shadowCameraFar=G.camera.far,s.pointShadow[b]=st,s.pointShadowMap[b]=lt,s.pointShadowMatrix[b]=H.shadow.matrix,w++}s.point[b]=I,b++}else if(H.isHemisphereLight){const I=t.get(H);I.skyColor.copy(H.color).multiplyScalar(Q),I.groundColor.copy(H.groundColor).multiplyScalar(Q),s.hemi[_]=I,_++}}S>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Nt.LTC_FLOAT_1,s.rectAreaLTC2=Nt.LTC_FLOAT_2):(s.rectAreaLTC1=Nt.LTC_HALF_1,s.rectAreaLTC2=Nt.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=g,s.ambient[2]=y;const X=s.hash;(X.directionalLength!==M||X.pointLength!==b||X.spotLength!==C||X.rectAreaLength!==S||X.hemiLength!==_||X.numDirectionalShadows!==D||X.numPointShadows!==w||X.numSpotShadows!==U||X.numSpotMaps!==O||X.numLightProbes!==N)&&(s.directional.length=M,s.spot.length=C,s.rectArea.length=S,s.point.length=b,s.hemi.length=_,s.directionalShadow.length=D,s.directionalShadowMap.length=D,s.pointShadow.length=w,s.pointShadowMap.length=w,s.spotShadow.length=U,s.spotShadowMap.length=U,s.directionalShadowMatrix.length=D,s.pointShadowMatrix.length=w,s.spotLightMatrix.length=U+O-z,s.spotLightMap.length=O,s.numSpotLightShadowsWithMaps=z,s.numLightProbes=N,X.directionalLength=M,X.pointLength=b,X.spotLength=C,X.rectAreaLength=S,X.hemiLength=_,X.numDirectionalShadows=D,X.numPointShadows=w,X.numSpotShadows=U,X.numSpotMaps=O,X.numLightProbes=N,s.version=O1++)}function m(p,v){let g=0,y=0,M=0,b=0,C=0;const S=v.matrixWorldInverse;for(let _=0,D=p.length;_<D;_++){const w=p[_];if(w.isDirectionalLight){const U=s.directional[g];U.direction.setFromMatrixPosition(w.matrixWorld),l.setFromMatrixPosition(w.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(S),g++}else if(w.isSpotLight){const U=s.spot[M];U.position.setFromMatrixPosition(w.matrixWorld),U.position.applyMatrix4(S),U.direction.setFromMatrixPosition(w.matrixWorld),l.setFromMatrixPosition(w.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(S),M++}else if(w.isRectAreaLight){const U=s.rectArea[b];U.position.setFromMatrixPosition(w.matrixWorld),U.position.applyMatrix4(S),h.identity(),c.copy(w.matrixWorld),c.premultiply(S),h.extractRotation(c),U.halfWidth.set(w.width*.5,0,0),U.halfHeight.set(0,w.height*.5,0),U.halfWidth.applyMatrix4(h),U.halfHeight.applyMatrix4(h),b++}else if(w.isPointLight){const U=s.point[y];U.position.setFromMatrixPosition(w.matrixWorld),U.position.applyMatrix4(S),y++}else if(w.isHemisphereLight){const U=s.hemi[C];U.direction.setFromMatrixPosition(w.matrixWorld),U.direction.transformDirection(S),C++}}}return{setup:d,setupView:m,state:s}}function rv(r){const t=new z1(r),i=[],s=[];function l(v){p.camera=v,i.length=0,s.length=0}function c(v){i.push(v)}function h(v){s.push(v)}function d(){t.setup(i)}function m(v){t.setupView(i,v)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function F1(r){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let d;return h===void 0?(d=new rv(r),t.set(l,[d])):c>=h.length?(d=new rv(r),h.push(d)):d=h[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const I1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,B1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,H1=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],G1=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],ov=new nn,Qo=new K,ed=new K;function V1(r,t,i){let s=new Wv;const l=new ne,c=new ne,h=new rn,d=new $M,m=new tE,p={},v=i.maxTextureSize,g={[ls]:Jn,[Jn]:ls,[va]:va},y=new Oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:I1,fragmentShader:B1}),M=y.clone();M.defines.HORIZONTAL_PASS=1;const b=new ci;b.setAttribute("position",new Yi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Ta(b,y),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tu;let _=this.type;this.render=function(z,N,X){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||z.length===0)return;z.type===Ay&&(ee("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),z.type=tu);const T=r.getRenderTarget(),L=r.getActiveCubeFace(),H=r.getActiveMipmapLevel(),Z=r.state;Z.setBlending(Sa),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const Q=_!==this.type;Q&&N.traverse(function(ft){ft.material&&(Array.isArray(ft.material)?ft.material.forEach(lt=>lt.needsUpdate=!0):ft.material.needsUpdate=!0)});for(let ft=0,lt=z.length;ft<lt;ft++){const I=z[ft],G=I.shadow;if(G===void 0){ee("WebGLShadowMap:",I,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;l.copy(G.mapSize);const st=G.getFrameExtents();if(l.multiply(st),c.copy(G.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/st.x),l.x=c.x*st.x,G.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/st.y),l.y=c.y*st.y,G.mapSize.y=c.y)),G.map===null||Q===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Jo){if(I.isPointLight){ee("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Wi(l.x,l.y,{format:Xr,type:Ma,minFilter:yn,magFilter:yn,generateMipmaps:!1}),G.map.texture.name=I.name+".shadowMap",G.map.depthTexture=new ll(l.x,l.y,Vi),G.map.depthTexture.name=I.name+".shadowMapDepth",G.map.depthTexture.format=Ea,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Ln,G.map.depthTexture.magFilter=Ln}else{I.isPointLight?(G.map=new kv(l.x),G.map.depthTexture=new QM(l.x,qi)):(G.map=new Wi(l.x,l.y),G.map.depthTexture=new ll(l.x,l.y,qi)),G.map.depthTexture.name=I.name+".shadowMap",G.map.depthTexture.format=Ea;const xt=r.state.buffers.depth.getReversed();this.type===tu?(G.map.depthTexture.compareFunction=xt?up:cp,G.map.depthTexture.minFilter=yn,G.map.depthTexture.magFilter=yn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Ln,G.map.depthTexture.magFilter=Ln)}G.camera.updateProjectionMatrix()}const yt=G.map.isWebGLCubeRenderTarget?6:1;for(let xt=0;xt<yt;xt++){if(G.map.isWebGLCubeRenderTarget)r.setRenderTarget(G.map,xt),r.clear();else{xt===0&&(r.setRenderTarget(G.map),r.clear());const F=G.getViewport(xt);h.set(c.x*F.x,c.y*F.y,c.x*F.z,c.y*F.w),Z.viewport(h)}if(I.isPointLight){const F=G.camera,at=G.matrix,gt=I.distance||F.far;gt!==F.far&&(F.far=gt,F.updateProjectionMatrix()),Qo.setFromMatrixPosition(I.matrixWorld),F.position.copy(Qo),ed.copy(F.position),ed.add(H1[xt]),F.up.copy(G1[xt]),F.lookAt(ed),F.updateMatrixWorld(),at.makeTranslation(-Qo.x,-Qo.y,-Qo.z),ov.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),G._frustum.setFromProjectionMatrix(ov,F.coordinateSystem,F.reversedDepth)}else G.updateMatrices(I);s=G.getFrustum(),U(N,X,G.camera,I,this.type)}G.isPointLightShadow!==!0&&this.type===Jo&&D(G,X),G.needsUpdate=!1}_=this.type,S.needsUpdate=!1,r.setRenderTarget(T,L,H)};function D(z,N){const X=t.update(C);y.defines.VSM_SAMPLES!==z.blurSamples&&(y.defines.VSM_SAMPLES=z.blurSamples,M.defines.VSM_SAMPLES=z.blurSamples,y.needsUpdate=!0,M.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new Wi(l.x,l.y,{format:Xr,type:Ma})),y.uniforms.shadow_pass.value=z.map.depthTexture,y.uniforms.resolution.value=z.mapSize,y.uniforms.radius.value=z.radius,r.setRenderTarget(z.mapPass),r.clear(),r.renderBufferDirect(N,null,X,y,C,null),M.uniforms.shadow_pass.value=z.mapPass.texture,M.uniforms.resolution.value=z.mapSize,M.uniforms.radius.value=z.radius,r.setRenderTarget(z.map),r.clear(),r.renderBufferDirect(N,null,X,M,C,null)}function w(z,N,X,T){let L=null;const H=X.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(H!==void 0)L=H;else if(L=X.isPointLight===!0?m:d,r.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const Z=L.uuid,Q=N.uuid;let ft=p[Z];ft===void 0&&(ft={},p[Z]=ft);let lt=ft[Q];lt===void 0&&(lt=L.clone(),ft[Q]=lt,N.addEventListener("dispose",O)),L=lt}if(L.visible=N.visible,L.wireframe=N.wireframe,T===Jo?L.side=N.shadowSide!==null?N.shadowSide:N.side:L.side=N.shadowSide!==null?N.shadowSide:g[N.side],L.alphaMap=N.alphaMap,L.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,L.map=N.map,L.clipShadows=N.clipShadows,L.clippingPlanes=N.clippingPlanes,L.clipIntersection=N.clipIntersection,L.displacementMap=N.displacementMap,L.displacementScale=N.displacementScale,L.displacementBias=N.displacementBias,L.wireframeLinewidth=N.wireframeLinewidth,L.linewidth=N.linewidth,X.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const Z=r.properties.get(L);Z.light=X}return L}function U(z,N,X,T,L){if(z.visible===!1)return;if(z.layers.test(N.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&L===Jo)&&(!z.frustumCulled||s.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,z.matrixWorld);const Q=t.update(z),ft=z.material;if(Array.isArray(ft)){const lt=Q.groups;for(let I=0,G=lt.length;I<G;I++){const st=lt[I],yt=ft[st.materialIndex];if(yt&&yt.visible){const xt=w(z,yt,T,L);z.onBeforeShadow(r,z,N,X,Q,xt,st),r.renderBufferDirect(X,null,Q,xt,z,st),z.onAfterShadow(r,z,N,X,Q,xt,st)}}}else if(ft.visible){const lt=w(z,ft,T,L);z.onBeforeShadow(r,z,N,X,Q,lt,null),r.renderBufferDirect(X,null,Q,lt,z,null),z.onAfterShadow(r,z,N,X,Q,lt,null)}}const Z=z.children;for(let Q=0,ft=Z.length;Q<ft;Q++)U(Z[Q],N,X,T,L)}function O(z){z.target.removeEventListener("dispose",O);for(const X in p){const T=p[X],L=z.target.uuid;L in T&&(T[L].dispose(),delete T[L])}}}const k1={[ld]:cd,[ud]:dd,[fd]:pd,[Vr]:hd,[cd]:ld,[dd]:ud,[pd]:fd,[hd]:Vr};function X1(r,t){function i(){let W=!1;const Ut=new rn;let bt=null;const Pt=new rn(0,0,0,0);return{setMask:function(St){bt!==St&&!W&&(r.colorMask(St,St,St,St),bt=St)},setLocked:function(St){W=St},setClear:function(St,_t,At,ie,ze){ze===!0&&(St*=ie,_t*=ie,At*=ie),Ut.set(St,_t,At,ie),Pt.equals(Ut)===!1&&(r.clearColor(St,_t,At,ie),Pt.copy(Ut))},reset:function(){W=!1,bt=null,Pt.set(-1,0,0,0)}}}function s(){let W=!1,Ut=!1,bt=null,Pt=null,St=null;return{setReversed:function(_t){if(Ut!==_t){const At=t.get("EXT_clip_control");_t?At.clipControlEXT(At.LOWER_LEFT_EXT,At.ZERO_TO_ONE_EXT):At.clipControlEXT(At.LOWER_LEFT_EXT,At.NEGATIVE_ONE_TO_ONE_EXT),Ut=_t;const ie=St;St=null,this.setClear(ie)}},getReversed:function(){return Ut},setTest:function(_t){_t?ut(r.DEPTH_TEST):wt(r.DEPTH_TEST)},setMask:function(_t){bt!==_t&&!W&&(r.depthMask(_t),bt=_t)},setFunc:function(_t){if(Ut&&(_t=k1[_t]),Pt!==_t){switch(_t){case ld:r.depthFunc(r.NEVER);break;case cd:r.depthFunc(r.ALWAYS);break;case ud:r.depthFunc(r.LESS);break;case Vr:r.depthFunc(r.LEQUAL);break;case fd:r.depthFunc(r.EQUAL);break;case hd:r.depthFunc(r.GEQUAL);break;case dd:r.depthFunc(r.GREATER);break;case pd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Pt=_t}},setLocked:function(_t){W=_t},setClear:function(_t){St!==_t&&(Ut&&(_t=1-_t),r.clearDepth(_t),St=_t)},reset:function(){W=!1,bt=null,Pt=null,St=null,Ut=!1}}}function l(){let W=!1,Ut=null,bt=null,Pt=null,St=null,_t=null,At=null,ie=null,ze=null;return{setTest:function(be){W||(be?ut(r.STENCIL_TEST):wt(r.STENCIL_TEST))},setMask:function(be){Ut!==be&&!W&&(r.stencilMask(be),Ut=be)},setFunc:function(be,Nn,Ei){(bt!==be||Pt!==Nn||St!==Ei)&&(r.stencilFunc(be,Nn,Ei),bt=be,Pt=Nn,St=Ei)},setOp:function(be,Nn,Ei){(_t!==be||At!==Nn||ie!==Ei)&&(r.stencilOp(be,Nn,Ei),_t=be,At=Nn,ie=Ei)},setLocked:function(be){W=be},setClear:function(be){ze!==be&&(r.clearStencil(be),ze=be)},reset:function(){W=!1,Ut=null,bt=null,Pt=null,St=null,_t=null,At=null,ie=null,ze=null}}}const c=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let v={},g={},y=new WeakMap,M=[],b=null,C=!1,S=null,_=null,D=null,w=null,U=null,O=null,z=null,N=new pe(0,0,0),X=0,T=!1,L=null,H=null,Z=null,Q=null,ft=null;const lt=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,G=0;const st=r.getParameter(r.VERSION);st.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(st)[1]),I=G>=1):st.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(st)[1]),I=G>=2);let yt=null,xt={};const F=r.getParameter(r.SCISSOR_BOX),at=r.getParameter(r.VIEWPORT),gt=new rn().fromArray(F),Tt=new rn().fromArray(at);function It(W,Ut,bt,Pt){const St=new Uint8Array(4),_t=r.createTexture();r.bindTexture(W,_t),r.texParameteri(W,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(W,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let At=0;At<bt;At++)W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?r.texImage3D(Ut,0,r.RGBA,1,1,Pt,0,r.RGBA,r.UNSIGNED_BYTE,St):r.texImage2D(Ut+At,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,St);return _t}const it={};it[r.TEXTURE_2D]=It(r.TEXTURE_2D,r.TEXTURE_2D,1),it[r.TEXTURE_CUBE_MAP]=It(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[r.TEXTURE_2D_ARRAY]=It(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),it[r.TEXTURE_3D]=It(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),ut(r.DEPTH_TEST),h.setFunc(Vr),re(!1),$e(s0),ut(r.CULL_FACE),ge(Sa);function ut(W){v[W]!==!0&&(r.enable(W),v[W]=!0)}function wt(W){v[W]!==!1&&(r.disable(W),v[W]=!1)}function Vt(W,Ut){return g[W]!==Ut?(r.bindFramebuffer(W,Ut),g[W]=Ut,W===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Ut),W===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Ut),!0):!1}function Bt(W,Ut){let bt=M,Pt=!1;if(W){bt=y.get(Ut),bt===void 0&&(bt=[],y.set(Ut,bt));const St=W.textures;if(bt.length!==St.length||bt[0]!==r.COLOR_ATTACHMENT0){for(let _t=0,At=St.length;_t<At;_t++)bt[_t]=r.COLOR_ATTACHMENT0+_t;bt.length=St.length,Pt=!0}}else bt[0]!==r.BACK&&(bt[0]=r.BACK,Pt=!0);Pt&&r.drawBuffers(bt)}function me(W){return b!==W?(r.useProgram(W),b=W,!0):!1}const Je={[Os]:r.FUNC_ADD,[Cy]:r.FUNC_SUBTRACT,[wy]:r.FUNC_REVERSE_SUBTRACT};Je[Dy]=r.MIN,Je[Uy]=r.MAX;const xe={[Ly]:r.ZERO,[Ny]:r.ONE,[Oy]:r.SRC_COLOR,[rd]:r.SRC_ALPHA,[Hy]:r.SRC_ALPHA_SATURATE,[Iy]:r.DST_COLOR,[zy]:r.DST_ALPHA,[Py]:r.ONE_MINUS_SRC_COLOR,[od]:r.ONE_MINUS_SRC_ALPHA,[By]:r.ONE_MINUS_DST_COLOR,[Fy]:r.ONE_MINUS_DST_ALPHA,[Gy]:r.CONSTANT_COLOR,[Vy]:r.ONE_MINUS_CONSTANT_COLOR,[ky]:r.CONSTANT_ALPHA,[Xy]:r.ONE_MINUS_CONSTANT_ALPHA};function ge(W,Ut,bt,Pt,St,_t,At,ie,ze,be){if(W===Sa){C===!0&&(wt(r.BLEND),C=!1);return}if(C===!1&&(ut(r.BLEND),C=!0),W!==Ry){if(W!==S||be!==T){if((_!==Os||U!==Os)&&(r.blendEquation(r.FUNC_ADD),_=Os,U=Os),be)switch(W){case Hr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case r0:r.blendFunc(r.ONE,r.ONE);break;case o0:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case l0:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ce("WebGLState: Invalid blending: ",W);break}else switch(W){case Hr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case r0:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case o0:Ce("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case l0:Ce("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ce("WebGLState: Invalid blending: ",W);break}D=null,w=null,O=null,z=null,N.set(0,0,0),X=0,S=W,T=be}return}St=St||Ut,_t=_t||bt,At=At||Pt,(Ut!==_||St!==U)&&(r.blendEquationSeparate(Je[Ut],Je[St]),_=Ut,U=St),(bt!==D||Pt!==w||_t!==O||At!==z)&&(r.blendFuncSeparate(xe[bt],xe[Pt],xe[_t],xe[At]),D=bt,w=Pt,O=_t,z=At),(ie.equals(N)===!1||ze!==X)&&(r.blendColor(ie.r,ie.g,ie.b,ze),N.copy(ie),X=ze),S=W,T=!1}function we(W,Ut){W.side===va?wt(r.CULL_FACE):ut(r.CULL_FACE);let bt=W.side===Jn;Ut&&(bt=!bt),re(bt),W.blending===Hr&&W.transparent===!1?ge(Sa):ge(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),h.setFunc(W.depthFunc),h.setTest(W.depthTest),h.setMask(W.depthWrite),c.setMask(W.colorWrite);const Pt=W.stencilWrite;d.setTest(Pt),Pt&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Ze(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ut(r.SAMPLE_ALPHA_TO_COVERAGE):wt(r.SAMPLE_ALPHA_TO_COVERAGE)}function re(W){L!==W&&(W?r.frontFace(r.CW):r.frontFace(r.CCW),L=W)}function $e(W){W!==by?(ut(r.CULL_FACE),W!==H&&(W===s0?r.cullFace(r.BACK):W===Ty?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):wt(r.CULL_FACE),H=W}function V(W){W!==Z&&(I&&r.lineWidth(W),Z=W)}function Ze(W,Ut,bt){W?(ut(r.POLYGON_OFFSET_FILL),(Q!==Ut||ft!==bt)&&(r.polygonOffset(Ut,bt),Q=Ut,ft=bt)):wt(r.POLYGON_OFFSET_FILL)}function Ee(W){W?ut(r.SCISSOR_TEST):wt(r.SCISSOR_TEST)}function Oe(W){W===void 0&&(W=r.TEXTURE0+lt-1),yt!==W&&(r.activeTexture(W),yt=W)}function Yt(W,Ut,bt){bt===void 0&&(yt===null?bt=r.TEXTURE0+lt-1:bt=yt);let Pt=xt[bt];Pt===void 0&&(Pt={type:void 0,texture:void 0},xt[bt]=Pt),(Pt.type!==W||Pt.texture!==Ut)&&(yt!==bt&&(r.activeTexture(bt),yt=bt),r.bindTexture(W,Ut||it[W]),Pt.type=W,Pt.texture=Ut)}function P(){const W=xt[yt];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function E(){try{r.compressedTexImage2D(...arguments)}catch(W){Ce("WebGLState:",W)}}function Y(){try{r.compressedTexImage3D(...arguments)}catch(W){Ce("WebGLState:",W)}}function dt(){try{r.texSubImage2D(...arguments)}catch(W){Ce("WebGLState:",W)}}function vt(){try{r.texSubImage3D(...arguments)}catch(W){Ce("WebGLState:",W)}}function ct(){try{r.compressedTexSubImage2D(...arguments)}catch(W){Ce("WebGLState:",W)}}function jt(){try{r.compressedTexSubImage3D(...arguments)}catch(W){Ce("WebGLState:",W)}}function Rt(){try{r.texStorage2D(...arguments)}catch(W){Ce("WebGLState:",W)}}function kt(){try{r.texStorage3D(...arguments)}catch(W){Ce("WebGLState:",W)}}function te(){try{r.texImage2D(...arguments)}catch(W){Ce("WebGLState:",W)}}function Mt(){try{r.texImage3D(...arguments)}catch(W){Ce("WebGLState:",W)}}function Et(W){gt.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),gt.copy(W))}function zt(W){Tt.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),Tt.copy(W))}function Ot(W,Ut){let bt=p.get(Ut);bt===void 0&&(bt=new WeakMap,p.set(Ut,bt));let Pt=bt.get(W);Pt===void 0&&(Pt=r.getUniformBlockIndex(Ut,W.name),bt.set(W,Pt))}function Ct(W,Ut){const Pt=p.get(Ut).get(W);m.get(Ut)!==Pt&&(r.uniformBlockBinding(Ut,Pt,W.__bindingPointIndex),m.set(Ut,Pt))}function le(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),h.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),v={},yt=null,xt={},g={},y=new WeakMap,M=[],b=null,C=!1,S=null,_=null,D=null,w=null,U=null,O=null,z=null,N=new pe(0,0,0),X=0,T=!1,L=null,H=null,Z=null,Q=null,ft=null,gt.set(0,0,r.canvas.width,r.canvas.height),Tt.set(0,0,r.canvas.width,r.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:ut,disable:wt,bindFramebuffer:Vt,drawBuffers:Bt,useProgram:me,setBlending:ge,setMaterial:we,setFlipSided:re,setCullFace:$e,setLineWidth:V,setPolygonOffset:Ze,setScissorTest:Ee,activeTexture:Oe,bindTexture:Yt,unbindTexture:P,compressedTexImage2D:E,compressedTexImage3D:Y,texImage2D:te,texImage3D:Mt,updateUBOMapping:Ot,uniformBlockBinding:Ct,texStorage2D:Rt,texStorage3D:kt,texSubImage2D:dt,texSubImage3D:vt,compressedTexSubImage2D:ct,compressedTexSubImage3D:jt,scissor:Et,viewport:zt,reset:le}}function W1(r,t,i,s,l,c,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ne,v=new WeakMap;let g;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(P,E){return M?new OffscreenCanvas(P,E):sl("canvas")}function C(P,E,Y){let dt=1;const vt=Yt(P);if((vt.width>Y||vt.height>Y)&&(dt=Y/Math.max(vt.width,vt.height)),dt<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ct=Math.floor(dt*vt.width),jt=Math.floor(dt*vt.height);g===void 0&&(g=b(ct,jt));const Rt=E?b(ct,jt):g;return Rt.width=ct,Rt.height=jt,Rt.getContext("2d").drawImage(P,0,0,ct,jt),ee("WebGLRenderer: Texture has been resized from ("+vt.width+"x"+vt.height+") to ("+ct+"x"+jt+")."),Rt}else return"data"in P&&ee("WebGLRenderer: Image in DataTexture is too big ("+vt.width+"x"+vt.height+")."),P;return P}function S(P){return P.generateMipmaps}function _(P){r.generateMipmap(P)}function D(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function w(P,E,Y,dt,vt=!1){if(P!==null){if(r[P]!==void 0)return r[P];ee("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ct=E;if(E===r.RED&&(Y===r.FLOAT&&(ct=r.R32F),Y===r.HALF_FLOAT&&(ct=r.R16F),Y===r.UNSIGNED_BYTE&&(ct=r.R8)),E===r.RED_INTEGER&&(Y===r.UNSIGNED_BYTE&&(ct=r.R8UI),Y===r.UNSIGNED_SHORT&&(ct=r.R16UI),Y===r.UNSIGNED_INT&&(ct=r.R32UI),Y===r.BYTE&&(ct=r.R8I),Y===r.SHORT&&(ct=r.R16I),Y===r.INT&&(ct=r.R32I)),E===r.RG&&(Y===r.FLOAT&&(ct=r.RG32F),Y===r.HALF_FLOAT&&(ct=r.RG16F),Y===r.UNSIGNED_BYTE&&(ct=r.RG8)),E===r.RG_INTEGER&&(Y===r.UNSIGNED_BYTE&&(ct=r.RG8UI),Y===r.UNSIGNED_SHORT&&(ct=r.RG16UI),Y===r.UNSIGNED_INT&&(ct=r.RG32UI),Y===r.BYTE&&(ct=r.RG8I),Y===r.SHORT&&(ct=r.RG16I),Y===r.INT&&(ct=r.RG32I)),E===r.RGB_INTEGER&&(Y===r.UNSIGNED_BYTE&&(ct=r.RGB8UI),Y===r.UNSIGNED_SHORT&&(ct=r.RGB16UI),Y===r.UNSIGNED_INT&&(ct=r.RGB32UI),Y===r.BYTE&&(ct=r.RGB8I),Y===r.SHORT&&(ct=r.RGB16I),Y===r.INT&&(ct=r.RGB32I)),E===r.RGBA_INTEGER&&(Y===r.UNSIGNED_BYTE&&(ct=r.RGBA8UI),Y===r.UNSIGNED_SHORT&&(ct=r.RGBA16UI),Y===r.UNSIGNED_INT&&(ct=r.RGBA32UI),Y===r.BYTE&&(ct=r.RGBA8I),Y===r.SHORT&&(ct=r.RGBA16I),Y===r.INT&&(ct=r.RGBA32I)),E===r.RGB&&(Y===r.UNSIGNED_INT_5_9_9_9_REV&&(ct=r.RGB9_E5),Y===r.UNSIGNED_INT_10F_11F_11F_REV&&(ct=r.R11F_G11F_B10F)),E===r.RGBA){const jt=vt?ou:Te.getTransfer(dt);Y===r.FLOAT&&(ct=r.RGBA32F),Y===r.HALF_FLOAT&&(ct=r.RGBA16F),Y===r.UNSIGNED_BYTE&&(ct=jt===He?r.SRGB8_ALPHA8:r.RGBA8),Y===r.UNSIGNED_SHORT_4_4_4_4&&(ct=r.RGBA4),Y===r.UNSIGNED_SHORT_5_5_5_1&&(ct=r.RGB5_A1)}return(ct===r.R16F||ct===r.R32F||ct===r.RG16F||ct===r.RG32F||ct===r.RGBA16F||ct===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ct}function U(P,E){let Y;return P?E===null||E===qi||E===al?Y=r.DEPTH24_STENCIL8:E===Vi?Y=r.DEPTH32F_STENCIL8:E===il&&(Y=r.DEPTH24_STENCIL8,ee("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===qi||E===al?Y=r.DEPTH_COMPONENT24:E===Vi?Y=r.DEPTH_COMPONENT32F:E===il&&(Y=r.DEPTH_COMPONENT16),Y}function O(P,E){return S(P)===!0||P.isFramebufferTexture&&P.minFilter!==Ln&&P.minFilter!==yn?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function z(P){const E=P.target;E.removeEventListener("dispose",z),X(E),E.isVideoTexture&&v.delete(E)}function N(P){const E=P.target;E.removeEventListener("dispose",N),L(E)}function X(P){const E=s.get(P);if(E.__webglInit===void 0)return;const Y=P.source,dt=y.get(Y);if(dt){const vt=dt[E.__cacheKey];vt.usedTimes--,vt.usedTimes===0&&T(P),Object.keys(dt).length===0&&y.delete(Y)}s.remove(P)}function T(P){const E=s.get(P);r.deleteTexture(E.__webglTexture);const Y=P.source,dt=y.get(Y);delete dt[E.__cacheKey],h.memory.textures--}function L(P){const E=s.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),s.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(E.__webglFramebuffer[dt]))for(let vt=0;vt<E.__webglFramebuffer[dt].length;vt++)r.deleteFramebuffer(E.__webglFramebuffer[dt][vt]);else r.deleteFramebuffer(E.__webglFramebuffer[dt]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[dt])}else{if(Array.isArray(E.__webglFramebuffer))for(let dt=0;dt<E.__webglFramebuffer.length;dt++)r.deleteFramebuffer(E.__webglFramebuffer[dt]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let dt=0;dt<E.__webglColorRenderbuffer.length;dt++)E.__webglColorRenderbuffer[dt]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[dt]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Y=P.textures;for(let dt=0,vt=Y.length;dt<vt;dt++){const ct=s.get(Y[dt]);ct.__webglTexture&&(r.deleteTexture(ct.__webglTexture),h.memory.textures--),s.remove(Y[dt])}s.remove(P)}let H=0;function Z(){H=0}function Q(){const P=H;return P>=l.maxTextures&&ee("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l.maxTextures),H+=1,P}function ft(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function lt(P,E){const Y=s.get(P);if(P.isVideoTexture&&Ee(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&Y.__version!==P.version){const dt=P.image;if(dt===null)ee("WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)ee("WebGLRenderer: Texture marked for update but image is incomplete");else{it(Y,P,E);return}}else P.isExternalTexture&&(Y.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,Y.__webglTexture,r.TEXTURE0+E)}function I(P,E){const Y=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&Y.__version!==P.version){it(Y,P,E);return}else P.isExternalTexture&&(Y.__webglTexture=P.sourceTexture?P.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,Y.__webglTexture,r.TEXTURE0+E)}function G(P,E){const Y=s.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&Y.__version!==P.version){it(Y,P,E);return}i.bindTexture(r.TEXTURE_3D,Y.__webglTexture,r.TEXTURE0+E)}function st(P,E){const Y=s.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&Y.__version!==P.version){ut(Y,P,E);return}i.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture,r.TEXTURE0+E)}const yt={[_d]:r.REPEAT,[xa]:r.CLAMP_TO_EDGE,[vd]:r.MIRRORED_REPEAT},xt={[Ln]:r.NEAREST,[qy]:r.NEAREST_MIPMAP_NEAREST,[bc]:r.NEAREST_MIPMAP_LINEAR,[yn]:r.LINEAR,[Ah]:r.LINEAR_MIPMAP_NEAREST,[zs]:r.LINEAR_MIPMAP_LINEAR},F={[Qy]:r.NEVER,[nM]:r.ALWAYS,[Jy]:r.LESS,[cp]:r.LEQUAL,[$y]:r.EQUAL,[up]:r.GEQUAL,[tM]:r.GREATER,[eM]:r.NOTEQUAL};function at(P,E){if(E.type===Vi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===yn||E.magFilter===Ah||E.magFilter===bc||E.magFilter===zs||E.minFilter===yn||E.minFilter===Ah||E.minFilter===bc||E.minFilter===zs)&&ee("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,yt[E.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,yt[E.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,yt[E.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,xt[E.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,xt[E.minFilter]),E.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,F[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Ln||E.minFilter!==bc&&E.minFilter!==zs||E.type===Vi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const Y=t.get("EXT_texture_filter_anisotropic");r.texParameterf(P,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function gt(P,E){let Y=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",z));const dt=E.source;let vt=y.get(dt);vt===void 0&&(vt={},y.set(dt,vt));const ct=ft(E);if(ct!==P.__cacheKey){vt[ct]===void 0&&(vt[ct]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,Y=!0),vt[ct].usedTimes++;const jt=vt[P.__cacheKey];jt!==void 0&&(vt[P.__cacheKey].usedTimes--,jt.usedTimes===0&&T(E)),P.__cacheKey=ct,P.__webglTexture=vt[ct].texture}return Y}function Tt(P,E,Y){return Math.floor(Math.floor(P/Y)/E)}function It(P,E,Y,dt){const ct=P.updateRanges;if(ct.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,Y,dt,E.data);else{ct.sort((Mt,Et)=>Mt.start-Et.start);let jt=0;for(let Mt=1;Mt<ct.length;Mt++){const Et=ct[jt],zt=ct[Mt],Ot=Et.start+Et.count,Ct=Tt(zt.start,E.width,4),le=Tt(Et.start,E.width,4);zt.start<=Ot+1&&Ct===le&&Tt(zt.start+zt.count-1,E.width,4)===Ct?Et.count=Math.max(Et.count,zt.start+zt.count-Et.start):(++jt,ct[jt]=zt)}ct.length=jt+1;const Rt=r.getParameter(r.UNPACK_ROW_LENGTH),kt=r.getParameter(r.UNPACK_SKIP_PIXELS),te=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let Mt=0,Et=ct.length;Mt<Et;Mt++){const zt=ct[Mt],Ot=Math.floor(zt.start/4),Ct=Math.ceil(zt.count/4),le=Ot%E.width,W=Math.floor(Ot/E.width),Ut=Ct,bt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,le),r.pixelStorei(r.UNPACK_SKIP_ROWS,W),i.texSubImage2D(r.TEXTURE_2D,0,le,W,Ut,bt,Y,dt,E.data)}P.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Rt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,kt),r.pixelStorei(r.UNPACK_SKIP_ROWS,te)}}function it(P,E,Y){let dt=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(dt=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(dt=r.TEXTURE_3D);const vt=gt(P,E),ct=E.source;i.bindTexture(dt,P.__webglTexture,r.TEXTURE0+Y);const jt=s.get(ct);if(ct.version!==jt.__version||vt===!0){i.activeTexture(r.TEXTURE0+Y);const Rt=Te.getPrimaries(Te.workingColorSpace),kt=E.colorSpace===rs?null:Te.getPrimaries(E.colorSpace),te=E.colorSpace===rs||Rt===kt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let Mt=C(E.image,!1,l.maxTextureSize);Mt=Oe(E,Mt);const Et=c.convert(E.format,E.colorSpace),zt=c.convert(E.type);let Ot=w(E.internalFormat,Et,zt,E.colorSpace,E.isVideoTexture);at(dt,E);let Ct;const le=E.mipmaps,W=E.isVideoTexture!==!0,Ut=jt.__version===void 0||vt===!0,bt=ct.dataReady,Pt=O(E,Mt);if(E.isDepthTexture)Ot=U(E.format===Fs,E.type),Ut&&(W?i.texStorage2D(r.TEXTURE_2D,1,Ot,Mt.width,Mt.height):i.texImage2D(r.TEXTURE_2D,0,Ot,Mt.width,Mt.height,0,Et,zt,null));else if(E.isDataTexture)if(le.length>0){W&&Ut&&i.texStorage2D(r.TEXTURE_2D,Pt,Ot,le[0].width,le[0].height);for(let St=0,_t=le.length;St<_t;St++)Ct=le[St],W?bt&&i.texSubImage2D(r.TEXTURE_2D,St,0,0,Ct.width,Ct.height,Et,zt,Ct.data):i.texImage2D(r.TEXTURE_2D,St,Ot,Ct.width,Ct.height,0,Et,zt,Ct.data);E.generateMipmaps=!1}else W?(Ut&&i.texStorage2D(r.TEXTURE_2D,Pt,Ot,Mt.width,Mt.height),bt&&It(E,Mt,Et,zt)):i.texImage2D(r.TEXTURE_2D,0,Ot,Mt.width,Mt.height,0,Et,zt,Mt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){W&&Ut&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Pt,Ot,le[0].width,le[0].height,Mt.depth);for(let St=0,_t=le.length;St<_t;St++)if(Ct=le[St],E.format!==Ni)if(Et!==null)if(W){if(bt)if(E.layerUpdates.size>0){const At=I0(Ct.width,Ct.height,E.format,E.type);for(const ie of E.layerUpdates){const ze=Ct.data.subarray(ie*At/Ct.data.BYTES_PER_ELEMENT,(ie+1)*At/Ct.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,St,0,0,ie,Ct.width,Ct.height,1,Et,ze)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,St,0,0,0,Ct.width,Ct.height,Mt.depth,Et,Ct.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,St,Ot,Ct.width,Ct.height,Mt.depth,0,Ct.data,0,0);else ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?bt&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,St,0,0,0,Ct.width,Ct.height,Mt.depth,Et,zt,Ct.data):i.texImage3D(r.TEXTURE_2D_ARRAY,St,Ot,Ct.width,Ct.height,Mt.depth,0,Et,zt,Ct.data)}else{W&&Ut&&i.texStorage2D(r.TEXTURE_2D,Pt,Ot,le[0].width,le[0].height);for(let St=0,_t=le.length;St<_t;St++)Ct=le[St],E.format!==Ni?Et!==null?W?bt&&i.compressedTexSubImage2D(r.TEXTURE_2D,St,0,0,Ct.width,Ct.height,Et,Ct.data):i.compressedTexImage2D(r.TEXTURE_2D,St,Ot,Ct.width,Ct.height,0,Ct.data):ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?bt&&i.texSubImage2D(r.TEXTURE_2D,St,0,0,Ct.width,Ct.height,Et,zt,Ct.data):i.texImage2D(r.TEXTURE_2D,St,Ot,Ct.width,Ct.height,0,Et,zt,Ct.data)}else if(E.isDataArrayTexture)if(W){if(Ut&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Pt,Ot,Mt.width,Mt.height,Mt.depth),bt)if(E.layerUpdates.size>0){const St=I0(Mt.width,Mt.height,E.format,E.type);for(const _t of E.layerUpdates){const At=Mt.data.subarray(_t*St/Mt.data.BYTES_PER_ELEMENT,(_t+1)*St/Mt.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,_t,Mt.width,Mt.height,1,Et,zt,At)}E.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,Et,zt,Mt.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Ot,Mt.width,Mt.height,Mt.depth,0,Et,zt,Mt.data);else if(E.isData3DTexture)W?(Ut&&i.texStorage3D(r.TEXTURE_3D,Pt,Ot,Mt.width,Mt.height,Mt.depth),bt&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,Et,zt,Mt.data)):i.texImage3D(r.TEXTURE_3D,0,Ot,Mt.width,Mt.height,Mt.depth,0,Et,zt,Mt.data);else if(E.isFramebufferTexture){if(Ut)if(W)i.texStorage2D(r.TEXTURE_2D,Pt,Ot,Mt.width,Mt.height);else{let St=Mt.width,_t=Mt.height;for(let At=0;At<Pt;At++)i.texImage2D(r.TEXTURE_2D,At,Ot,St,_t,0,Et,zt,null),St>>=1,_t>>=1}}else if(le.length>0){if(W&&Ut){const St=Yt(le[0]);i.texStorage2D(r.TEXTURE_2D,Pt,Ot,St.width,St.height)}for(let St=0,_t=le.length;St<_t;St++)Ct=le[St],W?bt&&i.texSubImage2D(r.TEXTURE_2D,St,0,0,Et,zt,Ct):i.texImage2D(r.TEXTURE_2D,St,Ot,Et,zt,Ct);E.generateMipmaps=!1}else if(W){if(Ut){const St=Yt(Mt);i.texStorage2D(r.TEXTURE_2D,Pt,Ot,St.width,St.height)}bt&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Et,zt,Mt)}else i.texImage2D(r.TEXTURE_2D,0,Ot,Et,zt,Mt);S(E)&&_(dt),jt.__version=ct.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function ut(P,E,Y){if(E.image.length!==6)return;const dt=gt(P,E),vt=E.source;i.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+Y);const ct=s.get(vt);if(vt.version!==ct.__version||dt===!0){i.activeTexture(r.TEXTURE0+Y);const jt=Te.getPrimaries(Te.workingColorSpace),Rt=E.colorSpace===rs?null:Te.getPrimaries(E.colorSpace),kt=E.colorSpace===rs||jt===Rt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);const te=E.isCompressedTexture||E.image[0].isCompressedTexture,Mt=E.image[0]&&E.image[0].isDataTexture,Et=[];for(let _t=0;_t<6;_t++)!te&&!Mt?Et[_t]=C(E.image[_t],!0,l.maxCubemapSize):Et[_t]=Mt?E.image[_t].image:E.image[_t],Et[_t]=Oe(E,Et[_t]);const zt=Et[0],Ot=c.convert(E.format,E.colorSpace),Ct=c.convert(E.type),le=w(E.internalFormat,Ot,Ct,E.colorSpace),W=E.isVideoTexture!==!0,Ut=ct.__version===void 0||dt===!0,bt=vt.dataReady;let Pt=O(E,zt);at(r.TEXTURE_CUBE_MAP,E);let St;if(te){W&&Ut&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Pt,le,zt.width,zt.height);for(let _t=0;_t<6;_t++){St=Et[_t].mipmaps;for(let At=0;At<St.length;At++){const ie=St[At];E.format!==Ni?Ot!==null?W?bt&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At,0,0,ie.width,ie.height,Ot,ie.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At,le,ie.width,ie.height,0,ie.data):ee("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?bt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At,0,0,ie.width,ie.height,Ot,Ct,ie.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At,le,ie.width,ie.height,0,Ot,Ct,ie.data)}}}else{if(St=E.mipmaps,W&&Ut){St.length>0&&Pt++;const _t=Yt(Et[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Pt,le,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(Mt){W?bt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Et[_t].width,Et[_t].height,Ot,Ct,Et[_t].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,le,Et[_t].width,Et[_t].height,0,Ot,Ct,Et[_t].data);for(let At=0;At<St.length;At++){const ze=St[At].image[_t].image;W?bt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At+1,0,0,ze.width,ze.height,Ot,Ct,ze.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At+1,le,ze.width,ze.height,0,Ot,Ct,ze.data)}}else{W?bt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Ot,Ct,Et[_t]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,le,Ot,Ct,Et[_t]);for(let At=0;At<St.length;At++){const ie=St[At];W?bt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At+1,0,0,Ot,Ct,ie.image[_t]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,At+1,le,Ot,Ct,ie.image[_t])}}}S(E)&&_(r.TEXTURE_CUBE_MAP),ct.__version=vt.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function wt(P,E,Y,dt,vt,ct){const jt=c.convert(Y.format,Y.colorSpace),Rt=c.convert(Y.type),kt=w(Y.internalFormat,jt,Rt,Y.colorSpace),te=s.get(E),Mt=s.get(Y);if(Mt.__renderTarget=E,!te.__hasExternalTextures){const Et=Math.max(1,E.width>>ct),zt=Math.max(1,E.height>>ct);vt===r.TEXTURE_3D||vt===r.TEXTURE_2D_ARRAY?i.texImage3D(vt,ct,kt,Et,zt,E.depth,0,jt,Rt,null):i.texImage2D(vt,ct,kt,Et,zt,0,jt,Rt,null)}i.bindFramebuffer(r.FRAMEBUFFER,P),Ze(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,dt,vt,Mt.__webglTexture,0,V(E)):(vt===r.TEXTURE_2D||vt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&vt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,dt,vt,Mt.__webglTexture,ct),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Vt(P,E,Y){if(r.bindRenderbuffer(r.RENDERBUFFER,P),E.depthBuffer){const dt=E.depthTexture,vt=dt&&dt.isDepthTexture?dt.type:null,ct=U(E.stencilBuffer,vt),jt=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Ze(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,V(E),ct,E.width,E.height):Y?r.renderbufferStorageMultisample(r.RENDERBUFFER,V(E),ct,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,ct,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,jt,r.RENDERBUFFER,P)}else{const dt=E.textures;for(let vt=0;vt<dt.length;vt++){const ct=dt[vt],jt=c.convert(ct.format,ct.colorSpace),Rt=c.convert(ct.type),kt=w(ct.internalFormat,jt,Rt,ct.colorSpace);Ze(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,V(E),kt,E.width,E.height):Y?r.renderbufferStorageMultisample(r.RENDERBUFFER,V(E),kt,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,kt,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Bt(P,E,Y){const dt=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const vt=s.get(E.depthTexture);if(vt.__renderTarget=E,(!vt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),dt){if(vt.__webglInit===void 0&&(vt.__webglInit=!0,E.depthTexture.addEventListener("dispose",z)),vt.__webglTexture===void 0){vt.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,vt.__webglTexture),at(r.TEXTURE_CUBE_MAP,E.depthTexture);const te=c.convert(E.depthTexture.format),Mt=c.convert(E.depthTexture.type);let Et;E.depthTexture.format===Ea?Et=r.DEPTH_COMPONENT24:E.depthTexture.format===Fs&&(Et=r.DEPTH24_STENCIL8);for(let zt=0;zt<6;zt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+zt,0,Et,E.width,E.height,0,te,Mt,null)}}else lt(E.depthTexture,0);const ct=vt.__webglTexture,jt=V(E),Rt=dt?r.TEXTURE_CUBE_MAP_POSITIVE_X+Y:r.TEXTURE_2D,kt=E.depthTexture.format===Fs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===Ea)Ze(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,kt,Rt,ct,0,jt):r.framebufferTexture2D(r.FRAMEBUFFER,kt,Rt,ct,0);else if(E.depthTexture.format===Fs)Ze(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,kt,Rt,ct,0,jt):r.framebufferTexture2D(r.FRAMEBUFFER,kt,Rt,ct,0);else throw new Error("Unknown depthTexture format")}function me(P){const E=s.get(P),Y=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const dt=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),dt){const vt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,dt.removeEventListener("dispose",vt)};dt.addEventListener("dispose",vt),E.__depthDisposeCallback=vt}E.__boundDepthTexture=dt}if(P.depthTexture&&!E.__autoAllocateDepthBuffer)if(Y)for(let dt=0;dt<6;dt++)Bt(E.__webglFramebuffer[dt],P,dt);else{const dt=P.texture.mipmaps;dt&&dt.length>0?Bt(E.__webglFramebuffer[0],P,0):Bt(E.__webglFramebuffer,P,0)}else if(Y){E.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[dt]),E.__webglDepthbuffer[dt]===void 0)E.__webglDepthbuffer[dt]=r.createRenderbuffer(),Vt(E.__webglDepthbuffer[dt],P,!1);else{const vt=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ct=E.__webglDepthbuffer[dt];r.bindRenderbuffer(r.RENDERBUFFER,ct),r.framebufferRenderbuffer(r.FRAMEBUFFER,vt,r.RENDERBUFFER,ct)}}else{const dt=P.texture.mipmaps;if(dt&&dt.length>0?i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),Vt(E.__webglDepthbuffer,P,!1);else{const vt=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ct=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ct),r.framebufferRenderbuffer(r.FRAMEBUFFER,vt,r.RENDERBUFFER,ct)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Je(P,E,Y){const dt=s.get(P);E!==void 0&&wt(dt.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Y!==void 0&&me(P)}function xe(P){const E=P.texture,Y=s.get(P),dt=s.get(E);P.addEventListener("dispose",N);const vt=P.textures,ct=P.isWebGLCubeRenderTarget===!0,jt=vt.length>1;if(jt||(dt.__webglTexture===void 0&&(dt.__webglTexture=r.createTexture()),dt.__version=E.version,h.memory.textures++),ct){Y.__webglFramebuffer=[];for(let Rt=0;Rt<6;Rt++)if(E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer[Rt]=[];for(let kt=0;kt<E.mipmaps.length;kt++)Y.__webglFramebuffer[Rt][kt]=r.createFramebuffer()}else Y.__webglFramebuffer[Rt]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Rt=0;Rt<E.mipmaps.length;Rt++)Y.__webglFramebuffer[Rt]=r.createFramebuffer()}else Y.__webglFramebuffer=r.createFramebuffer();if(jt)for(let Rt=0,kt=vt.length;Rt<kt;Rt++){const te=s.get(vt[Rt]);te.__webglTexture===void 0&&(te.__webglTexture=r.createTexture(),h.memory.textures++)}if(P.samples>0&&Ze(P)===!1){Y.__webglMultisampledFramebuffer=r.createFramebuffer(),Y.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Rt=0;Rt<vt.length;Rt++){const kt=vt[Rt];Y.__webglColorRenderbuffer[Rt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Y.__webglColorRenderbuffer[Rt]);const te=c.convert(kt.format,kt.colorSpace),Mt=c.convert(kt.type),Et=w(kt.internalFormat,te,Mt,kt.colorSpace,P.isXRRenderTarget===!0),zt=V(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,zt,Et,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Rt,r.RENDERBUFFER,Y.__webglColorRenderbuffer[Rt])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(Y.__webglDepthRenderbuffer=r.createRenderbuffer(),Vt(Y.__webglDepthRenderbuffer,P,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ct){i.bindTexture(r.TEXTURE_CUBE_MAP,dt.__webglTexture),at(r.TEXTURE_CUBE_MAP,E);for(let Rt=0;Rt<6;Rt++)if(E.mipmaps&&E.mipmaps.length>0)for(let kt=0;kt<E.mipmaps.length;kt++)wt(Y.__webglFramebuffer[Rt][kt],P,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,kt);else wt(Y.__webglFramebuffer[Rt],P,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0);S(E)&&_(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(jt){for(let Rt=0,kt=vt.length;Rt<kt;Rt++){const te=vt[Rt],Mt=s.get(te);let Et=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Et=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Et,Mt.__webglTexture),at(Et,te),wt(Y.__webglFramebuffer,P,te,r.COLOR_ATTACHMENT0+Rt,Et,0),S(te)&&_(Et)}i.unbindTexture()}else{let Rt=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Rt=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Rt,dt.__webglTexture),at(Rt,E),E.mipmaps&&E.mipmaps.length>0)for(let kt=0;kt<E.mipmaps.length;kt++)wt(Y.__webglFramebuffer[kt],P,E,r.COLOR_ATTACHMENT0,Rt,kt);else wt(Y.__webglFramebuffer,P,E,r.COLOR_ATTACHMENT0,Rt,0);S(E)&&_(Rt),i.unbindTexture()}P.depthBuffer&&me(P)}function ge(P){const E=P.textures;for(let Y=0,dt=E.length;Y<dt;Y++){const vt=E[Y];if(S(vt)){const ct=D(P),jt=s.get(vt).__webglTexture;i.bindTexture(ct,jt),_(ct),i.unbindTexture()}}}const we=[],re=[];function $e(P){if(P.samples>0){if(Ze(P)===!1){const E=P.textures,Y=P.width,dt=P.height;let vt=r.COLOR_BUFFER_BIT;const ct=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,jt=s.get(P),Rt=E.length>1;if(Rt)for(let te=0;te<E.length;te++)i.bindFramebuffer(r.FRAMEBUFFER,jt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+te,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,jt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+te,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,jt.__webglMultisampledFramebuffer);const kt=P.texture.mipmaps;kt&&kt.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,jt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,jt.__webglFramebuffer);for(let te=0;te<E.length;te++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(vt|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(vt|=r.STENCIL_BUFFER_BIT)),Rt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,jt.__webglColorRenderbuffer[te]);const Mt=s.get(E[te]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Mt,0)}r.blitFramebuffer(0,0,Y,dt,0,0,Y,dt,vt,r.NEAREST),m===!0&&(we.length=0,re.length=0,we.push(r.COLOR_ATTACHMENT0+te),P.depthBuffer&&P.resolveDepthBuffer===!1&&(we.push(ct),re.push(ct),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,re)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,we))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Rt)for(let te=0;te<E.length;te++){i.bindFramebuffer(r.FRAMEBUFFER,jt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+te,r.RENDERBUFFER,jt.__webglColorRenderbuffer[te]);const Mt=s.get(E[te]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,jt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+te,r.TEXTURE_2D,Mt,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,jt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&m){const E=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function V(P){return Math.min(l.maxSamples,P.samples)}function Ze(P){const E=s.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ee(P){const E=h.render.frame;v.get(P)!==E&&(v.set(P,E),P.update())}function Oe(P,E){const Y=P.colorSpace,dt=P.format,vt=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||Y!==Wr&&Y!==rs&&(Te.getTransfer(Y)===He?(dt!==Ni||vt!==yi)&&ee("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ce("WebGLTextures: Unsupported texture color space:",Y)),E}function Yt(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(p.width=P.naturalWidth||P.width,p.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(p.width=P.displayWidth,p.height=P.displayHeight):(p.width=P.width,p.height=P.height),p}this.allocateTextureUnit=Q,this.resetTextureUnits=Z,this.setTexture2D=lt,this.setTexture2DArray=I,this.setTexture3D=G,this.setTextureCube=st,this.rebindTextures=Je,this.setupRenderTarget=xe,this.updateRenderTargetMipmap=ge,this.updateMultisampleRenderTarget=$e,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=Ze,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function Y1(r,t){function i(s,l=rs){let c;const h=Te.getTransfer(l);if(s===yi)return r.UNSIGNED_BYTE;if(s===ap)return r.UNSIGNED_SHORT_4_4_4_4;if(s===sp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===wv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Dv)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===Rv)return r.BYTE;if(s===Cv)return r.SHORT;if(s===il)return r.UNSIGNED_SHORT;if(s===ip)return r.INT;if(s===qi)return r.UNSIGNED_INT;if(s===Vi)return r.FLOAT;if(s===Ma)return r.HALF_FLOAT;if(s===Uv)return r.ALPHA;if(s===Lv)return r.RGB;if(s===Ni)return r.RGBA;if(s===Ea)return r.DEPTH_COMPONENT;if(s===Fs)return r.DEPTH_STENCIL;if(s===Nv)return r.RED;if(s===rp)return r.RED_INTEGER;if(s===Xr)return r.RG;if(s===op)return r.RG_INTEGER;if(s===lp)return r.RGBA_INTEGER;if(s===eu||s===nu||s===iu||s===au)if(h===He)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===eu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===nu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===iu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===au)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===eu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===nu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===iu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===au)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===xd||s===Sd||s===yd||s===Md)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===xd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Sd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===yd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Md)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Ed||s===bd||s===Td||s===Ad||s===Rd||s===Cd||s===wd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Ed||s===bd)return h===He?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Td)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Ad)return c.COMPRESSED_R11_EAC;if(s===Rd)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Cd)return c.COMPRESSED_RG11_EAC;if(s===wd)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Dd||s===Ud||s===Ld||s===Nd||s===Od||s===Pd||s===zd||s===Fd||s===Id||s===Bd||s===Hd||s===Gd||s===Vd||s===kd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Dd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ud)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ld)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Nd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Od)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Pd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===zd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Fd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Id)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Bd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Hd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Gd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Vd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===kd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Xd||s===Wd||s===Yd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Xd)return h===He?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Wd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Yd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===qd||s===jd||s===Zd||s===Kd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===qd)return c.COMPRESSED_RED_RGTC1_EXT;if(s===jd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Zd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Kd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===al?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const q1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,j1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Z1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new Zv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new Oi({vertexShader:q1,fragmentShader:j1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ta(new du(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class K1 extends Bs{constructor(t,i){super();const s=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,v=null,g=null,y=null,M=null,b=null;const C=typeof XRWebGLBinding<"u",S=new Z1,_={},D=i.getContextAttributes();let w=null,U=null;const O=[],z=[],N=new ne;let X=null;const T=new li;T.viewport=new rn;const L=new li;L.viewport=new rn;const H=[T,L],Z=new rE;let Q=null,ft=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let ut=O[it];return ut===void 0&&(ut=new qh,O[it]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(it){let ut=O[it];return ut===void 0&&(ut=new qh,O[it]=ut),ut.getGripSpace()},this.getHand=function(it){let ut=O[it];return ut===void 0&&(ut=new qh,O[it]=ut),ut.getHandSpace()};function lt(it){const ut=z.indexOf(it.inputSource);if(ut===-1)return;const wt=O[ut];wt!==void 0&&(wt.update(it.inputSource,it.frame,p||h),wt.dispatchEvent({type:it.type,data:it.inputSource}))}function I(){l.removeEventListener("select",lt),l.removeEventListener("selectstart",lt),l.removeEventListener("selectend",lt),l.removeEventListener("squeeze",lt),l.removeEventListener("squeezestart",lt),l.removeEventListener("squeezeend",lt),l.removeEventListener("end",I),l.removeEventListener("inputsourceschange",G);for(let it=0;it<O.length;it++){const ut=z[it];ut!==null&&(z[it]=null,O[it].disconnect(ut))}Q=null,ft=null,S.reset();for(const it in _)delete _[it];t.setRenderTarget(w),M=null,y=null,g=null,l=null,U=null,It.stop(),s.isPresenting=!1,t.setPixelRatio(X),t.setSize(N.width,N.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){c=it,s.isPresenting===!0&&ee("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){d=it,s.isPresenting===!0&&ee("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(it){p=it},this.getBaseLayer=function(){return y!==null?y:M},this.getBinding=function(){return g===null&&C&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(it){if(l=it,l!==null){if(w=t.getRenderTarget(),l.addEventListener("select",lt),l.addEventListener("selectstart",lt),l.addEventListener("selectend",lt),l.addEventListener("squeeze",lt),l.addEventListener("squeezestart",lt),l.addEventListener("squeezeend",lt),l.addEventListener("end",I),l.addEventListener("inputsourceschange",G),D.xrCompatible!==!0&&await i.makeXRCompatible(),X=t.getPixelRatio(),t.getSize(N),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let wt=null,Vt=null,Bt=null;D.depth&&(Bt=D.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,wt=D.stencil?Fs:Ea,Vt=D.stencil?al:qi);const me={colorFormat:i.RGBA8,depthFormat:Bt,scaleFactor:c};g=this.getBinding(),y=g.createProjectionLayer(me),l.updateRenderState({layers:[y]}),t.setPixelRatio(1),t.setSize(y.textureWidth,y.textureHeight,!1),U=new Wi(y.textureWidth,y.textureHeight,{format:Ni,type:yi,depthTexture:new ll(y.textureWidth,y.textureHeight,Vt,void 0,void 0,void 0,void 0,void 0,void 0,wt),stencilBuffer:D.stencil,colorSpace:t.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const wt={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,wt),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),U=new Wi(M.framebufferWidth,M.framebufferHeight,{format:Ni,type:yi,colorSpace:t.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),It.setContext(l),It.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function G(it){for(let ut=0;ut<it.removed.length;ut++){const wt=it.removed[ut],Vt=z.indexOf(wt);Vt>=0&&(z[Vt]=null,O[Vt].disconnect(wt))}for(let ut=0;ut<it.added.length;ut++){const wt=it.added[ut];let Vt=z.indexOf(wt);if(Vt===-1){for(let me=0;me<O.length;me++)if(me>=z.length){z.push(wt),Vt=me;break}else if(z[me]===null){z[me]=wt,Vt=me;break}if(Vt===-1)break}const Bt=O[Vt];Bt&&Bt.connect(wt)}}const st=new K,yt=new K;function xt(it,ut,wt){st.setFromMatrixPosition(ut.matrixWorld),yt.setFromMatrixPosition(wt.matrixWorld);const Vt=st.distanceTo(yt),Bt=ut.projectionMatrix.elements,me=wt.projectionMatrix.elements,Je=Bt[14]/(Bt[10]-1),xe=Bt[14]/(Bt[10]+1),ge=(Bt[9]+1)/Bt[5],we=(Bt[9]-1)/Bt[5],re=(Bt[8]-1)/Bt[0],$e=(me[8]+1)/me[0],V=Je*re,Ze=Je*$e,Ee=Vt/(-re+$e),Oe=Ee*-re;if(ut.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(Oe),it.translateZ(Ee),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),Bt[10]===-1)it.projectionMatrix.copy(ut.projectionMatrix),it.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{const Yt=Je+Ee,P=xe+Ee,E=V-Oe,Y=Ze+(Vt-Oe),dt=ge*xe/P*Yt,vt=we*xe/P*Yt;it.projectionMatrix.makePerspective(E,Y,dt,vt,Yt,P),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function F(it,ut){ut===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(ut.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(l===null)return;let ut=it.near,wt=it.far;S.texture!==null&&(S.depthNear>0&&(ut=S.depthNear),S.depthFar>0&&(wt=S.depthFar)),Z.near=L.near=T.near=ut,Z.far=L.far=T.far=wt,(Q!==Z.near||ft!==Z.far)&&(l.updateRenderState({depthNear:Z.near,depthFar:Z.far}),Q=Z.near,ft=Z.far),Z.layers.mask=it.layers.mask|6,T.layers.mask=Z.layers.mask&3,L.layers.mask=Z.layers.mask&5;const Vt=it.parent,Bt=Z.cameras;F(Z,Vt);for(let me=0;me<Bt.length;me++)F(Bt[me],Vt);Bt.length===2?xt(Z,T,L):Z.projectionMatrix.copy(T.projectionMatrix),at(it,Z,Vt)};function at(it,ut,wt){wt===null?it.matrix.copy(ut.matrixWorld):(it.matrix.copy(wt.matrixWorld),it.matrix.invert(),it.matrix.multiply(ut.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(ut.projectionMatrix),it.projectionMatrixInverse.copy(ut.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=ol*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(y===null&&M===null))return m},this.setFoveation=function(it){m=it,y!==null&&(y.fixedFoveation=it),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=it)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(Z)},this.getCameraTexture=function(it){return _[it]};let gt=null;function Tt(it,ut){if(v=ut.getViewerPose(p||h),b=ut,v!==null){const wt=v.views;M!==null&&(t.setRenderTargetFramebuffer(U,M.framebuffer),t.setRenderTarget(U));let Vt=!1;wt.length!==Z.cameras.length&&(Z.cameras.length=0,Vt=!0);for(let xe=0;xe<wt.length;xe++){const ge=wt[xe];let we=null;if(M!==null)we=M.getViewport(ge);else{const $e=g.getViewSubImage(y,ge);we=$e.viewport,xe===0&&(t.setRenderTargetTextures(U,$e.colorTexture,$e.depthStencilTexture),t.setRenderTarget(U))}let re=H[xe];re===void 0&&(re=new li,re.layers.enable(xe),re.viewport=new rn,H[xe]=re),re.matrix.fromArray(ge.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(ge.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(we.x,we.y,we.width,we.height),xe===0&&(Z.matrix.copy(re.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),Vt===!0&&Z.cameras.push(re)}const Bt=l.enabledFeatures;if(Bt&&Bt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){g=s.getBinding();const xe=g.getDepthInformation(wt[0]);xe&&xe.isValid&&xe.texture&&S.init(xe,l.renderState)}if(Bt&&Bt.includes("camera-access")&&C){t.state.unbindTexture(),g=s.getBinding();for(let xe=0;xe<wt.length;xe++){const ge=wt[xe].camera;if(ge){let we=_[ge];we||(we=new Zv,_[ge]=we);const re=g.getCameraImage(ge);we.sourceTexture=re}}}}for(let wt=0;wt<O.length;wt++){const Vt=z[wt],Bt=O[wt];Vt!==null&&Bt!==void 0&&Bt.update(Vt,ut,p||h)}gt&&gt(it,ut),ut.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ut}),b=null}const It=new tx;It.setAnimationLoop(Tt),this.setAnimationLoop=function(it){gt=it},this.dispose=function(){}}}const Ns=new ba,Q1=new nn;function J1(r,t){function i(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function s(S,_){_.color.getRGB(S.fogColor.value,Gv(r)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function l(S,_,D,w,U){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(S,_):_.isMeshToonMaterial?(c(S,_),g(S,_)):_.isMeshPhongMaterial?(c(S,_),v(S,_)):_.isMeshStandardMaterial?(c(S,_),y(S,_),_.isMeshPhysicalMaterial&&M(S,_,U)):_.isMeshMatcapMaterial?(c(S,_),b(S,_)):_.isMeshDepthMaterial?c(S,_):_.isMeshDistanceMaterial?(c(S,_),C(S,_)):_.isMeshNormalMaterial?c(S,_):_.isLineBasicMaterial?(h(S,_),_.isLineDashedMaterial&&d(S,_)):_.isPointsMaterial?m(S,_,D,w):_.isSpriteMaterial?p(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,i(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===Jn&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,i(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===Jn&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,i(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,i(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const D=t.get(_),w=D.envMap,U=D.envMapRotation;w&&(S.envMap.value=w,Ns.copy(U),Ns.x*=-1,Ns.y*=-1,Ns.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ns.y*=-1,Ns.z*=-1),S.envMapRotation.value.setFromMatrix4(Q1.makeRotationFromEuler(Ns)),S.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,S.aoMapTransform))}function h(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform))}function d(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function m(S,_,D,w){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*D,S.scale.value=w*.5,_.map&&(S.map.value=_.map,i(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function p(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function v(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function g(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function y(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function M(S,_,D){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Jn&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=D.texture,S.transmissionSamplerSize.value.set(D.width,D.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,S.specularIntensityMapTransform))}function b(S,_){_.matcap&&(S.matcap.value=_.matcap)}function C(S,_){const D=t.get(_).light;S.referencePosition.value.setFromMatrixPosition(D.matrixWorld),S.nearDistance.value=D.shadow.camera.near,S.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function $1(r,t,i,s){let l={},c={},h=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(D,w){const U=w.program;s.uniformBlockBinding(D,U)}function p(D,w){let U=l[D.id];U===void 0&&(b(D),U=v(D),l[D.id]=U,D.addEventListener("dispose",S));const O=w.program;s.updateUBOMapping(D,O);const z=t.render.frame;c[D.id]!==z&&(y(D),c[D.id]=z)}function v(D){const w=g();D.__bindingPointIndex=w;const U=r.createBuffer(),O=D.__size,z=D.usage;return r.bindBuffer(r.UNIFORM_BUFFER,U),r.bufferData(r.UNIFORM_BUFFER,O,z),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,w,U),U}function g(){for(let D=0;D<d;D++)if(h.indexOf(D)===-1)return h.push(D),D;return Ce("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(D){const w=l[D.id],U=D.uniforms,O=D.__cache;r.bindBuffer(r.UNIFORM_BUFFER,w);for(let z=0,N=U.length;z<N;z++){const X=Array.isArray(U[z])?U[z]:[U[z]];for(let T=0,L=X.length;T<L;T++){const H=X[T];if(M(H,z,T,O)===!0){const Z=H.__offset,Q=Array.isArray(H.value)?H.value:[H.value];let ft=0;for(let lt=0;lt<Q.length;lt++){const I=Q[lt],G=C(I);typeof I=="number"||typeof I=="boolean"?(H.__data[0]=I,r.bufferSubData(r.UNIFORM_BUFFER,Z+ft,H.__data)):I.isMatrix3?(H.__data[0]=I.elements[0],H.__data[1]=I.elements[1],H.__data[2]=I.elements[2],H.__data[3]=0,H.__data[4]=I.elements[3],H.__data[5]=I.elements[4],H.__data[6]=I.elements[5],H.__data[7]=0,H.__data[8]=I.elements[6],H.__data[9]=I.elements[7],H.__data[10]=I.elements[8],H.__data[11]=0):(I.toArray(H.__data,ft),ft+=G.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Z,H.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(D,w,U,O){const z=D.value,N=w+"_"+U;if(O[N]===void 0)return typeof z=="number"||typeof z=="boolean"?O[N]=z:O[N]=z.clone(),!0;{const X=O[N];if(typeof z=="number"||typeof z=="boolean"){if(X!==z)return O[N]=z,!0}else if(X.equals(z)===!1)return X.copy(z),!0}return!1}function b(D){const w=D.uniforms;let U=0;const O=16;for(let N=0,X=w.length;N<X;N++){const T=Array.isArray(w[N])?w[N]:[w[N]];for(let L=0,H=T.length;L<H;L++){const Z=T[L],Q=Array.isArray(Z.value)?Z.value:[Z.value];for(let ft=0,lt=Q.length;ft<lt;ft++){const I=Q[ft],G=C(I),st=U%O,yt=st%G.boundary,xt=st+yt;U+=yt,xt!==0&&O-xt<G.storage&&(U+=O-xt),Z.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=U,U+=G.storage}}}const z=U%O;return z>0&&(U+=O-z),D.__size=U,D.__cache={},this}function C(D){const w={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(w.boundary=4,w.storage=4):D.isVector2?(w.boundary=8,w.storage=8):D.isVector3||D.isColor?(w.boundary=16,w.storage=12):D.isVector4?(w.boundary=16,w.storage=16):D.isMatrix3?(w.boundary=48,w.storage=48):D.isMatrix4?(w.boundary=64,w.storage=64):D.isTexture?ee("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ee("WebGLRenderer: Unsupported uniform value type.",D),w}function S(D){const w=D.target;w.removeEventListener("dispose",S);const U=h.indexOf(w.__bindingPointIndex);h.splice(U,1),r.deleteBuffer(l[w.id]),delete l[w.id],delete c[w.id]}function _(){for(const D in l)r.deleteBuffer(l[D]);h=[],l={},c={}}return{bind:m,update:p,dispose:_}}const tR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Hi=null;function eR(){return Hi===null&&(Hi=new XM(tR,16,16,Xr,Ma),Hi.name="DFG_LUT",Hi.minFilter=yn,Hi.magFilter=yn,Hi.wrapS=xa,Hi.wrapT=xa,Hi.generateMipmaps=!1,Hi.needsUpdate=!0),Hi}class sx{constructor(t={}){const{canvas:i=iM(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:y=!1,outputBufferType:M=yi}=t;this.isWebGLRenderer=!0;let b;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=s.getContextAttributes().alpha}else b=h;const C=M,S=new Set([lp,op,rp]),_=new Set([yi,qi,il,al,ap,sp]),D=new Uint32Array(4),w=new Int32Array(4);let U=null,O=null;const z=[],N=[];let X=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let L=!1;this._outputColorSpace=Vn;let H=0,Z=0,Q=null,ft=-1,lt=null;const I=new rn,G=new rn;let st=null;const yt=new pe(0);let xt=0,F=i.width,at=i.height,gt=1,Tt=null,It=null;const it=new rn(0,0,F,at),ut=new rn(0,0,F,at);let wt=!1;const Vt=new Wv;let Bt=!1,me=!1;const Je=new nn,xe=new K,ge=new rn,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let re=!1;function $e(){return Q===null?gt:1}let V=s;function Ze(R,q){return i.getContext(R,q)}try{const R={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${np}`),i.addEventListener("webglcontextlost",ie,!1),i.addEventListener("webglcontextrestored",ze,!1),i.addEventListener("webglcontextcreationerror",be,!1),V===null){const q="webgl2";if(V=Ze(q,R),V===null)throw Ze(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw Ce("WebGLRenderer: "+R.message),R}let Ee,Oe,Yt,P,E,Y,dt,vt,ct,jt,Rt,kt,te,Mt,Et,zt,Ot,Ct,le,W,Ut,bt,Pt,St;function _t(){Ee=new eA(V),Ee.init(),bt=new Y1(V,Ee),Oe=new YT(V,Ee,t,bt),Yt=new X1(V,Ee),Oe.reversedDepthBuffer&&y&&Yt.buffers.depth.setReversed(!0),P=new aA(V),E=new w1,Y=new W1(V,Ee,Yt,E,Oe,bt,P),dt=new jT(T),vt=new tA(T),ct=new lE(V),Pt=new XT(V,ct),jt=new nA(V,ct,P,Pt),Rt=new rA(V,jt,ct,P),le=new sA(V,Oe,Y),zt=new qT(E),kt=new C1(T,dt,vt,Ee,Oe,Pt,zt),te=new J1(T,E),Mt=new U1,Et=new F1(Ee),Ct=new kT(T,dt,vt,Yt,Rt,b,m),Ot=new V1(T,Rt,Oe),St=new $1(V,P,Oe,Yt),W=new WT(V,Ee,P),Ut=new iA(V,Ee,P),P.programs=kt.programs,T.capabilities=Oe,T.extensions=Ee,T.properties=E,T.renderLists=Mt,T.shadowMap=Ot,T.state=Yt,T.info=P}_t(),C!==yi&&(X=new lA(C,i.width,i.height,l,c));const At=new K1(T,V);this.xr=At,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const R=Ee.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Ee.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return gt},this.setPixelRatio=function(R){R!==void 0&&(gt=R,this.setSize(F,at,!1))},this.getSize=function(R){return R.set(F,at)},this.setSize=function(R,q,rt=!0){if(At.isPresenting){ee("WebGLRenderer: Can't change size while VR device is presenting.");return}F=R,at=q,i.width=Math.floor(R*gt),i.height=Math.floor(q*gt),rt===!0&&(i.style.width=R+"px",i.style.height=q+"px"),X!==null&&X.setSize(i.width,i.height),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(F*gt,at*gt).floor()},this.setDrawingBufferSize=function(R,q,rt){F=R,at=q,gt=rt,i.width=Math.floor(R*rt),i.height=Math.floor(q*rt),this.setViewport(0,0,R,q)},this.setEffects=function(R){if(C===yi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let q=0;q<R.length;q++)if(R[q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}X.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(I)},this.getViewport=function(R){return R.copy(it)},this.setViewport=function(R,q,rt,et){R.isVector4?it.set(R.x,R.y,R.z,R.w):it.set(R,q,rt,et),Yt.viewport(I.copy(it).multiplyScalar(gt).round())},this.getScissor=function(R){return R.copy(ut)},this.setScissor=function(R,q,rt,et){R.isVector4?ut.set(R.x,R.y,R.z,R.w):ut.set(R,q,rt,et),Yt.scissor(G.copy(ut).multiplyScalar(gt).round())},this.getScissorTest=function(){return wt},this.setScissorTest=function(R){Yt.setScissorTest(wt=R)},this.setOpaqueSort=function(R){Tt=R},this.setTransparentSort=function(R){It=R},this.getClearColor=function(R){return R.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor(...arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha(...arguments)},this.clear=function(R=!0,q=!0,rt=!0){let et=0;if(R){let J=!1;if(Q!==null){const Dt=Q.texture.format;J=S.has(Dt)}if(J){const Dt=Q.texture.type,Ft=_.has(Dt),Lt=Ct.getClearColor(),Ht=Ct.getClearAlpha(),Xt=Lt.r,Qt=Lt.g,Wt=Lt.b;Ft?(D[0]=Xt,D[1]=Qt,D[2]=Wt,D[3]=Ht,V.clearBufferuiv(V.COLOR,0,D)):(w[0]=Xt,w[1]=Qt,w[2]=Wt,w[3]=Ht,V.clearBufferiv(V.COLOR,0,w))}else et|=V.COLOR_BUFFER_BIT}q&&(et|=V.DEPTH_BUFFER_BIT),rt&&(et|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",ie,!1),i.removeEventListener("webglcontextrestored",ze,!1),i.removeEventListener("webglcontextcreationerror",be,!1),Ct.dispose(),Mt.dispose(),Et.dispose(),E.dispose(),dt.dispose(),vt.dispose(),Rt.dispose(),Pt.dispose(),St.dispose(),kt.dispose(),At.dispose(),At.removeEventListener("sessionstart",Gs),At.removeEventListener("sessionend",Jr),Pi.stop()};function ie(R){R.preventDefault(),d0("WebGLRenderer: Context Lost."),L=!0}function ze(){d0("WebGLRenderer: Context Restored."),L=!1;const R=P.autoReset,q=Ot.enabled,rt=Ot.autoUpdate,et=Ot.needsUpdate,J=Ot.type;_t(),P.autoReset=R,Ot.enabled=q,Ot.autoUpdate=rt,Ot.needsUpdate=et,Ot.type=J}function be(R){Ce("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Nn(R){const q=R.target;q.removeEventListener("dispose",Nn),Ei(q)}function Ei(R){dl(R),E.remove(R)}function dl(R){const q=E.get(R).programs;q!==void 0&&(q.forEach(function(rt){kt.releaseProgram(rt)}),R.isShaderMaterial&&kt.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,rt,et,J,Dt){q===null&&(q=we);const Ft=J.isMesh&&J.matrixWorld.determinant()<0,Lt=us(R,q,rt,et,J);Yt.setMaterial(et,Ft);let Ht=rt.index,Xt=1;if(et.wireframe===!0){if(Ht=jt.getWireframeAttribute(rt),Ht===void 0)return;Xt=2}const Qt=rt.drawRange,Wt=rt.attributes.position;let Jt=Qt.start*Xt,De=(Qt.start+Qt.count)*Xt;Dt!==null&&(Jt=Math.max(Jt,Dt.start*Xt),De=Math.min(De,(Dt.start+Dt.count)*Xt)),Ht!==null?(Jt=Math.max(Jt,0),De=Math.min(De,Ht.count)):Wt!=null&&(Jt=Math.max(Jt,0),De=Math.min(De,Wt.count));const Ke=De-Jt;if(Ke<0||Ke===1/0)return;Pt.setup(J,et,Lt,rt,Ht);let Ye,Pe=W;if(Ht!==null&&(Ye=ct.get(Ht),Pe=Ut,Pe.setIndex(Ye)),J.isMesh)et.wireframe===!0?(Yt.setLineWidth(et.wireframeLinewidth*$e()),Pe.setMode(V.LINES)):Pe.setMode(V.TRIANGLES);else if(J.isLine){let Zt=et.linewidth;Zt===void 0&&(Zt=1),Yt.setLineWidth(Zt*$e()),J.isLineSegments?Pe.setMode(V.LINES):J.isLineLoop?Pe.setMode(V.LINE_LOOP):Pe.setMode(V.LINE_STRIP)}else J.isPoints?Pe.setMode(V.POINTS):J.isSprite&&Pe.setMode(V.TRIANGLES);if(J.isBatchedMesh)if(J._multiDrawInstances!==null)rl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Pe.renderMultiDrawInstances(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount,J._multiDrawInstances);else if(Ee.get("WEBGL_multi_draw"))Pe.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{const Zt=J._multiDrawStarts,Ue=J._multiDrawCounts,ae=J._multiDrawCount,En=Ht?ct.get(Ht).bytesPerElement:1,ji=E.get(et).currentProgram.getUniforms();for(let bn=0;bn<ae;bn++)ji.setValue(V,"_gl_DrawID",bn),Pe.render(Zt[bn]/En,Ue[bn])}else if(J.isInstancedMesh)Pe.renderInstances(Jt,Ke,J.count);else if(rt.isInstancedBufferGeometry){const Zt=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,Ue=Math.min(rt.instanceCount,Zt);Pe.renderInstances(Jt,Ke,Ue)}else Pe.render(Jt,Ke)};function Kr(R,q,rt){R.transparent===!0&&R.side===va&&R.forceSinglePass===!1?(R.side=Jn,R.needsUpdate=!0,ks(R,q,rt),R.side=ls,R.needsUpdate=!0,ks(R,q,rt),R.side=va):ks(R,q,rt)}this.compile=function(R,q,rt=null){rt===null&&(rt=R),O=Et.get(rt),O.init(q),N.push(O),rt.traverseVisible(function(J){J.isLight&&J.layers.test(q.layers)&&(O.pushLight(J),J.castShadow&&O.pushShadow(J))}),R!==rt&&R.traverseVisible(function(J){J.isLight&&J.layers.test(q.layers)&&(O.pushLight(J),J.castShadow&&O.pushShadow(J))}),O.setupLights();const et=new Set;return R.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;const Dt=J.material;if(Dt)if(Array.isArray(Dt))for(let Ft=0;Ft<Dt.length;Ft++){const Lt=Dt[Ft];Kr(Lt,rt,J),et.add(Lt)}else Kr(Dt,rt,J),et.add(Dt)}),O=N.pop(),et},this.compileAsync=function(R,q,rt=null){const et=this.compile(R,q,rt);return new Promise(J=>{function Dt(){if(et.forEach(function(Ft){E.get(Ft).currentProgram.isReady()&&et.delete(Ft)}),et.size===0){J(R);return}setTimeout(Dt,10)}Ee.get("KHR_parallel_shader_compile")!==null?Dt():setTimeout(Dt,10)})};let Hs=null;function Qr(R){Hs&&Hs(R)}function Gs(){Pi.stop()}function Jr(){Pi.start()}const Pi=new tx;Pi.setAnimationLoop(Qr),typeof self<"u"&&Pi.setContext(self),this.setAnimationLoop=function(R){Hs=R,At.setAnimationLoop(R),R===null?Pi.stop():Pi.start()},At.addEventListener("sessionstart",Gs),At.addEventListener("sessionend",Jr),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){Ce("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;const rt=At.enabled===!0&&At.isPresenting===!0,et=X!==null&&(Q===null||rt)&&X.begin(T,Q);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(X===null||X.isCompositing()===!1)&&(At.cameraAutoUpdate===!0&&At.updateCamera(q),q=At.getCamera()),R.isScene===!0&&R.onBeforeRender(T,R,q,Q),O=Et.get(R,N.length),O.init(q),N.push(O),Je.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Vt.setFromProjectionMatrix(Je,ki,q.reversedDepth),me=this.localClippingEnabled,Bt=zt.init(this.clippingPlanes,me),U=Mt.get(R,z.length),U.init(),z.push(U),At.enabled===!0&&At.isPresenting===!0){const Ft=T.xr.getDepthSensingMesh();Ft!==null&&ui(Ft,q,-1/0,T.sortObjects)}ui(R,q,0,T.sortObjects),U.finish(),T.sortObjects===!0&&U.sort(Tt,It),re=At.enabled===!1||At.isPresenting===!1||At.hasDepthSensing()===!1,re&&Ct.addToRenderList(U,R),this.info.render.frame++,Bt===!0&&zt.beginShadows();const J=O.state.shadowsArray;if(Ot.render(J,R,q),Bt===!0&&zt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(et&&X.hasRenderPass())===!1){const Ft=U.opaque,Lt=U.transmissive;if(O.setupLights(),q.isArrayCamera){const Ht=q.cameras;if(Lt.length>0)for(let Xt=0,Qt=Ht.length;Xt<Qt;Xt++){const Wt=Ht[Xt];Mn(Ft,Lt,R,Wt)}re&&Ct.render(R);for(let Xt=0,Qt=Ht.length;Xt<Qt;Xt++){const Wt=Ht[Xt];on(U,R,Wt,Wt.viewport)}}else Lt.length>0&&Mn(Ft,Lt,R,q),re&&Ct.render(R),on(U,R,q)}Q!==null&&Z===0&&(Y.updateMultisampleRenderTarget(Q),Y.updateRenderTargetMipmap(Q)),et&&X.end(T),R.isScene===!0&&R.onAfterRender(T,R,q),Pt.resetDefaultState(),ft=-1,lt=null,N.pop(),N.length>0?(O=N[N.length-1],Bt===!0&&zt.setGlobalState(T.clippingPlanes,O.state.camera)):O=null,z.pop(),z.length>0?U=z[z.length-1]:U=null};function ui(R,q,rt,et){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)rt=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)O.pushLight(R),R.castShadow&&O.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Vt.intersectsSprite(R)){et&&ge.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Je);const Ft=Rt.update(R),Lt=R.material;Lt.visible&&U.push(R,Ft,Lt,rt,ge.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Vt.intersectsObject(R))){const Ft=Rt.update(R),Lt=R.material;if(et&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ge.copy(R.boundingSphere.center)):(Ft.boundingSphere===null&&Ft.computeBoundingSphere(),ge.copy(Ft.boundingSphere.center)),ge.applyMatrix4(R.matrixWorld).applyMatrix4(Je)),Array.isArray(Lt)){const Ht=Ft.groups;for(let Xt=0,Qt=Ht.length;Xt<Qt;Xt++){const Wt=Ht[Xt],Jt=Lt[Wt.materialIndex];Jt&&Jt.visible&&U.push(R,Ft,Jt,rt,ge.z,Wt)}}else Lt.visible&&U.push(R,Ft,Lt,rt,ge.z,null)}}const Dt=R.children;for(let Ft=0,Lt=Dt.length;Ft<Lt;Ft++)ui(Dt[Ft],q,rt,et)}function on(R,q,rt,et){const{opaque:J,transmissive:Dt,transparent:Ft}=R;O.setupLightsView(rt),Bt===!0&&zt.setGlobalState(T.clippingPlanes,rt),et&&Yt.viewport(I.copy(et)),J.length>0&&bi(J,q,rt),Dt.length>0&&bi(Dt,q,rt),Ft.length>0&&bi(Ft,q,rt),Yt.buffers.depth.setTest(!0),Yt.buffers.depth.setMask(!0),Yt.buffers.color.setMask(!0),Yt.setPolygonOffset(!1)}function Mn(R,q,rt,et){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[et.id]===void 0){const Jt=Ee.has("EXT_color_buffer_half_float")||Ee.has("EXT_color_buffer_float");O.state.transmissionRenderTarget[et.id]=new Wi(1,1,{generateMipmaps:!0,type:Jt?Ma:yi,minFilter:zs,samples:Oe.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Te.workingColorSpace})}const Dt=O.state.transmissionRenderTarget[et.id],Ft=et.viewport||I;Dt.setSize(Ft.z*T.transmissionResolutionScale,Ft.w*T.transmissionResolutionScale);const Lt=T.getRenderTarget(),Ht=T.getActiveCubeFace(),Xt=T.getActiveMipmapLevel();T.setRenderTarget(Dt),T.getClearColor(yt),xt=T.getClearAlpha(),xt<1&&T.setClearColor(16777215,.5),T.clear(),re&&Ct.render(rt);const Qt=T.toneMapping;T.toneMapping=Xi;const Wt=et.viewport;if(et.viewport!==void 0&&(et.viewport=void 0),O.setupLightsView(et),Bt===!0&&zt.setGlobalState(T.clippingPlanes,et),bi(R,rt,et),Y.updateMultisampleRenderTarget(Dt),Y.updateRenderTargetMipmap(Dt),Ee.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let De=0,Ke=q.length;De<Ke;De++){const Ye=q[De],{object:Pe,geometry:Zt,material:Ue,group:ae}=Ye;if(Ue.side===va&&Pe.layers.test(et.layers)){const En=Ue.side;Ue.side=Jn,Ue.needsUpdate=!0,Vs(Pe,rt,et,Zt,Ue,ae),Ue.side=En,Ue.needsUpdate=!0,Jt=!0}}Jt===!0&&(Y.updateMultisampleRenderTarget(Dt),Y.updateRenderTargetMipmap(Dt))}T.setRenderTarget(Lt,Ht,Xt),T.setClearColor(yt,xt),Wt!==void 0&&(et.viewport=Wt),T.toneMapping=Qt}function bi(R,q,rt){const et=q.isScene===!0?q.overrideMaterial:null;for(let J=0,Dt=R.length;J<Dt;J++){const Ft=R[J],{object:Lt,geometry:Ht,group:Xt}=Ft;let Qt=Ft.material;Qt.allowOverride===!0&&et!==null&&(Qt=et),Lt.layers.test(rt.layers)&&Vs(Lt,q,rt,Ht,Qt,Xt)}}function Vs(R,q,rt,et,J,Dt){R.onBeforeRender(T,q,rt,et,J,Dt),R.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),J.onBeforeRender(T,q,rt,et,R,Dt),J.transparent===!0&&J.side===va&&J.forceSinglePass===!1?(J.side=Jn,J.needsUpdate=!0,T.renderBufferDirect(rt,q,et,J,R,Dt),J.side=ls,J.needsUpdate=!0,T.renderBufferDirect(rt,q,et,J,R,Dt),J.side=va):T.renderBufferDirect(rt,q,et,J,R,Dt),R.onAfterRender(T,q,rt,et,J,Dt)}function ks(R,q,rt){q.isScene!==!0&&(q=we);const et=E.get(R),J=O.state.lights,Dt=O.state.shadowsArray,Ft=J.state.version,Lt=kt.getParameters(R,J.state,Dt,q,rt),Ht=kt.getProgramCacheKey(Lt);let Xt=et.programs;et.environment=R.isMeshStandardMaterial?q.environment:null,et.fog=q.fog,et.envMap=(R.isMeshStandardMaterial?vt:dt).get(R.envMap||et.environment),et.envMapRotation=et.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,Xt===void 0&&(R.addEventListener("dispose",Nn),Xt=new Map,et.programs=Xt);let Qt=Xt.get(Ht);if(Qt!==void 0){if(et.currentProgram===Qt&&et.lightsStateVersion===Ft)return $r(R,Lt),Qt}else Lt.uniforms=kt.getUniforms(R),R.onBeforeCompile(Lt,T),Qt=kt.acquireProgram(Lt,Ht),Xt.set(Ht,Qt),et.uniforms=Lt.uniforms;const Wt=et.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Wt.clippingPlanes=zt.uniform),$r(R,Lt),et.needsLights=Aa(R),et.lightsStateVersion=Ft,et.needsLights&&(Wt.ambientLightColor.value=J.state.ambient,Wt.lightProbe.value=J.state.probe,Wt.directionalLights.value=J.state.directional,Wt.directionalLightShadows.value=J.state.directionalShadow,Wt.spotLights.value=J.state.spot,Wt.spotLightShadows.value=J.state.spotShadow,Wt.rectAreaLights.value=J.state.rectArea,Wt.ltc_1.value=J.state.rectAreaLTC1,Wt.ltc_2.value=J.state.rectAreaLTC2,Wt.pointLights.value=J.state.point,Wt.pointLightShadows.value=J.state.pointShadow,Wt.hemisphereLights.value=J.state.hemi,Wt.directionalShadowMap.value=J.state.directionalShadowMap,Wt.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Wt.spotShadowMap.value=J.state.spotShadowMap,Wt.spotLightMatrix.value=J.state.spotLightMatrix,Wt.spotLightMap.value=J.state.spotLightMap,Wt.pointShadowMap.value=J.state.pointShadowMap,Wt.pointShadowMatrix.value=J.state.pointShadowMatrix),et.currentProgram=Qt,et.uniformsList=null,Qt}function pl(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=su.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function $r(R,q){const rt=E.get(R);rt.outputColorSpace=q.outputColorSpace,rt.batching=q.batching,rt.batchingColor=q.batchingColor,rt.instancing=q.instancing,rt.instancingColor=q.instancingColor,rt.instancingMorph=q.instancingMorph,rt.skinning=q.skinning,rt.morphTargets=q.morphTargets,rt.morphNormals=q.morphNormals,rt.morphColors=q.morphColors,rt.morphTargetsCount=q.morphTargetsCount,rt.numClippingPlanes=q.numClippingPlanes,rt.numIntersection=q.numClipIntersection,rt.vertexAlphas=q.vertexAlphas,rt.vertexTangents=q.vertexTangents,rt.toneMapping=q.toneMapping}function us(R,q,rt,et,J){q.isScene!==!0&&(q=we),Y.resetTextureUnits();const Dt=q.fog,Ft=et.isMeshStandardMaterial?q.environment:null,Lt=Q===null?T.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Wr,Ht=(et.isMeshStandardMaterial?vt:dt).get(et.envMap||Ft),Xt=et.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,Qt=!!rt.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),Wt=!!rt.morphAttributes.position,Jt=!!rt.morphAttributes.normal,De=!!rt.morphAttributes.color;let Ke=Xi;et.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Ke=T.toneMapping);const Ye=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,Pe=Ye!==void 0?Ye.length:0,Zt=E.get(et),Ue=O.state.lights;if(Bt===!0&&(me===!0||R!==lt)){const An=R===lt&&et.id===ft;zt.setState(et,R,An)}let ae=!1;et.version===Zt.__version?(Zt.needsLights&&Zt.lightsStateVersion!==Ue.state.version||Zt.outputColorSpace!==Lt||J.isBatchedMesh&&Zt.batching===!1||!J.isBatchedMesh&&Zt.batching===!0||J.isBatchedMesh&&Zt.batchingColor===!0&&J.colorTexture===null||J.isBatchedMesh&&Zt.batchingColor===!1&&J.colorTexture!==null||J.isInstancedMesh&&Zt.instancing===!1||!J.isInstancedMesh&&Zt.instancing===!0||J.isSkinnedMesh&&Zt.skinning===!1||!J.isSkinnedMesh&&Zt.skinning===!0||J.isInstancedMesh&&Zt.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Zt.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Zt.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Zt.instancingMorph===!1&&J.morphTexture!==null||Zt.envMap!==Ht||et.fog===!0&&Zt.fog!==Dt||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==zt.numPlanes||Zt.numIntersection!==zt.numIntersection)||Zt.vertexAlphas!==Xt||Zt.vertexTangents!==Qt||Zt.morphTargets!==Wt||Zt.morphNormals!==Jt||Zt.morphColors!==De||Zt.toneMapping!==Ke||Zt.morphTargetsCount!==Pe)&&(ae=!0):(ae=!0,Zt.__version=et.version);let En=Zt.currentProgram;ae===!0&&(En=ks(et,q,J));let ji=!1,bn=!1,fi=!1;const Fe=En.getUniforms(),Tn=Zt.uniforms;if(Yt.useProgram(En.program)&&(ji=!0,bn=!0,fi=!0),et.id!==ft&&(ft=et.id,bn=!0),ji||lt!==R){Yt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Fe.setValue(V,"projectionMatrix",R.projectionMatrix),Fe.setValue(V,"viewMatrix",R.matrixWorldInverse);const Rn=Fe.map.cameraPosition;Rn!==void 0&&Rn.setValue(V,xe.setFromMatrixPosition(R.matrixWorld)),Oe.logarithmicDepthBuffer&&Fe.setValue(V,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&Fe.setValue(V,"isOrthographic",R.isOrthographicCamera===!0),lt!==R&&(lt=R,bn=!0,fi=!0)}if(Zt.needsLights&&(Ue.state.directionalShadowMap.length>0&&Fe.setValue(V,"directionalShadowMap",Ue.state.directionalShadowMap,Y),Ue.state.spotShadowMap.length>0&&Fe.setValue(V,"spotShadowMap",Ue.state.spotShadowMap,Y),Ue.state.pointShadowMap.length>0&&Fe.setValue(V,"pointShadowMap",Ue.state.pointShadowMap,Y)),J.isSkinnedMesh){Fe.setOptional(V,J,"bindMatrix"),Fe.setOptional(V,J,"bindMatrixInverse");const An=J.skeleton;An&&(An.boneTexture===null&&An.computeBoneTexture(),Fe.setValue(V,"boneTexture",An.boneTexture,Y))}J.isBatchedMesh&&(Fe.setOptional(V,J,"batchingTexture"),Fe.setValue(V,"batchingTexture",J._matricesTexture,Y),Fe.setOptional(V,J,"batchingIdTexture"),Fe.setValue(V,"batchingIdTexture",J._indirectTexture,Y),Fe.setOptional(V,J,"batchingColorTexture"),J._colorsTexture!==null&&Fe.setValue(V,"batchingColorTexture",J._colorsTexture,Y));const pn=rt.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&le.update(J,rt,En),(bn||Zt.receiveShadow!==J.receiveShadow)&&(Zt.receiveShadow=J.receiveShadow,Fe.setValue(V,"receiveShadow",J.receiveShadow)),et.isMeshGouraudMaterial&&et.envMap!==null&&(Tn.envMap.value=Ht,Tn.flipEnvMap.value=Ht.isCubeTexture&&Ht.isRenderTargetTexture===!1?-1:1),et.isMeshStandardMaterial&&et.envMap===null&&q.environment!==null&&(Tn.envMapIntensity.value=q.environmentIntensity),Tn.dfgLUT!==void 0&&(Tn.dfgLUT.value=eR()),bn&&(Fe.setValue(V,"toneMappingExposure",T.toneMappingExposure),Zt.needsLights&&to(Tn,fi),Dt&&et.fog===!0&&te.refreshFogUniforms(Tn,Dt),te.refreshMaterialUniforms(Tn,et,gt,at,O.state.transmissionRenderTarget[R.id]),su.upload(V,pl(Zt),Tn,Y)),et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&(su.upload(V,pl(Zt),Tn,Y),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&Fe.setValue(V,"center",J.center),Fe.setValue(V,"modelViewMatrix",J.modelViewMatrix),Fe.setValue(V,"normalMatrix",J.normalMatrix),Fe.setValue(V,"modelMatrix",J.matrixWorld),et.isShaderMaterial||et.isRawShaderMaterial){const An=et.uniformsGroups;for(let Rn=0,Xs=An.length;Rn<Xs;Rn++){const Ti=An[Rn];St.update(Ti,En),St.bind(Ti,En)}}return En}function to(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function Aa(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(R,q,rt){const et=E.get(R);et.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,et.__autoAllocateDepthBuffer===!1&&(et.__useRenderToTexture=!1),E.get(R.texture).__webglTexture=q,E.get(R.depthTexture).__webglTexture=et.__autoAllocateDepthBuffer?void 0:rt,et.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,q){const rt=E.get(R);rt.__webglFramebuffer=q,rt.__useDefaultFramebuffer=q===void 0};const Ra=V.createFramebuffer();this.setRenderTarget=function(R,q=0,rt=0){Q=R,H=q,Z=rt;let et=null,J=!1,Dt=!1;if(R){const Lt=E.get(R);if(Lt.__useDefaultFramebuffer!==void 0){Yt.bindFramebuffer(V.FRAMEBUFFER,Lt.__webglFramebuffer),I.copy(R.viewport),G.copy(R.scissor),st=R.scissorTest,Yt.viewport(I),Yt.scissor(G),Yt.setScissorTest(st),ft=-1;return}else if(Lt.__webglFramebuffer===void 0)Y.setupRenderTarget(R);else if(Lt.__hasExternalTextures)Y.rebindTextures(R,E.get(R.texture).__webglTexture,E.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Qt=R.depthTexture;if(Lt.__boundDepthTexture!==Qt){if(Qt!==null&&E.has(Qt)&&(R.width!==Qt.image.width||R.height!==Qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(R)}}const Ht=R.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(Dt=!0);const Xt=E.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Xt[q])?et=Xt[q][rt]:et=Xt[q],J=!0):R.samples>0&&Y.useMultisampledRTT(R)===!1?et=E.get(R).__webglMultisampledFramebuffer:Array.isArray(Xt)?et=Xt[rt]:et=Xt,I.copy(R.viewport),G.copy(R.scissor),st=R.scissorTest}else I.copy(it).multiplyScalar(gt).floor(),G.copy(ut).multiplyScalar(gt).floor(),st=wt;if(rt!==0&&(et=Ra),Yt.bindFramebuffer(V.FRAMEBUFFER,et)&&Yt.drawBuffers(R,et),Yt.viewport(I),Yt.scissor(G),Yt.setScissorTest(st),J){const Lt=E.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+q,Lt.__webglTexture,rt)}else if(Dt){const Lt=q;for(let Ht=0;Ht<R.textures.length;Ht++){const Xt=E.get(R.textures[Ht]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Ht,Xt.__webglTexture,rt,Lt)}}else if(R!==null&&rt!==0){const Lt=E.get(R.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Lt.__webglTexture,rt)}ft=-1},this.readRenderTargetPixels=function(R,q,rt,et,J,Dt,Ft,Lt=0){if(!(R&&R.isWebGLRenderTarget)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ht=E.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ft!==void 0&&(Ht=Ht[Ft]),Ht){Yt.bindFramebuffer(V.FRAMEBUFFER,Ht);try{const Xt=R.textures[Lt],Qt=Xt.format,Wt=Xt.type;if(!Oe.textureFormatReadable(Qt)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Oe.textureTypeReadable(Wt)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-et&&rt>=0&&rt<=R.height-J&&(R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Lt),V.readPixels(q,rt,et,J,bt.convert(Qt),bt.convert(Wt),Dt))}finally{const Xt=Q!==null?E.get(Q).__webglFramebuffer:null;Yt.bindFramebuffer(V.FRAMEBUFFER,Xt)}}},this.readRenderTargetPixelsAsync=async function(R,q,rt,et,J,Dt,Ft,Lt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ht=E.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ft!==void 0&&(Ht=Ht[Ft]),Ht)if(q>=0&&q<=R.width-et&&rt>=0&&rt<=R.height-J){Yt.bindFramebuffer(V.FRAMEBUFFER,Ht);const Xt=R.textures[Lt],Qt=Xt.format,Wt=Xt.type;if(!Oe.textureFormatReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Oe.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Jt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Jt),V.bufferData(V.PIXEL_PACK_BUFFER,Dt.byteLength,V.STREAM_READ),R.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Lt),V.readPixels(q,rt,et,J,bt.convert(Qt),bt.convert(Wt),0);const De=Q!==null?E.get(Q).__webglFramebuffer:null;Yt.bindFramebuffer(V.FRAMEBUFFER,De);const Ke=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await aM(V,Ke,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Jt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Dt),V.deleteBuffer(Jt),V.deleteSync(Ke),Dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,q=null,rt=0){const et=Math.pow(2,-rt),J=Math.floor(R.image.width*et),Dt=Math.floor(R.image.height*et),Ft=q!==null?q.x:0,Lt=q!==null?q.y:0;Y.setTexture2D(R,0),V.copyTexSubImage2D(V.TEXTURE_2D,rt,0,0,Ft,Lt,J,Dt),Yt.unbindTexture()};const fs=V.createFramebuffer(),Ca=V.createFramebuffer();this.copyTextureToTexture=function(R,q,rt=null,et=null,J=0,Dt=null){Dt===null&&(J!==0?(rl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Dt=J,J=0):Dt=0);let Ft,Lt,Ht,Xt,Qt,Wt,Jt,De,Ke;const Ye=R.isCompressedTexture?R.mipmaps[Dt]:R.image;if(rt!==null)Ft=rt.max.x-rt.min.x,Lt=rt.max.y-rt.min.y,Ht=rt.isBox3?rt.max.z-rt.min.z:1,Xt=rt.min.x,Qt=rt.min.y,Wt=rt.isBox3?rt.min.z:0;else{const pn=Math.pow(2,-J);Ft=Math.floor(Ye.width*pn),Lt=Math.floor(Ye.height*pn),R.isDataArrayTexture?Ht=Ye.depth:R.isData3DTexture?Ht=Math.floor(Ye.depth*pn):Ht=1,Xt=0,Qt=0,Wt=0}et!==null?(Jt=et.x,De=et.y,Ke=et.z):(Jt=0,De=0,Ke=0);const Pe=bt.convert(q.format),Zt=bt.convert(q.type);let Ue;q.isData3DTexture?(Y.setTexture3D(q,0),Ue=V.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(Y.setTexture2DArray(q,0),Ue=V.TEXTURE_2D_ARRAY):(Y.setTexture2D(q,0),Ue=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,q.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,q.unpackAlignment);const ae=V.getParameter(V.UNPACK_ROW_LENGTH),En=V.getParameter(V.UNPACK_IMAGE_HEIGHT),ji=V.getParameter(V.UNPACK_SKIP_PIXELS),bn=V.getParameter(V.UNPACK_SKIP_ROWS),fi=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Ye.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Ye.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Xt),V.pixelStorei(V.UNPACK_SKIP_ROWS,Qt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Wt);const Fe=R.isDataArrayTexture||R.isData3DTexture,Tn=q.isDataArrayTexture||q.isData3DTexture;if(R.isDepthTexture){const pn=E.get(R),An=E.get(q),Rn=E.get(pn.__renderTarget),Xs=E.get(An.__renderTarget);Yt.bindFramebuffer(V.READ_FRAMEBUFFER,Rn.__webglFramebuffer),Yt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Xs.__webglFramebuffer);for(let Ti=0;Ti<Ht;Ti++)Fe&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,E.get(R).__webglTexture,J,Wt+Ti),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,E.get(q).__webglTexture,Dt,Ke+Ti)),V.blitFramebuffer(Xt,Qt,Ft,Lt,Jt,De,Ft,Lt,V.DEPTH_BUFFER_BIT,V.NEAREST);Yt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Yt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(J!==0||R.isRenderTargetTexture||E.has(R)){const pn=E.get(R),An=E.get(q);Yt.bindFramebuffer(V.READ_FRAMEBUFFER,fs),Yt.bindFramebuffer(V.DRAW_FRAMEBUFFER,Ca);for(let Rn=0;Rn<Ht;Rn++)Fe?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,pn.__webglTexture,J,Wt+Rn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,pn.__webglTexture,J),Tn?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,An.__webglTexture,Dt,Ke+Rn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,An.__webglTexture,Dt),J!==0?V.blitFramebuffer(Xt,Qt,Ft,Lt,Jt,De,Ft,Lt,V.COLOR_BUFFER_BIT,V.NEAREST):Tn?V.copyTexSubImage3D(Ue,Dt,Jt,De,Ke+Rn,Xt,Qt,Ft,Lt):V.copyTexSubImage2D(Ue,Dt,Jt,De,Xt,Qt,Ft,Lt);Yt.bindFramebuffer(V.READ_FRAMEBUFFER,null),Yt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Tn?R.isDataTexture||R.isData3DTexture?V.texSubImage3D(Ue,Dt,Jt,De,Ke,Ft,Lt,Ht,Pe,Zt,Ye.data):q.isCompressedArrayTexture?V.compressedTexSubImage3D(Ue,Dt,Jt,De,Ke,Ft,Lt,Ht,Pe,Ye.data):V.texSubImage3D(Ue,Dt,Jt,De,Ke,Ft,Lt,Ht,Pe,Zt,Ye):R.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Dt,Jt,De,Ft,Lt,Pe,Zt,Ye.data):R.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Dt,Jt,De,Ye.width,Ye.height,Pe,Ye.data):V.texSubImage2D(V.TEXTURE_2D,Dt,Jt,De,Ft,Lt,Pe,Zt,Ye);V.pixelStorei(V.UNPACK_ROW_LENGTH,ae),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,En),V.pixelStorei(V.UNPACK_SKIP_PIXELS,ji),V.pixelStorei(V.UNPACK_SKIP_ROWS,bn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,fi),Dt===0&&q.generateMipmaps&&V.generateMipmap(Ue),Yt.unbindTexture()},this.initRenderTarget=function(R){E.get(R).__webglFramebuffer===void 0&&Y.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Y.setTextureCube(R,0):R.isData3DTexture?Y.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Y.setTexture2DArray(R,0):Y.setTexture2D(R,0),Yt.unbindTexture()},this.resetState=function(){H=0,Z=0,Q=null,Yt.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Te._getDrawingBufferColorSpace(t),i.unpackColorSpace=Te._getUnpackColorSpace()}}const lv={type:"change"},pp={type:"start"},rx={type:"end"},Zc=new hu,cv=new ss,nR=Math.cos(70*Qd.DEG2RAD),gn=new K,Kn=2*Math.PI,Xe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},nd=1e-6;class ox extends $v{constructor(t,i=null){super(t,i),this.state=Xe.NONE,this.target=new K,this.cursor=new K,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Mi.ROTATE,MIDDLE:Mi.DOLLY,RIGHT:Mi.PAN},this.touches={ONE:Br.ROTATE,TWO:Br.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new K,this._lastQuaternion=new cs,this._lastTargetPosition=new K,this._quat=new cs().setFromUnitVectors(t.up,new K(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new F0,this._sphericalDelta=new F0,this._scale=1,this._panOffset=new K,this._rotateStart=new ne,this._rotateEnd=new ne,this._rotateDelta=new ne,this._panStart=new ne,this._panEnd=new ne,this._panDelta=new ne,this._dollyStart=new ne,this._dollyEnd=new ne,this._dollyDelta=new ne,this._dollyDirection=new K,this._mouse=new ne,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=aR.bind(this),this._onPointerDown=iR.bind(this),this._onPointerUp=sR.bind(this),this._onContextMenu=hR.bind(this),this._onMouseWheel=lR.bind(this),this._onKeyDown=cR.bind(this),this._onTouchStart=uR.bind(this),this._onTouchMove=fR.bind(this),this._onMouseDown=rR.bind(this),this._onMouseMove=oR.bind(this),this._interceptControlDown=dR.bind(this),this._interceptControlUp=pR.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(lv),this.update(),this.state=Xe.NONE}update(t=null){const i=this.object.position;gn.copy(i).sub(this.target),gn.applyQuaternion(this._quat),this._spherical.setFromVector3(gn),this.autoRotate&&this.state===Xe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=Kn:s>Math.PI&&(s-=Kn),l<-Math.PI?l+=Kn:l>Math.PI&&(l-=Kn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=h!=this._spherical.radius}if(gn.setFromSpherical(this._spherical),gn.applyQuaternion(this._quatInverse),i.copy(this.target).add(gn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=gn.length();h=this._clampDistance(d*this._scale);const m=d-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const d=new K(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const p=new K(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),h=gn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(Zc.origin.copy(this.object.position),Zc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Zc.direction))<nR?this.object.lookAt(this.target):(cv.setFromNormalAndCoplanarPoint(this.object.up,this.target),Zc.intersectPlane(cv,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>nd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>nd||this._lastTargetPosition.distanceToSquared(this.target)>nd?(this.dispatchEvent(lv),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Kn/60*this.autoRotateSpeed*t:Kn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){gn.setFromMatrixColumn(i,0),gn.multiplyScalar(-t),this._panOffset.add(gn)}_panUp(t,i){this.screenSpacePanning===!0?gn.setFromMatrixColumn(i,1):(gn.setFromMatrixColumn(i,0),gn.crossVectors(this.object.up,gn)),gn.multiplyScalar(t),this._panOffset.add(gn)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;gn.copy(l).sub(this.target);let c=gn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=i-s.top,h=s.width,d=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(c/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Kn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Kn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Kn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Kn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Kn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new ne,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function iR(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function aR(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function sR(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(rx),this.state=Xe.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function rR(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Mi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Xe.DOLLY;break;case Mi.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Xe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Xe.ROTATE}break;case Mi.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Xe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Xe.PAN}break;default:this.state=Xe.NONE}this.state!==Xe.NONE&&this.dispatchEvent(pp)}function oR(r){switch(this.state){case Xe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Xe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Xe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function lR(r){this.enabled===!1||this.enableZoom===!1||this.state!==Xe.NONE||(r.preventDefault(),this.dispatchEvent(pp),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(rx))}function cR(r){this.enabled!==!1&&this._handleKeyDown(r)}function uR(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Br.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Xe.TOUCH_ROTATE;break;case Br.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Xe.TOUCH_PAN;break;default:this.state=Xe.NONE}break;case 2:switch(this.touches.TWO){case Br.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Xe.TOUCH_DOLLY_PAN;break;case Br.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Xe.TOUCH_DOLLY_ROTATE;break;default:this.state=Xe.NONE}break;default:this.state=Xe.NONE}this.state!==Xe.NONE&&this.dispatchEvent(pp)}function fR(r){switch(this._trackPointer(r),this.state){case Xe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Xe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Xe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Xe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Xe.NONE}}function hR(r){this.enabled!==!1&&r.preventDefault()}function dR(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function pR(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const id={type:"change"},mp={type:"start"},gp={type:"end"},uv=1e-6,Ne={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4},Kc=new ne,as=new ne,mR=new K,Qc=new K,ad=new K,Fr=new cs,fv=new K,Jc=new K,sd=new K,$c=new K;class lx extends $v{constructor(t,i=null){super(t,i),this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.keys=["KeyA","KeyS","KeyD"],this.mouseButtons={LEFT:Mi.ROTATE,MIDDLE:Mi.DOLLY,RIGHT:Mi.PAN},this.target=new K,this.state=Ne.NONE,this.keyState=Ne.NONE,this._lastPosition=new K,this._lastZoom=1,this._touchZoomDistanceStart=0,this._touchZoomDistanceEnd=0,this._lastAngle=0,this._eye=new K,this._movePrev=new ne,this._moveCurr=new ne,this._lastAxis=new K,this._zoomStart=new ne,this._zoomEnd=new ne,this._panStart=new ne,this._panEnd=new ne,this._pointers=[],this._pointerPositions={},this._onPointerMove=_R.bind(this),this._onPointerDown=gR.bind(this),this._onPointerUp=vR.bind(this),this._onPointerCancel=xR.bind(this),this._onContextMenu=AR.bind(this),this._onMouseWheel=TR.bind(this),this._onKeyDown=yR.bind(this),this._onKeyUp=SR.bind(this),this._onTouchStart=RR.bind(this),this._onTouchMove=CR.bind(this),this._onTouchEnd=wR.bind(this),this._onMouseDown=MR.bind(this),this._onMouseMove=ER.bind(this),this._onMouseUp=bR.bind(this),this._target0=this.target.clone(),this._position0=this.object.position.clone(),this._up0=this.object.up.clone(),this._zoom0=this.object.zoom,i!==null&&(this.connect(i),this.handleResize()),this.update()}connect(t){super.connect(t),window.addEventListener("keydown",this._onKeyDown),window.addEventListener("keyup",this._onKeyUp),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerCancel),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.style.touchAction="none"}disconnect(){window.removeEventListener("keydown",this._onKeyDown),window.removeEventListener("keyup",this._onKeyUp),this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerCancel),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}handleResize(){const t=this.domElement.getBoundingClientRect(),i=this.domElement.ownerDocument.documentElement;this.screen.left=t.left+window.pageXOffset-i.clientLeft,this.screen.top=t.top+window.pageYOffset-i.clientTop,this.screen.width=t.width,this.screen.height=t.height}update(){this._eye.subVectors(this.object.position,this.target),this.noRotate||this._rotateCamera(),this.noZoom||this._zoomCamera(),this.noPan||this._panCamera(),this.object.position.addVectors(this.target,this._eye),this.object.isPerspectiveCamera?(this._checkDistances(),this.object.lookAt(this.target),this._lastPosition.distanceToSquared(this.object.position)>uv&&(this.dispatchEvent(id),this._lastPosition.copy(this.object.position))):this.object.isOrthographicCamera?(this.object.lookAt(this.target),(this._lastPosition.distanceToSquared(this.object.position)>uv||this._lastZoom!==this.object.zoom)&&(this.dispatchEvent(id),this._lastPosition.copy(this.object.position),this._lastZoom=this.object.zoom)):console.warn("THREE.TrackballControls: Unsupported camera type.")}reset(){this.state=Ne.NONE,this.keyState=Ne.NONE,this.target.copy(this._target0),this.object.position.copy(this._position0),this.object.up.copy(this._up0),this.object.zoom=this._zoom0,this.object.updateProjectionMatrix(),this._eye.subVectors(this.object.position,this.target),this.object.lookAt(this.target),this.dispatchEvent(id),this._lastPosition.copy(this.object.position),this._lastZoom=this.object.zoom}_panCamera(){if(as.copy(this._panEnd).sub(this._panStart),as.lengthSq()){if(this.object.isOrthographicCamera){const t=(this.object.right-this.object.left)/this.object.zoom/this.domElement.clientWidth,i=(this.object.top-this.object.bottom)/this.object.zoom/this.domElement.clientWidth;as.x*=t,as.y*=i}as.multiplyScalar(this._eye.length()*this.panSpeed),Qc.copy(this._eye).cross(this.object.up).setLength(as.x),Qc.add(mR.copy(this.object.up).setLength(as.y)),this.object.position.add(Qc),this.target.add(Qc),this.staticMoving?this._panStart.copy(this._panEnd):this._panStart.add(as.subVectors(this._panEnd,this._panStart).multiplyScalar(this.dynamicDampingFactor))}}_rotateCamera(){$c.set(this._moveCurr.x-this._movePrev.x,this._moveCurr.y-this._movePrev.y,0);let t=$c.length();t?(this._eye.copy(this.object.position).sub(this.target),fv.copy(this._eye).normalize(),Jc.copy(this.object.up).normalize(),sd.crossVectors(Jc,fv).normalize(),Jc.setLength(this._moveCurr.y-this._movePrev.y),sd.setLength(this._moveCurr.x-this._movePrev.x),$c.copy(Jc.add(sd)),ad.crossVectors($c,this._eye).normalize(),t*=this.rotateSpeed,Fr.setFromAxisAngle(ad,t),this._eye.applyQuaternion(Fr),this.object.up.applyQuaternion(Fr),this._lastAxis.copy(ad),this._lastAngle=t):!this.staticMoving&&this._lastAngle&&(this._lastAngle*=Math.sqrt(1-this.dynamicDampingFactor),this._eye.copy(this.object.position).sub(this.target),Fr.setFromAxisAngle(this._lastAxis,this._lastAngle),this._eye.applyQuaternion(Fr),this.object.up.applyQuaternion(Fr)),this._movePrev.copy(this._moveCurr)}_zoomCamera(){let t;this.state===Ne.TOUCH_ZOOM_PAN?(t=this._touchZoomDistanceStart/this._touchZoomDistanceEnd,this._touchZoomDistanceStart=this._touchZoomDistanceEnd,this.object.isPerspectiveCamera?this._eye.multiplyScalar(t):this.object.isOrthographicCamera?(this.object.zoom=Qd.clamp(this.object.zoom/t,this.minZoom,this.maxZoom),this._lastZoom!==this.object.zoom&&this.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")):(t=1+(this._zoomEnd.y-this._zoomStart.y)*this.zoomSpeed,t!==1&&t>0&&(this.object.isPerspectiveCamera?this._eye.multiplyScalar(t):this.object.isOrthographicCamera?(this.object.zoom=Qd.clamp(this.object.zoom/t,this.minZoom,this.maxZoom),this._lastZoom!==this.object.zoom&&this.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")),this.staticMoving?this._zoomStart.copy(this._zoomEnd):this._zoomStart.y+=(this._zoomEnd.y-this._zoomStart.y)*this.dynamicDampingFactor)}_getMouseOnScreen(t,i){return Kc.set((t-this.screen.left)/this.screen.width,(i-this.screen.top)/this.screen.height),Kc}_getMouseOnCircle(t,i){return Kc.set((t-this.screen.width*.5-this.screen.left)/(this.screen.width*.5),(this.screen.height+2*(this.screen.top-i))/this.screen.width),Kc}_addPointer(t){this._pointers.push(t)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i].pointerId==t.pointerId){this._pointers.splice(i,1);return}}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new ne,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0].pointerId?this._pointers[1]:this._pointers[0];return this._pointerPositions[i.pointerId]}_checkDistances(){(!this.noZoom||!this.noPan)&&(this._eye.lengthSq()>this.maxDistance*this.maxDistance&&(this.object.position.addVectors(this.target,this._eye.setLength(this.maxDistance)),this._zoomStart.copy(this._zoomEnd)),this._eye.lengthSq()<this.minDistance*this.minDistance&&(this.object.position.addVectors(this.target,this._eye.setLength(this.minDistance)),this._zoomStart.copy(this._zoomEnd)))}}function gR(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r))}function _R(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function vR(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchEnd(r):this._onMouseUp(),this._removePointer(r),this._pointers.length===0&&(this.domElement.releasePointerCapture(r.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp)))}function xR(r){this._removePointer(r)}function SR(){this.enabled!==!1&&(this.keyState=Ne.NONE,window.addEventListener("keydown",this._onKeyDown))}function yR(r){this.enabled!==!1&&(window.removeEventListener("keydown",this._onKeyDown),this.keyState===Ne.NONE&&(r.code===this.keys[Ne.ROTATE]&&!this.noRotate?this.keyState=Ne.ROTATE:r.code===this.keys[Ne.ZOOM]&&!this.noZoom?this.keyState=Ne.ZOOM:r.code===this.keys[Ne.PAN]&&!this.noPan&&(this.keyState=Ne.PAN)))}function MR(r){let t;switch(r.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Mi.DOLLY:this.state=Ne.ZOOM;break;case Mi.ROTATE:this.state=Ne.ROTATE;break;case Mi.PAN:this.state=Ne.PAN;break;default:this.state=Ne.NONE}const i=this.keyState!==Ne.NONE?this.keyState:this.state;i===Ne.ROTATE&&!this.noRotate?(this._moveCurr.copy(this._getMouseOnCircle(r.pageX,r.pageY)),this._movePrev.copy(this._moveCurr)):i===Ne.ZOOM&&!this.noZoom?(this._zoomStart.copy(this._getMouseOnScreen(r.pageX,r.pageY)),this._zoomEnd.copy(this._zoomStart)):i===Ne.PAN&&!this.noPan&&(this._panStart.copy(this._getMouseOnScreen(r.pageX,r.pageY)),this._panEnd.copy(this._panStart)),this.dispatchEvent(mp)}function ER(r){const t=this.keyState!==Ne.NONE?this.keyState:this.state;t===Ne.ROTATE&&!this.noRotate?(this._movePrev.copy(this._moveCurr),this._moveCurr.copy(this._getMouseOnCircle(r.pageX,r.pageY))):t===Ne.ZOOM&&!this.noZoom?this._zoomEnd.copy(this._getMouseOnScreen(r.pageX,r.pageY)):t===Ne.PAN&&!this.noPan&&this._panEnd.copy(this._getMouseOnScreen(r.pageX,r.pageY))}function bR(){this.state=Ne.NONE,this.dispatchEvent(gp)}function TR(r){if(this.enabled!==!1&&this.noZoom!==!0){switch(r.preventDefault(),r.deltaMode){case 2:this._zoomStart.y-=r.deltaY*.025;break;case 1:this._zoomStart.y-=r.deltaY*.01;break;default:this._zoomStart.y-=r.deltaY*25e-5;break}this.dispatchEvent(mp),this.dispatchEvent(gp)}}function AR(r){this.enabled!==!1&&r.preventDefault()}function RR(r){if(this._trackPointer(r),this._pointers.length===1)this.state=Ne.TOUCH_ROTATE,this._moveCurr.copy(this._getMouseOnCircle(this._pointers[0].pageX,this._pointers[0].pageY)),this._movePrev.copy(this._moveCurr);else{this.state=Ne.TOUCH_ZOOM_PAN;const t=this._pointers[0].pageX-this._pointers[1].pageX,i=this._pointers[0].pageY-this._pointers[1].pageY;this._touchZoomDistanceEnd=this._touchZoomDistanceStart=Math.sqrt(t*t+i*i);const s=(this._pointers[0].pageX+this._pointers[1].pageX)/2,l=(this._pointers[0].pageY+this._pointers[1].pageY)/2;this._panStart.copy(this._getMouseOnScreen(s,l)),this._panEnd.copy(this._panStart)}this.dispatchEvent(mp)}function CR(r){if(this._trackPointer(r),this._pointers.length===1)this._movePrev.copy(this._moveCurr),this._moveCurr.copy(this._getMouseOnCircle(r.pageX,r.pageY));else{const t=this._getSecondPointerPosition(r),i=r.pageX-t.x,s=r.pageY-t.y;this._touchZoomDistanceEnd=Math.sqrt(i*i+s*s);const l=(r.pageX+t.x)/2,c=(r.pageY+t.y)/2;this._panEnd.copy(this._getMouseOnScreen(l,c))}}function wR(r){switch(this._pointers.length){case 0:this.state=Ne.NONE;break;case 1:this.state=Ne.TOUCH_ROTATE,this._moveCurr.copy(this._getMouseOnCircle(r.pageX,r.pageY)),this._movePrev.copy(this._moveCurr);break;case 2:this.state=Ne.TOUCH_ZOOM_PAN;for(let t=0;t<this._pointers.length;t++)if(this._pointers[t].pointerId!==r.pointerId){const i=this._pointerPositions[this._pointers[t].pointerId];this._moveCurr.copy(this._getMouseOnCircle(i.x,i.y)),this._movePrev.copy(this._moveCurr);break}break}this.dispatchEvent(gp)}const Qn=new pe;class DR extends hl{constructor(t){super(t),this.propertyNameMapping={},this.customPropertyMapping={}}load(t,i,s,l){const c=this,h=new aE(this.manager);h.setPath(this.path),h.setResponseType("arraybuffer"),h.setRequestHeader(this.requestHeader),h.setWithCredentials(this.withCredentials),h.load(t,function(d){try{i(c.parse(d))}catch(m){l?l(m):console.error(m),c.manager.itemError(t)}},s,l)}setPropertyNameMapping(t){this.propertyNameMapping=t}setCustomPropertyNameMapping(t){this.customPropertyMapping=t}parse(t){function i(S,_=0){const D=/^ply([\s\S]*)end_header(\r\n|\r|\n)/;let w="";const U=D.exec(S);U!==null&&(w=U[1]);const O={comments:[],elements:[],headerLength:_,objInfo:""},z=w.split(/\r\n|\r|\n/);let N;function X(T,L){const H={type:T[0]};return H.type==="list"?(H.name=T[3],H.countType=T[1],H.itemType=T[2]):H.name=T[1],H.name in L&&(H.name=L[H.name]),H}for(let T=0;T<z.length;T++){let L=z[T];if(L=L.trim(),L==="")continue;const H=L.split(/\s+/),Z=H.shift();switch(L=H.join(" "),Z){case"format":O.format=H[0],O.version=H[1];break;case"comment":O.comments.push(L);break;case"element":N!==void 0&&O.elements.push(N),N={},N.name=H[0],N.count=parseInt(H[1]),N.properties=[];break;case"property":N.properties.push(X(H,C.propertyNameMapping));break;case"obj_info":O.objInfo=L;break;default:console.log("unhandled",Z,H)}}return N!==void 0&&O.elements.push(N),O}function s(S,_){switch(_){case"char":case"uchar":case"short":case"ushort":case"int":case"uint":case"int8":case"uint8":case"int16":case"uint16":case"int32":case"uint32":return parseInt(S);case"float":case"double":case"float32":case"float64":return parseFloat(S)}}function l(S,_){const D={};for(let w=0;w<S.length;w++){if(_.empty())return null;if(S[w].type==="list"){const U=[],O=s(_.next(),S[w].countType);for(let z=0;z<O;z++){if(_.empty())return null;U.push(s(_.next(),S[w].itemType))}D[S[w].name]=U}else D[S[w].name]=s(_.next(),S[w].type)}return D}function c(){const S={indices:[],vertices:[],normals:[],uvs:[],faceVertexUvs:[],colors:[],faceVertexColors:[]};for(const _ of Object.keys(C.customPropertyMapping))S[_]=[];return S}function h(S){const _=S.map(w=>w.name);function D(w){for(let U=0,O=w.length;U<O;U++){const z=w[U];if(_.includes(z))return z}return null}return{attrX:D(["x","px","posx"])||"x",attrY:D(["y","py","posy"])||"y",attrZ:D(["z","pz","posz"])||"z",attrNX:D(["nx","normalx"]),attrNY:D(["ny","normaly"]),attrNZ:D(["nz","normalz"]),attrS:D(["s","u","texture_u","tx"]),attrT:D(["t","v","texture_v","ty"]),attrR:D(["red","diffuse_red","r","diffuse_r"]),attrG:D(["green","diffuse_green","g","diffuse_g"]),attrB:D(["blue","diffuse_blue","b","diffuse_b"])}}function d(S,_){const D=c(),w=/end_header\s+(\S[\s\S]*\S|\S)\s*$/;let U,O;(O=w.exec(S))!==null?U=O[1].split(/\s+/):U=[];const z=new UR(U);t:for(let N=0;N<_.elements.length;N++){const X=_.elements[N],T=h(X.properties);for(let L=0;L<X.count;L++){const H=l(X.properties,z);if(!H)break t;p(D,X.name,H,T)}}return m(D)}function m(S){let _=new ci;S.indices.length>0&&_.setIndex(S.indices),_.setAttribute("position",new dn(S.vertices,3)),S.normals.length>0&&_.setAttribute("normal",new dn(S.normals,3)),S.uvs.length>0&&_.setAttribute("uv",new dn(S.uvs,2)),S.colors.length>0&&_.setAttribute("color",new dn(S.colors,3)),(S.faceVertexUvs.length>0||S.faceVertexColors.length>0)&&(_=_.toNonIndexed(),S.faceVertexUvs.length>0&&_.setAttribute("uv",new dn(S.faceVertexUvs,2)),S.faceVertexColors.length>0&&_.setAttribute("color",new dn(S.faceVertexColors,3)));for(const D of Object.keys(C.customPropertyMapping))S[D].length>0&&_.setAttribute(D,new dn(S[D],C.customPropertyMapping[D].length));return _.computeBoundingSphere(),_}function p(S,_,D,w){if(_==="vertex"){S.vertices.push(D[w.attrX],D[w.attrY],D[w.attrZ]),w.attrNX!==null&&w.attrNY!==null&&w.attrNZ!==null&&S.normals.push(D[w.attrNX],D[w.attrNY],D[w.attrNZ]),w.attrS!==null&&w.attrT!==null&&S.uvs.push(D[w.attrS],D[w.attrT]),w.attrR!==null&&w.attrG!==null&&w.attrB!==null&&(Qn.setRGB(D[w.attrR]/255,D[w.attrG]/255,D[w.attrB]/255,Vn),S.colors.push(Qn.r,Qn.g,Qn.b));for(const U of Object.keys(C.customPropertyMapping))for(const O of C.customPropertyMapping[U])S[U].push(D[O])}else if(_==="face"){const U=D.vertex_indices||D.vertex_index,O=D.texcoord;U.length===3?(S.indices.push(U[0],U[1],U[2]),O&&O.length===6&&(S.faceVertexUvs.push(O[0],O[1]),S.faceVertexUvs.push(O[2],O[3]),S.faceVertexUvs.push(O[4],O[5]))):U.length===4&&(S.indices.push(U[0],U[1],U[3]),S.indices.push(U[1],U[2],U[3])),w.attrR!==null&&w.attrG!==null&&w.attrB!==null&&(Qn.setRGB(D[w.attrR]/255,D[w.attrG]/255,D[w.attrB]/255,Vn),S.faceVertexColors.push(Qn.r,Qn.g,Qn.b),S.faceVertexColors.push(Qn.r,Qn.g,Qn.b),S.faceVertexColors.push(Qn.r,Qn.g,Qn.b))}}function v(S,_){const D={};let w=0;for(let U=0;U<_.length;U++){const O=_[U],z=O.valueReader;if(O.type==="list"){const N=[],X=O.countReader.read(S+w);w+=O.countReader.size;for(let T=0;T<X;T++)N.push(z.read(S+w)),w+=z.size;D[O.name]=N}else D[O.name]=z.read(S+w),w+=z.size}return[D,w]}function g(S,_,D){function w(U,O,z){switch(O){case"int8":case"char":return{read:N=>U.getInt8(N),size:1};case"uint8":case"uchar":return{read:N=>U.getUint8(N),size:1};case"int16":case"short":return{read:N=>U.getInt16(N,z),size:2};case"uint16":case"ushort":return{read:N=>U.getUint16(N,z),size:2};case"int32":case"int":return{read:N=>U.getInt32(N,z),size:4};case"uint32":case"uint":return{read:N=>U.getUint32(N,z),size:4};case"float32":case"float":return{read:N=>U.getFloat32(N,z),size:4};case"float64":case"double":return{read:N=>U.getFloat64(N,z),size:8}}}for(let U=0,O=S.length;U<O;U++){const z=S[U];z.type==="list"?(z.countReader=w(_,z.countType,D),z.valueReader=w(_,z.itemType,D)):z.valueReader=w(_,z.type,D)}}function y(S,_){const D=c(),w=_.format==="binary_little_endian",U=new DataView(S,_.headerLength);let O,z=0;for(let N=0;N<_.elements.length;N++){const X=_.elements[N],T=X.properties,L=h(T);g(T,U,w);for(let H=0;H<X.count;H++){O=v(z,T),z+=O[1];const Z=O[0];p(D,X.name,Z,L)}}return m(D)}function M(S){let _=0,D=!0,w="";const U=[],O=new TextDecoder().decode(S.subarray(0,5)),z=/^ply\r\n/.test(O);do{const N=String.fromCharCode(S[_++]);N!==`
`&&N!=="\r"?w+=N:(w==="end_header"&&(D=!1),w!==""&&(U.push(w),w=""))}while(D&&_<S.length);return z===!0&&_++,{headerText:U.join("\r")+"\r",headerLength:_}}let b;const C=this;if(t instanceof ArrayBuffer){const S=new Uint8Array(t),{headerText:_,headerLength:D}=M(S),w=i(_,D);if(w.format==="ascii"){const U=new TextDecoder().decode(S);b=d(U,w)}else b=y(t,w)}else b=d(t,i(t));return b}}class UR{constructor(t){this.arr=t,this.i=0}empty(){return this.i>=this.arr.length}next(){return this.arr[this.i++]}}var ru={exports:{}},LR=ru.exports,hv;function NR(){return hv||(hv=1,(function(r,t){(function(i,s){r.exports=s()})(LR,function(){var i=function(){function s(M){return h.appendChild(M.dom),M}function l(M){for(var b=0;b<h.children.length;b++)h.children[b].style.display=b===M?"block":"none";c=M}var c=0,h=document.createElement("div");h.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",h.addEventListener("click",function(M){M.preventDefault(),l(++c%h.children.length)},!1);var d=(performance||Date).now(),m=d,p=0,v=s(new i.Panel("FPS","#0ff","#002")),g=s(new i.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var y=s(new i.Panel("MB","#f08","#201"));return l(0),{REVISION:16,dom:h,addPanel:s,showPanel:l,begin:function(){d=(performance||Date).now()},end:function(){p++;var M=(performance||Date).now();if(g.update(M-d,200),M>m+1e3&&(v.update(1e3*p/(M-m),100),m=M,p=0,y)){var b=performance.memory;y.update(b.usedJSHeapSize/1048576,b.jsHeapSizeLimit/1048576)}return M},update:function(){d=this.end()},domElement:h,setMode:l}};return i.Panel=function(s,l,c){var h=1/0,d=0,m=Math.round,p=m(window.devicePixelRatio||1),v=80*p,g=48*p,y=3*p,M=2*p,b=3*p,C=15*p,S=74*p,_=30*p,D=document.createElement("canvas");D.width=v,D.height=g,D.style.cssText="width:80px;height:48px";var w=D.getContext("2d");return w.font="bold "+9*p+"px Helvetica,Arial,sans-serif",w.textBaseline="top",w.fillStyle=c,w.fillRect(0,0,v,g),w.fillStyle=l,w.fillText(s,y,M),w.fillRect(b,C,S,_),w.fillStyle=c,w.globalAlpha=.9,w.fillRect(b,C,S,_),{dom:D,update:function(U,O){h=Math.min(h,U),d=Math.max(d,U),w.fillStyle=c,w.globalAlpha=1,w.fillRect(0,0,v,C),w.fillStyle=l,w.fillText(m(U)+" "+s+" ("+m(h)+"-"+m(d)+")",y,M),w.drawImage(D,b+p,C,S-p,_,b,C,S-p,_),w.fillRect(b+S-p,C,p,_),w.fillStyle=c,w.globalAlpha=.9,w.fillRect(b+S-p,C,p,m((1-U/O)*_))}}},i})})(ru)),ru.exports}var OR=NR();const PR=dy(OR);async function zR(r){const t=new Xv,i=15395562,s=32,l=new Kv,c="/point-cloud-visualization/",h=l.load([`${c}skybox/px.png`,`${c}skybox/nx.png`,`${c}skybox/py.png`,`${c}skybox/ny.png`,`${c}skybox/pz.png`,`${c}skybox/nz.png`]);t.background=new pe(s);const d=new Jv(4);t.add(d);const m=new li(75,window.innerWidth/window.innerHeight,.1,4e3);m.position.z=90;const p=new sx;p.setPixelRatio(Math.min(window.devicePixelRatio,2)),r.appendChild(p.domElement);function v(){const{clientWidth:Z,clientHeight:Q}=r;m.aspect=Z/Q,m.updateProjectionMatrix(),p.setSize(Z,Q,!1)}v(),window.addEventListener("resize",v);let g,y="orbit";function M(Z){if(g?.dispose(),Z==="orbit"){const Q=new ox(m,p.domElement);Q.enableDamping=!0,Q.dampingFactor=.05,Q.target.set(0,0,0),Q.update(),g=Q}else{const Q=new lx(m,p.domElement);Q.rotateSpeed=3,Q.zoomSpeed=1.2,Q.panSpeed=.8,g=Q}y=Z}M("orbit");const b=H(64),C=new qv({size:.1,sizeAttenuation:!0,vertexColors:!0,map:b,alphaTest:.5,depthWrite:!1});function S(Z){C.size=Z,C.needsUpdate=!0}function _(Z){C.depthWrite=Z,C.needsUpdate=!0}function D(Z){switch(Z){case"light":t.background=new pe(i);break;case"dark":t.background=new pe(s);break;case"skybox":t.background=h;break}}function w(Z){Z!==y&&M(Z)}let U=null;function O(Z){console.log("setGeomety called!"),U&&(t.remove(U),U.geometry.dispose()),U=new jv(Z,C),t.add(U);const Q=Z.boundingSphere;if(Q){const ft=Q.radius*1.7;m.position.set(Q.center.x,Q.center.y,Q.center.z+ft),g.target.copy(Q.center),g.update()}console.log("setGeometry called, positions:",Z.getAttribute("position").count),console.log("vertexColors",Z.getAttribute("color"))}const z=new PR;r.appendChild(z.dom),z.dom.style.top="11px",z.dom.style.left="38px";let N=!0;function X(){N&&(requestAnimationFrame(X),g.update(),p.render(t,m),z.update())}X();function T(){N=!1,U&&U.geometry.dispose(),C.dispose(),b.dispose(),p.dispose(),g.dispose(),d.dispose(),h.dispose(),r.removeChild(z.dom),r.removeChild(p.domElement),window.removeEventListener("resize",v)}return{controller:{setGeometry:O,setPointSize:S,setDepthWrite:_,setBackground:D,setControls:w,dispose:T},cleanup:T};function H(Z=64){const Q=document.createElement("canvas");Q.width=Q.height=Z;const ft=Q.getContext("2d");ft.clearRect(0,0,Z,Z),ft.fillStyle="white",ft.beginPath(),ft.arc(Z/2,Z/2,Z/2,0,Math.PI*2),ft.fill();const lt=new KM(Q);return lt.minFilter=yn,lt.magFilter=yn,lt.generateMipmaps=!1,lt}}const FR=Fn.forwardRef((r,t)=>{const i=Fn.useRef(null),[s,l]=Fn.useState(null),c={setGeometry:()=>console.warn("Scene not ready"),setPointSize:()=>{},setDepthWrite:()=>{},setBackground:()=>{},setControls:()=>{},dispose:()=>{}};return Fn.useImperativeHandle(t,()=>s??c,[s]),Fn.useEffect(()=>{if(!i.current)return;let h;return zR(i.current).then(({controller:d,cleanup:m})=>{console.log("initScene finished, controller ready"),l(d),h=m}),()=>h?.()},[]),he.jsx("div",{ref:i})}),IR=`precision mediump float;\r
//float calculation precision (higher values may not work, also does not work without this declaration)\r
\r
varying vec3 vColor;\r
\r
void main() {\r
  vColor = color;\r
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);\r
\r
  gl_PointSize = 10.0 / -mvPosition.z; //perspective-correct point size (sizeAttenuation)\r
  gl_Position = projectionMatrix * mvPosition;\r
}`,BR=`precision mediump float;\r
//float calculation precision (higher values may not work, also does not work without this declaration)\r
\r
varying vec3 vColor;\r
\r
void main() {\r
  //make points circular\r
  vec2 c = gl_PointCoord - vec2(0.5);\r
  float r = length(c);\r
  if (r > 0.5) discard;\r
\r
  gl_FragColor = vec4(vColor, 1.0);\r
}`;async function HR(r){const t=new Xv,i=15395562,s=32,l=new Kv,c="/point-cloud-visualization/",h=l.load([`${c}skybox/px.png`,`${c}skybox/nx.png`,`${c}skybox/py.png`,`${c}skybox/ny.png`,`${c}skybox/pz.png`,`${c}skybox/nz.png`]);t.background=new pe(s);const d=new Jv(4);t.add(d);const m=new li(75,window.innerWidth/window.innerHeight,.1,4e3);m.position.z=90;const p=new sx;p.setPixelRatio(Math.min(window.devicePixelRatio,2)),r.appendChild(p.domElement);function v(){const{clientWidth:X,clientHeight:T}=r;m.aspect=X/T,m.updateProjectionMatrix(),p.setSize(X,T,!1)}v(),window.addEventListener("resize",v);let g,y="orbit";function M(X){if(g?.dispose(),X==="orbit"){const T=new ox(m,p.domElement);T.enableDamping=!0,T.dampingFactor=.05,T.target.set(0,0,0),T.update(),g=T}else{const T=new lx(m,p.domElement);T.rotateSpeed=3,T.zoomSpeed=1.2,T.panSpeed=.8,g=T}y=X}M("orbit");const b=new Oi({vertexShader:IR,fragmentShader:BR,transparent:!0,vertexColors:!0,depthWrite:!1});function C(X){b.depthWrite=X,b.needsUpdate=!0}function S(X){switch(X){case"light":t.background=new pe(i);break;case"dark":t.background=new pe(s);break;case"skybox":t.background=h;break}}function _(X){X!==y&&M(X)}let D=null;function w(X){console.log("setGeomety called!"),D&&(t.remove(D),D.geometry.dispose()),D=new jv(X,b),t.add(D);const T=X.boundingSphere;if(T){const L=T.radius*1.7;m.position.set(T.center.x,T.center.y,T.center.z+L),g.target.copy(T.center),g.update()}console.log("setGeometry called, positions:",X.getAttribute("position").count),console.log("vertexColors",X.getAttribute("color"))}let U=!0;function O(){U&&(requestAnimationFrame(O),g.update(),p.render(t,m))}O();function z(){U=!1,D&&D.geometry.dispose(),b.dispose(),p.dispose(),g.dispose(),d.dispose(),h.dispose(),r.removeChild(p.domElement),window.removeEventListener("resize",v)}return{controller:{setGeometry:w,setDepthWrite:C,setBackground:S,setControls:_,dispose:z},cleanup:z}}const GR=Fn.forwardRef((r,t)=>{const i=Fn.useRef(null),[s,l]=Fn.useState(null),c={setGeometry:()=>console.warn("Scene not ready"),setPointSize:()=>{},setDepthWrite:()=>{},setBackground:()=>{},setControls:()=>{},dispose:()=>{}};return Fn.useImperativeHandle(t,()=>s??c,[s]),Fn.useEffect(()=>{if(!i.current)return;let h;return HR(i.current).then(({controller:d,cleanup:m})=>{console.log("initScene finished, controller ready"),l(d),h=m}),()=>h?.()},[]),he.jsx("div",{ref:i})});function dv(r){const i=new DR().parse(r);return i.computeBoundingBox(),i.center(),i.rotateX(-Math.PI/2),i.computeBoundingSphere(),i}function pv({onFileLoaded:r}){const t=Fn.useRef(null),i=s=>{const l=s.target.files?.[0];if(!l)return;const c=new FileReader;c.onload=()=>{const h=c.result;h instanceof ArrayBuffer?r(h):console.error("Unexpcted file result type",h),t.current&&(t.current.value="")},c.readAsArrayBuffer(l)};return he.jsxs("div",{children:[he.jsx("button",{onClick:()=>t.current?.click(),children:"Load PointCloud.ply"}),he.jsx("input",{ref:t,type:"file",accept:".ply",hidden:!0,onChange:i})]})}function VR({sceneRef:r}){return he.jsxs("select",{defaultValue:"0.1",onChange:t=>r.current?.setPointSize?.(Number(t.target.value)),children:[he.jsx("option",{value:"3",children:"Large"}),he.jsx("option",{value:"0.1",children:"Medium"}),he.jsx("option",{value:"0.03",children:"Small"})]})}function mv({sceneRef:r}){const[t,i]=Fn.useState(!1),s=()=>{const l=!t;i(l),r.current?.setDepthWrite(l)};return he.jsxs("button",{onClick:s,children:["Transparency: ",t?"OFF":"ON"]})}function gv({sceneRef:r}){return he.jsxs("select",{defaultValue:"dark",onChange:t=>r.current?.setBackground(t.target.value),children:[he.jsx("option",{value:"dark",children:"Dark"}),he.jsx("option",{value:"light",children:"Light"}),he.jsx("option",{value:"skybox",children:"Skybox"})]})}function _v({sceneRef:r}){const[t,i]=Fn.useState("orbit"),s=()=>{const l=t==="orbit"?"trackball":"orbit";i(l),r.current?.setControls(l)};return he.jsxs("button",{onClick:s,children:["Controls: ",t]})}function kR(){const r=Fn.useRef(null),t=Fn.useRef(null),i=l=>{const c=dv(l);r.current?.setGeometry(c),console.log("sceneRef.current:",r.current)},s=l=>{const c=dv(l);t.current?.setGeometry(c),console.log("sceneRef.current:",t.current)};return he.jsxs("div",{className:"app",children:[he.jsxs("div",{className:"tools",children:[he.jsxs("div",{className:"tools-content",children:[he.jsx("div",{className:"tools-label",children:"1st Point Cloud"}),he.jsx(pv,{onFileLoaded:i}),he.jsx(mv,{sceneRef:r}),he.jsx(_v,{sceneRef:r}),he.jsx("div",{className:"tools-label",children:"Set Point Size"}),he.jsx(VR,{sceneRef:r}),he.jsx("div",{className:"tools-label",children:"Choose background"}),he.jsx(gv,{sceneRef:r})]}),he.jsxs("div",{className:"tools-content",children:[he.jsx("div",{className:"tools-label",children:"2nd Point Cloud"}),he.jsx(pv,{onFileLoaded:s}),he.jsx(mv,{sceneRef:t}),he.jsx(_v,{sceneRef:r}),he.jsx("div",{className:"tools-label",children:"Choose background"}),he.jsx(gv,{sceneRef:t})]})]}),he.jsx("div",{className:"scene-container",children:he.jsx(FR,{ref:r})}),he.jsx("div",{className:"scene-container",children:he.jsx(GR,{ref:t})})]})}Ey.createRoot(document.getElementById("root")).render(he.jsx(Fn.StrictMode,{children:he.jsx(kR,{})}));
