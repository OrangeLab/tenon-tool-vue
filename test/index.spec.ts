import tenonTemplate  from '../src/index'
describe('tenonTemplate', () => {
  let result = test(tenonTemplate(`
  <template>
    <div>
      <span class="cont" :style="{background:red,color:red}" @click="go">ddd</span>
      <test-comp></test-comp>
    </div>
  </template>
  <script>
  import TestComp from "./components/test.vue";
  export default {
  };
  </script>
  <style lang="less">
    .cont {
    }
  </style>
`), () => {
    expect(result).toEqual(`<template><view ><text class="cont" :style="{background:red,color:red}" @tap="go" >ddd</text> <test-comp ></test-comp></view></template>`)
  })
})
