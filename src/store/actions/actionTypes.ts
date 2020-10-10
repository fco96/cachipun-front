import { IMovement } from "./../../models/Movement";
import { SET_PLAYERS_NAMES, SET_CUSTOM_MOVEMENTS } from "./actionsDefinitions";

interface SetPlayerNamesAction {
  type: typeof SET_PLAYERS_NAMES;
  payload: {
    player1: string;
    player2: string;
  };
}

export type PlayersActionTypes = SetPlayerNamesAction;

interface SetMovementsAction {
  type: typeof SET_CUSTOM_MOVEMENTS;
  payload: {
    customMoves: IMovement[];
  };
}

export type MovementsActionTypes = SetMovementsAction;
