import { parse } from '@vue/compiler-sfc'
import generate from './template/generate'
import tenonScriptTransform from './script'
import tenonStylesTransform from './styles'
import tenonTemplateTransform from './template'


// vueToTenon 解析
function vueToTenon(vueString: string) {
  // 1. 编译ast
  let descriptor = parse(vueString).descriptor
  // 2. script 处理
  let script = tenonScriptTransform(descriptor.script);
  // 3. style 处理
  let style = tenonStylesTransform(descriptor.styles)
  // 4. template 处理
  let template = tenonTemplateTransform(descriptor.template);
  return {template, script , style }
}


/**
 *template 模板编译器
 *
 * @export
 * @param {string} vueString
 * @return {*}  {string}
 */
export default function tenonProgram(vueString: string): string {
  let { template, script, style } = vueToTenon(vueString);
  console.log(template + script + style);
  return template + script + style
}

tenonProgram(`
<template>
  <!-- <view class="app"> -->
  <p  v-if="a? a : c" @click.stop="a" class="dd">{{ a+b}} World!</p>
  <span v-show="ddd">{{a +b }}</span>
  <div class='a' style="background:red" :style="{color:a}"></div>
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

<style scoped lang='less'>
p {
  font-size: 2em;
  text-align: center;
}
</style>

`)
