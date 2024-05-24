const { app,BrowserWindow,ipcMain } = require('electron/main')
const path = require('node:path')

const createWindow = () => {
    const win = new BrowserWindow({ 
        width: 800, 
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
        }
    })
    win.loadFile('index.html')
}

app.whenReady().then(() => {
    console.log('whenReady','ping');
    ipcMain.handle('ping', () => 'pong')
    createWindow()
  
    // for MacOS
    app.on('activate', () => {
        console.log('activate');
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
  })

app.on('window-all-closed', () => {
    console.log(process.platform,'process')
    // only windows or linux
    if(process.platform !== 'darwin') {
        console.log('window-all-closed')
        app.quit()
    }
})

console.log(app.on,'app')