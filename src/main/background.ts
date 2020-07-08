/*
 * background.ts
 * Created on Tue Jul 07 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */
import { app, BrowserWindow } from 'electron';
import * as path from 'path';
import * as url from 'url';

var mainWindow: BrowserWindow;

const installExtensions = async () => {
	const installer = require('electron-devtools-installer');
	const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
	const extensions = [
		'REACT_DEVELOPER_TOOLS',
		'REDUX_DEVTOOLS',
	];

	return Promise
	.all(extensions.map(name => {
		console.log('Install Devtoos ', name);
		installer.default(installer[name], forceDownload)
	}))
	.catch(console.error);
}

const createWindow = async () => {
	mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			nodeIntegration: true,
		},
		show: false,
	});

	if (process.env.NODE_ENV !== 'production') {
		process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = '1'; // eslint-disable-line require-atomic-updates
		mainWindow.loadURL(`http://localhost:2020`);

		mainWindow.webContents.once('dom-ready', () => {
			mainWindow!.webContents.openDevTools();
		});
	} else {
		mainWindow.loadFile('./dist/index.html');
	}

	mainWindow.once('ready-to-show', mainWindow.show);
	mainWindow.on('close', () => mainWindow = null);
};

app.on('ready', async () => {
	if ( process.argv.NODE_ENV !== 'production' ) {
		await installExtensions();
	}
	createWindow();
});

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (win === null) {
		createWindow();
	}
});
