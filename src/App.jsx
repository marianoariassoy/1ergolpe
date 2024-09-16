import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Welcome from './pages/home'
import Tournaments from './pages/torneos'
import JugadoresProfile from './pages/jugadores/Perfil'
import Ranking from './pages/jugadores/Ranking'
import Jugadores from './pages/jugadores'
import Torneos from './pages/torneos-anteriores'
import TorneosTemporada from './pages/torneos/TorneosTemporada'
import Reglamento from './pages/reglamento'
import Nosotros from './pages/nosotros'
import Colaboradores from './pages/colaboradores'
import Fotos from './pages/fotos'
import Soon from './pages/Soon'
import PageNotFound from './pages/PageNotFound'
import UsersLogin from './pages/users/Login'
import UsersRegistro from './pages/users/Registro'
import UsersPerfil from './pages/users/Perfil'
import UsersMisDatos from './pages/users/MisDatos'
import UsersRecuperar from './pages/users/RecuperarPassword'
import UsersRestablecer from './pages/users/RestablecerPassword'

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            path='/'
            element={<Welcome />}
          />
          <Route
            path='/torneos/:id'
            element={<Tournaments />}
          />
          <Route
            path='/jugadores/:id'
            element={<JugadoresProfile />}
          />

          <Route
            path='/ranking'
            element={<Ranking />}
          />
          <Route
            path='/torneos'
            element={<Torneos />}
          />
          <Route
            path='/torneos-temporada/:id'
            element={<TorneosTemporada />}
          />
          {/* <Route
            path='/torneos-anteriores'
            element={<TorneosAnteriores />}
          /> */}
          <Route
            path='/jugadores'
            element={<Jugadores />}
          />
          <Route
            path='/reglamento'
            element={<Reglamento />}
          />
          <Route
            path='/colaboradores'
            element={<Colaboradores />}
          />
          <Route
            path='/nosotros'
            element={<Nosotros />}
          />
          <Route
            path='/galeria-fotos'
            element={<Fotos />}
          />
          <Route
            path='/usuarios/login'
            element={<UsersLogin />}
          />
          <Route
            path='/usuarios/registro'
            element={<UsersRegistro />}
          />
          <Route
            path='/usuarios/perfil'
            element={<UsersPerfil />}
          />
          <Route
            path='/usuarios/misdatos'
            element={<UsersMisDatos />}
          />
          <Route
            path='/usuarios/recuperar-password'
            element={<UsersRecuperar />}
          />
          <Route
            path='/usuarios/restablecer-password'
            element={<UsersRestablecer />}
          />
          <Route
            path='/soon'
            element={<Soon />}
          />
          <Route
            path='*'
            element={<PageNotFound />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
