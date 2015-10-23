import BrowserWindow from 'browser-window';

export default class MainWindow {
  constructor() {
    this.mainWindow = new BrowserWindow({ width: 600, height: 900 });
    this.mainWindow.loadUrl(`file://${__dirname}/../renderer/index.html`);
    this.mainWindow.on('closed', () => {
      this.mainWindow = null;
    });
    this.mainWindow.openDevTools();
  }
}
