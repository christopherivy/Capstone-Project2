import React from 'react';
import './signin.css';
import Quote from '../Quote/Quote';
import Nav from '../Nav/Nav';

function Signin () {
	return (
		<div className="form-label form-control" >
			<Nav />
			<h1>Sign In</h1>
			<section className='signin-section inputs'  >
				<label htmlFor="userName">UserName:</label>
				<input type="text" name='userName' id='userName' placeholder='Enter your username' />

				<label htmlFor="password">Password:</label>
				<input type="password" name='password' id='password' placeholder='Enter your password' />
			</section>
			<button className="btn btn-primary" >Sign In</button>
			<Quote />
		</div>
	);
}

export default Signin;

/*
============TODO=============
- make the input fields stacked top and bottom
- think about whether to keep changing quote everytime.
*/
