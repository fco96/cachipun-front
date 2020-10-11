import React from "react";
import { Provider } from "react-redux";
import store from "../../store";

interface IProps {
  store: typeof store;
}

const StoreProvider: React.FC<IProps> = ({ children, store }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
