import React, { useContext } from 'react'
import { Link , useHistory } from 'react-router-dom'
import { ContextProvider } from '../context/Context'

const Aside = () => {
    const { authenticated } = useContext(ContextProvider)
    let history = useHistory()
    return (
        authenticated
        ?
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <Link to="/" className="brand-link">
          <img src="/dist/img/AdminLTELogo.png" className="brand-image img-circle elevation-3" alt="ad" style={{opacity: .8 }} />
          <span className="brand-text font-weight-light">Ads Center</span>
        </Link>
    
        <div className="sidebar">
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img src="/dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="user" />
            </div>
            <div className="info">
              <Link to="/" className="d-block">Qodeex</Link>
            </div>
          </div>
          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        
              <li className="nav-item">
                <Link to="/" className="nav-link active">
                  <i className="nav-icon fas fa-tachometer-alt"></i>
                  <p>
                    Dashboard
                  </p>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link">
                  <i className="nav-icon fas fa-users"></i>
                  <p>
                    Users
                    <i className="fas fa-angle-left right"></i>
                  </p>
                </Link>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="/users" className="nav-link">
                      <i className="fas fa-users nav-icon"></i>
                      <p>Users</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/user/add" className="nav-link">
                      <i className="fas fa-user nav-icon"></i>
                      <p>Add User</p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link">
                  <i className="nav-icon far fa-circle"></i>
                  <p>
                    Categories
                    <i className="fas fa-angle-left right"></i>
                  </p>
                </Link>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="/categories" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Categories</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/category/add" className="nav-link">
                      <i className="far fa-circle nav-icon"></i>
                      <p>Add Category</p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link">
                  <i className="nav-icon fas fa-flag"></i>
                  <p>
                    Countries
                    <i className="fas fa-angle-left right"></i>
                  </p>
                </Link>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="/countries" className="nav-link">
                      <i className="fas fa-flag nav-icon"></i>
                      <p>Countries</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/country/add" className="nav-link">
                      <i className="fas fa-flag nav-icon"></i>
                      <p>Add Country</p>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link">
                  <i className="nav-icon fas fa-ad"></i>
                  <p>
                    Ads
                    <i className="fas fa-angle-left right"></i>
                  </p>
                </Link>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <Link to="/ads" className="nav-link">
                      <i className="fas fa-ad nav-icon"></i>
                      <p>Ads</p>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/ad/add" className="nav-link">
                      <i className="fas fa-ad nav-icon"></i>
                      <p>Add Ad</p>
                    </Link>
                  </li>
                </ul>
                <li className="nav-item">
                <Link to="#" onClick={async () => {
                    await localStorage.clear()
                    history.push('/login')
                }} className="nav-link">
                  <i className="nav-icon fas fa-sign-out-alt"></i>
                  <p>
                    Logout
                  </p>
                </Link>
              </li>
              </li>
             </ul>
          </nav>
        </div>
      </aside>
      :
      <></>
    )
}

export default Aside
