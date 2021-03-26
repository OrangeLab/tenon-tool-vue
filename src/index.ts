import vueTemplateToTenon from './template'

// 获取 template script style
export function getSource(vueString: string, type: string) {
  let reg: RegExp = new RegExp(`<${type}[^>]*>`) // 匹配数据type
  let matches = vueString.match(reg)
  if (matches) {
    let start = vueString.indexOf(matches[0]) + matches[0].length
    let end = vueString.lastIndexOf(`</${type}>`)
    return vueString.slice(start, end)
  }
  return ""
}


/**
 *template 模板编译器
 *
 * @export
 * @param {string} vueString
 * @return {*}  {string}
 */
export default function tenonTemplate(vueString: string): string{
  let template = getSource(vueString, 'template');
  // if (template) {
    vueTemplateToTenon(template);
    // return tenonTemplate
  // }
  return ""
}
tenonTemplate("ddd")
