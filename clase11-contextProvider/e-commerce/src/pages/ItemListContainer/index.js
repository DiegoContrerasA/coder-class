import Filters from 'components/Filters'
import ItemList from 'components/ItemList'
import { getItems } from 'firebaseConfig/services/items'

import { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
  const { categoryId } = useParams()

  const [loading, setLoading] = useState(false)
  const [products, setProducts] = useState([])
  const [filterProducts, setFilterProducts] = useState([])

  const [search, setSearch] = useState('')

  useEffect(() => {
    setLoading(true)

    getItems(categoryId)
      .then((snapshots) => {
        const products = snapshots.docs.map((snapshot) => ({ id: snapshot.id, ...snapshot.data() }))
        setProducts(products)
      })
      .catch(err => console.log({ err }))
      .finally(() => setLoading(false))
  }, [categoryId])

  const handleFilterProducts = (e) => {
    e.preventDefault()
    const filter = products
      .filter(({ title }) => title.toLowerCase().includes(search))

    setFilterProducts(filter)
  }

  const getFilterProducts = useMemo(() => {
    console.log('se ejecuta')
    return products
      .filter(({ title }) => title.toLowerCase().includes(search))
  }, [search, products])

  return (
    <>
      <h1 className='text-center mb-5 text-4xl font-extrabold text-transparent
             bg-clip-text bg-gradient-to-r from-indigo-700 to-[#a64aff]'
      >
        E-COMMERCE
      </h1>
      <div className='mb-10 m-auto'>
        <Filters />
        <form onSubmit={handleFilterProducts} className='max-w-md flex mt-5'>
          <input className='px-3 py-2 bg-white border shadow-sm border-indigo-700 placeholder-slate-400 focus:outline-none block w-full rounded-tl-md rounded-bl-md sm:text-sm focus:ring-1' placeholder='Search for title' type='text' name='search' value={search} onChange={(event) => setSearch(event.target.value)} />
          <button className='bg-indigo-700 text-white rounded-tr-md rounded-br-md px-2'>Buscar</button>
        </form>
      </div>
      <ItemList products={getFilterProducts} loading={loading} />
      {/* <ItemCount stock={8} initial={1} onAdd={onAdd} /> */}
    </>
  )
}

export default ItemListContainer
