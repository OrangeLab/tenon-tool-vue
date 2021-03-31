# Tenon Tool For Vue
Tenon 转换工具——将 Vue 文件转换为 Tenon 标准文件
## 描述
支持将标准的 `Vue` 文件转换为符合 Tenon 标准的特有的 `Vue`文件

整体要支持三个模块
- template 转换
- style 转换
- script 转换
### template 转换
> 进行标签的转换,具体配置可查看 /template/dslConfig.js 

1. 对于标签进行转换，例如div转化为view，span转化为text
2. 对于事件进行转换，例如click事件转化为tap事件
### style 转换
可以暂不做处理，预留对应的模块
### script 转换
可以暂不做处理，预留对应的模块

## API
### `transformVueToTenon(vue:string):string`

```js
// 获取tenon字符串模版
let {transformVueToTenon} = require("@hummer/tenon-tool-vue")
let tenonString = transformVueToTenon(''); 
```
###  `parseVueToTenon(vue:string): {template, script , styles}`
```js
let {parseVueToTenon} = require("@hummer/tenon-tool-vue")
// 获取tenon: template script styles,参数vue字符串模版
let tenonObj  = parseVueToTenon()
```

## TODO
- [ ] sourcemap 生成