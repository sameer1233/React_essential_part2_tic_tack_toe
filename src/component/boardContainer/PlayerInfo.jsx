import { useState } from "react";

export default function PlayerInfo({button, playerName, playerSymbol}) {
  const [isEditing, setIsEditing] = useState(false);
  
//   function for updating the state with the help of this maniputing playerName span element with input field
  function selectHandler(){
      console.log("hello world")
      setIsEditing(true)
      console.log(isEditing)
  }
  
//   logic for showing span instead of input or vise vera for is isEditing is ture or false
  const PlayerInfo = isEditing ? (<input type ="text" required/>) : ( <span className="player-name">{playerName}</span>)
  return (
    <li>
      <span className="player">
       {PlayerInfo}
        <span className="player-symbol">{playerSymbol}</span>
      </span>
      <button onClick={selectHandler}>{button}</button>
    </li>
  );
}
