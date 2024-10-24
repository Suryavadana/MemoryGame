// src/components/GameBoard.js
import React, { useState } from 'react';
//import Card from './Card'; // Import the Card component
import Card from './card';

// Initial card data with front and back values
const initialCards = [
    { id: 1, front: 'A', back: '?' },
    { id: 2, front: 'A', back: '?' },
    { id: 3, front: 'B', back: '?' },
    { id: 4, front: 'B', back: '?' },
    { id: 5, front: 'C', back: '?' },
    { id: 6, front: 'C', back: '?' },
].sort(() => Math.random() - 0.5); // Shuffle the cards randomly

// Define GameBoard component
const GameBoard = () => {
    // State to keep track of flipped cards
    const [flippedCards, setFlippedCards] = useState([]);
    const [matchedCards, setMatchedCards] = useState([]); // Track matched cards
    const [flipCount, setFlipCount] =useState(0); //state for flip count

    //const [lastFlippedCard, setLastFlippedCard] = useState(null); // Track last flipped card

    // Function to handle card clicks
    const handleCardClick = (cardId) => {
        // Check if card is not already flipped
        // if (!flippedCards.includes(cardId)) {
        //     // Add the cardId to the flippedCards state
        //     setFlippedCards((prev) => [...prev, cardId]);
        //     console.log(`Card clicked: ${cardId}`); // Debug log
        // }

        //check if card is already matched or fixed
        if(flippedCards.includes(cardId) || matchedCards.includes(cardId))
            return;

        //update flipped cards
        setFlippedCards((prev)=>[...prev,cardId]);
        setFlipCount((prev)=> prev +1); //increment flip count

        //check for matches
        if(flippedCards.length === 1){
            //get the first flipped card's front value
            const firstCard = initialCards.find(card => card.id === flippedCards[0]);
            const secondCard = initialCards.find(card => card.id === cardId);
            
            if(firstCard.front === secondCard.front){
                //it's a match
                setMatchedCards((prev)=> [...prev, firstCard.id, secondCard.id]);
                setFlippedCards([]);//reset flipped cards
            }
            else{
                //not a match

                setTimeout(()=>{
                    setFlippedCards([]); //flip back after a short delay
                },1000); 
            }
        }
    };

    //Function to reset the game
    const resetGame= () => {
        setFlippedCards([]);
        setMatchedCards([]);
        setFlipCount(0);
        // Shuffle the cards again
        initialCards.sort(()=> Math.random()-0.5);
    };
    return (
        <div>
            <h2>Number of Flips: {flipCount}</h2> {/*DIsplay the flip count */}
            <button onClick={resetGame} color='light yellow'>Reset Game</button>
        <div style={{ display: 'flex', flexWrap: 'wrap', width: '400px' }}>
          
            {initialCards.map((card) => (
                // Render the Card component for each card
                <Card // Use Card with uppercase
                    key={card.id} // Unique key for each card
                    card={card} // Pass the card data to the Card component
                    isFlipped={flippedCards.includes(card.id) || matchedCards.includes(card.id)} // Check if card is flipped
                    onClick={() => handleCardClick(card.id)} // Handle card click
                />
            ))}
        </div>
        </div>
    );
};

export default GameBoard; // Export GameBoard component
