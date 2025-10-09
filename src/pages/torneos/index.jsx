import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import Tournaments from './Tournaments'
import Champion from './Champion'
import ChampionDoubles from './Champion_doubles'

const TournamentsContainer = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [])

  const { id } = useParams()
  const { data, loading } = useFetch(`/tournaments/${id}`)
  if (loading) return <Loader />
  if (!data) return null

  return (
    <section className='fade-in flex flex-col gap-y-6'>
      <div className='text-center text-primary text-lg'>
        <h1 className='flex flex-col'>
          <span className='font-bold'>{data[0].name}</span>
          <span className='font-medium hidden lg:inline'> {data[0].season}</span>
        </h1>
      </div>

      {data[0].champion_id && +data[0].type === 1 && (
        <Champion
          id={data[0].champion_id}
          name={data[0].champion_name}
          image={data[0].champion_image}
        />
      )}

      {data[0].champion_id && +data[0].type === 2 && <ChampionDoubles data={data[0]} />}

      <Tournaments id={id} />
      <Helmet>
        <title>
          PrimerGolpe Tenis {data[0].name} {data[0].season}
        </title>
      </Helmet>
    </section>
  )
}

export default TournamentsContainer
