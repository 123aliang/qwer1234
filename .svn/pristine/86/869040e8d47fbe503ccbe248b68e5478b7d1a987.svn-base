"use strict";
// 购物车

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cart = function () {
    function Cart() {
        _classCallCheck(this, Cart);

        this.obj = localStorage.getItem("addcar") ? JSON.parse(localStorage.getItem("addcar")) : [];
        // 加减按钮信号量
        this.count = 0;
        // 购物车件数信号量
        this.carnum1 = 0;
        this.init();
        this.balance();
    }
    // 初始化


    _createClass(Cart, [{
        key: "init",
        value: function init() {
            var _this = this;
            $(document).ready(function () {
                _this.rander();
            });
        }
        // 渲染购物车

    }, {
        key: "rander",
        value: function rander() {
            var _this = this;
            $.ajax({
                url: "http://localhost/19online/json/shop.json",
                success: function success(arr) {
                    // arr = JSON.parse(arr1);
                    var str = "";
                    for (var j = 0; j < _this.obj.length; j++) {
                        // console.log(_this.obj[i].nums);
                        for (var i = 0; i < arr.length; i++) {
                            if (_this.obj[j].id == arr[i].goodsId) {
                                var num1 = arr[i].price.slice(1);
                                var num2 = parseInt(_this.obj[j].nums);
                                str += " <tr>\n                                        <td>\n                                            <input type=\"checkbox\" class=\"checkboxzi\" value=\"\">\u9009\u62E9\n                                        </td>\n                                        <td>\n                                            <img src=\"" + arr[i].htmlimg + "\" alt=\"\">\n                                            <a href=\"./details.html\" ><span index=\"" + arr[i].goodsId + "\" class=\"liser\">" + arr[i].name + "</span></a>\n                                        </td>\n                                        <td>" + arr[i].price + ".00</td>\n                                        <td>" + arr[i].Integral + "</td>\n                                        <td><button class=\"subtract1\">-</button><input type=\"text\" class=\"num\" value=\"" + _this.obj[j].nums + "\"><button class=\"plus1\">+</button></td>\n                                        <td>\uFFE5" + num1 * num2 + ".00</td>\n                                        <td><button id=\"" + arr[i].goodsId + "\" class=\"delete\">\u5220\u9664</button></td>\n                                    </tr>";
                            }
                        }
                    }
                    $("#tbody1").html(str);
                    _this.incident();
                    _this.checkbox1();
                    _this.checkboxnum();
                }
            });
        }
        // 购物车功能

    }, {
        key: "incident",
        value: function incident() {
            var _this = this;
            $("#tbody1").on("click", function (e) {
                var e = e || event;
                //被点击的那一行tr
                _this.terui = e.target.parentNode.parentNode;
                // 数量加
                _this.sda(e);
                // 总数量
                if (e.target.className === "checkboxzi") {
                    if ($(e.target).get(0).checked === true) {
                        _this.count += 1 * _this.terui.children[5].innerText.slice(1);
                    } else if ($(e.target).get(0).checked === false) {
                        $(".checkboxs").get(0).checked = false;
                        _this.count -= 1 * _this.terui.children[5].innerText.slice(1);
                    }
                    $(".tatol").get(0).innerText = "￥" + _this.count + ".00";
                }
                // 删除
                _this.delete(e);
                // 跳转详情页
                _this.Jump(e);
            });
        }
        // 当选择全部选上之后 全选勾上

    }, {
        key: "checkboxnum",
        value: function checkboxnum() {
            var arr = [];
            $(".checkboxzi").on("click", function () {
                for (var i = 0; i < $(".checkboxzi").length; i++) {
                    arr.push($(".checkboxzi").get(i));
                }
                var tt = arr.every(function (ele) {
                    return ele.checked;
                });
                if (tt) {
                    $(".checkboxs").get(0).checked = true;
                }
            });
        }
        // 跳转详情页

    }, {
        key: "Jump",
        value: function Jump(e) {
            if (e.target.className === "liser") {
                this.ids = $(e.target).attr("index");

                sessionStorage.setItem("goodId", this.ids);
            }
        }
        // 全选/反选

    }, {
        key: "checkbox1",
        value: function checkbox1() {
            var _this = this;
            $(".checkboxs").on("click", function () {
                _this.count = 0;
                for (var i = 0; i < $(".checkboxzi").length; i++) {
                    if ($(".checkboxs").get(0).checked === true) {
                        $(".checkboxzi").get(i).checked = true;
                        _this.count += 1 * $("#tbody1").get(0).children[i].children[5].innerText.slice(1);
                    } else if ($(".checkboxs").get(0).checked === false) {
                        $(".checkboxzi").get(i).checked = false;
                        // _this.count = 0;
                    }
                }
                // console.log(_this.count);
                $(".tatol").get(0).innerText = "￥" + _this.count + ".00";
            });
        }
        // 按钮

    }, {
        key: "sda",
        value: function sda(e) {
            if (e.target.className === "subtract1" || e.target.className === "plus1") {
                // 数量减
                if (e.target.className === "subtract1") {
                    // 如果被选中时
                    if (this.terui.children[0].children[0].checked === true) {
                        if (this.count == this.terui.children[2].innerText.slice(1)) {
                            this.count == this.terui.children[2].innerText.slice(1);
                        } else {
                            this.count -= this.terui.children[2].innerText.slice(1);
                        }
                        $(".tatol").get(0).innerText = "￥" + this.count + ".00";
                    }
                    // 正常点击加减
                    if ($(e.target).next().val() <= 1) {
                        alert("商品最少为1件");
                        $(e.target).next().val("2");
                    }
                    this.nums1 = parseInt($(e.target).next().val()) - 1;
                    $(e.target).next().val(this.nums1);
                    this.amount(e, this.nums1);
                }
                // 数量加
                if (e.target.className === "plus1") {
                    // 复选框被选中时
                    if (this.terui.children[0].children[0].checked === true) {
                        // if (this.count <= 99 * this.terui.children[2].innerText.slice(1)) {
                        //     this.count =  this.terui.children[2].innerText.slice(1)
                        // } else {
                        this.count += 1 * this.terui.children[2].innerText.slice(1);
                        // }
                        $(".tatol").get(0).innerText = "￥" + this.count + ".00";
                    }
                    // 正常累加

                    if ($(e.target).prev().val() >= 99) {
                        alert("商品最多为99件");
                        $(e.target).prev().val("99");
                    }
                    this.nums2 = parseInt($(e.target).prev().val()) + 1;
                    $(e.target).prev().val(this.nums2);
                    this.amount(e, this.nums2);
                }
                // 加减后购物车的件数
                this.carnum1 = 0;
                for (var i = 0; i < this.obj.length; i++) {

                    this.carnum1 = parseInt(this.carnum1) + parseInt(this.obj[i].nums);
                }
                $("#carnum").text(this.carnum1);
                $(".numing").text(this.carnum1);
                var str = "￥" + this.terui.children[4].children[1].value * this.terui.children[2].innerText.slice(1) + ".00";
                this.terui.children[5].innerText = str ? str : "";
            }
        }
        // 删除商品

    }, {
        key: "delete",
        value: function _delete(e) {
            if (e.target.className === "delete") {
                for (var i = 0; i < this.obj.length; i++) {
                    if (this.obj[i].id == e.target.id) {
                        e.target.parentNode.parentNode.remove();
                        this.obj.splice(i, 1);
                    }
                }
                localStorage.setItem("addcar", JSON.stringify(this.obj));
            }
        }
        // 设置加减后的cookie

    }, {
        key: "amount",
        value: function amount(e, numqwer) {
            this.ids = this.terui.children[6].children[0].id;
            for (var i = 0; i < this.obj.length; i++) {
                if (this.obj[i].id == this.ids) {
                    this.obj[i].nums = numqwer;
                }
            }
            localStorage.setItem("addcar", JSON.stringify(this.obj));
        }
    }, {
        key: "balance",
        value: function balance() {
            $(".balance").on("click", function () {
                var logs1 = localStorage.getItem("loginok");
                if (logs1 == 0) {
                    alert("此功能在开发中");
                } else {
                    alert("请先登录");
                }
            });
        }
    }]);

    return Cart;
}();

