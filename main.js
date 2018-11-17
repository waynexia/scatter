const {app, BrowserWindow,Menu} = require('electron')

let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({width: 1500, height: 900,frame:false})

  mainWindow.loadFile('index.html')

  mainWindow.webContents.openDevTools()

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

let template = [{
  label: 'About',
  submenu: [{
    label:'Author: Waynest',
    click: () => {}
  }]
}]

app.on('ready', ()=>{
  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
  createWindow()
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})

