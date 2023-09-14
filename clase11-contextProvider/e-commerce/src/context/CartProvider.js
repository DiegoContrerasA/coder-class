// Paso 1 importar el context
import { createContext, useContext } from 'react'

// Paso 2 crear el context, deberia tener el prefijo del archivo
const CartContext = createContext()

const CartProvider = ({ children }) => {
  // Tener los estados.
  return (
    // Asiganmos el value, en este caso sera un objeto que tiene 1 prop items que por default sera un array vacio
    <CartContext.Provider value={{
      items: [
        {
          id: 1,
          title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
          price: 109.95,
          description: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
          category: 'mens-clothing',
          image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
          rating: {
            rate: 3.9,
            count: 120
          }
        }, {
          id: 1,
          title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
          price: 109.95,
          description: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
          category: 'mens-clothing',
          image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
          rating: {
            rate: 3.9,
            count: 120
          }
        }
      ]
    }}
    >
      {children}
    </CartContext.Provider>
  )
}

// Extraemos la logica de implementación
export const useCart = () => useContext(CartContext)

export default CartProvider
