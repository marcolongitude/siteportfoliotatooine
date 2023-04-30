import { ReactNode } from 'react';
import SearchAllProjects from '../content/SearchAllProjects';
import { Text } from '../generics/text';
import AnimationContainer from '../utils/AnimationContainer';
import SectionContainer from '../utils/SectionContainer';
import TitleSectionPageContainer from '../utils/TitleSectionPageContainer';

const phraseText = "Estes são meus projetos, a maioria deles são pessoais que uso para estudos e pesquisas, atualização e prática."


const ProjectsSection = () => {

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

        <SearchAllProjects />

      </div>

    </SectionContainer>
  )
}

export default ProjectsSection;