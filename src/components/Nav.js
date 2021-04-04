import React, { useState } from "react";
import { Link } from "react-router-dom";
// import "../index.css";
import { AiTwotoneHome, AiOutlineSearch } from "react-icons/ai";
import { FcAbout, FcAdvertising } from "react-icons/fc";
import { MdPermContactCalendar } from "react-icons/md";
import { RiMenu4Line } from "react-icons/ri";

function Nav() {
  const [navWidth, setNavWidth] = useState(false);

  const toggleNav = () => {
    setNavWidth(!navWidth);
  };
  window.onscroll = () => setNavWidth(false);
  return (
    <div className="nav-logo">
      <li className="logo">
        <Link to="/">Kasi Rooms</Link>
      </li>
      <li className="menu-icon">
        <RiMenu4Line onClick={toggleNav} />
      </li>
      <div className={navWidth ? "nav-bar active" : "nav-bar"}>
        <ul className={navWidth ? "nav-menu active" : "nav-menu"}>
          <span className="close-nav" onClick={toggleNav}>
            X
          </span>
          <li>
            <Link to="/" onClick={toggleNav}>
              <AiTwotoneHome className="icon" />
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={toggleNav}>
              <FcAbout className="icon" />
              About
            </Link>
          </li>
          <li>
            <Link to="/search" onClick={toggleNav}>
              <AiOutlineSearch className="icon" />
              Find Room
            </Link>
          </li>
          <li>
            <Link to="/advertise" onClick={toggleNav}>
              <FcAdvertising className="icon" />
              Advertise Room
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={toggleNav}>
              <MdPermContactCalendar className="icon" />
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Nav;
