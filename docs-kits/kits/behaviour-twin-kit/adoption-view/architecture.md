---
id: architecture
title: Architecture
description: Behaviour Twin KIT
sidebar_position: 5
---

<div style={{display:'block'}}>
  <div style={{display:'inline-block', verticalAlign:'top'}}>

![Behaviour Twin KIT banner](../../../../static/img/kit-icons/behaviour-twin-kit-icon-mini.png)

  </div>
  <div style={{display:'inline-block', fontSize:17, color:'rgb(255,166,1)', marginLeft:7, verticalAlign:'top', paddingTop:6}}>
Behaviour Twin KIT
  </div>
</div>

## BASIC ARCHITECTURE

### OVERVIEW

A use case consists of data and calculation services. In addition, a logic is required, that defines how data and services must interact to produce the desired result. This logic is called "skill". It must be invoked directly or indirectly by the consumer.

![logic](assets/logic.drawio.svg)

Data and services are federated over the dataspace:

![dataspace](assets/dataspace.drawio.svg)

A use case may consist of multiple data source and calculation service:

![dataspace-complex](assets/dataspace-complex.drawio.svg)

### ROLES

Each participant in a Behaviour Twin use cases applies to one or more of the following roles:

- **consumer** (result requester)
- **skill provider** (provider of the use case logic)
- **data provider** (provider of usage data, likely an OEM)
- **delegator** (delegates data to calculation services, likely a supplier of a component that
  is assembled of subcomponents which are providing calculation services)
- **calculation service provider** (likely a supplier of a part or component)

## BUSINESS PROCESS

A request is initiated by the consumer. A skill is utilized to define what to to. The skill can be either sent directly with the request or registered at an connector (EDC) and referenced within the request.

The EDC connector has registered a Knowledge Agent plane (KA), which matches and delegats sub-graphs as well as sub-skills and provides data and service bindings.

![business-process](assets/business-process.drawio.svg)

Info: component provider is also usage data provider

consumer invokes skill (at it's EDC)

  -> skill goes to the component+data provider

  -> skill resolves component instance for given parameters (e.g. VIN, serial number, ...)

  -> skill resolves appropriate service (and it's provider) with desired result type for component

  -> skill fetches required input data

  -> skill invokes service with fetched data

  -> skill transfers result to consumer
  
  -> result is transfered back to consumer.

federated catalog / ontology

{TODO}{sequence diagram, ...}

## DETAILED ARCHITECTURE

### BUILDING BLOCK VIEW

{TODO}

### COMPONENTS

#### BEHAVIOUR TWIN COMPONENTS

|Subsystem|Description|
|---------|-----------|
|Data Consuming App| This component is the app that is hosted at the Consumer and provides the end user interface. The end user can enter a vehicle identifier number (VIN) and gets back a calculated RuL value. <BR/> The returned value from the calculation services is SAMM specified. The app can provide another representation.|
|Loading Data | A data source at the Data Provider that provides the loading data and other vehicle data that are needed for the RuL calculation. <BR/> It can be accessed by the knowledge agent via data bindings.|
|RuL Service| A RuL calculation service at the Service Provider. It accepts input data from the Data Provider, calculates the RuL value and returns it.|

#### KNOWLEDGE AGENT COMPONENTS

|Subsystem|Description|
|---------|-----------|
|Matchmaking Agent|This component supports SparQL to traverse the federated data space as a large data structure. It interacts with the EDC. <UL><LI>The provider's Matchmaking Agent will be activated by its EDC. Therefore, the EDC must offer a Graph Asset (variant of ordinary data assets in the Catena-X EDC standard).</LI><LI> The consumer's Matchmaking Agent interacts with its EDC to negotiate and perform the transfer of Sub-Skills to other dataspace participants.</LI></UL> The Matchmaking Agents are matching the (sub)graphs and negotiate appropriated graph assets with the partner EDCs.|
|Binding Agent| The Binding Agent is a restricted version of the Matchmaking Agent (subset of OWL/SparQL, e.g., without federation) which is just focused on translating Sub-Skills of a particular business domain (Bill-Of-Material, Chemical Materials, Production Sites, etc.)  into proper SQL- or REST based backend system calls. <BR/> Implementation details: For data bindings, OnTop is used. For service bindings, RDF4J is used.|
|Ontology|The ontology is a formal representation of knowledge that captures concepts, relationships, and properties. It allows a shared understanding and reasoning about the respective domain. <BR/> It must be hosted in a way that all participants can access it. Currently, the ontology is hosted at GitHub.|
|Skill/Sub-Skill| The Skill describes, what to do (which data have to be connected, transferred and so on).|

#### CATENA-X CORE SERVICES (EXCEPT KNOWLEDGE AGENT COMPONENTS)

|Subsystem|Description|
|---------|-----------|
|Eclipse Dataspace Components (EDC)|The Connector of the Eclipse Dataspace Components provides a framework for sovereign, inter-organizational data exchange. It implements the International Data Spaces standard (IDS) as well as relevant protocols associated with GAIA-X. The connector is designed in an extensible way in order to support alternative protocols and integrate in various ecosystems.|

A more detailed a more detailed view of how the Knowledge Agent works is given in the section [Knowledge Agent](./knowledge-agent) (which comes next to this section).

## USE CASE TYPES

In general view, use cases can be categorized dependent on specific criteria:

### GENERAL USE CASE TYPES

- Data proivder is also consumer and wants result (must implement logic),  starts logic.
- External consumer wants result (must implement logic), first address is data provider.
- Third party implements logic and offers it to consumer.

#### ORIGIN OF QUERY

- Usage data provider (like OEMs) query a calculation services of IP owners (like suppliers) along the supplier chain.
- Service providers (like automobile clubs) gather data or insights along the supplier chain in behalf of their customers.

#### ORIGIN OF DATA-PROCESSING LOGIC

- The querying party knows how to process data, e.g. how to accumulate acquired data.
- The data processing party knows how to process data, e.g. which simulation model to chose.
- A third party offers logic for processing data.

{TODO}{images/roles}
