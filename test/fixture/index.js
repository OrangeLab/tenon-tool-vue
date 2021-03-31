let fs = require('fs')
let path = require('path')
var vueBeautify = require('vue-beautify')
let {transformVueToTenon} = require('../../dist/index')

let vuePath = path.resolve(__dirname, 'a.vue')
let vueString = fs.readFileSync(vuePath, 'utf-8')
let tenon = transformVueToTenon(vueString)
// 格式化代码
let format = vueBeautify(tenon, { indent_scripts: 'keep', indent_size: 2 })
fs.writeFileSync(path.resolve(__dirname, 'tenon.vue'), format)
