// SECTION ONE

// What does the acronym DRY stand for? Why should we pay attention to it? What programming tools have we learned to write DRY code?
// DRY stands for "Dont Repeat Yourself". Paying attention to DRY will keep things organized and allow you to go back and change something once rather than going to a number of different areas to change one thing.

// What is the difference between const and let and var? Please limit your answer to no more than three short sentences. Don't be afraid to research using google and other resources
// const is used for a variable that wont change or be updated. let is used for a variable that can be updated, var is similar to const but can be updated and changed. Var often causes crashes and bugs if not used properly.

// SECTION TWO

// Using the provided variable definitions, replace the blanks (underscores) with a mathematical or boolean operator that evaluates the expression to true (some may have more than one right answer, just choose one)

// Test your answers by using console.log for each expression in your answer file.

let a = 4;
let b = 53;
let c = 57;
let d = 16;
const e = 'Kelvin';
const f = false;
var g = b+c;

const expression = a < b && c > d && "Name" === "Name" && a < b < c && e === 'Kelvin' && 48 == "48" && f !== e 
console.log(expression)
console.log(g)

// a _ b
// c _ d
// 'Name' _ 'Name'
// a _ b _ c
// a _ a _ d
// e _ 'Kevin'
// 48 _ '48'
// f _ e
// Set a new variable g to 0
// console.log g
// Then set the variable g to be equal to b + c
// console.log g


// Did you use const, let or var? Why did you choose the one you chose
//I used all three, i used let for the numbers because const is not used for numbers. I used const for 'kevin' and false because those two have no need to be changed. the var was used because everything about the variable could change.

// What happens if you don't use const , let or var? Do you get an error? If so what does it say?
// i went ahead and took away all of the var, const, and let and ran the code, it still ran correctly.

// what happens if you write 10 = g?
//// i got false back when i ran the code in the terminal.

//Bonus Challenge (optional): Replace the underscores to make a Boolean expression that evaluates to true. Use no more than one of the following: > , < !== and ===.
//a _ (b || f) _ f && e < c
//a < (b || f) !== f && e < c

// SECTION THREE

//Is the code below an infinite loop? Why or why not?
// while (true) {
// 	console.log('Do not run this loop');
// }
// Yes because there is not a function to determine if it is true or false so this loop could run on and on and on and on and on.

// is this loop below an infinite loop? Why or why not?
// const runProgram = true;

// while (runProgram) {
// 	console.log('Do not run this loop');
// 	runProgram = false;
// }
//this is not an infinite loop because you have a const variable

//Infinite or not infinite? What is the expected output?
// this loop will come back as an error because they both do not = to the same value

let letters = "A";
let i = 0;
// if "i" is less than twenty do whats below
while (i < 20) {
// this line is saying if letters (which is "A") is equal to letters plus "A" run the next line of the loop.
	letters += "A";
// after each run of the loop add one to "i"   
	i++;
// closes the while loop
}
// is telling the computer to run loop which will send an output of "A" until it is no longer less than twenty
console.log(letters);

// i thought when i ran the code i would get back 19 "A"s but instead i got 21. i < 20 means that the loop will keep going until it is MORE than 20. me thinking it was going to be 19 was incorrect because it still had 20 which is equal to 20 then finally 21 which is the first number to stop the loop because it is the first number greater than 20


// SECTION FOUR

// A for loop performs the same operation as a while loop. But what are the key differences, if any? What are the similarities?
//  both loops are used to repeat a set of instructions until it says stop. a for loop however is used when you know how many times you want the loop to run for. a while loop is used when you are not sure how many times the loop will will.

// for (let i = 0; i < 100; i++) {
// 	console.log('Without you, today\'s emotions are the scurf of yesterday\'s');
// }
// What are the three components of the control panel? 
// The first part of the control panel is: let i = 0
// The second part of the control panel is: i < 100
// The third part of the control panel is: i++

// Write a for loop that will console.log the numbers 0 to 999.
for (let i = 0; i < 1000; i++) {
	console.log(i);
}

// Bonus Challenge (optional):

// What is the difference between \ (backslash, above the enter/return key) and / (forward slash or just slash, shares the key with the ?)? What is \ doing in the string?
//   console.log('Without you, today\'s emotions are the scurf of yesterday\'s');
//   console.log("Without you, today's emotions are the scurf of yesterday's");
// i did some research on this so because i did not know the answer to this. a forward slash (/) is used as a sign for division and also a delimiter in an expression. a backward slash (\) is used to escaped special characters in strings.
// FROM THE WEB In the example code you provided, the backslash is used to escape the single quote character ' in the string literal, so that the string can be properly enclosed in single quotes without causing a syntax error. The following two statements are equivalent and will both output the same string to the console. (Without you, today's emotions are the scurf of yesterday's)

// Using a postfix operator i-- instead of i++, write a for loop that iterates in reverse. Console.log a countdown from 999 to 0.
for (let i = 999; i > -1; i--) {
	console.log(i);
}

// Write a for loop that uses string concatenation to send a message to the console as well as the current value of i.

// The loop should run from 1 to 10.

// Expected Result:
// The value of i is: 1 of 10
// The value of i is: 2 of 10
// The value of i is: 3 of 10
// The value of i is: 4 of 10
// The value of i is: 5 of 10
// The value of i is: 6 of 10
// The value of i is: 7 of 10
// The value of i is: 8 of 10
// The value of i is: 9 of 10
// The value of i is: 10 of 10

for (let i = 1; i < 11; i++) {
	console.log ("The value of i is: " , i , " of 10");
}

// BONUS Rewrite the above loop using String Interpolation/Template Literals instead of concatenation
// did have help from online research on String Interpolation
for (let i = 1; i < 11; i++) {
	console.log (`The value of i is: ${i} of 10`);
}

//const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];
// Iterate over the StarWars array and print each element to the console.
// took me a while to figure out the console.log for this. start with just (StarWars) then went to (i) then resulted in doing some research.
const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];
for (let i = 0; i < StarWars.length; i++) {
	console.log(StarWars[i]);
}
// Iterate over the StarWars array again and print each character's name as well as the value of i

const StarWars2 = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];
for (let i = 0; i < StarWars2.length; i++) {
	console.log(`Character ${StarWars2[i]}'s index value is ${i}`);
}
	

// Bonus Figure out how to iterate over every second element of the StarWars array, starting with the first element. => Han, R2D2, Leia
// had to do research on the third part of the control panel to make it skip over every other one
const StarWars3 = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];
for (let i = 0; i < StarWars3.length; i += 2) {
	console.log (StarWars3[i]);
}



