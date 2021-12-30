# 第2章 WebGL入门
## 什么是Canvas？
HTML5之前网页想要显示图像只能用HTML提供的原生的`<img>`标签,但只能显示静态的图片，不能进行实时的绘制和渲染。HTML5出现之后，引入了`<canvas>`标签，允许JavaScript动态地绘制图形。

## 使用`<canvas>`标签
`<canvas>`标签的的宽高是通过标签的`width`和`height`定义的，使用`css`的style定义是`无效`的。如下面例子定义了canvas的宽高为400px：
```html
<canvas id='example' width='400' height='400'></canvas>
```
错误例子：
```html
<style>
canvas{
    width: 400px;
    height: 400px;
}
</style>
<canvas id='example'></canvas>
```
当canvas为定义宽高时，默认的宽度为`300px`，高度为`150px`。默认情况下`<canvas>`是透明的，如果不用JavaScript上画什么的话，这样情况下是看不到的。  
`<canvas>`上绘制二维图形只需以下三步：
1. 获取`<canvas>`元素
2. 向该元素请求二维图形的”绘图上下文“
3. 在绘图上下文上调用相应的程序，以绘制二维图形
例子如下：
```js
function main(){
    // 获取canvas元素
    var canvas = document.getElementId('example');
    if(!canvas){
        console.log('该浏览器不支持canvas');
        return;
    }
    // 获取绘图上下文
    var ctx = canvas.getContext('2d');
    // 绘制蓝色矩形
    ctx.fillStyle = 'blue'; // 设置填充颜色为蓝色
    ctx.fillRect(120,10,150,150); // 使用填充颜色填充矩形
}
```
效果图：
![0.png](./images/0.png)

[完整代码](examples/example0.html)

`<canvas>`的坐标系统是以`左上角为原点`，`横轴为x轴`，`纵轴为y轴`。如下图所示：
![1.png](./images/1.png)
