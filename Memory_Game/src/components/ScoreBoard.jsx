import "../styles/ScoreBoard.css"

function ScoreBoard({ currentScore, bestScore }) {
  return (
    <div className="scoreboard">
      <div className="score">
        <span className="label">Current Score:</span>
        <span className="scoreValue">{currentScore}</span>
      </div>
      <div className="score">
        <span className="label">Best Score:</span>
        <span className="scoreValue">{bestScore}</span>
      </div>
    </div>
  );
}

export default ScoreBoard;
