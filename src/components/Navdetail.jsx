import React from "react";
import Navitem from "./Navitem";

import { IconChevron } from "../assets/Icons";

function Navdetail({icon, text}) {
  return (
    <li>
      <details className="group [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-neutral-400 hover:bg-stone-950/20 hover:text-white transition duration-300">
          <span className="mr-4">{icon}</span>
          <span className="text-sm font-normal py-1.5"> {text} </span>
          <div className="shrink-0 transition duration-300 group-open:-rotate-180">
            <IconChevron />
          </div>
        </summary>

        <ul className="mt-2 space-y-1 px-2">
          <Navitem text="Applications" isActive={false} href="#" />
          <Navitem text="Web Designs" isActive={false} href="#" />
          <Navitem text="Illustrations" isActive={false} href="#" />
          <Navitem text="Logo Designs" isActive={false} href="#" />
        </ul>
      </details>
    </li>
  );
}

export default Navdetail;
