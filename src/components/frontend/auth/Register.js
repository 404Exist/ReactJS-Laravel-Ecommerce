import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    errors: [],
  });
  const handleInput = (e) => {
    setState({...state, [e.target.name]: e.target.value});
  }

  const registerSubmit = (e) => {
    e.preventDefault();
    axios.get('/sanctum/csrf-cookie').then(response => {
      axios.post('/api/register', state).then(res => {
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
					<li className="item-link"><span>Register</span></li>
				</ul>
			</div>
			<div className="row">
				<div className="col-md-10 col-md-offset-1">							
					<div className=" main-content-area">
						<div className="wrap-login-item ">
							<div className="register-form form-item ">
								<form className="form-stl" onSubmit={registerSubmit} >
									<fieldset className="wrap-title">
										<h3 className="form-title">Create an account</h3>
                    {state.errors?.message && (
                      <p className="alert alert-danger p-3 mt-1">
                        <strong> {state.errors?.message} </strong>
                      </p>
                    )}
										<h4 className="form-subtitle">Personal infomation</h4>
									</fieldset>									
									<fieldset className="wrap-input">
										<label htmlFor="name">Name*</label>
										<input type="text" id="name" name="name" placeholder="Name*" onChange={handleInput} value={state.name} />
                    {state.errors?.errors?.name && (
                      <p className="alert alert-danger p-3 mt-1">
                        {state.errors?.errors?.name?.map((err, index) => (<strong key={index}> {err} <br /></strong>))}
                      </p>
                    )}
                  </fieldset>
									<fieldset className="wrap-input">
										<label htmlFor="email">Email Address*</label>
										<input type="email" id="email" name="email" placeholder="Email address" onChange={handleInput} value={state.email} />
                    {state.errors?.errors?.email && (
                      <p className="alert alert-danger p-3 mt-1">
                        {state.errors?.errors?.email?.map((err, index) => (<strong key={index}> {err} <br /></strong>))}
                      </p>
                    )}
									</fieldset>
									<fieldset className="wrap-title">
										<h3 className="form-title">Login Information</h3>
									</fieldset>
									<fieldset className="wrap-input item-width-in-half left-item ">
										<label htmlFor="password">Password *</label>
										<input type="password" id="password" name="password" placeholder="Password" onChange={handleInput} value={state.password} />
                    {state.errors?.errors?.password && (
                      <p className="alert alert-danger p-3 mt-1">
                        {state.errors?.errors?.password?.map((err, index) => (<strong key={index}> {err} <br /></strong>))}
                      </p>
                    )}
									</fieldset>
									<fieldset className="wrap-input item-width-in-half ">
										<label htmlFor="password_confirmation">Confirm Password *</label>
										<input type="password" id="password_confirmation" name="password_confirmation" placeholder="Confirm Password" onChange={handleInput} value={state.passwordConfirm} />
                    {state.errors?.errors?.password_confirmation && (
                      <p className="alert alert-danger p-3 mt-1">
                        {state.errors?.errors?.password_confirmation?.map((err, index) => (<strong key={index}> {err} <br /></strong>))}
                      </p>
                    )}
                  </fieldset>
									<input type="submit" className="btn btn-sign" value="Register" name="register" />
								</form>
							</div>											
						</div>
					</div>	
				</div>
			</div>
    </div>
  )
}

export default Register
