// First way ,  Object literal (useful)
let player = {};
player.name = "Lionel Messi";
player.age = 23;
player.hobby = "Playing";
player.ball = () => {
    console.log("running the ball");
};
// console.log(player);

// Second Way (Normally Useful)
let student = {
    name: "Isaba Kawkab",
    id: 234234523,
    address: () => {
        console.log("Sylhet");
    },
};

// Object Constructor (not useful)
let person = new Object();
// console.log(person);

// Object crete Method
// let item = Object.create(null);
let item = Object.create(student);
console.log(item.name);

// Class (Most useful)
class Info {
    name = "salam";
    age = 23;
    country = "Bangladesh";
    constructor(city, upazila) {
        this.city = city;
        this.upazila = upazila;
        console.log(this.city, this.upazila);
    }
}

let Info1 = new Info("sylhet", "Unknown");
console.log(Info1);