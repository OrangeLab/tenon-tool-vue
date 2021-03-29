import { SFCTemplateBlock} from '@vue/compiler-sfc'
import generate from './generate'
import translate from './translate'

function tenonTemplateTransform(template: SFCTemplateBlock | null) {
  if (!template) {
    return ''
  }
  let ast = template?.ast
  ast = translate(ast)
  return generate(ast)
}

export default tenonTemplateTransform
