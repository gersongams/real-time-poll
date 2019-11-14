import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { API, graphqlOperation } from "aws-amplify";
import { withGlobalContext } from "../utils/provider";
import PieChart from "../components/PieChar";
import styled from "styled-components";
import { Button } from "antd";
import Loading from "../components/Loading";

export const getResponses = `query ListResponses(
  $filter: ModelResponseFilterInput
  $limit: Int
) {
  listResponses(filter: $filter, limit: $limit) {
    items {
      id
      answer {
        id
        text
      }
    }
  }
}
`;

const onCreateResponse = `subscription OnCreateResponse {
  onCreateResponse {
    id
    questionId
    answer {
      id
      text
    }
  }
}
`;

const ResponseStyle = styled.div`
  display: flex;
  width: 750px;
  height: 600px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 56.25em) {
    width: 300px;
    height: 500px;
  }
  .chartContainer {
    width: 100%;
    height: 100%;
  }
`;

const Result = props => {
  let { id } = useParams();
  const [responses, setResponses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const {
        data: {
          listResponses: { items }
        }
      } = await API.graphql(
        graphqlOperation(getResponses, {
          limit: 500,
          filter: {
            questionId: { eq: id }
          }
        })
      );
      const allData = items.map(i => ({ id: i.id, value: i.answer.text }));
      const obj = {};
      allData.forEach(i => {
        obj[i.value] = (obj[i.value] || 0) + 1;
      });
      const data = Object.keys(obj).map(k => ({
        id: k,
        value: obj[k],
        label: k
      }));
      setResponses(data);
      setLoading(false);
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const subscription = API.graphql(
      graphqlOperation(onCreateResponse)
    ).subscribe({
      next: data => {
        const {
          value: {
            data: { onCreateResponse }
          }
        } = data;
        if (onCreateResponse.questionId === id) {
          let responseCopy = [...responses];
          const foundIndex = responseCopy.findIndex(
            x => x.id === onCreateResponse.answer.text
          );
          if (foundIndex >= 0) {
            responseCopy[foundIndex] = {
              ...responses[foundIndex],
              value: (responses[foundIndex].value || 1) + 1
            };
          } else {
            responseCopy.push({
              id: onCreateResponse.answer.text,
              label: onCreateResponse.answer.text,
              value: 1
            });
          }
          setResponses(responseCopy);
        }
      }
    });
    return () => subscription.unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [responses]);

  const getNextId = () => {
    const {
      data: { questions }
    } = props.global;
    const actualQuestion = questions.findIndex(s => s.id === id);
    try {
      return questions[actualQuestion + 1].id;
    } catch (e) {
      return false;
    }
  };

  return (
    <ResponseStyle>
      <h2>Results</h2>
      {loading ? (
        <Loading />
      ) : (
        <div className={"chartContainer"}>
          <PieChart data={responses} />
        </div>
      )}

      {getNextId() ? (
        <Link to={`/question/${getNextId()}`}>
          <Button type={"primary"}>Next Question</Button>
        </Link>
      ) : (
        <Link to={`/thanks`}>
          <Button type={"primary"}>Complete Survey</Button>
        </Link>
      )}
    </ResponseStyle>
  );
};

export default withGlobalContext(Result);
