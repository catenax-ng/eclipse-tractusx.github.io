"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[84807],{92987:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>b});var s=i(87462),a=(i(67294),i(3905)),l=i(26389),n=i(94891),r=i(75190),u=(i(47507),i(24310),i(63303)),m=(i(75035),i(85162));const o={id:"request-latest-simulation-result",title:"requestLatestSimulationResult",description:"Request latest simulation result by referring the latest simulation run id available in own OSim Manager",sidebar_label:"requestLatestSimulationResult",hide_title:!0,hide_table_of_contents:!0,api:{tags:["requestLatestSimulationResult"],description:"Request latest simulation result by referring the latest simulation run id available in own OSim Manager",operationId:"requestLatestSimulationResult",parameters:[{name:"requestId",in:"path",required:!0,style:"simple",explode:!1,schema:{type:"string"},example:"8d628899-3e6f-4666-91c3-74ee7ab88b2b"},{name:"bpns",in:"path",required:!0,style:"simple",explode:!1,schema:{type:"string"},example:"bbf461bf-28d5-4fc2-95fa-7697eb122f48"},{name:"simulationRunId",in:"path",required:!0,style:"simple",explode:!1,schema:{type:"string"},example:"50737df3-4237-4652-b092-1ef8649f6ca6"}],responses:{200:{description:"Request Received",content:{"text/html; charset=utf-8":{schema:{type:"string"},examples:{}}}}},servers:[{url:"https://{server-url}"}],method:"get",path:"/api/requestLatestSimulationResult/bpns/{bpns}/requestId/{requestId}/simulationRunId/{simulationRunId}",info:{title:"OSim API",description:"OSim API for requesting and receiving simulation results",version:"1.0.0"},postman:{name:"request Latest Simulation Result",description:{content:"Request latest simulation result by referring the latest simulation run id available in own OSim Manager",type:"text/plain"},url:{path:["api","requestLatestSimulationResult","bpns",":bpns","requestId",":requestId","simulationRunId",":simulationRunId"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"requestId"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"bpns"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"simulationRunId"}]},header:[{key:"Accept",value:"text/html; charset=utf-8"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs-kits/kits/OSim Kit/Software Development View//osim-api",custom_edit_url:null},p=void 0,d={unversionedId:"kits/OSim Kit/Software Development View/request-latest-simulation-result",id:"version-23.09/kits/OSim Kit/Software Development View/request-latest-simulation-result",title:"requestLatestSimulationResult",description:"Request latest simulation result by referring the latest simulation run id available in own OSim Manager",source:"@site/docs-kits_versioned_docs/version-23.09/kits/OSim Kit/Software Development View/request-latest-simulation-result.api.mdx",sourceDirName:"kits/OSim Kit/Software Development View",slug:"/kits/OSim Kit/Software Development View/request-latest-simulation-result",permalink:"/docs-kits/kits/OSim Kit/Software Development View/request-latest-simulation-result",draft:!1,editUrl:null,tags:[],version:"23.09",frontMatter:{id:"request-latest-simulation-result",title:"requestLatestSimulationResult",description:"Request latest simulation result by referring the latest simulation run id available in own OSim Manager",sidebar_label:"requestLatestSimulationResult",hide_title:!0,hide_table_of_contents:!0,api:{tags:["requestLatestSimulationResult"],description:"Request latest simulation result by referring the latest simulation run id available in own OSim Manager",operationId:"requestLatestSimulationResult",parameters:[{name:"requestId",in:"path",required:!0,style:"simple",explode:!1,schema:{type:"string"},example:"8d628899-3e6f-4666-91c3-74ee7ab88b2b"},{name:"bpns",in:"path",required:!0,style:"simple",explode:!1,schema:{type:"string"},example:"bbf461bf-28d5-4fc2-95fa-7697eb122f48"},{name:"simulationRunId",in:"path",required:!0,style:"simple",explode:!1,schema:{type:"string"},example:"50737df3-4237-4652-b092-1ef8649f6ca6"}],responses:{200:{description:"Request Received",content:{"text/html; charset=utf-8":{schema:{type:"string"},examples:{}}}}},servers:[{url:"https://{server-url}"}],method:"get",path:"/api/requestLatestSimulationResult/bpns/{bpns}/requestId/{requestId}/simulationRunId/{simulationRunId}",info:{title:"OSim API",description:"OSim API for requesting and receiving simulation results",version:"1.0.0"},postman:{name:"request Latest Simulation Result",description:{content:"Request latest simulation result by referring the latest simulation run id available in own OSim Manager",type:"text/plain"},url:{path:["api","requestLatestSimulationResult","bpns",":bpns","requestId",":requestId","simulationRunId",":simulationRunId"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"requestId"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"bpns"},{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"simulationRunId"}]},header:[{key:"Accept",value:"text/html; charset=utf-8"}],method:"GET"}},sidebar_class_name:"get api-method",info_path:"docs-kits/kits/OSim Kit/Software Development View//osim-api",custom_edit_url:null},sidebar:"kits",previous:{title:"receiveLatestSimulationResult",permalink:"/docs-kits/kits/OSim Kit/Software Development View/receive-latest-simulation-result"},next:{title:"PCF Exchange KIT",permalink:"/docs-kits/category/pcf-exchange-kit"}},c={},b=[{value:"requestLatestSimulationResult",id:"requestlatestsimulationresult",level:2}],y={toc:b};function h(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,s.Z)({},y,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"requestlatestsimulationresult"},"requestLatestSimulationResult"),(0,a.kt)("p",null,"Request latest simulation result by referring the latest simulation run id available in own OSim Manager"),(0,a.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{}},(0,a.kt)("strong",null,"Path Parameters")),(0,a.kt)("div",null,(0,a.kt)("ul",null,(0,a.kt)(r.Z,{className:"paramsItem",param:{name:"requestId",in:"path",required:!0,style:"simple",explode:!1,schema:{type:"string"},example:"8d628899-3e6f-4666-91c3-74ee7ab88b2b"},mdxType:"ParamsItem"}),(0,a.kt)(r.Z,{className:"paramsItem",param:{name:"bpns",in:"path",required:!0,style:"simple",explode:!1,schema:{type:"string"},example:"bbf461bf-28d5-4fc2-95fa-7697eb122f48"},mdxType:"ParamsItem"}),(0,a.kt)(r.Z,{className:"paramsItem",param:{name:"simulationRunId",in:"path",required:!0,style:"simple",explode:!1,schema:{type:"string"},example:"50737df3-4237-4652-b092-1ef8649f6ca6"},mdxType:"ParamsItem"})))),(0,a.kt)("div",null,(0,a.kt)(l.Z,{mdxType:"ApiTabs"},(0,a.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,a.kt)("div",null,(0,a.kt)("p",null,"Request Received")),(0,a.kt)("div",null,(0,a.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,a.kt)(m.Z,{label:"text/html; charset=utf-8",value:"text/html; charset=utf-8",mdxType:"TabItem"},(0,a.kt)(u.Z,{mdxType:"SchemaTabs"},(0,a.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,a.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,a.kt)("summary",{style:{textAlign:"left"}},(0,a.kt)("strong",null,"Schema")),(0,a.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,a.kt)("ul",{style:{marginLeft:"1rem"}},(0,a.kt)("li",null,(0,a.kt)("div",null,(0,a.kt)("strong",null,"string"))))))))))))))}h.isMDXComponent=!0}}]);