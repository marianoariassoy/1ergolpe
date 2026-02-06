import Image from '../components/Image'

const Item = ({ item }) => {
  return (
    <article>
      <a
        href={item.url}
        target='_blank'
        className='w-full h-full hover:opacity-70'
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
