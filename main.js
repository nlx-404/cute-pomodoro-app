const { app, BrowserWindow } = require("electron");
const path = require("path");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 600,
    height: 600, 
    icon: path.join(__dirname, 'src/assets/heart.png')
  });

  if (process.platform === "darwin") {
    app.dock.setIcon(path.join(__dirname, 'src/assets/heart.png'));
  }

  win.loadFile("src/index.html");
};

app.whenReady().then(() => {
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
