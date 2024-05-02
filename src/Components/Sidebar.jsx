import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';
import '../Styles/Sidebar.css';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="button" onClick={toggleSidebar}>
      <GiHamburgerMenu />
      </button>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <ul>
            <a href="/"><li>Inicio</li></a>
            <a href="/sitiosturisticos"><li>Sitios Turísticos</li></a>
        </ul>
      </div>
    </div>
  );
}

