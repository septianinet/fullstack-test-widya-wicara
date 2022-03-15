import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description:{
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
  },
})

ProductSchema.methods = {
  toJSON() {
    const {__v, _id, password, ...object} = this.toObject();
    object.id = _id;
    return object;
  }
}

const Product = mongoose.model('Products', ProductSchema);
export default Product