import { parse } from '@vue/compiler-sfc'
import tenonScriptTransform from './script'
import tenonStylesTransform from './styles'
import tenonTemplateTransform from './template'

// parseVueToTenon 解析
export function parseVueToTenon(vueString: string) {
  // 1. 编译ast
  let descriptor = parse(vueString).descriptor
  // 2. script 处理
  let script = tenonScriptTransform(descriptor.script)
  // 3. style 处理
  let style = tenonStylesTransform(descriptor.styles)
  // 4. template 处理
  let template = tenonTemplateTransform(descriptor.template)
  return { template, script, style }
}

/**
 * 模板编译器
 *
 * @export
 * @param {string} vueString
 * @return {*}  {string}
 */
export function transformVueToTenon(vueString: string): string {
  let { template, script, style } = parseVueToTenon(vueString)
  return template + script + style
}
