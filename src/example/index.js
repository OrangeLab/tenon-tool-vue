let fs = require('fs');
let path = require('path')
var vueBeautify = require('vue-beautify');
let tenonProgram = require('../../dist/index.js').default;

let vuePath = path.resolve(__dirname,'a.vue');
let vueString = fs.readFileSync(vuePath,'utf-8');
let tenon = tenonProgram(vueString);
let format = vueBeautify(tenon, { "indent_scripts": "keep",indent_size:2 });
fs.writeFileSync(path.resolve(__dirname,'tenon.vue'),format)
