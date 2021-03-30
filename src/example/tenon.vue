<template>
  <view>
    <view>{{ greeting }} World! </view>
    <view v-if="greeting"> </view>
    <view v-else-if="!greeting">333 </view>
    <view v-else>ddd </view>
    <view v-on:tap="go"> </view>
    <view v-on:tap="test"> </view>
    <view v-show="greeting"> </view>
    <input v-modal="test" />
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
<style scoped lang="less">
p {
  font-size: 2em;
  text-align: center;
}
</style>
