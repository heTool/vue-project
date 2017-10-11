<template>
  <div id="app">
    <HeaderNormal></HeaderNormal>
    <router-view></router-view>
    <NavNormal></NavNormal>
  </div>
</template>

<script>
	import HeaderNormal from 'components/comm/HeaderNormal'
	import NavNormal from 'components/comm/NavNormal'

	export default{
	  components: { NavNormal, HeaderNormal}
	}
</script>
