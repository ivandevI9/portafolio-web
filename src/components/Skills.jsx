import styled from 'styled-components';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaGithub, FaNpm, FaNodeJs, FaReact, FaComment, FaUsers, FaTools, FaSyncAlt } from 'react-icons/fa';
import { SiStyledcomponents, SiVite } from 'react-icons/si';
import { FaLightbulb, FaClock, FaMagic, FaHeart, FaHandshake, FaComments, FaChartLine, FaBookOpen, FaRocket, FaClipboardList } from 'react-icons/fa';


const SectionContainer = styled.section`
  padding: 60px 20px;
  background-color: #fff;
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

const SectionTitle = styled.h2`
  font-size: 42px;
  margin-bottom: 40px;
  color: var(--color-primary);
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    width: 0;
    height: 2px;
    background-color: var(--color-secondary);
    transition: width 0.4s ease, left 0.4s ease;
  }
  
  &:hover::after {
    width: 100%;
    left: 0;
  }
  @media (max-width: 480px) { // Cambia a móviles
    font-size: 11vw;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  justify-items: center;
  align-items: center;
  padding: 20px;
  width: 80%;
  justify-content: center;

  @media (max-width: 480px) { // Cambia a móviles
    width: 100%;
  padding: 0;
  }
`;

const SkillCard = styled.div`
width: 100%;
height: auto;
  background-color: #f5f5f5;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  svg {
    font-size: 40px;
    margin-bottom: 10px;
    color: var(--color-primary);
  }

  p {
    font-size: 16px;
    font-weight: bold;
    color: #34495e;
  }

  @media (max-width: 480px) { // Cambia a móviles
    p {
    font-size: 4vw;
  }

  }
