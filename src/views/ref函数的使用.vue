<template>
<!--  ref 使用-->
  <div class="home">
    <p>
      {{ name }}
      {{ age }}
    </p>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {reactive, toRef, toRefs, ref} from 'vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  setup() {
    // ref函数，常用于简单数据类型定义为响应式数据说
    // 再修改值，获取值的时候，需要.value
    // 在模板中使用ref申明的响应式数据，可以省略.value

    const name = ref('lsh');
    const age = ref(1);

    const change = () => {
      age.value = 2;
    }

    return {name, age, change}

    // ref常用定义简单数据类型的响应式数据
    // 其实也可以定义复杂数据类型的响应式数据
    // 对于数据未之的情况下 ref 是最适用的--------例如后端返回的数据
    // const data = ref(null)
    // setTimeout(()=>{
    //   data.value = res.data
    // },1000)

    // 使用场景：
//
// 当你明确知道需要的是一个响应式数据 对象 那么就使用 reactive 即可
//     其他情况使用ref
//     #11-知识运用案

  },

}
</script>
