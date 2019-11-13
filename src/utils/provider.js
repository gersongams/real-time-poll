import React, { useState } from "react";
import GlobalContext from "./context";

const GlobalProvider = props => {
  const [store, updateStore] = useState([]);
  return (
    <GlobalContext.Provider
      value={{
        data: store,
        triggerUpdate: value => {
          console.log("Updating global provider", value);
          updateStore({ ...store, value });
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
