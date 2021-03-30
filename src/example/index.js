let fs = require('fs');
let path = require('path')
let tenonProgram = require('../../dist/index.js').default;

let vuePath = path.resolve(__dirname,'a.vue');
let vueString = fs.readFileSync(vuePath,'utf-8');
let tenon = tenonProgram(vueString);

fs.writeFileSync(path.resolve(__dirname,'tenon.vue'),tenon)