/**
 * Created by sks on 2016/7/5.
 */

var http=require("http");
var fs=require("fs");


http.createServer(function(request,response){
   if(request.url=="/index.html"){
       response.end(fs.readFileSync("index.html"));

   } else if(request.url.match(/\/server/)){
        var pKv=/(\?|\&)([^=]+)=([^&]+)/g;
        var params={};
       while(true){
           var result=pKv.exec(request.url);
           if(result){
               params[result[2]]=result[3];
           }else{
               break;
           }
       }
        
       response.end("<!DOCTYPE html><head><meta charset=’UTF-8‘></head><body>合色:"+(rgba(params['name1'])+rgba(params['name2']))+"</body></html>");
    }else{
       response.end("<h1>网络出错</h1>");
   }
}).listen(8989);