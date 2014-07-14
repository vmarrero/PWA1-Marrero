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

            //check for victor
            var result = winnerCheck();
            console.log(result);
            if (result==="no winner")
            {
                round++;
                alert(playerOneName+":"+playerOneHealth+"  *ROUND "+round+" OVER"+"*  "+playerTwoName+":"+playerTwoHealth);

            } else{
                alert(result);
                break;
            };

          };
    };

    function winnerCheck(){
        var result="no winner";
        if (playerOneHealth<1 && playerTwoHealth<1)
        {
            result = "You Both Die";
        } else if(playerOneHealth<1){
            result =playerTwoName+" WINS!!!"
        } else if (playerTwoHealth<1)
        {
            result = playerOneName+" WINS!!!"
        };
       return result;
    };

    /*******  The program gets started below *******/
    fight();

})();