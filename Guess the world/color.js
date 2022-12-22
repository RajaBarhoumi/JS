
let colors= ['RED', 'YELLOW', 'BLUE', 'GREEN', 'ORANGE', 'PURPLE', 'BROWN', 'PINK', 'GOLD','SILVER', 'BLACK', 'WHITE', ];

const colorText=document.getElementById("colorList");
refreshColor=document.getElementById("changeC");
checkColor=document.getElementById("submitC");
inputColor=document.getElementById("color");
messageC=document.getElementById("scoreC");
checkAnswerC=document.getElementById("correctC");
answerC=document.getElementById("answerC");
timeC=document.getElementById("timeC");
clearMesC=document.getElementById("c");
let correctColor;
let scoreColor=0;
let timerC;

const TimerColor= maxTimeC => {
    clearInterval(timerC);
    timerC= setInterval(() =>{
        if(maxTimeC>0){
            maxTimeC--;
            timeC.innerText=maxTimeC+"s";
        }else{
        clearInterval(timerC);
        alert("Time off!");
        initGameColors();
        }
       
    },1000)
}

const initGameColors= () =>{
    TimerColor(35);
    let randomChoice=colors[Math.floor(Math.random()*colors.length)];
    console.log(randomChoice);
    
    let wordArray=randomChoice.split("");
    for( let i=wordArray.length-1;i>0;i--){
        let j=Math.floor(Math.random()*(i+1));
        [wordArray[i],wordArray[j]]=[wordArray[j],wordArray[i]];
    }
    colorText.innerText=wordArray.join("");
    correctColor = randomChoice.toLowerCase();
    console.log(wordArray,randomChoice) ;
    //randomChoice : the right word
    
}
initGameColors();

const checkRightColor = () =>{
    let userWord = inputColor.value.toLowerCase();
    console.log(userWord);
    checkAnswerC.innerHTML="";
    if(!userWord) {
        messageC.innerText= `Please enter a word check` ;
    }
    else if(userWord !== correctColor){
        messageC.innerHTML= `Oops! Try again.<br>` ;
        scoreColor=scoreColor;
        messageC.innerText+= "Score : "+scoreColor;
    }else if(userWord == correctColor){
        messageC.innerHTML= `Correct answer!<br>`;
        scoreColor+=5;
        messageC.innerText+= "Score : "+scoreColor;
    }
    answerC.addEventListener("click", () =>{
        if(scoreColor>=5){
            checkAnswerC.innerHTML=correctColor;
            scoreColor=scoreColor-5;
            messageC.innerText= "Score : "+scoreColor;
        }else{
            checkAnswerC.innerHTML="Sorry! you haven't enough points.";
        } });
    initGameColors();
}

refreshColor.addEventListener("click",initGameColors);
checkColor.addEventListener("click",checkRightColor);