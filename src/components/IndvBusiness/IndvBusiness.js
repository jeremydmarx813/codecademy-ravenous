import React from 'react';
import './IndvBusiness.css';
import Yelp from '../../util/Yelp';

class IndvBusiness extends React.Component {
	constructor(props) {
		super(props);
		this.state = this.props.location.state;
  }
  
  componentDidMount(){
     this.setState({
       reviews: Yelp.getReviews(this.state.id)
     })
  }

	render() {
		const { address, alias, category, city, imageSrc, name, phone, rating, state, zipCode, id } = this.state;
    
		return (
			<div className="BusinessList">
				<div className="Business">
					<h1>{name}</h1>
					<img src={imageSrc} />
					<div className="Business-address">
						<h3>{address}</h3>
						<div>
							<h5>{city}</h5>
							<h5>{state}</h5>
						</div>
						<h5>{zipCode}</h5>
            <h5>{phone}</h5>
					</div>

				</div>
			</div>
		);
	}
}

export default IndvBusiness;
