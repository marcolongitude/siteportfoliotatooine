import Image from 'next/image';
import AnimationContainer from '../utils/AnimationContainer';
import { Text } from '../generics/text';

const phraseTop =
  'Sempre em processo de evolução. O gosto pela tecnologia e a busca por novas aptidões.';

const Hero = () => {
  return (
    <div className="w-full flex justify-between flex-col-reverse lg:flex-row items-center">
      <AnimationContainer customClassName="flex flex-col items-center justify-between lg:items-start p-0 lg:pr-8">
        <h1 className="font-bold text-3xl lg:text-5xl text-center lg:text-start tracking-tight mb-3 text-white mx-auto lg:mx-0">
          Marco Aurélio
        </h1>

        <h2 className="flex items-center gap-2 text-1xl lg:text-1xl text-gray-200 mb-8 mx-auto lg:mx-0">
          <span className="font-semibold tracking-tight">Frontend</span>
          <span>Developer</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
            />
          </svg>
        </h2>

        <Text phrase={phraseTop} />
      </AnimationContainer>

      <AnimationContainer customClassName="w-[80px] sm:w-[176px] relative mb-6 lg:mb-0">
        <Image
          alt="Marco Aurélio"
          height={136}
          width={136}
          src="/marcoaurelio.jpg"
          sizes="30vw"
          priority
          className="rounded-full filter grayscale hover:grayscale-0 saturate-0 duration-500 hover:scale-105"
        />
      </AnimationContainer>
    </div>
  );
};
export default Hero;
