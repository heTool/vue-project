<template>

  <div class="container">
    <!--header-->
    <header class="header">
      <nav class="nav">
        <div class="nav-left"><a href="http://wap.renrenaijia.com/project/index" class="icon icon-left iconfont text-normal-max line-height-1_5 text-gray"></a></div>
        <div class="nav-head"><a href="javascript:;"><img src="http://cdn.renrenaijia.com/CDN/app/Public/images/mobile/logo/logo-head-pack.png" width="120"></a></div>
        <div class="nav-right"></div>
      </nav>
    </header>
    <!--header-->
    <!---content-->
    <div class="body body-wz" style="padding-bottom:3.6rem;">
      <div class="panel panel-red">
        <!---info-->
        <div class="panel-body text-center padding-top-2rem padding-bottom-1rem">
          <div class="text-normal text-gray-light">今日预期年化</div>
          <div class="text-h1-max line-height-1_5 profit-val" data-profit="0.063">{{listDetail.yearrate}}%</div>
          <div class="col col-3 padding-top-2rem">
            <div class="col-cell">
              <div class="text-normal-max">{{listDetail.minInvestMoney}}元</div>
              <div class="text-normal-min padding-top-0_5rem text-gray-light">起投金额</div>
            </div>
            <div class="col-cell">
              <div class="text-normal-max">{{listDetail.repayWay}}</div>
              <div class="text-normal-min padding-top-0_5rem text-gray-light">当日起息</div>
            </div>
            <div class="col-cell">
              <div class="text-normal-max">{{listDetail.collectEndInterval | filterA}}元</div>
              <div class="text-normal-min padding-top-0_5rem text-gray-light">本轮剩余额度</div>
            </div>
          </div>
        </div>
      </div>
      <div class="panel">
        <div class=" border-bottom-solid">
          <div class="border-bottom-solid text-normal-min col col-8" onclick="javascript:window.location.href=''">
            <div class="col-cell col-cell-7 padding-top-0_5rem padding-bottom-0_5rem">
              <div class="padding-left-1rem text-no-warp padding-right-1rem">
                <i class="icon iconfont icon-notice text-orange text-normal-min"></i>&nbsp;&nbsp;新用户仅限购买一次，限额5万。                    </div>
            </div>
            <div class="col-cell text-gray text-center">
              <div class="border-left-solid padding-top-0_5rem padding-bottom-0_5rem">详情</div>
            </div>
          </div>
          <!--<div class="col col-2">
            <div class="col-cell">收益估算<span class="text-red"></span></div>
            <div class="col-cell text-right">
              <a href="http://wap.renrenaijia.com/aijiabao/higher_yield" class="pop pop-min pop-circle-red pop-circle-white"> <i class="icon iconfont icon-wenzhuan text-tips"></i> 获取更高收益</a>
            </div>
          </div>-->
          <div class="panel-body">
            <div class="padding-top-1rem padding-left-1rem padding-bottom-1rem text-normal-min">
              已募集<span class="text-red">180,800</span>
            </div>

            <div class="ui-slider margin-left-1rem margin-right-1rem">
              <div class="slider-bar sbr-36 sbr-least-10">
                <div class="bar-mark">36%</div><!--5万-->
                <div class="bar-mark-least">最低募集额</div>                    </div>
            </div>

            <div class="margin-left-1rem margin-right-1rem margin-top-1rem padding-top-0_5rem padding-bottom-0_5rem border-top-solid text-normal-min">
              <font color="#333333">项目成立的次日开始计息</font> <i class="icon iconfont icon-help text-normal-min text-gray" ui-dialog="explain"></i>
            </div>
          </div>
        </div>
        <!---info-->
        <!--<div class="panel-body border-bottom-solid padding-bottom-1rem">
          <div class="ui-range">
            <div class="ui-range-tit text-center text-gray-dark">
              投资<span class="text-red text-normal-max r-amount">5000</span>元，预计每日可赚<span class="text-red text-normal-max r-profit">0.86</span>元
            </div>
            <div class="ui-range-plus">
              <input type="range" max="10000" min="100" step="1" value="5000" style="background: -webkit-linear-gradient(left, rgb(255, 140, 92), rgb(255, 64, 64) 50%, rgb(255, 218, 204) 50%, rgb(255, 218, 204));">
            </div>
            <div class="ui-range-mark">
              <div class="mark-cell">100</div>
              <div class="mark-cell">2500</div>
              <div class="mark-cell">5000</div>
              <div class="mark-cell">7500</div>
              <div class="mark-cell">10000</div>
            </div>
          </div>
        </div>-->
      </div>
      <div class="list margin-top-0_5rem">
        <a class="list-cell-arrow-right" href="javascript:;" ui-dialog="service-rule">项目详情</a>

        <a class="list-cell-arrow-right" href="javascript:;" ui-dialog="service-rule2">
          <div class="col col-2">
            <div class="col-cell">安全保障</div>
            <div class="col-cell text-right text-normal-min">恒丰银行资金存管</div>
          </div>
        </a>

        <a class="list-cell-arrow-right" href="javascript:;" onclick="ranking()">
          <div class="col col-2">
            <div class="col-cell">本期已有<span class="text-red">14</span>人加入</div>
            <div class="col-cell text-right text-normal-min text-red">&nbsp;</div>                </div>
        </a>
      </div>
      <!--list--->
      <!--<div class="panel margin-top-0_5rem border-top-solid border-bottom-solid">
        <div class="panel-head border-bottom-solid">
          交易规则            </div>
        <div class="panel-body padding-1rem">
          <table cellpadding="0" cellspacing="0" width="100%" class="text-normal-min line-height-1_5">
            <tbody><tr>
              <td class="text-gray-dark padding-0_5rem va-top line-height-1_5" width="25%">费用说明</td>
              <td width="75%" class="padding-top-0_5rem padding-bottom-0_5rem line-height-1_5">加入费用0%，赎回费用0%</td>
            </tr><tr>
              <td class="text-gray-dark padding-0_5rem va-top line-height-1_5" width="25%">赎回额度</td>
              <td width="75%" class="padding-top-0_5rem padding-bottom-0_5rem line-height-1_5">每日可赎回2次，单日最高赎回金额5万</td>
            </tr><tr>
              <td class="text-gray-dark padding-0_5rem va-top line-height-1_5" width="25%">收益规则</td>
              <td width="75%" class="padding-top-0_5rem padding-bottom-0_5rem line-height-1_5">每天24:00对持有的本金计息，次日结息</td>
            </tr>                </tbody></table>
        </div>
      </div>
      <div class="panel margin-top-0_5rem border-top-solid border-bottom-solid">
        <div class="panel-head border-bottom-solid">
          什么是爱家宝？
        </div>
        <div class="panel-body padding-1rem">
          <p class="text-normal-min text-gray-dark line-height-1_5">
            “爱家宝”是人人爱家金融推出的随存随取的投资服务计划。
            出借人通过加入“爱家宝”服务计划将其资金授权人人爱家金融出借给借款人，
            以投资于人人爱家金融网站公布的融资项目。人人爱家金融采用分散的智能投标、
            回款再出借的方式，提高资金的流动率和利用率，以期增加出借人收益。
          </p>
        </div>
      </div>-->
      <!--<div class="list margin-top-0_5rem">
          <a class="list-cell-arrow-right" href="#">
              查看更多
          </a>
      </div>-->
    </div>

    <!--<div class="footer footer-bottom">
      <div class="text-normal-min line-height-2">
        &lt;!&ndash;本期剩余额度<span class="text-red">50000</span>元，尾单可得20元红包&ndash;&gt;
        &lt;!&ndash;每天10点，14点，18点准时开抢&ndash;&gt;
        账户资金由恒丰银行存管
      </div>
      &lt;!&ndash;btn-&ndash;&gt;
      <div class="btn-control btn-ajb">
        <a href="http://wap.renrenaijia.com/aijiabao/invest?ajbid=11269" class="btn btn-red btn-circle">立即转入</a>			        </div>
    </div>-->
    <div class="footer footer-bottom">
      <div class="text-normal-min line-height-2">
        <font color="333333">每万元收益</font><font color="red">49.31</font><font color="333333">元</font>+<font color="red">150</font><font color="333333">积分</font>        </div>
      <div class="btn-control">
        <a href="http://wap.renrenaijia.com/project/invest?id=12135" class="btn btn-red btn-circle">立即投资</a>
      </div>
    </div>


  </div>

</template>
<script>
  import {getListChildren} from '../../api/listApi'
  //import axios from 'axios'
  export default{
    data(){
      return{
        listDetail:{}
      }
    },
    created(){
      getListChildren(this.$route.params.id).then((res)=>{
        console.log(res.data.data);
        this.listDetail=res.data.data;
      })
    },
    methods:{

    },
    filters:{
      filterA:function (num) {
        let number = new Number(num);
        let str = number.toString();
        //正则匹配
        let newStr = str.replace(/\d{1,3}(?=(\d{3})+$)/g,function(s){
          return s+','
        });
        return newStr;
      }
    }
  }
</script>
<style lang="less">
  .container{
    padding-top:0;
    .padding-top-2rem {
      padding-top: 4rem;
    }
  }
</style>
