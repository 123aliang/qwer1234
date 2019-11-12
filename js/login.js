
class Longin {
    constructor() {
        this.option = localStorage.getItem("logins");
        this.option = JSON.parse(this.option)
        this.fla = false;
        this.but();     
    }
    but(fla){
        var _this = this;
            $("#but").on("click",function(){
                _this.init();
                console.log(_this.fla);
              if(_this.fla){
                    console.log(1);  
              }else{
                  console.log(2);
              }
            })
    }
    init() {
        
        console.log(this.option);
        if ($("#name").val() === this.option.name) {
            $(".name1").text("");
            this.fla = true;
        }else if($("#name").val()===""){
            $(".name1").text("用户名不能为空");
            this.fla = false;
        }else{
            $(".name1").text("用户名输入错误");
            this.fla = false;
        }

        if ($("#pass").val() === this.option.pass) {
            $(".pass111").text("");
            this.fla = true;
        }else if($("#pass").val() === ""){
            $(".pass111").text("密码不能为空");
            this.fla = false;
        }else{
            $(".pass111").text("密码输入错误");
            this.fla = false;
        }
    }
}


new Longin;