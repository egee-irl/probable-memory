import { app, BrowserWindow } from "electron";
import * as path from "path";

let mainWindow: Electron.BrowserWindow;

function createWindow() {
  mainWindow = new BrowserWindow({ width: 800, height: 600, });
  mainWindow.setMenuBarVisibility(false)

  mainWindow.loadFile(path.join(__dirname, "./index.html"));
  mainWindow.webContents.openDevTools();

  mainWindow.on("closed", () => mainWindow = null!);
}

app.on("ready", createWindow);
