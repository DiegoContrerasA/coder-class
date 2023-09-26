import { MinusIcon, PlusIcon, ShoppingCartIcon } from 'icons'
import { useState } from 'react'

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial)

  const increment = () => {
    if (quantity >= stock) return
    setQuantity(prev => prev + 1)
  }

  const decrement = () => {
    if (quantity <= 1) return
    setQuantity(prev => prev - 1)
  }

  const handleOnAdd = () => {
    onAdd(quantity)
  }

  if (!stock) {
    return (
      <div className='flex gap-3 text-red-700 bg-red-200 max-w-[200px] py-1 px-2 rounded-full'>
        No products in stock
      </div>
    )
  }

  return (
    <div className='flex items-center max-w-[300px] h-[30px] '>
      <div className='flex border border-indigo-700 rounded-tl-lg rounded-bl-lg overflow-hidden'>
        <button
          className='w-[28px] h-[28px] bg-indigo-700 text-white  flex justify-center items-center hover:bg-indigo-900 p-0.5'
          onClick={increment}
        >
          <PlusIcon width={20} height={20} />
        </button>
        <span className='w-[80px] text-center'>{quantity}</span>
        <button
          className='w-[28px] h-[28px] bg-indigo-700 text-white  flex justify-center items-center hover:bg-indigo-900 p-0.5'
          onClick={decrement}
        >
          <MinusIcon width={20} height={20} />
        </button>
      </div>
      <button className='bg-indigo-900 px-4 h-full max-w-[200px] text-white flex gap-2 items-center justify-center rounded-tr-lg rounded-br-lg' onClick={handleOnAdd}>add to cart
        <ShoppingCartIcon width={20} />
      </button>
    </div>
  )
}

export default ItemCount
