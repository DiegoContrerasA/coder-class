import { getCategories } from 'firebaseConfig/services/categories'
import { addItem, updateItem } from 'firebaseConfig/services/items'
import { uploadFile } from 'firebaseConfig/services/storageFiles'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const INITIAL_STATE = {
  category: '',
  description: '',
  price: '',
  stock: '',
  title: ''
}

const AddProduct = () => {
  const [form, setForm] = useState({ ...INITIAL_STATE })
  const [saveLoading, setSaveLoading] = useState(false)

  const [image, setImage] = useState(null)
  const [loading, setLoading] = useState(false)

  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then((snapshots) => {
      // tenemos que mapear los datos de mi snapshots
      const categories = snapshots.docs.map((snapshot) => ({
        id: snapshot.id,
        ...snapshot.data()
      }))
      setCategories(categories)
    })
  }, [])

  const handleOnChange = ({ target }) => {
    const { name, value } = target
    setForm(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleUploadImage = ({ target }) => {
    const file = target?.files[0]
    if (!file) return toast.error('....')
    setLoading(true)
    uploadFile(file).then((imgUrl) => {
      setImage(imgUrl)
    })
      .finally(() => setLoading(false))
  }

  const handleOnSubmit = (event) => {
    event.preventDefault()
    setSaveLoading(true)
    addItem({
      ...form,
      stock: Number(form.stock),
      price: parseFloat(form.price),
      image
    }).then(() => {
      toast.success('The products have been created')
    }).catch(() => {
      toast.error('......')
    }).finally(() => setSaveLoading(false))
  }

  const handleUpdate = () => {
    updateItem('hivgvqqofDMeqfqDpiyp', { stock: 1, title: 'test ' }).then(() => {
      toast.success('The products have been updated')
    })
  }

  return (
    <>
      <h1 className='text-center mb-5 text-4xl font-extrabold text-transparent
               bg-clip-text bg-gradient-to-r from-indigo-700 to-[#a64aff]'
      >
        Add new Product
      </h1>
      <form onSubmit={handleOnSubmit} className='bg-white max-w-lg m-auto flex flex-col justify-center gap-4 px-8 py-12 rounded-md shadow-sm'>
        <div>
          <label className='block mb-2 text-sm font-medium text-gray-900 '>Title</label>
          <input type='text' name='title' value={form.title} onChange={handleOnChange} placeholder='title' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5     dark:focus:ring-blue-500 dark:focus:border-blue-500' />
        </div>
        <div>
          <label className='block mb-2 text-sm font-medium text-gray-900 '>Upload Image</label>
          <input className='block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 p-2.5' type='file' onChange={handleUploadImage} />
          {loading && <span>Uploading ...</span>}
        </div>
        <div>
          <label className='block mb-2 text-sm font-medium text-gray-900'>Select an option</label>
          <select name='category' value={form.category} onChange={handleOnChange} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'>
            <option>Choose a category</option>
            {categories.map(({ id, name }) => (
              <option key={id} value={name}>{name}</option>
            ))}
          </select>
        </div>
        <div>
          <label className='block mb-2 text-sm font-medium text-gray-900 '>Description</label>
          <textarea name='description' value={form.description} onChange={handleOnChange} rows='4' className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300' placeholder='Description' />
        </div>
        <div>
          <label className='block mb-2 text-sm font-medium text-gray-900 '>Price</label>
          <input type='number' name='price' value={form.price} onChange={handleOnChange} placeholder='Price' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5     dark:focus:ring-blue-500 dark:focus:border-blue-500' />
        </div>
        <div>
          <label className='block mb-2 text-sm font-medium text-gray-900 '>Stock</label>
          <input type='number' name='stock' value={form.stock} onChange={handleOnChange} placeholder='Stock' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5     dark:focus:ring-blue-500 dark:focus:border-blue-500' />
        </div>
        <button disabled={saveLoading || !image} className=' bg-indigo-700 px-5 py-1.5 rounded-lg text-white flex gap-2 justify-center items-center disabled:opacity-70'>
          {saveLoading ? 'Saving ...' : 'Save'}
        </button>
      </form>
      <button className=' bg-green-700 px-5 py-1.5 rounded-lg text-white flex gap-2 justify-center items-center' onClick={handleUpdate}>
        Update
      </button>
    </>
  )
}

export default AddProduct
