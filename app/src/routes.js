import React from 'react';
import { Route, Switch } from 'react-router-dom';

import WeatherWidget from './containers/WeatherWidget';

export default (
	<Switch>
		<Route exact path="/" component={WeatherWidget} />
	</Switch>
);
