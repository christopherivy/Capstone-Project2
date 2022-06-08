import React from 'react';
import './exercises.css';
import { useNavigate } from 'react-router-dom';
import Nav from '../Nav/Nav';

function Exercises () {
	let navigate = useNavigate();
	return (
		<div className="" > {/* className = form-label form-control */ }
			<Nav />
			<h1>Exercises</h1>
			<div className="input">

				<p>Filter by exercise:</p>
				<input size="60" type="text" name="exercises" id="exercises" placeholder="🔽dropdown list of exercise" />

				<p>Filter by bodypart:</p>
				<input size="60" type="text" name="exercises" id="exercises" placeholder="🔽dropdown list of body parts" />

				<p>Filter by equipment:</p>
				<input size="60" type="text" name="exercises" id="exercises" placeholder="🔽dropdown list of equipment" />

			</div>
			<a href="" className="btn btn-primary" >Filter</a>
			<a href="" className="btn btn-primary" >Reset</a>
			<a href="" className="btn btn-outline-primary" >Browse Workouts</a>
			<h2>Results</h2>
		</div>
	);
}

export default Exercises;
