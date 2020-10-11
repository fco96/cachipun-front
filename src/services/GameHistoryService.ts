import { IGameHistory } from "./../models/GameHistory";
import axios from "axios";

const API_URL = "http://localhost:3001";
const generateRoute = (path: string) => `${API_URL}/${path}`;

export const getHistory = (): Promise<IGameHistory[]> => {
  return axios.get(generateRoute("game_history")).then(({ data }) => data);
};

export const createHistory = (
  winner: string,
  loser: string
): Promise<IGameHistory> => {
  return axios
    .post(generateRoute("game_history"), {
      winner,
      loser,
    })
    .then(({ data }) => data);
};
