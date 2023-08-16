/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePlatformSubscription = /* GraphQL */ `
  subscription OnCreatePlatformSubscription(
    $filter: ModelSubscriptionPlatformSubscriptionFilterInput
  ) {
    onCreatePlatformSubscription(filter: $filter) {
      id
      duration
      description
      stripe_product_id
      name
      bootcamp
      bootcamp_type
      UserSubscription {
        items {
          id
          beginDate
          expirationDate
          stripe_subscription_id
          bootcamp
          bootcamp_type
          createdAt
          updatedAt
          platformSubscriptionUserSubscriptionId
          studentUserSubscriptionId
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdatePlatformSubscription = /* GraphQL */ `
  subscription OnUpdatePlatformSubscription(
    $filter: ModelSubscriptionPlatformSubscriptionFilterInput
  ) {
    onUpdatePlatformSubscription(filter: $filter) {
      id
      duration
      description
      stripe_product_id
      name
      bootcamp
      bootcamp_type
      UserSubscription {
        items {
          id
          beginDate
          expirationDate
          stripe_subscription_id
          bootcamp
          bootcamp_type
          createdAt
          updatedAt
          platformSubscriptionUserSubscriptionId
          studentUserSubscriptionId
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeletePlatformSubscription = /* GraphQL */ `
  subscription OnDeletePlatformSubscription(
    $filter: ModelSubscriptionPlatformSubscriptionFilterInput
  ) {
    onDeletePlatformSubscription(filter: $filter) {
      id
      duration
      description
      stripe_product_id
      name
      bootcamp
      bootcamp_type
      UserSubscription {
        items {
          id
          beginDate
          expirationDate
          stripe_subscription_id
          bootcamp
          bootcamp_type
          createdAt
          updatedAt
          platformSubscriptionUserSubscriptionId
          studentUserSubscriptionId
          owner
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateUpvote = /* GraphQL */ `
  subscription OnCreateUpvote(
    $filter: ModelSubscriptionUpvoteFilterInput
    $owner: String
  ) {
    onCreateUpvote(filter: $filter, owner: $owner) {
      id
      type
      upVote
      downVote
      date
      Question {
        id
        datePosted
        content
        status
        images
        Student {
          id
          sub
          username
          firstname
          lastname
          email
          image
          blocked
          about
          links
          devOps
          frontendFrameworks
          serverlessFrameworks
          languages
          createdAt
          updatedAt
          owner
          __typename
        }
        Course {
          id
          name
          description
          image
          difficulty
          framework
          programming_language
          web_framework
          mobile_framework
          overview
          trailer
          proposedCourses
          createdAt
          updatedAt
          __typename
        }
        Response {
          nextToken
          __typename
        }
        Upvote {
          nextToken
          __typename
        }
        group
        votes
        createdAt
        updatedAt
        courseQuestionId
        studentQuestionId
        owner
        __typename
      }
      Response {
        id
        datePosted
        content
        status
        images
        Question {
          id
          datePosted
          content
          status
          images
          group
          votes
          createdAt
          updatedAt
          courseQuestionId
          studentQuestionId
          owner
          __typename
        }
        Student {
          id
          sub
          username
          firstname
          lastname
          email
          image
          blocked
          about
          links
          devOps
          frontendFrameworks
          serverlessFrameworks
          languages
          createdAt
          updatedAt
          owner
          __typename
        }
        Upvote {
          nextToken
          __typename
        }
        AnswerResponse {
          nextToken
          __typename
        }
        group
        bestAnswer
        votes
        createdAt
        updatedAt
        questionResponseId
        studentResponseId
        owner
        __typename
      }
      AnswerResponse {
        id
        datePosted
        content
        status
        images
        Response {
          id
          datePosted
          content
          status
          images
          group
          bestAnswer
          votes
          createdAt
          updatedAt
          questionResponseId
          studentResponseId
          owner
          __typename
        }
        Student {
          id
          sub
          username
          firstname
          lastname
          email
          image
          blocked
          about
          links
          devOps
          frontendFrameworks
          serverlessFrameworks
          languages
          createdAt
          updatedAt
          owner
          __typename
        }
        Upvote {
          nextToken
          __typename
        }
        group
        createdAt
        updatedAt
        responseAnswerResponseId
        studentAnswerResponseId
        owner
        __typename
      }
      Student {
        id
        BeginCourse {
          nextToken
          __typename
        }
        BeginModule {
          nextToken
          __typename
        }
        BeginLesson {
          nextToken
          __typename
        }
        Question {
          nextToken
          __typename
        }
        Response {
          nextToken
          __typename
        }
        AnswerResponse {
          nextToken
          __typename
        }
        Upvote {
          nextToken
          __typename
        }
        UserSubscription {
          nextToken
          __typename
        }
        FeedBack {
          nextToken
          __typename
        }
        SupportTicket {
          nextToken
          __typename
        }
        sub
        username
        firstname
        lastname
        email
        image
        blocked
        about
        links
        devOps
        frontendFrameworks
        serverlessFrameworks
        languages
        createdAt
        updatedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      responseUpvoteId
      answerResponseUpvoteId
      questionUpvoteId
      studentUpvoteId
      owner
      __typename
    }
  }
`;
export const onUpdateUpvote = /* GraphQL */ `
  subscription OnUpdateUpvote(
    $filter: ModelSubscriptionUpvoteFilterInput
    $owner: String
  ) {
    onUpdateUpvote(filter: $filter, owner: $owner) {
      id
      type
      upVote
      downVote
      date
      Question {
        id
        datePosted
        content
        status
        images
        Student {
          id
          sub
          username
          firstname
          lastname
          email
          image
          blocked
          about
          links
          devOps
          frontendFrameworks
          serverlessFrameworks
          languages
          createdAt
          updatedAt
          owner
          __typename
        }
        Course {
          id
          name
          description
          image
          difficulty
          framework
          programming_language
          web_framework
          mobile_framework
          overview
          trailer
          proposedCourses
          createdAt
          updatedAt
          __typename
        }
        Response {
          nextToken
          __typename
        }
        Upvote {
          nextToken
          __typename
        }
        group
        votes
        createdAt
        updatedAt
        courseQuestionId
        studentQuestionId
        owner
        __typename
      }
      Response {
        id
        datePosted
        content
        status
        images
        Question {
          id
          datePosted
          content
          status
          images
          group
          votes
          createdAt
          updatedAt
          courseQuestionId
          studentQuestionId
          owner
          __typename
        }
        Student {
          id
          sub
          username
          firstname
          lastname
          email
          image
          blocked
          about
          links
          devOps
          frontendFrameworks
          serverlessFrameworks
          languages
          createdAt
          updatedAt
          owner
          __typename
        }
        Upvote {
          nextToken
          __typename
        }
        AnswerResponse {
          nextToken
          __typename
        }
        group
        bestAnswer
        votes
        createdAt
        updatedAt
        questionResponseId
        studentResponseId
        owner
        __typename
      }
      AnswerResponse {
        id
        datePosted
        content
        status
        images
        Response {
          id
          datePosted
          content
          status
          images
          group
          bestAnswer
          votes
          createdAt
          updatedAt
          questionResponseId
          studentResponseId
          owner
          __typename
        }
        Student {
          id
          sub
          username
          firstname
          lastname
          email
          image
          blocked
          about
          links
          devOps
          frontendFrameworks
          serverlessFrameworks
          languages
          createdAt
          updatedAt
          owner
          __typename
        }
        Upvote {
          nextToken
          __typename
        }
        group
        createdAt
        updatedAt
        responseAnswerResponseId
        studentAnswerResponseId
        owner
        __typename
      }
      Student {
        id
        BeginCourse {
          nextToken
          __typename
        }
        BeginModule {
          nextToken
          __typename
        }
        BeginLesson {
          nextToken
          __typename
        }
        Question {
          nextToken
          __typename
        }
        Response {
          nextToken
          __typename
        }
        AnswerResponse {
          nextToken
          __typename
        }
        Upvote {
          nextToken
          __typename
        }
        UserSubscription {
          nextToken
          __typename
        }
        FeedBack {
          nextToken
          __typename
        }
        SupportTicket {
          nextToken
          __typename
        }
        sub
        username
        firstname
        lastname
        email
        image
        blocked
        about
        links
        devOps
        frontendFrameworks
        serverlessFrameworks
        languages
        createdAt
        updatedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      responseUpvoteId
      answerResponseUpvoteId
      questionUpvoteId
      studentUpvoteId
      owner
      __typename
    }
  }
`;
export const onDeleteUpvote = /* GraphQL */ `
  subscription OnDeleteUpvote(
    $filter: ModelSubscriptionUpvoteFilterInput
    $owner: String
  ) {
    onDeleteUpvote(filter: $filter, owner: $owner) {
      id
      type
      upVote
      downVote
      date
      Question {
        id
        datePosted
        content
        status
        images
        Student {
          id
          sub
          username
          firstname
          lastname
          email
          image
          blocked
          about
          links
          devOps
          frontendFrameworks
          serverlessFrameworks
          languages
          createdAt
          updatedAt
          owner
          __typename
        }
        Course {
          id
          name
          description
          image
          difficulty
          framework
          programming_language
          web_framework
          mobile_framework
          overview
          trailer
          proposedCourses
          createdAt
          updatedAt
          __typename
        }
        Response {
          nextToken
          __typename
        }
        Upvote {
          nextToken
          __typename
        }
        group
        votes
        createdAt
        updatedAt
        courseQuestionId
        studentQuestionId
        owner
        __typename
      }
      Response {
        id
        datePosted
        content
        status
        images
        Question {
          id
          datePosted
          content
          status
          images
          group
          votes
          createdAt
          updatedAt
          courseQuestionId
          studentQuestionId
          owner
          __typename
        }
        Student {
          id
          sub
          username
          firstname
          lastname
          email
          image
          blocked
          about
          links
          devOps
          frontendFrameworks
          serverlessFrameworks
          languages
          createdAt
          updatedAt
          owner
          __typename
        }
        Upvote {
          nextToken
          __typename
        }
        AnswerResponse {
          nextToken
          __typename
        }
        group
        bestAnswer
        votes
        createdAt
        updatedAt
        questionResponseId
        studentResponseId
        owner
        __typename
      }
      AnswerResponse {
        id
        datePosted
        content
        status
        images
        Response {
          id
          datePosted
          content
          status
          images
          group
          bestAnswer
          votes
          createdAt
          updatedAt
          questionResponseId
          studentResponseId
          owner
          __typename
        }
        Student {
          id
          sub
          username
          firstname
          lastname
          email
          image
          blocked
          about
          links
          devOps
          frontendFrameworks
          serverlessFrameworks
          languages
          createdAt
          updatedAt
          owner
          __typename
        }
        Upvote {
          nextToken
          __typename
        }
        group
        createdAt
        updatedAt
        responseAnswerResponseId
        studentAnswerResponseId
        owner
        __typename
      }
      Student {
        id
        BeginCourse {
          nextToken
          __typename
        }
        BeginModule {
          nextToken
          __typename
        }
        BeginLesson {
          nextToken
          __typename
        }
        Question {
          nextToken
          __typename
        }
        Response {
          nextToken
          __typename
        }
        AnswerResponse {
          nextToken
          __typename
        }
        Upvote {
          nextToken
          __typename
        }
        UserSubscription {
          nextToken
          __typename
        }
        FeedBack {
          nextToken
          __typename
        }
        SupportTicket {
          nextToken
          __typename
        }
        sub
        username
        firstname
        lastname
        email
        image
        blocked
        about
        links
        devOps
        frontendFrameworks
        serverlessFrameworks
        languages
        createdAt
        updatedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      responseUpvoteId
      answerResponseUpvoteId
      questionUpvoteId
      studentUpvoteId
      owner
      __typename
    }
  }
`;
export const onCreateResponse = /* GraphQL */ `
  subscription OnCreateResponse(
    $filter: ModelSubscriptionResponseFilterInput
    $owner: String
  ) {
    onCreateResponse(filter: $filter, owner: $owner) {
      id
      datePosted
      content
      status
      images
      Question {
        id
        datePosted
        content
        status
        images
        Student {
          id
          sub
          username
          firstname
          lastname
          email
          image
          blocked
          about
          links
          devOps
          frontendFrameworks
          serverlessFrameworks
          languages
          createdAt
          updatedAt
          owner
          __typename
        }
        Course {
          id
          name
          description
          image
          difficulty
          framework
          programming_language
          web_framework
          mobile_framework
          overview
          trailer
          proposedCourses
          createdAt
          updatedAt
          __typename
        }
        Response {
          nextToken
          __typename
        }
        Upvote {
          nextToken
          __typename
        }
        group
        votes
        createdAt
        updatedAt
        courseQuestionId
        studentQuestionId
        owner
        __typename
      }
      Student {
        id
        BeginCourse {
          nextToken
          __typename
        }
        BeginModule {
          nextToken
          __typename
        }
        BeginLesson {
          nextToken
          __typename
        }
        Question {
          nextToken
          __typename
        }
        Response {
          nextToken
          __typename
        }
        AnswerResponse {
          nextToken
          __typename
        }
        Upvote {
          nextToken
          __typename
        }
        UserSubscription {
          nextToken
          __typename
        }
        FeedBack {
          nextToken
          __typename
        }
        SupportTicket {
          nextToken
          __typename
        }
        sub
        username
        firstname
        lastname
        email
        image
        blocked
        about
        links
        devOps
        frontendFrameworks
        serverlessFrameworks
        languages
        createdAt
        updatedAt
        owner
        __typename
      }
      Upvote {
        items {
          id
          type
          upVote
          downVote
          date
          createdAt
          updatedAt
          responseUpvoteId
          answerResponseUpvoteId
          questionUpvoteId
          studentUpvoteId
          owner
          __typename
        }
        nextToken
        __typename
      }
      AnswerResponse {
        items {
          id
          datePosted
          content
          status
          images
          group
          createdAt
          updatedAt
          responseAnswerResponseId
          studentAnswerResponseId
          owner
          __typename
        }
        nextToken
        __typename
      }
      group
      bestAnswer
      votes
      createdAt
      updatedAt
      questionResponseId
      studentResponseId
      owner
      __typename
    }
  }
`;
export const onUpdateResponse = /* GraphQL */ `
  subscription OnUpdateResponse(
    $filter: ModelSubscriptionResponseFilterInput
    $owner: String
  ) {
    onUpdateResponse(filter: $filter, owner: $owner) {
      id
      datePosted
      content
      status
      images
      Question {
        id
        datePosted
        content
        status
        images
        Student {
          id
          sub
          username
          firstname
          lastname
          email
          image
          blocked
          about
          links
          devOps
          frontendFrameworks
          serverlessFrameworks
          languages
          createdAt
          updatedAt
          owner
          __typename
        }
        Course {
          id
          name
          description
          image
          difficulty
          framework
          programming_language
          web_framework
          mobile_framework
          overview
          trailer
          proposedCourses
          createdAt
          updatedAt
          __typename
        }
        Response {
          nextToken
          __typename
        }
        Upvote {
          nextToken
          __typename
        }
        group
        votes
        createdAt
        updatedAt
        courseQuestionId
        studentQuestionId
        owner
        __typename
      }
      Student {
        id
        BeginCourse {
          nextToken
          __typename
        }
        BeginModule {
          nextToken
          __typename
        }
        BeginLesson {
          nextToken
          __typename
        }
        Question {
          nextToken
          __typename
        }
        Response {
          nextToken
          __typename
        }
        AnswerResponse {
          nextToken
          __typename
        }
        Upvote {
          nextToken
          __typename
        }
        UserSubscription {
          nextToken
          __typename
        }
        FeedBack {
          nextToken
          __typename
        }
        SupportTicket {
          nextToken
          __typename
        }
        sub
        username
        firstname
        lastname
        email
        image
        blocked
        about
        links
        devOps
        frontendFrameworks
        serverlessFrameworks
        languages
        createdAt
        updatedAt
        owner
        __typename
      }
      Upvote {
        items {
          id
          type
          upVote
          downVote
          date
          createdAt
          updatedAt
          responseUpvoteId
          answerResponseUpvoteId
          questionUpvoteId
          studentUpvoteId
          owner
          __typename
        }
        nextToken
        __typename
      }
      AnswerResponse {
        items {
          id
          datePosted
          content
          status
          images
          group
          createdAt
          updatedAt
          responseAnswerResponseId
          studentAnswerResponseId
          owner
          __typename
        }
        nextToken
        __typename
      }
      group
      bestAnswer
      votes
      createdAt
      updatedAt
      questionResponseId
      studentResponseId
      owner
      __typename
    }
  }
`;
export const onDeleteResponse = /* GraphQL */ `
  subscription OnDeleteResponse(
    $filter: ModelSubscriptionResponseFilterInput
    $owner: String
  ) {
    onDeleteResponse(filter: $filter, owner: $owner) {
      id
      datePosted
      content
      status
      images
      Question {
        id
        datePosted
        content
        status
        images
        Student {
          id
          sub
          username
          firstname
          lastname
          email
          image
          blocked
          about
          links
          devOps
          frontendFrameworks
          serverlessFrameworks
          languages
          createdAt
          updatedAt
          owner
          __typename
        }
        Course {
          id
          name
          description
          image
          difficulty
          framework
          programming_language
          web_framework
          mobile_framework
          overview
          trailer
          proposedCourses
          createdAt
          updatedAt
          __typename
        }
        Response {
          nextToken
          __typename
        }
        Upvote {
          nextToken
          __typename
        }
        group
        votes
        createdAt
        updatedAt
        courseQuestionId
        studentQuestionId
        owner
        __typename
      }
      Student {
        id
        BeginCourse {
          nextToken
          __typename
        }
        BeginModule {
          nextToken
          __typename
        }
        BeginLesson {
          nextToken
          __typename
        }
        Question {
          nextToken
          __typename
        }
        Response {
          nextToken
          __typename
        }
        AnswerResponse {
          nextToken
          __typename
        }
        Upvote {
          nextToken
          __typename
        }
        UserSubscription {
          nextToken
          __typename
        }
        FeedBack {
          nextToken
          __typename
        }
        SupportTicket {
          nextToken
          __typename
        }
        sub
        username
        firstname
        lastname
        email
        image
        blocked
        about
        links
        devOps
        frontendFrameworks
        serverlessFrameworks
        languages
        createdAt
        updatedAt
        owner
        __typename
      }
      Upvote {
        items {
          id
          type
          upVote
          downVote
          date
          createdAt
          updatedAt
          responseUpvoteId
          answerResponseUpvoteId
          questionUpvoteId
          studentUpvoteId
          owner
          __typename
        }
        nextToken
        __typename
      }
      AnswerResponse {
        items {
          id
          datePosted
          content
          status
          images
          group
          createdAt
          updatedAt
          responseAnswerResponseId
          studentAnswerResponseId
          owner
          __typename
        }
        nextToken
        __typename
      }
      group
      bestAnswer
      votes
      createdAt
      updatedAt
      questionResponseId
      studentResponseId
      owner
      __typename
    }
  }
`;
export const onCreateAnswerResponse = /* GraphQL */ `
  subscription OnCreateAnswerResponse(
    $filter: ModelSubscriptionAnswerResponseFilterInput
    $owner: String
  ) {
    onCreateAnswerResponse(filter: $filter, owner: $owner) {
      id
      datePosted
      content
      status
      images
      Response {
        id
        datePosted
        content
        status
        images
        Question {
          id
          datePosted
          content
          status
          images
          group
          votes
          createdAt
          updatedAt
          courseQuestionId
          studentQuestionId
          owner
          __typename
        }
        Student {
          id
          sub
          username
          firstname
          lastname
          email
          image
          blocked
          about
          links
          devOps
          frontendFrameworks
          serverlessFrameworks
          languages
          createdAt
          updatedAt
          owner
          __typename
        }
        Upvote {
          nextToken
          __typename
        }
        AnswerResponse {
          nextToken
          __typename
        }
        group
        bestAnswer
        votes
        createdAt
        updatedAt
        questionResponseId
        studentResponseId
        owner
        __typename
      }
      Student {
        id
        BeginCourse {
          nextToken
          __typename
        }
        BeginModule {
          nextToken
          __typename
        }
        BeginLesson {
          nextToken
          __typename
        }
        Question {
          nextToken
          __typename
        }
        Response {
          nextToken
          __typename
        }
        AnswerResponse {
          nextToken
          __typename
        }
        Upvote {
          nextToken
          __typename
        }
        UserSubscription {
          nextToken
          __typename
        }
        FeedBack {
          nextToken
          __typename
        }
        SupportTicket {
          nextToken
          __typename
        }
        sub
        username
        firstname
        lastname
        email
        image
        blocked
        about
        links
        devOps
        frontendFrameworks
        serverlessFrameworks
        languages
        createdAt
        updatedAt
        owner
        __typename
      }
      Upvote {
        items {
          id
          type
          upVote
          downVote
          date
          createdAt
          updatedAt
          responseUpvoteId
          answerResponseUpvoteId
          questionUpvoteId
          studentUpvoteId
          owner
          __typename
        }
        nextToken
        __typename
      }
      group
      createdAt
      updatedAt
      responseAnswerResponseId
      studentAnswerResponseId
      owner
      __typename
    }
  }
`;
export const onUpdateAnswerResponse = /* GraphQL */ `
  subscription OnUpdateAnswerResponse(
    $filter: ModelSubscriptionAnswerResponseFilterInput
    $owner: String
  ) {
    onUpdateAnswerResponse(filter: $filter, owner: $owner) {
      id
      datePosted
      content
      status
      images
      Response {
        id
        datePosted
        content
        status
        images
        Question {
          id
          datePosted
          content
          status
          images
          group
          votes
          createdAt
          updatedAt
          courseQuestionId
          studentQuestionId
          owner
          __typename
        }
        Student {
          id
          sub
          username
          firstname
          lastname
          email
          image
          blocked
          about
          links
          devOps
          frontendFrameworks
          serverlessFrameworks
          languages
          createdAt
          updatedAt
          owner
          __typename
        }
        Upvote {
          nextToken
          __typename
        }
        AnswerResponse {
          nextToken
          __typename
        }
        group
        bestAnswer
        votes
        createdAt
        updatedAt
        questionResponseId
        studentResponseId
        owner
        __typename
      }
      Student {
        id
        BeginCourse {
          nextToken
          __typename
        }
        BeginModule {
          nextToken
          __typename
        }
        BeginLesson {
          nextToken
          __typename
        }
        Question {
          nextToken
          __typename
        }
        Response {
          nextToken
          __typename
        }
        AnswerResponse {
          nextToken
          __typename
        }
        Upvote {
          nextToken
          __typename
        }
        UserSubscription {
          nextToken
          __typename
        }
        FeedBack {
          nextToken
          __typename
        }
        SupportTicket {
          nextToken
          __typename
        }
        sub
        username
        firstname
        lastname
        email
        image
        blocked
        about
        links
        devOps
        frontendFrameworks
        serverlessFrameworks
        languages
        createdAt
        updatedAt
        owner
        __typename
      }
      Upvote {
        items {
          id
          type
          upVote
          downVote
          date
          createdAt
          updatedAt
          responseUpvoteId
          answerResponseUpvoteId
          questionUpvoteId
          studentUpvoteId
          owner
          __typename
        }
        nextToken
        __typename
      }
      group
      createdAt
      updatedAt
      responseAnswerResponseId
      studentAnswerResponseId
      owner
      __typename
    }
  }
`;
export const onDeleteAnswerResponse = /* GraphQL */ `
  subscription OnDeleteAnswerResponse(
    $filter: ModelSubscriptionAnswerResponseFilterInput
    $owner: String
  ) {
    onDeleteAnswerResponse(filter: $filter, owner: $owner) {
      id
      datePosted
      content
      status
      images
      Response {
        id
        datePosted
        content
        status
        images
        Question {
          id
          datePosted
          content
          status
          images
          group
          votes
          createdAt
          updatedAt
          courseQuestionId
          studentQuestionId
          owner
          __typename
        }
        Student {
          id
          sub
          username
          firstname
          lastname
          email
          image
          blocked
          about
          links
          devOps
          frontendFrameworks
          serverlessFrameworks
          languages
          createdAt
          updatedAt
          owner
          __typename
        }
        Upvote {
          nextToken
          __typename
        }
        AnswerResponse {
          nextToken
          __typename
        }
        group
        bestAnswer
        votes
        createdAt
        updatedAt
        questionResponseId
        studentResponseId
        owner
        __typename
      }
      Student {
        id
        BeginCourse {
          nextToken
          __typename
        }
        BeginModule {
          nextToken
          __typename
        }
        BeginLesson {
          nextToken
          __typename
        }
        Question {
          nextToken
          __typename
        }
        Response {
          nextToken
          __typename
        }
        AnswerResponse {
          nextToken
          __typename
        }
        Upvote {
          nextToken
          __typename
        }
        UserSubscription {
          nextToken
          __typename
        }
        FeedBack {
          nextToken
          __typename
        }
        SupportTicket {
          nextToken
          __typename
        }
        sub
        username
        firstname
        lastname
        email
        image
        blocked
        about
        links
        devOps
        frontendFrameworks
        serverlessFrameworks
        languages
        createdAt
        updatedAt
        owner
        __typename
      }
      Upvote {
        items {
          id
          type
          upVote
          downVote
          date
          createdAt
          updatedAt
          responseUpvoteId
          answerResponseUpvoteId
          questionUpvoteId
          studentUpvoteId
          owner
          __typename
        }
        nextToken
        __typename
      }
      group
      createdAt
      updatedAt
      responseAnswerResponseId
      studentAnswerResponseId
      owner
      __typename
    }
  }
`;
export const onCreateQuestion = /* GraphQL */ `
  subscription OnCreateQuestion(
    $filter: ModelSubscriptionQuestionFilterInput
    $owner: String
  ) {
    onCreateQuestion(filter: $filter, owner: $owner) {
      id
      datePosted
      content
      status
      images
      Student {
        id
        BeginCourse {
          nextToken
          __typename
        }
        BeginModule {
          nextToken
          __typename
        }
        BeginLesson {
          nextToken
          __typename
        }
        Question {
          nextToken
          __typename
        }
        Response {
          nextToken
          __typename
        }
        AnswerResponse {
          nextToken
          __typename
        }
        Upvote {
          nextToken
          __typename
        }
        UserSubscription {
          nextToken
          __typename
        }
        FeedBack {
          nextToken
          __typename
        }
        SupportTicket {
          nextToken
          __typename
        }
        sub
        username
        firstname
        lastname
        email
        image
        blocked
        about
        links
        devOps
        frontendFrameworks
        serverlessFrameworks
        languages
        createdAt
        updatedAt
        owner
        __typename
      }
      Course {
        id
        name
        description
        Module {
          nextToken
          __typename
        }
        BeginCourse {
          nextToken
          __typename
        }
        Question {
          nextToken
          __typename
        }
        image
        difficulty
        framework
        programming_language
        web_framework
        mobile_framework
        overview
        trailer
        proposedCourses
        createdAt
        updatedAt
        __typename
      }
      Response {
        items {
          id
          datePosted
          content
          status
          images
          group
          bestAnswer
          votes
          createdAt
          updatedAt
          questionResponseId
          studentResponseId
          owner
          __typename
        }
        nextToken
        __typename
      }
      Upvote {
        items {
          id
          type
          upVote
          downVote
          date
          createdAt
          updatedAt
          responseUpvoteId
          answerResponseUpvoteId
          questionUpvoteId
          studentUpvoteId
          owner
          __typename
        }
        nextToken
        __typename
      }
      group
      votes
      createdAt
      updatedAt
      courseQuestionId
      studentQuestionId
      owner
      __typename
    }
  }
`;
export const onUpdateQuestion = /* GraphQL */ `
  subscription OnUpdateQuestion(
    $filter: ModelSubscriptionQuestionFilterInput
    $owner: String
  ) {
    onUpdateQuestion(filter: $filter, owner: $owner) {
      id
      datePosted
      content
      status
      images
      Student {
        id
        BeginCourse {
          nextToken
          __typename
        }
        BeginModule {
          nextToken
          __typename
        }
        BeginLesson {
          nextToken
          __typename
        }
        Question {
          nextToken
          __typename
        }
        Response {
          nextToken
          __typename
        }
        AnswerResponse {
          nextToken
          __typename
        }
        Upvote {
          nextToken
          __typename
        }
        UserSubscription {
          nextToken
          __typename
        }
        FeedBack {
          nextToken
          __typename
        }
        SupportTicket {
          nextToken
          __typename
        }
        sub
        username
        firstname
        lastname
        email
        image
        blocked
        about
        links
        devOps
        frontendFrameworks
        serverlessFrameworks
        languages
        createdAt
        updatedAt
        owner
        __typename
      }
      Course {
        id
        name
        description
        Module {
          nextToken
          __typename
        }
        BeginCourse {
          nextToken
          __typename
        }
        Question {
          nextToken
          __typename
        }
        image
        difficulty
        framework
        programming_language
        web_framework
        mobile_framework
        overview
        trailer
        proposedCourses
        createdAt
        updatedAt
        __typename
      }
      Response {
        items {
          id
          datePosted
          content
          status
          images
          group
          bestAnswer
          votes
          createdAt
          updatedAt
          questionResponseId
          studentResponseId
          owner
          __typename
        }
        nextToken
        __typename
      }
      Upvote {
        items {
          id
          type
          upVote
          downVote
          date
          createdAt
          updatedAt
          responseUpvoteId
          answerResponseUpvoteId
          questionUpvoteId
          studentUpvoteId
          owner
          __typename
        }
        nextToken
        __typename
      }
      group
      votes
      createdAt
      updatedAt
      courseQuestionId
      studentQuestionId
      owner
      __typename
    }
  }
`;
export const onDeleteQuestion = /* GraphQL */ `
  subscription OnDeleteQuestion(
    $filter: ModelSubscriptionQuestionFilterInput
    $owner: String
  ) {
    onDeleteQuestion(filter: $filter, owner: $owner) {
      id
      datePosted
      content
      status
      images
      Student {
        id
        BeginCourse {
          nextToken
          __typename
        }
        BeginModule {
          nextToken
          __typename
        }
        BeginLesson {
          nextToken
          __typename
        }
        Question {
          nextToken
          __typename
        }
        Response {
          nextToken
          __typename
        }
        AnswerResponse {
          nextToken
          __typename
        }
        Upvote {
          nextToken
          __typename
        }
        UserSubscription {
          nextToken
          __typename
        }
        FeedBack {
          nextToken
          __typename
        }
        SupportTicket {
          nextToken
          __typename
        }
        sub
        username
        firstname
        lastname
        email
        image
        blocked
        about
        links
        devOps
        frontendFrameworks
        serverlessFrameworks
        languages
        createdAt
        updatedAt
        owner
        __typename
      }
      Course {
        id
        name
        description
        Module {
          nextToken
          __typename
        }
        BeginCourse {
          nextToken
          __typename
        }
        Question {
          nextToken
          __typename
        }
        image
        difficulty
        framework
        programming_language
        web_framework
        mobile_framework
        overview
        trailer
        proposedCourses
        createdAt
        updatedAt
        __typename
      }
      Response {
        items {
          id
          datePosted
          content
          status
          images
          group
          bestAnswer
          votes
          createdAt
          updatedAt
          questionResponseId
          studentResponseId
          owner
          __typename
        }
        nextToken
        __typename
      }
      Upvote {
        items {
          id
          type
          upVote
          downVote
          date
          createdAt
          updatedAt
          responseUpvoteId
          answerResponseUpvoteId
          questionUpvoteId
          studentUpvoteId
          owner
          __typename
        }
        nextToken
        __typename
      }
      group
      votes
      createdAt
      updatedAt
      courseQuestionId
      studentQuestionId
      owner
      __typename
    }
  }
`;
export const onCreateBeginLesson = /* GraphQL */ `
  subscription OnCreateBeginLesson(
    $filter: ModelSubscriptionBeginLessonFilterInput
  ) {
    onCreateBeginLesson(filter: $filter) {
      id
      finish
      startDate
      endDate
      Lesson {
        id
        title
        description
        Module {
          id
          name
          status
          description
          createdAt
          updatedAt
          courseModuleId
          __typename
        }
        BeginLesson {
          nextToken
          __typename
        }
        text
        createdAt
        updatedAt
        moduleLessonId
        __typename
      }
      Student {
        id
        BeginCourse {
          nextToken
          __typename
        }
        BeginModule {
          nextToken
          __typename
        }
        BeginLesson {
          nextToken
          __typename
        }
        Question {
          nextToken
          __typename
        }
        Response {
          nextToken
          __typename
        }
        AnswerResponse {
          nextToken
          __typename
        }
        Upvote {
          nextToken
          __typename
        }
        UserSubscription {
          nextToken
          __typename
        }
        FeedBack {
          nextToken
          __typename
        }
        SupportTicket {
          nextToken
          __typename
        }
        sub
        username
        firstname
        lastname
        email
        image
        blocked
        about
        links
        devOps
        frontendFrameworks
        serverlessFrameworks
        languages
        createdAt
        updatedAt
        owner
        __typename
      }
      Module {
        id
        name
        status
        description
        Course {
          id
          name
          description
          image
          difficulty
          framework
          programming_language
          web_framework
          mobile_framework
          overview
          trailer
          proposedCourses
          createdAt
          updatedAt
          __typename
        }
        Lesson {
          nextToken
          __typename
        }
        BeginModule {
          nextToken
          __typename
        }
        BeginLesson {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        courseModuleId
        __typename
      }
      createdAt
      updatedAt
      lessonBeginLessonId
      moduleBeginLessonId
      studentBeginLessonId
      __typename
    }
  }
`;
export const onUpdateBeginLesson = /* GraphQL */ `
  subscription OnUpdateBeginLesson(
    $filter: ModelSubscriptionBeginLessonFilterInput
  ) {
    onUpdateBeginLesson(filter: $filter) {
      id
      finish
      startDate
      endDate
      Lesson {
        id
        title
        description
        Module {
          id
          name
          status
          description
          createdAt
          updatedAt
          courseModuleId
          __typename
        }
        BeginLesson {
          nextToken
          __typename
        }
        text
        createdAt
        updatedAt
        moduleLessonId
        __typename
      }
      Student {
        id
        BeginCourse {
          nextToken
          __typename
        }
        BeginModule {
          nextToken
          __typename
        }
        BeginLesson {
          nextToken
          __typename
        }
        Question {
          nextToken
          __typename
        }
        Response {
          nextToken
          __typename
        }
        AnswerResponse {
          nextToken
          __typename
        }
        Upvote {
          nextToken
          __typename
        }
        UserSubscription {
          nextToken
          __typename
        }
        FeedBack {
          nextToken
          __typename
        }
        SupportTicket {
          nextToken
          __typename
        }
        sub
        username
        firstname
        lastname
        email
        image
        blocked
        about
        links
        devOps
        frontendFrameworks
        serverlessFrameworks
        languages
        createdAt
        updatedAt
        owner
        __typename
      }
      Module {
        id
        name
        status
        description
        Course {
          id
          name
          description
          image
          difficulty
          framework
          programming_language
          web_framework
          mobile_framework
          overview
          trailer
          proposedCourses
          createdAt
          updatedAt
          __typename
        }
        Lesson {
          nextToken
          __typename
        }
        BeginModule {
          nextToken
          __typename
        }
        BeginLesson {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        courseModuleId
        __typename
      }
      createdAt
      updatedAt
      lessonBeginLessonId
      moduleBeginLessonId
      studentBeginLessonId
      __typename
    }
  }
`;
export const onDeleteBeginLesson = /* GraphQL */ `
  subscription OnDeleteBeginLesson(
    $filter: ModelSubscriptionBeginLessonFilterInput
  ) {
    onDeleteBeginLesson(filter: $filter) {
      id
      finish
      startDate
      endDate
      Lesson {
        id
        title
        description
        Module {
          id
          name
          status
          description
          createdAt
          updatedAt
          courseModuleId
          __typename
        }
        BeginLesson {
          nextToken
          __typename
        }
        text
        createdAt
        updatedAt
        moduleLessonId
        __typename
      }
      Student {
        id
        BeginCourse {
          nextToken
          __typename
        }
        BeginModule {
          nextToken
          __typename
        }
        BeginLesson {
          nextToken
          __typename
        }
        Question {
          nextToken
          __typename
        }
        Response {
          nextToken
          __typename
        }
        AnswerResponse {
          nextToken
          __typename
        }
        Upvote {
          nextToken
          __typename
        }
        UserSubscription {
          nextToken
          __typename
        }
        FeedBack {
          nextToken
          __typename
        }
        SupportTicket {
          nextToken
          __typename
        }
        sub
        username
        firstname
        lastname
        email
        image
        blocked
        about
        links
        devOps
        frontendFrameworks
        serverlessFrameworks
        languages
        createdAt
        updatedAt
        owner
        __typename
      }
      Module {
        id
        name
        status
        description
        Course {
          id
          name
          description
          image
          difficulty
          framework
          programming_language
          web_framework
          mobile_framework
          overview
          trailer
          proposedCourses
          createdAt
          updatedAt
          __typename
        }
        Lesson {
          nextToken
          __typename
        }
        BeginModule {
          nextToken
          __typename
        }
        BeginLesson {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        courseModuleId
        __typename
      }
      createdAt
      updatedAt
      lessonBeginLessonId
      moduleBeginLessonId
      studentBeginLessonId
      __typename
    }
  }
`;
export const onCreateBeginModule = /* GraphQL */ `
  subscription OnCreateBeginModule(
    $filter: ModelSubscriptionBeginModuleFilterInput
  ) {
    onCreateBeginModule(filter: $filter) {
      id
      finish
      startDate
      endDate
      percentage
      Module {
        id
        name
        status
        description
        Course {
          id
          name
          description
          image
          difficulty
          framework
          programming_language
          web_framework
          mobile_framework
          overview
          trailer
          proposedCourses
          createdAt
          updatedAt
          __typename
        }
        Lesson {
          nextToken
          __typename
        }
        BeginModule {
          nextToken
          __typename
        }
        BeginLesson {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        courseModuleId
        __typename
      }
      Student {
        id
        BeginCourse {
          nextToken
          __typename
        }
        BeginModule {
          nextToken
          __typename
        }
        BeginLesson {
          nextToken
          __typename
        }
        Question {
          nextToken
          __typename
        }
        Response {
          nextToken
          __typename
        }
        AnswerResponse {
          nextToken
          __typename
        }
        Upvote {
          nextToken
          __typename
        }
        UserSubscription {
          nextToken
          __typename
        }
        FeedBack {
          nextToken
          __typename
        }
        SupportTicket {
          nextToken
          __typename
        }
        sub
        username
        firstname
        lastname
        email
        image
        blocked
        about
        links
        devOps
        frontendFrameworks
        serverlessFrameworks
        languages
        createdAt
        updatedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      moduleBeginModuleId
      studentBeginModuleId
      __typename
    }
  }
`;
export const onUpdateBeginModule = /* GraphQL */ `
  subscription OnUpdateBeginModule(
    $filter: ModelSubscriptionBeginModuleFilterInput
  ) {
    onUpdateBeginModule(filter: $filter) {
      id
      finish
      startDate
      endDate
      percentage
      Module {
        id
        name
        status
        description
        Course {
          id
          name
          description
          image
          difficulty
          framework
          programming_language
          web_framework
          mobile_framework
          overview
          trailer
          proposedCourses
          createdAt
          updatedAt
          __typename
        }
        Lesson {
          nextToken
          __typename
        }
        BeginModule {
          nextToken
          __typename
        }
        BeginLesson {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        courseModuleId
        __typename
      }
      Student {
        id
        BeginCourse {
          nextToken
          __typename
        }
        BeginModule {
          nextToken
          __typename
        }
        BeginLesson {
          nextToken
          __typename
        }
        Question {
          nextToken
          __typename
        }
        Response {
          nextToken
          __typename
        }
        AnswerResponse {
          nextToken
          __typename
        }
        Upvote {
          nextToken
          __typename
        }
        UserSubscription {
          nextToken
          __typename
        }
        FeedBack {
          nextToken
          __typename
        }
        SupportTicket {
          nextToken
          __typename
        }
        sub
        username
        firstname
        lastname
        email
        image
        blocked
        about
        links
        devOps
        frontendFrameworks
        serverlessFrameworks
        languages
        createdAt
        updatedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      moduleBeginModuleId
      studentBeginModuleId
      __typename
    }
  }
`;
export const onDeleteBeginModule = /* GraphQL */ `
  subscription OnDeleteBeginModule(
    $filter: ModelSubscriptionBeginModuleFilterInput
  ) {
    onDeleteBeginModule(filter: $filter) {
      id
      finish
      startDate
      endDate
      percentage
      Module {
        id
        name
        status
        description
        Course {
          id
          name
          description
          image
          difficulty
          framework
          programming_language
          web_framework
          mobile_framework
          overview
          trailer
          proposedCourses
          createdAt
          updatedAt
          __typename
        }
        Lesson {
          nextToken
          __typename
        }
        BeginModule {
          nextToken
          __typename
        }
        BeginLesson {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        courseModuleId
        __typename
      }
      Student {
        id
        BeginCourse {
          nextToken
          __typename
        }
        BeginModule {
          nextToken
          __typename
        }
        BeginLesson {
          nextToken
          __typename
        }
        Question {
          nextToken
          __typename
        }
        Response {
          nextToken
          __typename
        }
        AnswerResponse {
          nextToken
          __typename
        }
        Upvote {
          nextToken
          __typename
        }
        UserSubscription {
          nextToken
          __typename
        }
        FeedBack {
          nextToken
          __typename
        }
        SupportTicket {
          nextToken
          __typename
        }
        sub
        username
        firstname
        lastname
        email
        image
        blocked
        about
        links
        devOps
        frontendFrameworks
        serverlessFrameworks
        languages
        createdAt
        updatedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      moduleBeginModuleId
      studentBeginModuleId
      __typename
    }
  }
`;
export const onCreateBeginCourse = /* GraphQL */ `
  subscription OnCreateBeginCourse(
    $filter: ModelSubscriptionBeginCourseFilterInput
  ) {
    onCreateBeginCourse(filter: $filter) {
      id
      finish
      startDate
      endDate
      Course {
        id
        name
        description
        Module {
          nextToken
          __typename
        }
        BeginCourse {
          nextToken
          __typename
        }
        Question {
          nextToken
          __typename
        }
        image
        difficulty
        framework
        programming_language
        web_framework
        mobile_framework
        overview
        trailer
        proposedCourses
        createdAt
        updatedAt
        __typename
      }
      Student {
        id
        BeginCourse {
          nextToken
          __typename
        }
        BeginModule {
          nextToken
          __typename
        }
        BeginLesson {
          nextToken
          __typename
        }
        Question {
          nextToken
          __typename
        }
        Response {
          nextToken
          __typename
        }
        AnswerResponse {
          nextToken
          __typename
        }
        Upvote {
          nextToken
          __typename
        }
        UserSubscription {
          nextToken
          __typename
        }
        FeedBack {
          nextToken
          __typename
        }
        SupportTicket {
          nextToken
          __typename
        }
        sub
        username
        firstname
        lastname
        email
        image
        blocked
        about
        links
        devOps
        frontendFrameworks
        serverlessFrameworks
        languages
        createdAt
        updatedAt
        owner
        __typename
      }
      percentage
      numberOfLessons
      createdAt
      updatedAt
      courseBeginCourseId
      studentBeginCourseId
      __typename
    }
  }
`;
export const onUpdateBeginCourse = /* GraphQL */ `
  subscription OnUpdateBeginCourse(
    $filter: ModelSubscriptionBeginCourseFilterInput
  ) {
    onUpdateBeginCourse(filter: $filter) {
      id
      finish
      startDate
      endDate
      Course {
        id
        name
        description
        Module {
          nextToken
          __typename
        }
        BeginCourse {
          nextToken
          __typename
        }
        Question {
          nextToken
          __typename
        }
        image
        difficulty
        framework
        programming_language
        web_framework
        mobile_framework
        overview
        trailer
        proposedCourses
        createdAt
        updatedAt
        __typename
      }
      Student {
        id
        BeginCourse {
          nextToken
          __typename
        }
        BeginModule {
          nextToken
          __typename
        }
        BeginLesson {
          nextToken
          __typename
        }
        Question {
          nextToken
          __typename
        }
        Response {
          nextToken
          __typename
        }
        AnswerResponse {
          nextToken
          __typename
        }
        Upvote {
          nextToken
          __typename
        }
        UserSubscription {
          nextToken
          __typename
        }
        FeedBack {
          nextToken
          __typename
        }
        SupportTicket {
          nextToken
          __typename
        }
        sub
        username
        firstname
        lastname
        email
        image
        blocked
        about
        links
        devOps
        frontendFrameworks
        serverlessFrameworks
        languages
        createdAt
        updatedAt
        owner
        __typename
      }
      percentage
      numberOfLessons
      createdAt
      updatedAt
      courseBeginCourseId
      studentBeginCourseId
      __typename
    }
  }
`;
export const onDeleteBeginCourse = /* GraphQL */ `
  subscription OnDeleteBeginCourse(
    $filter: ModelSubscriptionBeginCourseFilterInput
  ) {
    onDeleteBeginCourse(filter: $filter) {
      id
      finish
      startDate
      endDate
      Course {
        id
        name
        description
        Module {
          nextToken
          __typename
        }
        BeginCourse {
          nextToken
          __typename
        }
        Question {
          nextToken
          __typename
        }
        image
        difficulty
        framework
        programming_language
        web_framework
        mobile_framework
        overview
        trailer
        proposedCourses
        createdAt
        updatedAt
        __typename
      }
      Student {
        id
        BeginCourse {
          nextToken
          __typename
        }
        BeginModule {
          nextToken
          __typename
        }
        BeginLesson {
          nextToken
          __typename
        }
        Question {
          nextToken
          __typename
        }
        Response {
          nextToken
          __typename
        }
        AnswerResponse {
          nextToken
          __typename
        }
        Upvote {
          nextToken
          __typename
        }
        UserSubscription {
          nextToken
          __typename
        }
        FeedBack {
          nextToken
          __typename
        }
        SupportTicket {
          nextToken
          __typename
        }
        sub
        username
        firstname
        lastname
        email
        image
        blocked
        about
        links
        devOps
        frontendFrameworks
        serverlessFrameworks
        languages
        createdAt
        updatedAt
        owner
        __typename
      }
      percentage
      numberOfLessons
      createdAt
      updatedAt
      courseBeginCourseId
      studentBeginCourseId
      __typename
    }
  }
`;
export const onCreateFeedBack = /* GraphQL */ `
  subscription OnCreateFeedBack(
    $filter: ModelSubscriptionFeedBackFilterInput
    $owner: String
  ) {
    onCreateFeedBack(filter: $filter, owner: $owner) {
      id
      message
      Student {
        id
        BeginCourse {
          nextToken
          __typename
        }
        BeginModule {
          nextToken
          __typename
        }
        BeginLesson {
          nextToken
          __typename
        }
        Question {
          nextToken
          __typename
        }
        Response {
          nextToken
          __typename
        }
        AnswerResponse {
          nextToken
          __typename
        }
        Upvote {
          nextToken
          __typename
        }
        UserSubscription {
          nextToken
          __typename
        }
        FeedBack {
          nextToken
          __typename
        }
        SupportTicket {
          nextToken
          __typename
        }
        sub
        username
        firstname
        lastname
        email
        image
        blocked
        about
        links
        devOps
        frontendFrameworks
        serverlessFrameworks
        languages
        createdAt
        updatedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      studentFeedBackId
      owner
      __typename
    }
  }
`;
export const onUpdateFeedBack = /* GraphQL */ `
  subscription OnUpdateFeedBack(
    $filter: ModelSubscriptionFeedBackFilterInput
    $owner: String
  ) {
    onUpdateFeedBack(filter: $filter, owner: $owner) {
      id
      message
      Student {
        id
        BeginCourse {
          nextToken
          __typename
        }
        BeginModule {
          nextToken
          __typename
        }
        BeginLesson {
          nextToken
          __typename
        }
        Question {
          nextToken
          __typename
        }
        Response {
          nextToken
          __typename
        }
        AnswerResponse {
          nextToken
          __typename
        }
        Upvote {
          nextToken
          __typename
        }
        UserSubscription {
          nextToken
          __typename
        }
        FeedBack {
          nextToken
          __typename
        }
        SupportTicket {
          nextToken
          __typename
        }
        sub
        username
        firstname
        lastname
        email
        image
        blocked
        about
        links
        devOps
        frontendFrameworks
        serverlessFrameworks
        languages
        createdAt
        updatedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      studentFeedBackId
      owner
      __typename
    }
  }
`;
export const onDeleteFeedBack = /* GraphQL */ `
  subscription OnDeleteFeedBack(
    $filter: ModelSubscriptionFeedBackFilterInput
    $owner: String
  ) {
    onDeleteFeedBack(filter: $filter, owner: $owner) {
      id
      message
      Student {
        id
        BeginCourse {
          nextToken
          __typename
        }
        BeginModule {
          nextToken
          __typename
        }
        BeginLesson {
          nextToken
          __typename
        }
        Question {
          nextToken
          __typename
        }
        Response {
          nextToken
          __typename
        }
        AnswerResponse {
          nextToken
          __typename
        }
        Upvote {
          nextToken
          __typename
        }
        UserSubscription {
          nextToken
          __typename
        }
        FeedBack {
          nextToken
          __typename
        }
        SupportTicket {
          nextToken
          __typename
        }
        sub
        username
        firstname
        lastname
        email
        image
        blocked
        about
        links
        devOps
        frontendFrameworks
        serverlessFrameworks
        languages
        createdAt
        updatedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      studentFeedBackId
      owner
      __typename
    }
  }
`;
export const onCreateSupportTicket = /* GraphQL */ `
  subscription OnCreateSupportTicket(
    $filter: ModelSubscriptionSupportTicketFilterInput
    $owner: String
  ) {
    onCreateSupportTicket(filter: $filter, owner: $owner) {
      id
      subject
      others
      description
      screenshot
      Student {
        id
        BeginCourse {
          nextToken
          __typename
        }
        BeginModule {
          nextToken
          __typename
        }
        BeginLesson {
          nextToken
          __typename
        }
        Question {
          nextToken
          __typename
        }
        Response {
          nextToken
          __typename
        }
        AnswerResponse {
          nextToken
          __typename
        }
        Upvote {
          nextToken
          __typename
        }
        UserSubscription {
          nextToken
          __typename
        }
        FeedBack {
          nextToken
          __typename
        }
        SupportTicket {
          nextToken
          __typename
        }
        sub
        username
        firstname
        lastname
        email
        image
        blocked
        about
        links
        devOps
        frontendFrameworks
        serverlessFrameworks
        languages
        createdAt
        updatedAt
        owner
        __typename
      }
      status
      createdAt
      updatedAt
      studentSupportTicketId
      owner
      __typename
    }
  }
`;
export const onUpdateSupportTicket = /* GraphQL */ `
  subscription OnUpdateSupportTicket(
    $filter: ModelSubscriptionSupportTicketFilterInput
    $owner: String
  ) {
    onUpdateSupportTicket(filter: $filter, owner: $owner) {
      id
      subject
      others
      description
      screenshot
      Student {
        id
        BeginCourse {
          nextToken
          __typename
        }
        BeginModule {
          nextToken
          __typename
        }
        BeginLesson {
          nextToken
          __typename
        }
        Question {
          nextToken
          __typename
        }
        Response {
          nextToken
          __typename
        }
        AnswerResponse {
          nextToken
          __typename
        }
        Upvote {
          nextToken
          __typename
        }
        UserSubscription {
          nextToken
          __typename
        }
        FeedBack {
          nextToken
          __typename
        }
        SupportTicket {
          nextToken
          __typename
        }
        sub
        username
        firstname
        lastname
        email
        image
        blocked
        about
        links
        devOps
        frontendFrameworks
        serverlessFrameworks
        languages
        createdAt
        updatedAt
        owner
        __typename
      }
      status
      createdAt
      updatedAt
      studentSupportTicketId
      owner
      __typename
    }
  }
`;
export const onDeleteSupportTicket = /* GraphQL */ `
  subscription OnDeleteSupportTicket(
    $filter: ModelSubscriptionSupportTicketFilterInput
    $owner: String
  ) {
    onDeleteSupportTicket(filter: $filter, owner: $owner) {
      id
      subject
      others
      description
      screenshot
      Student {
        id
        BeginCourse {
          nextToken
          __typename
        }
        BeginModule {
          nextToken
          __typename
        }
        BeginLesson {
          nextToken
          __typename
        }
        Question {
          nextToken
          __typename
        }
        Response {
          nextToken
          __typename
        }
        AnswerResponse {
          nextToken
          __typename
        }
        Upvote {
          nextToken
          __typename
        }
        UserSubscription {
          nextToken
          __typename
        }
        FeedBack {
          nextToken
          __typename
        }
        SupportTicket {
          nextToken
          __typename
        }
        sub
        username
        firstname
        lastname
        email
        image
        blocked
        about
        links
        devOps
        frontendFrameworks
        serverlessFrameworks
        languages
        createdAt
        updatedAt
        owner
        __typename
      }
      status
      createdAt
      updatedAt
      studentSupportTicketId
      owner
      __typename
    }
  }
`;
export const onCreateCourseProgress = /* GraphQL */ `
  subscription OnCreateCourseProgress(
    $filter: ModelSubscriptionCourseProgressFilterInput
  ) {
    onCreateCourseProgress(filter: $filter) {
      id
      Course {
        id
        name
        description
        Module {
          nextToken
          __typename
        }
        BeginCourse {
          nextToken
          __typename
        }
        Question {
          nextToken
          __typename
        }
        image
        difficulty
        framework
        programming_language
        web_framework
        mobile_framework
        overview
        trailer
        proposedCourses
        createdAt
        updatedAt
        __typename
      }
      Student {
        id
        BeginCourse {
          nextToken
          __typename
        }
        BeginModule {
          nextToken
          __typename
        }
        BeginLesson {
          nextToken
          __typename
        }
        Question {
          nextToken
          __typename
        }
        Response {
          nextToken
          __typename
        }
        AnswerResponse {
          nextToken
          __typename
        }
        Upvote {
          nextToken
          __typename
        }
        UserSubscription {
          nextToken
          __typename
        }
        FeedBack {
          nextToken
          __typename
        }
        SupportTicket {
          nextToken
          __typename
        }
        sub
        username
        firstname
        lastname
        email
        image
        blocked
        about
        links
        devOps
        frontendFrameworks
        serverlessFrameworks
        languages
        createdAt
        updatedAt
        owner
        __typename
      }
      Module {
        id
        name
        status
        description
        Course {
          id
          name
          description
          image
          difficulty
          framework
          programming_language
          web_framework
          mobile_framework
          overview
          trailer
          proposedCourses
          createdAt
          updatedAt
          __typename
        }
        Lesson {
          nextToken
          __typename
        }
        BeginModule {
          nextToken
          __typename
        }
        BeginLesson {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        courseModuleId
        __typename
      }
      Lesson {
        id
        title
        description
        Module {
          id
          name
          status
          description
          createdAt
          updatedAt
          courseModuleId
          __typename
        }
        BeginLesson {
          nextToken
          __typename
        }
        text
        createdAt
        updatedAt
        moduleLessonId
        __typename
      }
      createdAt
      updatedAt
      courseProgressCourseId
      courseProgressStudentId
      courseProgressModuleId
      courseProgressLessonId
      __typename
    }
  }
`;
export const onUpdateCourseProgress = /* GraphQL */ `
  subscription OnUpdateCourseProgress(
    $filter: ModelSubscriptionCourseProgressFilterInput
  ) {
    onUpdateCourseProgress(filter: $filter) {
      id
      Course {
        id
        name
        description
        Module {
          nextToken
          __typename
        }
        BeginCourse {
          nextToken
          __typename
        }
        Question {
          nextToken
          __typename
        }
        image
        difficulty
        framework
        programming_language
        web_framework
        mobile_framework
        overview
        trailer
        proposedCourses
        createdAt
        updatedAt
        __typename
      }
      Student {
        id
        BeginCourse {
          nextToken
          __typename
        }
        BeginModule {
          nextToken
          __typename
        }
        BeginLesson {
          nextToken
          __typename
        }
        Question {
          nextToken
          __typename
        }
        Response {
          nextToken
          __typename
        }
        AnswerResponse {
          nextToken
          __typename
        }
        Upvote {
          nextToken
          __typename
        }
        UserSubscription {
          nextToken
          __typename
        }
        FeedBack {
          nextToken
          __typename
        }
        SupportTicket {
          nextToken
          __typename
        }
        sub
        username
        firstname
        lastname
        email
        image
        blocked
        about
        links
        devOps
        frontendFrameworks
        serverlessFrameworks
        languages
        createdAt
        updatedAt
        owner
        __typename
      }
      Module {
        id
        name
        status
        description
        Course {
          id
          name
          description
          image
          difficulty
          framework
          programming_language
          web_framework
          mobile_framework
          overview
          trailer
          proposedCourses
          createdAt
          updatedAt
          __typename
        }
        Lesson {
          nextToken
          __typename
        }
        BeginModule {
          nextToken
          __typename
        }
        BeginLesson {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        courseModuleId
        __typename
      }
      Lesson {
        id
        title
        description
        Module {
          id
          name
          status
          description
          createdAt
          updatedAt
          courseModuleId
          __typename
        }
        BeginLesson {
          nextToken
          __typename
        }
        text
        createdAt
        updatedAt
        moduleLessonId
        __typename
      }
      createdAt
      updatedAt
      courseProgressCourseId
      courseProgressStudentId
      courseProgressModuleId
      courseProgressLessonId
      __typename
    }
  }
`;
export const onDeleteCourseProgress = /* GraphQL */ `
  subscription OnDeleteCourseProgress(
    $filter: ModelSubscriptionCourseProgressFilterInput
  ) {
    onDeleteCourseProgress(filter: $filter) {
      id
      Course {
        id
        name
        description
        Module {
          nextToken
          __typename
        }
        BeginCourse {
          nextToken
          __typename
        }
        Question {
          nextToken
          __typename
        }
        image
        difficulty
        framework
        programming_language
        web_framework
        mobile_framework
        overview
        trailer
        proposedCourses
        createdAt
        updatedAt
        __typename
      }
      Student {
        id
        BeginCourse {
          nextToken
          __typename
        }
        BeginModule {
          nextToken
          __typename
        }
        BeginLesson {
          nextToken
          __typename
        }
        Question {
          nextToken
          __typename
        }
        Response {
          nextToken
          __typename
        }
        AnswerResponse {
          nextToken
          __typename
        }
        Upvote {
          nextToken
          __typename
        }
        UserSubscription {
          nextToken
          __typename
        }
        FeedBack {
          nextToken
          __typename
        }
        SupportTicket {
          nextToken
          __typename
        }
        sub
        username
        firstname
        lastname
        email
        image
        blocked
        about
        links
        devOps
        frontendFrameworks
        serverlessFrameworks
        languages
        createdAt
        updatedAt
        owner
        __typename
      }
      Module {
        id
        name
        status
        description
        Course {
          id
          name
          description
          image
          difficulty
          framework
          programming_language
          web_framework
          mobile_framework
          overview
          trailer
          proposedCourses
          createdAt
          updatedAt
          __typename
        }
        Lesson {
          nextToken
          __typename
        }
        BeginModule {
          nextToken
          __typename
        }
        BeginLesson {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        courseModuleId
        __typename
      }
      Lesson {
        id
        title
        description
        Module {
          id
          name
          status
          description
          createdAt
          updatedAt
          courseModuleId
          __typename
        }
        BeginLesson {
          nextToken
          __typename
        }
        text
        createdAt
        updatedAt
        moduleLessonId
        __typename
      }
      createdAt
      updatedAt
      courseProgressCourseId
      courseProgressStudentId
      courseProgressModuleId
      courseProgressLessonId
      __typename
    }
  }
`;
export const onCreateUserSubscription = /* GraphQL */ `
  subscription OnCreateUserSubscription(
    $filter: ModelSubscriptionUserSubscriptionFilterInput
    $owner: String
  ) {
    onCreateUserSubscription(filter: $filter, owner: $owner) {
      id
      beginDate
      expirationDate
      stripe_subscription_id
      Student {
        id
        BeginCourse {
          nextToken
          __typename
        }
        BeginModule {
          nextToken
          __typename
        }
        BeginLesson {
          nextToken
          __typename
        }
        Question {
          nextToken
          __typename
        }
        Response {
          nextToken
          __typename
        }
        AnswerResponse {
          nextToken
          __typename
        }
        Upvote {
          nextToken
          __typename
        }
        UserSubscription {
          nextToken
          __typename
        }
        FeedBack {
          nextToken
          __typename
        }
        SupportTicket {
          nextToken
          __typename
        }
        sub
        username
        firstname
        lastname
        email
        image
        blocked
        about
        links
        devOps
        frontendFrameworks
        serverlessFrameworks
        languages
        createdAt
        updatedAt
        owner
        __typename
      }
      PlatformSubscription {
        id
        duration
        description
        stripe_product_id
        name
        bootcamp
        bootcamp_type
        UserSubscription {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      bootcamp
      bootcamp_type
      createdAt
      updatedAt
      platformSubscriptionUserSubscriptionId
      studentUserSubscriptionId
      owner
      __typename
    }
  }
`;
export const onUpdateUserSubscription = /* GraphQL */ `
  subscription OnUpdateUserSubscription(
    $filter: ModelSubscriptionUserSubscriptionFilterInput
    $owner: String
  ) {
    onUpdateUserSubscription(filter: $filter, owner: $owner) {
      id
      beginDate
      expirationDate
      stripe_subscription_id
      Student {
        id
        BeginCourse {
          nextToken
          __typename
        }
        BeginModule {
          nextToken
          __typename
        }
        BeginLesson {
          nextToken
          __typename
        }
        Question {
          nextToken
          __typename
        }
        Response {
          nextToken
          __typename
        }
        AnswerResponse {
          nextToken
          __typename
        }
        Upvote {
          nextToken
          __typename
        }
        UserSubscription {
          nextToken
          __typename
        }
        FeedBack {
          nextToken
          __typename
        }
        SupportTicket {
          nextToken
          __typename
        }
        sub
        username
        firstname
        lastname
        email
        image
        blocked
        about
        links
        devOps
        frontendFrameworks
        serverlessFrameworks
        languages
        createdAt
        updatedAt
        owner
        __typename
      }
      PlatformSubscription {
        id
        duration
        description
        stripe_product_id
        name
        bootcamp
        bootcamp_type
        UserSubscription {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      bootcamp
      bootcamp_type
      createdAt
      updatedAt
      platformSubscriptionUserSubscriptionId
      studentUserSubscriptionId
      owner
      __typename
    }
  }
`;
export const onDeleteUserSubscription = /* GraphQL */ `
  subscription OnDeleteUserSubscription(
    $filter: ModelSubscriptionUserSubscriptionFilterInput
    $owner: String
  ) {
    onDeleteUserSubscription(filter: $filter, owner: $owner) {
      id
      beginDate
      expirationDate
      stripe_subscription_id
      Student {
        id
        BeginCourse {
          nextToken
          __typename
        }
        BeginModule {
          nextToken
          __typename
        }
        BeginLesson {
          nextToken
          __typename
        }
        Question {
          nextToken
          __typename
        }
        Response {
          nextToken
          __typename
        }
        AnswerResponse {
          nextToken
          __typename
        }
        Upvote {
          nextToken
          __typename
        }
        UserSubscription {
          nextToken
          __typename
        }
        FeedBack {
          nextToken
          __typename
        }
        SupportTicket {
          nextToken
          __typename
        }
        sub
        username
        firstname
        lastname
        email
        image
        blocked
        about
        links
        devOps
        frontendFrameworks
        serverlessFrameworks
        languages
        createdAt
        updatedAt
        owner
        __typename
      }
      PlatformSubscription {
        id
        duration
        description
        stripe_product_id
        name
        bootcamp
        bootcamp_type
        UserSubscription {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      bootcamp
      bootcamp_type
      createdAt
      updatedAt
      platformSubscriptionUserSubscriptionId
      studentUserSubscriptionId
      owner
      __typename
    }
  }
`;
export const onCreateLesson = /* GraphQL */ `
  subscription OnCreateLesson($filter: ModelSubscriptionLessonFilterInput) {
    onCreateLesson(filter: $filter) {
      id
      title
      description
      Module {
        id
        name
        status
        description
        Course {
          id
          name
          description
          image
          difficulty
          framework
          programming_language
          web_framework
          mobile_framework
          overview
          trailer
          proposedCourses
          createdAt
          updatedAt
          __typename
        }
        Lesson {
          nextToken
          __typename
        }
        BeginModule {
          nextToken
          __typename
        }
        BeginLesson {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        courseModuleId
        __typename
      }
      BeginLesson {
        items {
          id
          finish
          startDate
          endDate
          createdAt
          updatedAt
          lessonBeginLessonId
          moduleBeginLessonId
          studentBeginLessonId
          __typename
        }
        nextToken
        __typename
      }
      text
      createdAt
      updatedAt
      moduleLessonId
      __typename
    }
  }
`;
export const onUpdateLesson = /* GraphQL */ `
  subscription OnUpdateLesson($filter: ModelSubscriptionLessonFilterInput) {
    onUpdateLesson(filter: $filter) {
      id
      title
      description
      Module {
        id
        name
        status
        description
        Course {
          id
          name
          description
          image
          difficulty
          framework
          programming_language
          web_framework
          mobile_framework
          overview
          trailer
          proposedCourses
          createdAt
          updatedAt
          __typename
        }
        Lesson {
          nextToken
          __typename
        }
        BeginModule {
          nextToken
          __typename
        }
        BeginLesson {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        courseModuleId
        __typename
      }
      BeginLesson {
        items {
          id
          finish
          startDate
          endDate
          createdAt
          updatedAt
          lessonBeginLessonId
          moduleBeginLessonId
          studentBeginLessonId
          __typename
        }
        nextToken
        __typename
      }
      text
      createdAt
      updatedAt
      moduleLessonId
      __typename
    }
  }
`;
export const onDeleteLesson = /* GraphQL */ `
  subscription OnDeleteLesson($filter: ModelSubscriptionLessonFilterInput) {
    onDeleteLesson(filter: $filter) {
      id
      title
      description
      Module {
        id
        name
        status
        description
        Course {
          id
          name
          description
          image
          difficulty
          framework
          programming_language
          web_framework
          mobile_framework
          overview
          trailer
          proposedCourses
          createdAt
          updatedAt
          __typename
        }
        Lesson {
          nextToken
          __typename
        }
        BeginModule {
          nextToken
          __typename
        }
        BeginLesson {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        courseModuleId
        __typename
      }
      BeginLesson {
        items {
          id
          finish
          startDate
          endDate
          createdAt
          updatedAt
          lessonBeginLessonId
          moduleBeginLessonId
          studentBeginLessonId
          __typename
        }
        nextToken
        __typename
      }
      text
      createdAt
      updatedAt
      moduleLessonId
      __typename
    }
  }
`;
export const onCreateModule = /* GraphQL */ `
  subscription OnCreateModule($filter: ModelSubscriptionModuleFilterInput) {
    onCreateModule(filter: $filter) {
      id
      name
      status
      description
      Course {
        id
        name
        description
        Module {
          nextToken
          __typename
        }
        BeginCourse {
          nextToken
          __typename
        }
        Question {
          nextToken
          __typename
        }
        image
        difficulty
        framework
        programming_language
        web_framework
        mobile_framework
        overview
        trailer
        proposedCourses
        createdAt
        updatedAt
        __typename
      }
      Lesson {
        items {
          id
          title
          description
          text
          createdAt
          updatedAt
          moduleLessonId
          __typename
        }
        nextToken
        __typename
      }
      BeginModule {
        items {
          id
          finish
          startDate
          endDate
          percentage
          createdAt
          updatedAt
          moduleBeginModuleId
          studentBeginModuleId
          __typename
        }
        nextToken
        __typename
      }
      BeginLesson {
        items {
          id
          finish
          startDate
          endDate
          createdAt
          updatedAt
          lessonBeginLessonId
          moduleBeginLessonId
          studentBeginLessonId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      courseModuleId
      __typename
    }
  }
`;
export const onUpdateModule = /* GraphQL */ `
  subscription OnUpdateModule($filter: ModelSubscriptionModuleFilterInput) {
    onUpdateModule(filter: $filter) {
      id
      name
      status
      description
      Course {
        id
        name
        description
        Module {
          nextToken
          __typename
        }
        BeginCourse {
          nextToken
          __typename
        }
        Question {
          nextToken
          __typename
        }
        image
        difficulty
        framework
        programming_language
        web_framework
        mobile_framework
        overview
        trailer
        proposedCourses
        createdAt
        updatedAt
        __typename
      }
      Lesson {
        items {
          id
          title
          description
          text
          createdAt
          updatedAt
          moduleLessonId
          __typename
        }
        nextToken
        __typename
      }
      BeginModule {
        items {
          id
          finish
          startDate
          endDate
          percentage
          createdAt
          updatedAt
          moduleBeginModuleId
          studentBeginModuleId
          __typename
        }
        nextToken
        __typename
      }
      BeginLesson {
        items {
          id
          finish
          startDate
          endDate
          createdAt
          updatedAt
          lessonBeginLessonId
          moduleBeginLessonId
          studentBeginLessonId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      courseModuleId
      __typename
    }
  }
`;
export const onDeleteModule = /* GraphQL */ `
  subscription OnDeleteModule($filter: ModelSubscriptionModuleFilterInput) {
    onDeleteModule(filter: $filter) {
      id
      name
      status
      description
      Course {
        id
        name
        description
        Module {
          nextToken
          __typename
        }
        BeginCourse {
          nextToken
          __typename
        }
        Question {
          nextToken
          __typename
        }
        image
        difficulty
        framework
        programming_language
        web_framework
        mobile_framework
        overview
        trailer
        proposedCourses
        createdAt
        updatedAt
        __typename
      }
      Lesson {
        items {
          id
          title
          description
          text
          createdAt
          updatedAt
          moduleLessonId
          __typename
        }
        nextToken
        __typename
      }
      BeginModule {
        items {
          id
          finish
          startDate
          endDate
          percentage
          createdAt
          updatedAt
          moduleBeginModuleId
          studentBeginModuleId
          __typename
        }
        nextToken
        __typename
      }
      BeginLesson {
        items {
          id
          finish
          startDate
          endDate
          createdAt
          updatedAt
          lessonBeginLessonId
          moduleBeginLessonId
          studentBeginLessonId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      courseModuleId
      __typename
    }
  }
`;
export const onCreateCourse = /* GraphQL */ `
  subscription OnCreateCourse($filter: ModelSubscriptionCourseFilterInput) {
    onCreateCourse(filter: $filter) {
      id
      name
      description
      Module {
        items {
          id
          name
          status
          description
          createdAt
          updatedAt
          courseModuleId
          __typename
        }
        nextToken
        __typename
      }
      BeginCourse {
        items {
          id
          finish
          startDate
          endDate
          percentage
          numberOfLessons
          createdAt
          updatedAt
          courseBeginCourseId
          studentBeginCourseId
          __typename
        }
        nextToken
        __typename
      }
      Question {
        items {
          id
          datePosted
          content
          status
          images
          group
          votes
          createdAt
          updatedAt
          courseQuestionId
          studentQuestionId
          owner
          __typename
        }
        nextToken
        __typename
      }
      image
      difficulty
      framework
      programming_language
      web_framework
      mobile_framework
      overview
      trailer
      proposedCourses
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateCourse = /* GraphQL */ `
  subscription OnUpdateCourse($filter: ModelSubscriptionCourseFilterInput) {
    onUpdateCourse(filter: $filter) {
      id
      name
      description
      Module {
        items {
          id
          name
          status
          description
          createdAt
          updatedAt
          courseModuleId
          __typename
        }
        nextToken
        __typename
      }
      BeginCourse {
        items {
          id
          finish
          startDate
          endDate
          percentage
          numberOfLessons
          createdAt
          updatedAt
          courseBeginCourseId
          studentBeginCourseId
          __typename
        }
        nextToken
        __typename
      }
      Question {
        items {
          id
          datePosted
          content
          status
          images
          group
          votes
          createdAt
          updatedAt
          courseQuestionId
          studentQuestionId
          owner
          __typename
        }
        nextToken
        __typename
      }
      image
      difficulty
      framework
      programming_language
      web_framework
      mobile_framework
      overview
      trailer
      proposedCourses
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteCourse = /* GraphQL */ `
  subscription OnDeleteCourse($filter: ModelSubscriptionCourseFilterInput) {
    onDeleteCourse(filter: $filter) {
      id
      name
      description
      Module {
        items {
          id
          name
          status
          description
          createdAt
          updatedAt
          courseModuleId
          __typename
        }
        nextToken
        __typename
      }
      BeginCourse {
        items {
          id
          finish
          startDate
          endDate
          percentage
          numberOfLessons
          createdAt
          updatedAt
          courseBeginCourseId
          studentBeginCourseId
          __typename
        }
        nextToken
        __typename
      }
      Question {
        items {
          id
          datePosted
          content
          status
          images
          group
          votes
          createdAt
          updatedAt
          courseQuestionId
          studentQuestionId
          owner
          __typename
        }
        nextToken
        __typename
      }
      image
      difficulty
      framework
      programming_language
      web_framework
      mobile_framework
      overview
      trailer
      proposedCourses
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateStudent = /* GraphQL */ `
  subscription OnCreateStudent(
    $filter: ModelSubscriptionStudentFilterInput
    $owner: String
  ) {
    onCreateStudent(filter: $filter, owner: $owner) {
      id
      BeginCourse {
        items {
          id
          finish
          startDate
          endDate
          percentage
          numberOfLessons
          createdAt
          updatedAt
          courseBeginCourseId
          studentBeginCourseId
          __typename
        }
        nextToken
        __typename
      }
      BeginModule {
        items {
          id
          finish
          startDate
          endDate
          percentage
          createdAt
          updatedAt
          moduleBeginModuleId
          studentBeginModuleId
          __typename
        }
        nextToken
        __typename
      }
      BeginLesson {
        items {
          id
          finish
          startDate
          endDate
          createdAt
          updatedAt
          lessonBeginLessonId
          moduleBeginLessonId
          studentBeginLessonId
          __typename
        }
        nextToken
        __typename
      }
      Question {
        items {
          id
          datePosted
          content
          status
          images
          group
          votes
          createdAt
          updatedAt
          courseQuestionId
          studentQuestionId
          owner
          __typename
        }
        nextToken
        __typename
      }
      Response {
        items {
          id
          datePosted
          content
          status
          images
          group
          bestAnswer
          votes
          createdAt
          updatedAt
          questionResponseId
          studentResponseId
          owner
          __typename
        }
        nextToken
        __typename
      }
      AnswerResponse {
        items {
          id
          datePosted
          content
          status
          images
          group
          createdAt
          updatedAt
          responseAnswerResponseId
          studentAnswerResponseId
          owner
          __typename
        }
        nextToken
        __typename
      }
      Upvote {
        items {
          id
          type
          upVote
          downVote
          date
          createdAt
          updatedAt
          responseUpvoteId
          answerResponseUpvoteId
          questionUpvoteId
          studentUpvoteId
          owner
          __typename
        }
        nextToken
        __typename
      }
      UserSubscription {
        items {
          id
          beginDate
          expirationDate
          stripe_subscription_id
          bootcamp
          bootcamp_type
          createdAt
          updatedAt
          platformSubscriptionUserSubscriptionId
          studentUserSubscriptionId
          owner
          __typename
        }
        nextToken
        __typename
      }
      FeedBack {
        items {
          id
          message
          createdAt
          updatedAt
          studentFeedBackId
          owner
          __typename
        }
        nextToken
        __typename
      }
      SupportTicket {
        items {
          id
          subject
          others
          description
          screenshot
          status
          createdAt
          updatedAt
          studentSupportTicketId
          owner
          __typename
        }
        nextToken
        __typename
      }
      sub
      username
      firstname
      lastname
      email
      image
      blocked
      about
      links
      devOps
      frontendFrameworks
      serverlessFrameworks
      languages
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onUpdateStudent = /* GraphQL */ `
  subscription OnUpdateStudent(
    $filter: ModelSubscriptionStudentFilterInput
    $owner: String
  ) {
    onUpdateStudent(filter: $filter, owner: $owner) {
      id
      BeginCourse {
        items {
          id
          finish
          startDate
          endDate
          percentage
          numberOfLessons
          createdAt
          updatedAt
          courseBeginCourseId
          studentBeginCourseId
          __typename
        }
        nextToken
        __typename
      }
      BeginModule {
        items {
          id
          finish
          startDate
          endDate
          percentage
          createdAt
          updatedAt
          moduleBeginModuleId
          studentBeginModuleId
          __typename
        }
        nextToken
        __typename
      }
      BeginLesson {
        items {
          id
          finish
          startDate
          endDate
          createdAt
          updatedAt
          lessonBeginLessonId
          moduleBeginLessonId
          studentBeginLessonId
          __typename
        }
        nextToken
        __typename
      }
      Question {
        items {
          id
          datePosted
          content
          status
          images
          group
          votes
          createdAt
          updatedAt
          courseQuestionId
          studentQuestionId
          owner
          __typename
        }
        nextToken
        __typename
      }
      Response {
        items {
          id
          datePosted
          content
          status
          images
          group
          bestAnswer
          votes
          createdAt
          updatedAt
          questionResponseId
          studentResponseId
          owner
          __typename
        }
        nextToken
        __typename
      }
      AnswerResponse {
        items {
          id
          datePosted
          content
          status
          images
          group
          createdAt
          updatedAt
          responseAnswerResponseId
          studentAnswerResponseId
          owner
          __typename
        }
        nextToken
        __typename
      }
      Upvote {
        items {
          id
          type
          upVote
          downVote
          date
          createdAt
          updatedAt
          responseUpvoteId
          answerResponseUpvoteId
          questionUpvoteId
          studentUpvoteId
          owner
          __typename
        }
        nextToken
        __typename
      }
      UserSubscription {
        items {
          id
          beginDate
          expirationDate
          stripe_subscription_id
          bootcamp
          bootcamp_type
          createdAt
          updatedAt
          platformSubscriptionUserSubscriptionId
          studentUserSubscriptionId
          owner
          __typename
        }
        nextToken
        __typename
      }
      FeedBack {
        items {
          id
          message
          createdAt
          updatedAt
          studentFeedBackId
          owner
          __typename
        }
        nextToken
        __typename
      }
      SupportTicket {
        items {
          id
          subject
          others
          description
          screenshot
          status
          createdAt
          updatedAt
          studentSupportTicketId
          owner
          __typename
        }
        nextToken
        __typename
      }
      sub
      username
      firstname
      lastname
      email
      image
      blocked
      about
      links
      devOps
      frontendFrameworks
      serverlessFrameworks
      languages
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const onDeleteStudent = /* GraphQL */ `
  subscription OnDeleteStudent(
    $filter: ModelSubscriptionStudentFilterInput
    $owner: String
  ) {
    onDeleteStudent(filter: $filter, owner: $owner) {
      id
      BeginCourse {
        items {
          id
          finish
          startDate
          endDate
          percentage
          numberOfLessons
          createdAt
          updatedAt
          courseBeginCourseId
          studentBeginCourseId
          __typename
        }
        nextToken
        __typename
      }
      BeginModule {
        items {
          id
          finish
          startDate
          endDate
          percentage
          createdAt
          updatedAt
          moduleBeginModuleId
          studentBeginModuleId
          __typename
        }
        nextToken
        __typename
      }
      BeginLesson {
        items {
          id
          finish
          startDate
          endDate
          createdAt
          updatedAt
          lessonBeginLessonId
          moduleBeginLessonId
          studentBeginLessonId
          __typename
        }
        nextToken
        __typename
      }
      Question {
        items {
          id
          datePosted
          content
          status
          images
          group
          votes
          createdAt
          updatedAt
          courseQuestionId
          studentQuestionId
          owner
          __typename
        }
        nextToken
        __typename
      }
      Response {
        items {
          id
          datePosted
          content
          status
          images
          group
          bestAnswer
          votes
          createdAt
          updatedAt
          questionResponseId
          studentResponseId
          owner
          __typename
        }
        nextToken
        __typename
      }
      AnswerResponse {
        items {
          id
          datePosted
          content
          status
          images
          group
          createdAt
          updatedAt
          responseAnswerResponseId
          studentAnswerResponseId
          owner
          __typename
        }
        nextToken
        __typename
      }
      Upvote {
        items {
          id
          type
          upVote
          downVote
          date
          createdAt
          updatedAt
          responseUpvoteId
          answerResponseUpvoteId
          questionUpvoteId
          studentUpvoteId
          owner
          __typename
        }
        nextToken
        __typename
      }
      UserSubscription {
        items {
          id
          beginDate
          expirationDate
          stripe_subscription_id
          bootcamp
          bootcamp_type
          createdAt
          updatedAt
          platformSubscriptionUserSubscriptionId
          studentUserSubscriptionId
          owner
          __typename
        }
        nextToken
        __typename
      }
      FeedBack {
        items {
          id
          message
          createdAt
          updatedAt
          studentFeedBackId
          owner
          __typename
        }
        nextToken
        __typename
      }
      SupportTicket {
        items {
          id
          subject
          others
          description
          screenshot
          status
          createdAt
          updatedAt
          studentSupportTicketId
          owner
          __typename
        }
        nextToken
        __typename
      }
      sub
      username
      firstname
      lastname
      email
      image
      blocked
      about
      links
      devOps
      frontendFrameworks
      serverlessFrameworks
      languages
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
