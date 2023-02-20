
let r_choice; 
let h_choice;
let result;
player_choice =  document.querySelectorAll('.gamechoice');
gameresult = document.getElementById('gameresult');

player_choice.forEach(button => button.addEventListener('click',() =>{
    h_choice = button.textContent;
    r_choice = getcomputerchoice('');
    result = playRound(h_choice,r_choice);
    gameresult.textContent = result; 
}));
function getcomputerchoice(){
    const num = Math.floor(Math.random()*3)+1;
    switch (num){
        case 1:
            return " ROCK";
    
        case 2:
            return  "SCISSOR";

        case 3: 
            return  "PAPER";
    }
}
function playRound(h_choice, r_choice){
    console.log(h_choice);
    if (h_choice == r_choice){
    }
    else if (r_choice = "ROCK"){
        return (h_choice.toLowerCase() === "paper") ? "You Win" : "You lose";
    }
    else if (r_choice = "PAPER"){
        return (h_choice.toLowerCase() == "scissor") ? "You Win" : "You lose";
    }
    else if (r_choice = "SCISSOR"){
        return (h_choice.toLowerCase() == "rock") ? "You Win" : "You lose";
    }
}
