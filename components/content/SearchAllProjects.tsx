import { use } from 'react';
import CardProject from './CardProject';
import AnimationContainer from '../utils/AnimationContainer';
// import { CardProjectProps } from '@/types';

async function getData() {
    const apikey = "Bearer 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"
    const res = await fetch('https://api.github.com/user/repos?per_page=100', { headers: { Authorization: apikey } });
    return res.json();
}

const dataPromise = getData();

const prepareDataRepositories = (repositories: any) => {
    if (repositories.length == 0 || !repositories) return []
    let arrayPrepare: any[] = []
    repositories.forEach((repo: any, index: any) => {
        if (repo.owner.login == 'marcolongitude') {
            arrayPrepare.push(
                {
                    id: index,
                    title: repo.name,
                    des: repo.description,
                    category: 'javascript',
                    repo: repo.git_url,
                    link: repo.url
                }
            )
        }
    })

    return arrayPrepare
}



const SearchAllProjects = () => {
    const repositories = use(dataPromise);
    const allProjectsInfo = prepareDataRepositories(repositories)
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
                    allProjectsInfo.map(({ id, title, des, category, repo, link }) => <CardProject key={id} title={title} des={des} category={category} repo={repo} link={link} />)
                }
            </article>
        </>
    )

}

export default SearchAllProjects;