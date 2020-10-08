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

// THE END :)