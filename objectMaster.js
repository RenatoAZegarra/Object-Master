const pokemon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);

// an array of pokémon objects where the id is evenly divisible by 3
const pokesBy3 = pokemon.filter((eachPoke) => {
  return eachPoke.id % 3 === 0;
})

console.log(pokesBy3)
console.log("----------------------------------------------------------------")

// an array of pokémon objects that are "fire" type
const firePokes = pokemon.filter((eachPoke) =>{
  return eachPoke.types[0] === "fire"
})

console.log(firePokes)
console.log("----------------------------------------------------------------")

// an array of pokémon objects that have more than one type
const moreTypes = pokemon.filter((eachPoke) =>{
  return eachPoke.types.length > 1;
})

console.log(moreTypes)
console.log("----------------------------------------------------------------")

// an array with just the names of the pokémon
const nameOfPokes = pokemon.map((eachPoke) =>{
  return eachPoke.name
})

console.log(nameOfPokes)
console.log("----------------------------------------------------------------")

// an array with just the names of pokémon with an id greater than 99
const nameOfPokeGreaterThan99 = pokemon.filter((eachPoke) =>{
  return eachPoke.id > 99
}).map((eachOneThing) => {
  return eachOneThing.name
})

console.log(nameOfPokeGreaterThan99)
console.log("----------------------------------------------------------------")

// an array with just the names of the pokémon whose only type is poison
const nameOfPokeWithPoison = pokemon.filter((eachPoke) =>{
  return eachPoke.types.length === 1 && eachPoke.types[0] === 'poison'
}).map((eachOneThing) => {
  return eachOneThing.name
})

console.log(nameOfPokeWithPoison)
console.log("----------------------------------------------------------------")

// an array containing just the first type of all the pokémon whose second type is "flying"
const typesOfPokeWithFlying = pokemon.filter( (eachPoke) => {
    return eachPoke.types[1] === "flying"
}).map( (eachOneThing) => {
    return eachOneThing.types[0]
})

console.log(typesOfPokeWithFlying)
console.log("----------------------------------------------------------------")

// a count of the number of pokémon that are "normal" type

const typesOfPokeWithNormal = pokemon.filter( (eachPoke) => {
  return eachPoke.types[0] === "normal"
}).map( (eachOneThing) => {
  return eachOneThing.types[0]
})

const countOfTypesOfPokeWithNormal = typesOfPokeWithNormal.length;

console.log(countOfTypesOfPokeWithNormal)
console.log("----------------------------------------------------------------")