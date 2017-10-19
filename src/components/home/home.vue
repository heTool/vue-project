<template>

  <transition name="slide">
    <div>
      <homeHeader></homeHeader>
      <home-content></home-content>
    </div>
  </transition>


</template>

<script>
  import homeHeader from 'components/home/homeHeader'
  import homeContent from 'components/home/homeContent'
  export default{
    components:{
      homeHeader,
      homeContent,
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


