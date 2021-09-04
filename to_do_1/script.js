// Set myNumber to 42.Set myName to your name.
//Now swap myNumber into myName and viceversa.

function swapNumberName (myNumber, myName){
    temp = myNumber;
    myNumber = myName;
    myName = temp;
    return [myNumber, myName]
    
}

swapNumberName(42, "Jane");

//Print integers from -52 to 1066 using a FOR loop.

for (x = -52; x <= 1066; x++) {
    console.log(x);
}

//Create beCheerful(). Within it, console.log string "good morning!" 
//Call it 98 times.

function beCheerful() {
    for (x = 1; x <= 98; x++)
    console.log("good morning");
}

beCheerful();

//Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6.

for (x = -300; x <= 0; x++) {
    if( x % 3 == 0 && x != -3 && x != -6){
        console.log(x);
    }
    
}

//Print integers from 2000 to 5280, using a WHILE.

var x = 2000;
while(x <= 5280){
    console.log(x);
    x++;
}

//If 2 given numbers represent your birth month and day in either order, 
//log "How did you know?", else log "Just another day...." 

function youSayItsYourBirthday(num1, num2) {
    let month = 8;
    let day = 2;
    if(num1 == month || num2 == month){
        if(num1 == day || num2 == day){
            console.log("How did you know?");
        }
    } else{
        console.log("Just another day...");
    }
}

youSayItsYourBirthday(8, 2);
youSayItsYourBirthday(2, 10);

//Write a function that determines whether a given year is a leap year. 
//If a year is divisible by four, it is a leap year, 
//unless it is divisible by 100. However, if it is divisible by 400, then it is.

function isLeapYear(year){
    if (year % 400 == 0){
        console.log(year + "is a leap year")
    } else {
        console.log(year  + "is not a leap year");
    }
}
isLeapYear(2000);
isLeapYear(1846);

//Print all integer multiples of 5, from 512 to 4096. 
//Afterward, also log how many there were.

function integersMultiples(){
    var count = 0;
    for (x = 512; x <= 4096; x++ ){
        if(x % 5 == 0){
            console.log(x);
            count++;
        }
        
    }
    console.log(count);
}

integersMultiples();

//Print multiples of 6 up to 60,000, using a WHILE.

var x = 0;
while(x <= 60000){
    if( x % 6 == 0){
        console.log(x);
    }
    x++; 
}

//Print integers 1 to 100. If divisible by 5, print "Coding" instead. 
//If by 10, also print " Dojo".

for(x = 1; x <= 100; x++){
    if(x % 5 == 0){
        console.log("Coding");
        if((x % 5 == 0) && (x % 10 == 0)){
            console.log("Dojo");
        }
    } else{
        console.log(x);
    }
}

//Your function will be given an input parameter incoming. 
//Please console.log this value.

function whatDoYouKnow(incoming){
    console.log(incoming);
}

whatDoYouKnow("graduation");

//Add odd integers from -300,000 to 300,000, and console.log the final sum. 
//Is there a shortcut?

var sum = 0;
for(x = -300000; x <= 300000; x++){
    sum += x;
    
}
console.log(x);

//Log positive numbers starting at 2016, counting down by fours (exclude 0), without a FOR loop.

var num = 2016;
while (num != 0) {
    console.log(num)
    num -= 4;
}

//Based on earlier “Countdown by Fours”, given lowNum, highNum, mult, print multiples of mult from highNum down to lowNum, 
//using a FOR. For (2,9,3), print 9 6 3 (on successive lines).

function countDown(lowNum, highNum, mult) {
    let i = highNum;
    while (i > lowNum) {
        if (i % mult === 0) {
            console.log(i);
            i -= mult;
        } else {
            i--;
        }
    }
}
countDown(2, 9, 3);
countDown(2, 15, 5);

//This is based on “Flexible Countdown”. 
//The parameter names are not as helpful, but the problem is essentially identical; 
//don’t be thrown off! Given 4 parameters (param1,param2,param3,param4), 
//print the multiples of param1, starting at param2 and extending to param3. 
//One exception: if a multiple is equal to param4, then skip (don’t print) it. 
//Do this using a WHILE. Given (3,5,17,9), 
//print 6,12,15 (which are all of the multiples of 3 between 5 and 17, 
//and excluding the value 9).

function finalCountdown(num1, num2, num3, exception) {
    let i = num2;

    while (i < num3) {
        if (i % num1 === 0) {
            if (i % exception !== 0) {
                console.log(i);
            }
        }
        i++;
    }
}

finalCountdown(3, 5, 17, 9);