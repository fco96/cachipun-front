import { IMovement } from "./../../models/Movement";
import { SET_PLAYERS_NAMES, SET_CUSTOM_MOVEMENTS } from "./actionsDefinitions";
import { PlayersActionTypes, MovementsActionTypes } from "./actionTypes";

export function setPlayers(p1: string, p2: string): PlayersActionTypes {
  return {
    type: SET_PLAYERS_NAMES,
    payload: {
      player1: p1,
      player2: p2,
    },
  };
}

export function setCustomMovements(moves: IMovement[]): MovementsActionTypes {
  return {
    type: SET_CUSTOM_MOVEMENTS,
    payload: {
      customMoves: moves,
    },
  };
}
