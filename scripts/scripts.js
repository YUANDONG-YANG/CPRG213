/****************** YOUR NAME: YUANDONG YANG

/****************** create variables ******************/
/* create variables to hold the values for modelName and duration */

// INSERT YOUR CODE HERE
var model_name = '';
var duration_value = 0;




/****************** helper function ******************/
/* create a function called recalculate() which will
    - create a variable to represent the calculated-cost span element. That will look something like:
        // let costLabel = document.getElementById("calculated-cost");
    - check the value of the modelName variable, and use that to calculate the new total cost:
        e.g. if modelName is currently "XYZ", duration * 100 gives us the new total cost.
        if modelName is currently "CPRG", duration * 213 gives us the new total cost.
    - set the value of the calculated-cost element's innerHTML to this new value
*/

// INSERT YOUR CODE HERE
function calculateCost() {
    const costRates = {
        "Model XYZ": 100,
        "Model CPRG": 213
    };
    const newCost = costRates[model_name] ? duration_value * costRates[model_name] : 0;
    document.getElementById("calculated-cost").innerHTML = newCost;
}




/****************** model button logic ******************/

/* 
- first, create a variable to represent the "Switch Model" pseudo-button (hint: can use getElementById)
- second, create a function called changeModel() which checks the value of the model name variable. This function will:
    - create a variable to represent the model-text span element
    - if modelName is currently "XYZ", change the value of modelName to "CPRG", and change the innerHTML of the model-text span element to "Model CPRG"
    - if modelName is currently "CPRG", change the value of modelName to "XYZ", and change the innerHTML of the model-text span element to "Model XYZ"
    - then, recalculate() the total cost.
- finally, uncomment the following line of JavaScript to have this function run automatically whenever the pseudo-button is clicked: */
// modelButton.addEventListener("click", changeModel);

// INSERT YOUR CODE HERE

// Create a variable to represent the "Switch Model" pseudo-button
var model_button = document.getElementById('model-button');

// Create a function checks the value of the model name
function changeModel() {
    var switchModel = document.getElementById("model-text");
    model_name = switchModel.innerHTML === "Model XYZ" ? "Model CPRG" : "Model XYZ";
    switchModel.innerHTML = model_name;

    calculateCost();
}


// Have this function run automatically whenever the pseudo-button is clicked
model_button.addEventListener("click", changeModel);




/****************** duration button logic ******************/
/*  - first, create a variable to represent the "Change Duration" pseudo-button.
    - then, create a function called changeDuration() that will
        - create a variable to represent the duration-text span element
        - prompt() the user for a new duration
        - save the result of the prompt() to the duration variable
        - change the innerHTML of the duration-text span element to this new value
        - recalculate() the total cost/
    - finally, attach this function to the "Change Duration" pseudo-button, so it runs whenever the button is clicked.
*/

// Create a variable to represent the "Change Duration" pseudo-button.
var duration_button = document.getElementById('duration-button');

// Create a function to change the duration.
function changeDuration() {
    var newDuration_Value = prompt("Enter your duration:");
    document.getElementById("duration-text").innerHTML = newDuration_Value;
    duration_value = parseFloat(newDuration_Value); // Parse the value to ensure it's a number
    calculateCost();
}

// Attach the function to the "Change Duration" pseudo-button, so it runs whenever the button is clicked
duration_button.addEventListener("click", changeDuration);