<template>
  <!--  父传子 通过属性绑定的方式-->

  <div class="home">
    <p>
      父组件---{{name}}
    </p>
    <!--    <Son :name="name" @changeName="updateName"></Son>-->
    <Son></Son>
  </div>
</template>

<script>
// @ is an alias to /src
import {reactive, toRef, ref,inject, provide} from 'vue'
import Son from './Son.vue'
export default {
  name: 'HomeView',
  components: {
    Son
  },
  setup() {
    const name = ref('lsh');
    const updateName = (res)=>{
      console.log('res', res);
      name.value = res
    }

    provide('name', name);
    provide('updateName', updateName)
    return {name}
  }
}
</script>
