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


<script>
  export default{
    created: function () {
      return this.getDetailData()
    },
    data: function () {
      return {
        getDspData: []
      }
    },
    methods: {
      getDetailData: function () {
        var self = this
//        return self.$ajax.get('http://192.168.10.198:18080/api/index')
//            .then(function (response) {
//              self.getDspData = response.data
//            })
//            .catch(function (error) {
//              self.fectError = error
//            })
      }
    }
  }
</script>
