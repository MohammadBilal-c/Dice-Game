var scores, rollscore, activeplayer, playing;
init();
document.querySelector('.btn--roll ').addEventListener('click', function () {
    if (playing) {
        var dice = Math.floor(Math.random() * 6) + 1;
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = ' block';
        diceDOM.src = 'dice' + dice + '.jpg';
        if (dice > 1) {
            rollscore += dice;
            document.querySelector('#current--' + activeplayer).textContent = rollscore;
        }
        else {
            nextplayer();
        }
    }
})


document.querySelector('.btn--hold').addEventListener('click', function () {
    if (playing) {
        scores[activeplayer] += rollscore;
        if (scores[activeplayer] >= 100) {
            document.getElementById('name--0').textContent = 'Winner!';
            document.querySelector('.player--' + activeplayer).classList.add('Winner!');
            document.querySelector('.player--' + activeplayer).classList.remove('active');
            playing = false;
        }
        else {
            nextplayer();
        }

    }



})


function nextplayer() {
    document.querySelector('#score--' + activeplayer).textContent = scores[activeplayer];
    activeplayer === 0 ? activeplayer = 1 : activeplayer = 0;
    rollscore = 0;

    document
        .querySelector(`.player--${activeplayer}`)
        .classList.toggle('player--winner');
    document
        .querySelector(`.player--${activeplayer}`)
        .classList.toggle('player--active');
    document.querySelector('.dice').style.display = 'none';

}
document.querySelector('.btn--new').addEventListener('click', init)
function init() {
    scores = [0, 0];
    rollscore = 0;
    activeplayer = 0;
    playing = true;

    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score--0').textContent = 0;
    document.getElementById('score--1').textContent = 0;
    document.getElementById('current--0').textContent = 0;
    document.getElementById('current--1').textContent = 0;
    document.getElementById('name--0').textContent = 'player 1';
    document.getElementById('name--1').textContent = 'player 2';
    document.querySelector('.player--0').classList.remove('Winner!');
    document.querySelector('.player--1').classList.remove('Winner!');
    document.querySelector('.player--0').classList.remove('active');
    document.querySelector('.player--1').classList.remove('active');
    document.querySelector('.player--0').classList.add('active');


}

























// document.querySelector('#current--' + activeplayer).textContent = dice;

// var x = document.querySelector('#score-0').textContent;