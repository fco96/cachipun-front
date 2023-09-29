import { IGameHistory } from "./../models/GameHistory";

const API_URL = "http://localhost:3001";

export const getHistory = (): Promise<IGameHistory[]> => {
  return new Promise((resolve, reject) => {
    try {
      const history = JSON.parse(localStorage.getItem('game_history') || '[]')
      resolve(history)
    } catch (error) {
      reject(error)
    }
  })
};

export const createHistory = (
  winner: string,
  loser: string
): Promise<IGameHistory> => {
  return new Promise((resolve, reject) => {
    try {
      const history: IGameHistory[] = JSON.parse(localStorage.getItem('game_history') || '[]')
      const newItem = { winner, loser, created_at: new Date().toISOString() }
      history.push(newItem)
      localStorage.setItem('game_history', JSON.stringify(history))
      resolve(newItem)
    } catch (error) {
      reject(error)
    }
  })
};
