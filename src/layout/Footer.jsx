import { WhatsApp } from '../components/icons'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <section className='flex flex-col text-center text-sm py-6 px-5'>
      <div className='font-bold'>PrimerGolpe Tenis &copy; {year}</div>
      <div> CACyP Don Torcuato.</div>
      <div>
        <a
          href='mailto:info@primergolpe.com.ar'
          className='hover:text-primary'
        >
          info@primergolpe.com.ar
        </a>
      </div>
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
        <span>-</span>
        <a
          href='https://wa.me/5491144993930'
          className='hover:text-primary'
        >
          11 4499 3930
        </a>
      </div>
    </section>
  )
}

export default Footer
