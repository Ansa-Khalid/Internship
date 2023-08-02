// Task 1: Doubling the numbers
// Given an array of numbers, use the map function to create a new array where each number is doubled.
const numbers = [1, 2, 3, 4, 5]
let newArr = numbers.map((curElem,index,arr) => {
        return curElem + curElem;
    })
console.log(newArr);

// Task 2: Extracting even numbers
// Given an array of numbers, use the filter function to create a new array containing only the even numbers.
const Numbers = [1, 2, 3, 4, 5, 6];
let evenArr = Numbers.filter((evenElem,index,arr) => {
        return (evenElem%2==0);  
})
console.log(evenArr);

// Given an array of objects with 'name' properties, use the map function to create a new array where each name is capitalized (first letter in uppercase, rest in lowercase).
const people = [
    { name: 'john', age: 28 },
    { name: 'JANE', age: 24 },
    { name: 'aLiCe', age: 30 },
  ];
  
  let newAry = people.map((person,index, arr) => {
    const sentenceCaseName =
      person.name.charAt(0).toUpperCase() + person.name.slice(1).toLowerCase();
    return { ...person, name: sentenceCaseName };
  });
  
  console.log(newAry);

//   Task 4: Filter objects by age
//Given an array of objects with 'name' and 'age' properties, use the filter function to create a new array containing only people above a certain age (e.g., 25).
const People = [
  { name: 'John', age: 28 },
  { name: 'Jane', age: 24 },
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 22 },
  ];

 let newAr = People.filter((person,index, arr) => {
   return person.age>25
  });

console.log(newAr);

// Task 5: Extracting titles from objects
// Given an array of book objects with 'title' and 'author' properties, use the map function to create a new array containing only the titles of the books.
const books = [
    { title: 'Harry Potter', author: 'J.K. Rowling' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    ];
let titleBook=books.map((book,index,arr)=>{
    return book.title;
})
console.log(titleBook);


// Task 6: Filter and calculate discounted prices
// Given an array of products with 'name', 'price', and 'discount' properties, use the filter function to create a new array containing only the products that have a discount greater than 10%. Then, use the map function to calculate the discounted prices for each of those products.
const products = [
    { name: 'Laptop', price: 1000, discount: 0.2 },
    { name: 'Phone', price: 500, discount: 0.1 },
    { name: 'Tablet', price: 300, discount: 0.05 },
    { name: 'Headphones', price: 80, discount: 0.15 },
    ];
let newProducts=products.filter((product,index)=>{
    return product.discount>=0.1
}).map(product => {
    let newdiscount=product.discount*product.price;
    product.price=product.price-newdiscount;
    return{
        name:product.name,
        discountedPrice:product.price
    }
});

console.log(newProducts);

// Given an array of names, use the filter function to create a new array containing only the names with more than 5 characters. Then, use the map function to capitalize the first letter of each of those names.
const names = ['john', 'emma', 'michael', 'sophia', 'alexander'];
let newNames=names.filter((name) =>{
    return (name.length>5)
}).map((name) => {
    const sentenceCaseName =
      name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    return sentenceCaseName ;
  });
console.log(newNames);


// Task 8: Filter and calculate total cost
// Given an array of orders with 'product', 'quantity', and 'price' properties, use the filter function to create a new array containing only the orders with quantity greater than 5. Then, use the map function to calculate the total cost for each of those orders.

const orders = [
{ product: 'Laptop', quantity: 2, price: 1000 },
{ product: 'Mouse', quantity: 10, price: 25 },
{ product: 'Keyboard', quantity: 8, price: 50 },
{ product: 'Monitor', quantity: 3, price: 200 },
];
let newOrders=orders.filter((order) =>{
    return order.quantity > 5
}).map((order) =>{
    order.price=order.price*order.quantity;
    return order.price;
})
console.log(newOrders);


// Given an array of people with 'name', 'age', and 'city' properties, use the filter function to create a new array containing only the people who are above 30 years old. Then, use the map function to extract only their names.
const people1 = [
    { name: 'John', age: 28, city: 'New York' },
    { name: 'Jane', age: 35, city: 'Chicago' },
    { name: 'Alice', age: 42, city: 'San Francisco' },
    { name: 'Bob', age: 25, city: 'Seattle' },
    ];
let newPeople=people1.filter((e,index) => {
    return (e.age > 30);
}).map((people) =>{
    return people.name;
});
console.log(newPeople);