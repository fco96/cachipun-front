import React from "react";
import { useHistory } from "react-router-dom";

const Home: React.FC = () => {
  const history = useHistory();

  const handlePlay = () => {
    history.push("/name_setup");
  };

  const handleCustomRules = () => {
    history.push("/custom_rules");
  };

  return (
    <div className="columns is-centered">
      <div className="column is-one-third">
        <h1 className="title">Rock, Paper, Scissors</h1>
        <h2 className="subtitle"> Select an option</h2>

        <div className="mb-3">
          <button
            className="button is-primary is-fullwidth has-text-weight-bold	"
            onClick={handlePlay}
          >
            Play
          </button>
        </div>
        <div>
          <button
            className="button is-info is-fullwidth has-text-weight-bold"
            onClick={handleCustomRules}
          >
            Charge custom rules
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
