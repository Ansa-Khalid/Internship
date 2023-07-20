// Write a JavaScript function named findMax that takes an array of numbers as input and returns the maximum value from the array. If the array is empty, the function should return null.

function findMax(array){
   var max=array[0];
   if (array==[]) {
    return null
   }
   else{
   for(let i=1; i<array.length; i++)
    if (array[i]>max) {
        max=array[i]; 
    }
    return max;
}
}

console.log(findMax([3,5,1,9,2]));

// Write a JavaScript function named countOccurrences that takes an array of elements and a target element as input and returns the number of occurrences of the target element in the array.
function countOccurrences(array, target){
 var count=0;
 for (var i = 0; i < array.length; i++) {
   if(array[i]==target){
   count++;
   }
 }
 return count;
}
console.log(countOccurrences([1, 2, 3, 4, 2, 1, 2], 2));
console.log(countOccurrences(['a', 'b', 'c', 'a'], 'a'));

// Write a JavaScript function named `reverseString` that takes a string as input and returns a reversed version of the input string.
function reverseString(text){
var splitString = text.split(""); 
var reverseArray = splitString.reverse();
var joinArray = reverseArray.join(""); 

return joinArray;
}
console.log(reverseString('Hello'));
console.log(reverseString('JavaScript'));


// Write a JavaScript function named isPrime that takes a number as input and returns true if the number is prime, and false otherwise. A prime number is a positive integer greater than 1 that is divisible only by 1 and itself.
function isPrime(n) {
    if (n===1)
    {
      return false;
    }
    else if(n === 2)
    {
      return true;
    }else
    {
      for(let x = 2; x < n; x++)
      {
        if(n % x === 0)
        {
          return false;
        }
      }
      return true;  
    }

}
console.log(isPrime(3));
console.log(isPrime(12));


//  Write a JavaScript function named isPalindrome that takes a string
// as input and returns true if the string is a palindrome, and false otherwise. A palindrome is a word,
// phrase, number, or other sequence of characters that reads the same forward and backward, ignoring
// spaces, punctuation, and capitalization.
function isPalindrome(str) {
    var lowercase = str.toLowerCase();
    var trimString = lowercase.trim();
    var newString = trimString.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
    var splitString = newString.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    
    if (joinArray === trimString) { // Compare joinArray with trimString, not 'str'
        return true;
    } else {
        return false;
    }
}

console.log(isPalindrome('   racecar    ')); // Output: true
console.log(isPalindrome('Hello')); // Output: false


// Write a JavaScript function named fizzBuzz that takes a number as input and returns:
// • "Fizz" if the number is divisible by 3.
// • "Buzz" if the number is divisible by 5.
// • "FizzBuzz" if the number is divisible by both 3 and 5.

// • The number itself if none of the above conditions are met.
function fizzBuzz(number) {
if ((number%3===0)&&(number%5===0)){
        console.log("FizzBuzz");
    }
else if (number%3===0) {
    console.log("Fizz");
}
else if (number % 5===0) {
    console.log("Buzz");
    
}
else{
    console.log(number);
}
}
fizzBuzz(8);



// Write a JavaScript function named factorial that takes a positive integer as
// input and returns the factorial of that number. The factorial of a non-negative integer n is the product of
// all positive integers less than or equal to n.
function factorial(n) {
    if (n>1){
    return n * factorial(n - 1);
    }
    else{
        return 1;
    }
}
console.log(factorial(4));

// Write a JavaScript function named fibonacci that takes a positive integer n as input and returns an array containing the first n numbers in the Fibonacci sequence. The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the two preceding ones.
function fibonacci(n) {
    var f=new Array(n);
    f[0]=0;
    f[1]=1;
    output=0;
    for (let i = 2; i < n; i++) {
       f[i] = f[i-1] + f[i-2];
    }
    var output = "";
    for (i = 0; i < n; i++) {
       output += f[i] + " ";
    }
    console.log(output);
}

fibonacci(5);

// Write a JavaScript function named capitalizeWords that takes a string as input and returns a new string where each word in the input string is capitalized.
function capitalizeWords(str) {
    newString=str.toUpperCase();
    return newString;
}
console.log(capitalizeWords('hello world'));
console.log(capitalizeWords('javascript is awesome')); // Output: 'Javascript Is Awesome');


// Write a JavaScript function named arraySum that takes an array of numbers
// as input and returns the sum of all the numbers in the array.
function arraySum(array){
    var sum=0;
    for (let i=0; i<array.length; i++){
        sum=array[i]+sum
    }
    return sum;
}
console.log(arraySum([1, 2, 3, 4, 5]));
console.log(arraySum([-1, 0, 1])); // Output: 0 (-1 + 0 + 1 = 0));