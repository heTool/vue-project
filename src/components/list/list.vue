<template>
    <transition name="slide">
        <div>
          <listAjb></listAjb>
          <listWZ></listWZ>
          <router-view></router-view>
        </div>
    </transition>
</template>

<script>
  import ListAjb from 'components/list/listAjb'
  import ListWZ from 'components/list/listWZ'

  export default{

    methods:{
<<<<<<< HEAD

=======
      selectLi(productList){
          this.$router.push({
            path: `/list/${productList.projectId}`
          })
      }
>>>>>>> 8fa1a95cf0db349345726b562f5ce0844e72b571
    },
    components: {
      ListAjb,
      ListWZ
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

