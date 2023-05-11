"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[5570],{69732:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>y,contentTitle:()=>d,default:()=>v,frontMatter:()=>u,metadata:()=>h,toc:()=>f});var a=s(87462),l=(s(67294),s(3905)),o=s(26389),n=s(94891),r=s(75190),i=s(47507),p=s(24310),c=s(63303),m=(s(75035),s(85162));const u={id:"complete",title:"complete",description:"Requests completion of the transfer process. Due to the asynchronous nature of transfers, a successful response only indicates that the request was successfully received",sidebar_label:"complete",hide_title:!0,hide_table_of_contents:!0,api:{description:"Requests completion of the transfer process. Due to the asynchronous nature of transfers, a successful response only indicates that the request was successfully received",operationId:"complete",parameters:[{in:"path",name:"processId",required:!0,schema:{type:"string",example:null}}],responses:{400:{content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",example:null,properties:{invalidValue:{type:"string",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}},title:"ApiErrorDetail"}}}},description:"Request was malformed, e.g. id was null"}},tags:["Transfer Process Control Api"],method:"post",path:"/transferprocess/{processId}/complete",info:{title:"EDC Control Plane API",description:null,version:"0.0.1-SNAPSHOT"},postman:{name:"complete",description:{content:"Requests completion of the transfer process. Due to the asynchronous nature of transfers, a successful response only indicates that the request was successfully received",type:"text/plain"},url:{path:["transferprocess",":processId","complete"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"processId"}]},header:[{key:"Accept",value:"application/json"}],method:"POST"}},sidebar_class_name:"post api-method",info_path:"./docs/kits/tractusx-edc/docs/kit/development-view/openAPI/control-api/control-plane-api/edc-control-plane-api",custom_edit_url:null},d=void 0,h={unversionedId:"kits/tractusx-edc/docs/kit/development-view/openAPI/control-api/control-plane-api/complete",id:"kits/tractusx-edc/docs/kit/development-view/openAPI/control-api/control-plane-api/complete",title:"complete",description:"Requests completion of the transfer process. Due to the asynchronous nature of transfers, a successful response only indicates that the request was successfully received",source:"@site/docs/kits/tractusx-edc/docs/kit/development-view/openAPI/control-api/control-plane-api/complete.api.mdx",sourceDirName:"kits/tractusx-edc/docs/kit/development-view/openAPI/control-api/control-plane-api",slug:"/kits/tractusx-edc/docs/kit/development-view/openAPI/control-api/control-plane-api/complete",permalink:"/docs/kits/tractusx-edc/docs/kit/development-view/openAPI/control-api/control-plane-api/complete",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"complete",title:"complete",description:"Requests completion of the transfer process. Due to the asynchronous nature of transfers, a successful response only indicates that the request was successfully received",sidebar_label:"complete",hide_title:!0,hide_table_of_contents:!0,api:{description:"Requests completion of the transfer process. Due to the asynchronous nature of transfers, a successful response only indicates that the request was successfully received",operationId:"complete",parameters:[{in:"path",name:"processId",required:!0,schema:{type:"string",example:null}}],responses:{400:{content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",example:null,properties:{invalidValue:{type:"string",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}},title:"ApiErrorDetail"}}}},description:"Request was malformed, e.g. id was null"}},tags:["Transfer Process Control Api"],method:"post",path:"/transferprocess/{processId}/complete",info:{title:"EDC Control Plane API",description:null,version:"0.0.1-SNAPSHOT"},postman:{name:"complete",description:{content:"Requests completion of the transfer process. Due to the asynchronous nature of transfers, a successful response only indicates that the request was successfully received",type:"text/plain"},url:{path:["transferprocess",":processId","complete"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"processId"}]},header:[{key:"Accept",value:"application/json"}],method:"POST"}},sidebar_class_name:"post api-method",info_path:"./docs/kits/tractusx-edc/docs/kit/development-view/openAPI/control-api/control-plane-api/edc-control-plane-api",custom_edit_url:null},sidebar:"kits",previous:{title:"Introduction",permalink:"/docs/kits/tractusx-edc/docs/kit/development-view/openAPI/control-api/control-plane-api/edc-control-plane-api"},next:{title:"fail",permalink:"/docs/kits/tractusx-edc/docs/kit/development-view/openAPI/control-api/control-plane-api/fail"}},y={},f=[{value:"complete",id:"complete",level:2}],k={toc:f};function v(e){let{components:t,...s}=e;return(0,l.kt)("wrapper",(0,a.Z)({},k,s,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"complete"},"complete"),(0,l.kt)("p",null,"Requests completion of the transfer process. Due to the asynchronous nature of transfers, a successful response only indicates that the request was successfully received"),(0,l.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"Path Parameters")),(0,l.kt)("div",null,(0,l.kt)("ul",null,(0,l.kt)(r.Z,{className:"paramsItem",param:{in:"path",name:"processId",required:!0,schema:{type:"string",example:null}},mdxType:"ParamsItem"})))),(0,l.kt)("div",null,(0,l.kt)(o.Z,{mdxType:"ApiTabs"},(0,l.kt)(m.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Request was malformed, e.g. id was null")),(0,l.kt)("div",null,(0,l.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(c.Z,{mdxType:"SchemaTabs"},(0,l.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{textAlign:"left"}},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)(p.Z,{collapsible:!1,name:"invalidValue",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!1,name:"path",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,l.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(i.Z,{responseExample:"null",language:"json",mdxType:"ResponseSamples"}))))))))))}v.isMDXComponent=!0}}]);