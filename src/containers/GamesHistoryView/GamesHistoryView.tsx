import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getHistory } from "../../services/GameHistoryService";

const GamesHistoryView: React.FC = () => {
  const [tableRows, setTableRows] = useState<React.ReactNode>();

  const history = useHistory();

  const formatDate = useCallback((dateString: string) => {
    const date = new Date(dateString);
    const ye = new Intl.DateTimeFormat("en", { year: "numeric" }).format(date);
    const mo = new Intl.DateTimeFormat("en", { month: "numeric" }).format(date);
    const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(date);
    return `${da}-${mo}-${ye}`;
  }, []);

  useEffect(() => {
    getHistory().then((resp) => {
      const rows = resp.map((x) => (
        <tr key={x.id}>
          <th>{x.winner}</th>
          <th>{x.loser}</th>
          <th>{formatDate(x.created_at)}</th>
        </tr>
      ));
      setTableRows(rows);
    });
  }, [formatDate]);

  const handleBack = () => {
    history.push("/");
  };

  return (
    <div>
      <h1 className="title">Games History</h1>
      <table className="table is-fullwidth">
        <thead>
          <tr>
            <th>Winner</th>
            <th>Loser</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
      <div>
        <button
          className="button is-info has-text-weight-bold"
          onClick={handleBack}
        >
          Go back
        </button>
      </div>
    </div>
  );
};

export default GamesHistoryView;
