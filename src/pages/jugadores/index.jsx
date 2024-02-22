import { useState } from 'react'
import { Helmet } from 'react-helmet'
import Loader from '../../components/Loader'
import useFetch from '../../hooks/useFetch'
import TitleRow from '../../components/TitleRow'

const index = () => {
  const { data, loading } = useFetch(`/players`)
  const [filterText, setFilterText] = useState('')

  if (loading) return <Loader />

  const handleFilterChange = event => {
    setFilterText(event.target.value)
  }

  const filteredPlayers = filterText
    ? data.filter(player => player.name.toLowerCase().includes(filterText.toLowerCase()))
    : []

  return (
    <section className='fade-in flex flex-col gap-y-6 max-w-md m-auto'>
      <div className='text-center text-xl'>
        <h1 className='font-bold text-primary'>Jugadores</h1>
      </div>

      <input
        type='text'
        placeholder='Buscar por nombre o apellido'
        value={filterText}
        onChange={handleFilterChange}
        className='input input-bordered w-full text-sm'
        id='search'
      />

      <div className='overflow-x-auto text-sm'>
        <table className='table w-full'>
          <tbody>
            {filteredPlayers.map(item => (
              <tr key={item.id}>
                <TitleRow
                  num=''
                  image={item.image}
                  title={item.name}
                  link={`/jugadores/${item.id}`}
                />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Helmet>
        <title>1erGolpe Jugadores</title>
      </Helmet>
    </section>
  )
}

export default index
