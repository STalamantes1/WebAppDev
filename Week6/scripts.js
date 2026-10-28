// //Conditionals?
// //We need conditionals so our programs can make decisions 

// //Comparison Operators in JS 
// //=== strict equal 
// // !== Strict not equal 
// // > Greater than 
// // < less than 
// // >= greater than or equal to
// // <= less than or equal to 

// // console.log(5>3); //true
// // console.log(11===11); //true
// // console.log(11<5); //false

// //If/Else Basics 
// let score=85;
// if (score>=90){ //whatever is in between the () must be true in order for the statement in between the {} to run 
//     //first condition that is TRUE, will run 
//     console.log("You got an A! ")
// }
// else if(score>=80){ //This statement is true, so this else if will run 
//     console.log("You got a B")
// }

// else if(score>=70){
//     console.log("You got a C")
// }
// //ELSE runs when none of the if/else statements are triggered
// else {
//     console.log("You have an F")
// }

// //Nested IF Statements 
// //Nested if statement, is an IF within an IF 
// let age=25;
// let isMember=false;

// if (age>=18){
//     if(isMember){
//         console.log("Adult member benefits applied")
//     } else{
//         console.log("Adult, but not a member")
//     }
// } else{
//     console.log("minor")
// }


// Line-by-Line Explanation
// let age = 20;

// Creates a variable called age.

// Assigns the value 20 to it.

// This represents the person’s age.

// let isMember = true;

// Creates another variable called isMember.

// Sets its value to true.

// This represents whether the person has a membership (true = yes, false = no).

// if (age >= 18) {

// Checks if the person’s age is greater than or equal to 18.

// If age is 18 or older, the program goes inside this block.

// If not, it skips to the final else.

// if (isMember) { (nested inside the first if)

// Since the person is already confirmed to be an adult, this next check asks: “Are they also a member?”

// If isMember is true, it runs the code inside.

// console.log("Adult member benefits applied");

// If the person is both 18+ and a member, print this message.

// } else {

// If the person is an adult but not a member (isMember is false), run this instead.

// console.log("Adult, but no membership");

// Prints a different message for adults without membership.

// } else { (the outer else)

// If the very first condition (age >= 18) is false (meaning the person is under 18), skip all the inner checks and run this block.

// console.log("Minor");

// Prints “Minor” for anyone younger than 18.





//Making Programs more interactive with PROMPT()
let score=Number(prompt("Enter your grade: "))
//prompt() displays a popup asking for input 
//Input is a string, wrap with Number() for math/logic 
if (score >= 90) {
console.log("A");
} else if (score >= 80) {
console.log("B");
} else if (score >= 70) {
console.log("C");
} 
else if(score>=60){
    console.log("D")
}
else {
console.log("F");
}




//If/ELSE template 
if (condition) {
// code runs if the condition is true
console.log("Condition is true");
} else {
// code runs if the condition is false
console.log("Condition is false");
}

//IF ELSE Ladder
if (condition1) {
// code runs if condition1 is true
console.log("Condition 1 is true");
} else if (condition2) {
// code runs if condition2 is true
console.log("Condition 2 is true");
} else {
// code runs if none of the above are true
console.log("None of the conditions are true");
}

