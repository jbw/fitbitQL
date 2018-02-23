
const activities = [
  {
    id: 1,
    name: 'Walk',
  },
];

const typeResolvers = {
  Query: {
    activities: () => activities,
  },
};

export default typeResolvers;
