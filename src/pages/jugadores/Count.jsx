import CountUp from 'react-countup'

const count = ({ end, duration }) => {
  return (
    <div className='text-primary text-lg font-bold'>
      <CountUp
        end={end}
        duration={duration}
      />
    </div>
  )
}

export default count
