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
      <div class="classify">
        <div class="container">
          <ul class="d-flex">
            <li>
              <a href="javascript:;">全部图书分类</a>
              <!-- 总大类 -->
              <div>
                <ul class="text-center ">

                  <li v-for="(item,span) of classify" :key="span" @mouseenter="block(span)" @mouseleave="none">
                    <a href="javascript:;" >{{item.name}}</a>
                    <!-- 详细分类 -->
                    <ul :class="num==span?'d-block':'d-none'">

                      <!-- 最详细分类 -->
                      <li class="d-flex" v-for="(list,span) of item.children" :key="span" >
                        <p>{{list.name}}</p>
                          <ul class="d-flex ">
                          <li v-for="(li,span) of list.children" :key="span"><a href="javascript:;">{{li.name}}</a></li>
                        </ul>
                      </li>
                  
                    </ul>
                  </li>
                  
                </ul>
              </div>
            </li>
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

    <!-- 尾部 -->
    <div class="footer">
      <!-- 分类导航 -->
      <div class="d-flex justify-content-center">
        <div class="text-left" v-for="(item,span) of footclass" :key="span">
          <h6 class="m-0 text-center"><a href="javascrpt:;">{{item.name}}</a></h6>
          
          <ul >
            <li class="ml-3" v-for="(list,span) of item.children" :key="span"><a href="javascript::">{{list.name}}</a></li>
          </ul>
        </div>

        <div class="text-left small">
          <h6 class="text-center">服务热线</h6>
          <ul>
            <li class="m-0">服务时间：周一至周六</li>
            <li>9:00-18:00</li>
            <li class="text-danger">400-XXXX-184</li>
          </ul>
        </div>

      </div>
      <!-- 合作单位 -->
      <div class="container d-flex">
        <h5>合作单位：</h5>
        <ul class="d-flex flex-wrap text-center">
          <li class="small mt-1" v-for="item of cooperation" :key="item.id"><a href="javascript">{{item.cooname}}</a></li>
        </ul>
      </div>
      <!-- 相关事宜 -->
      <div class="d-flex">
        <ul class="d-flex justify-content-center">
          <li><a href="javascript:;">关于淘书</a></li>
          <li><a href="javascript:;">诚征英才</a></li>
          <li><a href="javascript:;">节目清单</a></li>
          <li><a href="javascript:;">网站联盟</a></li>
          <li><a href="javascript:;">免责条款</a></li>
          <li><a href="javascript:;">联系我们</a></li>
          <li><a href="javascript:;">数据API</a></li>
          <li><a href="javascript:;">友情连接</a></li>
        </ul>
        <ul class="d-flex justify-content-center">
          <li>Copyright © 2012-2015 淘书网 Taoshu.com 版权所有</li>
          <li><a href="javascript:;">京ICP备12020895号</a> 出版物经营许可证 新出发京零字第朝110069号</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name:'App',
      a:'/',
      classify:[],
      footclass:[],
      cooperation:[],
      num:-1,
      url:"http://127.0.0.1:3000"
    }
  },
  methods: {
    block(span){
      // console.log(span)
      this.num=span
    },
    none(){
      this.num=-1
    },
    getFootclass(){
      var url=this.url+"/getfootclass"
      this.axios.get(url).then(result=>{
        this.footclass=result.data
        // console.log(result);
        
      })
    },
    getCooperation(){
      var url=this.url+'/getcoo'
      this.axios.get(url).then(result=>{
        // console.log(result.data)
        this.cooperation=result.data
      })
    }
  },
  created() {
    // console.log(this.a)
    this.classIfy()
    this.getFootclass()
    this.getCooperation()
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
/* 头部 */
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
.classify{
  background: #678876;
  margin-top: 1rem;  
}
.classify>div{
  width: 100% !important;
}
.classify>div>ul>li{
  padding: 0.5rem 1rem;
  margin:  0 0.5rem;
  border-bottom: 4px solid #678876;
}
.classify>div>ul>li>a{
  color: #fff !important;
}
.classify>div>ul>li:hover{
  background: #546f60 ;
  border-bottom: 4px solid #f53;
}
/* 总大类 */
.classify>div>ul>li:first-child{
  position: relative;
  overflow: hidden;
}
.classify>div>ul>li:first-child:hover{
  overflow: initial
}
.classify>div>ul>li>div{
  position: absolute; 
  width: 100%;
  left: 0;
  top: 2.8rem;
  z-index: 100;
}
.classify>div>ul>li>div>ul{
  width: 100%;
  background: #e7f8ef;
  padding: 0.5rem 0;  
}
.classify>div>ul>li>div>ul>li{
  margin: 0.5rem 0;
  padding: 0.5rem 0;
  font-size: 0.8rem;
  color: #333;
  position: relative;
  /* position: relative; */
}
.classify>div>ul>li>div>ul>li:hover{
  background: #fff;
}
/* 详细分类 */
.classify>div>ul>li>div>ul>li>ul{
  position: absolute;
  z-index: 100;
  background: #fff;
  left: 7.9rem ;
  top: -.5rem;
  /* padding-top: -1rem; */
  border: 2px solid #546f60;
  /* background: #c0f; */
  width: 40rem;
  /* flex-wrap: wrap; */
}
/* 最详细分类 */
.classify>div>ul>li>div>ul>li>ul>li{
  top: 1rem;
  margin: 0.2rem 1rem;
  padding: 0.5rem 0;
  border-bottom: 1px solid #999;
  
}
.classify>div>ul>li>div>ul>li>ul>li:last-child{
  border-bottom: none;
}
.classify>div>ul>li>div>ul>li>ul>li>p{
  margin-right:5rem;
  margin-bottom: 0;
  width: 4rem;
  color: #f60!important;
  /* font-size: 1rem; */
}

.classify>div>ul>li>div>ul>li>ul>li>ul{
  flex-wrap: wrap;
  /* justify-content: center */
}
.classify>div>ul>li>div>ul>li>ul>li>ul>li{
  margin: 0.3rem .8rem ;
  color: #333;
}
/* 尾部 */
.footer{
  background: #f5f5f5;
}
.footer .text-left{
  width: 11rem;
  padding: 0 1.5rem;
  font-size: 0.6rem;
}

.footer .text-left h6{
 padding: 0.5rem 0;
 border-bottom: 1px solid #9999997d;
}
.footer .text-left h6 a{
 color: #333 !important;

}
.footer .text-left ul li{
  margin: 0.5rem 0;
}
/* 合作单位 */
.footer .container{
  padding: 0.5rem 0.3rem;
  border: 1px solid #9999997d;
}
.footer .container h5{
  color: #678876;
  font-weight: 600;
  width: 10rem;
}
.footer .container ul{
  width: 80rem;
}
.footer .container li{
  margin:0 0.8rem; 
  text-align: center;
}
.footer>div:nth-child(3){
  padding: 2rem 0;
  flex-direction: column;
  justify-content: center;
}
.footer>div:nth-child(3) li{
  border-right: 1px solid #999;
  margin: 0.5rem 0;
  font-size: 0.5rem;
  padding: 0 1rem;

}
.footer>div:nth-child(3) li:last-child{
  border: none;
}
</style>
