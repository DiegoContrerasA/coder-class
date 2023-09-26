import { useAuth } from 'context/AuthProvider'
import { useCart } from 'context/CartProvider'
import { TrashIcon } from 'icons'
import { Link } from 'react-router-dom'

const Cart = () => {
  const { items, removeItem } = useCart()
  const { user } = useAuth()

  const handleRemove = id => () => removeItem(id)

  return (
    <section className='flex flex-col gap-4'>
      <h1 className='text-center mb-5 text-4xl font-extrabold text-transparent
             bg-clip-text bg-gradient-to-r from-indigo-700 to-[#a64aff]'
      >
        Checkout
      </h1>
      {
        items.map(({ title, image, quantity, price, id }) => (
          <article key={id} className='flex bg-white rounded-md shadow-sm px-8 p-4 justify-between items-center gap-10'>
            <div className='flex items-center gap-5 flex-1 '>
              <picture className='rounded-full overflow-hidden'>
                <img src={image} alt={title} className='w-[100px] h-[100px] object-cover' />
              </picture>
              <h3>
                {title}
              </h3>
            </div>
            <div className='w-[100px] text-right'>
              <span>$ {price}</span>
              <span> X </span>
              <span>{quantity}</span>
            </div>
            <div className='w-[150px] flex justify-between items-center'>
              <strong>$ {quantity * price}</strong>
              <button onClick={handleRemove(id)} className='flex w-[40px] h-[40px] relative rounded-full bg-indigo-100 items-center justify-center'>
                <TrashIcon />
              </button>
            </div>
          </article>
        ))
      }

      <div className='flex justify-center mt-8'>

        {user
          ? (
            <Link to='/checkout' className=' bg-indigo-700 px-5 py-1.5 rounded-lg text-white flex gap-2 justify-center items-center'>
              Add order
            </Link>
            )
          : (
            <Link to='/auth/sign-in' className='flex gap-3 text-indigo-700 bg-indigo-200  py-1 px-2 rounded-full mx-auto'>
              You must be logged in to continue with your purchase
            </Link>
            )}
      </div>
    </section>
  )
}

export default Cart
