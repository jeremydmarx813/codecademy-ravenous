import React from 'react';
import './HomeButton.css';
import { Link } from 'react-router-dom';


class HomeButton extends React.Component {
  constructor(props){
      super(props);
  }
  render(){
    return (
        <React.Fragment>
          <Link to="/" >
            <h1 onClick={() => {
                this.props.resetSearch();
                this.props.clearSearch();
            }
            }>ravenous</h1>
          </Link>
        </React.Fragment>
    )
  }
}

export default HomeButton
