// src/components/GameBoard.js
import React, { useState } from 'react';
import Card from './Card';
import '../App.css';

// Function to get card data based on the level
const getCardsForLevel = (level) => {
    let totalCards;

    switch (level) {
        case 1:
            totalCards = 4; // 2x2
            break;
        case 2:
            totalCards = 6; // 3x2
            break;
        case 3:
            totalCards = 8; // 2x4
            break;
        case 4:
            totalCards = 10; // 2x5
            break;
        case 5:
            totalCards = 12; // 3x4
            break;
        case 6:
            totalCards = 14; // 2x7
            break;
        case 7:
            totalCards = 16; // 4x4
            break;
        case 8:
            totalCards = 18; // 3x6
            break;
        case 9:
            totalCards = 20; // 4x5
            break;
        default:
            return []; // End game for levels above 9
    }

    const totalPairs = totalCards / 2; // Total pairs of cards
    const cards = [];
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P']; // More letters for more cards

    for (let i = 0; i < totalPairs; i++) {
        const letter = letters[i % letters.length]; // Cycle through letters
        cards.push({ id: i * 2 + 1, front: letter, back: '?' });
        cards.push({ id: i * 2 + 2, front: letter, back: '?' });
    }

    return cards.sort(() => Math.random() - 0.5); // Shuffle the cards randomly
};

// Define GameBoard component
const GameBoard = () => {
    const [flippedCards, setFlippedCards] = useState([]);
    const [matchedCards, setMatchedCards] = useState([]);
    const [flipCount, setFlipCount] = useState(0);
    const [level, setLevel] = useState(1); // Start with level 1
    const [cards, setCards] = useState(getCardsForLevel(1));
    const [isGameOver, setIsGameOver] = useState(false);

    // Function to handle card clicks
    const handleCardClick = (cardId) => {
        if (flippedCards.includes(cardId) || matchedCards.includes(cardId)) return;

        setFlippedCards((prev) => [...prev, cardId]);
        setFlipCount((prev) => prev + 1);

        if (flippedCards.length === 1) {
            const firstCard = cards.find(card => card.id === flippedCards[0]);
            const secondCard = cards.find(card => card.id === cardId);

            if (firstCard.front === secondCard.front) {
                setMatchedCards((prev) => [...prev, firstCard.id, secondCard.id]);
                setFlippedCards([]); // Reset flipped cards

                // Check for game completion
                if (matchedCards.length + 2 === cards.length) {
                    setIsGameOver(true);  // Set game over state
                }
            } else {
                setTimeout(() => {
                    setFlippedCards([]); // Flip back after a short delay
                }, 1000);
            }
        }
    };

    // Function to reset the game
    const resetGame = () => {
        setFlippedCards([]);
        setMatchedCards([]);
        setFlipCount(0);
        setCards(getCardsForLevel(level)); // Reset with current level's cards
        setIsGameOver(false);
    };

    // Function to go to the next level or reset to level 1
    const nextLevel = () => {
        if (level < 9) {
            setLevel((prev) => prev + 1);
            setCards(getCardsForLevel(level + 1)); // Load next level cards
        } else {
            setLevel(1); // Reset to level 1
            setCards(getCardsForLevel(1)); // Load level 1 cards
        }
        setFlippedCards([]);
        setMatchedCards([]);
        setFlipCount(0);
        setIsGameOver(false);
    };

    // Function to skip to the next level
    const skipLevel = () => {
        if (level < 9) {
            setLevel((prev) => prev + 1);
            setCards(getCardsForLevel(level + 1)); // Load next level cards
        } else {
            setLevel(1); // Reset to level 1
            setCards(getCardsForLevel(1)); // Load level 1 cards
        }
        setFlippedCards([]);
        setMatchedCards([]);
        setFlipCount(0);
    };

    // Function to get the number of columns based on the current level
    const getColumnCount = (level) => {
        switch (level) {
            case 1: return 2; // 2x2
            case 2: return 2; // 3x2
            case 3: return 4; // 2x4
            case 4: return 5; // 2x5
            case 5: return 4; // 3x4
            case 6: return 7; // 2x7
            case 7: return 4; // 4x4
            case 8: return 6; // 3x6
            case 9: return 5; // 4x5
            default: return 0; // No columns for levels above 9
        }
    };

    return (
        <div className="text-center mt-5">
            <h2 style={{ marginTop: '120px', color: '#f39c12' }}>Number of Flips: {flipCount}</h2>
            <div className="d-flex justify-content-center mb-4">
                <div className="me-auto"></div>
                <div className="d-flex gap-2">
                    <button onClick={resetGame} className="btn btn-warning">Reset Game</button>
                    {isGameOver && (
                        <button onClick={nextLevel} className="btn btn-success">Next</button>
                    )}
                    <button onClick={skipLevel} className="btn btn-info">Skip Level</button>
                </div>
            </div>

            {isGameOver && (
                <h3 style={{ color: '#e74c3c' }}>Game Over!</h3>
            )}

            {!isGameOver && (
                <div className="game-board" style={{ gridTemplateColumns: `repeat(${getColumnCount(level)}, 1fr)` }}>
                    {cards.map((card) => (
                        <div
                            className="card-container"
                            key={card.id}
                        >
                            <Card
                                card={card}
                                isFlipped={flippedCards.includes(card.id) || matchedCards.includes(card.id)}
                                onClick={() => handleCardClick(card.id)}
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default GameBoard; // Export GameBoard component
