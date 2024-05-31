import React from 'react'
import Image from '../../components/Image'

const Item = ({ item }) => {
  return (
    <article className='max-w-xs'>
      <a
        href={item.url}
        target='_blank'
        className='rounded-full overflow-hidden block hover:opacity-70'
      >
        <Image
          src={item.image}
          alt={item.title}
        />
      </a>
    </article>
  )
}

export default Item
