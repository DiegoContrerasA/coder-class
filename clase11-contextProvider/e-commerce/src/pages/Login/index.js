import { useAuth } from 'context/AuthProvider'
import { signIn } from 'firebaseConfig/services/auth'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const Login = () => {
  const { onLogin } = useAuth()

  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const handleOnChange = ({ target }) => {
    const { name, value } = target
    setForm(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleOnSubmit = (event) => {
    event.preventDefault()
    signIn(form).then(user => {
      if (!user) return toast.error('....')
      onLogin(user)
    })
  }

  return (
    <>
      <h1 className='text-center mb-5 text-4xl font-extrabold text-transparent
             bg-clip-text bg-gradient-to-r from-indigo-700 to-[#a64aff]'
      >
        Sign In
      </h1>
      <form onSubmit={handleOnSubmit} className='bg-white max-w-lg m-auto flex flex-col justify-center gap-4 px-8 py-12 rounded-md shadow-sm'>
        <div>
          <label className='block mb-2 text-sm font-medium text-gray-900 '>Email</label>
          <input type='text' name='email' value={form.email} onChange={handleOnChange} placeholder='email' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5     dark:focus:ring-blue-500 dark:focus:border-blue-500' />
        </div>
        <div>
          <label className='block mb-2 text-sm font-medium text-gray-900 '>Password</label>
          <input type='password' name='password' value={form.password} onChange={handleOnChange} placeholder='password' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5     dark:focus:ring-blue-500 dark:focus:border-blue-500' />
        </div>
        <p className='text-right'>
          not registered? {' '}
          <Link to='/auth/sign-up' className='text-indigo-700'>
            Register
          </Link>
        </p>

        <button className=' bg-indigo-700 px-5 py-1.5 rounded-lg text-white flex gap-2 justify-center items-center'>
          Login
        </button>

      </form>
    </>

  )
}

export default Login
