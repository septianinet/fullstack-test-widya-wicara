import React from "react";

const styles = {
  productWrapper: 'bg-white px-8 py-4 w-full lg:w-3/4 rounded-full shadow-md flex flex-row items-center justify-between mb-5 cursor-pointer transition ease-900 group hover:shadow-lg hover:bg-green-400 hover:text-white'
}

export interface ProductProps {
  product: any;
  onEdit: (product: any) => void;
  onDelete: (id: string) => void;
}

const Product:React.FC<ProductProps> = ({product, onEdit, onDelete}) => {
  return (
    <div className={styles.productWrapper}>
      <h3 className='text-lg'>{product.name}</h3>
      <div>
        <button onClick={() => onEdit(product)} className="px-5 py-1 rounded-full bg-green-200 group-hover:bg-green-50 group-hover:text-black mr-3">Edit</button>
        <button onClick={() => onDelete(product.id)} className="px-5 py-1 rounded-full bg-green-200 group-hover:bg-green-50 group-hover:text-black">Delete</button>
      </div>
    </div>
  )
}

export default Product;