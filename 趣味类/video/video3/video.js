/**
 * Created by sks on 2016/6/29.
 */
(function(){

    function Main(){
        this._context2d=document.getElementById("canvas").getContext("2d");
       
        /*
        * @type{HTML VideoElement}
        * @private
        * */
        this._video=document.createElement("video");
        this._video.autoplay=true;
        this._video.src="toutu1.mp4";
        this.render();

        this.addListeners();

    }
    //设置Console看不到video（达到用户无法下载）
    Main.prototype.render=function(){
        this._context2d.drawImage(this._video,0,0);
        
        requestAnimationFrame(this.render.bind(this));
    };

    Main.prototype.addListeners=function(){
         var c=this._context2d.canvas;


       c.onclick=function(){
            var requestFullScreen=c.requestFullScreen;
               if(!requestFullScreen){
                   requestFullScreen=c.webkitRequestFullScreen;
               }
               if(!requestFullScreen){
                   requestFullScreen=c.mozRequestFullScreen;
               }
               if(requestFullScreen){
                   requestFullScreen.call(c);
               }else{
                   alert("你的浏览器不支持全屏")
               }

        }
    };



    new Main();
}());