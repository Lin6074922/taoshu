<template>
  <div id="app">
    <div id="header">
      <!-- 顶部导航 -->
      <div class="container d-flex justify-content-between">
        <div>
          <span >爱书的朋友，欢迎来淘书！</span>
          <span><a href="javascript:;">请登录</a></span>
          <span><a href="javascript:;" class="text-danger">免费注册</a></span>
        </div>

        <ul class="d-flex">
          <li><a href="javascript:;">首页</a></li>  
          <li><a href="javascript:;">我的淘书</a>
            <ul class="text-center">
              <li><a href="javascript:;">我的订单</a></li>
              <li><a href="javascript:;">我的地址</a></li>
            </ul>
          </li>  
          <li><i class="iconfont icongouwucheman"></i><a href="javascript:;">购物车<b class="text-danger">0</b>件</a></li>  
          <li><a href="javascript:;">收藏夹</a></li>  
          <li><a href="javascript:;">团购批发</a></li>  
          <li><a href="javascript:;">帮助中心</a></li>  
        </ul>          
      </div>

      <!-- 中部图片，只在首页显示 -->
      <div v-if="a=='/' || a=='/index'" class="d-flex ">
        <img src="../img/lb1.jpg" alt="">
      </div>
    </div>

    <!-- 底部导航-->
    <div class="navigation">
      <!-- logo和搜索 -->
      <div class="d-flex justify-content-center align-items-center">
        <!-- logo -->
        <img src="../img/taoshu-logo.jpg" alt="">
        <!-- 搜索 -->
        <div>
          <input type="text" placeholder="请输入希望搜索的书名或作者名">
          <button class="btn btn-danger">搜索</button>
        </div>
      </div>

      <!-- 分类导航 -->
      <div>
        <div class="container">
          <ul class="d-flex">
            <li><a href="javascript:;">全部图书分类</a></li>
            <li><a href="javascript:;">首页</a></li>
            <li><a href="javascript:;">阅读卡兑换区</a></li>
            <li><a href="javascript:;">特卖场</a></li>
            <li><a href="javascript:;">淘书汇</a></li>
            <li><a href="javascript:;">团购批发</a></li>
          </ul>
        </div>
      </div>
    </div>
    
<!-- 显示页面主体 -->
    <router-view></router-view>

    <!-- 底部 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      name:'App',
      a:'/'
    }
  },
  created() {
    // console.log(this.a)
    },
  watch: {
    $route(to){
      // 当前url地址
      // console.log(to.path);
      this.a=to.path
      this.$router.push({path:to.path})
      // console.log(from);
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
  font-size: .8rem;
}
#header ul{
  margin: 0;
}
#header ul li{
  padding: 0 0.5rem;
  margin:auto 0.5rem;
}
/* 我的淘书 */
#header ul li:nth-child(2){
  overflow: hidden;
  position: relative;
}
#header ul li:nth-child(2):hover{
  overflow: initial;
  background: #fff;
}
/* 我的订单、我的地址的框 */
#header ul li ul{
  position: absolute;
  left: 0;
  background: #fff;
  /* display: none; */
  width: 100%;
  
}
/* 我的订单、我的地址 */
#header ul li ul li{
  /* margin: 0 !important; */
  
  margin: 0.5rem 0 !important;

}
/* 购物车 */
#header ul li:nth-child(3){
  background:#fff;
}
#header ul li b{
  padding: 0 0.3rem;
}
/* 中部图片 */
#header>div:nth-child(2){
  padding:0.5rem 1.5rem
  }
#header>div>img{
  margin: auto;
  width: 50%;
  height: 30%;
}
/* 底部导航 */
.navigation{
  margin-top: 0.5rem;
}
.navigation>div>div{
  width: 40%;
}
/* 搜索 */
.navigation>div>div input{
  width: 80%;
  height: 1.8rem;
  margin: .8rem;
  /* box-shadow: 1px 1px 5px #333; */
  box-shadow:1px 1px 7px #333;;
  border: 5px solid #efefef;
  border-radius: 0.2rem;
}
.navigation>div>div button{
  /* width: 10%; */
  height: 2rem !important;
  align-items: center;
  color: #fff;
  padding: 0.1rem 1rem !important;
  margin-top: -0.2rem
}
/* 分类导航 */
.navigation>div:nth-child(2){
  background: #678876;
  margin-top: 1rem;  
}
.navigation>div:nth-child(2)>div{
  width: 100% !important;

}
.navigation>div:nth-child(2) li{
  padding: 0.5rem 1rem;
  margin:  0 0.5rem;
  border-bottom: 4px solid #678876;
}
.navigation>div:nth-child(2) li a{
  color: #fff !important;
}
.navigation>div:nth-child(2) li:hover{
  background: #546f60;
  border-bottom: 4px solid #f53;
}

</style>
