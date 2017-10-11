<template>
<<<<<<< HEAD
  <div id="app">
    <HeaderNormal></HeaderNormal>
    <router-view></router-view>
=======
  <div id="app" class="container">
    <HeaderNormal></HeaderNormal>
    <router-view></router-view>
    <CopyRight></CopyRight>
>>>>>>> 7bbc5bc10a7ee7e66aaa2aea0be8285cd19ebb00
    <NavNormal></NavNormal>
  </div>
</template>

<script>
	import HeaderNormal from 'components/comm/HeaderNormal'
	import NavNormal from 'components/comm/NavNormal'
<<<<<<< HEAD

	export default{
	  components: { NavNormal, HeaderNormal}
=======
	import CopyRight from 'components/comm/copyright'

	export default{
	  components: {CopyRight, NavNormal, HeaderNormal}
>>>>>>> 7bbc5bc10a7ee7e66aaa2aea0be8285cd19ebb00
	}
</script>
