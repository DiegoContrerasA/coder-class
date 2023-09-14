import { useCart } from 'context/CartProvider'
import { ShoppingCartIcon } from 'icons'
import { Link } from 'react-router-dom'

const CartWidget = () => {
  const { items } = useCart()
  return (
    <Link to='/cart' className='flex w-[40px] h-[40px] relative rounded-full bg-indigo-100 items-center justify-center'>
      <ShoppingCartIcon />
      <span className='absolute top-[-5px] right-[-5px] text-[12px] z-10 bg-indigo-700 rounded-full w-5 h-5 p-2 flex justify-center items-center text-white'>
        {items.length}
      </span>
    </Link>
  )
}

export default CartWidget
