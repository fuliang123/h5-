var htmlWebpackPlugin = require("html-webpack-plugin");
var extractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
	plugins : [
		new htmlWebpackPlugin({
			template : "./index.html"
		}),//此处少逗号
		new extractTextPlugin("[hash]-bundle.css")
	],
	entry : {
		main : "./main.js"
	},
	output : {
		path : "./build/",
		filename : "[hash]-bundle.js"
	},
	module : {
		loaders : [
           {
           	//要加载哪些扩展文件
           	  test : /.css$/,
           	  //指定具体的加载器
           	  loader : extractTextPlugin.extract("css")//参数是具体的加载器名称
           },
           {
           	  test : /.html/,
           	  loader : "html"
           },
           {
           	//匹配图片
           	  test : /.(png|gif|jpg)/,
           	  //最终图片会被打包到images目录下
           	  //name=images/[name].[ext]"
           	  loader : "file-loader?name=images/[name].[ext]"
           }
		]
	}
	
	
}
