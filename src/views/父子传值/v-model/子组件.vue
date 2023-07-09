<template>
  <div class="home">
    <p>子组件-----v-model传参---{{ modelValue }}</p>
    <button @click="changeName">子组件改变名字</button>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Son',
  props: {
    modelValue: {
      type: String,
      default: 'no name'
    }
  },
  setup(props, {emit}) {
    const changeName = () => {
      emit('update:modelValue', 'li')
    }
    return {changeName}
  }
}
</script>
