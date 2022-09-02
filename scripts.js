
let choiches = ["Fire","Water","Grass"];
let won = 0
let lost = 0

// randomizes a choice for the computer 
function getComputerChoice(){
    let computerChoice = choiches[Math.floor(Math.random() * 3 )]

    if (computerChoice.toLocaleLowerCase() == "fire"){
        displayFire(botDisplay)
    }else  if (computerChoice.toLocaleLowerCase() == "water"){
        displayWater(botDisplay)
    }  if (computerChoice.toLocaleLowerCase() == "grass"){
        displayGrass(botDisplay)
    }

    return computerChoice

}



//variables


const trainer = document.querySelector(".trainer")
const bot = document.querySelector(".bot")

const score1 = document.querySelector(".score1")
const score2 = document.querySelector(".score2")

const textForUser = document.querySelector(".text-for-user")
const gameBtn = document.querySelector(".game-btn")

const myDisplay = document.querySelector(".my-display")
const botDisplay = document.querySelector(".bot-display")


const fireChoice = document.querySelector(".player-fire")
const waterChoice = document.querySelector(".player-water")
const grassChoice = document.querySelector(".player-grass")



// event listeneres

playerChose = ''
fireChoice.addEventListener("click", choseFire)
waterChoice.addEventListener("click", choseWater)
grassChoice.addEventListener("click", choseGrass)

gameBtn.addEventListener("click", resetGame)

//reset game

function resetGame(){
    won = 0
    lost = 0
    score1.textContent = won
    score2.textContent = lost
    textForUser.innerHTML =`Choose your element!`
    textForUser.style.color = "black"
    trainer.style.backgroundColor = "rgba(189, 182, 182, 0.507)"
    bot.style.backgroundColor = "rgba(189, 182, 182, 0.507)"
    myDisplay.style.backgroundImage= "url(who.png)"
    botDisplay.style.backgroundImage= "url(who.png)"
    myDisplay.style.backgroundSize= "110%"
    botDisplay.style.backgroundSize= "110%"
}


//function for displaying element chosen

function displayFire(ele){
    
    ele.style.backgroundImage= "url(fire.png)"
    ele.style.backgroundSize= "55%"

}

function displayWater(ele){
    ele.style.backgroundImage= "url(water.png)"
    ele.style.backgroundSize= "55%"

}

function displayGrass(ele){
    ele.style.backgroundImage= "url(grass.png)"
    ele.style.backgroundSize= "55%"

}


//functions when element clicked

function choseFire(){
    displayFire(myDisplay)
    playerChose = "fire"
    playRound()
}

function choseWater(){
    displayWater(myDisplay)
    playerChose = "water"
    playRound()
}


function choseGrass(){
    displayGrass(myDisplay)
    playerChose = "grass"
    playRound()
}

// creates the functionality of the game, 1 round


function playRound(nothing = "nothing", computerChoice = getComputerChoice(), playerChoice = playerChose ){
    console.log(computerChoice)
        if (playerChoice.toLowerCase() != "fire" && playerChoice.toLowerCase() != "water" && playerChoice.toLowerCase() != "grass" ){
            console.log("illegal weapon!")
            return null
        }


        console.log("the computer chose " + computerChoice)
        if (won < 3 && lost < 3){
        
        if(playerChoice.toLowerCase() == computerChoice.toLowerCase()){
            textForUser.innerHTML = `its a draw! you both chose ` + playerChoice.toLocaleLowerCase()
            textForUser.style.color = "black"
            
        }else if(playerChoice.toLowerCase() == "water" & computerChoice.toLowerCase() == "fire")
        {
            won++
            textForUser.innerHTML =`you won the round! ${playerChoice.toLowerCase()} beats ${computerChoice.toLowerCase()}!`
            textForUser.style.color = "green"
            trainer.style.backgroundColor = "rgba(100, 200, 100, 0.507)"
            bot.style.backgroundColor = "rgba(200, 100, 100, 0.507)"

        }else if(playerChoice.toLowerCase() == "fire" & computerChoice.toLowerCase() == "grass")
        {
            won++
            textForUser.innerHTML =`you won the round! ${playerChoice.toLowerCase()} beats ${computerChoice.toLowerCase()}!`
            textForUser.style.color = "green"
            trainer.style.backgroundColor = "rgba(100, 200, 100, 0.507)"
            bot.style.backgroundColor = "rgba(200, 100, 100, 0.507)"
        }else if(playerChoice.toLowerCase() == "grass" & computerChoice.toLowerCase() == "water")
        {
            won++
            textForUser.innerHTML =`you won the round! ${playerChoice.toLowerCase()} beats ${computerChoice.toLowerCase()}!`
            textForUser.style.color = "green"
            trainer.style.backgroundColor = "rgba(100, 200, 100, 0.507)"
            bot.style.backgroundColor = "rgba(200, 100, 100, 0.507)"
        }else{

            lost++
            textForUser.innerHTML =`you lost the round! ${computerChoice.toLowerCase()} beats ${playerChoice.toLowerCase()}!`
            textForUser.style.color = "red"
            bot.style.backgroundColor = "rgba(100, 200, 100, 0.507)"
            trainer.style.backgroundColor = "rgba(200, 100, 100, 0.507)"

        }

    }


        score1.textContent = won
        score2.textContent = lost

        if (won >= 3){
            textForUser.innerHTML = "You won! Press 'Reset Game' if u would like to play again"
            textForUser.style.fontSize = "1.4rem"
            
        }else if (lost >= 3){
            textForUser.innerHTML = "You lost! Press 'Reset Game' if u would like to play again"
            textForUser.style.fontSize = "1.4rem"
           
        }


}











