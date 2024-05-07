import CurrentTimeLineExp from '../content/CurrentTimeLineExp';
import { Text } from '../generics/text';
import AnimationContainer from '../utils/AnimationContainer';
import SectionContainer from '../utils/SectionContainer';
import ShowSkills from '../utils/ShowSkills';
import TitleSectionPageContainer from '../utils/TitleSectionPageContainer';

const skills = [
  {
    title: 'Linguagens de programação',
    techs: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'C#', '.NET', 'NET-CORE']
  },
  {
    title: 'Frameworks e bibliotecas',
    techs: ['jQuery', 'React', 'Next.js', 'NET FRAMEWORK']
  },
  {
    title: 'Bibliotecas de JavaScript',
    techs: [
      'Redux',
      'Redux-toolkit',
      'react-router-dom',
      'Formik',
      'Jest',
      'React-hook-form'
    ]
  },
  {
    title: 'Pre-processadores, css style, componentes',
    techs: [
      'Scss',
      'Sass',
      'Less',
      'Bootstrap',
      'Tailwind',
      'ChakraUI',
      'MaterialUI'
    ]
  },
  {
    title: 'Backend stack',
    techs: ['Node.js', 'Express.js', 'Firebase', 'Docker']
  },
  {
    title: 'Softwares e ferramentas',
    techs: [
      'VS Code',
      'Jira',
      'ClickUP',
      'Trello',
      'Git',
      'GitHub',
      'ESLint',
      'Husky',
      'Figma'
    ]
  },
  {
    title: 'Metodologias ágeis e princípios de codificação',
    techs: [
      'SCRUM',
      'Kanban',
      'Clean Code',
      'SOLID principles',
      'Clean Architecture'
    ]
  }
];

const phraseAboutMe =
  'Trabalho com tecnologia desde os 16 anos e sempre motivado a aprender novas stacks pelo grande amor ao desenvolvimento.';
const phraseSkillAndTools =
  'Uma lista de todas as tecnologias que já trabalhei e me empenho em conhecer melhor:';
const phraseInterest =
  'Tenho interesse em aprender tecnoligias cloud nas áreas de deploys C.I. e C.D., gerencimento de containeres etc.';

const AboutSection = () => {
  return (
    <SectionContainer>
      <div className="w-full flex flex-col gap-6">
        <TitleSectionPageContainer title="Sobre" />

        <AnimationContainer customClassName="w-full flex flex-col gap-5 mb-8">
          <Text phrase={phraseAboutMe} />
        </AnimationContainer>

        <CurrentTimeLineExp />

        <AnimationContainer customClassName="w-full flex flex-col gap-5 mb-8">
          <h2 className="font-bold text-2xl md:text-2xl tracking-tight mb-2 text-white text-start">
            Skills e Ferramentas
          </h2>

          <Text phrase={phraseSkillAndTools} />

          <div className="flex flex-col items-start gap-3 mt-3">
            {skills.map(({ title, techs }) => (
              <div key={title}>
                <h3 className="font-bold text-1xl md:text-1xl tracking-tight mb-5 text-white text-start">
                  {title}
                </h3>

                <AnimationContainer customClassName="flex items-center flex-wrap gap-3 mb-5">
                  <ShowSkills skills={techs} />
                </AnimationContainer>
              </div>
            ))}
          </div>
        </AnimationContainer>

        <AnimationContainer customClassName="w-full flex flex-col gap-5">
          <h2 className="font-bold text-2xl md:text-2xl tracking-tight mb-2 text-white text-start">
            Interesses
          </h2>

          <Text phrase={phraseInterest} />
        </AnimationContainer>
      </div>
    </SectionContainer>
  );
};

export default AboutSection;
