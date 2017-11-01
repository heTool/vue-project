<template>
  <div class="footer-nav col col-3" id="nav">
    <router-link tag="div" class="col-cell" to="/recommend"  v-on:click="activeEvent">
      <div><i class="icon iconfont icon-tuijian  text-h1"></i></div>
      <div class="text-normal-min padding-top-0_2_5rem">精品推荐</div>
    </router-link>
    <router-link tag="div" class="col-cell"   to="/list">
      <div><i class="icon iconfont icon-touzilicai  text-h1"></i></div>
      <div class="text-normal-min padding-top-0_2_5rem">理财列表</div>
    </router-link>
    <router-link tag="div" class="col-cell"   to="/home">
      <div><i class="icon iconfont icon-wode  text-h1"></i></div>
      <div class="text-normal-min padding-top-0_2_5rem">我的资产</div>
    </router-link>
  </div>
</template>

<script>
  export default{
    data: function () {
      return {
        active: false
      }
    },
    methods: {
      activeEvent: function (e) {
        alert('123')
      }
    }
  }
</script>

