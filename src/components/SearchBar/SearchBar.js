import React from 'react';
import './SearchBar.css';



class SearchBar extends React.Component {
   constructor(props){
     super(props);
     this.state = {
       term: '',
       locations: '',
       sortBy: 'best_match'
     };
     this.handleTermChange = this.handleTermChange.bind(this);
     this.handleLocationChange = this.handleLocationChange.bind(this);
     this.sortByOptions = {
      'Best Match': 'best_match',
      'Highest Rated': 'rating',
      'Most Reviewed': 'review_count'
    };
   }
    
    getSortByClass(sortByOption){
      if(this.state.sortBy === sortByOption){
        return 'active';
      } else {
        return '';
      }
    }

    handleSortByChange(sortByOption){
      this.setState({
        sortBy: sortByOption
      });
    }

    handleTermChange(event){
      this.setState({
        term: event.target.value
      });
    }

    handleLocationChange(event){
      this.setState({
        location: event.target.value
      });
    }

    renderSortByOptions(){
        return Object.keys(this.sortByOptions).map(option => {
            let sortByOptionValue = this.sortByOptions[option];
        return <li key={sortByOptionValue} 
                   className={this.getSortByClass(sortByOptionValue)} 
                   onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>
                     {option} </li>;
        });
    }

    render(){
        return (
            <div className="SearchBar">
            <div className="SearchBar-sort-options">
              <ul>
                {this.renderSortByOptions()}
              </ul>
            </div>
            <div className="SearchBar-fields">
              <input onChange={this.handleTermChange} placeholder="Search Businesses" />
              <input onChange={this.handleLocationChange} placeholder="Where?" />
            </div>
            <div className="SearchBar-submit">
              <a>Let's Go</a>
            </div>
          </div>
        );
    }
}

export default SearchBar;