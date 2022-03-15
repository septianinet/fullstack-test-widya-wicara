import User from "./user.model";

const userService = {
  findByName: async (name) => {
    return await User.find({ name });
  },
  findAll: async () => {
    return await User.find();
  },
  findMe: async (email) => {
    return await User.findOne({email: email})
  }
};

export default userService;
