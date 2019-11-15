

class List2 {
    constructor() {
        this.init();
    }
    // 初始化
    init() {
        var _this = this;
        // 页面加载后
        $(document).ready(function () {
            // 请求资源 渲染页面
            $.ajax({
                url: "http://localhost/19online/json/shop.json",
                success: function (arr, b, c) {
                    // console.log(typeof a);
                    $('.loding').remove();
                    var str = "";
                    for (var i = 0; i < arr.length; i++) {
                        // console.log(arr[i]);
                        str += `<li id="${arr[i].goodsId}">
                                    <a href="./details.html" title="${arr[i].name}" target="_blank"><img src="${arr[i].htmlimg}" alt="">
                                    <p>${arr[i].name}</p>
                                    </a>
                                    <span>零售价:<b>${arr[i].retail}</b> </span>
                                    <span>会员价:<i>${arr[i].price}</i></span>
                                </li>`
                    }
                    $("#lists").find("ul").html(str);
                    _this.cookies2()
                },
                error: function (a, b, c) {
                    $('.loding').remove();
                    alert("加载超时");
                    console.log(b);
                },
            })
        })
    }
    // 设置sessionstorage;
    cookies2() {
        $("#lists").find("ul").children("li").on("click", function () {
            sessionStorage.setItem("goodId", this.id)
        })
    }
}
new List2;