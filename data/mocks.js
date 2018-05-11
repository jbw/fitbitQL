const mocks = {
  String: () => 'Mock String',

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
};

export default mocks;
