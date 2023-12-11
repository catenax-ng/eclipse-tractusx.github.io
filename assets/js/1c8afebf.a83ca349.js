"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[12063],{89087:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>u,default:()=>k,frontMatter:()=>d,metadata:()=>m,toc:()=>x});var s=a(87462),r=(a(67294),a(3905)),i=a(26389),n=a(94891),o=(a(75190),a(47507)),l=a(24310),p=a(63303),c=(a(75035),a(85162));const d={id:"create-entry",title:"createEntry",description:"Creates an entry for a particular BPN",sidebar_label:"createEntry",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Business Partner Group"],description:"Creates an entry for a particular BPN",operationId:"createEntry",requestBody:{content:{"application/json":{schema:{type:"object",properties:{"@id":{type:"string",example:null},groups:{uniqueItems:!0,type:"array",example:null,items:{type:"string",example:null}}},example:{"@context":{tx:"https://w3id.org/tractusx/v0.0.1/ns/"},"@id":"tx:BPN000001234","tx:groups":["group1","group2","group3"]}}}}},responses:{204:{description:"The object was successfully created"},400:{description:"Request body was malformed",content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",properties:{invalidValue:{type:"object",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}},example:null}}}}},409:{description:"An entry already exists for that BPN"}},method:"post",path:"/business-partner-groups",servers:[{url:"/"}],jsonRequestBodyExample:{"@context":{tx:"https://w3id.org/tractusx/v0.0.1/ns/"},"@id":"tx:BPN000001234","tx:groups":["group1","group2","group3"]},info:{title:"Tractus-X EDC REST API",description:"Tractus-X EDC API Documentation",license:{name:"Apache License v2.0",url:"http://apache.org/v2"},version:"0.5.1-SNAPSHOT"},postman:{name:"create Entry",description:{content:"Creates an entry for a particular BPN",type:"text/plain"},url:{path:["business-partner-groups"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/tractus-x-edc-rest-api",custom_edit_url:null},u=void 0,m={unversionedId:"kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/create-entry",id:"version-23.12/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/create-entry",title:"createEntry",description:"Creates an entry for a particular BPN",source:"@site/docs-kits_versioned_docs/version-23.12/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/create-entry.api.mdx",sourceDirName:"kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api",slug:"/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/create-entry",permalink:"/docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/create-entry",draft:!1,editUrl:null,tags:[],version:"23.12",frontMatter:{id:"create-entry",title:"createEntry",description:"Creates an entry for a particular BPN",sidebar_label:"createEntry",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Business Partner Group"],description:"Creates an entry for a particular BPN",operationId:"createEntry",requestBody:{content:{"application/json":{schema:{type:"object",properties:{"@id":{type:"string",example:null},groups:{uniqueItems:!0,type:"array",example:null,items:{type:"string",example:null}}},example:{"@context":{tx:"https://w3id.org/tractusx/v0.0.1/ns/"},"@id":"tx:BPN000001234","tx:groups":["group1","group2","group3"]}}}}},responses:{204:{description:"The object was successfully created"},400:{description:"Request body was malformed",content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",properties:{invalidValue:{type:"object",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}},example:null}}}}},409:{description:"An entry already exists for that BPN"}},method:"post",path:"/business-partner-groups",servers:[{url:"/"}],jsonRequestBodyExample:{"@context":{tx:"https://w3id.org/tractusx/v0.0.1/ns/"},"@id":"tx:BPN000001234","tx:groups":["group1","group2","group3"]},info:{title:"Tractus-X EDC REST API",description:"Tractus-X EDC API Documentation",license:{name:"Apache License v2.0",url:"http://apache.org/v2"},version:"0.5.1-SNAPSHOT"},postman:{name:"create Entry",description:{content:"Creates an entry for a particular BPN",type:"text/plain"},url:{path:["business-partner-groups"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/tractus-x-edc-rest-api",custom_edit_url:null},sidebar:"kits",previous:{title:"createContractDefinition",permalink:"/docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/create-contract-definition"},next:{title:"createPolicyDefinition",permalink:"/docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/create-policy-definition"}},y={},x=[{value:"createEntry",id:"createentry",level:2}],v={toc:x};function k(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,s.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"createentry"},"createEntry"),(0,r.kt)("p",null,"Creates an entry for a particular BPN"),(0,r.kt)(n.Z,{mdxType:"MimeTabs"},(0,r.kt)(c.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Request Body")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(l.Z,{collapsible:!1,name:"@id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"groups",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string[]",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))),(0,r.kt)("div",null,(0,r.kt)(i.Z,{mdxType:"ApiTabs"},(0,r.kt)(c.Z,{label:"204",value:"204",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"The object was successfully created")),(0,r.kt)("div",null)),(0,r.kt)(c.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Request body was malformed")),(0,r.kt)("div",null,(0,r.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(c.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(p.Z,{mdxType:"SchemaTabs"},(0,r.kt)(c.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema"),(0,r.kt)("span",{style:{opacity:"0.6"}}," array")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(l.Z,{collapsible:!1,name:"invalidValue",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"object",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"path",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(l.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,r.kt)(c.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(o.Z,{responseExample:"null",language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(c.Z,{label:"409",value:"409",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"An entry already exists for that BPN")),(0,r.kt)("div",null)))))}k.isMDXComponent=!0}}]);