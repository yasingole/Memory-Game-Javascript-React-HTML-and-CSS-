import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import GameBoard from "./components/GameBoard";
import ScoreBoard from "./components/ScoreBoard";
import Card from "./components/Card";
import Instructions from "./components/GameInstructions";
import Loading from "./components/Loading";
import GameOver from "./components/Gameover";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [selectedCards, setSelectedCards] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cards, setCards] = useState([]);

  const [loadGame, setLoadGame] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    if (gameStarted && !loadGame) {
      const fetchFaces = async () => {
        try {
          const promises = [];

          for (let i = 0; i < 21; i++) {
            const promise = fetch("https://randomuser.me/api/")
              .then((response) => response.json())
              .then((data) => {
                const imageUrl = data.results[0].picture.large;
                return { id: uuidv4(), imageUrl };
              });
            promises.push(promise);
          }

          const facesData = await Promise.all(promises);
          setCards(facesData);
          setLoadGame(true);
        } catch (error) {
          console.error("Error fetching images", error);
        }
      };
      fetchFaces();
    }
  }, [gameStarted]);

  function handleCardClick(cardId) {
    const isCardAlreadySelected = selectedCards.includes(cardId);

    if (isCardAlreadySelected) {
      setIsGameOver(true);
    } else {
      setCurrentScore((prevScore) => {
        const newScore = prevScore + 1;

        if (newScore > bestScore) {
          setBestScore(newScore);
        }
        return newScore;
      });

      setSelectedCards((prevSelected) => [...prevSelected, cardId]);
    }
  }

  function handleRestart() {
    setIsGameOver(false);
    setCurrentScore(0);
    setSelectedCards([]);
  }

  return (
    <div className="app-container">
      <Header />
      <main>
        {!gameStarted ? (
          <Instructions onStartGame={() => setGameStarted(true)} />
        ) : !loadGame ? (
          <Loading />
        ) : (
          <>
            <ScoreBoard currentScore={currentScore} bestScore={bestScore} />
            <GameBoard cards={cards} onCardClick={handleCardClick} />
            {isGameOver && (
              <GameOver
                score={currentScore}
                bestScore={bestScore}
                onRestart={handleRestart}
              />
            )}
          </>
        )}
      </main>
    </div>
  );
}

export default App;
