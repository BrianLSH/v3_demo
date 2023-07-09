<template>
  <div class="home">
    <p>
      obj.name {{obj.name}}
      obj.age {{obj.age}}
    </p>
    <p>name ----- {{name}}</p>
    <button @click="changeName">changeName</button>
    <button @click="changeInnerName">changeInnerName</button>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {reactive, toRef} from 'vue'
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
      age: 18,
      inner:{
        age:1
      }
    })
    const changeName = ()=>{
      obj.name = 'lzy'+Math.random();
    }
    //  ??????? 为改变
    const changeInnerName = ()=>{
      console.log('chenge')
      obj.inner.age = 1111;
    }
    // 2. 模板中只需要使用name数据
    // 注意：从响应式数据对象中解构出的属性数据，不再是响应式数据
    // let { name } = obj //不能直接解构，出来的是一个普通数据
    const name = toRef(obj,'name');
    const inner = toRef(obj,'inner');
    return {obj, name, changeName,changeInnerName,inner}
  },

  // 场景
  // toRef是函数，转换响应式对象中某个属性为单独响应式数据，并且值是关联的。
// 使用场景：有一个响应式对象数据，但是模版中只需要使用其中一项数据。
}
</script>
