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
  // let template = getSource(vueString, 'template');
  // if (template) {
    let tenonTemplate = vueTemplateToTenon(vueString);
    return "tenonTemplate"
  // }
  return ""
}



tenonTemplate(`
<template>
<div>
  <span class="cont" :style="{background:red}" :a="2323" @click="go" v-if="dd" v-show="dd" v-for="item of obj">ddd</span>
  <test-comp v-else="d"></test-comp>
</div>
</template>

<script>
import TestComp from "./components/test.vue";

export default {
created() {
  // hummer setTitle title
  console.log("");
},
data() {
  return {
    title: "test",
  };
},
components: {
  TestComp,
},
methods: {
  go() {
    location.href='www.baidu.com/a#hash?a=2'
  },

},
};
</script>
<style lang="less">
.cont {
background-color: red;
font-size: 15px;
image {
  width: 100%;
  height: 100%;
  color: red;
  .a{
    width: 100px;
  }
}

}
</style>

`)
