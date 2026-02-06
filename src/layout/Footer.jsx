import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/autoplay'
import { Autoplay } from 'swiper/modules'
import { WhatsApp } from '../components/icons'
import useFetch from '../hooks/useFetch'
import Loader from '../components/Loader'
import { useLocation } from 'react-router-dom'

const Footer = () => {
  const year = new Date().getFullYear()
  const { data, loading } = useFetch(`/partners`)
  const location = useLocation()

  if (loading) return <Loader />

  return (
    <section className='w-screen flex flex-col text-center text-sm'>
      {location.pathname === '/' && (
        <div className='w-full px-6 mt-6'>
          <div className='w-full max-w-3xl mx-auto mb-6 bg-white rounded-lg shadow-2xl p-2'>
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={4}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              loop={true}
              breakpoints={{
                320: { slidesPerView: 3 },
                640: { slidesPerView: 4 },
                1024: { slidesPerView: 5 }
              }}
            >
              {data.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className='flex justify-center items-center h-20'>
                    <img
                      src={item.image}
                      alt={item.title}
                      className='max-h-14 object-contain grayscale hover:grayscale-0 transition'
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}

      <div className='flex flex-col bg-black/50 px-6 py-6 text-white/70'>
        <div className='font-bold'>PrimerGolpe Tenis &copy; {year}</div>
        <div className='flex gap-x-2 items-center justify-center flex-wrap'>
          <div>CACyP Don Torcuato, Buenos Aires.</div>
          <div className='flex items-center justify-center gap-x-1'>
            <span className='text-primary'>
              <WhatsApp />
            </span>

            <a
              href='https://wa.me/5491151557285'
              className='hover:underline text-primary'
            >
              11 5155 7285
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
