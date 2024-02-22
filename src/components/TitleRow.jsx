import { Link } from 'react-router-dom'
import Image from './Image'
const TitleRow = ({ num, image, title, link }) => {
  return (
    <div className='flex items-center gap-x-3'>
      {num && <span className='font-bold'>{num}</span>}
      <div className='avatar'>
        <div className={`rounded-full ${num ? 'w-14' : 'w-8'}`}>
          <Link
            to={link}
            className='hover:opacity-70 transition-all'
          >
            <Image
              src={image}
              alt={title}
            />
          </Link>
        </div>
      </div>
      <Link
        to={link}
        className='hover:text-primary font-medium'
      >
        {title}
      </Link>
    </div>
  )
}

export default TitleRow
