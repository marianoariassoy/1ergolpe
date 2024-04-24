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
    <section className='fade-in grid grid-cols-2 gap-1 lg:gap-3 lg:grid-cols-3 h-full'>
      {data.map((item, index) => (
        <Item
          key={index}
          data={item}
        />
      ))}
      <Helmet>
        <title>PrimerGolpe Galería de fotos</title>
      </Helmet>
    </section>
  )
}

export default Welcome
