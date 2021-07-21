/*
 * index.tsx
 * Created on Tue Jul 07 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App.tsx';
import { BrowserRouter, Link } from 'react-router-dom';

ReactDOM.render(
    <React.StrictMode>
		<BrowserRouter>
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/about">About</Link></li>
			</ul>
			<App />
		</BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
