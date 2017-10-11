<template>
<<<<<<< HEAD
  <transition name="slide">
    <div>
      <TopSlider></TopSlider>
      <CountData></CountData>
      <NewUserTask></NewUserTask>
      <ProdAjb></ProdAjb>
      <ProdWz></ProdWz>
      <DownBar></DownBar>
    </div>
  </transition>

=======
	<div>
    <TopSlider></TopSlider>
    <CountData></CountData>
    <NewUserTask></NewUserTask>
    <ProdAjb></ProdAjb>
    <ProdWz></ProdWz>
    <DownBar></DownBar>
	</div>
>>>>>>> 7bbc5bc10a7ee7e66aaa2aea0be8285cd19ebb00
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

<<<<<<< HEAD
<style lang="less">
  .slide-enter-active , .slide-leave-active{
    transition: all .3s ease;
  }
  .slide-enter, .slide-leave-to{
    transform: translate3d(100%,0,0);
  }
=======
<style>
>>>>>>> 7bbc5bc10a7ee7e66aaa2aea0be8285cd19ebb00
</style>
