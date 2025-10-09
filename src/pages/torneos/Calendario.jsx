import Loader from '../../components/Loader'
import useFetch from '../../hooks/useFetch'
import TitleRow from '../../components/TitleRow'
import { Link } from 'react-router-dom'

const Calendario = ({ id_season }) => {
  const { data, loading } = useFetch(`/tournaments/13/matches`)
  if (loading) return <Loader />
  if (!data) return null

  return (
    <div className='flex flex-col gap-y-6'>
      <h1 className='font-bold mx-6 text-center text-primary text-lg'>Calendario 📅</h1>

      <section className='fade-in mb-3'>
        <div className='overflow-x-auto text-sm'>
          <table className='table w-full'>
            {data.length > 0 && (
              <thead>
                <tr>
                  <th
                    scope='col'
                    className='pl-0'
                  >
                    Fecha y Hora
                  </th>
                  <th scope='col'>Enfrentamiento</th>
                  <th scope='col'>Torneo</th>
                </tr>
              </thead>
            )}

            <tbody>
              {data.map(item => (
                <tr
                  key={item.id}
                  className={item.winner > 0 ? 'opacity-60' : ''}
                >
                  <td
                    scope='row'
                    className='pl-0'
                  >
                    <div className='flex gap-x-[0.6rem] items-center'>
                      <span className='font-medium'>
                        <span className='text-primary'>{item.date}</span>- {item.hour}
                      </span>
                    </div>
                  </td>
                  <td className='flex items-center gap-x-1'>
                    <span>
                      <TitleRow
                        image={item.player1_image}
                        title={item.player1_name}
                        link=''
                      />
                      {item.player3_id && (
                        <div className='flex gap-x-2 items-center'>
                          y
                          <TitleRow
                            image={item.player3_image}
                            title={item.player3_name}
                            link=''
                          />
                        </div>
                      )}
                    </span>
                    vs.
                    <span>
                      <TitleRow
                        image={item.player2_image}
                        title={item.player2_name}
                        link=''
                      />
                      {item.player4_id && (
                        <div className='flex gap-x-2 items-center'>
                          y
                          <TitleRow
                            image={item.player4_image}
                            title={item.player4_name}
                            link=''
                          />
                        </div>
                      )}
                    </span>
                  </td>
                  <td>
                    <Link to={`/torneos/${item.tournament_id}`}>
                      <span className='text-medium text-primary hover:underline'>{item.tournament_name}</span>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {data.length === 0 && (
            <div className='text-center text-primary mb-6 mt-3 font-bold'>No hay partidos por disputarse</div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Calendario
