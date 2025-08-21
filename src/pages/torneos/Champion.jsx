import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import confetti from 'canvas-confetti'
import Image from '../../components/Image'

const TornamentsChampion = ({ id, name, image }) => {
  useEffect(() => {
    confetti()
  }, [id])

  return (
    <div className='flex flex-col gap-y-3 items-center mb-3'>
      <h2 className='italic text-primary lg:text-lg text-center'>
        Campéon <span className='not-italic'>🏆</span>{' '}
      </h2>
      <div className='flex flex-col items-center gap-y-2'>
        {image ? (
          <div className='avatar'>
            <div className='w-20 rounded-full'>
              <Link
                to={`/jugadores/${id}`}
                className='hover:opacity-70 transition-all'
              >
                <Image
                  src={image}
                  alt={name}
                />
              </Link>
            </div>
          </div>
        ) : (
          <div className='avatar'>
            <div className='w-20 rounded-full bg-white/20'></div>
          </div>
        )}
        <h1 className='text-center font-medium text-sm'>{name} </h1>
      </div>
    </div>
  )
}

export default TornamentsChampion
