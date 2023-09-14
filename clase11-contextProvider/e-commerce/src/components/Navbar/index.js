import CartWidget from 'components/CartWidget'
import { useTheme } from 'context/ThemeProvider'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  const { theme, changeTheme } = useTheme()

  return (
    <>
      <header className='flex justify-between items-center px-8 py-4 border-2 h-[70px] w-full fixed top-0 left-0 bg-white z-50'>
        <Link
          to='/' className='font-extrabold text-transparent
             bg-clip-text bg-gradient-to-r from-indigo-700 to-[#a64aff]'
        >
          E-COMMERCE {' '}
        </Link>
        <nav className='flex gap-8 items-center'>
          <button onClick={changeTheme}>
            cambiar tema
          </button>
          <ul className='flex gap-4 items-center [&>li]:cursor-pointer'>
            <NavLink
              end
              to='/'
              className={({ isActive }) => `px-2 py-1 rounded-md ${isActive ? ' bg-indigo-700 text-white' : 'hover:bg-indigo-100'} `}
            >Products
            </NavLink>
            <NavLink
              end
              to='/my-orders'
              className={({ isActive }) => `px-2 py-1 rounded-md ${isActive ? ' bg-indigo-700 text-white' : 'hover:bg-indigo-100'} `}
            >My orders
            </NavLink>
          </ul>
          <CartWidget />
        </nav>
      </header>
    </>
  )
}

export default NavBar
