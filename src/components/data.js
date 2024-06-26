export const menu = [
  // { name: 'Horarios de cancha', url: '/soon' },
  { name: 'Torneos', url: '/torneos-anteriores' },
  { name: 'Galería de fotos', url: '/galeria-fotos' },
  { name: 'Jugadores', url: '/jugadores' },
  { name: 'Rankings', url: '/soon' },
  { name: 'Colaboradores', url: '/colaboradores' },
  { name: 'Reglamento', url: '/reglamento' },
  { name: 'Nosotros', url: '/soon' },
  { name: 'Login', url: '/usuarios/login' }
]

export const rankingOptions = [
  {
    name: 'Damas',
    category: 6
  },
  {
    name: '1era',
    category: 1
  },
  {
    name: '2da',
    category: 2
  },

  {
    name: '3ra',
    category: 3
  },
  {
    name: '4ta',
    category: 4
  },
  {
    name: '5ta',
    category: 5
  }
]

export const texts = {
  error: 'Se produjo un error al enviar el formulario.',
  required: 'Completá este dato',
  thanks: '¡Ya estas registrado en nuestro sistema!'
}

export const days = []
for (let i = 1; i <= 31; i++) {
  days.push(i)
}
export const months = []
for (let i = 1; i <= 12; i++) {
  months.push(i)
}
export const years = []
for (let i = 1930; i <= 2020; i++) {
  years.push(i)
}
