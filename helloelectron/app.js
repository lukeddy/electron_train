document.write("当前node版本号为:"+process.version);

var fs=require('fs');
var contents=fs.readFileSync('./package.json',"utf-8");
alert(contents);
//document.write(contents);
