"use client";
import { useState } from "react";

type CollapsibleProps = {
  children: React.ReactNode;
};

const Collapsible: React.FC<CollapsibleProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="border border-gray-300 mb-4">
      <button
        onClick={toggleOpen}
        className="w-full text-left font-semibold text-lg focus:outline-none p-2"
      >
        <span className="ml-2">{isOpen ? "▲" : "▼"}</span>
      </button>
      {isOpen && <div className="p-4 bg-transparent">{children}</div>}
    </div>
  );
};

export default Collapsible;
