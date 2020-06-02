import React from 'react';
import { RavConsumer } from '../RavState';
import Business from './Business';

const BusinessList = (props) => {
	return (
		<RavConsumer>
			{({ businesses }) => {
				const apiYes = (
					<div className="BusinessList">
						{businesses.map((business) => {
							return <Business business={business} key={business.id} />;
						})}
					</div>
				);

				const apiNo = (
					<div className="BusinessList">
						<div className="Business">
							<h2>We aint got No search results! Either you didn't search or yelp! said No!</h2>
						</div>
					</div>
				);

				return <React.Fragment>{businesses.length ? apiYes : apiNo}</React.Fragment>;
			}}
		</RavConsumer>
	);
};

export default BusinessList;
