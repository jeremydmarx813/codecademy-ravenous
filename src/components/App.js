import React from 'react';
import '../visual_aids/App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { RavComponent } from '../RavState';
import BusinessList from '../components/BusinessList';
import SearchBar from '../components/SearchBar';
import IndvBusiness from '../components/IndvBusiness';
import HomeButton from '../components/HomeButton';

/*
Codecademy suggestions
Make images clickable and have them open the business’ website in a new tab
Clicking on a different sorting option automatically requeries the Yelp API, rather than having to manually click “Let’s Go” again
Implement your own type of sort (for example, by entering a distance or radius from a central location)
Allow you to search by pressing “Enter” (or “Return”) on your keyboard, as opposed to manually clicking
Add autocompletion of addresses to the “Location” input
*/

const App = () => {
	return (
		<RavComponent>
			<Router>
				<div className="App">
					<HomeButton />
					<SearchBar />
					<Switch>
						<Route exact path="/" component={BusinessList} />
						<Route path="/individual-business/:id" component={IndvBusiness} />
					</Switch>
				</div>
			</Router>
		</RavComponent>
	);
};

export default App;
