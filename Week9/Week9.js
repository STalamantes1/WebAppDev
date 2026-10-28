//Week 9
//What is a function? 
//A function is a reusable block of code designed to perform a specific task 
//Mini program inside your larger script 

// function greetuser(){
//     console.log("Hello there!")
// }

// greetuser(); //Calls (executes) the function 


//Function Structure 
// FUNCTION, tells JS we're defining a function.       function greetuser(name)
//Name, identifies the function                        greetuser
//Parameters, variables inside the parentheses that recieive data (name)
//Body, the code between the {} that runs when called   {console.log("Hello there")}


//Why use functions? 
//Avoid repetition, write the logic once, use it anywhere 
//Organization, keeps long scripts tidy and readable 
//Testing, easier to isolate and debug 
//Scalability, makes large projects modular 


//Parameters and Arguments 
//Parameters=placeholders when defining a function 
//Arguments=actual values when calling the function 

// function greet(name){ //name is the parameter 
//     console.log("Hello "+ name);
// }
// greet("Sebastian"); //Sebastian is the argument 

//Return vs Console Output 
 //function that adds 2 numbers together 
//  function addNumbers(a,b){
//     return (a+b);
//  }
//  let total=addNumbers(4,6)
//  console.log("The total is: "+ total)

 //Return, send a value back to where the function was called 
 //console.log() just prints 

 //return is like your function handing you back a note with the answer written on it 
 //console.log() is your function yelling the answer out loud, we hear it, but we cant use it again 

//  function multiply(x,y){
//     return x*y;
//  }
//  let result=multiply(4,3);
//  console.log(result);

 //Functions with loops and conditionals 
 //Functions can contain logic like if/else and for loops 

//  function counttoN(n){
//     for (let i=1; i<=n; i++){
//         console.log(i);
//     }
// }
// counttoN(5)

//Nested Functions 
// A function can call another function inside it 
// function square(num){
// //     return num*num;
// // }
// // function printSquare(num){
// //     console.log("Square is: "+ square(num));
// // }

// // printSquare(6);




//Adding user input with prompt()
// function greetuser(){
//     let name=prompt("Whats your name? ");
//     console.log("Welcome,"+ name+"!")
// }
// greetuser();


//Key Concepts
//Functions are reusable building blocks 
//Use parameters and returns effectively
//Always comment what a function does 
//Keep each function focused on a single task 
//User prompt() to make your functions interactive 