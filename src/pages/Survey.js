import React from "react";
import { withGlobalContext } from "../utils/provider";

const Survey = props => {
  return (
    <div>
      <h1>Survey</h1>
      {/*<Switch>*/}
      {/*  <Route path='/survey/:questionId' component={Question} />*/}
      {/*</Switch>*/}
    </div>
  );
};

export default withGlobalContext(Survey);
