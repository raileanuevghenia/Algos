// Create a function that accepts a number as an input. Return a new array that counts down by one, from
// the number (as array’s ‘zeroth’ element) down to 0 (as the last element). How long is this array?

function countDown(num) {
    var newArr = [];
    for (i = num; i >= 0; i--) {
        newArr.push(i)
    }
    console.log(newArr.length)
    return newArr

}


var x = countDown(8);
console.log(x);

// Your function will receive an array with two numbers. Print the first value, and return the second.
function printAndReturn(num1, num2) {
    console.log(num1)
    return num2
}

var b = printAndReturn(5, 10)
console.log(b)


// Given an array, return the sum of the first value in the array, plus the array’s length. What happens if the array’s 
// first value is not a number, but a string (like "what?") or a boolean (like false).

function firstPlusLength(arr) {
    var first = arr[0];
    var sum = first + arr.length;
    return sum;
}

var x = firstPlusLength([5, 7, 2, 5, 3])
var x1 = firstPlusLength(['what', 9, 2, 5, 4]) //the output is gonna be what5 because it will concatinate the string with array length.
var x2 = firstPlusLength([false, 9, 2, 5, 4]) // the output is gonna be 5 because false is considerated as value 0.
console.log(x);
console.log(x1);
console.log(x2);

// Write a function that accepts any array, and returns a new array with the array values that are greater than its 2nd value.
//  Print how many values this is. What will you do if the array is only one element long?

function valueGreaterThanSecond(arr) {
    var second = arr[1]
    var newArr = []
    if (arr.length == 1) {
        return "There is nothing to compare its just 1 element"
    } else {
        for (i = 1; i < arr.length; i++) {
            if (arr[i] > second) {
                newArr.push(arr[i])
            }
        }
        return newArr;
    }
}


var d = valueGreaterThanSecond([1,5,9,7,5])
console.log(d)


// Given two numbers, return array of length num1 with each value num2. Print "Jinx!" if they are same.

function thisLength(num1, num2) {
    var arr = []
    for (i = 0; i < num1; i++) {
        arr.push(num2)
    } if (num1 === num2){
        return "Jinx";
    }
    return arr
}

var e = thisLength(3, 4)
console.log(e)

// Your function should accept an array. If value at [0] is greater than array’s length, print "Too big!"; 
// if value at [0] is less than array’s length, print "Too small!"; otherwise print "Just right!".

function fitTheFirstValue(arr) {
    if (arr[0] > arr.length) {
        console.log("Too big")
    } else if (arr[0] < arr.length) {
        console.log( "Too small!");
    } else {
        console.log( "Just right!");
    }
}

var f = fitTheFirstValue([2,3,4,1])
console.log(f)

//Kelvin wants to convert between temperature scales. 
//Create fahrenheitToCelsius(fDegrees) that accepts a number of degrees in Fahrenheit and 
//returns the equivalent temperature as expressed in Celsius degrees.

function fahrenheitToCelsius(fDegrees) {
    var celsius = (fDegrees-32) * 5 / 9;
    var result = fDegrees + " fahrenheit is equal to " + celsius + " celsius. "
    return result;
}

var a = fahrenheitToCelsius(100);
console.log(a);

// Create celsiusToFahrenheit(cDegrees) that accepts number of degrees Celsius, 
// and returns the equivalent temperature expressed in Fahrenheit degrees.

function celsiusToFahrenheit(cDegrees) {
    var fahr = (cDegrees * (9 / 5)) + 32;
    var result = cDegrees + " celsius is equal to " + fahr + " fahrenheit degrees."
    return result
}

var a = celsiusToFahrenheit(25);
console.log(a);