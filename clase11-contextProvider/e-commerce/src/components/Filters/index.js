import { getCategories } from 'mock'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Filters = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then((categories) => setCategories(categories))
  }, [])

  return (
    <nav className='flex justify-center gap-2'>
      {categories.map(({ id, name }) => (
        <NavLink
          key={id}
          end
          to={`/category/${id}`}
          className={({ isActive }) => `px-2 py-1 rounded-md hover:bg-indigo-100 ${isActive ? 'bg-indigo-100' : ''}`}
        >
          {name}
        </NavLink>
      ))}
    </nav>
  )
}

export default Filters
