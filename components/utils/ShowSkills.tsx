import { Text } from '../generics/text';

const ShowSkills = ({ skills }: { skills: string | string[] }) => {
  if (skills instanceof Array) {
    return (
      <>
        {skills.map((skill, index) => (
          <div key={index}>
            <Text phrase={skill} />
          </div>
        ))}
      </>
    );
  }

  return <div>{skills}</div>;
};

export default ShowSkills;
