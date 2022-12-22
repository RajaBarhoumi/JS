
let fruits= ['APPLE', 'PEACH', 'PEAR', 'MANGO', 'PAPAYA', 'ORANGE', 'GRAPES', 'KIWI', 'CHERRY','WATERMELON', 'PINEAPPLE', 'BLUEBERRY', 'BANANA', 'COCONUT',  'LEMON','TAMARIND'];

const fruitText=document.getElementById("fruitList");
refreshFruit=document.getElementById("changeF");
checkFruit=document.getElementById("submitF");
inputFruit=document.getElementById("fruit");
messageF=document.getElementById("scoreF");
checkAnswerF=document.getElementById("correctF");
answerF=document.getElementById("answerF");
timeF=document.getElementById("timeF");
clearMesF=document.getElementById("f");
let correctFruit;
let scoreFruit=0;
let timerF;

const TimerFruit= maxTimeF => {
    clearInterval(timerF);
    timerF= setInterval(() =>{
        if(maxTimeF>0){
            maxTimeF--;
            timeF.innerText=maxTimeF+"s";
        }else{
        clearInterval(timerF);
        alert("Time off!");
        initGameFruits();
        }
       
    },1000)
}

const initGameFruits= () =>{
    TimerFruit(35);
    let randomChoice=fruits[Math.floor(Math.random()*fruits.length)];
    console.log(randomChoice);
    
    let wordArray=randomChoice.split("");
    for( let i=wordArray.length-1;i>0;i--){
        let j=Math.floor(Math.random()*(i+1));
        [wordArray[i],wordArray[j]]=[wordArray[j],wordArray[i]];
    }
    fruitText.innerText=wordArray.join("");
    correctFruit = randomChoice.toLowerCase();
    console.log(wordArray,randomChoice) ;
    //randomChoice : the right word
    
}
initGameFruits();

const checkRightFruit = () =>{
    let userWord = inputFruit.value.toLowerCase();
    console.log(userWord);
    checkAnswerF.innerHTML="";
    if(!userWord) {
        messageF.innerText= `Please enter a word check` ;
    }
    else if(userWord !== correctFruit){
        messageF.innerHTML= `Oops! Try again.<br>` ;
        scoreFruit=scoreFruit;
        messageF.innerText+= "Score : "+scoreFruit;
    }else if(userWord == correctFruit){
        messageF.innerHTML= `Correct answer!<br>`;
        scoreFruit+=5;
        messageF.innerText+= "Score : "+scoreFruit;
    }
    answerF.addEventListener("click", () =>{
        if(scoreFruit<5){
            checkAnswerF.innerHTML="Sorry! you haven't enough points."
        }else{
            checkAnswerF.innerHTML=correctFruit;
            scoreFruit=scoreFruit-5;
            messageF.innerText= "Score : "+scoreFruit;
        } });
    initGameFruits();

}
refreshFruit.addEventListener("click",initGameFruits);
checkFruit.addEventListener("click",checkRightFruit);