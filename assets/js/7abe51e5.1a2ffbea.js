"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[94654],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=a,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4685:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const i={},o="SQL-based `EndpointDataReferenceCache`  extension",s={unversionedId:"kits/tractusx-edc/edc-extensions/edr-cache-sql/README",id:"kits/tractusx-edc/edc-extensions/edr-cache-sql/README",title:"SQL-based `EndpointDataReferenceCache`  extension",description:"This extensions provide a persistent implementation of EndpointDataReferenceCache.",source:"@site/docs-kits/kits/tractusx-edc/edc-extensions/edr-cache-sql/README.md",sourceDirName:"kits/tractusx-edc/edc-extensions/edr-cache-sql",slug:"/kits/tractusx-edc/edc-extensions/edr-cache-sql/",permalink:"/docs-kits/next/kits/tractusx-edc/edc-extensions/edr-cache-sql/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"kits",previous:{title:"Data Plane Selector Configuration Extension",permalink:"/docs-kits/next/kits/tractusx-edc/edc-extensions/dataplane-selector-configuration/"},next:{title:"HashiCorp Vault Extension",permalink:"/docs-kits/next/kits/tractusx-edc/edc-extensions/hashicorp-vault/"}},c={},l=[{value:"1. Table schema",id:"1-table-schema",level:2},{value:"2. Configuration",id:"2-configuration",level:2}],p={toc:l};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sql-based-endpointdatareferencecache--extension"},"SQL-based ",(0,a.kt)("inlineCode",{parentName:"h1"},"EndpointDataReferenceCache"),"  extension"),(0,a.kt)("p",null,"This extensions provide a persistent implementation of ",(0,a.kt)("inlineCode",{parentName:"p"},"EndpointDataReferenceCache"),"."),(0,a.kt)("p",null,"It will store in the database this fields:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"tranferProcessId"),(0,a.kt)("li",{parentName:"ul"},"agreementId"),(0,a.kt)("li",{parentName:"ul"},"assetId"),(0,a.kt)("li",{parentName:"ul"},"edrId")),(0,a.kt)("p",null,"It represent a single EDR negotiation done with the new Control Plane Adapter APIs."),(0,a.kt)("p",null,"The EDR itself it is stored in the participant vault with a prefixed key ",(0,a.kt)("inlineCode",{parentName:"p"},"edr__<edrId>"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Note that the SQL statements (DDL) are specific to and only tested with PostgreSQL. Using it with other RDBMS may\nwork but might have unexpected side effects!"))),(0,a.kt)("h2",{id:"1-table-schema"},"1. Table schema"),(0,a.kt)("p",null,"see ",(0,a.kt)("a",{parentName:"p",href:"docs/schema.sql"},"schema.sql"),"."),(0,a.kt)("h2",{id:"2-configuration"},"2. Configuration"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Key"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Mandatory"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"edc.datasource.edr.name"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Datasource used by this extension"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"edr")))))}d.isMDXComponent=!0}}]);