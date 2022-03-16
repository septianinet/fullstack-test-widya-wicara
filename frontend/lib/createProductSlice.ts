import api from "./api";

const createProductSlice= (set:any, get:any) => ({
  products: [],
  editMode: false,
  edit: null,
  setEdit: (product: any) => {
    set({edit: product, editMode: true})
  },
  fetchProducts: async (name: string) => {
    const response = await api('/products', {method: 'GET'})
    
    set({products: response.data.data});
  },
  addProduct: async (name: string) => {
    const body = {
      name,
      description: 'Some description',
      price: 1000
    }
    const response = await api('/products', {method: 'POST', data: body, headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }, })
    await get().fetchProducts();
  },
  deleteProduct: async (id: string) => {
    const response = await api(`/products/${id}`, {method: 'DELETE', headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }, })
    await get().fetchProducts();
  },
  editProduct: async (name: string) => {
    const body = {
      name
    }
    const id = get().edit.id
    const response = await api(`/products/${id}`, {method: 'PUT', headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }, data: body})

    await get().fetchProducts();
    set({editMode: false, edit: null})
  }
})

export default createProductSlice;