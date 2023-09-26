import ItemCount from 'components/ItemCount'
import { useCart } from 'context/CartProvider'
import { LeftIcon, ShoppingCartIcon } from 'icons'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getRate } from 'utils/getRate'

const ItemDetail = ({ item }) => {
  const [quantityAdd, setQuantityAdd] = useState(0)

  const { addItem } = useCart()

  const handleAddToCard = (number) => {
    setQuantityAdd(number)
    addItem(item, number)
  }

  if (!item) {
    return (
      <h1>El producto no fue encontrado</h1>
    )
  }

  const { image, title, description, rating, price, category, stock } = item

  return (
    <article className='flex flex-col rounded-md overflow-hidden p-2 pb-8'>
      <picture className='w-[200px] min-w-[200px] max-w-[200px] m-auto'>
        <img src={image} alt={title} />
      </picture>
      <div className='flex flex-col gap-4 py-8'>
        <h3 className='font-bold text-4xl'>{title}</h3>
        <p>{description}</p>
        <span className='bg-indigo-700 text-white self-start py-0.5 px-3 rounded-md text-sm'>{category}</span>
        {rating && <p><span className='text-yellow-600'>{getRate(rating?.rate)}</span> / {rating?.count} reviews</p>}
        <strong className='mb-4'>${price}</strong>
        <div className='flex justify-end w-full'>
          {quantityAdd > 0
            ? (
              <Link to='/cart' className='flex gap-3 hover:text-indigo-700 hover:bg-indigo-200 max-w-[200px] py-1 px-2 rounded-full'>
                <ShoppingCartIcon width={20} />
                Checkout
                <LeftIcon className='rotate-180' />
              </Link>
              )
            : <ItemCount stock={stock || 0} initial={1} onAdd={handleAddToCard} />}
        </div>
      </div>

    </article>
  )
}

export default ItemDetail
