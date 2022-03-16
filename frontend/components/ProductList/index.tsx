import React from "react";
import useStore from "../../lib/useStore";
import Product from "../Product";

const ProductList:React.FC = () => {
  
  const products = useStore(state => state.products);
  const deleteProduct = useStore(state => state.deleteProduct)
  const setEditId = useStore(state => state.setEdit);

  return (
    <div className='flex flex-col items-center'>
      {
        products.length > 0 && products.map((product: any) => (
          <Product product={product} key={product.id} onDelete={deleteProduct} onEdit={setEditId} />
        ))
      }
    </div>
  )
}

export default ProductList;