import { Children, useState } from 'react'
import { Bull } from '../../components/icons'
import FixtureFilter from './FixtureFilter'
import TitleRow from '../../components/TitleRow'

const Fixture = ({ data, type }) => {
  const [filters, setFilters] = useState('all')
  const filteredData = data.filter(item => (filters ? item.winner > 0 : item.winner == 0) || filters === 'all')

  console.log(filteredData)
  return (
    <section className='fade-in'>
      {+type !== 1 && (
        <div>
          <h1 className='italic text-primary text-center mb-3 lg:text-xl mt-6'>Fixture</h1>
          <FixtureFilter
            filters={filters}
            setFilters={setFilters}
          />
        </div>
      )}

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
                <th scope='col'>Enfrentamiento</th>
                <th scope='col'>Resultado</th>
                <th scope='col'>Id</th>
              </tr>
            </thead>
          )}

          <tbody>
            {filteredData.map(item => (
              <tr key={item.id}>
                <td
                  scope='row'
                  className='pl-0'
                >
                  <div className='flex gap-x-[0.6rem] items-center'>
                    <span className='font-semibold'>{item.date}</span>
                  </div>
                </td>
                <td>{item.hour}</td>
                <td className='lg:whitespace-normal flex items-center gap-x-3'>
                  {item.winner === item.player1_id && (
                    <span className='text-primary'>
                      <Bull />
                    </span>
                  )}
                  <TitleRow
                    image={item.player1_image}
                    title={item.player1_name}
                    link={`/jugadores/${item.player1_id}`}
                  />
                  vs.
                  {item.winner === item.player2_id && (
                    <span className='text-primary'>
                      <Bull />
                    </span>
                  )}
                  <TitleRow
                    image={item.player2_image}
                    title={item.player2_name}
                    link={`/jugadores/${item.player2_id}`}
                  />
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
