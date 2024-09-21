import React from "react";

function Navitem({ type, isActive, text, href, icon }) {
  return (
    <li className="pt-1.5">
      <a
        href={href}
        className={`block text-left rounded-lg px-4 py-3 text-sm font-normal ${
          isActive
            ? "bg-emerald-400 text-emerald-950"
            : "text-neutral-400 hover:bg-stone-950/20 hover:text-white transition duration-300"
        }`}
      >
        <span class="flex items-center space-x-2">
          <div className="mr-4 w-4 h-4 flex">{icon}</div>
          {text}
        </span>
      </a>
    </li>
  );
}

export default Navitem;
