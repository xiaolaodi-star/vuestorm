// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })
module.exports={
  pages:{
    index:{
      entry:"./src/module/index/main.js",
      template:"./src/module/index/index.html",
      filename:"index.html",
      title:"首页"
    }
  }
}
