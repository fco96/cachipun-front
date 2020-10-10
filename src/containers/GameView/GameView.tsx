import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import MovementSelector from "../../components/MovementSelector";
import { RootState } from "../../store/reducers";

const movements = [
  { move: "paper", kills: "rock" },
  { move: "rock", kills: "scissors" },
  { move: "scissors", kills: "paper" },
];

const GameView: React.FC = () => {
  const [round, setRound] = useState(1);
  const [turn, setTurn] = useState(1);
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [player1Move, setPlayer1Move] = useState("");
  const [player2Move, setPlayer2Move] = useState("");
  const [winnerName, setWinnerName] = useState("");
  const [movementHash, setMovementHash] = useState<{ [key: string]: string }>(
    {}
  );

  const { player1: p1Name, player2: p2Name } = useSelector(
    (state: RootState) => state.players
  );

  useEffect(() => {
    const base: { [key: string]: string } = {};
    setMovementHash(
      movements.reduce(
        (acc, curr) => ({ ...acc, [curr.move]: curr.kills }),
        base
      )
    );
  }, []);

  useEffect(() => {
    if (
      player1Move &&
      player1Move !== "" &&
      player2Move &&
      player2Move !== ""
    ) {
      if (movementHash[player1Move] === player2Move) {
        if (player1Score + 1 === 3) setWinnerName(p1Name);
        setPlayer1Score(player1Score + 1);
      } else if (movementHash[player2Move] === player1Move) {
        if (player2Score + 1 === 3) setWinnerName(p2Name);
        setPlayer2Score(player2Score + 1);
      }
      setPlayer1Move("");
      setPlayer2Move("");
    }
  }, [player1Move, player2Move]);

  const okPlayer1 = (value: string) => {
    setPlayer1Move(value);
    setTurn(turn + 1);
  };

  const okPlayer2 = (value: string) => {
    setPlayer2Move(value);
    setTurn(turn + 1);
  };

  const player1IsVisible = () => turn % 2 !== 0;

  const playAgain = () => {
    setRound(1);
    setTurn(1);
    setPlayer1Score(0);
    setPlayer2Score(0);
    setPlayer1Move("");
    setPlayer2Move("");
    setWinnerName("");
  };

  return (
    <div>
      <div className={`columns ${winnerName === "" ? "" : "is-hidden"}`}>
        <div className="column">
          <h2 className="title"> Round {round} </h2>
          <h2 className="subtitle"> {player1IsVisible() ? p1Name : p2Name} </h2>
          <div>
            <MovementSelector
              onOk={okPlayer1}
              movements={movements}
              isVisible={player1IsVisible()}
            />
            <MovementSelector
              onOk={okPlayer2}
              movements={movements}
              isVisible={!player1IsVisible()}
            />
          </div>
        </div>

        <div className="column">Aca va el historial de jugadas</div>
      </div>

      <div
        className={`columns ${
          winnerName !== "" ? "" : "is-hidden"
        } is-centered`}
      >
        <div className="column">
          <h1 className="title"> We have a winner!</h1>
          <h2 className="subtitle"> {winnerName} </h2>
          <button className="button is-primary" onClick={playAgain}>
            Play again
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameView;
