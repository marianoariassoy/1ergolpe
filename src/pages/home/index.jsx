import { Helmet } from 'react-helmet'
import { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
// import bg from '../../assets/bg-home.jpg'
// import Image from '../../components/Image'

const Welcome = () => {
  const { data, loading } = useFetch(`/seasons`)

  useEffect(() => {
    const nav = document.querySelector('.navbar')
    nav.classList.remove('backdrop-blur-md')
    return () => {
      nav.classList.add('backdrop-blur-md')
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
      <div>
        <div
          className='text-6xl lg:text-7xl flex flex-col gap-y-2 mb-3 cursor-pointer -mt-6 text-primary uppercase transition-colors'
          onClick={openMenu}
        >
          <span className='text-5xl lg:text-6xl'>🏅</span>
          <span className='italic'>Torneo</span>
          <h1 className='italic'>
            {data[0].name.split(' ').map(item => (
              <span className='block'>{item}</span>
            ))}
          </h1>
        </div>

        <div className='flex items-center justify-center gap-x-4'>
          <div className='h-16 aspect-square rounded-full overflow-auto'>
            <img
              src='/assets/logos/1ergolpe.jpg'
              className='object-cover object-center w-full'
              alt='Logo Caza y Pesca'
            />
          </div>
          <div className='h-16 aspect-square rounded-full overflow-auto'>
            <img
              src='/assets/logos/cyp.jpg'
              className='object-cover object-center w-full'
              alt='Logo Caza y Pesca'
            />
          </div>
        </div>
      </div>

      {/* <div className='fade-in-slow video-background fixed h-screen w-screen left-0 top-0 -z-10'>
        <video
          autoPlay
          playsInline
          muted
          loop
          className='opacity-50 h-full w-full object-cover'
        >
          <source
            src='./assets/videos/video.webm'
            type='video/webm'
          />
          <source
            src='./assets/videos/video.mp4'
            type='video/mp4'
          />
        </video>
      </div> */}

      <Helmet>
        <title>PrimerGolpe Tenis</title>
      </Helmet>
    </section>
  )
}

export default Welcome