new Cart();

"use strict";
$("#header").load("http://localhost/19online/html/common.html .header", function () {
    var Logining = function () {
        function Logining() {
            _classCallCheck(this, Logining);

            this.logins = localStorage.getItem("loginok") ? JSON.parse(localStorage.getItem("loginok")) : [];
            this.option = localStorage.getItem("logins") ? JSON.parse(localStorage.getItem("logins")) : [];
            this.carnum = 0;
            this.init();
            this.quiting();
        }
        // 判断登录状态


        _createClass(Logining, [{
            key: "init",
            value: function init() {
                // var this = this;
                if (this.logins === 0) {
                    // console.log( $(".logining"));
                    $(".logining").text("欢迎  " + this.option.name).css({
                        color: "#08d3f7"
                    });
                    $(".regsiter").text("退出").css({
                        color: "#920505",
                        cursor: "pointer"
                    });
                    this.addcar1 = localStorage.getItem("addcar") ? JSON.parse(localStorage.getItem("addcar")) : [];
                    for (var i = 0; i < this.addcar1.length; i++) {

                        this.carnum = parseInt(this.carnum) + parseInt(this.addcar1[i].nums);
                    }
                    $("#carnum").text(this.carnum);
                }
            }
            // 用户退出状态

        }, {
            key: "quiting",
            value: function quiting() {
                var _this = this;
                $(".regsiter").on("click", function () {
                    localStorage.removeItem("loginok");
                    var str = '<a href="./regsiter.html">注册会员&nbsp;|&nbsp;</a>';
                    var str1 = '<a href="./login.html">登录</a>';
                    $(".logining").html(str);
                    $(".regsiter").html(str1);
                });
            }
        }]);

        return Logining;
    }();

    new Logining();
});
$("#nav").load("http://localhost/19online/html/common.html .nav");
$("#guild").load("http://localhost/19online/html/common.html .guild");
$("#aboutus").load("http://localhost/19online/html/common.html .aboutus");
$("#footer").load("http://localhost/19online/html/common.html .footer");
$("#more").load("http://localhost/19online/html/common.html .nore");

