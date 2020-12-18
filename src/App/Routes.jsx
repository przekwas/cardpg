import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../Home';
import PageError from '../shared/components/PageError';

const Routes = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route>
					<PageError />
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

export default Routes;
