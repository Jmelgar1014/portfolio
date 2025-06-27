import React from "react";
import AboutCard from "./AboutCard";
import WebIcon from "./WebIcon";
import BackendIcon from "./BackendIcon";
import MobileIcon from "./MobileIcon";

const AboutMe = () => {
  return (
    <>
      <div className="mb-16 pb-28">
        <div className=" flex justify-center mx-16">
          <div className="flex flex-col justify-center">
            <h1 className="font-bold text-5xl text-center" id="about">
              About Me
            </h1>
            <p className="text-gray-500 text-center mt-4 text-lg">
              I'm a passionate software engineer with 3+ years of experience
              building web applications and solving complex technical
              challenges. I love working with modern technologies and am always
              eager to learn new tools and frameworks.
            </p>
          </div>
        </div>
        <div className="flex justify-center m-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-16">
            <AboutCard
              bgColor="text-primary"
              icon={WebIcon}
              title="Web Development"
              description="Building responsive, performant web applications with modern frameworks and best practices."
            />
            <AboutCard
              bgColor="text-secondary"
              icon={BackendIcon}
              title="Backend Systems"
              description="Designing scalable APIs, databases, and server-side architectures for robust applications."
            />
            <AboutCard
              bgColor="text-accent"
              icon={MobileIcon}
              title="Mobile-First"
              description="Creating mobile-responsive designs and progressive web applications for all devices."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
