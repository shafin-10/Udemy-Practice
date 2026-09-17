
let car = {
  wheels : 4, 
  doors : 4
};

let toyota = {
  brand : "toyota",
  origin : "japan"
}

Object.setPrototypeOf(toyota, car);

console.log({...toyota,...Object.getPrototypeOf(toyota)});


