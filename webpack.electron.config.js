/*
 * webpack.electron.config.js
 * Created on Tue Jul 07 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */

const webpack = require('webpack');
const path = require('path');

module.exports = {
	mode: process.env.NODE_ENV,
	target: 'electron-main',
	entry: {
		index: path.join(__dirname, 'src/main', 'background.ts'),
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					cacheDirectory: true,
					babelrc: false,
					presets: [
						[
							'@babel/preset-env',
							{ targets: { browsers: 'last 2 versions ' } }
						],
						'@babel/preset-typescript',
						'@babel/preset-react',
					],
					plugins: [
						['@babel/plugin-proposal-class-properties', { loose: true }],
						['@babel/plugin-transform-runtime', { regenerator: true }],
						['@babel/plugin-transform-regenerator'],
					]
				},
			},
		]
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'background.js',
	},
	resolve: {
		extensions: ['.ts', '.js', '.json'],
	},
};
