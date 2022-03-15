import productService from "./product.service";

const productController = {
  create: async (req, res, next) => {
    // TODO: Add Validation

    try {
      const {name, description, price} = req.body;
      const product = await productService.insert({name, description, price})

      res.status(201).json({message: 'Berhasil menambah produk', data: product})
    } catch (error) {
      res.status(400).json({message: error.message})
    }
  },
  getAll: async (req, res, next) => {
    try {
      const filter = req.query;
      const products = await productService.find(filter);

      res.status(200).json({data: products})
    } catch (error) {
      res.status(404).json({error: error.message})
    }
  },
  update: async (req, res, next) => {
    // TODO: Add Validation
    try {
      const {name, description, price} = req.body;
      const product = await productService.update(req.params.id, {name, description, price})

      res.status(200).json({message: `Berhasil update produk dengan id ${req.params.id}`, data: product});
    } catch (error) {
      res.status(400).json({error: error.message})
    }
  },
  delete: async (req, res, next) => {
    try {
      const id = req.params.id;

      await productService.delete(id);
      res.status(200).json({message: `Produk dengan ID ${id} berhasil dihapus`})
    } catch (error) {
      res.status(400).json({error: error.message});
    }
  }
}

export default productController;