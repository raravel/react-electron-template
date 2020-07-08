/*
 * webpack.react.config.js
 * Created on Tue Jul 07 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */

const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { spawn } = require('child_process');

module.exports = {
	mode: process.env.NODE_ENV,
	entry: [
		'@babel/polyfill',
		path.join(__dirname, 'src/view', 'index.tsx'),
	],
	module: {
		rules: [
			{
				test: /\.tsx?$/,
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
			{
				test: /\.css?$/,
				exclude: /node_modules/,
				loaders: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(gif|png|jpe?g|svg)$/,
				use: [
					'file-loader',
				]
			},
		]
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].js',
	},
	resolve: {
		extensions: ['.ts', '.js', '.json', '.css', '.tsx', '.jsx'],
	},
	devServer: {
		port: 2020,
		before() {
			if ( process.env.WITH_ELECTRON ) {
				console.log('Start electron process');
				spawn('./node_modules/.bin/nodemon',
					['--watch', 'src/main', '--verbose', '--ext', 'ts,tsx,ts,json', '--delay', '1', '--exec', 'npm', 'run', 'electron:serve'], {
						shell: true,
						env: process.env,
						stdio: 'inherit',
					})
					.on('close', code => process.exit(code))
					.on('error', err => console.error(err));
			}
		},
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './public/index.html',
			favicon: './public/favicon.ico',
		}),
	],
};
