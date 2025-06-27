import React from "react";
import Projects from "./Projects";
import jobTracker from "../assets/jobtracker.png";
import SkillBadge from "./SkillBadge";
import invoice from "../assets/invoice.png";

const ProjectContainer = () => {
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
          <Projects
            githubLink="https://github.com/Jmelgar1014/JobTracker"
            liveLink="https://apptracking.netlify.app"
            projectLogo={jobTracker}
            projectName="Job Tracker Website"
            description="Web App to keep track of all jobs applied to."
          >
            {" "}
            <SkillBadge className="bg-primary text-white" skill="React" />
            <SkillBadge className="bg-primary text-white" skill="Javascript" />
            <SkillBadge className="bg-primary text-white" skill="CSS" />
            <SkillBadge className="bg-primary text-white" skill="Supabase" />
          </Projects>
          <Projects
            githubLink="https://github.com/Jmelgar1014/JobTrackerAPI"
            projectLogo={jobTracker}
            projectName="JobTracker Web API"
            description="REST Api developed with asp.net core using repository pattern, dependency injection, and entity frameowrk"
          >
            <SkillBadge className="bg-primary text-white" skill="C#" />
            <SkillBadge
              className="bg-primary text-white"
              skill="ASP.NET Core"
            />
            <SkillBadge
              className="bg-primary text-white"
              skill="Entity Framework"
            />
            <SkillBadge
              className="bg-primary text-white"
              skill="Dependency Injection"
            />
            <SkillBadge className="bg-primary text-white" skill="Supabase" />
          </Projects>
          <Projects
            githubLink="https://github.com/Jmelgar1014/BillTracker"
            liveLink="https://invoicehistory.netlify.app"
            projectLogo={invoice}
            projectName="Bill Tracker Webstite"
            description="Web application that stores all invoice information user inserts and stores it by month with a graph for a each month to measure much was spent."
          >
            {" "}
            <SkillBadge className="bg-primary text-white" skill="React" />
            <SkillBadge className="bg-primary text-white" skill="Javascript" />
            <SkillBadge
              className="bg-primary text-white"
              skill="Tailwind CSS"
            />
            <SkillBadge className="bg-primary text-white" skill="Supabase" />
          </Projects>
        </div>
      </div>
    </>
  );
};

export default ProjectContainer;
