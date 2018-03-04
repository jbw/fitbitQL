

const activities = [
  {
    id: 1,
    name: 'Walk',
  },
];

const typeResolvers = {
  Query: {
    activities: (_, { activityType }) => activities.filter(activity => activity.name === activityType),
    summary: (_, { dateOrPeriod }, context) => context.fitbit.getSummary(dateOrPeriod).then(data => data.summary),
  },
};

export default typeResolvers;
