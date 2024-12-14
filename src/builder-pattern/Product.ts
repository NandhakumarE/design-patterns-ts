class House {
  windows!: number;
  doors!: number;
  rooms!: number;
  hasGarage?: boolean;
  hasSwimPool?: boolean;
  hasStatues?: boolean;
  hasGardenArea?: boolean;

  showDetails() {
    console.log(`
      House Details:
      Windows: ${this.windows}
      Doors: ${this.doors}
      Rooms: ${this.rooms}
      Garage: ${this.hasGarage ? "Yes" : "No"}
      Swimming Pool: ${this.hasSwimPool ? "Yes" : "No"}
      Statues: ${this.hasStatues ? "Yes" : "No"}
      Garden Area: ${this.hasGardenArea ? "Yes" : "No"}
    `);
  }
}

export default House;
