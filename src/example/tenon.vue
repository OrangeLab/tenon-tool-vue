<template>
  <view>
    <view>{{ greeting }} World!</view>
    <view v-if="greeting"></view>
    <view v-esle="undefined">ddd</view>
    <view v-on:tap="go"></view>
    <view v-on:tap="test"></view>
    <view v-show="greeting"></view>
  </view>
</template>
<script>
export default {
  data() {
    return {
      greeting: 'Hello',
    }
  },
  methods: {
    go() {
      console.log('go')
    },
    test() {
      console.log('test')
    },
  },
}
</script>
<style scoped="true">
p {
  font-size: 2em;
  text-align: center;
}
</style>
