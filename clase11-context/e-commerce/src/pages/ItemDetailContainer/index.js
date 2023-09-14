import { useEffect, useState } from 'react'
import { getProductById } from 'mock'
import { ReactComponent as LeftIcon } from 'icons/left.svg'
import { useParams, Link } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import Loading from './Loading'

const Detail = () => {
  const [loading, setLoading] = useState(false)
  const [product, setProduct] = useState(null)
  // const params = useParams() = {productId: ??}
  // params.productId
  const { id } = useParams() // {productId: ??}

  useEffect(() => {
    setLoading(true)
    getProductById(Number(id))
      .then((product) => {
        setProduct(product)
      })
      .catch(err => console.log({ err }))
      .finally(() => setLoading(false))
  }, [id])

  return (
    <section className='max-w-3xl m-auto'>
      <Link to={-1} className='flex gap-3 hover:text-indigo-700 hover:bg-indigo-200 max-w-[120px] py-1 px-2 rounded-full'>
        <LeftIcon />
        Go Back
      </Link>
      {loading ? <Loading /> : <ItemDetail {...product} />}
    </section>
  )
}

export default Detail
