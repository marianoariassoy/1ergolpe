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
      <h2 className='italic text-primary lg:text-xl text-center'>
        Campéon <span className='not-italic'>🏆</span>{' '}
      </h2>
      {image && (
        <div className='avatar'>
          <div className='w-28 rounded-full'>
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
      )}
      <h1 className='text-center font-medium'>{name} </h1>
    </div>
  )
}

export default TornamentsChampion
