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

})();