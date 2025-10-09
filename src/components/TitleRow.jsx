import { Link } from 'react-router-dom'
import Image from './Image'
const TitleRow = ({ num, image, title, link }) => {
  return (
    <div className='flex items-center gap-x-3'>
      {num && <span className='font-bold w-2'>{num}</span>}

      <div className={`avatar ${num ? '' : 'hidden'}`}>
        <div className='rounded-full w-12 my-2'>
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
      {link ? (
        <Link
          to={link}
          className='hover:text-primary font-medium'
        >
          {title}
        </Link>
      ) : (
        title
      )}
    </div>
  )
}

export default TitleRow
