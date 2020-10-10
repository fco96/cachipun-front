import { SET_PLAYERS_NAMES } from "../actions/actionsDefinitions";
import { PlayersActionTypes } from "./../actions/actionTypes";

interface playersState {
  player1: string;
  player2: string;
}

const initialState: playersState = {
  player1: "",
  player2: "",
};

export function playersReducer(
  state: playersState = initialState,
  action: PlayersActionTypes
): playersState {
  switch (action.type) {
    case SET_PLAYERS_NAMES:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
