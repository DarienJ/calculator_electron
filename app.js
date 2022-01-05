//Importar
const {app, BrowserWindow, autoUpdater} = require('electron');

//Establecer
let appWindow;
//Crear funcion
function crearVentana(){
  appWindow = new BrowserWindow({
    //Valores que tendra la ventana
    center: true,
    width: 248,
    height: 366,
    webPreferences: { nodeIntegration: true },
    resizable: false,
    fullscreenable: false,
    autoHideMenuBar: true,

    //Otros valores
    title: "Calculadora",
  })
  //Al cerrar
  appWindow.on('close', ()=> {
    appWindow = null;
  })
  //Al abrir
  appWindow.once('ready-to-show',()=>{
    appWindow.show();
  })
  //Cargar la vista
  appWindow.loadFile('front/index.html');
}
//Ejecutar funcion
app.on('ready', crearVentana);