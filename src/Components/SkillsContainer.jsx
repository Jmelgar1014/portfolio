import React from "react";
import SkillsCard from "./SkillsCard";
import SkillBadge from "./SkillBadge";

const SkillsContainer = () => {
  return (
    <>
      <div className="my-16">
        <div
          className="flex justify-center flex-col text-center m-8 "
          id="skills"
        >
          <h1 className="font-bold text-5xl text-center">
            Skills & Technologies
          </h1>
          <p className="text-gray-500 text-center mt-4 text-lg">
            {" "}
            I work with a variety of technologies and tools to build modern,
            scalable applications.
          </p>
        </div>
        <div className="md:grid grid-cols-2 lg:grid-cols-4 ">
          <SkillsCard title="FrontEnd">
            <SkillBadge className="text-primary border-2" skill="React.js" />
            <SkillBadge className="text-primary border-2" skill="Javascript" />
            <SkillBadge
              className="text-primary border-2"
              skill="Tailwind CSS"
            />
            <SkillBadge className="text-primary border-2" skill="CSS" />
            <SkillBadge className="text-primary border-2" skill="HTML" />
          </SkillsCard>
          <SkillsCard title="Backend">
            <SkillBadge className="text-primary border-2" skill="Node.js" />
            <SkillBadge
              className="text-primary border-2"
              skill="ASP.NET Core"
            />
            <SkillBadge
              className="text-primary border-2"
              skill="Dependency Injection"
            />
            <SkillBadge
              className="text-primary border-2"
              skill="Entity Framework"
            />
            <SkillBadge className="text-primary border-2" skill="REST Api" />
            <SkillBadge
              className="text-primary border-2"
              skill="Authentication"
            />
          </SkillsCard>
          <SkillsCard title="Database">
            <SkillBadge className="text-primary border-2" skill="MySQL" />
            <SkillBadge className="text-primary border-2" skill="PostgreSQL" />
            <SkillBadge className="text-primary border-2" skill="SSMS" />
            <SkillBadge className="text-primary border-2" skill="Supabase" />
          </SkillsCard>
          <SkillsCard title="Tools & Others">
            <SkillBadge className="text-primary border-2" skill="Git" />
            <SkillBadge className="text-primary border-2" skill="Netlify" />
            <SkillBadge className="text-primary border-2" skill="Github" />
          </SkillsCard>
        </div>
      </div>
    </>
  );
};

export default SkillsContainer;
