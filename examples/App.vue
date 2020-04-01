<template>
  <div id="app">
    <h2>vueui组件封装</h2>
    <my-color-picker v-model="color" v-on:change="headleChangeColor"></my-color-picker>
    <my-button-group></my-button-group>
  </div>
</template>

<script>
import MyButtonGroup from './ButtonGroup.vue'
export default {
    name:'app',
    data () {
        return {
            color: '#f40'
        }
    },
    methods: {
        headleChangeColor () {
            console.log('颜色改变')
        }
    },
    components:{
      MyButtonGroup
    }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
