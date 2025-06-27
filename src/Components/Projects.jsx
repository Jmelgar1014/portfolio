import React from "react";
import SkillBadge from "./SkillBadge";
//import projectLogo from "../assets/jobtracker.png";

const Projects = ({
  projectName,
  description,
  projectLogo,
  githubLink,
  liveLink,
  children,
}) => {
  return (
    <>
      <div className="h-[600px] w-full md:w-projectW lg:w-projectHalf xl:w-projectFull lg:h-projectHeight  border-2 rounded-lg  shadow-lg m-8 md:mx-4">
        <div className="h-2/4">
          <img
            className="object-cover w-full h-full"
            src={projectLogo}
            alt=""
          />
        </div>
        <div>
          <div className="flex justify-between">
            <span className="mx-4 font-bold text-2xl mt-4">{projectName}</span>
            <div className=" flex">
              <span className="mx-8 mt-4 cursor-pointer">
                <a href={githubLink}>
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="currentColor"
                      d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                    />
                  </svg>
                </a>
              </span>
              <span className="mr-8 mt-4 cursor-pointer">
                <a href={liveLink}>
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <path d="M8 11v5m0-8v.01M12 16v-5m4 5v-3a2 2 0 1 0-4 0" />
                      <path d="M3 7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4z" />
                    </g>
                  </svg>
                </a>
              </span>
            </div>
          </div>
          <p className="text-sm text-gray-500 mx-4 mt-4">{description}</p>
        </div>
        <div className="mx-4 my-2 flex flex-wrap ">{children}</div>
      </div>
    </>
  );
};

export default Projects;
