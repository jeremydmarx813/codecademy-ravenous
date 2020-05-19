import React from 'react';
import './IndvBusiness.css';
import Yelp from '../../util/Yelp';

class IndvBusiness extends React.Component {
	constructor(props) {
		super(props);
		this.state = this.props.location.state;
	}

	componentDidMount() {
		this.setState({
			reviews : Yelp.getReviews(this.state.id)
		});
	}

	render() {
		const { address, category, city, imageSrc, name, phone, rating, state, zipCode } = this.state;

		return (
			<div className="BusinessList">
				<div className="Business">
					<h1>{name}</h1>
					<div className="image-container">
						<img src={imageSrc} />
					</div>
					<div className="Business-address">
						<div>
							<h3>{address}</h3>
							<h5>
								{city}, {state}
							</h5>
						</div>
						<h5>{zipCode}</h5>
					</div>
					<h5>{phone}</h5>
				</div>
			</div>
		);
	}
}

export default IndvBusiness;
