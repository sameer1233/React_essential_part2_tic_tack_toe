import { useState } from "react";

export default function PlayerInfo({ playerName, playerSymbol}) {
  const [isEditing, setIsEditing] = useState(false);
  const [initialName, setName] = useState(playerName)
//function for updating the state with the help of this maniputing playerName span element with input    field
  function selectHandler(){
      // so the best practice for changing the current state is by using the function 
      // automatically the initial value is passed as an argument inside the higher order function
      

      // and we do this because there might be some delay for example
      // setIsEditing(!isEditing)  ==> true
      // setIsEditing(!isEditing)  ==> false but still we get the same result and this is because the react is actually schedualing these updates and according to both updates are tend to be true because the initial value is false. 
      setIsEditing((editing ) =>!editing) 
  }
  
  function editName(event){
      // console.log(event.target.value)
      setName(()=>event.target.value)
  }
//   logic for showing span instead of input or vise vera for is isEditing is ture or false
  const PlayerInfo = isEditing ? (<input type ="text" required value={initialName} onChange={editName}/>) : ( <span className="player-name">{initialName}</span>)
  return (
    <li>
      <span className="player">
       {PlayerInfo}
        <span className="player-symbol">{playerSymbol}</span>
      </span>
      <button onClick={selectHandler}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
