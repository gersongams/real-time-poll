import React, { Fragment, useEffect, useState } from "react";
import { useParams, withRouter } from "react-router-dom";
import { API, graphqlOperation } from "aws-amplify";
import * as queries from "../graphql/queries";
import * as mutations from "../graphql/mutations";

import styled from "styled-components";
import Loading from "../components/Loading";
import { Button, Col, Row } from "antd";

const QuestioStyle = styled.div`
  max-width: 750px;
  margin: 4rem auto 2rem;
  width: 100%;
  h2 {
    text-align: center;
    margin-bottom: 4rem;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 1.5rem;
    .item {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1rem 2rem;
    }
  }
`;

const Question = props => {
  let { id } = useParams();
  const [question, setQuestion] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("my props", props);
    const getData = async () => {
      const {
        data: { getQuestion }
      } = await API.graphql(graphqlOperation(queries.getQuestion, { id }));
      setQuestion(getQuestion);
      console.log(getQuestion);
      setLoading(false);
    };

    getData();
  }, [count]);

  const selectAlternative = async id => {
    console.log("id selected", id, props);
    //await API.graphql(graphqlOperation(mutations.createResponse, { input: { id } }))
  };

  return (
    <QuestioStyle>
      {loading ? (
        <Loading />
      ) : (
        <Fragment>
          <h2>{question.title}</h2>
          <div className="alternatives">
            <div className={"grid"}>
              {question.possibleAnswers.items.map(alternatives => (
                <div className="item" key={alternatives.id}>
                  <Button
                    block
                    shape="round"
                    size={"large"}
                    type={"primary"}
                    onClick={() => selectAlternative(alternatives.id)}
                  >
                    {alternatives.text}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </Fragment>
      )}
    </QuestioStyle>
  );
};

export default withRouter(Question);
