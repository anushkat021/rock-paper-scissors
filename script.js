let score = JSON.parse(localStorage.getItem('score')) || {
        wins: 0,
        losses: 0,
        tie: 0
      };
function choiceOfComputer(){
    const choiceNum=Math.random();
    let computerChoice=" ";
    if(choiceNum>=0 && choiceNum<1/3){
        computerChoice="rock";
    }
    else if(choiceNum>=1/3 && choiceNum<2/3){
        computerChoice="paper";
    }
    else if(choiceNum>=2/3 && choiceNum<=1){
        computerChoice="scissors";
    }
    return computerChoice;
}
document.body.addEventListener('keydown', (event) => {
    if (event.key === 'r') {
      results('rock');
    } else if (event.key === 'p') {
      results('paper');
    } else if (event.key === 's') {
      results('scissors');
    }
  });

function results(playerChoice){
    const computerChoice=choiceOfComputer();
    let result=" ";
    if(playerChoice==="rock"){
        if(computerChoice==="rock"){
            result="It's a Tie.";
        }
        else if(computerChoice==="paper"){
            result="You lose.";
        }
        else{
            result="You win.";
        }
    }
    else if(playerChoice==="paper"){
        if(computerChoice==="paper"){
            result="It's a Tie.";
        }
        else if(computerChoice==="scissors"){
            result="You lose.";
        }
        else{
            result="You win.";
        } 
    }
    else{
        if(computerChoice==="scissors"){
            result="It's a Tie.";
        }
        else if(computerChoice==="paper"){
            result="You win.";
        }
        else{
            result="You lose.";
        }
    }
    if(result==="You win."){
        score.wins++;
    }
    else if(result==="You lose."){
        score.losses++;
    }
    else{
        score.tie++;
    }
    localStorage.setItem('score',JSON.stringify(score));
    alert(`You picked ${playerChoice} and the computer picked ${computerChoice}. ${result}
Wins: ${score.wins}  Losses: ${score.losses}  Tie: ${score.tie}`);
    document.querySelector('.js-choice').innerHTML=`You: ${playerChoice} - Computer: ${computerChoice}`;
    document.querySelector('.js-result').innerHTML=result;
    update();
}
function update(){
    document.querySelector('.js-score').innerHTML=`
Wins: ${score.wins}  Losses: ${score.losses}  Tie: ${score.tie}`;
}

