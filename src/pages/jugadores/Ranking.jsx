import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import Loader from '../../components/Loader'
import useFetch from '../../hooks/useFetch'
import { rankingOptions } from '../../components/data'
import TitleRow from '../../components/TitleRow'

const JugadoresRanking = () => {
  const { data, loading } = useFetch(`/ranking`)
  const [filter, setFilter] = useState(16)
  const [year, setYear] = useState(2025)
  const [dataFiltered, setDataFiltered] = useState([])

  useEffect(() => {
    if (data) setDataFiltered(data.filter(item => +item.category === filter && +item.year === year))
  }, [filter, year])

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
    <section className='fade-in flex flex-col gap-y-6 max-w-2xl m-auto'>
      <div className='text-center '>
        <h1 className='font-bold text-primary text-xl'>Ranking de jugadores</h1>
        <div className='flex justify-center items-center gap-x-3 text-xl'>
          <button
            className={`font-bold ${
              year === 2025 ? 'text-primary' : 'opacity-70 hover:text-primary hover:opacity-100'
            }`}
            onClick={() => setYear(2025)}
          >
            2025
          </button>
          <button
            className={`font-bold ${
              year === 2024 ? 'text-primary' : 'opacity-70 hover:text-primary hover:opacity-100'
            }`}
            onClick={() => setYear(2024)}
          >
            2024
          </button>
        </div>
      </div>

      <div className='row lg:px-12 flex flex-wrap gap-y-2 justify-center text-sm [&>button:last-child::after]:content-[""]'>
        {rankingOptions.map(item => (
          <button
            key={item.category}
            className={`ranking-categories font-medium btn-filter ${
              item.category === filter ? 'text-primary' : 'opacity-70 hover:text-primary hover:opacity-100'
            } `}
            onClick={() => setFilter(item.category)}
          >
            {item.name}
          </button>
        ))}
      </div>

      {dataFiltered.length > 0 ? (
        <div className='overflow-x-auto text-sm'>
          <table className='table w-full'>
            <thead>
              <tr>
                {labels.map((item, index) => (
                  <th
                    key={index}
                    className={index > 0 && 'text-right'}
                  >
                    {item.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {dataFiltered.map((item, index) => (
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

                  <td className='text-right'>
                    <span className='font-bold'>{item.points}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className='text-center text-sm'>No hay datos disponibles 🥲</div>
      )}

      <Helmet>
        <title>Primer Golpe Ranking de Jugadores</title>
      </Helmet>
    </section>
  )
}

export default JugadoresRanking
