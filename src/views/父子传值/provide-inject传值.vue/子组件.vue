<template>
  <div class="home">
    <p>子组件---injeect---{{ name }}</p>
    <p>
      <GrandSon />
    </p>
  </div>
</template>

<script>
// @ is an alias to /src
import {inject} from 'vue'
import GrandSon from './GrandSon.vue'
export default {
  name: 'Son',
  components: {
    GrandSon
  },
  setup() {  // 可以从里面结构出 emit 同上
    const name = inject('name');
    return {name} // 返回给模板使用
  }


}
</script>
