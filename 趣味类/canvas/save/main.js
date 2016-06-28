/**
 * Created by sks on 2016/6/28.
 */

(function(){
    
    function Main(){
       
        this._canvas=document.getElementById("canvas");
        this._context2d=this._canvas.getContext("2d");
        this.drawRect();
    }
    //绘制矩形
    Main.prototype.drawRect=function(){
        //图形的缩放
       // this._context2d.scale(2,1);
        //旋转45度
        //this._context2d.rotate(Math.PI/4);
        //移动位置
        //this.context2d.translate(100,100);

        this._context2d.save();//保存画布状态
        this._context2d.scale(2,1);//放大2倍
        this._context2d.fillStyle="#ff00ff";
        this._context2d.fillRect(0,0,100,100);
        this._context2d.restore();//

        //this._context2d.scale(0.5,1);//回到原型
        this._context2d.fillStyle="#0000ff";
        this._context2d.fillRect(0,150,50,50);
        this._context2d.restore();

        //移动
        this._context2d.save();
        this._context2d.translate(350,0);
        this._context2d.fillRect(0,0,100,100);
        this._context2d.restore();

        this._context2d.translate(220,0);//在原来基础上移动130
        this._context2d.fillRect(0,0,100,100);
        this._context2d.restore();

        //圆形的绘制(save之后移动只针对父级有继承作用，单独设置不影响)
        this._context2d.save();
        this._context2d.fillStyle="#ff00ff";
        this._context2d.translate(320,50);
        this._context2d.beginPath();
        this._context2d.arc(0,0,50,0,Math.PI*2);
        this._context2d.closePath();
        this._context2d.fill();
        this._context2d.restore();

        //绘制文字
        this._context2d.save();
        this._context2d.translate(0,150);//在原来基础上移动100
        this._context2d.fillRect(0,0,100,100);
        //ToDo 没写完
        this._context2d.restore();

    };
    
    
    
    
    new Main();
}());