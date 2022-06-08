import React from 'react';
import "./Quote.css";

function Quote () {
	return (


		<div  >
			<h2 className='niceQuote'>{/* use API to get the quote */ }
				“You've gotta dance like there's nobody watching,
				Love like you'll never be hurt,
				Sing like there's nobody listening,
				And live like it's heaven on earth.”
				<br />
				<small>― William W. Purkey</small> {/* use API to get the author of quote */ }
			</h2>
		</div>
	);
}

export default Quote;
