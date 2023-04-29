import Link from 'next/link';

const LinksMenu = [
  {
    name: 'Home',
    path: '/',
    delay: '150ms'
  },
  {
    name: 'Sobre',
    path: '/sobre',
    delay: '175ms'
  },
  {
    name: 'Projetos',
    path: '/projetos',
    delay: '200ms'
  },
  // {
  //   name: 'Blog',
  //   path: '/blog',
  //   delay: '225ms'
  // },
]

const LinksMenuNav = () => {
  return (
    <>
      {
        LinksMenu.map(({ name, path, delay }) => (
          <li
            key={name}
            className='border-gray-700 text-gray-100 text-sm font-semibold'
            style={{ transitionDelay: delay }}>
            <Link href={path} className='pb-4'>
              {name}
            </Link>
          </li>
        ))
      }
    </>
  )
}

export default LinksMenuNav;