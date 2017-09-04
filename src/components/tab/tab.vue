<template>
	<div class="tab">
	    <router-link tag="div" class="tab-item" to="/recommend">
	      <span class="tab-link">推荐</span>
	    </router-link>
	    <router-link tag="div" class="tab-item" to="/list">
	      <span class="tab-link">列表</span>
	    </router-link>
	    <router-link tag="div" class="tab-item" to="/home">
	      <span class="tab-link">我的
	      </span>
	    </router-link>
  </div>
</template>

<script>
	export default{
		
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.tab
		position:fixed;
		left:0;
		bottom:0;
		width:100%;
		height:50px;
		background:#ececec;
		display:flex;
		justify-content: space-around;
		line-height:50px;
		.router-link-active
			.tab-link
				color: red;
	.tab-item
		color:#fff
	
</style>