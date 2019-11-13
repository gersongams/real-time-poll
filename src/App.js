import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { withAuthenticator } from "aws-amplify-react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Suspense, lazy, Fragment } from "react";
import PubSub from "@aws-amplify/pubsub";
import Layout from "./components/Layout";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./utils/globalStyle";
import GlobalProvider from "./utils/provider";
import Loading from "./components/Loading";

Amplify.configure(awsconfig);
PubSub.configure(awsconfig);

const signUpConfig = {
  header: "AppSync-Demo",
  hideAllDefaults: true,
  signUpFields: [
    {
      label: "Email",
      key: "username",
      required: true,
      displayOrder: 1,
      type: "string"
    },
    {
      label: "Enter your email again because amazon \t¯\\_(ツ)_/¯",
      key: "email",
      required: true,
      displayOrder: 2,
      type: "string"
    },
    {
      label: "Password",
      key: "password",
      required: true,
      displayOrder: 3,
      type: "password"
    }
  ]
};

const Home = lazy(() => import("./pages/Home"));
const Result = lazy(() => import("./pages/Result"));
const Question = lazy(() => import("./pages/Question"));

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalProvider>
      <GlobalStyle />
      <Router>
        <Layout>
          <Suspense fallback={<Loading />}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/question/:id" component={Question} />
              <Route path="/results" component={Result} />
            </Switch>
          </Suspense>
        </Layout>
      </Router>
    </GlobalProvider>
  </ThemeProvider>
);

export default withAuthenticator(App, {
  signUpConfig
});
