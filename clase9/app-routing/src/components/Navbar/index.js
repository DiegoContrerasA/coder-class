import { NavLink } from 'react-router-dom'

const routes = [
  {
    path: '/',
    text: 'Home'
  },
  {
    path: '/products',
    text: 'Products'
  },
  {
    path: '/my-account',
    text: 'My Acccount'
  },
]

//Link = <a> html


const NavBar = ({user}) => {

  return (
    <header className='flex justify-between items-center px-8 py-4 border-2 h-[70px] w-full fixed top-0 left-0 bg-white z-50'>
      <h1 className='font-extrabold text-transparent
             bg-clip-text bg-gradient-to-r from-indigo-700 to-[#a64aff]'
      >
        PRODUCTS {user?.email}
      </h1>
      <nav className='flex gap-8 items-center'>
        <ul className='flex gap-4 items-center [&>li]:cursor-pointer'>
         {
          routes.map((route) => (
            <NavLink to={route.path}
            className={( {isActive}) => `px-2 py-1 rounded-md ${isActive ? ' bg-indigo-700 text-white' : 'hover:bg-indigo-100' }`}
            >{route.text}</NavLink>
          ))
         }
        </ul>
      </nav>
    </header>
  )
}

export default NavBar
