import { useState } from "react";

export default function PlayerInfo({button, playerName, playerSymbol}) {
  const [isEditing, setIsEditing] = useState(false);
  
  function selectHandler(){
      console.log("hello world")
      setIsEditing(true)
      console.log(isEditing)
  }

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
