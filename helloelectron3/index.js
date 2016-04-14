var app=require('app');
var BrowserWindow=require('browser-window');

app.on('ready',function(){
    //创建一个窗口
    var mainWindow=new BrowserWindow({
        width:800,
        height:600
    });

    //将网页加入创建的窗口
    mainWindow.loadURL('file://'+__dirname+'/index.html');
});