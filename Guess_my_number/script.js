'use strict';
/*
console.log(document.querySelector('.message').textContent);// which returns if there is any content in "message" class.
document.querySelector('.message').textContent="Correct Number!!";// which sets the value of 'message' as 'Correct Number'.
document.querySelector('.number').textContent=13;
document.querySelector('.score').textContent=10;
*/

let SecreteNum=Math.trunc(Math.random()*20)+1;
let score=20;
let Highscore=0;
document.querySelector('.check').addEventListener('click', function(){
    const guess=Number(document.querySelector('.guess').value);
    if(!guess)
    {
        document.querySelector('.message').textContent='No Number';
    }
    else if(guess===SecreteNum){
        document.querySelector('.message').textContent='Correct Answer';
        document.querySelector('.number').textContent=SecreteNum;
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width='30rem';
        if(Highscore<score)
        {
            Highscore=score;
            document.querySelector('.highscore').textContent=score;
        }
    }
    else if(guess > SecreteNum)
    {
        if(score>1)
        {
            document.querySelector('.message').textContent="It is greater than guess";
            score--;
            document.querySelector('.score').textContent=score;   
        }
    }
    else{
        if(score>1)
        {
            document.querySelector('.message').textContent="It is lower than guess";
            score--;
            document.querySelector('.score').textContent=score;
        }
    }
});
document.querySelector('.again').addEventListener('click',function(){
score=20;
SecreteNum=Math.trunc(Math.random()*20)+1;
document.querySelector('.message').textContent="Start guessing...";
document.querySelector('.number').textContent="?";
document.querySelector('.score').textContent=score;
document.querySelector('.guess').value='';
document.querySelector('body').style.backgroundColor='#222';
document.querySelector('.number').style.width='15rem';

});
