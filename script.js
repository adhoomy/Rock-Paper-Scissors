console.log("Lets play Rock Paper Scissors!")

function randomInt() {
    return Math.floor(Math.random() * 3)
}

function getComputerChoice() {
    let computerChoice=randomInt()
    if(computerChoice===0) return "Rock"
    else if(computerChoice===1) return "Paper"
    else return "Scissors"
}

let cChoice=getComputerChoice()

function getHumanChoice() {
    return prompt("Rock, Paper, or Scissors?")
}

function capitalize(word1) { //this funtion is so that all human inputs inputs are at the same standard for comparisons (capital first letter only)
    let lower=word1.toLowerCase()
    return word1[0].toUpperCase() + lower.slice(1)
}

let hChoice=capitalize(getHumanChoice())

let humanScore=0
let computerScore=0

function printScore(humanScore, computerScore) {
    return `Human: ${humanScore}, Computer: ${computerScore}.`
}

function playRound(hChoice, cChoice) {
    if(cChoice==="Rock" && hChoice==="Scissors") {
        console.log("You win!  Rock beats scissors.")
        ++humanScore
        console.log(printScore(humanScore, computerScore))
    }
    else if(cChoice==="Scissors" && hChoice==="Paper") {
        console.log("You win!  Scissors beats paper.")
        ++humanScore
        console.log(printScore(humanScore, computerScore))
    }
    else if(cChoice==="Paper" && hChoice==="Rock") {
        console.log("You win!  Paper beats rock.")
        ++humanScore
        console.log(printScore(humanScore, computerScore))
    }
    else if(hChoice==="Rock" && cChoice==="Scissors") {
        console.log("You lose!  Rock beats scissors.")
        ++computerScore
        console.log(printScore(humanScore, computerScore))
    }
    else if(hChoice==="Scissors" && cChoice==="Paper") {
        console.log("You lose!  Scissors beats paper.")
        ++computerScore
        console.log(printScore(humanScore, computerScore))
    }
    else if(hChoice==="Paper" && cChoice==="Rock") {
        console.log("You lose!  Paper beats rock.")
        ++computerScore
        console.log(printScore(humanScore, computerScore))
    }
    else {
        console.log("Tie!")
        console.log(printScore(humanScore, computerScore))
    }
}

playRound(hChoice, cChoice)