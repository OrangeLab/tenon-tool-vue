import { ElementNode } from '@vue/compiler-core';

type tagConfig = 'div' | 'span' | 'img' | 'main'
type attrConfig = 'on'
type attrOnConfig = 'click'
// 转换规则
let vueConvertTeon = {
  tagConverterConfig: {
    div: 'view',
    span: 'text',
    img: 'image',
    main: 'view',
    section: 'view',
  },
  attrConverterConfig: {
    on: {
      click: 'tap',
    },
  },
}

function translate(ast: ElementNode) {
  let { tagConverterConfig, attrConverterConfig } = vueConvertTeon
  if (ast.type == 1) {
    //进行标签替换
    if (tagConverterConfig[ast.tag as tagConfig]) {
      ast.tag = tagConverterConfig[ast.tag as tagConfig]
    }

    for (let k in ast.props) {
      let prop = ast.props[k]
      let target = attrConverterConfig[prop.name as attrConfig]

      if (target && target[(prop as any).arg?.content as attrOnConfig]) {
        (prop as any).arg.content =
          target[(prop as any).arg?.content as attrOnConfig]
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
