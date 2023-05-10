import { use } from 'react';
import CardProject from './CardProject';

type Propstype = {
    id: string;
    title: string;
    des: string;
    category: string;
    repo: string;
    link: string;
}

const getData = async (): Promise<any> => {
    let arrayPrepared: Propstype[] = []

    const data = await fetch('https://api.github.com/users/marcolongitude/repos?page1&per_page=100')
    if (!data.ok) throw new Error(`HTTP error! Status: ${data.status}`)
    const repositories = await data.json()

    if (typeof repositories === 'object' && repositories.length > 0) {
        repositories.forEach((repo: any) => {
            if (repo && repo?.owner?.login == 'marcolongitude') {
                arrayPrepared.push({
                    id: repo.id,
                    title: repo.name,
                    des: repo.description,
                    category: 'javascript',
                    repo: repo.svn_url,
                    link: repo.owner.html_url
                })
            }
        });
    }

    return arrayPrepared
}


const SearchAllProjects = () => {
    const allProjectsInfo: Propstype[] = use(getData())

    return (
        <>
            <article className='w-full flex justify-center items-center content-center flex-wrap gap-6 mx-auto'>
                {
                    allProjectsInfo && allProjectsInfo.map(({ id, title, des, category, repo, link }) =>
                        <CardProject key={id} title={title} des={des} category={category} repo={repo} link={link} />)
                }
            </article>
        </>
    )
}

export default SearchAllProjects;