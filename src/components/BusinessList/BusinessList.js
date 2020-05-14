import React from 'react';
import './BusinessList.css';
import { RavConsumer } from '../../RavState';
import Business from '../Business/Business';

class BusinessList extends React.Component {
	//     const apiYes = (
	//      <div className="BusinessList">
	//        {
	//        this.props.businesses.map(business => {
	//            return <Business business={business} key={business.id} />;
	//        })
	//        }
	//     </div>
	//  );

	//  const apiNo = (
	//      <div className="BusinessList">
	//        <div className="Business">
	//          <h2>We aint got No search results! Either you didn't search or yelp! said No!</h2>
	//       </div>
	//      </div>
	//  );
	render() {
		return (
			<RavConsumer>
				{({businesses}) => (
					<div className="BusinessList">
						<div className="Business">
							<h2>We aint got No search results! Either you didn't search or yelp! said No!</h2>
						</div>
					</div>
				)}
			</RavConsumer>
		);
	}
}

export default BusinessList;
