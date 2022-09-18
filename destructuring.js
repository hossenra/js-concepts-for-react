// 1. array destructuring
const numbers = [42, 65];
// const x = numbers[0];
// const y = numbers[1];

// const [x, y] = [42, 65];

const [x, y] = numbers;

function boxify (num1, num2){
 const nums = [num1, num2];
 return nums;
}

const [first, second] = boxify(11, 22);
// console.log(boxify(11, 22));

const student = {
 name: 'Sakib Khan',
 age: 32,
 movies: ['King Khan', 'Dhaka Mastan']

};

const [firstMovie, secondMovie] = student.movies;

// object destructuring

const{name, age} = {name:'selim', age: 14};
const{name1, age1} = {name:'selim', age: 14, salary: 2000};

const employee = {
 id: 'VS code',
 designation: 'developer',
 machine: 'mac',
 languages: ['html', 'css', 'js'],
 specification: {
  height: 66,
  weight: 67,
  address: 'khilkhat',
  drink: 'water',
  watch: {
   color: 'black',
   price: 500,
   brand: 'casio'
  }
 }
}

const {machine, id} = employee;
const {weight, address} = employee.specification;
const{brand} = employee?.specification?.watch;
