"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[33288],{54277:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>h,default:()=>g,frontMatter:()=>c,metadata:()=>d,toc:()=>k});var l=a(87462),i=(a(67294),a(3905)),s=a(26389),n=a(94891),r=(a(75190),a(47507)),o=a(24310),p=a(63303),m=(a(75035),a(85162));const c={id:"check-health",title:"checkHealth",description:"Performs a liveness probe to determine whether the runtime is working properly.",sidebar_label:"checkHealth",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Application Observability"],description:"Performs a liveness probe to determine whether the runtime is working properly.",operationId:"checkHealth",responses:{200:{description:"The runtime is working properly.",content:{"application/json":{schema:{type:"object",properties:{componentResults:{type:"array",example:null,items:{type:"object",properties:{component:{type:"string",example:null},failure:{type:"object",properties:{failureDetail:{type:"string",example:null},messages:{type:"array",example:null,items:{type:"string",example:null}}},example:null,title:"Failure"},isHealthy:{type:"boolean",example:null}},example:null,title:"HealthCheckResult"}},isSystemHealthy:{type:"boolean",example:null}},example:null,title:"HealthStatus"}}}}},method:"get",path:"/check/health",servers:[{url:"/"}],info:{title:"management-api",description:"REST API documentation for the management-api",version:"0.1.3-SNAPSHOT"},postman:{name:"check Health",description:{content:"Performs a liveness probe to determine whether the runtime is working properly.",type:"text/plain"},url:{path:["check","health"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/management-api",custom_edit_url:null},h=void 0,d={unversionedId:"kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/check-health",id:"kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/check-health",title:"checkHealth",description:"Performs a liveness probe to determine whether the runtime is working properly.",source:"@site/docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/check-health.api.mdx",sourceDirName:"kits/tractusx-edc/docs/kit/development-view/openAPI/management-api",slug:"/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/check-health",permalink:"/docs-kits/next/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/check-health",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"check-health",title:"checkHealth",description:"Performs a liveness probe to determine whether the runtime is working properly.",sidebar_label:"checkHealth",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Application Observability"],description:"Performs a liveness probe to determine whether the runtime is working properly.",operationId:"checkHealth",responses:{200:{description:"The runtime is working properly.",content:{"application/json":{schema:{type:"object",properties:{componentResults:{type:"array",example:null,items:{type:"object",properties:{component:{type:"string",example:null},failure:{type:"object",properties:{failureDetail:{type:"string",example:null},messages:{type:"array",example:null,items:{type:"string",example:null}}},example:null,title:"Failure"},isHealthy:{type:"boolean",example:null}},example:null,title:"HealthCheckResult"}},isSystemHealthy:{type:"boolean",example:null}},example:null,title:"HealthStatus"}}}}},method:"get",path:"/check/health",servers:[{url:"/"}],info:{title:"management-api",description:"REST API documentation for the management-api",version:"0.1.3-SNAPSHOT"},postman:{name:"check Health",description:{content:"Performs a liveness probe to determine whether the runtime is working properly.",type:"text/plain"},url:{path:["check","health"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Accept",value:"application/json"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/management-api",custom_edit_url:null},sidebar:"kits",previous:{title:"cancelNegotiation",permalink:"/docs-kits/next/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/cancel-negotiation"},next:{title:"createAsset",permalink:"/docs-kits/next/kits/tractusx-edc/docs/kit/development-view/openAPI/management-api/create-asset"}},u={},k=[{value:"checkHealth",id:"checkhealth",level:2}],y={toc:k};function g(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,l.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"checkhealth"},"checkHealth"),(0,i.kt)("p",null,"Performs a liveness probe to determine whether the runtime is working properly."),(0,i.kt)("div",null,(0,i.kt)(s.Z,{mdxType:"ApiTabs"},(0,i.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"The runtime is working properly.")),(0,i.kt)("div",null,(0,i.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(p.Z,{mdxType:"SchemaTabs"},(0,i.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"componentResults"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(o.Z,{collapsible:!1,name:"component",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"failure"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(o.Z,{collapsible:!1,name:"failureDetail",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,i.kt)(o.Z,{collapsible:!1,name:"messages",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",example:null,items:{type:"string",example:null}},mdxType:"SchemaItem"})))),(0,i.kt)(o.Z,{collapsible:!1,name:"isHealthy",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",example:null},mdxType:"SchemaItem"}),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,i.kt)(o.Z,{collapsible:!1,name:"isSystemHealthy",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",example:null},mdxType:"SchemaItem"})))),(0,i.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(r.Z,{responseExample:"null",language:"json",mdxType:"ResponseSamples"}))))))))))}g.isMDXComponent=!0}}]);