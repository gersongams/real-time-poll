import React, { useEffect, useState } from "react";
import { Button } from "antd";
import Globant from "../assets/globant-logo-dark.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { API, graphqlOperation } from "aws-amplify";
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

const listQuestions = `query ListQuestions(
  $filter: ModelQuestionFilterInput
  $limit: Int
) {
  listQuestions(filter: $filter, limit: $limit) {
    items {
      id
      title
      number
      possibleAnswers {
        items{
          text
          id
        } 
      }
    }
  }
}
`;

const Home = props => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const {
        data: {
          listQuestions: { items }
        }
      } = await API.graphql(graphqlOperation(listQuestions));
      const sortedItems = items.sort((a, b) => a.number - b.number);
      setQuestions(sortedItems);
      props.global.triggerUpdate({ questions: sortedItems });
      setLoading(false);
    };

    getData();
  }, [0]);

  return (
    <HomeLayout>
      <img src={Globant} alt="start" />
      <h2>DevWeek Poll</h2>
      {!loading ? (
        <Link to={`/question/${questions[0].id}`}>
          <Button block shape="round" size={"large"} type={"primary"}>
            Start survey
          </Button>
        </Link>
      ) : (
        <Loading />
      )}
    </HomeLayout>
  );
};

export default withGlobalContext(Home);
