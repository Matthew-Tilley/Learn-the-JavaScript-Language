





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


console.log("This is my string".length);






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