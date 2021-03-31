# Tenon Tool For Vue
Tenon 转换工具——将 Vue 文件转换为 Tenon 标准文件
## 描述
支持将标准的 `Vue` 文件转换为符合 Tenon 标准的特有的 `Vue`文件

整体要支持三个模块
- template 转换
- style 转换
- script 转换
### template 转换
进行标签的转换
1. 目前不支持hummer直接嵌套文字，需要使用span嵌套
### style 转换
可以暂不做处理，预留对应的模块
### script 转换
可以暂不做处理，预留对应的模块

## API
### `tenonProgram(vue:string):string`

```js
// 获取tenon字符串模版
let {tenonProgram} = require("@hummer/tenon-tool-vue")
let tenonString = tenonProgram(''); 
```
### vueToTenon(vue:string):Obj
```js
let {vueToTenon} = require("@hummer/tenon-tool-vue")
// 获取tenon: template script styles,参数vue字符串模版
let tenonObj  = vueToTenon()
```

## TODO
- [ ] sourcemap 生成