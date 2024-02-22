import { useEffect } from 'react'
import { Helmet } from 'react-helmet'

const Reglamento = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [])
  return (
    <section className='fade-in flex flex-col gap-y-6'>
      <div className='text-center text-xl'>
        <h1 className='font-bold text-primary'>Reglamento 1erGolpe</h1>
        <div className='text-sm text-center opacity-70'>Ultima actualización 17 de febrero de 2024.</div>
      </div>
      <p className='md:columns-2 gap-8 text-sm'>
        la organización se reserva el derecho a modificar el presente reglamento cuando sea imperioso establecer,
        regular o fijar conductas o acciones que puedan generar conflictos o diversas interpretaciones con el objeto de
        conducir a un mejor desenvolvimiento de las diversas competiciones <br />
        <br />
        Para el supuesto caso que pudiera darse una laguna en la normativa o posible doble interpretación, esta
        organización resolverá puntualmente la cuestión en conflicto de acuerdo a su leal saber y entender, notificando
        a las partes que pudieran estar involucradas. La decisión será inapelable por las partes que pudieran estar
        involucradas y generará un precedente que será utilizado para aclaración de las posibles normas en conflicto
      </p>

      <Helmet>
        <title>1erGolpe Reglamento</title>
      </Helmet>
    </section>
  )
}

export default Reglamento
