import React from "react";
import Navitem from "./Navitem";
import {
  IconHome,
  IconAbout,
  IconProjects,
  IconStack,
  IconContact,
  IconInstagram,
  IconLinkedin,
  IconDribble,
  IconX,
} from "../assets/Icons";
// import Navdetail from "./Navdetail";

function Navmenu() {
  return (
    <>
      <div className="text-center py-12 px-12 font-inter h-screen flex flex-col justify-between bg-bglightgray">
        <div className="">
          <span className="grid w-48 aspect-square place-content-center rounded-lg bg-emerald-900 text-xs text-gray-600">
            {/* <img
              class="rounded-lg grayscale"
              src={require("../assets/photo.jpg")}
              alt=""
            /> */}
          </span>

          <ul className="mt-3 text-sm text-emerald-400 bg-emerald-950 py-1 px-3 rounded-xl">
            <li className="font-semibold">Available for Work</li>
          </ul>

          <ul className="mt-10 space-y-1">
            <Navitem text="Home" isActive={true} icon={<IconHome />} />
            <Navitem text="About" isActive={false} icon={<IconAbout />} />
            <Navitem text="Projects" isActive={false} icon={<IconProjects />} />
            <Navitem text="Stack" isActive={false} icon={<IconStack />} />
            <Navitem text="Contact" isActive={false} icon={<IconContact />} />
          </ul>
        </div>
        
        <div className="flex justify-between text-neutral-700">
          <a href="#" className="hover:text-emerald-400 hover:scale-150 duration-300">
            <IconInstagram />
          </a>
          <a href="#" className="hover:text-emerald-400 hover:scale-150 duration-300">
            <IconLinkedin />
          </a>
          <a href="#" className="hover:text-emerald-400 hover:scale-150 duration-300">
            <IconDribble />
          </a>
          <a href="#" className="hover:text-emerald-400 hover:scale-150 duration-300">
            <IconX />
          </a>
        </div>
      </div>
    </>
  );
}

export default Navmenu;
