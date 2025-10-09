import Count from './Count'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'

const Estadisticas = ({ id }) => {
  const { data, loading } = useFetch(`/players/${id}/stats/`)
  if (loading) return <Loader />
  if (!data) return null
  const percent = (data[0].matches_won / data[0].matches_total) * 100

  return (
    <div className='w-full text-sm p-4 lg:p-6 bg-white/10 rounded-xl shadow-lg'>
      <table className='w-full'>
        <tbody>
          <tr>
            <td className='py-1'>
              <div>Partidos jugados</div>
              <Count
                end={data[0].matches_total}
                duration={2}
              />
            </td>
            <td>
              <div>Partidos ganados</div>
              <Count
                end={data[0].matches_won}
                duration={4}
              />
            </td>
          </tr>
          {data[0].sets_total > 0 && (
            <tr>
              <td className='py-1'>
                <div>Sets jugados</div>
                <Count
                  end={data[0].sets_total}
                  duration={2}
                />
              </td>
              <td>
                <div>Sets ganados</div>
                <Count
                  end={data[0].sets_won}
                  duration={4}
                />
              </td>
            </tr>
          )}

          <tr>
            <td className='py-1'>
              <div>Efectividad</div>
              <div className='font-semibold text-primary flex'>
                <Count
                  end={+percent.toFixed(0)}
                  duration={4}
                />
                <span className='text-primary text-lg font-bold'>%</span>
              </div>
            </td>
            <td>
              <div>ID Jugador</div>
              <div>
                <span className='text-primary text-lg font-bold'>{+data[0].id + 1000}</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Estadisticas
