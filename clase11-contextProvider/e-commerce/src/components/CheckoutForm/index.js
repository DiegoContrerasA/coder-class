import { useState } from 'react'

const CheckoutForm = ({ onConfirm, loading, email = '' }) => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email
  })

  const handleOnChange = (event) => {
    const { name, value } = event.target
    setForm(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    onConfirm(form)
  }

  return (
    <form onSubmit={handleOnSubmit} className='bg-white max-w-lg m-auto flex flex-col justify-center gap-4 px-8 py-12 rounded-md shadow-sm'>
      <div>
        <label className='block mb-2 text-sm font-medium text-gray-900 '>Name</label>
        <input type='text' name='name' value={form.name} onChange={handleOnChange} placeholder='name' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5     dark:focus:ring-blue-500 dark:focus:border-blue-500' />
      </div>
      <div>
        <label className='block mb-2 text-sm font-medium text-gray-900 '>Phone</label>
        <input type='text' name='phone' value={form.phone} onChange={handleOnChange} placeholder='phone' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5     dark:focus:ring-blue-500 dark:focus:border-blue-500' />
      </div>
      <div>
        <label className='block mb-2 text-sm font-medium text-gray-900 '>Email</label>
        <input type='text' name='text' value={form.email} onChange={handleOnChange} placeholder='email' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5     dark:focus:ring-blue-500 dark:focus:border-blue-500' />
      </div>
      <button disabled={loading} className=' bg-indigo-700 px-5 py-1.5 rounded-lg text-white flex gap-2 justify-center items-center disabled:opacity-70'>
        {loading ? 'Cargando ...' : 'Checkout'}
      </button>
    </form>
  )
}

export default CheckoutForm
