import User from "../users/user.model";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'
const authService = {
  signUp: async (user) => {
    const salt = await bcrypt.genSalt(10);
    const newPassword = await bcrypt.hash(user.password, salt);

    const checkExistingUser = await User.findOne({email: user.email});

    if(checkExistingUser) {
      throw Error('Email sudah terdaftar!')
    }
    
    return await User.create({...user, password: newPassword});
  },
  login: async (user) => {
    const {email, password} = user;
    
    const findUser = await User.findOne({email});
    if(!findUser) {
      throw Error('user tidak ditemukan')
    }

    const isPasswordValid = await bcrypt.compare(password, findUser.password);
    if(!isPasswordValid) {
      throw Error('email atau password salah!')
    }

    const accessToken = jwt.sign({email: findUser.email, name: findUser.name}, process.env.JWT_SECRET_KEY)
    
    return accessToken;
  },
};

export default authService;
