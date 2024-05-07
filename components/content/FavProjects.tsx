import AnimationContainer from '../utils/AnimationContainer';

interface CardProps {
  image: string;
  title: string;
  category: string;
  repo: string;
  link: string;
}

const myGithub = 'https://github.com/marcolongitude?tab=repositories';

const FavProjects = () => {
  return (
    <AnimationContainer customClassName="w-full flex flex-col justify-center text-center lg:items-start mb-16">
      <h2 className="font-bold text-2xl lg:text-2xl tracking-tight mb-8 text-white text-center lg:text-start">
        Projetos
      </h2>

      <div className="flex flex-row gap-2">
        <a
          href={myGithub}
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-300 hover:text-white hover:underline transition-all ease"
        >
          Atualmente meus estudos estão listados no meu GitHub
        </a>
        .
      </div>
    </AnimationContainer>
  );
};

export default FavProjects;
