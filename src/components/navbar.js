import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import SideNav from "./sideNav";

const links = ["about", "services", "projects", "contact", "resume"];

function NavBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [navBar, setNavBar] = useState(false);
  const [border, setBorder] = useState(false);
  const [sideNav, setSideNav] = useState(false);

  const showButon = () => {
    if (window.innerWidth <= 768) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButon();
  }, []);

  const changeBackground = () => {
    // console.log(window.scrollY)
    // If the scroll Y is more than height of navbar
    if (window.scrollY >= 80) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }

    if (window.scrollY >= 980) {
      setBorder(true);
    } else {
      setBorder(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <div className={navBar ? "nav-bar active" : "nav-bar"}>
      <div className="nav container">
        <h1>
          {" "}
          <Link to="home">
            {" "}
            Herman <span>Liu</span>{" "}
          </Link>
        </h1>
        <SideNav />
        <div className="nav-items">
          {links.map((link) => (
            <p>
              <Link to={link}> {link} </Link>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
