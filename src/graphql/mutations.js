// eslint-disable
// this is an auto generated file. This will be overwritten

export const createPoll = `mutation CreatePoll($input: CreatePollInput!) {
  createPoll(input: $input) {
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
export const updatePoll = `mutation UpdatePoll($input: UpdatePollInput!) {
  updatePoll(input: $input) {
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
export const deletePoll = `mutation DeletePoll($input: DeletePollInput!) {
  deletePoll(input: $input) {
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
export const createQuestion = `mutation CreateQuestion($input: CreateQuestionInput!) {
  createQuestion(input: $input) {
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
  }
}
`;
export const updateQuestion = `mutation UpdateQuestion($input: UpdateQuestionInput!) {
  updateQuestion(input: $input) {
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
  }
}
`;
export const deleteQuestion = `mutation DeleteQuestion($input: DeleteQuestionInput!) {
  deleteQuestion(input: $input) {
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
  }
}
`;
export const createAnswer = `mutation CreateAnswer($input: CreateAnswerInput!) {
  createAnswer(input: $input) {
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
    }
    responses {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const updateAnswer = `mutation UpdateAnswer($input: UpdateAnswerInput!) {
  updateAnswer(input: $input) {
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
    }
    responses {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const deleteAnswer = `mutation DeleteAnswer($input: DeleteAnswerInput!) {
  deleteAnswer(input: $input) {
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
    }
    responses {
      items {
        id
      }
      nextToken
    }
  }
}
`;
export const createResponse = `mutation CreateResponse($input: CreateResponseInput!) {
  createResponse(input: $input) {
    id
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
  }
}
`;
export const updateResponse = `mutation UpdateResponse($input: UpdateResponseInput!) {
  updateResponse(input: $input) {
    id
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
  }
}
`;
export const deleteResponse = `mutation DeleteResponse($input: DeleteResponseInput!) {
  deleteResponse(input: $input) {
    id
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
  }
}
`;
