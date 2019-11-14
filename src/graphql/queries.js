// eslint-disable
// this is an auto generated file. This will be overwritten

export const getPoll = `query GetPoll($id: ID!) {
  getPoll(id: $id) {
    id
    name
    questions {
      items {
        id
        title
        number
      }
      nextToken
    }
  }
}
`;
export const listPolls = `query ListPolls(
  $filter: ModelPollFilterInput
  $limit: Int
  $nextToken: String
) {
  listPolls(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      questions {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getQuestion = `query GetQuestion($id: ID!) {
  getQuestion(id: $id) {
    id
    title
    number
    poll {
      id
      name
      questions {
        nextToken
      }
    }
    possibleAnswers {
      items {
        id
        text
      }
      nextToken
    }
    responses {
      items {
        id
        questionId
      }
      nextToken
    }
  }
}
`;
export const listQuestions = `query ListQuestions(
  $filter: ModelQuestionFilterInput
  $limit: Int
  $nextToken: String
) {
  listQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      number
      poll {
        id
        name
      }
      possibleAnswers {
        nextToken
      }
      responses {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getAnswer = `query GetAnswer($id: ID!) {
  getAnswer(id: $id) {
    id
    text
    question {
      id
      title
      number
      poll {
        id
        name
      }
      possibleAnswers {
        nextToken
      }
      responses {
        nextToken
      }
    }
    responses {
      items {
        id
        questionId
      }
      nextToken
    }
  }
}
`;
export const listAnswers = `query ListAnswers(
  $filter: ModelAnswerFilterInput
  $limit: Int
  $nextToken: String
) {
  listAnswers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      text
      question {
        id
        title
        number
      }
      responses {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getResponse = `query GetResponse($id: ID!) {
  getResponse(id: $id) {
    id
    questionId
    answer {
      id
      text
      question {
        id
        title
        number
      }
      responses {
        nextToken
      }
    }
    question {
      id
      title
      number
      poll {
        id
        name
      }
      possibleAnswers {
        nextToken
      }
      responses {
        nextToken
      }
    }
  }
}
`;
export const listResponses = `query ListResponses(
  $filter: ModelResponseFilterInput
  $limit: Int
  $nextToken: String
) {
  listResponses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      questionId
      answer {
        id
        text
      }
      question {
        id
        title
        number
      }
    }
    nextToken
  }
}
`;
