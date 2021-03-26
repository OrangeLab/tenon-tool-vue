// import compiler from 'vue-template-compiler'

// type tagConfig = 'div' | 'span' | 'img' | 'main'
// type attrConfig = '@click' | 'v-on:click'
// // 转换规则
// let vueConvertTeon = {
//   tagConverterConfig: {
//     div: 'view',
//     span: 'text',
//     img: 'image',
//     main: 'view',
//     section: 'view'
//   },
//   attrConverterConfig: {
//     '@click': '@tap',
//     'v-on:click': '@tap'
//   }
// }

// function translate(ast: compiler.ASTElement) {
//   let { tagConverterConfig, attrConverterConfig } = vueConvertTeon
//   if (ast.type == 1) {
//     //进行标签替换
//     if (tagConverterConfig[ast.tag as tagConfig]) {
//       ast.tag = tagConverterConfig[ast.tag as tagConfig]
//     }
//     let attrsList = []
//     for (let k in ast.attrsMap) {
//       let target = attrConverterConfig[k as attrConfig]
//       if (target) {
//         attrsList.push({
//           name: target,
//           value: ast.attrsMap[k]
//         })
//       } else {
//         attrsList.push({ name: k, value: ast.attrsMap[k] })
//       }
//     }
//     console.log(attrsList)
//     ast.attrsList = attrsList
//     // 递归解决children
//     if (ast.children) {
//       ast.children.forEach(node => {
//         translate(node as any)
//       })
//     }
//   }
//   return ast
// }

// export default translate
