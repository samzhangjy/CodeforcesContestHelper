const { app, BrowserWindow, Menu } = require('electron')

function createWindow () {
  Menu.setApplicationMenu(null)
  const win = new BrowserWindow({
    width: 635,
    height: 335,
    webPreferences: {
      nodeIntegration: true
    },
    minimizable: false,
    maximizable: false
  })
  win.setAlwaysOnTop(true, "floating")

  win.loadFile('index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
