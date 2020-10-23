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

// #CALLBACK METHODS & FUNCTION GENERATION
const feedback = [
    {comment: 'Love the burgs', rating: 4},
    {comment: 'Horrible service', rating: 2},
    {comment: 'Smoothies are great, liked the burger', rating: 5},
    {comment: 'Ambiance needs work', rating: 3},
    {comment: 'I don\'t like burgers', rating: 1},
];

console.table(feedback);

// find the first rating that talks about a burger  with find()
console.log('find the first rating that talks about a burger  with find()');
const findBurgerRating = (singleFeedback) => singleFeedback.comment.includes('burg');
const burgerRating = feedback.find(findBurgerRating);
console.log(burgerRating);

// you can group your utility functions in an object:
const utils = {
    findBurgerRating: function (singleFeedback) {
        return singleFeedback.comment.includes('burg')
    }
};
// function that creastes function to overtake the need of variable creation for every single word we look for
console.log('function that creastes function to overtake the need of variable creation for every single word we look for');
function findByWord (word) {
    return function(singleFeedback) {
        return singleFeedback.comment.includes(word);
    }
};

const wordRating = feedback.find(findByWord('Smoothies'));
console.log('wordRating for "Smoothies"')
console.log(wordRating);

// find all rating thet are above 2 with filter()
console.log('find all rating thet are above 2 with filter()');

const goodReviews = feedback.filter(singleFeedback => singleFeedback.rating > 2);
console.table(goodReviews);

function filterByMinRating(rating){
    return function(singleFeedback) {
        return singleFeedback.rating > rating;
    }
};

const betterReviews = feedback.filter(filterByMinRating(3));
console.table(betterReviews);

// Find all ratings that talk about a burger with filter()
console.log('Find all ratings that talk about a burger with filter()');

const burgRatings = feedback.filter(findByWord('burg'));
console.table(burgRatings);

// remove the one star ratings
console.log('remove the one star ratings')
const onlyLegitRatings = feedback.filter(single => single.rating !== 1);
console.table(onlyLegitRatings);

// Check if there is at least 5 or more of one type of meat with some()
console.log('Check if there is at least 5 or more of one type of meat with some()');

const atLeastFive = Object.values(meats).some(meatValue => meatValue >= 5);
console.log(atLeastFive);

// every()
console.log('every()');
const isThereEnoughOfEveryMeat = Object.values(meats).every(meatValue => meatValue >= 5);
console.log(isThereEnoughOfEveryMeat);

// sort the toppings aphabetically using sort()
console.log('sort the toppings aphabetically using sort()')

// example on numbers as sort() converts them into UTF-16 strings
console.log('example on numbers as sort() converts them into UTF-16 strings')
const numbers = [1, 3, 300, 235, 89, 100];
const sortedNumbers = numbers.sort((firstItem, secondItem) => firstItem - secondItem);
console.log(sortedNumbers);

// looping methods - i think I'll do it the next file