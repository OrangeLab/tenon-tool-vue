import tenonTemplate from '../src/index'
describe('tenonTemplate', () => {
  test('test', () => {
    let result = tenonTemplate(`
    <template>
    <div>
    测试
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
    let format = result.replace(/\s+/g, '')
    let respect = `<template ><view >测试
    <text class="cont" :style="{background:red}" :a="2323" v-on:tap="go" v-if="dd" v-show="dd" v-for="item of obj" >ddd</text>
    <test-comp v-else="d" ></test-comp>
  </view>
  </template>`.replace(/(\s)+/g, '')
    expect(format.length).toEqual(respect.length)
  })
})
