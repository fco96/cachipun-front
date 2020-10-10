import { IMovement } from "./../../models/Movement";
import { MovementsActionTypes } from "./../actions/actionTypes";
import { SET_CUSTOM_MOVEMENTS } from "./../actions/actionsDefinitions";

interface movesState {
  vanillaMoves: IMovement[];
  customMoves: IMovement[];
}

const initialState: movesState = {
  vanillaMoves: [
    { move: "paper", kills: "rock" },
    { move: "rock", kills: "scissors" },
    { move: "scissors", kills: "paper" },
  ],
  customMoves: [],
};

export function movementsReducer(
  state: movesState = initialState,
  action: MovementsActionTypes
): movesState {
  switch (action.type) {
    case SET_CUSTOM_MOVEMENTS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
