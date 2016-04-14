var app=require('app');
var BrowserWindow=require('browser-window');
var ipc=require('ipc');

app.on('ready',function(){
    //创建一个窗口
    var mainWindow=new BrowserWindow({
        width:800,
        height:600
    });

    //将网页加入创建的窗口
    mainWindow.loadURL('file://'+__dirname+'/main.html');
    //显示调试模式
    mainWindow.openDevTools();


    var profileWindow=new BrowserWindow({
        width:500,
        height:500,
        show:false
    });

    profileWindow.loadURL('file://'+__dirname+'/profile.html');

    //通过ipc消息方式显示profile窗口
    ipc.on('show-profile',function(){
        profileWindow.show();
    });
    //通过ipc消息方式隐藏
    ipc.on('hide-profile',function(){
        profileWindow.hide();
    });
});