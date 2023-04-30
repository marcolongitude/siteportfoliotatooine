import SearchAllProjects from '../content/SearchAllProjects';
import { Text } from '../generics/text';
import AnimationContainer from '../utils/AnimationContainer';
import SectionContainer from '../utils/SectionContainer';
import TitleSectionPageContainer from '../utils/TitleSectionPageContainer';

const phraseText = "Estes são meus projetos, a maioria deles são pessoais que uso para estudos e pesquisas, atualização e prática."

async function getData() {
  const apikey = "Bearer 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"
  const res = await fetch('https://api.github.com/user/repos?per_page=100', { headers: { Authorization: apikey } });
  return res.json();
}

type Propstype = {
  id: any;
  title: any;
  des: any;
  category: any;
  repo: any;
  link: any;
}

const prepareDataRepositories = async () => {
  const repositories = await getData();
  if (repositories.length == 0 || !repositories) return []
  let arrayPrepare: Propstype[] = []
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

const ProjectsSection = async () => {
  const data: Propstype[] = await prepareDataRepositories()
  return (
    <SectionContainer>

      <div className='w-full flex flex-col gap-6'>

        <TitleSectionPageContainer title='Projetos' />

        <AnimationContainer customClassName='w-full flex flex-col gap-5 mb-8'>

          <p className='w-full text-base text-gray-400'>

          </p>
          <Text
            phrase={phraseText}
          />

        </AnimationContainer>

        <SearchAllProjects allProjectsInfo={data} />

      </div>

    </SectionContainer>
  )
}

export default ProjectsSection;