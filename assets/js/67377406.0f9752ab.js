"use strict";(self.webpackChunkeclipse_tractusx_github_io=self.webpackChunkeclipse_tractusx_github_io||[]).push([[83302],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>x});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=d(n),m=i,x=l["".concat(s,".").concat(m)]||l[m]||u[m]||r;return n?a.createElement(x,o(o({ref:t},p),{},{components:n})):a.createElement(x,o({ref:t},p))}));function x(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[l]="string"==typeof e?e:i,o[1]=c;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},31535:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));const r={sidebar_position:1,title:"Provisioning"},o=void 0,c={unversionedId:"kits/knowledge-agents/operation-view/provider",id:"kits/knowledge-agents/operation-view/provider",title:"Provisioning",description:"\x3c!--",source:"@site/docs-kits/kits/knowledge-agents/operation-view/provider.md",sourceDirName:"kits/knowledge-agents/operation-view",slug:"/kits/knowledge-agents/operation-view/provider",permalink:"/docs-kits/next/kits/knowledge-agents/operation-view/provider",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Provisioning"},sidebar:"kits",previous:{title:"Agent-Enabled Dataspace Connector",permalink:"/docs-kits/next/kits/knowledge-agents/operation-view/agent_edc"},next:{title:"Bridging",permalink:"/docs-kits/next/kits/knowledge-agents/operation-view/bridge"}},s={},d=[{value:"Quick Setup Guide for Data Provisioning",id:"quick-setup-guide-for-data-provisioning",level:3},{value:"Quick Setup Guide for Function Provisioning (Remoting)",id:"quick-setup-guide-for-function-provisioning-remoting",level:3},{value:"Quick Setup Guide for Registering A Graph in the EDC",id:"quick-setup-guide-for-registering-a-graph-in-the-edc",level:3},{value:"Register A Graph Policy",id:"register-a-graph-policy",level:4},{value:"Register A Graph Contract",id:"register-a-graph-contract",level:4},{value:"Register a Graph Asset",id:"register-a-graph-asset",level:4}],p={toc:d};function l(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"For Providing Data and/or Functions in Semantic-Web Driven Dataspace Applications following the Catena-X Knowledge Agents Standard, we recommend deploying a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/knowledge-agents/blob/main/README.md"},"Tractus-X Binding Agent")),(0,i.kt)("p",null,"More specifically, we recommend to deploy"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/eclipse-tractusx/knowledge-agents/blob/main/provisioning/README.md"},"Tractus-X Provisioning Agent")," for relational or virtualized data sources."),(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/eclipse-tractusx/knowledge-agents/blob/main/remoting/README.md"},"Tractus-X Remoting Agent")," for REST-based API functions.")),(0,i.kt)("p",null,"For more information see"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Our ",(0,i.kt)("a",{parentName:"li",href:"../adoption-view/intro"},"Adoption")," guidelines"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"../development-view/architecture"},"Implementation")," documentation"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"deployment"},"Deployment")," overview"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"testbed"},"Conformity")," testbed"),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("a",{parentName:"li",href:"policy"},"Data Sovereignity & Graph Policy")," discussion")),(0,i.kt)("h3",{id:"quick-setup-guide-for-data-provisioning"},"Quick Setup Guide for Data Provisioning"),(0,i.kt)("p",null,"Add a helm dependency to your umbrella/infrastructure Chart.yaml (this example uses a postgresql telematics sample, see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/knowledge-agents/blob/main/provisioning/README.md"},"here")," for more options and full details)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"    - name: provisioning-agent\n      repository: https://eclipse-tractusx.github.io/charts/dev\n      version: 1.9.8\n      alias: my-provider-agent\n")),(0,i.kt)("p",null,"Then configure the agent in the values.yaml"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"my-provider-agent: \n  nameOverride: my-provider-agent\n  fullnameOverride: my-provider-agent\n  bindings: \n    # mutes the default example endpoint\n    dtc: null\n    # adds a telematics graph based on the default (builtin) ontology \n    telematics: \n      port: 8080\n      path: /telematics/(.*)\n      settings: \n        jdbc.url: 'jdbc:postgresql://{{mydatabasehost}}:5432/{{mydatabase}}'\n        jdbc.user: <path:{{vaultpath}}#username>\n        jdbc.password: <path:{{vaultpath}}#password>\n        jdbc.driver: 'org.postgresql.Driver'\n      ontology: cx-ontology.xml\n      mapping: |-\n        [PrefixDeclaration]\n        cx-common:          https://w3id.org/catenax/ontology/common#\n        cx-core:            https://w3id.org/catenax/ontology/core#\n        cx-vehicle:         https://w3id.org/catenax/ontology/vehicle#\n        cx-reliability:     https://w3id.org/catenax/ontology/reliability#\n        uuid:               urn:uuid:\n        bpnl:               bpn:legal:\n        owl:                http://www.w3.org/2002/07/owl#\n        rdf:                http://www.w3.org/1999/02/22-rdf-syntax-ns#\n        xml:                http://www.w3.org/XML/1998/namespace\n        xsd:                http://www.w3.org/2001/XMLSchema#\n        json:               https://json-schema.org/draft/2020-12/schema#\n        obda:               https://w3id.org/obda/vocabulary#\n        rdfs:               http://www.w3.org/2000/01/rdf-schema#\n        oem:                urn:oem:\n\n        [MappingDeclaration] @collection [[\n        mappingId   vehicles\n        target      <{vehicle_id}> rdf:type cx-vehicle:Vehicle ; cx-vehicle:vehicleIdentificationNumber {van}^^xsd:string; cx-vehicle:worldManufaturerId bpnl:{localIdentifiers_manufacturerId}; cx-vehicle:productionDate {production_date}^^xsd:date.\n        source      SELECT vehicle_id, van, '{{MYBPNL}}' as localIdentifiers_manufacturerId, production_date FROM vehicles\n\n        mappingId   partsvehicle\n        target      <{gearbox_id}> cx-vehicle:isPartOf <{vehicle_id}> .\n        source      SELECT vehicle_id, gearbox_id FROM vehicles\n\n        mappingId   vehicleparts\n        target      <{vehicle_id}> cx-vehicle:hasPart <{gearbox_id}> .\n        source      SELECT vehicle_id, gearbox_id FROM vehicles\n\n        mappingId   parts\n        target      <{gearbox_id}> rdf:type cx-vehicle:Part ; cx-vehicle:id {gearbox_id}^^xsd:string; cx-vehicle:name {partTypeInformation_nameAtManufacturer}^^xsd:string; cx-vehicle:number {partTypeInformation_manufacturerPartId}^^xsd:string; cx-vehicle:supplier bpnl:{localIdentifiers_manufacturerId}; cx-vehicle:productionDate {production_date}^^xsd:date .\n        source      SELECT gearbox_id, production_date, 'Differential Gear' as partTypeInformation_nameAtManufacturer, '{{PARTNERTBPNL}}' as localIdentifiers_manufacturerId, 'Dummy Gearbox' as partTypeInformation_manufacturerPartId FROM vehicles\n\n        mappingId   partAnalysis\n        target      oem:{newest_telematics_id} cx-reliability:analysedObject <{gearbox_id}>.\n        source      SELECT gearbox_id, newest_telematics_id FROM vehicles\n\n        mappingId   analysisInformation\n        target      oem:{id} rdf:type cx-reliability:Analysis; cx-reliability:operatingHoursOfVehicle {metadata_status_operatingHours}^^xsd:float; cx-core:startDateTime {metadata_status_date}^^xsd:dateTime; cx-core:endDateTime {metadata_status_date}^^xsd:dateTime; cx-reliability:mileageOfVehicle {metadata_status_mileage}^^xsd:int.\n        source      SELECT id, floor((load_spectra::jsonb->0->'metadata'->'status'->>'operatingHours')::numeric)::integer as metadata_status_operatingHours, replace(load_spectra::jsonb->0->'metadata'->'status'->>'date','Z','.000Z') as metadata_status_date,load_spectra::jsonb->0->'metadata'->'status'->>'mileage' as metadata_status_mileage FROM telematics_data\n\n        mappingId   analysisResult\n        target      oem:{newest_telematics_id} cx-reliability:result oem:{newest_telematics_id}/{name}.\n        source      SELECT gearbox_id, newest_telematics_id, name FROM vehicles, (VALUES ('GearSet'), ('GearOil'), ('Clutch')) AS spectrum(name)\n\n        mappingId   loadspectrum\n        target      oem:{id}/{name} rdf:type cx-reliability:LoadSpectrum; cx-core:id {name}^^xsd:string; cx-core:name {metadata_projectDescription}^^xsd:string; cx-reliability:description {metadata_routeDescription}^^xsd:string; cx-reliability:countingValue {body_counts_countsName}^^xsd:string; cx-reliability:countingUnit {header_countingUnit}^^xsd:string; cx-reliability:countingMethod {header_countingMethod}^^xsd:string; cx-reliability:channels {header_channels}^^json:Object; cx-reliability:classes {body_classes}^^json:Object; cx-reliability:values {body_counts_countsList}^^json:Object .\n        source      SELECT id, index, name, load_spectra::jsonb->index->'metadata'->>'projectDescription' as metadata_projectDescription, load_spectra::jsonb->index->'metadata'->>'routeDescription' as metadata_routeDescription, load_spectra::jsonb->index->'header'->>'countingUnit' as header_countingUnit, load_spectra::jsonb->index->'header'->>'countingMethod' as header_countingMethod, load_spectra::jsonb->index->'header'->'channels' as header_channels, load_spectra::jsonb->index->'body'->'classes' as body_classes, load_spectra::jsonb->index->'body'->'counts'->'countsName' as body_counts_countsName, load_spectra::jsonb->index->'body'->'counts'->'countsList' as body_counts_countsList FROM telematics_data, (VALUES (0,'GearSet'), (1,'GearOil'), (2,'Clutch')) AS spectrum(index,name)\n        ]]  \n  ingresses:\n    - enabled: true\n      # -- The hostname to be used to precisely map incoming traffic onto the underlying network service\n      hostname: \"my-provider-agent.internal\"\n      annotations:\n        nginx.ingress.kubernetes.io/rewrite-target: /$1\n        nginx.ingress.kubernetes.io/use-regex: \"true\"\n      # -- Agent endpoints exposed by this ingress resource\n      endpoints:\n        - telematics\n      tls:\n        enabled: true\n        secretName: my-provider-tls\n")),(0,i.kt)("p",null,"The above mapping resource is written in a ",(0,i.kt)("a",{parentName:"p",href:"https://ontop-vkg.org/tutorial/mapping/"},"OBDA Mapping Definition Language"),"."),(0,i.kt)("h3",{id:"quick-setup-guide-for-function-provisioning-remoting"},"Quick Setup Guide for Function Provisioning (Remoting)"),(0,i.kt)("p",null,"Add a helm dependency to your umbrella/infrastructure Chart.yaml(this example uses a ","[Behaviour Twin RUL]","(/docs-kits/kits/Behaviour Twin RuL Kit/page_adoption_view) sample backend, see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/eclipse-tractusx/knowledge-agents/blob/main/remoting/README.md"},"here")," for more options and full details)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"    - name: remoting-agent\n      repository: https://eclipse-tractusx.github.io/charts/dev\n      version: 1.9.8\n      alias: my-remoting-agent\n")),(0,i.kt)("p",null,"Then configure the agent in the values.yaml"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'my-remoting-agent: \n  nameOverride: my-remoting-agent\n  fullnameOverride: my-remoting-agent\n  ingresses:\n    - enabled: true\n      # -- The hostname to be used to precisely map incoming traffic onto the underlying network service\n      hostname: "my-remoting-agent.internal"\n      # -- Agent endpoints exposed by this ingress resource\n      endpoints:\n        - default\n      tls:\n        enabled: true\n        secretName: my-remoting-tls\n  repositories:\n    rul: |-\n      #\n      # Rdf4j configuration for a rul-specific remoting\n      #\n      @prefix rdf:            <http://www.w3.org/1999/02/22-rdf-syntax-ns#>.\n      @prefix rdfs:           <http://www.w3.org/2000/01/rdf-schema#>.\n      @prefix rep:            <http://www.openrdf.org/config/repository#>.\n      @prefix sr:             <http://www.openrdf.org/config/repository/sail#>.\n      @prefix sail:           <http://www.openrdf.org/config/sail#>.\n      @prefix sp:             <http://spinrdf.org/sp#>.\n      @prefix xsd:            <http://www.w3.org/2001/XMLSchema#> .\n      @prefix json:           <https://json-schema.org/draft/2020-12/schema#> .\n      @prefix dcterms:        <http://purl.org/dc/terms/> .\n      @prefix cx-fx:          <https://w3id.org/catenax/ontology/function#>.\n      @prefix cx-common:      <https://w3id.org/catenax/ontology/common#>.\n      @prefix cx-core:        <https://w3id.org/catenax/ontology/core#>.\n      @prefix cx-vehicle:     <https://w3id.org/catenax/ontology/vehicle#>.\n      @prefix cx-reliability: <https://w3id.org/catenax/ontology/reliability#>.\n      @prefix cx-behaviour:   <https://w3id.org/catenax/ontology/behaviour#>.\n\n      [] rdf:type rep:Repository ;\n        rep:repositoryID "rul" ;\n        rdfs:label "Remainig Useful Life Functions Repository" ;\n        rep:repositoryImpl [\n            rep:repositoryType "openrdf:SailRepository" ;\n            sr:sailImpl [\n              sail:sailType "org.eclipse.tractusx.agents:Remoting" ;\n              cx-fx:supportsInvocation cx-behaviour:RemainingUsefulLife;\n              cx-fx:callbackAddress <https://my-remoting-agent.internal/rdf4j-server/callback>;\n            ]\n        ].\n\n      cx-behaviour:RemainingUsefulLife rdf:type cx-fx:Function;\n        dcterms:description "Remaining Useful Life is an asynchronous batch invocation."@en ;\n        dcterms:title "Remaining Useful Life" ;\n        cx-fx:targetUri "https://{{RULAPI}}";\n        cx-fx:invocationMethod "POST-JSON";\n      # cx-common:authenticationKey "Authorization";\n      # cx-common:authenticationCode "Basic Zm9vOmJhcg==";\n        cx-fx:invocationMethod "POST-JSON";\n        cx-fx:invocationIdProperty "header.notificationID,content.requestRefId";\n        cx-fx:callbackProperty "header.respondAssetId";\n        cx-fx:input cx-behaviour:notification;\n        cx-fx:input cx-behaviour:sender;\n        cx-fx:input cx-behaviour:senderConnector;\n        cx-fx:input cx-behaviour:recipient;\n        cx-fx:input cx-behaviour:recipientConnector;\n        cx-fx:input cx-behaviour:recipient;\n        cx-fx:input cx-behaviour:recipientConnector;\n        cx-fx:input cx-behaviour:severity;\n        cx-fx:input cx-behaviour:status;\n        cx-fx:input cx-behaviour:targetDate;\n        cx-fx:input cx-behaviour:timeStamp;\n        cx-fx:input cx-behaviour:classification;\n        cx-fx:input cx-behaviour:component;\n        cx-fx:input cx-behaviour:observationType;\n        cx-fx:input cx-behaviour:statusDate;\n        cx-fx:input cx-behaviour:statusOperatingHours;\n        cx-fx:input cx-behaviour:statusMileage;\n        cx-fx:input cx-behaviour:observationType;\n        cx-fx:input cx-behaviour:metadata;\n        cx-fx:input cx-behaviour:countingMethod;\n        cx-fx:input cx-behaviour:countingValue;\n        cx-fx:input cx-behaviour:countingUnit;\n        cx-fx:input cx-behaviour:headerChannels;\n        cx-fx:input cx-behaviour:bodyClasses;\n        cx-fx:input cx-behaviour:bodyCountsList;\n        cx-fx:result cx-behaviour:response.\n\n      cx-behaviour:notification rdf:type cx-fx:Argument;\n        dcterms:description "A default notification output template."@en ;\n        dcterms:title "Notification Template";\n        cx-fx:argumentName ".";\n        cx-fx:dataType json:Object;\n        cx-fx:priority "-1"^^xsd:integer;\n        cx-fx:default "{ \\"content\\": { \\"endurancePredictorInputs\\": [ ]}}"^^json:Object.\n\n      cx-behaviour:sender rdf:type cx-fx:Argument;\n        dcterms:description "Sender of the notification as a BPN."@en ;\n        dcterms:title "Notification Sender";\n        cx-fx:argumentName "header.senderBPN";\n        cx-fx:default "anonymous".\n\n      cx-behaviour:senderConnector rdf:type cx-fx:Argument;\n        dcterms:description "Sender Address of the notification as a URL."@en ;\n        dcterms:title "Notification Sender Address";\n        cx-fx:argumentName "header.senderAddress";\n        cx-fx:default "unknown".\n\n      cx-behaviour:recipient rdf:type cx-fx:Argument;\n        dcterms:description "Recipient of the notification as a BPN."@en ;\n        dcterms:title "Notification Recipient";\n        cx-fx:argumentName "header.recipientBPN";\n        cx-fx:default "anonymous".\n\n      cx-behaviour:recipientConnector rdf:type cx-fx:Argument;\n        dcterms:description "Recipient Address of the notification as a URL."@en ;\n        dcterms:title "Notification Recipient Address";\n        cx-fx:argumentName "header.recipientAddress";\n        cx-fx:default "unknown".\n\n      cx-behaviour:severity rdf:type cx-fx:Argument;\n        dcterms:description "Severity of the notification."@en ;\n        dcterms:title "Notification Severity";\n        cx-fx:argumentName "header.severity";\n        cx-fx:dataType xsd:string;\n        cx-fx:default "MINOR".\n\n      cx-behaviour:status rdf:type cx-fx:Argument;\n        dcterms:description "Status of the notification."@en ;\n        dcterms:title "Notification Status";\n        cx-fx:argumentName "header.status";\n        cx-fx:dataType xsd:string;\n        cx-fx:default "SENT".\n\n      cx-behaviour:targetDate rdf:type cx-fx:Argument;\n        dcterms:description "Target Date of the notification."@en ;\n        dcterms:title "Notification Target Date";\n        cx-fx:dataType xsd:dateTime;\n        cx-fx:argumentName "header.targetDate".\n\n      cx-behaviour:timeStamp rdf:type cx-fx:Argument;\n        dcterms:description "Timestamp of the notification."@en ;\n        dcterms:title "Notification Timestamp";\n        cx-fx:dataType xsd:dateTime;\n        cx-fx:argumentName "header.timeStamp".\n\n      cx-behaviour:classification rdf:type cx-fx:Argument;\n        dcterms:description "Classification of the notification."@en ;\n        dcterms:title "Notification Classification";\n        cx-fx:argumentName "header.classification";\n        cx-fx:dataType xsd:string;\n        cx-fx:default "RemainingUsefulLifePredictor".\n\n      cx-behaviour:component rdf:type cx-fx:Argument;\n        dcterms:description "Component of the Predicition."@en ;\n        dcterms:title "Predicted Component";\n        cx-fx:formsBatchGroup "true"^^xsd:boolean;\n        cx-fx:argumentName "content.endurancePredictorInputs.0.componentId,content.endurancePredictorInputs.0.classifiedLoadSpectrum{https://w3id.org/catenax/ontology/behaviour#observationType}.targetComponentId".\n\n      cx-behaviour:observationType rdf:type cx-fx:Argument;\n        dcterms:description "The type of observation made."@en ;\n        dcterms:title "Observation Type";\n        cx-fx:argumentName "content.endurancePredictorInputs.0.classifiedLoadSpectrum{https://w3id.org/catenax/ontology/behaviour#observationType}.metadata.componentDescription";\n        cx-fx:dataType xsd:string.\n\n      cx-behaviour:metadata rdf:type cx-fx:Argument;\n        dcterms:description "Metadata of the Loadspectrum."@en ;\n        dcterms:title "Loadspectrum Metadata";\n        cx-fx:argumentName "content.endurancePredictorInputs.0.classifiedLoadSpectrum{https://w3id.org/catenax/ontology/behaviour#observationType}";\n        cx-fx:dataType json:Object;\n        cx-fx:priority "0"^^xsd:integer;\n        cx-fx:default "{ \\"metadata\\":{ \\"projectDescription\\": \\"pnr_76543\\", \\"routeDescription\\": \\"logged\\" }, \\"bammId\\": \\"urn:bamm:io.openmanufacturing.digitaltwin:1.0.0#ClassifiedLoadSpectrum\\" }"^^json:Object.\n\n      cx-behaviour:statusDate rdf:type cx-fx:Argument;\n        dcterms:description "Time of Recording."@en ;\n        dcterms:title "Loadspectrum Recording Time";\n        cx-fx:dataType xsd:dateTime;\n        cx-fx:argumentName "content.endurancePredictorInputs.0.classifiedLoadSpectrum{https://w3id.org/catenax/ontology/behaviour#observationType}.metadata.status.date".\n\n      cx-behaviour:statusOperatingHours rdf:type cx-fx:Argument;\n        dcterms:description "Operating Hours of Target Component at Time of Recording."@en ;\n        dcterms:title "Loadspectrum Operating Hours";\n        cx-fx:dataType xsd:float;\n        cx-fx:argumentName "content.endurancePredictorInputs.0.classifiedLoadSpectrum{https://w3id.org/catenax/ontology/behaviour#observationType}.metadata.status.operatingHours".\n\n      cx-behaviour:statusMileage rdf:type cx-fx:Argument;\n        dcterms:description "Mileage of Component at Time of Recording."@en ;\n        dcterms:title "Loadspectrum Mileage";\n        cx-fx:dataType xsd:int;\n        cx-fx:argumentName "content.endurancePredictorInputs.0.classifiedLoadSpectrum{https://w3id.org/catenax/ontology/behaviour#observationType}.metadata.status.mileage".\n\n      cx-behaviour:countingUnit rdf:type cx-fx:Argument;\n        dcterms:description "Counting Unit of Load Spectrum."@en ;\n        dcterms:title "Loadspectrum Counting Unit";\n        cx-fx:dataType xsd:string;\n        cx-fx:argumentName "content.endurancePredictorInputs.0.classifiedLoadSpectrum{https://w3id.org/catenax/ontology/behaviour#observationType}.header.countingUnit".\n\n      cx-behaviour:countingValue rdf:type cx-fx:Argument;\n        dcterms:description "Counting Value Name of Load Spectrum."@en ;\n        dcterms:title "Loadspectrum Counting Value";\n        cx-fx:dataType xsd:string;\n        cx-fx:argumentName "content.endurancePredictorInputs.0.classifiedLoadSpectrum{https://w3id.org/catenax/ontology/behaviour#observationType}.header.countingValue,content.endurancePredictorInputs.0.classifiedLoadSpectrum{https://w3id.org/catenax/ontology/behaviour#observationType}.body.counts.countsName".\n\n      cx-behaviour:countingMethod rdf:type cx-fx:Argument;\n        dcterms:description "Counting Method of Load Spectrum."@en ;\n        dcterms:title "Loadspectrum Counting Method";\n        cx-fx:dataType xsd:string;\n        cx-fx:argumentName "content.endurancePredictorInputs.0.classifiedLoadSpectrum{https://w3id.org/catenax/ontology/behaviour#observationType}.header.countingMethod".\n\n      cx-behaviour:headerChannels rdf:type cx-fx:Argument;\n        dcterms:description "Channels of Load Spectrum."@en ;\n        dcterms:title "Loadspectrum Channels";\n        cx-fx:dataType json:Object;\n        cx-fx:argumentName "content.endurancePredictorInputs.0.classifiedLoadSpectrum{https://w3id.org/catenax/ontology/behaviour#observationType}.header.channels".\n\n      cx-behaviour:bodyClasses rdf:type cx-fx:Argument;\n        dcterms:description "Classes of Load Spectrum."@en ;\n        dcterms:title "Loadspectrum Classes";\n        cx-fx:dataType json:Object;\n        cx-fx:argumentName "content.endurancePredictorInputs.0.classifiedLoadSpectrum{https://w3id.org/catenax/ontology/behaviour#observationType}.body.classes".\n\n      cx-behaviour:bodyCountsList rdf:type cx-fx:Argument;\n        dcterms:description "Counts List of Load Spectrum."@en ;\n        dcterms:title "Loadspectrum Counts List";\n        cx-fx:dataType json:Object;\n        cx-fx:argumentName "content.endurancePredictorInputs.0.classifiedLoadSpectrum{https://w3id.org/catenax/ontology/behaviour#observationType}.body.counts.countsList".\n\n      cx-behaviour:response rdf:type cx-fx:Result;\n        dcterms:description "The asynchronous notification response."@en ;\n        dcterms:title "Asynchronous notification response." ;\n        cx-fx:callbackProperty "header.referencedNotificationID";\n        cx-fx:outputProperty "content.endurancePredictorOutputs";\n        cx-fx:output cx-behaviour:remainingOperatingHours;\n        cx-fx:output cx-behaviour:remainingRunningDistance.\n\n      cx-behaviour:remainingOperatingHours rdf:type cx-fx:ReturnValue;\n        dcterms:description "Predicted Operating Hours of Remaining Useful Life Response"@en ;\n        dcterms:title "Remaining Useful Life Operating Hours" ;\n        cx-fx:valuePath "0.remainingUsefulLife.remainingOperatingHours";\n        cx-fx:dataType xsd:float.\n\n      cx-behaviour:remainingRunningDistance rdf:type cx-fx:ReturnValue;\n        dcterms:description "Predicted Distance of Remaining Useful Life Response"@en ;\n        dcterms:title "Remaining Useful Life Distance" ;\n        cx-fx:valuePath "0.remainingUsefulLife.remainingRunningDistance";\n        cx-fx:dataType xsd:int.\n')),(0,i.kt)("h3",{id:"quick-setup-guide-for-registering-a-graph-in-the-edc"},"Quick Setup Guide for Registering A Graph in the EDC"),(0,i.kt)("p",null,"The next steps require that you have already deployed the ",(0,i.kt)("a",{parentName:"p",href:"agent_edc"},"Agent-Enabled EDC"),"."),(0,i.kt)("p",null,"We demonstrate the steps by interacting with the EDC Control Plane Management API"),(0,i.kt)("h4",{id:"register-a-graph-policy"},"Register A Graph Policy"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},'curl --location --globoff \'{{controlPlaneName}}/management/v2/policydefinitions\' \\\n--header \'X-Api-Key: {{EDC_API_KEY}}\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "@context": {\n        "odrl": "http://www.w3.org/ns/odrl/2/",\n        "cx-common": "https://w3id.org/catenax/ontology/common#"\n    },\n    "@type": "PolicyDefinitionRequestDto",\n    "@id": "Policy?me=GraphPolicy",\n    "policy": {\n        "@type": "Policy",\n        "odrl:permission" : [{\n            "odrl:action" : "USE",\n            "odrl:constraint" : {\n                "@type": "LogicalConstraint",\n                "odrl:or" : [{\n                    "@type" : "Constraint",\n                    "odrl:leftOperand" : "BusinessPartnerNumber",\n                    "odrl:operator" : {\n                        "@id": "odrl:eq"\n                    },\n                    "odrl:rightOperand" : "{{PARTNERBPNL}}"\n                },\n                {\n                    "@type" : "Constraint",\n                    "odrl:leftOperand" : "BusinessPartnerNumber",\n                    "odrl:operator" : {\n                        "@id": "odrl:eq"\n                    },\n                    "odrl:rightOperand" : "{{MYBPNL}}"\n                }]\n            }\n        }]\n    }\n}\n\'\n')),(0,i.kt)("h4",{id:"register-a-graph-contract"},"Register A Graph Contract"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},'curl --location --globoff \'{{controlPlaneName}}/management/v2/policydefinitions\' \\\n--header \'X-Api-Key: {{EDC_API_KEY}}\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "@context": {\n         "cx-common": "https://w3id.org/catenax/ontology/common#"\n    },\n    "@id": "Contract?me=GraphContract",\n    "@type": "ContractDefinition",\n    "accessPolicyId": "Policy?me=GraphPolicy",\n    "contractPolicyId": "Policy?me=GraphPolicy",\n    "assetsSelector" : {\n        "@type" : "CriterionDto",\n        "operandLeft": "https://w3id.org/catenax/ontology/common#publishedUnderContract",\n        "operator": "=",\n        "operandRight": "Contract?me=Graph"\n    }\n}\n\'\n')),(0,i.kt)("h4",{id:"register-a-graph-asset"},"Register a Graph Asset"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-console"},'curl --location --globoff \'{{controlPlaneName}}/management/v2/policydefinitions\' \\\n--header \'X-Api-Key: {{EDC_API_KEY}}\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "@context": {\n        "rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",\n        "rdfs": "http://www.w3.org/2000/01/rdf-schema#",\n        "cx-common": "https://w3id.org/catenax/ontology/common#",\n        "xsd": "http://www.w3.org/2001/XMLSchema#",\n        "sh": "http://www.w3.org/ns/shacl#"\n    },\n    "asset": {\n        "@type": "Asset",\n        "@id": "GraphAsset?me=Sample", \n        "properties": {\n            "name": "Sample Asset.",\n            "description": "A sample graph asset/offering over a binding agent.",\n            "version": "23.12",\n            "contenttype": "application/json, application/xml",\n            "cx-common:publishedUnderContract": "Contract?me=Graph",\n            "rdf:type": "cx-common:GraphAsset",\n            "rdfs:isDefinedBy": "<https://w3id.org/catenax/ontology/common>",\n            "cx-common:implementsProtocol": "cx-common:Protocol?w3c:http:SPARQL",\n            "sh:shapesGraph": "@prefix : <GraphAsset?me=Sample#> .\\n",\n            "cx-common:isFederated": "true^^xsd:boolean"\n        }\n    },\n    "dataAddress": {\n        "id": "GraphAsset?me=Sample", \n        "@type": "DataAddress",\n        "baseUrl": "http://{{binding-agent-internal}}",\n        "type": "cx-common:Protocol?w3c:http:SPARQL",\n        "proxyPath": "false",\n        "proxyMethod": "true",\n        "proxyQueryParams": "true",\n        "proxyBody": "true",\n        "authKey": "{{binding-agent-key}}",\n        "authCode": "{{binding-agent-token}}",\n        "cx-common:allowServicePattern": "((https)|(edcs?))://.*",\n        "cx-common:denyServicePattern": "https://ifconfig\\\\.me.*"        \n    }\n}\n\'\n')),(0,i.kt)("p",null,"For more information see"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Our ",(0,i.kt)("a",{parentName:"li",href:"../adoption-view/intro"},"Adoption")," guidelines"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"../development-view/architecture"},"Implementation")," documentation"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"deployment"},"Deployment")," overview"),(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("a",{parentName:"li",href:"policy"},"Data Sovereignity & Graph Policy")," discussion")),(0,i.kt)("h2",{id:""}),(0,i.kt)("sub",null,(0,i.kt)("sup",null,"(C) 2021,2023 Contributors to the Eclipse Foundation. SPDX-License-Identifier: CC-BY-4.0")))}l.isMDXComponent=!0}}]);