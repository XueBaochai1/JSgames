document.addEventListener('DOMContentLoaded', () => {
//card options
const cardArray = [
    {   name: 'rainbownyancat',
        img: 'rainbownyancat-0'
    },
    {   name: 'rainbownyancat',
        img: 'rainbownyancat-0'
    },
    {  name: 'catwithredballoon',
        img: 'catwithredballoon-0'
    }, 
    {  name: 'catwithredballoon',
        img: 'catwithredballoon-0'
    },
    {   name: 'greycat-0',
        img: 'greycat-0'
    },
    {   name: 'greycat-0',
        img: 'greycat-0'
    },
    {   name: 'meow',
        img: 'meow-0'
    },
    {   name: 'meow',
        img: 'meow-0'
    },
    {   name: 'pinkpoptartcat',
        img: 'pinkpoptartcat-0',
    },
    {   name: 'pinkpoptartcat',
        img: 'pinkpoptartcat-0',
    },
    {   name: 'purplecat',
        img: 'purplecat-0',
    },
    {   name: 'purplecat',
        img: 'purplecat-0',
    },
]
    const grid = document.querySelector('.grid')


//create your board  
function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }
