import React from 'react';
import "./nav.css";


const Nav = () => {
	return (
		<nav>
			<div className="navLogo" >
				<a href="/"><h1 >Logo</h1></a>
				<div className="navLinks">
					<a href="/"><span>Home</span></a>
					<span>|</span>
					<a href="/exercises"><span>Browse Workouts</span></a>
					<span>|</span>
					<a href="/create-account"><span>Create Account</span></a>
					<span>|</span>
					<a href="/signin"><span>Sign In</span></a>

				</div>
			</div>
			<hr />
		</nav>
	);
};

export default Nav;



/*
===============TODO============
- add font styles from google
- fix logo to nav home
*/