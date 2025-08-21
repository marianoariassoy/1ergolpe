import Groups from './Groups'
import FixtureContainer from './FixtureContainer'

const Tournaments = ({ data }) => {
  return (
    <section>
      {data.type === 1 ? (
        <h2 className='italic text-primary text-center lg:text-lg mb-6'>{data.name}</h2>
      ) : (
        <Groups group={data} />
      )}

      <FixtureContainer
        group_id={data.id}
        type={data.type}
      />
    </section>
  )
}

export default Tournaments
