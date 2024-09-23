import React from "react";

function Navitem({ type, isActive, text, href, icon }) {
  return (
    <li className="pt-1.5 group">
      <a
        href={href}
        className={`block text-left rounded-lg px-4 py-3 text-sm font-normal ${
          isActive
            ? "bg-emerald-400 text-emerald-950"
            : "text-neutral-400 hover:text-emerald-400" 
        }`}
      >
        <span class="flex items-center space-x-2">
          <div className="mr-4 w-4 h-4 flex group-hover:scale-150 transition ease-in-out duration-300">{icon}</div>
          {text}
        </span>
      </a>
    </li>
  );
}
// transition ease-in-out hover:-translate-y-1 hover:scale-110
export default Navitem;
