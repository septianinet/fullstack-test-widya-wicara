import authService from "./auth.service"

const authController = {
  register: async (req, res, next) => {
    try {
      const { name, email, password, gender } = req.body;
      console.log(req.body)
      const user = await authService.signUp({ name, email, password, gender});
      
      res.status(200).json({
        message: 'Pendaftaran berhasil!',
        data: user
      });
    } catch (error) {
      console.log(error.message)
      res.status(400).json({ message: error.message });
    }
  },
  login: async (req, res, next) => {
    try {
      const {email, password} = req.body;
      const token = await authService.login({email, password})

      res.status(200).json(token)
    } catch (error) {
      res.status(401).json({error, message: error.message})
    }
  }
};

export default authController;
