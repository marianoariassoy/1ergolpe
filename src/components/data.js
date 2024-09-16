export const menu = [
  { name: 'Torneos', url: '/torneos' },
  // { name: 'Torneos Anteriores', url: '/torneos-anteriores' },
  { name: 'Galería de fotos', url: '/galeria-fotos' },
  { name: 'Jugadores', url: '/jugadores' },
  { name: 'Rankings', url: '/ranking' },
  { name: 'Colaboradores', url: '/colaboradores' },
  { name: 'Reglamento', url: '/reglamento' },
  { name: 'Login', url: '/usuarios/login' }
]

export const rankingOptions = [
  {
    name: 'Damas A',
    category: 16
  },
  {
    name: 'Damas B',
    category: 15
  },
  {
    name: 'Damas C',
    category: 14
  },
  {
    name: 'Caballeros Super A',
    category: 13
  },

  {
    name: 'Caballeros A1',
    category: 12
  },
  {
    name: 'Caballeros A2',
    category: 11
  },
  {
    name: 'Caballeros B1',
    category: 10
  },
  {
    name: 'Caballeros B2',
    category: 9
  },
  {
    name: 'Caballeros C',
    category: 23
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
