import { useEffect, useRef } from 'react'

const Img = ({ src, alt, className, placehoder }) => {
  // similar a un id
  const imgRef = useRef(null)

  useEffect(() => {
    imgRef.current.onload = (e) => {
      imgRef.current.src = src
    }
  }, [src])

  // useEffect(() => {
  //     document.querySelector('#img').addEventListener('load', () => {
  //         document.querySelector('#img').src = src
  //     })
  // }, [src])

  return (
    <img
      ref={imgRef}
      src={placehoder}
      alt={alt}
      className={className}
      id='img'
    />
  )
}

export default Img
