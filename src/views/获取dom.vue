<template>
  <div class="home">
    // v3 都是setup里面定义数据，return给模板使用
    <div ref="dom">获取dom</div>
    <p>
      {{ count }}
      <button @click="addCount">增加</button>
      <button @click="showDom">查看dom</button>
    </p>
    <ul>
      <li v-for="i in 4" :key="i" :ref="getDom">{{ i }}</li>
    </ul>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {reactive, toRef, toRefs, ref, onMounted, onUnmounted, computed, watch, onBeforeUpdate} from 'vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  setup() {
    // 1. 获取单个元素
    // 1.1 先定义一个空的响应式数据ref定义的
    // 1.2 setup中返回该数据，你想获取那个dom元素，在该元素上使用ref属性绑定该数据即可。
    const dom = ref(null);
    // console.log('dom', dom.value) // undefined
    onMounted(() => {
      console.log('dom', dom.value);
      console.log('domeList', domList)
    })


    // 试图更新dom重复添加  解决办法 更新前 重置数组
    const showDom = () => {
      console.log('domList', domList);
    }
    const count = ref(0);
    const addCount = () => {
      count.value++
    }

    onBeforeUpdate(() => {
      domList = []
    })


    // 遍历的元素：先定义一个空数组，定一个函数获取元素，返回给模版使用，通过ref绑定这个函数
    //
    // 有一个边界问题：组件更新的时候会重复的设置dom元素给数组：
    // const domList = [];  // 报错
    // 我们使用 const 定义了变量且存在初始值。 后面又给这个变量赋值，所以报错了。
// ES6 标准引入了新的关键字 const 来定义常量，const 与 let 都具有块级作用域：
// 使用 const 定义的常量，不能修改它的值，且定义的常量必须赋初值；
// let 定义的是变量，可以进行变量赋值操作，且不需要赋初值。

    let domList = [];
    const getDom = (el) => {
      console.log(el);
      domList.push(el)
    }
    return {dom, getDom, domList, count, addCount, showDom}
  }
}

</script>
