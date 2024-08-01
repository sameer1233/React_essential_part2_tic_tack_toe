import {useState} from 'react'

import PlayerInfo from "./PlayerInfo";
import GameBoard from './GameBoard.jsx'


export default function GameContainer(){
  const [active, setactive] = useState("X")
  function onSelectHandler(){
       setactive((currentActivePlayer) => (currentActivePlayer === "X" ? "O"  : "X"));


  }
     return(

        <div id="game-container">
    
         {/* <Player /> */}
         <ol id="players" className='highlight-player'>
           <PlayerInfo playerName="Player 1"  playerSymbol={"X"} activePlayer={active==="X"} />
           <PlayerInfo playerName="Player 2"  playerSymbol={"O"}  activePlayer={active==="O"}/>
        </ol>
        {/* gameboard */}
         Gamer Board
         <GameBoard  onSelectingCell ={onSelectHandler} activePlayerSymbol={active}/>
         
      </div>
    )
}