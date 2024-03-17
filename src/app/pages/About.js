"use client";
import { useState } from "react";
import Image from "next/image";
import imageShadow from "/public/portrait-bg.png";
import js from "/public/js.png";
import html from "/public/html.png";
import css from "/public/css.png";
import node from "/public/node.png";
import express from "/public/express.png";
import react from "/public/react.png";
import pg from "/public/pg.png";
import git from "/public/git.png";
import vercel from "/public/vercel.png";
import postman from "/public/postman.png";
import next from "/public/next.png";
import tailwind from "/public/tailwind.png";

const techStack = [
  js,
  html,
  css,
  tailwind,
  node,
  express,
  react,
  next,
  pg,
  git,
  vercel,
  postman,
];

const pickName = (idx) => {
  switch (idx) {
    case 0:
      return "JavaScript";
    case 1:
      return "HTML";
    case 2:
      return "CSS";
    case 3:
      return "Tailwind";
    case 4:
      return "NodeJS";
    case 5:
      return "ExpressJS";
    case 6:
      return "ReactJS";
    case 7:
      return "NextJS";
    case 8:
      return "Postgres";
    case 9:
      return "Git";
    case 10:
      return "Vercel";
    case 11:
      return "Postman";
  }
};
export default function About() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (idx) => {
    setHoveredIndex(idx);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <section className="about text-center sm:pt-20 sm:bg-[url('/plant.png')] sm:bg-auto sm:bg-no-repeat sm:bg-[left_top_28rem]">
      <div className="p-5">
        <div className="flex flex-col text-center sm:flex-row sm:justify-center sm:content-start sm:mb-40">
          <Image
            src={imageShadow}
            alt="image shadow"
            className="h-64 w-44 self-center mb-7 sm:mr-44 sm:self-start"
          />
          <div className="text-xs sm:text-sm sm:w-4/12 sm:text-justify">
            <p className="mb-7">
              I first encountered HTML & CSS in the entrepreneurship course I
              took in college, it blew my mind how lines of code can make a
              fraction of my vision come to life, of course JS was still too far
              ahead of me but it was such an enjoyable experience. As a creative
              person, creating something out of a blank canvas was satisfying
              and exciting!
            </p>
            <p className="mb-7">
              I went on being a pastry chef and an early childhood educator,
              both allowed me to express my creativity and taught me how to be
              methodical, follow structures, processes and procedures. They
              enhanced my problem-solving skills and revealed my weaknesses
              which I was able to work on through performing different roles.
              For example, I didn’t think of myself as a natural born leader,
              but working in the kitchen for almost 6 years pushed me to manage
              people. These years trained me how to be empathetic whilst being
              goal-oriented.
            </p>
            <p className="mb-7">
              Being a software engineer requires me to practice all the skills I
              have learned from my previous roles and some more. This became
              evident to me when I started the software engineering program an
              intensive full-time program which taught me programming
              fundamentals, languages, frameworks, libraries and best-practices.
            </p>
          </div>
        </div>
        <div className="sm:flex sm:flex-col sm:items-center">
          <div className="h-24 w-58 bg-[url('/tech-stack-bg.png')] bg-contain bg-no-repeat sm:h-24 sm:w-64">
            <h3 className="tech-stack tracking-[0.5rem] mb-14 sm:tracking-[1rem] sm:mt-1 sm:text-base">
              tech stack
            </h3>
          </div>
          <div className="sm:ml-96 sm:mt-8">
            <div className="grid grid-cols grid-cols-4 items-center">
              {techStack.map((tech, idx) => (
                <div
                  key={idx}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(idx)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Image
                    src={tech}
                    alt={pickName(idx)}
                    className={`h-10 w-10 m-1 sm:h-16 sm:w-16 sm:m-2 ${
                      hoveredIndex === idx ? "transform scale-150" : ""
                    }`}
                  />
                  {hoveredIndex === idx && (
                    <p className="absolute top-0 left-0 bg-accent rounded-md text-xs p-1 tracking-[0.1rem] shadow">
                      {pickName(idx)}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
