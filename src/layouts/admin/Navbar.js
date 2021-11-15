import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" data-widget="pushmenu" to="#" role="button"><i className="fas fa-bars"></i></Link>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <Link to="/admin" className="nav-link">Home</Link>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <Link to="#" className="nav-link">Contact</Link>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <Link to="{{ admin_url('logout') }}" className="nav-link">Logout</Link>
        </li>
      </ul>

      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" data-widget="navbar-search" to="#" role="button">
            <i className="fas fa-search"></i>
          </Link>
          <div className="navbar-search-block">
            <form className="form-inline">
              <div className="input-group input-group-sm">
                <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                <div className="input-group-append">
                  <button className="btn btn-navbar" type="submit">
                    <i className="fas fa-search"></i>
                  </button>
                  <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </li>

        <li className="nav-item dropdown">
          <Link className="nav-link" data-toggle="dropdown" to="#">
            <i className="far fa-comments"></i>
            <span className="badge badge-danger navbar-badge">3</span>
          </Link>
          <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <Link to="#" className="dropdown-item">
              <div className="media">
                <img src="{{ url('assets/adminlte/dist/img/user1-128x128.jpg') }}" alt="User Avatar" className="img-size-50 mr-3 img-circle" />
                <div className="media-body">
                  <h3 className="dropdown-item-title">
                    Brad Diesel
                    <span className="float-right text-sm text-danger"><i className="fas fa-star"></i></span>
                  </h3>
                  <p className="text-sm">Call me whenever you can...</p>
                  <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                </div>
              </div>
            </Link>
            <div className="dropdown-divider"></div>
            <Link to="#" className="dropdown-item">
              <div className="media">
                <img src="{{ url('assets/adminlte/dist/img/user8-128x128.jpg') }}" alt="User Avatar" className="img-size-50 img-circle mr-3" />
                <div className="media-body">
                  <h3 className="dropdown-item-title">
                    John Pierce
                    <span className="float-right text-sm text-muted"><i className="fas fa-star"></i></span>
                  </h3>
                  <p className="text-sm">I got your message bro</p>
                  <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                </div>
              </div>
            </Link>
            <div className="dropdown-divider"></div>
            <Link to="#" className="dropdown-item">
              <div className="media">
                <img src="{{ url('assets/adminlte/dist/img/user3-128x128.jpg') }}" alt="User Avatar" className="img-size-50 img-circle mr-3" />
                <div className="media-body">
                  <h3 className="dropdown-item-title">
                    Nora Silvester
                    <span className="float-right text-sm text-warning"><i className="fas fa-star"></i></span>
                  </h3>
                  <p className="text-sm">The subject goes here</p>
                  <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
                </div>
              </div>
            </Link>
            <div className="dropdown-divider"></div>
            <Link to="#" className="dropdown-item dropdown-footer">See All Messages</Link>
          </div>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link" data-toggle="dropdown" to="#">
            <i className="far fa-bell"></i>
            <span className="badge badge-warning navbar-badge">15</span>
          </Link>
          <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <span className="dropdown-item dropdown-header">15 Notifications</span>
            <div className="dropdown-divider"></div>
            <Link to="#" className="dropdown-item">
              <i className="fas fa-envelope mr-2"></i> 4 new messages
              <span className="float-right text-muted text-sm">3 mins</span>
            </Link>
            <div className="dropdown-divider"></div>
            <Link to="#" className="dropdown-item">
              <i className="fas fa-users mr-2"></i> 8 friend requests
              <span className="float-right text-muted text-sm">12 hours</span>
            </Link>
            <div className="dropdown-divider"></div>
            <Link to="#" className="dropdown-item">
              <i className="fas fa-file mr-2"></i> 3 new reports
              <span className="float-right text-muted text-sm">2 days</span>
            </Link>
            <div className="dropdown-divider"></div>
            <Link to="#" className="dropdown-item dropdown-footer">See All Notifications</Link>
          </div>
        </li>

        <li className="nav-item dropdown">
          <Link className="nav-link" data-toggle="dropdown" to="#">
            <i className="fa fa-globe"></i>
          </Link>
          <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <span className="dropdown-item dropdown-header">Languages</span>
            <div className="dropdown-divider"></div>
            <Link to="/lang/ar" className="dropdown-item">
              <i className="fa fa-flag mr-2"></i> Arabic
            </Link>
            <div className="dropdown-divider"></div>
            <Link to="/lang/en" className="dropdown-item">
              <i className="fa fa-flag mr-2"></i> English
            </Link>
            <div className="dropdown-divider"></div>
          </div>
        </li>

        <li className="nav-item">
          <Link className="nav-link" data-widget="fullscreen" to="#" role="button">
            <i className="fas fa-expand-arrows-alt"></i>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" data-widget="control-sidebar" data-controlsidebar-slide="true" to="#" role="button">
            <i className="fas fa-th-large"></i>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;