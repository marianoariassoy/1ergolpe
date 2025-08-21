import { Helmet } from 'react-helmet'
import { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import { Link } from 'react-router-dom'

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

  return (
    <section className='fade-in m-auto max-w-lg flex justify-center items-center text-center h-full'>
      <div className='flex flex-col'>
        <div className='text-3xl lg:text-4xl flex flex-col gap-y-4 cursor-pointer text-primary transition-colors  mx-6 [&>a:last-child]:border-0'>
          {data.map(item => (
            <Link
              to={`/torneos-temporada/${item.id}`}
              key={item.id}
              className='italic border-b border-primary pb-6'
            >
              {item.name}
            </Link>
          ))}
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

      <div className='fade-in-slow video-background fixed h-screen w-screen left-0 top-0 -z-10'>
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
      </div>

      <Helmet>
        <title>PrimerGolpe Tenis</title>
      </Helmet>
    </section>
  )
}

export default Welcome
