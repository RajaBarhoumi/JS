
let vegetables= ['CARROT', 'BROCCOLI ',  'CORN ', 'CUCUMBER ', 'EGGPLANT', 'LETTUCE ', 'MUSHROOMS', 'ONION', 'POTATO', 'PUMPKIN ', 'TOMATO ', 'BEETROOT', 'PEAS','CABBAGE', 'CHILI', 'GARLIC' ];

const vegetableText=document.getElementById("vegetablesList");
refreshVegetable=document.getElementById("changeV");
checkVegetable=document.getElementById("submitV");
inputVegetable=document.getElementById("vegetable");
messageV=document.getElementById("scoreV");
checkAnswerV=document.getElementById("correctV");
answerV=document.getElementById("answerV");
timeV=document.getElementById("timeV");
clearMesV=document.getElementById("v");
let correctVegetable;
let scoreVegetable=0;
let timerV;

const TimerVegetable= maxTimeV => {
    clearInterval(timerV);
    timerV= setInterval(() =>{
        if(maxTimeV>0){
            maxTimeV--;
            timeV.innerText=maxTimeV+"s";
        }else{
        clearInterval(timerV);
        alert("Time off!");
        initGameVegetables();
        }
       
    },1000)
}

const initGameVegetables= () =>{
    TimerVegetable(35);
    let randomChoice=vegetables[Math.floor(Math.random()*vegetables.length)];
    console.log(randomChoice);
    
    let wordArray=randomChoice.split("");
    for( let i=wordArray.length-1;i>0;i--){
        let j=Math.floor(Math.random()*(i+1));
        [wordArray[i],wordArray[j]]=[wordArray[j],wordArray[i]];
    }
    vegetableText.innerText=wordArray.join("");
    correctVegetable = randomChoice.toLowerCase();
    console.log(wordArray,randomChoice) ;
    //randomChoice : the right word
    
}
initGameVegetables();

const checkRightVegetable = () =>{
    let userWord = inputVegetable.value.toLowerCase();
    console.log(userWord);
    checkAnswerV.innerHTML="";
    if(!userWord) {
        messageV.innerText= `Please enter a word check` ;
    }
    else if(userWord !== correctVegetable){
        messageV.innerHTML= `Oops! Try again.<br>` ;
        scoreVegetable=scoreVegetable;
        messageV.innerText+= "Score : "+scoreVegetable;
    }else if(userWord == correctVegetable){
        messageV.innerHTML= `Correct answer!<br>`;
        scoreVegetable+=5;
        messageV.innerText+= "Score : "+scoreVegetable;
    }
    answerV.addEventListener("click", () =>{
        if(scoreVegetable<5){
            checkAnswerV.innerHTML="Sorry! you haven't enough points."
        }else{
            checkAnswerV.innerHTML=correctVegetable;
            scoreVegetable=scoreVegetable-5;
            messageV.innerText= "Score : "+scoreVegetable;
        } });
    initGameVegetables();
}

refreshVegetable.addEventListener("click",initGameVegetables);
checkVegetable.addEventListener("click",checkRightVegetable);