`;

const skillsTécnicas = [
  { name: 'HTML', icon: <FaHtml5 /> },
  { name: 'CSS', icon: <FaCss3Alt /> },
  { name: 'JavaScript', icon: <FaJsSquare /> },
  { name: 'Git', icon: <FaGitAlt /> },
  { name: 'GitHub', icon: <FaGithub /> },
  { name: 'npm', icon: <FaNpm /> },
  { name: 'pnpm', icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="currentColor" d="M502 10v140H362V10zm-176 0v140H186V10zm-176 0v140H10V10zm352 176v140H362V186zM512 0H352v160h160zM336 0H176v160h160zM160 0H0v160h160zm352 176H352v160h160zM336 336H176V176h160zm0 16H176v160h160zm176 0H352v160h160zm-352 0H0v160h160z" /></svg> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'RESTful API', icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="currentColor" d="M16 0C7.177 0 0 7.177 0 16s7.177 16 16 16s16-7.177 16-16S24.823 0 16 0m0 1.527c7.995 0 14.473 6.479 14.473 14.473S23.994 30.473 16 30.473S1.527 23.994 1.527 16S8.006 1.527 16 1.527m-4.839 6.296c-.188-.005-.375 0-.568.005c-1.307.079-2.093.693-2.312 1.964c-.151.891-.125 1.796-.188 2.692a9 9 0 0 1-.156 1.38c-.177.813-.525 1.068-1.353 1.109q-.167.018-.324.057v1.948c1.5.073 1.704.605 1.823 2.172c.048.573-.015 1.147.021 1.719q.042.816.208 1.6c.344 1.432 1.745 1.911 3.433 1.624V22.38c-.272 0-.511.005-.74 0c-.579-.016-.792-.161-.844-.713c-.079-.713-.057-1.437-.099-2.156c-.089-1.339-.235-2.651-1.541-3.5c.672-.495 1.161-1.084 1.312-1.865c.109-.547.177-1.099.219-1.651s-.025-1.12.021-1.667c.077-.885.135-1.249 1.197-1.213c.161 0 .317-.021.495-.036V7.834c-.213 0-.411-.005-.604-.011m10.126.016a5.4 5.4 0 0 0-1.089.079v1.697c.329 0 .584 0 .833.005c.439.005.772.177.813.661c.041.443.041.891.083 1.339c.089.896.136 1.796.292 2.677c.136.724.636 1.265 1.255 1.713c-1.088.729-1.411 1.776-1.463 2.953c-.032.801-.052 1.615-.093 2.427c-.037.74-.297.979-1.043.995c-.208.011-.411.027-.64.041v1.74c.432 0 .833.027 1.235 0c1.239-.073 1.995-.677 2.239-1.885a15 15 0 0 0 .183-2.005c.041-.615.036-1.235.099-1.844c.093-.953.532-1.349 1.484-1.411q.133-.018.267-.057v-1.953c-.161-.021-.271-.037-.391-.041c-.713-.032-1.068-.272-1.251-.948a6.6 6.6 0 0 1-.197-1.324c-.052-.823-.047-1.656-.099-2.479c-.109-1.588-1.063-2.339-2.516-2.38zm-9.188 7.036c-1.432 0-1.536 2.109-.115 2.245h.079a1.103 1.103 0 0 0 1.167-1.037v-.061a1.13 1.13 0 0 0-1.104-1.147zm3.88 0a1.083 1.083 0 0 0-1.115 1.043c0 .036 0 .067.005.104c0 .672.459 1.099 1.147 1.099c.677 0 1.104-.443 1.104-1.136c-.005-.672-.459-1.115-1.141-1.109zm3.948 0a1.15 1.15 0 0 0-1.167 1.115c0 .625.505 1.131 1.136 1.131h.011c.567.099 1.135-.448 1.172-1.104c.031-.609-.521-1.141-1.152-1.141z" /></svg> },
  { name: 'JSON', icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeWidth="2" d="M14 19h2a2 2 0 0 0 2-2v-2.438a2 2 0 0 1 1.515-1.94l1.515-.38c.252-.063.252-.421 0-.485l-1.515-.378A2 2 0 0 1 18 9.439V5h-4m-4 0H8a2 2 0 0 0-2 2v2.438a2 2 0 0 1-1.515 1.94l-1.515.38c-.252.063-.252.421 0 .485l1.515.378A2 2 0 0 1 6 14.561V19h4" /></svg> },
  { name: 'React', icon: <FaReact /> },
  { name: 'Styled Components', icon: <SiStyledcomponents /> },
  { name: 'Vite', icon: <SiVite /> },
];

const skillsBlandas = [
  { name: 'Comunicación efectiva', icon: <FaComment /> },
  { name: 'Trabajo en equipo', icon: <FaUsers /> },
  { name: 'Resolución de problemas', icon: <FaTools /> },
  { name: 'Adaptabilidad', icon: <FaSyncAlt /> },
  { name: 'Pensamiento crítico', icon: <FaLightbulb /> },
  { name: 'Gestión del tiempo', icon: <FaClock /> },
  { name: 'Creatividad', icon: <FaMagic /> },
  { name: 'Empatía', icon: <FaHeart /> },
  { name: 'Mentalidad de crecimiento', icon: <FaChartLine /> },
  { name: 'Aprendizaje activo', icon: <FaBookOpen /> },
  { name: 'Emprendimiento creativo', icon: <FaRocket /> }, // Puedes cambiar el ícono si deseas
  { name: 'Organización', icon: <FaClipboardList /> }, // Puedes cambiar el ícono si deseas

];

const SkillSection = styled.section`
 width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 20px;

h2{
  color: black;
}

@media (max-width: 480px) { // Cambia a móviles
  h2{
    font-size: 7vw;
  }
    
  }
  
`

const Skills = () => {
  return (
    <SectionContainer id="skills">
      <SectionTitle>Skills</SectionTitle>
      <SkillSection>
        <h2>Habilidades Técnicas</h2>
        <SkillsGrid>
          {skillsTécnicas.map((skill, index) => (
            <SkillCard key={index}>
              {skill.icon}
              <p>{skill.name}</p>
            </SkillCard>
          ))}
        </SkillsGrid>
      </SkillSection>

      <SkillSection>
        <h2>Habilidades Blandas</h2>
        <SkillsGrid>
          {skillsBlandas.map((skill, index) => (
            <SkillCard key={index}>
              {skill.icon}
              <p>{skill.name}</p>
            </SkillCard>
          ))}
        </SkillsGrid>
      </SkillSection>

    </SectionContainer>
  );
};

export default Skills;