// $(window).ready(function(){
//       console.log($(".header"))
//             });

// class Logining{
//     constructor(){
//         this.logins = localStorage.getItem("loginok");
//         this.option = localStorage.getItem("logins");
//         this.init();
//     }
//     init(){
//         // var this = this;
//             if(this.logins == 0){
//                 // console.log( $(".logining"));
//                         $(".logining").text("欢迎"+this.option.name+"&nbsp;|&nbsp;");
//                         $(".regsiter").text("退出"+"&nbsp;|&nbsp;");
//                     }
//         // if($(window).load("http//localhost/19online/html/index.html")){
//         //     if(this.logins==0){
//         //         $(".login").text("欢迎"+this.option.name+"&nbsp;|&nbsp;");
//         //         $(".regsiter").text("退出"+"&nbsp;|&nbsp;");
//         //     }
//         // }
//     }
// }
// new Logining;
"use strict";
// 计入购物车

var Randerbig = function () {
    function Randerbig() {
        _classCallCheck(this, Randerbig);

        // 加入购物车信号量
        this.num = 0;
        // 购物车件数信号量
        this.carnum2 = 0;
        this.init();
    }
    // 初始化


    _createClass(Randerbig, [{
        key: "init",
        value: function init() {
            var _this = this;
            $(document).ready(function () {
                _this.ajax1();
                _this.id = sessionStorage.getItem("goodId");
                _this.logs2 = JSON.parse(sessionStorage.getItem("goodId"));
            });
        }
        // 请求数据

    }, {
        key: "ajax1",
        value: function ajax1() {
            var _this = this;
            $.ajax({
                url: "http://localhost/19online/json/shop.json",
                success: function success(arr) {
                    var str = "";
                    for (var i = 0; i < arr.length; i++) {
                        if (arr[i].goodsId === _this.id) {
                            str = "<div class=\"margin\">\n                       <div class=\"details-t\">\n                           <div class=\"place\">\n                               <p>\n                                   <span>\u60A8\u6240\u5728\u7684\u4F4D\u7F6E\uFF1A</span><a href=\"./index.html\">\u9996\u9875</a>\n                                   <i>&gt;&gt;</i>\n                                   <a href=\"../html/list.html\">&nbsp; " + arr[i].wineclass + "</a>\n                                   <i>&gt;&gt;</i><i>&gt;&gt;</i>\n                                   <span>" + arr[i].name + "</span>\n                               </p>\n                           </div>\n                           <div class=\"product\">\n                               <div id=\"magnifying\">\n                                   <div class=\"magnifying-l\">\n                                       <div class=\"lens-big\">\n                                           <div class=\"smell-lens\">\n                                               <div class=\"huan-lens\">\n                                               <img src=\"" + arr[i].bigimg1 + "\" alt=\"\">\n                                                </div>\n                                               <div class=\"lens\"></div>\n                                           </div>\n                                           <div class=\"big-lens\"> <img src=\"" + arr[i].bigimg1 + "\"\n                                                   alt=\"\"></div>\n                                       </div>\n                                       <div class=\"spec-list\">\n                                           <button class=\"specleft specbut\"></button>\n                                           <ul>\n                                               <li><img src=\"" + arr[i].bigimg1 + "\" alt=\"\"></li>\n                                               <li><img src=\"" + arr[i].bigimg2 + "\" alt=\"\"></li>\n                                               <li><img src=\"" + arr[i].bigimg3 + "\" alt=\"\"></li>\n                                           </ul>\n                                           <button class=\"specright specbut\"></button>\n                                       </div>\n                                       <div class=\"refer\">\n                                           <span> \u4EA7\u54C1\u56FE\u7247\u53CA\u4ECB\u7ECD\u8BF4\u660E\u4EC5\u4F9B\u53C2\u8003\uFF0C\u4E00\u5207\u4EE5\u53D1\u8D27\u5B9E\u7269\u4E3A\u51C6\uFF01</span>\n                                       </div>\n                                   </div>\n                                   <div class=\"magnifying-r\" id=\"" + arr[i].goodsId + "\">\n                                       <div class=\"winename\">\n                                           <h1>" + arr[i].name + " &nbsp; <span class=\"zo1\">" + arr[i].name2 + "</span></h1>\n                                           <h2>" + arr[i].name3 + "</h2>\n                                       </div>\n                                       <div class=\"cost\">\n                                           <p>\n                                               <i>\u4F1A\u5458\u4EF7\uFF1A</i>\n                                               <span id=\"price\">" + arr[i].price + "</span><i>/\u652F</i>\n                                               <b>\u96F6\u552E\u4EF7:<span id=\"price2\">" + arr[i].retail + ".00</span></b>\n                                           </p>\n                                       </div>\n                                       <div class=\"integral\">\n                                           <span>\u8D60\u9001\u79EF\u5206\uFF1A<b>64</b></span> <a href=\"#\" class=\"behoof\">\u79EF\u5206\u7684\u7528\u9014</a>\n                                           <a class=\"login\" href=\"./login.html\">&gt;&gt;\u767B\u5F55</a>\n                                           <span>\u540E\u53EF\u4EE5\u67E5\u770B\u767B\u8BB0\u5956\u52B1\u79EF\u5206</span>\n                                       </div>\n                                       <div class=\"quantity\">\n                                           <span>\u6570\u91CF</span>\n                                           <button id=\"subtract\" class=\"but\">-</button>\n                                           <input type=\"text\" id=\"numde\" value=\"1\">\n                                           <button id=\"plus\" class=\"but\">+</button>\n                                       </div>\n                                       <div>\n                                           <button id=\"promptly\" class=\"mai\">\u7ACB\u5373\u8D2D\u4E70</button>\n                                           <button id=\"car\" class=\"mai\">\n                                               <!-- <img src=\"../images/details/car.jpg\" alt=\"\"> -->\n                                               \u52A0\u5165\u8D2D\u7269\u8F66\n                                           </button>\n                                       </div>\n                                   </div>\n                               </div>\n                               <div class=\"correlation\">\n                                   <span class=\"correlation-t\">\u76F8\u5173\u4EA7\u54C1</span>\n                                   <ul>\n                                       <li>\n                                       <a href=\"#\" title=\"" + arr[9].name + "\">\n                                       <img src=\"" + arr[9].htmlimg + "\" alt=\"" + arr[9].name + "\">\n                                       <span>" + arr[9].name + "</span>\n                                       <em>" + arr[9].price + ".00</em>\n                                   </a>\n                                       </li>\n                                       <li>\n                                           <a href=\"#\" title=\"" + arr[7].name + "\">\n                                               <img src=\"" + arr[7].htmlimg + "\" alt=\"" + arr[7].name + "\">\n                                               <span>" + arr[7].name + "</span>\n                                               <em>" + arr[7].price + ".00</em>\n                                           </a>\n                                       </li>\n           \n                                   </ul>\n                               </div>\n                           </div>\n                       </div>\n                       <div class=\"details-b\">\n                           <div class=\"catering detailsed\">\n                               <div class=\"catering-t details1\">\n                                   <span>\u914D\u9910\u5EFA\u8BAE</span>\n                               </div>\n                               <div class=\"catering-b details1-b\">\n                                   <p>\u6B64\u9152\u53EF\u4F5C\u4E3A\u7406\u60F3\u7684\u5F00\u80C3\u9152\uFF0C\u6216\u642D\u914D\u65B0\u9C9C\u70ED\u5E26\u6C34\u679C\u62FC\u76D8\uFF0C\u7F8E\u5473\u65E0\u6BD4\u3002</p>\n                                   <img src=\"" + arr[i].detsimg1 + "\" alt=\"\">\n                               </div>\n                           </div>\n                           <div class=\"introduce detailsed\">\n                                   <div class=\"introduce-t details1\">\n                                       <span>\u4EA7\u54C1\u4ECB\u7ECD</span>\n                                   </div>\n                                   <div class=\"introduce-b details1-b\">\n                                       <img src=\"" + arr[i].detsimg2 + "\" alt=\"\">\n                                       \n                                       <img src=\"\" alt=\"\">\n                                   </div>\n                               </div>\n                       </div>\n                   </div>";
                        }
                    }
                    $("#details").html(str);
                    _this.biglens();
                    _this.jionCar();
                }
            });
        }
        // 放大镜

    }, {
        key: "biglens",
        value: function biglens() {
            // 放大镜
            $(".spec-list").find("ul").children("li").hover(function () {
                var str = $(this).html();
                // console.log(str);

                $(".huan-lens").html(str);
                $(".big-lens").html(str);

                // $(this).addClass("activeNews").siblings().removeClass();
                // $(".newsding").children("div").eq($(this).index()).addClass("newsbox").siblings().removeClass();
            });
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
                        x = $(".smell-lens").width() - $(".lens").width();
                    }
                    if (y < 0) {
                        y = 0;
                    } else if (y > $(".smell-lens").height() - $(".lens").height()) {
                        y = $(".smell-lens").height() - $(".lens").height();
                    }
                    $(".lens").css({
                        left: x + "px",
                        top: y + "px"
                    });
                    $(".big-lens").children("img").css({
                        left: -x / bilix + "px",
                        top: -y / biliy + "px"
                    });
                });
            }, function () {
                // $(document).off("mousemove.a");
                // console.log($(".big-lens").children("img").width());
                $(".big-lens").hide();
                $(".lens").hide();
            });
        }
        // 加入购物车

    }, {
        key: "jionCar",
        value: function jionCar() {
            this.leftbut();
            this.blour();
            // this.rightbut()
            // this.addbut()
        }
        // 数量验证

    }, {
        key: "blour",
        value: function blour() {
            var _this = this;
            $("#numde").on("input", function () {
                var res = /^\d+$/;
                if ($("#numde").val() === "") {
                    alert("数量不能为空");
                    $("#numde").val("1");
                } else if (!res.test($("#numde").val())) {
                    alert("数量必须为数字");
                    parseInt($("#numde").val("1"));
                } else if (res.test($("#numde").val()) && $("#numde").val() >= 99) {
                    alert("请理性消费数量控制在99以下");
                    $("#numde").val("99");
                    _this.num = $("#numde").val();
                }
            });
        }
        // 点击左右按钮；还有立即购买；加入购入车

    }, {
        key: "leftbut",
        value: function leftbut() {
            var _this = this;
            this.num = $("#numde").val();
            $(".magnifying-r").on("click", function (event) {
                var logs1 = localStorage.getItem("loginok");

                //    console.log(logs2); 
                // 左按钮
                if (event.target === $("#subtract").get(0)) {
                    _this.num--;
                    if (_this.num <= 1) {
                        _this.num = 1;
                        alert("最少要有一件商品");
                    }
                    $("#numde").val(_this.num);
                    // 右按钮
                } else if (event.target === $("#plus").get(0)) {
                    _this.num++;
                    if (_this.num > 99) {
                        _this.num = 99;
                        alert("请停止您的剁手行为");
                    }
                    $("#numde").val(_this.num);
                }
                // 立即购买
                if (event.target === $("#promptly").get(0)) {
                    if (logs1 == 0) {
                        $(window).attr('location', 'http://localhost/19online/html/cart.html');
                    } else {
                        alert("请先登录");
                    }
                }
                // 加入购物车
                if (event.target === $("#car").get(0)) {
                    if (logs1 == 0) {
                        alert("加入购物车成功");
                        _this.addbut();
                        // var obj = [{"id":this.logs2,"nums":this.num}]
                        // console.log(obj);
                        // var obj1 = JSON.stringify(obj)
                        // console.log(obj1);
                        // 购物车件数
                        this.addcar1 = localStorage.getItem("addcar") ? JSON.parse(localStorage.getItem("addcar")) : [];
                        this.carnum2 = 0;
                        for (var i = 0; i < this.addcar1.length; i++) {
                            console.log(_typeof(parseInt(this.addcar1[i].nums)));
                            console.log(_typeof(parseInt(this.carnum2)));

                            this.carnum2 = parseInt(this.carnum2) + parseInt(this.addcar1[i].nums);
                        }
                        $("#carnum").text(this.carnum2);
                    } else {
                        alert("请先登录");
                    }
                }
            });
        }
        // 判断加入购物车的产品

    }, {
        key: "addbut",
        value: function addbut() {
            var arr = localStorage.getItem("addcar") ? JSON.parse(localStorage.getItem("addcar")) : [];
            // console.log(arr);
            // console.log(this.logs2);

            if (arr.length === 0) {
                arr.push({
                    id: this.logs2,
                    nums: this.num
                });
                // console.log(arr);
            } else {
                var t1 = 1;
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i].id == this.logs2) {
                        // console.log(this.logs2);
                        // console.log(arr[i].id);
                        var butnum = parseInt(this.num);
                        var kienum = parseInt(arr[i].nums);
                        arr[i].nums = butnum + kienum;
                        t1 = 0;
                    }
                }
                if (t1 == 1) {
                    arr.push({
                        id: this.logs2,
                        nums: this.num
                    });
                }
            }
            localStorage.setItem("addcar", JSON.stringify(arr));
        }
    }]);

    return Randerbig;
}();

