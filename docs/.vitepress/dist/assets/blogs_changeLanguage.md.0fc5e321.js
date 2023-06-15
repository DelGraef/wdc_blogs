import{_ as s,o as n,c as a,O as l}from"./chunks/framework.6c3d5fe4.js";const F=JSON.parse('{"title":"多语言设置","description":"","frontmatter":{},"headers":[],"relativePath":"blogs/changeLanguage.md","filePath":"blogs/changeLanguage.md"}'),p={name:"blogs/changeLanguage.md"},o=l(`<h1 id="多语言设置" tabindex="-1">多语言设置 <a class="header-anchor" href="#多语言设置" aria-label="Permalink to &quot;多语言设置&quot;">​</a></h1><h2 id="_1-下载" tabindex="-1">1. 下载 <a class="header-anchor" href="#_1-下载" aria-label="Permalink to &quot;1. 下载&quot;">​</a></h2><p>终端输入：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm install --save vue-i18n</span></span></code></pre></div><h2 id="_2-配置zh-js和en-js文件-写入需要转化的内容" tabindex="-1">2. 配置zh.js和en.js文件，写入需要转化的内容 <a class="header-anchor" href="#_2-配置zh-js和en-js文件-写入需要转化的内容" aria-label="Permalink to &quot;2. 配置zh.js和en.js文件，写入需要转化的内容&quot;">​</a></h2><p>en.js：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">module.exports = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  i18n: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    title: &#39;Digital RMB exchange machine&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    InitializationPage: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      remindContent: &#39;Page initializing, please wait...&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    languagePage: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      ChineseBtn: &#39;Chinese&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      EnglishBtn: &#39;English&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      dialogTips: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        title: &#39;Tips&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        content: &#39;The system will use English language. Do you want to continue?&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        confirmButtonText: &#39;confirm&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        cancelButtonText: &#39;cancel&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    homePage: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      functionBtn1: &#39;deposit in soft Wallet&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      functionBtn2: &#39;deposit in Hard Wallet&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><p>zh.js：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">module.exports = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  i18n: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    title: &#39;数字人民币兑换机&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    InitializationPage: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      remindContent: &#39;页面正在初始化，请稍等...&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    languagePage: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      ChineseBtn: &#39;中 文&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      EnglishBtn: &#39;English&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      dialogTips: {</span></span>
<span class="line"><span style="color:#A6ACCD;">        title: &#39;提 示&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        content: &#39;系统将使用中文语言, 是否继续?&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        confirmButtonText: &#39;确 定&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">        cancelButtonText: &#39;取 消&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    homePage: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      functionBtn1: &#39;外币兑换存入软钱包&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">      functionBtn2: &#39;外币兑换存入硬钱包&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span></code></pre></div><h2 id="_3-在main-js中引入" tabindex="-1">3. 在main.js中引入 <a class="header-anchor" href="#_3-在main-js中引入" aria-label="Permalink to &quot;3. 在main.js中引入&quot;">​</a></h2><hr><p>在main.js中引入：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">import VueI18n from &#39;vue-i18n&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import en from &#39;../renderer/assets/lang/en&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import zh from &#39;../renderer/assets/lang/zh&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">Vue.use(VueI18n)</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">// 创建VueI18n实例</span></span>
<span class="line"><span style="color:#A6ACCD;">const i18n = new VueI18n({</span></span>
<span class="line"><span style="color:#A6ACCD;">  locale: &#39;zh&#39;, // 语言标识,默认中文</span></span>
<span class="line"><span style="color:#A6ACCD;">  messages: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;zh&#39;: {...zh},</span></span>
<span class="line"><span style="color:#A6ACCD;">    &#39;en&#39;: {...en}</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  silentTranslationWarn: true // 去除国际化警告</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">new Vue({</span></span>
<span class="line"><span style="color:#A6ACCD;">  components: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    App</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  router,</span></span>
<span class="line"><span style="color:#A6ACCD;">  store,</span></span>
<span class="line"><span style="color:#A6ACCD;">  i18n,</span></span>
<span class="line"><span style="color:#A6ACCD;">  template: &#39;</span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">App</span><span style="color:#89DDFF;">/&gt;</span><span style="color:#A6ACCD;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">}).$mount(&#39;#app&#39;)</span></span></code></pre></div><h2 id="_3-页面使用" tabindex="-1">3. 页面使用 <a class="header-anchor" href="#_3-页面使用" aria-label="Permalink to &quot;3. 页面使用&quot;">​</a></h2><hr><p>在页面中使用：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">此时在组件页面内也可以直接使用</span></span>
<span class="line"><span style="color:#A6ACCD;">视图代码：{{ $t(&#39;xx.xxxx&#39;)}} // 例如：{{$t(&#39;navbar.search&#39;)}} 利用插值表达式直接渲染到页面</span></span>
<span class="line"><span style="color:#A6ACCD;">当我们引入VueI18n语言插件之后，每个组件实例都拥有了一个$t方法，这个方法可以帮助我们进行语言转换，可以根据当前的语言类型，使用传入</span></span>
<span class="line"><span style="color:#A6ACCD;">的key去寻找当前key对应的文本</span></span>
<span class="line"><span style="color:#A6ACCD;">自动切换：this.$i18n.locale = &#39;zh&#39;  // 在某个事件回调函数里赋值使用，相当于this.$router</span></span></code></pre></div><h2 id="_4-切换多语言" tabindex="-1">4.切换多语言 <a class="header-anchor" href="#_4-切换多语言" aria-label="Permalink to &quot;4.切换多语言&quot;">​</a></h2><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">el-dropdown</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">trigger</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">click</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">@command</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">handleCommand</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#676E95;font-style:italic;">&lt;!-- icon-class=&quot;language&quot; 需要在src\\icons\\svg\\下有一个名为language.svg的文件。 --&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">svg-icon</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">color:#fff;font-size:20px</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">icon-class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">language</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">el-dropdown-menu</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">slot</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">dropdown</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">el-dropdown-item</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">command</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">zh</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:disabled</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">&#39;zh&#39;=== $i18n.locale </span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">中文</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">el-dropdown-item</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">el-dropdown-item</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">command</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">en</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">:disabled</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">&#39;en&#39;=== $i18n.locale </span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">en</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">el-dropdown-item</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">el-dropdown-menu</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">el-dropdown</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">default</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">methods</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">handleCommand</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">lang</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">$i18n</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">locale</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">lang</span><span style="color:#F07178;"> </span><span style="color:#676E95;font-style:italic;">// 设置给本地的i18n插件</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">$message</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">success</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">切换多语言成功</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><div></div>`,20),e=[o];function t(c,r,D,i,y,C){return n(),a("div",null,e)}const d=s(p,[["render",t]]);export{F as __pageData,d as default};
