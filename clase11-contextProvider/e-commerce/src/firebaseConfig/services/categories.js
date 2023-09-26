import { collection, getDocs } from 'firebase/firestore'
import { db } from 'firebaseConfig/config'

export const getCategories = () => {
  const categories = collection(db, 'categories')
  return getDocs(categories)
}
