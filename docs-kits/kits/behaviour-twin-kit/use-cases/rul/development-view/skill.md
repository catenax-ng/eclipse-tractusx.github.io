---
id: skill
title: Skill
description: Behaviour Twin KIT
---

<div style={{display:'block'}}>
  <div style={{display:'inline-block', verticalAlign:'top'}}>

![Behaviour Twin KIT -- Remaining useful Life banner](@site/static/img/kit-icons/behaviour-twin-rul-kit-icon-mini.svg)

  </div>
  <div style={{display:'inline-block', fontSize:17, color:'rgb(255,166,1)', marginLeft:7, verticalAlign:'top', paddingTop:6}}>
Behaviour Twin KIT -- Remaining useful Life
  </div>
</div>

<br/><br/><br/><br/>

<big><big><big>FROM FORMER RUL KIT, MUST BE REVISED</big></big></big>

<br/><br/><br/><br/>

## SKILL DEFINITION
Applies to: *RuL Skill provider*

For the RuL calculation of a vehicle part, we have three different "roles" involved:

- Consumer: which requests the RuL calculation value by VIN.
- OEM: which has the vehicle Load Spectrum data and forwards them by calling the supplier of that specific part.
- Supplier: which provides the service for the RuL calculation for his parts.

The Skill Provider, being it the Consumer, OEM or a third party or a CAB body, has to implement the Skill and register it over the Agent Plane API.
A reference (sample) RuL Agent-Skill for a Gearbox is implemented in the following SPARQL query.
The query is a federated query, which means that the query is split into two parts, one for the OEM and one for the Supplier.
In the first part, the OEM-owned reliability asset is queried, to collect the load spectrum data of the vehicle with the given VIN's and in the second part, the gathered data is fed back into the respective supplier connector/agent to perform a RuL calculation.

