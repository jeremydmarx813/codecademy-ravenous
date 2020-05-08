import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
    render() {
       const apiYes = (
        <div className="BusinessList">
          {
          this.props.businesses.map(business => {
              return <Business business={business} key={business.id} />;
          })
          } 
       </div>
    );

    const apiNo = (
        <div className="BusinessList">
          <div className="Business">
            <h2>We aint got No search results!</h2>
         </div>
        </div>
    );

        return this.props.businesses.length ? apiYes : apiNo;
    }
}

export default BusinessList;