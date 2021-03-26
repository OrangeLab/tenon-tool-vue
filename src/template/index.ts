// import compiler from 'vue-template-compiler'
import { parse, compileTemplate } from '@vue/compiler-sfc'
// import generate from './generate'
// import translate from './translate'

function vueTemplateToTenon(template: string) {
  // let compileResult = compiler.compile(template)
  // let ast = translate(compileResult.ast as compiler.ASTElement)
  // const tenonTemplateString = generate(ast)
  console.log('======================================')
  let b = parse(`
  <template>
  <div>
    <span class="cont" :style="{background:red,color:red}" style="background:red" @click="go">ddd</span>
    <test-comp></test-comp>
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

  `).descriptor.template?.ast
  console.log(b)
  // return `<template>${tenonTemplateString}</template>`
}

export default vueTemplateToTenon
