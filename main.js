const { app, BrowserWindow } = require("electron");

const path = require("path");

const url = require("url");

// init win
let win; // global reference to the windows object, if we do not have this our windows will close dynamicly in run time

function createWindow() {
  // Create browser window
  win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: __dirname + "/img/icon.png"
  });

  // load index.html
  win.loadURL(
    url.format({
      pathname: path.join(__dirname, "index.html"),
      protocol: "file:",
      slashes: true
    })
  );

  // Open devtools
  win.webContents.openDevTools();

  win.on("closed", () => {
    win = null;
  });
}

// Run create window when app is ready
app.on("ready", createWindow);

// Quit when all windows are closed
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
