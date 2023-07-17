"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[85302],{45700:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>y,default:()=>k,frontMatter:()=>c,metadata:()=>d,toc:()=>g});var i=a(87462),l=(a(67294),a(3905)),s=a(26389),n=a(94891),r=(a(75190),a(47507)),p=a(24310),m=a(63303),o=(a(75035),a(85162));const c={id:"initiate-edr-negotiation",title:"initiateEdrNegotiation",description:"Initiates an EDR negotiation by handling a contract negotiation first and then a transfer process for a given offer and with the given counter part. Please note that successfully invoking this endpoint only means that the negotiation was initiated.",sidebar_label:"initiateEdrNegotiation",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Control Plane Adapter EDR Api"],description:"Initiates an EDR negotiation by handling a contract negotiation first and then a transfer process for a given offer and with the given counter part. Please note that successfully invoking this endpoint only means that the negotiation was initiated.",operationId:"initiateEdrNegotiation",requestBody:{content:{"application/json":{schema:{type:"object",properties:{empty:{type:"boolean",example:null},valueType:{type:"string",example:null,enum:["ARRAY","OBJECT","STRING","NUMBER","TRUE","FALSE","NULL"]}},additionalProperties:{required:["connectorAddress","connectorId","offer","protocol"],type:"object",properties:{callbackAddresses:{type:"array",example:null,items:{type:"object",properties:{authCodeId:{type:"string",example:null},authKey:{type:"string",example:null},events:{uniqueItems:!0,type:"array",example:null,items:{type:"string",example:null}},transactional:{type:"boolean",example:null},uri:{type:"string",example:null}},example:null,title:"CallbackAddress"}},connectorAddress:{type:"string",example:null},connectorId:{type:"string",example:null},offer:{type:"object",properties:{assetId:{type:"string",example:null},offerId:{type:"string",example:null},policy:{type:"object",properties:{"@type":{type:"string",example:null,enum:["SET","OFFER","CONTRACT"]},assignee:{type:"string",example:null},assigner:{type:"string",example:null},extensibleProperties:{type:"object",additionalProperties:{type:"object",example:null},example:null},inheritsFrom:{type:"string",example:null},obligations:{type:"array",example:null,items:{type:"object",properties:{action:{type:"object",properties:{constraint:{required:["edctype"],type:"object",properties:{edctype:{type:"string",example:null}},example:null,discriminator:{propertyName:"edctype"},title:"Constraint"},includedIn:{type:"string",example:null},type:{type:"string",example:null}},example:null,title:"Action"},assignee:{type:"string",example:null},assigner:{type:"string",example:null},consequence:"circular(Duty)",constraints:{type:"array",example:null,items:{required:["edctype"],type:"object",properties:{edctype:{type:"string",example:null}},example:null,discriminator:{propertyName:"edctype"},title:"Constraint"}},parentPermission:{type:"object",properties:{action:{type:"object",properties:{constraint:{required:["edctype"],type:"object",properties:{edctype:{type:"string",example:null}},example:null,discriminator:{propertyName:"edctype"},title:"Constraint"},includedIn:{type:"string",example:null},type:{type:"string",example:null}},example:null,title:"Action"},assignee:{type:"string",example:null},assigner:{type:"string",example:null},constraints:{type:"array",example:null,items:{required:["edctype"],type:"object",properties:{edctype:{type:"string",example:null}},example:null,discriminator:{propertyName:"edctype"},title:"Constraint"}},duties:{type:"array",example:null,items:"circular(Duty)"},target:{type:"string",example:null}},example:null,title:"Permission"},target:{type:"string",example:null}},example:null,title:"Duty"}},permissions:{type:"array",example:null,items:{type:"object",properties:{action:{type:"object",properties:{constraint:{required:["edctype"],type:"object",properties:{edctype:{type:"string",example:null}},example:null,discriminator:{propertyName:"edctype"},title:"Constraint"},includedIn:{type:"string",example:null},type:{type:"string",example:null}},example:null,title:"Action"},assignee:{type:"string",example:null},assigner:{type:"string",example:null},constraints:{type:"array",example:null,items:{required:["edctype"],type:"object",properties:{edctype:{type:"string",example:null}},example:null,discriminator:{propertyName:"edctype"},title:"Constraint"}},duties:{type:"array",example:null,items:{type:"object",properties:{action:{type:"object",properties:{constraint:{required:["edctype"],type:"object",properties:{edctype:{type:"string",example:null}},example:null,discriminator:{propertyName:"edctype"},title:"Constraint"},includedIn:{type:"string",example:null},type:{type:"string",example:null}},example:null,title:"Action"},assignee:{type:"string",example:null},assigner:{type:"string",example:null},consequence:"circular(Duty)",constraints:{type:"array",example:null,items:{required:["edctype"],type:"object",properties:{edctype:{type:"string",example:null}},example:null,discriminator:{propertyName:"edctype"},title:"Constraint"}},parentPermission:"circular(Permission)",target:{type:"string",example:null}},example:null,title:"Duty"}},target:{type:"string",example:null}},example:null,title:"Permission"}},prohibitions:{type:"array",example:null,items:{type:"object",properties:{action:{type:"object",properties:{constraint:{required:["edctype"],type:"object",properties:{edctype:{type:"string",example:null}},example:null,discriminator:{propertyName:"edctype"},title:"Constraint"},includedIn:{type:"string",example:null},type:{type:"string",example:null}},example:null,title:"Action"},assignee:{type:"string",example:null},assigner:{type:"string",example:null},constraints:{type:"array",example:null,items:{required:["edctype"],type:"object",properties:{edctype:{type:"string",example:null}},example:null,discriminator:{propertyName:"edctype"},title:"Constraint"}},target:{type:"string",example:null}},example:null,title:"Prohibition"}},target:{type:"string",example:null}},example:null,title:"Policy"}},example:null,title:"ContractOfferDescription"},protocol:{type:"string",example:null},providerId:{type:"string",example:null}},example:null,title:"NegotiateEdrRequestDto"},example:null}}}},responses:{200:{description:"The negotiation was successfully initiated.",content:{"application/json":{schema:{type:"object",properties:{"@context":{type:"object",example:null},"@id":{type:"string",example:null},"@type":{type:"string",example:null},createdAt:{type:"integer",format:"int64",example:null}},example:null,title:"IdResponseDto"}}}},400:{description:"Request body was malformed",content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",properties:{invalidValue:{type:"string",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}},example:null,title:"ApiErrorDetail"}}}}}},method:"post",path:"/adapter/edrs",servers:[{url:"/"}],jsonRequestBodyExample:null,info:{title:"tx-edc-extensions-api",description:"Tractus X Extensions REST API Doc",version:"0.5.0-SNAPSHOT"},postman:{name:"initiate Edr Negotiation",description:{content:"Initiates an EDR negotiation by handling a contract negotiation first and then a transfer process for a given offer and with the given counter part. Please note that successfully invoking this endpoint only means that the negotiation was initiated.",type:"text/plain"},url:{path:["adapter","edrs"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/tx-edc-extensions-api",custom_edit_url:null},y=void 0,d={unversionedId:"kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/initiate-edr-negotiation",id:"kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/initiate-edr-negotiation",title:"initiateEdrNegotiation",description:"Initiates an EDR negotiation by handling a contract negotiation first and then a transfer process for a given offer and with the given counter part. Please note that successfully invoking this endpoint only means that the negotiation was initiated.",source:"@site/docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/initiate-edr-negotiation.api.mdx",sourceDirName:"kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api",slug:"/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/initiate-edr-negotiation",permalink:"/docs-kits/next/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/initiate-edr-negotiation",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"initiate-edr-negotiation",title:"initiateEdrNegotiation",description:"Initiates an EDR negotiation by handling a contract negotiation first and then a transfer process for a given offer and with the given counter part. Please note that successfully invoking this endpoint only means that the negotiation was initiated.",sidebar_label:"initiateEdrNegotiation",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Control Plane Adapter EDR Api"],description:"Initiates an EDR negotiation by handling a contract negotiation first and then a transfer process for a given offer and with the given counter part. Please note that successfully invoking this endpoint only means that the negotiation was initiated.",operationId:"initiateEdrNegotiation",requestBody:{content:{"application/json":{schema:{type:"object",properties:{empty:{type:"boolean",example:null},valueType:{type:"string",example:null,enum:["ARRAY","OBJECT","STRING","NUMBER","TRUE","FALSE","NULL"]}},additionalProperties:{required:["connectorAddress","connectorId","offer","protocol"],type:"object",properties:{callbackAddresses:{type:"array",example:null,items:{type:"object",properties:{authCodeId:{type:"string",example:null},authKey:{type:"string",example:null},events:{uniqueItems:!0,type:"array",example:null,items:{type:"string",example:null}},transactional:{type:"boolean",example:null},uri:{type:"string",example:null}},example:null,title:"CallbackAddress"}},connectorAddress:{type:"string",example:null},connectorId:{type:"string",example:null},offer:{type:"object",properties:{assetId:{type:"string",example:null},offerId:{type:"string",example:null},policy:{type:"object",properties:{"@type":{type:"string",example:null,enum:["SET","OFFER","CONTRACT"]},assignee:{type:"string",example:null},assigner:{type:"string",example:null},extensibleProperties:{type:"object",additionalProperties:{type:"object",example:null},example:null},inheritsFrom:{type:"string",example:null},obligations:{type:"array",example:null,items:{type:"object",properties:{action:{type:"object",properties:{constraint:{required:["edctype"],type:"object",properties:{edctype:{type:"string",example:null}},example:null,discriminator:{propertyName:"edctype"},title:"Constraint"},includedIn:{type:"string",example:null},type:{type:"string",example:null}},example:null,title:"Action"},assignee:{type:"string",example:null},assigner:{type:"string",example:null},consequence:"circular(Duty)",constraints:{type:"array",example:null,items:{required:["edctype"],type:"object",properties:{edctype:{type:"string",example:null}},example:null,discriminator:{propertyName:"edctype"},title:"Constraint"}},parentPermission:{type:"object",properties:{action:{type:"object",properties:{constraint:{required:["edctype"],type:"object",properties:{edctype:{type:"string",example:null}},example:null,discriminator:{propertyName:"edctype"},title:"Constraint"},includedIn:{type:"string",example:null},type:{type:"string",example:null}},example:null,title:"Action"},assignee:{type:"string",example:null},assigner:{type:"string",example:null},constraints:{type:"array",example:null,items:{required:["edctype"],type:"object",properties:{edctype:{type:"string",example:null}},example:null,discriminator:{propertyName:"edctype"},title:"Constraint"}},duties:{type:"array",example:null,items:"circular(Duty)"},target:{type:"string",example:null}},example:null,title:"Permission"},target:{type:"string",example:null}},example:null,title:"Duty"}},permissions:{type:"array",example:null,items:{type:"object",properties:{action:{type:"object",properties:{constraint:{required:["edctype"],type:"object",properties:{edctype:{type:"string",example:null}},example:null,discriminator:{propertyName:"edctype"},title:"Constraint"},includedIn:{type:"string",example:null},type:{type:"string",example:null}},example:null,title:"Action"},assignee:{type:"string",example:null},assigner:{type:"string",example:null},constraints:{type:"array",example:null,items:{required:["edctype"],type:"object",properties:{edctype:{type:"string",example:null}},example:null,discriminator:{propertyName:"edctype"},title:"Constraint"}},duties:{type:"array",example:null,items:{type:"object",properties:{action:{type:"object",properties:{constraint:{required:["edctype"],type:"object",properties:{edctype:{type:"string",example:null}},example:null,discriminator:{propertyName:"edctype"},title:"Constraint"},includedIn:{type:"string",example:null},type:{type:"string",example:null}},example:null,title:"Action"},assignee:{type:"string",example:null},assigner:{type:"string",example:null},consequence:"circular(Duty)",constraints:{type:"array",example:null,items:{required:["edctype"],type:"object",properties:{edctype:{type:"string",example:null}},example:null,discriminator:{propertyName:"edctype"},title:"Constraint"}},parentPermission:"circular(Permission)",target:{type:"string",example:null}},example:null,title:"Duty"}},target:{type:"string",example:null}},example:null,title:"Permission"}},prohibitions:{type:"array",example:null,items:{type:"object",properties:{action:{type:"object",properties:{constraint:{required:["edctype"],type:"object",properties:{edctype:{type:"string",example:null}},example:null,discriminator:{propertyName:"edctype"},title:"Constraint"},includedIn:{type:"string",example:null},type:{type:"string",example:null}},example:null,title:"Action"},assignee:{type:"string",example:null},assigner:{type:"string",example:null},constraints:{type:"array",example:null,items:{required:["edctype"],type:"object",properties:{edctype:{type:"string",example:null}},example:null,discriminator:{propertyName:"edctype"},title:"Constraint"}},target:{type:"string",example:null}},example:null,title:"Prohibition"}},target:{type:"string",example:null}},example:null,title:"Policy"}},example:null,title:"ContractOfferDescription"},protocol:{type:"string",example:null},providerId:{type:"string",example:null}},example:null,title:"NegotiateEdrRequestDto"},example:null}}}},responses:{200:{description:"The negotiation was successfully initiated.",content:{"application/json":{schema:{type:"object",properties:{"@context":{type:"object",example:null},"@id":{type:"string",example:null},"@type":{type:"string",example:null},createdAt:{type:"integer",format:"int64",example:null}},example:null,title:"IdResponseDto"}}}},400:{description:"Request body was malformed",content:{"application/json":{schema:{type:"array",example:null,items:{type:"object",properties:{invalidValue:{type:"string",example:null},message:{type:"string",example:null},path:{type:"string",example:null},type:{type:"string",example:null}},example:null,title:"ApiErrorDetail"}}}}}},method:"post",path:"/adapter/edrs",servers:[{url:"/"}],jsonRequestBodyExample:null,info:{title:"tx-edc-extensions-api",description:"Tractus X Extensions REST API Doc",version:"0.5.0-SNAPSHOT"},postman:{name:"initiate Edr Negotiation",description:{content:"Initiates an EDR negotiation by handling a contract negotiation first and then a transfer process for a given offer and with the given counter part. Please note that successfully invoking this endpoint only means that the negotiation was initiated.",type:"text/plain"},url:{path:["adapter","edrs"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs-kits/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/tx-edc-extensions-api",custom_edit_url:null},sidebar:"kits",previous:{title:"getEdr",permalink:"/docs-kits/next/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/get-edr"},next:{title:"queryEdrs",permalink:"/docs-kits/next/kits/tractusx-edc/docs/kit/development-view/openAPI/tractusx-edc-api/query-edrs"}},u={},g=[{value:"initiateEdrNegotiation",id:"initiateedrnegotiation",level:2}],x={toc:g};function k(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,i.Z)({},x,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"initiateedrnegotiation"},"initiateEdrNegotiation"),(0,l.kt)("p",null,"Initiates an EDR negotiation by handling a contract negotiation first and then a transfer process for a given offer and with the given counter part. Please note that successfully invoking this endpoint only means that the negotiation was initiated."),(0,l.kt)(n.Z,{mdxType:"MimeTabs"},(0,l.kt)(o.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{textAlign:"left"}},(0,l.kt)("strong",null,"Request Body")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(p.Z,{collapsible:!1,name:"empty",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",example:null},mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!1,name:"valueType",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`ARRAY`, `OBJECT`, `STRING`, `NUMBER`, `TRUE`, `FALSE`, `NULL`]",schema:{type:"string",example:null,enum:["ARRAY","OBJECT","STRING","NUMBER","TRUE","FALSE","NULL"]},mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{}},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"property name*"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object (NegotiateEdrRequestDto)")),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{}},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"callbackAddresses"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)(p.Z,{collapsible:!1,name:"authCodeId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!1,name:"authKey",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!1,name:"events",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{uniqueItems:!0,type:"array",example:null,items:{type:"string",example:null}},mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!1,name:"transactional",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",example:null},mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!1,name:"uri",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,l.kt)(p.Z,{collapsible:!1,name:"connectorAddress",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!1,name:"connectorId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{}},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"offer"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object"),(0,l.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)(p.Z,{collapsible:!1,name:"assetId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!1,name:"offerId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{}},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"policy"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object")),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)(p.Z,{collapsible:!1,name:"@type",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`SET`, `OFFER`, `CONTRACT`]",schema:{type:"string",example:null,enum:["SET","OFFER","CONTRACT"]},mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!1,name:"assignee",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!1,name:"assigner",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{}},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"extensibleProperties"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object")),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)("li",null,(0,l.kt)("div",null,(0,l.kt)("code",null,"property name*"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object")))))),(0,l.kt)(p.Z,{collapsible:!1,name:"inheritsFrom",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{}},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"obligations"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{}},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"action"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object")),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{}},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"constraint"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object")),(0,l.kt)("div",{style:{marginLeft:"1rem"}}))),(0,l.kt)(p.Z,{collapsible:!1,name:"includedIn",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"})))),(0,l.kt)(p.Z,{collapsible:!1,name:"assignee",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!1,name:"assigner",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!1,name:"consequence",required:!1,schemaName:"",qualifierMessage:void 0,schema:"circular(Duty)",mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{}},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"constraints"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,l.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{}},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"parentPermission"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object")),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{}},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"action"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object")),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{}},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"constraint"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object")),(0,l.kt)("div",{style:{marginLeft:"1rem"}}))),(0,l.kt)(p.Z,{collapsible:!1,name:"includedIn",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"})))),(0,l.kt)(p.Z,{collapsible:!1,name:"assignee",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!1,name:"assigner",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{}},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"constraints"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,l.kt)(p.Z,{collapsible:!1,name:"duties",required:!1,schemaName:"undefined[]",qualifierMessage:void 0,schema:{type:"array",example:null,items:"circular(Duty)"},mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!1,name:"target",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"})))),(0,l.kt)(p.Z,{collapsible:!1,name:"target",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,l.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{}},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"permissions"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{}},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"action"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object")),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{}},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"constraint"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object")),(0,l.kt)("div",{style:{marginLeft:"1rem"}}))),(0,l.kt)(p.Z,{collapsible:!1,name:"includedIn",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"})))),(0,l.kt)(p.Z,{collapsible:!1,name:"assignee",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!1,name:"assigner",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{}},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"constraints"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,l.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{}},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"duties"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{}},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"action"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object")),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{}},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"constraint"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object")),(0,l.kt)("div",{style:{marginLeft:"1rem"}}))),(0,l.kt)(p.Z,{collapsible:!1,name:"includedIn",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"})))),(0,l.kt)(p.Z,{collapsible:!1,name:"assignee",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!1,name:"assigner",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!1,name:"consequence",required:!1,schemaName:"",qualifierMessage:void 0,schema:"circular(Duty)",mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{}},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"constraints"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,l.kt)(p.Z,{collapsible:!1,name:"parentPermission",required:!1,schemaName:"",qualifierMessage:void 0,schema:"circular(Permission)",mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!1,name:"target",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,l.kt)(p.Z,{collapsible:!1,name:"target",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,l.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{}},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"prohibitions"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{}},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"action"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object")),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{}},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"constraint"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object")),(0,l.kt)("div",{style:{marginLeft:"1rem"}}))),(0,l.kt)(p.Z,{collapsible:!1,name:"includedIn",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"})))),(0,l.kt)(p.Z,{collapsible:!1,name:"assignee",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!1,name:"assigner",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{}},(0,l.kt)("summary",{style:{}},(0,l.kt)("strong",null,"constraints"),(0,l.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,l.kt)(p.Z,{collapsible:!1,name:"target",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,l.kt)(p.Z,{collapsible:!1,name:"target",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}))))))),(0,l.kt)(p.Z,{collapsible:!1,name:"protocol",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!1,name:"providerId",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"})))))))),(0,l.kt)("div",null,(0,l.kt)(s.Z,{mdxType:"ApiTabs"},(0,l.kt)(o.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"The negotiation was successfully initiated.")),(0,l.kt)("div",null,(0,l.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(m.Z,{mdxType:"SchemaTabs"},(0,l.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{textAlign:"left"}},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(p.Z,{collapsible:!1,name:"@context",required:!1,schemaName:"object",qualifierMessage:void 0,schema:{type:"object",example:null},mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!1,name:"@id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!1,name:"@type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!1,name:"createdAt",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64",example:null},mdxType:"SchemaItem"})))),(0,l.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(r.Z,{responseExample:"null",language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(o.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"Request body was malformed")),(0,l.kt)("div",null,(0,l.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(o.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(m.Z,{mdxType:"SchemaTabs"},(0,l.kt)(o.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{textAlign:"left"}},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)(p.Z,{collapsible:!1,name:"invalidValue",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!1,name:"path",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,l.kt)(p.Z,{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:null},mdxType:"SchemaItem"}),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,l.kt)(o.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(r.Z,{responseExample:"null",language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);