//assign values
let cards = [] //card array 
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

//making player object
let player = {
    name: "arsa",  
    chips: 200
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

//starting the game
function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [ firstCard, secondCard ]
    sum = firstCard + secondCard
    renderGame()
}

// generating random number 
function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10){ //making numbers higher than 10 (12,13) to return 10
        return 10
    } else if (randomNumber === 1){ //making number 1 to return 11
        return 11
    } else {
        return randomNumber
    }
}

// rendering start of the game, and deciding if u won/lost or to draw new card
function renderGame(){
    cardsEl.textContent="Cards: " 
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent ="Sum: " + sum
    if (sum <= 20){
        message = ("Draw a new card?"); 
    } else if (sum===21){
        message = ("You Won! You've got Blackjack!");
        hasBlackJack = true
    }else {
        message = ("You Lost!");
        isAlive = false
    }
    messageEl.textContent = message
}

// generating new card
function newCard(){
    if ( isAlive === true && hasBlackJack === false){
        let card = getRandomCard()
        sum += card
        //push new random card to array
        cards.push(card)
        renderGame()

    }
 
}