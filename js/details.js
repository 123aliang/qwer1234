"use strict"
// 

class Randerbig {
    constructor() {
        this.init();
    }
    init() {
        var _this = this;
        $(document).ready(function () {
            _this.ajax1();
            _this.id = localStorage.getItem("goodId");
        })
    }
    // 请求数据
    ajax1() {
        var _this = this;
        $.ajax({
            url: "http://localhost/19online/json/shop.json",
            success: function (arr) {
                var str = "";
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i].goodsId === _this.id) {
                        str = `<div class="margin">
                       <div class="details-t">
                           <div class="place">
                               <p>
                                   <span>您所在的位置：</span><a href="./index.html">首页</a>
                                   <i>&gt;&gt;</i>
                                   <a href="#">&nbsp; ${arr[i].wineclass}</a>
                                   <i>&gt;&gt;</i><i>&gt;&gt;</i>
                                   <span>${arr[i].name}</span>
                               </p>
                           </div>
                           <div class="product">
                               <div id="magnifying">
                                   <div class="magnifying-l">
                                       <div class="lens-big">
                                           <div class="smell-lens">
                                               <div class="huan-lens">
                                               <img src="${arr[i].bigimg1}" alt="">
                                                </div>
                                               <div class="lens"></div>
                                           </div>
                                           <div class="big-lens"> <img src="${arr[i].bigimg1}"
                                                   alt=""></div>
                                       </div>
                                       <div class="spec-list">
                                           <button class="specleft specbut"></button>
                                           <ul>
                                               <li><img src="${arr[i].bigimg1}" alt=""></li>
                                               <li><img src="${arr[i].bigimg2}" alt=""></li>
                                               <li><img src="${arr[i].bigimg3}" alt=""></li>
                                           </ul>
                                           <button class="specright specbut"></button>
                                       </div>
                                       <div class="refer">
                                           <span> 产品图片及介绍说明仅供参考，一切以发货实物为准！</span>
                                       </div>
                                   </div>
                                   <div class="magnifying-r">
                                       <div class="winename">
                                           <h1>${arr[i].name} &nbsp; <span class="zo1">${arr[i].name2}</span></h1>
                                           <h2>Brown Brothers Moscato (Semi Sweet)</h2>
                                       </div>
                                       <div class="cost">
                                           <p>
                                               <i>会员价：</i>
                                               <span id="price">${arr[i].price}</span><i>/支</i>
                                               <b>零售价:<span id="price2">${arr[i].retail}.00</span></b>
                                           </p>
                                       </div>
                                       <div class="integral">
                                           <span>赠送积分：<b>64</b></span> <a href="#" class="behoof">积分的用途</a>
                                           <a class="login" href="./login.html">&gt;&gt;登录</a>
                                           <span>后可以查看登记奖励积分</span>
                                       </div>
                                       <div class="quantity">
                                           <span>数量</span>
                                           <button id="subtract" class="but">-</button>
                                           <input type="text" id="num" value="1">
                                           <button id="plus" class="but">+</button>
                                       </div>
                                       <div>
                                           <button id="promptly" class="mai">立即购买</button>
                                           <button id="car" class="mai">
                                               <!-- <img src="../images/details/car.jpg" alt=""> -->
                                               加入购物车
                                           </button>
                                       </div>
                                   </div>
                               </div>
                               <div class="correlation">
                                   <span class="correlation-t">相关产品</span>
                                   <ul>
                                       <li>
                                           <a href="#" title="HHW密斯揭夫白葡萄酒">
                                               <img src="http://i.19online.cn/picture/s_1566220150422144635.jpg" alt="HHW密斯揭夫白葡萄酒">
                                               <span>HHW密斯揭夫白葡萄酒</span>
                                               <em>￥129.00</em>
                                           </a>
                                       </li>
                                       <li>
                                           <a href="#" title="HHW密斯揭夫白葡萄酒">
                                               <img src="http://i.19online.cn/picture/s_1566220150422144635.jpg" alt="HHW密斯揭夫白葡萄酒">
                                               <span>HHW密斯揭夫白葡萄酒</span>
                                               <em>￥129.00</em>
                                           </a>
                                       </li>
           
                                   </ul>
                               </div>
                           </div>
                       </div>
                       <div class="details-b">
                           <div class="catering detailsed">
                               <div class="catering-t details1">
                                   <span>配餐建议</span>
                               </div>
                               <div class="catering-b details1-b">
                                   <p>此酒可作为理想的开胃酒，或搭配新鲜热带水果拼盘，美味无比。</p>
                                   <img src="${arr[i].detsimg1}" alt="">
                               </div>
                           </div>
                           <div class="introduce detailsed">
                                   <div class="introduce-t details1">
                                       <span>产品介绍</span>
                                   </div>
                                   <div class="introduce-b details1-b">
                                       <img src="${arr[i].detsimg2}" alt="">
                                       
                                       <img src="" alt="">
                                   </div>
                               </div>
                       </div>
                   </div>`
                    }
                }
                $("#details").html(str);
                _this.biglens();
            }
        })
    }
    // 放大镜
    biglens() {
        // 放大镜
        $(".spec-list").find("ul").children("li").hover(function () {
            var str = $(this).html()
            console.log(str);

            $(".huan-lens").html(str);
            $(".big-lens").html(str)


            // $(this).addClass("activeNews").siblings().removeClass();
            // $(".newsding").children("div").eq($(this).index()).addClass("newsbox").siblings().removeClass();
        })

        // 放大镜
        $(".smell-lens").hover(function (event) {
            $(".big-lens").show();
            $(".lens").show();
            var imgx = $(".big-lens").children("img").width();
            var imgy = $(".big-lens").children("img").height();

            var bilix = ($(this).width() - $(".lens").width()) / (imgx - $(".big-lens").width());
            var biliy = ($(this).height() - $(".lens").height()) / (imgy - $(".big-lens").height());

            // var newx = event.clientX;
            // var newy = event.clientY;
            // var oldx = $(".smell-lens").offset().left;
            // var oldy = $(".smell-lens").offset().top - $(window).scrollTop();
            $(document).on("mousemove.a", function (event) {
                // console.log($(window).scrollTop());
                var newx = event.clientX;
                var newy = event.clientY;
                var oldx = $(".smell-lens").get(0).getBoundingClientRect().left;
                var oldy = $(".smell-lens").get(0).getBoundingClientRect().top;
                var x = newx - oldx - $(".lens").width() / 2;
                var y = newy - oldy - $(".lens").height() / 2;
                if (x < 0) {
                    x = 0;
                } else if (x > $(".smell-lens").width() - $(".lens").width()) {
                    x = $(".smell-lens").width() - $(".lens").width()
                }
                if (y < 0) {
                    y = 0;
                } else if (y > $(".smell-lens").height() - $(".lens").height()) {
                    y = $(".smell-lens").height() - $(".lens").height()
                }
                $(".lens").css({
                    left: x + "px",
                    top: y + "px",
                })
                $(".big-lens").children("img").css({
                    left: - x / bilix + "px",
                    top: - y / biliy + "px",
                })
            })
        }, function () {
            // $(document).off("mousemove.a");
            // console.log($(".big-lens").children("img").width());
            $(".big-lens").hide();
            $(".lens").hide();
        })

    }
}
new Randerbig;

