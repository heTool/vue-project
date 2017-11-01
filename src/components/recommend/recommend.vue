<template>
<<<<<<< HEAD

  <transition name="slide">
    <div>
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="itemBanner in banner">
          <img :src="itemBanner.img" width="100%">
        </mt-swipe-item>

      </mt-swipe>
      <div class="col col-2 text-center padding-top-1rem padding-bottom-1rem bg-white">
        <div class="col-cell border-right-solid">
          <div class="text-h1">{{recommendObj.totalAmount}}</div>
          <div class="text-normal text-gray padding-top-0_5rem">累计投资金额(元)</div>
        </div>
        <div class="col-cell">
          <div class="text-h1">1,276,121</div>
          <div class="text-normal text-gray padding-top-0_5rem">累计注册用户(人)</div>
        </div>
      </div>
      <div class="panel margin-top-0_5rem">
        <div class="panel-head text-center ph-new-user"><span>新手福利大派送</span></div>
        <div class="panel-body padding-left-1rem padding-right-1rem padding-bottom-0_5rem">
          <div class="col col-6 " v-for="item in itemList">
            <div class="col-cell text-center">
              <img :src="item.icon" width="60%">
            </div>
            <div class="col-cell col-cell-5 col col-8 border-bottom-solid padding-bottom-0_5rem">
              <div class="col-cell col-cell-6">
                <div class="">{{item.title}}</div>
                <div class="text-gray padding-top-0_5rem text-normal-min">{{item.remarks}}</div>
              </div>
              <router-link tag="div" class="col-cell col-cell-2 padding-top-0_5rem"  to="/register">
                <!--<a href="/auth/login" class="btn btn-red-border btn-corner btn-min" style="width:3.5rem;">去认证</a>-->
                <div class="btn btn-red-border btn-corner btn-min" style="width:3.5rem;">{{item.btnText}}</div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
        <div class="panel margin-top-0_5rem" v-for="pro in projectList" :class="pro.isHot? 'mark-hot-sell' : '' ">
          <div class="panel-body text-center padding-top-2rem padding-bottom-1rem">
            <div class="text-h1-normal">{{pro.name}}</div>
            <div class="text-h1-top text-red line-height-1_5">{{pro.yearRate}}%</div>
            <div class="text-normal text-gray">预期年化</div>
            <div class="text-normal text-gray padding-top-2rem">
              灵活存取
              |
              {{pro.keywords}}
              |
              <span class="text-black">100元</span>起投
            </div>
            <div class="padding-top-1rem padding-left-2rem padding-right-2rem margin-left-1rem margin-right-1rem">
              <a href="http://wap.renrenaijia.com/aijiabao/index" class="btn btn-red btn-circle btn-max">立即投资</a>
            </div>
          </div>
        </div>
      <div class="panel-footer text-gray border-top-solid text-center padding-top-1rem padding-bottom-1rem more-project">
        更多理财产品
      </div>
      <div class="download" v-show="click">
        <a href="javascript:;"><img src="http://cdn.renrenaijia.com/CDN/app/Public/images/kmjrAppV3/mobile/default/default_download.png" width="100%"></a>
        <span class="close close-download" @click="closeDownload">×</span>
      </div>
      <div class="loading-container" v-show="!itemList.length">
        <loading></loading>
      </div>
    </div>

  </transition>


=======
	<div>
    <TopSlider></TopSlider>
    <CountData></CountData>
    <NewUserTask></NewUserTask>
    <ProdAjb></ProdAjb>
    <ProdWz></ProdWz>
    <DownBar></DownBar>
	</div>
>>>>>>> 8fa1a95cf0db349345726b562f5ce0844e72b571
</template>

<script>
  import {getRecommendData} from '../../api/recommendApi'
<<<<<<< HEAD
  import Loading from 'components/loading/loading'
=======
  import NewUserTask from 'components/recommend/NewUserTask'
  import TopSlider from 'components/recommend/topSlider'
  import CountData from 'components/recommend/countData'
  import ProdAjb from 'components/recommend/prodAjb'
  import ProdWz from 'components/recommend/prodWz'
  import DownBar from 'components/recommend/downBar'

>>>>>>> 8fa1a95cf0db349345726b562f5ce0844e72b571
  export default{
    components: {
      NewUserTask,
      TopSlider,
      CountData,
      ProdAjb,
      ProdWz,
      DownBar
    },
    data () {
      return {
        recommendObj:{},
        itemList:[],
        projectList:[],
        banner:[],
        click:true,
      }
    },
    created(){
<<<<<<< HEAD
          getRecommendData().then((res)=>{
            this.recommendObj=res.data.data;
            this.itemList=res.data.data.recommend.data;
            this.projectList=res.data.data.project.data;
            this.banner=res.data.data.banner;
            console.log(res.data.data);
          })
    },
    methods:{
      closeDownload(){
        this.click=false;
      }
    },
    components: {
      Loading
=======
      getRecommendData().then((res)=>{
          this.recommendObj=res.data.data;
          console.log(res.data.data);
      })
>>>>>>> 8fa1a95cf0db349345726b562f5ce0844e72b571
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
  .col{padding:.5rem;}
  .loading-container{
    width:100%;
    height:100%;
    position: fixed;
    left:0;
    top:0;
    z-index:998;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .mint-swipe-items-wrap{
    height:8rem;
  }
</style>
=======
>>>>>>> 8fa1a95cf0db349345726b562f5ce0844e72b571
