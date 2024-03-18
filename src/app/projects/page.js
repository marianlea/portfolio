"use client";
import mendls from "/public/mendls.png";
import pipeline from "/public/pipeline.png";
import stitches from "/public/stitches.png";
import tic from "/public/tic-tac-toe.png";
import { Link } from "react-scroll";

export default function Projects() {
  const projects = [
    {
      name: "mendl's",
      githubLink: "https://github.com/marianlea/mendls",
      liveSite: "https://mendls.vercel.app/",
      description:
        "a single-page application utilising reactjs and material ui for the client side, expressjs and nodejs for the server and postgresql for the database, the shop features a dynamic shopping basket in sync with the shop menu / pastries section, payment processing using stripe, persisted shopping basket on page refresh utilising localstorage",
      techUsed: [
        "react",
        "mui",
        "stripe",
        "postgres",
        "javascript",
        "node",
        "express",
        "css",
        "html",
      ],
      image: mendls,
    },
    {
      name: "pipeline",
      githubLink: "https://github.com/yangzhie/pipeline",
      liveSite: "https://github.com/yangzhie/pipeline",
      description:
        "a single page application using REST JSON API to call petrol stations and their locations utilising Google Maps API, the app also features nearest servos based on user location as well as current time and date",
      techUsed: ["javascript", "node", "express", "css", "html"],
      image: pipeline,
    },
    {
      name: "stitches",
      githubLink: "https://github.com/marianlea/stitches",
      liveSite: "https://stitches-z160.onrender.com/",
      description:
        "stitches is a multipage CRUD app, where people can post and reply to posts, follow other users and view their posts in their feed, a simpler clone of Twitter",
      techUsed: ["postgres", "javascript", "node", "express", "css", "html"],
      image: stitches,
    },
    {
      name: "tic-tac-toe",
      githubLink: "https://github.com/marianlea/tic-tac-toe",
      liveSite: "https://marianlea.github.io/tic-tac-toe/",
      description:
        "a Ghibli Theme tic-tac-toe game that has a responsive interface that allows plaayers to input their name, choose their avatars that also serves as their token in the board, it keeps track of scores by reducing one heart from the player who lost in the round, the first player who runs out of hearts loses and the other player is declared as the winner",
      techUsed: ["javascript", "node", "express", "css", "html"],
      image: tic,
    },
  ];

  return (
    <section id="projects" className="w-full p-5 mt-10 sm:mt-5">
      <div className="text-center tracking-widest text-xl my-2 sm:mb-8">
        <h3>projects</h3>
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="w-full text-sm tracking-widest flex flex-wrap items-center justify-center">
          {projects.map((project, idx) => (
            <div key={idx}>
              <Link
                to={project.name}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="mr-3 sm:mr-8 hover:text-sub-text"
              >
                {project.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
