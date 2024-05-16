---
id: requirements
title: Requirements
description: Behaviour Twin KIT
---

<div style={{display:'block'}}>
  <div style={{display:'inline-block', verticalAlign:'top'}}>

![Behaviour Twin KIT banner](@site/static/img/kit-icons/behaviour-twin-kit-icon-mini.png)

  </div>
  <div style={{display:'inline-block', fontSize:17, color:'rgb(255,166,1)', marginLeft:7, verticalAlign:'top', paddingTop:6}}>
Behaviour Twin KIT
  </div>
</div>

## TECHNOLOGIES

In order to understand and develop use cases with the Behaviour Twin KIT, you
must have at least a basic understanding of the following topics:

- Catena-X Dataspace Architecture
- SPARQL 1.1 Query Language, see [SPARQL on w3.org ![(external link)](../assets/external-link.svg)](https://www.w3.org/TR/sparql11-query/)
- Resource Description Framework (RDF), see [RDF on w3.org ![(external link)](../assets/external-link.svg)](https://www.w3.org/RDF/)
- RDF 1.1 Turtle, see [Turtle on w3.org ![(external link)](../assets/external-link.svg)](https://www.w3.org/TR/turtle/)
- Web Ontology Language (OWL), see [OWL on w3.org ![(external link)](../assets/external-link.svg)](https://www.w3.org/OWL/)
- Shapes Constraint Language (SHACL), see [SHACL on w3.org ![(external link)](../assets/external-link.svg)](https://www.w3.org/TR/shacl/)

## YOUR INTERFACE

You always need access to your **running connector (EDC) with knowledge agent components** and
the (extensible) **ontologies of Catena-X**. In most cases, you can use them as they are.  

Your interface to the use case depends on your role(s):  
If you are only a consumer, you are fine with the previous mentioned components.  
If you are a data provider or delegator, you may have your data organized in
relational databases. In this case, you need to have a running **provisioning agent**
with **configured data bindings** (linking your data to the knowledge graph).  
If you are a service provider, you need to have a running **remoting agent** with
**configured service bindings** (linking your service to the knowledge graph).

## MANDATORY COMPONENTS

Depending on your role, you need a combination of the following components:

- ontologies (semantic models)
- usage data
- calculation services
- EDC + knowledge agent
- delegation data
- matchmaking agent: Mapping ontology to knowledge graph, integrated into KA-dataplane
- binding agents:
  - provisioning agent: provide data
  - remoting agent: bind service to graph

| | service provider | delegator | data provider | consumer | skill provider |
| --------------------- | :---: | :---: | :---: | :---: | :---: |
| EDC + knowledge agent <br/>+ matchmaking agent | x | x | x | x | x |
| ontologies                                | x | x | x | x | x |
| skill-access                              |   |   |   | x | x |
| delegation data                           |   | x | x | x |   |
| usage data                                |   |   | x |   |   |
| provisioning agent                        |   |   | x |   |   |
| calculation service                       | x |   |   |   |   |
| remoting agent                            | x |   |   |   |   |
