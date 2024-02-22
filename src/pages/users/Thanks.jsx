import { Link } from 'react-router-dom'

const Thanks = () => {
  return (
    <div className='fade-in flex flex-col text-center'>
      <span>🎉</span>
      <div className='text-primary font-bold'>¡Ya estas registrado! </div>
      <Link
        to='/usuarios/login'
        className='hover:text-primary hover:opacity-100 opacity-70'
      >
        Inicia tu sesión haciendo clic acá.
      </Link>
    </div>
  )
}

export default Thanks
