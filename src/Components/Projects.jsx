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
                    <path
                      fill="currentColor"
                      d="M10.768 5.25h2.464c.813 0 1.469 0 2 .043c.546.045 1.026.14 1.47.366a3.75 3.75 0 0 1 1.64 1.639c.226.444.32.924.365 1.47c.043.531.043 1.187.043 2v2.464c0 .813 0 1.469-.043 2c-.045.546-.14 1.026-.366 1.47a3.75 3.75 0 0 1-1.639 1.64c-.444.226-.924.32-1.47.365c-.531.043-1.187.043-2 .043h-3.61c-2.005 0-3.01-2.424-1.592-3.841l4.41-4.409h-1.565a.75.75 0 0 1 0-1.5h3.375a.75.75 0 0 1 .75.75v3.375a.75.75 0 0 1-1.5 0v-1.564L9.091 15.97a.75.75 0 0 0 .53 1.28H13.2c.853 0 1.447 0 1.91-.038c.453-.038.714-.107.912-.207c.423-.216.767-.56.983-.983c.1-.198.17-.459.207-.913c.037-.462.038-1.056.038-1.909v-2.4c0-.852 0-1.447-.038-1.91c-.038-.453-.107-.714-.207-.911a2.25 2.25 0 0 0-.983-.984c-.198-.1-.459-.17-.913-.207c-.462-.037-1.056-.038-1.909-.038h-2.4c-.852 0-1.447 0-1.91.038c-.453.037-.714.107-.911.207a2.25 2.25 0 0 0-.984.984c-.1.197-.17.458-.207.912c-.037.462-.038 1.057-.038 1.909v2.7a.75.75 0 0 1-1.5 0v-2.732c0-.813 0-1.469.043-2c.045-.546.14-1.026.366-1.47a3.75 3.75 0 0 1 1.639-1.64c.444-.226.924-.32 1.47-.365c.531-.043 1.187-.043 2-.043"
                    />
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
