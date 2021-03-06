/**
 * Name: Vanessa Marrero
 * Assignment: "Week #2 :: { Homework } - DEVELOP Duel #2 (75m)"
 * Date: 7/18/2014

 Part 2/3 of series
*/

// self-executing function for superhero fight calculator and results reporting
(function(){
	//reports "FIGHT!!!" to the console.
    console.log("FIGHT!!!");
    
    //these arrays store the fighters' names, the maximum damages they cause per round and their healths.
    var fighter1 = ['Spiderman', 20, 100];
    var fighter2 = ['Batman', 20, 100];

    //sets and initializes value for the 1st round
    var round=0;

    //fight function which determines how much damage each player receives during a round and reduces their healths accordingly.
    function fight(){
        //alerts to the user the name and health of player 1 and 2 at the beginning of the fight using array access notation.
        alert(fighter1[0]+":"+fighter1[2]+"  *START*  "+fighter2[0]+":"+fighter2[2]);
        //for loop which is calculating the damage a player gives and sustains in a round - which will be a random number.
		//the round is set to 0 and the loop will continue to run, incrementing the number of the round by 1 each time it cycles through, until there has been a winner or 10 rounds - 9 completed.
        for (var i = 0; i < 10; i++)
        {	
			//determines the minimum damage each player will deal in a round and stores the results
            var minDamage1 = fighter1[1] * .5;
            var minDamage2 = fighter2[1] * .5;
			
			// this calculates the damage a player will deal in a round: random damage formula = Math.floor(Math.random() * (max - min) + min) || random damage formula === "Round number to the nearest integer"("Generate a random number between 0 and 1" times (max damage that can be dealt - minimum damage that can be dealt) plus 10)
            var f1 = Math.floor(Math.random()*(fighter1[1]-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(fighter2[1]-minDamage2)+minDamage2);

            //subtracts the damage value dealt in the round from each player and stores the new values for each player's health back into the fighter's array using array access notation. This should be playerOneHealth-=f2 and playerTwoHealth-=f1 because each player is dealing damage to the other not to themselves.
            fighter1[2]-=f2;
            fighter2[2]-=f1;
			
			// reports to the console the player's name and their health after a round using array access notation.
            console.log(fighter1[0]+": "+fighter1[2]+ " " + fighter2[0]+":"+ fighter2[2]);

            //checks for the victor of the fight by running the winnerCheck() function at the end of each round and stores the value that was output by the function into a variable
            var result = winnerCheck();
			//reports to the console the results of the round in the fight or the fight itself depending on the value of the variable.
            console.log(result);
			//if the result of the round is that neither player won -
            if (result==="no winner")
            {
				//the round is incremented by 1.
                round++;
				//the user is alerted of both players' healths at the end of the round using array access notation
                alert(fighter1[0]+":"+fighter1[2]+"  *ROUND "+round+" OVER"+"*  "+fighter2[0]+":"+fighter2[2]);
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
        if (fighter1[2]<1 && fighter2[2]<1)
        {
            result = "You Both Die";
		//otherwise if player 1's health is less than 1 or equal to 0 or less, then player 2 is declared the winner of the fight.
        } else if(fighter1[2]<1){
            result =fighter2[0]+" WINS!!!"
		//otherwise if player 2's health is less than 1 or equal to 0 or less, then player 1 is declared the winner of the fight.
        } else if (fighter2[2]<1)
        {
            result = fighter1[0]+" WINS!!!"
        };
		//return the value of the result variable outside of the function.
       return result;
    };

    /*******  The program gets started below where it is invoked *******/
    fight();

})();