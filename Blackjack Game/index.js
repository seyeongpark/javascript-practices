
let firCard = Math.floor(Math.random() * 13) + 1
let secCard = Math.floor(Math.random() * 13) + 1
let cards = [firCard, secCard]
let chips = 150
let message = ""
let messageEl = document.getElementById("message-el")
let playerEl = document.getElementById("player-el")

const player = {
    name : 'Sean',
    chips : chips
}

playerEl.textContent = player.name + "'s chips : $" + player.chips; 

function resetGame() {
    player.chips = 155
    cards[0] = ''
    cards[1] = ''
    sum = ''
    messageEl = ''

    renderGame()
}

// check value is special card #
function checkValue(value){
    // Ace card
    if (value == 1){
        value = 11;
        return value 
    }

    // J, Q, and K card
    else if (value == 11 || value == 12 || value == 13) {
        value = 10;
        return value
    }
    
    else {
        return value
    }
}

function renderGame() {
    document.getElementById('cards-el').textContent = cards[0] + ' | ' + cards[1];

    cards[0] = checkValue(cards[0]);
    cards[1] = checkValue(cards[1]);

    console.log(cards[0] + ' | ' + cards[1]) 

    let sum = cards[0] + cards[1];
    console.log('sum = ' + cards[0] + ' + ' + cards[1] + ' = ' + sum ); 

    document.getElementById('sum-el').textContent = sum;

    if (sum <= 20) {
        message = "Do you want to draw a new card? ( - $5)"
        player.chips -= 5;
    } else if (sum === 21) {
        message = "You've got Blackjack! ( + $20)"
        console.log('jackpot!')
        player.chips += 20;
    } else {
        message = "You're out of the game!"
    }
    console.log('chips: $' + player.chips);
    
    messageEl.textContent = message
    playerEl.textContent = player.name + "'s chips : $" + player.chips; 

}

function newCard() {
    cards[0] = Math.floor(Math.random() * 13) + 1;
    cards[1] = Math.floor(Math.random() * 13) + 1;

    renderGame();
}
