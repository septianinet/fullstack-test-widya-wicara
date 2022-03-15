import userService from "./user.service";

const userController = {
  find: async (req, res) => {
    try {
      const name = req.query.name;
      let users;
      if (name) {
        users = await userService.findByName(name)
      } else {
        users = await userService.findAll()
      }
      res.status(200).json(users);
    } catch (error) {
      res.status(500).send({message: error.message})
    } 
  },
  me: async (req, res, next) => {
    try {
      const user = req.user;
      if(user) {
        const findMe = await userService.findMe(user.email);
        res.status(200).json(findMe)
      } else {
        res.status(403).json({message: 'Forbidden access!'})
      }
    } catch (error) {
      res.status(500).json({message: error.message})
    }
  }
};

export default userController;
