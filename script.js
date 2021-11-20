'use strict';

const secretNum = document.querySelector('.number');
const inputNum = document.querySelector('.guess');
const checkBtn = document.querySelector('.check');
const outputMsg = document.querySelector('.message');
const outputScore = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
const reset = document.querySelector('.again');



let secretNumber =Math.trunc( Math.random()*20+1);

secretNum.textContent ='?';

let score = 20 ;
let highscore = 0;

checkBtn.addEventListener('click',
()=>{ 
const inputNumber = Number(inputNum.value);

if(inputNumber===0){
    outputMsg.textContent='❌ Atleast enter a number!';
}
else if(inputNumber !== secretNumber){
    if(score > 1){
        outputMsg.textContent=inputNumber<secretNumber ? '😮number is too low' : '😮number is too high' ;
        score --;
        outputScore.textContent = score;
    }
    else{
        outputScore.textContent = 0;
        outputMsg.textContent='❗❗You have lost the game!';
    }
}
  
// else if(inputNumber < secretNumber){
//     if(score > 1){
//         outputMsg.textContent='😮number is too low';
//         score --;
//         outputScore.textContent = score;
//     }
//     else{
//         outputScore.textContent = 0;
//         outputMsg.textContent='❗❗You have lost the game!';
//     }
// }
// else if(inputNumber > secretNumber){
//     if(score > 1){
//         outputMsg.textContent='😮number is too high';
//         score--;
//         outputScore.textContent = score;  
//     }
//     else{
//         outputScore.textContent = 0;
//         outputMsg.textContent='❗❗You have lost the game!';
//     }
// }
else if(inputNumber === secretNumber){
    outputMsg.textContent='🎉🎉You have guessed the right number!';
    
    secretNum.textContent = secretNumber;
    secretNum.style.width = '30rem';
    document.querySelector('body').style.backgroundColor = 'green';
    if(score>highscore){
        highScore.textContent = score;
    }
  
}
else{}
});


reset.addEventListener('click', ()=>
{
    secretNum.textContent ='?';
    score=20;
    outputScore.textContent = 20;  
    inputNum.value = '';
    secretNumber =Math.trunc( Math.random()*20+1);
    outputMsg.textContent='Start guessing...';
    secretNum.style.width = '15rem';
    document.querySelector('body').style.backgroundColor = '#222';

})