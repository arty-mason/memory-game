document.addEventListener("DOMContentLoaded", () => {
    //card options
    const cardArray = [//Creating an array that contains our cards
        {
            name: "fries",
            img: "images/fries.png"
        },
        {
            name: "fries",
            img: "images/fries.png"
        },
        {
            name: "hotdog",
            img: "images/hotdog.png"
        },
        {
            name: "hotdog",
            img: "images/hotdog.png"
        },
        {
            name: "cheeseburger",
            img: "images/chees.png"
        },
        {
            name: "cheeseburger",
            img: "images/chees.png"
        },
        {
            name: "ice-cream",
            img: "images/ice-cream.png"
        },
        {
            name: "ice-cream",
            img: "images/ice-cream.png"
        },
        {
            name: "milkshake",
            img: "images/milkshake.png"
        },
        {
            name: "milkshake",
            img: "images/milkshake.png"
        },
        {
            name: "pizza",
            img: "images/pizza.png"
        },
        {
            name: "pizza",
            img: "images/pizza.png"
        }
    ];
    cardArray.sort(() => 0.5 - Math.random());//Radnomizing the cards to make the game renewable
    //create your board
    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    var cardsChosen = [];//Creating an empty array for chosen cards
    var cardsChosenId = [];//Creating an empty array for chosen cards' ID
    var cardsWon = [];//Creating an empty array for matched cards

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img');
            card.setAttribute('src', 'images/blank.png');
            card.setAttribute('data-id', i);//Setting an id to each card
            // card.addEventListener('click', flipcard)//Creating an event when card is clicked to flip the card using flipcard function
            grid.appendChild(card);
        }
    }
    //check for matches


    //flip the card
    function checkForMatch() {
        var cards = document.querySelectorAll('img');
        const optionOneId = cardsChosen[0];//Setting the first card for comparison
        const optionTwoId = cardsChosen[1];//Setting the second card for comparison
        if (cardsChosen[0] === cardsChosen[1]) {//If the chosen cards are the same
            alert('You found a match');//Setting a message for the match
            cards[optionOneId].setAttribute('src', 'images/white.png');//Setting the first card matched white
            cards[optionTwoId].setAttribute('src', 'images/white.png');//Setting the second matched card white
            cardsWon.push(cardsChosen);//Pushing the matched cards into the array
        } else {
            cards[optionOneId].setAttribute('src', 'images/blank.png');//Setting the first mismatched card back to blank
            cards[optionTwoId].setAttribute('src', 'images/blank.png');//Setting the second mismatched card back to blank
            alert('Sorry, try again');//Setting a message for the wrong match
        }
        cardsChosen = [];//Clearing the array for chosen cards
        cardsChosenId = [];//Clearing the array for chosen cards' ID
        resultDisplay.textContent = cardsWon.length;
        if (cardsWon.length === cardArray.length / 2) {//If the matched cards array has run out of space
            resultDisplay.textContent = 'Congratulations! You found them all!';//Setting a message for winning the game
        }
    }

    function flipcard() {
        var cardId = this.getterAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);//Pushing the new cards into array 
        cardsChosenId.push(cardId);//Pushing the ID of the chosen card into the array
        this.setAttribute('src', cardArray[cardId].img);
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500);//Setting the timeout for checking the match to 500ms
        }
    }

    createBoard();//Invoking the function
});
