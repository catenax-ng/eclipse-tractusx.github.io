"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[6119],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||c;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<c;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7972:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>s,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const c={},a="Omejdn DAPS",s={unversionedId:"kits/tractusx-edc/edc-tests/deployment/omejdn/README",id:"kits/tractusx-edc/edc-tests/deployment/omejdn/README",title:"Omejdn DAPS",description:"This chart deployes an IDS Omejdn DAPS.",source:"@site/docs/kits/tractusx-edc/edc-tests/deployment/omejdn/README.md",sourceDirName:"kits/tractusx-edc/edc-tests/deployment/omejdn",slug:"/kits/tractusx-edc/edc-tests/deployment/omejdn/",permalink:"/docs/kits/tractusx-edc/edc-tests/deployment/omejdn/",draft:!1,editUrl:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io/tree/main/docs/kits/tractusx-edc/edc-tests/deployment/omejdn/README.md",tags:[],version:"current",frontMatter:{},sidebar:"kits",previous:{title:"tractusx-connector-memory",permalink:"/docs/kits/tractusx-edc/charts/tractusx-connector-memory/"},next:{title:"Supporting Infrastructure Deployment",permalink:"/docs/kits/tractusx-edc/edc-tests/deployment/test-infrastructure/"}},i={},l=[],u={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"omejdn-daps"},"Omejdn DAPS"),(0,o.kt)("p",null,"This chart deployes an ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Fraunhofer-AISEC/omejdn-server"},"IDS Omejdn DAPS"),"."),(0,o.kt)("p",null,"Two Eclipse Dataspace Connectors need to be registered at the same DAPS instance, to be able to talk to each other. Each connector is registered in the DAPS by an unique client ID and a correpsonding client certificate."),(0,o.kt)("p",null,"New connectors are configured in the omejdn ",(0,o.kt)("em",{parentName:"p"},"values.yaml"),"."),(0,o.kt)("p",null,"In each Eclipse Dataspace Connector configure the following properties to use the DAPS."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-properties"},'    edc.oauth.client.id=<client ID from omejdn values.yaml>\n\n    edc.oauth.provider.jwks.url="http://<name>:4567/.well-known/jwks.json"\n    edc.oauth.token.url="http://<name>:4567/token"\n\n    edc.oauth.private.key.alias=<key vault alias of certificate private key>\n    edc.oauth.public.key.alias=<key vault alias of certificate configured in omejdn values.yaml>\n\n    edc.oauth.provider.audience=idsc:IDS_CONNECTORS_ALL\n')))}p.isMDXComponent=!0}}]);