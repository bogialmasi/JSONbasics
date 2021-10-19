const fs = require('fs');

let data = fs.readFileSync('colors.json', (err, data) => {
    if (err) throw err;
});

console.log(`A nyers adatok: ${data}`); // concat miatt toString

let colors = JSON.parse(data); // valódi átalakítás
console.log(colors); // csinos lett a JSON, egy tömb lett objectekkel

console.log(`A JSON file ${colors.length} elemet tartalmaz`);

for (color of colors) { // basic
    console.log(`${color.name} (${color.code})`);
}

colors.forEach(color => {
    console.log(`\t${color.name}`)
});

colors.push({
    'name': 'Black',
    'code': '#000000'
});

colors.push({
    'name': 'White',
    'code': '#FFFFFF'
});
console.log(`A tömb ${colors.length} elemet tartalmaz`);

const white = colors.pop();
console.log("Az utolsó elem: ")
console.log(white);

console.log(`A tömb ${colors.length} elemet tartalmaz`);

console.log("---\nAdott elem keresése: ");
const index = colors.findIndex(color => color != null && color.name === "Ivory");
console.log(`A Ivory szín indexe: ${index}`);

console.log("---\nAdott szín keresése és kimásolása: ")
const searched = colors.find(color => color != null && color.code === "#000000");
console.log(searched);

delete colors[2];
console.log(colors);
for (color of colors) { // elemek a törölt tömbben
    if (color != null)
        console.log(`${color.name} (${color.code})`);
}

console.log("---\nÚj felépítésű tömb kinyerése:");
let i = 0;
const colorsTomb = colors.map(color => ({
    "cID": i++,
    "cName": color.name
})) // kapcsos zárójelben tömb amit JSON-höz fel lehet használni
console.log(colorsTomb);

colorsTomb.push({
    "cID": 4,
    "cName": "Purple"
});
colorsTomb.push({
    "cID": 5,
    "cName": "Blue"
});
colorsTomb.push({
    "cID": 6,
    "cName": "Beige"
});
colorsTomb.push({
    "cID": 7,
    "cName": "Brown"
});

console.log("---\nRendezés: (ellenpélda)");
const sorted0 = colorsTomb.sort((a, b) => a.cName - b.cName); // String rendezésében kivonás NINCS !!!

/*
console.log("Rendezés: 1");
const sorted1 = colorsTomb.sort((a, b) => { // bonyolult dolgok is lehetnek if-ben
    if (a.cName < b.cName) return -1; // jó sorrend
    if (a.cName > b.cName) return 1; // nem jó, cserélni kell
    return 0; // megegyezik a két elem
});
console.log(sorted1);*/

console.log("---\nRendezés: 2");
const sorted2 = colorsTomb.sort((a, b) => a.cName.localeCompare(b.cName));
console.log(sorted2);

console.log("---\nFilter: 1");
const filtered1 = colorsTomb.filter((color) => true);
console.log(filtered1);

console.log("---\nFilter: 2 - szám");
const filtered2 = colorsTomb.filter((color) => color.cID > 3);
console.log(filtered2);

console.log("---\nFilter: 2 - szöveg"); // regex
let regex = /^B\w*/g;
const filtered3 = colorsTomb.filter((color) => color != null && regex.test(color.cName));
console.log(filtered3);

/*
TÖMBMŰVELETEK:
JSON.parse --- nyersből tömb,
length,
find, findIndex,
push, pop --- delete last, 
delete many[index] --- üres hely marad !!!,
for(one of many),
many.forEach(one => method),
filter,
map !!!,
sort,
some, 
*/

/*
REGEX:
test, split, match, replace*/