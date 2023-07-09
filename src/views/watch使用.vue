<template>
  <div class="home">
    <p>
      <button @click="countP">count++</button>
    </p>
    <p>{{ count }}</p>
    <p></p>
    <p></p>
    <p></p>
    <p>
      <button @click="deepWatcher">深度监听</button>
    </p>
    <p>{{ obj.inner.inner2.name2 }}</p>
    <p></p>
    <p></p>
    <p></p>
    <p>{{ obj.inner.inner2.age2 }}</p>
    <p>{{ obj.age }}</p>
    <p></p>
    <p></p>
    <p></p>
    <p>
      <button @click="update">inner2改变</button>
    </p>
    <p>
      <button @click="updateAge">obj age改变</button>
    </p>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {reactive, toRef, toRefs, ref, onMounted, onUnmounted, computed, watch} from 'vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  setup() {
    const count = ref(0);
    const countP = () => {
      count.value++
    }

    let obj = reactive({age: 1, inner: {age1: 1, inner2: {age2: 2, name2: 'lsh'}}});

    // 监听reactive数据
    const update = () => {
      obj.inner.inner2.age2 = 20
    }
    watch(obj, () => {
      console.log('obj inner2变了');
    })

    // watch监听单个属性
    const updateAge = () => {
      obj.age = 10
    }
    // watch(()=>obj.age, ()=>{
    //   console.log('obj 的age改变了')
    // })

    // wacth 监听多个数据
    // watch([count, obj], ()=>{
    //   console.log('监听了多个')
    // })

    // 深度监听  比如监听 inner2， 里面的name age变化，不会触发监听
    //  但是 name age改变 会触发 对obj的监听，
    // 这时候我们就用到了深度监听
    const deepChange = () => {

    }
// 改变里层的inner2
    const deepWatcher = () => {
      obj.inner.inner2.name2 = 'lzy'
    }
    // 具体到inner还会触发监听
    // watch(obj.inner.inner2, ()=>{
    //   console.log('inner2 deepwatch 改变了')
    // })

    // 这种改变inner2 无法监听
    // 监听对象的某个属性需要将watch函数的第一个参数写为一个函数需要监听的属性作为返回值，可以正确的获得oldValue
    watch(() => obj.inner, () => {
      console.log('inner2 deepwatch 改变了')
    }, {deep: true, immediate: true})
    return {obj, update, updateAge, count, countP, deepWatcher}
  }
}

</script>
