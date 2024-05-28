const { app,BrowserWindow,ipcMain,dialog } = require('electron/main')
const path = require('node:path')

const createWindow = () => {
    const win = new BrowserWindow({ 
        width: 800, 
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
        }
    })

    ipcMain.on('set-title', handleSetTitle)

    win.loadFile('index.html')
}

app.whenReady().then(() => {
    console.log('whenReady','ping');
    ipcMain.handle('dialog:openFile', handleOpenFile)
    ipcMain.handle('ping', () => 'pong')
    createWindow()
  
    // for MacOS
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
  })

  // only windows or linux
app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') {
        console.log('window-all-closed')
        app.quit()
    }
})

function handleSetTitle(event,title) {
    const webContents = event.sender
    const win = BrowserWindow.fromWebContents(webContents)
    win.setTitle(title)
}

async function handleOpenFile(){
    const { canceled, filePaths } = await dialog.showOpenDialog()
    if(!canceled){
        console.log(filePaths, 'filePaths', canceled);
        return filePaths[0]
    }
}