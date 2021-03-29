import { parse } from '@vue/compiler-sfc'
import generate from './generate'
import translate from './translate'

function vueTemplateToTenon(template: string) {
  // 1. 编译ast
  let ast = parse(template).descriptor.template?.ast
  // 2. ast处理
  ast = translate(ast)
  // 3. 生成文件处理
  const tenonTemplateString = generate(ast)

  return tenonTemplateString
}

export default vueTemplateToTenon
