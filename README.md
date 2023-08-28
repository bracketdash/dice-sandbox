# Dice Sandbox

For playing One Deck Dungeon without physical dice.

```mermaid
graph TD;

  subgraph Recycling Plant
    intakes[Waste, Data, Power]
    outputs[Fuel, Soil, Materials, Water, Data]
  end

  subgraph Manufacturers
    intakes[Materials, Data, Power, Water]
    outputs[Products, Data, Sewer, Waste]
  end

  subgraph Air Treatment Plants
    intakes[Air, Data, Power]
    outputs[Air, Waste, Sewer, Data]
  end

  subgraph Water Treatment Plants
    intakes[Sewer, Data, Power]
    outputs[Waste, Water, Data]
  end

  subgraph Power Plants
    intakes[Fuel, Data, Water]
    outputs[Power, Data, Sewer]
  end

  subgraph Data Hubs
    intakes[Data, Power, Water]
    outputs[Data, Sewer]
  end

  subgraph Farms
    intakes[CO2, Soil, Power, Data, Water]
    outputs[O2, Food, Data, Sewer]
  end

  subgraph Residences
    intakes[O2, Food, Data, Power, Products]
    outputs[Waste, Sewer, CO2]
  end

  intakes --> Recycling Plant
  intakes --> Manufacturers
  intakes --> Air Treatment Plants
  intakes --> Water Treatment Plants
  intakes --> Power Plants
  intakes --> Data Hubs
  intakes --> Farms
  intakes --> Residences

  Recycling Plant --> outputs
  Manufacturers --> outputs
  Air Treatment Plants --> outputs
  Water Treatment Plants --> outputs
  Power Plants --> outputs
  Data Hubs --> outputs
  Farms --> outputs
  Residences --> outputs
```