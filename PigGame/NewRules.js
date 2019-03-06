

//   RULES OF THE GAME .... VARIATION OF THE PIG GAME..
/*
    1. Two standard dice are rolled. If neither shows a 1, their sum is added to the turn total.
    2. If a single 1 is rolled or a double 1 is rolled, the player scores nothing and the turn ends.
    3. When the turn ends, the round Score gets added to the global Score.
    4. The player whose Global Score reaches 30 is the winner !!!
*/
var scores, roundScore, activePlayer, gamePlaying;

init();

document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying){
        var dice = Math.floor(Math.random() * 6) + 1;
        var dice1 = Math.floor(Math.random() * 6) + 1;

        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        var diceDOM1 = document.querySelector('.dice1');
        diceDOM1.style.display='block';
        diceDOM1.src = 'dice-' + dice1 + '.png';

        var total=(dice + dice1);

        if (dice!=1 && dice1!=1) {
            roundScore += total;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else if (dice==1 || dice1==1){
            nextPlayer();
        } 

    }

});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        // Add CURRENT score to GLOBAL score
        globalScores[activePlayer] += roundScore;

        // Update the UI
        document.querySelector('#score-' + activePlayer).textContent = globalScores[activePlayer];

        // Check if player won the game
        if (globalScores[activePlayer] >= 30) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.dice1').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            //Next player
            nextPlayer();
        }
    }
});

function nextPlayer() {
    //Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');

   // document.querySelector('.dice').style.display = 'none';
   // document.querySelector('.dice1').style.display = 'none';
}


document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    globalScores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice1').style.display = 'none';

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