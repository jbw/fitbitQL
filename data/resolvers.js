import Hypertonic from 'hypertonic';

const token = require('../secrets/token');

const hypertonic = Hypertonic(token.access_token);

const activities = [
  {
    id: 1,
    name: 'Walk',
  },
];

const typeResolvers = {
  Query: {
    activities: (_, { activityType }) => activities.filter(activity => activity.name === activityType),
    summary: (_, { dateOrPeriod }) => hypertonic.getSummary(dateOrPeriod).then(data => data.summary),
  },
};

export default typeResolvers;
