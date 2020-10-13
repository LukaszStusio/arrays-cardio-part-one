console.log('it works?');

/* #STATIC METHODS: */
// Array of
console.log(Array.of('Wes', 'Kait'));
console.log(Array.of(...'Luke'));
console.log([...'Luke']);

// Make a function that creates a range from x to y with Array.from();
const range = Array.from({length: 10}, () => 'Luke');
console.log(range);

//
const rangeIndex = Array.from({length: 10}, function(item, index) {
    return index;
});
console.log(rangeIndex);

// underscored parameter means it does nothing - it's just a convention
function createRange(start, end){
    const rangeCustom = Array.from({length: end - start +1}, function(_item, index) {
        return index + start;
    });
    console.log(rangeCustom);
    return rangeCustom;
};

createRange(7, 27);

// Check if the  last array  you created is really an array with Array.isArray();
const isThisArray = createRange(3, 7);
console.log(Array.isArray(isThisArray));

// Take the meats object & make three arrays with Object.entries(). Object.keys(), Object.values();
const meats = {
    beyond: 10,
    beef: 5,
    pork: 7,
};

console.log(Object.entries(meats));
console.log(Object.keys(meats));
console.log(Object.values(meats));

Object.entries(meats).forEach(entry => {
    // const key = entry[0];
    // const value = entry[1];
    // or deconstructed into
    const [key, value] = entry;
    console.log(key, value)
});

// or super deconstructed into:
console.log('deconstructed version:');
Object.entries(meats).forEach(([typeOfMeat, quantity]) => console.log(typeOfMeat, quantity));

// INSTANCE METHODS:

const buns = ["egg", "wonder", "brioche"];
console.log(buns.join(' or '));

const sentence = "hot dogs, hamburgers, sausages, corn";
console.log(sentence.split(', '));

// 1 Take the last item from toppings with pop()
const toppings = ["Mushrooms", "Tomatos", "Jalapeno", "Peppers", "Olives",
"Anchioves", "Cabbage", "Onion", "Avocado", "Extra cheese"];

const spices = ["salt", "pepper", "oregano"];
console.log(toppings);
console.log(toppings.pop());
console.log(toppings);
console.log('.pop() is a mutable method so you have to push back that taken item - "Avocado" in this example:');

// 2 Adding it back with push()
const lastItem = toppings.pop();
console.log(lastItem);
toppings.push(lastItem);
console.log(toppings);

// Make it as a function?
console.log('As a function? OK, works.');
let lastItemSpicesMenu = immutablePop(toppings);
let lastItemToppingsMenu = immutablePop(spices);
function immutablePop(array) {
    const item = array.pop();
    array.push(item);
    return item;
};
console.log(immutablePop(toppings));
console.log(lastItemSpicesMenu);
console.log(lastItemToppingsMenu);

// kriss - why pop() when it can be simple?
console.log(toppings[toppings.length -1]);
console.log(toppings);

// 3 take the first item from toppings with shift()
const firstItemToppings = toppings.shift();
console.log(firstItemToppings);

// 4 add it back with unshift()
toppings.unshift(firstItemToppings);
console.log(toppings);

// do the last four but immutable (with spreads and new variables)
let newToppings = toppings.slice(0, toppings.length -1);
console.log(newToppings)

newToppings = [...newToppings, toppings[toppings.length - 1]];
console.log(newToppings)

// make a copy of toppings with array with slice()
const toppingsCopy = toppings.slice(0);
console.log('slice() copy:');
console.log(toppingsCopy);

toppings[0] = 'Toxic mushroom'
console.log('check the original toppings array if changed by toppings[0] = "Toxic mushroom"');
console.log(toppings);

// make a copy of toppings with spread
const toppingsCopySpread = [...toppings];
console.log('spread: ');
console.log(toppingsCopySpread);

// take out items 3 to 5 of your new toppings array with splice()
toppingsCopy.splice(2, 3);
console.log('take out items 3 to 5 with splice() from toppingsCopy array');
console.log('Wes made a mistake here')
console.log(toppingsCopy);

// find the index of avocado with indexOf() & lastIndexOf()
const avocadoIndex = toppings.indexOf('Avocado');
console.log(avocadoIndex);

// check if Tabasco Sauce is in the toppings with includes()
console.log('check if Tabasco Sauce is in the toppings with includes()')
const isInToppings = toppings.includes('Tabasco Sauce');
console.log(isInToppings);

// add it if not
console.log('add it if not')
if(!isInToppings) {
    toppings.push('Tabasco Sauce')
};
console.log(toppings);

// flip those toppings with reverse()
console.log('flip those toppings with reverse()');
console.log('Mutable way:');
console.log('commented')
// toppings.reverse();

console.log('Immutable way:');
const toppingsReversed = [...toppings].reverse();
console.log(toppingsReversed);
console.log(toppings);