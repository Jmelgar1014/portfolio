import React from "react";

const SkillBadge = ({ skill, className }) => {
  return (
    <>
      <span
        className={`text-xs px-3 py-1 ${className} rounded-full font-bold mr-2 my-1 w-max`}
      >
        {skill}
      </span>
    </>
  );
};

export default SkillBadge;
