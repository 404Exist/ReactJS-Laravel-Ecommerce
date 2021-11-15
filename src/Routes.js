import React, { Component } from 'react'
import { Route, Routes as Switch, Navigate } from "react-router-dom";
import { getLoggedInUser, authToken } from "./components/frontend/auth/checkAuth";

import MasterLayout from "./layouts/admin/MasterLayout";
import MasterLayoutFront from "./layouts/frontend/MasterLayoutFront";
import {adminRoutes, routes} from "./routes/routes";

export default class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedUser: getLoggedInUser('authUser'),
      loggedAdmin: getLoggedInUser('authAdmin'),
      userToken: true,
      adminToken: false,
    }
    this.adminRoutes = () => adminRoutes.map((route, index) => (<Route key={index} path={route.path} exact={route.exact} name={route.name} element={<></>} /> ));
    this.routes = () => routes.map((route, index) => (<Route key={index} path={route.path} exact={route.exact} name={route.name} element={<></>} /> ));
  }

  componentDidMount() {
    authToken('authAdmin').then(res => this.setState({...this.state, adminToken:res}));
    authToken('authUser').then(res => this.setState({...this.state, userToken:res}));
    // console.log(this.state.loggedAdmin && this.state.adminToken ? 'yes' : 'no');
  }

  componentDidUpdate() {
    this.adminRoutes = () => adminRoutes.map((route, index) => (
        route.component && (
          route.guest && this.state.loggedAdmin && this.state.adminToken ? (<Route key={index} path={route.path} element={<Navigate replace to="/admin/dashboard" />} />) : 
          route.auth && (!this.state.loggedAdmin || !this.state.adminToken ) ? (<Route key={index} path={route.path} element={<Navigate replace to="/admin/login" />} />) :
          route.name === 'Login' ? (<Route key={index} path={route.path} element={<route.component />} />) :
          <Route 
            key={index}
            path={route.path}
            exact={route.exact}
            name={route.name}
            element={<MasterLayout Content={route.component}/>}
          />
        )
      )
    )
    this.routes = () => routes.map((route, index) => (
        route.component && (
          route.guest && this.state.loggedUser && this.state.userToken ? (<Route key={index} path={route.path} element={<Navigate replace to="/" />} />) : 
          route.auth && (!this.state.loggedUser || !this.state.userToken) ? (<Route key={index} path={route.path} element={<Navigate replace to="/login" />} />) :
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            name={route.name}
            element={<MasterLayoutFront Content={route.component}/>}
          />
        )
      )
    )
  }


  render() {
    return (
      <Switch>
      { this.adminRoutes() }
      { this.routes() }
      <Route path="/admin" element={<Navigate replace to="/admin/dashboard" />} />
    </Switch>
    )
  }
}