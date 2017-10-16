<template>

  <transition name="slide">
    <div>
      <div class="fast-slide" id="fast-slide" data-img="0">
        <div class="fast-slide-img" style="width: 377px;">
          <a href="http://wap.renrenaijia.com/cunguan.html"><img src="http://cdn.renrenaijia.com/media/banner/2017/05/5907153e19620.png" width="100%" style="width: 377px;"></a>            </div>
        <div class="fast-slide-step">
        </div>
        <div class="fast-slide-loading" style="display: none;">正在载入图片</div>
      </div>
      <div class="col col-2 text-center padding-top-1rem padding-bottom-1rem bg-white">
        <div class="col-cell border-right-solid">
          <div class="text-h1">9,521,610,916</div>
          <div class="text-normal text-gray padding-top-0_5rem">累计投资金额(元)</div>
        </div>
        <div class="col-cell">
          <div class="text-h1">1,276,121</div>
          <div class="text-normal text-gray padding-top-0_5rem">累计注册用户(人)</div>
        </div>
      </div>
      <NewUserTask></NewUserTask>
      <template>
        <div class="panel margin-top-0_5rem">
          <div class="panel-body text-center padding-top-2rem padding-bottom-1rem">
            <div class="text-h1-normal">灵活·爱家宝</div>
            <div class="text-h1-top text-red line-height-1_5">5%-7%</div>
            <div class="text-normal text-gray">预期年化</div>
            <div class="text-normal text-gray padding-top-2rem">
              灵活存取
              |
              当日起息
              |
              <span class="text-black">100元</span>起投
            </div>
            <div class="padding-top-1rem padding-left-2rem padding-right-2rem margin-left-1rem margin-right-1rem">
              <a href="http://wap.renrenaijia.com/aijiabao/index" class="btn btn-red btn-circle btn-max">立即投资</a>
            </div>
          </div>
        </div>
      </template>

      <div class="panel margin-top-0_5rem mark-hot-sell">
        <div class="panel-body text-center padding-top-2rem padding-bottom-1rem">
          <div class="text-h1-normal">稳赚一月M8115</div>
          <div class="text-h1-top text-red line-height-1_5">10.8%</div>
          <div class="text-normal text-gray">预期年化</div>
          <div class="text-normal text-gray padding-top-2rem">
            项目周期35天
            |
            200元现金奖励                    |                    <span class="text-black">100元</span>起投
          </div>
          <div class="padding-top-1rem padding-left-2rem padding-right-2rem margin-left-1rem margin-right-1rem">
            <a href="http://wap.renrenaijia.com/project/detail?id=9352" class="btn btn-red btn-circle btn-max">立即投资</a>
          </div>
        </div>

        <div class="panel-footer text-gray border-top-solid text-center padding-top-1rem padding-bottom-1rem more-project">
          更多理财产品
        </div>
      </div>
      <div class="download">
        <a href="javascript:;"><img src="http://cdn.renrenaijia.com/CDN/app/Public/images/kmjrAppV3/mobile/default/default_download.png" width="100%"></a>
        <span class="close close-download">×</span>
      </div>
    </div>
  </transition>


</template>

<script>
  import {getRecommendData} from '../../api/recommendApi'
  import NewUserTask from 'components/recommend/NewUserTask'
  export default{
    data(){
      return {
        recommendObj:{}
      }
    },
    created(){
      getRecommendData().then((res)=>{
          this. recommendObj=res.data.data;
          console.log(res.data.data);
      })
    },
    components: {
      NewUserTask
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
