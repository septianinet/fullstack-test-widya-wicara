import User from "../models/user.model";
import bcrypt from "bcrypt";
const authService = {
  signUp: async (user) => {
    const salt = await bcrypt.genSalt(10);
    const userDoc = new User(user);
    userDoc.password = await bcrypt.hash(userDoc.password, salt);
    return await userDoc.save();
  },
};

export default authService;
