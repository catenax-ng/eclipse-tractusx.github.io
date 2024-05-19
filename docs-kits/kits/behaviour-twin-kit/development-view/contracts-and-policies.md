---
id: contracts-and-policies
title: Contracts and Policies
description: Behaviour Twin KIT
---

<div style={{display:'block'}}>
  <div style={{display:'inline-block', verticalAlign:'top'}}>

![Behaviour Twin KIT banner](@site/static/img/kit-icons/behaviour-twin-kit-icon-mini.svg)

  </div>
  <div style={{display:'inline-block', fontSize:17, color:'rgb(255,166,1)', marginLeft:7, verticalAlign:'top', paddingTop:6}}>
Behaviour Twin KIT
  </div>
</div>

Applies to roles: *data provider*, *calculation service provider* and *delegator*

## OVERVIEW

*Data* and *calculation services* must be bound to the knowledge graph by *binding agents*. To make the bindings accessible to the Knowledge Agents, they must be registered as a *graph assets* at the EDC connector. Therefore, policiy and contract definitions are also needed.

## GRAPH ASSET POLICY

The graph asset policy can be used by more than one graph asset. There may be more requirements for policies within a use case.

```json
{
  "@context": [
    "http://www.w3.org/ns/odrl.jsonld", 
    {
      "edc": "https://w3id.org/edc/v0.0.1/ns/"
    },
    {
      "cx-policy": "https://w3id.org/catenax/policy/"
    }
  ],
  "@type": "PolicyDefinitionRequestDto",
  "@id": "GraphAsset?me=Policy&useCase=BehaviourTwin",
  "edc:policy": {
    "@type": "Set",
    "profile": "cx-policy:profile2405",
    "permission": [{
      "action": "use",
      "constraint": {
        "leftOperand": "cx-policy:FrameworkAgreement",
        "operator": "eq",
        "rightOperand": "behaviourtwin:1.0"
      }
    }]
  }
}
```

## GRAPH ASSET CONTRACT

The following contract referes to the previous defined policy and related graph assets:

```json
{
  "@context": {
    "cx-common": "https://w3id.org/catenax/ontology/common#"
  },
  "@id": "Contract?me=Graph",
  "@type": "ContractDefinition",
  "accessPolicyId": "Policy?me=Graph",
  "contractPolicyId": "Policy?me=Graph",
  "assetsSelector" : {
    "@type" : "CriterionDto",
    "operandLeft": "https://w3id.org/catenax/ontology/common#publishedUnderContract",
    "operator": "=",
    "operandRight": "Contract?me=Graph"
  }
}
```

For more information, have a look at the [Agents KIT](../../../../knowledge-agents/operation-view/provider).
