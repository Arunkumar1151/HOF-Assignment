//Q3..................................................
//Build a feature for Store's Inventory.


items = { 1: 20, 2: 45 };
let dollarToIndian =Object.values(items).map((e) => e * 80);
let myMap = new Map();

for (i = 0; i < Object.keys(items).length; i++) {
    myMap.set(Object.keys(items)[i], dollarToIndian[i]);
}

console.log("The price of Items in Indian rupee for ", myMap);
