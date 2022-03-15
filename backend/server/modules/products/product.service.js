import { async } from "regenerator-runtime";
import Product from "./product.model"

const productService = {
  insert: async (data) => {
    return await Product.create(data)
  },
  find: async (params) => {
    if(params) {
      return await Product.find({...params})
    } else {
      return await Product.find()
    }
  },
  findOne: async(id) => {
    if(!id) throw Error('Silahkan masukkan Id produk');
    
    const product = await Product.findById(id)
    console.log(product)
    return product;
  },
  update: async (id, data) => {
    const existingProduct = await productService.findOne(id)
    
    if(!existingProduct) {
      throw Error(`Product dengan ID ${id} tidak ditemukan`)
    }
    return await Product.findByIdAndUpdate(id, data, { new: true })
  },
  delete: async (id) => {
    const existingProduct = await productService.findOne(id)

    if(!existingProduct) {
      throw Error(`Produk dengan ID ${id} tidak ditemukan`)
    } else {
      return await Product.findByIdAndDelete(id)
    }
  }
}

export default productService;