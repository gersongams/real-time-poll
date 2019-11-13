import React, { useEffect, useState } from "react";
import { Button } from "antd";
import Globant from "../assets/globant-logo-dark.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { API, graphqlOperation } from "aws-amplify";
import * as queries from "../graphql/queries";
import { withGlobalContext } from "../utils/provider";
import Loading from "../components/Loading";

const HomeLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: calc(100vh - 64px);
  h2 {
    text-align: center;
    margin-bottom: 1rem;
  }
  img {
    max-width: 300px;
    margin-bottom: 1rem;
  }
`;

const Home = props => {
  const [questions, setQuestions] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("my props", props);
    const getData = async () => {
      const {
        data: {
          listQuestions: { items }
        }
      } = await API.graphql(graphqlOperation(queries.listQuestions));
      setQuestions(items);
      props.global.triggerUpdate(items);
      console.log(items);
      setLoading(false);
    };

    getData();
  }, [count]);

  let questionSorted = questions.sort((a, b) => a.number - b.number);

  return (
    <HomeLayout>
      <h2>Welcome to the Globant Survey</h2>
      <img src={Globant} alt="start" />
      {!loading ? (
        <Link to={`/question/${questionSorted[0].id}`}>
          <Button type="primary">Start survey</Button>
        </Link>
      ) : (
        <Loading />
      )}
    </HomeLayout>
  );
};

export default withGlobalContext(Home);
