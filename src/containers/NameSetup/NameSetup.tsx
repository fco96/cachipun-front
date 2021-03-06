import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import * as ActionCreators from "../../store/actions/actionCreators";
import { RootState } from "../../store/reducers";

const styles = require("./NameSetup.module.scss");

const NameSetup: React.FC = () => {
  const { player1: p1Name, player2: p2Name } = useSelector(
    (state: RootState) => state.players
  );
  const [player1Name, setPlayer1Name] = useState(p1Name);
  const [player2Name, setPlayer2Name] = useState(p2Name);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleValueChange = (setter: Function) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setter(e.target.value);
  };

  const canStart = () => {
    return player1Name !== "" && player2Name !== "";
  };

  const handleClick = () => {
    dispatch(ActionCreators.setPlayers(player1Name, player2Name));
    history.push("/game");
  };

  return (
    <div className={"columns is-centered"}>
      <div className={"column is-one-third"}>
        <h2 className="subtitle"> Enter player's names</h2>

        <div className="columns is-vcentered">
          <div className="column is-one-third">Player 1</div>
          <div className="column">
            <input
              className="input"
              type="text"
              value={player1Name}
              onChange={handleValueChange(setPlayer1Name)}
              data-testid="player1input"
            />
          </div>
        </div>
        <div className="columns is-vcentered">
          <div className="column is-one-third">Player 2</div>
          <div className="column ">
            <input
              className="input"
              type="text"
              value={player2Name}
              onChange={handleValueChange(setPlayer2Name)}
              data-testid="player2input"
            />
          </div>
        </div>

        <button
          className={`button is-primary has-text-weight-bold ${styles.startBtn}`}
          disabled={!canStart()}
          onClick={handleClick}
          data-testid="startBtn"
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default NameSetup;
