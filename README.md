# CoderBabez

##  Week Eight - If Statments Review

### Objectives
Understand the purpose and use of if statements, logical operators, and comparison operators.  

### Vocab
* If/else statements
* Comparison operators
* Logical operators

### Practice - Review

What will log to the console in the following pieces of code?
How can we improve the if statement in Question #1?
Question #1:
```
x = 70;

if (x > 10) {
  console.log("middle");
} else if (x > 50) {
  console.log("high");   
} else {
  console.log("low");
}
```

Question #2:
```
x = "raining";
y = 80;

if (x === "raining" && y < 50) {
  console.log("the worst");
} else if (x === "raining" || y < 50) {
  console.log("meh");   
} else {
  console.log("nice day");
}
```

### Lesson - Review

If/else statements let us branch our code so it does different things depending on state. What are a few examples of this on a real website?

Syntax:

```
if (CONDITION) {

} else if (CONDITION) {

} else {

}
```

The basic rules:
* We always start with an `if`! The `if` has a `condition` in parentheses, and code to execute in curly braces. We only execute the code if the condition is true.
* Optional: If we need to test for more than one condition, we can also include as many `else if`s as we want AFTER the if statement. The code between the curly braces executes only if the `else if` condition is true.
* Optional: we can include ONE `else` at the end - this is the default. The code between the curly braces executes only if none of the `if` or `else if` conditions are true.
* Condition expressions must always evaluate to TRUE or FALSE - this type of data is called a BOOLEAN. What are the other two types of data we've used so far?

Check for understanding:
* How many "if" blocks can we have in an if statement? What happens if we put two if blocks after each other like this:
```
if (TRUE) {
  // jump
}
if (TRUE) {
  // walk
}
```
* What happens if we change that second if to an else?
```
if (TRUE) {
  // jump
} else {
  // walk
}
```
* What happens if it's an else if?
```
if (TRUE) {
  // jump
} else if (TRUE) {
  // walk
}
```
##### Simple Conditions Using Comparison Operators

Comparison Operators:
* >
* <
* ===
* >=
* <=
* !==

Syntax:
```
expression > expression

7 > 8
x > 20
"raining" === "sunny"
"five" !== 5
9 >= 9
```

Check for understanding:
```
x = 9;
if ( x > 12) {
  // walk
} else if ( 13 <= 12) {
  // jog
} else if ( TRUE !== FALSE ) {
  // run
}
```

##### Complex Conditions Using Logical Operators

Logical Operators:
* &&
* ||
* !

The basic rules:
* AND evaluates to TRUE if all conditions are TRUE
* OR evaluates to TRUE if one or more conditions are TRUE
* NOT evaluates to TRUE if the condition is FALSE

Syntax:
```
(8 < 9) && (9 > 10)
(8 < 9) || (9 > 10)
!(8 < 9)
!((8 < 9) || (9 > 10))
```

Check for understanding // Practice with Truth Tables!

(X > 50) && (y !== "raining")

| x > 50        | y !== "raining" | Result |
| ------------- |-----------------| -------|
| T             | T               |        |
| T             | F               |        |
| F             | T               |        |
| F             | F               |        |

(X > 50) || (y !== "raining")

| x > 50        | y !== "raining" | Result |
| ------------- |-----------------| -------|
| T             | T               |        |
| T             | F               |        |
| F             | T               |        |
| F             | F               |        |

### Project

We're making an age gate! And we're going to take some time to practice our HTML and CSS as well.

##### In the HTML create three sections.

In section one:
* A paragraph that says "Enter your age"
* An input box
* A button that says Submit

In section two:
* A paragraph that says "Sorry - you must be over 21 to see this image"

In section three:
* A paragraph that says "Congrats!"
* An image with an empty src tag

##### In the CSS

Style the 2nd and third sections so they are centered with margin between them. Make the second section red, and the third section green.

##### In the javascript

* On page load, hide sections 2 & 3
* Create a function called oldEnough that takes one parameter. If the parameter / age is 21 or greater return true, otherwise return false.
* Create a click handler. When the button is clicked, get the value from the input box, and store it in a variable. Then call the oldEnough function with that value.
* If the oldEnough function says the user is too young, show section two, otherwise show section three and call the revealImage function.

### Homework

Complete all the if statement activities from this and last week, including choose your own adventure.
If you're done, do the weather app project in the homework folder. 

# Reference:

* https://www.w3schools.com/js/js_variables.asp
* https://www.w3schools.com/js/js_functions.asp
* http://api.jquery.com/val/
