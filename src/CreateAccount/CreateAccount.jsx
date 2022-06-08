import React from 'react';
import './createAccount.css';
import Quote from '../Quote/Quote';
import Nav from '../Nav/Nav';

function CreateAccount () {
	return (
		<div className="form-label form-control" >
			<Nav />
			<h1>Create an Account</h1>
			<section className='create-accout-section' >
				<label htmlFor="userName">UserName:</label>
				<input type="text" name='userName' id='userName' placeholder='Enter your username' />

				<label htmlFor="password">Password:</label>
				<input type="password" name='password' id='password' placeholder='Enter your password' />
			</section>
			<button className="btn btn-primary" >Create Account</button>
			<Quote />
		</div>
	);
}

export default CreateAccount;
