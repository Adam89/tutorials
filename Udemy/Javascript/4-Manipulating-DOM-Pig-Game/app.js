/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he wishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

lecture 1 what we will learn
how to create our fundamental variables
how to generate random number
how to manipulate the dom
how to read the dom
how to change css
*/

/* 
lecture 2 what we will learn 
	how to set yo an event handler
	what a callback function is
	what an anonymous function is
	another way to select elements by id
	how to change the image in img element
*/

/* 
lecture 3 what we will learn
what the ternary operator is
how to remove add and toggle html classes
*/

/* 
lecture 4 
How to use functions to correctly apply the dry principle 
How to think about the game like a programmer
*/

/* lecture 5 
	init game function setting everything
*/

/* lecture 6 
	final touches fixing the roll after winner decided
	what a state variable is and how to use it
	state variable tells us the condition of our system is the game still playing or finished
*/


var scores, roundScore, activePlayer, gamePlaying;


function init() {

    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

}

init();


// document.querySelector('#current-' + activePlayer).textContent = dice; // type coercion allows current to associate to all html this is a setter because we set a value

// document.querySelector('#current-' + activePlayer).innerHtml = '<em>'+ dice + '</em>';

// var x = document.querySelector('#score-0').textContent; // this is a getter because we get a value


// document.querySelector('.btn-roll').addEventListener('click', btn); // callback function btn is called from the click 

// function btnClick() {
// 	//do something
// }
// btn();

document.querySelector('.btn-roll').addEventListener('click', function() { // anoymous function written within an event handler
    //state variable 

    if (gamePlaying) {

        // 1. randomize number

        var dice = Math.floor(Math.random() * 6) + 1;
        // 2. display result
        var diceDom = document.querySelector('.dice');

        diceDom.style.display = "block";

        diceDom.src = 'dice-' + dice + '.png'; // updates image
        // 3.update round score if the rolled number is not a 1 

        if (dice !== 1) { // if dice is not 1 difference operator not affected by type coercion
            //add score
            roundScore += dice; // same as writing roundscore = roundScore + dice 
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
        }

    }

});


document.querySelector('.btn-hold').addEventListener('click', function() {
    //add current score to global score
    //update the UI
    //check if player won the game
    if (gamePlaying) { // state variable if statement

        scores[activePlayer] += roundScore;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        if (scores[activePlayer] >= 10) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            nextPlayer();
        }
    }

});


function nextPlayer() { // using this function elsewhere sticking to D.R.Y
    ///next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; // if 0 then active player should be 1 else active player  = 0 ternary operator 
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    // document.querySelector('.player-0-panel').classList.remove('active');
    // document.querySelector('.player-1-panel').classList.add('active');
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);