For more information regarding the RuL Skill and its registration and invocation options see [Agents KIT](https://bit.ly/tractusx-agents).

```sparql
################################################################
# Copyright (c) 2022 - 2024 T-Systems International GmbH
# Copyright (c) 2022 - 2024 Bayerische Motoren Werke Aktiengesellschaft (BMW AG)
# Copyright (c) 2022 - 2024 ZF Friedrichshafen AG
# Copyright (c) 2022 - 2024 Allgemeine Deutsche Automobil-Club (ADAC) e.V
# Copyright (c) 2022 - 2024 Mercedes-Benz AG
# Copyright (c) 2022 - 2024 Contributors to the Catena-X Association
#
# See the NOTICE file(s) distributed with this work for additional
# information regarding copyright ownership.
#
# This program and the accompanying materials are made available under the
# terms of the Apache License, Version 2.0 which is available at
# https://www.apache.org/licenses/LICENSE-2.0.
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
# WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
# License for the specific language governing permissions and limitations
# under the License.
#
# SPDX-License-Identifier: Apache-2.0
################################################################

PREFIX cx-common:       <https://w3id.org/catenax/ontology/common#>
PREFIX cx-core:         <https://w3id.org/catenax/ontology/core#>
PREFIX cx-vehicle:      <https://w3id.org/catenax/ontology/vehicle#>
PREFIX cx-reliability:  <https://w3id.org/catenax/ontology/reliability#>
PREFIX cx-behaviour:    <https://w3id.org/catenax/ontology/behaviour#>
PREFIX cx-taxo: <https://w3id.org/catenax/taxonomy#>
PREFIX owl:    <http://www.w3.org/2002/07/owl#>
PREFIX rdf:             <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs:            <http://www.w3.org/2000/01/rdf-schema#>
PREFIX xsd:             <http://www.w3.org/2001/XMLSchema#>
PREFIX json:            <https://json-schema.org/draft/2020-12/schema#>
PREFIX bpnl:		    <bpn:legal:>
PREFIX oem:             <GraphAsset?oem=>
PREFIX supplier:        <GraphAsset?supplier=>

################################################################
# Sample for a Federated (Consumer-Deployed) SparQL Skill which
#  - Jumps into an OEM-owned reliability asset given a set of candidate VANs
#  - Feeds the gathered data back into the respective supplier connector/agent
#.   to perform a health indication
# Author: cgjung
# (c) 2023 Catena-X assocation
################################################################

SELECT DISTINCT ?vehicle ?van ?aggregate ?assembly ?supplier ?distanceKm ?timeHours WHERE {

  VALUES (?van ?aggregate) {
      ("@van"^^xsd:string "Differential Gear"^^xsd:string)
  }

  VALUES (?ls_type) {
      (cx-taxo:GearOil) (cx-taxo:GearSet)
  }

  bpnl:{{oemBPNL}} cx-common:hasConnector ?oemEDC.
  ?oemEDC cx-common:offers [ rdfs:isDefinedBy <https://w3id.org/catenax/ontology/reliability>; cx-common:id ?reliabilityAssetId].

  SERVICE ?oemEDC {
      GRAPH ?reliabilityAssetId {
        ?vehicle rdf:type cx-vehicle:Vehicle;
            cx-vehicle:vehicleIdentificationNumber ?van.

        ?assembly rdf:type cx-vehicle:Part;
            cx-vehicle:name ?aggregate;
            cx-vehicle:isPartOf ?vehicle;
            cx-vehicle:supplier ?supplier.

        ?teleAnalysis rdf:type cx-reliability:Analysis;
            cx-reliability:analysedObject ?assembly;
            cx-reliability:operatingHoursOfVehicle ?operatingTime;
            cx-reliability:mileageOfVehicle ?mileage;
            cx-core:startDateTime ?recordDate;
            cx-reliability:result [
                cx-core:id ?ls_type;
                cx-core:name ?ls_name;
                cx-reliability:countingValue ?ls_value;
                cx-reliability:countingUnit ?ls_unit;
                cx-reliability:countingMethod ?ls_method;
                cx-reliability:channels ?ls_channels;
                cx-reliability:classes ?ls_classes;
                cx-reliability:values ?ls_values
            ].
    } # OEM#GRAPH

    ?supplierSite owl:sameAs ?supplier.
    ?supplierSite cx-common:hasConnector ?supplierEDC.
    ?supplierEDC cx-common:offers [ rdfs:isDefinedBy <https://w3id.org/catenax/ontology/behaviour>; cx-common:id ?prognosisAssetId].

    SERVICE ?supplierEDC {
        GRAPH ?prognosisAssetId {
            SELECT ?distanceKm ?timeHours WHERE {
                ?invocation a cx-behaviour:RemainingUsefulLife;
                        cx-behaviour:sender bpnl:{{oemBPNL}};
                        cx-behaviour:senderConnector ?oemEDC;
                        cx-behaviour:recipient ?supplier;
                        cx-behaviour:recipientConnector ?supplierEDC;
                        cx-behaviour:targetDate ?recordDate;
                        cx-behaviour:timeStamp ?recordDate;
                        cx-behaviour:component ?assembly;
                        cx-behaviour:observationType ?ls_type;
                        cx-behaviour:statusDate ?recordDate;
                        cx-behaviour:statusOperatingHours ?operatingTime;
                        cx-behaviour:statusMileage ?mileage;
                        cx-behaviour:countingValue ?ls_value;
                        cx-behaviour:countingUnit ?ls_unit;
                        cx-behaviour:countingMethod ?ls_method;
                        cx-behaviour:headerChannels ?ls_channels;
                        cx-behaviour:bodyClasses ?ls_classes;
                        cx-behaviour:bodyCountsList ?ls_values;
                        cx-behaviour:remainingOperatingHours ?timeHours;
                        cx-behaviour:remainingRunningDistance ?distanceKm.
            }
        } # SUPPLIER#GRAPH
    } # SUPPLIER#CATALOG

  } # OEM#CATALOG

} # SELECT
```

### SKILL REGISTRATION
After the implementation of the RuL Skill, the Skill has to be registered over the Agent Plane API. The registration is done by posting the parametrized SPARQL query as a string, as defined above, and the Skill name.

```curl
curl --location '{{consumerAgentPlane}}/api/agent/skill?asset=SkillAsset?consumer=RemainingUsefulLife&distributionMode=CONSUMER&isFederated=false' \
--header 'Content-Type: application/sparql-query' \
--data-raw '
{{SPARQL_AGENT_SKILL_QUERY}}
'
```

### SKILL INVOCATION
The registered skill is available over Agent Plane API by the SkillAsset name (e.g.RemainingUsefulLife) and can be called also for a list of input variables:

```curl
curl --location '{{consumerAgentPlane}}/api/agent?asset=SkillAsset?consumer=RemainingUsefulLife' \
--header 'Content-Type: application/sparql-results+json' \
--data '{
    "head": { "vars": [ "van" ]},
    "results": { "bindings": [
            {   "van": { "type": "literal", "value": "FNLQNRVCOFLHAQ"}},
            {   "van": { "type": "literal", "value": "FGPTXINYZAVJYK"}}
        ]
    }
}'
```

The RuL results for the given VAN's are provided as bindings for the requested variables in the Skill itself and looks like:

```json
{
  "head": {
    "vars": [
      "vehicle",
      "van",
      "aggregate",
      "assembly",
      "supplier",
      "distanceKm",
      "timeHours"
    ]
  },
  "results": {
    "bindings": [
      {
        "vehicle": {
          "type": "uri",
          "value": "urn:uuid:8d6e2e3f-6798-4e1d-8eae-eb4318a7d487"
        },
        "van": {
          "type": "literal",
          "value": "RGZCDKEJHDSNCB"
        },
        "aggregate": {
          "type": "literal",
          "value": "Differential Gear"
        },
        "assembly": {
          "type": "uri",
          "value": "urn:uuid:b6309b8a-20c0-4e7d-b782-a7c303bb7da4"
        },
        "supplier": {
          "type": "uri",
          "value": "bpn:legal:BPNL00000003B2OM"
        },
        "distanceKm": {
          "type": "literal",
          "datatype": "http://www.w3.org/2001/XMLSchema#int",
          "value": "159633"
        },
        "timeHours": {
          "type": "literal",
          "datatype": "http://www.w3.org/2001/XMLSchema#float",
          "value": "3127.4"
        }
      },
      {
        "vehicle": {
          "type": "uri",
          "value": "urn:uuid:79d19614-b699-4716-b232-ef250e1c1772"
        },
        "van": {
          "type": "literal",
          "value": "FNLQNRVCOFLHAQ"
        },
        "aggregate": {
          "type": "literal",
          "value": "Differential Gear"
        },
        "assembly": {
          "type": "uri",
          "value": "urn:uuid:4773625a-5e56-4879-abed-475be29bd664"
        },
        "supplier": {
          "type": "uri",
          "value": "bpn:legal:BPNL00000003B2OM"
        },
        "distanceKm": {
          "type": "literal",
          "datatype": "http://www.w3.org/2001/XMLSchema#int",
          "value": "180627"
        },
        "timeHours": {
          "type": "literal",
          "datatype": "http://www.w3.org/2001/XMLSchema#float",
          "value": "2058.1"
        }
      }
    ]
  }
}
```

If the given VAN is not found on OEM side, then we get an empty binding result:

```json
{
    "head": {
        "vars": [
            "vehicle",
            "van",
            "aggregate",
            "assembly",
            "supplier",
            "distanceKm",
            "timeHours"
        ]
    },
    "results": {
        "bindings": []
    }
}
```
