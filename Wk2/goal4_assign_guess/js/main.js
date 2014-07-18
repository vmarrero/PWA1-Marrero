/**
 * GUESSING GAME:
 *
 * Created By: Vanessa Marrero
 * Date: 7/17/2014
 * 
 * GUESSING GAME
 */

//Game variables
(function () {

// this function creates and outputs a random number within a range after it's stored in a variable.
var getNum = function (min, max){
    
    //the max parameter is +1 of the actual max of the range of numbers.
    
    //this variable stores a random integer within the range set by the parameters.
    compNum = Math.floor(Math.random() * (max-min) + min);
    
    // maxValue = roundDown(.99 * (11-1) + 1) === roundDown(10.9) === 10
    //minValue = roundDown(.01 * (11-1) + 1) === roundDown(1.1) === 1 
    
    //this is returning the variable outside of the function          
    return compNum;
};         

//this is calling the getNum function
getNum(1, 11);

//this is reporting to the browser the random number
console.log('This is the random number the Player has to guess:', compNum);

//an object literal that references the DOM(html) elements.
 var dom = {
    input: document.querySelector("#input"),
    output: document.querySelector("#output"),
    button: document.querySelector("button"),
 };

//testing out to make sure the values & keys of object are accessible
console.log('DOM Object: ', dom);
for (var key in dom){
    console.log('DOM Object - Key:', key, '- Value:' + dom.input);
};

//function that will run onClick
var guess = function (){
    
    //storing the user input into a variable after changing it to an integer    
    playersGuess = parseInt(dom.input.value);
    //testing out to make playersGuess variable is being stored correctly.
    console.log('The Player\'s guess was: ', playersGuess);
    
    //depending on the user's guess, it displays the appropriate message in the HTML.
    if (playersGuess > compNum){
        //if the guess is higher than the random number then it displays the appropriate message in the HTML.
        dom.output.innerHTML = 'Your guess is too high!';        }else if (playersGuess < compNum){
        //if the guess is lower than the random number then it displays the appropriate message in the HTML.
        dom.output.innerHTML = 'Your guess is too low!';
    } else{
        //if the guess is the random number then it displays the appropriate message in the HTML.
        dom.output.innerHTML = 'Your guess is right! Congratulations!';
    }
    
        //this function validates the user's input
        (function validateInput (){
        //if the number the user enters is not a number (as in a letter or nothing) or is less than 1 or is more than 10 -     
        if(isNaN(playersGuess) || playersGuess < 1 || playersGuess > 10){
        //the innerHTML of the output key value will display the appropriate message
        dom.output.innerHTML = 'Put in a number between 1 and 10!';
    };

    })();
    
};

//An .addEventListener event listener on the guess button to listen for a click event and when it happens run the function guess; the handler is executed in the bubbling phase.
dom.button.addEventListener('click', guess, false);
    
})();