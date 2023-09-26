// Paso 1 importar el context
import { createContext, useContext, useEffect, useState } from 'react'
import { Storage } from 'utils/storage'

// Paso 2 crear el context, deberia tener el prefijo del archivo
const CartContext = createContext()

const CartProvider = ({ children }) => {
  const [items, setItems] = useState(() => Storage.get('items') || [])
  // Tener los estados.

  useEffect(() => {
    Storage.add('items', items)
  }, [items])

  const addItem = (item, quantity) => {
    if (isInCard(item.id)) return

    setItems(prev => [...prev, { ...item, quantity }])
  }

  const removeItem = (id) => setItems(prev => prev.filter((item) => item.id !== id))

  const clearItems = () => setItems([])

  const isInCard = (id) => items.some(item => item.id === id)

  const getTotal = () => parseFloat(items.reduce((acc, current) => acc + current?.price, 0)).toFixed(2)

  return (
    // Asiganmos el value, en este caso sera un objeto que tiene 1 prop items que por default sera un array vacio
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
