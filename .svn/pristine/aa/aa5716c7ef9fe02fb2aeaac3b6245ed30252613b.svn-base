; (function ($) {
    "use strict"
    $.fn.extend({
        banner: function (option) {
            // console.log(this); this指向jq的dom对象 防止是属性重复；
            // 定义一个对象
            this.obj = {};
            // this自定义对象
            var _this = this.obj;
            // 解析数据
            _this.img = option.img;
            _this.dot = option.dot == false ? false : true;
            _this.autoPaly = option.autoPaly == false ? false : true;
            _this.intervalTime = option.intervalTime || 2000;
            _this.playTime = option.playTime || 1000;
            _this.dotColor = option.dotColor || "#0f0";
            // 定义一个信号量
            _this.count = 0;
            _this.last = _this.img.length - 1;
            // 右按钮
            function rightbut() {
                if (_this.count == _this.img.length - 1) {
                    _this.count = 0;
                    _this.last = _this.img.length - 1;
                } else {
                    // 进来的
                    _this.count++;
                    // 出去的
                    _this.last = _this.count - 1;
                }
                _this.removebanner(-1);
            }
            // 左按钮
            function leftbut() {
                if (_this.count == 0) {
                    _this.last = 0;
                    _this.count = _this.img.length - 1;
                } else {
                    _this.count--;
                    _this.last = _this.count + 1;
                }
                _this.removebanner(1);

            }
            // 移动方法
            _this.removebanner = function (t) {
                _this.img.eq(_this.last).stop().fadeOut(1000).css({
                    left: 0,
                }).stop().animate({
                    left: _this.img.eq(0).width() * t,
                })
                _this.img.eq(_this.count).css({
                    left: -_this.img.eq(0).width() * t,
                }).stop().fadeIn(1000).stop().animate({
                    left: 0,
                })
                if (_this.dotColor) {
                    ul.children("li").eq(_this.count).css({
                        background: _this.dotColor,
                    }).siblings().css({
                        background: "#ccc",
                    })
                }
            }
            // 判断是否有左右按钮
            if (option.left != undefined && option.left.length == 1 && option.right != undefined && option.right.length == 1) {
                // 右按钮
                option.right.click(function () {
                    if (_this.count == _this.img.length - 1) {
                        _this.count = 0;
                        _this.last = _this.img.length - 1;
                    } else {
                        // 进来的
                        _this.count++;
                        // 出去的
                        _this.last = _this.count - 1;
                    }
                    _this.removebanner(-1);

                })
                // 左按钮
                option.left.click(function () {
                    if (_this.count == 0) {
                        _this.last = 0;
                        _this.count = _this.img.length - 1;
                    } else {
                        _this.count--;
                        _this.last = _this.count + 1;
                    }
                    _this.removebanner(1);

                })
                // 移动方法
                _this.removebanner = function (t) {
                    _this.img.eq(_this.last).css({
                        left: 0,
                    }).stop().animate({
                        left: _this.img.eq(0).width() * t,
                    })
                    _this.img.eq(_this.count).css({
                        left: -_this.img.eq(0).width() * t,
                    }).stop().animate({
                        left: 0,
                    })
                    if (_this.dotColor) {
                        ul.children("li").eq(_this.count).css({
                            background: _this.dotColor,
                        }).siblings().css({
                            background: "#ccc",
                        })
                    }
                }
            }
            // 判断是否有小圆点
            if (_this.dot) {
                var str = "";
                for (var i = 0; i < _this.img.length; i++) {
                    str += `<li>${i + 1}</li>`
                }
                var ul = $("<ul>").html(str);
                this.append(ul);
                ul.css({
                    width: "100%",
                    height: 30,
                    position: "absolute",
                    left: 0,
                    bottom: 10,
                    listStyle: "none",
                    margin: 0,
                    marginLeft: 20,
                    padding: 0,
                    textAlign: "center",
                    lineHeight: "15px"
                }).children("li").css({
                    float:"left",
                    border:"1px solid #545454",
                    width: 15,
                    height: 15,
                    background: "#d9d9d9",
                    margin: "0 5px",
                    cursor: "pointer"
                }).eq(_this.count).css({
                    background: option.dotColor,
                })
                //     给每个里添加点击事件
                ul.children("li").click(function () {
                    if ($(this).index() > _this.count) {
                        // console.log(_this.count);
                        _this.dotMove($(this).index(), 1)
                    } else if ($(this).index() < _this.count) {
                        _this.dotMove($(this).index(), -1)
                    }
                    _this.count = $(this).index();
                    if (_this.dotColor) {
                        $(this).css({
                            background: _this.dotColor,
                        }).siblings().css({
                            background: "#ccc",
                        })
                    }
                })
                // 移动的方法函数
                _this.dotMove = function (move1, t) {
                    option.img.eq(_this.count).css({
                        left: 0
                    }).stop().animate({
                        left: -option.img.eq(0).width() * t,
                    })
                    option.img.eq(move1).css({
                        left: option.img.eq(0).width() * t,
                    }).stop().animate({
                        left: 0,
                    })

                }
            }
            // 判断是否要自动轮播
            if (_this.autoPaly) {
                _this.t = setInterval(() => {
                    //        console.log(1);  
                    rightbut();
                }, _this.intervalTime);
                this.hover(function () {
                    clearInterval(_this.t)
                }, function () {
                    _this.t = setInterval(() => {
                        //        console.log(1);  
                        rightbut();
                    }, _this.intervalTime);
                })
            }
        }
    })
})(jQuery);


$("#banner").banner({
    // 图片
    img:$("#banner").find(".imgs"),  
    // 左按钮
    left:$("#leftbut"),
    // 右按钮
    right:$("#rightbut"),
    // 小圆点
    dot:true,
    // 自动播放
    autoPaly:true,
    // 图片移动时间间隔 间隔
    intervalTime:3000,
    // 播放时间
    playTime:1000,
    // 小圆点颜色
    dotColor:"#fff",
    // 小圆点背景颜色
    dotBackground:"#00f",
})