<template>
    <transition name="slide">
        <div>
          <listAjb ></listAjb>
          <listWZ @select="selectLi"></listWZ>
          <router-view></router-view>
        </div>
    </transition>
</template>

<script>
  import ListAjb from 'components/list/listAjb'
  import ListWZ from 'components/list/listWZ'

  export default{

    methods:{
      selectLi(productList){
          this.$router.push({
            path: `/list/${productList.projectId}`
          })
      }
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

