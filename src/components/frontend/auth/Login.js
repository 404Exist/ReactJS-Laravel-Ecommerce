import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    email: '',
    password: '',
    errors: [],
  });
  const handleInput = (e) => {
    setState({...state, [e.target.name]: e.target.value});
  }

  const loginSubmit = (e) => {
    e.preventDefault();
    axios.get('/sanctum/csrf-cookie').then(response => {
      axios.post('/api/login', state).then(res => {
        localStorage.setItem('authUser',JSON.stringify(Object.assign({}, res.data.user, {token: res.data.token})));
        swal("Success", res.data.message, 'success');
        navigate('/');
      })
      .catch(err => setState({...state, errors: err.response.data}))
    });
  }
  return (
    <div>
      <div className="wrap-breadcrumb">
				<ul>
					<li className="item-link"><Link to="/" className="link">home</Link></li>
					<li className="item-link"><span>login</span></li>
				</ul>
			</div>
			<div className="row">
				<div className="col-md-10 col-md-offset-1">
					<div className=" main-content-area">
						<div className="wrap-login-item ">						
							<div className="login-form form-item form-stl">
								<form onSubmit={loginSubmit}>
									<fieldset className="wrap-title">
										<h3 className="form-title">Log in to your account</h3>
                    {state.errors?.message && (
                      <p className="alert alert-danger p-3 mt-1">
                        <strong> {state.errors?.message} </strong>
                      </p>
                    )}										
									</fieldset>
									<fieldset className="wrap-input">
										<label htmlFor="email">Email Address:</label>
										<input type="text" id="email" name="email" placeholder="Type your email address" onChange={handleInput} value={state.email}/>
                    {state.errors?.errors?.email && (
                      <p className="alert alert-danger p-3 mt-1">
                        {state.errors?.errors?.email?.map((err, index) => (<strong key={index}> {err} <br /></strong>))}
                      </p>
                    )}
									</fieldset>
									<fieldset className="wrap-input">
										<label htmlFor="password">Password:</label>
										<input type="password" id="password" name="password" placeholder="************" onChange={handleInput} value={state.password} />
                    {state.errors?.errors?.password && (
                      <p className="alert alert-danger p-3 mt-1">
                        {state.errors?.errors?.password?.map((err, index) => (<strong key={index}> {err} <br /></strong>))}
                      </p>
                    )}
									</fieldset>
									<fieldset className="wrap-input">
										<label className="remember-field">
											<input className="frm-input " name="rememberme" id="rememberme" value="forever" type="checkbox" /><span>Remember me</span>
										</label>
										<Link className="link-function left-position" to="#" title="Forgotten password?">Forgotten password?</Link>
									</fieldset>
									<input type="submit" className="btn btn-submit" value="Login" name="submit" />
								</form>
							</div>												
						</div>
					</div>	
				</div>
			</div>
    </div>
  )
}

export default Login
