/**
 * Name: Vanessa Marrero
 * Assignment: "Week #1 :: { Homework } - ANALYZE Duel #1 (4h)"
 * Date: 7/11/2014

 Assignment 1
 Part 1/3 of series
*/

// self-executing function for superhero fight calculator and results reporting
(function(){
	//reports "FIGHT!!!" to the console.
    console.log("FIGHT!!!");

    //sets and initializes values for players' names
    var playerOneName = "Spiderman";
    var playerTwoName = "Batman";

    //sets and initializes values for the maximum damage each player causes per round
    var player1Damage = 20;
    var player2Damage = 20;

    //sets and initializes values for players' healths
    var playerOneHealth = 100;
    var playerTwoHealth = 100;

    //sets and initializes value for the 1st round
    var round=0;

    //fight function which determines how much damage each player receives during a round and reduces their healths accordingly.
    function fight(){
        //alerts to the user the name and health of player 1 and 2 at the beginning of the fight
        alert(playerOneName+":"+playerOneHealth+"  *START*  "+playerTwoName+":"+playerTwoHealth);
        //for loop which is calculating the damage a player gives and sustains in a round - which will be a random number.
		//the round is set to 0 and the loop will continue to run, incrementing the number of the round by 1 each time it cycles through, until there has been a winner or 10 rounds - 9 completed.
        for (var i = 0; i < 10; i++)
        {	
			//the minimum damage each player will deal in a round
            var minDamage1 = player1Damage * .5;
            var minDamage2 = player2Damage * .5;
			
            // this calculates the damage a player will deal in a round: random damage formula = Math.floor(Math.random() * (max - min) + min) || random damage formula === "Round number to the nearest integer"("Generate a random number between 0 and 1" times (max damage that can be dealt - minimum damage that can be dealt) plus 10)
            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2);

            //subtracts the damage value dealt in the round from each player and stores the new values for each player's health; I believe this should be playerOneHealth-=f2 and playerTwoHealth-=f1 because technically as it's written now, each player is dealing damage to themselves.
            playerOneHealth-=f1;
            playerTwoHealth-=f2;
			
			// reports to the console the player's name and their health after a round.
            console.log(playerOneName+": "+playerOneHealth + " " + playerTwoName+":"+playerTwoHealth);

//checks for the victor of the fight by running the winnerCheck() function at the end of each round and stores the value that was output by the function into a variable
            var result = winnerCheck();
			//reports to the console the results of the round in the fight or the fight itself depending on the value of the variable.
            console.log(result);
			//if the result of the round is that neither player won -
            if (result==="no winner")
            {
				//the round is incremented by 1.
                round++;
				//the user is alerted of both players' healths at the end of the round 
                alert(playerOneName+":"+playerOneHealth+"  *ROUND "+round+" OVER"+"*  "+playerTwoName+":"+playerTwoHealth);
			//otherwise if there is a result other than "no winner" -  
            } else{
				//alert the user of the result of the round or fight
                alert(result);
				//break out of the function if the fight is over before 10 rounds are reached
                break;
            };

          };
    };

//function that checks for the winner of the fight depending on the player's health.
    function winnerCheck(){
		//result is defaulted to "no winner"
        var result="no winner";
		//if both players' healths are less than 1 or equal to 0 or less, then both players die at the end of the round.
        if (playerOneHealth<1 && playerTwoHealth<1)
        {
            result = "You Both Die";
		//otherwise if player 1's health is less than 1 or equal to 0 or less, then player 2 is declared the winner of the fight.
        } else if(playerOneHealth<1){
            result =playerTwoName+" WINS!!!"
		//otherwise if player 2's health is less than 1 or equal to 0 or less, then player 1 is declared the winner of the fight.
        } else if (playerTwoHealth<1)
        {
            result = playerOneName+" WINS!!!"
        };
		//return the value of the result variable outside of the function.
       return result;
    };

    /*******  The program gets started below where it is invoked *******/
    fight();
//end of self-executing function
})();