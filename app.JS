
    // app.JS
const card = document.getElementById("card")

card.addEventListener("click",flipCard);

function flipCard(card) {
  card.classList.toggle("flipCard");
}


