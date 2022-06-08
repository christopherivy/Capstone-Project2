import React from 'react';
import './App.css';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home/Home";
import CreateAccount from "./CreateAccount/CreateAccount";
import Exercises from "./Exercises/Exercises";
import Signin from './Signin/Signin';

function App () {
	return (
		<Router>
			{/* <nav>
				<Link to="/" >Home </Link>
				<Link to="/exercises" > Exercises</Link>
				<Link to="/create-account" > CreateAccount</Link>
				<Link to="/signin" > Signin</Link>
			</nav> */}

			<Routes>
				<Route path="/" element={ <Home /> } />
				<Route path="/exercises" element={ <Exercises /> } />
				<Route path="/create-account" element={ <CreateAccount /> } />
				<Route path="/signin" element={ <Signin /> } />
			</Routes>
			<div>Footer!!</div>
		</Router>

	);
}

export default App;
