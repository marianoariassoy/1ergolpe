import { Helmet } from 'react-helmet'
import { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import bg from '../../assets/bg-home.jpg'
import Image from '../../components/Image'

const Welcome = () => {
  const { data, loading } = useFetch(`/seasons`)

  useEffect(() => {
    const nav = document.querySelector('.navbar')
    const footer = document.querySelector('.footer-main')
    nav.classList.remove('backdrop-blur-md')
    footer.classList.remove('mt-16')
    return () => {
      nav.classList.add('backdrop-blur-md')
      footer.classList.add('mt-16')
    }
  }, [])

  if (loading) return <Loader />

  const openMenu = () => {
    const menu = document.querySelector('nav')
    menu.classList.toggle('hidden')
    menu.classList.toggle('grid')
  }

  return (
    <section className='fade-in m-auto max-w-lg flex justify-center items-center text-center h-full'>
      <div
        className='cursor-pointer lg:hover:text-black text-primary uppercase transition-colors'
        onClick={openMenu}
      >
        <h1 className='text-6xl lg:text-8xl italic'>Torneo {data[0].name}</h1>
      </div>

      <div className='absolute left-0 -z-10 w-full h-full opacity-40 saturate-50'>
        <Image
          src={bg}
          alt='Imagen de fondo'
        />
      </div>
      <Helmet>
        <title>1erGolpe Tenis</title>
      </Helmet>
    </section>
  )
}

export default Welcome
