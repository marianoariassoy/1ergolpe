import { NavLink } from 'react-router-dom'
import { menu } from '../components/data'
import useFetch from '../hooks/useFetch'
import Loader from '../components/Loader'

const NavBar = () => {
  const { data, loading } = useFetch(`/tournaments/all/season`)

  if (loading) return <Loader />

  const openMenu = () => {
    const menu = document.querySelector('nav')
    menu.classList.toggle('hidden')
    menu.classList.toggle('grid')
  }

  return (
    <nav
      className='fade-in fixed top-0 left-0 w-full h-screen bg-black/50 content-center text-center z-30 backdrop-blur-md hidden'
      onClick={openMenu}
    >
      <ul className='text-white/70 flex flex-col'>
        {data &&
          data.map((item, index) => (
            <li key={index}>
              <NavLink
                to={`/torneos/${item.id}`}
                className='nav-link text-primary italic text-xl lg:text-2xl'
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        {menu.map((item, index) => (
          <li key={index + 20}>
            <NavLink
              to={item.url}
              className='nav-link font-medium lg:text-[1.25rem]'
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar
