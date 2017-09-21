import electron from "electron"
import path from "path"
import url from "url"

// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow: any

if (process.env.NODE_ENV === "production") {
  const sourceMapSupport = require("source-map-support")
  sourceMapSupport.install()
}

if (process.env.NODE_ENV === "development" || process.env.DEBUG_PROD === "true") {
  require("electron-debug")()
  const p = path.join(__dirname, "../..", "src", "node_modules")
  require("module").globalPaths.push(p)
}

const installExtensions = async () => {
  const installer = require("electron-devtools-installer")
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS
  const extensions = [
    "REACT_DEVELOPER_TOOLS",
    "REDUX_DEVTOOLS"
  ]
  return Promise
  .all(extensions.map(name => installer.default(installer[name], forceDownload)))
  .catch(console.log)
}

async function createWindow() {

  if (process.env.NODE_ENV === "development" || process.env.DEBUG_PROD === "true") {
    await installExtensions()
  }

  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 600,
    minWidth: 800,
    minHeight: 600,
    titleBarStyle: "hidden",
    icon: "dist/assets/icons/mac/1024x1024.icns"
  })

  // and load the index.html of the app.
  // and load the index.html of the app.
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "../index.html"),
      protocol: "file:",
      slashes: true,
    }),
  )

  // Open the DevTools.
  if (process.env.NODE_ENV === "development" || process.env.DEBUG_PROD === "true") {
    mainWindow.webContents.openDevTools()
  }

  // Emitted when the window is closed.
  mainWindow.on("closed", () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow)

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit()
  }
})

app.on("activate", () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
