import {useState} from 'react'

const board = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {

//   Adding the click functionality to our gameboard/
//  and updating the state whenever the userclick on the cell and reflecting the result with an x
  const [gameBoard, upDategameBoard] = useState(board);
   
  function clickHandler(rowIndex, colIndex){
       upDategameBoard((previousGameBoard) =>{
        // we have created a copy of initialBoard because it is a good practice  
        // to avoid the bugs and etx

        const newGameBoard = [...previousGameBoard.map((innerCell)   =>{
           return  [...innerCell]  // we have used the map method to render the inner cell of the board
        })]
        newGameBoard[rowIndex][colIndex] = 'X';  
        return newGameBoard;
       })
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowindex) => {
        return (
          <li key={rowindex}>
            <ol>
              {row.map((col, colindex) => {
                return (
                  <li key={colindex}>
                    <button onClick={() => clickHandler(rowindex, colindex)}>{col}</button>
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
