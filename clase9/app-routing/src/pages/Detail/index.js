import { useEffect, useState } from "react"
import { getProductById } from "../../mock"
import { getRate } from "../../utils/getRate"
import { ReactComponent as LeftIcon } from '../../icons/left.svg'
import { useParams, Link } from 'react-router-dom'

const Detail = () => {

    const [loading, setLoading] = useState(false)
    const [product, setProduct] = useState(null)
    //const params = useParams() = {productId: ??}
    //params.productId
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

    if(loading) return <p className="text-2xl max-w-5xl m-auto font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-[#a64aff] text-center">Loading product ...</p>

    return (
        <section className="max-w-3xl m-auto">
            <Link to="/products" className="flex gap-3 hover:text-indigo-700 hover:bg-indigo-200 max-w-[120px] py-1 px-2 rounded-full">
                <LeftIcon />
                Go Back
            </Link>
            <article className="flex flex-col rounded-md overflow-hidden p-2">
                <picture className="w-[200px] min-w-[200px] max-w-[200px] m-auto">
                <img src={product?.image} alt={product?.title}/>
                </picture>
                <div className="flex flex-col gap-4 py-8">
                   <h3 className="font-bold text-4xl">{product?.title}</h3>
                   <p>{product?.description}</p>
                   <span className="bg-indigo-700 text-white self-start py-0.5 px-3 rounded-md text-sm">{product?.category}</span>
                   <p><span className="text-yellow-600">{getRate(product?.rating?.rate)}</span> / {product?.rating?.count} reviews</p>
                   <strong className="mb-4">${product?.price}</strong>
                </div>
            </article>
        </section>
    )

}

export default Detail