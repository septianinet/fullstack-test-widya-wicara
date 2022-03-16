import type { NextPage } from 'next'
import React, {useState} from 'react'
import FlowerList from '../components/ProductList'
import Base from '../Layout/Base'
import useStore from '../lib/useStore'
import { useSession } from "next-auth/react"
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const [text, setText] = useState('')
  const addProduct = useStore(state => state.addProduct);
  const editProduct = useStore(state => state.editProduct);
  const fetchProducts = useStore(state => state.fetchProducts);
  const isEdit = useStore(state => state.editMode);
  const editedProduct = useStore(state => state.edit)
  const router = useRouter()
  const { data: session } = useSession()

  React.useEffect(() => {
    if(session) {
      fetchProducts()
    }
  }, [session])

  React.useEffect(() => {
    if(editedProduct) {
      setText(editedProduct.name)
    }
  }, [isEdit, editedProduct])
  
  const onEnterPress = (e: { charCode: number }) => {
    if(e.charCode === 13) {
      if(text.length === 0) return;
      if(!isEdit) {
        addProduct(text)
      } else {
        editProduct(text)
      }
      setText('')
    }
  }
  const onInputChange = (e: any) => {
    setText(e.target.value)
  }
  return (
    <Base>
      <div className='w-full min-h-screen mt-16'>
      <h1 className='text-2xl uppercase font-semibold mt-16'>Flowery Widya Wicara</h1>
      
        {
          session && (
            <>
            <div className='mt-10 w-full'>
              <input type="text" value={text} onChange={onInputChange} className='p-4 text-xl text-center outline-green-400 shadow-md rounded-full w-full sm:2/4 md:w-3/4' placeholder='Tambah produk' onKeyPress={onEnterPress} />
            </div>

            <div className='mt-10 w-full'>
              <FlowerList />
            </div>
            </>
          )
        }

        {!session && (<h2 className='text-lg mt-8 italic'>Login first to access this page!</h2>)}

      </div>
    </Base>
  )
}

export default Home
