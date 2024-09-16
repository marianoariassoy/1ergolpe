import { NavLink } from 'react-router-dom'
import { menu } from '../components/data'

const NavBar = () => {
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
      <ul className='text-white/70 flex flex-col text-xl'>
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
