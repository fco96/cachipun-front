import React, { useEffect, useState } from "react";
import { IMovement } from "../models/Movement";

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
        <option key={move} value={move}>
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
  }, movements);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
  };

  const handleOk = () => {
    onOk(value);
    setValue("default");
  };

  return (
    <div className={`select ${isVisible ? "" : "is-hidden"}`}>
      <select value={value} onChange={handleChange}>
        {options}
      </select>

      <button
        className="button is-primary"
        onClick={handleOk}
        disabled={value === "default"}
      >
        Ok
      </button>
    </div>
  );
};

export default MovementSelector;
