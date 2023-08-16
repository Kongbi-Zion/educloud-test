/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPlatformSubscription = /* GraphQL */ `
  query GetPlatformSubscription($id: ID!) {
    getPlatformSubscription(id: $id) {
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
export const listPlatformSubscriptions = /* GraphQL */ `
  query ListPlatformSubscriptions(
    $filter: ModelPlatformSubscriptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlatformSubscriptions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getUpvote = /* GraphQL */ `
  query GetUpvote($id: ID!) {
    getUpvote(id: $id) {
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
export const listUpvotes = /* GraphQL */ `
  query ListUpvotes(
    $filter: ModelUpvoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUpvotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getResponse = /* GraphQL */ `
  query GetResponse($id: ID!) {
    getResponse(id: $id) {
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
export const listResponses = /* GraphQL */ `
  query ListResponses(
    $filter: ModelResponseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listResponses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getAnswerResponse = /* GraphQL */ `
  query GetAnswerResponse($id: ID!) {
    getAnswerResponse(id: $id) {
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
export const listAnswerResponses = /* GraphQL */ `
  query ListAnswerResponses(
    $filter: ModelAnswerResponseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAnswerResponses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getQuestion = /* GraphQL */ `
  query GetQuestion($id: ID!) {
    getQuestion(id: $id) {
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
export const listQuestions = /* GraphQL */ `
  query ListQuestions(
    $filter: ModelQuestionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getBeginLesson = /* GraphQL */ `
  query GetBeginLesson($id: ID!) {
    getBeginLesson(id: $id) {
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
export const listBeginLessons = /* GraphQL */ `
  query ListBeginLessons(
    $filter: ModelBeginLessonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBeginLessons(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        finish
        startDate
        endDate
        Lesson {
          id
          title
          description
          text
          createdAt
          updatedAt
          moduleLessonId
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
  }
`;
export const getBeginModule = /* GraphQL */ `
  query GetBeginModule($id: ID!) {
    getBeginModule(id: $id) {
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
export const listBeginModules = /* GraphQL */ `
  query ListBeginModules(
    $filter: ModelBeginModuleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBeginModules(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          createdAt
          updatedAt
          courseModuleId
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
        createdAt
        updatedAt
        moduleBeginModuleId
        studentBeginModuleId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getBeginCourse = /* GraphQL */ `
  query GetBeginCourse($id: ID!) {
    getBeginCourse(id: $id) {
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
export const listBeginCourses = /* GraphQL */ `
  query ListBeginCourses(
    $filter: ModelBeginCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBeginCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        finish
        startDate
        endDate
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
  }
`;
export const getFeedBack = /* GraphQL */ `
  query GetFeedBack($id: ID!) {
    getFeedBack(id: $id) {
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
export const listFeedBacks = /* GraphQL */ `
  query ListFeedBacks(
    $filter: ModelFeedBackFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFeedBacks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        message
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
        createdAt
        updatedAt
        studentFeedBackId
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getSupportTicket = /* GraphQL */ `
  query GetSupportTicket($id: ID!) {
    getSupportTicket(id: $id) {
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
export const listSupportTickets = /* GraphQL */ `
  query ListSupportTickets(
    $filter: ModelSupportTicketFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSupportTickets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        subject
        others
        description
        screenshot
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
  }
`;
export const getCourseProgress = /* GraphQL */ `
  query GetCourseProgress($id: ID!) {
    getCourseProgress(id: $id) {
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
export const listCourseProgresses = /* GraphQL */ `
  query ListCourseProgresses(
    $filter: ModelCourseProgressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourseProgresses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
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
        Lesson {
          id
          title
          description
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
      nextToken
      __typename
    }
  }
`;
export const getUserSubscription = /* GraphQL */ `
  query GetUserSubscription($id: ID!) {
    getUserSubscription(id: $id) {
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
export const listUserSubscriptions = /* GraphQL */ `
  query ListUserSubscriptions(
    $filter: ModelUserSubscriptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserSubscriptions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        beginDate
        expirationDate
        stripe_subscription_id
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
        PlatformSubscription {
          id
          duration
          description
          stripe_product_id
          name
          bootcamp
          bootcamp_type
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
      nextToken
      __typename
    }
  }
`;
export const getLesson = /* GraphQL */ `
  query GetLesson($id: ID!) {
    getLesson(id: $id) {
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
export const listLessons = /* GraphQL */ `
  query ListLessons(
    $filter: ModelLessonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLessons(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getModule = /* GraphQL */ `
  query GetModule($id: ID!) {
    getModule(id: $id) {
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
export const listModules = /* GraphQL */ `
  query ListModules(
    $filter: ModelModuleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listModules(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getCourse = /* GraphQL */ `
  query GetCourse($id: ID!) {
    getCourse(id: $id) {
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
export const listCourses = /* GraphQL */ `
  query ListCourses(
    $filter: ModelCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getStudent = /* GraphQL */ `
  query GetStudent($id: ID!) {
    getStudent(id: $id) {
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
export const listStudents = /* GraphQL */ `
  query ListStudents(
    $filter: ModelStudentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
