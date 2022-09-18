// 1. JSON => stringify, parse
const student = {
 name: 'Sakib Khan',
 age: 32,
 movies: ['King Khan', 'Dhaka Mastan']

}
const studentJSON = JSON.stringify(student);
// console.log(student);
// console.log(studentJSON);

const studentObj = JSON.parse(studentJSON);
// console.log(studentObj);

// 2. fetch
fetch('url')
.then(res => res.json())
.then(data => console.log(data));


// keys, values
const keys = Object.keys(student);
const values = Object.values(student);

// for
const numbers = [23, 54, 63, 31, 67, 98];
numbers.forEach(num => console.log(num));
numbers.map(num => num * 2);

// for of on array like object
// loop on an object using for in


// add or remove from an array
const products = [
 {name: 'laptop', price: 32000, brand: 'lenovo', color: 'silver'},
 {name: 'phone', price: 7000, brand: 'iphone', color: 'golden'},
 {name: 'watch', price: 22000, brand: 'casio', color: 'yellow'},
 {name: 'sunglass', price: 300, brand: 'raybon', color: 'black'},
 {name: 'camera', price: 9000, brand: 'canon', color: 'gray'}

];

const newProduct = {name: 'webcam', price: 8000, brand:'lal', color:'brown'};

// copy products array and then add newProducts

const newProducts = [...products, newProduct];

// create a new array without one specific item
// remove phone means create a new array without the phone

const remaning = products.filter(product => product.name !== 'phone');


