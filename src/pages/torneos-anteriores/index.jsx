import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'

const Torneos = () => {
  const { data, loading } = useFetch(`/tournaments`)

  if (loading) return <Loader />

  return (
    <section className='fade-in flex flex-col gap-y-6'>
      <div className='text-center text-primary text-xl'>
        <h1 className='font-bold'>Torneos</h1>
      </div>

      <div className='flex flex-col gap-y-1 items-center font-medium'>
        {data &&
          data
            .filter(item => item.season !== 3)
            .map(item => (
              <Link
                key={item.id}
                to={`/torneos/${item.id}`}
                className='link-hover'
              >
                <span>{item.name}</span> {item.season_name}
              </Link>
            ))}
      </div>

      <Helmet>
        <title>IML Tenis Torneos Anteriores</title>
      </Helmet>
    </section>
  )
}

export default Torneos
