import {
  ElementNode,
  SimpleExpressionNode,
  DirectiveNode,
} from '@vue/compiler-core'

type tagConfig = 'div' | 'span' | 'img' | 'main'
type attrConfig = 'on'
type attrOnConfig = 'click'
// 转换规则
let vueConvertTeon = {
  tagConverterConfig: {
    div: 'view',
    p: 'view',
    span: 'text',
    img: 'image',
    main: 'view',
    section: 'view',
    ul: 'view',
    li: 'view',
    ol:'view'
  },
  attrConverterConfig: {
    on: {
      click: 'tap',
    },
  },
}

function translate(ast: ElementNode) {
  let { tagConverterConfig, attrConverterConfig } = vueConvertTeon
  // 元素节点处理
  if (ast.type == 1) {
    //进行标签替换
    if (tagConverterConfig[ast.tag as tagConfig]) {
      ast.tag = tagConverterConfig[ast.tag as tagConfig]
    }
    for (let k in ast.props) {
      let prop = ast.props[k] as DirectiveNode

      // SIMPLE_EXPRESSION
      if (prop.type == 7 && prop.exp && prop.exp.type == 4) {
        let target = attrConverterConfig[ast.props[k].name as attrConfig]
        if (target) {
          let arg = prop.arg as SimpleExpressionNode
          //  简单表达
          if (arg && arg.content) {
            arg.content =
              target[(prop as any).arg?.content as attrOnConfig] || arg.content
            prop.arg = arg
          }
        }
      }
    }
    // 递归解决children
    if (ast.children) {
      ast.children.forEach((node: any) => {
        translate(node)
      })
    }
  }
  return ast
}

export default translate
