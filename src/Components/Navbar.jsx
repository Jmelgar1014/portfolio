import React from "react";
import { useState, useEffect } from "react";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640 && open) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, [open]); // 🔁 depend on `mobile`
  return (
    <>
      <nav className=" h-14 border-b-2 flex items-center justify-between">
        <div className="flex">
          <span className="mx-8 my-2">Jose Melgar</span>
          <ul className="hidden sm:flex">
            <li className="m-2 cursor-pointer">
              <a href="#about">About</a>
            </li>
            <li className="m-2 cursor-pointer">
              <a href="#projects">Projects</a>
            </li>
            <li className="m-2 cursor-pointer">
              <a href="#skills">Skills</a>
            </li>
            <li className="m-2 cursor-pointer">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div
          className="mr-4 cursor-pointer sm:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? (
            <span>
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M18 6L6 18M6 6l12 12"
                />
              </svg>
            </span>
          ) : (
            <span>
              <svg
                width="32"
                height="32"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="4"
                  d="M7.95 11.95h32m-32 12h32m-32 12h32"
                />
              </svg>
            </span>
          )}
        </div>
        <div className=" mx-8  hidden sm:flex">
          <span className="mx-4">
            <a href="https://github.com/Jmelgar1014">
              <svg
                width="24"
                height="24"
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
          <span>
            <a href="https://www.linkedin.com/in/jose-melgar2019">
              <svg
                width="24"
                height="24"
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
      </nav>
      {open && (
        <ul className="flex flex-col ">
          <a
            className="m-2 p-1 text-sm"
            href="#about"
            onClick={() => setOpen(false)}
          >
            About
          </a>
          <a
            className="m-2 p-1 text-sm"
            href="#projects"
            onClick={() => setOpen(false)}
          >
            Projects
          </a>
          <a
            className="m-2 p-1 text-sm"
            href="#skills"
            onClick={() => setOpen(false)}
          >
            Skills
          </a>
          <a
            className="m-2 p-1 text-sm"
            href="#contact"
            onClick={() => setOpen(false)}
          >
            Contact
          </a>
        </ul>
      )}
    </>
  );
};

export default Navbar;
