"use strict"
class Longin {
    constructor() {
        this.option = localStorage.getItem("logins");
        this.option = JSON.parse(this.option)
        this.fla = false;
        this.but();     
    }
    // 登录按钮
    but(fla){
        var _this = this;
            $("#but").on("click",function(){
                _this.init();
              if(_this.fla){
                    alert("恭喜您登录成功");
                    $(window).attr('location', 'http://localhost/19online/html/index.html');
                    localStorage.setItem("loginok",0);
              }else{
                  console.log("失败");
              }
            })
    }
    // 初始化
    init() {
        
        // console.log(this.option);
        // if ($("#name").val() === this.option.name) {
        //     $(".name1").text("");
        //     this.fla = true;
        // }else 
        if($("#name").val()===""){
            $(".name1").text("用户名不能为空");
            this.fla = false;
        }else{
            $(".name1").text("用户名输入错误");
            this.fla = false;
        }
        if($("#pass").val() === ""){
            $(".pass111").text("密码不能为空");
            this.fla = false;
        }else{
            $(".pass111").text("密码输入错误");
            this.fla = false;
        }
        if ($("#pass").val() === this.option.pass && $("#name").val() === this.option.name) {
            $(".pass111").text("");
            $(".name1").text("");
            this.fla = true;
        }
        
    }
}
new Longin;