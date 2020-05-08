import React from 'react';
import logo from '/Users/jeremydmarx/Codecademy/ravenous/src/logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../util/Yelp';
import IndvBusiness from '../IndvBusiness/IndvBusiness';

//ADD REACT ROUTER SO EACH BUSINESS CAN HAVE ITS OWN PAGE


/*
HARDCODED Business info
const business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};

const businesses = [business, business, business, business, business, business];
*/

class App extends React.Component {
constructor(props){
  super(props);
  this.state = {
    businesses: []
  };
  this.searchYelp = this.searchYelp.bind(this);
}

 searchYelp(term, location, sortBy){
  //  console.log(`Search Yelp with ${term}, ${location}, ${sortBy}.`);
  Yelp.search(term, location, sortBy).then(businesses => {
    this.setState({
      businesses: businesses
    });
  });
 }

  render(){
     return (
    <Router>
      <div className="App">
        <Link to="/">
           <h1>ravenous</h1>
         </Link>
         <SearchBar searchYelp={this.searchYelp} />
         <Route exact path="/">
           <BusinessList businesses={this.state.businesses}/> 
         </Route>
         <Route path="/individual-business">
           <IndvBusiness />
         </Route>
         

      </div>
    </Router>
    );
   }
}

export default App;
