import React from 'react';
import Yelp from './util/Yelp';

const RavContext = React.createContext({
	businesses : [],
	term       : '',
	location   : '',
	sortBy     : ''
});

export class RavComponent extends React.Component {
	constructor() {
		super();
		this.state = {
			businesses : [],
			term       : '',
			location   : '',
			sortBy     : 'best_match'
		};
		this.sortByOptions = {
			'Best Match'    : 'best_match',
			'Highest Rated' : 'rating',
			'Most Reviewed' : 'review_count'
		};
	}

	getSortByClass = (sortByOption) => {
		if (this.state.sortBy === sortByOption) {
			return 'active';
		} else {
			return '';
		}
	};

	handleSearchTermChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	handleSearch = (event) => {
		if (this.state.term.length && this.state.location.length) {
			event.preventDefault();
			this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);
		} else {
			console.log('%cNeed Input to Search Bar', 'color:red;background-color:white;font-size:25px;padding:5px');
		}
	};

	searchYelp = (term, location, sortBy) => {
		//  console.log(`Search Yelp with ${term}, ${location}, ${sortBy}.`);
		Yelp.search(term, location, sortBy).then((businesses) => {
			this.setState({
				businesses : businesses
			});
		});
	};

	resetSearch = () => {
		this.setState({
			term     : '',
			location : ''
		});
	};

	renderSortByOptions = () => {
		return Object.keys(this.sortByOptions).map((option) => {
			let sortByOptionValue = this.sortByOptions[option];
			return (
				<React.Fragment>
					<li
						key={sortByOptionValue}
						name={sortByOptionValue}
						className={this.getSortByClass(sortByOptionValue)}
						onClick={this.handleSearchTermChange.bind(this, sortByOptionValue)}
					>
						{option}{' '}
					</li>
				</React.Fragment>
			);
		});
    };
    
    render(){
        return (
            <RavContext value={this.state}>
                {this.props.children}
            </RavContext>
        )
    }
}

export const RavConsumer = RavContext.Consumer;
