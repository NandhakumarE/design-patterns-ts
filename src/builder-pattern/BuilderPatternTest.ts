import HouseBuilder from "./Builder";
import HouseDirector from "./Director";

const builder = new HouseBuilder();
const director = new HouseDirector(builder);

const luxuryHouse = director.constructLuxuryHouse();
console.log(JSON.stringify(luxuryHouse));
// {"windows":10,"doors":5,"rooms":7,
// "hasSwimPool":true,"hasStatues":true,
// "hasGardenArea":true,"hasGarage":true}

const simpleHouse = director.constructSimpleHouse();
console.log(JSON.stringify(simpleHouse));
// {"windows":4,"doors":2,"rooms":3,
// "hasSwimPool":false,"hasStatues":false,
// "hasGardenArea":false,"hasGarage":false}
