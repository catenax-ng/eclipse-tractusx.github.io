---
id: architecture
title: Architecture
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

## BASIC ARCHITECTURE

### OVERVIEW

An external consumer wants to know the remaining useful life of his vehicle. He uses a RuL Consuming App (e.g. with a web interface) for this. At the data provider (likely an OEM), usage data (e.g. of a vehicle) is collected continuously with the consent and on behalf of the consumer. The usage history and all dependent components that can provide RuL values are known on the data provider's side. The data provider itself doesn't even have to know which components can provide RuL services/values. Its registed suppliers provide that information in their catalog which are synchronized periodically. The data provider only must bind the usage data to the knowledge graph.

This approach is not limited only to OEMs and vehicles. Every system that provides usage data can utilize this approach, like tools/machines, production lines, building facilities, vending machines, computers, roads and so on.

### ROLES

Each participant in the Remaining useful Life (RuL) Behaviour Twin use case applies to one or more of the following roles:

- **RuL consumer** (result requester)
- **skill provider** (OEM, provider of the use case logic)
- **data provider** (OEM, provider of usage data)
- **RuL service provider** (a component supplier, e.g. a gearbox supplier)

One of the specal cases would be that the data provider is also the RuL consumer and/or RuL service provider and/or skill provider.

## DETAILED ARCHITECTURE

### BUSINESS PROCESS

*For better readability will be on this page from now on assuming that the **data provider** is always an **OEM**.*

The first addressee of a RuL skill must be the OEM since it has access to its suppliers who can provide RuL values.

![business-process](assets/business-process.drawio.svg)

0. **0.1 Register skill asset, 0.2 sync federated catalog:** <br/> The predefined skill is registered as an asset at the data provider's EDC connector. The federated catalogs are synchronized periodically.

1. **Invoke skill asset:** <br/> The consumer invokes the skill by calling the agents API at its own EDC connector. The partner's EDC connector address must be known. To resolve this address is up to the use case. A prognosis function result type and a component or vehicle id (e.g. VIN) is set as parameter for the skill.

2. **Request skill asset:** <br/> The skill is invoked by requesting the skill asset at the data provider via EDC connectors.

3. **Resolve prognosis function assets by requested result type:** <br/> The Knowledge Agent resolves all prognosis function assets from the federated catalog that matches the desired result type.

4. **Resolve prognosis data assets by function parameter types:** <br/> The Knowledge Agent resolves all data assets by the parameter types of the previously matched prognosis function(s).

5. **Fetch data:** <br/> The data (parameter for prognosis functions) are fetched from the data provider's bound data source. They are transferred into graph representation by a provisioning agent (data binding agent).

6. **Transfer data and deploy sub-skill:** <br/> The fetched data and a sub-skill (logic for calling the calculation service) are transferred to the calculation service provider's Knowledge Agent via EDC connectors.

7. **Calls service and fetch result:** <br/> The calculation service (prognosis functions) is called. The data (parameter for the prognosis function) are translated into the format the service requires. This is automatically done by an remoting agent (service binding agent), which is statically configured by service bindings. The result of the service then is translated back into graph format by the remoting agent.

8. **Return result:** <br/> The result is transferred to the invoker of the sub-skill (here, it is the data provider) via EDC connectors.

9. **Delegate result:** <br/> The result is delegated to the consumer via EDC connectors.

To have a common understanding of how to interpret and translate elements in the graph, common ontologies and taxonomies must be used. These are also needed for the interpretation of skills and sub-skills as there is e.g. inheritance in ontologies which must be known by the Knowledge Agent to resolve relations.

### BUILDING BLOCK COMPONENTS

#### USE CASE-SPECIFIC COMPONENTS

|Subsystem|Description|
|---------|-----------|
|RuL Consuming App|This component is the app that is hosted at the *consumer* and provides the end user interface.|
|Usage Data|A data source at the *data provider* that provides usage data that are required for prognosis services. <BR/> It can be accessed by the Knowledge Agent via data bindings.|
|RuL Service|A calculation service at the *Supplier*. It accepts load spectra as parameters, and calculates the Remaining useful Life result values and returns them.|

#### KNOWLEDGE AGENT COMPONENTS AND CATENA-X CORE SERVICES

For non use case-specific components, refer to the [general Architecture section](../../../adoption-view/architecture#building-block-components) in the general adoption view.
