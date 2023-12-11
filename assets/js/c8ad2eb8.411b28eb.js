"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[98693],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var d=n.createContext({}),l=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=l(a),h=i,u=c["".concat(d,".").concat(h)]||c[h]||m[h]||r;return a?n.createElement(u,o(o({ref:t},p),{},{components:a})):n.createElement(u,o({ref:t},p))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=h;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[c]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},82069:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var n=a(87462),i=(a(67294),a(3905));const r={id:"development-view",title:"Development View",description:"What do I have to implement?",sidebar_position:3},o=void 0,s={unversionedId:"kits/DCM Kit/development-view",id:"kits/DCM Kit/development-view",title:"Development View",description:"What do I have to implement?",source:"@site/docs-kits/kits/DCM Kit/page_development-view.md",sourceDirName:"kits/DCM Kit",slug:"/kits/DCM Kit/development-view",permalink:"/docs-kits/next/kits/DCM Kit/development-view",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"development-view",title:"Development View",description:"What do I have to implement?",sidebar_position:3},sidebar:"kits",previous:{title:"Adoption View",permalink:"/docs-kits/next/kits/DCM Kit/adoption-view"},next:{title:"Digital Twin KIT",permalink:"/docs-kits/next/category/digital-twin-kit"}},d={},l=[{value:"DCM Development View",id:"dcm-development-view",level:2},{value:"Introduction",id:"introduction",level:2},{value:"ASPECT MODEL &quot;WeekBasedMaterialDemand&quot;",id:"aspect-model-weekbasedmaterialdemand",level:2},{value:"Sample Data",id:"sample-data",level:3},{value:"ASPECT MODEL &quot;WeekBasedCapacityGroup&quot;",id:"aspect-model-weekbasedcapacitygroup",level:2},{value:"Sample Data",id:"sample-data-1",level:3},{value:"Data Exchange",id:"data-exchange",level:2},{value:"General Overview",id:"general-overview",level:3},{value:"WeekBasedMaterialDemand API",id:"weekbasedmaterialdemand-api",level:3},{value:"UUID generation and handling",id:"uuid-generation-and-handling",level:4},{value:"EDC Data Asset Structure",id:"edc-data-asset-structure",level:4},{value:"Error Handling and payload validation",id:"error-handling-and-payload-validation",level:4},{value:"WeekBasedCapacityGroup API",id:"weekbasedcapacitygroup-api",level:3},{value:"UUID generation and handling",id:"uuid-generation-and-handling-1",level:4},{value:"EDC Data Asset Structure",id:"edc-data-asset-structure-1",level:4},{value:"Error Handling and payload validation",id:"error-handling-and-payload-validation-1",level:4}],p={toc:l};function c(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"DCM kit banner",src:a(38842).Z,width:"285",height:"244"})),(0,i.kt)("h2",{id:"dcm-development-view"},"DCM Development View"),(0,i.kt)("p",null,"This page describes the most important parts for the software implementation of the DCM standards. For the full technical specification, please refer to the standards ",(0,i.kt)("a",{parentName:"p",href:"https://catena-x.net/de/standard-library"},"CX-0047 DCM Data Model Material Demand & Capacity Group")," and ",(0,i.kt)("a",{parentName:"p",href:"https://catena-x.net/de/standard-library"},"CX-0048 DCM API Material Demand & Capacity Group"),"."),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"This document describes the ",(0,i.kt)("inlineCode",{parentName:"p"},"WeekBasedMaterialDemand")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"WeekBasedCapacityGroup")," semantic models and the\nAPI definitions used in the DCM Catena-X network."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"WeekBasedMaterialDemand")," object will be send by customers to their suppliers in order to\ncommunicate how many parts they need in which period of time. The customers of materials therefore\nneed to be able to create ",(0,i.kt)("inlineCode",{parentName:"p"},"WeekBasedMaterialDemand")," objects and the suppliers need to be able to\ninterpret them. As most suppliers have their own suppliers, who produce materials for them, most\nsuppliers are therefore acting as customers as well and need to be able to also create\n",(0,i.kt)("inlineCode",{parentName:"p"},"WeekBasedMaterialDemand")," objects on for sending them to their suppliers."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"WeekBasedCapacityGroup")," object is sent by the suppliers to their customers to communicate which\nmaterials are bundled together, representing a common bottleneck. And what the capacity for these\nmaterials is, considering their common bottleneck.This information is represented as weekly buckets\nwithin the WeekBasedCapacityGroup. Therefore, all companies, that supply materials to other\ncompanies, need to be able to create ",(0,i.kt)("inlineCode",{parentName:"p"},"WeekBasedCapacityGroup")," objects in a consistent and\nstandardized structure and send them to their customers. The customers need to be able to receive\nand interpret the ",(0,i.kt)("inlineCode",{parentName:"p"},"WeekBasedCapacityGroup")," information."),(0,i.kt)("h2",{id:"aspect-model-weekbasedmaterialdemand"},'ASPECT MODEL "WeekBasedMaterialDemand"'),(0,i.kt)("p",null,"The material demand information MUST be sent from the customer to the supplier according to the ",(0,i.kt)("a",{parentName:"p",href:"https://catena-x.net/de/standard-library"},"CX-0048 DCM API Material Demand & Capacity Group")," standard. The data format described here MUST be followed for the exchange of the ",(0,i.kt)("inlineCode",{parentName:"p"},"WeekBasedMaterialDemand")," information."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"WeekBasedMaterialDemand")," data model MUST be implemented by all participants who wish to\nparticipate in the Catena-X DCM network as a customer or supplier."),(0,i.kt)("p",null,"Companies, who participate in the Catena-X Network as a supplier, MUST be able to receive material\ndemand information and MUST be able to send capacity group information."),(0,i.kt)("p",null,"Companies, who participate in the Catena-X Network as a customer, MUST be able to send material\ndemand information and MUST be able to receive capacity group information."),(0,i.kt)("p",null,"Companies who participate in the Catena-X Network with both roles therefore MUST be able to receive\nand send both, material demand as well as capacity group information. It is recommended that\ncompanies implement both standards."),(0,i.kt)("p",null,"Every data provider of ",(0,i.kt)("inlineCode",{parentName:"p"},"WeekBasedMaterialDemand")," data MUST provide the data conformant to the\nsemantic model specified in this document."),(0,i.kt)("p",null,"The unique identifier of the semantic model specified in this document MUST be used by the data\nprovider to define the semantics of the data being transferred."),(0,i.kt)("p",null,"Every certified business application relying on ",(0,i.kt)("inlineCode",{parentName:"p"},"WeekBasedMaterialDemand")," data MUST be able to\nconsume data conformant to the semantic model specified in this document."),(0,i.kt)("p",null,"Data consumers and data provider MUST comply with the license of the semantic model."),(0,i.kt)("p",null,"In the Catena-X data space ",(0,i.kt)("inlineCode",{parentName:"p"},"WeekBasedMaterialDemand")," data MUST be requested and exchanged via\nEclipse Dataspace Connector (EDC) conformant to ",(0,i.kt)("a",{parentName:"p",href:"https://catena-x.net/de/standard-library"},"CX-0018")," and ",(0,i.kt)("a",{parentName:"p",href:"https://catena-x.net/de/standard-library"},"CX-0002"),"."),(0,i.kt)("p",null,"The characteristics BPNL and BPNS MUST be used according to the standard ",(0,i.kt)("a",{parentName:"p",href:"https://catena-x.net/de/standard-library"},"CX-0010"),"."),(0,i.kt)("h3",{id:"sample-data"},"Sample Data"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "unitOfMeasure": "GRM",\n  "materialDescriptionCustomer": "Spark Plug",\n  "materialDemandId": "0157ba42-d2a8-4e28-8565-7b07830c1110",\n  "materialNumberSupplier": "MNR-8101-ID146955.001",\n  "supplier": "BPNL6666666666YY",\n  "changedAt": "2023-03-10T12:27:11.320Z",\n  "demandSeries": [\n    {\n      "expectedSupplierLocation": "BPNS8888888888XX",\n      "demands": [\n        {\n          "demand": 1,\n          "calendarWeek": "2022-08-01"\n        }\n      ],\n      "customerLocation": "BPNS8888888888XX",\n      "demandCategory": {\n        "demandCategoryCode": "0001"\n      }\n    }\n  ],\n  "materialNumberCustomer": "MNR-7307-AU340474.002",\n  "customer": "BPNL8888888888XX"\n}\n')),(0,i.kt)("p",null,"The semantic model has the unique identifier"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"  urn:bamm:io.catenax.week_based_material_demand:1.0.0\n")),(0,i.kt)("p",null,"This identifier MUST be used by the data provider to define the semantics of the data being\ntransferred."),(0,i.kt)("p",null,"The rdf turtle file, an instance of the Semantic Aspect Meta Model, is the master for generating\nadditional file formats and serializations."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"  https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.week_based_material_demand/1.0.0/WeekBasedMaterialDemand.ttl\n")),(0,i.kt)("p",null,"The open source command line tool of the Eclipse Semantic Modeling Framework  is used for generation\nof other file formats like for example a JSON Schema, aasx for Asset Administration Shell Submodel\nTemplate or a HTML documentation."),(0,i.kt)("h2",{id:"aspect-model-weekbasedcapacitygroup"},'ASPECT MODEL "WeekBasedCapacityGroup"'),(0,i.kt)("p",null,"The capacity group information MUST be sent from the supplier to the customer according to the\n",(0,i.kt)("a",{parentName:"p",href:"https://catena-x.net/de/standard-library"},"CX-0048")," standard. The data format described here MUST be followed for the exchange of the capacity group information."),(0,i.kt)("p",null,"The capacity group data model MUST be implemented by all participants who wish to participate in the\nCatena-X DCM network as a customer or supplier."),(0,i.kt)("p",null,"Companies, who participate in the Catena-X Network as a supplier, MUST be able to receive material\ndemand information and MUST be able to send capacity group information."),(0,i.kt)("p",null,"Companies, who participate in the Catena-X Network as a customer, MUST be able to send material\ndemand information and MUST be able to receive capacity group information."),(0,i.kt)("p",null,"Companies who participate in the Catena-X Network with both roles therefore MUST be able to receive\nand send both, material demand as well as capacity group information. It is recommended that\ncompanies implement both standards."),(0,i.kt)("p",null,"Every data provider of ",(0,i.kt)("inlineCode",{parentName:"p"},"WeekBasedCapacityGroup")," data MUST provide the data conformant to the\nsemantic model specified in this document."),(0,i.kt)("p",null,"The unique identifier of the semantic model specified in this document MUST be used by the data\nprovider to define the semantics of the data being transferred."),(0,i.kt)("p",null,"Every certified business application relying on ",(0,i.kt)("inlineCode",{parentName:"p"},"WeekBasedCapacityGroup")," data MUST be able to\nconsume data conformant to the semantic model specified in this document."),(0,i.kt)("p",null,"Data consumers and data provider MUST comply with the license of the semantic model."),(0,i.kt)("p",null,"In the Catena-X data space ",(0,i.kt)("inlineCode",{parentName:"p"},"WeekBasedCapacityGroup")," data MUST be requested and exchanged via Eclipse\nDataspace Connector (EDC) conformant to ",(0,i.kt)("a",{parentName:"p",href:"https://catena-x.net/de/standard-library"},"CX-0018")," and ",(0,i.kt)("a",{parentName:"p",href:"https://catena-x.net/de/standard-library"},"CX-0002"),"."),(0,i.kt)("p",null,"The characteristics BPNL and BPNS MUST be used according to the standard ",(0,i.kt)("a",{parentName:"p",href:"https://catena-x.net/de/standard-library"},"CX-0010"),"."),(0,i.kt)("h3",{id:"sample-data-1"},"Sample Data"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "unitOfMeasure": "GRM",\n  "linkedDemandSeries": [\n    {\n      "materialNumberCustomer": "MNR-7307-AU340474.002",\n      "materialNumberSupplier": "MNR-8101-ID146955.001",\n      "customerLocation": "BPNS8888888888XX",\n      "demandCategory": {\n        "demandCategoryCode": "0001"\n      }\n    }\n  ],\n  "supplier": "BPNL6666666666YY",\n  "name": "Spark Plugs on drilling machine for car model XYZ",\n  "supplierLocations": "BPNS8888888888XX",\n  "capacities": [\n    {\n      "calendarWeek": "2022-08-01",\n      "actualCapacity": 1,\n      "maximumCapacity": 2\n    }\n  ],\n  "changedAt": "2023-03-10T12:27:11.320Z",\n  "capacityGroupId": "0157ba42-d2a8-4e28-8565-7b07830c1110",\n  "customer": "BPNL8888888888XX"\n}\n')),(0,i.kt)("p",null,"The semantic model has the unique identifier"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"  urn:bamm:io.catenax.week_based_capacity_group:1.0.0\n")),(0,i.kt)("p",null,"This identifier MUST be used by the data provider to define the semantics of the data being\ntransferred."),(0,i.kt)("p",null,"The rdf turtle file, an instance of the Semantic Aspect Meta Model, is the master for generating\nadditional file formats and serializations."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"  https://github.com/eclipse-tractusx/sldt-semantic-models/blob/main/io.catenax.week_based_capacity_group/1.0.0/WeekBasedCapacityGroup.ttl\n")),(0,i.kt)("p",null,"The open source command line tool of the Eclipse Semantic Modeling Framework  is used for generation\nof other file formats like for example a JSON Schema, aasx for Asset Administration Shell Submodel\nTemplate or a HTML documentation."),(0,i.kt)("h2",{id:"data-exchange"},"Data Exchange"),(0,i.kt)("h3",{id:"general-overview"},"General Overview"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"WeekBasedMaterialDemand")," as well as the ",(0,i.kt)("inlineCode",{parentName:"p"},"WeekBasedCapacityGroup")," is a JSON\nstring which is sent through EDC. The JSON string is standardized in this document and contains\neither ",(0,i.kt)("inlineCode",{parentName:"p"},"WeekBasedMaterialDemand")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"WeekBasedCapacityGroup")," information."),(0,i.kt)("p",null,"The standard only describes the sending and receiving of ",(0,i.kt)("inlineCode",{parentName:"p"},"WeekBasedMaterialDemand")," and\n",(0,i.kt)("inlineCode",{parentName:"p"},"WeekBasedCapacityGroup")," through EDC. Both objects are created and handled by applications of the\ncompanies involved, but these applications are not part of the standard."),(0,i.kt)("h3",{id:"weekbasedmaterialdemand-api"},"WeekBasedMaterialDemand API"),(0,i.kt)("p",null,"To support the exchange of ",(0,i.kt)("inlineCode",{parentName:"p"},"WeekBasedMaterialDemand")," data, a business application MUST define a\nsingle endpoint supporting the HTTP POST request method as described in ",(0,i.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc9110.html"},"RFC9110"),".\nThe structure of the endpoint MAY be freely chosen. The address of the endpoint MUST be provided\nas part of the EDC Data Asset defined in this document."),(0,i.kt)("p",null,"The WeekBasedMaterialDemand data MUST be sent from the customer to the supplier using an HTTP POST\nrequest. The data format described here MUST be followed for the exchange of the material demand\ninformation."),(0,i.kt)("p",null,"Multiple ",(0,i.kt)("inlineCode",{parentName:"p"},"WeekBasedMaterialDemand")," aspects MAY be sent in one transfer as a JSON list. If only one\n",(0,i.kt)("inlineCode",{parentName:"p"},"WeekBasedMaterialDemand")," aspect is transmitted, it MUST still be sent as a list with one entry."),(0,i.kt)("p",null,"The serialized JSON MUST NOT be larger than 15 MiB in size."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"WeekBasedMaterialDemand")," endpoint MUST be implemented by all participants who wish to\nparticipate in the Catena-X DCM network as a supplier. Customers MUST be able to send material\ndemand objects to their suppliers."),(0,i.kt)("p",null,"The data payload itself MUST be a valid JSON file."),(0,i.kt)("p",null,"All attributes marked as mandatory in the standard ",(0,i.kt)("a",{parentName:"p",href:"https://catena-x.net/de/standard-library"},"CX-0047")," MUST be included in the dataset. Attributes marked as 'Optional' MAY be included in the data set."),(0,i.kt)("p",null,"The usage of the attributes in the data model MUST follow the attribute descriptions in the definitions\nin ",(0,i.kt)("a",{parentName:"p",href:"https://catena-x.net/de/standard-library"},"CX-0046"),". While some attributes are technically a\nstring, not any string is valid. For example, expectedSupplierLocations MUST be formatted as a BPNS."),(0,i.kt)("p",null,"The calenderWeek MUST be set to a Monday of the week for that specific demand. The date format MUST\nbe in accordance with ISO8601 and MUST be in the format YYYY-MM-DD (for example 2023-02-13)."),(0,i.kt)("p",null,"The attributes 'demandCategory' and 'unitOfMeasure' MUST be set to one of the defined values as\ndefined in the standard ",(0,i.kt)("a",{parentName:"p",href:"https://catena-x.net/de/standard-library"},"CX-0047"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Definition from ",(0,i.kt)("a",{parentName:"strong",href:"https://catena-x.net/de/standard-library"},"CX-0046"))," (Standardized there, non-normative\nquote here) ",(0,i.kt)("em",{parentName:"p"},'"The customer owns and MUST publish its own demand with its supplier for the future\nhorizon and it is highly RECOMMENDED to avoid any gaps as far as possible and to share demand data\nat least till month 9, to ensure DCM participants to have also sufficient demand data to work with.'),"\n",(0,i.kt)("em",{parentName:"p"},"If more demand data is available (i.e. demand related to a horizon that spans beyond month 9), the\ncustomer MAY ideally provide them until month 24. If a customer has even more demand data available\n(i.e. demand related to a horizon that spans beyond month 24), he MAY also provide this to his\nsupplier.")," ",(0,i.kt)("em",{parentName:"p"},"The data series MAY start already from week n+2.")," ",(0,i.kt)("em",{parentName:"p"},'Although the data series MAY start\nalready from week n+2 and can be elaborated from a technical perspective, the DCM process have a\nclear focus on the tactical mid- to long-term horizon (typically considered from month 4 to 24) to\nenable a more resilient supply chain."'))),(0,i.kt)("p",null,"In addition to the definitions from ",(0,i.kt)("a",{parentName:"p",href:"https://catena-x.net/de/standard-library"},"CX-0046")," quoted above, the following rules have to be followed:"),(0,i.kt)("p",null,"The data series in the ",(0,i.kt)("inlineCode",{parentName:"p"},"WeekBasedMaterialDemand")," SHOULD start already from week ",(0,i.kt)("em",{parentName:"p"},"n+2"),"."),(0,i.kt)("p",null,"The demand for the current week (",(0,i.kt)("em",{parentName:"p"},"n=0"),") and the next week (",(0,i.kt)("em",{parentName:"p"},"n=1"),") MAY be included in the dataset.\nThe ",(0,i.kt)("inlineCode",{parentName:"p"},"WeekBasedMaterialDemand")," MUST include at least one week other than the current or the next week\n(meaning it may not be empty). Every week MUST NOT be included multiple times in the same\n",(0,i.kt)("inlineCode",{parentName:"p"},"WeekBasedMaterialDemand"),"."),(0,i.kt)("p",null,"If the demand for one of the weeks changes, the whole dataset MUST be sent to the supplier; sending\nthe changes only (delta update / incremental update) is not possible. By this procedure,\ninconsistent or incomplete data sets are avoided. One data transfer MUST contain at least one\n",(0,i.kt)("inlineCode",{parentName:"p"},"WeekBasedMaterialDemand")," data set."),(0,i.kt)("p",null,"For the combination of the attributes supplier, customer and materialNumberCustomer in the object\n",(0,i.kt)("inlineCode",{parentName:"p"},"WeekBasedMaterialDemand"),", there MUST NOT be more than one ",(0,i.kt)("inlineCode",{parentName:"p"},"WeekBasedMaterialDemand")," object in\nexistence. This means that the customer needs to collect all demands for all factories and send them\naggregated as one ",(0,i.kt)("inlineCode",{parentName:"p"},"WeekBasedMaterialDemand")," to the supplier."),(0,i.kt)("p",null,"If the demand in a certain week has the value ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),", it MUST be explicitly included as such in the\n",(0,i.kt)("inlineCode",{parentName:"p"},"WeekBasedMaterialDemand"),", meaning the week cannot be left out (as there is a difference between\nnull and 0). Weeks with an unknown demand (value ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),") SHOULD be left out."),(0,i.kt)("h4",{id:"uuid-generation-and-handling"},"UUID generation and handling"),(0,i.kt)("p",null,"The UUIDv4 MUST be generated according to ",(0,i.kt)("a",{parentName:"p",href:"https://www.rfc-editor.org/rfc/rfc4122"},"RFC4122"),"."),(0,i.kt)("p",null,"For technical purposes the UUID MUST be treated as unique. In order to reduce the probability of\ncollision as well as to eliminate certain attack vectors it MUST be treated as unique within the\nsupplier-customer relationship. It SHOULD NOT be treated as globally unique for the reasons stated\nabove."),(0,i.kt)("p",null,"For the combination of attributes: supplier, customer and materialNumberCustomer in the object\n",(0,i.kt)("inlineCode",{parentName:"p"},"WeekBasedMaterialDemand"),", there MUST be exactly one unique UUID."),(0,i.kt)("h4",{id:"edc-data-asset-structure"},"EDC Data Asset Structure"),(0,i.kt)("p",null,"The HTTP POST endpoint introduced MUST NOT be called from a supply chain partner directly. Rather, it MUST be called via an EDC communication.\nTherefore, the endpoint MUST be offered as an EDC Data Asset. The latter MUST have a property\n",(0,i.kt)("inlineCode",{parentName:"p"},"asset:prop:dcm")," with value ",(0,i.kt)("inlineCode",{parentName:"p"},"weekbasedmaterialdemand-endpoint"),". This property SHOULD be used to\nidentify the asset when searching the assets catalog of a supplier. Because the asset reflects the\ncontractual relationship between a supplier and its customers, only one asset with the\naforementioned property MUST be visible to the customer at any time to avoid ambiguity."),(0,i.kt)("p",null,"An example EDC Data Asset definition with a corresponding access / usage policy and contract\ndefinition are shown below."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: Expressions in double curly braces {{}} must be substituted with a corresponding value.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'// Asset definition\n{\n    "asset": {\n        "properties": {\n            "asset:prop:id": "1",\n            "asset:prop:dcm": "weekbasedmaterialdemand-endpoint",\n            "asset:prop:description": "Endpoint for provisioning of week based material demands"\n        }\n    },\n    "dataAddress": {\n        "properties": {\n            "type": "HttpData",\n            "baseUrl": "{{ **URL-WEEKBASEDMATERIALDEMAND-ENDPOINT** }}"\n        }\n    }\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'// Access and Usage Policy definition\n{\n    "id": "1",\n    "policy": {\n        "prohibitions": [\n        ],\n        "obligations": [\n        ],\n        "permissions": [\n            {\n                "edctype": "dataspaceconnector:permission",\n                "action": {\n                    "type": "USE"\n                },\n                "constraints": [\n                    {\n                        "edctype": "AtomicConstraint",\n                        "leftExpression": {\n                            "edctype": "dataspaceconnector:literalexpression",\n                            "value": "BusinessPartnerNumber"\n                        },\n                        "rightExpression": {\n                            "edctype": "dataspaceconnector:literalexpression",\n                            "value": "{{ **CUSTOMER-BPN** }}"\n                        },\n                        "operator": "EQ"\n                    }\n                ]\n            }\n        ]\n    }\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'// Contract definition\n{\n    "id": "1",\n    "criteria": [\n        {\n            "operandLeft": "asset:prop:id",\n            "operator": "=",\n            "operandRight": "1"\n        }\n    ],\n    "accessPolicyId": "1",\n    "contractPolicyId": "1"\n}\n')),(0,i.kt)("h4",{id:"error-handling-and-payload-validation"},"Error Handling and payload validation"),(0,i.kt)("p",null,"For error handling and payload validation instructions please refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://catena-x.net/de/standard-library"},"CX-0048")," standard."),(0,i.kt)("h3",{id:"weekbasedcapacitygroup-api"},"WeekBasedCapacityGroup API"),(0,i.kt)("p",null,"To support the exchange of ",(0,i.kt)("inlineCode",{parentName:"p"},"WeekBasedCapacityGroup")," data, a business application MUST define a\nsingle endpoint supporting the HTTP POST request method as described in ",(0,i.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc9110.html"},"RFC9110"),". The structure of the endpoint MAY be freely chosen. The address of the endpoint MUST be provided as part of the EDC Data Asset defined in this document."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"WeekBasedCapacityGroup")," data MUST be sent from the supplier to the customer using an HTTP POST\nrequest. The data format described here MUST be followed for the exchange of the capacity group\ninformation."),(0,i.kt)("p",null,"Multiple ",(0,i.kt)("inlineCode",{parentName:"p"},"WeekBasedCapacityGroup")," aspects MAY be sent in one transfer as a JSON list. If only one\n",(0,i.kt)("inlineCode",{parentName:"p"},"WeekBasedCapacityGroup")," aspect is transmitted, it MUST still be sent as a list with one entry."),(0,i.kt)("p",null,"The serialized JSON MUST NOT be larger than 15 MiB in size."),(0,i.kt)("p",null,"The WeekBasedCapacityGroup endpoint MUST be implemented by all participants who wish to participate\nin the Catena-X DCM network as a customer. Suppliers MUST be able to send ",(0,i.kt)("inlineCode",{parentName:"p"},"WeekBasedCapacityGroup"),"\nobjects to their customers."),(0,i.kt)("p",null,"The data payload itself MUST be a valid JSON file."),(0,i.kt)("p",null,"All attributes marked as mandatory in the standard ",(0,i.kt)("a",{parentName:"p",href:"https://catena-x.net/de/standard-library"},"CX-0047")," MUST be\nincluded in the dataset. Attribute marked as 'Optional' CAN be included in the data set."),(0,i.kt)("p",null,"The usage of the attributes in the data model MUST follow the attribute descriptions in the standard\n",(0,i.kt)("a",{parentName:"p",href:"https://catena-x.net/de/standard-library"},"CX-0047")," and the definitions in ",(0,i.kt)("a",{parentName:"p",href:"#41-normative-references"},"CX-0046"),". For example, an exact definition of the different capacities is provided there and needs to be observed."),(0,i.kt)("p",null,"While some attributes are technically a string, not any string is valid. For example, supplier MUST\nbe formatted as a BPNL."),(0,i.kt)("p",null,"The calenderWeek MUST be set to a Monday of the week for that specific ",(0,i.kt)("inlineCode",{parentName:"p"},"WeekBasedCapacityGroup"),". The\ndate format MUST be in accordance with ISO8601 and MUST be in the\nformat YYYY-MM-DD (for example 2023-02-13)."),(0,i.kt)("p",null,"The data payload itself MUST be a valid JSON file."),(0,i.kt)("p",null,"The attributes 'demandCategory' and 'unitOfMeasure' MUST be set to one of the defined values as\ndefined in the standard ",(0,i.kt)("a",{parentName:"p",href:"https://catena-x.net/de/standard-library"},"CX-0047"),"."),(0,i.kt)("p",null,"The capacities for the current week (",(0,i.kt)("em",{parentName:"p"},"n=0"),") and the next week (",(0,i.kt)("em",{parentName:"p"},"n=1"),") MAY be included in the\ndataset. The ",(0,i.kt)("inlineCode",{parentName:"p"},"WeekBasedCapacityGroup")," MUST include at least one week other than the current or the\nnext week (meaning it may not be empty). Every week MUST NOT be included multiple times in the same\n",(0,i.kt)("inlineCode",{parentName:"p"},"WeekBasedCapacityGroup"),"."),(0,i.kt)("p",null,"If the capacity for one of the weeks changes, the whole dataset MUST be sent to the customer,\nsending the changes only (delta update / incremental update) is NOT possible. By this procedure,\ninconsistent or incomplete data sets are avoided. One data transfer MUST contain at least one\n",(0,i.kt)("inlineCode",{parentName:"p"},"WeekBasedCapacityGroup")," data set."),(0,i.kt)("p",null,"Additional business-process related rules are specified in the 'process template', these MUST be\nfollowed as well. For example, the 'process template' defines a capacity and how it is to be\ninterpreted or that a demand must be consistent with other exchanged information such as call-offs.\nAll ",(0,i.kt)("inlineCode",{parentName:"p"},"WeekBasedCapacityGroup")," objects MUST only use a mutually agreed unit of measure (as defined in\nthe standard ",(0,i.kt)("a",{parentName:"p",href:"https://catena-x.net/de/standard-library"},"CX-0046"),")."),(0,i.kt)("p",null,"The property linkedDemandSeries is used to indicate to which ",(0,i.kt)("inlineCode",{parentName:"p"},"WeekBasedMaterialDemand")," object a\n",(0,i.kt)("inlineCode",{parentName:"p"},"WeekBasedCapacityGroup")," object refers to. More specifically, the linkedDemandSeries refers to a\ndemand for a specific demandCategory / customerLocation / materialNumberCustomer combination."),(0,i.kt)("p",null,"One specific combination of demandCategory / customerLocation / materialNumberCustomer MAY be\nreferred to in multiple ",(0,i.kt)("inlineCode",{parentName:"p"},"WeekBasedCapacityGroup")," objects. Therefore, one materialNumberCustomer MAY\nbe contained in linkedDemandSeries of several different ",(0,i.kt)("inlineCode",{parentName:"p"},"WeekBasedCapacityGroup")," objects."),(0,i.kt)("p",null,"The order of the entries listed in the linkedDemandSeries of a ",(0,i.kt)("inlineCode",{parentName:"p"},"WeekBasedCapacityGroup")," is arbitrary\nand MUST be treated as such."),(0,i.kt)("h4",{id:"uuid-generation-and-handling-1"},"UUID generation and handling"),(0,i.kt)("p",null,"The UUIDv4 MUST be generated according to ",(0,i.kt)("a",{parentName:"p",href:"https://www.rfc-editor.org/rfc/rfc4122"},"RFC4122"),"."),(0,i.kt)("p",null,"For technical purposes the UUID MUST be treated as unique. In order to reduce the probability of\ncollision as well as to eliminate certain attack vectors it MUST be treated as unique within the\nsupplier-customer relationship. It SHOULD NOT be treated as globally unique for the reasons stated\nabove."),(0,i.kt)("h4",{id:"edc-data-asset-structure-1"},"EDC Data Asset Structure"),(0,i.kt)("p",null,'The HTTP POST endpoint introduced MUST NOT be called from a supply chain partner directly. Rather, it MUST be called via an EDC communication. Therefore, the endpoint MUST be offered as an EDC Data Asset. The latter MUST have a property " ',(0,i.kt)("strong",{parentName:"p"},"asset:prop:dcm"),'" with value " ',(0,i.kt)("strong",{parentName:"p"},"weekbasedcapacitygroup-endpoint"),'". This property SHOULD be used to identify the asset when searching the assets catalog of a customer. Because the asset reflects\nthe contractual relationship between a customer and its suppliers, only one asset with the\naforementioned property MUST be visible to the supplier at any time to avoid ambiguity.'),(0,i.kt)("p",null,"An example EDC Data Asset definition with a corresponding access / usage policy and contract\ndefinition are shown below."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: Expressions in double curly braces {{}} must be substituted with a corresponding value.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'// Asset definition\n{\n    "asset": {\n        "properties": {\n            "asset:prop:id": "1",\n            "asset:prop:dcm": "weekbasedcapacitygroup-endpoint",\n            "asset:prop:description": "Endpoint for provisioning of week based capacity groups"\n        }\n    },\n    "dataAddress": {\n        "properties": {\n            "type": "HttpData",\n            "baseUrl": "{{URL-WEEKBASEDCAPACITYGROUP-ENDPOINT}}"\n        }\n    }\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'// Access and Usage Policy definition\n{\n    "id": "1",\n    "policy": {\n        "prohibitions": [\n        ],\n        "obligations": [\n        ],\n        "permissions": [\n            {\n                "edctype": "dataspaceconnector:permission",\n                "action": {\n                    "type": "USE"\n                },\n                "constraints": [\n                    {\n                        "edctype": "AtomicConstraint",\n                        "leftExpression": {\n                            "edctype": "dataspaceconnector:literalexpression",\n                            "value": "BusinessPartnerNumber"\n                        },\n                        "rightExpression": {\n                            "edctype": "dataspaceconnector:literalexpression",\n                            "value": "{{SUPPLIER-BPN}}"\n                        },\n                        "operator": "EQ"\n                    }\n                ]\n            }\n        ]\n    }\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'// Contract definition\n{\n    "id": "1",\n    "criteria": [\n        {\n            "operandLeft": "asset:prop:id",\n            "operator": "=",\n            "operandRight": "1"\n        }\n    ],\n    "accessPolicyId": "1",\n    "contractPolicyId": "1"\n}\n')),(0,i.kt)("h4",{id:"error-handling-and-payload-validation-1"},"Error Handling and payload validation"),(0,i.kt)("p",null,"For error handling and payload validation instructions please refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://catena-x.net/de/standard-library"},"CX-0048")," standard."))}c.isMDXComponent=!0},38842:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/DCMKitLogoIcon-min-eb8a08a66b369c6313f87d709f81ea6c.png"}}]);