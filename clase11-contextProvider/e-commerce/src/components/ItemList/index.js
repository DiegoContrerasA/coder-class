import ItemSkeleton from 'components/Item/ItemSkeleton'
import Item from '../Item'
import { Link } from 'react-router-dom'
import { EmptyIcon } from 'icons'
import { memo } from 'react'

const ItemList = memo(({ products, loading }) => {
  if (loading) {
    return (
      <div className='grid gap-5 grid-cols-4'>
        {[...Array(10).keys()].map((index) => <ItemSkeleton key={index} />)}
      </div>
    )
  }

  if (!products.length) {
    return (
      <div className='text-center text-lg flex  items-center flex-col py-8 text-[#3f3d56]'>
        <EmptyIcon width={250} height={200} className='mb-10' />
        <h3 className='mb-2 font-bold max-w-md'>No items with the filters applied, please perform another search</h3>
        <Link to='/' className='border border-indigo-700 text-sm text-indigo-700 rounded-md px-2 py-0.5'>
          Go to home
        </Link>
      </div>
    )
  }

  return (
    <div className='grid gap-5 grid-cols-4'>
      {products.map((product) => <Item key={product.id} {...product} />)}
    </div>
  )
})

export default ItemList
