<template>
  <div>
    <p>{{ greeting }} World!</p>
    <div v-if="greeting"></div>
    <div v-else>ddd</div>
    <div @click="go"></div>
    <div v-on:click="test"></div>
    <div v-show="greeting"></div>
    <input v-modal="test" />
  </div>
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

<style scoped lang='less'>
p {
  font-size: 2em;
  text-align: center;
}
</style>
