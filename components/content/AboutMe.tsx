import AnimationContainer from '../utils/AnimationContainer';
import { Text } from '../generics/text';

const phraseAboutMe =
  'Trabalho com tecnologia desde os 16 anos e sempre motivado a aprender novas stacks pelo grande amor ao desenvolvimento.';

const AboutMe = () => {
  return (
    <AnimationContainer customClassName="w-full mb-16">
      <h2 className="font-bold text-2xl tracking-tight mb-8 text-white text-center lg:text-start">
        Sobre
      </h2>
      <Text phrase={phraseAboutMe} />
    </AnimationContainer>
  );
};

export default AboutMe;
