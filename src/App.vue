<template>
  <div id="app">
    <div id="header" class="d-flex">
      <div>
        <div class="container">
          <span >爱书的朋友，欢迎来淘书！</span>
          <span><a href="javascript:;">请登录</a></span>
          <span><a href="javascript:;">免费注册</a></span>
        </div>
      </div>

    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      name:'App'  
    }
  },
}
</script>

<style>
*{
  margin: 0;padding: 0;
}
#header{
  background: #f5f5f5;
}
#header div:first-child{
  font-size: .8rem;
}
</style>
