<template>
  <div class="loading">
    <img width="28" height="28" src="./loading.gif">
    <p class="desc">{{title}}</p>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    props: {
      title: {
        type: String,
        default: '正在加载...'
      }
    }
  }
</script>
<style  lang="less" >
  /*@import "~common/stylus/variable"*/

  .loading{
    width: 30%;
    height:11%;
    text-align: center;
    background:rgba(0,0,0,.7);
    padding-top:1rem;
    .desc{
      line-height: 30px;
      font-size: 14PX;
      color: #CCC
    }
  }

</style>
