<template>
	<div class="content">
		<Slider></Slider>
	    <div class="newsList">
	    	<ul>
	            <li v-for="item in arrList">
	            	<img :src="item.image" alt="" />
                	<router-link :to="'/article/'+item.id">
	                	<h2>{{item.title}}</h2>
	                    <p>{{item.detail}}</p>
	                </router-link>	                	
	            </li>
	        </ul>
	    </div>
	</div>
</template>
<script>
	import Slider from './Slider.vue'
	export default {
		data(){
			return{
				arrList:[]
			}
		},	
		components:{
			Slider
		},
		mounted(){
			//获取数据
			this.fetchData();
		},
		methods:{
			fetchData(){
				var _this=this;
				this.$http.get('src/data/index.data').then(function (res) {
					_this.arrList=res.data
				}).catch(function (err) {
					console.log(err);
				});
				
			}
		}
	}
</script>