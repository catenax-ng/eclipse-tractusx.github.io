"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[88e3],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),f=r,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},64276:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={},i="Data Plane",s={unversionedId:"kits/tractusx-edc/edc-dataplane/README",id:"version-23.12/kits/tractusx-edc/edc-dataplane/README",title:"Data Plane",description:"The Eclipse Dataspace Connector consists of a Control Plan and a Data Plane Application.",source:"@site/docs-kits_versioned_docs/version-23.12/kits/tractusx-edc/edc-dataplane/README.md",sourceDirName:"kits/tractusx-edc/edc-dataplane",slug:"/kits/tractusx-edc/edc-dataplane/",permalink:"/docs-kits/kits/tractusx-edc/edc-dataplane/",draft:!1,tags:[],version:"23.12",frontMatter:{},sidebar:"kits",previous:{title:"Notice for Docker image",permalink:"/docs-kits/kits/tractusx-edc/edc-controlplane/edc-runtime-memory/notice"},next:{title:"EDC Data-Plane with Azure Key Vault",permalink:"/docs-kits/kits/tractusx-edc/edc-dataplane/edc-dataplane-azure-vault/"}},l={},c=[{value:"Security",id:"security",level:2},{value:"Confidential Settings",id:"confidential-settings",level:3},{value:"Known Data Plane Issues",id:"known-data-plane-issues",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"data-plane"},"Data Plane"),(0,r.kt)("p",null,"The Eclipse Dataspace Connector consists of a ",(0,r.kt)("strong",{parentName:"p"},"Control Plan")," and a ",(0,r.kt)("strong",{parentName:"p"},"Data Plane")," Application.\nWhile the ",(0,r.kt)("strong",{parentName:"p"},"Control Plane")," managing several data transfers, the ",(0,r.kt)("strong",{parentName:"p"},"Data Plane")," is responsible for doing the actual transfer. Like this data is never routed through the control plane itself und must always pass the data plane."),(0,r.kt)("h2",{id:"security"},"Security"),(0,r.kt)("h3",{id:"confidential-settings"},"Confidential Settings"),(0,r.kt)("p",null,"Please be aware that there are several confidential settings, that should not be part of the actual EDC configuration file (e.g. the Vault credentials)."),(0,r.kt)("p",null,"As it is possible to configure EDC settings via environment variables, one way to do it would be via Kubernetes Secrets. For other deployment scenarios than Kubernetes equivalent measures should be taken."),(0,r.kt)("h2",{id:"known-data-plane-issues"},"Known Data Plane Issues"),(0,r.kt)("p",null,"Please have a look at the open issues in the open source repository: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/eclipse-edc/Connector/issues"},"EDC Github Repository")))}u.isMDXComponent=!0}}]);