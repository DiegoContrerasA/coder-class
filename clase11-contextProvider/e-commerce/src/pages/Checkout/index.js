import CheckoutForm from 'components/CheckoutForm'
import { useAuth } from 'context/AuthProvider'
import { useCart } from 'context/CartProvider'
import { addOrder } from 'firebaseConfig/services/orders'
import { useState } from 'react'
import { toast } from 'react-toastify'

const Checkout = () => {
  const { items, clearItems, total = 0 } = useCart()
  const { user } = useAuth()
  const [loading, setLoading] = useState(false)
  const [orderId, setOrderId] = useState(null)

  const createOrder = async (payload) => {
    try {
      setLoading(true)
      const order = {
        buyer: { userId: user?.uid, ...payload },
        items,
        total
      }

      const newOrder = await addOrder(items, order)
      if (!newOrder) return toast.error('....')
      setOrderId(newOrder.id)
      clearItems()
    } catch (error) {
      console.error({ error })
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <h1 className='text-center mb-5 text-4xl font-extrabold text-transparent
        bg-clip-text bg-gradient-to-r from-indigo-700 to-[#a64aff]'
      >
        Checkout
      </h1>
      {orderId
        ? (
          <div className='bg-white rounded-md shadow-sm px-8 p-4 text-center font-bold'>
            {orderId}
          </div>)
        : <CheckoutForm onConfirm={createOrder} loading={loading} email={user?.email} />}
    </>
  )
}

export default Checkout
