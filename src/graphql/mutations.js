/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const updateUserSubscription = /* GraphQL */ `
  mutation UpdateUserSubscription(
    $input: UpdateUserSubscriptionInput!
    $condition: ModelUserSubscriptionConditionInput
  ) {
    updateUserSubscription(input: $input, condition: $condition) {
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
export const deleteUserSubscription = /* GraphQL */ `
  mutation DeleteUserSubscription(
    $input: DeleteUserSubscriptionInput!
    $condition: ModelUserSubscriptionConditionInput
  ) {
    deleteUserSubscription(input: $input, condition: $condition) {
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
export const createPlatformSubscription = /* GraphQL */ `
  mutation CreatePlatformSubscription(
    $input: CreatePlatformSubscriptionInput!
    $condition: ModelPlatformSubscriptionConditionInput
  ) {
    createPlatformSubscription(input: $input, condition: $condition) {
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
export const updatePlatformSubscription = /* GraphQL */ `
  mutation UpdatePlatformSubscription(
    $input: UpdatePlatformSubscriptionInput!
    $condition: ModelPlatformSubscriptionConditionInput
  ) {
    updatePlatformSubscription(input: $input, condition: $condition) {
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
export const deletePlatformSubscription = /* GraphQL */ `
  mutation DeletePlatformSubscription(
    $input: DeletePlatformSubscriptionInput!
    $condition: ModelPlatformSubscriptionConditionInput
  ) {
    deletePlatformSubscription(input: $input, condition: $condition) {
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
export const createUpvote = /* GraphQL */ `
  mutation CreateUpvote(
    $input: CreateUpvoteInput!
    $condition: ModelUpvoteConditionInput
  ) {
    createUpvote(input: $input, condition: $condition) {
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
export const updateUpvote = /* GraphQL */ `
  mutation UpdateUpvote(
    $input: UpdateUpvoteInput!
    $condition: ModelUpvoteConditionInput
  ) {
    updateUpvote(input: $input, condition: $condition) {
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
export const deleteUpvote = /* GraphQL */ `
  mutation DeleteUpvote(
    $input: DeleteUpvoteInput!
    $condition: ModelUpvoteConditionInput
  ) {
    deleteUpvote(input: $input, condition: $condition) {
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
export const createResponse = /* GraphQL */ `
  mutation CreateResponse(
    $input: CreateResponseInput!
    $condition: ModelResponseConditionInput
  ) {
    createResponse(input: $input, condition: $condition) {
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
export const updateResponse = /* GraphQL */ `
  mutation UpdateResponse(
    $input: UpdateResponseInput!
    $condition: ModelResponseConditionInput
  ) {
    updateResponse(input: $input, condition: $condition) {
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
export const deleteResponse = /* GraphQL */ `
  mutation DeleteResponse(
    $input: DeleteResponseInput!
    $condition: ModelResponseConditionInput
  ) {
    deleteResponse(input: $input, condition: $condition) {
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
export const createAnswerResponse = /* GraphQL */ `
  mutation CreateAnswerResponse(
    $input: CreateAnswerResponseInput!
    $condition: ModelAnswerResponseConditionInput
  ) {
    createAnswerResponse(input: $input, condition: $condition) {
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
export const updateAnswerResponse = /* GraphQL */ `
  mutation UpdateAnswerResponse(
    $input: UpdateAnswerResponseInput!
    $condition: ModelAnswerResponseConditionInput
  ) {
    updateAnswerResponse(input: $input, condition: $condition) {
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
export const deleteAnswerResponse = /* GraphQL */ `
  mutation DeleteAnswerResponse(
    $input: DeleteAnswerResponseInput!
    $condition: ModelAnswerResponseConditionInput
  ) {
    deleteAnswerResponse(input: $input, condition: $condition) {
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
export const createQuestion = /* GraphQL */ `
  mutation CreateQuestion(
    $input: CreateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    createQuestion(input: $input, condition: $condition) {
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
export const updateQuestion = /* GraphQL */ `
  mutation UpdateQuestion(
    $input: UpdateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    updateQuestion(input: $input, condition: $condition) {
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
export const deleteQuestion = /* GraphQL */ `
  mutation DeleteQuestion(
    $input: DeleteQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    deleteQuestion(input: $input, condition: $condition) {
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
export const createBeginLesson = /* GraphQL */ `
  mutation CreateBeginLesson(
    $input: CreateBeginLessonInput!
    $condition: ModelBeginLessonConditionInput
  ) {
    createBeginLesson(input: $input, condition: $condition) {
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
export const updateBeginLesson = /* GraphQL */ `
  mutation UpdateBeginLesson(
    $input: UpdateBeginLessonInput!
    $condition: ModelBeginLessonConditionInput
  ) {
    updateBeginLesson(input: $input, condition: $condition) {
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
export const deleteBeginLesson = /* GraphQL */ `
  mutation DeleteBeginLesson(
    $input: DeleteBeginLessonInput!
    $condition: ModelBeginLessonConditionInput
  ) {
    deleteBeginLesson(input: $input, condition: $condition) {
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
export const createBeginModule = /* GraphQL */ `
  mutation CreateBeginModule(
    $input: CreateBeginModuleInput!
    $condition: ModelBeginModuleConditionInput
  ) {
    createBeginModule(input: $input, condition: $condition) {
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
export const updateBeginModule = /* GraphQL */ `
  mutation UpdateBeginModule(
    $input: UpdateBeginModuleInput!
    $condition: ModelBeginModuleConditionInput
  ) {
    updateBeginModule(input: $input, condition: $condition) {
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
export const deleteBeginModule = /* GraphQL */ `
  mutation DeleteBeginModule(
    $input: DeleteBeginModuleInput!
    $condition: ModelBeginModuleConditionInput
  ) {
    deleteBeginModule(input: $input, condition: $condition) {
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
export const createBeginCourse = /* GraphQL */ `
  mutation CreateBeginCourse(
    $input: CreateBeginCourseInput!
    $condition: ModelBeginCourseConditionInput
  ) {
    createBeginCourse(input: $input, condition: $condition) {
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
export const updateBeginCourse = /* GraphQL */ `
  mutation UpdateBeginCourse(
    $input: UpdateBeginCourseInput!
    $condition: ModelBeginCourseConditionInput
  ) {
    updateBeginCourse(input: $input, condition: $condition) {
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
export const deleteBeginCourse = /* GraphQL */ `
  mutation DeleteBeginCourse(
    $input: DeleteBeginCourseInput!
    $condition: ModelBeginCourseConditionInput
  ) {
    deleteBeginCourse(input: $input, condition: $condition) {
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
export const createFeedBack = /* GraphQL */ `
  mutation CreateFeedBack(
    $input: CreateFeedBackInput!
    $condition: ModelFeedBackConditionInput
  ) {
    createFeedBack(input: $input, condition: $condition) {
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
export const updateFeedBack = /* GraphQL */ `
  mutation UpdateFeedBack(
    $input: UpdateFeedBackInput!
    $condition: ModelFeedBackConditionInput
  ) {
    updateFeedBack(input: $input, condition: $condition) {
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
export const deleteFeedBack = /* GraphQL */ `
  mutation DeleteFeedBack(
    $input: DeleteFeedBackInput!
    $condition: ModelFeedBackConditionInput
  ) {
    deleteFeedBack(input: $input, condition: $condition) {
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
export const createSupportTicket = /* GraphQL */ `
  mutation CreateSupportTicket(
    $input: CreateSupportTicketInput!
    $condition: ModelSupportTicketConditionInput
  ) {
    createSupportTicket(input: $input, condition: $condition) {
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
export const updateSupportTicket = /* GraphQL */ `
  mutation UpdateSupportTicket(
    $input: UpdateSupportTicketInput!
    $condition: ModelSupportTicketConditionInput
  ) {
    updateSupportTicket(input: $input, condition: $condition) {
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
export const deleteSupportTicket = /* GraphQL */ `
  mutation DeleteSupportTicket(
    $input: DeleteSupportTicketInput!
    $condition: ModelSupportTicketConditionInput
  ) {
    deleteSupportTicket(input: $input, condition: $condition) {
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
export const createLesson = /* GraphQL */ `
  mutation CreateLesson(
    $input: CreateLessonInput!
    $condition: ModelLessonConditionInput
  ) {
    createLesson(input: $input, condition: $condition) {
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
export const updateLesson = /* GraphQL */ `
  mutation UpdateLesson(
    $input: UpdateLessonInput!
    $condition: ModelLessonConditionInput
  ) {
    updateLesson(input: $input, condition: $condition) {
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
export const deleteLesson = /* GraphQL */ `
  mutation DeleteLesson(
    $input: DeleteLessonInput!
    $condition: ModelLessonConditionInput
  ) {
    deleteLesson(input: $input, condition: $condition) {
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
export const createModule = /* GraphQL */ `
  mutation CreateModule(
    $input: CreateModuleInput!
    $condition: ModelModuleConditionInput
  ) {
    createModule(input: $input, condition: $condition) {
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
export const updateModule = /* GraphQL */ `
  mutation UpdateModule(
    $input: UpdateModuleInput!
    $condition: ModelModuleConditionInput
  ) {
    updateModule(input: $input, condition: $condition) {
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
export const deleteModule = /* GraphQL */ `
  mutation DeleteModule(
    $input: DeleteModuleInput!
    $condition: ModelModuleConditionInput
  ) {
    deleteModule(input: $input, condition: $condition) {
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
export const createCourse = /* GraphQL */ `
  mutation CreateCourse(
    $input: CreateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    createCourse(input: $input, condition: $condition) {
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
export const updateCourse = /* GraphQL */ `
  mutation UpdateCourse(
    $input: UpdateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    updateCourse(input: $input, condition: $condition) {
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
export const deleteCourse = /* GraphQL */ `
  mutation DeleteCourse(
    $input: DeleteCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    deleteCourse(input: $input, condition: $condition) {
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
export const updateStudent = /* GraphQL */ `
  mutation UpdateStudent(
    $input: UpdateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    updateStudent(input: $input, condition: $condition) {
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
export const deleteStudent = /* GraphQL */ `
  mutation DeleteStudent(
    $input: DeleteStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    deleteStudent(input: $input, condition: $condition) {
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
export const createCourseProgress = /* GraphQL */ `
  mutation CreateCourseProgress(
    $input: CreateCourseProgressInput!
    $condition: ModelCourseProgressConditionInput
  ) {
    createCourseProgress(input: $input, condition: $condition) {
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
export const updateCourseProgress = /* GraphQL */ `
  mutation UpdateCourseProgress(
    $input: UpdateCourseProgressInput!
    $condition: ModelCourseProgressConditionInput
  ) {
    updateCourseProgress(input: $input, condition: $condition) {
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
export const deleteCourseProgress = /* GraphQL */ `
  mutation DeleteCourseProgress(
    $input: DeleteCourseProgressInput!
    $condition: ModelCourseProgressConditionInput
  ) {
    deleteCourseProgress(input: $input, condition: $condition) {
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
export const createUserSubscription = /* GraphQL */ `
  mutation CreateUserSubscription(
    $input: CreateUserSubscriptionInput!
    $condition: ModelUserSubscriptionConditionInput
  ) {
    createUserSubscription(input: $input, condition: $condition) {
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
export const createStudent = /* GraphQL */ `
  mutation CreateStudent(
    $input: CreateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    createStudent(input: $input, condition: $condition) {
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
