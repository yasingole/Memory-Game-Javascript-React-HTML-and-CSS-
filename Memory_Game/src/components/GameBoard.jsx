import { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import Card from "./Card";
import "../styles/Gameboard.css";

function GameBoard({ cards, onCardClick }) {
  const [displayedCards, setDisplayedCards] = useState([]);
  const isInitialLoad = useRef(true);



  function getRandomCards(cards) {
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    return cards.slice(0, 9);
  }

  function handleCardClick(cardId) {
    onCardClick(cardId);
    const newBatch= getRandomCards(cards);
    setDisplayedCards(newBatch);
  }

  useEffect(() => {
    if (cards.length > 0 && isInitialLoad.current) {
        const randomNineCards= getRandomCards([...cards]);
        setDisplayedCards(randomNineCards);
        isInitialLoad.current= false;
    }
  }, [cards]);



  return (
    <div className="gameboard">
      {displayedCards.map((card) => (
        <Card
          key={card.id}
          imageUrl={card.imageUrl}
          onCardClick={() => handleCardClick(card.id)}
        />
      ))}
    </div>
  );
}

export default GameBoard;
