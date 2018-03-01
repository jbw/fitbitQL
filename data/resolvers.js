
const activities = [
  {
    id: 1,
    name: 'Walk',
  },
];

const typeResolvers = {
  Query: {
    activities: (_, { activityType }) => activities.filter(activity => activity.name === activityType),
  },
};

export default typeResolvers;
