import userService from "../services/user.service";

const userController = {
  find: (req, res) => {
    const name = req.query.name;
    if (name) {
      res.json(userService.findByName(name));
    } else {
      res.json(userService.findAll());
    }
  },
};

export default userController;
