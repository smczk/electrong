import app from 'app';
import MainWindow from './main-window'

app.on('ready', () => {
  new MainWindow();
});
