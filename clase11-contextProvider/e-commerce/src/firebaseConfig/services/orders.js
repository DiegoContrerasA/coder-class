import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from 'firebase/firestore'
import { db } from 'firebaseConfig/config'
import { getTimeStamp } from './utils'

export const getOrders = async (userId) => {
  try {
    const orders = collection(db, 'orders')
    const { docs } = await getDocs(query(orders, where('buyer.userId', '==', userId)))
    return docs.map((snapshot) => ({ id: snapshot.id, ...snapshot.data() }))
  } catch (e) {
    throw Error(e)
  }
}

export const addOrder = async (items, order) => {
  try {
    const batch = writeBatch(db)

    const outOfStock = []

    const ids = items.map(prod => prod.id) // [1,3,4,5]

    const productsRef = collection(db, 'items')

    const { docs } = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

    docs.forEach((snapshot) => {
      const { stock, ...restOfData } = snapshot.data()

      const productsAddToCart = items.find(prod => prod.id === snapshot.id)

      console.log({ productsAddToCart })

      const prodQuantity = productsAddToCart?.quantity || 0

      if (stock >= prodQuantity) {
        batch.update(snapshot.ref, { stock: stock - prodQuantity, ...restOfData })
      } else {
        outOfStock.push({ id: snapshot.id })
      }
    })

    if (outOfStock.length === 0) {
      await batch.commit()

      const orderRef = collection(db, 'orders')
      const orderAdded = await addDoc(orderRef, {
        ...order,
        date: getTimeStamp()
      })
      return orderAdded
    } else {
      return null
    }
  } catch (e) {
    throw Error(e)
  }
}