new Randerbig();

var List2 = function () {
    function List2() {
        _classCallCheck(this, List2);

        this.init();
    }
    // 初始化


    _createClass(List2, [{
        key: "init",
        value: function init() {
            var _this = this;
            // 页面加载后
            $(document).ready(function () {
                // 请求资源 渲染页面
                $.ajax({
                    url: "http://localhost/19online/json/shop.json",
                    success: function success(arr, b, c) {
                        // console.log(typeof a);
                        $('.loding').remove();
                        var str = "";
                        for (var i = 0; i < arr.length; i++) {
                            // console.log(arr[i]);
                            str += "<li id=\"" + arr[i].goodsId + "\">\n                                    <a href=\"./details.html\" title=\"" + arr[i].name + "\" target=\"_blank\"><img src=\"" + arr[i].htmlimg + "\" alt=\"\">\n                                    <p>" + arr[i].name + "</p>\n                                    </a>\n                                    <span>\u96F6\u552E\u4EF7:<b>" + arr[i].retail + "</b> </span>\n                                    <span>\u4F1A\u5458\u4EF7:<i>" + arr[i].price + "</i></span>\n                                </li>";
                        }
                        $("#lists").find("ul").html(str);
                        _this.cookies2();
                    },
                    error: function error(a, b, c) {
                        $('.loding').remove();
                        alert("加载超时");
                        console.log(b);
                    }
                });
            });
        }
        // 设置sessionstorage;

    }, {
        key: "cookies2",
        value: function cookies2() {
            $("#lists").find("ul").children("li").on("click", function () {
                sessionStorage.setItem("goodId", this.id);
            });
        }
    }]);

    return List2;
}();

