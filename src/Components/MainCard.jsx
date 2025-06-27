import React from "react";

const MainCard = () => {
  return (
    <>
      <div className="">
        <div className="flex  justify-center px-8 py-32 m-2 h-screen items-center">
          <div className="justify-center">
            <div className="flex justify-center ">
              <span className="text-primary text-center font-bold text-sm bg-background px-4 py-2 rounded-full align-center">
                Available for new Oppurtunities
              </span>
            </div>
            <div className="">
              <h1 className="text-6xl text-center mt-4 font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent p-2">
                Hi, I'm Jose Melgar
              </h1>
              <h2 className="text-center text-gray-500 mt-4 text-2xl">
                Full-Stack Software Engineer
              </h2>
            </div>
            <div className="flex justify-center mt-8">
              <button className="bg-primary py-2 px-4 rounded-md text-white mx-4 font-bold">
                View My Work
              </button>
              <button className=" py-2 px-4 rounded-md text-primary border-primary border-2 font-bold">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainCard;
