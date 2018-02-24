// 5.1 Loops- sequential


// for (i=0; i<10; i++)
// {
//     console.log( .012 + Math.ceil( (Math.random()) )+ " blurp");
// }


// for (i=0; i<21; i++)
// {
//     console.log(i);
// }

// var pageNames = ["home", "about", "contact", "news", "blog"];


// for (i=0; i < pageNames.length; i++)
// {
//     if (document.title == pageNames[i])
//     {
//         console.log("Okie dokie.");
//     }

//     else
//     {
//         console.log("nopes");
//     };

// }; 


// var x = [0, 1, 2, 3, 4, 5, 6 ];

// for (i=0; i<x.length; i++)
// {
//     if (x[i] == 6)
//     {
//         console.log( x[i] + i);
//     }
// };












// Section 4.7 Type checking

/* var blurp = 12;

console.log(typeof blurp);

blurp = "twelve";

console.log(typeof blurp);

blurp = true;
console.log(typeof blurp);

blurp = [];
console.log(typeof blurp);

console.log(typeof thing === "object" && thing.hasOwneProperty("length"));

console.log(typeof NaN);

console.log(typeof null);
 */

//THIS STUFF (ABOVE) IS GOOFY...

// console.log(23409%4);

//console.log( (1272 / 4 ) && (23400 % 2 ) === (23400 % 2) === (23400/2) || (1272%4)   );

/* var x;

if (x)
{
    console.log(x);
}

else
{
    console.log("nope");
}; */


// var x = Math.sqrt(36);

// console.log(x%2 === 0 ? "yes" : "no"); 




//4.4 Conditionals "if" & 4.5

// var answer = window.confirm("Click OK to get true.  Click cancel to get false.");

// if (answer === true)
// {
//     console.log("Yippers!");
// }

// else
// {
//     console.log("Blurp!");
// };

/* OKAY - THIS IS WHY EVEN SIMPLE REVIEW STUFF IS
SOMETIMES WORTH THE TIME...JUST REALIZED SOMETHING. 
WITH IF / ELSE STATEMENTS, OBVIOUSLY EVERYTHING 
*STARTS* WITH THE "IF" PORTION.  ***YOU DO NOT*** PUT 
A SEMICOLON AT THE END OF ***ANY*** OTHER STATEMENT 
IN THE INTERIM...UNTIL YOU REACH THE ***ELSE*** STATEMENT.  
JUST TRIED SOMETHING AND IT WASN'T WORKING...UNTIL THAT 
DAWNED ON ME!  THAT IS HOW JS KNOWS TO KEEP RUNNING THROUGH 
ALL THE VARIOUS CONDITIONS BEFORE REACHING THAT POINT
 */


 /* var answer = window.prompt("Please enter yes, no or maybe");

 if (answer === "yes")
 {
     console.log("Sounds great");
 }

 else if (answer === "no")
 {
     console.log("Why not?")
 }

 else
 {
    console.log("Lemme know, okay?");
 };
 */

// if (answer === false)
// {
//     console.log("No thanks!");
// };


// SAME SECTION AS ABOVE - SWITCH STATEMENTS

/* var answer = window.prompt("Please enter yep, nope, or maybe");

switch (answer)
{
    case "yes" :
    console.log("Coolness.")
    break;

    case "no" :
    console.log("Whatever.")
    break;

    case "maybe" :
    console.log("Ambiguity.")
    break;

    default :
    console.log("Gotta know, 'yo!");
    break;
} */


/* DEFINITELY NEED A *LOT* MORE WORK ON THESE.  JUST NOT AS 
FAMILIAR WITH THIS CONCEPT AS (FOR EXAMPLE) THE "IF/ELSE" 
PATTERN OF CONDITIONALS.  

NOT SURE IF I EVER LEARNED ABOUT THE "DEFAULT" BEFORE OR 
JUST FORGOT ABOUT IT, BUT THIS IS EFFECTIVELY THE SAME AS 
"ELSE" IN AN IF / ELSE STATEMENT.

VERY IMPORTANT - YOU MUST enter a "break" after each case,
or the logic will continue to cascade beyond that point.
Usually undesirable, as it will execute the statement that
matches...then also any code included under the default if
applied.
 */


