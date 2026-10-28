// console.log("Linked")
// //Loops Notes
//What if we need to repeat the same block of code 100 times? 

//Why loops?
//Loops let us repeats tasks without duplicating code

//Common use cases
// Counting through numbers
//Repeating actions through user input 
//building patterns
//etc 

//WHILE Loop
// while(condition){
//     //code to run repeatedly
// }

//as long as the condition is true, loop runs
//INFINITE LOOP risk: make sure something inside the condition changes 

// let count=1;
// while(count<=5){
//     console.log("Count is: "+count);
//     count++;
// }

//let count=1, initialize loop control variable 
// while (count<=5), check condition
// console.log(...), body executes each iteration 
//count++, this is how we increment to avoid our infinite loop 

//FOR LOOP 
// for (initialization; condtion;final-expression){
//     //repeated code
// }

//For loop is most common for couting loops 
//Initialization -> Condition Check -> Body -> Increment -> Repeat
//  for(let i=1; i<=5; i++){
//     console.log("i is: "+ i);
//  }

 // let i=1, start at 1
 // i<=5, stop when greater than 5 
 //i++, step by 1 each time 

 //Why for is cleaner: All loop logic in one line, easier to read

//  let num=Number(prompt("Pick a number: "));
//  for (let i=1; i<=num; i++){
//     console.log(i);
//  }
 //loop length depends on the user input 


 //Pattern Building with Loops  
 //Classic triangle loop 

 let triangle=""; 
 for(let line=1; line<=7; line++){
    triangle+="#";
    console.log(triangle);
 }