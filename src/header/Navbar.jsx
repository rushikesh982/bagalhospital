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








<div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header text-center">
              <h1 class="modal-title text-primary fs-5" id="exampleModalLabel">
                Appoinment Details
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Your Name"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
                <input
                  type="text"
                  class="form-control"
                  placeholder="Your email"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>

              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Phone No..."
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <input
                  type="date"
                  class="form-control"
                  placeholder="Birth Date"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
              </div>

              <div class="mb-3">
                <label for="basic-url" class="form-label text-capitalize">
                  apoinment date
                </label>
                <input
                  type="date"
                  class="form-control"
                  placeholder="Phone No..."
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
              </div>

              <div class="mb-3">
                {/* <span class="input-group-text">$</span> */}
                <label for="basic-url" class="form-label text-capitalize">
                  Subject
                </label>
                <input
                  type="text"
                  class="form-control"
                  aria-label="Amount (to the nearest dollar)"
                />
                {/* <span class="input-group-text">.00</span> */}
              </div>

              {/* <div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Username" aria-label="Username" />
  <span class="input-group-text">@</span>
  <input type="text" class="form-control" placeholder="Server" aria-label="Server" />
</div> */}

              <div class="mb-3">
                {/* <span class="input-group-text">With textarea</span> */}
                <label for="basic-url" class="form-label text-capitalize">
                  paragraph text
                </label>
                <textarea
                  class="form-control"
                  aria-label="With textarea"
                ></textarea>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
