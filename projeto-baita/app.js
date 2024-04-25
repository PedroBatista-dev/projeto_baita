const { app, BrowserWindow, Menu } = require('electron');

let appWindow

function createWindow() {
    appWindow = new BrowserWindow({
        width: 1080,
        height: 1920
    });
    
    appWindow.loadFile('dist/projeto-baita/index.html');

    // Defina a janela para tela cheia
    appWindow.setFullScreen(true);

    appWindow.on('closed', function () {
        appWindow = null;
    });
}

// Crie um menu vazio
const menu = Menu.buildFromTemplate([]);
  
// Defina o menu como nulo para ocultar os botões padrão
Menu.setApplicationMenu(menu);

app.whenReady().then(() => {
    createWindow();
});