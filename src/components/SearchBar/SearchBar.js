import React from 'react';
import './SearchBar.css';
// import { Link } from 'react-router-dom';
import HomeButton from '../HomeButton/HomeButton';

class SearchBar extends React.Component {
   constructor(props){
     super(props);
     this.state = {
       term: '',
       location: '',
       sortBy: 'best_match'
     };
     this.sortByOptions = {
      'Best Match': 'best_match',
      'Highest Rated': 'rating',
      'Most Reviewed': 'review_count'
    };
   }
    
    getSortByClass = sortByOption => {
      if(this.state.sortBy === sortByOption){
        return 'active';
      } else {
        return '';
      }
    }


    handleSearchTermChange = event =>{
      this.setState({
        [event.target.name]: event.target.value
      });
    }

     
    handleSearch = event => {
      if(this.state.term.length && this.state.location.length){

        event.preventDefault();
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
      } else {
        console.log('%cNeed Input to Search Bar', 'color:red;background-color:white;font-size:25px;padding:5px');
      }
    }

    resetSearch = () => {
       this.setState({
              term: '',
              location: ''
          });
    }

    renderSortByOptions = () => {
        return Object.keys(this.sortByOptions).map(option => {
            let sortByOptionValue = this.sortByOptions[option];
        return (
                <React.Fragment>
                 
                <li key={sortByOptionValue} 
                    name={sortByOptionValue}
                   className={this.getSortByClass(sortByOptionValue)} 
                   onClick={this.handleSearchTermChange.bind(this, sortByOptionValue)}>
                     {option} </li>
                  </React.Fragment>
                     );
        });
    }

    render(){
        return (
           <React.Fragment>
             <HomeButton resetSearch={this.resetSearch} clearSearch={this.props.clearSearch}/>
            <div className="SearchBar">
               
            <div className="SearchBar-sort-options">
              <ul>
                {this.renderSortByOptions()}
              </ul>
            </div>
            <div className="SearchBar-fields">
              <input onChange={this.handleSearchTermChange} placeholder="Search Businesses" name="term" value={this.state.term}/>
              <input onChange={this.handleSearchTermChange} placeholder="Where?" name="location" value={this.state.location} />
            </div>
            <div className="SearchBar-submit">
              <button onClick={this.handleSearch}>Let's Go</button>
            </div>
          </div>
          </React.Fragment>
        );
    }
}

export default SearchBar;