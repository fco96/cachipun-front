import { combineReducers } from "redux";
import { playersReducer } from "./playersReducer";

export const rootReducer = combineReducers({
  players: playersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
