<template>
	<div class="nav">
		<ul>
			<router-link to="/home" tag="li" active-class="active">
				<a href="javascript:;">首页</a>
			</router-link>	    	
	    	<router-link to="/follow" tag="li" active-class="active">
	    		<a href="javascript:;">游记</a>
	    	</router-link>
	    	<router-link to="/column" tag="li" active-class="active">
	    		<a href="javascript:;">攻略</a>
	    	</router-link>
	    </ul>
	</div>
</template>
<script>
	export default{
		
	}
</script>