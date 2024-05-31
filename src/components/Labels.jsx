const Labels = ({ labels }) => {
  return (
    <ul className='flex gap-x-1 justify-center text-sm opacity-70 flex-wrap mb-3'>
      {labels
        .filter(item => item.value)
        .map((item, index) => (
          <li key={index}>
            <strong>{item.name}:</strong> {item.value}
          </li>
        ))}
    </ul>
  )
}

export default Labels
