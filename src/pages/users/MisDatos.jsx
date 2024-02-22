import { useAuth } from '../../context'
import Login from './Login'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { BeatLoader } from 'react-spinners'
import { Input, Button, Select } from '../../ui'
import { texts, days, months, years } from '../../components/data'
import axios from 'axios'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import Error from './Error'
import Messages from './Messages'

const index = () => {
  const { isLoggedIn, userData, setUserData } = useAuth()

  if (!isLoggedIn) return <Login />

  const { data, loading } = useFetch(`/users/data/${userData.id}`)
  const [sended, setSended] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')
  const [image, setImage] = useState('')

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm()

  if (loading) return <Loader />

  const onSubmit = async data => {
    setSending(true)
    const formData = new FormData()
    formData.append('data', JSON.stringify(data))
    formData.append('file', image)
    try {
      const response = await axios.post(
        `http://localhost/sites/1ergolpe-backend/api/users/update/${userData.id}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      )
      if (response.data.success) {
        setError(null)
        setSending(false)
        setSended(true)
        const newImage = response.data.image
        if (newImage) {
          setUserData({
            ...userData,
            image: newImage
          })
        }
      } else {
        setError(response.data.message)
        setSending(false)
      }
      window.scrollTo(0, 0)
    } catch (error) {
      setError(error)
      setSending(false)
    }
  }

  const password = watch('password', '')

  const getFile = e => {
    const file = e.target.files[0]
    setImage(file)
  }

  return (
    <section>
      <div className='flex flex-col gap-y-6 max-w-md m-auto lg:max-w-none'>
        <div className='text-center text-xl'>
          <h1 className='font-bold text-primary'>Mis Datos </h1>
        </div>

        <div className='w-full m-auto'>
          {error && <Messages text={error} />}
          {sended && <Messages text='Tus datos fueron actualizados correctamente 👍' />}

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='grid lg:grid-cols-2 gap-x-6'>
              <div className='form-control'>
                <Input
                  type='text'
                  title='Nombre'
                  placeholder=''
                  register={register('name', { value: data[0].name }, { required: texts.required })}
                />
                {errors.name && <Error text={errors.name.message} />}
              </div>
              <div className='form-control'>
                <Input
                  type='text'
                  title='Apellido'
                  placeholder=''
                  register={register(
                    'lastname',
                    { value: data[0].lastname },
                    { required: texts.required, maxLength: 20 }
                  )}
                />
                {errors.lastname && <Error text={errors.lastname.message} />}
              </div>
              <div className='form-control'>
                <Input
                  type='text'
                  title='Télefono'
                  placeholder=''
                  register={register('phone', { value: data[0].phone }, { required: texts.required, maxLength: 20 })}
                />
                {errors.phone && <Error text={errors.phone.message} />}
              </div>
              <div className='form-control'>
                <Input
                  type='text'
                  title='Localidad'
                  placeholder=''
                  register={register('location', { value: data[0].location }, { required: texts.required })}
                />
                {errors.location && <Error text={errors.location.message} />}
              </div>
              <div className='form-control'>
                <Input
                  type='email'
                  title='Email'
                  placeholder=''
                  register={register(
                    'email',
                    { value: data[0].email },
                    {
                      required: texts.required,
                      maxLength: 30,
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Dirección de correo electrónico inválida'
                      }
                    }
                  )}
                />
                {errors.email && <Error text={errors.email.message} />}
              </div>
              <div className='form-control'>
                <Input
                  type='text'
                  title='DNI'
                  placeholder=''
                  register={register(
                    'dni',
                    { value: data[0].dni },
                    {
                      required: texts.required,
                      pattern: {
                        value: /^[0-9]+$/,
                        message: 'Solo se permiten números'
                      },
                      validate: value => value.length === 8 || 'La longitud del DNI deben ser 8 números'
                    }
                  )}
                />
                {errors.dni && <Error text={errors.dni.message} />}
              </div>{' '}
              {/* TODO: Validar nuevas contraseñas */}
              <div className='form-control'>
                <Input
                  type='password'
                  title='Modificar contraseña'
                  placeholder=''
                  register={register('password')}
                />
              </div>
              <div className='form-control'>
                <Input
                  type='password'
                  title='Repetir contraseña'
                  placeholder=''
                  register={register('confirmPassword')}
                />
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text text-primary font-medium'>Fecha de nacimiento</span>
                </label>
                <div className='flex gap-x-3'>
                  <Select
                    options={days}
                    selected={data[0].day}
                    register={register('day', { required: true })}
                    title='día'
                  />
                  <Select
                    options={months}
                    selected={data[0].month}
                    register={register('month', { required: true })}
                    title='mes'
                  />
                  <Select
                    options={years}
                    selected={data[0].year}
                    register={register('year', { required: true })}
                    title='año'
                  />
                </div>
                {(errors.day || errors.month || errors.year) && <Error text={texts.required} />}
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text text-primary font-medium'>Foto de perfil</span>
                </label>
                <input
                  type='file'
                  accept='image/*'
                  name='file'
                  className='file-input file-input-bordered file-input-primary w-full text-sm'
                  onChange={getFile}
                />
                <div className='mt-3'>
                  <img
                    src={image ? URL.createObjectURL(image) : data[0].image}
                    alt='Vista previa de la foto'
                    className='w-24 h-24 rounded-full object-cover object-center'
                  />
                </div>
              </div>
            </div>
            <div className='form-control mt-6 flex items-center justify-center'>
              {sending ? (
                <div className='mt-6'>
                  <BeatLoader />
                </div>
              ) : (
                !sended && <Button>Modificar</Button>
              )}
            </div>
            <div className='mt-6'>
              <p className='text-sm opacity-70 text-center'>
                Solo se muestran tu nombre, apellido y foto de perfil.
                <br />
                El resto de los datos se encuentran protegidos y nadie por fuera de la organiazación tiene acceso a
                ellos.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default index
