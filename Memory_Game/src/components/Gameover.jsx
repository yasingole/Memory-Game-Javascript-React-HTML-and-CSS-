import "../styles/GameOver.css";

function GameOver({ score, bestScore, onRestart }) {
  return (
    <div className="game-over-overlay">
      <div className="game-over-content">
        <h2>Game Over!</h2>
        <p>Your Score: {score}</p>
        <p>Best Score: {bestScore}</p>
        <button className="restart-button" onClick={onRestart}>
          Play Again
        </button>
      </div>
    </div>
  );
}

export default GameOver;