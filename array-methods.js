const products = [
 {name: 'laptop', price: 32000, brand: 'lenovo', color: 'silver'},
 {name: 'phone', price: 7000, brand: 'iphone', color: 'golden'},
 {name: 'watch', price: 22000, brand: 'casio', color: 'yellow'},
 {name: 'sunglass', price: 300, brand: 'raybon', color: 'black'},
 {name: 'camera', price: 9000, brand: 'canon', color: 'gray'}

];

const brands = products.map(product => product.brand);
// console.log(brands);

const prices = products.map(product => product.price)
// console.log(prices);

products.forEach(product => console.log(product.color))

products.forEach(product => {

})

// 3. filter

const cheap = products.filter(product => product.price <= 10000);
// console.log(cheap);

const specificName = products.filter(product => product.name.includes('w'));
// console.log(specificName);

// 4. find

const special = products.find(product => product.name.includes('w'));
console.log(special);
