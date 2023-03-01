import Image1 from "../../assets/img/portfolio/1-layover.jpg";
import Image2 from "../../assets/img/portfolio/2-github-user-lister.jpg";
import Image3 from "../../assets/img/portfolio/3-pd-quiz.jpg";


const PortfolioData = [
  {
    id: 1,
    type: "website project",
    image: Image1,
    tag: ["website"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Website",
        client: "Trendhouse Tech",
        language: "ReactJS, Typescript, Firebase, Axios, ContextAPI",
        preview: "www.layover.com",
        link: "https://dev-layover.azurewebsites.net/",
      },
    ],
  },
  {
    id: 2,
    type: "youtube project",
    image: Image2,
    tag: ["mockup"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "website",
        client: "Study Case",
        language: "React, Typescript, Redux",
        preview: "github",
        link: "https://github.com/omarcusmoreira/github-user-lister-rematch",
      },
    ],
  },
  {
    id: 3,
    type: "slider project",
    image: Image3,
    tag: ['mockup'],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Website",
        client: "PD Solutions",
        language: "React, Typescript, ContextAPI, Styled Components",
        preview: "www.pd-quiz.com",
        link: "https://pd-quiz-6jxn6xmil-omarcusmoreira.vercel.app/",
      },
    ],
  },
  // {
  //   id: 4,
  //   type: "local project",
  //   image: Image4,
  //   tag: ["logo", "video"],
  //   delayAnimation: "0",
  //   modalDetails: [
  //     {
  //       project: "video",
  //       client: "Videohive",
  //       language: " Adobe After Effects",
  //       preview: "www.videohive.net",
  //       link: "https://www.videohive.net",
  //     },
  //   ],
  // },
  // {
  //   id: 5,
  //   type: "saas project",
  //   image: Image5,
  //   tag: ["logo"],
  //   delayAnimation: "100",
  //   modalDetails: [
  //     {
  //       project: "Web Application",
  //       client: "Themeforest",
  //       language: "HTML, CSS, ReactJS",
  //       preview: "www.envato.com",
  //       link: "https://themeforest.net/item/deski-saas-software-react-template/33799794",
  //     },
  //   ],
  // },
  // {
  //   id: 6,
  //   type: "mockup project",
  //   image: Image6,
  //   tag: ["logo", "mockup"],
  //   delayAnimation: "200",
  //   modalDetails: [
  //     {
  //       project: "Website",
  //       client: "Themeforest",
  //       language: "HTML, CSS, Javascript",
  //       preview: "www.pexels.com",
  //       link: "https://www.pexels.com",
  //     },
  //   ],
  // },
  // {
  //   id: 7,
  //   type: "facebook project",
  //   image: Image7,
  //   tag: ["logo"],
  //   delayAnimation: "0",
  //   modalDetails: [
  //     {
  //       project: "Website",
  //       client: "Facebook",
  //       language: "HTML, CSS, Javascript",
  //       preview: "www.facebook.com",
  //       link: "https://www.facebook.com/ibthemes",
  //     },
  //   ],
  // },
  // {
  //   id: 8,
  //   type: "dribble project",
  //   image: Image8,
  //   tag: ["graphic design"],
  //   delayAnimation: "100",
  //   modalDetails: [
  //     {
  //       project: "Website",
  //       client: "Dribbble",
  //       language: "HTML, CSS, Javascript",
  //       preview: "www.dribbble.com",
  //       link: "https://dribbble.com/ib-themes",
  //     },
  //   ],
  // },
  // {
  //   id: 9,
  //   type: "behence project",
  //   image: Image9,
  //   tag: ["graphic design", "mockup"],
  //   delayAnimation: "200",
  //   modalDetails: [
  //     {
  //       project: "Website",
  //       client: "Behance",
  //       language: "HTML, CSS, Javascript",
  //       preview: "www.behance.com",
  //       link: "https://www.behance.net/ib-themes",
  //     },
  //   ],
  // },
];

export default PortfolioData;
