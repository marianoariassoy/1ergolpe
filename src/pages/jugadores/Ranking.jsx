import { useState } from 'react'
import { Helmet } from 'react-helmet'
import Loader from '../../components/Loader'
import useFetch from '../../hooks/useFetch'
import { rankingOptions } from '../../components/data'
import TitleRow from '../../components/TitleRow'

const JugadoresRanking = () => {
  const { data, loading } = useFetch(`/ranking`)
  const [filter, setFilter] = useState(16)

  if (loading) return <Loader />

  const labels = [
    {
      name: 'Nombre',
      value: ''
    },
    {
      name: 'Puntos',
      value: 'Puntos'
    }
  ]

  return (
    <section className='fade-in flex flex-col gap-y-6'>
      <div className='text-center text-xl'>
        <h1 className='font-bold text-primary'>Ranking de jugadores</h1>
      </div>

      <div className='row flex flex-wrap gap-y-2 justify-center text-sm [&>button:last-child::after]:content-[""]'>
        {rankingOptions.map(item => (
          <button
            key={item.category}
            className={`ranking-categories btn-filter ${
              item.category === filter ? 'text-primary' : 'opacity-70 hover:text-primary hover:opacity-100'
            } `}
            onClick={() => setFilter(item.category)}
          >
            {item.name}
          </button>
        ))}
      </div>

      <div className='overflow-x-auto text-sm'>
        <table className='table w-full'>
          <thead>
            <tr>
              {labels.map((item, index) => (
                <th key={index}>{item.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data
              .filter(item => +item.category === filter)
              .map((item, index) => (
                <tr
                  key={item.id}
                  className={` ${index === 0 && 'text-primary'}`}
                >
                  <TitleRow
                    num={item.pos}
                    image={item.player_image}
                    title={item.player_name}
                    link={`/jugadores/${item.player_id}`}
                  />

                  <td>
                    <span className='font-bold'>{item.points}</span>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <Helmet>
        <title>Primer Golpe Ranking de Jugadores</title>
      </Helmet>
    </section>
  )
}

export default JugadoresRanking
