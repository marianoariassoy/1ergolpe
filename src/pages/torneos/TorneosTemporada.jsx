import { Link, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import Calendario from './Calendario'

const Torneos = () => {
  const { id } = useParams()
  const { data, loading } = useFetch(`/tournaments`)
  if (loading) return <Loader />
  const dataFiltered = data.filter(item => item.season_id === +id)

  return (
    <section className='fade-in flex flex-col gap-y-6'>
      <div className='text-center text-primary text-xl'>
        <h1 className='font-bold mx-6'>{dataFiltered[0].season_name}</h1>
      </div>

      <div className='flex flex-col gap-y-4'>
        <h1 className='font-bold mx-6 text-center text-primary text-lg'>Categorías 🏆</h1>
        <div className='flex flex-col gap-y-1 items-center font-medium text-center'>
          {dataFiltered &&
            dataFiltered.map(item => (
              <Link
                key={item.id}
                to={`/torneos/${item.id}`}
                className='link-hover'
              >
                <span>{item.name}</span>
              </Link>
            ))}
        </div>
      </div>

      <Calendario id_season={+id} />

      <Helmet>
        <title>PrimerGolpe Torneos</title>
      </Helmet>
    </section>
  )
}

export default Torneos
