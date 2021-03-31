export type tagConfig =
  | 'div'
  | 'span'
  | 'img'
  | 'main'
  | 'section'
  | 'ul'
  | 'li'
  | 'ol'
export type attrConfig = 'on'
export type attrOnConfig = 'click'
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
    ol: 'view',
  },
  attrConverterConfig: {
    on: {
      click: 'tap',
    },
  },
}

export default vueConvertTeon
