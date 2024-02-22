import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import TournamentsItem from './TournamentsItem'

const Tournaments = ({ id }) => {
  const { data, loading } = useFetch(`/tournaments/groups/${id}`)
  if (loading) return <Loader />
  if (!data) return null

  return data.map(item => (
    <TournamentsItem
      key={item.id}
      data={item}
      tournament={id}
    />
  ))
}

export default Tournaments
