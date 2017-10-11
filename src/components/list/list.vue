<template>
<<<<<<< HEAD
	<transition name="slide">
    <div>
      <listAjb></listAjb>
      <listWZ></listWZ>
    </div>

  </transition>
=======
	<div>
    <listAjb></listAjb>
    <listWZ></listWZ>
  </div>
>>>>>>> 7bbc5bc10a7ee7e66aaa2aea0be8285cd19ebb00
</template>

<script>
  import ListAjb from 'components/list/listAjb'
  import ListWZ from 'components/list/listWZ'

  export default{
    components: {
      ListAjb,
      ListWZ
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
</style>
=======
>>>>>>> 7bbc5bc10a7ee7e66aaa2aea0be8285cd19ebb00
