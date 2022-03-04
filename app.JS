
    // scripts.js
    
// scripts.js
const cards = document.querySelectorAll('.gameboard');

function flipCard() {
  this.classList.toggle('flip');
}

cards.forEach(card => card.addEventListener('click', flipCard));

       



