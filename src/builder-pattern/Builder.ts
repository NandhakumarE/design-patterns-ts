import House from "./Product";

export interface HouseBuilderInterface {
  setWindows: (windows: number) => this;
  setDoors: (doors: number) => this;
  setRooms: (rooms: number) => this;
  setGarage: (hasGarage: boolean) => this;
  setSwimPool: (hasSwimPool: boolean) => this;
  setStatues: (hasStatues: boolean) => this;
  setGardenArea: (hasGardenArea: boolean) => this;
  buildHouse: () => House;
}

class HouseBuilder implements HouseBuilderInterface {
  private house!: House;

  constructor() {
    this.house = new House();
  }

  public setWindows(windows: number): this {
    console.log(windows);
    this.house.windows = windows;
    return this;
  }
  public setDoors(doors: number): this {
    this.house.doors = doors;
    return this;
  }
  public setRooms(rooms: number): this {
    this.house.rooms = rooms;
    return this;
  }
  public setGarage(hasGarage: boolean): this {
    this.house.hasGarage = hasGarage;
    return this;
  }
  public setSwimPool(hasSwimPool: boolean): this {
    this.house.hasSwimPool = hasSwimPool;
    return this;
  }
  public setStatues(hasStatues: boolean): this {
    this.house.hasStatues = hasStatues;
    return this;
  }
  public setGardenArea(hasGardenArea: boolean): this {
    this.house.hasGardenArea = hasGardenArea;
    return this;
  }
  public buildHouse(): House {
    return this.house;
  }
}

export default HouseBuilder;
