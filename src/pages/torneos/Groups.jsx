import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import Labels from '../../components/Labels'
import TitleRow from '../../components/TitleRow'

const TournamentsGroup = ({ group }) => {
  const { data, loading } = useFetch(`/tournaments/groups/players/${group.id}`)
  if (loading) return <Loader />

  const labels = [
    {
      name: 'Jugador',
      value: ''
    },
    {
      name: 'Pts.',
      value: 'Puntos'
    },

    {
      name: 'DS',
      value: 'Diferencia de sets'
    },
    {
      name: 'DG',
      value: 'Diferencia de games'
    },
    {
      name: 'PJ',
      value: 'Partidos jugados'
    }
  ]

  return (
    <section className='fade-in flex flex-col'>
      <div className='row text-center mb-3'>
        <h1 className='text-primary italic lg:text-xl'>{group.name}</h1>
        <h2>
          <span className='font-medium opacity-70'>Posiciones</span> 🔥
        </h2>
      </div>

      <div className='overflow-x-auto text-sm mb-6'>
        <table className='table w-full'>
          <thead>
            <tr>
              {labels.map((item, index) => (
                <th key={index}>{item.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={item.id}
                className={`${index < group.winners ? 'text-primary' : ''}`}
              >
                <td className='pl-0'>
                  <TitleRow
                    num={index + 1}
                    image={item.image}
                    title={item.name}
                    link={`/jugadores/${item.id}`}
                  />
                </td>
                <td>
                  <span className='font-bold'>{item.matches_won}</span>
                </td>
                <td>{item.sets}</td>
                <td>{item.games}</td>
                <td>{item.matches}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Labels labels={labels} />

      <div className='text-center text-sm mt-3'>
        🚀 <span className='opacity-70'>{group.tournament_description}</span>
      </div>
    </section>
  )
}

export default TournamentsGroup
