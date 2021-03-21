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
    <>
      <div className="nav-bar">
        <li className="logo">
          <Link to="/">Kasi Rooms</Link>
        </li>
        <li className="menu-icon">
          <RiMenu4Line onClick={toggleNav} />
        </li>
        <ul className={navWidth ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link to="/">
              <AiTwotoneHome className="icon" onClick={toggleNav} />
              Home
            </Link>
          </li>
          <li>
            <Link to="/">
              <FcAbout className="icon" onClick={toggleNav} />
              About
            </Link>
          </li>
          <li>
            <Link to="/">
              <AiOutlineSearch className="icon" onClick={toggleNav} />
              Find Room
            </Link>
          </li>
          <li>
            <Link to="/">
              <FcAdvertising className="icon" onClick={toggleNav} />
              Post Room
            </Link>
          </li>
          <li>
            <Link to="/">
              <MdPermContactCalendar className="icon" onClick={toggleNav} />
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Nav;
