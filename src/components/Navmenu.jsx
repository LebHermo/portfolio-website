import React from "react";
import Navitem from "./Navitem";
import {
  IconHome,
  IconAbout,
  IconProjects,
  IconStack,
  IconContact,
  IconChevron,
} from "../assets/Icons";
import Navdetail from "./Navdetail";

function Navmenu() {
  return (
    <>
      <div class="pt-6 font-inter flex h-screen flex-col justify-between border-e bg-zinc-900">
        <div class="px-12 py-6">
          <span class="grid w-48 aspect-square place-content-center rounded-lg bg-emerald-900 text-xs text-gray-600">
            <img
              class="rounded-lg grayscale"
              src={require("../assets/photo.jpg")}
              alt=""
            />
          </span>

          <ul className="mt-3 text-sm text-emerald-400 bg-emerald-950 py-1 px-3 rounded-xl">
            <li className="font-normal">Available for Work</li>
          </ul>

          <ul className="mt-10 space-y-1">
            <Navitem text="Home" isActive={true} icon={<IconHome />} />
            <Navitem text="About" isActive={false} icon={<IconAbout />} />
            <Navitem text="Projects" isActive={false} icon={<IconProjects />} />
            <Navitem text="Stack" isActive={false} icon={<IconStack />} />
            <Navitem text="Contact" isActive={false} icon={<IconContact />} />
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navmenu;
