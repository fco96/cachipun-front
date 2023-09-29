import React, { useEffect, useState } from "react";
import { IMovement } from "../../models/Movement";

const styles = require("./MovementSelector.module.scss");

interface IProps {
  onOk: (x: string) => void;
  movements: IMovement[];
  isVisible: boolean;
}

const MovementSelector: React.FC<IProps> = ({ onOk, movements, isVisible }) => {
  const [options, setOptions] = useState<React.ReactNode[]>();
  const [value, setValue] = useState("default");

  useEffect(() => {
    const newOptions = movements.map(({ move }) => {
      return (
        <option data-testid="selectOption" key={move} value={move}>
          {move}
        </option>
      );
    });
    const defaultOption = (
      <option key="default" value="default" disabled>
        Select a movement
      </option>
    );
    setOptions([defaultOption, ...newOptions]);
  }, [movements]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
  };

  const handleOk = () => {
    onOk(value);
    setValue("default");
  };

  return (
    <div className={`${isVisible ? "" : "is-hidden"}`}>
      <div className={`select is-fullwidth ${styles.select}`}>
        <select value={value} onChange={handleChange}>
          {options}
        </select>
      </div>
      <button
        className="button is-primary is-fullwidth has-text-weight-bold"
        onClick={handleOk}
        disabled={value === "default"}
      >
        Ok
      </button>
    </div>
  );
};

export default MovementSelector;