new List2();
"use strict";

var Longin = function () {
    function Longin() {
        _classCallCheck(this, Longin);

        this.option = localStorage.getItem("logins");
        this.option = JSON.parse(this.option);
        this.fla = false;
        this.but();
    }
    // 登录按钮


    _createClass(Longin, [{
        key: "but",
        value: function but(fla) {
            var _this = this;
            $("#but").on("click", function () {
                _this.init();
                if (_this.fla) {
                    alert("恭喜您登录成功");
                    $(window).attr('location', 'http://localhost/19online/html/index.html');
                    localStorage.setItem("loginok", 0);
                } else {
                    console.log("失败");
                }
            });
        }
        // 初始化

    }, {
        key: "init",
        value: function init() {

            // console.log(this.option);
            // if ($("#name").val() === this.option.name) {
            //     $(".name1").text("");
            //     this.fla = true;
            // }else 
            if ($("#name").val() === "") {
                $(".name1").text("用户名不能为空");
                this.fla = false;
            } else {
                $(".name1").text("用户名输入错误");
                this.fla = false;
            }
            if ($("#pass").val() === "") {
                $(".pass111").text("密码不能为空");
                this.fla = false;
            } else {
                $(".pass111").text("密码输入错误");
                this.fla = false;
            }
            if ($("#pass").val() === this.option.pass && $("#name").val() === this.option.name) {
                $(".pass111").text("");
                $(".name1").text("");
                this.fla = true;
            }
        }
    }]);

    return Longin;
}();

