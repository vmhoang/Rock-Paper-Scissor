

let r_choice, h_choice,num, result;
function getComputerChoice(){
    return Math.floor(Math.random()*3+1);
}

function playRound(h_choice, r_choice){
    num  = getComputerChoice();
    switch (num){
        case 1:
            r_choice =" ROCK"
            break;
        case 2:
            r_choice = "SCISSOR"
            break;
        case 3: 
            r_choice = "PAPER"
            break;
    }
    h_choice = prompt('Rock Paper or Scissor');
    if (h_choice == r_choice){
        return "Draw";
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

result = playRound();
console.log(result);