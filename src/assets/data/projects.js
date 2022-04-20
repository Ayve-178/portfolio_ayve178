import { v4 as uuidv4 } from 'uuid';
import flowImg from '../images/images (15).jpeg';
import blogImg from '../images/images (16).jpeg';
import quizImg from '../images/images (17).jpeg';
import gameImg from '../images/images (18).jpeg';
import ShopImg from '../images/shop.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Quiet Blogging',
    desc:
      'A full stack blog website developed with React JS and Firebase is used for backend support.',
    img: blogImg,
    url: 'https://github.com/Ayve-178/Quiet_Blogging_Blog_Site'
  },
  {
    id: uuidv4(),
    name: 'Elegant Shpping',
    desc:
      'A full stack ecommerce website developed with React JS and for authentication and database, firebase is used.',
    img: ShopImg,
    url: 'https://github.com/Ayve-178/Elegant_Shopping_Ecommerce_Site'
  },
  {
    id: uuidv4(),
    name: 'Quiz Application',
    desc:
      'A quiz test web app developed with React and this is one of the project I have developed while learning React',
    img: quizImg,
    url: 'https://github.com/Ayve-178/React_Quiz_Application'
  },
  {
    id: uuidv4(),
    name: "Tenzies Game",
    desc:
      'A puzzle game developed with React which is also developed in Scrimba editor environment.',
    img: gameImg,
    url: 'https://github.com/Ayve-178/React_Tenzies_Game'
  },
  {
    id: uuidv4(),
    name: 'Flowchart to Code',
    desc:
      'One of my academic projects that can convert a flowchart into C source cose. This project is developed with ASP.NET.',
    img: flowImg,
    url : 'https://github.com/Ayve-178/CSEKU_SDP_2019_C_SOURCE_CODE_GENERATOR_FROM_FLOWCHART'
  },
];

export default projects;
