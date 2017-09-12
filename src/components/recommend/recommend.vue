<template>
	<div>
    <TopSlider></TopSlider>
    <CountData></CountData>
    <NewUserTask></NewUserTask>
    <ProdAjb></ProdAjb>
    <ProdWz></ProdWz>
    <DownBar></DownBar>
	</div>
</template>

<script>
  import DownBar from 'components/recommend/DownBar'
  import TopSlider from 'components/recommend/TopSlider'
  import CountData from 'components/recommend/CountData'
  import NewUserTask from 'components/recommend/NewUserTask'
  import ProdAjb from 'components/recommend/ProdAjb'
  import ProdWz from 'components/recommend/ProdWz'

  export default{
    components: {
      DownBar,
      TopSlider,
      CountData,
      NewUserTask,
      ProdAjb,
      ProdWz
    }
  }
</script>

<style>
</style>
