import { SET_PLAYERS_NAMES } from "./actionsDefinitions";

interface SetPlayerNamesAction {
  type: typeof SET_PLAYERS_NAMES;
  payload: {
    player1: string;
    player2: string;
  };
}

export type PlayersActionTypes = SetPlayerNamesAction;
