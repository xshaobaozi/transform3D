#CSS3 transform属性 附上demo
参考http://www.zhangxinxu.com/wordpress/2012/09/css3-3d-transform-perspective-animate-transition/

*  用法
*  实例  
 
<style>
    h2{text-align:center}
    body{padding:20px;}
</style>




   刚开始使用这个属性是因为工作的需要，制作H5动画页面，通过查具体用法也可以制作出各种小动画，比如平移，缩放，翻动，刚开始看到这些动画都很惊奇，居然短短写一小段东西就就可以完成js写一堆代码的动画了，然后看到别人家的CSS3动画，再次被教育做人了。
   
   下面说说怎么使用


>transform

>定义 ：transform 属性向元素应用 2D 或 3D 转换。该属性允许我们对元素进行旋转、缩放、移动或倾斜。

>语法 : transform: none|transform-functions;

>具体参考W3C : http://www.w3school.com.cn/cssref/pr_transform.asp

一般可以通过添加

-webkit-transform:matrix(n,n,n,n,n,n)

-o-webkit-transform:matrix(n,n,n,n,n,n)

-moz-webkit-transform:matrix(n,n,n,n,n,n)

这类前缀可以解决部分低版本浏览器兼容问题


在这些属性中transform:perspective(n)这个属性在3D变换中是比较重要的

#perspective
定义和用法 : 
perspective 属性定义 3D 元素距视图的距离，以像素计。该属性允许您改变 3D 元素查看 3D 元素的视图。

当为元素定义 perspective 属性时，其子元素会获得透视效果，而不是元素本身。

注释：perspective 属性只影响 3D 转换元素。

视距 我理解的就是  你的眼睛在屏幕上方,定义perspective的元素距离屏幕的距离就是 视距

#translateZ
当定义好perspective的时候，通过使用translateZ可以更好的把握。通过定义translateZ（n px） 的值 观察元素距离你视觉焦点的远近

通过改变translateZ的值，改变该元素与你的距离，translateZ大与你的距离越近，看到的越大

当translateZ>perspective时，元素看不到 因为你已经越过 该元素 了

#transform-style

定义和用法 : 
transform-style 属性规定如何在 3D 空间中呈现被嵌套的元素。

注释：该属性必须与 transform 属性一同使用。

设置transform-style:preserve-3d属性，可以使元素有3D的显示效果

#Demo
通过参考，回旋木马的例子，本实例在此基础上写一个立体的回旋立方体。
<pre>
    <code>
        &lt;div id='group1'&gt;
            &lt;p&gt;&lt;/p&gt;
            &lt;p&gt;&lt;/p&gt;
            &lt;p&gt;&lt;/p&gt;
            &lt;p&gt;&lt;/p&gt;
            &lt;p&gt;&lt;/p&gt;
            &lt;p&gt;&lt;/p&gt;
            &lt;p&gt;&lt;/p&gt;
        &lt;/div&gt;
    </code>
</pre>

> 通过设置每个p的rotate形成立方体，然后计算好立方体的长宽高 通过translateZ确定立方体形状

<pre>
    <code>
        #groups1{
                position:relative;
                transform-style:preserve-3d;
            	width:100%;
            	height:300px;
            	margin-top:100px;
            	transition:transform 1s;
            }
        p:nth-child(1){
            transform:rotateY(0deg) translateZ(150px);
        }
        p:nth-child(2){
        	transform:rotateY(90deg) translateZ(150px);
        }
        p:nth-child(3){
        	transform:rotateY(180deg) translateZ(150px);
        }
        p:nth-child(4){
        	transform:rotateY(270deg) translateZ(150px);
        }
        p:nth-child(5){
        	transform:rotateX(90deg) translateZ(150px);
        }
        p:nth-child(6){
        	transform:rotateX(270deg) translateZ(150px);
        }
    </code>
</pre>

> 通过js改变元素的Rotate的值，再通过定时 每隔1s改变一次 ，使立方体转起来

<pre>
    <code>
        var transRotateX=function(){
    			var degNum=_randomNum()*deg,
					rota=parseInt(rotateX)+parseInt(degNum);

				ele.style.transform='rotateX('+rota+'deg)';
				rotateX=_validate(ele.style.transform);
				countX++;
			},
				transRotateY=function(){
				var degNum=_randomNum()*deg,
					rota=parseInt(rotateY)+parseInt(degNum);

				ele.style.transform='rotateY('+rota+'deg)';
				rotateY=_validate(ele.style.transform);
				countY++;
			},
    </code>
</pre>

由于最近刚开始学习git的用法，以及js的各种写法，模块化之类，所以代码可能写的不够简洁优雅，不过通过一次一次练习，总会好的嘛~








