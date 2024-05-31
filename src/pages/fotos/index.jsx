import { Helmet } from 'react-helmet'
import { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import Item from './Item'

const Welcome = () => {
  const { data, loading } = useFetch(`/images`)

  if (loading) return <Loader />
  if (!data) return null

  return (
    <section className='fade-in h-full'>
      <div className='text-center text-primary text-xl mb-10'>
        <h1 className='font-bold'>Galería de fotos</h1>
      </div>
      <div className='grid grid-cols-2 gap-1 lg:gap-3 lg:grid-cols-3 '>
        {data.map((item, index) => (
          <Item
            key={index}
            data={item}
          />
        ))}
      </div>

      <Helmet>
        <title>PrimerGolpe Galería de fotos</title>
      </Helmet>
    </section>
  )
}

export default Welcome
