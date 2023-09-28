import { collection, getDocs } from 'firebase/firestore'
import { db } from 'firebaseConfig/config'

export const getCategories = async () => {
  const categories = collection(db, 'categories')
  return getDocs(categories).then((snapshots) => {
    // tenemos que mapear los datos de mi snapshots
    return snapshots.docs.map((snapshot) => ({
      id: snapshot.id,
      ...snapshot.data()
    }))
  })
}
