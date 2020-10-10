import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { RootState } from "../../store/reducers";
import * as ActionCreators from "../../store/actions/actionCreators";

const CustomRules: React.FC = () => {
  const { vanillaMoves, customMoves } = useSelector(
    (state: RootState) => state.moves
  );

  const [currentConfig, setCurrentConfig] = useState("");

  useEffect(() => {
    if (customMoves.length > 0) {
      setCurrentConfig(JSON.stringify(customMoves));
    } else {
      setCurrentConfig(JSON.stringify(vanillaMoves));
    }
  }, [vanillaMoves, customMoves]);

  const history = useHistory();
  const dispatch = useDispatch();

  const handleBack = () => {
    history.push("/");
  };

  const hanldleInputChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setCurrentConfig(event.target.value);
  };

  const handleSave = () => {
    dispatch(ActionCreators.setCustomMovements(JSON.parse(currentConfig)));
  };

  const handleReset = () => {
    dispatch(ActionCreators.setCustomMovements(vanillaMoves));
  };

  return (
    <div className="columns is-centered">
      <div className="column is-8">
        <h1 className="title">Custom rules</h1>
        <h2 className="subtitle"> Please submit the configuration </h2>

        <div className="mb-5">
          <textarea
            value={currentConfig}
            className="textarea"
            placeholder="Input the configuration"
            rows={10}
            onChange={hanldleInputChange}
          ></textarea>
        </div>

        <div>
          <button
            className="button is-primary is-fullwidth has-text-weight-bold mb-3"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
        <div>
          <button
            className="button is-danger is-fullwidth has-text-weight-bold mb-3"
            onClick={handleReset}
          >
            Reset to default
          </button>
        </div>
        <div>
          <button
            className="button is-info is-fullwidth has-text-weight-bold"
            onClick={handleBack}
          >
            Go back
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomRules;
