const { default: mongoose } = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true
  },
});

UserSchema.methods = {
  toJSON() {
    const {__v, _id, password, ...object} = this.toObject();
    object.id = _id;
    return object;
  }
}

const User = mongoose.model("Users", UserSchema);
export default User;
