import { addDoc, collection, doc, getDoc, getDocs, query, updateDoc, where, deleteDoc } from 'firebase/firestore'
import { db } from 'firebaseConfig/config'

export const getItem = (id) => {
  const item = doc(db, 'items', id)
  return getDoc(item)
}

export const getItems = (category) => {
  const items = query(collection(db, 'items'),
    category && where('category', '==', category)
  )
  return getDocs(items)
}

export const addItem = (data) => {
  const category = collection(db, 'items')
  return addDoc(category, data)
}

export const updateItem = (id, data) => {
  const category = doc(db, 'items', id)
  return updateDoc(category, data)
}

export const removeItem = (id) => {
  const category = doc(db, 'items', id)
  return deleteDoc(category)
}
