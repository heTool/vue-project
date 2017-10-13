<template>

  <transition name="slide">
    <div>
      <homeHeader></homeHeader>
      <homePanel></homePanel>
    </div>
  </transition>


</template>

<script>
  import homeHeader from 'components/home/homeHeader'
  import homePanel from 'components/home/homePanel'
  export default{
    components:{
      homeHeader,
      homePanel
    }
  }
</script>

<style lang="less">
  .slide-enter-active , .slide-leave-active{
    transition: all .3s ease;
  }
  .slide-enter, .slide-leave-to{
    transform: translate3d(100%,0,0);
  }
</style>


