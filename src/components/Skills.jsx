import styled from 'styled-components';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaGithub, FaNpm, FaNodeJs, FaReact, FaComment, FaUsers, FaTools, FaSyncAlt } from 'react-icons/fa';
import { SiStyledcomponents, SiVite } from 'react-icons/si';
import { FaLightbulb, FaClock, FaMagic, FaHeart, FaHandshake, FaComments, FaChartLine, FaBookOpen, FaRocket, FaClipboardList } from 'react-icons/fa';


const SectionContainer = styled.section`
  padding: 120px 20px; /* Aumentar el padding superior para dejar espacio */
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
    font-size: 10vw;
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
  { name: 'Conventional Commits', icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 0C5.382 0 0 5.382 0 12s5.382 12 12 12s12-5.382 12-12S18.618 0 12 0m0 1.6c5.753 0 10.4 4.647 10.4 10.4S17.753 22.4 12 22.4S1.6 17.753 1.6 12S6.247 1.6 12 1.6"/></svg> }
];

const skillsTécnicasEnDesarrollo = [
  { name: 'Next.js', icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M18.665 21.978A11.94 11.94 0 0 1 12 24C5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251zm-3.332-8.533l1.6 2.061V7.2h-1.6z"/></svg>  },
  { name: 'TypeScript', icon: <svg xmlns="http://www.w3.org/2000/svg" width="1.02em" height="1em" viewBox="0 0 65 64"><path fill="currentColor" d="M58.55 0H7.05A6.25 6.25 0 0 0 .8 6.25v51.5A6.25 6.25 0 0 0 7.05 64h51.5a6.25 6.25 0 0 0 6.25-6.25V6.25A6.25 6.25 0 0 0 58.55 0M37.925 35.5h-8v22.875H23.55V35.5h-8v-5.125h22.375zM58.55 54.263c-.5 1.125-1.362 1.962-2.375 2.625c-1 .612-2.125 1.087-3.5 1.375c-1.375.287-2.75.425-4.25.425s-3-.126-4.375-.388s-2.612-.65-3.625-1.175v-6.006q-.12-.093-.237-.189l.237-.055v.244a11.8 11.8 0 0 0 3.513 1.936c1.25.475 2.624.712 4 .712c.874 0 1.537-.075 2.124-.212c.613-.15 1.1-.35 1.5-.6q.601-.375.888-.9q.286-.525.287-1.125a2.47 2.47 0 0 0-.474-1.5c-.288-.425-.713-.825-1.25-1.187q-.75-.544-1.875-1.05c-.75-.338-1.513-.688-2.375-1.038c-2.125-1-3.8-2-4.875-3.375c-1.088-1.25-1.625-2.875-1.625-4.75c0-1.5.287-2.7.875-3.75c.625-1.125 1.362-1.95 2.375-2.625c1-.687 2.125-1.187 3.5-1.5a19 19 0 0 1 4.25-.475c1.5 0 2.75.087 3.875.262s2.175.45 3.125.813v5.875a8.3 8.3 0 0 0-1.5-.863a14 14 0 0 0-3.5-.975c-.55-.078-1.1-.117-1.625-.117c-.763 0-1.413.063-2 .2c-.6.138-1.1.325-1.5.575s-.712.537-.938.887q-.338.525-.338 1.163c0 .462.125.875.375 1.25c.25.362.6.712 1.063 1.05c.413.325.975.65 1.625.975c.75.325 1.425.65 2.25.988c1.125.474 2.125 1 3 1.5a10 10 0 0 1 2.25 1.75c.675.625 1.163 1.375 1.5 2.25c.338.875.513 1.862.513 3c0 1.625-.388 2.875-.888 4"/></svg>  },
  { name: 'Tailwind CSS', icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4.86q-4.76 0-5.95 4.76q1.785-2.38 4.165-1.785c.905.226 1.552.883 2.268 1.61C13.651 10.63 15 12 17.95 12q4.76 0 5.95-4.76q-1.785 2.38-4.165 1.785c-.906-.226-1.552-.883-2.27-1.61C16.3 6.23 14.95 4.86 12 4.86M6.05 12Q1.29 12 .1 16.76q1.785-2.38 4.165-1.785c.905.226 1.552.883 2.269 1.61C7.7 17.77 9.05 19.14 12 19.14q4.76 0 5.95-4.76q-1.785 2.38-4.165 1.785c-.906-.226-1.552-.883-2.27-1.61C10.35 13.37 9 12 6.05 12"/></svg> },
  { name: 'Redux', icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"><path fill="currentColor" d="M290.583 477.715c9.087-6.49 22.07-16.877 29.21-23.368c124.456 49.444 165.06-47.194 161.818-84.077c-3.59-40.84-54.299-157.39-226.728-157.393c-8.108 19.003-31.817 28.536-51.427 17.177c-24.066-13.94-24.066-48.977 0-62.916c18.695-10.83 41.111-2.668 50.188 14.581c104.685-.532 222.046 43.93 254.864 167.65c23.67 89.225-75.634 193.24-217.925 128.346m64.406-126.193c17.32-2.041 32.333-16.497 32.333-36.085c0-27.879-30.405-45.398-54.598-31.458c-21.223 12.228-23.823 40.69-7.81 56.904C267.471 447.981 139.18 489.856 71.48 449.208c-37.49-22.51-76.15-103.092 13.982-177.262c-2.597-8.438-6.492-22.719-8.439-33.105c-162.047 122.116-45.399 316.424 137.312 240.755c49.398-20.458 102.958-56.213 140.653-128.074m-197.604 41.46c24.227 13.94 54.675-3.58 54.675-31.458c0-23.266-21.205-39.3-42.303-35.873C35.742 75.325 317.897-73.33 354.196 163.544l32.456 9.737C363.052-17.261 220.585.174 174.945 38.765C140.74 67.688 49.3 169.46 143.772 343.792c-9.103 16.39-4.566 38.73 13.613 49.19"/></svg>  },
  { name: 'ChatGPT', icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" strokeLinejoin="round" d="M18.38 27.94v-14.4l11.19-6.46c6.2-3.58 17.3 5.25 12.64 13.33"/><path fill="none" stroke="currentColor" strokeLinejoin="round" d="m18.38 20.94l12.47-7.2l11.19 6.46c6.2 3.58 4.1 17.61-5.23 17.61"/><path fill="none" stroke="currentColor" strokeLinejoin="round" d="m24.44 17.44l12.47 7.2v12.93c0 7.16-13.2 12.36-17.86 4.28"/><path fill="none" stroke="currentColor" strokeLinejoin="round" d="M30.5 21.2v14.14L19.31 41.8c-6.2 3.58-17.3-5.25-12.64-13.33"/><path fill="none" stroke="currentColor" strokeLinejoin="round" d="m30.5 27.94l-12.47 7.2l-11.19-6.46c-6.21-3.59-4.11-17.61 5.22-17.61"/><path fill="none" stroke="currentColor" strokeLinejoin="round" d="m24.44 31.44l-12.47-7.2V11.31c0-7.16 13.2-12.36 17.86-4.28"/></svg> },
  { name: 'Jest', icon:<svg xmlns="http://www.w3.org/2000/svg" width="0.88em" height="1em" viewBox="0 0 450 512"><path fill="currentColor" d="M242.377 187.713L178.767 0h270.246l-63.83 188.259a64 64 0 0 0-8.083 2.505L314.045 62.133l-63.238 127.87a64 64 0 0 0-8.43-2.29M34.55 494.993c85.001 59.705 179.284-55.824 307.71-70.378c73.75-4.37 123.878-49.518 95.316-119.409c-53.105 32.709-102.736-10.153-102.389-53.163h-40.353c-1.325 38.399-30.208 68.609-74.979 64.118c-35.044 52.425-75.66 81.88-121.746 96.852c-31.149-14.375-60.462-49.39-47.172-96.158a64.7 64.7 0 0 1-16.855-4.231c-42.842 79.999-48.136 143.223.468 182.369m63.281-242.944c0-30.385-33.119-49.478-59.47-34.286s-26.353 53.38 0 68.571c26.351 15.193 59.47-3.9 59.47-34.285m171.408-.377c0-30.384-33.12-49.478-59.471-34.285s-26.352 53.379 0 68.57c26.352 15.193 59.47-3.9 59.47-34.285m170.764 0c0-30.384-33.12-49.478-59.471-34.285s-26.352 53.379 0 68.57c26.352 15.193 59.47-3.9 59.47-34.285"/></svg>  },
  { name: 'React Testing Library', icon: <svg xmlns="http://www.w3.org/2000/svg" width="1.48em" height="1em" viewBox="0 0 256 174"><defs><path id="IconifyId192bf1945d3d0be470" d="M40.822 49.107s-12.744 3.42-19.116 3.42s-18.882-3.42-18.882-3.42A1.965 1.965 0 0 1 .86 47.143V2.677A1.965 1.965 0 0 1 2.824.712h37.998c1.085 0 1.964.88 1.964 1.965v44.466a1.964 1.964 0 0 1-1.964 1.964"/><path id="IconifyId192bf1945d3d0be471" d="M53.282 84.012s-11.348 2.281-17.023 2.281c-5.573 0-16.719-2.281-16.719-2.281C9.125 84.012.682 77.85.682 67.435v-30.87C.682 16.85 16.664.868 36.377.868C56.16.87 72.14 16.85 72.14 36.564v30.871c0 10.415-8.443 16.577-18.858 16.577"/><path id="IconifyId192bf1945d3d0be472" fill="#00D8FE" d="M69.51 119.463L64.802 95.35c-1.186-10.233-8.907-19.86-18.985-22.577l-.822-.221c-.663-.181-1.403-.389-2.2-.62a139 139 0 0 1-6.667-2.1c-2.555-.882-4.695-1.736-6.259-2.52a14 14 0 0 1-1.534-.872c-.34-.228-.563-.417-.652-.527c-1.853-2.271-2.159-3.534-2.159-7.146c0-.124.061-.275.166-.39c.023-.024 21.316 5.544 21.316 5.544c7.107 1.618 13.287 4.789 18.182 9.685c5.748 5.75 9.619 13.763 11.236 24.265l4.532 33.288c1.244 10.143 5.784 16.854 13.238 16.854c8.239 0 12.684-4.146 12.706-13.108l.812-14.201l17.541-.123v8.609c0 8.44-2.552 16.85-7.231 23.054c-5.237 6.942-12.802 10.828-22.416 10.828a23 23 0 0 1-2.86-.173c-12.215-.745-20.551-9.07-28.215-25.839l-10.944-26.232c-3.613-6.913-11.022-12.41-19.007-15.07l-8.989-1.93c-2.986-.628-6.279-2.3-7.495-3.803c-1.575-1.945-2.6-4.433-2.6-6.56c0-.262.258-1.003.64-1.622c.117-.187.234-.349.342-.475l19.531 5.017c12.28 2.399 19.784 7.682 25.527 17.622z"/><path id="IconifyId192bf1945d3d0be473" fill="#00D8FE" d="m185.703 119.463l4.707-24.113c1.186-10.233 8.907-19.86 18.985-22.577q1.515-.405 3.023-.84c2.276-.66 4.55-1.369 6.666-2.1c2.556-.883 4.695-1.737 6.26-2.52a14 14 0 0 0 1.533-.873c.34-.228.563-.417.652-.527c1.853-2.271 2.159-3.534 2.159-7.146a.6.6 0 0 0-.166-.39c-.023-.024-21.315 5.544-21.315 5.544c-7.108 1.618-13.288 4.789-18.183 9.685c-5.748 5.75-9.618 13.763-11.236 24.265l-4.532 33.288c-1.244 10.143-5.784 16.854-13.238 16.854c-8.239 0-12.683-4.146-12.706-13.108l-.811-14.201l-17.542-.123v8.609c0 8.44 2.553 16.85 7.232 23.054c5.236 6.942 12.801 10.828 22.415 10.828q1.478 0 2.86-.173c12.215-.745 20.551-9.07 28.215-25.839l10.944-26.232c3.614-6.913 11.023-12.41 19.007-15.07l8.99-1.93c2.985-.628 6.278-2.3 7.495-3.803c1.574-1.945 2.598-4.433 2.598-6.56c0-.262-.257-1.003-.64-1.622a4 4 0 0 0-.34-.475l-19.532 5.017c-12.28 2.399-19.784 7.682-25.527 17.622z"/></defs><path fill="#053949" d="M75.537 157.505c4.768 6.654 11.494 10.273 20.07 10.273c11.112 0 20.058-4.595 26.172-12.701c5.325-7.06 8.18-16.467 8.18-25.887v-13.348l-26.694.187l-1.07 18.74c0 6.407-2.274 8.538-8 8.538c-4.436 0-7.577-4.643-8.572-12.752l-4.541-33.36C79.31 85.693 74.995 76.76 68.516 70.28c-5.551-5.553-12.514-9.13-20.348-10.918L26.165 53.56c-3.103 0-5.347 2.437-5.347 5.208c0 4.594.545 6.844 3.218 10.12c.765.938 1.999 1.768 3.725 2.633c1.782.892 4.095 1.816 6.83 2.76c2.2.761 4.548 1.494 6.896 2.173q1.45.42 2.908.811c8.373 2.257 14.802 10.298 15.741 18.706l7.626 39.076c1.19 9.134 3.73 16.817 7.775 22.459m54.203-41.021h-25.544l.038 2.39l.242 15.108c0 6.323-4.585 10.203-10.773 10.203c-4.448 0-8.618-4.69-13.591-14.435l-14.445-27.998c-6.448-11.189-15.102-17.303-28.62-19.958l-20.483-5.262c-3.27 0-5.773 4.047-5.773 6.934c0 3.298 1.438 6.792 3.647 9.52c1.995 2.466 6.232 4.616 10.178 5.445l8.599 1.833c6.832 2.307 13.164 7.01 16.11 12.567l10.878 26.077c4.1 8.983 8.296 15.557 13.313 20.302c5.878 5.56 12.802 8.45 21.064 8.45c7.57 0 15.425-2.693 21.501-7.517c6.754-5.362 10.9-12.948 11.451-21.951z"/><use href="#IconifyId192bf1945d3d0be472"/><use href="#IconifyId192bf1945d3d0be472"/><path fillOpacity=".25" d="M16.414 80.975a12.6 12.6 0 0 0 1.434 1.992c1.32 1.503 4.896 3.174 8.138 3.801l9.76 1.93c8.67 2.662 16.713 8.159 20.637 15.071l11.882 26.232c1.616 3.257 3.26 6.195 4.957 8.822a73 73 0 0 1-.803-4.927l-2.91-14.904l-7.973-15.456c-5.743-9.94-13.248-15.223-25.527-17.622l-19.531-5.016z"/><path fillOpacity=".25" d="M111.606 120.673v13.223c0 9.08-3.662 18.352-16.544 18.352c-7.839 0-15.823-4.825-18.427-22.99l-5.064-34.892c-1.314-10.233-11.5-24.523-22.671-27.24c-.428-.102-15.944-4.677-17.677-5.46c-.69-.312-2.325-1.29-2.424-1.4c-.6-.663-1.053-1.24-1.395-1.815c2.54.654 20.559 5.47 20.559 5.47c6.954 1.618 13 4.789 17.789 9.685c5.624 5.75 9.41 13.763 10.993 24.265l4.434 33.288c1.218 10.143 5.66 16.854 12.952 16.854c8.06 0 12.41-4.146 12.43-13.108l.795-14.201z"/><path fill="#053949" d="M130.43 132.013v-16.47h-27.294v2.353c0 21.18-5.805 30.352-18.824 30.352c-11.488 0-19.39-8.207-24.42-21.672c-5.74-15.362-14.442-22.328-31.41-22.328H5.254c-2.935 0-5.253 2.421-5.253 5.345a13.73 13.73 0 0 0 4.04 9.739a13.77 13.77 0 0 0 9.766 4.036l14.733-.06c3.062 0 6.021 2.24 9.061 6.82c2.534 3.817 4.668 8.34 8.06 16.559c3.04 7.368 7.21 13.615 12.784 18.321c6.82 5.76 15.406 8.888 25.868 8.888c11.263 0 22.72-4.106 31.373-11.293c9.34-7.76 14.745-18.467 14.745-30.59"/><path fill="#00D8FE" d="M125.724 120.248v11.765c0 10.671-4.746 20.075-13.046 26.97c-7.805 6.483-18.197 10.207-28.366 10.207c-9.352 0-16.862-2.737-22.832-7.777c-4.94-4.17-8.696-9.8-11.47-16.522c-3.507-8.498-5.73-13.21-8.49-17.365c-3.821-5.759-8.002-8.925-12.991-8.925l-14.733.061a9.06 9.06 0 0 1-6.43-2.66a9.02 9.02 0 0 1-2.66-6.41c0-.368.258-.638.547-.638h23.23c14.863 0 21.909 5.64 27 19.269c2.433 6.513 5.629 12.125 9.747 16.402c5.165 5.364 11.524 8.33 19.082 8.33c15.635 0 23.02-10.83 23.504-32.707z"/><path fillOpacity=".25" d="M4.851 109.159c.43.545 1.036 1.035 1.794 1.723c1.621 1.47 3.802 2.308 6.138 2.308h19.294c10.755 0 16.347 8.402 23.371 23.87c2.648 5.828 9.869 19.894 30.276 19.894s26.353-19.922 26.353-29.176v-7.53h-4.261c-.485 21.877-7.869 32.706-23.504 32.706c-7.558 0-13.917-2.965-19.082-8.33c-4.118-4.276-7.314-9.888-9.747-16.401c-5.091-13.629-12.137-19.269-27-19.269H5.253c-.154 0-.3.077-.402.205"/><path fill="#053949" d="M179.675 157.505c-4.768 6.654-11.494 10.273-20.069 10.273c-11.113 0-20.06-4.595-26.173-12.701c-5.325-7.06-8.18-16.467-8.18-25.887v-13.348l26.694.187l1.07 18.74c0 6.407 2.274 8.538 8 8.538c4.437 0 7.577-4.643 8.572-12.752l4.541-33.36c1.772-11.502 6.087-20.435 12.566-26.916c5.552-5.553 12.514-9.13 20.349-10.918l22.003-5.802c3.103 0 5.346 2.437 5.346 5.208c0 4.594-.545 6.844-3.218 10.12c-.765.938-1.999 1.768-3.725 2.633c-1.781.892-4.095 1.816-6.83 2.76c-2.2.761-4.548 1.494-6.895 2.173q-1.45.42-2.909.811c-8.373 2.257-14.801 10.298-15.74 18.706l-7.627 39.076c-1.189 9.134-3.73 16.817-7.775 22.459m-54.203-41.021h25.544l-.038 2.39l-.242 15.108c0 6.323 4.585 10.203 10.774 10.203c4.448 0 8.618-4.69 13.59-14.435l14.445-27.998c6.448-11.189 15.102-17.303 28.62-19.958l20.483-5.262c3.271 0 5.773 4.047 5.773 6.934c0 3.298-1.438 6.792-3.646 9.52c-1.996 2.466-6.233 4.616-10.18 5.445l-8.597 1.833c-6.832 2.307-13.165 7.01-16.11 12.567l-10.88 26.077c-4.1 8.983-8.295 15.557-13.312 20.302c-5.878 5.56-12.802 8.45-21.064 8.45c-7.569 0-15.424-2.693-21.501-7.517c-6.754-5.362-10.9-12.948-11.451-21.951z"/><use href="#IconifyId192bf1945d3d0be473"/><use href="#IconifyId192bf1945d3d0be473"/><path fillOpacity=".25" d="M238.798 80.975a12.7 12.7 0 0 1-1.433 1.992c-1.322 1.503-4.897 3.174-8.139 3.801l-9.76 1.93c-8.669 2.662-16.713 8.159-20.637 15.071l-11.882 26.232c-1.616 3.257-3.26 6.195-4.956 8.822a73 73 0 0 0 .802-4.927l2.91-14.904l7.973-15.456c5.743-9.94 13.248-15.223 25.527-17.622l19.532-5.017z"/><path fillOpacity=".25" d="M143.606 120.673v13.223c0 9.08 3.662 18.352 16.544 18.352c7.84 0 15.824-4.825 18.427-22.99l5.064-34.892c1.314-10.233 11.501-24.523 22.671-27.24c.428-.102 15.944-4.677 17.678-5.46c.689-.312 2.324-1.29 2.424-1.4c.6-.663 1.052-1.24 1.394-1.815c-2.54.654-20.559 5.47-20.559 5.47c-6.953 1.618-13 4.789-17.789 9.685c-5.623 5.75-9.41 13.763-10.993 24.265l-4.434 33.288c-1.217 10.143-5.659 16.854-12.952 16.854c-8.06 0-12.409-4.146-12.43-13.108l-.795-14.201z"/><path fill="#053949" d="M124.783 132.013v-16.47h27.294v2.353c0 21.18 5.804 30.352 18.823 30.352c11.489 0 19.39-8.207 24.42-21.672c5.74-15.362 14.442-22.328 31.41-22.328h23.23c2.935 0 5.252 2.421 5.252 5.345a13.73 13.73 0 0 1-4.04 9.739a13.77 13.77 0 0 1-9.766 4.036l-14.733-.06c-3.062 0-6.021 2.24-9.061 6.82c-2.534 3.817-4.668 8.34-8.06 16.559c-3.04 7.368-7.209 13.615-12.784 18.321c-6.82 5.76-15.406 8.888-25.868 8.888c-11.263 0-22.72-4.106-31.372-11.293c-9.342-7.76-14.745-18.467-14.745-30.59"/><path fill="#00D8FE" d="M129.488 120.248v11.765c0 10.671 4.746 20.075 13.047 26.97c7.804 6.483 18.196 10.207 28.365 10.207c9.352 0 16.862-2.737 22.832-7.777c4.94-4.17 8.697-9.8 11.47-16.522c3.508-8.498 5.73-13.21 8.49-17.365c3.821-5.759 8.003-8.925 12.991-8.925l14.733.061a9.06 9.06 0 0 0 6.431-2.66a9.02 9.02 0 0 0 2.66-6.41c0-.368-.259-.638-.548-.638h-23.23c-14.863 0-21.909 5.64-27 19.269c-2.433 6.513-5.629 12.125-9.747 16.402c-5.165 5.364-11.524 8.33-19.082 8.33c-15.635 0-23.02-10.83-23.504-32.707z"/><path fillOpacity=".25" d="M250.36 109.159c-.428.545-1.034 1.035-1.793 1.723c-1.621 1.47-3.802 2.308-6.137 2.308h-19.294c-10.756 0-16.348 8.402-23.372 23.87c-2.648 5.828-9.868 19.894-30.276 19.894c-20.407 0-26.352-19.922-26.352-29.176v-7.53h4.26c.485 21.877 7.869 32.706 23.504 32.706c7.558 0 13.917-2.965 19.083-8.33c4.117-4.276 7.313-9.888 9.746-16.401c5.091-13.629 12.137-19.269 27-19.269h23.23c.154 0 .3.077.402.205"/><path fill="#00D8FE" d="M145.663 125.415s-12.743 3.42-19.116 3.42c-6.371 0-18.881-3.42-18.881-3.42a1.965 1.965 0 0 1-1.965-1.965V78.984a1.965 1.965 0 0 1 1.965-1.965h37.997c1.085 0 1.965.88 1.965 1.965v44.466a1.964 1.964 0 0 1-1.965 1.965"/><path fill="#043849" d="M139.68 132.646c-1.524.327-2.977.615-4.35.86c-3.599.645-6.501.976-8.783.976c-2.26 0-5.109-.325-8.622-.957q-2.082-.375-4.412-.883A166 166 0 0 1 106.69 131a7.61 7.61 0 0 1-6.635-7.55V78.985a7.61 7.61 0 0 1 7.612-7.612h37.997a7.61 7.61 0 0 1 7.612 7.612v44.463a7.61 7.61 0 0 1-6.656 7.555q-3.451.893-6.939 1.644m6.168-7.24a1.965 1.965 0 0 0 1.78-1.958V78.984c0-1.085-.88-1.965-1.965-1.965h-37.997c-1.085 0-1.965.88-1.965 1.965v44.466c0 1.015.776 1.862 1.776 1.956l.247.023l.239.065c.048.014.103.028.25.067q3.236.85 6.503 1.564c1.486.323 2.893.605 4.21.842c3.21.578 5.753.868 7.621.868c1.89 0 4.49-.296 7.788-.887a124 124 0 0 0 4.158-.823a167 167 0 0 0 6.903-1.64l.223-.058z"/><g transform="translate(104.841 76.307)"><mask id="IconifyId192bf1945d3d0be474" fill="#fff"><use href="#IconifyId192bf1945d3d0be470"/></mask><path fillOpacity=".25" d="M.647 14.765H11L5.353 54.294H.647z" mask="url(#IconifyId192bf1945d3d0be474)"/></g><ellipse cx="105.232" cy="98.755" fill="#FFF" rx="11.785" ry="11.763"/><path fill="#063A49" d="M105.232 113.342c-8.067 0-14.608-6.53-14.608-14.587s6.541-14.586 14.608-14.586s14.608 6.53 14.608 14.586s-6.541 14.587-14.608 14.587m0-5.647c4.95 0 8.961-4.004 8.961-8.94s-4.01-8.939-8.961-8.939c-4.95 0-8.961 4.003-8.961 8.94c0 4.935 4.01 8.939 8.961 8.939"/><circle cx="105.232" cy="98.765" r="3.688" fill="#053949"/><ellipse cx="147.585" cy="98.755" fill="#FFF" rx="11.785" ry="11.763"/><path fill="#063A49" d="M147.585 113.342c-8.067 0-14.609-6.53-14.609-14.587s6.542-14.586 14.609-14.586s14.608 6.53 14.608 14.586s-6.541 14.587-14.608 14.587m0-5.647c4.95 0 8.961-4.004 8.961-8.94s-4.01-8.939-8.961-8.939c-4.95 0-8.961 4.003-8.961 8.94c0 4.935 4.01 8.939 8.96 8.939"/><circle cx="147.585" cy="98.765" r="3.688" fill="#053949"/><path fill="#043849" d="M138.05 95.505q-1.92.311-3.853.572c-3.162.423-5.707.641-7.685.641c-1.954 0-4.463-.218-7.574-.643q-1.786-.243-3.789-.572a192 192 0 0 1-5.943-1.072c-13.818-.249-23.918-9.297-23.918-22.218v-30.87C85.288 18.508 103.798 0 126.631 0c22.885 0 41.409 18.494 41.409 41.342v30.871c0 12.924-10.106 21.974-23.93 22.219q-3.023.584-6.06 1.073m5.742-6.716c11.012-.106 18.601-6.84 18.6-16.576v-30.87c0-19.728-15.993-35.696-35.761-35.696c-19.714 0-35.695 15.981-35.695 35.695v30.871c0 9.734 7.587 16.469 18.596 16.575l.266.003l.26.052l.223.044q2.884.568 5.782 1.043q1.93.316 3.638.55c2.88.393 5.156.591 6.811.591c1.684 0 4-.198 6.933-.591a142 142 0 0 0 3.706-.55q3.073-.495 6.129-1.09l.253-.049z"/><g transform="translate(90.253 4.778)"><mask id="IconifyId192bf1945d3d0be475" fill="#fff"><use href="#IconifyId192bf1945d3d0be471"/></mask><path fill="#00D8FE" d="M53.282 84.012s-11.348 2.281-17.023 2.281c-5.573 0-16.719-2.281-16.719-2.281C9.125 84.012.682 77.85.682 67.435v-30.87C.682 16.85 16.664.868 36.377.868C56.16.87 72.14 16.85 72.14 36.564v30.871c0 10.415-8.443 16.577-18.858 16.577" mask="url(#IconifyId192bf1945d3d0be475)"/></g><g transform="translate(90.253 4.778)"><mask id="IconifyId192bf1945d3d0be476" fill="#fff"><use href="#IconifyId192bf1945d3d0be471"/></mask><path fillOpacity=".25" d="M10.517 66.494V26.211c0-18.056 13.41-32.972 30.811-35.354a36 36 0 0 0-4.883-.341h-.068C16.664-9.484.682 6.496.682 26.21v40.283c0 10.415 8.443 18.858 18.858 18.858h9.834c-10.414 0-18.857-8.443-18.857-18.858" mask="url(#IconifyId192bf1945d3d0be476)"/></g><g transform="translate(90.253 4.778)"><mask id="IconifyId192bf1945d3d0be477" fill="#fff"><use href="#IconifyId192bf1945d3d0be471"/></mask><circle cx="32.57" cy="65.982" r="3.688" fillOpacity=".25" mask="url(#IconifyId192bf1945d3d0be477)"/></g><g transform="translate(90.253 4.778)"><mask id="IconifyId192bf1945d3d0be478" fill="#fff"><use href="#IconifyId192bf1945d3d0be471"/></mask><circle cx="22.688" cy="46.688" r="3.688" fillOpacity=".25" mask="url(#IconifyId192bf1945d3d0be478)"/></g><g transform="translate(90.253 4.778)"><mask id="IconifyId192bf1945d3d0be479" fill="#fff"><use href="#IconifyId192bf1945d3d0be471"/></mask><circle cx="36.411" cy="28.685" r="3.688" fillOpacity=".25" mask="url(#IconifyId192bf1945d3d0be479)"/></g><g transform="translate(90.253 4.778)"><mask id="IconifyId192bf1945d3d0be4710" fill="#fff"><use href="#IconifyId192bf1945d3d0be471"/></mask><circle cx="49.982" cy="47.629" r="3.688" fillOpacity=".25" mask="url(#IconifyId192bf1945d3d0be4710)"/></g></svg>  },
  { name: 'GitHub Actions', icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="#4A7EBF" d="M53.604 0c29.604 0 53.604 23.992 53.604 53.59c0 29.09-23.189 52.75-52.093 53.553c0 2.461.109 7.111 1.501 9.92c1.933 3.893 13.525 11.144 24.892 11.144h4.084c2.567-18.271 18.257-32.332 37.24-32.332c18.906 0 34.55 13.946 37.211 32.11h21.13c2.661-18.164 18.304-32.11 37.21-32.11c20.775 0 37.617 16.837 37.617 37.607s-16.842 37.606-37.617 37.606c-18.906 0-34.55-13.948-37.21-32.11h-21.129c-2.66 18.162-18.305 32.11-37.212 32.11c-18.87 0-34.494-13.893-37.199-32.007l-4.515.135c-7.435-.056-15.29-2.042-21.598-6.328c-1.72-1.169-3.415-2.397-5.182-3.56v2.441c-.01.79-.153 12.657-.164 25.833v2.79c.005 8.641.073 17.545.277 24.04c.446 14.246 12.034 25.745 24.822 28.436c1.663.35 4.52.394 6.321.238c2.571-18.264 18.26-32.32 37.238-32.32c20.774 0 37.616 16.838 37.616 37.607c0 20.77-16.842 37.607-37.616 37.607c-18.769 0-34.323-13.744-37.153-31.714h-3.254c-24.436-1.334-39.628-23.746-39.363-41.923c.334-22.877.082-45.764.079-68.646v-7.565C18.546 101.286 0 79.606 0 53.591C0 23.992 23.999 0 53.604 0m69.228 191.78c-14.701 0-26.62 11.915-26.62 26.613s11.919 26.614 26.62 26.614s26.62-11.915 26.62-26.614c0-14.698-11.918-26.614-26.62-26.614m0-84.912c-14.701 0-26.62 11.915-26.62 26.614c0 14.697 11.919 26.613 26.62 26.613s26.62-11.916 26.62-26.613c0-14.699-11.918-26.614-26.62-26.614m95.551 0c-14.702 0-26.62 11.915-26.62 26.614c0 14.697 11.918 26.613 26.62 26.613s26.621-11.916 26.621-26.613c0-14.699-11.918-26.614-26.62-26.614m15.161 15.408a5.496 5.496 0 0 1 .17 7.606l-.16.168l-16.31 16.345a5.5 5.5 0 0 1-7.576.198l-.172-.163l-7.985-7.86a5.496 5.496 0 0 1-.06-7.773a5.5 5.5 0 0 1 7.606-.22l.168.16l4.092 4.027l12.452-12.477a5.5 5.5 0 0 1 7.775-.01m-95.99-.08a5.497 5.497 0 0 1 .17 7.606l-.16.168l-16.31 16.344a5.5 5.5 0 0 1-7.576.198l-.172-.163l-7.985-7.86a5.498 5.498 0 0 1 7.546-7.992l.168.16l4.093 4.027l12.451-12.478a5.5 5.5 0 0 1 7.775-.01M53.604 10.993c-23.532 0-42.608 19.07-42.608 42.598c0 23.525 19.076 42.597 42.608 42.597s42.608-19.072 42.608-42.597c0-23.527-19.076-42.598-42.608-42.598M49.171 28.13A744 744 0 0 1 75.7 44.841c7.308 4.82 7.29 13.563-.1 18.394a609 609 0 0 1-27.058 16.712c-7.455 4.34-15.8-.65-16.002-9.344c-.13-5.602-.024-11.21-.032-16.817c-.006-5.454-.113-10.911.019-16.363c.222-9.248 8.736-14.066 16.643-9.293m-5.91 8.872v3.868l-.001 5.674l-.001 3.71v5.482c0 4.23.002 8.394.01 12.557c.003 1.96 1.023 1.88 2.343 1.063q11.408-7.071 22.827-14.127c1.258-.776 1.294-1.587.06-2.365c-8.154-5.139-16.318-10.26-25.238-15.862"/><path fill="#85B3DF" d="M133.227 223.88a5.497 5.497 0 1 0 .001-10.996a5.497 5.497 0 0 0 0 10.995m-21.049.001a5.497 5.497 0 1 0 0-10.996a5.497 5.497 0 0 0 0 10.995m106.205 21.128c-14.702 0-26.62-11.915-26.62-26.614c0-14.698 11.918-26.614 26.62-26.614c14.701 0 26.62 11.916 26.62 26.614s-11.919 26.614-26.62 26.614m0-64.22c-18.906 0-34.55 13.947-37.211 32.11h-6.153c-2.685 0-4.864 2.461-4.864 5.496s2.179 5.497 4.864 5.497h6.153c2.66 18.163 18.305 32.11 37.21 32.11C239.159 256 256 239.162 256 218.393c0-20.77-16.842-37.607-37.616-37.607"/></svg>   },
  { name: 'Jenkins', icon: <svg xmlns="http://www.w3.org/2000/svg" width="0.75em" height="1em" viewBox="0 0 383 512"><path fill="currentColor" d="M204.96 110.031c-28.595-6.66-42.803 11.967-51.47 31.285c-7.74-1.876-4.66-12.4-2.705-17.764c5.118-14.074 25.744-32.81 42.597-30.27c7.252 1.092 17.067 7.723 11.577 16.75m139.32 32.562c.451.019.907.034 1.357.053c6.462 13.424 12.055 27.643 20.206 39.493c-5.46 12.718-41.35 23.973-40.795 1.136c7.76-3.393 21.16-.692 28.04-5.026c-3.98-10.918-9.72-20.212-8.807-35.656m-124.681.35c6.13 11.238 8.126 23.047 16.84 31.542c3.926 3.824 11.558 8.485 7.775 19.12c-.885 2.508-7.346 8.1-11.076 9.2c-13.624 4.022-45.372.83-34.62-16.156c11.267.526 26.412 7.318 34.834-.862c-6.467-10.34-17.998-30.794-13.753-42.845m119.567 114.23c-20.515 13.177-43.39 27.507-77.003 24.183c-7.182-6.244-9.92-20.14-2.943-29.317c3.632 6.244 1.35 17.729 11.472 19.457c19.073 3.263 41.271-11.668 54.99-16.886c8.508-14.342-.733-19.617-8.397-28.848c-15.69-18.912-36.735-42.354-35.97-70.667c6.341-4.598 6.889 7.018 7.799 9.133c8.192 19.174 28.81 43.695 43.858 60.105c3.695 4.041 9.778 7.919 10.455 10.59c1.951 7.771-5.077 17.081-4.261 22.25m13.06 13.407c-9.548 18.176-23.056 38.193-51.077 38.775c-.57-5.87-1.007-14.802.031-18.336c21.421-2.059 34.646-12.961 51.047-20.44m-134.244 11.784c17.872 9.398 50.717 10.409 75.008 9.697c1.303 5.322 1.272 11.897 1.322 18.387c-31.225 1.558-68.143-6.169-76.33-28.084m-3.397 17.525c12.358 31.03 54.835 27.457 90.655 26.6c-1.577 4.03-4.995 8.788-9.244 10.51c-11.478 4.67-43.137 8.214-59.072-.249c-10.106-5.372-16.6-17.512-22.136-24.628c-2.674-3.437-15.99-12.214-.203-12.233m95.483-273.396c16.844 12.74 43.77 39.64 53.4 59.116c25.437 51.418 23.63 137.35 5.838 199.896c-14.406 50.2-44.434 86.14-55.003 91.08c-78.15 36.528-102.493 17.304-120.482 8.045c-19.8-10.19-62.002-50.83-61.708-77.068c23.244 32.248 42.447 60.414 84.716 74.595c31.981 10.73 84.494-7.582 101.17-28.589c48.512-61.107 55.723-120.049 53.265-171.22c-1.07-22.26-1.097-44.439-8.564-59.414c-7.807-15.658-34.205-29.667-49.658-15.504c-2.864-15.227 12.85-24.644 31.31-19.164c-13.163-16.986-26.976-37.397-45.684-47.953c-32.57-18.379-87.704-32.202-122.351-14.928c-27.958 13.939-65.748 37.003-78.632 66.23c12.036 28.203-3.565 54.045-4.561 82.68c-.529 15.236 7.174 28.536 7.764 45.123c-4.119 6.795-16.702 7.632-25.413 7.166c-2.932-14.672-8.065-31.164-23.174-32.82c-21.38-2.338-37.012 15.356-37.983 33.846c-1.15 21.745 16.701 57.785 42.003 55.283c9.774-.966 12.175-10.764 22.824-10.663c5.772 11.516-8.903 15.132-10.413 23.369c-.393 2.128 1.217 10.443 2.154 14.342c4.596 18.988 14.84 43.563 24.924 58.018l6.848 33.55c-2.852-2.033-22.148-27.139-24.791-26.097c-4.631-3.886-24.33-63.607-24.995-73.635c-42.099-5.052-69.19-73.067-41.835-112.325c-8.768-49.69 5.16-85.432 26.086-94.753c9.299-37.041 42.577-49.358 73.932-67.765c77.153-42.015 161.26-29.12 199.013-.441m-64.804 425.56c-.696 7.727 1.101 10.254 2.656 19.11c25.399 7.941 20.964-34.86-2.656-19.11m-28.166-9.247c-10.944-5.98-27.386-12.488-41.521-15.19c-17.523-3.347-15.877 23.902-15.137 40.16c.587 12.873 7.272 26.488 10.186 35.037c1.362 3.995 1.672 8.23 5.086 9.023c6.034 1.407 25.938-6.553 31.61-9.646c11.995-6.541 21.302-16.927 31.49-23.901c.132-3.393.26-6.783.396-10.175c-6.125-3.053-13.203-5.219-22.195-5.612c6.1-3.069 15.073-3.025 20.63-6.676c.054-1.36.111-2.716.158-4.063c-10.147-.78-14.015-5.3-20.703-8.957m110.062 16.486c-.492-10.245-3.182-31.313-9.514-35.002c-13.291-7.758-36.918 15.664-46.927 19.237c1.09 3.134 2.886 5.618 3.025 9.624c5.92-1.457 13.127-.46 18.257 2.062c-5.932.664-12.51.62-16.435 3.446c-1.438 4.158.353 9.823-.604 15.595c14.08 3.972 30.164 6.087 47.965 6.61c3.462-4.501 4.641-13.074 4.233-21.572M64.64 251.405c-6.43-3.67-7.96-19.835-15.51-20.294c-10.788-.655-8.82 20.97-8.778 33.616c-7.425-6.741-8.731-27.498-3.276-38.158c-6.217-3.053-8.993 3.368-12.442 5.63c4.432-32.196 47.1-14.933 40.006 19.206"/></svg>  },
  { name: 'OCI (Oracle Cloud Infrastructure)', icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M30.499 8.5c7.18 0 13 6.94 13 15.5h0c0 8.56-5.82 15.5-13 15.5H17.5c-4.644 0-8.936-2.954-11.258-7.75a18.11 18.11 0 0 1 0-15.5C8.564 11.454 12.856 8.5 17.5 8.5Z"/></svg>  },
  { name: 'Accesibilidad Web (a11y)', icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 2048 2048"><path fill="currentColor" d="M128 128v1792h384v128H0V0h1115l549 549v91h-640V128zm1024 91v293h293zm384 1061l-192 256l-192-256h128V768h128v512zm512 64l-256 192v-128h-192l96-128h96v-128zm-1401 64q9-81 39-155t82-139l91 91q-69 90-84 203zm128 128q15 113 84 203l-91 91q-51-64-81-138t-40-156zm377-505q-113 15-203 84l-91-91q64-51 138-81t156-40zm421 708q69-90 84-203h128q-9 81-39 155t-82 139zm-293 174q113-15 203-84l91 91q-64 51-138 81t-156 40zm-422 7l91-91q90 69 203 84v128q-81-9-155-39t-139-82"/></svg>  }
];

const skillsBlandas = [
  { name: 'Comunicación efectiva', icon: <FaComment /> },
  { name: 'Trabajo en equipo', icon: <FaUsers /> },
  { name: 'Resolución de problemas', icon: <FaTools /> },
  { name: 'Creatividad', icon: <FaMagic /> },
  { name: 'Aprendizaje activo', icon: <FaBookOpen /> },
  { name: 'Adaptabilidad', icon: <FaSyncAlt /> },
  { name: 'Organización', icon: <FaClipboardList /> }, // Puedes cambiar el ícono si deseas
  { name: 'Pensamiento crítico', icon: <FaLightbulb /> },
  { name: 'Gestión del tiempo', icon: <FaClock /> },
  { name: 'Mentalidad de crecimiento', icon: <FaChartLine /> },
  { name: 'Emprendimiento creativo', icon: <FaRocket /> }, // Puedes cambiar el ícono si deseas


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

h3{
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
        <h3>Habilidades Técnicas en desarrollo</h3>
        <SkillsGrid>
          {skillsTécnicasEnDesarrollo.map((skill, index) => (
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