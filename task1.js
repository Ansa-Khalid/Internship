//Create a variable name and assign it a string value representing your name.
var name="Ansa Khalid"

//Declare a variable age and assign it a number value representing your age.
var age=22

// Create a variable isStudent and assign it a boolean value indicating whether you are a
// student or not.
var isStudent=true;
console.log(isStudent);

// Declare a variable myArray and assign it an array containing three different data types
// (e.g., string, number, boolean).
var myArray = ["Ansa",22,true];

//Check the type of null using the typeof operator.
num=null;
console.log(typeof(num));   //object

// Create a variable myObject and assign it an object with properties representing your
// name, age, and student status.
var myObject={
    name:"Ansa Khalid",
    age:22,
    status:true
}
console.log(myObject);


//Declare a variable x without assigning any value and log its value to the console. What do you see?
var x;
console.log(x); //undefined

//Check the type of a variable that has not been declared using the typeof operator.
console.log(typeof(x)); //undefined


// Create two variables, num1 and num2, and assign them number values. Add them together and store the result in a variable sum.
num1=5;
num2=10
sum=num1+num2;
console.log(sum);   //15


// Declare a constant variable PI and assign it the value of 3.14. Can you reassign a value to this constant? Why or why not?
const PI=3.14
// NO we can't reassign value in this constant because it is a feature in ECMA Script 2016 or ES7 in which the variable is declared at global level and it is not reassign


//Declare a variable message and assign it a string value. Later, update the variable with a new string value.
var message="Hello, world";
message="Hello"
console.log(message); //Hello

//Create a variable fullName by concatenating two separate variables containing your first and last names.
var firstName="Ansa "
var lastName="Khalid"
var fullName=firstName+lastName;
console.log(fullName);

// Create a variable isStudent and assign it a boolean value. Use the typeof operator to check the type of the variable.
var isStudent=false;
console.log(typeof(isStudent));    //boolean

//Create a variable result and assign it the value of the square root of a negative number using the Math.sqrt() function. Check if result is NaN.
var result=  Math.sqrt(-5) 
console.log(result); // yes result is NaN because square root of negtive number is not possible

// Declare a variable myFunction and assign it a function value. Use the typeof operator to
// check the type of the variable.
var x=function myFunction() {
    console.log("Hello")
}
console.log(typeof(x)); //function