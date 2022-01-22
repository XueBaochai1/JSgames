document.addEventListener('DOMContentLoaded', () => {
//card options

const cardArray = [
    {  name: '100-0',
        img: 'images/100-0'
    },
    {  name: '100-0',
        img: 'images/100-0'
    },
    {   name: 'rainbownyancat',
        img: 'images/rainbownyancat-0'
    },
    {   name: 'rainbownyancat',
        img: 'images/rainbownyancat-0'
    },
    {  name: 'catwithredballoon',
        img: 'images/catwithredballoon-0'
    }, 
    {  name: 'catwithredballoon',
        img: 'images/catwithredballoon-0'
    },
    {  name: 'index.jpeg',
	img: 'images/index.jpeg'
    },
    {  name: 'index.jpeg',
	img: 'images/index.jpeg'
    },
    {  name: 'index.png',
	img: 'images/index.png'
    },
    {   name: 'greycat-0',
        img: 'images/greycat-0'
    },
    {   name: 'greycat-0',
        img: 'images/greycat-0'
    },
    {   name: 'whitecat-0',
        img: 'images/whitecat-0'
    },
    {   name: 'whitecat-0',
        img: 'images/whitecat-0' 
    },
  
    {   name: 'purplecat',
        img: 'images/purplecat-0',
    },
    {   name: 'purplecat',
        img: 'images/purplecat-0',
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
    }}})