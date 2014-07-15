/*
     Name: Vanessa Marrero
     Date: July 10, 2014
     Class & Section:  PWA1-1
     Comments: "Goal 2: Assignment JS Practice"
 */


// self-executing function
(function(){

    /*******************************************

     STUDENTS ASSIGNMENT

     1.  create a function named 'avgNumbers'
         - accept 1 parameter into the function that will be an array of unlimited numbers
         - find the average of all the numbers
         - return the average from the function
         - console.log the answer outside of the function

     2.  create a function named 'fullName'
         - accept 2 parameters into the function that are strings (firstname and lastname)
         - return the name after it has been concatenated
         - console.log the answer outside of the function

     3.  create a function named 'wordCount'
         - accept 1 parameter into the function that is a long string of text words
         - create a function that counts all the words and return the answer
         - console.log the answer outside of the function

     4.  create a function named 'charCount'
         - accept 1 parameter into the function that is a long string of text
         - return length of the array of string characters
         - console.log the answer outside of the function

     5.  create a function named 'vowelsInWord'
         - accept 1 parameter into the function that is a a one word string
         - return the number of vowels in the word
         - console.log the answer outside of the function

     6.  create a function named 'findNum'
         - accepts 2 parameters into the function - 1. array of numbers, 2. boolean
         - if the second parameter being passed is "false" or null then
             - create an array with all of the odd numbers from
                the array
         - else - create an array with all of the even numbers
            from the array
         - return the array
         - console.log the answer outside of the function
     ********************************************/

    console.log('------ Goal2: Assignment: JavaScript Practice ----------');

    console.log("1. avg of an array of numbers");
    
    /*** 
The function goes through each array index number, takes the value of that index number and adds it the sum. After which, it divides the final sum by the length of the array and returns the average outside the function.
    ***/
    
    var avgNumbers = function(arr){

        // Average = Sum of Numbers / Amount of Numbers
        
        var sum = 0;
        
        for(i=0; i<arr.length; i++){
            sum += parseInt(arr[i], 10)
        };
   
        
        var avg = sum / arr.length; 
        return avg;
    
    };

    console.log('avg number = ', avgNumbers([1,2,3,4,5]));

    //--------------------------------------------------------
    console.log("2. concat first and last name");

    /*** 
The function accepts 2 string parameters for the first name and last name. It takes those values and concatenates them with a space in the middle and returns the final value outside of the function.
    ***/

        var fullName = function (firstName, lastName) {
            var completeName = firstName + " " + lastName;
            return completeName;
        }

    console.log(fullName('James', 'Bond'));

    //--------------------------------------------------------
    console.log("3. word count");
        
    /*** 
The function has a parameter that accepts a string of words that has been split into an array of substrings. The function determines the length of the array and returns the value.
    ***/

    var ipsum = "this is test text that is being used as input to a function";

    console.log("This is the string:", ipsum);
   
    var ipsum = ipsum.split(" ");
    
        function wordCount (words) {

            ipsum = words.length;
            return ipsum;
        }
    
    console.log("Words in the string:", wordCount(ipsum));  

    //--------------------------------------------------------
    console.log("4. sentence char count");
    
    /*** 
The function has a parameter that accepts a string of words, determines the number of characters and returns the value.
    ***/

    var ipsum = "this is test text that is being used as input to a function";

    console.log("This is the string:", ipsum);
    
        function charCount (words) {
            
            ipsum = words.length;
            return ipsum;
        }
    console.log("Amount of characters in the sentence:", charCount(ipsum));

    //--------------------------------------------------------
    console.log("5. how many vowels in a word");

    /*** 
The function has a parameter that accepts a string, searches it for a match against an expression (vowels) and returns each match into an array. The length of the array is then returned out of the function.
    ***/

    console.log("The word is: JavaScript");
        
    function vowelsInWord(word){
        
        vowels = word.match(/[a,e,i,o,u]/g);
        vowels = vowels.length;
        return vowels;

    };

    console.log("Amount of vowels in the word:", vowelsInWord('JavaScript'));

    //--------------------------------------------------------
    console.log("6. find number and create an array of even or odd numbers");

        //PUT FUNCTION HERE

    console.log(findNum([31,22,4,67,83,6,5,4]));
    console.log(findNum([31,22,4,67,83,6,5,4], false));

})();