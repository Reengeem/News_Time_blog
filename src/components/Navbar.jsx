import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = [
    "/",
    "Education",
    "Entertainment",
    "Sport",
    "Business",
    "Technology",
  ];
  return (
    <nav className="pb-4">
      <div className=" flex items-center justify-around shadow-lg ">
        <h3 className="flex items-centergap-2 max-w-5xl mx-4 text-blue-500 text-2xl font-bold">
          News Time
        </h3>
        <div>
          {links.map((item) => (
            <NavLink
              to={item}
              key={item}
              className="mx-4 text-blue-500 hover:text-blue-700"
            >
              {item === "/" ? "Home" : item}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
