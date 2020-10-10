import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as ActionCreators from "../../store/actions/actionCreators";

const styles = require("./Home.module.scss");

const Home: React.FC = () => {
  const [player1Name, setPlayer1Name] = useState("");
  const [player2Name, setPlayer2Name] = useState("");

  const dispatch = useDispatch();

  const handleValueChange = (setter: Function) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setter(e.target.value);
  };

  const canStart = () => {
    return player1Name !== "" && player2Name !== "";
  };

  const handleClick = () => {
    console.log(player1Name, player2Name);
    dispatch(ActionCreators.setPlayers(player1Name, player2Name));
  };

  return (
    <div className={"columns is-centered"}>
      <div className={"column is-one-third"}>
        <div className="columns">
          <div className="column is-one-third">Player 1</div>
          <div className="column">
            <input
              className="input"
              type="text"
              value={player1Name}
              onChange={handleValueChange(setPlayer1Name)}
            />
          </div>
        </div>
        <div className="columns">
          <div className="column is-one-third">Player 2</div>
          <div className="column ">
            <input
              className="input"
              type="text"
              value={player2Name}
              onChange={handleValueChange(setPlayer2Name)}
            />
          </div>
        </div>

        <button
          className={`button is-primary ${styles.startBtn}`}
          disabled={!canStart()}
          onClick={handleClick}
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default Home;
