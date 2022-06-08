import React from 'react';
import Login from '../Login/Login';
import { BrowserRouter, Route, useNavigate } from 'react-router-dom';
import CreateAccount from '../CreateAccount/CreateAccount';
import Exercises from '../Exercises/Exercises';
import './home.css';
import Quote from '../Quote/Quote';
import Nav from '../Nav/Nav';

function Home () {
	let navigate = useNavigate();
	return (
		<div>
			<Nav />
			<h1>Personal Fitness Routine</h1>
			<a href="" className="btn btn-primary" onClick={ () => {
				navigate("/signin");
			} }  >Log In</a> {/* these buttons take us to routes. */ }
			<a href="" className="btn btn-primary" onClick={ () => {
				navigate("/create-account");
			} } >Create an Account</a>
			<a href="" className="btn btn-primary" onClick={ () => {
				navigate("/exercises");
			} } >Browse Workouts</a>
			<Quote />
		</div>
	);
}

export default Home;
