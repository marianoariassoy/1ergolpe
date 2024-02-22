import { WhatsApp } from '../components/icons'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <div className='text-sm text-center flex flex-col footer-main py-6 opacity-70 mt-6'>
      <div className='font-bold'>1erGolpe Torneos &copy; {year}</div>
      <div className='flex items-center justify-center gap-x-2'>
        <span>CACyP Don Torcuato</span>
        <span>-</span>
        <span>
          <a
            href='mailto:info@primergolpe.com.ar'
            className='hover:text-primary'
          >
            info@primergolpe.com.ar
          </a>
        </span>
      </div>
      <div className='flex items-center justify-center gap-x-2'>
        <span>
          <WhatsApp />
        </span>
        <a
          href='https://wa.me/5491151557285'
          className='hover:text-primary'
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
    </div>
  )
}

export default Footer