// SINGLE LINE IF STATEMENTS

/*  var blah = "blurp";

 if (blah === "blurp") console.log("Woot-woot."); */


/* var blah = prompt("Please enter something here.");

if (blah === "blurp") console.log("Woot-woot.");
 */



 /* TERSE IFS AND TERNARY OPERATOR
 GOING TO NEED A LOT MORE WORK ON THIS; to my recollection
 I have never even seen these before!!!
 */











//4.3 Logical operators

// var a1 = "monkey";
// var a2 = "bear";
// var a3 = "tiger";

// if (a1 == "monkey" && a2 == "bear")
// {
//     console.log("LKAJSDKLJASDKLKLDSJA");
// }


// if (a1 == "dolphin" || a1 == "monkey")
// {
//     console.log("Ayup, yup");    
// };

// console.log(a1 == a1 && a1 == a2);

// console.log(a1 != a2 && a2 != a3);






//4.2 Arithmetic operators

//console.log (5%2);

// i = 0;
// i = i + 5;
// console.log(i);
// console.log(i%3);

// x = 0;

// for (i=0; i < 11; i++)
// {
//     console.log(x++);
// };


// x = 1;
// console.log(x += 4);

/* x = 1;
console.log( x+= -6);
console.log(x -- );
console.log(x -- -6);
 */

// console.log("cat" + "dog");
// console.log("cat " + "dog");

/* var c = "cat";
var d = "dog";
var a = "and";
var s = " ";

console.log(c + s + a + s + d );

SAME AS BELOW - ALREADY KNEW THIS, JUST A 
QUICK REVIEW 
 */




// 4.1 Equality 

// console.log(1==1);
// console.log(1 != 1);

// console.log(1 === 1);
// console.log(1 == "1");
// console.log(1 === "1");

// console.log(1>2);
// console.log(1<2);
//console.log(2 >= 1);
//console.log(2 >= 1);

/* PRETTY WELL UNDERSTOOD (AND UNDERSTAND)
THESE / QUICK REVIEW */




// Section 3.8 Regular expressions
/* Weird.  Sounds like this is a WHOLE different 
topic in and of itself / will require extensive 
exploration & study - at a later time 
Would be helpful to see a practical use case of 
this.  */


// Section 3.7 Comments (already knew this)

// Section 3.6 Whitespace (already knew this)


// Section 3.5 Manipulating arrays 

/* var counties = 
[
"Saint Louis County", "Saint Louis City", "Saint Charles County", "Franklin County"

]; */

// counties.shift();
// console.log(counties);
// counties.unshift("Saint Louis County");

// console.log(counties);

/* VERY COMFORTABLE WITH PUSH AND POP FOR WORKING 
WITH FRONT OF ARRAYS 
NOW JUST NEED TO GET USED TO USING SHIFT AND 
UNSHIFT FOR THE FRONT OF ARRAYS  */

/* delete counties[2];

counties[2] = "durpeoflopzop";

console.log(counties);


counties.splice[2];

console.log(counties);

counties.unshift("LKJASD");

console.log(counties);

counties.shift();

console.log(counties);

counties.unshift();

console.log(counties);

unshift() + ADDS to the front of array 
shift() - REMOVES from the front of array 
splice[x]  PLUCKS from the array PER INDEX SPECIFIED
 */




// Section 3.4 Arrays 

// var myArray = [];

// var daysOfWeek = ["Sun", "Mon", "etc"];

/* If you create an OBJECT and print it to the CONSOLE 
it will automatically put all the key : value pairs 
into alphabetical order 

With an ARRAY it will KEEP THE ORDER of however your 
data is originally entered.  (This makes sense, because
you manipulate data in an array with indexes for each 
specific item of data contained within the array.) */


/* var myArray = 
[
    0,1,2,3,4,5,6,7,true,false,true, "flurp", "durp"
];
 */


/*  var array1 = [];

 console.log(array1);

 array1.push("gobble", "flurp" , "durp");

 console.log(array1);

 array1.pop();

 console.log(array1);

 array1.push("durp");

 console.log(array1);

 console.log(array1.indexOf("durp"));
 */
 





