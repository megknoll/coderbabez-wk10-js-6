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

If/else statements let us branch our code so it does different things depending on state.

What are a few examples of this on a real website?

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

Complete the weather page project in the homework folder. Instructions are in the javascript file.

# Reference:

* https://www.w3schools.com/js/js_variables.asp
* https://www.w3schools.com/js/js_functions.asp
* http://api.jquery.com/val/
