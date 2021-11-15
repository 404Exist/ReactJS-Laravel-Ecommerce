import React, { useState } from 'react'
import { Route, Routes as Switch, Navigate, useNavigate } from "react-router-dom";
import { useEffect } from 'react/cjs/react.development';
import { getLoggedInUser, authToken } from "./components/frontend/auth/checkAuth";

import MasterLayout from "./layouts/admin/MasterLayout";
import MasterLayoutFront from "./layouts/frontend/MasterLayoutFront";
import {adminRoutes, routes} from "./routes/routes";

const Routes= () => {
  const navigate = useNavigate();
  const [loggedUser] = useState(getLoggedInUser('authUser'));
  const [loggedAdmin] = useState(getLoggedInUser('authAdmin'));
  const [userToken, setUserToken] = useState(true);
  const [adminToken, setAdminToken] = useState(true);


  useEffect(() => {
    authToken('authAdmin').then(res => setAdminToken(res));
    if (adminToken) navigate('/admin/dashboard', {replace: true});
    console.log(adminToken ? 'yes'  : 'asd');
  }, []);

  useEffect(() => {
    authToken('authUser').then(res => setUserToken(res));
    // if (userToken) navigate('/', {replace: true});
  }, []);
  return (
      <Switch>
        {
          adminRoutes.map((route, index) => {
            return (
              route.component && (
                route.guest && loggedAdmin && adminToken ? (<Route key={index} path={route.path} element={<Navigate replace to="/admin/dashboard" />} />) : 
                // route.auth && (!loggedAdmin || !adminToken ) ? (<Route key={index} path={route.path} element={<Navigate replace to="/admin/login" />} />) :
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
          })
        }
        {
          routes.map((route, index) => {
            return (
              route.component && (
                route.guest && loggedUser && userToken ? (<Route key={index} path={route.path} element={<Navigate replace to="/" />} />) : 
                route.auth && (!loggedUser || !userToken) ? (<Route key={index} path={route.path} element={<Navigate replace to="/login" />} />) :
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={<MasterLayoutFront Content={route.component}/>}
                />
              )
            )
          })
        }
        <Route path="/admin" element={<Navigate replace to="/admin/dashboard" />} />
      </Switch>
  )
}

export default Routes

