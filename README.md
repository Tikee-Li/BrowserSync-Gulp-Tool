# BrowserSync-Gulp-Tool
前端开发必备。保存文件，浏览器随即自动刷新页面。

## 使用环境
	node.js

安装依赖
```
$ npm install
```
启动
```
$ gulp
```
## 目录结构
	目录结构：

	ROOT/
		dist/
		src/
			assets/ (引入的包 css/ js/ img/ fonts/)
			static/ (自己写的文件)
			template/ (页面模板)
				layout/
				other/
				... 
				index.html (入口文件)
		gulpfile.js (具体实现，函数)
		package.json (配置依赖项)

## 说明
* `ROOT/` 你的项目目录就是根目录，文件名可自定义 
* 根目录下有 `dist/` 、 `src/` 、 `gulpfile.js` 、 `package.json`，此目录下安装依赖，出现项目依赖文件夹 `node_modules`；
	-  `dist/` ： 是 `src/` 源代码整合后的输出文件夹
	-  `src/` ：是存放源代码
	-  `gulpfile.js` ： 构建工具的源代码
	-  `package.json` ： 配置依赖项
* `src/` 目录
	-  `assets/` ： 引入的包 `css/`、`js/`、`img/`、`fonts/` 等
	-  `static/` ： 自己编写的 `css/`、`js/`、`img/`、`fonts/` 等源码
	-  `template/` ： 页面源码
* `template/` 目录【注意：该目录下的文件都是`.html`后缀】
	-  `layout/` ： 一般放页面的 `head.html`、`footer.html`、`nav.html`等。
	-  `other/` ： 其他功能页面。引入`footer.html`,在页面相应位置写入`@@include("../layout/footer.html")`。
	-  ... 
	-  `index.html` ： 入口文件,完整的页面。非默认页面不会显示，需手动在浏览器地址栏添加。如：localhost:4000后面加login.html

## 示例
* 注意相对路径的使用
* `dist/` 下的结构与 `src/` 下的目录不一致。index.html 文件可以直接在浏览器打开