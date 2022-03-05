import "../styles/Projects.css";
import ProjectItem from "./ProjectItem";

const work = [
  {
    img: "url",
    name: "Secret Lurry Society",
    description:
      "Lighthouse Labs' flagship DApp (decentralized application) - consisting of an NFT collection, minting website, and LURRY token IDO (initial dex offering). The Floatie Lurry NFT grants exclusive access to a mentorship discord channel and acts as an on-ramp to blockchain technology for first-time users. The website is pinned to IPFS (InterPlanetary File System).",
    technology:
      "React, JQuery, Hardhat, Truffle, Ganache, Web3.js, Ethers.js, OpenZeppelin, IPFS (Pinata), Alchemy, ENS",
    links: "https://github.com/iourivolkov/Lurry-Contract-Website",
  },
  {
    img: "url",
    name: "LightMart",
    description: "A buy and sell NFT (non-fungible token) marketplace.",
    technology: "JS, HTML, CSS, Bootstrap, PostgreSQL, Express",
    links: "url",
  },
  {
    img: "https://github.com/iourivolkov/tweeter-app/blob/master/docs/alltweets.png?raw=true",
    name: "Tweeter",
    description:
      "A Single Page App (SPA) Twitter clone - focused on practicing front-end development skills.",
    technology: "JS, JQuery, AJAX, HTML, CSS",
    links: "https://github.com/iourivolkov/tweeter-app",
  },
  {
    img: "https://github.com/iourivolkov/tinyapp/blob/master/docs/urls-page.png?raw=true",
    name: "TinyApp",
    description:
      "TinyApp is a full-stack web app built with Node and Express that allows users to shorten long URLs (a la bit.ly). Cookies are used to authenticate users and their data is persisted",
    technology: "JS, Node, Express, HTML, CSS",
    links: "https://github.com/iourivolkov/tinyapp",
  },
];

const Projects = () => {
  return (
    <article>
      <h1>PROJECTS</h1>
      <ProjectItem />
    </article>
  );
};

export default Projects;
