'use strict';

const { app, BrowserWindow } = require('electron');

let mainWindow = null;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        height: 600,
        width: 800,
        frame: true,
        resizable: true
    });

    mainWindow.on('closed', () => {
        mainWindow = null;
    });

    mainWindow.loadFile('app/index.html');
});