/**
 * Created by lyy on 2017/7/25.
 */
var html = ejs.render('<%=123%>', "");
document.getElementById('p1').innerHTML = html;

/**
 * ejs.compile(str,[option])
 * str:需要解析的字符串模板
 * option：配置选项
 */

//编译字符串得到模板函数
var template = ejs.compile('<%=123%>');
var result = template();
console.log(result);    //123

/**
 * ejs.compile(str,data,[option])
 * str:需要解析的字符串模板
 * data：数据
 * option：配置选项
 */
//直接渲染字符串并生成html
var result = ejs.render("<%=123%>");
console.log(result);    //123

//常用标签
//js
//所有使用<% %>括起来的内容都会被编译成javascript，可以在模版文件中像写js一样coding
var ejs = require('ejs');
var result = ejs.render('<% var a = 123 %><%console.log(a); %>');
console.log(result);//123


//变量
/**
 * 用<%=...%>输出变量，变量若包含'<' '>' '&'等字符会被转义
 */
var ejs = require('ejs');
var result = ejs.render('<%=a%>', {a: '<p>123</p>'});
console.log(result);
/**
 * 如果不希望变量值的内容被转义，那就这么用<%-... %>输出变量
 */
var ejs = require('ejs');
var result = ejs.render('<%-a%>', {a: '<p>123</p>'});
console.log(result);

//注释
/**
 * 用<%# some comments%>来注释，不执行不输出
 */

//include
//include可以引用绝对路径或者相对路径的模版文件
var ejs = require('ejs');
var result = ejs.render('<% include test.ejs %>');
throw new Error('`include` use relative path requires the \'filename\' option.');
console.log(result);
//由上面的提示可知，使用相对路径时，必须设置'filename'选项
var ejs = require('ejs');
var result = ejs.render('<% include test.ejs %>', {filename: 'test.ejs'});
console.log(result);//123