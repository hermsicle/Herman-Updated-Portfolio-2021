import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'

function NavBar() {

  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)
  const [navBar, setNavBar] = useState(false)
  const [border, setBorder] = useState(false)

  const showButon = () => {
    if (window.innerWidth <= 768) {
      setButton(false)
    } else {
      setButton(true)
    }
  }

  useEffect( ()=> {
    showButon()
  }, [])

  const changeBackground = () => {
    // console.log(window.scrollY)
    // If the scroll Y is more than height of navbar
    if (window.scrollY >= 80) {
      setNavBar(true)
    } else {
      setNavBar(false)
    }

    if (window.scrollY >= 980) {
      setBorder(true)
    } else {
      setBorder(false)
    }
  }

  window.addEventListener('scroll', changeBackground)

  return (
    <div className={navBar ? "nav-bar active" : "nav-bar"}>
      <div className="nav container">
        <h1> <Link to="home"> Herman <span>Liu</span>  </Link></h1>
        <div className="nav-items">
          <p><Link to="services">Services</Link></p>
          <p><Link to="projects">Projects</Link></p>
          <p><Link to="contact">Contact</Link></p>        
        </div>
        <div className="nav-menu">
          <div className="menu-button"></div>
        </div>
      </div>
    </div>
  )
}

export default NavBar