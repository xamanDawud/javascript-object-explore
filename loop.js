// For loop
let numbers = [23, 42, 52, 5435, 33];
for (const number of numbers) {
    // console.log(number);
}

let student = {
    name: "Isra",
    address: "Ojana Prithibi",
    id: 0001,
    age: 20,
};

// Object looping First way (not useful)
let keys = Object.keys(student);
for (const key of keys) {
    // console.log(key, student[key]);
}

// Object looping second way (every time will used)
for (const x in student) {
    console.log(x, student[x]);
}