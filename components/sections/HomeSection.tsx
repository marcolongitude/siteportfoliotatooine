import AboutMe from '../content/AboutMe';
import ContactMe from '../content/ContactMe';
import CurrentFavTech from '../content/CurrentFavTech';
import CurrentTimeLineExp from '../content/CurrentTimeLineExp';
import FavProjects from '../content/FavProjects';
import Hero from '../content/Hero';
import SectionContainer from '../utils/SectionContainer';

const HomeSection = () => {
  return (
    <SectionContainer>
      <Hero />
      <CurrentFavTech />
      <div className="w-full flex flex-col items-start">
        <AboutMe />
        <CurrentTimeLineExp />
        <FavProjects />
        <ContactMe />
      </div>
    </SectionContainer>
  );
};

export default HomeSection;
