"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[30862,84790],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=i.createContext({}),d=function(e){var t=i.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=d(e.components);return i.createElement(o.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(a),h=n,m=p["".concat(o,".").concat(h)]||p[h]||u[h]||r;return a?i.createElement(m,l(l({ref:t},c),{},{components:a})):i.createElement(m,l({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,l=new Array(r);l[0]=h;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:n,l[1]=s;for(var d=2;d<r;d++)l[d]=a[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}h.displayName="MDXCreateElement"},16163:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var i=a(87462),n=(a(67294),a(3905)),r=a(16536);const l={id:"Architecture View Traceability Kit",title:"Architecture View",description:"Traceability Kit",sidebar_position:2},s=void 0,o={unversionedId:"kits/Traceability Kit/Architecture View Traceability Kit",id:"kits/Traceability Kit/Architecture View Traceability Kit",title:"Architecture View",description:"Traceability Kit",source:"@site/docs-kits/kits/Traceability Kit/page_architecture-view.mdx",sourceDirName:"kits/Traceability Kit",slug:"/kits/Traceability Kit/Architecture View Traceability Kit",permalink:"/docs-kits/next/kits/Traceability Kit/Architecture View Traceability Kit",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"Architecture View Traceability Kit",title:"Architecture View",description:"Traceability Kit",sidebar_position:2},sidebar:"kits",previous:{title:"Business View",permalink:"/docs-kits/next/kits/Traceability Kit/Business View Traceability Kit"},next:{title:"Operation View",permalink:"/docs-kits/next/kits/Traceability Kit/Operation View Traceability Kit"}},d={},c=[{value:"Assumptions",id:"assumptions",level:2},{value:"Non-Functional Requirements",id:"non-functional-requirements",level:2},{value:"Building Block View",id:"building-block-view",level:2},{value:"Traceability Components",id:"traceability-components",level:3},{value:"Catena-X Core Services",id:"catena-x-core-services",level:3},{value:"Runtime View",id:"runtime-view",level:2},{value:"Standards",id:"standards",level:2}],p={toc:c};function u(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,i.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Traceability kit banner",src:a(76510).Z,width:"285",height:"244"})),(0,n.kt)("p",null,"The following page offers an architecture perspective including the main building blocks and information regarding communication between different components, shown as sequence diagrams in a runtime view."),(0,n.kt)("p",null,"In general, data must be provided to the Catena-X network using the Data Space Protocol (DSP). As standard for digital twins the Asset Administration Shell (AAS) standard is used - this is relevant for registering digital twins (in the Digital Twin Registry) as well as for providing digital twin data. SAMM is used as modelling language to describe the data of digital twins as aspects models."),(0,n.kt)("h2",{id:"assumptions"},"Assumptions"),(0,n.kt)("p",null,"This architecture is based on the following assumptions:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("strong",{parentName:"li"},"customers of parts")," (on catalog and instance level) must be known when creating a digital twin and registering its data. Registering data in EDC and DTR requires data providers to define appropriate access permissions to prevent exposing data to unauthorized parties. For Traceability, the customer of a part must have access to the digital twin in the DTR as well as to the digital twin's data in the EDC.If the customer is not known when a digital twin is created, additional processes must be set up by the data provider to add access permissions for the customer at a later time.")),(0,n.kt)("h2",{id:"non-functional-requirements"},"Non-Functional Requirements"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Requirement"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Resilience"),(0,n.kt)("td",{parentName:"tr",align:"left"},"While processing data for publishing it to Catena-X, a data provider needs to access the digital twins of built-in parts from suppliers. These must be available in Catena-X at this point. If these digital twins are not found while the data provider is looking them up, the data provider will not be able to integrate these built-in parts into BoM aspect models (e.g., SingleLevelBomAsBuilt) as it is missing the built-in parts' Unique ID. Reasons for not finding a built-in part's digital twin can be:",(0,n.kt)("ol",null,(0,n.kt)("li",null,"There is a network failure while the data provider's is looking for the digital twin."),(0,n.kt)("li",null,"The supplier did not yet create the digital twin, e.g., because its internal processes were delayed."),(0,n.kt)("li",null,"The supplier is not yet part of the Catena-X network.")),"Resilience means that the data provider implements a pipeline that can cope with these issues. Digital twins are provided with the information that is available and are updated once more information is available (e.g., the supplier provides digital twins for built-in parts later on).")))),(0,n.kt)("h2",{id:"building-block-view"},"Building Block View"),(0,n.kt)("p",null,"This architecture overview only shows Catena-X Core Services that are directly accessed by Traceability components, e.g. the EDC is shown, but not the DAPS which is accessed by the EDC, but not directly by the Data Provisioning component."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Architecture - Level 1",src:a(29163).Z,width:"720",height:"945"})),(0,n.kt)("h3",{id:"traceability-components"},"Traceability Components"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Subsystem"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Data Provisioning"),(0,n.kt)("td",{parentName:"tr",align:"left"},"This component provides a company's data to the Catena-X network by transforming it into the Catena-X format and publishing it. In Catena-X, data must be provided to the network based on existing standards from the other Kits. One example that can be used is the Connector Kit that builds a component based on the DSP protocol, e.g. the Connector of the Eclipse Dataspace Components (EDC). As standard for digital twins, the Asset Administration Shell standard is used - this is relevant for registering digital twins (in the Digital Twin Registry) as well as for providing digital twin data. The data format used for Traceability data is based on the BAMM aspects models published in the Semantic Hub.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Traceability App"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Enables traceability functionalities like quality alerts or notifications. When a Traceability App fetches data for digital twins (submodels), there are two options:",(0,n.kt)("ul",null,(0,n.kt)("li",null,"Directly access the partner's EDC and DTR to connect to other partner's EDC and retrieve the data from ther"),(0,n.kt)("li",null,"Use a local IRS service to get the data and let the IRS handle the EDC and DTR communication.")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Internal Systems"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Existing internal systems of a Catena-X partner which provide data to Traceability components.",(0,n.kt)("ul",null,(0,n.kt)("li",null,"For Data Provisioning: The data provided to Catena-X via the EDC should be fetched from a partner's internal PLM and parts master data systems."),(0,n.kt)("li",null,"For Traceability Apps: A Traceability App may show more data to a user than just the data that is provided to Catena-X (and fetched via the Data Provisioning component). The business scope of COTS software is bigger than just Traceability and they have existing interfaces to fetch all data they need for their business functionality (and not only Traceability data).")),"Both components can also send data back to internal systems. That's at the discretion of the Catena-X partner and neither required nor prohibited by the Traceability use case.")))),(0,n.kt)("h3",{id:"catena-x-core-services"},"Catena-X Core Services"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Subsystem"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Digital Twin Registry"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The Digital Twin Registry acts as an address book for Digital Twins. Data Providers register their Digital Twins in their own Digital Twin Registry. Data consumers query the Digital Twin Registries to find Digital Twins and interact with them further. A Digital Twin contains endpoint references to Submodel endpoints. Calling a Submodel endpoint returns data compliant to a semantic model. A semantic model describes the data that a Submodel endpoint returns.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("a",{parentName:"td",href:"https://github.com/eclipse-tractusx/sldt-digital-twin-registry"},"Repository of the Digital Twin Registry"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Item Relationship Service (IRS)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The IRS is providing a technical API Endpoint in the Catena-X Network, which builds an item tree representation of given digital twins stored across the industry. Therefore it is a key component for the Network to provide data chains along the value chain in the industry.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("a",{parentName:"td",href:"https://github.com/eclipse-tractusx/item-relationship-service"},"Repository of the IRS"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Eclipse Dataspace Components (EDC)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The Connector of the Eclipse Dataspace Components provides a framework for sovereign, inter-organizational data exchange. It will implement the International Data Spaces standard as well as relevant protocols associated with GAIA-X. The connector is designed in an extensible way in order to support alternative protocols and integrate in various ecosystems.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("a",{parentName:"td",href:"https://github.com/eclipse-tractusx/tractusx-edc"},"Repository of the Catena-X specific EDC"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Discovery Service"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The EDC / dataspace discovery interface is a CX network public available endpoint which can get used to retrieve EDC endpoints and the related BPNs, as well as search for endpoints via the BPN.")))),(0,n.kt)("h2",{id:"runtime-view"},"Runtime View"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Detail runtime views including specific sequence diagrams will follow in the near future.")),(0,n.kt)("h2",{id:"standards"},"Standards"),(0,n.kt)("p",null,"Our relevant standards can be downloaded from the official ",(0,n.kt)("a",{parentName:"p",href:"https://catena-x.net/de/standard-library"},"Catena-X Standard Library"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://catena-x.net/fileadmin/user_upload/Standard-Bibliothek/Update_September23/CX-0018-EclipseDataConnector_EDC_-v.2.0.1.pdf"},"CX - 0018 Sovereign Data Exchange")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://catena-x.net/fileadmin/user_upload/Standard-Bibliothek/Update_September23/CX-0019-AspectModelSerialPart-v2.0.0.pdf"},"CX - 0019 Aspect Model: Serial Part")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://catena-x.net/fileadmin/user_upload/Standard-Bibliothek/Update_September23/CX-0020-AspectModelSingleLevelBoMAsBuilt-v.2.0.0.pdf"},"CX - 0020 Aspect Model: Single Level BoMAsBuilt")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://catena-x.net/fileadmin/user_upload/Standard-Bibliothek/Update_PDF_Maerz/PLM_Quality_Use_Case_Traceability/CX_-_0021__Batch_UseCaseTraceability_v_1.0.1.pdf"},"CX - 0021 Aspect Model: Batch")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://catena-x.net/fileadmin/user_upload/Standard-Bibliothek/Update_PDF_Maerz/PLM_Quality_Use_Case_Traceability/CX_-_0022_Notification_Process_v_1.1.1.pdf"},"CX - 0022 Notification Process")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://catena-x.net/fileadmin/user_upload/Standard-Bibliothek/Update_September23/CX-0023-NotificationAPI-v1.2.2.pdf"},"CX - 0023 Notification API")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://catena-x.net/fileadmin/user_upload/Standard-Bibliothek/Update_September23/CX-0042-AspectModelSingleLevelBomAsPlanned-v1.1.2.pdf"},"CX - 0042 Aspect Model: Single Level BomAsPlanned")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://catena-x.net/fileadmin/user_upload/Standard-Bibliothek/Update_PDF_Maerz/PLM_Quality_Use_Case_Traceability/CX_-_0043_Semantic_Model_PartAsPlanned_v_1.0.1.pdf"},"CX - 0043 Semantic Model: PartAsPlanned")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://catena-x.net/fileadmin/user_upload/Standard-Bibliothek/Update_September23/CX-0093-AspectModelTractionBatteryCode-v1.0.0.pdf"},"CX - 0093 Aspect Model Traction Battery Code")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://catena-x.net/fileadmin/user_upload/Standard-Bibliothek/Update_September23/CX-0094-AspectModelPartSiteInformationAsPlanned-v1.0.0.pdf"},"CX - 0094 Aspect Model PartSiteInformationAsPlanned"))),(0,n.kt)(r.default,{components:l.components,mdxType:"Notice"}))}u.isMDXComponent=!0},16536:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var i=a(87462),n=(a(67294),a(3905));const r={sidebar_class_name:"hidden"},l=void 0,s={unversionedId:"kits/Traceability Kit/part_notice",id:"kits/Traceability Kit/part_notice",title:"part_notice",description:"\x3c!--",source:"@site/docs-kits/kits/Traceability Kit/part_notice.mdx",sourceDirName:"kits/Traceability Kit",slug:"/kits/Traceability Kit/part_notice",permalink:"/docs-kits/next/kits/Traceability Kit/part_notice",draft:!1,tags:[],version:"current",frontMatter:{sidebar_class_name:"hidden"},sidebar:"kits",previous:{title:"part_policies",permalink:"/docs-kits/next/kits/Traceability Kit/Software Development View/part_policies"},next:{title:"Resiliency Domain",permalink:"/docs-kits/next/kits/Resiliency/"}},o={},d=[{value:"NOTICE",id:"notice",level:2}],c={toc:d};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"notice"},"NOTICE"),(0,n.kt)("p",null,"This work is licensed under the ",(0,n.kt)("a",{parentName:"p",href:"https://creativecommons.org/licenses/by/4.0/legalcode"},"CC-BY-4.0"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"SPDX-License-Identifier: CC-BY-4.0"),(0,n.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 BASF SE"),(0,n.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 Bayerische Motoren Werke Aktiengesellschaft (BMW AG)"),(0,n.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 Fraunhofer-Gesellschaft zur Foerderung der angewandten Forschung e.V. (represented by Fraunhofer ISST & Fraunhofer IML)"),(0,n.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 German Edge Cloud GmbH & Co. KG"),(0,n.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 Mercedes Benz AG"),(0,n.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 Robert Bosch Manufacturing Solutions GmbH"),(0,n.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 SAP SE"),(0,n.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 Siemens AG"),(0,n.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 T-Systems International GmbH"),(0,n.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 ZF Friedrichshafen AG"),(0,n.kt)("li",{parentName:"ul"},"SPDX-FileCopyrightText: 2023 Contributors to the Eclipse Foundation"),(0,n.kt)("li",{parentName:"ul"},"Source URL: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io/tree/main/docs-kits/kits/Traceability%20Kit"},"https://github.com/eclipse-tractusx/eclipse-tractusx.github.io/tree/main/docs-kits/kits/Traceability%20Kit")," (latest version)")))}p.isMDXComponent=!0},29163:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/architecture_level_1-56b5346a20d4b8a8377d0e8f1218761d.png"},76510:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/doc-traceability_header-minified-2551e09ee3d61867b66ce9b800e090b0.png"}}]);