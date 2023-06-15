# 微信扫码登录
## 1. 申请网站
#### 微信开发平台申请网站应用：https://open.weixin.qq.com/

#### 微信官方文档：https://developers.weixin.qq.com/doc/oplatform/Website_App/WeChat_Login/Wechat_Login.html

## 2. 生成微信登录的二维码
1.在index.html中引入微信登录的官方js文件
``` html 
<script src="http://res.wx.qq.com/connect/zh_CN/htmledition/js/wxLogin.js"></script>
```
2.定义展示二维码的容器
``` html 
<div id="login_container"></div>
mounted(){
        this.init()
    },
    methods:{
        init(){
            var obj = new WxLogin({   // 实际开发过程中这些参数值可以都是后端以一个接口返回回来
                self_redirect:false,
       id:'login_container',
       appid:'wxe19e3e2415e89353',
       scope:'snsapi_login',     redirect_uri:encodeURIComponent('http://www.coolarch.net/Mingzhu/wechat/callBack'),
       state:'1211111',
       style:'black',
       href:'',
            });
        }
    }
```
3.生成的二维码如下

## 3. 