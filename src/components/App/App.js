import React from 'react';
import logo from '/Users/jeremydmarx/Codecademy/ravenous/src/logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../util/Yelp';
import IndvBusiness from '../IndvBusiness/IndvBusiness';
import HomeButton from '../HomeButton/HomeButton';

/*
Codecademy suggestions
Make addresses clickable and have them open the address in Google Maps in a new tab
Make images clickable and have them open the business’ website in a new tab
Clicking on a different sorting option automatically requeries the Yelp API, rather than having to manually click “Let’s Go” again
Implement your own type of sort (for example, by entering a distance or radius from a central location)
Allow you to search by pressing “Enter” (or “Return”) on your keyboard, as opposed to manually clicking
Add autocompletion of addresses to the “Location” input
*/


class App extends React.Component {
constructor(){
  super();
  this.state = {
    businesses: []
  };
}

 searchYelp = (term, location, sortBy) => {
  //  console.log(`Search Yelp with ${term}, ${location}, ${sortBy}.`);
  Yelp.search(term, location, sortBy).then(businesses => {
    this.setState({
      businesses: businesses
    });
  });
 }

clearSearch = () => {
  this.setState({
    businesses: []
  });
}

  render(){
     return (
    <Router>
      <div className="App">
         <SearchBar searchYelp={this.searchYelp} clearSearch={this.clearSearch}/>
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
