import { use, useCallback, useMemo } from 'react';
import CardProject from './CardProject';
import AnimationContainer from '../utils/AnimationContainer';
import { GET } from '../../app/api/repositories/route'
// import { CardProjectProps } from '@/types';

type Propstype = {
    id: any;
    title: any;
    des: any;
    category: any;
    repo: any;
    link: any;
}

const getData = async (): Promise<any> => {
    let arrayPrepared: Propstype[] = []
    const data: any = (await GET()).json()
    const response = await data
    const { repositories } = response

    // const data = await fetch('https://marcoaureliodev.vercel.app/api/repositories')
    // if (!data.ok) throw new Error(`HTTP error! Status: ${data.status}`)
    // const response = await data.json()
    // const { repositories } = response

    if (typeof repositories === 'object' && repositories.length > 0) {
        repositories.forEach((repo: any) => {
            if (repo && repo?.owner?.login == 'marcolongitude') {
                arrayPrepared.push({
                    id: repo.id,
                    title: repo.name,
                    des: repo.description,
                    category: 'javascript',
                    repo: repo.git_url,
                    link: repo.url
                })
            }
        });
    }

    return arrayPrepared
}


const SearchAllProjects = () => {


    const allProjectsInfo: Propstype[] = use(getData())
    // const [projectSearch, setProjectSearch] = useState<string>('');
    // const resultSearch: CardProjectProps[] = allProjectsInfo.filter(project => project.category.includes(projectSearch.toLowerCase()))

    return (
        <>
            <AnimationContainer customClassName='w-full group flex flex-col justify-center items-center mb-8'>

                {/* <div className='w-full flex items-center lg:w-3/6 h-12 rounded shadow-lg bg-black border border-gray-800 group-hover:border-gray-500 transition-all ease'>

                    <div className='grid place-items-center h-full w-12 text-gray-500'>
                        <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='1' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
                        </svg>
                    </div>

                    <input
                        className='peer h-full w-full outline-none rounded text-sm bg-black px-2 group-hover:border-gray-500 transition-all ease'
                        type='text'
                        id='search'
                        placeholder='Languages, frameworks, libraries, etc...'
                        onChange={e => setProjectSearch(e.target.value)} />
                </div> */}

            </AnimationContainer>

            <article className='w-full flex justify-center items-center content-center flex-wrap gap-6 mx-auto'>
                {
                    allProjectsInfo && allProjectsInfo.map(({ id, title, des, category, repo, link }) => <CardProject key={id} title={title} des={des} category={category} repo={repo} link={link} />)
                }
            </article>
        </>
    )

}

export default SearchAllProjects;