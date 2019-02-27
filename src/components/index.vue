<template>
	<div class="back">
		<div class="container">
			<!-- 分类与轮播 -->
			<div id="classify" class="d-flex row">
				<!-- 左边分类 -->
				<div class="col-md-2">
					<ul class=" w-100">
						<li v-for="(item, index) in classify" :key="index" :class="num==index?'a-white':''" @mouseenter="white(index)" @mouseleave="black">
							<p >
									<a class="ml-2" href="javascript:;">{{item.name}}</a>
							</p>
							<div class="small ml-3 mr-3 mb-2">
								<a  href="javascript:;" v-for="(list,span) of item.children" :key="span">{{list.name}}</a>		
								<div :class="num==index?'d-block':'d-none'">

									<ul >

										<li class="d-flex" v-for="(ul,span) of item.children" :key="span">
											<p>{{ul.name}}</p>
											<ul class="d-flex flex-wrap">

												<li class="ml-2 mt-2 mb-1" v-for="(li,span) of ul.children" :key="span">
													<a href="javascript:;">{{li.name}}</a>
												</li>

											</ul>
										</li>

									</ul>

								</div>					
							</div>
						</li>
							
					</ul>
				</div>
				<!-- 中间轮播和推荐 -->
				<div class=" col-md-7">
					<!-- 轮播 -->
					<div>	

						<div id="demo" class=" carousel slide" >
							<!-- 指示符 -->
							<ul class="carousel-indicators">
								<li data-target="#demo" v-for="(item,index) of img" :key="index" :data-slide-to="item.ID-1" :class="item.ID==1?'active':'' "></li>
							</ul>
							<!-- 轮播图片 -->
							<div class="carousel-inner">
								<div class="carousel-item" v-for="(item,index) of img" :key="index" :id="index" :class="index==0?'active':''">
									<img :src="url+'/img/'+item.url" alt="">
								</div>
							</div>

							 <!-- 左右按钮 -->
                <a href="#demo" class="carousel-control-prev " data-slide="prev"><span class="carousel-control-prev-icon"></span></a>
                <a href="#demo" class="carousel-control-next " data-slide="next"><span class="carousel-control-next-icon"></span></a>

						</div>

					</div>
					<!-- 推荐 -->
					<div class="d-flex justify-content-between">
						<div class="w-100">
							<img class="w-100" src="http://127.0.0.1:3000/img/download.jpg" alt="">
							<p><a href="javascript:;">精选</a></p>
							<del>￥553</del><span>￥12</span>
						</div>
						<div class="w-100">
							<img class="w-100" src="http://127.0.0.1:3000/img/download.jpg" alt="">
							<p><a href="javascript:;">精选</a></p>
							<del>￥553</del><span>￥12</span>
						</div>
						<div class="w-100">
							<img class="w-100" src="http://127.0.0.1:3000/img/download.jpg" alt="">
							<p><a href="javascript:;">精选</a></p>
							<del>￥553</del><span>￥12</span>
						</div>
						<div class="w-100">
							<img class="w-100" src="http://127.0.0.1:3000/img/download.jpg" alt="">
							<p><a href="javascript:;">精选</a></p>
							<del>￥553</del><span>￥12</span>
						</div>
						
						
					</div>

				</div>
				<!-- 右边公告与排行 -->
				<div>

				</div>

			</div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
			return {
					classify:[],
					num:-1,
					img:[]
			}
	},
	methods: {
			white(index){
					this.num=index
			},
			black(){
					this.num=-1
			},
			getimg(level){
				var url=this.url+"/getimg?level="+level
				this.axios.get(url).then(result=>{
					this.img=result.data
					console.log(this.img)
				})
			}
	},
	created() {
		this.classIfy()
		this.getimg(0)
	},
}
</script>

<style>
/* 左边分类 */
#classify>div:first-child{
	border: 1px solid #999;
	padding: 0;
}
/* 详细分类 */
#classify>div:first-child>ul>li{
	border-bottom: 1px solid #999;
	position: relative;
}
#classify>div:first-child>ul>li:last-child{
	border: none;
}

#classify>div:first-child>ul>li:hover{
	background: #74a038;
	/* color: #fff !important; */
}
#classify>div:first-child>ul>li>p>a::after{
	display:inline-block;
	content: ">";
	position: absolute;
	right: 1rem;
}
#classify>div:first-child>ul>li>div>a{
	
	margin: 0.2rem 0.3rem;
	display: inline-block;
}
/* 鼠标移入详细分类后字体的颜色 */
.a-white>p>a,.a-white>div>a{
	color: #fff !important;
}
/* 最详细分类 */
#classify>div:first-child div div{
	position: absolute;
	background: #fff;
	z-index: 500;
	border: 2px solid #74a038;
	width: 30rem;
	left:  11.8rem;
	top: -0.1rem;
}
#classify>div:first-child div div p{
	width: 5rem;
	font-size: 1rem;
	color:#74a038;
	font-weight: 700;
	padding-left: 0.5rem;
}
#classify>div:first-child div div>ul>li{
	border-bottom: 1px solid #9999997d;
}
/* 中间轮播和推荐 */
#classify>div:nth-child(2){
	padding: 0;
}
#classify>div:nth-child(2)>div:first-child>div>div img{
	width: 100%;
	height: 22rem;
}
</style>
