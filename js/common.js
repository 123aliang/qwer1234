$("#header").load("http://localhost/19online/html/common.html .header", function () {
    class Logining {
        constructor() {
            this.logins = localStorage.getItem("loginok");
            this.option = localStorage.getItem("logins");
            this.init();
            this.quiting();
        }
        init() {
            // var this = this;
            if (this.logins == 0) {
                // console.log( $(".logining"));
                $(".logining").text("欢迎  " + this.option.name).css({
                    color: "#08d3f7",
                });
                $(".regsiter").text("退出").css({
                    color: "#920505",
                    cursor: "pointer",
                });
            }
        }
        quiting(){
            var _this = this;
            $(".regsiter").on("click",function(){
                localStorage.removeItem("loginok");
                var str = '<a href="./regsiter.html">注册会员&nbsp;|&nbsp;</a>';
                var str1 = '<a href="./login.html">登录</a>';
                $(".logining").html(str);
                $(".regsiter").html(str1);
            })
        }
    }
    new Logining;
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