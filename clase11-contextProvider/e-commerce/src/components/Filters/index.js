import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { getFirestore, collection, getDocs } from 'firebase/firestore'

const Filters = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    // iniciamos la conexion
    const db = getFirestore()

    // creamos la referencia a la collection
    const categories = collection(db, 'categories')

    // Obtenemos los datos de la collection

    // getCategories()
    getDocs(categories).then((snapshots) => {
      // tenemos que mapear los datos de mi snapshots
      const categories = snapshots.docs.map((snapshot) => ({
        id: snapshot.id,
        ...snapshot.data()
      }))
      setCategories(categories)
    })
  }, [])

  return (
    <nav className='flex justify-center gap-2'>
      {categories.map(({ id, name }) => (
        <NavLink
          key={id}
          end
          to={`/category/${name}`}
          className={({ isActive }) => `px-2 py-1 rounded-md hover:bg-indigo-100 ${isActive ? 'bg-indigo-100' : ''}`}
        >
          {name}
        </NavLink>
      ))}
    </nav>
  )
}

export default Filters
