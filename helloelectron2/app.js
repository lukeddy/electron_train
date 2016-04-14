var remote=require('remote');
var Menu=remote.require('menu');
//使用ipc方式传递消息
var ipc=require('ipc');

var menu=Menu.buildFromTemplate([
    {
        label:'主菜单',
        submenu:[
            {
                label:'设置',
                click:function(){
                    //打开profile窗口
                    ipc.send('show-profile');
                }
            },
            {
                label:'编辑',
                click:function(){
                    alert("bbb");
                }
            }
        ]
    },
    {
        label:'菜单2',
        submenu:[
            {
                label:'子带单2-1',
            },
            {
                label:'子带单2-2',
            }
        ]
    }
]);

Menu.setApplicationMenu(menu);