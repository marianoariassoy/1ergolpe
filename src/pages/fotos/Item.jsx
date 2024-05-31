import Image from '../../components/Image'

const Item = ({ data }) => {
  return (
    <article className='min-h-[300px]'>
      <Image
        src={data.image}
        alt={data.title}
      />
    </article>
  )
}

export default Item
