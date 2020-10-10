import { combineReducers } from "redux";
import { movementsReducer } from "./movementsReducer";
import { playersReducer } from "./playersReducer";

export const rootReducer = combineReducers({
  players: playersReducer,
  moves: movementsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
