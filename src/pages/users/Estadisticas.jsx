import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import { Ray, Heart } from '../../components/icons'
import EstadisticasItem from './EstadisticasItem'
import Messages from '../users/Messages'

const Estadisticas = ({ id }) => {
  const { data, loading } = useFetch(`/users/stats/${id}`)
  if (loading) return <Loader />
  if (!data) return <Messages text='Todavía no participaste en ningún torneo 🥲' />

  console.log(data)
  const info = [
    {
      title: 'Jugados',
      number: data.played,
      icon: <Ray />
    },
    {
      title: 'Ganados',
      number: data.won,
      icon: <Heart />
    }
  ]

  return (
    <section className='grid grid-cols-2 gap-x-12 gap-y-6 bg-base-300 p-6 rounded-2xl'>
      {info.map((item, index) => (
        <EstadisticasItem
          key={index}
          item={item}
        />
      ))}
    </section>
  )
}

export default Estadisticas
