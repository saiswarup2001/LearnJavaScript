const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman", "Flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros); //[ 'Thor', 'Ironman', 'Spiderman', [ 'Superman', 'Flash', 'batman' ] ]
// console.log(marvel_heros[3][1]); //Flash


const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros); //[ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'batman' ]

const allNewHeros = [...marvel_heros,...dc_heros]
console.log(allNewHeros); //[ 'Thor', 'Ironman', 'Spiderman', 'Superman', 'Flash', 'batman' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


//data scraping
console.log(Array.isArray("Sai"))
console.log(Array.from("Sai"))
console.log(Array.from({name: "Sai"})) //intresting --> we have to give the key or value to determine

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));