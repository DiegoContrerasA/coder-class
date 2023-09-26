import CartWidget from 'components/CartWidget'
import { useAuth } from 'context/AuthProvider'
import { useTheme } from 'context/ThemeProvider'
import { logOut } from 'firebaseConfig/services/auth'
import { LogoutIcon } from 'icons'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  const { changeTheme } = useTheme()
  const { user, onLogout } = useAuth()

  const handleLogout = () => {
    logOut().then(() => {
      onLogout()
    })
  }

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
            {user && (
              <>
                <NavLink
                  end
                  to='/orders'
                  className={({ isActive }) => `px-2 py-1 rounded-md ${isActive ? ' bg-indigo-700 text-white' : 'hover:bg-indigo-100'} `}
                >Orders
                </NavLink>

              </>)}
          </ul>
          <CartWidget />
          {user && (
            <button onClick={handleLogout} className='flex w-[40px] h-[40px] relative rounded-full bg-red-200 items-center justify-center text-red-800'>
              <LogoutIcon />
            </button>)}
        </nav>
      </header>
    </>
  )
}

export default NavBar
