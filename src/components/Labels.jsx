const Labels = ({ labels }) => {
  return (
    <ul className='flex gap-x-1 justify-center text-xs opacity-70 flex-wrap mt-3'>
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
