import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { getCategories } from 'firebaseConfig/services/categories'
import { useCategories } from 'hooks/useCategories'

const Filters = () => {
  const { categories, getCategories } = useCategories()

  useEffect(() => {
    getCategories()
    console.log('here')
  }, [getCategories])

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
