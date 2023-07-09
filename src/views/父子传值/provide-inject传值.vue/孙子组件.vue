<template>
  <div class="home">
    <p>孙子组件---injeect---{{ name }}</p>
    <p>
      <button @click="updateName('li')">孙子组件inject改变name</button>
    </p>
  </div>
</template>

<script>
// @ is an alias to /src
import {inject} from 'vue'

export default {
  name: 'GrandSon',
  setup() {  // 可以从里面结构出 emit 同上
    const name = inject('name');
    const updateName = inject('updateName');
    return {name, updateName}
  }
}
</script>
