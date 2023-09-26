import { NotFoundIcon } from 'icons'
import { Link } from 'react-router-dom'

// const arr = ['diego', 'maria', 'juan']
// arr[0] // 'diego'
// arr[1] // 'maria'
// arr[2] // 'juan'

// const [name1, name2, name3] = ['diego', 'maria', 'juan']
const NotFound = ({ page = 'home' }) => {
  // const textColor = page === 'home' ? 'red' : 'green'

  // const Component = page === 'home' ? 'button' : 'h2'

  // const buttonProps = page === 'home' ? { onClick: () => alert('not found') } : {}

  // Forma optimizada
  // const [textColor, Component, buttonProps] = page === 'home'
  //   ? [
  //       'red', 'button', { onClick: () => alert('not found') }
  //     ]
  //   : ['green', 'h2', {}]

  return (
    <section className='flex flex-col items-center py-8 text-[#3f3d56]'>
      <h2 className='text-6xl font-extrabold mb-3'>Not Found</h2>
      <NotFoundIcon width={500} className='mb-10' />
      <h3 className='mb-2 font-bold text-2xl max-w-lg text-center'>You can search for the page you want here or return to the home page</h3>
      <Link to='/' className='border border-indigo-700 text-sm text-indigo-700 rounded-md px-2 py-0.5'>
        Go to home
      </Link>
    </section>
  )
}

export default NotFound
