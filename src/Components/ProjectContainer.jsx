import React from "react";
import Projects from "./Projects";
import jobTracker from "../assets/jobtracker.png";
import SkillBadge from "./SkillBadge";
import invoice from "../assets/invoice.png";
import mannys from "../assets/mannys.png";

const ProjectContainer = () => {
  const projects = [
    {
      githubLink: "",
      liveLink: "https://mannyslawnandlandscape.com/",
      projectLogo: mannys,
      projectName: "Freelance Landscaping Website",
      description: "Landscaping website for small business",
      skills: ["React", "TypeScript", "NextJS", "Tailwind CSS"],
    },
    {
      githubLink: "https://github.com/Jmelgar1014/JobTracker",
      liveLink: "https://apptracking.netlify.app",
      projectLogo: jobTracker,
      projectName: "Job Tracker Website",
      description: "Web App to keep track of all jobs applied to.",
      skills: ["React", "Javascript", "Supabase", "CSS"],
    },
    {
      githubLink: "https://github.com/Jmelgar1014/JobTrackerAPI",
      liveLink: "",
      projectLogo: jobTracker,
      projectName: "JobTracker Web API",
      description:
        "REST Api developed with asp.net core using repository pattern, dependency injection, and entity frameowrk",
      skills: [
        "ASP.NET Core",
        "Entity Framework",
        "Dependency Injection",
        "Supabase",
      ],
    },
    {
      githubLink: "https://github.com/Jmelgar1014/BillTracker",
      liveLink: "https://invoicehistory.netlify.app",
      projectLogo: invoice,
      projectName: "Bill Tracker Website",
      description:
        "Web application that stores all invoice information user inserts and stores it by month with a graph for a each month to measure much was spent.",
      skills: ["React", "Javascript", "Tailwind CSS", "Supabase"],
    },
  ];
  return (
    <>
      <div className="flex justify-center flex-col mx-4 ">
        <h1 className="font-bold text-5xl text-center my-4" id="projects">
          Featured Projects
        </h1>
        <p className="text-gray-500 text-center mt-4 text-lg mx-8">
          Here are some of my recent projects that showcase my skills and
          experience in full-stack development.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2 gap-8 place-items-center lg:mx-8 lg:gap-4">
          {projects.map((project) => (
            <Projects
              githubLink={project.githubLink}
              liveLink={project.liveLink}
              projectLogo={project.projectLogo}
              projectName={project.projectName}
              description={project.description}
            >
              {project.skills.map((skill) => (
                <SkillBadge className="bg-primary text-white" skill={skill} />
              ))}
            </Projects>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectContainer;
