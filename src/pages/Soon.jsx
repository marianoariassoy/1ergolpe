import { Helmet } from 'react-helmet'
const Soon = () => {
  return (
    <div className='fade-in flex flex-col items-center justify-center h-full'>
      <h1 className='text-4xl mb-3'>🚀</h1>

      <div className='text-primary text-center'>
        <span className='block font-bold text-xl'>¡Muy pronto!</span>
      </div>
      <Helmet>
        <title>PrimerGolpe Tenis</title>
      </Helmet>
    </div>
  )
}

export default Soon
