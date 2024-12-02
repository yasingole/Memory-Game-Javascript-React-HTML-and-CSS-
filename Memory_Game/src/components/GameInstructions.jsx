import "../styles/GameInstructions.css";


function GameInstructions({onStartGame}) {
  return (
    <div className="instructions-container">
      <h1>Memory Game</h1>
      <div className="instructions-content">
        <h2>How to Play</h2>
        <div className="rules">
          <p>Test your memory with these AI-generated faces!</p>
          <ul>
            <li>Click on any card to earn a point</li>
            <li>Don't click on the same face twice!</li>
            <li>Cards will shuffle after each click</li>
            <li>Try to get all 21 faces for a perfect score</li>
          </ul>
        </div>
        <button className="start-button" onClick={onStartGame}>
          Start Game
        </button>
      </div>
    </div>
  );
}

export default GameInstructions