const { app, BrowserWindow, screen } = require('electron');
const path = require('path');
const net = require('net');
const port = 3000; // Suggest to use ENV PORT
const serverURL = `http://localhost:${port}`;

function createWindow() {
	const { width, height } = screen.getPrimaryDisplay().workAreaSize;
	const preloadPath = path.join(__dirname, 'src', 'preload.js');
	const mainWindow = new BrowserWindow({
		width: width,
		height: height,
		webPreferences: {
			nodeIntegration: false,
			contextIsolation: true,
			preload: preloadPath,
		},
	});

	const loadURLWhenReady = () => {
		const socket = new net.Socket();

		socket.on('connect', () => {
			socket.end();
			mainWindow.loadURL(serverURL);
			mainWindow.webContents.openDevTools();
		});

		socket.on('error', () => {
			setTimeout(loadURLWhenReady, 1000);
		});

		socket.connect(port, 'localhost');
	};

	loadURLWhenReady();
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow();
	}
});
