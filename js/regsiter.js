"use strict"

class Regular {
    constructor() {
        console.log(0)
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
    load() {
        this.init();
        this.tel();
        this.email();
        this.pass1();
        this.pass2();
        this.deal()
        this.but();
        this.load1();

    }
    load1() {
        if ($(window).load('http://localhost/19online/html/login.html')) {
            $("#usernamer").val("");
        }

    }
    // 用户名
    init() {
        var _this = this
        $("#usernamer").on("input", function () {
            if (_this.res1.test($("#usernamer").val())) {
                $(".tishi").text("✔").css({
                    color: "#0f0",
                    fontSize: "16px",
                });

                _this.t1 = 0;
            } else {
                var str = "请输入以字母开头和6-10数字组成的名字";
                $(".tishi").text(str).css({
                    color: "#e10303",
                    fontSize: "16px",
                });
                _this.t1 = 1;
            }
            _this.but(_this.t1);
        });
    }
    // 手机号
    tel() {
        var _this = this
        $("#tel").on("input", function () {
            if (_this.res2.test($("#tel").val())) {
                $(".tel").text("✔").css({
                    color: "#0f0",
                    fontSize: "16px",
                });
                _this.t2 = 0;
            } else {
                var str = "请输入以1开头11位数字组成的手机号";
                $(".tel").text(str).css({
                    color: "#e10303",
                    fontSize: "16px",
                });
                _this.t2 = 1;
            }
            _this.but(_this.t2);
        });
    }
    // 邮箱
    email() {
        var _this = this
        $("#email").on("input", function () {
            if (_this.res3.test($("#email").val())) {
                $(".email1").text("✔").css({
                    color: "#0f0",
                    fontSize: "16px",
                });
                _this.t3 = 0;
            } else {
                var str = "请输入正确的邮箱";
                $(".email1").text(str).css({
                    color: "#e10303",
                    fontSize: "16px",
                });
                _this.t3 = 1;
            }
            _this.but(_this.t3);
        });
    }
    // 验证密码
    pass1() {
        var _this = this
        $("#pass1").on("input", function () {
            // console.log(_this.res4.test($("#pass1").val()));
            if (_this.res4.test($("#pass1").val())) {
                $(".passed").text("✔").css({
                    color: "#0f0",
                    fontSize: "16px",
                });
                _this.t4 = 0;
            } else {
                var str = "请输入以6-10位的密码";
                $(".passed").text(str).css({
                    color: "#e10303",
                    fontSize: "16px",
                });
                _this.t4 = 1;
            }
            _this.but(_this.t4);
        });
    }
    // 确认密码
    pass2() {
        var _this = this
        $("#pass2").on("input", function () {
            if ($("#pass1").val() === $("#pass2").val()) {
                $(".pass22").text("✔").css({
                    color: "#0f0",
                    fontSize: "16px",
                })
                _this.t5 = 0;

            } else {
                var str = "请确认您的密码";
                $(".pass22").text(str).css({
                    color: "#e10303",
                    fontSize: "16px",
                });
                _this.t5 = 1;
            }
            _this.but(_this.t5);
        });
    }
    deal() {
        $("#deal").on("click", function () {
            if (!$("#deal").get(0).checkbox) {
                $("#deal").get(0).checkbox = true;
                $(".deal1").css({
                    display: "none",
                })
            }
        })
    }
    but() {
        // console.log(0);
        var _this = this;
        $("#buts").on("click", function () {
            _this.deal()
            if (_this.t1 === 0 && _this.t2 === 0 && _this.t3 === 0 && _this.t4 === 0 && _this.t5 === 0) {
                if (!$("#deal").get(0).checkbox) {
                    $(".deal1").text("同意了才可以注册哦").css({
                        fontSize: "16px",
                    })
                } else {
                    var str = JSON.stringify({ "name": $("#usernamer").val(), "pass": $("#pass1").val() })
                    localStorage.setItem("logins", str);
                    $(".regsiterok").stop().show(1000);
                    var num = 3;
                    setInterval(function () {
                        $(".zhengzai").text(num);
                        num--;
                        if (num < 0) {
                            $(window).attr('location', 'http://localhost/19online/html/login.html');
                        }
                    }, 1000)
                    $("#email").val("");
                }
            }
        })
        // console.log(1);
    }
}
new Regular;