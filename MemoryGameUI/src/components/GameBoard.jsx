// src/components/GameBoard.js
import React, { useState } from 'react';
//import Card from './Card'; // Import the Card component
import Card from './card';
import '../App.css';

// Initial card data with front and back values
const getShuffledCards = () => {
const initialCards = [
    { id: 1, front: 'A', back: '?' },
    { id: 2, front: 'A', back: '?' },
    { id: 3, front: 'B', back: '?' },
    { id: 4, front: 'B', back: '?' },
    // { id: 5, front: 'C', back: '?' },
    // { id: 6, front: 'C', back: '?' },
    
];
return initialCards.sort(() => Math.random() - 0.5); // Shuffle the cards randomly
};
// Define GameBoard component
const GameBoard = () => {
    // State to keep track of flipped cards
    const [flippedCards, setFlippedCards] = useState([]);
    const [matchedCards, setMatchedCards] = useState([]); // Track matched cards
    const [flipCount, setFlipCount] =useState(0); //state for flip count
    const [cards, setCards] = useState(getShuffledCards());
    const [isGameOver, setIsGameOver] = useState(false);  //new state for game over
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
            const firstCard = cards.find(card => card.id === flippedCards[0]);
            const secondCard = cards.find(card => card.id === cardId);
            
            if(firstCard.front === secondCard.front){
                //it's a match
                setMatchedCards((prev)=> [...prev, firstCard.id, secondCard.id]);
                setFlippedCards([]);//reset flipped cards

                //check for game completion
                if(matchedCards.length +2 === cards.length){
                    setIsGameOver(true);  //set game over state
                }
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
        setCards(getShuffledCards()); //shuffle the cards again
        setIsGameOver(false); //Reset game over state
        // Shuffle the cards again
        //initialCards.sort(()=> Math.random()-0.5);
    };
    
    
    return (
        <div className="text-center mt-5">
            <h2 style={{ marginTop: '120px', color: '#f39c12' }}>Number of Flips: {flipCount}</h2>
            <div className="d-flex justify-content-center mb-4">
                <button onClick={resetGame} className="btn btn-warning me-2">Reset Game</button>
                {isGameOver && (
                    <button onClick={resetGame} className="btn btn-success">Next</button>
                )}
            </div>
            
            {isGameOver && (
                <h3 style={{ color: '#e74c3c' }}>Game Over!</h3>
            )}
    
            {!isGameOver && (
                <div className="game-board">
                    <div className="container">
                        <div className="row justify-content-center gx-1">
                            {cards.map((card) => (
                                <div className="col-6 d-flex justify-content-center mb-3" key={card.id}>
                                    <Card
                                        card={card}
                                        isFlipped={flippedCards.includes(card.id) || matchedCards.includes(card.id)}
                                        onClick={() => handleCardClick(card.id)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};    

export default GameBoard; // Export GameBoard component