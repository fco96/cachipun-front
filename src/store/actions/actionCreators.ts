import { SET_PLAYERS_NAMES } from "./actionsDefinitions";
import { PlayersActionTypes } from "./actionTypes";

export function setPlayers(p1: string, p2: string): PlayersActionTypes {
  return {
    type: SET_PLAYERS_NAMES,
    payload: {
      player1: p1,
      player2: p2,
    },
  };
}
