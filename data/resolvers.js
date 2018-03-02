
const activities = [
  {
    id: 1,
    name: 'Walk',
  },
];

const summary = {
  steps: 1000,
};

const typeResolvers = {
  Query: {
    activities: (_, { activityType }) => activities.filter(activity => activity.name === activityType),
    summary: (_, { dateOrPeriod }) => summary,

  },
};

export default typeResolvers;
