import React from 'react';
import './Business.css';
import { Link } from 'react-router-dom'


//!!Add delete button to each business

class Business extends React.Component {
    constructor(props){
       super(props);
       this.state = {
          businessData: this.props.business
       };
    }
    render() {
      return (
        <Link   to={{pathname: "individual-business", state: this.state.businessData}} >
        <div className="Business">
        <div className="image-container">
          <img src={this.props.business.imageSrc} alt=''/>
        </div>
        <h2>{this.props.business.name}</h2>
        <div className="Business-information">
          <div className="Business-address">
            <p>{this.props.business.address}</p>
            <p>{this.props.business.city}</p>
            <p>{this.props.business.state} {this.props.business.zipCode}</p>
          </div>
          <div className="Business-reviews">
            <h3>{this.props.business.category}</h3>
            <h3 className="rating">{this.props.business.rating}</h3>
            <p>{this.props.business.reviewCount} reviews</p>
          </div>
        </div>
      </div>  
      </Link>
      )
    }
  }

export default Business;