const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 配置虚拟机热更新
  devServer:{
    port:8081,
    open:true,
    hot:true
  },
  lintOnSave: false
})
