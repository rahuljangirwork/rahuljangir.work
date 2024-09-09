"use client";
import { useState } from "react";

type CollapsibleProps = {
  title: string;
  children: React.ReactNode;
};

const Collapsible: React.FC<CollapsibleProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="border-b border-gray-300 mb-4">
      <button
        onClick={toggleOpen}
        className="w-full text-left font-semibold text-lg focus:outline-none p-2"
      >
        {title}
        <span className="ml-2">{isOpen ? "▲" : "▼"}</span>
      </button>
      {isOpen && <div className="p-4 bg-gray-100">{children}</div>}
    </div>
  );
};

export default Collapsible;
