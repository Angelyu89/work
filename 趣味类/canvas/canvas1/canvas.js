/**
 * Created by sks on 2016/6/27.
 */

(function(){

    function Main(){
        this._canvas=document.getElementById("myCanvas");
        this._context2d=this._canvas.getContext("2d");
        
        this.drawRect();
        this.drawCircle();
        this.drawLines();
        this.text();
        this.drawdImage();
    }
        //绘制矩形
        Main.prototype.drawRect=function(){

        this._context2d.fillStyle="#00ffff";//填充色
        this._context2d.strokeStyle="#000";//边框色
        this._context2d.fillRect(0,0,100,100);

        this._context2d.lineWidth=2;
        this._context2d.strokeRect(0,0,100,100);//绘制画布大小

    };
    
    //绘制圆形
     Main.prototype.drawCircle=function(){
         this._context2d.beginPath();//开始子路径的一个新的集合
         this._context2d.arc(230,100,100,0,Math.PI*2)//圆形
         this._context2d.stroke();
         this._context2d.closePath();


         this._context2d.beginPath();
         this._context2d.arc(530,200,100,0,Math.PI,true);//半圆
         this._context2d.strokeStyle="rgba(243, 226, 49, 0.48)"
         this._context2d.lineWidth=3;
         this._context2d.closePath();
         this._context2d.stroke();

         this._context2d.beginPath();
         this._context2d.arc(430,200,100,0,Math.PI);//半圆
         this._context2d.closePath();
         this._context2d.stroke();

         this._context2d.beginPath();
         this._context2d.moveTo(200,400);
         this._context2d.arc(200,400,120,3,Math.PI/4);//扇形
         this._context2d.closePath();
         this._context2d.stroke();
     }
        
    //绘制贝塞尔曲线
        Main.prototype.drawLines=function()
        {
            this._context2d.moveTo(200,100);
            this._context2d.quadraticCurveTo(200,0,150,100);//绘制贝塞尔曲线
            this._context2d.stroke();
            this._context2d.closePath();

            this._context2d.moveTo(300,100);
            this._context2d.quadraticCurveTo(300,0,250,100);//绘制贝塞尔曲线
            this._context2d.stroke();

            this._context2d.beginPath();
            this._context2d.moveTo(400,500);
            this._context2d.lineTo(400,600);//绘制线段
            this._context2d.lineTo(700,600);
            this._context2d.stroke();
        };

        Main.prototype.text=function(){
            this._context2d.font="bold 32px Courier";//加粗 字号 字体
            this._context2d.fillStyle="orange";
            this._context2d.fillText("Hello world",0,260);
            this._context2d.fillStyle="blue";
            this._context2d.fillText("China hello",0,300);//文字
            this._context2d.strokeStyle="red";
            this._context2d.strokeText("thangk you",0,350);

        };
    
        Main.prototype.drawdImage=function(){
            var img=document.createElement("img");
            img.onload=function(){
                this._context2d.drawImage(img,500,500);

               // this._context2d.drawImage(img,0,0,110,110,100,100,110,110);
            }.bind(this);
            img.onerror=function(){
                console.error("无法加载图片");
            };
            img.src="02.png"
        };
    new Main();
}());



















