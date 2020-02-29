{ app, BrowserWindow } = require('electron')

app.on('ready', () ->
  win = new BrowserWindow({
    width: 800,
    height: 600,
    minHeight: 300,
    minWidth: 300
    webPreferences: {
      nodeIntegration: true
    }
  })
  win.loadFile('../public/index.html')
  win.webContents.openDevTools()
)

app.on('window-all-closed', () ->
  app.quit() if process.platform != 'darwin')
