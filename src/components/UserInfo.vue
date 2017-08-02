<template>
	<div class="content">
		<div class="header">
	    	<h2><img src="../assets/img/headimg.png" alt=""/></h2>
	        <div class="user-box">
	        	<router-link to="/user-login">登录</router-link>
	        	<router-link to="/user-reg">注册</router-link>
	        </div>
	        <ul class="clear">
	        	<li>
	            	<span>0</span>
	                <p>关注</p>
	            </li>
	            <li>
	            	<span>0</span>
	                <p class="end">粉丝</p>
	            </li>
	        </ul>
	    </div>
	    <div class="docList">
	    	<ul>
	            <li class="gk-text">
	            	<i></i>
	                <p>公开游记</p>
	                <b></b>
	                <span>0</span>
	            </li>
	            <li class="mm-text">
	            	<i></i>
	                <p>秘密游记</p>
	                <b></b>
	                <span>0</span>
	            </li>
	            <li class="cg-text">
	            	<i></i>
	                <p>已删除</p>
	                <b></b>
	                <span>0</span>
	            </li>
	            <li class="sc-text">
	            	<i></i>
	                <p>收藏夹</p>
	                <b></b>
	                <span>0</span>
	            </li>
	            <li class="my_cz">
	            	<i></i>
	                <p>设置</p>
	            </li>
	        </ul>
	    </div>
	</div>
</template>
<script>

</script>
<style scoped>
	@import '../assets/css/mydoc.css';
</style>