import React, { useEffect, useState } from "react";
import { IRoundsHistory } from "../../models/RoundsHistory";

interface IProps {
  history: IRoundsHistory[];
}

const RoundsHistory: React.FC<IProps> = ({ history }) => {
  const [tableRows, setTableRows] = useState<React.ReactNode>();

  useEffect(() => {
    setTableRows(
      history.map((r, index) => {
        return (
          <tr key={index} data-testid="history-row">
            <th>{r.round}</th>
            <th>{r.winner}</th>
          </tr>
        );
      })
    );
  }, [history]);

  return (
    <div>
      <table className="table is-fullwidth">
        <thead>
          <tr>
            <th>Round</th>
            <th>Winner</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
    </div>
  );
};

export default RoundsHistory;
