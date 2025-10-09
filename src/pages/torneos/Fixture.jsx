import { useState } from 'react'
import TitleRow from '../../components/TitleRow'

const Fixture = ({ data, type }) => {
  const [filters, setFilters] = useState('all')
  const filteredData = data.filter(item => (filters ? item.winner > 0 : item.winner == 0) || filters === 'all')

  return (
    <section className='fade-in mb-3'>
      {+type !== 1 && <h1 className='italic text-primary text-center lg:text-lg mt-6 mb-3'>Fixture</h1>}

      <div className='overflow-x-auto text-sm'>
        <table className='table w-full'>
          {filteredData.length > 0 && (
            <thead>
              <tr>
                <th
                  scope='col'
                  className='pl-0'
                >
                  Fecha
                </th>
                <th scope='col'>Hora</th>
                <th scope='col'>Jugadores</th>
                <th scope='col'>Resultado</th>
                <th scope='col'>Id</th>
              </tr>
            </thead>
          )}

          <tbody>
            {filteredData.map(item => (
              <tr
                key={item.id}
                className={item.winner > 0 ? 'opacity-50' : ''}
              >
                <td
                  scope='row'
                  className='pl-0'
                >
                  <div className='flex gap-x-[0.6rem] items-center'>
                    <span className='font-semibold'>{item.date}</span>
                  </div>
                </td>
                <td>{item.hour}</td>
                <td className='flex items-center gap-x-1'>
                  <span className={item.winner === item.player1_id ? 'underline  underline-offset-4' : ''}>
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
                  <span className={item.winner === item.player2_id ? 'underline  underline-offset-4' : ''}>
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
                  {item.winner > 0
                    ? item.set3home > 0 || item.set3away > 0
                      ? item.set1home +
                        '-' +
                        item.set1away +
                        ' ' +
                        item.set2home +
                        '-' +
                        item.set2away +
                        ' ' +
                        item.set3home +
                        '-' +
                        item.set3away
                      : item.set1home + '-' + item.set1away + ' ' + item.set2home + '-' + item.set2away
                    : ' - '}
                </td>

                <td>{item.id}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredData.length === 0 && (
          <div className='text-center text-primary mb-6 mt-3 font-bold'>No hay partidos 🥲</div>
        )}
      </div>
    </section>
  )
}

export default Fixture
