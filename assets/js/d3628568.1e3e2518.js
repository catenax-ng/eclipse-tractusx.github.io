"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[3170],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,m=u["".concat(c,".").concat(d)]||u[d]||h[d]||i;return r?a.createElement(m,o(o({ref:t},l),{},{components:r})):a.createElement(m,o({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:n,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},61509:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const i={id:"Best Practices",title:"Best Practices",description:"",sidebar_position:4},o=void 0,s={unversionedId:"kits/Business Partner Kit/Documentation BPDM/Best Practices",id:"kits/Business Partner Kit/Documentation BPDM/Best Practices",title:"Best Practices",description:"",source:"@site/docs/kits/Business Partner Kit/Documentation BPDM/page_best-practices.md",sourceDirName:"kits/Business Partner Kit/Documentation BPDM",slug:"/kits/Business Partner Kit/Documentation BPDM/Best Practices",permalink:"/docs/kits/Business Partner Kit/Documentation BPDM/Best Practices",draft:!1,editUrl:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io/tree/main/docs/kits/Business Partner Kit/Documentation BPDM/page_best-practices.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"Best Practices",title:"Best Practices",description:"",sidebar_position:4},sidebar:"kits",previous:{title:"Use Cases",permalink:"/docs/kits/Business Partner Kit/Documentation BPDM/Use Cases"},next:{title:"Troubleshooting",permalink:"/docs/kits/Business Partner Kit/Documentation BPDM/Troubleshooting"}},c={},p=[{value:"Running BPDM service locally",id:"running-bpdm-service-locally",level:2},{value:"Intergrating with BPDM api",id:"intergrating-with-bpdm-api",level:2}],l={toc:p};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Depending on usage, we have categorized best practices for two types of user."),(0,n.kt)("h2",{id:"running-bpdm-service-locally"},"Running BPDM service locally"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Ensure that you have all the prerequisites installed before attempting to run the BPDM service. These include Maven, JDK17, PostgreSQL 14.2, OpenSearch 2.1.0, Keycloak 17.0.0, and a connection to an SaaS.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Follow the instructions provided in the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/bpdm/blob/main/INSTALL.md"},"INSTALL.md")," and ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/bpdm/blob/main/README.md"},"README.md")," files carefully to ensure that you install and configure the service correctly.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Use the default configuration settings for PostgreSQL and OpenSearch unless you have a specific reason to change them.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Ensure that you have a Postgresql database and an Opensearch instance available to connect to before attempting to run the service or you can use existing config using ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/bpdm/blob/main/docker-compose.yml"},"docker-compose.yml"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Check the configuration files, such as application.properties, application-auth.properties, and application-saas.properties, to ensure that they are correctly configured for your environment.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Use the REST API documentation provided at ",(0,n.kt)("a",{parentName:"p",href:"http://localhost:8080/api/swagger-ui"},"http://localhost:8080/api/swagger-ui")," and ",(0,n.kt)("a",{parentName:"p",href:"http://localhost:8081/api/swagger-ui"},"http://localhost:8081/api/swagger-ui")," for the BPDM Pool and Gate respectively to familiarize yourself with the API and to test your setup.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Use the profiles, such as default, auth, and saas, provided by the service to configure it for your specific use case.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Ensure that you have a connection to the BPDM Pool API if you plan to use the BPDM Gate. Follow standard security practices when deploying the BPDM service, such as securing access to the service, and securing access to any data or credentials used by the service."))),(0,n.kt)("h2",{id:"intergrating-with-bpdm-api"},"Intergrating with BPDM api"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Always use secure connections:",(0,n.kt)("br",{parentName:"p"}),"\n","Ensure that you use HTTPS protocol instead of HTTP to make API requests to the BPDM server. This ensures the security and confidentiality of the data being transmitted.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Follow the API documentation ",(0,n.kt)("a",{parentName:"p",href:"/docs/kits/Business%20Partner%20Kit/Documentation%20BPDM/Introduction#intergrating-with-bpdm-api"},"getting Started section")," :",(0,n.kt)("br",{parentName:"p"}),"\n","Read the BPDM API documentation carefully and follow the guidelines provided. This will help you to understand the API, its capabilities, and how to use it properly.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Use proper authentication using OAuth 2.0:",(0,n.kt)("br",{parentName:"p"}),"\n","Use the appropriate authentication method provided by BPDM service and also mentioned steps for ",(0,n.kt)("a",{parentName:"p",href:"/docs/kits/Business%20Partner%20Kit/Documentation%20BPDM/Introduction#intergrating-with-bpdm-api"},"authentication")," to access the API. This will ensure that only authorized users have access to the API.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Handle errors gracefully:",(0,n.kt)("br",{parentName:"p"}),"\n","Always handle errors returned by the API gracefully and provide meaningful error messages to the user. This will help to diagnose and resolve any issues that may occur.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Use appropriate data types:",(0,n.kt)("br",{parentName:"p"}),"\n","Use the appropriate data types when sending data to the API and when receiving data from it. This will help to ensure that the data is correctly interpreted and processed by both your application and the API.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Test thoroughly:",(0,n.kt)("br",{parentName:"p"}),"\n","Test your application thoroughly before deploying it in a production environment. This will help to identify any issues or bugs before they can impact users or the BPDM API service.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Monitor usage:",(0,n.kt)("br",{parentName:"p"}),"\n","Monitor your application's usage of the BPDM API to ensure that it is not consuming too many resources or causing performance issues. If necessary, adjust your application's usage or scale up the resources it uses."))))}u.isMDXComponent=!0}}]);