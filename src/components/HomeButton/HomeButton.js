import React from 'react';
import './HomeButton.css';
import { Link } from 'react-router-dom';
import { RavConsumer } from '../../RavState';

//!!NEEDS resetSearch and clearSearch

const HomeButton = props => {
	return (
		<RavConsumer>
			{({resetSearch}) => (
				<Link to="/">
					<h1
						onClick={() => {
							// this.props.resetSearch();
							// this.props.clearSearch();
						}}
					>
						ravenous
					</h1>
				</Link>
			)}
		</RavConsumer>
	);
};

export default HomeButton;
