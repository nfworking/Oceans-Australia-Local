import { app, BrowserWindow } from "electron";
import path from "path";
import isDev from "electron-is-dev";


let mainWindow

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
  })

  

  mainWindow.loadURL("http://localhost:3000")

  mainWindow.on("closed", () => {
    mainWindow = null
  })

  if (isDev) {
    mainWindow.webContents.openDevTools()
  }
}

app.on("ready", createWindow)

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit()
  }
})

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow()
  }
})

