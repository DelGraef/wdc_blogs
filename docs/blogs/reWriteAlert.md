# 重写Alert
## 踩坑
###  百度的代码下方代码实际并不会生效
```html
//重写alert
window.alert = function(name){
    var iframe = document.createElement("IFRAME");
    iframe.style.display="none";
    iframe.setAttribute("src", 'data:text/plain,');
    document.documentElement.appendChild(iframe);
    window.frames[0].window.alert(name);
    iframe.parentNode.removeChild(iframe);
}
//重写confirm 不显示ip地址  
var wConfirm = window.confirm;  
window.confirm = function (message) {  
    try {  
        var iframe = document.createElement("IFRAME");  
        iframe.style.display = "none";  
        iframe.setAttribute("src", 'data:text/plain,');  
        document.documentElement.appendChild(iframe);  
        var alertFrame = window.frames[0];  
        var iwindow = alertFrame.window;  
        if (iwindow == undefined) {  
            iwindow = alertFrame.contentWindow;  
        }  
        var result = iwindow.confirm(message);  
        iframe.parentNode.removeChild(iframe);  
        return result;  
    }  
    catch (exc) {  
        return wConfirm(message);  
    }  
}
```
## 有效详细代码

```html
<script>
      $(document).ready(function () {
        window.alert = function (msg) {
          //创建弹出窗口（用DIV），窗口上的内容包括一个显示文本字符串的容器和一个按钮
          var fatherBox = document.createElement("div");
          var box = document.createElement("div");
          fatherBox.appendChild(box);
          var msgbox = document.createElement("div");
          box.appendChild(msgbox);
          var btn = document.createElement("button");
          box.appendChild(btn);
          document.body.appendChild(fatherBox);
          box.id = "a1";


          fatherBox.style.cssText ='position:fixed;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,0.6);'
          //设置弹出窗口的显示样式
          box.style.cssText =
            "width:80%;padding:20px;font-size:16px;z-index=100;background:white;border-radius:10px;";
            
          //设置弹出窗口的位置
          box.style.position = "absolute";
          box.style.top = "50%";
          box.style.left = "50%";
          box.style.transform = "translate(-50%,-50%)";

          //设置弹出窗口上的文本内容及其样式
          msgbox.style.cssText = "text-align:center;font-size:20px;";
          msgbox.innerHTML = msg;

          //设置按钮
          btn.innerHTML = "确定";
          // btn.style.cssText = "fsont-size:20px;";
          btn.style.cssText =
            " width:100%;background:#8189f6;border-radius:10px;text-align: center;padding:8px 22px 8px 22px;color:white;font-size:18px;margin: 0 auto;margin-top: 30px;";

          //给按钮绑定单击事件
          btn.onclick = function () {
            document.body.removeChild(fatherBox); //点击确定按钮后让alert窗口消失
          };
        };
        console.log("ready");
      });
    </script>
```
