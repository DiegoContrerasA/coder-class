import { LinkIcon } from 'icons'
import { memo } from 'react'
import { Link } from 'react-router-dom'

const Item = memo(({
  id,
  title,
  price,
  category,
  image
}) => {
  return (
    <div className='w-56 mb-4 bg-white shadow-sm rounded-lg overflow-hidden relative group cursor-pointer'>
      <span className='text-[12px] absolute top-3 right-3 bg-black rounded-full text-white px-2 shadow-sm z-10'>{category}</span>

      <figure className=' relative'>

        <img className='w-full h-[250px] object-cover' src={image} alt={title} />
      </figure>

      <div className='p-3'>
        <p className='text-sm font-extrabold truncate'>{title}</p>
        <p className='text-sm'><strong>$</strong>{price}</p>

      </div>
      <Link
        to={`/item/${id}`} className='absolute w-full h-full opacity-0 -bottom-12 left-0 bg-[#4338ca24] z-10 flex justify-center items-end
     group-hover:bottom-0 group-hover:opacity-100 duration-200'
      >
        <button className=' bg-indigo-700 px-3 py-3 rounded-bl-md rounded-mr-md text-white w-full flex gap-2 justify-center items-center'>
          View detail <LinkIcon width={20} height={20} />
        </button>
      </Link>
    </div>
  )
})

export default Item
