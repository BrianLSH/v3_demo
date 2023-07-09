<template>
  <div class="home">
    <p>子组件--props 直接接受{{name}}</p>
    <button @click="change">子组件改变父组件名字</button>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Son',
  // props 接受 直接使用  无需加工
  props:{
    name: {
      type: String, // 不加引号
      default: 'zzzz'
    }
  },
  //第一种是  setup 接受props 直接使用
  // setup(props) {
  //   console.log('props.name',props.name)
  // }


// 接受的数据需要加工  再传给父组件
  // setup(props, context) {/   context 提供一个上下文环境
  setup(props, {emit}) {  // 可以从里面结构出 emit 同上
    const change = ()=>{
      console.log('change')
      emit('changeName', 'hsl')
    }
    return {change}
  }





}
</script>
