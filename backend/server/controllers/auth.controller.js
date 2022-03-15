import authService from "../services/auth.service";
import userService from "../services/user.service";

const authController = {
  register: async (req, res, next) => {
    try {
      const { name, email, password } = req.body;
      console.log(req.body);
      // const newUser = await userService.create({ name, email, password });
      const user = await authService.signUp({ name, email, password });

      res.status(200).json(user);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};

export default authController;
