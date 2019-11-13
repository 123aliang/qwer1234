"use strict"
// 渲染
class Rander{
    constructor(){
        this.init();
    }
    init(){
        var _this = this;
        $(document).ready(function(){
            $.ajax({
                url:"http://localhost/19online/json/shop.json",
                // dataType:"jsonp",
                beforeSend:function(){
                    $('<img src="http://localhost/19online/images/details/jiazai.gif"  class="loding"/">').appendTo($(".seckill").find("ul").children("li"));
                },
                success:function(arr,b,c){
                    // console.log(typeof a);
                   $('.loding').remove();
                    var str = "";
                    for(var i=0;i < 5;i++){
                        str += `<li id="${arr[i].goodsId}">
                                    <a href="./details.html"><img src="${arr[i].htmlimg}"></a>
                                    <a href="">
                                        ${arr[i].name}</a>
                                    <a href="">促销价：<span>${arr[i].price}.00/瓶</span></a>
                                </li>`
                    }
                $(".seckill").find("ul").html(str);
                    _this.cookie1();
                },
                error:function(a,b,c){
                   $('.loding').remove();
                //    alert("加载超时");
                //    console.log(b);
                //    console.log(c);
                },
                // timeout:5000
            })
        })
    }
    cookie1(){
        $(".seckill").find("ul").children("li").on("click",function(){
            localStorage.setItem("goodId",this.id)
        })
    }
}
new Rander;

// class Biglens{
//     constructor(){
//         this.init()
//     }
//     init(){
        
//     }
// }
// 秒杀
class Seckill{
    constructor(str) {
        
        this.str = str;
        this.init();
    }
    init() {
       this.time();
    }
    time(){
        this.future = new Date(this.str);
        this.now = new Date();
        this.time = this.future - this.now;
        this.day = parseInt(this.time / 1000/60 / 60 / 60 % 24);
        this.hour = parseInt(this.time / 1000 / 60 / 60 % 24);
        this.minute = parseInt(this.time  / 1000 / 60 % 60);
        this.seconds = parseInt(this.time  / 1000 % 60);
        this.msec = parseInt(this.time % 60);
        // console.log(this.seconds)
        if (this.hour < 10) {
            this.hour = "0" + this.hour;
        }
        if (this.minute < 10) {
            this.minute = "0" + this.minute;
        }
        if (this.seconds < 10) {
            this.seconds = "0" + this.seconds;
        }
        if (this.day < 10) {
            this.day = "0" + this.day;
        }
        if (this.msec < 10) {
            this.msec = "0" + this.msec;
        }
        this.load();
    }
    load(){
        $(".hour").text(this.day);
        $(".minute").text( this.hour);
        $(".second").text(this.minute);
        $(".msec").text(this.seconds);

        // $(".msec").text(this.msec);
    }
  
}
setInterval(function(){
    new Seckill("2019-11-20 15:40:00");
},1000);
// 二级菜单
(function(){
    for (let i = 1; i <= $(".left-nav").children().length; i++) {
        $(`.wine${i}`).hover(function () {
            $(`.wine${i}`).css({
                background:"#fff",
            }).children(`.wine1none${i}`).css({
                display: "block",
                zIndex:100,
            });
        },function(){
            $(`.wine${i}`).css({
                background:"none",
            }).children(`.wine1none${i}`).css({
                display: "none",
            });
        })
    }
})()

// 选项卡

    $(".news").find("ul").children("li").hover(function(){
        $(this).addClass("activeNews").siblings().removeClass();
        $(".newsding").children("div").eq($(this).index()).addClass("newsbox").siblings().removeClass();
    })
    
// 搜索框清空
$(".search").children(".searchTxt").focus(function(){
    $(".search").children(".searchTxt").val("");
})

// 每周特惠
$(".none").hover(function(){
    if($(this).hasClass(".nones") == false){
         $(".none").addClass("nones")
        $(this).removeClass("nones")
    }
},function(){
    $(".none").removeClass("nones")
})

// 渲染
// class rander{
//     constructor(){

//     }
// }