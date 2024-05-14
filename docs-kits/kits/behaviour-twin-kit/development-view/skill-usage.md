---
id: skill-usage
title: Skill-Usage
description: Behaviour Twin KIT
sidebar_position: 37
---

<!-- DEACTIVATED FOR DOCUSAURUS FROM HERE -->

<span style="font-size:14px;color:rgb(222,140,0);">[Behaviour Twin KIT](../overview.md) > [Development View](./overview.md) > Skill-Usage</span>

# Skill-Usage

<!-- DEACTIVATED FOR DOCUSAURUS TO HERE -->

<!-- VARIANT FOR DOCUSAURUS FROM HERE

<div style={{display:'block'}}>
  <div style={{display:'inline-block', verticalAlign:'top'}}>

![Behaviour Twin KIT banner](../../../../static/img/kit-icons/behaviour-twin-kit-icon-mini.png)

  </div>
  <div style={{display:'inline-block', fontSize:17, color:'rgb(255,166,1)', marginLeft:7, verticalAlign:'top', paddingTop:6}}>
Behaviour Twin KIT
  </div>
</div>

VARIANT FOR DOCUSAURUS TO HERE -->

<!-- DEACTIVATED FOR DOCUSAURUS FROM HERE -->

<div style="display:block;">
  <div style="display:inline-block;vertical-align:top;">

![Behaviour Twin KIT banner](../../../../static/img/kit-icons/behaviour-twin-kit-icon-mini.png)

  </div>
  <div style="display:inline-block;font-size:15px;color:rgb(255,166,1);margin-left:7px;vertical-align:top;padding-top:8px;">
Behaviour Twin KIT
  </div>
</div>

<!-- DEACTIVATED FOR DOCUSAURUS TO HERE -->

<!-- END OF HEADER -->

The registered skill is available over Agent Plane API and can be called also for a list of input variables:

```curl
curl --location 'agentPlaneEdcUrl/api/agent?asset=SkillAsset%3Fconsumer%3DRemainingUsefulLife' \
--header 'Content-Type: application/sparql-results+json' \
--data '{
    "head": { "vars": [ "van" ]},
    "results": { "bindings": [
            {   "van": { "type": "literal", "value": "FNLQNRVCOFLHAQ"}}
        ]
    }
}'
```

The RuL results for the given VAN's is provided are provided as bindings for the requested variables in the Skill itself and looks like:

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
               "value": "urn:uuid:4cf8b668-0f27-4f39-b986-36423d81d222"
            },
            "van": {
               "type": "literal",
               "value": "FNLQNRVCOFLHAQ"
            },
            "aggregate": {
               "type": "literal",
               "value": "Some vehicle name"
            },
            "assembly": {
               "type": "",
               "value": "urn:uuid:4cf8b668-0f27-4f39-b986-36423d81d111"
            },
            "supplier": {
               "type": "uri",
               "value": "bpn:legal:BPNL0000SUPPLIER"
            },
            "distanceKm": {
               "type": "",
               "datatype": "http://w3.org/2001/XMLSchema#int",
               "value": "123000"
            },
            "timeHours": {
               "type": "",
               "datatype": "http://w3.org/2001/XMLSchema#float",
               "value": "12345.0"
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

<!-- START OF FOOTER -->

<!-- DEACTIVATED FOR DOCUSAURUS FROM HERE -->

| Previous | Next |
| -------- | ---- |
| [Assets](./assets.md) | [Test](./test.md) |

<!-- DEACTIVATED FOR DOCUSAURUS TO HERE -->
