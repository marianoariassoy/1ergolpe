import { Link } from 'react-router-dom'
import Image from './Image'
const TitleRow = ({ image, title, link }) => {
  return (
    <div className='flex items-center gap-x-3'>
      <div className='w-2'> </div>
      <div className={`avatar`}>
        <div className='rounded-full w-8'>
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
