"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[1830],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=i,b=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(b,o(o({ref:t},p),{},{components:n})):r.createElement(b,o({ref:t},p))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},11258:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(87462),i=(n(67294),n(3905));const a={},o="Migration from 0.3.0 to 0.3.1",s={unversionedId:"kits/tractusx-edc/docs/migration/Version_0.3.0_0.3.1",id:"kits/tractusx-edc/docs/migration/Version_0.3.0_0.3.1",title:"Migration from 0.3.0 to 0.3.1",description:"Observability API changes",source:"@site/docs/kits/tractusx-edc/docs/migration/Version_0.3.0_0.3.1.md",sourceDirName:"kits/tractusx-edc/docs/migration",slug:"/kits/tractusx-edc/docs/migration/Version_0.3.0_0.3.1",permalink:"/docs/kits/tractusx-edc/docs/migration/Version_0.3.0_0.3.1",draft:!1,editUrl:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io/tree/main/docs/kits/tractusx-edc/docs/migration/Version_0.3.0_0.3.1.md",tags:[],version:"current",frontMatter:{},sidebar:"kits",previous:{title:"Migration from 0.1.x to 0.3.x",permalink:"/docs/kits/tractusx-edc/docs/migration/Version_0.1.x_0.3.x"},next:{title:"Migration from 0.3.0 to 0.3.1",permalink:"/docs/kits/tractusx-edc/docs/migration/Version_0.3.1_0.3.2"}},c={},l=[{value:"Observability API changes",id:"observability-api-changes",level:2},{value:"Settings changes",id:"settings-changes",level:2}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"migration-from-030-to-031"},"Migration from 0.3.0 to 0.3.1"),(0,i.kt)("h2",{id:"observability-api-changes"},"Observability API changes"),(0,i.kt)("p",null,"All endpoints (",(0,i.kt)("inlineCode",{parentName:"p"},"/health"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"/startup"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"/liveness"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"/readiness"),") of the Observability API now support unauthenticated access, if configured. That will put the\nObservability API under a new context named ",(0,i.kt)("inlineCode",{parentName:"p"},'"observability"'),", which consequently requires proper web context\nconfiguration for it. Note that the name of the context cannot be changed."),(0,i.kt)("h2",{id:"settings-changes"},"Settings changes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tractusx.api.observability.allow-insecure"),": boolean value that enables (",(0,i.kt)("inlineCode",{parentName:"li"},"true"),") the unauthenticated access."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"web.http.observability.port"),": integer value that specifies the port of the ",(0,i.kt)("inlineCode",{parentName:"li"},"observability")," context. ",(0,i.kt)("strong",{parentName:"li"},"Mandatory if\nunauthenticated access is enabled!")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"web.http.observability.path"),": string value that specifies the path of the ",(0,i.kt)("inlineCode",{parentName:"li"},"observability")," context. ",(0,i.kt)("strong",{parentName:"li"},"Mandatory if\nunauthenticated access is enabled!"))))}u.isMDXComponent=!0}}]);