1.首先安装依赖  
npm install electron-prebuilt --save-dev

2.启动  
npm start //这里的启动名称根据package.json中设置来的


electron如何打包?  
1.安装打包模块  
npm install -g  electron-packager --save-dev

2.切换到项目根目录,使用electron-packager开始打包
electron-packager . myapp --platform=mas --arch=x64  //mac安装包
electron-packager . myapp --platform=win32 --arch=x64 //windows安装包
electron-packager . myapp --platform=linux --arch=x64 //linux安装包
electron-packager . myapp --platform=all --arch=x64 //所有平台安装包
electron-packager . myapp --platform=mas --arch=x64   -–icon=/Users/tangzhiqiang/Desktop/favicon.ico //mac安装包并修改图标




构建命令参考:  
https://www.npmjs.com/package/electron-packager  
https://github.com/electron-userland/electron-packager/blob/master/usage.txt




