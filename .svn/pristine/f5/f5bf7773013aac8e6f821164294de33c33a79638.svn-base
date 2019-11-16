"use strict"
// 购物车
class Cart {
    constructor() {
        this.obj = localStorage.getItem("addcar") ? JSON.parse(localStorage.getItem("addcar")) : [];
        // 加减按钮信号量
        this.count = 0;
        // 购物车件数信号量
        this.carnum1 = 0;
        this.init();
        this.balance();
    }
    // 初始化
    init() {
        var _this = this;
        $(document).ready(function () {
            _this.rander();
        })
    }
    // 渲染购物车
    rander() {
        var _this = this;
        $.ajax({
            url: "http://localhost/19online/json/shop.json",
            success: function (arr) {
                // arr = JSON.parse(arr1);
                var str = "";
                for (var j = 0; j < _this.obj.length; j++) {
                    // console.log(_this.obj[i].nums);
                    for (var i = 0; i < arr.length; i++) {
                        if (_this.obj[j].id == arr[i].goodsId) {
                            var num1 = (arr[i].price).slice(1);
                            var num2 = parseInt(_this.obj[j].nums);
                            str += ` <tr>
                                        <td>
                                            <input type="checkbox" class="checkboxzi" value="">选择
                                        </td>
                                        <td>
                                            <img src="${arr[i].htmlimg}" alt="">
                                            <a href="./details.html" ><span index="${arr[i].goodsId}" class="liser">${arr[i].name}</span></a>
                                        </td>
                                        <td>${arr[i].price}.00</td>
                                        <td>${arr[i].Integral}</td>
                                        <td><button class="subtract1">-</button><input type="text" class="num" value="${ _this.obj[j].nums}"><button class="plus1">+</button></td>
                                        <td>￥${num1 * num2}.00</td>
                                        <td><button id="${arr[i].goodsId}" class="delete">删除</button></td>
                                    </tr>`
                        }
                    }
                }
                $("#tbody1").html(str);
                _this.incident();
                _this.checkbox1();
                _this.checkboxnum();
            }
        })
    }
    // 购物车功能
    incident() {
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
                    _this.count += 1 * (_this.terui.children[5].innerText).slice(1)
                } else if ($(e.target).get(0).checked === false) {
                    $(".checkboxs").get(0).checked = false
                    _this.count -= 1 * (_this.terui.children[5].innerText).slice(1);
                }
                $(".tatol").get(0).innerText = "￥" + _this.count + ".00";
            }
            // 删除
            _this.delete(e);
            // 跳转详情页
            _this.Jump(e);
        })
    }
    // 当选择全部选上之后 全选勾上
    checkboxnum() {
        var  arr=[];
            $(".checkboxzi").on("click",function(){
                for (var i = 0; i < $(".checkboxzi").length; i++) {
                    arr.push($(".checkboxzi").get(i))
                  }
                var tt = (arr.every(function(ele){
                      return ele.checked
                  }))
                  if (tt) {
                      $(".checkboxs").get(0).checked = true;
                  }
            })
    }
    // 跳转详情页
    Jump(e) {
        if (e.target.className === "liser") {
            this.ids = $(e.target).attr("index");

            sessionStorage.setItem("goodId", this.ids);
        }
    }
    // 全选/反选
    checkbox1() {
        var _this = this;
        $(".checkboxs").on("click", function () {
            _this.count = 0;
            for (var i = 0; i < $(".checkboxzi").length; i++) {
                if ($(".checkboxs").get(0).checked === true) {
                    $(".checkboxzi").get(i).checked = true
                    _this.count += (1 * ($("#tbody1").get(0).children[i].children[5].innerText).slice(1));
                } else if ($(".checkboxs").get(0).checked === false) {
                    $(".checkboxzi").get(i).checked = false;
                    // _this.count = 0;
                }
            }
            // console.log(_this.count);
            $(".tatol").get(0).innerText = "￥" + _this.count + ".00";
        })
    }
    // 按钮
    sda(e) {
        if (e.target.className === "subtract1" || e.target.className === "plus1") {
            // 数量减
            if (e.target.className === "subtract1") {
                // 如果被选中时
                if (this.terui.children[0].children[0].checked === true) {
                    if (this.count == this.terui.children[2].innerText.slice(1)) {
                        this.count == this.terui.children[2].innerText.slice(1)
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
                this.nums1 = parseInt($(e.target).next().val()) - 1
                $(e.target).next().val(this.nums1)
                this.amount(e, this.nums1);
            }
            // 数量加
            if (e.target.className === "plus1") {
                // 复选框被选中时
                if (this.terui.children[0].children[0].checked === true) {
                    // if (this.count <= 99 * this.terui.children[2].innerText.slice(1)) {
                    //     this.count =  this.terui.children[2].innerText.slice(1)
                    // } else {
                    this.count += (1 * this.terui.children[2].innerText.slice(1));
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
                this.amount(e, this.nums2)
            }
            // 加减后购物车的件数
            this.carnum1 = 0
            for (var i = 0; i < this.obj.length; i++) {

                this.carnum1 = parseInt(this.carnum1) + parseInt(this.obj[i].nums);
            }
            $("#carnum").text(this.carnum1);
            $(".numing").text(this.carnum1);
            var str = "￥" + this.terui.children[4].children[1].value * (this.terui.children[2].innerText.slice(1)) + ".00";
            this.terui.children[5].innerText = str ? str : "";
        }
    }
    // 删除商品
    delete(e) {
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
    amount(e, numqwer) {
        this.ids = this.terui.children[6].children[0].id;
        for (var i = 0; i < this.obj.length; i++) {
            if (this.obj[i].id == this.ids) {
                this.obj[i].nums = numqwer;
            }
        }
        localStorage.setItem("addcar", JSON.stringify(this.obj));
    }
    balance() {
        $(".balance").on("click", function () {
            var logs1 = localStorage.getItem("loginok");
            if (logs1 == 0) {
                alert("此功能在开发中")
            } else {
                alert("请先登录");
            }
        })
    }
}
new Cart();
