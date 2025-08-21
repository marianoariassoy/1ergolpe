import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import confetti from 'canvas-confetti'
import Image from '../../components/Image'

const TornamentsChampion = ({ data }) => {
  useEffect(() => {
    confetti()
  }, [data.id])

  return (
    <div className='flex flex-col gap-y-3 items-center mb-3'>
      <h2 className='italic text-primary lg:text-lg text-center'>
        Campéones <span className='not-italic'>🏆</span>{' '}
      </h2>
      <div className='flex gap-2'>
        <div className='flex flex-col items-center gap-y-2 max-w-[6rem]'>
          {data.champion_image ? (
            <div className='avatar'>
              <div className='w-20 rounded-full'>
                <Link
                  to={`/jugadores/${data.champion_id}`}
                  className='hover:opacity-70 transition-all'
                >
                  <Image
                    src={data.champion_image}
                    alt={data.champion_name}
                  />
                </Link>
              </div>
            </div>
          ) : (
            <div className='avatar'>
              <div className='w-20 rounded-full bg-white/20'></div>
            </div>
          )}
          <h1 className='text-center font-medium text-sm'>{data.champion_name} </h1>
        </div>
        <div className='flex flex-col items-center gap-y-2 max-w-[6rem]'>
          {data.champion_image_2 ? (
            <div className='avatar'>
              <div className='w-20 rounded-full'>
                <Link
                  to={`/jugadores/${data.champion_id_2}`}
                  className='hover:opacity-70 transition-all'
                >
                  <Image
                    src={data.champion_image_2}
                    alt={data.champion_name_2}
                  />
                </Link>
              </div>
            </div>
          ) : (
            <div className='avatar'>
              <div className='w-20 rounded-full bg-white/20'></div>
            </div>
          )}
          <h1 className='text-center font-medium text-sm'>{data.champion_name_2} </h1>
        </div>
      </div>
    </div>
  )
}

export default TornamentsChampion
