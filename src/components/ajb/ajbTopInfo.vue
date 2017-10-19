<template>
<div class="panel panel-red" id="ajb-detail">
  <!---info-->
  <div class="panel-body text-center padding-top-2rem padding-bottom-1rem" >
    <div class="text-normal text-gray-light">今日预期年化</div>
    <div class="text-h1-max line-height-1_5 profit-val" data-profit="0.0621">
      6.21% {{tasks}}
    </div>
    <div class="col col-3 padding-top-2rem">
      <div class="col-cell">
        <div class="text-normal-max">100元</div>
        <div class="text-normal-min padding-top-0_5rem text-gray-light">起投金额</div>
      </div>
      <div class="col-cell">
        <div class="text-normal-max">灵活存取</div>
        <div class="text-normal-min padding-top-0_5rem text-gray-light">当日起息</div>
      </div>
      <div class="col-cell">
        <div class="text-normal-max">1,277,516元</div>
        <div class="text-normal-min padding-top-0_5rem text-gray-light">本轮剩余额度</div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  /* eslint-disable indent,quotes */

  export default {
      name: "AjbTopInfo",
      data: function (data) {
        return { tasks: '4578' }
      },
      methods: {
        getData: function () {
          this.$http.get('http://rap.renrenaijia.com/mockjsdata/11/api/aijiabao/aijiabaoIndex')
            .then(function (response) {
              console.log(response)
              this.$set('tasks', response.data)
            })
            .catch(function (response) {
              console.log(response)
            })
        }
      }
  }
</script>
