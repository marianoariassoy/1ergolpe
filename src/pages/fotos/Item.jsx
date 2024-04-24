import Image from '../../components/Image'

const Item = ({ data }) => {
  return (
    <article>
      <Image
        src={data.image}
        alt={data.title}
      />
    </article>
  )
}

export default Item
