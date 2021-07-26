import React from 'react'
// import { Nav } from 'react-bootstrap'
import { Link } from 'react-scroll'

function NavBar() {
  return (
    <div className="nav container">
      <h1> <Link to="home"> Herman <span>Liu</span>  </Link></h1>
      <div className="nav-items">
        <p><Link to="services">Services</Link></p>
        <p><Link to="projects">Projects</Link></p>
        <p><Link to="contact">Contact</Link></p>        
      </div>
      {/* <div className="nav-menu">

      </div> */}
    </div>
  )
}

export default NavBar