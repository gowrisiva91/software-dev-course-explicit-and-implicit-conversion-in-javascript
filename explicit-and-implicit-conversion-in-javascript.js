/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


// Part 1: Debugging Challenge


let result = "5" - 2; 
console.log("The result is: " + result);
console.log("Type of result:", typeof result); 


let isValid = Boolean("false"); 
console.log("Before fix, isValid:", isValid); 


isValid = ("false" === "true"); 
if (isValid) {
    console.log("This is valid!");
} else {
    console.log("This is NOT valid!"); 
}
console.log("After fix, isValid:", isValid); 
console.log("Type of isValid:", typeof isValid); 


let age = "25";
let totalAge = Number(age) + 5; 
console.log("Total Age: " + totalAge); 
console.log("Type of totalAge:", typeof totalAge); 
