"use strict"
class Cart {
    constructor() {
        this.obj = localStorage.getItem("addcar") ? JSON.parse(localStorage.getItem("addcar")) : [];
        this.count = 0;
        this.init();
    }
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
                                            <a href="./details.html"><span>${arr[i].name}</span></a>
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
            _this.ids = _this.terui.children[6].children[0].id;
            
            // console.log($(e.target).get(0))
            // if(e.target.className === "subtract1"){
            //     console.log(e.target);

            //     this.terui.children[4].children[1].value--;
            //         if(this.terui.children[4].children[1].value < 1){
            //             alert("商品最少为1件");
            //             this.terui.children[4].children[1].value = 1;
            //         }
            //         this.terui.children[5]
            // }
            // if(e.target.className === "plus1"){
            //     this.terui.children[4].children[1].value++;
            //     if(this.terui.children[4].children[1].value > 99){
            //         alert("商品最多为99件");
            //         this.terui.children[4].children[1].value = 99;
            //     }
            // }
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
            // 数量
            // _this.amount();
        })
    }
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
    // 
    // amount(){
    //     this.tt = false;
    //     $("#")
    //     for(var i = 0;i < $(".checkboxzi").length;i++){
            
    //     }   
    //     console.log(this.tt);
        
    //     if(!this.tt){
    //         $(".checkboxs").get(0).checked = true;
    //     }
    // }
    // 按钮
    sda(e) {
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
           this.nums1 = parseInt($(e.target).next().val()) - 1 
           $(e.target).next().val(this.nums1)
            if ($(e.target).next().val() < 1) {
                alert("商品最少为1件");
                $(e.target).next().val("1");
            }
            
            this.amount(e,this.nums1)
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
            this.nums2 = parseInt($(e.target).prev().val()) + 1;
            $(e.target).prev().val(this.nums2);
            if ($(e.target).prev().val() > 99) {
                alert("商品最多为99件");
                $(e.target).prev().val("99");
            }
            this.amount(e,this.nums2)
        }
        this.terui.children[5].innerText = "￥" + this.terui.children[4].children[1].value * (this.terui.children[2].innerText.slice(1)) + ".00";
    }
    // 删除商品
    delete(e){
        if(e.target.className === "delete"){
            for(var i = 0;i < this.obj.length;i++){
                if(this.obj[i].id == e.target.id ){
                    e.target.parentNode.parentNode.remove();
                    this.obj.splice(i,1);
                }
            }
            localStorage.setItem("addcar",JSON.stringify(this.obj));
        }
    }
    // 设置加减后的cookie
    amount(e,numqwer){        
            for(var i = 0;i < this.obj.length;i++){
                if(this.obj[i].id == this.ids ){
                    this.obj[i].nums = numqwer;
                }
            }
            localStorage.setItem("addcar",JSON.stringify(this.obj));
    }
}
new Cart();
