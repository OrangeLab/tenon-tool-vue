import tenonProgram from '../index'
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
