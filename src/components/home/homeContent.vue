<template>
  <div>
    <div class="panel">
      <!--提现/充值-->
      <div class="panel-body col col-2 text-center bg-white border-bottom-solid text-normal-max">
        <div class="col-cell border-right-solid box-sizing-border">
          <a class="btn-block">充值</a>
        </div>
        <div class="col-cell">
          <a href="http://wap.renrenaijia.com/balance/withdraw" class="btn-block">提现</a>
        </div>
      </div>
    </div>
    <div class="panel">
      <div class="list bg-white border-top-solid margin-top-0_5rem ">
        <div class="list-head border-bottom-solid" id="itemTitle">
          我的理财
        </div>
        <div class="list-body col-2 col margin-top-0_5rem ">
          <!----->
          <a class="col-cell col col-4 padding-top-1rem padding-bottom-1rem border-right-solid border-bottom-solid box-sizing-border" href="javascript:goAijiabao();">
            <div class="col-cell text-indent-1em">
              <i class="icon iconfont icon-ajb text-red text-h1 font-bold"></i>
            </div>
            <div class="col-cell col-cell-3">
              <div class="text-normal-min" id="aijiabaoTitle">爱家宝</div>
              <div class="text-tips text-gray line-height-2 padding-top-0_2_5rem" id="aijiabaoVal">灵活存取 按天计息</div>
            </div>
          </a>
          <!----->
          <a class="col-cell col col-4 padding-top-1rem padding-bottom-1rem border-right-solid border-bottom-solid box-sizing-border" href="javascript:goWeizhuan();">
            <div class="col-cell text-indent-1em">
              <i class="icon iconfont icon-wenzhuan text-red text-h1 font-bold"></i>
            </div>
            <div class="col-cell col-cell-3">
              <div class="text-normal-min" id="weizhuanTitle">稳赚计划</div>
              <div class="text-tips text-gray line-height-2 padding-top-0_2_5rem" id="weizhuanVal">定期理财 稳定收益</div>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="panel">
      <div class="list bg-white border-top-solid margin-top-0_5rem ">
        <div class="list-head border-bottom-solid" id="item2Title">
          更多
        </div>
        <div class="list-body col-2 col margin-top-0_5rem ">
          <!----->
          <a class="col-cell col col-4 padding-top-1rem padding-bottom-0_5rem home-cell border-right-solid border-bottom-solid box-sizing-border" href="javascript:goReward();">
            <div class="col-cell text-indent-1em">
              <i class="icon iconfont icon-reward text-red text-h1 font-bold"></i>
            </div>

            <div class="col-cell col-cell-3">
              <div class="text-normal-min" id="rewardTitle">我的奖励</div>
              <div class="text-tips text-gray line-height-1_2 padding-right-0_5rem padding-top-0_2_5rem" id="rewardVal">理财红包 体验金</div>
            </div>
          </a>
          <!----->
          <a class="col-cell col col-4 padding-top-1rem padding-bottom-0_5rem home-cell border-right-solid border-bottom-solid box-sizing-border" href="javascript:goFund();">
            <div class="col-cell text-indent-1em">
              <i class="icon iconfont icon-financing1 text-red text-h1 font-bold"></i>
            </div>

            <div class="col-cell col-cell-3">
              <div class="text-normal-min" id="fundTitle">资金明细</div>
              <div class="text-tips text-gray line-height-1_2 padding-right-0_5rem padding-top-0_2_5rem" id="fundVal">理财记录 一目了然</div>
            </div>
          </a>
          <!----->
          <a class="col-cell col col-4 padding-top-1rem padding-bottom-0_5rem home-cell border-right-solid border-bottom-solid box-sizing-border" href="javascript:goPoint();">
            <div class="col-cell text-indent-1em">
              <i class="icon iconfont icon-integral text-red text-h1 font-bold"></i>
            </div>
            <div class="col-cell col-cell-3">
              <div class="text-normal-min" id="pointTitle">我的积分</div>
              <div class="text-tips text-gray line-height-1_2 padding-right-0_5rem padding-top-0_2_5rem" id="pointVal">积分兑换 好礼不断</div>
            </div>
          </a>
          <!----->
          <a class="col-cell col col-4 padding-top-1rem padding-bottom-0_5rem home-cell border-right-solid border-bottom-solid box-sizing-border" href="javascript:goDuobao();">
            <div class="col-cell text-indent-1em">
              <i class="icon iconfont icon-cowry text-red text-h1 font-bold"></i>
            </div>
            <div class="col-cell col-cell-3">
              <div class="text-normal-min" id="duobaoTitle">我的夺宝</div>
              <div class="text-tips text-gray line-height-1_2 padding-right-0_5rem padding-top-0_2_5rem" id="duobaoVal">花一块钱 收获希望</div>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="panel margin-top-0_5rem">
      <div class="list-cell-arrow-right" onclick="javascript:goSetup();">
        <div class="col col-2">
          <div class="col-cell">个人设置</div>
          <div class="col-cell text-gray text-normal-min text-right">收货地址，绑卡等</div>
        </div>
      </div>
      <div class="list-cell-arrow-right" ui-dialog="service-rule"><!--onclick="javascript:goFaq();"-->
        <div class="col col-2">
          <div class="col-cell">帮助与反馈</div>
          <div class="col-cell text-gray text-normal-min text-right">你想了解的问题都在这里</div>
        </div>
      </div>
      <div class="list-cell-arrow-right" onclick="javascript:goMore();">
        <div class="col col-2">
          <div class="col-cell">更多</div>
          <div class="col-cell text-gray text-normal-min text-right">关于我们，风险测试</div>
        </div>
      </div>
      <!--<div class="list-cell-arrow-right" onclick="javascript:goBankcard();">
          <div class="col col-2">
              <div class="col-cell">银行卡管理</div>
              <div class="col-cell text-gray text-normal-min text-right">银行卡绑定</div>
          </div>
      </div>-->
    </div>
  </div>
</template>
<script>
  import {getHomeData} from '../../api/listApi'
  export default{
    data(){
      return{
        homeData:[]
      }
    },
    created(){
      this._getData();
    },
    methods: {
      _getData(){
        getHomeData().then((res)=>{
          console.log(res.data);
        })
      }
    }
  }
</script>
