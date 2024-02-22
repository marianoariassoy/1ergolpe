import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import Singles from './Singles'
// import Dobles from './Dobles'
import Image from '../../components/Image'

const JugadoresContainer = () => {
  const { id } = useParams()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [id])

  const { data, loading } = useFetch(`/players/${id}`)
  if (loading) return <Loader />
  if (!data) return null

  return (
    <section className='fade-in flex flex-col gap-y-6'>
      <div className='items-center flex flex-col gap-y-3'>
        <div className='avatar'>
          <div className='w-28 rounded-full'>
            <Image
              src={data[0].image}
              alt={data[0].name}
            />
          </div>
        </div>

        <div className='text-center'>
          <h1 className='font-bold text-primary'>{data[0].name}</h1>
          <h2 className='opacity-70 text-sm'>{data[0].age}</h2>
        </div>
      </div>

      <Singles id={data[0].id} />
      {/* <Dobles id={data[0].id} /> */}

      <Helmet>
        <title>1erGolpe {data[0].name}</title>
      </Helmet>
    </section>
  )
}

export default JugadoresContainer
