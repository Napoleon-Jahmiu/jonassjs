
var heightJohn = 173;
var heightMark = 187;

var massJohn = 939;
var massMark = 948; 

johnBMI = massJohn / (heightJohn * heightJohn);
markBMI = massMark / (heightMark * heightMark);

console.log(johnBMI, markBMI);

var markHigherBMI = markBMI > johnBMI;
console.log('Is Mark\'s BMI greater than John\'s? ' + markHigherBMI);

// if / else statements

var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married');
    } else {
        console.log(firstName + ' will hopefully marry soon');
    }

var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married');
} else {
    console.log(firstName + ' will hopefully marry soon')
}

if (markBMI > johnBMI) {
    console.log('Mark\'s BMI is greater than John\'s');
} else {
    console.log ('John\'s BMI is greater than Mark\'s ');
}

// Booleon Logic :  They are used in taking decisions
var firstName = 'John';
var age = 48;

if (age < 13) {
    console.log(firstName + ' is a boy'); 
} else if (age >= 14 && age < 20){
    console.log(firstName + ' is a teenager ');
}   else if (age >=20 && age < 30) {
    console.log(firstName + ' is a young man');
} else {
    console.log(firstName + ' is a man');
}

// TERNARY OPERATORS and Switch statements
 
var firstName = 'John';
var age = 35;

// age >= 18 ? console.log( firstName + ' drinks bear') 
// : console.log(firstName + ' drinks juice');

var drink = age >= 18 ? firstName + ' drinks beer' : firstName + 'drinks juice';
console.log(drink)

// SWITCH STATEMENT 
// The string execution 
var job = 'teacher';
switch (job) {
    case 'teacher' :
        console.log(firstName + ' teaches the kids how to code.');
        break;
   case 'driver' :
        console.log(firstName + ' drives uber in lagos.');
        break; 
    case 'designer' :
        console.log(firstName + ' designs for the president of Nigeria');
        break;
    default:
        console.log(firstName + ' does something else');    
}


// SWITCH STATEMENT //The Logical exeution function

switch (true) {
    case age < 13 :
        console.log(firstName + ' is a boy');
        break;
    case age >= 13 && age <= 19 :
        console.log(firstName + ' is a teenager');
        break;
    case age >= 20 && age <= 30 :
        console.log (firstName + ' is a young man');
        break;
        default: 
        console.log(firstName + ' is a man');
}


// THRUTHY AND FALSY VALUES AND EQUALITY OPERATORS

// Falsy values: undefined, Null, 0, '', NaN
// Truthy values: not falsy values
// Falsy values (examples)
var height;

height = '23';

if (height) {
    console.log('Variable is defined')
} else {
    console.log('variable is not defined')
}
 
// Equality Operators
if  (height === '23') {
    console.log('The == does the type of coercion!');
}

/* CODING CHALLENGE 2*/
// var johnTeam = (89 + 103 +120) / 3;
// var mikeTeam = (116 + 123 + 94) / 3;

// console.log (johnTeam, mikeTeam);

// if (johnTeam > mikeTeam) {
//     console.log('john team wins with a point of' + johnTeam) 
// } else {
//     console.log ('mike\'s team wins with a point of ' +mikeTeam);
// }

var johnTeam = (140 + 103 +120) / 3;
var mikeTeam = (116 + 123 + 94) / 3;
var maryTeam = (97 + 134 + 139) / 3;

console.log (johnTeam, mikeTeam, maryTeam);

// if (johnTeam > mikeTeam) {
//     console.log('john team wins with a point of' + johnTeam) 
// } else if (mikeTeam > johnTeam){
//     console.log ('mike\'s team wins with a point of ' + mikeTeam);
// } else {
//     console.log('There\'s a draw');
// }


// For the Three Teams
if (johnTeam > mikeTeam && johnTeam > maryTeam) {
  console.log('john team wins with a point of' + johnTeam);
} else if (mikeTeam > johnTeam && mikeTeam > maryTeam) {
    console.log('Mike\'s team wins with a point of ' + mikeTeam)
} else if (maryTeam > mikeTeam && maryTeam > johnTeam) {
    console.log('Mary\'s team wins with a point of ' + maryTeam)
} else {
    console.log('There\'s a draw');
}

// FUNCTIONS
// This is a single function that require to return a value
function calculateAge(birthyear) {
    return 2018 - birthyear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1940);
var ageJane = calculateAge(1965);
console.log(ageJohn, ageJane, ageMike);

