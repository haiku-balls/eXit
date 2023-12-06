const { app, BrowserWindow, Menu } = require('electron')


const createWindow = () => {
    const win = new BrowserWindow({
        width: 1980,
        height: 1920,
        // eXit-oriented options
        // Most controls are disabled.
        resizable: false,
        minimizable: false,
        maximizable: false,
        webPreferences: {
            devTools: false
        }
    })

    Menu.setApplicationMenu(null)
    win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})