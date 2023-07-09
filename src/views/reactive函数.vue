<template>
  <div class="home">
    {{ obj.name }}
    {{ obj.age }}
    <button @click="change">改变数据</button>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {reactive} from 'vue'
export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  setup() {
    // 通常是用来定义响应式对象数据
    // reactive是一个函数，它可以定义一个复杂数据类型，成为响应式数据。

    const obj = reactive({
      name: 'lsh',
      age: 18
    })
    const change = ()=>{
      obj.name = 'lqy'
      console.log('obj', obj);
    }
    return {obj, change}
  },
}
</script>
