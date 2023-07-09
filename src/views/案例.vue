<template>
<!-- 体会组合API的写法，尝试组织可读性高的代码-->

  <div class="home">
    <div>坐标</div>
    <div>x: {{x}}</div>
    <div>y: {{y}}</div>
    <hr>
    <div>{{count}} <button @click="add">累加1</button></div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /srcs
import HelloWorld from '@/components/HelloWorld.vue'
import {reactive, toRef, toRefs, ref, onMounted,onUnmounted} from 'vue'
const useMouse = () => {
  // 1. 记录鼠标坐标
  // 1.1 申明一个响应式数据，他是一个对象，包含x y
  const mouse = reactive({
    x: 0,
    y: 0
  })
  // 1.3 修改响应式数据
  const move = (e) => {
    mouse.x = e.pageX
    mouse.y = e.pageY
  }
  // 1.2 等dom渲染完毕。去监听事件
  onMounted(()=>{
    document.addEventListener('mousemove', move)
  })
  // 1.4 组件消耗，删除事件
  onUnmounted(()=>{
    document.removeEventListener('mousemove', move)
  })

  return mouse
}
export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  setup() {
    const mouse = useMouse()

    // 2. 数字累加
    const count = ref(0)
    const add = () => {
      count.value ++
    }
    return { ...toRefs(mouse), count, add }
  },

}
</script>
