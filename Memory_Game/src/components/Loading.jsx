import "../styles/Loading.css";

function Loading() {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p className="loading-text">Loading faces...</p>
    </div>
  );
}

export default Loading;