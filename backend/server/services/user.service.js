import User from "../models/user.model";

const userService = {
  findByName: async (name) => {
    return await User.find({ name });
  },
  findAll: async () => {
    return await User.find();
  },
};

export default userService;
