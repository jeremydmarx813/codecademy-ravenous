import React from 'react';
import logo from '/Users/jeremydmarx/Codecademy/ravenous/src/logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import BusinessList from '../BusinessList/BusinessList';
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../util/Yelp';
import IndvBusiness from '../IndvBusiness/IndvBusiness';
import HomeButton from '../HomeButton/HomeButton';


class App extends React.Component {
constructor(props){
  super(props);
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
