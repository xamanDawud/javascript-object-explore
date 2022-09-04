let cremeBox = {
    name: "King Hair Cream",
    haveCream: true,
    weight: 75,
    color: "white",
};

let creamKeys = Object.keys(cremeBox);
// console.log(creaKeys);
let creamValues = Object.values(cremeBox);
// console.log(creamValues);
let creamKeysAndValues = Object.entries(cremeBox);
// console.log(creamKeysAndValues);
// let towDimensionArray = [
//     ["name", "King Hair Cream"],
//     ["haveCream", true],
//     ["weight", 75],
//     ["color", "white"],
// ];

Object.seal(cremeBox);
delete cremeBox.haveCream;
// console.log(cremeBox);

Object.freeze(cremeBox);