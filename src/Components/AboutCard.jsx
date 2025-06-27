import React from "react";

// eslint-disable-next-line no-unused-vars
const AboutCard = ({ icon: Icon, title, description, bgColor }) => {
  return (
    <>
      <div className="w-56 border-2 rounded-lg ">
        <div className="  flex flex-col p-6">
          <Icon color={bgColor} />
          <h3 className="text-center text-2xl font-bold mt-1">{title}</h3>
        </div>
        <p className="px-6 pb-5 text-center text-sm text-gray-500">
          {description}
        </p>
      </div>
    </>
  );
};

export default AboutCard;
