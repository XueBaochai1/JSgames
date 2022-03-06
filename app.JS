
    // scripts.js
    
// scripts.js
const cards = document.querySelectorAll('.gameboard');
let hasFlippedCard = false;
let firstCard, secondCard;


function flipCard() {
      this.classList.toggle('flip');
      this.classList.add('flip');
    
      if (!hasFlippedCard) {
         hasFlippedCard = true;
         firstCard = this;
         return;
       }
      
       secondCard = this;
       hasFlippedCard = false;

  
       +
       + function checkForMatch() {
       +   if (firstCard.dataset.framework === secondCard.dataset.framework) 
       +   return disableCards();
       +     }
       +
       +   unflipCards();
       + }
       +
       + function disableCards() {
       +   firstCard.removeEventListener('click', flipCard);
       +   secondCard.removeEventListener('click', flipCard);
       + }
       +
       + function unflipCards() {
       +   setTimeout(() => {
       +     firstCard.classList.remove('flip');
       +     secondCard.classList.remove('flip');
       +   }, 1500);
       + }
       
         cards.forEach(card => card.addEventListener('click', flipCard));
    



       



