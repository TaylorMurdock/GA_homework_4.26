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


// Did you use const, let or var? Why did you choose the one you chose?
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