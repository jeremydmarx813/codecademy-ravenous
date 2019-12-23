import React from 'react';
import logo from '/Users/jeremydmarx/Codecademy/ravenous/src/logo.svg';
import './App.css';
import BusinessList from '/Users/jeremydmarx/Codecademy/ravenous/src/components/BusinessList/BusinessList.js';
import SearchBar from '/Users/jeremydmarx/Codecademy/ravenous/src/components/SearchBar/SearchBar.js';

class App extends React.Component {
  render(){
     return (
    <div className="App">
    <h1>ravenous</h1>
    <SearchBar />
    <BusinessList /> 
  </div>
    );
   }
}

export default App;
