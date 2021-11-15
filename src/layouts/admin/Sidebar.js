import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
      <Link to="index3.html" className="brand-link">
        <img src="../../assets/admin/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '0.8'}}/>
        <span className="brand-text font-weight-light">AdminLTE 3</span>
      </Link>

      <div className="sidebar">
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img src="../../assets/admin/dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User" />
          </div>
          <div className="info">
            <Link to="#" className="d-block">Admin name</Link>
          </div>
        </div>

        <div className="form-inline">
          <div className="input-group" data-widget="sidebar-search">
            <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
            <div className="input-group-append">
              <button className="btn btn-sidebar">
                <i className="fas fa-search fa-fw"></i>
              </button>
            </div>
          </div>
        </div>

        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            <li className="nav-item">
              <Link to="{{admin_url()}}" className="nav-link {{ request()->url() == admin_url() ? active_menu('admin', 1)[1] : '' }}">
              <i className="nav-icon fas fa-tachometer-alt"></i>
              <p>
                Dashboard
                <span className="right badge badge-danger">New</span>
              </p>
              </Link>
            </li>

              <li className="nav-item">
                  <Link to="{{admin_url('roles')}}" className="nav-link {{ active_menu('roles', 2)[1] }}">
                      <i className="fas fa-gavel"></i>
                      <p> Roles <span className="right badge badge-danger">New</span></p>
                  </Link>
              </li>


            <li className="nav-item {{ active_menu('accounts', 2)[0] }}">
              <Link to="#" className="nav-link {{ active_menu('users', 3)[1] }}">
                <i className="nav-icon fas fa-users"></i>
                <p>
                  Accounts
                  <i className="right fas fa-angle-left"></i>
                </p>
              </Link>
              <ul className="nav nav-treeview">
                  <li className="nav-item">
                      <Link to="{{admin_url('accounts/admins')}}" className="nav-link {{ active_menu('admins', 3)[1] }}">
                      <i className="fas fa-users nav-icon"></i>
                      <p>Admins</p>
                      </Link>
                  </li>
                  <li className="nav-item {{ active_menu('users', 3)[0] }}">
                      <Link to="#" className="nav-link {{ active_menu('users', 3)[1] }}">
                          <i className="nav-icon fas fa-users"></i>
                          <p>
                          Users
                          <i className="right fas fa-angle-left"></i>
                          </p>
                      </Link>
                      <ul className="nav nav-treeview">
                      <li className="nav-item">
                          <Link to="{{admin_url('accounts/users')}}" className="nav-link {{ active_menu('users', 3)[1] }}">
                            <i className="far fa-users nav-icon"></i>
                            <p>All Levels</p>
                          </Link>
                      </li>
                      <li className="nav-item">
                          <Link to="{{admin_url('accounts/users')}}?level=user" className="nav-link {{ active_menu('userss', 3)[1] }}">
                            <i className="far fa-users nav-icon"></i>
                            <p>Users</p>
                          </Link>
                          <Link to="{{admin_url('accounts/users')}}?level=vendor" className="nav-link {{ active_menu('userss', 3)[1] }}">
                            <i className="far fa-users nav-icon"></i>
                            <p>Vendors</p>
                          </Link>
                          <Link to="{{admin_url('accounts/users')}}?level=company" className="nav-link {{ active_menu('userss', 3)[1] }}">
                            <i className="far fa-users nav-icon"></i>
                            <p>Companies</p>
                          </Link>
                      </li>
                      </ul>

                  </li>
              </ul>
            </li>

              <li className="nav-item">
                  <Link to="{{admin_url('settings')}}" className="nav-link {{ active_menu('settings', 2)[1] }}">
                      <i className="fas fa-sliders-h"></i>
                  <p>
                  Website settings
                  <span className="right badge badge-danger">New</span>
                  </p>
                  </Link>
              </li>

              <li className="nav-item {{ active_menu('countries', 2)[0] }}">
                  <Link to="#" className="nav-link {{ active_menu('countries', 3)[1] }}">
                  <i className="fa fa-flag"></i>
                  <p>
                      Countries
                      <i className="right fas fa-angle-left"></i>
                  </p>
                  </Link>
                  <ul className="nav nav-treeview">
                  <li className="nav-item">
                      <Link to="{{admin_url('countries')}}" className="nav-link {{ active_menu('create', 3)[1] ? '' : active_menu('countries', 2)[1] }}">
                        <i className="fa fa-flag nav-icon"></i>
                        <p>Countries</p>
                      </Link>
                  </li>
                  <li className="nav-item">
                      <Link to="{{admin_url('countries/create')}}" className="nav-link {{ active_menu('countries', 2)[1] ? active_menu('create', 3)[1] : '' }}">
                        <i className="fa fa-plus nav-icon"></i>
                        <p>Add Countries</p>
                      </Link>
                  </li>
                  </ul>
              </li>

              <li className="nav-item {{ active_menu('cities', 2)[0] }}">
                  <Link to="#" className="nav-link {{ active_menu('cities', 3)[1] }}">
                  <i className="fa fa-flag"></i>
                  <p>
                      Cities
                      <i className="right fas fa-angle-left"></i>
                  </p>
                  </Link>
                  <ul className="nav nav-treeview">
                  <li className="nav-item">
                      <Link to="{{admin_url('cities')}}" className="nav-link {{ active_menu('create', 3)[1] ? '' : active_menu('cities', 2)[1] }}">
                        <i className="fa fa-flag nav-icon"></i>
                        <p>Cities</p>
                      </Link>
                  </li>
                  <li className="nav-item">
                      <Link to="{{admin_url('cities/create')}}" className="nav-link {{ active_menu('cities', 2)[1] ? active_menu('create', 3)[1] : '' }}">
                        <i className="fa fa-plus nav-icon"></i>
                        <p>Add Cities</p>
                      </Link>
                  </li>
                  </ul>
              </li>

              <li className="nav-item {{ active_menu('states', 2)[0] }}">
                  <Link to="#" className="nav-link {{ active_menu('states', 3)[1] }}">
                  <i className="fa fa-flag"></i>
                  <p>
                      States
                      <i className="right fas fa-angle-left"></i>
                  </p>
                  </Link>
                  <ul className="nav nav-treeview">
                  <li className="nav-item">
                      <Link to="{{admin_url('states')}}" className="nav-link {{ active_menu('create', 3)[1] ? '' : active_menu('states', 2)[1] }}">
                        <i className="fa fa-flag nav-icon"></i>
                        <p>States</p>
                      </Link>
                  </li>
                  <li className="nav-item">
                      <Link to="{{admin_url('states/create')}}" className="nav-link {{ active_menu('states', 2)[1] ? active_menu('create', 3)[1] : '' }}">
                        <i className="fa fa-plus nav-icon"></i>
                        <p>Add States</p>
                      </Link>
                  </li>
                  </ul>
              </li>

              <li className="nav-item {{ active_menu('departments', 2)[0] }}">
                  <Link to="#" className="nav-link {{ active_menu('departments', 3)[1] }}">
                  <i className="fa fa-list"></i>
                  <p>
                      Departments
                      <i className="right fas fa-angle-left"></i>
                  </p>
                  </Link>
                  <ul className="nav nav-treeview">
                  <li className="nav-item">
                      <Link to="{{admin_url('departments')}}" className="nav-link {{ active_menu('create', 3)[1] ? '' : active_menu('departments', 2)[1] }}">
                        <i className="fa fa-list nav-icon"></i>
                        <p>Departments</p>
                      </Link>
                  </li>
                  <li className="nav-item">
                      <Link to="{{admin_url('departments/create')}}" className="nav-link {{ active_menu('departments', 2)[1] ? active_menu('create', 3)[1] : '' }}">
                        <i className="fa fa-plus nav-icon"></i>
                        <p>Add Department</p>
                      </Link>
                  </li>
                  </ul>
              </li>

              <li className="nav-item {{ active_menu('trademarks', 2)[0] }}">
                  <Link to="#" className="nav-link {{ active_menu('trademarks', 3)[1] }}">
                  <i className="fa fa-cube"></i>
                  <p>
                      Trademarks
                      <i className="right fas fa-angle-left"></i>
                  </p>
                  </Link>
                  <ul className="nav nav-treeview">
                  <li className="nav-item">
                      <Link to="{{admin_url('trademarks')}}" className="nav-link {{ active_menu('create', 3)[1] ? '' : active_menu('trademarks', 2)[1] }}">
                        <i className="fa fa-cube nav-icon"></i>
                        <p>Trademarks</p>
                      </Link>
                  </li>
                  <li className="nav-item">
                      <Link to="{{admin_url('trademarks/create')}}" className="nav-link {{ active_menu('trademarks', 2)[1] ? active_menu('create', 3)[1] : '' }}">
                        <i className="fa fa-plus nav-icon"></i>
                        <p>New Trademark</p>
                      </Link>
                  </li>
                  </ul>
              </li>

              <li className="nav-item {{ active_menu('manufacturers', 2)[0] }}">
                  <Link to="#" className="nav-link {{ active_menu('manufacturers', 3)[1] }}">
                  <i className="fa fa-cube"></i>
                  <p>
                      Manufacturers
                      <i className="right fas fa-angle-left"></i>
                  </p>
                  </Link>
                  <ul className="nav nav-treeview">
                  <li className="nav-item">
                      <Link to="{{admin_url('manufacturers')}}" className="nav-link {{ active_menu('create', 3)[1] ? '' : active_menu('manufacturers', 2)[1] }}">
                        <i className="fa fa-cube nav-icon"></i>
                        <p>Manufacturers</p>
                      </Link>
                  </li>
                  <li className="nav-item">
                      <Link to="{{admin_url('manufacturers/create')}}" className="nav-link {{ active_menu('manufacturers', 2)[1] ? active_menu('create', 3)[1] : '' }}">
                        <i className="fa fa-plus nav-icon"></i>
                        <p>New Manufacturer</p>
                      </Link>
                  </li>
                  </ul>
              </li>

              <li className="nav-item {{ active_menu('shippings', 2)[0] }}">
                  <Link to="#" className="nav-link {{ active_menu('shippings', 3)[1] }}">
                  <i className="fas fa-shipping-fast"></i>
                  <p>
                      Shipping Companies
                      <i className="right fas fa-angle-left"></i>
                  </p>
                  </Link>
                  <ul className="nav nav-treeview">
                  <li className="nav-item">
                      <Link to="{{admin_url('shippings')}}" className="nav-link {{ active_menu('create', 3)[1] ? '' : active_menu('shippings', 2)[1] }}">
                        <i className="fas fa-shipping-fast nav-icon"></i>
                        <p>Shipping Companies</p>
                      </Link>
                  </li>
                  <li className="nav-item">
                      <Link to="{{admin_url('shippings/create')}}" className="nav-link {{ active_menu('shippings', 2)[1] ? active_menu('create', 3)[1] : '' }}">
                      <i className="fa fa-plus nav-icon"></i>
                      <p>New Shipping Company</p>
                      </Link>
                  </li>
                  </ul>
              </li>

              <li className="nav-item {{ active_menu('malls', 2)[0] }}">
                  <Link to="#" className="nav-link {{ active_menu('malls', 3)[1] }}">
                  <i className="fa fa-building"></i>
                  <p>
                      Malls
                      <i className="right fas fa-angle-left"></i>
                  </p>
                  </Link>
                  <ul className="nav nav-treeview">
                  <li className="nav-item">
                      <Link to="{{admin_url('malls')}}" className="nav-link {{ active_menu('create', 3)[1] ? '' : active_menu('malls', 2)[1] }}">
                        <i className="fa fa-building nav-icon"></i>
                        <p>Malls</p>
                      </Link>
                  </li>
                  <li className="nav-item">
                      <Link to="{{admin_url('malls/create')}}" className="nav-link {{ active_menu('malls', 2)[1] ? active_menu('create', 3)[1] : '' }}">
                        <i className="fa fa-plus nav-icon"></i>
                        <p>New Mall</p>
                      </Link>
                  </li>
                  </ul>
              </li>

              <li className="nav-item {{ active_menu('colors', 2)[0] }}">
                  <Link to="#" className="nav-link {{ active_menu('colors', 3)[1] }}">
                  <i className="fa fa-paint-brush"></i>
                  <p>
                      Colors
                      <i className="right fas fa-angle-left"></i>
                  </p>
                  </Link>
                  <ul className="nav nav-treeview">
                  <li className="nav-item">
                      <Link to="{{admin_url('colors')}}" className="nav-link {{ active_menu('create', 3)[1] ? '' : active_menu('colors', 2)[1] }}">
                        <i className="fa fa-paint-brush nav-icon"></i>
                        <p>Colors</p>
                      </Link>
                  </li>
                  <li className="nav-item">
                      <Link to="{{admin_url('colors/create')}}" className="nav-link {{ active_menu('colors', 2)[1] ? active_menu('create', 3)[1] : '' }}">
                        <i className="fa fa-plus nav-icon"></i>
                        <p>New Color</p>
                      </Link>
                  </li>
                  </ul>
              </li>

              <li className="nav-item {{ active_menu('sizes', 2)[0] }}">
                  <Link to="#" className="nav-link {{ active_menu('sizes', 3)[1] }}">
                  <i className="fa fa-info-circle"></i>
                  <p>
                      Sizes
                      <i className="right fas fa-angle-left"></i>
                  </p>
                  </Link>
                  <ul className="nav nav-treeview">
                  <li className="nav-item">
                      <Link to="{{admin_url('sizes')}}" className="nav-link {{ active_menu('create', 3)[1] ? '' : active_menu('sizes', 2)[1] }}">
                      <i className="fa fa-info-circle nav-icon"></i>
                      <p>Sizes</p>
                      </Link>
                  </li>
                  <li className="nav-item">
                      <Link to="{{admin_url('sizes/create')}}" className="nav-link {{ active_menu('sizes', 2)[1] ? active_menu('create', 3)[1] : '' }}">
                      <i className="fa fa-plus nav-icon"></i>
                      <p>New Size</p>
                      </Link>
                  </li>
                  </ul>
              </li>

              <li className="nav-item {{ active_menu('weights', 2)[0] }}">
                  <Link to="#" className="nav-link {{ active_menu('weights', 3)[1] }}">
                  <i className="fa fa-weight-hanging"></i>
                  <p>
                      Weights
                      <i className="right fas fa-angle-left"></i>
                  </p>
                  </Link>
                  <ul className="nav nav-treeview">
                  <li className="nav-item">
                      <Link to="{{admin_url('weights')}}" className="nav-link {{ active_menu('create', 3)[1] ? '' : active_menu('weights', 2)[1] }}">
                        <i className="fa fa-weight-hanging nav-icon"></i>
                        <p>Weights</p>
                      </Link>
                  </li>
                  <li className="nav-item">
                      <Link to="{{admin_url('weights/create')}}" className="nav-link {{ active_menu('weights', 2)[1] ? active_menu('create', 3)[1] : '' }}">
                        <i className="fa fa-plus nav-icon"></i>
                        <p>New Weight</p>
                      </Link>
                  </li>
                  </ul>
              </li>

              <li className="nav-item {{ active_menu('products', 2)[0] }}">
                  <Link to="#" className="nav-link {{ active_menu('products', 3)[1] }}">
                  <i className="fa fa-tag"></i>
                  <p>
                      Products
                      <i className="right fas fa-angle-left"></i>
                  </p>
                  </Link>
                  <ul className="nav nav-treeview">
                  <li className="nav-item">
                      <Link to="{{admin_url('products')}}" className="nav-link {{ active_menu('create', 3)[1] ? '' : active_menu('products', 2)[1] }}">
                        <i className="fa fa-tag nav-icon"></i>
                        <p>Products</p>
                      </Link>
                  </li>
                  <li className="nav-item">
                      <Link to="{{admin_url('products/create')}}" className="nav-link {{ active_menu('products', 2)[1] ? active_menu('create', 3)[1] : '' }}">
                        <i className="fa fa-plus nav-icon"></i>
                        <p>New Product</p>
                      </Link>
                  </li>
                  </ul>
              </li>

          </ul>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;