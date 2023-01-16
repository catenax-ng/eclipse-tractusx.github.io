"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[4722],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,g=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return r?n.createElement(g,l(l({ref:t},c),{},{components:r})):n.createElement(g,l({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2099:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const i={title:"TRG 5.06 - Application Configuration"},l=void 0,o={unversionedId:"release/trg-5/trg-5-6",id:"release/trg-5/trg-5-6",title:"TRG 5.06 - Application Configuration",description:"| Author               | Status | Created     | Post-History    |",source:"@site/docs/release/trg-5/trg-5-6.md",sourceDirName:"release/trg-5",slug:"/release/trg-5/trg-5-6",permalink:"/docs/release/trg-5/trg-5-6",draft:!1,editUrl:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io/tree/main/docs/release/trg-5/trg-5-6.md",tags:[],version:"current",frontMatter:{title:"TRG 5.06 - Application Configuration"},sidebar:"developer",previous:{title:"TRG 5.05 - Chart Values",permalink:"/docs/release/trg-5/trg-5-5"},next:{title:"TRG 5.07 - Chart Dependencies",permalink:"/docs/release/trg-5/trg-5-7"}},p={},s=[{value:"Description",id:"description",level:2},{value:"Why",id:"why",level:2},{value:"Don&#39;ts",id:"donts",level:2}],c={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Author"),(0,a.kt)("th",{parentName:"tr",align:null},"Status"),(0,a.kt)("th",{parentName:"tr",align:null},"Created"),(0,a.kt)("th",{parentName:"tr",align:null},"Post-History"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Catena-X System Team"),(0,a.kt)("td",{parentName:"tr",align:null},"Active"),(0,a.kt)("td",{parentName:"tr",align:null},"30-Nov-2022"),(0,a.kt)("td",{parentName:"tr",align:null},"Initial release")))),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Every configuration aspect of your application has to be configurable through your Helm chart."),(0,a.kt)("h2",{id:"why"},"Why"),(0,a.kt)("p",null,"The application will be deployed in different environments and application operators must be able to adjust the\ndeployment to environmental needs."),(0,a.kt)("p",null,"Examples for configurable items:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ingress class, URLs, TLS configuration, etc."),(0,a.kt)("li",{parentName:"ul"},"Resource annotations and labels"),(0,a.kt)("li",{parentName:"ul"},"Signing keys"),(0,a.kt)("li",{parentName:"ul"},"Database connection strings"),(0,a.kt)("li",{parentName:"ul"},"Secrets (with empty values!)"),(0,a.kt)("li",{parentName:"ul"},"Persistent storage configuration"),(0,a.kt)("li",{parentName:"ul"},"Environment variables (e.g. for application configuration)"),(0,a.kt)("li",{parentName:"ul"},"...")),(0,a.kt)("h2",{id:"donts"},"Don'ts"),(0,a.kt)("p",null,"Required application rebuild for configuration (e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"applications.yaml")," without the possibility to overwrite values via\nenv) changes are not expected. The application should be configurable and installable using the Helm chart."))}u.isMDXComponent=!0}}]);