// Write a program that checks if a given number is positive, negative, or zero. Display the
// corresponding message using if-else statements.
var num=0;
if(num>0){
    console.log("Number is Positive");
}
else if(num<0){
    console.log('Number is Negative');
}
else{
    console.log('Number is Zero');
}

// Create a program that determines whether a year entered by the user is a leap year or
// not. Display the appropriate message using if-else statements. (A leap year is divisible by
// 4, but not by 100, unless it is divisible by 400.)

var year = 2020;
if(year % 4 === 0){
      if(year % 100 === 0){
        if(year % 400 === 0){
          console.log("The year " + year + " is a leap year");
        }else{
          console.log("The year " + year + " is not a leap year");
        }
      }else{
        console.log("The year " + year + " is a leap year");
      }
    }else{
      console.log("The year " + year + " is not a leap year");
    }


    // Create a program that calculates the grade based on a given score. Display the corresponding grade using if-else statements according to the following scale:
    var score=69;
    if(score>=90){
        console.log("Your Grade is A");
    }
    else if(score>79&&score<90){
        console.log("Your Grade is B");
    }
    else if(score>69&&score<80){
        console.log("Your Grade is C");
    }
    else if(score>59&&score<70){
        console.log("Your Grade is D");
    }
    else{
        console.log("Your Grade is F");
    }
    

    // Create a program that checks the day of the week based on a given number (1 for Monday, 2 for Tuesday, etc.). Display the corresponding day using a switch statement.
    var day=6;
    switch(day) {
        case 1:
            console.log('The day of the week is Monday');
            break;
        case 2:
            console.log('The day of the week is Tuesday');
            break;
        case 3:
            console.log('The day of the week is Wednesday');
            break;
        case 4:
            console.log('The day of the week is Thursday');
            break;
        case 5:
            console.log('The day of the week is Friday');
            break;
        case 6:
            console.log('The day of the week is Saturday');
            break;
        case 7:
            console.log('The day of the week is Sunday');
            break;
        default:
            console.log('Please enter a valid day number');
    }


//     Write a program that checks the type of a given value and performs specific actions based on the type using a switch statement. For example, if the value is a number, multiply it by 2; if it is a string, concatenate "Hello " before it; if it is a boolean, negate it.
var val="Ansa";
switch (typeof(val)) {
    case "number":
        console.log('The new value is:' + val*2); 
        break;
    case "string":
        console.log('The new value is: Hello ' +val ); 
        break;
    case "boolean":
        console.log('The new value is: ' +!val ); 
            break;
    default:
        console.log('Plz enter a valid value');
}