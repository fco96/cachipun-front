import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import MovementSelector from "../../components/MovementSelector/MovementSelector";
import RoundsHistory from "../../components/RoundsHistory/RoundsHistory";
import { IRoundsHistory } from "../../models/RoundsHistory";
import { RootState } from "../../store/reducers";

const AMOUNT_OF_WINS = 1;

const GameView: React.FC = () => {
  const [round, setRound] = useState(1);
  const [turn, setTurn] = useState(1);
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [player1Move, setPlayer1Move] = useState("");
  const [player2Move, setPlayer2Move] = useState("");
  const [winnerName, setWinnerName] = useState("");
  const [roundsHistory, setRoundsHistory] = useState<IRoundsHistory[]>([]);
  const [movementHash, setMovementHash] = useState<{ [key: string]: string }>(
    {}
  );

  const history = useHistory();

  const { player1: p1Name, player2: p2Name } = useSelector(
    (state: RootState) => state.players
  );

  const { vanillaMoves, customMoves } = useSelector(
    (state: RootState) => state.moves
  );

  const movementSelector = useCallback(() => {
    if (customMoves.length >= 2) {
      return customMoves;
    } else {
      return vanillaMoves;
    }
  }, [customMoves, vanillaMoves]);

  useEffect(() => {
    const base: { [key: string]: string } = {};
    setMovementHash(
      movementSelector().reduce(
        (acc, curr) => ({ ...acc, [curr.move]: curr.kills }),
        base
      )
    );
  }, [movementSelector]);

  useEffect(() => {
    if (
      player1Move &&
      player1Move !== "" &&
      player2Move &&
      player2Move !== ""
    ) {
      if (movementHash[player1Move] === player2Move) {
        if (player1Score + 1 === AMOUNT_OF_WINS) setWinnerName(p1Name);
        setPlayer1Score(player1Score + 1);
        setRoundsHistory(
          roundsHistory.concat({ round: round, winner: p1Name })
        );
      } else if (movementHash[player2Move] === player1Move) {
        if (player2Score + 1 === AMOUNT_OF_WINS) setWinnerName(p2Name);
        setPlayer2Score(player2Score + 1);
        setRoundsHistory(
          roundsHistory.concat({ round: round, winner: p2Name })
        );
      } else {
        setRoundsHistory(
          roundsHistory.concat({ round: round, winner: "Draw" })
        );
      }
      setPlayer1Move("");
      setPlayer2Move("");
      setRound(round + 1);
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
    setRoundsHistory([]);
  };

  const backToHome = () => {
    history.push("/");
  };

  return (
    <div>
      <div
        className={`columns is-centered ${
          winnerName === "" ? "" : "is-hidden"
        }`}
      >
        <div className="column">
          <div className="columns is-centered">
            <div className="column is-three-quarters">
              <h2 className="title"> Round {round} </h2>
              <h2 className="subtitle">
                {player1IsVisible() ? p1Name : p2Name}
              </h2>
              <MovementSelector
                onOk={okPlayer1}
                movements={movementSelector()}
                isVisible={player1IsVisible()}
              />
              <MovementSelector
                onOk={okPlayer2}
                movements={movementSelector()}
                isVisible={!player1IsVisible()}
              />
            </div>
          </div>
        </div>

        <div className="column">
          <div className="columns is-centered">
            <div className="column is-three-quarters">
              <RoundsHistory history={roundsHistory} />
            </div>
          </div>
        </div>
      </div>

      <div
        className={`columns is-centered ${
          winnerName !== "" ? "" : "is-hidden"
        }`}
      >
        <div className="column is-narrow has-text-centered">
          <h1 className="title"> We have a winner!</h1>
          <h2 className="subtitle"> {winnerName} </h2>
          <div>
            <button
              className="button is-primary is-fullwidth mb-3 has-text-weight-bold"
              onClick={playAgain}
            >
              Play again
            </button>
          </div>
          <div>
            <button
              className="button is-info is-fullwidth has-text-weight-bold"
              onClick={backToHome}
            >
              Return to home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameView;
