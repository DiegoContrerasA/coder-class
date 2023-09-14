import Filters from 'components/Filters'
import ItemList from 'components/ItemList'

import { getProducts } from 'mock'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
  const { categoryId } = useParams()

  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])

  useEffect(() => {
    setLoading(true)
    getProducts(categoryId)
      .then((products) => setProducts(products))
      .catch(err => console.log({ err }))
      .finally(() => setLoading(false))
  }, [categoryId])

  return (
    <>
      <h1 className='text-center mb-5 text-4xl font-extrabold text-transparent
             bg-clip-text bg-gradient-to-r from-indigo-700 to-[#a64aff]'
      >
        E-COMMERCE
      </h1>
      <div className='mb-10 m-auto'>
        <Filters />
      </div>
      <ItemList products={products} loading={loading} />
      {/* <ItemCount stock={8} initial={1} onAdd={onAdd} /> */}
    </>
  )
}

export default ItemListContainer
