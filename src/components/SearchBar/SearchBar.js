import React from 'react';
import './SearchBar.css';
// import { Link } from 'react-router-dom';
import { RavConsumer } from '../../RavState';
import HomeButton from '../HomeButton/HomeButton';

const SearchBar = props => {
	return (
		<RavConsumer>
			{({ renderSortByOptions, handleSearchTermChange, handleSearch, term, location }) => (
				<div className="SearchBar">
					<div className="SearchBar-sort-options">
						<ul>{renderSortByOptions()}</ul>
					</div>
					<div className="SearchBar-fields">
						<input
							onChange={handleSearchTermChange}
							placeholder="Search Businesses"
							name="term"
							value={term}
						/>
						<input
							onChange={handleSearchTermChange}
							placeholder="Where?"
							name="location"
							value={location}
						/>
					</div>
					<div className="SearchBar-submit">
						<button onClick={handleSearch}>Let's Go</button>
					</div>
				</div>
			)}
		</RavConsumer>
	);
};

export default SearchBar;
