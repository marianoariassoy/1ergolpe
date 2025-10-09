import { WhatsApp } from '../components/icons'
import useFetch from '../hooks/useFetch'
import Colaborador from './Colaborador'
import Loader from '../components/Loader'
import { useLocation } from 'react-router-dom'

const Footer = () => {
  const year = new Date().getFullYear()
  const { data, loading } = useFetch(`/partners`)
  const location = useLocation()

  if (loading) return <Loader />

  return (
    <section className='flex flex-col text-center text-sm py-6 px-12 mt-6'>
      {location.pathname === '/' && (
        <div className='flex gap-4 m-auto mb-4 flex-wrap justify-center'>
          {!loading &&
            data.map((item, index) => (
              <Colaborador
                key={index}
                item={item}
              />
            ))}
        </div>
      )}

      <div className='flex flex-col'>
        <div className='font-bold'>PrimerGolpe Tenis &copy; {year}</div>
        <div className='flex gap-x-2 items-center justify-center flex-wrap'>
          <div> CACyP Don Torcuato, Buenos Aires.</div>

          <div className='flex items-center justify-center gap-x-1 mt-1'>
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
