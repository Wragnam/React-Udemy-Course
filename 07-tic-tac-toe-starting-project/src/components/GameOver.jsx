export default function GameOver({ winner, onRestart }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <p>{winner} won!</p>}
      {!winner && <p>Draw!</p>}
      <p>
        <button onClick={onRestart}>Restart</button>
      </p>
    </div>
  );
}
