import React from 'react';
import logo from '/Users/jeremydmarx/Codecademy/ravenous/src/logo.svg';
import './App.css';
import BusinessList from '/Users/jeremydmarx/Codecademy/ravenous/src/components/BusinessList/BusinessList.js';
import SearchBar from '/Users/jeremydmarx/Codecademy/ravenous/src/components/SearchBar/SearchBar.js';
import Yelp from '/Users/jeremydmarx/Codecademy/ravenous/src/util/Yelp.js';

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
    <div className="App">
    <h1>ravenous</h1>
    <SearchBar searchYelp={this.searchYelp} />
    <BusinessList businesses={this.state.businesses}/> 
  </div>
    );
   }
}

export default App;
