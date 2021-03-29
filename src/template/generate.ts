import { ElementNode } from '@vue/compiler-core'

/**
 * props处理格式化
 *
 * @param {*} attrs
 * @return {*} string
 */
function genProps(props: any[]) {
  // 处理属性 拼接成属性的字符串
  let str = ''
  for (let i = 0; i < props.length; i++) {
    let attr = props[i]
    // 不同属性 6: class style 7： 事件
    if (attr.type === 6) {
      switch (attr.name) {
        case 'class':
          str += `${attr.name}="${attr.value?.content}" `
          break
        case 'style':
          str += `${attr.name}="${attr.value?.content}" `
          break
      }
    } else if (attr.type === 7) {
      switch (attr.name) {
        case 'on':
          let modifiersString = attr.modifiers.join('.')
          str += `v-on:${attr.arg?.content}${
            modifiersString ? `.${modifiersString}` : ''
          }="${attr.exp?.content}" `
          break
        case 'bind':
          str += `:${attr.arg?.content}="${attr.exp?.content}" `
          break
        default:
          str += `v-${attr.name}="${attr.exp?.content}" `
      }
    }
  }
  return str
}

/**
 * 节点生成，元素节点以及文本节点
 *
 * @param {*} node
 * @return {*}
 */
function gen(node: any) {
  if (node.type == 1) {
    // 元素标签
    return generate(node)
  } else {
    // 文本标签
    let text = node.content
    return text
  }
}

// genChildren 解析children
function genChildren(el: any) {
  let children = el.children
  if (children && children.length > 0) {
    let resu = `${children.map((c: ElementNode) => gen(c)).join('')}`
    return resu
  } else {
    return false
  }
}
// ast to string
function generate(el: any) {
  let children = genChildren(el)
  let code = ''
  code = `<${el.tag} ${el.props.length ? genProps(el.props) : ''}>${
    children ? `${children}` : ''
  }</${el.tag}>`
  return code
}

export default generate
