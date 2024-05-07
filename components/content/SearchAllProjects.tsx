import { use } from 'react';
import CardProject from './CardProject';

type Propstype = {
  id: string;
  name: string;
  description: string;
  language: string;
  svn_url: string;
  owner: {
    login?: string;
    html_url: string;
  };
};

const getData = async (): Promise<any> => {
  let arrayPrepared: Propstype[] = [];

  const data = await fetch(
    'https://api.github.com/users/marcolongitude/repos?page1&per_page=100',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      cache: 'force-cache',
      next: { tags: ['repositories-github'] }
    }
  );

  if (!data.ok) throw new Error(`HTTP error! Status: ${data.status}`);

  const repositories = await data.json();

  if (typeof repositories === 'object' && repositories.length > 0) {
    repositories.forEach((repo: Propstype) => {
      if (repo && repo?.owner?.login == 'marcolongitude') {
        arrayPrepared.push({
          id: repo.id,
          name: repo.name,
          description: repo.description,
          language: repo.language,
          svn_url: repo.svn_url,
          owner: { html_url: repo.owner.html_url }
        });
      }
    });
  }

  return arrayPrepared;
};

const SearchAllProjects = () => {
  const allProjectsInfo: Propstype[] = use(getData());

  return (
    <>
      <article className="w-full flex justify-center items-center content-center flex-wrap gap-6 mx-auto">
        {allProjectsInfo &&
          allProjectsInfo.map(
            ({ id, name, description, language, svn_url, owner }) => (
              <CardProject
                key={id}
                title={name}
                des={description}
                category={language}
                repo={svn_url}
                link={owner.html_url}
              />
            )
          )}
      </article>
    </>
  );
};

export default SearchAllProjects;
