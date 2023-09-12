import {  NavLink } from "react-router-dom"

const routes = [
  {
    path: '/',
    link: 'React Events'
  },
  {
    path: '/manual-events',
    link: 'Manual Events'
  },
  {
    path: '/page-events',
    link: 'Page Events'
  }
]


const NavBar = () => {



  return (
    <header className='flex justify-between items-center px-8 py-4 border-2 h-[70px] w-full fixed top-0 left-0 bg-white z-50'>
      <h1 className='font-extrabold text-transparent
             bg-clip-text bg-gradient-to-r from-indigo-700 to-[#a64aff]'
      >
        EVENTS
      </h1>
      <nav className='flex gap-8 items-center'>
        <ul className='flex gap-4 items-center [&>li]:cursor-pointer'>
          {
            routes.map(({ path, link }) => {
              return (
                <NavLink
                end
                to={path}
                className={({isActive}) => `px-2 py-1 rounded-md ${isActive ? ' bg-indigo-700 text-white' : 'hover:bg-indigo-100'} `}
                key={path} >{link}</NavLink>
              )
            })
          }
        </ul>
      </nav>
    </header>
  )
}

export default NavBar
