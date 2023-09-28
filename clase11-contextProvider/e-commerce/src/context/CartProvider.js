// Paso 1 importar el context
import { createContext, useContext, useEffect, useState } from 'react'
import { Storage } from 'utils/storage'

// TODO: CartContext ✅
// TODO: Stado donde vamos a almacenar nuestro items
// TODO: Debemos crear una funcion que me permita agragegar un item
// TODO: Una funcion que me permita remover 1 item
// TODO: Una funcion que me permita limpiar el carrito

const CartContext = createContext()

const CartProvider = ({ children }) => {
  const [items, setItems] = useState(() => Storage.get('items') || [])

  useEffect(() => {
    Storage.add('items', items)
  }, [items])

  const addItem = (item, quantity) => {
    if (isInCard(item.id)) return

    setItems(prev => [...prev, { ...item, quantity }])
  }

  const removeItem = (id) => setItems(prev => prev.filter((item) => item.id !== id))

  const clearItems = () => setItems([])

  const isInCard = (id) => items.some(item => item.id === id) // true o false

  const getTotal = () => parseFloat(items.reduce((acc, current) => acc + current?.price, 0)).toFixed(2)

  return (
    <CartContext.Provider value={{
      items, addItem, removeItem, clearItems, total: getTotal()
    }}
    >
      {children}
    </CartContext.Provider>
  )
}

// Extraemos la logica de implementación
export const useCart = () => useContext(CartContext)

export default CartProvider