new Longin();
"use strict";

var Regular = function () {
    function Regular() {
        _classCallCheck(this, Regular);

        console.log(0);
        this.res1 = /^[a-zA-Z]{1}[a-zA-Z0-9]{5,9}$/;
        this.res2 = /^[1][0-9]{10}$/;
        this.res3 = /^\w{3,12}@\w{1,5}\.[a-z]{2,3}$/;
        this.res4 = /^[\S]{6,10}$/;
        this.t1 = 1;
        this.t2 = 1;
        this.t3 = 1;
        this.t4 = 1;
        this.t5 = 1;
        this.load();
        this.but();
    }

    _createClass(Regular, [{
        key: "load",
        value: function load() {
            this.init();
            this.tel();
            this.email();
            this.pass1();
            this.pass2();
            this.deal();
            this.but();
            this.load1();
        }
    }, {
        key: "load1",
        value: function load1() {
            if ($(window).load('http://localhost/19online/html/login.html')) {
                $("#usernamer").val("");
            }
        }
        // 用户名

    }, {
        key: "init",
        value: function init() {
            var _this = this;
            $("#usernamer").on("input", function () {
                if (_this.res1.test($("#usernamer").val())) {
                    $(".tishi").text("✔").css({
                        color: "#0f0",
                        fontSize: "16px"
                    });

                    _this.t1 = 0;
                } else {
                    var str = "请输入以字母开头和5-10数字组成的名字";
                    $(".tishi").text(str).css({
                        color: "#e10303",
                        fontSize: "16px"
                    });
                    _this.t1 = 1;
                }
                _this.but(_this.t1);
            });
        }
        // 手机号

    }, {
        key: "tel",
        value: function tel() {
            var _this = this;
            $("#tel").on("input", function () {
                if (_this.res2.test($("#tel").val())) {
                    $(".tel").text("✔").css({
                        color: "#0f0",
                        fontSize: "16px"
                    });
                    _this.t2 = 0;
                } else {
                    var str = "请输入以1开头11位数字组成的手机号";
                    $(".tel").text(str).css({
                        color: "#e10303",
                        fontSize: "16px"
                    });
                    _this.t2 = 1;
                }
                _this.but(_this.t2);
            });
        }
        // 邮箱

    }, {
        key: "email",
        value: function email() {
            var _this = this;
            $("#email").on("input", function () {
                if (_this.res3.test($("#email").val())) {
                    $(".email1").text("✔").css({
                        color: "#0f0",
                        fontSize: "16px"
                    });
                    _this.t3 = 0;
                } else {
                    var str = "请输入正确的邮箱";
                    $(".email1").text(str).css({
                        color: "#e10303",
                        fontSize: "16px"
                    });
                    _this.t3 = 1;
                }
                _this.but(_this.t3);
            });
        }
        // 验证密码

    }, {
        key: "pass1",
        value: function pass1() {
            var _this = this;
            $("#pass1").on("input", function () {
                // console.log(_this.res4.test($("#pass1").val()));
                if (_this.res4.test($("#pass1").val())) {
                    $(".passed").text("✔").css({
                        color: "#0f0",
                        fontSize: "16px"
                    });
                    _this.t4 = 0;
                } else {
                    var str = "请输入以6-10位的密码";
                    $(".passed").text(str).css({
                        color: "#e10303",
                        fontSize: "16px"
                    });
                    _this.t4 = 1;
                }
                _this.but(_this.t4);
            });
        }
        // 确认密码

    }, {
        key: "pass2",
        value: function pass2() {
            var _this = this;
            $("#pass2").on("input", function () {
                if ($("#pass1").val() === $("#pass2").val()) {
                    $(".pass22").text("✔").css({
                        color: "#0f0",
                        fontSize: "16px"
                    });
                    _this.t5 = 0;
                } else {
                    var str = "请确认您的密码";
                    $(".pass22").text(str).css({
                        color: "#e10303",
                        fontSize: "16px"
                    });
                    _this.t5 = 1;
                }
                _this.but(_this.t5);
            });
        }
    }, {
        key: "deal",
        value: function deal() {
            $("#deal").on("click", function () {
                if (!$("#deal").get(0).checkbox) {
                    $("#deal").get(0).checkbox = true;
                    $(".deal1").css({
                        display: "none"
                    });
                }
            });
        }
    }, {
        key: "but",
        value: function but() {
            // console.log(0);
            var _this = this;
            $("#buts").on("click", function () {
                _this.deal();
                if (_this.t1 === 0 && _this.t2 === 0 && _this.t3 === 0 && _this.t4 === 0 && _this.t5 === 0) {
                    if (!$("#deal").get(0).checkbox) {
                        $(".deal1").text("同意了才可以注册哦").css({
                            fontSize: "16px"
                        });
                    } else {
                        var str = JSON.stringify({ "name": $("#usernamer").val(), "pass": $("#pass1").val() });
                        localStorage.setItem("logins", str);
                        $(".regsiterok").stop().show(1000);
                        var num = 3;
                        setInterval(function () {
                            $(".zhengzai").text(num);
                            num--;
                            if (num < 0) {
                                $(window).attr('location', 'http://localhost/19online/html/login.html');
                            }
                        }, 1000);
                        $("#email").val("");
                    }
                }
            });
            // console.log(1);
        }
    }]);

    return Regular;
}();

new Regular();