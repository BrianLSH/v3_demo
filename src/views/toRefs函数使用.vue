<template>
  <div class="home">
    <p>
      原始的obj数据-----  obj.name {{obj.name}}<br>
      obj.age {{obj.age}}<br>
      age1 {{obj.inner.age1}}<br>
      age1 {{obj.inner.inner2.age2}}<br>
    </p>
    <p>toRefs ---copyObject的name ---结构的----- {{name}}</p> <br>
    <p>toRefs ---copyObject的age --结构的--- {{inner.age1}}</p><br>
    <p>toRefs ---copyObject的age --结构的--- {{inner.inner2.age2}}</p><br>
    <!--    <p>toRefs -&#45;&#45;copyObject的age1 &#45;&#45;结构的-&#45;&#45; {{age1}}</p><br>-->
    <!--    <p>toRefs -&#45;&#45;copyObject的age2 &#45;&#45;结构的-&#45;&#45; {{age2}}</p><br>-->
    <button @click="changeName">changeName</button><br>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {reactive, toRef, toRefs} from 'vue'
export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  setup() {
    // 1. 响应式数据对象
    const obj = reactive({
      name: 'lsh',
      age: 18,
      inner:{
        age1:1,
        inner2:{
          age2:2
        }
      }
    })
    // 2. 解构或者展开响应式数据对象
    // const {name,age} = obj
    // console.log(name,age)
    // const obj2 = {...obj}
    // console.log(obj2)
    // 以上方式导致数据就不是响应式数据了

    // copyObject 和 object互相影响
    // 要改变name 可以直接修改 copyObj 或者  修改源数据
    const copyObject = toRefs(obj);
    const changeName = ()=>{
      obj.name = 'lzy'+Math.random();
    }
    const age1 = toRef(obj, 'age1');
    const age2 = toRef(obj, 'age2');

    // const age = toRef(obj,'age');
    return {...copyObject, changeName, obj, age1,age2}
  },

  // 场景
  // toRefs是函数，转换响应式对象中所有属性为单独响应式数据，对象成为普通对象，并且值是关联的
// 使用场景：剥离响应式对象（解构|展开），想使用响应式对象中的多个或者所有属性做为响应式数据。
  // 深度响应的
}
</script>
