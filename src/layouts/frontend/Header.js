import axios from "axios";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

import { getLoggedInUser } from "../../components/frontend/auth/checkAuth";


const Header = () => {
  const navigate = useNavigate();
  const logoutSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/logout').then(res => {
      localStorage.removeItem('authUser');
      swal("Success", res.data.message, 'success');
      navigate('/');
    })
    .catch(err => console.log(err));
  }
  var authButtons = '';
  if (!getLoggedInUser('authUser')) {
    authButtons = (
      <>
        <li className="menu-item" ><NavLink title="Register or Login" to="/login">Login</NavLink></li>
        <li className="menu-item" ><NavLink title="Register or Login" to="/register">Register</NavLink></li>
      </>
    )
  } else {
    authButtons = (
        <li className="menu-item" ><Link title="Register or Login" to="#" onClick={logoutSubmit}>Logout</Link></li>
    )
  }

  return (
    <header id="header" className="header header-style-1">
      <div className="container-fluid">
        <div style={{marginLeft: '-15px',marginRight: '-15px'}}>
          <div className="topbar-menu-area">
            <div className="container">
              <div className="topbar-menu left-menu">
                <ul>
                  <li className="menu-item" >
                    <Link title="Hotline: (+123) 456 789" to="#" ><span className="icon label-before fa fa-mobile"></span>Hotline: (+123) 456 789</Link>
                  </li>
                </ul>
              </div>
              <div className="topbar-menu right-menu">
                <ul>
                  
                  <li className="menu-item lang-menu menu-item-has-children parent">
                    <Link title="English" to="#"><span className="img label-before"><img src="../../assets/frontend/images/lang-en.png" alt="lang-en" /></span>English<i className="fa fa-angle-down" aria-hidden="true"></i></Link>
                    <ul className="submenu lang" >
                      <li className="menu-item" ><Link title="hungary" to="#"><span className="img label-before"><img src="../../assets/frontend/images/lang-hun.png" alt="lang-hun" /></span>Hungary</Link></li>
                      <li className="menu-item" ><Link title="german" to="#"><span className="img label-before"><img src="../../assets/frontend/images/lang-ger.png" alt="lang-ger" /></span>German</Link></li>
                      <li className="menu-item" ><Link title="french" to="#"><span className="img label-before"><img src="../../assets/frontend/images/lang-fra.png" alt="lang-fre" /></span>French</Link></li>
                      <li className="menu-item" ><Link title="canada" to="#"><span className="img label-before"><img src="../../assets/frontend/images/lang-can.png" alt="lang-can" /></span>Canada</Link></li>
                    </ul>
                  </li>
                  <li className="menu-item menu-item-has-children parent" >
                    <Link title="Dollar (USD)" to="#">Dollar (USD)<i className="fa fa-angle-down" aria-hidden="true"></i></Link>
                    <ul className="submenu curency" >
                      <li className="menu-item" >
                        <Link title="Pound (GBP)" to="#">Pound (GBP)</Link>
                      </li>
                      <li className="menu-item" >
                        <Link title="Euro (EUR)" to="#">Euro (EUR)</Link>
                      </li>
                      <li className="menu-item" >
                        <Link title="Dollar (USD)" to="#">Dollar (USD)</Link>
                      </li>
                    </ul>
                  </li>
                  {authButtons}
                </ul>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="mid-section main-info-area">

              <div className="wrap-logo-top left-section">
                <NavLink to="/" className="link-to-home"><img src="../../assets/frontend/images/logo-top-1.png" alt="mercado" /></NavLink>
              </div>

              <div className="wrap-search center-section">
                <div className="wrap-search-form">
                  <form action="#" id="form-search-top" name="form-search-top">
                    <input type="text" name="search" defaultValue="" placeholder="Search here..." />
                    <button form="form-search-top" type="button"><i className="fa fa-search" aria-hidden="true"></i></button>
                    <div className="wrap-list-cate">
                      <input type="hidden" name="product-cate" defaultValue="0" id="product-cate" />
                      <Link to="#" className="link-control">All Category</Link>
                      <ul className="list-cate">
                        <li className="level-0">All Category</li>
                        <li className="level-1">-Electronics</li>
                        <li className="level-2">Batteries & Chargens</li>
                        <li className="level-2">Headphone & Headsets</li>
                        <li className="level-2">Mp3 Player & Acessories</li>
                        <li className="level-1">-Smartphone & Table</li>
                        <li className="level-2">Batteries & Chargens</li>
                        <li className="level-2">Mp3 Player & Headphones</li>
                        <li className="level-2">Table & Accessories</li>
                        <li className="level-1">-Electronics</li>
                        <li className="level-2">Batteries & Chargens</li>
                        <li className="level-2">Headphone & Headsets</li>
                        <li className="level-2">Mp3 Player & Acessories</li>
                        <li className="level-1">-Smartphone & Table</li>
                        <li className="level-2">Batteries & Chargens</li>
                        <li className="level-2">Mp3 Player & Headphones</li>
                        <li className="level-2">Table & Accessories</li>
                      </ul>
                    </div>
                  </form>
                </div>
              </div>

              <div className="wrap-icon right-section">
                <div className="wrap-icon-section wishlist">
                  <Link to="#" className="link-direction">
                    <i className="fa fa-heart" aria-hidden="true"></i>
                    <div className="left-info">
                      <span className="index">0 item</span>
                      <span className="title">Wishlist</span>
                    </div>
                  </Link>
                </div>
                <div className="wrap-icon-section minicart">
                  <Link to="#" className="link-direction">
                    <i className="fa fa-shopping-basket" aria-hidden="true"></i>
                    <div className="left-info">
                      <span className="index">4 items</span>
                      <span className="title">CART</span>
                    </div>
                  </Link>
                </div>
                <div className="wrap-icon-section show-up-after-1024">
                  <Link to="#" className="mobile-navigation">
                    <span></span>
                    <span></span>
                    <span></span>
                  </Link>
                </div>
              </div>

            </div>
          </div>

          <div className="nav-section header-sticky">
            <div className="header-nav-section">
              <div className="container-fluid">
                <ul className="nav menu-nav clone-main-menu" id="mercado_haead_menu" data-menuname="Sale Info" >
                  <li className="menu-item"><Link to="#" className="link-term">Weekly Featured</Link><span className="nav-label hot-label">hot</span></li>
                  <li className="menu-item"><Link to="#" className="link-term">Hot Sale items</Link><span className="nav-label hot-label">hot</span></li>
                  <li className="menu-item"><Link to="#" className="link-term">Top new items</Link><span className="nav-label hot-label">hot</span></li>
                  <li className="menu-item"><Link to="#" className="link-term">Top Selling</Link><span className="nav-label hot-label">hot</span></li>
                  <li className="menu-item"><Link to="#" className="link-term">Top rated items</Link><span className="nav-label hot-label">hot</span></li>
                </ul>
              </div>
            </div>

            <div className="primary-nav-section">
              <div className="container">
                <ul className="nav primary clone-main-menu" id="mercado_main" data-menuname="Main menu" >
                  <li className="menu-item home-icon">
                    <NavLink to="/" className="link-term mercado-item-title"><i className="fa fa-home" aria-hidden="true"></i></NavLink>
                  </li>
                  <li className="menu-item">
                    <NavLink to="/login" className="link-term mercado-item-title">About Us</NavLink>
                  </li>
                  <li className="menu-item">
                    <NavLink to="shop.html" className="link-term mercado-item-title">Shop</NavLink>
                  </li>
                  <li className="menu-item">
                    <NavLink to="cart.html" className="link-term mercado-item-title">Cart</NavLink>
                  </li>
                  <li className="menu-item">
                    <NavLink to="checkout.html" className="link-term mercado-item-title">Checkout</NavLink>
                  </li>
                  <li className="menu-item">
                    <NavLink to="contact-us.html" className="link-term mercado-item-title">Contact Us</NavLink>
                  </li>																	
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;