"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[17282],{28442:(e,t,n)=>{n.d(t,{Z:()=>o});const o=function(e){return"string"==typeof e}},84808:(e,t,n)=>{n.d(t,{Z:()=>v});var o=n(63366),r=n(87462),s=n(67294),i=n(86010),l=n(94780),a=n(11496),c=n(54502),d=n(16628),u=n(1588),p=n(34867);function f(e){return(0,p.Z)("MuiBackdrop",e)}(0,u.Z)("MuiBackdrop",["root","invisible"]);var m=n(85893);const b=["children","component","components","componentsProps","className","invisible","open","slotProps","slots","transitionDuration","TransitionComponent"],h=(0,a.ZP)("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.invisible&&t.invisible]}})((({ownerState:e})=>(0,r.Z)({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},e.invisible&&{backgroundColor:"transparent"}))),v=s.forwardRef((function(e,t){var n,s,a;const u=(0,c.Z)({props:e,name:"MuiBackdrop"}),{children:p,component:v="div",components:y={},componentsProps:E={},className:g,invisible:Z=!1,open:x,slotProps:k={},slots:R={},transitionDuration:P,TransitionComponent:w=d.Z}=u,S=(0,o.Z)(u,b),T=(0,r.Z)({},u,{component:v,invisible:Z}),A=(e=>{const{classes:t,invisible:n}=e,o={root:["root",n&&"invisible"]};return(0,l.Z)(o,f,t)})(T),F=null!=(n=k.root)?n:E.root;return(0,m.jsx)(w,(0,r.Z)({in:x,timeout:P},S,{children:(0,m.jsx)(h,(0,r.Z)({"aria-hidden":!0},F,{as:null!=(s=null!=(a=R.root)?a:y.Root)?s:v,className:(0,i.Z)(A.root,g,null==F?void 0:F.className),ownerState:(0,r.Z)({},T,null==F?void 0:F.ownerState),classes:A,ref:t,children:p}))}))}))},16628:(e,t,n)=>{n.d(t,{Z:()=>f});var o=n(87462),r=n(63366),s=n(67294),i=n(8662),l=n(2734),a=n(30577),c=n(51705),d=n(85893);const u=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],p={entering:{opacity:1},entered:{opacity:1}},f=s.forwardRef((function(e,t){const n=(0,l.Z)(),f={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},{addEndListener:m,appear:b=!0,children:h,easing:v,in:y,onEnter:E,onEntered:g,onEntering:Z,onExit:x,onExited:k,onExiting:R,style:P,timeout:w=f,TransitionComponent:S=i.ZP}=e,T=(0,r.Z)(e,u),A=s.useRef(null),F=(0,c.Z)(A,h.ref,t),N=e=>t=>{if(e){const n=A.current;void 0===t?e(n):e(n,t)}},C=N(Z),I=N(((e,t)=>{(0,a.n)(e);const o=(0,a.C)({style:P,timeout:w,easing:v},{mode:"enter"});e.style.webkitTransition=n.transitions.create("opacity",o),e.style.transition=n.transitions.create("opacity",o),E&&E(e,t)})),M=N(g),O=N(R),L=N((e=>{const t=(0,a.C)({style:P,timeout:w,easing:v},{mode:"exit"});e.style.webkitTransition=n.transitions.create("opacity",t),e.style.transition=n.transitions.create("opacity",t),x&&x(e)})),B=N(k);return(0,d.jsx)(S,(0,o.Z)({appear:b,in:y,nodeRef:A,onEnter:I,onEntered:M,onEntering:C,onExit:L,onExited:B,onExiting:O,addEndListener:e=>{m&&m(A.current,e)},timeout:w},T,{children:(e,t)=>s.cloneElement(h,(0,o.Z)({style:(0,o.Z)({opacity:0,visibility:"exited"!==e||y?void 0:"hidden"},p[e],P,h.props.style),ref:F},t))}))}))},17282:(e,t,n)=>{n.d(t,{Z:()=>Y});var o=n(63366),r=n(87462),s=n(67294),i=n(30067),l=n(57094),a=n(73633),c=n(49064),d=n(94780),u=n(73935),p=n(16600),f=n(7960),m=n(85893);const b=s.forwardRef((function(e,t){const{children:n,container:o,disablePortal:r=!1}=e,[l,a]=s.useState(null),c=(0,i.Z)(s.isValidElement(n)?n.ref:null,t);if((0,p.Z)((()=>{r||a(function(e){return"function"==typeof e?e():e}(o)||document.body)}),[o,r]),(0,p.Z)((()=>{if(l&&!r)return(0,f.Z)(t,l),()=>{(0,f.Z)(t,null)}}),[t,l,r]),r){if(s.isValidElement(n)){const e={ref:c};return s.cloneElement(n,e)}return(0,m.jsx)(s.Fragment,{children:n})}return(0,m.jsx)(s.Fragment,{children:l?u.createPortal(n,l):l})}));var h=n(58290),v=n(95806);function y(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function E(e){return parseInt((0,h.Z)(e).getComputedStyle(e).paddingRight,10)||0}function g(e,t,n,o,r){const s=[t,n,...o];[].forEach.call(e.children,(e=>{const t=-1===s.indexOf(e),n=!function(e){const t=-1!==["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName),n="INPUT"===e.tagName&&"hidden"===e.getAttribute("type");return t||n}(e);t&&n&&y(e,r)}))}function Z(e,t){let n=-1;return e.some(((e,o)=>!!t(e)&&(n=o,!0))),n}function x(e,t){const n=[],o=e.container;if(!t.disableScrollLock){if(function(e){const t=(0,l.Z)(e);return t.body===e?(0,h.Z)(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}(o)){const e=(0,v.Z)((0,l.Z)(o));n.push({value:o.style.paddingRight,property:"padding-right",el:o}),o.style.paddingRight=`${E(o)+e}px`;const t=(0,l.Z)(o).querySelectorAll(".mui-fixed");[].forEach.call(t,(t=>{n.push({value:t.style.paddingRight,property:"padding-right",el:t}),t.style.paddingRight=`${E(t)+e}px`}))}let e;if(o.parentNode instanceof DocumentFragment)e=(0,l.Z)(o).body;else{const t=o.parentElement,n=(0,h.Z)(o);e="HTML"===(null==t?void 0:t.nodeName)&&"scroll"===n.getComputedStyle(t).overflowY?t:o}n.push({value:e.style.overflow,property:"overflow",el:e},{value:e.style.overflowX,property:"overflow-x",el:e},{value:e.style.overflowY,property:"overflow-y",el:e}),e.style.overflow="hidden"}return()=>{n.forEach((({value:e,el:t,property:n})=>{e?t.style.setProperty(n,e):t.style.removeProperty(n)}))}}const k=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function R(e){const t=[],n=[];return Array.from(e.querySelectorAll(k)).forEach(((e,o)=>{const r=function(e){const t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?"true"===e.contentEditable||("AUDIO"===e.nodeName||"VIDEO"===e.nodeName||"DETAILS"===e.nodeName)&&null===e.getAttribute("tabindex")?0:e.tabIndex:t}(e);-1!==r&&function(e){return!(e.disabled||"INPUT"===e.tagName&&"hidden"===e.type||function(e){if("INPUT"!==e.tagName||"radio"!==e.type)return!1;if(!e.name)return!1;const t=t=>e.ownerDocument.querySelector(`input[type="radio"]${t}`);let n=t(`[name="${e.name}"]:checked`);return n||(n=t(`[name="${e.name}"]`)),n!==e}(e))}(e)&&(0===r?t.push(e):n.push({documentOrder:o,tabIndex:r,node:e}))})),n.sort(((e,t)=>e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex)).map((e=>e.node)).concat(t)}function P(){return!0}const w=function(e){const{children:t,disableAutoFocus:n=!1,disableEnforceFocus:o=!1,disableRestoreFocus:r=!1,getTabbable:a=R,isEnabled:c=P,open:d}=e,u=s.useRef(!1),p=s.useRef(null),f=s.useRef(null),b=s.useRef(null),h=s.useRef(null),v=s.useRef(!1),y=s.useRef(null),E=(0,i.Z)(t.ref,y),g=s.useRef(null);s.useEffect((()=>{d&&y.current&&(v.current=!n)}),[n,d]),s.useEffect((()=>{if(!d||!y.current)return;const e=(0,l.Z)(y.current);return y.current.contains(e.activeElement)||(y.current.hasAttribute("tabIndex")||y.current.setAttribute("tabIndex","-1"),v.current&&y.current.focus()),()=>{r||(b.current&&b.current.focus&&(u.current=!0,b.current.focus()),b.current=null)}}),[d]),s.useEffect((()=>{if(!d||!y.current)return;const e=(0,l.Z)(y.current),t=t=>{const{current:n}=y;if(null!==n)if(e.hasFocus()&&!o&&c()&&!u.current){if(!n.contains(e.activeElement)){if(t&&h.current!==t.target||e.activeElement!==h.current)h.current=null;else if(null!==h.current)return;if(!v.current)return;let o=[];if(e.activeElement!==p.current&&e.activeElement!==f.current||(o=a(y.current)),o.length>0){var r,s;const e=Boolean((null==(r=g.current)?void 0:r.shiftKey)&&"Tab"===(null==(s=g.current)?void 0:s.key)),t=o[0],n=o[o.length-1];"string"!=typeof t&&"string"!=typeof n&&(e?n.focus():t.focus())}else n.focus()}}else u.current=!1},n=t=>{g.current=t,!o&&c()&&"Tab"===t.key&&e.activeElement===y.current&&t.shiftKey&&(u.current=!0,f.current&&f.current.focus())};e.addEventListener("focusin",t),e.addEventListener("keydown",n,!0);const r=setInterval((()=>{e.activeElement&&"BODY"===e.activeElement.tagName&&t(null)}),50);return()=>{clearInterval(r),e.removeEventListener("focusin",t),e.removeEventListener("keydown",n,!0)}}),[n,o,r,c,d,a]);const Z=e=>{null===b.current&&(b.current=e.relatedTarget),v.current=!0};return(0,m.jsxs)(s.Fragment,{children:[(0,m.jsx)("div",{tabIndex:d?0:-1,onFocus:Z,ref:p,"data-testid":"sentinelStart"}),s.cloneElement(t,{ref:E,onFocus:e=>{null===b.current&&(b.current=e.relatedTarget),v.current=!0,h.current=e.target;const n=t.props.onFocus;n&&n(e)}}),(0,m.jsx)("div",{tabIndex:d?0:-1,onFocus:Z,ref:f,"data-testid":"sentinelEnd"})]})};var S=n(1588),T=n(34867);function A(e){return(0,T.Z)("MuiModal",e)}(0,S.Z)("MuiModal",["root","hidden"]);var F=n(28442);var N=n(86010);function C(e){if(void 0===e)return{};const t={};return Object.keys(e).filter((t=>!(t.match(/^on[A-Z]/)&&"function"==typeof e[t]))).forEach((n=>{t[n]=e[n]})),t}function I(e){const{getSlotProps:t,additionalProps:n,externalSlotProps:o,externalForwardedProps:s,className:i}=e;if(!t){const e=(0,N.Z)(null==s?void 0:s.className,null==o?void 0:o.className,i,null==n?void 0:n.className),t=(0,r.Z)({},null==n?void 0:n.style,null==s?void 0:s.style,null==o?void 0:o.style),l=(0,r.Z)({},n,s,o);return e.length>0&&(l.className=e),Object.keys(t).length>0&&(l.style=t),{props:l,internalRef:void 0}}const l=function(e,t=[]){if(void 0===e)return{};const n={};return Object.keys(e).filter((n=>n.match(/^on[A-Z]/)&&"function"==typeof e[n]&&!t.includes(n))).forEach((t=>{n[t]=e[t]})),n}((0,r.Z)({},s,o)),a=C(o),c=C(s),d=t(l),u=(0,N.Z)(null==d?void 0:d.className,null==n?void 0:n.className,i,null==s?void 0:s.className,null==o?void 0:o.className),p=(0,r.Z)({},null==d?void 0:d.style,null==n?void 0:n.style,null==s?void 0:s.style,null==o?void 0:o.style),f=(0,r.Z)({},d,n,c,a);return u.length>0&&(f.className=u),Object.keys(p).length>0&&(f.style=p),{props:f,internalRef:d.ref}}function M(e,t){return"function"==typeof e?e(t):e}const O=["elementType","externalSlotProps","ownerState"];function L(e){var t;const{elementType:n,externalSlotProps:s,ownerState:l}=e,a=(0,o.Z)(e,O),c=M(s,l),{props:d,internalRef:u}=I((0,r.Z)({},a,{externalSlotProps:c})),p=(0,i.Z)(u,null==c?void 0:c.ref,null==(t=e.additionalProps)?void 0:t.ref),f=function(e,t,n){return void 0===e||(0,F.Z)(e)?t:(0,r.Z)({},t,{ownerState:(0,r.Z)({},t.ownerState,n)})}(n,(0,r.Z)({},d,{ref:p}),l);return f}const B=["children","classes","closeAfterTransition","component","container","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","manager","onBackdropClick","onClose","onKeyDown","open","onTransitionEnter","onTransitionExited","slotProps","slots"];const j=new class{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(e,t){let n=this.modals.indexOf(e);if(-1!==n)return n;n=this.modals.length,this.modals.push(e),e.modalRef&&y(e.modalRef,!1);const o=function(e){const t=[];return[].forEach.call(e.children,(e=>{"true"===e.getAttribute("aria-hidden")&&t.push(e)})),t}(t);g(t,e.mount,e.modalRef,o,!0);const r=Z(this.containers,(e=>e.container===t));return-1!==r?(this.containers[r].modals.push(e),n):(this.containers.push({modals:[e],container:t,restore:null,hiddenSiblings:o}),n)}mount(e,t){const n=Z(this.containers,(t=>-1!==t.modals.indexOf(e))),o=this.containers[n];o.restore||(o.restore=x(o,t))}remove(e,t=!0){const n=this.modals.indexOf(e);if(-1===n)return n;const o=Z(this.containers,(t=>-1!==t.modals.indexOf(e))),r=this.containers[o];if(r.modals.splice(r.modals.indexOf(e),1),this.modals.splice(n,1),0===r.modals.length)r.restore&&r.restore(),e.modalRef&&y(e.modalRef,t),g(r.container,e.mount,e.modalRef,r.hiddenSiblings,!1),this.containers.splice(o,1);else{const e=r.modals[r.modals.length-1];e.modalRef&&y(e.modalRef,!1)}return n}isTopModal(e){return this.modals.length>0&&this.modals[this.modals.length-1]===e}},D=s.forwardRef((function(e,t){var n,u;const{children:p,classes:f,closeAfterTransition:h=!1,component:v,container:E,disableAutoFocus:g=!1,disableEnforceFocus:Z=!1,disableEscapeKeyDown:x=!1,disablePortal:k=!1,disableRestoreFocus:R=!1,disableScrollLock:P=!1,hideBackdrop:S=!1,keepMounted:T=!1,manager:F=j,onBackdropClick:N,onClose:C,onKeyDown:I,open:M,onTransitionEnter:O,onTransitionExited:D,slotProps:K={},slots:U={}}=e,_=(0,o.Z)(e,B),[W,$]=s.useState(!M),H=s.useRef({}),Y=s.useRef(null),q=s.useRef(null),z=(0,i.Z)(q,t),V=function(e){return!!e&&e.props.hasOwnProperty("in")}(p),G=null==(n=e["aria-hidden"])||n,X=()=>(H.current.modalRef=q.current,H.current.mountNode=Y.current,H.current),J=()=>{F.mount(X(),{disableScrollLock:P}),q.current&&(q.current.scrollTop=0)},Q=(0,a.Z)((()=>{const e=function(e){return"function"==typeof e?e():e}(E)||(0,l.Z)(Y.current).body;F.add(X(),e),q.current&&J()})),ee=s.useCallback((()=>F.isTopModal(X())),[F]),te=(0,a.Z)((e=>{Y.current=e,e&&q.current&&(M&&ee()?J():y(q.current,G))})),ne=s.useCallback((()=>{F.remove(X(),G)}),[F,G]);s.useEffect((()=>()=>{ne()}),[ne]),s.useEffect((()=>{M?Q():V&&h||ne()}),[M,ne,V,h,Q]);const oe=(0,r.Z)({},e,{classes:f,closeAfterTransition:h,disableAutoFocus:g,disableEnforceFocus:Z,disableEscapeKeyDown:x,disablePortal:k,disableRestoreFocus:R,disableScrollLock:P,exited:W,hideBackdrop:S,keepMounted:T}),re=(e=>{const{open:t,exited:n,classes:o}=e,r={root:["root",!t&&n&&"hidden"],backdrop:["backdrop"]};return(0,d.Z)(r,A,o)})(oe),se=()=>{$(!1),O&&O()},ie=()=>{$(!0),D&&D(),h&&ne()},le={};void 0===p.props.tabIndex&&(le.tabIndex="-1"),V&&(le.onEnter=(0,c.Z)(se,p.props.onEnter),le.onExited=(0,c.Z)(ie,p.props.onExited));const ae=null!=(u=null!=v?v:U.root)?u:"div",ce=L({elementType:ae,externalSlotProps:K.root,externalForwardedProps:_,additionalProps:{ref:z,role:"presentation",onKeyDown:e=>{I&&I(e),"Escape"===e.key&&ee()&&(x||(e.stopPropagation(),C&&C(e,"escapeKeyDown")))}},className:re.root,ownerState:oe}),de=U.backdrop,ue=L({elementType:de,externalSlotProps:K.backdrop,additionalProps:{"aria-hidden":!0,onClick:e=>{e.target===e.currentTarget&&(N&&N(e),C&&C(e,"backdropClick"))},open:M},className:re.backdrop,ownerState:oe});return T||M||V&&!W?(0,m.jsx)(b,{ref:te,container:E,disablePortal:k,children:(0,m.jsxs)(ae,(0,r.Z)({},ce,{children:[!S&&de?(0,m.jsx)(de,(0,r.Z)({},ue)):null,(0,m.jsx)(w,{disableEnforceFocus:Z,disableAutoFocus:g,disableRestoreFocus:R,isEnabled:ee,open:M,children:s.cloneElement(p,le)})]}))}):null}));var K=n(11496),U=n(54502),_=n(84808);const W=["BackdropComponent","BackdropProps","closeAfterTransition","children","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","slotProps","slots","theme"],$=(0,K.ZP)("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.open&&n.exited&&t.hidden]}})((({theme:e,ownerState:t})=>(0,r.Z)({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"}))),H=(0,K.ZP)(_.Z,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),Y=s.forwardRef((function(e,t){var n,i,l,a,c,d;const u=(0,U.Z)({name:"MuiModal",props:e}),{BackdropComponent:p=H,BackdropProps:f,closeAfterTransition:b=!1,children:h,component:v,components:y={},componentsProps:E={},disableAutoFocus:g=!1,disableEnforceFocus:Z=!1,disableEscapeKeyDown:x=!1,disablePortal:k=!1,disableRestoreFocus:R=!1,disableScrollLock:P=!1,hideBackdrop:w=!1,keepMounted:S=!1,slotProps:T,slots:A,theme:N}=u,C=(0,o.Z)(u,W),[I,O]=s.useState(!0),L={closeAfterTransition:b,disableAutoFocus:g,disableEnforceFocus:Z,disableEscapeKeyDown:x,disablePortal:k,disableRestoreFocus:R,disableScrollLock:P,hideBackdrop:w,keepMounted:S},B=(0,r.Z)({},u,L,{exited:I}),j=(e=>e.classes)(B),K=null!=(n=null!=(i=null==A?void 0:A.root)?i:y.Root)?n:$,_=null!=(l=null!=(a=null==A?void 0:A.backdrop)?a:y.Backdrop)?l:p,Y=null!=(c=null==T?void 0:T.root)?c:E.root,q=null!=(d=null==T?void 0:T.backdrop)?d:E.backdrop;return(0,m.jsx)(D,(0,r.Z)({slots:{root:K,backdrop:_},slotProps:{root:()=>(0,r.Z)({},M(Y,B),!(0,F.Z)(K)&&{as:v,theme:N}),backdrop:()=>(0,r.Z)({},f,M(q,B))},onTransitionEnter:()=>O(!1),onTransitionExited:()=>O(!0),ref:t},C,{classes:j},L,{children:h}))}))},95806:(e,t,n)=>{function o(e){const t=e.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}n.d(t,{Z:()=>o})}}]);