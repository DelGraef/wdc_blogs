# 多语言设置
## 1. 下载
终端输入：
```html
 npm install --save vue-i18n
```
## 2. 配置zh.js和en.js文件，写入需要转化的内容
en.js：
```html
 module.exports = {
  i18n: {
    title: 'Digital RMB exchange machine',
    InitializationPage: {
      remindContent: 'Page initializing, please wait...'
    },
    languagePage: {
      ChineseBtn: 'Chinese',
      EnglishBtn: 'English',
      dialogTips: {
        title: 'Tips',
        content: 'The system will use English language. Do you want to continue?',
        confirmButtonText: 'confirm',
        cancelButtonText: 'cancel'
      }
    },
    homePage: {
      functionBtn1: 'deposit in soft Wallet',
      functionBtn2: 'deposit in Hard Wallet'
    }
  }
}
```
zh.js：
```html
module.exports = {
  i18n: {
    title: '数字人民币兑换机',
    InitializationPage: {
      remindContent: '页面正在初始化，请稍等...'
    },
    languagePage: {
      ChineseBtn: '中 文',
      EnglishBtn: 'English',
      dialogTips: {
        title: '提 示',
        content: '系统将使用中文语言, 是否继续?',
        confirmButtonText: '确 定',
        cancelButtonText: '取 消'
      }
    },
    homePage: {
      functionBtn1: '外币兑换存入软钱包',
      functionBtn2: '外币兑换存入硬钱包'
    }
  }
}
```

## 3. 在main.js中引入

--- 
在main.js中引入：
```html
 import VueI18n from 'vue-i18n'
import en from '../renderer/assets/lang/en'
import zh from '../renderer/assets/lang/zh'
 
Vue.use(VueI18n)
 
// 创建VueI18n实例
const i18n = new VueI18n({
  locale: 'zh', // 语言标识,默认中文
  messages: {
    'zh': {...zh},
    'en': {...en}
  },
  silentTranslationWarn: true // 去除国际化警告
})
 
new Vue({
  components: {
    App
  },
  router,
  store,
  i18n,
  template: '<App/>'
}).$mount('#app')
```

## 3. 页面使用

--- 
在页面中使用：
```html
此时在组件页面内也可以直接使用
视图代码：{{ $t('xx.xxxx')}} // 例如：{{$t('navbar.search')}} 利用插值表达式直接渲染到页面
当我们引入VueI18n语言插件之后，每个组件实例都拥有了一个$t方法，这个方法可以帮助我们进行语言转换，可以根据当前的语言类型，使用传入
的key去寻找当前key对应的文本
自动切换：this.$i18n.locale = 'zh'  // 在某个事件回调函数里赋值使用，相当于this.$router
 
```
##  4.切换多语言
```html
<template>
  <el-dropdown trigger="click" @command="handleCommand">
    <div>
      <!-- icon-class="language" 需要在src\icons\svg\下有一个名为language.svg的文件。 -->
      <svg-icon style="color:#fff;font-size:20px" icon-class="language" />
    </div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item command="zh" :disabled="'zh'=== $i18n.locale ">中文</el-dropdown-item>
      <el-dropdown-item command="en" :disabled="'en'=== $i18n.locale ">en</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  methods: {
    handleCommand(lang) {
      this.$i18n.locale = lang // 设置给本地的i18n插件
      this.$message.success('切换多语言成功')
    }
  }
}
</script>
```
<div>
</div>


<script setup>
</script>