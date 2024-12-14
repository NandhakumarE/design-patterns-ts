import { HouseBuilderInterface } from "./Builder";
import House from "./Product";

class HouseDirector {
  private builder: HouseBuilderInterface;

  constructor(builder: HouseBuilderInterface) {
    this.builder = builder;
  }

  constructLuxuryHouse(): House {
    return this.builder
      .setWindows(10)
      .setDoors(5)
      .setRooms(7)
      .setSwimPool(true)
      .setStatues(true)
      .setGardenArea(true)
      .setGarage(true)
      .buildHouse();
  }
  constructSimpleHouse(): House {
    return this.builder
      .setWindows(4)
      .setDoors(2)
      .setRooms(3)
      .setGarage(false)
      .setSwimPool(false)
      .setStatues(false)
      .setGardenArea(false)
      .buildHouse();
  }
}

export default HouseDirector;
