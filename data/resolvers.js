

const activities = [
  {
    id: 1,
    name: 'Walk',
  },
];

const typeResolvers = {
  Query: {
    activities: (_, { activityType }) =>
      activities.filter(activity => activity.name === activityType),
    summary: (_, { dateOrPeriod }, context) =>
      context.fitbit.getSummary(dateOrPeriod)
        .then(data => data.summary)
        .catch((err) => { throw new Error(err.errors[0].message); }),
  },
};

export default typeResolvers;