// Section 3.3

/* var turkey = {};

turkey.genus = "fish";
turkey.name = "Roger";
turkey.ostritch = true;
turkey.isHamSandwich = false;


console.log(turkey);

var turkey2 = turkey;

console.log(turkey2);

turkey2.genus = "bear";

console.log(turkey, turkey2); */

/* M/* oral of this story?  If you create a new object and
set it to another (existing) object, IT WILL POINT TO 
EXACTLY THE SAME PLACE IN MEMORY.  So in other words, 
if you change one of the values for turkey2, it will 
ALSO change it for the ORIGINAL turkey1 as well    */


/* turkey2 = {};

console.log(turkey2);


turkey2.genus = "fish",
turkey2.name = "Roger",
turkey.ostritch = true;
turkey.isHamSandwich = false;

console.log(turkey2);
console.log(turkey);


REFERENCES CAN (WILL) POINT YOUR DATA TO THE *EXACT SAME PLACE*
IN MEMORY IF YOU AREN'T CAREFUL...USUALLY AN UNDESIRABLE THING. */







// Section 3.2 Manipulating objects 

// var animal = {};

// animal.flurp = "Yipeee!";
// animal.type = "Dog";
// animal.whereItLives = "Trees";

// delete animal.flurp;

// animal.foo = "Yipyip";


// console.log(animal);





// Section 3.1 Objects, Arrays and More 

// {};  This is technically an "object" in JavaScript.

// var emptyObject = {};

// console.log(emptyObject);
// A console.log of this empty object returns back just the 
// inherent attributes thereof.  

/* var notAnEmptyObject = 
{
    "LABLEL" : "VALUE"
};

console.log(notAnEmptyObject);
This gives back contents of object / key - value pair 
 */


//  var anotherObject = 
//  {
//      "value1" : "thiss",  /* SPELLED CORRECTLY REPRESENTS KEYWORD HAD TO CHANGE */
//      "value2" : "that",
//      "value3" : "the",
//      "value4" : "other",
//      "value5" : "thing" 
//  };

//  console.log(anotherObject);




// Section 2.4 BOOLEANS
/* var mylocation = "Saint Louis", myOtherLocation = "Mars";

console.log(mylocation);
console.log(myOtherLocation);

console.log(mylocation === mylocation);
console.log(mylocation === myOtherLocation); */



// Section 2.3

/* console.log("This is a string");

"This is a string" is also referred to as a "STRING LITERAL"
which only means you are MAKING DATA OF SOME TYPE, USING
THE SIMPLEST NOTATION POSSIBLE. */

/* console.log("This is a \"STRING\" example.");
Okay, here's yet ANOTHER one!  Before, it seemed like
'escape characters' for when quotes are involved...was 
a big headache.  (Had to remember all the special 
syntax and it wasn't encountered / used very often.)
In JavaScript, turns out ALL YOU HAVE TO DO is
insert a backslash BEFORE the character you want to 
escape!!! */


// var myString = "This is my string; leave it alone!";

// console.log(myString);
// console.log(myString.length);

// console.log(myString.toLocaleUpperCase);
// See...did it again!  Forgot to put in the parens and 
// it gave me back a console.log of the method!!!

// console.log(myString.toUpperCase());
// Magic...put in the parens as required and it works 
// properly!


// console.log("This is my string".length);






/* Section 2.2

console.log(Math.random());

console.log(Math.ceil(Math.random()));

console.log(Math.ceil(Math.random()-Math.random()));
 */

/* May have just stumbled upon something I've been doing wrong?
I put in the code below and it gave me back the method for 
Math.random:
console.log(Math.random); */

/* Conversely, when it occurred to me that I omitted the
parens (because Math.random() is a method) it worked 
properly.  Wonder if maybe something this simple and silly
is what has been giving me headaches?   */

/* I did not know these were a part of JavaScript:
Infinity;
-Infinity; */



/*   Section 2.1

var x = 32;

console.log(x);

x = 45;

console.log(x);

console.log(x + " boo"); */