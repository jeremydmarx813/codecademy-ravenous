import React from 'react';
import './IndvBusiness.css';
import PropTypes from 'prop-types';
import { withRouter } from "react-router";



class IndvBusiness extends React.Component {
    constructor(props){
        super(props);
        
    }
    
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
      };

    render() {
        const { match, location, history } = this.props;
        
        return (
                <div className="BusinessList">
                  <h1 style={{textAlign: 'center'}}>Test</h1>
                </div>
        )
    }
}

const ShowTheLocationWithRouter = withRouter(IndvBusiness);


export default IndvBusiness;
