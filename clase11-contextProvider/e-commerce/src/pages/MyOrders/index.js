import MyOrderList from 'components/MyOrderList'
import { useAuth } from 'context/AuthProvider'
import { getOrders } from 'firebaseConfig/services/orders'
import { useEffect, useState } from 'react'

const MyOrders = () => {
  const [loading, setLoading] = useState(false)
  const [orders, setOrders] = useState([])
  const { user } = useAuth()

  useEffect(() => {
    setLoading(true)

    getOrders(user?.uid)
      .then(setOrders)
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [user?.uid])

  return (
    <>
      <h1 className='text-center mb-5 text-4xl font-extrabold text-transparent
  bg-clip-text bg-gradient-to-r from-indigo-700 to-[#a64aff]'
      >
        My orders
      </h1>
      <MyOrderList loading={loading} orders={orders} />
    </>
  )
}

export default MyOrders
