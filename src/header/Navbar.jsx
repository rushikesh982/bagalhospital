import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if click is outside the menu and hamburger icon
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="navouter">
        <div className="navLeft">
          <NavLink to="/home">
            <img src="./images/logo.webp" className="logo" alt="Logo" />
          </NavLink>
        </div>
        
        <div className="navright">
          <ul>
            {["home", "about", "department", "services", "gallery", "contact"].map((item, index) => (
              <li key={index}>
                <NavLink
                  to={`/${item}`}
                  style={({ isActive }) => ({
                    color: isActive ? "black" : "#a0a0a0",
                    fontWeight: "bold",
                  })}
                >
                  {item}
                </NavLink>
              </li>
            ))}
            <li>
              <button>
                <a href="tel:+91 9403820779">+91 9403820779</a>
              </button>
            </li>
          </ul>
        </div>

        {/* Hamburger Icon (Toggle Menu) */}
        <div className="hamburger" ref={hamburgerRef} onClick={() => setIsOpen(!isOpen)}>
          <i className={isOpen ? "ri-close-line" : "ri-menu-line"}></i>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mob-nav open" ref={menuRef}>
          <ul>
            {["home", "about", "department", "services", "gallery", "contact"].map((item, index) => (
              <li key={index}>
                <NavLink
                  to={`/${item}`}
                  onClick={() => setIsOpen(false)}
                  style={({ isActive }) => ({
                    color: isActive ? "black" : "#a0a0a0",
                    fontWeight: "bold",
                  })}
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
