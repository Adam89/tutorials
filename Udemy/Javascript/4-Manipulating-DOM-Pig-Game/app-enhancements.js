/*
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

/* Enhancements

    1.A player looses his entire score when he rolls two 6 in a row. after that its the next players turn (hint always save the previous dice rolls in another variable)

    2. add an input field to HTML where players can set the winning score so that they can change the predefined score from 100.

    3. add another dice to the game. the player looses his current score when one of them is a 1 
*/


var scores, roundScore, activePlayer, gamePlaying, lastDice;


function init() {

    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    hideDiceFromDom();
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


function hideDiceFromDom() {
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
}

function showDiceInDom() {
    document.getElementById('dice-1').style.display = 'block';
    document.getElementById('dice-2').style.display = 'block';
}

// document.querySelector('#current-' + activePlayer).textContent = dice; // type coercion allows current to associate to all html this is a setter because we set a value

// document.querySelector('#current-' + activePlayer).innerHtml = '<em>'+ dice + '</em>';

// var x = document.querySelector('#score-0').textContent; // this is a getter because we get a value


// document.querySelector('.btn-roll').addEventListener('click', btn); // callback function btn is called from the click 

// function btnClick() {
//  //do something
// }
// btn();

document.querySelector('.btn-roll').addEventListener('click', function() { // anoymous function written within an event handler
    //state variable 

    if (gamePlaying) {

        // 1. randomize number

        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;
        // 2. display result
        showDiceInDom();

        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png'; // updates image
        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png'; // updates image


         if (dice1 !== 1 && dice2 !==1) { // if dice is not 1 difference operator not affected by type coercion
            //add score
            roundScore += dice1 + dice2; // same as writing roundscore = roundScore + dice 
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
        }

        // if (dice === 6 && lastDice === 6) {
        //     //player looses score
        //     scores[activePlayer] = 0;
        //     document.querySelector('#score-' + activePlayer).textContent = '0';
        //     nextPlayer();
        // } else if (dice !== 1) { // if dice is not 1 difference operator not affected by type coercion

        //     // 3.update round score if the rolled number is not a 1 

        //     //add score
        //     roundScore += dice; // same as writing roundscore = roundScore + dice 
        //     document.querySelector('#current-' + activePlayer).textContent = roundScore;
        // } else {
        //     nextPlayer();
        // }

        // lastDice = dice;

    }

});


document.querySelector('.btn-hold').addEventListener('click', function() {
    //add current score to global score
    //update the UI
    //check if player won the game
    if (gamePlaying) { // state variable if statement

        scores[activePlayer] += roundScore;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]; // update UI

        var finalScoreInput = document.querySelector('.final-score').value;
        var winningScore;
        //undefined, 0, null or "empty string" are coerced to false anything else is coerced to true
        if (finalScoreInput) {
            winningScore = finalScoreInput;
        } else {
            winningScore = 100;
        }
        if (scores[activePlayer] >= winningScore) { // check if player won the game
            document.querySelector('#name-' + activePlayer).textContent = 'Winner';
            hideDiceFromDom();
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

    hideDiceFromDom();
}

document.querySelector('.btn-new').addEventListener('click', init);
