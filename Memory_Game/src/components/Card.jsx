import "../styles/Card.css";

function Card({ imageUrl, onCardClick }) {
  return (
    <div className="card" onClick={onCardClick}>
      <img src={imageUrl} alt="Card" />
    </div>
  );
}

export default Card;
