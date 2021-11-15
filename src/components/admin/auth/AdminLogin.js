import React, { useEffect, useState } from 'react'
import { loadScript } from '../../../assets/load'

import '../../../assets/admin/plugins/fontawesome-free/css/all.min.css';
import '../../../assets/admin/plugins/icheck-bootstrap/icheck-bootstrap.min.css';
import '../../../assets/admin/dist/css/adminlte.min.css';
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
// import '../../../assets/admin/dark-mode.css';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    email: '',
    password: '',
    errors: [],
  });
  useEffect(() => {
    loadScript('../../../assets/admin/plugins/jquery/jquery.min.js');
    loadScript('../../../assets/admin/plugins/bootstrap/js/bootstrap.bundle.min.js');
    loadScript('../../../assets/admin/dist/js/adminlte.js');
  }, []);

  const handleInput = (e) => {
    setState({...state, [e.target.name]: e.target.value});
  }

  const loginSubmit = (e) => {
    e.preventDefault();
    axios.get('/sanctum/csrf-cookie').then(response => {
      axios.post('/api/admin/login', state).then(res => {
        localStorage.setItem('authAdmin',JSON.stringify(Object.assign({}, res.data.user, {token: res.data.token})));
        swal("Success", res.data.message, 'success');
        // navigate('/admin/dashboard/');
        window.location.href = '/admin/dashboard';
      })
      .catch(err => setState({...state, errors: err.response.data}));
    });
  }
  return (
    <div className="hold-transition d-flex flex-column justify-content-center vh-100">
      <div className="login-box" style={{margin: 'auto'}}>
        <div className="card card-outline card-primary">
          <div className="card-header text-center">
            <a href="index2.html" className="h1"><b>Admin</b>LTE</a>
          </div>
          <div className="card-body">
            {state.errors?.message && (
              <p className="alert alert-danger p-3 mt-1">
                <strong> {state.errors?.message} </strong>
              </p>
            )}			
            <p className="login-box-msg">Sign in to start your session</p>

            <form onSubmit={loginSubmit}>
              <div className="input-group mb-3">
                <input type="email" name="email" className="form-control" placeholder="Email" onChange={handleInput} value={state.email}/>
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope"></span>
                  </div>
                </div>
              </div>
              {state.errors?.errors?.email && (
                <p className="alert alert-danger p-3 mt-1">
                  {state.errors?.errors?.email?.map((err, index) => (<strong key={index}> {err} <br /></strong>))}
                </p>
              )}
              <div className="input-group mb-3">
                <input type="password" name="password" className="form-control" placeholder="Password" onChange={handleInput} value={state.password}/>
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock"></span>
                  </div>
                </div>
              </div>
              {state.errors?.errors?.password && (
                <p className="alert alert-danger p-3 mt-1">
                  {state.errors?.errors?.password?.map((err, index) => (<strong key={index}> {err} <br /></strong>))}
                </p>
              )}
              <div className="row">
                <div className="col-8">
                  <div className="icheck-primary">
                    <input type="checkbox" id="remember" name="rememberme" defaultValue="1" />
                    <label htmlFor="remember">
                      Remember Me
                    </label>
                  </div>
                </div>
                <div className="col-4">
                  <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin
