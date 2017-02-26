2016-11-27 开始来科北自习
2016-11-16 看到0000-1163行       1163  
2016-11-17 看到1163-1522行       359
2016-11-18 看到1522-1666行       144
2016-11-19 看到1666-1714行       48
2016-11-20 看到1714-2234行       520
2016-11-21 有正当理由不看        0     拔脚趾甲去了
2016-11-22 看到2234-2356行       122   主要测试了词法分析器函数，以及相关的preFilter对象，正则表达式matchExpr
2016-11-23 看到2356-2754行       398
2016-11-24 看到2754-2754行       0     深纠一些函数,实现了一下秒抢商品
2016-11-25      玩               0     基本没有怎么干活，看movie，也是深究了一些函数
2016-11-26 看到2754-2897行       143
2016-11-27      玩               0     喵喵休息，和喵喵玩了一天
2016-11-28 看到2897-3140行       243
2016-11-29 看到3140-3328行       188     
2016-11-30 看http权威指南        0     上课比较多，就看http权威指南去了       
2016-12-01 看到3328-3532行       204
2016-12-02 看到3532-3841行       309   主要看了promise模式（异步编程模式）的实现方式  
2016-12-03 看到3841-3912行       71    今天没有什么时间看，今天被导师叫去讨论毕业设计题目了
2016-12-04 看到3912-4398行       486   主要promise自己敲了一遍和$(document).ready(fn)的promise实现
2016-12-05 准备考试              0     准备考试ing
2016-12-06 准备考试              0     准备考试ing
2016-12-07      玩               0     考试完成
2016-12-08 看http权威指南        0     只看了到一点点源码
2016-12-09 看到4398-4878行       480   
2016-12-10 看到4878-5046行       168
2016-12-11      玩               0     喵喵休息，和喵喵玩了一天
2016-12-12 看http权威指南        0     只看了http权威指南，然后看movie去了
2016-12-13 看到5046-5269行       223
2016-12-14      玩               0     下面的这25天主要是玩去了，也花了一点时间编程，心是浮的，喵喵是2016-12-19开始学习前端的，也在教喵喵学前端
2016-12-15      玩               0 
2016-12-16      玩               0     
2016-12-17      玩               0     
2016-12-18      玩               0     
2016-12-19      玩               0     
2016-12-20      玩               0         
2016-12-21      玩               0
2016-12-22      玩               0
2016-12-23      玩               0
2016-12-24      玩               0
2016-12-25      玩               0
2016-12-26      玩               0
2016-12-27      玩               0 
2016-12-28      玩               0
2016-12-29      玩               0
2016-12-30      玩               0
2016-12-31      玩               0
2017-01-01      玩               0
2017-01-02      玩               0
2017-01-03      玩               0
2017-01-04      玩               0
2017-01-05      玩               0
2017-01-06      玩               0
2017-01-07      玩               0
2017-01-08 看到5269-6648行       275   jQuery事件
2017-01-09 看到5269-6648行       275   jQuery事件
2017-01-10 看到5269-6648行       275   jQuery事件
2017-01-11      玩               0     弟弟回家聚餐
2017-01-12 看到5269-6648行       275   jQuery事件
2017-01-13 看到5269-6648行       279   jQuery事件篇完结
2017-01-14 看aframe              0     看aframe去了，webVR
2017-01-15 看到6648-7170行       522
2017-01-16 看到7170-7360行       190   jQuery源码阅读中期结束，因为差不多要回家过年了
/*中期暂停，后面的代码主要是css，animation，attribute，ajax，jsonp，pixel(offset,width)*/
/*基本情况：情况是这样的，我从2016-11-16开始看jQuery源码到2017-01-16中期结束，从我决定看到今天总共61天，
其中，30天看电影、玩去了(不想看源码)，3天看看http权威指南去了，2天准备考试(大四上),1天拔脚趾甲去了，
然后我有25天大部分时间是在看jQuery源码的，这25天我从jQuery的第0行看到现在的7360行，还剩下4638行
没有看打算在过完年后在腾讯实习的时候在看，接下来看的要重点看ajax和animation，不要求很快看完，而是
要自己去想想是我，我该怎么样实现这个功能，然后和作者进行对比，找差距。*/
/*计划：根据在腾讯实习的具体情况，制定自己看jQuery源码的进度，首先要消化好前面看的7360行代码，然后
在开始看后面的，这样就不会犯学而不思则罔，思而不学则殆的错误。*/
/*2017-01-16写*/




/*jQuery作者水平开始处*/
作者正则表达式可以手到擒来，需要匹配啥模式的字符串，作者可以轻松写出来
作者对于设计模式有非常深的理解，从promise模式的实现可以看出
作者对于DOM的使用，以及各个浏览器DOM的兼容性都有非常好的掌握，因为jQuery让我们不用担心兼容性问题
jQuery代码考虑的非常全面，然后每一处代码感觉都有理有据，哪些属性该删除，哪些属性不能删除，作者都
非常的清晰，要想写出这样的代码，需要对自己的需求理解的非常透彻，考虑方方面面，考虑真滴是要非常的
全面，然后对编写这些代码所需要掌握的知识非常的熟悉。在看jQuery的事件实现部分的时候，
jQuery.event.special.submit.teardown函数是在解除对submit绑定时，为什么只删除click._submit,keypress._submit
而不把给form加上的submit事件删除，回答出这个问题，你就能明白为什么我要怎么说了。
/*jQuery作者水结束处平*/

/*jQuery代码写的非常好的地方开始处---直接复制代码就可以定位到相应的地方，并找到为什么代码写的好的原因*/
(1)jQuery.removeEvent = document.removeEventListener ?    --------2017-01-08
(2)if ( !( this instanceof jQuery.Event ) ) {             --------2017-01-08
(3)jQuery.each( {                                         --------2017-01-13
  mouseenter: "mouseover",       //mouseover支持冒泡
  mouseleave: "mouseout",        //mouseout支持冒泡
  pointerenter: "pointerover",   
  pointerleave: "pointerout"
/*jQuery代码写的非常好的地方结束处*/


/*暂时没有看懂的函数结束处*/
isNumeric,globalEval，closest: function( selectors, context ) {
/*暂时没有看懂的函数开始处*/


/*jQuery核心方法，必须要看懂的方法开始处,2017-01-15*/
(1)internalData
(2)Sizzle
(3)jQuery.fn.extend=jQuery.extend
(4)each,map,grep
(5)jQuery后期getAll函数很强大
 /*jQuery核心方法，必须要看懂的方法结束处*/


/*暂时没有看懂的正则表达式，这个需要对伪类选择器有一定的了解才行啊*/
pseudos
/*暂时没有看懂的正则表达式，这个需要对伪类选择器有一定的了解才行啊*/




/*给jQuery的建议开始处*/
(1)jQuery中，用了大量的下面这种回调函数的模式;采用这种方式是异步编程一种，也有利于f2利用f1的变量，但是
这样写带来的缺点是高度耦合，代码难懂，流程混乱，且不利于维护
function f1(fn){
   //f1代码
   fn(/*f1传递给f2的参数*/);
   //f1代码
}
f1(f2);

(2)在jQuery的事件处理代码中，focus本来是不能冒泡的，但是jQuery把focus处理成冒泡的，矛盾代码如下：
<!DOCTYPE html>
<html>
 <head>
 </head>
 <body>
   <div style="width:200px;height:400px;border:1px solid red;" class="box1">
     <div style="width:100px;height:200px;border:1px solid blue;margin:5px;" class="son11">
      <!-- <p style="border:1px solid yellow;margin:5px;" class="son22">sdfvdf</p> -->
      <input type="text" name="" class="son22" style="width:70px;height:20px;margin:5px;">
     </div>
   </div>
   <script>
     function show(str){
       console.log(str);
     }
/*---------------------------------(1)下面是jQuery出错的情况-------------------------------------*/
/*当input输入框获得焦点时，输出son22 focus,son11 focus,非常奇怪的是son11 focus出现了，照理说focus是
不冒泡的，那么son11是感知不到input的focus事件的，原来在jQuery实现的时候，是把不能冒泡的且需要代理的
事件处理成能冒泡的事件，focus且需要代理，则被处理成focusin，并且让document以捕获型方式监听focus，
document的focus事件处理函数手动触发发生focus事件的元素的focusin事件，因此当input获得焦点时候，触发
focus和focusin事件，由于代理没有监听focusin事件，所以冒泡上去的focusin无用,但是document捕获到了focus
事件，并且在事件处理函数中手动触发了event.target的focusin事件，因此导致son22，和son11的事件处
理函数被执行。mouseenter和mouseleave没有这样的问题，因为对这两个事件做了处理：当前的DOM元素若包含
relatedTarget，则不执行事件处理函数*/
 var box1=$(".box1");
 box1.on("focus","input",function(){  //变成focusin
  show("son22 focus");//当input获得焦点的时候，同时触发focus和focusin事件，focusin事件冒泡向上传递到祖先
 });
 box1.on("focus","div",function(){  //变成focusin
  show("son11 focus");
 });
 box1.on("focus",function(){  //没有selector，所以还是focus
  show("box1 focus");
 });
/*----------------------------------上面是jQuery出错的情况-------------------------------------*/

/*----------------------------------(2)下面是正常js的情况-------------------------------------*/
/*这样的执行效果是input获得焦点，得到son22 focus，不会导致son11的事件处理函数的执行*/
$(".box1").on("focus",function(){   //自己绑定自己，不会出现focusin的情况
  show("box1 focus");
});
$(".son22").on("focus",function(){  //自己绑定自己，不会出现focusin的情况
  show("son22 focus");
});
$(".son11").on("focus",function(){  //自己绑定自己，不会出现focusin的情况
  show("son11 focus");
});
/*---------------------------------------上面是正常js的情况-------------------------------------*/

/*----------------------------------(3)下面是采用原生js的情况-------------------------------------*/
/*(3)和(2)的效果一致*/
 document.getElementsByClassName("box1")[0].addEventListener("focus",function(){
  show("box1 focus");
 });
 document.getElementsByClassName("son11")[0].addEventListener("focus",function(){
  show("son11 focus");
 }); 
 document.getElementsByClassName("son22")[0].addEventListener("focus",function(){
  show("son22 focus");
 });
/*---------------------------------------上面是采用原生js的情况-------------------------------------*/
   </script>
 </body>
</html>

(3)在jQuery实现事件trigger的时候，比如$("a").trigger("click");手动触发a的click事件，jQuery实现了这个
手动触发的click事件的冒泡，但是唯独在手动触发a的click事件的时候，不让执行默认的跳转行为，其他的元素
可以，

(4)( !selector || selector === handleObj.selector ||//这里我觉得不好，因为要remove子孙元素的handle，
必须要和绑定的一致，这里我觉得要比较DOM对象，而不是单纯的比较selector字符串

(5)elem.off函数只能移除elem.on绑定的事件处理函数，其他的元素代理的绑定的事件处理函数就不能被正确移除
<div><p></p></div>;div.on("click","p",fn1);p.on("click",fn2);p.off("click");这样只能移除p定义的click
事件处理函数fn2，p委托div绑定的click事件处理函数fn1得不到移除

(6)我发现$("div").text();是获得所有的div的innerText，而不是获得第一个匹配的div的innerText,
$("div").html();获得的就是第一个匹配的div的innerHTML;要只获得第一个元素的innerText，jQuery官方只需要
text: function( value ) {
    return access( this, function( value ) {  //这个value就是上面传入的value
      return value === undefined ?  
        jQuery.text( this ) :   //如果value是undefined，说明是获得当前元素的文本
        this.empty().append(    //否则的话就是设置当前元素的文本,this指向当前jQuery对象
          ( this[ 0 ] && this[ 0 ].ownerDocument || document ).createTextNode( value )
        );
    }, null, value, arguments.length );
  },
将jQuery.text( this )变为jQuery.text( this[0] )即可，这样获得的就是第一个元素的innerText

/*给jQuery的建议结束处*/







/*感悟开始处*/
如果一个函数的参数是函数，那么调用该函数的时候，给这个函数传入的参数函数所在的上下文你是不知道的
function a(b){ b(e,f,g);  };function c(){   a(function(){});  }
a函数的参数b是个函数，b的调用，包括传入实参都在a内，但是b的定义是在c函数中，
c中调用a的时候才会定义b，你可能会说，为什么不直接把定义在c中的b函数的代码放到a函数中，因为这样
b函数就不能访问c的上下文了，所以说，如果参数是函数，那么这个函数大概率是访问了定义这个函数的上下文的

for ( ; queue.length; firingIndex = -1 ) { //promise定义部分，这里困了我1个多小时
firingIndex = -1在for循环里面写这句赋值语句真滴是太坑了，就算for循环退出，firingIndex也是等于-1，
非常容易让人误认为firingIndex等于list.length,因为progress要notify的时候需要firingIndex为-1，但是reject
和resolve就需要firingIndex=list.length-1;progress是可以多次notify的，但是reject和resolve就不能多次notify
只能多次添加回调函数，但是这些回调函数会立即执行,当然，progress也是这样，添加回调函数马上执行



函数的外界环境在定义的时候就已经决定了，而不是在执行的时候才决定外界环境
var g={};function a(fn){   var b=Math.random();g[b]=b;fn();return {test:function(){ a(function(){  console.log(b); }); }}  }
这里，在执行test函数的时候，是在调用a函数，然后给a的参数是一个函数，在这个匿名函数中，并
没有定义变量b，因此，b的取值决定与匿名函数所处的外界环境，因此，匿名函数中b的值是第一次执行a函数后b的值

好好的设计对象的结构，这个才能写出好的程序，才不会乱，就像dom对象的设计，包含哪些属性，不包含哪些属性
还有Array对象的设计，这些对象的设计都很好，很完善，

正则表达式中的括号缓存的顺序是遇见第一个左括号就标志为1，(.+)和(.)+的区别在于前者和后者匹配的都是一个
或者多个字符串,但前者缓存的是匹配的多个字符串，后者缓存的是匹配的多个字符串的最后一个字符，比如：
var foo=/(.+)/; foo.exec("sdvdsfv");得到的结果是["sdvdsfv","sdvdsfv"];var bar=/(.)+/;bar.exec("sdvdsfv");
得到的结果是["sdvdsfv","v"];

当鼠标移入一个元素时，同时发生了onmouseenter和onmouseover事件，然后onmouseover事件是冒泡的，可以冒
泡到祖先元素，对于所有的有冒泡事件和非冒泡事件都一样，触发事件会导致冒泡事件和非冒泡事件的触发,如果元素
同时绑定了冒泡事件和非冒泡事件，那么等冒泡事件冒泡完成后，非冒泡事件才会得到执行。也就是说冒泡事件要先于
非冒泡事件，比如一个<div class="box"><div class="son1"><p class="son2"></p></div></div>结构，
$(".box").on("mouseover",fn1);
$(".son1").on("mouseenter",fn2);
$(".son2").on("mouseenter",fn3);
$(".son2").on("mouseover",fn4);
那么当有鼠标进入p元素时，先执行fn4，然后在fn1，然后在fn3

/*感悟结束处*/





/*document对象具有的属性的总结开始处*/
var a=document.getElementById("fakebox");
      a.parentNode,a的父节点，可能是文本节点，注释节点
      a.parentElement指的是a元素的父元素，是DOM节点
      a.previousSibling，指的是a的前面一个兄弟节点，可能是文本节点，注释节点等
      a.previousElementSibling，指的是a的前面一个兄弟节点，是DOM元素
      a.nextSibling指的是a的下一个兄弟节点，不过可能是文本节点，不一定是DOM节点
      a.nextElementSibling指的是下一个兄弟DOM节点
      a.children,指a的DOM孩子节点
      a.childNodes，指a下面的所有节点，包括文本节点，注释节点等
dom.ownerDocument指向当前文档的document，如果dom是document的话，就为null
document.documentElement===document.getElementsByTagName("html")[0];为true
dom.getElementsByClassName,dom.getElementsByTagName,dom.querySelector,dom.querySelectorAll
document.getElementById(只能是document)
document.activeElement指的是当前获取焦点的DOM对象
/*document对象具有的属性的总结结束处*/


/*任务开始处*/
(1)设计一个词法分析器
(2)设计一个爬虫程序-----http权威指南，2016-12-3
(3)promise异步编程的实现
(4)实现设计模式代码
(5)懒加载，即图片需要显示的时候才发起图片请求
/*任务结束处*/

popup.js中可以使用background.js中的函数，background.js决定extensions的行为
contentScrpit.js用于和当前的web page交互,可以把content script当做当前页面的一部分
incognito mode(隐身模式)，incognito mode意味着扩展可以记录浏览的记录，有隐私风险
  "background": {
    "scripts": ["eventPage.js"],
    "persistent": false          
  },
  //背景的script是事件驱动型，不会一直占用内存，没有这个persistent就是持久型，背景script一直在运行


