import React from 'react';
import Yelp from './util/Yelp';

const RavContext = React.createContext();

export class RavComponent extends React.Component {
	constructor() {
		super();
		this.state = {
			businesses             : [],
			term                   : '',
			location               : '',
			sortBy                 : 'best_match',
			renderSortByOptions    : this.renderSortByOptions,
			handleSearchTermChange : this.handleSearchTermChange,
			handleSearch           : this.handleSearch,
			resetSearch            : this.resetSearch
		};
	}

	sortByOptions = {
		'Best Match'    : 'best_match',
		'Highest Rated' : 'rating',
		'Most Reviewed' : 'review_count'
	};

	getSortByClass = (sortByOption) => {
		if (this.state.sortBy === sortByOption) {
			return 'active';
		} else {
			return '';
		}
	};

	handleSearchTermChange = (event) => {
		// console.log(event.target);
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	handleSearch = (event) => {
		if (this.state.term.length && this.state.location.length) {
			event.preventDefault();
			this.searchYelp(this.state.term, this.state.location, this.state.sortBy);
		} else {
			console.log('%cNeed Input to Search Bar', 'color:red;background-color:white;font-size:25px;padding:5px');
		}
	};

	searchYelp = (term, location, sortBy) => {
		Yelp.search(term, location, sortBy).then((businesses) => {
			this.setState({
				businesses : businesses
			});
		});
	};

	resetSearch = () => {
		this.setState({
			term       : '',
			location   : '',
			businesses : [],
			sortBy     : 'best_match'
		});
	};

	renderSortByOptions = () => {
		return Object.keys(this.sortByOptions).map((option, i) => {
			let sortByOptionValue = this.sortByOptions[option];

			return (
				<React.Fragment key={i}>
					<li
						key={i}
						name="sortBy"
						value={sortByOptionValue}
						className={this.getSortByClass(sortByOptionValue)}
						onClick={this.handleSearchTermChange}
					>
						{option}{' '}
					</li>
				</React.Fragment>
			);
		});
	};

	render() {
		return <RavContext.Provider value={this.state}>{this.props.children}</RavContext.Provider>;
	}
}

export const RavConsumer = RavContext.Consumer;
