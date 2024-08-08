import React, { useRef } from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const menuRef = useRef(null);
  const optsRef = useRef(null);

  // A function for a PopUp Menu to appear when clicked.

  function menubar() {
    if (menuRef.current) {
      menuRef.current.classList.add("options");
    }
    if (optsRef.current) {
      optsRef.current.classList.add("addStyles");
    }
  }

  // A function for the PopUp Menu to disappear when clicked.

  function closeMenu() {
    if (menuRef.current) {
      menuRef.current.classList.remove("options");
    }
    if (optsRef.current) {
      optsRef.current.classList.remove("addStyles");
    }
  }

  return (
    <div className="h-24 tablet:h-32 laptop:h-44 text-white navbar grid grid-cols-12 pt-10">
      <Link
        to="/"
        className="col-start-2 mt-[-20px] tablet:mt-2 laptop:mt-3 tablet:ml-5 laptop:ml-10 text-2xl h-14 w-14 border-2 border-red tablet:scale-105 laptop:scale-150 desktop:scale-125 desktop:ml-7 desktop:mt-3 rounded-full scale-90 shadow"
      >
        <img src="/favicon.ico" />
      </Link>

      {/* Below elements only appears in Computers */}

      <Link to="/" className="col-start-7 text-lg font-medium mt-8 notMobile">
        Home
      </Link>
      <Link to="/Services" className="notMobile text-lg mt-8 font-medium">
        Services
      </Link>
      <Link to="/Resume" className="notMobile text-lg mt-8 font-medium">
        Resume
      </Link>
      <Link to="/MyWorks" className="notMobile text-lg mt-8 font-medium">
        Works
      </Link>
      <Link to="/Contact" className="notMobile text-lg mt-8 font-medium">
        Contact
      </Link>

      {/* The Hamburger Menu which is only shown in mobile and tablet devices */}

      <div
        className="col-start-11 tablet:mt-6 laptop:mt-14 onlyMobile tablet:scale-110 laptop:scale-150"
        ref={menuRef}
        onClick={menubar}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="30px"
          viewBox="0 -960 960 960"
          width="30px"
          fill="#e8eaed"
        >
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
      </div>
      {/* Making the PopUp Menu */}
      <div
        className="col-start-9 menu tablet:w-[23vw] laptop:text-2xl"
        ref={menuRef}
      >
        <Link to="/" className="OptBtn" ref={optsRef}>
          Home
        </Link>
        <Link to="/Services" className="OptBtn">
          Services
        </Link>
        <Link to="/Resume" className="OptBtn">
          Resume
        </Link>
        <Link to="/MyWorks" className="OptBtn">
          Works
        </Link>
        <Link to="/Contact" className="OptBtn">
          Contact
        </Link>
        <div
          className="OptBtn laptop:scale-150"
          style={{ border: "none" }}
          onClick={closeMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e8eaed"
          >
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
