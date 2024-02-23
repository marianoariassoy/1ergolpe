import { Helmet } from 'react-helmet'
import Singles from '../jugadores/Singles'
// import Dobles from '../jugadores/Dobles'
import Estadisticas from './Estadisticas'
import { useAuth } from '../../context'
import Login from './Login'

const JugadoresContainer = () => {
  const { isLoggedIn, userData } = useAuth()

  if (!isLoggedIn) return <Login />

  return (
    <section className='fade-in flex flex-col gap-y-6'>
      <div className='text-xl text-center'>
        <h1 className='font-bold text-primary'>¡Hola {userData.name.split(' ')[0]}!</h1>
      </div>

      <Estadisticas id={userData.id} />
      <Singles id={userData.id} />
      {/* <Dobles id={userData.id} /> */}
      <Helmet>
        <title>PrimerGolpe Usuarios</title>
      </Helmet>
    </section>
  )
}

export default JugadoresContainer
