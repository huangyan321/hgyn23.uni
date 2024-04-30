export default {
	"code": 200,
	"msg": "success",
	"errorCode": 0,
	"data": {
		"page": 1,
		"page_size": "infinite",
		"total": 46,
		"total_pages": 1,
		"records": [
			{
				"created_at": "2024-04-15 22:44:38",
				"updated_at": "2024-04-15 22:46:33",
				"id": 277,
				"title": "通用低代码平台处理少数特殊需求的方案列举",
				"description": "通过拖拉拽方式生成配置化 JSON 的设计模式非常适用于快速开发和部署标准化的前端应用。针对那些无法完全由配置化平台覆盖的特殊需求（大约10%），这里有一些可以帮助开发者灵活处理这些情况的实践方法",
				"img_cover": "",
				"seo_keyword": "低代码",
				"is_top": 0,
				"status": 1,
				"sort": 1,
				"ai_summary": "",
				"browse": 13,
				"like_count": 0,
				"uid": 1,
				"category_id": 1,
				"reading_time": 218400
			},
			{
				"created_at": "2024-03-27 22:29:07",
				"updated_at": "2024-04-15 23:02:18",
				"id": 276,
				"title": "Work in Progress",
				"description": "👀️",
				"img_cover": "",
				"seo_keyword": "学习",
				"is_top": 1,
				"status": 1,
				"sort": 1,
				"ai_summary": "",
				"browse": 38,
				"like_count": 0,
				"uid": 1,
				"category_id": 7,
				"reading_time": 42000
			},
			{
				"created_at": "2024-02-20 22:45:24",
				"updated_at": "2024-03-03 22:22:24",
				"id": 274,
				"title": "开发计划",
				"description": "列举一些优化点及今后开发计划",
				"img_cover": "",
				"seo_keyword": "开发计划",
				"is_top": 1,
				"status": 1,
				"sort": 1,
				"ai_summary": "",
				"browse": 87,
				"like_count": 0,
				"uid": 1,
				"category_id": 1,
				"reading_time": 88500
			},
			{
				"created_at": "2023-12-06 09:42:22",
				"updated_at": "2024-02-29 21:12:37",
				"id": 270,
				"title": "Vue2/3 通用指令化弹窗组件封装",
				"description": "指令化弹窗，顾名思义是通过代码调用方式唤起的弹窗，在某些场景下具有非常高的灵活性。",
				"img_cover": "https://docsapi.hgyn23.cn/Vue.js_Logo_2.svg.png",
				"seo_keyword": "vue组件",
				"is_top": 0,
				"status": 1,
				"sort": 1,
				"ai_summary": "这段代码是一个Vue组件，用于创建一个模态框（Modal）。模态框有默认的标题、内容和底部，以及一个确定按钮。样式定义了按钮、卡片和模态框的外观。代码还包含了Vue2和Vue3版本的组件实现。",
				"browse": 366,
				"like_count": 0,
				"uid": 1,
				"category_id": 1,
				"reading_time": 288000
			},
			{
				"created_at": "2023-11-18 01:18:59",
				"updated_at": "2024-02-19 10:11:02",
				"id": 269,
				"title": "模板DSL编译器核心实现思路",
				"description": "👀️ 编译器其实只是一段程序，它用来将一种语言A翻译成另一种语言B。其中语言A叫做**源语言**，语言B叫做**目标语言**。编译器将源语言翻译为目标语言的过程被称为**编译**。",
				"img_cover": "",
				"seo_keyword": "编译器",
				"is_top": 0,
				"status": 1,
				"sort": 1,
				"ai_summary": "本文介绍了Vue模板编译的工作流程和实现思路。编译器是将一种语言翻译成另一种语言的程序，而DSL是针对特定领域的语言。Vue模板编译将模板语言翻译成渲染函数，包括词法分析和语法分析，将模板AST转换为Javascript AST，最后生成渲染函数的Javascript代码。词法分析和语法分析通过解析器完成，解析器根据有限自动状态机将模板切割为词法记号。最后给出了具体的代码实现示例。",
				"browse": 250,
				"like_count": 0,
				"uid": 1,
				"category_id": 1,
				"reading_time": 1535700
			},
			{
				"created_at": "2023-11-09 10:42:20",
				"updated_at": "2024-02-18 02:05:27",
				"id": 268,
				"title": "双端diff算法详解",
				"description": "`diff` 算法是一种通过同层的树节点进行比较的算法，其在前端框架领域中得到广泛运用，主要用于虚拟 `dom` 渲染成真实 `dom` 的新旧 `VNode` 节点比较，从而使 `Dom`节点高效地更新。",
				"img_cover": "https://docsapi.hgyn23.cn/下载.png",
				"seo_keyword": "diff算法",
				"is_top": 0,
				"status": 1,
				"sort": 1,
				"ai_summary": "双端diff算法是Vue渲染器的核心算法，用于比较新旧节点并找出最小的更新代价。算法通过四个索引值来标记新旧子节点的两个端点，然后进行双端比较。比较过程中，如果找到可以复用的节点，则将其移动到正确的位置。移动完成后，更新索引值，继续下一轮比较。算法通过循环来实现多轮比较，直到所有节点都被比较完。",
				"browse": 170,
				"like_count": 0,
				"uid": 1,
				"category_id": 1,
				"reading_time": 1670100
			},
			{
				"created_at": "2023-05-02 16:28:05",
				"updated_at": "2024-02-18 18:50:22",
				"id": 267,
				"title": "响应式系统的构建思路",
				"description": "`Vue`的响应式系统的构建比较复杂，在深入探究vue整体实现思路之前，可以在尽可能保留源码设计逻辑下，自己动手实现一个基础的响应式系统。这样对 `Dep`、`Watcher`和 `Observer`等概念也会有初步的认识。",
				"img_cover": "https://docsapi.hgyn23.cn/mvvm.png",
				"seo_keyword": "vue",
				"is_top": 0,
				"status": 1,
				"sort": 1,
				"ai_summary": "该系统是参考vuejs2.7.14源码搭建的，旨在实现一个简单的响应式框架MiniVue。框架的搭建思路是先初始化数据和方法，然后将数据代理到实例的第一层，接着将数据设置为响应式对象，最后实例化订阅者Watcher并更新数据状态。订阅者的管理由Dep类完成，它负责依赖的收集和更新的派发。",
				"browse": 142,
				"like_count": 0,
				"uid": 1,
				"category_id": 1,
				"reading_time": 616200
			},
			{
				"created_at": "2023-02-25 19:39:41",
				"updated_at": "2024-02-18 23:45:20",
				"id": 264,
				"title": "常用排序算法",
				"description": "介绍几种常见的排序算法：冒泡排序、选择排序、插入排序、归并排序、快速排序、希尔排序、堆排序、计数排序、桶排序、基数排序。",
				"img_cover": "https://docsapi.hgyn23.cn/bubbleSortCover.png",
				"seo_keyword": "sort",
				"is_top": 0,
				"status": 1,
				"sort": 1,
				"ai_summary": "这段文本介绍了封装ArrayList类以及冒泡排序、选择排序、希尔排序、计数排序和桶排序的算法实现和步骤。",
				"browse": 129,
				"like_count": 0,
				"uid": 1,
				"category_id": 1,
				"reading_time": 467400
			},
			{
				"created_at": "2022-11-10 19:07:11",
				"updated_at": "2024-02-19 15:04:34",
				"id": 256,
				"title": "解决git 不同branch 下node_moudes不同步的问题",
				"description": "在遇到某个依赖重大更新，可能要修改很多代码的时候，你希望在彻底升级成功之前，不搞乱 `node_modules`目录。这时候就要祭出 `git worktree`这个命令。",
				"img_cover": "https://docsapi.hgyn23.cn/Git-logo.svg.png",
				"seo_keyword": "git",
				"is_top": 0,
				"status": 1,
				"sort": 1,
				"ai_summary": "在进行nodejs开发或者vue react等开发时，使用git进行版本管理时会遇到一个问题。通常情况下，node_modules会被添加到.gitignore中，不需要提交。但是在切换分支时会遇到问题，比如在dev分支升级了某个依赖到最新版本，此时node_modules下的所有文件都被更新了。如果切回到master分支，修改一个小错误，会发现由于node_modules下的依赖已经是新版本，而master分支仍然使用旧版本，导致代码运行不正常，所以需要重新npm install一下，将所有依赖回到原来的版本，使master分支正常。再切回dev分支，依赖又不对了，又需要npm install一次，非常麻烦。特别是在遇到某个依赖重大更新，可能需要修改很多代码的情况下，希望在彻底升级成功之前不搞乱node_modules目录。这时可以使用git worktree命令，建立一个完全干净的全新工作目录upslider，来自于dev分支。在这个工作目录下进行升级工作，不会影响原来工作目录下的node_modules。完成升级工作并测试无误后，可以进行commit，生成一个新的分支。然后回到原来的工作目录，可以使用git merge命令将修改的代码合并到当前工作目录。",
				"browse": 57,
				"like_count": 0,
				"uid": 1,
				"category_id": 1,
				"reading_time": 150600
			},
			{
				"created_at": "2022-09-01 15:28:29",
				"updated_at": "2024-02-19 12:23:57",
				"id": 254,
				"title": "清除浮动的hack方法",
				"description": "```css\ndiv:before{display:table; content:\"\"}\ndiv:after{display:table; content:\"\";clear:both}\n```\n这两行简短代码可以轻松实现元素**1.防止内边距塌陷 2.清除浮动**的功能，也有很多主流网站采用了该方法",
				"img_cover": null,
				"seo_keyword": "keyword",
				"is_top": 0,
				"status": 1,
				"sort": 1,
				"ai_summary": "这段代码实现了一个效果，通过在父元素上使用伪元素::before和::after来生成一个匿名表格单元格和一个新的块格式化上下文。这样可以防止上边距折叠，并清除浮动。",
				"browse": 84,
				"like_count": 0,
				"uid": 1,
				"category_id": 1,
				"reading_time": 47700
			},
			{
				"created_at": "2022-08-29 17:59:20",
				"updated_at": "2024-02-18 21:50:22",
				"id": 253,
				"title": "Element组件工具函数解析",
				"description": "> 在解析element-ui各个组件源码之前，我们需要做一些前期准备工作，这里特别介绍element-ui的各个工具类方法，路径在`element\\src\\utils`中，用于在之后组件解析过程中参照使用。",
				"img_cover": null,
				"seo_keyword": "keyword",
				"is_top": 0,
				"status": 1,
				"sort": 1,
				"ai_summary": "这篇文章介绍了element-ui的一些工具类方法，包括类型检测方法和一些实用的工具函数。其中，类型检测方法包括判断是否是字符串、对象、元素节点和函数，以及检查参数是否是undefined和是否定义。实用的工具函数包括空函数、检查是否是自身属性、对象混入、flat对象数组、转义正则表达式字符串、寻找数组中符合要求的值的索引和寻找符合要求的值。",
				"browse": 53,
				"like_count": 0,
				"uid": 1,
				"category_id": 1,
				"reading_time": 874800
			},
			{
				"created_at": "2022-08-24 16:42:41",
				"updated_at": "2024-02-15 01:11:43",
				"id": 252,
				"title": "Javascript 相关高级API的Polyfill实现",
				"description": "javascript在es5之后新增了不少API，实现的方法不方便统一归类，总是在用与不用之间徘徊，下面介绍一些常用API的polyfill实现，便于理解其中原理。",
				"img_cover": null,
				"seo_keyword": "keyword",
				"is_top": 0,
				"status": 1,
				"sort": 1,
				"ai_summary": "Object.is()是一个用于判断两个值是否相等的方法。它主要用于解决一些特殊情况下两个操作数不相等的问题，与===操作符相比没有太大区别。如果浏览器不支持Object.is()方法，可以使用polyfill进行兼容处理。",
				"browse": 35,
				"like_count": 0,
				"uid": 1,
				"category_id": 1,
				"reading_time": 41400
			},
			{
				"created_at": "2022-08-22 16:37:17",
				"updated_at": "2024-03-05 14:40:07",
				"id": 250,
				"title": "遵循Promises/A+规范实现自定义Promise(期约)",
				"description": "遵循[Promises/A+](https://promisesaplus.com/)规范，实现 `then`、`catch`、`finally`的链式调用以及 `all`、`allSettled`、`race`、`any` 静态方法。",
				"img_cover": "https://docsapi.hgyn23.cn/ä¸è½½ (1).png",
				"seo_keyword": "keyword",
				"is_top": 0,
				"status": 1,
				"sort": 1,
				"ai_summary": "PromisePolyfill类是一个实现了Promises/A+规范的Promise类，它可以实现then和catch的链式调用。该类有一个构造函数，接受一个executor函数作为参数，并实现了resolve和reject方法来改变Promise的状态。then方法用于添加回调函数到Promise的回调函数数组中，并返回一个新的Promise对象。catch方法用于捕获最后一个reject，并返回一个新的Promise对象。finally方法用于在Promise链的最后执行一个函数。测试代码展示了PromisePolyfill类的使用。",
				"browse": 56,
				"like_count": 0,
				"uid": 1,
				"category_id": 1,
				"reading_time": 565200
			},
			{
				"created_at": "2022-08-12 10:01:56",
				"updated_at": "2024-02-16 08:28:02",
				"id": 236,
				"title": "Vue2.6.10源码调试方法",
				"description": "> 源码调试方法",
				"img_cover": null,
				"seo_keyword": "keyword",
				"is_top": 0,
				"status": 1,
				"sort": 1,
				"ai_summary": "这篇文章介绍了如何克隆Vue.js仓库并进行一些修改和调试的步骤。具体包括修改package.json文件、安装依赖、追加一行代码、启动服务、修改引用文件、打开调试工具等。",
				"browse": 26,
				"like_count": 0,
				"uid": 1,
				"category_id": 1,
				"reading_time": 54600
			},
			{
				"created_at": "2022-08-10 11:41:03",
				"updated_at": "2024-02-16 08:08:56",
				"id": 235,
				"title": "Vue2.x双向绑定模型实现",
				"description": "> Vue 是利用的 Object.defineProperty()方法进行的数据劫持，利用 set、get 来检测数据的读写。MVVM 框架主要包含两个方面，数据变化更新视图，视图变化更新数据。",
				"img_cover": null,
				"seo_keyword": "keyword",
				"is_top": 0,
				"status": 1,
				"sort": 1,
				"ai_summary": "Vue使用Object.defineProperty()方法进行数据劫持，利用set和get来检测数据的读写。MVVM框架主要包含数据变化更新视图和视图变化更新数据两个方面。每个组件实例都对应一个watcher实例，它会在组件渲染过程中将接触过的数据property记录为依赖。当依赖项的setter触发时，会通知watcher，从而使其关联的组件重新渲染。\n\n代码实现部分包括HTML和JS两部分。HTML部分包括一个按钮和一个文本框，通过点击按钮来改变文本框中的内容。JS部分包括一个依赖收集器Dep、一个监听器Observer、一个订阅器Watcher和一个Vue类。Dep用于收集依赖并通知更新，Observer用于递归添加响应性，Watcher用于监听数据变化并执行回调函数，Vue类用于创建Vue实例并实现数据代理和模拟patch。\n\n总结：Vue利用数据劫持和依赖收集的原理实现了数据的双向绑定，通过监听数据的变化来更新视图，同时也可以通过操作视图来更新数据。",
				"browse": 28,
				"like_count": 0,
				"uid": 1,
				"category_id": 1,
				"reading_time": 144900
			},
			{
				"created_at": "2022-08-09 10:09:10",
				"updated_at": "2024-02-17 15:26:34",
				"id": 234,
				"title": "JavaScript中new的实现",
				"description": "1. 首先创建了一个新的空对象\n2. 设置原型，将对象的原型设置为函数的 prototype 对象。\n3. 让函数的 this 指向这个对象，执行构造函数的代码（为这个新对象添加属性）\n4. 判断函数的返回值类型，如果是值类型，返回创建的对象。如果是引用类型，就返回这个引用类型的对象。",
				"img_cover": null,
				"seo_keyword": "keyword",
				"is_top": 0,
				"status": 1,
				"sort": 1,
				"ai_summary": "这段代码是一个实现了new操作符的polyfill函数。它的作用是创建一个新对象，并将这个新对象的原型设置为构造函数的prototype对象。然后，将构造函数的this指向这个新对象，并执行构造函数的代码，为新对象添加属性。最后，判断构造函数的返回值类型，如果是值类型，则返回创建的新对象；如果是引用类型，则返回这个引用类型的对象。在代码实现中，通过调用newPolyfill函数，传入构造函数Foo和参数'小明'，创建了一个名为obj的对象，并调用了obj的play方法。",
				"browse": 36,
				"like_count": 0,
				"uid": 1,
				"category_id": 1,
				"reading_time": 80100
			},
			{
				"created_at": "2022-07-21 16:46:50",
				"updated_at": "2024-02-14 02:05:58",
				"id": 232,
				"title": "JavaScript面向对象之组合-寄生式继承实现",
				"description": ">组合-寄生式继承是javascript对象继承中比较好的方案，它是在一系列继承方案改进的结果",
				"img_cover": null,
				"seo_keyword": "keyword",
				"is_top": 0,
				"status": 1,
				"sort": 1,
				"ai_summary": "这篇文章介绍了JavaScript中的对象继承方案，包括原型链继承、借用构造函数继承和寄生式继承。原型链继承可以实现继承，但存在无法遍历属性和属性共享的问题。借用构造函数继承解决了这些问题，但需要调用父类多次。寄生式继承通过创建一个新对象并将父类属性赋值给它的原型来实现继承。最后介绍了组合-寄生式继承，使用Object.create()方法创建子类的原型，并通过调用父类构造函数来传递属性。",
				"browse": 21,
				"like_count": 0,
				"uid": 1,
				"category_id": 1,
				"reading_time": 237900
			},
			{
				"created_at": "2022-07-11 18:00:31",
				"updated_at": "2024-02-15 12:21:44",
				"id": 231,
				"title": "v-if&&v-show原理解析以及最小模型实现",
				"description": "talk is cheap\nshow me the code",
				"img_cover": null,
				"seo_keyword": "keyword",
				"is_top": 0,
				"status": 1,
				"sort": 1,
				"ai_summary": "这段代码是一个简单的前端实现，通过使用HyVue类来创建视图和数据的关联。在初始化过程中，通过使用Map来将数据和对应的DOM元素进行关联，并将其添加到视图池和事件池中。然后通过使用defineProperty将数据代理到实例的this中，使得在绑定的方法中可以直接访问到数据。接下来，通过遍历DOM元素，找到具有特定属性的元素，并将其与相应的数据或方法进行关联。最后，通过初始化视图和方法，实现视图的渲染和事件的绑定。",
				"browse": 23,
				"like_count": 0,
				"uid": 1,
				"category_id": 1,
				"reading_time": 736200
			},
			{
				"created_at": "2022-05-10 14:27:41",
				"updated_at": "2024-02-16 21:17:24",
				"id": 230,
				"title": "实现盒子居中的若干方法（持续补充）",
				"description": "> 介绍以下几种盒子居中方法，在已知或者未知盒子宽高时可选用不同方法",
				"img_cover": null,
				"seo_keyword": "keyword",
				"is_top": 0,
				"status": 1,
				"sort": 1,
				"ai_summary": "这段代码展示了不同的方法来使一个盒子在页面中居中显示。其中包括使用绝对定位和margin来实现居中，使用flex布局来实现居中，以及使用display:table-cell来实现居中。这些方法可以根据具体需求选择使用。",
				"browse": 19,
				"like_count": 0,
				"uid": 1,
				"category_id": 1,
				"reading_time": 173700
			},
			{
				"created_at": "2022-04-23 21:04:48",
				"updated_at": "2024-02-18 12:23:03",
				"id": 229,
				"title": "块级格式上下文（BFC）定义及应用场景",
				"description": "W3C对BFC的定义如下：\n>浮动元素和绝对定位元素，非块级盒子的块级容器（例如 inline-blocks, table-cells, 和 table-captions），以及overflow值不为\"visiable\"的块级盒子，都会为他们的内容创建新的BFC（Block Fromatting Context， 即块级格式上下文）。",
				"img_cover": null,
				"seo_keyword": "keyword",
				"is_top": 0,
				"status": 1,
				"sort": 1,
				"ai_summary": "BFC是一种页面渲染区域，具有一套渲染规则，决定子元素的定位和与其他元素的关系。创建BFC的条件包括根元素、浮动元素、绝对定位元素、行内块元素等。BFC有一些渲染规则，如垂直方向边距不会重叠，不会与浮动元素重叠等。BFC的应用场景包括清除浮动、避免外边距折叠和阻止元素被浮动元素覆盖。",
				"browse": 26,
				"like_count": 0,
				"uid": 1,
				"category_id": 1,
				"reading_time": 137700
			},
			{
				"created_at": "2022-04-22 16:09:48",
				"updated_at": "2024-01-25 19:08:17",
				"id": 228,
				"title": "Vuejs中 watch computed属性与生命周期之间的关系与执行顺序（详细）",
				"description": "> 在工作中频繁遇到Vue的生命周期与`watch`、`computed`之间联系紧密的逻辑，所以特地起了一个项目专门研究他们之间的关系和执行顺序。",
				"img_cover": null,
				"seo_keyword": "keyword",
				"is_top": 0,
				"status": 1,
				"sort": 1,
				"ai_summary": "这篇文章主要讨论了Vue的生命周期、watch和computed之间的关系和执行顺序。文章通过一个项目来验证不同情况下的执行顺序，并总结了一些结论。其中包括在初始化时，computed计算属性在beforeMount和mounted之间会执行一次；在组件中，当data或props的值改变时，先执行关联的watch回调，然后执行关联的computed回调，如果有watch和computed有关联，watch会再次执行。",
				"browse": 27,
				"like_count": 0,
				"uid": 1,
				"category_id": 1,
				"reading_time": 268200
			},
			{
				"created_at": "2022-04-17 21:47:08",
				"updated_at": "2024-01-22 07:38:43",
				"id": 226,
				"title": "节流函数的实现",
				"description": "> 为了限制函数一段时间内只能执行一次。 通过使用定时任务，延时方法执行。 在延时的时间内，方法若被触发，则直接退出方法。 从而实现一段时间内只执行一次。",
				"img_cover": null,
				"seo_keyword": "keyword",
				"is_top": 0,
				"status": 1,
				"sort": 1,
				"ai_summary": null,
				"browse": 14,
				"like_count": 0,
				"uid": 1,
				"category_id": 1,
				"reading_time": 308700
			},
			{
				"created_at": "2022-04-13 10:55:45",
				"updated_at": "2024-01-20 20:47:30",
				"id": 224,
				"title": "Node 事件循环&事件队列模型",
				"description": "> Node 中的EventLoop是由**libuv**实现的，其主要维护了一个**EventLoop**和**worker threads（线程池）**\nEventLoop负责调用系统的一些其他操作，如**文件的IO**、**NetWork**、**child-process**等",
				"img_cover": null,
				"seo_keyword": "keyword",
				"is_top": 0,
				"status": 1,
				"sort": 1,
				"ai_summary": null,
				"browse": 25,
				"like_count": 0,
				"uid": 1,
				"category_id": 1,
				"reading_time": 28200
			},
			{
				"created_at": "2022-04-13 09:38:55",
				"updated_at": "2024-01-20 08:38:58",
				"id": 223,
				"title": "浏览器 事件循环(EventLoop)&事件队列模型",
				"description": ">事件循环就像是一个**桥梁**，连接着应用程序的Javascript和系统调用之间的通道\n事件循环会**不断**的从**任务队列**中取出对应的事件（回调函数）进行执行",
				"img_cover": null,
				"seo_keyword": "keyword",
				"is_top": 0,
				"status": 1,
				"sort": 1,
				"ai_summary": null,
				"browse": 22,
				"like_count": 0,
				"uid": 1,
				"category_id": 1,
				"reading_time": 52800
			},
			{
				"created_at": "2022-04-10 01:15:58",
				"updated_at": "2024-01-20 20:02:30",
				"id": 220,
				"title": "ES6 class语法的pollyfill源码解析",
				"description": "> ES6的类继承其实是寄生-组合式继承的语法糖，本质上还是对原型的继承。",
				"img_cover": null,
				"seo_keyword": "keyword",
				"is_top": 0,
				"status": 1,
				"sort": 1,
				"ai_summary": null,
				"browse": 17,
				"like_count": 0,
				"uid": 1,
				"category_id": 1,
				"reading_time": 279300
			},
			{
				"created_at": "2022-04-08 11:33:31",
				"updated_at": "2024-01-20 18:32:30",
				"id": 219,
				"title": "闭包内存模型解析",
				"description": "> 闭包是指有权访问另一个函数作用域中变量的函数",
				"img_cover": null,
				"seo_keyword": "keyword",
				"is_top": 0,
				"status": 1,
				"sort": 1,
				"ai_summary": null,
				"browse": 15,
				"like_count": 0,
				"uid": 1,
				"category_id": 1,
				"reading_time": 135300
			},
			{
				"created_at": "2022-04-08 09:08:00",
				"updated_at": "2024-02-05 17:18:31",
				"id": 218,
				"title": "如何将函数\"柯里化\"？",
				"description": "> 柯里化，把接收多个参数的函数，变成接受一个单一参数的函数，并且返回接收余下参数的函数，而且返回结果的新函数的技术\n柯里化声称 如果你固定**某些参数**，你将得到接收**余下参数**的一个函数。\n其符合设计模式 **单一职责原则**，可对函数某个阶段进行定制化开发",
				"img_cover": null,
				"seo_keyword": "keyword",
				"is_top": 0,
				"status": 1,
				"sort": 1,
				"ai_summary": "这段代码实现了一个函数柯里化的功能。柯里化是指将一个多参数的函数转化为一系列单参数函数的过程。通过传入一个函数，currying函数会返回一个柯里化后的函数。这个柯里化后的函数可以接受部分参数，并在参数达到目标长度时调用原始函数。最后通过调用curryAdd函数并传入不同的参数，可以得到相应的输出结果。",
				"browse": 18,
				"like_count": 0,
				"uid": 1,
				"category_id": 1,
				"reading_time": 53400
			},
			{
				"created_at": "2022-04-05 22:08:50",
				"updated_at": "2024-01-22 20:11:37",
				"id": 216,
				"title": "防抖函数的实现",
				"description": "> 防抖: 只有当输入完成后才会触发函数，防止在不停输入时调用函数，减少资源的浪费。",
				"img_cover": null,
				"seo_keyword": "keyword",
				"is_top": 0,
				"status": 1,
				"sort": 1,
				"ai_summary": "防抖是一种在事件触发后延迟执行回调函数的技术。在一定的时间内，如果事件再次触发，则重新计时，只有在延迟时间内没有任何事件触发时，才会执行真正的响应函数。防抖的应用场景包括频繁输入内容、频繁点击按钮、浏览器监听滚动事件和用户缩放浏览器的resize事件等。防抖函数的实现可以通过简易实现、新增立即执行功能、封装取消功能和获取函数返回值等方式来实现。",
				"browse": 17,
				"like_count": 0,
				"uid": 1,
				"category_id": 1,
				"reading_time": 265500
			},
			{
				"created_at": "2022-04-05 22:05:18",
				"updated_at": "2024-01-13 18:49:20",
				"id": 215,
				"title": "call\\apply\\bind实现原理解析",
				"description": "> call和apply：改变了函数的this上下文后执行该函数\nbind:返回改变了上下文后的一个函数。\ncall、bind和apply的第一个参数都是要改变上下文的对象，而call、bind从第二个参数开始以参数列表的形式展现. apply则是把除了改变上下文对象的参数放在一个数组里面作为它的第二个参数。",
				"img_cover": null,
				"seo_keyword": "keyword",
				"is_top": 0,
				"status": 1,
				"sort": 1,
				"ai_summary": null,
				"browse": 12,
				"like_count": 0,
				"uid": 1,
				"category_id": 1,
				"reading_time": 256200
			},
			{
				"created_at": "2022-04-04 18:11:00",
				"updated_at": "2024-01-22 20:07:55",
				"id": 214,
				"title": "v8执行过程详解",
				"description": ">v8引擎执行过程",
				"img_cover": null,
				"seo_keyword": "keyword",
				"is_top": 0,
				"status": 1,
				"sort": 1,
				"ai_summary": null,
				"browse": 12,
				"like_count": 0,
				"uid": 1,
				"category_id": 1,
				"reading_time": 3300
			},
			{
				"created_at": "2022-03-02 12:39:46",
				"updated_at": "2024-01-28 02:25:48",
				"id": 213,
				"title": "JavaScript 设计模式核心原理与应用实践",
				"description": ">能够决定一个前端工程师的本质的，不是那些瞬息万变的技术点，而是那些不变的东西\n所谓“不变的东西”，说的就是这种驾驭技术的能力。\n\n具体来说，它分为以下三个层次：\n\n- 能用健壮的代码去解决具体的问题；\n- 能用抽象的思维去应对复杂的系统；\n- 能用工程化的思想去规划更大规模的业务。",
				"img_cover": null,
				"seo_keyword": "keyword",
				"is_top": 0,
				"status": 1,
				"sort": 1,
				"ai_summary": "SOLID设计原则是面向对象编程和设计的五个基本原则，包括单一功能原则、开放封闭原则、里式替换原则、接口隔离原则和依赖反转原则。这些原则的目的是帮助规避不良的软件设计，确保软件的灵活性和稳定性。文章还介绍了工厂模式、抽象工厂模式、单例模式、原型模式和原型编程范式在JavaScript中的应用。此外，还讨论了结构型模式和行为型模式的概念和重要性，以及策略模式和状态模式的定义和应用。",
				"browse": 16,
				"like_count": 0,
				"uid": 1,
				"category_id": 1,
				"reading_time": 1026600
			},
			{
				"created_at": "2022-03-01 18:55:25",
				"updated_at": "2024-01-24 01:25:29",
				"id": 212,
				"title": "nginx配置问题集合",
				"description": "> 总结遇到的问题 和 解决方法",
				"img_cover": null,
				"seo_keyword": "keyword",
				"is_top": 0,
				"status": 1,
				"sort": 1,
				"ai_summary": "当在nginx中配置proxy_pass反向代理时，如果在后面的url加上了/，则nginx不会将location中匹配的路径部分代理走；如果没有/，则会将匹配的路径部分一起代理走。",
				"browse": 13,
				"like_count": 0,
				"uid": 1,
				"category_id": 1,
				"reading_time": 51900
			},
			{
				"created_at": "2021-12-27 18:05:24",
				"updated_at": "2024-01-23 00:18:25",
				"id": 210,
				"title": "文章图片预览功能的实现",
				"description": "> 前对博客项目的文章页进行优化，想给页面新增一个图片预览的功能，我首先想到的办法是通过接口获取HTML字符，在解析成html时添加事件监听来实现。",
				"img_cover": null,
				"seo_keyword": "keyword",
				"is_top": 0,
				"status": 1,
				"sort": 1,
				"ai_summary": "在博客项目的文章页进行优化时，想给页面新增一个图片预览的功能。首先尝试通过接口获取HTML字符并解析成HTML来实现，但由于Vue不支持字符串模板编译，无法渲染组件和解析Vue语法。后来发现在父级元素中监听内部的点击事件，通过事件冒泡机制获取点击的元素，判断元素类型并获取对应的图片链接，实现了建议的预览功能。同时，为了阻止页面滚动，需要设置body的overflow属性为hidden。",
				"browse": 11,
				"like_count": 0,
				"uid": 1,
				"category_id": 1,
				"reading_time": 86400
			},
			{
				"created_at": "2021-12-24 17:48:49",
				"updated_at": "2024-01-21 04:10:52",
				"id": 207,
				"title": "Vuejs使用watch侦听器侦听数据时遇到的一系列问题",
				"description": "> 在data中初始化一个变量，并在watch中侦听，在methods中发起异步请求前将数据赋值给这个变量时，watch中触发的回调函数和methods中等待异步执行完毕前还未执行的代码谁会先执行？",
				"img_cover": null,
				"seo_keyword": "keyword",
				"is_top": 0,
				"status": 1,
				"sort": 1,
				"ai_summary": null,
				"browse": 8,
				"like_count": 0,
				"uid": 1,
				"category_id": 1,
				"reading_time": 176100
			},
			{
				"created_at": "2021-12-24 11:43:59",
				"updated_at": "2024-01-22 04:03:30",
				"id": 206,
				"title": "JS垃圾回收标记清除技术",
				"description": "js是具有垃圾回收机制的一门语言，下面介绍js的标记清除法\n\n**核心思想：给当前不使用的值加上标记，然后再回收其内存。**",
				"img_cover": null,
				"seo_keyword": "keyword",
				"is_top": 0,
				"status": 1,
				"sort": 1,
				"ai_summary": null,
				"browse": 12,
				"like_count": 0,
				"uid": 1,
				"category_id": 1,
				"reading_time": 363900
			},
			{
				"created_at": "2021-12-18 11:41:21",
				"updated_at": "2024-03-04 14:42:10",
				"id": 205,
				"title": "键入网址再按下回车，背后的技术步骤？",
				"description": "> 一道经典的面试题，涵盖的知识点非常多，这里探寻下该问题，以对自己的知识体系进行梳理。",
				"img_cover": "",
				"seo_keyword": "面试",
				"is_top": 0,
				"status": 1,
				"sort": 1,
				"ai_summary": null,
				"browse": 13,
				"like_count": 0,
				"uid": 1,
				"category_id": 1,
				"reading_time": 549600
			},
			{
				"created_at": "2021-12-13 11:00:39",
				"updated_at": "2024-01-16 11:48:17",
				"id": 204,
				"title": "通过向日葵远程更新服务器文件的相关操作",
				"description": ">通过向日葵远程更新服务器文件的相关操作",
				"img_cover": null,
				"seo_keyword": "keyword",
				"is_top": 0,
				"status": 1,
				"sort": 1,
				"ai_summary": null,
				"browse": 6,
				"like_count": 0,
				"uid": 1,
				"category_id": 1,
				"reading_time": 23400
			},
			{
				"created_at": "2021-12-03 16:14:35",
				"updated_at": "2024-02-18 21:15:08",
				"id": 202,
				"title": "服务器部署站点时的简要配置",
				"description": "> 服务器：配置部署站点所需环境完整流程",
				"img_cover": null,
				"seo_keyword": "keyword",
				"is_top": 0,
				"status": 1,
				"sort": 1,
				"ai_summary": null,
				"browse": 13,
				"like_count": 0,
				"uid": 1,
				"category_id": 1,
				"reading_time": 452700
			},
			{
				"created_at": "2021-11-16 18:00:37",
				"updated_at": "2024-01-23 08:36:20",
				"id": 200,
				"title": "Vuejs搭建Server-render项目简要流程",
				"description": ">服务端渲染（Server-Side Rendering），是指由服务侧完成页面的 HTML 结构拼接的页面处理技术，发送到浏览器，然后为其绑定状态与事件，成为完全可交互页面的过程。",
				"img_cover": null,
				"seo_keyword": "keyword",
				"is_top": 0,
				"status": 1,
				"sort": 1,
				"ai_summary": "使用vue-ssr构建服务端渲染流程是指通过Vue.js框架和服务端渲染技术来构建具有更好SEO和更快内容到达时间的应用程序。服务端构建流程包括目录结构、构建流程（客户端）、main.js、entry-client.js、entry-server.js、使用vue-router的路由和使用vuex的状态管理。",
				"browse": 10,
				"like_count": 0,
				"uid": 1,
				"category_id": 1,
				"reading_time": 873000
			},
			{
				"created_at": "2021-11-11 16:41:03",
				"updated_at": "2024-01-05 11:35:10",
				"id": 199,
				"title": "虚拟dom和diff算法实现原理（snabbdom）",
				"description": ">简要介绍并实现snabbdom",
				"img_cover": null,
				"seo_keyword": "keyword",
				"is_top": 0,
				"status": 1,
				"sort": 1,
				"ai_summary": null,
				"browse": 8,
				"like_count": 0,
				"uid": 1,
				"category_id": 1,
				"reading_time": 1500
			},
			{
				"created_at": "2021-11-11 16:18:30",
				"updated_at": "2024-01-05 11:35:12",
				"id": 198,
				"title": "vue的双向绑定原理及实现(待完善)",
				"description": ">简要介绍及实现vue的双向绑定",
				"img_cover": null,
				"seo_keyword": "keyword",
				"is_top": 0,
				"status": 1,
				"sort": 1,
				"ai_summary": null,
				"browse": 6,
				"like_count": 0,
				"uid": 1,
				"category_id": 1,
				"reading_time": 6900
			},
			{
				"created_at": "2021-11-05 16:21:32",
				"updated_at": "2024-01-05 11:35:13",
				"id": 197,
				"title": "vue-element-admin 学习记录",
				"description": ">vue-element-admin 是一个**后台前端解决方案**，它基于 **vue** 和 **element-ui**实现。",
				"img_cover": null,
				"seo_keyword": "keyword",
				"is_top": 0,
				"status": 1,
				"sort": 1,
				"ai_summary": null,
				"browse": 2,
				"like_count": 0,
				"uid": 1,
				"category_id": 1,
				"reading_time": 1056600
			},
			{
				"created_at": "2021-11-05 16:19:54",
				"updated_at": "2023-10-25 21:54:00",
				"id": 196,
				"title": "理解代理",
				"description": ">正向代理的代理服务器是部署在客户端，而对服务端来说，它以为对它发起请求的是代理服务器，而真正请求的客户端对服务端来说是不可见的。    反向代理的代理服务器是部署在服务端，而对客户端来说，它以为对它做出响应的是代理服务器，而真正响应的服务端对客户端来说是不可见的。",
				"img_cover": null,
				"seo_keyword": "keyword",
				"is_top": 0,
				"status": 1,
				"sort": 1,
				"ai_summary": null,
				"browse": 1,
				"like_count": 0,
				"uid": 1,
				"category_id": 1,
				"reading_time": 88200
			},
			{
				"created_at": "2021-11-05 16:15:28",
				"updated_at": "2023-10-25 21:52:02",
				"id": 194,
				"title": "router.addroutes()添加动态路由表实现侧边栏有效更新",
				"description": ">监听子组件中获取的数据 在data中初始化一个变量，并在watch中监听，在methods中发起网络请求并将数据赋值给这个变量时，watch中出发的回调函数和methods中还未执行的代码谁先执行？",
				"img_cover": null,
				"seo_keyword": "keyword",
				"is_top": 0,
				"status": 1,
				"sort": 1,
				"ai_summary": null,
				"browse": 2,
				"like_count": 0,
				"uid": 1,
				"category_id": 1,
				"reading_time": 210600
			},
			{
				"created_at": "2021-11-05 16:12:53",
				"updated_at": "2023-12-01 14:49:11",
				"id": 193,
				"title": "node.js实现爬取王者农药官网皮肤（高清无码大图）",
				"description": "```javascript const crawlPictures = require(\"./crawlPictures\") crawlPictures(\"./img\") ``` `node ./index.js`  执行",
				"img_cover": null,
				"seo_keyword": "keyword",
				"is_top": 0,
				"status": 1,
				"sort": 1,
				"ai_summary": null,
				"browse": 1,
				"like_count": 0,
				"uid": 1,
				"category_id": 1,
				"reading_time": 198000
			},
			{
				"created_at": "2021-11-05 16:08:05",
				"updated_at": "2024-01-24 22:18:00",
				"id": 192,
				"title": "早期模板渲染方式和mustache模板引擎的简单实现",
				"description": ">模板引擎的基本机理就是替换（转换），将指定的标签转换为需要的业务数据；将指定的伪语句按照某种流程来变换输出",
				"img_cover": null,
				"seo_keyword": "keyword",
				"is_top": 0,
				"status": 1,
				"sort": 1,
				"ai_summary": "这篇文章介绍了早期模板渲染的几种方式，包括手动创建节点、使用innerHTML、将字符串转换为数组结构等方法。然后介绍了Mustache模板引擎的基本机理和语法，包括双花括号标识符、枚举和区块等。接着讲解了Mustache模板引擎的实现原理，包括渲染函数和扫描器，以及如何使用扫描器获取Tokens。最后提到了Mustache模板引擎的局限性和ES6模板字符串的出现。",
				"browse": 6,
				"like_count": 0,
				"uid": 1,
				"category_id": 1,
				"reading_time": 694800
			}
		]
	}
}