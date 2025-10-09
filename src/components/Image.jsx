import { useEffect, useState } from 'react'

const ImageComponent = ({ src, alt }) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const image = new Image()
    image.src = src
    image.onload = () => {
      setIsLoading(false)
    }
  }, [src])

  return isLoading ? (
    <div className='h-full w-full flex items-center justify-center'>
      <div className='w-2 h-2 rounded-full bg-primary pulse' />
    </div>
  ) : (
    <img
      src={src}
      alt={alt}
      lazy='true'
      loading='lazy'
      className='fade-in h-full w-full object-cover object-center'
    />
  )
}

export default ImageComponent