/* This function does not require to return a value and it takes 
in more than two argument*/

function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age; 
    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years')
    } else {
        console.log(firstName + ' is already retired.')
    }
    
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1965, 'Jane');
yearsUntilRetirement(1940, 'Mike');


/*****************
 * function statement and Expression
 */

//  stataments fucntions are code that don't execute any immediate value examples include the if else statement, while loop, and so on.

/** FUNCTION DECLARATIONS : In this type of function, the keyword function comes first before the function itself*/
// fucntion whatDoYouDo (job, firstName); They does not have the assignment (=) sign in the function

//  Function Expression: Any code /function that will execute /produces results is an expression
// And one of it property is that it will have the assignment property unlike the declarational function
var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher' :
            return firstName + ' teaches the kids how to code';
        case 'driver' :
            return firstName + ' drives uber in Lisbon';
        case 'designer' :
            return firstName + ' designs amazing websites for Andela';
        default:
            return firstName + ' has already retired from the service';
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jide'));
console.log(whatDoYouDo('retired', 'Mike'));

/************
 * ARRAYS:
 * Arrays are zero based: i.e they starts from zero
 */

//  INITIATAE NEW ARRAY
 
 var names = ['john', 'mark', 'jane'];
 var years = new Array(1990, 1969, 1948, 1)

 console.log(names);
 console.log(names.length);
 console.log(names[2]);

//  MUTATE ARRAY DATA: I.E CHANGING THE INITIAL DATA OF THE ARRAY
 names[1] = 'Ben';
 names[5] = 'Mary';
 names[names.length] = 'Mary';
 console.log(names);
 
 var john = ['John', 'Smith', 1990, 'teacher', false];
 john.push('blue');
 john.unshift ('Mr.');
 console.log(john);

 john.pop();
 john.shift();
 console.log(john);
 console.log(john.indexOf(23));

 var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John is a designer';
console.log(isDesigner);


// Assignment
function tipCalculator(bill)  {
    var percentage;
    if (bill < 50) {
        percentage = .2;
    } else if (bill >= 50 && bill < 200 ) {
        percentage = .15;
    } else {
        percentage = .1;
    } 
    
    return percentage * bill;
}

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])
            ]

var finalvalues = [bills[0] + tips[0],
                    bills[1] + tips[1],
                    bills[2] + tips[2]
                    ]

console.log(tips, finalvalues)

/*****
 * OBJECTS AND PROPERTIES: In Objects, orderliness matters alot while it doesn't in arrays
 */
// Objects Literals : This is the most conventional way to write an object
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried : false
};

// This is executing to the console
console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

// Mutating an Object : This is how to mutate an object
john.job = 'Developer';
john['isMarried'] = true;
console.log(john);

var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = '1996';
jane['lastName'] = 'Smith';
console.log(jane);


