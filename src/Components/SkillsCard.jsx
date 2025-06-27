import React from "react";

const SkillsCard = ({ title, children }) => {
  return (
    <>
      <div className="mx-4">
        <div className="border-2 rounded-lg p-4 my-4 h-52 lg:h-64">
          <h1 className="text-secondary font-bold p-2">{title}</h1>
          <div className="flex flex-wrap">{children}</div>
        </div>
      </div>
    </>
  );
};

export default SkillsCard;
