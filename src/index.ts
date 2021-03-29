import vueTemplateToTenon from './template'

// 获取 template script style
// export function getSource(vueString: string, type: string) {
//   let reg: RegExp = new RegExp(`<${type}[^>]*>`) // 匹配数据type
//   let matches = vueString.match(reg)
//   if (matches) {
//     let start = vueString.indexOf(matches[0]) + matches[0].length
//     let end = vueString.lastIndexOf(`</${type}>`)
//     return vueString.slice(start, end)
//   }
//   return ''
// }

/**
 *template 模板编译器
 *
 * @export
 * @param {string} vueString
 * @return {*}  {string}
 */
export default function tenonTemplate(vueString: string): string {
  // let template = getSource(vueString, 'template');
  // if (template) {
  let tenonTemplate = vueTemplateToTenon(vueString)
  console.log('tenonTemplate',tenonTemplate);
  return tenonTemplate
  // }
}

tenonTemplate(`
<template>
  <!-- <view class="app"> -->
  <p  v-if="a? a : c" @click="a" class="dd">{{ a+b}} World!</p>
</template>

<script>
export default {
  data () {
    return {
      greeting: "Hello"
    };
  }
};
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>

`)
