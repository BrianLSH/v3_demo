<template>
  <!--  父传子 通过属性绑定的方式-->

  <div class="home">
    <p>
      父组件--{{name}}
    </p>
    <p>
      <!--      <Son v-model="name"></Son>-->
      <!--      // 上面是 简写        $event 就是子组件传过来的值-->
      <!--      <Son :modelValue="name" @update:modelValue="name = $event"></Son>-->
      <Son :modelValue="name" @update:modelValue="showEvent($event)"></Son>
    </p>
  </div>
</template>

<script>
// @ is an alias to /src
import {reactive, toRef, ref,inject, provide} from 'vue'
import Son from './Son.vue'
export default {
  name: 'HomeView',
  components:{
    Son
  },
  setup(props, context) {
    const name = ref('lsh');
    const showEvent = (e)=>{
      console.log('e',e)
      name.value = e  // 不要忘记value
    }
    return {name,showEvent}
  }
}
</script>
