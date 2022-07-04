
let firCard = Math.floor(Math.random() * 11) + 1
let secCard = Math.floor(Math.random() * 11) + 1
let cards = [firCard, secCard]
let message = ""
let messageEl = document.getElementById("message-el")

function startGame() {
    renderGame()
}

function renderGame() {
    let sum = cards[0] + cards[1];

    document.getElementById('cards-el').textContent = cards[0] + ' | ' + cards[1];
    document.getElementById('sum-el').textContent = sum;

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
    } else {
        message = "You're out of the game!"
    }
    messageEl.textContent = message
}

function newCard() {
    cards[0] = Math.floor(Math.random() * 11) + 1;
    cards[1] = Math.floor(Math.random() * 11) + 1;

    renderGame();
}
