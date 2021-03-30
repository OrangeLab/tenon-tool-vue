import { SFCStyleBlock } from '@vue/compiler-sfc'

function tenonStylesTransform(styles: SFCStyleBlock[]) {
  let styleFormat = ''
  let attrs = ''
  styles.forEach((item) => {
    styleFormat += item.content
    attrs = ''
    Object.keys(item.attrs).forEach((attr) => {
      console.log('======================================')
      console.log(attr)
      console.log('======================================')
      if (attr === 'scoped') {
        attrs += `${attr} `
      } else {
        attrs += `${attr}="${item.attrs[attr]}" `
      }
    })
  })
  attrs = attrs.trim()
  styleFormat = `\n<style ${attrs}>${styleFormat}\n</style>`
  return styleFormat
}
export default tenonStylesTransform
