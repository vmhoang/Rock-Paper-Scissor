let r_choice, h_choice, r_point = 0, h_point = 0;
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getComputerchoice(){
    return randomInteger(1,3);
    // 1: rock, 2: paper, 3: scissor
}

function human_choice(){
    if (document.getElementById("rockimg").onclick()){
        return 1;
    }
    else if (document.getElementById("paperimg").onclick()){
        return 2;
    }
    else if (document.getElementById("scissorimg").onclick()){
        return 3;
    }
}

function play(h_choice, r_choice){
    for (let i =0; i <5; i++){
        r_choice = getComputerchoice();
        h_choice = human_choice();
        if ((h_choice - r_choice) === 1){
            h_point += 1;
        }
        else if ((r_choice - h_choice) === 1){
            h_point += 1;
        }
        else if ((h_choice - r_choice) === 2){
            h_point += 1;
        }
        else if ((r_choice - h_choice) === 2){
            r_point += 1;
        }
        console.log(h_choice);
        console.log(r_choice);
        console.log(h_point);   
        console.log(r_point);
    }
}
console.log(play(h_choice,r_choice));