let player = {
    name : "John",
    chips : 200
}
let start = document.getElementById("start")
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = "";
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 + 1 )

    if (randomNumber === 1) {
        return 11
    }else if (randomNumber > 10) {
        return 10
    }else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for ( let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum;
if (sum <= 20) {
    message = "Do you want to draw another card"
}else if (sum === 21) {
    message = "You have got BlackJack"
    hasBlackJack = true
}else {
    message = "You're out of the game!"
    isAlive = false
}
    messageEl.textContent = message;
    continueGame()
    endGame()
};

function newCard() {
    if ( isAlive === true) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame();   
    } 
}

function continueGame() {
    if (hasBlackJack === true) {
        let cashIncrement = player.chips += 50
        playerEl.textContent = player.name + ": $" + cashIncrement
    }else if (isAlive === false) {
        let cashDecrement = player.chips -= 50
        playerEl.textContent = player.name + ": $" + cashDecrement
    }
} 

function endGame() {
    if (player.chips === 0) {
        messageEl.textContent = "Game Over"
    }
}