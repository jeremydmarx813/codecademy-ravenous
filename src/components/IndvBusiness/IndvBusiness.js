import React from 'react';
import './IndvBusiness.css';
import Yelp from '../../util/Yelp';
import Spinner from './Spinner';

class IndvBusiness extends React.Component {
	constructor(props) {
		super(props);
		this.state = this.props.location.state;
	}

	componentDidMount() {
		Yelp.getReviews(this.state.id).then((val) => {
			this.setState({
				reviews : val
			});
		});
	}

	render() {
		const { address, category, city, imageSrc, name, phone, rating, state, zipCode, reviews } = this.state;
		if (reviews) {
			return (
				<div className="BusinessList">
					<div className="Business">
						<h1>{name}</h1>
						<div className="image-container">
							<img src={imageSrc} alt="business display"/>
						</div>
						<h3>{category}</h3>
						<h3>Rating: {rating}</h3>
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
						<div style={{ textAlign: 'center' }}>
							<h1>Reviews</h1>
							{this.state.reviews.map((r, i) => {
								return (
									<div style={{ border: '1px black solid', padding: '2rem' }} key={i}>
										<h3>Rating: {r.reviewRating}</h3>
										<p>{r.reviewText}</p>
										<h3>{r.reviewUserName}</h3>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			);
		} else {
			return (
				<React.Fragment>
					<Spinner />
				</React.Fragment>
			);
		}
	}
}

export default IndvBusiness;
