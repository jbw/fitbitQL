const mocks = {
  String: () => 'Mock String',
  Int: () => 90001,
  Step: () => ({
    count: 1000,
  }),

  Summary: () => ({
    steps: 1000,
    elevation: 12.34,
    fairlyActiveMinutes: 100,
    floors: 12,
    lightlyActiveMinutes: 99,
    marginalCalories: 12,
    sedentaryMinutes: 24,
    veryActiveMinutes: 48,
    distances: [
      {
        activity: 'total',
        distance: 7.96,
      },
    ],

  }),

  ActivityCalorie: () => ({

  }),

  ActivityCalorieIntraDay: () => ({
    datasetInterval: 1,
    datasetType: 'min',
  }),

  Dataset: () => ({
    level: 0,
    mets: 10,
    time: '00:00:00',
    value: 1.1929999589920044,

  }),
  Calorie: () => ({
    dateTime: '2018-01-19',
    value: '2334',
  }),
};

export default mocks;
