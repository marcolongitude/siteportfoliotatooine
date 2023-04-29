import AnimationContainer from '../utils/AnimationContainer';

const ContactMe = () => {
  return (
    <AnimationContainer customClassName='w-full'>

      <h2 className='font-bold text-2xl md:text-2xl tracking-tight mb-8 text-white text-center lg:text-start'>
        Entre em contato
      </h2>

      <div className='w-full flex justify-between items-center flex-col mx-auto max-w-screen-xl'>

        <div className='w-full flex justify-between items-center flex-col lg:flex-row gap-6 mb-10'>

          <a href='mailto:jeanrdev@gmail.com' target='_blank' rel='noreferrer' className='w-full'>
            <div className='rounded border border-gray-800 hover:border-gray-900 bg-gray-900 p-4 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] sm:p-6 transition ease'>
              <h6 className='font-bold text-1xl tracking-tight text-white text-start'>
                Email
              </h6>
              <p className='text-base mt-2 text-gray-400'>
                marcocpdti@gmail.com
              </p>
            </div>
          </a>

          <a href='https://walink.co/2369d5' target='_blank' rel='noreferrer' className='w-full'>
            <div className='rounded border border-gray-800 hover:border-gray-900 bg-gray-900 p-4 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] sm:p-6 transition ease'>
              <h6 className='font-bold text-1xl tracking-tight text-white text-start'>
                Celular
              </h6>
              <p className='text-base mt-2 text-gray-400'>
                +55 (64) 99295 9483
              </p>
            </div>
          </a>

        </div>

        <div className='w-full flex justify-center items-center flex-col'>
          <form action='https://formsubmit.co/jeanrdev@gmail.com' method='POST' className='w-full space-y-4'>
            <div>
              <label className='sr-only' htmlFor='name'>Nome</label>
              <input
                className='w-full rounded p-3 text-base outline-none border bg-black border-gray-800 focus:border-gray-500 transition ease'
                placeholder='Nome'
                type='text'
                id='name'
                name='name'
                required
              />
            </div>

            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
              <div>
                <label className='sr-only' htmlFor='email'>Email</label>
                <input
                  className='w-full rounded p-3 text-base outline-none border bg-black border-gray-800 focus:border-gray-500 transition ease'
                  placeholder='Email'
                  type='email'
                  id='email'
                  name='email'
                  required
                />
              </div>

              <div>
                <label className='sr-only' htmlFor='phone'>Celular</label>
                <input
                  className='w-full rounded p-3 text-base outline-none border bg-black border-gray-800 focus:border-gray-500 transition ease'
                  placeholder='Celular'
                  type='tel'
                  id='phone'
                  name='phone'
                  required
                />
              </div>
            </div>

            <div>
              <label className='sr-only' htmlFor='message'>Mensagem</label>
              <textarea
                className='w-full h-32 rounded p-3 text-base outline-none border bg-black border-gray-800 focus:border-gray-500 transition ease'
                placeholder='Mensagem'
                id='message'
                name='message'
                required
              ></textarea>
            </div>

            <button
              type='submit'
              className='flex items-center justify-center rounded px-5 py-3 text-white bg-black hover:bg-gray-800 shadow-sm transition ease mx-auto'
            >
              <span className='font-medium text-base'>Enviar</span>

              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='ml-3 h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M14 5l7 7m0 0l-7 7m7-7H3'
                />
              </svg>
            </button>

          </form>
        </div>

      </div>

    </AnimationContainer >
  )
}

export default ContactMe;