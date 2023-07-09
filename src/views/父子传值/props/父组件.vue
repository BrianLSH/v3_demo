<template>
  <!--  父传子 通过属性绑定的方式-->

  <div class="home">
    <p>
      父组件---{{name}}
    </p>
    <Son :name="name" @changeName="updateName"></Son>
  </div>
</template>

<script>
// @ is an alias to /src
import {reactive, toRef, ref} from 'vue'
import Son from './Son.vue'
export default {
  name: 'HomeView',
  components: {
    Son
  },
  setup() {
    const name = ref('lsh');
    const updateName = (res)=>{
      name.value = res;
    }
    return {name, updateName}
  }
}
</script>
