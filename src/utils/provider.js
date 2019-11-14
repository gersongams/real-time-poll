import React, { useEffect, useState } from "react";
import GlobalContext from "./context";

const GlobalProvider = props => {
  const [store, updateStore] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("store");
    const parsedData = JSON.parse(data);
    if (data) {
      updateStore(parsedData);
    }
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        data: store,
        triggerUpdate: value => {
          const data = { ...store, ...value };
          updateStore(data);
          localStorage.setItem("store", JSON.stringify(data));
        }
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export const withGlobalContext = ChildComponent => props => (
  <GlobalContext.Consumer>
    {context => <ChildComponent {...props} global={context} />}
  </GlobalContext.Consumer>
);

export default GlobalProvider;
