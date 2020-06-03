import React from 'react';
import { Link } from 'react-router-dom';
import { RavConsumer } from '../RavState';

//!!NEEDS resetSearch and clearSearch

const HomeButton = (props) => {
	return (
		<RavConsumer>
			{({ resetSearch }) => (
				<div className="headerDiv"> 
					<Link to="/">
						<h1 onClick={resetSearch}>ravenous</h1>
					</Link>
				</div>
			)}
		</RavConsumer>
	);
};

export default HomeButton;
