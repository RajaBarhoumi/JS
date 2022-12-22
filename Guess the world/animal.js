
let animals= ['BIRD', 'DOG', 'DONKEY', 'GIRAFFE', 'ALLIGATOR', 'CAT', 'HORSE', 'LION', 'MONKEY', 'BEE', 'DUCK','FROG', 'ELEPHANT', 'CROCODILE', 'DOLPHIN', 'GORILLA', 'MOUSE', 'TIGER', 'RABBIT', 'RAT']

//ANIMAL****

const animalText=document.getElementById("animalList");
refreshAnimal=document.getElementById("change");
checkAnimal=document.getElementById("subbmit");
inputAnimal=document.getElementById("animal");
message=document.getElementById("score");
checkAnswerA=document.getElementById("correctA");
answerA=document.getElementById("answerA");
time=document.getElementById("time");
clearMes=document.getElementById("a");
let correctAnimal;
let scoreAnimal=0;
let timer;
const TimerAnimal= maxTime => {
    clearInterval(timer);
    timer= setInterval(() =>{
        if(maxTime>0){
            maxTime--;
            time.innerText=maxTime+"s";
        }else{
        clearInterval(timer);
        alert("Time off!");
        initGameAnimals();
        }
       
    },1000)
}

const initGameAnimals= () =>{
    TimerAnimal(35);
    let randomChoice=animals[Math.floor(Math.random()*animals.length)];
    console.log(randomChoice);
    
    let wordArray=randomChoice.split("");
    for( let i=wordArray.length-1;i>0;i--){
        let j=Math.floor(Math.random()*(i+1));
        [wordArray[i],wordArray[j]]=[wordArray[j],wordArray[i]];
    }
    animalText.innerText=wordArray.join("");
    correctAnimal = randomChoice.toLowerCase();
    console.log(wordArray,randomChoice) ;
    //randomChoice : the right word
    
}
initGameAnimals();

const checkRightAnimal = () =>{
    let userWord = inputAnimal.value.toLowerCase();
    console.log(userWord);
    checkAnswerA.innerHTML="";
    if(!userWord) {
        message.innerText= `Please enter a word check` ;
    }
    else if(userWord !== correctAnimal){
        message.innerHTML= `Oops! Try again.<br>` ;
        scoreAnimal=scoreAnimal;
        message.innerText+= "Score : "+scoreAnimal;
    }else if(userWord == correctAnimal){
        message.innerHTML= `Correct answer!<br>`;
        scoreAnimal+=5;
        message.innerText+= "Score : "+scoreAnimal;
    }
    answerA.addEventListener("click", () =>{
        if((scoreAnimal<5)||(scoreAnimal=5)){
            checkAnswerA.innerHTML="Sorry! you haven't enough points."
        }else{
            checkAnswerA.innerHTML=correctAnimal;
            scoreAnimal=scoreAnimal-5;
            message.innerText= "Score : "+scoreAnimal;
        } });
    initGameAnimals();

}

refreshAnimal.addEventListener("click",initGameAnimals);
checkAnimal.addEventListener("click",checkRightAnimal);