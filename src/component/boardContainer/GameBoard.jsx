import {useState} from 'react'

const board = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({onSelectingCell, activePlayerSymbol}) {

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
        if(newGameBoard[rowIndex][colIndex] === null){
           newGameBoard[rowIndex][colIndex] = activePlayerSymbol;
        } // activePlayerSymbol which is a prop determine and changes the symbol of the active player
        return newGameBoard;
       })
      //  Now to change the turn of the player and we have to set the functionality to see which player is active and we will be doing this by Lifting the state up
      // When state is affecting two or more components we need to add the state to the nearest ancestor componet which have access all the those components


      // This function basically help to decide the symbol of the current active player
      onSelectingCell()
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
                    <button onClick={() => clickHandler(rowindex, colindex)} disabled={col !==null} >{col}</button>
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
