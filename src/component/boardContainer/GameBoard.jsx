const board = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  return (
    <ol id="game-board">
      {board.map((row, index) => {
        return (
          <li key={index}>
            <ol>
              {row.map((col, index) => {
                return (
                  <li key={index}>
                    <button>{col}</button>
                  </li>
                );
              })}
            </ol>
          </li>
        );
      })}
    </ol>
  );
}
