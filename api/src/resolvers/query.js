module.exports = {
  user: async (parent, { username }, { models }) => {
    return models.User.findOne({ username });
  },
  users: async (parent, args, { models }) => {
    return models.User.find({});
  },
  me: async (parent, args, { models, user }) => {
    return models.User.findById(user.id);
  },
  notes: async (parent, args, { models }) => {
    return await models.Note.find();
  },
  note: async (parent, args, { models }) => {
    return await models.Note.findById(args.id);
  }
};
