/********

 * Name: Vanessa Marrero
 * Assignment: "Week #3 :: { Homework } - THE DUEL #3 (90m)"
 * Date: 7/25/2014

 Part 3/3 of series
********/

// self-executing function for superhero fight calculator and results reporting
(function () {

    //reports "FIGHT!!!" to the console.
    console.log("|********** FIGHT!!! **********|");

    //this is setting and defining the DOM pieces that will be manipulated.
    var fighter1_txt = document.querySelector("#link").querySelector("p");
    var fighter2_txt = document.querySelector("#zelda").querySelector("p");
    var round_txt = document.querySelector("h5");
    var button = document.getElementById("fight_btn");
    
    //the fighters array stores objects that contain keys relating to individual fighter's names, the maximum damages they cause per round and their healths.
    var fighters = [{
            name: 'Link', 
            damage: 20, 
            health: 100
        },
        {
            name: 'Zelda', 
            damage: 20, 
            health: 100
        }]; 

    //sets and initializes value for the 1st round
    var round = 1;
    
    //initializing DOM innerHTML for the top of the HTML page. This is the default text.
    round_txt.innerHTML = "Click the FIGHT BUTTON to Start!";
    fighter1_txt.innerHTML = "<b>" + fighters[0].name + "</b>: <span style = 'color: #558151; text-shadow: 2px 0px #ccc;'> " + fighters[0].health + "</span>";
    fighter2_txt.innerHTML = "<b>" + fighters[1].name + "</b>: <span style = 'color: #558151; text-shadow: 2px 0px #ccc;'>" + fighters[1].health + "</span>";

    //fight function which determines how much damage each player receives during a round and reduces their healths accordingly.
    function fight() {
        //the HTML to tell the user what the names and healths of both fighters are at the beginning of the fight using array access notation and dot notation to access the values of the object keys.
        fighter1_txt.innerHTML = fighters[0].name + ":" + fighters[0].health;
        fighter2_txt.innerHTML = fighters[1].name + ":" + fighters[1].health;

        //determines the minimum damage each player will deal in a round and stores the results
        var minDamage1 = fighters[0].damage * .5;
        var minDamage2 = fighters[1].damage * .5;
			
		// this calculates the damage a player will deal in a round: random damage formula = Math.floor(Math.random() * (max - min) + min) || random damage formula === "Round number to the nearest integer"("Generate a random number between 0 and 1" times (max damage that can be dealt - minimum damage that can be dealt) plus 10)
        var f1 = Math.floor(Math.random() * (fighters[0].damage - minDamage1) + minDamage1);
        var f2 = Math.floor(Math.random() * (fighters[1].damage - minDamage2) + minDamage2);

        //subtracts the damage value dealt in the round from each player and stores the new values for each player's health back into the objects' keys in the array. This is playerOneHealth-=f2 and playerTwoHealth-=f1 because each player is dealing damage to the other not to themselves.
        fighters[0].health -= f2;
        fighters[1].health -= f1;
			
        //reports to the console the current round in the fight
        console.log("~ Round " + round + " Results ~");
        
        //reports to the console the player's name and their health after a round using array access notation and dot notation for the object.
        console.log(fighters[0].name + ": " + fighters[0].health + " | " + fighters[1].name + ": " + fighters[1].health);

        //checks for the victor of the fight by running the winnerCheck() function at the end of each round and stores the value that was output by the function into a variable
        var result = winnerCheck();
        
        //reports to the console the results of the round in the fight or the fight itself depending on the value of the variable.
        console.log("Verdict = " + result);
            
        //once the fight starts, the HTML on the page prompting to start the fight changes to a title announcing the results of the round and overall fight.
        round_txt.innerHTML = "ROUND #" + round + " Results:";
        
        //the round is incremented by 1.
        round++;
        
        //if the result of the round is that neither player won -
        if (result === "no winner") {    
                //the user is alerted of both players' healths at the end of the round by having the new values that have been stored be displayed dynamically on the page.
                fighter1_txt.innerHTML = "<b>" + fighters[0].name + "</b>: <span style = 'color: #558151; text-shadow: 2px 0px #ccc;'>" + fighters[0].health + "</span>";
                fighter2_txt.innerHTML = "<b>" + fighters[1].name + "</b>: <span style = 'color: #558151; text-shadow: 2px 0px #ccc;'>" + fighters[1].health + "</span>";
                //otherwise if there is a result other than "no winner" 
            } else {
            //alert the user through the page of the result of the fight.
                fighter1_txt.innerHTML = "<b><span style = 'color: #558151; text-shadow: 2px 0px #ccc;'>" + result + "</span></b>";
                fighter2_txt.innerHTML = "";
				
                //this disables the button/event after the fight is over.
                button.removeEventListener("click", fight, false);
                
                //this changes the text in the fight button to show the fight is done.
                document.querySelector('.buttonstyle').innerHTML = "DONE!";
            }
    }
    
    //function that checks for the winner of the fight depending on the player's health.
    function winnerCheck() {
        
	   //result is defaulted to "no winner"
        var result = "no winner";
        
        //if both players' healths are less than 1 or equal to 0 or less, then both players die at the end of the round.
        if (fighters[0].health < 1 && fighters[1].health < 1) {
            result = "Both Fighters Die!";
            
		//otherwise if player 1's health is less than 1 or equal to 0 or less, then player 2 is declared the winner of the fight.
        } else if (fighters[0].health < 1) {
            result = fighters[1].name + " WINS!!!";
            
		//otherwise if player 2's health is less than 1 or equal to 0 or less, then player 1 is declared the winner of the fight.
        } else if (fighters[1].health < 1) {
            result = fighters[0].name + " WINS!!!";
        }
		//return the value of the result variable outside of the function.
        return result;
    }

    /*******  The program gets started below where it is invoked *******/
    fight();

})();