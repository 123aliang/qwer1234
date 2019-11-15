function setCookie(key,value,options){
    options = options||{};

    var path = options.path? `;path=${options.path}`:"";
    var exp = "";
    if(options.expires){
        var d = new Date();
        d.setDate(d.getDate()+options.expires);
        exp = ";expires="+d;
    }
    document.cookie = `${key}=${value}${path}${exp}`;
}

function removeCookie(key,options){
    options = options || {};
    options.expires = -1;
    setCookie(key,null,options);
}

function getCookie(key){
   var arr = document.cookie.split("; ");
    for(var i = 0;i < arr.length;i++){
            var str = arr[i].split("=");
            if(str[0] === key){
                return str[1];
            }
    }
    return null;
}