/****
 * Objects and Methods
 */

 var john = {
     firstName: 'John', 
     lastName: 'Smith', 
     birthYear: 1990,
     family: ['jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried : false,
    calcAge: function() {
     this.age = 2018 - this.birthYear;
    }

 };

//  console.log(john.calcAge());
 john.calcAge();
 console.log(john);


 /*********
  * CODING CHALLENGE 4
  * 
  * Let's remember the first coding challenge wher mark
  *  and john compared their BMIs. let's now implemetn the same
  * functionality with objects and methods.
  * 1. For each of them, create an object with properties for their full name, mass
  *  and height
  * 2. Then, add a method to ecach object to calculate the BMI. save
  * the BMI to the object and also return it from the method.
  * 3. in the end, log to the console who has the highest BMI, together with the full name and the respective 
  * BMI. Don't forget they might have the same BMI>
  * 
  * Remember: BMI = Mass/ Height ^2 = mass / (height * height). (mass in Kg and height in meter).
  * 
  * GOOD Luck
  */

  var mark = {
      fullName: 'Mark Corel',
      complexion: 'light',
      mass: 98,
      height: 1.78,
      calcBMI:  function() {
         this.bmi = this.mass / (this.height * this.height)
          return this.bmi;
      }
  }
  
  var john = {
    fullName: 'John Corel',
    complexion: 'dark',
    mass: 88,
    height: 1.82,
    calcBMI:  function() {
       this.bmi = this.mass / (this.height * this.height)
        return this.bmi;
    }
}

    john.calcBMI();
    mark.calcBMI();


  if (john.calcBMI() > mark.calcBMI()) {
      console.log(john.fullName + ' has a higher BMI of ' + john.bmi);
} else if (mark.bmi > john.bmi) {
    console.log(mark.fullName + ' has a higher BMI of ' + mark.bmi)
} else {
    console.log('They have the same BMI');
}


//   var john = {
//     firstName: 'John',
//     lastName: 'Jaden',
//     complexion: 'dark',
//     mass: 984,
//     height: 1.78
                                                                                                                                                                                                                                                                                                                                                                              
 /********
  * LOOPS AND ITERATION
  */
// The For Loop
for (var i = 0; i<10; i++) {
    console.log(i);
} 

// To iterate by skinpping (2) steps
for (var i = 1; i<=20; i += 2) {
    console.log(i);
}

// The for loop
// var john = ['JOhn', 'Smith', 1990, 'designer', false, 'blue', 'color'];
// for (var i = 0; i < john.length; i++) {
//     console.log(john[i]);
// }


// While Loop
var i = 0; 
while (i < john.length) {
    console.log(john[i]);
    i++;
}

// Continue and Break Statements
var john = ['John', 'Smith', 1990, 'designer', false, 'blue', 'color'];
for (var i = 0; i< john.length; i++) {
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

for (var i = 0; i < john.length; i++) {
    if(typeof john[i] !== 'string') break;
    console.log(john[i]);
}

// Looping Backwards
for (var i = john.length - 1; i>=0; i--){
    console.log(john[i]);
}

// The While and Do while loop are similar. The while loop will only run if the 
// condition is meant while the Do While Loop will run anyways no matter the condition.

// WHILE LOOP
var i = 0;
while(i < 10) {
    console.log('Number ' + i);
    i++;
}


// Do while loop 

var i = 100;

do {
    console.log('Number ' + i);
    i++;
}

while(i < 10);

/*********
 * CODING CHALLENGE 5
 */
/**
Remember the tip calculator challenge? let's create a more advamce
version using everything we learned!

This time, John and his family went to 5 different restaurants. 
The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 
15% when the bill is between $50 and $200, and 10% if the the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. add a method to calculate the tip
3. This method should include a loop to iterate over all the
paid bill and do the tip calculations
4. as an output, create 1) a new array containing all tips and 
  2) an array containing final paid amounts (bill + tip) 
    HINT: Start with two empty arrays [] as properties and then fill them up  in the loop.


EXTRA AFTER FINIHING: Mark's family also went on a holiday, going to a 
4 different restaurants. The bills were $77, $375, $110, and $45.
Mar k likes to tip 20 % of the bill when the bill is less tha $100, 10% when the bill is between $100 and 
$300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using mark's tipping rules.
6. Create a function(not a method) to calculate the average of a given array of tips. 
HINT: loop over the array, and in each iteration store the current sum in a variable 
(starting from 0). After you have the sum o fthe array, divide it by the number elements in it (that's how you calculate the average)

7.Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average.

GOOD LUCK.

 */
// Solution 1
var john = {
    fullName: 'John Smith',
    age: '23',
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];

        for(var i = 0; i < this.bills.length; i++) {
        
            var percentage;
            var bill = this.bills[i];

            if (bill < 50 ) {
                percentage = .2;
            } else if (bill >= 50 && bill < 200) {
                percentage = .15;
            } else {
                percentage = .1;
            }

            // Add result to the corresponding arrays.
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}


// For Mark's Family
var mark = {
    fullName: 'John Smith',
    age: '23',
    bills: [77, 375, 110, 45],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];

        for(var i = 0; i < this.bills.length; i++) {
        
            var percentage;
            var bill = this.bills[i];

            if (bill < 100 ) {
                percentage = .2;
            } else if (bill >= 100 && bill < 300) {
                percentage = .1;
            } else {
                percentage = .25;
            }

            // Add result to the corresponding arrays.
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}


// calculating the average
function calculateAverage (tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++){
       sum = sum + tips[i];
}
    return sum / tips.length;   
 }
 
 
// Do the calculation
john.calcTips();
mark.calcTips();


john.average = calculateAverage(john.tips);
mark.average = calculateAverage(mark.tips);
console.log(john, mark);

// console.log(fullName + ' pays the waiter ' + this.finalValues);

if (john.average > mark.average) {
    console.log(john.fullName + '\s pays higher tips with a tip of $' + john.average)
} else if (mark.average > john.average) {
    console.log(mark.fullName + '\s pays higher tips with a tip of $' + mark.average)
} else {
    console.log('they both tip the same amont');
}

