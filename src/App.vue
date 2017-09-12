<template>
  <div id="app" class="container">
    <HeaderNormal></HeaderNormal>
    <router-view></router-view>
    <CopyRight></CopyRight>
    <NavNormal></NavNormal>
  </div>
</template>

<script>
	import HeaderNormal from 'components/comm/HeaderNormal'
	import NavNormal from 'components/comm/NavNormal'
	import CopyRight from 'components/comm/copyright'

	export default{
	  components: {CopyRight, NavNormal, HeaderNormal}
	}
</script>
