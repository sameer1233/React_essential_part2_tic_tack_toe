import PlayerInfo from "./PlayerInfo";
import PlayerContainer from "./PlayerContainer";


export default function Player() {
  return (
    <PlayerContainer id="players">
      <PlayerInfo playerName="Player 1"  playerSymbol={"X"}  />
      <PlayerInfo playerName="Player 2"  playerSymbol={"O"}  />
    </PlayerContainer>
  )
}