import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextProvider } from '../context/Context'

const Navbar = () => {
  const { authenticated } = useContext(ContextProvider)

    return (
      authenticated
      ?
  <nav className="main-header navbar navbar-expand navbar-white navbar-light">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" data-widget="pushmenu" href="/" role="button"><i className="fas fa-bars"></i></a>
      </li>
      <li className="nav-item d-none d-sm-inline-block">
        <Link to="/" className="nav-link">Home</Link>
      </li>
      <li className="nav-item d-none d-sm-inline-block">
        <Link to="/users" className="nav-link">Users</Link>
      </li>
      <li className="nav-item d-none d-sm-inline-block">
        <Link to="/categories" className="nav-link">Categories</Link>
      </li>
      <li className="nav-item d-none d-sm-inline-block">
        <Link to="/countries" className="nav-link">Countries</Link>
      </li>
      <li className="nav-item d-none d-sm-inline-block">
        <Link to="/ads" className="nav-link">Ads</Link>
      </li>
    </ul>

    <ul className="navbar-nav ml-auto">
     <li className="nav-item">
        <a className="nav-link" data-widget="fullscreen" href="#" role="button">
          <i className="fas fa-expand-arrows-alt"></i>
        </a>
      </li>
    </ul>
  </nav>
  :
  <></>
    )
}

export default Navbar
