import Loader from '../../components/Loader'
import useFetch from '../../hooks/useFetch'
import Fixture from './Fixture'

const TournamentsFixture = ({ group_id, type }) => {
  const { data, loading } = useFetch(`/tournaments/groups/matches/${group_id}`)
  if (loading) return <Loader />
  if (!data) return null

  return (
    <Fixture
      data={data}
      type={type}
    />
  )
}

export default TournamentsFixture
