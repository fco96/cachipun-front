import React from "react";

interface IProps {
  isVisible: boolean;
  closeFn: () => void;
  type: "is-link" | "is-danger";
}

const Notification: React.FC<IProps> = ({
  isVisible,
  closeFn,
  type,
  children,
}) => {
  const handleClose = () => {
    closeFn();
  };

  return (
    <div className={`notification ${type} ${isVisible ? "" : "is-hidden"}`}>
      <button
        data-testid="closeBtn"
        onClick={handleClose}
        className="delete"
      ></button>
      {children}
    </div>
  );
};

export default Notification;
