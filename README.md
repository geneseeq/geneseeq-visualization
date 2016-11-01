# geneseeq-visualization

目前的进度是把echarts的官方简单例子转化为一个react组件，并用rollup打包 

假设系统已经安装nodejs，克隆后在目录下依次执行：
 
npm install
 
rollup -c
 
然后用较新的浏览器打开index.html，当可看见echarts简单图。虽然使用了babel，但是只用其翻译jsx，并未转换es6代码至es5，所以要求浏览器版本较新。暂时的想法是以后引入redux和后端api交互，并撰写gulp任务来自动化生成echarts选项，以达到让生物信息专才快速开发交互图的目的。
