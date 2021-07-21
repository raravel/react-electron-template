/*
 * App.tsx
 * Created on Tue Jul 07 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */

 import React from 'react';
 import ReactDOM from 'react-dom';
 import { Route } from 'react-router-dom';

 import { Home } from './Components/Home';
 import { About } from './Components/About';

export class App extends React.Component {
	render() {
		return (
			<>
				<Route exact path="/" component={Home} />
				<Route exact path="/about" component={About} />
			</>
		);
	}
};
