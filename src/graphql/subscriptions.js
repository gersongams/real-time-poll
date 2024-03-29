// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreatePoll = `subscription OnCreatePoll {
  onCreatePoll {
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
export const onUpdatePoll = `subscription OnUpdatePoll {
  onUpdatePoll {
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
export const onDeletePoll = `subscription OnDeletePoll {
  onDeletePoll {
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
export const onCreateQuestion = `subscription OnCreateQuestion {
  onCreateQuestion {
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
export const onUpdateQuestion = `subscription OnUpdateQuestion {
  onUpdateQuestion {
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
export const onDeleteQuestion = `subscription OnDeleteQuestion {
  onDeleteQuestion {
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
export const onCreateAnswer = `subscription OnCreateAnswer {
  onCreateAnswer {
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
export const onUpdateAnswer = `subscription OnUpdateAnswer {
  onUpdateAnswer {
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
export const onDeleteAnswer = `subscription OnDeleteAnswer {
  onDeleteAnswer {
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
export const onCreateResponse = `subscription OnCreateResponse {
  onCreateResponse {
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
export const onUpdateResponse = `subscription OnUpdateResponse {
  onUpdateResponse {
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
export const onDeleteResponse = `subscription OnDeleteResponse {
  onDeleteResponse {
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
