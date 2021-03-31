# Tenon Tool For Vue

Tenon 转换工具——将 Vue 文件转换为 Tenon 标准文件

## 描述

支持将标准的 `Vue` 文件转换为符合 Tenon 标准的特有的 `Vue`文件

整体支持三个模块

- template 转换
- style 转换
- script 转换

### template 转换

进行标签的转换,具体配置可查看 `/template/dslConfig.js`

1. 对于标签进行转换，例如 div 转化为 view，span 转化为 text
2. 对于事件进行转换，例如 click 事件转化为 tap 事件

### style 转换

可以暂不做处理，预留对应的模块

### script 转换

可以暂不做处理，预留对应的模块

## API

### `transformVueToTenon(vue:string):string`

```javascript
// 获取tenon字符串模版
let { transformVueToTenon } = require('@hummer/tenon-tool-vue')
let tenonString = transformVueToTenon(
  '<template><div></div></template><style></style><script></script>'
)
```

### `parseVueToTenon(vue:string):{template:string, script:string, styles:string}`

```js
let { parseVueToTenon } = require('@hummer/tenon-tool-vue')
// 获取tenon: template script styles,参数vue字符串模版
let tenonObj = parseVueToTenon(
  '<template><div></div></template><style></style><script></script>'
)
```

## TODO

- [ ] sourcemap 生成
