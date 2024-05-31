import { Helmet } from 'react-helmet'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import Item from './Item'

const Amigos = () => {
  const { data, loading } = useFetch(`/partners`)
  if (loading) return <Loader />

  return (
    <section className='fade-in flex flex-col gap-y-12 text-center max-w-2xl m-auto'>
      <div>
        <div className='text-primary text-xl mb-2'>
          <h1 className='font-bold'>Nuestros colaboradores</h1>
        </div>
      </div>

      <div className='grid grid-cols-3 lg:grid-cols-5 gap-10'>
        {data.map((item, index) => (
          <Item
            key={index}
            item={item}
          />
        ))}
      </div>

      <p className='text-sm'>
        📢 Comunicate al{' '}
        <a
          href='https://wa.me/5491151557285'
          className='underline hover:text-primary'
          target='_blank'
        >
          {' '}
          +54 9 11 51557285
        </a>{' '}
        para sumarte.
      </p>

      <Helmet>
        <title>PrimerGolpe Colaboradores</title>
      </Helmet>
    </section>
  )
}

export default Amigos
