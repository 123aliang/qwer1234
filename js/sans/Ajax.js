function AjaxGet(url, calback, obj) {
    obj = obj || {};
   var str = "";
   for (var i in obj) {
       str += `${i}=${obj[i]}&`;
   }
   var d = new Date();
   var url = url + "?" + str + "_aini_=" + d.getTime();
   var xhr = new XMLHttpRequest();
   xhr.open("get", url, true);
   xhr.onreadystatechange = function () {
       if (xhr.readyState == 4 && xhr.status == 200) {
           calback(xhr.responseText);
       }
   }
   xhr.send();
}

function AjaxPost(url,call_back,obj){
    obj = obj || {};
    var str = "";
    for(var i in obj){
        str += `${i}=${obj[i]}&`;
    }
    var xhr = new XMLHttpRequest();
    xhr.open("post",url,true);
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            call_back(xhr.responseText);
        }
    }
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    xhr.send(str);
}