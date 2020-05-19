import React from 'react';
import './Business.css';
import { Link } from 'react-router-dom';

//!!Add delete button to each business

const Business = props => {
   const {id, imageSrc, name, address, category, rating, reviewCount} = props.business;
	
		return (
			<div className="Business">
				<Link to={{ pathname: `/individual-business/${id}`, state: props.business }}>
					<div className="image-container">
						<img src={imageSrc} alt="" />
					</div>
					<h2>{name}</h2>
				</Link>
				<div className="Business-information">
					<div className="Business-address">
						<p>{address}</p>
						
					</div>
					<div className="Business-reviews">
						<h3>{category}</h3>
						<h3 className="rating">{rating}</h3>
						<p>{reviewCount} reviews</p>
					</div>
				</div>
			</div>
		);
	
}

export default Business;
