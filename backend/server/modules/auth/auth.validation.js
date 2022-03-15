import Joi from 'joi';

export const passwordReg = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
export default {
  signup: {
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().regex(passwordReg).required(),
  },
  login: {
    email: Joi.string().email().required(),
    password: Joi.string().regex(passwordReg).required(),
  }
};