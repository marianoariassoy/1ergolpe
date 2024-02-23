import { Helmet } from 'react-helmet'

const Nosotros = () => {
  return (
    <section className='fade-in text-center max-w-2xl m-auto flex flex-col gap-y-6'>
      <h1 className='font-bold text-primary text-xl'>¡Hola!</h1>

      <p className='text-wrap text-sm'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sapiente facere exercitationem quia quos recusandae
        eius sed reiciendis veritatis. Cumque nostrum rem possimus asperiores iste provident, ipsam alias culpa at?
        <br />
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa rerum nemo, in assumenda fugiat eius sit! Ratione
        nemo voluptatibus odit, tenetur accusamus maiores debitis iusto iste, incidunt dolores dolorum laboriosam?
      </p>
      <p></p>

      <Helmet>
        <title>PrimerGolpe Nosotros</title>
      </Helmet>
    </section>
  )
}

export default Nosotros
