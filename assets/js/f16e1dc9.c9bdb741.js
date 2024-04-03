"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[8864],{32741:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>v,contentTitle:()=>u,default:()=>x,frontMatter:()=>c,metadata:()=>y,toc:()=>h});var s=a(87462),l=(a(67294),a(3905)),i=a(26389),d=a(94891),p=a(75190),n=a(47507),r=a(24310),o=a(63303),m=(a(75035),a(85162));const c={id:"update-data-address",title:"updateDataAddress",description:"Updates a DataAddress for an asset with the given ID.",sidebar_label:"updateDataAddress",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Asset"],description:"Updates a DataAddress for an asset with the given ID.",operationId:"updateDataAddress",parameters:[{name:"assetId",in:"path",required:!0,style:"simple",explode:!1,schema:{type:"string",example:null}}],requestBody:{content:{"application/json":{schema:{type:"object",properties:{createdAt:{type:"integer",format:"int64",example:null},dataAddress:{type:"object",properties:{"@type":{type:"string",example:"https://w3id.org/edc/v0.0.1/ns/DataAddress"},type:{type:"string",example:null}},example:null},id:{type:"string",example:null},privateProperties:{type:"object",additionalProperties:{type:"object",example:null},example:null},properties:{type:"object",additionalProperties:{type:"object",example:null},example:null}},example:null}}}},responses:{200:{description:"Asset was updated successfully"},400:{description:"Request was malformed, e.g. id was null",content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",properties:{invalidValue:{type:"object",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}},example:null}}}}},404:{description:"An asset with the given ID does not exist",content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",properties:{invalidValue:{type:"object",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}},example:null}}}}}},deprecated:!0,method:"put",path:"/v2/assets/{assetId}/dataaddress",servers:[{url:"/"}],jsonRequestBodyExample:null,info:{title:"Tractus-X EDC REST API",description:"Tractus-X EDC API Documentation",license:{name:"Apache License v2.0",url:"http://apache.org/v2"},version:"0.5.1-SNAPSHOT"},postman:{name:"update Data Address",description:{content:"Updates a DataAddress for an asset with the given ID.",type:"text/plain"},url:{path:["v2","assets",":assetId","dataaddress"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"assetId"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/tractus-x-edc-rest-api",custom_edit_url:null},u=void 0,y={unversionedId:"kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/update-data-address",id:"version-23.12/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/update-data-address",title:"updateDataAddress",description:"Updates a DataAddress for an asset with the given ID.",source:"@site/docs-kits_versioned_docs/version-23.12/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/update-data-address.api.mdx",sourceDirName:"kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api",slug:"/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/update-data-address",permalink:"/docs-kits/23.12/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/update-data-address",draft:!1,editUrl:null,tags:[],version:"23.12",frontMatter:{id:"update-data-address",title:"updateDataAddress",description:"Updates a DataAddress for an asset with the given ID.",sidebar_label:"updateDataAddress",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Asset"],description:"Updates a DataAddress for an asset with the given ID.",operationId:"updateDataAddress",parameters:[{name:"assetId",in:"path",required:!0,style:"simple",explode:!1,schema:{type:"string",example:null}}],requestBody:{content:{"application/json":{schema:{type:"object",properties:{createdAt:{type:"integer",format:"int64",example:null},dataAddress:{type:"object",properties:{"@type":{type:"string",example:"https://w3id.org/edc/v0.0.1/ns/DataAddress"},type:{type:"string",example:null}},example:null},id:{type:"string",example:null},privateProperties:{type:"object",additionalProperties:{type:"object",example:null},example:null},properties:{type:"object",additionalProperties:{type:"object",example:null},example:null}},example:null}}}},responses:{200:{description:"Asset was updated successfully"},400:{description:"Request was malformed, e.g. id was null",content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",properties:{invalidValue:{type:"object",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}},example:null}}}}},404:{description:"An asset with the given ID does not exist",content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",properties:{invalidValue:{type:"object",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}},example:null}}}}}},deprecated:!0,method:"put",path:"/v2/assets/{assetId}/dataaddress",servers:[{url:"/"}],jsonRequestBodyExample:null,info:{title:"Tractus-X EDC REST API",description:"Tractus-X EDC API Documentation",license:{name:"Apache License v2.0",url:"http://apache.org/v2"},version:"0.5.1-SNAPSHOT"},postman:{name:"update Data Address",description:{content:"Updates a DataAddress for an asset with the given ID.",type:"text/plain"},url:{path:["v2","assets",":assetId","dataaddress"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"assetId"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/tractus-x-edc-rest-api",custom_edit_url:null},sidebar:"kits",previous:{title:"updateContractDefinition",permalink:"/docs-kits/23.12/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/update-contract-definition"},next:{title:"updateEntry",permalink:"/docs-kits/23.12/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/update-entry"}},v={},h=[{value:"updateDataAddress",id:"updatedataaddress",level:2}],k={toc:h};function x(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,s.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"updatedataaddress"},"updateDataAddress"),(0,l.kt)("admonition",{title:"deprecated",type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"This endpoint has been deprecated and may be removed in future versions of the API.")),(0,l.kt)("p",null,"Updates a DataAddress for an asset with the given ID."),(0,l.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"Path Parameters")),(0,l.kt)("div",null,(0,l.kt)("ul",null,(0,l.kt)(p.Z,{className:"paramsItem",param:{name:"assetId",in:"path",required:!0,style:"simple",explode:!1,schema:{type:"string",example:null}},mdxType:"ParamsItem"})))),(0,l.kt)(d.Z,{mdxType:"MimeTabs"},(0,l.kt)(m.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{textAlign:"left"}},(0,l.kt)("strong",null,"Request Body")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(r.Z,{collapsible:!1,name:"createdAt",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"int64",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(r.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{}},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"dataAddress"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object")),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)(r.Z,{collapsible:!1,name:"@type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(r.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,l.kt)(r.Z,{collapsible:!1,name:"id",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(r.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{}},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"privateProperties"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object")),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)("li",null,(0,l.kt)("div",null,(0,l.kt)("code",null,"property name*"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object")))))),(0,l.kt)(r.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{}},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"properties"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object")),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)("li",null,(0,l.kt)("div",null,(0,l.kt)("code",null,"property name*"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object")))))))))),(0,l.kt)("div",null,(0,l.kt)(i.Z,{mdxType:"ApiTabs"},(0,l.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Asset was updated successfully")),(0,l.kt)("div",null)),(0,l.kt)(m.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Request was malformed, e.g. id was null")),(0,l.kt)("div",null,(0,l.kt)(d.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(o.Z,{mdxType:"SchemaTabs"},(0,l.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{textAlign:"left"}},(0,l.kt)("strong",null,"Schema"),(0,l.kt)("span",{style:{opacity:"0.6"}}," array")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(r.Z,{collapsible:!1,name:"invalidValue",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"object",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(r.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(r.Z,{collapsible:!1,name:"path",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(r.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,l.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(n.Z,{responseExample:"null",language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(m.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"An asset with the given ID does not exist")),(0,l.kt)("div",null,(0,l.kt)(d.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(o.Z,{mdxType:"SchemaTabs"},(0,l.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{textAlign:"left"}},(0,l.kt)("strong",null,"Schema"),(0,l.kt)("span",{style:{opacity:"0.6"}}," array")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(r.Z,{collapsible:!1,name:"invalidValue",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"object",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(r.Z,{collapsible:!1,name:"message",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(r.Z,{collapsible:!1,name:"path",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,l.kt)(r.Z,{collapsible:!1,name:"type",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,l.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(n.Z,{responseExample:"null",language:"json",mdxType:"ResponseSamples"}))))))))))}x.isMDXComponent=!0}}]);